from flask import Flask, render_template, Response
import cv2


class VideoCamera(object):
    def __init__(self):
        # 通过opencv获取实时视频流
        self.video = cv2.VideoCapture(0)

    def __del__(self):
        self.video.release()

    def get_frame(self):
        success, image = self.video.read()
        # 因为opencv读取的图片并非jpeg格式，因此要用motion JPEG模式需要先将图片转码成jpg格式图片
        w = int(self.video.get(3))
        h = int(self.video.get(4))
        in_w = int(w * 2)
        in_h = int(h * 2)
        # Resize frame of video to 1/4 size for faster face recognition processing
        small_frame = cv2.resize(image, (in_w, in_h), fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
        frame2 = small_frame[int(in_w / 3):int((in_w / 3 * 2) + 100), int(in_h / 3):int((in_h / 3 * 2) + 100)]

        ret, jpeg = cv2.imencode('.jpg', frame2)
        return jpeg.tobytes()


app = Flask(__name__)


@app.route('/')  # 主页
def index():
    # jinja2模板，具体格式保存在index.html文件中
    return render_template('app_magnifier.html')


def gen(camera):
    while True:
        frame = camera.get_frame()
        # 使用generator函数输出视频流， 每次请求输出的content类型是image/jpeg
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


@app.route('/video_feed')  # 这个地址返回视频流响应
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port = 5000)