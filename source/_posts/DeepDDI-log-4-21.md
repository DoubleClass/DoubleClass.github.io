---
title: DeepDDI log 4.21
date: 2020-04-21 09:39:24
tags:
- DeepDDI
---

## 记录

run_deep_ddi.py 在改变 feature、使用combination时，正负比例为：

880：2000

![image-20200421100047921](https://i.loli.net/2020/04/21/ZRmuALK1SeJx5fF.png)

最后结果：

![image-20200421094159965](https://i.loli.net/2020/04/21/rWtMKcZhA2geOLC.png)

这说明：combination可以用，改变feature也没事

注：使用的unit_list是：python run_deep_ddi.py -unit_list 12 24 4 2 3 -gpu_id 0



## 2

在 run_deep_ddi 使用 dataidx 进行metadata，发现完全不可使用，结果如下：

![image-20200421145952727](https://i.loli.net/2020/04/21/Y5HAISjR4ldaGeZ.png)

下面再重新用上面的案例试一次，看是否回来

## 3

使用上面又进行一次测试之后发现结果如下：

![image-20200421152157491](https://i.loli.net/2020/04/21/6doAtwcDmkvHeM8.png)

所以很明确，就是数据出现了问题，但是数据我就是这么做的啊，会出现什么问题？？？

## 4

于是，我再次尝试使用dataidx，把pos 和 neg 都固定在 880，2000，与之前保持完全一致，看看会发生什么？

![image-20200421154350453](https://i.loli.net/2020/04/21/TtLsMiZUhV7uYGK.png)

结果是，效果依旧很差，那么难道这真的证明我的数据有问题吗？

问题到底出现在哪？？？？

啊！！！！！

啊！！！！！

啊！！！！！

啊！！！！！



## 5

再一次考虑，难道是：

```python
pos_data_idx = random.sample(pos_data_idx, 880)
```

这里的`random.sample` 不对劲？？

那我改成

`pos_data_idx = pos_data_idx[:880]` 总该行了吧？

我靠，这样真的可以？？？？

![image-20200421163123288](https://i.loli.net/2020/04/21/EFkK7ox2vUAyOnh.png)

这是为什么？？？

为什么？？？？？？

## 6

那我再试一下大一点的数据集，还是差3倍，pos：neg=1000：3000

![image-20200421163402044](https://i.loli.net/2020/04/21/QvZDM7UlaGtsq6T.png)

结果仍然还不错，是

![image-20200421164017224](https://i.loli.net/2020/04/21/dsbQKAtf3rNOq1Y.png)

## 7

OK，那下一步可以继续之前的工作了，把数据保存下来以备使用。

记录中间，在使用1000个数据、1_1数据比例时，出现了下面这个现象，记录一下：

![image-20200421233351169](https://i.loli.net/2020/04/21/1nzIGfJ7328C9S5.png)