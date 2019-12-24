import cv2 as cv
import numpy as np

COLORS = {   # Colors to be Used
        "BLUE" : (250, 100, 20),
        "GREEN" : (60, 255, 0),
        "RED" : (0, 0, 255),
}

def draw_lanes(img, lines):
    lanes = np.zeros_like(img)  # "img" must have the same color space as original
    if lines is not None:
        for line in lines:
            x1, y1, x2, y2 = line.reshape(4)
            x1, y1, x2, y2 = map(int,  [x1, y1, x2, y2])  # cv.line requires int inputs
            cv.line(lanes, (x1, y1), (x2, y2), COLORS["RED"], 2)
    return lanes



img = cv.imread("timetable.png")
canny = cv.Canny(img, 50, 200)  # TODO: Play with this threshold
lines = cv.HoughLinesP(canny, 2, np.pi/180, 30, None, minLineLength=50, maxLineGap=30)

lane = draw_lanes(img, lines)
detection = cv.addWeighted(img, 0.8, lane, 1, 0)


cv.imshow("Image", detection)
k = cv.waitKey(0)
