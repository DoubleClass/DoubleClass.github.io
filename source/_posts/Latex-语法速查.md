---
title: Latex 语法速查
date: 2020-04-28 19:44:31
tags:
- 周记
- 速查
---

## 图片

### 单个图片

```late
\begin{figure}[htbp]
  \centering
  \includegraphics[width=\textwidth]{figure/1.png}
  \caption{运行结果与PPT不一致}
\end{figure}
```

### 并排图片

```latex
\begin{figure}[htbp]
\centering %图片全局居中
%并排几个图，就要写几个minipage
\begin{minipage}[b]{0.45\textwidth} %所有minipage宽度之和要小于1，否则会自动变成竖排
\centering %图片局部居中
\includegraphics[width=0.8\textwidth]{figure/2.png} %此时的图片宽度比例是相对于这个minipage的，不是全局
\caption{name 1}
\label{Fig.1}
\end{minipage}
\begin{minipage}[b]{0.45\textwidth} %所有minipage宽度之和要小于1，否则会自动变成竖排
\centering %图片局部居中
\includegraphics[width=0.8\textwidth]{figure/3.png}%此时的图片宽度比例是相对于这个minipage的，不是全局
\caption{name 2}
\label{Fig.2}
\end{minipage}
\end{figure}
```

## 插入代码

```latex
\begin{lstlisting}[language = C++, numbers=left, 
         numberstyle=\tiny,keywordstyle=\color{blue!70},
         commentstyle=\color{red!50!green!50!blue!50},frame=shadowbox,
         rulesepcolor=\color{red!20!green!20!blue!20},basicstyle=\ttfamily]
void openmp_sort_static(int thread_count) {
    init_unbalanced();
    QueryPerformanceFrequency((LARGE_INTEGER *)&freq);
    QueryPerformanceCounter((LARGE_INTEGER *)&head);
    long long tail;
    # pragma omp parallel for num_threads(thread_count) schedule(static, 100)
    for (int i = 0; i < ARR_NUM; i++) {
        sort(arr[i].begin(), arr[i].end());
    }

    QueryPerformanceCounter((LARGE_INTEGER*)&tail);
    printf("openmp sort(static) : %lfms.\n", (tail - head) * 1000.0/freq);
}
	
	
  \end{lstlisting}
```

## 插入表格

```latex
\begin{table}[htbp]
    \small
    \centering
    \caption{燃油效率与汽⻋价格}
    \begin{tabular}{lcc}
    \toprule
    & (1)        & (2)         \\
    \midrule
    燃油效率      & -238.90*** & -49.51 \\
    & (53.08)   & (86.16) \\
    汽车重量      &            & 1.75*** \\
    &           & (0.641)     \\
    常数项       & 11,253***  & 1,946 \\
    & (1,171)   & (3,597)     \\
    观测数       & 74         & 74 \\
    $R^2$       & 0.220      & 0.293 \\
    \bottomrule
    \multicolumn{3}{l}{\scriptsize 括号内为标准误} \\
    \multicolumn{3}{l}{\scriptsize *** p<0.01, ** p<0.05, * p<0.1} \\
    \end{tabular}%
    \label{tab:reg}%
\end{table}%
```



