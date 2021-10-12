---
title: 'python 数据处理速查 '
date: 2020-05-02 20:26:13
tags:
- 机器学习
---

## 读取csv

### 方法一

```python
reader_cross_table = csv.reader(open(data_idx_two_sides, 'r'))
```

这样后面可以直接用中括号引用

```python
rows = [item for item in reader_cross_table]
rows = rows[1:len(rows)]
name2bank = {item[1].lower(): item[0] for item in rows}
```

### 方法二

用pandas，也很简单：

```python
stich_names = pd.read_csv(stich_id2name_path, sep='\t', header=-1)
```

引用的话，要使用loc：

```python
stich2drugbank = {}
for i in range(stich_names.shape[0]):
    if stich_names.loc[i, 1].strip('\'') in name2bank:
        stich2drugbank[stich_names.loc[i, 0].strip('\'')] = name2bank[stich_names.loc[i, 1].strip('\'')]
```

## 写入csv

这个更简单：

```python
f_decagon = open('decagon_relations.csv', 'w')
decagon_writer = csv.writer(f_decagon)

...
decagon_writer.writerows([item for item in decagon_relations])
```



## 判断字典是否包含某个key：

```python
if reader_decagon.loc[i][0] in stich2drugbank
```

