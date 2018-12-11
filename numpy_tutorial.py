import numpy as np
import matplotlib.pyplot as plt
# from scipy import linalg

# a = np.array([[1, 2, 3],
#               [30, 4, 6],
#               [7, 8, 9]])
#
#
# if(np.linalg.det(a) != 0):
#     i = a.dot(np.linalg.inv(a))
#     i[i<0.1] = 0
#     print(i)
# print(np.linalg.det(a))


# Compute the x and y coordinates for points on a sine curve
x = np.arange(0, 3 * np.pi, 0.1)
y_sinx = np.sin(x)
y_cosx = np.cos(x)

# Plot the points using matplotlib
plt.plot(x, y_sinx)
plt.plot(x, y_cosx)
plt.xlabel("Input(Radians)")
plt.ylabel("Output")
plt.title("Sine & Cosine")
plt.legend(['Sine', 'Cosine'])

plt.show()  # You must call plt.show() to make graphics appear.
