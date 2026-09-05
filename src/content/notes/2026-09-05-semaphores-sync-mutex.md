---
title: 用信号量实现同步互斥
description: 用信号量机制解决一些问题。
type: note
attachments:
  - label: Word 原文
    file: /uploads/semaphores-sync-mutex.docx
grade: year-2
semester: fall
course: operating-systems
date: 2026-09-05
order: 1
published: true
---
信号量机制实现进程互斥

划定临界区（eg.对临界资源打印机的访问就应该放在临界区）

设置互斥信号量mutex=1

在进入区P(mutex)-申请资源

在退出区V(mutex)-释放资源

![](/uploads/semaphores-sync-mutex-fig2.png)

Tips:信号量mutex表示进入临界区的名额

对于上述代码的理解：当p2想要访问临界区时，由于mutex=0，p2被阻塞，所以当前只有p1可以访问临界资源，进而实现互斥。

注意：为什么要这么做？-因为进程具有异步性，各并发执行的进程以各自独立、不可预知的速度推进。➡ OS需提供同步机制，解决异步性的影响。

![](/uploads/semaphores-sync-mutex-fig3.png)

一般情况下，直接用semaphore mutex=1 的表示就可以，不需要再把其数据结构表示写出

不过如果写出来semaphore默认有block的功能，不需要盲等

注意：

对不同的临界资源需要设置不同的互斥信号量

P、V必须成对出现。

缺少P就不能保证临界资源互斥访问；缺少V会导致资源永不被释放，等待进程永不被唤醒。

信号量机制实现进程同步

进程同步：要让各并发进程有序推进。

我们需要有序的进程同步：eg.

![](/uploads/semaphores-sync-mutex-fig4.png)
![](/uploads/semaphores-sync-mutex-fig5.png)

分析什么地方需要实现“同步关系”，即保证“一前一后”

设置同步信号量S，初始为0

在前操作之前，执行V(S)

在后操作之前，执行P(S)

前V后P

~ 欲使代码4在代码2之后执行
![](/uploads/semaphores-sync-mutex-fig6.png)
