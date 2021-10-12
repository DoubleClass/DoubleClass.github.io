---
title: grabcut 剖析 part1
date: 2020-08-17 09:40:32
tags:
---

## 函数用法

### imread

**作用**：读取图片

**函数原型**：

```cpp
Mat imread( const string& filename, int flags = 1 )
```

flag标志位作用：

**flags = -1**：imread按解码得到的方式读入图像  // =   CV_LOAD_IMAGE_UNCHANGED

**flags = 0**：imread按单通道的方式读入图像，即灰白图像  // =  CV_LOAD_IMAGE_GRAYSCALE

**flags = 1**：imread按三通道方式读入图像，即彩色图像  // =  CV_LOAD_IMAGE_COLOR

**例子**：

```cpp
string test1 = "E:\\cppProjects\\cv_projects\\opencv_test\\Lark20200709-200446.jpeg";
Mat image = imread(test1, 1);
```

这样读出来就是彩色的图片

- []