---
title: DeepDDI log 4.24
date: 2020-04-24 20:25:46
tags:
- DeepDDI
---

## 添加验证集

```python
def DataSplit(dataX, dataY, ratio=0.90):
    size = dataX.shape[0]
    slice_whole = range(size)
    slice_train = random.sample(slice_whole, int(ratio * size))
    slice_val = [i for i in slice_whole if i not in slice_train]
    X_train = dataX[slice_train, :]
    X_val = dataX[slice_val, :]

    y_train = dataY[slice_train]
    y_val = dataY[slice_val]
    return X_train, X_val, y_train, y_val
```



## 使用1_3测试：

### AUC

![image-20200425092307666](https://i.loli.net/2020/04/25/bNqLmIrsTeVczYZ.png)

### AUPRC

![image-20200425093242190](https://i.loli.net/2020/04/25/US1VbGCdDpcztAO.png)

不是很理想

![image-20200425093259606](https://i.loli.net/2020/04/25/FGcLIUBvHDRehaQ.png)

为什么LR的效果这么好啊啊啊啊啊啊啊啊啊啊

## 加一层卷积层

```python
x = Conv2D(filters=10, kernel_size=(1, 5), strides=(1, 1), activation='relu', padding='valid')(x)
x = MaxPooling2D(pool_size=(1, 2))(x)
```

![image-20200425094910954](https://i.loli.net/2020/04/25/pKcIeUEYoVhzGwy.png)

比刚才提高了0.005



## 不使用Globe Max Pooling

![image-20200425095325879](https://i.loli.net/2020/04/25/FcbKhSPMCxiJ4p8.png)

看来不加还是不行

## 最后改为relu

```python
638    output = Dense(1, activation='relu', name='output')(x)
```

和上面完全一样



## 去掉一个drop out

```python
636    x = Dropout(0.2)(x)
```

又跌倒 0.9357了，不行，还是加回去

## 在刚刚 concatenate地方，把激活函数，从 tanh 改为 relu

```python
614     x = Dense(300, activation='relu')(x)
```

跌到0.92了，完蛋，还是改回来



## 增加一层 conv

```python
x = Conv2D(filters=10, kernel_size=(1, 5), strides=(1, 1), activation='relu', padding='valid')(x)
```

又回到0.91了，我太难了



## 在刚刚 concatenate的地方，Dense改成400



0.93333

还是改回来

## 试试之前的，看还有94吗

还好，又回来了

0.9444444444444444



今天，就先到这里吧，太惨了