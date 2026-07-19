---
title: Final Review
description: 具体内容依据老师发的复习PPT，该内容仅供参考~
attachments:
  - label: PDF
    file: /uploads/final-review.pdf
grade: year-2
semester: spring
course: computer-networks
date: 2026-07-19
order: 1
type: note
published: true
---
#### 一、MULTIPLE CHOICE *15 ( 30 MARKS）
1. <font style="background-color:#FBDE28;">Analog / Digital data </font>

> Difference
>

_<u>Electromagnetic signal </u>_

**Analog signal** intensity varies smoothly with no breaks. -- <font style="color:#2F4BDA;">Continuous</font>

**Digital signal **intensity maintains a constant level and then suddenly changes to another level.  -- <font style="color:#2F4BDA;">Discrete</font>

            <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745294832626-7e523c91-f860-4e46-b294-e436828304da.png)

---

2. Analog / Digital  Transmission

Analog **data** -- <font style="color:#2F4BDA;">codec 解码器</font> -> Digital bit stream 

Digital **data** --<font style="color:#2F4BDA;"> modem 调制解调器</font> -> Analog **signal**

Achieve longer distance, 

+ **<font style="background-color:#FBDE28;">Amplifiers</font>**<font style="background-color:#FBDE28;"> that boost the energy in the </font>**<font style="color:#2F4BDA;background-color:#FBDE28;">signal</font>**<font style="background-color:#FBDE28;"> are used for </font>**<font style="background-color:#FBDE28;">analog transmission</font>**<font style="background-color:#FBDE28;"> (M)</font>
+ **Repeaters** are used for **digital** transmission. A repeater receives the digital signal, <font style="color:#2F4BDA;">recovers</font> the pattern of 1s and 0s, and retransmit a new signal.



_<u>Analog transmission</u>__：_Transmit analog signals - Analog data / digital data

+ With amplifiers cascaded 串联 to achieve long distances, the signal becomes more and more distorted 变形

模拟传输适用于传输模拟信号。级联放大器增强信号的同时会_增强噪声_，_对模拟数据的损伤较数字数据小_。

+ Analog data (voice)
+ Digital data (binary data)



_<u>Digital transmission</u>_：Transmit digital signals.

+ A digital signal can be transmitted only a limited distance because of attenuation, noise, and other impairments 损伤 endanger the integrity of the data. 

中继器可复原失真衰减的数字信号，中继器也可用于**携带数字数据的模拟信号**

+ The repeater recovers the digital data from the analog signal and generates a new, clean analog signal. Thus noise is not cumulative.

---

3. **<font style="background-color:#FBDE28;">Half Duplex (HD)</font>**

Both stations transmit, but only one at a time, The entire capacity of the channel can be used for each direction.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745296630782-b0cd1e67-3d44-471e-8073-f1ff9c1003df.png)

**Used in cases** -- _no need for communication in both directions at the same time. _

---

4. **<font style="background-color:#FBDE28;">The network core --> TWO switching </font>**

> You need to understand the difference between the two switching
>

_Mesh of interconnected routers_

_**<u>Packet-switching:</u>**__ _Hosts break **application-layer** messages into packets

+ Forward packets from one router to the next, across links on path from source to destination
+ Each packet transmitted at _<font style="color:#2F4BDA;">full</font>_ link capacity - 每个数据包以链路全容量传输
    - So,  Sending a packet of L bits over a link with transmission rate R bits/sec, then the **time to transmit **the packet is **L/R** seconds. 
+ Resource Not reserved. - 在分组交换网络中，这些资源不保留；会话的消息按需使用资源，因此，可能必须等待（即排队）才能访问通信链路。

_**<u>Circuit-switching</u>**_：

+ End-end resources allocated to, reserved for "call" between source and destination
+ No-sharing - If not used by call -> idle
+ Traditional telephone networks
+ Resources reserved

| **Packet** | **Circuit** |
| :---: | :---: |
| Internet | traditional telephone |
| No call setup/ termination phase | Call setup/termination phase |
| share | circuit allocated to each user ( no exclusive 独有的) |


+  **Call setup phase** (to establish the circuit) 
+ **Call termination phase** (to release the circuit)  

---

5. **<font style="background-color:#FBDE28;">Encapsulation</font>**<font style="background-color:#FBDE28;"> -封装 </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745297907234-0657804b-05c5-4fa7-9f14-e412224b2e4a.png)

---

6. **<font style="background-color:#FBDE28;">HTTP connections</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745461515269-64bdb148-6024-41ef-9db6-ae7ae9800401.png)

---

7. HTTP overview

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745461612162-facfc7fa-360a-4544-9ddb-4ab3986a569c.png)

**TCP** provides a **reliable** data transfer service **to** **HTTP**. => INTACT! 完好无损 

**<font style="color:#DF2A3F;">HTTP uses TCP</font>** as its underlying transport protocol.  

The HTTP client first initiates a TCP connection with the server. Once the connection is established, 浏览器和服务器进程通过它们的套接字接口访问TCP。  

服务器将请求的文件发送给客户机，而不存储有关客户机的任何状态信息。因此HTTP被称为**无状态协议**。

---

8. Multiplexing/ Demultiplexing

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745462134607-7c210190-be4c-4513-81dd-9a822b32be62.png)

Socket：

+ Act as door, network <=> Process
+ A host can have one or more sockets. 
+ A **host** has **<font style="color:#DF2A3F;">a unique IP address (32-bit for IPV4)</font>**
+ Each socket has a **<font style="color:#DF2A3F;">port number (16-bit)</font>** at a host , ranging from 0 to 65535. 
    - The port numbers ranging from <u>0 to 1023</u> are called <u>well-known </u>port numbers and are restricted, which are reserved for use by well-known application protocols such as <u>HTTP (port number 80) and FTP (port number 21)</u>. (M)

---

9. **<font style="background-color:#FBDE28;">How to decide the sequence No.</font>**

      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745464828082-eb11c527-fdec-4dd3-ae4c-853437fb0b5b.png)

        <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745464642282-fd8b8b15-6181-4982-bef1-2a59e0a5f34c.png)

+ TCP views data as **<font style="color:#DF2A3F;">ordered stream of bytes.</font>**
+ Sequence number is the number of the first data in the segment in unit of bytes. **Sequence numbers are over bytes, not segments.**

---

10. **<font style="background-color:#FBDE28;">IPv6 Header</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745466227484-9822c6f3-434b-48c3-8e75-ccfd926a624b.png)

---

11. **<font style="background-color:#FBDE28;">Routing algorithm classification</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745466399378-606567c3-174e-42a0-bd05-d5667b989f5c.png)

+ **Global routing algorithms** - All routers have complete information about the node connectivity (i.e., network topology), and link cost information.
    -  Global routing algorithms use these **complete, global information **to compute the least-cost path between a source router to a destination router.“
    - "link state" algorithm <=> a global routing algorithm 
+ **Decentralized routing algorithms** - At the beginning, each router knows the cost of its <u>directly connected links.</u> Using the **iterative calculation **and** information exchange with the neighboring nodes**  
    - A router gradually obtains the least-cost path to a destination router.
    - "Distance vector" algorithm <=> decentralized routing algorithm

---

12. **<font style="background-color:#FBDE28;">IP address of subnet </font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745468861359-cff5e6b3-b733-4c63-bdec-2b58dc6db156.png)

---

#### 二、BIG QUESTION *9
1. Transmission impairments 损伤
+ Analog -> impairment(Random modification) ->Degradation 恶化 of signal quality
+ Digital -> Bit error

**Most significant impairments are ?**

+ <font style="background-color:#FBDE28;">Attenuation 衰减 </font>
+ <font style="background-color:#FBDE28;">Distortion 变形，失真</font>
+ <font style="background-color:#FBDE28;">Noise</font>

---

2. Packet delay : Four sources

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745458520943-61c7bf47-aefe-4aca-9ac1-e036d10fb3df.png)

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745459046003-efc0a327-2302-4ab5-be47-a27476f0a5ce.png)

+ **传播 Propagation delay** : 信号在<u>物理媒介</u>（如光纤）上传播所需的时间，与**<font style="color:#DF2A3F;">物理距离和传播速度</font>**相关
+ **传输 Transmission delay : **将数据包<u>推送到链路上</u>所需的时间，与**<font style="color:#DF2A3F;">数据包大小与链路带宽</font>**相关
+ **排队延迟 queueing delay**：数据包在<u>路由器或交换机</u>中**<font style="color:#DF2A3F;">排队等待</font>**传输所需时间
+ **处理延迟 Processinng delay**：The time a router / switch takes to **<u><font style="color:#DF2A3F;">examine</font></u>**<u> the packet </u>**<u><font style="color:#DF2A3F;">header</font></u>**<u> and </u>**<u><font style="color:#DF2A3F;">decide</font></u>**<u> how to </u>**<u><font style="color:#DF2A3F;">forward</font></u>**<u> it.</u>

---

+ **<font style="background-color:#FBDE28;">be able to caculate:</font>**<font style="background-color:#FBDE28;"> </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745459104688-04879b58-db2e-448d-b51f-be9d075c15ac.png)

+ **<font style="background-color:#FBDE28;">be able to explain:</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745459201961-26e8a930-f1a9-44a1-befd-5a5c47dde19f.png)

---

3. **<font style="background-color:#FBDE28;">Packet loss (What is?)</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745298045721-1030524c-2113-4357-b3ce-20340bb8871f.png)

Queue (aka buffer) preceding link in buffer has finite capacity

**Packet** **arriving** to<u> full queue</u> **dropped** (aka lost)

Lost packet may be retransmitted by previous node, by source end system, or not at all.

---

> 两者需解释含义（对比）
>

**Queue Delay**：当<u>路由器/交换机</u>的**缓冲区**中<u>挤压了大量的数据包</u>时，新到的数据包需要排队等待被处理或传输，这会导致**延迟**。≠ 数据包丢失

+ 延迟 => 排队等待 --> _**缓冲区未满，数据包不会丢失**_
+ 丢包 => _**缓冲区满，数据包丢失，数据无法传递**_

**Packet Loss**： 当缓冲区已满且无法容纳更多数据包时，新到的数据包就会被丢弃；通常发生在<u>网络拥塞严重</u>的情况下，队列超过了缓冲区的容量限制  

---

4. <font style="background-color:#FBDE28;">Packet switching versus circuit switching （Q） </font>

**Packet switching** allows more users to use network

**Circuit switching** - Wasteful -  The dedicated circuits 专用电路 are idle during silent periods. 

+ **Why internet use packet swtiching instead of Circuit switching?**
    1. **Efficiency**：
    - <u>Packet Switching</u> - Data is broken into small packets, which are sent independently and routed through the network. => Network resources are dynamically shared among multiple users.
    - <u>Circuit Switching</u> -  A dedicated path is reserved for the entire duration of the communication, even when there is no data being transmitted. => Wasted resources during idle periods.  
    2. **Scalability** :
    - <u>Packet switching</u> -  Allows multiple users to share the same infrastructure. It adapts well to growing numbers of devices and users
    - <u>Circuit switching</u> - Struggles to scale, as it requires dedicated pathways for each communication session.
    3. **Flexibility**:
    - <u>Packet switching</u> - Enables data to be sent along the most efficient routes. If one path is congested or fails, packets can be rerouted dynamically, ensuring delivery.
    - <u>Circuit switching</u> - Lacks this flexibility—if the dedicated path fails, the connection is lost entirely.
    4. **Cost Effectiveness**:
    - Since <u>packet switching </u>**optimizes the use of network resources **and d**oesn't require dedicated connections, **it's more cost-effective to implement and maintain.

---

+ **<font style="background-color:#FBDE28;">Is packet switching a 'slam dunk winner'? (Q)</font>**

Great for 'Bursty' data – sometimes user has data to send, but at other times not 

+ Packet switching: resource sharing
+ Circuit switching: dedicated and exclusive

---

5. **Transport service requirements: common apps **

TCP/ UDP connection - **full-duplex.**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745462595747-f4e96963-540d-4260-9f6e-8547464507cb.png)

**UDP or TCP ? **=> Offers a different set of services to different app

TCP Connection-oriented service. => **Handshaking **

When the application finishes sending messages, it must tear down the connection. 

TCP Reliable data transfer service. =>** Without error and in the proper order. **

当发送方和接收方之间的网络拥塞时，TCP拥塞控制机制会对发送方进程（客户端或服务器）进行节流。

---

UDP is a no-frills, lightweight transport protocol, providing minimal services. UDP is connectionless =>** No **handshaking before the two processes start to communicate. 

UDP provides an unreliable data transfer service => **No** guarantee that the message will ever reach the receiving process. & Out of order.

And we also know that TCP can be easily enhanced at the application layer with SSL to provide security services. TCP可以很容易地在应用层通过SSL进行增强，以提供安全服务。 

> COMMON APPS - **<font style="background-color:#FBDE28;">WHAT TRANSPORT PROTOCOL?</font>**
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745462520856-e3236256-d5fc-46d6-9541-3265de5ca250.png)

**TCP**: 应用于需要高可靠性和数据完整性的场景（如文件下载、网页浏览、电子邮件等）。

**UDP**: 应用于实时性高或对数据丢失容忍度较高的场景（如流媒体、视频会议、在线游戏）。

| 特性 | TCP | UDP |
| --- | --- | --- |
| **拥塞控制** | 有，动态调整吞吐量 | 无，固定发送速率 |
| **可靠性** | 高，牺牲部分吞吐量换取可靠性 | 无，仅传输数据不管丢失 |
| **实时性** | 较低，适合非实时应用 | 高，适合实时传输 |


TCP强调可靠性=>吞吐量弹性变化， TCP 会根据网络状态动态调整吞吐量  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745464013598-158fbecd-a15e-4303-a0a7-5e2ab4cd217d.png)

分析的重点：可靠传输（loss>吞吐量弹性变化）& Time sensitive 

---

1. **可靠性**:

**TCP**: 提供端到端的可靠性，通过确认机制（ACK）、重传和序列号确保数据完整性和正确顺序。=> 高可靠性

**UDP**: 不提供可靠性保障，数据包可能丢失或乱序，适合对丢包或乱序不敏感的应用（如视频流、在线游戏）。

2. **实时性和延迟**:

**TCP**: 因为有拥塞控制、确认机制和握手过程，TCP 的延迟较高，不太适合低延迟、实时性强的应用。

**UDP**: 延迟低，无需握手或确认，适用于实时性要求高的应用，如语音通信、直播。

3. **流量特性**:

**TCP**: 面向连接，适用于需要<u>持续双向</u>通信的数据流（如 HTTP、HTTPS 流量）。

**UDP**: 面向无连接，更适合短时突发流量或广播/多播的应用场景（如 DNS 查询、IPTV）。

4. **网络拥塞**:

**TCP**: 内置拥塞控制和流量控制机制，适合在拥挤的网络中传输数据。

**UDP**: 没有拥塞控制，数据包无论网络状况如何都会发送，因此在拥堵情况下可能丢包严重，但在带宽充足的情况下效率高。

5. **资源消耗**:

**TCP**: 对系统资源要求较高（如内存、CPU），因其需要维护连接状态、重传队列等。

**UDP**: 资源占用低，适合在硬件资源有限或高并发环境中使用。



---

6. **<font style="background-color:#FBDE28;">UDP checksum/ Internet checksum</font>**

> What is the object of checksum?  
>
> How to use?
>

**Goal**：**<font style="color:#DF2A3F;">Detect "errors" (e.g., flipped bits) in transmitted segment</font>**

**<font style="color:#DF2A3F;">DETECT!!!! ≠ 重传</font>**

+ **TCP****<font style="color:#DF2A3F;"> </font>**<font style="color:#DF2A3F;">- </font><font style="color:#000000;">通过确认机制（ACK）和重传确保数据可靠性。如果</font>**<font style="color:#000000;">检测到错误</font>**<font style="color:#000000;"> => 重传</font>
+ **UDP****<font style="color:#DF2A3F;"> </font>**<font style="color:#DF2A3F;">- </font><font style="color:#000000;">使用校验和检测数据是否损坏，但不提供重传或纠正机制，损坏的数据包会被</font>**<font style="color:#000000;">丢弃</font>**<font style="color:#000000;">。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745465563582-a22e3210-98ea-4547-b6c1-b6fe5b541992.png)

---

7. **TCP: switching from slow start to CA**

> <font style="background-color:#FBDE28;">Calculate how many RTT it takes from start to any other phase?</font>
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745465858762-b9456f64-0d07-46ec-a879-99407841eb76.png)

TCP Tahoe 和 TCP Reno 的区别在于丢包后行为：

+ **TCP Tahoe**：完全回到慢启动阶段，窗口减小到最小值。
+ **TCP Reno**：在轻微拥塞时直接进入拥塞避免阶段，不回到慢启动。

---

8. **<font style="background-color:#FBDE28;">Subnets -There is a big Q related to subnet.</font>** 

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745467778047-f1cce201-d3e1-4dc0-a4cb-9fbf141f2020.png)

---

9. **Chpter 5 - exercise 1**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745467553802-74563925-85a3-499e-894e-80965a79ba9a.png)

<details class="lake-collapse"><summary id="ub7f80e4d"><span class="ne-text">ANS</span></summary><p id="u25ef43d3" class="ne-p" style="text-align: justify"><em><span class="ne-text">The first iteration: </span></em></p><p id="u25c92b4e" class="ne-p" style="text-align: justify"><span class="ne-text">we start with the source node</span><strong><span class="ne-text"> N'={s}       </span></strong><span class="ne-text" style="background-color: #FBDE28">--表明N中元素</span></p><p id="u7e563434" class="ne-p" style="text-align: justify"><span class="ne-text">To get the cost of other nodes: </span></p><p id="uc135ce8e" class="ne-p" style="text-align: justify"><span class="ne-text">the adjacent nodes of s: D(A). =1; D(B)=14;D(C)=20;        </span><span class="ne-text" style="background-color: #FBDE28">--写出COST（相邻/不相邻）</span></p><p id="ub3088d4f" class="ne-p" style="text-align: justify"><span class="ne-text">all other nodes: D(D)=</span><span class="ne-text" style="color: rgb(0,0,0)"> </span><span class="ne-text">∞; D(e)= ∞;</span></p><p id="ue2abf4dc" class="ne-p" style="text-align: justify"><span class="ne-text">Comparing all nodes without the set N', we find the node with</span><strong><span class="ne-text"> the minimum cost D</span></strong><span class="ne-text"> is a, then add node a into the set N'. </span><strong><span class="ne-text">We have N'={s,a}</span></strong><span class="ne-text">, and we find the least cost path from s to a is s-a with the cost 1.        </span><span class="ne-text" style="background-color: #FBDE28">--找最短COST，把那个结点添加到N中</span></p><hr id="jG0ex" class="ne-hr"><p id="u22017cd0" class="ne-p" style="text-align: justify"><em><span class="ne-text">The second iteration: </span></em></p><p id="u58ddfe73" class="ne-p" style="text-align: justify"><span class="ne-text">To get the cost of nodes</span><strong><span class="ne-text"> without the set N'</span></strong><span class="ne-text">: </span></p><p id="u1443a634" class="ne-p" style="text-align: justify"><span class="ne-text">Update the distance for the adjacent nodes of a:   </span><span class="ne-text" style="background-color: #FBDE28">--更新除N中的其他结点的COST</span></p><p id="u1df69ab7" class="ne-p" style="text-align: justify"><strong><span class="ne-text" style="color: #DF2A3F">D(B</span></strong><span class="ne-text">)=</span><strong><span class="ne-text">Min</span></strong><strong><span class="ne-text" style="color: #DF2A3F">[D(</span></strong><span class="ne-text">B),</span><strong><span class="ne-text" style="color: #DF2A3F">D</span></strong><span class="ne-text">(A)+</span><strong><span class="ne-text" style="color: #DF2A3F">C</span></strong><span class="ne-text">(A,C)]=Min[14,1+7]=8  --</span><span class="ne-text" style="background-color: #FBDE28">找出Min(源路径,使用刚刚得出的路径+剩余路径)</span></p><p id="uc1f71b02" class="ne-p" style="text-align: justify"><span class="ne-text">同理，D(C)=3; D(D)=6; D(e)=4 </span></p><p id="u9da3d016" class="ne-p" style="text-align: justify"><span class="ne-text">Comparing all nodes without the set N', we find the node with the</span><strong><span class="ne-text"> minimum cost D is c</span></strong><span class="ne-text">, then </span><strong><span class="ne-text">add node c into the set N</span></strong><span class="ne-text">'. We have N’={s,a,c}, and we find the least cost path from s to c is s-a-c with the cost 3.</span></p><hr id="M24xo" class="ne-hr"><p id="uae6da26c" class="ne-p" style="text-align: justify"><em><span class="ne-text">The third iteration: </span></em></p><p id="u1f9c534d" class="ne-p" style="text-align: justify"><span class="ne-text">To get the cost of nodes without the set N': </span></p><p id="u3c6e1ff7" class="ne-p" style="text-align: justify"><span class="ne-text">Update the distance for the adjacent nodes of c: D(D) =6; D(e)=4;   </span><span class="ne-text" style="background-color: #FBDE28">--相邻的找Min</span></p><p id="u7e74bf2f" class="ne-p" style="text-align: justify"><span class="ne-text">The cost of any other nodes keep unchanged: DB. =8;                     </span><span class="ne-text" style="background-color: #FBDE28"> --不相邻的不用管</span></p><p id="u55ac1393" class="ne-p" style="text-align: justify"><span class="ne-text">Comparing all nodes without the set N', we find the node with the </span><strong><span class="ne-text">minimum cost D</span></strong><span class="ne-text"> is e, then </span><strong><span class="ne-text">add</span></strong><span class="ne-text"> </span><strong><span class="ne-text">node e into the set N’</span></strong><span class="ne-text">. We have N’={s,a,c,e}, and we find the least cost path from s to e is s-a-e with the cost 4.</span></p><hr id="xZvuC" class="ne-hr"><p id="ue3915b8b" class="ne-p" style="text-align: justify"><em><span class="ne-text">The fourth iteration: </span></em></p><p id="u82923277" class="ne-p" style="text-align: justify"><span class="ne-text">To get the cost of nodes without the set N’: </span></p><p id="uc8a42721" class="ne-p" style="text-align: justify"><span class="ne-text">Update the distance for the adjacent nodes of e: D(D) =6; </span></p><p id="ud0940c7c" class="ne-p" style="text-align: justify"><span class="ne-text">The cost of any other nodes keep unchanged: D(B). =8;</span></p><p id="uae4d1294" class="ne-p" style="text-align: justify"><span class="ne-text">Comparing all nodes without the set N', we find the node with the</span><strong><span class="ne-text"> minimum cost D</span></strong><span class="ne-text"> is d, then </span><strong><span class="ne-text">add node d into the set N’</span></strong><span class="ne-text">. We have N’={s,a,c,e,d}, and we find the least cost path from s to d is s-a-d with the cost 6.</span></p><hr id="N0OIi" class="ne-hr"><p id="u006c147b" class="ne-p" style="text-align: justify"><em><span class="ne-text">The fifth iteration: </span></em></p><p id="ua26ce0fd" class="ne-p" style="text-align: justify"><span class="ne-text">To get the cost of nodes without the set N’: </span></p><p id="u7c903cc6" class="ne-p" style="text-align: justify"><span class="ne-text">update the distance for the adjacent nodes of d: D(B). =8; </span></p><p id="ud29137bb" class="ne-p" style="text-align: justify"><span class="ne-text">Since we only have one node without the set N', </span></p><p id="uf2ff91aa" class="ne-p" style="text-align: justify"><span class="ne-text">we have the least cost path from s to b is s-a-b with the cost 8. </span></p><p id="u98a0c9a2" class="ne-p" style="text-align: justify"><span class="ne-text">Then we add node b into the set N'. We have N’={s,a,c,e,d,b}. </span></p><hr id="ydQYp" class="ne-hr"><h6 id="oWdYE" style="text-align: justify"><span class="ne-text">Show the forwarding table:</span></h6><p id="u6971387f" class="ne-p" style="text-align: justify"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1743908151279-6edb2cdf-aa97-459d-8f2b-ae054f22d5f3.png" width="338.6666666666667" title="" crop="0,0,1,1" id="uJJAk" class="ne-image"><span class="ne-text">                  展示第一跳！</span></p></details>
---

#### 三、未明确指出考察选择/大题的知识点
1. How does a host get IP address?
    1. Hard-coded by system admin in a file
    2. DHCP (**D**ynamic **H**ost **C**onfiguration **P**rotocol) - Dynamically get address from as server.
2. DHCP goal：Allow host to dynamically obtain its IP address from network server when it joins network
3. DHCP function：
    1. Dynamically obtain its IP address
    2. Address of first-hop router for client
    3. Name and IP address of DNS sever
    4. network mask (indicating network versus host portion of address (e.g. 255.255.255.0)

<details class="lake-collapse"><summary id="uf3c94d8f"><span class="ne-text">解释</span></summary><p id="ud5ec0b99" class="ne-p"><strong><span class="ne-text">a. 动态获取设备的 IP 地址</span></strong></p><ul class="ne-ul"><li id="u1f93c40e" data-lake-index-type="0"><span class="ne-text">每个设备在加入网络时需要一个唯一的 IP 地址。DHCP 自动为设备分配 IP 地址，避免手动配置，减少冲突风险。</span></li><li id="ud82f3850" data-lake-index-type="0"><span class="ne-text">当设备断开网络时，该 IP 地址会被回收并重新分配给其他设备。</span></li></ul><p id="u698a855a" class="ne-p"><strong><span class="ne-text">b. 为客户端提供第一跳路由器的地址</span></strong></p><ul class="ne-ul"><li id="u6b5c8114" data-lake-index-type="0"><span class="ne-text">第一跳路由器（也称网关）是设备与其他网络（如互联网）通信的出入口。</span></li><li id="u7831a9b5" data-lake-index-type="0"><span class="ne-text">DHCP 会将这个路由器的 IP 地址发送给客户端，确保设备可以正确发送数据包到外网。</span></li></ul><p id="u95990ecc" class="ne-p"><strong><span class="ne-text">c. 提供 DNS 服务器的名称和 IP 地址</span></strong></p><ul class="ne-ul"><li id="u85aa3f63" data-lake-index-type="0"><span class="ne-text">DNS（域名系统）用于将人类可读的域名（例如 www.example.com）解析为设备可以识别的 IP 地址。</span></li><li id="u1d2ee497" data-lake-index-type="0"><span class="ne-text">DHCP 会自动告知设备使用哪个 DNS 服务器进行域名解析，无需手动配置。</span></li></ul><p id="u55f16aab" class="ne-p"><strong><span class="ne-text">d. 提供网络掩码</span></strong></p><ul class="ne-ul"><li id="u2d0a4cc8" data-lake-index-type="0"><span class="ne-text">网络掩码（例如 255.255.255.0）用于定义 IP 地址中哪一部分是网络部分，哪一部分是主机部分。</span></li><li id="ue39e883f" data-lake-index-type="0"><span class="ne-text">它帮助设备区分同一网络内的设备与外部设备，从而正确路由数据。</span></li><li id="ubb916726" data-lake-index-type="0"><span class="ne-text">DHCP 服务器预先设置好网络掩码（例如 </span><strong><span class="ne-text">255.255.255.0</span></strong><span class="ne-text">），与每个网络地址范围绑定。</span></li><li id="ue8c5b161" data-lake-index-type="0"><span class="ne-text">当设备向 DHCP 服务器发送请求时，服务器会将网络掩码作为一部分配置参数发送给设备。</span></li></ul></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745467308029-a4b2703c-7950-4fc4-a33e-97d4afb37e03.png)

当设备加入网络时：

1. **DHCP Discover**: 客户端通过广播向 DHCP 服务器发出请求，希望获得网络配置信息。
2. **DHCP Offer**: DHCP 服务器响应，提供 IP 地址、网关、DNS 服务器和网络掩码等信息。
3. **DHCP Request**: 客户端选择其中一个 DHCP Offer，发送确认请求。
4. **DHCP Acknowledgement**: DHCP 服务器确认分配，并将所有网络配置（包括网络掩码）发送给客户端。

