---
title: Ch4_运输层 Transport Layer
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/ch4-transport-layer.pdf
grade: year-2
semester: spring
course: computer-networks
date: 2026-09-18
order: 2
published: true
---
### 运输层概述 - 端到端协议
物理层、数据链路层以及网络层实现主机与主机的通信

但是，通信中**真正的实体**是位于通信两端主机中的**进程**

如何<font style="color:#DF2A3F;">为运行在不同主机上的</font>**<font style="color:#DF2A3F;">应用进程提供直接的通信服务</font>**-运输层的任务

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739807082051-a5886a2c-8029-482f-aea5-35a7efcae5a2.png)

_运输层直接为应用进程间的__**逻辑通信**__提供服务_

运输层向高层用户屏蔽了下面网络核心的细节(eg.网络拓扑、所采用的路由选择协议...)，它使应用进程看见的就好像是在<u>两个运输层实体之间有一条端到端的逻辑通信信道。</u>

根据应用需求不同，因特网的运输层为应用层提供了两种不同的运输协议：面向连接的TCP和无连接的UDP

### 运输层端口号、复用与分用
运行在计算机的进程使用**进程标识符PID**标志

不同操作系统→不同格式的进程标识符 -- 为了不同计算机通信→ 使用统一方法

**TCP/IP体系**的运输层使用**端口号**来<u>区分应用层不同进程</u>

+ 端口号使用16比特表示，取值范围 0~65535

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739807695570-3f7ad898-daa9-476d-a1dc-7f55e04bbe62.png)

端口号只具有**本地意义**，即端口号只是为了标识本_计算机应用层中的各个进程_。在因特网中，不同计算机的相同端口号是没有联系的。

---

#### 发送方的复用/接收方的分用
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739807910089-d934ad76-47c0-4bc5-af39-927b2d650bce.png)

应用报文+UDP封装=UDP复用→用户数据报+IP协议→IP数据报

/               TCP封装-TCP复用→TCP报文段+IP协议→IP数据报，称为IP复用

IP数据报首部中**协议字段**的值，用来表用IP数据报的**数据载荷部分封装的是何种数据单元**，6-TCP报文段；17-UDP用户数据报

--

根据协议字段数据上交UDP/TCP - 分用

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739807955748-72db3627-6473-4292-9408-a599ff5031cd.png)

不管在运输层使用TCP/UDP，在网络层都只能使用IP协议

---

## <font style="color:#AD1A2B;">一、transport-layer services</font>
### <font style="color:#213BC0;">transport layer：</font>
<font style="color:rgb(255,0,0);">Physical communication/connection</font><font style="color:rgb(0,0,0);">: connection through physical medium/link.</font>

<font style="color:rgb(255,0,0);">Logical communication/connection</font><font style="color:rgb(0,0,0);">: the connection between </font>**<font style="color:rgb(0,0,0);">two end system </font>**<font style="color:rgb(0,0,0);">running the same protocol at the same layer</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739836407435-e9fa005d-8ce9-401f-b1d6-139abd4c3d89.png)

封装过程（左侧）

1. **应用层**：
    - **数据**从<font style="color:#213BC0;">应用层</font>开始，以<font style="color:#213BC0;">消息（M）</font>的形式存在。
    - 应用层数据是实际传输的内容
2. **传输层**：
    - 数据到<font style="color:#213BC0;">达传输层</font>时，会添加传输层头部（Ht），形成<font style="color:#213BC0;">段（</font><font style="color:#213BC0;background-color:#FBDE28;">segment</font><font style="color:#213BC0;">）</font>。
    - 传输层头部确保数据在端到端之间可靠传输。
3. **网络层**：
    - 数据在<font style="color:#213BC0;">网络层</font>会添加网络层头部（Hn），形成数据报（<font style="color:#213BC0;background-color:#FBDE28;">datagram</font>）。
    - 网络层头部包含了路由和传输数据所需的信息
4. **链路层**：
    - 在<font style="color:#213BC0;">链路层</font>，会添加链路层头部（Hl），形成帧（<font style="color:#213BC0;background-color:#FBDE28;">frame</font><font style="color:#213BC0;">）</font>。
    -  链路层头部包含了帧控制信息，确保数据在同一网络中的可靠传输  

解封装过程（右侧）

1. **链路层**：
    - 数据到达接收端时，首先移除链路层头部（Hl），恢复成数据报。
2. **网络层**：
    - 移除网络层头部（Hn），恢复成段。
3. **传输层**：
    - 移除传输层头部（Ht），最终恢复成原始的消息（M）。

:::tips
这些名字你要清楚！

:::

### <font style="color:#213BC0;">transport services and protocols</font>
**Transport layer** provide**<font style="color:#DF2A3F;"> logical</font>** communication between app processes running on different host

1. **Transport Protocols Run in End Systems**

_**<font style="color:#117CEE;">传输层协议运行在终端系统</font>**_

+ **Send Side**: Breaks app messages into **<font style="color:#DF2A3F;">segments</font>**, passes to network layer.

将应用消息分割成段，传递到网络层

+ **Receive Side**: Reassembles segments into messages, passes to app layer.
2. **More Than One Transport Protocol Available to Apps**
+ **Internet**: TCP and UDP.

---

**TCP（传输控制协议 | Transmission Control Protocol）**

+ **可靠性**：确保数据<font style="color:#2F4BDA;">按顺序到达</font>，并且没有丢失或重复。
+ **连接建立**：在数据传输前先建立连接（三次握手）。
+ **流量控制**：管理发送数据的速度以防止网络拥塞。

**UDP（用户数据报协议 | User Datagram Protocol）**

+ **无连接**：<font style="color:#2F4BDA;">不建立连接</font>，直接发送数据。
+ **不保证可靠性**：不保证数据的顺序和完整性。
+ **低开销**：由于不进行连接管理和流量控制，适用于实时应用（如视频流、在线游戏）。

---

Provide **<font style="color:#AD1A2B;">Logical Communication</font>** Between App Processes Running on Different Hosts 提供在不同主机上运行的应用进程之间的逻辑通信

**Transport Protocols Run in End Systems**, Not at Network Core 传输协议在_**终端系统中运行**_，而不是在网络核心（例如网络路由器）

+ **Send Side**: <font style="color:#213BC0;">Breaks </font>**<font style="color:#213BC0;">app messages </font>**<font style="color:#213BC0;">into</font>**<font style="color:#213BC0;"> smaller chunk</font>**<font style="color:#213BC0;">s</font> and <font style="color:#213BC0;">adds a </font>**<font style="color:#213BC0;">transport-layer header </font>**<font style="color:#213BC0;">to each chunk </font>to create the transport-layer **<font style="color:#213BC0;">segments</font>**. The transport layer then <u>passes the segment to the </u>**<u>network laye</u>****r**, where the segment is encapsulated within a datagram (i.e., the network layer packet).
    - 发送端：将应用消息分割成较小的块，并将传输层头部添加到每个块，以创建传输层段。传输层然后将段传递给网络层，在网络层将段封装在数据报中（即网络层包）。
+ **Receiving Side**: **<font style="color:#213BC0;">Extract 提取 the segment from the datagram, reassembles segments into messages,</font>**<font style="color:#213BC0;"> and</font>**<font style="color:#213BC0;"> demultiplexes messages up to the app layer.</font>**
    - 接收端：从数据报中提取段，将段重新组装成消息，并将消息复用到应用层。

### <font style="color:#213BC0;">transport vs. network layer</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739840412256-90153127-0bee-4d1b-8034-f29d9279cdaa.png)

1. **传输层（Transport Layer）**：
+ 提供在不同主机上运行的两个<font style="background-color:#FBDE28;">进程之间</font>的逻辑通信。
+ 依赖并增强网络层服务。
+ **段（Segment）**：在传输层中，数据被划分为段。
2. **网络层（Network Layer）**：
+ 提供<font style="background-color:#FBDE28;">两个主机</font>之间的逻辑通信。
+ **数据报（Datagram）**：在网络层中，数据以数据报的形式传输。
+ **不可靠的尽力而为交付**：在互联网中，数据报可能会丢失、重复或重新排序，这是“尽力而为”的服务。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739840676097-14bac1ae-d8f3-49f3-a858-317fd4602bee.png)

---

**Network Layer: 网络层**

**IP (Internet Protocol)** is the name of the Internet's network-layer protocol. 互联网网络协议层的名称

+ **<font style="color:#213BC0;">IP</font>**** provides ****<font style="color:#213BC0;">unreliable, best-effort delivery</font>**:
    - No guarantees for <u>delay, bandwidth</u>, successful delivery, orderly delivery, or the integrity of the data.

**Transport Layer: 传输层**

Two transport layer protocols provide _different services_ (not available: delay guarantees, bandwidth guarantees):

1. **<font style="color:#601BDE;">TCP (Transmission Control Protocol) 传输控制协议</font>**
+ **Provides****<font style="background-color:#FBDE28;"> reliable, in-order </font>****delivery**: - 提供可靠、有序的交付
    - **Connection setup**: Establishes a connection before data transfer (e.g., three-way handshake). 数据传输前先建立连接
    - **Flow control**: Manages the sending rate to prevent network congestion. -流量控制：管理发送数据的速度，防止网络拥塞
    - **Sequence numbers**: Identifies the order of data packets.
    - **Acknowledgements-确认机制**: Confirms receipt of data packets.-接受方确认已收到的数据包
    - **Timers计数器**: Used for retransmitting lost packets.用于重传丢失的数据包
    - **<u>Error checking</u>**: Ensures data integrity.
    - **Congestion control 拥塞控制**: Regulates data transfer speed to avoid network congestion.-调节数据传输速度，避免网络拥堵
2. **<font style="color:#601BDE;">UDP (User Datagram Protocol) 用户数据报协议</font>**
+ **Provides unreliable, unordered delivery**:
    - **Error checking**: Provides integrity checking by including an error-detection field in the segments' headers.-通过在段头部包含错误检测字段

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739841407512-5567e141-a86d-4242-9acf-b9569f6146ad.png)

## <font style="color:#AD1A2B;">二、multiplexing and demultiplexing</font>
### <font style="color:#213BC0;">Multiplexing多路复用/demultiplexing解复用</font>
<font style="color:rgb(0,0,0);">Extending host-to-host delivery to process-to-process delivery is called </font>**<font style="color:rgb(255,0,0);">transport layer multiplexing </font>**<font style="color:rgb(0,0,0);">and </font>**<font style="color:rgb(255,0,0);">demultiplexing</font>**<font style="color:rgb(255,0,0);">.</font>

#### <font style="color:rgb(255,0,0);">Multiplexing - sender</font>
 At the sender, gathering data chunks <font style="color:#601BDE;">from different socket</font>s, <font style="color:#601BDE;">adding header information </font>to each chunk to create segments, then passing the segments to the network layer.  - 在发送方，将来自不同套接字的传输数据块聚集在一起，为每个数据块添加头部信息以创建段（segment），然后将段传递到网络层。  

#### <font style="color:rgb(255,0,0);">Demultiplexing - receiver</font>
At the receiver, using the header information to deliver the received transport layer segments <font style="color:#601BDE;">to the correct socket</font>.  - 在接收方，使用头部信息将接收到的传输层段传递到正确的套接字。  

             发送方的多路复用

1. **应用进程 P3**：应用程序发送数据。
2. **传输层**：
    - 将应用消息（M）分割成段（Ht M）。
    - 为每个段添加传输层头部（Ht）。
3. **网络层**：
    - 将段（Ht M）封装在数据报中（Hn Ht M）。
4. **数据链路层和物理层**：
    - 将数据报封装在帧中（Hl Hn Ht M），然后通过物理介质传输。

                接收方的解复用

1. **物理层和数据链路层**：接收数据并去除帧头部（Hl）。
2. **网络层**：
    - 解封装数据报头部（Hn），提取传输层段（Ht M）。
3. **传输层**：
    - 使用头部信息（Ht）将段传递到正确的套接字。
    - 将段重新组装成应用消息（M）。
4. **应用进程 P4**：应用程序接收数据。

#### <font style="color:#AD1A2B;">socket</font>
##### 定义
+ **Socket**：充当数据**从网络传递到进程以及从进程传递到网络**的门户。一个主机可以有一个或多个套接字。
    - **Socket**: Act as a door, through which data passes from the network to the process and from the process to the network. A host can have one or more sockets.

##### 主机信息
+ **主机的唯一IP地址**：每个主机都有一个唯一的IP地址（IPv4为32位）。
    - **A ****<font style="color:#AD1A2B;">host has a unique IP address</font>** (32-bit for IPv4).

##### 端口号
+ **端口号**：每个套接字在主机上都有一个<u>端口号（16位）</u>，范围从0到65535。
    - **Each socket has a ****<font style="color:#AD1A2B;">port number</font>** (16-bit) at a host, ranging from 0 to 65535.
+ **知名端口号**：端口号范围为0到1023，被称为知名端口号，是受限的，保留用于知名应用协议（如HTTP的端口号80和FTP的端口号21）。
    - **Well-known port numbers**: The port numbers ranging from 0 to 1023 are called well-known port numbers and are restricted, which are reserved for use by well-known application protocols such as HTTP (port number 80) and FTP (port number 21).

<details class="lake-collapse"><summary id="ue1d661ed"><span class="ne-text">详细讲解</span></summary><ol class="ne-ol"><li id="uf2220ae4" data-lake-index-type="0"><span class="ne-text">应用层和传输层之间</span></li></ol><ul class="ne-ul"><li id="udb7f491f" data-lake-index-type="0"><strong><span class="ne-text">端口号</span></strong><span class="ne-text">：</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u22e524a2" data-lake-index-type="0"><strong><span class="ne-text">传输层头部</span></strong><span class="ne-text">：</span><span class="ne-text" style="color: #2F4BDA">端口号在传输层头部添加</span><span class="ne-text">。传输层协议（如TCP或UDP）会将源端口号和目标端口号添加到数据段（Segment）的头部。</span></li><li id="ud95cd126" data-lake-index-type="0"><strong><span class="ne-text">作用</span></strong><span class="ne-text">：</span><span class="ne-text" style="color: #2F4BDA">端口号用于标识发送方和接收方的具体应用进程</span><span class="ne-text">。例如，HTTP使用端口号80，FTP使用端口号21。</span></li></ul></ul><p id="ue6112f50" class="ne-p"><span class="ne-text">2. 传输层和网络层之间</span></p><ul class="ne-ul"><li id="u836ccd4b" data-lake-index-type="0"><strong><span class="ne-text">IP地址</span></strong><span class="ne-text">：</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ue69933d8" data-lake-index-type="0"><strong><span class="ne-text">网络层头部</span></strong><span class="ne-text">：</span><span class="ne-text" style="color: #2F4BDA">IP地址在网络层头部添加</span><span class="ne-text">。网络层协议（如IP）会将源IP地址和目标IP地址添加到数据报（Datagram）的头部。</span></li><li id="u033881d9" data-lake-index-type="0"><strong><span class="ne-text">作用</span></strong><span class="ne-text">：</span><span class="ne-text" style="color: #2F4BDA">IP地址用于标识发送方和接收方的主机位置。</span><span class="ne-text">例如，IPv4地址是32位的，通常表示为四个十进制数（如192.168.0.1）。</span></li></ul></ul><h3 id="UCgRd"><span class="ne-text">具体封装过程</span></h3><ol class="ne-ol"><li id="ubc9ebfe9" data-lake-index-type="0"><strong><span class="ne-text">应用层</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u0fcf83f6" data-lake-index-type="0"><span class="ne-text">生成应用数据（Message）。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="u5478ec39" data-lake-index-type="0"><strong><span class="ne-text">传输层</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="uc62cfd7d" data-lake-index-type="0"><span class="ne-text">将应用数据分割成段，并添加传输层头部，包括源端口号和目标端口号（形成Segment）。</span></li></ul></ul><pre data-language="plain" id="atDaf" class="ne-codeblock language-plain"><code>| 传输层头部 (源端口号, 目标端口号) | 应用数据 |</code></pre><ol start="3" class="ne-ol"><li id="u21b5581c" data-lake-index-type="0"><strong><span class="ne-text">网络层</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ud5dcc4cd" data-lake-index-type="0"><span class="ne-text">将传输层段封装在数据报中，并添加网络层头部，包括源IP地址和目标IP地址（形成Datagram）。</span></li></ul></ul><pre data-language="plain" id="I5jWc" class="ne-codeblock language-plain"><code>| 网络层头部 (源IP地址, 目标IP地址) | 传输层头部 | 应用数据 |</code></pre><ol start="4" class="ne-ol"><li id="ufbbf1c8f" data-lake-index-type="0"><strong><span class="ne-text">数据链路层和物理层</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u3d874943" data-lake-index-type="0"><span class="ne-text">进一步封装数据报，并通过物理介质传输。</span></li></ul></ul><h3 id="PV5xa"><span class="ne-text">图示说明</span></h3><pre data-language="plain" id="KPgdX" class="ne-codeblock language-plain"><code>应用层: 应用数据 (Message)
传输层: 段 (源端口号, 目标端口号 | 应用数据)
网络层: 数据报 (源IP地址, 目标IP地址 | 段 (源端口号, 目标端口号 |</code></pre></details>
### <font style="color:#213BC0;">How demultiplexing works</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739874891072-42772063-3dfa-4a4d-9b00-317cda6f4c9b.png)

<font style="color:rgb(0,0,0);">Host receives </font>**<font style="color:rgb(0,0,0);">IP datagrams -  </font>**<font style="color:rgb(0,0,0);">当一个主机接收到IP数据报时，会进行以下步骤来处理数据  </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">each </font>**<font style="color:rgb(0,0,0);">datagram</font>**<font style="color:rgb(0,0,0);"> has </font>_**<font style="color:#601BDE;">source IP address, destination IP address </font>**_

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">each datagram carries one</font>_**<font style="color:#601BDE;"> transport-layer segment </font>**_

<font style="color:rgb(0,0,0);"> - 每个数据报携带一个传输层段（如TCP段或UDP段）  </font>

<font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Each segment has source, destination port number -  传输层段包含源端口号和目的端口号。  </font>

<font style="color:rgb(0,0,0);">host uses </font>_<font style="color:rgb(204,0,0);">IP addresses & port numbers </font>_<font style="color:rgb(0,0,0);">to direct segment to appropriate socket -  主机接收到数据报后，会使用IP地址和端口号来确定数据报应交付到哪个套接字（socket）。套接字是应用程序与网络之间的接口，用于发送和接收数据。  </font>

### <font style="color:#213BC0;">Mux/Demux</font>
#### Connectionless demux - 无连接多路复用 
1. _**Application Program**_** Creates a ****<font style="background-color:#FBDE28;">UDP</font>**** Socket**: 应用程序创建UDPsocket
+ An application program (like Skype) creates a UDP socket in Host A.
2. _**Transport Layer**_** Handles UDP Multiplexing**: 传输层处理UDP多路复用
+ The transport layer in **Host A handles UDP multiplexing** by creating **<font style="color:#5C0036;">segments</font>** and passing them to the network layer.

 主机A的传输层通过创建数据段并将其传递给网络层来处理UDP多路复用  

+ Example: The transport layer takes the data from Skype, encapsulates it into UDP segments, and passes them to the network layer.
3. **Network Layer Encapsulates and Delivers**: 网络层封装和传递
+ The network layer encapsulates the segment in an IP datagram and attempts to deliver it to the receiving host with a best-effort approach.

 网络层将数据段封装在IP数据报中，并尽力将其传递给接收主机。  

+ Example: The network layer adds IP headers to the UDP segments and sends the IP datagrams over the network. -  网络层将IP头部添加到UDP段中，并将IP数据报发送到网络上。  
4. **Receiving Host Processes UDP Segment**:
+ When the receiving host gets the UDP segment:  当接收主机收到UDP段时 
    - It checks the **<font style="color:#5C0036;">destination port number</font>** in the segment. -检查段中的目的端口号
    - It directs the UDP segment to the socket associated with that port number. - 将UDP段引导到与该端口号相关联的socket
5. **Host Uses IP Address and Port Number**:
+ The host uses both the **<font style="color:#5C0036;">destination IP address and the destination port numbe</font>****r **to direct segments to the appropriate socket. -  主机使用目的IP地址和目的端口号将数据段引导到适当的套接字。  
6. **UDP Socket Identification**:
+ A UDP socket is identified by a two-tuple:
    - **<font style="color:#5C0036;">Destination IP address </font>**目的IP
    - **<font style="color:#5C0036;">Destination port number</font>** 目的端口

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739876078103-320395cf-076a-4b17-ae99-dd41bbb6d5c3.png)

#### Connection-oriented demux 面向连接
+ A UDP socket is identified by a four-tuple:
    - **<font style="color:#5C0036;">Source IP address </font>**发送设备
    - **<font style="color:#5C0036;">Source port number</font>**
    - **<font style="color:#5C0036;">Destination IP address </font>**目的IP-接收设备
    - **<font style="color:#5C0036;">Destination port number</font>** 目的端口
+ **Demux（解复用**）: receiver uses all 4 values to direct segment to appropriate socket -  接收端使用所有四个值（源IP地址、源端口号、目标IP地址、目标端口号）<u>将段引导到适当的套接字</u>。  
+ **server host may support many simultaneous ****<font style="background-color:#FBDE28;">TCP</font>**** sockets（服务器主机可以支持多个同时运行的TCP套接字）**：
    - Each socket identified by its own 4-tuple.每个套接字由自己的四元组标识。
+ **web servers have different sockets for each connecting client（Web服务器为每个连接的客户端提供不同的套接字）**：
    - Non-persistent HTTP will have different socket for each request.- 非持久性HTTP将为每个请求提供不同的套接字。
    - Persistent HTTP will have the same server socket for exchanging messages. - 持久性HTTP将在消息交换过程中使用相同的服务器套接字。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739877100812-6749a91b-adc7-421d-9a0b-602af1be2c68.png)

 多路复用是指多个应用程序可以同时通过同一个网络接口传输数据，而不会互相干扰。源端口号使得操作系统能够区分不同的应用程序和会话，并正确地将数据包传递给相应的进程。例如，在一个服务器上，同时运行的多个服务可以通过不同的源端口号进行区分，从而在同一个目标端口上接收数据。  

---

<font style="color:rgb(0,0,0);">Multiplexing, demultiplexing: based on segment, datagram header field values </font>

<font style="color:rgb(0,0,163);">▪</font><font style="color:rgb(0,0,163);"> </font>**<font style="color:rgb(192,0,0);">UDP: </font>**<font style="color:rgb(0,0,0);">demultiplexing using destination port number (only) </font>

<font style="color:rgb(0,0,163);">▪</font><font style="color:rgb(0,0,163);"> </font>**<font style="color:rgb(192,0,0);">TCP: </font>**<font style="color:rgb(0,0,0);">demultiplexing using 4-tuple: source and destination IP </font>

<font style="color:rgb(0,0,0);">addresses, and port numbers</font>

## <font style="color:#AD1A2B;">三、Connectionless transport : UDP</font>
### <font style="color:#213BC0;">Brief introduction</font>
+  UDP only provides essential functions that transport protocol can do (i.e., multiplexing/demultiplexing and some error check)  -  UDP仅提供传输协议的基本功能（如多路复用/解复用和一些错误检查 ）
+ "best effort" service:
    - lost
    - delivered out-of-order 无需传递
+ connectionless
    -  no handshaking between UDP sender, receiver  
    -  each UDP segment handled independently of others

 UDP是一种无连接的传输层协议，这意味着在发送数据之前，发送方和接收方之间不需要建立连接。在这种情况下，每个数据段都作为独立的实体来处理，而不是作为一个连续的数据流的一部分。  

+ 应用场景：
    - streaming multimedia app (loss tolerant, tate sensitive)
    - DNS
+ 如何在UDP上实现可靠传输？
    - reliable transfer over UDP:
    -  application-specific error recovery  

### <font style="color:#213BC0;">UDP：segment header</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739878200339-19d93a77-3b24-4b38-8221-abaaa57ee479.png)

**UDP报文头部**包含以下字段：

1. **源端口号（source ****port ****#）**：
    - 数据来源应用程序的端口号。
2. **目的端口号（dest ****port ****#）**：
    - 数据接收应用程序的端口号。
3. **长度（length）**：
    - UDP报文的总长度（包括头部），以字节为单位。
4. **校验和（checksum）**：
    - 接收方使用校验和字段检查数据段在传输过程中是否引入了错误。



+ **图示解读**
    - **32位头部（32 bits header）**：UDP头部长度为32位，分为四个字段。
+ 图中展示的32位指的是每一行的宽度，也就是32位（4字节）的宽度。这样的表示方法有助于更清晰地展示UDP头部字段的排列方式。
+ UDP头部实际上只有8字节（64位），它在图中被分成了两行来展示，每行32位（4字节）。
    - **应用程序数据（payload）**：头部之后是**<font style="color:#5C0036;">应用程序数据（也称为有效载荷）</font>**



+ **为什么使用UDP？**
1. **无需连接建立（no connection establishment）****<font style="color:#5C0036;">：</font>**
    - <font style="color:#000000;">UDP不需要在发送和接收方之间建立连接，这可以减少延迟。</font>
2. **简单（simple）****<font style="color:#5C0036;">：</font>**
    - <font style="color:#000000;">UDP在发送方和接收方不需要维护连接状态，协议实现简单。</font>
3. **<font style="color:#000000;">小头部（small header size）</font>****<font style="color:#000000;">：</font>**
    - <font style="color:#000000;">UDP头部只有8字节，开销小。</font>
+ **DP头部结构**：- UDP协议的一个标准定义  
    - **源端口号（source port #）**<font style="color:#000000;">: 2字节（16位）</font>
    - **目的端口号（dest port #）**<font style="color:#000000;">: 2字节（16位）</font>
    - **长度字段（length）**<font style="color:#000000;">: 2字节（16位）</font>
    - **校验和（checksum）**<font style="color:#000000;">: 2字节（16位）</font>
4. **<font style="color:#000000;">无拥塞控制（no congestion control）</font>****<font style="color:#000000;">：</font>**
    - <font style="color:#000000;">UDP没有拥塞控制机制，可以根据需求尽可能快地发送数据，即使在面临网络拥塞时也能工作。</font>

### <font style="color:#213BC0;">UDP checksum</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739878624221-9f90bf81-ae80-4f55-8d26-db2db34ab108.png)

<u>发送方（Sender）</u>

1. **处理段内容**：

将段内容，包括头字段，作为16位整数序列处理。

2. **计算校验和**：

校验和是段内容的加法（1的补码和）。

3. **发送校验和**：

发送方将计算得到的校验和值放入UDP校验和字段。

<u>接收方（Receiver）</u>

1. **计算接收到的段的校验和**：
    - 接收方重新计算接收到的段的校验和。
2. **检查校验和**：
    - 检查计算出的校验和是否等于校验和字段值。
    - 如果相等：未检测到错误。
    - 如果不相等：检测到错误。

<details class="lake-collapse"><summary id="u8c46f7c0"><span class="ne-text">示例</span></summary><p id="u495fcf25" class="ne-p"><span class="ne-text">假设有一个简单的UDP报文头部（不含数据部分），内容如下：</span></p><pre data-language="plain" id="gvohN" class="ne-codeblock language-plain"><code>源端口号（source port #）: 12345 (十六进制为0x3039)
目的端口号（dest port #）: 80 (十六进制为0x0050)
长度字段（length）: 8 (十六进制为0x0008)
校验和（checksum）: 0x0000 （在计算校验和之前设置为0）</code></pre><p id="u38b21fce" class="ne-p"><span class="ne-text">在计算校验和时，头部内容将被看作以下16位整数序列：</span></p><pre data-language="plain" id="Vbcl8" class="ne-codeblock language-plain"><code>0x3039  -&gt; 12345
0x0050  -&gt; 80
0x0008  -&gt; 8
0x0000  -&gt; 0 (校验和在计算前设置为0)</code></pre><h3 id="3148a067"><span class="ne-text">校验和计算过程</span></h3><ol class="ne-ol"><li id="u13690508" data-lake-index-type="0"><strong><span class="ne-text">将所有16位整数相加</span></strong><span class="ne-text">：</span></li></ol><pre data-language="plain" id="zioDn" class="ne-codeblock language-plain"><code>0x3039 + 0x0050 + 0x0008 + 0x0000 = 0x3089</code></pre><ol start="2" class="ne-ol"><li id="u8d168236" data-lake-index-type="0"><strong><span class="ne-text">如果有进位，将进位加回总和（此例子中没有进位）</span></strong><span class="ne-text">。</span></li><li id="ud591099f" data-lake-index-type="0"><strong><span class="ne-text">取结果的反码</span></strong><span class="ne-text">，得到校验和：</span></li></ol><pre data-language="plain" id="SkNSU" class="ne-codeblock language-plain"><code>校验和 = ~0x3089 = 0xCF76</code></pre><ol start="4" class="ne-ol"><li id="u2db4ba70" data-lake-index-type="0"><strong><span class="ne-text">将计算出的校验和填入校验和字段</span></strong><span class="ne-text">。</span></li></ol><hr id="IVzsi" class="ne-hr"><p id="u4ee6d8d1" class="ne-p"><strong><span class="ne-text">计算校验和时</span></strong><span class="ne-text">，虽然我们在步骤中使用了十六进制（hexadecimal）表示，但实际的计算是基于二进制（binary）的。这是因为计算机的内部运算是基于二进制的。十六进制只是为了更方便地阅读和表示。</span></p><h3 id="69bc1c41"><span class="ne-text">具体解释</span></h3><ol class="ne-ol"><li id="ubf16a6a5" data-lake-index-type="0"><strong><span class="ne-text">源数据</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u793a4e5a" data-lake-index-type="0"><span class="ne-text">源端口号：12345 (十六进制为0x3039)</span></li><li id="u43834d6c" data-lake-index-type="0"><span class="ne-text">目的端口号：80 (十六进制为0x0050)</span></li><li id="uaaa99491" data-lake-index-type="0"><span class="ne-text">长度字段：8 (十六进制为0x0008)</span></li><li id="uda782e50" data-lake-index-type="0"><span class="ne-text">校验和：0x0000 （在计算校验和之前设置为0）</span></li></ul></ul><ol start="2" class="ne-ol"><li id="ue0d0cea5" data-lake-index-type="0"><strong><span class="ne-text">将数据视为16位整数</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ube2bb233" data-lake-index-type="0"><span class="ne-text">UDP头部的每个字段都是16位（2字节）。虽然我们用十六进制表示数据，但每个十六进制数字实际上代表的是四个二进制位。</span></li></ul></ul><ol start="3" class="ne-ol"><li id="ubaf410b4" data-lake-index-type="0"><strong><span class="ne-text">计算校验和</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u1eeaa666" data-lake-index-type="0"><span class="ne-text">在计算过程中，我们将这些16位整数相加。例如：</span></li></ul></ul><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul ne-level="2" class="ne-ul"><li id="uc434480d" data-lake-index-type="0"><span class="ne-text">0x3039（二进制：0011 0000 0011 1001）</span></li><li id="ud9d9ea9d" data-lake-index-type="0"><span class="ne-text">0x0050（二进制：0000 0000 0101 0000）</span></li><li id="u8b253619" data-lake-index-type="0"><span class="ne-text">0x0008（二进制：0000 0000 0000 1000）</span></li><li id="u207db303" data-lake-index-type="0"><span class="ne-text">0x0000（二进制：0000 0000 0000 0000）</span></li></ul></ul></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u14eae901" data-lake-index-type="0"><span class="ne-text">二进制相加：</span></li></ul></ul><pre data-language="plain" id="uBuZJ" class="ne-codeblock language-plain"><code>0011 0000 0011 1001
+ 0000 0000 0101 0000
+ 0000 0000 0000 1000
+ 0000 0000 0000 0000
-------------------------
  0011 0000 1000 0001  (0x3089)</code></pre><ol start="4" class="ne-ol"><li id="uf21b3ffb" data-lake-index-type="0"><strong><span class="ne-text">处理进位</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u5ffabc09" data-lake-index-type="0"><span class="ne-text">在这个例子中没有进位，但如果有进位，需要将进位加回总和。</span></li></ul></ul><ol start="5" class="ne-ol"><li id="u2eb5c22b" data-lake-index-type="0"><strong><span class="ne-text">取反码</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u3f475c52" data-lake-index-type="0"><span class="ne-text">对结果取反得到校验和：</span></li></ul></ul><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul ne-level="2" class="ne-ul"><li id="u8c3f30b8" data-lake-index-type="0"><span class="ne-text">0x3089（二进制：0011 0000 1000 1001）</span></li><li id="u4738cc3c" data-lake-index-type="0"><span class="ne-text">反码：1100 1111 0110 1110 (0xCF76)</span></li></ul></ul></ul><ol start="6" class="ne-ol"><li id="u062d578b" data-lake-index-type="0"><strong><span class="ne-text">填入校验和字段</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u8c528caf" data-lake-index-type="0"><span class="ne-text">将0xCF76填入UDP校验和字段。</span></li></ul></ul><h3 id="25f9c7fa"><span class="ne-text">总结</span></h3><p id="u17ed5a90" class="ne-p"><span class="ne-text">虽然在解释过程中我们使用了十六进制表示法，但实际的计算过程是基于二进制完成的。十六进制只是为了方便表示和阅读，因为它比二进制更紧凑且容易理解。</span></p></details>
:::warning
考试会考checksum的计算！！！

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739879098031-cd655d22-1606-4ce7-8f06-e12b90f14767.png)

:::

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739879119900-91cdf383-28ae-4582-a691-f10e49ea1a00.png)

“无附加功能”协议：

+ 数据段可能会丢失，传递给应用程序时顺序可能会混乱
+ 最佳努力服务：“发送并寄希望于最好的结果”

UDP的优点：

+ 不需要建立连接/握手（不产生往返时间RTT）
+ 即使网络服务受损时也能工作
+ 有助于可靠性（校验和）

 在应用层上构建额外功能（例如，HTTP/3）  

## <font style="color:#AD1A2B;">四、Principles of reliable data transfer </font>
### <font style="color:#270070;">“可靠数据传输（rdt）的原理”_  郑老师</font>
<font style="color:#000000;">rdt 在应用层、传输层和数据链路层都很重要，在这里讲解是因为TCP就是一种可靠的数据传输</font>

<font style="color:#000000;">      </font>**<font style="color:#000000;">下层服务不可靠--RDT--为上层提供可靠服务</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740982865144-00702ff6-455c-4df6-be87-fd878cca26ab.png)

<font style="color:rgb(0,0,0);"> 底层channel的不可靠性决定了协议实体的复杂性</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740983013099-4f247081-a66c-44f1-92a4-c426b3119baa.png)

Rdt n.0 这个就是**<font style="color:#664900;">不断去除假设的过程</font>**，去除的假设越多，需要的协议实体就越来越复杂。

 有限状态机（Finite State Machine，FSM）是一种计算模型，用于表示一个系统的状态及其状态转变。  

+ **状态（State）**：系统所处的某个特定状态。
+ **事件（Event）**：触发状态转换的**外部输入或事件**。
+ **动作（Action）**：状态转换时执行的操作。
+ **状态转移（Transition）**：从一个状态到另一个状态的转换。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740982996579-9bf7a91d-a9b6-461f-b417-006c20d5748d.png)

1. 发送方
+ **dt_send(data) **：
    - 当上层请求发送数据时，<font style="color:#270070;">触发 </font>`rdt_send(data)` <font style="color:#270070;">事件</font>，**准备发送数据**。
+ **packet = make_pkt(data)**：
    - 发送方<font style="color:#270070;">创建数据包</font>。`make_pkt(data)` 将上层数据**封装**成数据包，通常包括数据、序号、校验和等信息。
+ **udt_send(packet) - 动作**：
    - 发送方<font style="color:#270070;">通过不可靠的数据传输（udt_send）发送数据包</font>。这个动作将数据包发送到网络中。
2. 接收方
+ **rdt_rcv(packet)**：
    - 当数据包到达时，<font style="color:#270070;">触发 </font>`rdt_rcv(packet)` <font style="color:#270070;">事件</font>，准备接收数据。
+ **extract(packet, data)**：
    - 接收方从数据包中提取有效数据。`extract(packet, data)` **解析数据包**，提取其中的应用层数据。
+ **deliver_data(data)**：
    - 接收方将提取的数据**传递给上层**协议（如应用层）。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740983666672-e4c3eded-fa21-4007-8f10-00ce259fbccb.png)

**有比特翻转→差错校验**

差错控制编码（Error Control Coding），用于在数据传输过程中检测和纠正错误。

eg. 校验和checksum/奇偶校验/循环冗余校验/汉明码

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740983916663-0fc34880-4d0d-4d3f-b432-77a116d7eb9c.png)

_**                  Sender**_

1. **等待来自上层的调用（Waiting for call from above）**
+ `rdt_send(data)`：表示由上层协议调用来发送数据，这是应用层发送数据的接口。- 这是一个抽象的层次。只需要关心目的的传输数据，而具体的实现由动作指出。
+ `sndpkt = make_pkt(data, checksum)`：创建数据包，并计算校验和。
+ `udt_send(sndpkt)`：通过**不可靠**的数据传输信道发送数据包。
2. **等待ACK或NAK（Waiting for ACK or NAK）**
+ `rdt_rcv(rcvpkt) && isNAK(rcvpkt)`：收到的包是NAK（否定确认），表示接收方检测到数据包损坏。
    - `udt_send(sndpkt)`：重新发送数据包。
+ `rdt_rcv(rcvpkt) && isACK(rcvpkt)`：收到的包是ACK（确认），表示接收方成功接收到数据包且无错误。  

                   _**Receiver**_

1. **等待来自下层的调用（Waiting for call from below）**
+ `rdt_rcv(rcvpkt) && corrupt(rcvpkt)`：收到的数据包损坏。
    - `udt_send(NAK)`：发送NAK（否定确认）给发送方，通知数据包损坏。
+ `rdt_rcv(rcvpkt) && notcorrupt(rcvpkt)`：收到的数据包未损坏。
    - `extract(rcvpkt, data)`：从数据包中提取数据。
    - `deliver_data(data)`：将数据传递给上层应用。
    - `udt_send(ACK)`：发送ACK（确认）给发送方，通知数据包接收成功。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740985630921-28f15d86-7cd2-4387-8d0a-d7593276ecfa.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741046819705-658edc73-1097-459a-ac70-09135709a92f.png)

EDC (Error Detection and Correction) 是指在数字通信系统中用于检测和纠正传输过程中可能出现的比特错误的一系列技术

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741046866987-5b6f9b90-872e-4555-b60d-bd9b776443c2.png)

NAK（Negative Acknowledgment）

当接收方在以下两种情况下发送 NAK：

1. **收到数据包时检测到错误**：当接收方收到数据包并通过校验和等方法检测到数据包有错误时，会发送 NAK。这表示数据包中存在比特差错，要求发送方重新传输该数据包。
2. **未收到数据包**：通常情况下，如果接收方没有收到预期的数据包，它会等待一段时间直到超时。如果在这段时间内没有收到数据包或其确认信息，发送方会认为数据包丢失或确认丢失，然后重新发送数据包。具体到 NAK 的使用，接收方不会主动发送 NAK 而是等待超时进行重传。

```plain
发送方                                               接收方
--------                                             --------
[发送 Data 0 ]  ------------------------------->    [期待序号 0]
                                                    [收到 Data 0，检测到错误]
                                                    [发送 NAK ]
<----------------------  [收到 NAK ]

[重传 Data 0 ]  ------------------------------->    [仍期待序号 0]
                                                    [收到 Data 0，无错误]
                                                    [序号匹配，处理数据]
                                                    [发送 ACK 0 ]
<----------------------  [收到 ACK 0 ]

[更新序号为 1，发送 Data 1 ]  ----------------->    [期待序号 1]
```

在 **rdt2.1 协议**中，NAK（否认确认）通常不包含序号。NAK 的主要作用是通知发送方，接收方收到了错误的数据包，需要重新发送。相比于 ACK（确认），NAK 更为简单，没有包含序号的必要。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741047675482-ad95d836-1639-403a-ac9c-c4488cb39f64.png)

:::tips
在分析的过程中考虑两件事：

1. pkt错误
    1. receiver发送反向确认信息
    2. sender重传相同数据包
2. ACK/NAK错误
    1. sender重传相同数据包
    2. receiver发送确认，并忽略现有数据包

:::

    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741047774568-2636c4a9-ef8f-4327-be7b-26fe25283d1a.png)

在 **rdt2.1 协议** 中，超时重传主要是由于以下两种情况引起的：

1. **没有收到预期的 ACK 或 NAK**：
    - **超时机制**：如果发送方在一定时间内没有收到 ACK 或 NAK，它会认为数据包或者确认丢失，随后重传数据包。
    - **定时器**：发送方在发送每一个数据包时都会启动一个定时器。如果定时器超时，说明发送方没有收到确认，需要重传数据包。
2. **收到 NAK**：
    - **立即重传**：当接收方收到一个有错误的数据包时，发送 NAK 通知发送方重传该数据包。发送方在收到 NAK 后会立即重传数据包。



---

**TCP可靠传输的实现**

TCP基于**以****<font style="color:#DF2A3F;">字节</font>****为单位的****<font style="color:#DF2A3F;">滑动窗口</font>**来实现可靠传输

[https://www.cnblogs.com/WFSYSUAI/articles/18496590](https://www.cnblogs.com/WFSYSUAI/articles/18496590)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740449064175-984dbf5b-5dd8-4b43-aa45-e9adbbe479a4.png)

+  如何在不可靠的端到端网络层之上提供可靠的数据传输  
+  不可靠通道的特性将决定可靠数据传输协议(RDT)的复杂性  

---

**RDT (Reliable Data Transfer)-可靠数据传输协议**

[https://blog.csdn.net/m0_63657524/article/details/121916128](https://blog.csdn.net/m0_63657524/article/details/121916128)

[https://blog.csdn.net/m0_60511809/article/details/134107854](https://blog.csdn.net/m0_60511809/article/details/134107854)

      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740449550466-104f9641-84ff-4cf3-b51c-1a473af202c8.png)

  运行在**应用层**中的**客户端**（服务端）应用程序进程通过<u>套接字</u>将数据推送到运输层。同样地， 有服务端（客户端）进程通过<u>套接字</u>接受来自运输层的数据。_对__**应用层**__而言， 它所能__**看到**__的底层就是一条__**可靠**__的信道_（如图 2.2 所示）。但是，对于现实中的数据传输，由于受到噪声干扰、网络拥堵等各种影响，难免会出现数据受损、丢包等事故， 而rdt协议就是为了解决这样一个问题，而诞生的。

            <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740449698286-c3dca2c8-9cb3-4f6f-b2ed-e567a348b489.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740464346622-74fb4016-6fac-438d-be51-718fba13edaf.png)

         

<u>运输层为应用层提供的服务</u>可以抽象为：数据可以**通过一条可靠的信道进行传输**。借助于可靠信道，传输数据比特就不会受到损坏（例如由0变为1，或由1变为0）或者丢失，而且所有的数据都是按照其发送顺序进行交付。这也是<u>TCP向调用它的因特网应该所提供的服务模型。可靠数据传输协议（reliable data transfer protocol）就是用来实现这种服务抽象的</u>

[https://blog.csdn.net/qq_16619993/article/details/110457686](https://blog.csdn.net/qq_16619993/article/details/110457686)

---

### Three Types of Channels
1. **<font style="color:rgb(255,0,0);">Perfect channel</font>**<font style="color:rgb(0,0,0);">（完美通道）: underlying channel is perfectly reliable no bit errors -  底层通道完全可靠，没有比特错误，也没有数据包丢失。  数据传输完全无误的</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,0);">no bit errors  - 没有比特错误</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">no loss of packets </font><font style="color:rgb(0,0,153);"> - </font><font style="color:rgb(0,0,0);">没有数据包丢失</font>

2. **<font style="color:rgb(255,0,0);">Channel with bit errors </font>**<font style="color:rgb(0,0,0);">（带有比特错误的通道）-  这种类型的通道可能会引入比特错误，但所有数据包都按正确顺序接收  </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">All packets are received in correct order 按照发送顺序接受</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Packets may be corrupted-包内比特可能损坏 (i.e., bits may be </font>**<font style="color:rgb(0,0,0);">flipped</font>**<font style="color:rgb(0,0,0);">比特反转) </font>

> <font style="color:rgb(0,0,0);">flip 突然变化；翻转；flipped</font>
>

3. **<font style="color:rgb(255,0,0);">“Loosy” channel</font>**<font style="color:rgb(0,0,0);">（"有损"通道）- underlying channel not only corrupts bits in packets but also loses packets - 这种类型的通道不仅会损坏数据包中的比特，还会丢失数据包。  </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Packets may be lost </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Packets may be corrupted</font>

---

#### <font style="color:rgb(0,0,0);">Data Transfer over a Perfect Channel</font>
> no loss & no error  因为没有错误，所以 Sender和 Receiver什么都不用做
>

1. **Underlying Channel Perfectly Reliable - 底层通道****<u>完全可靠</u>**
+ **No Bit Errors**: This means that the channel is _error-free_ and the data is transmitted without any mistakes or changes.  这意味着通道是无误的，数据传输没有任何错误或更改。  
+ **No Loss of Packets**: This implies that every packet sent through the channel reaches its destination without being lost.  这意味着通过通道发送的每个数据包都能到达目的地，没有丢失 。
2. **Consider Only Unidirectional Data Transfer, but Control Info Will Flow in Both Directions! **只考虑<u>单向</u>数据传输，但控制信息会在两个方向上流动！**  **
+ **Sender Sends Data into Underlying Channel** **发送方**将数据**发送**到底层通道  
+ **Receiver Reads Data from Underlying Channel 接收方**从底层通道**读取**数据** **
+  <font style="color:#2F4BDA;">这种传输是单向的，只考虑数据从发送方到接收方的流动。  </font>
+ <font style="color:#2F4BDA;"> 虽然数据传输是单向的，但控制信息（如确认收到数据的消息、请求重传的数据包等）会在两个方向上流动。</font>也就是说，接收方可以向发送方发送控制信息，以确保数据传输的可靠性和完整性。  
3. **There is ****<font style="color:#DF2A3F;">No Need</font>**** for the Receiver Side to Provide ****<font style="color:#DF2A3F;">Any Feedback</font>**** to the Sender Since Nothing Can Go Wrong!**
+ Since the channel is **perfectly reliable**, there are _no errors or losses. 因此，接收方不需要向发送方发送任何反馈，_as there is no need for _retransmissions _or _error corrections_. 因为不需要重新传输或错误修正  

#### Data Transfer over Channel with Bit Errors
> **No loss ** but **packet error**：
>
> Receiver用checksum检查是信息否有错误。如果有错，Receiver给Sender反馈。
>
> Feedback：1.（Sender收到）ACK-right → Sender发新的信息 
>
>     2.   NAK-wrong→Sender** retransmit** the package
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740453087392-67cef134-b078-4799-b2ef-5853c699c319.png)

1. **假设**
+ **所有数据包按正确顺序接收**：这意味着<u>接收</u>的数据包的顺序与<u>发送</u>的顺序<u>一致</u>，没有乱序现象。
+ **数据包可能被损坏（即比特可能翻转）**：这表示在传输过程中，数据包中的比特可能会发生变化，导致数据损坏。
+ **使用校验和来检测比特错误**：校验和是一种检测错误的方法，用于验证数据包中的比特是否被损坏。
2. **如何从比特错误中恢复？- 使用自动重传请求（ARQ）机制**
+ **<font style="background-color:#FBDE28;">确认</font>****（ACKs）**：接收方明确告知发送方数据包已正确接收。
+ **<font style="background-color:#FBDE28;">否定确认</font>****（NAKs）**：接收方明确<u>告知</u>发送方数据包<u>已接收到错误</u>的数据。
+ **发送方在接收到NAK后****<font style="background-color:#FBDE28;">重传</font>****数据包**：当发送方接收到否定确认时，会重新传输相应的数据包。
3. **rdt2.0中的新机制（超越rdt1.0）**
+ **错误检测**：在数据传输过程中检测并发现错误。
+ **反馈**：从接收方到发送方的控制消息。
+ **重传**：在检测到错误或接收到否定确认时，重新传输数据包。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740462408477-101e716f-1534-406e-a245-b44b7a9ae0ab.png)

但是！有缺陷！fatal致命的 flaw缺点！

##### 存在的问题 -- 重复接收
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740462711300-e2d39713-2d04-4172-8167-386505a70d6b.png)

##### _**如何处理重复？**_
1. **如果ACK/NAK损坏，发送方重传当前数据包**

当发送方检测到ACK/NAK<u>消息损坏corrupted</u>时，它将重传当前的数据包，以确保接收方能收到正确的数据。

<details class="lake-collapse"><summary id="u15004245"><span class="ne-text">信息损坏</span></summary><p id="u75dfe147" class="ne-p"><span class="ne-text">ACK（确认）和NAK（否定确认）消息损坏指的是这些消息在传输过程中被破坏或无法正确解读。这并不一定意味着接收方没有收到消息，而是收到的消息已经被损坏，导致内容不完整或无法识别。</span></p><p id="u13c11fe5" class="ne-p"><span class="ne-text">具体来说，ACK/NAK消息损坏可能表现为以下几种情况：</span></p><ul class="ne-ul"><li id="u578877a3" data-lake-index-type="0"><strong><span class="ne-text">消息被篡改</span></strong><span class="ne-text">：在传输过程中，比特发生了变化，使得接收方无法正确解读消息的内容。</span></li><li id="uabce8267" data-lake-index-type="0"><strong><span class="ne-text">消息丢失</span></strong><span class="ne-text">：消息在传输过程中完全丢失，接收方根本没有收到任何消息。</span></li><li id="udf327178" data-lake-index-type="0"><strong><span class="ne-text">消息无效</span></strong><span class="ne-text">：接收方收到了消息，但由于消息内容损坏，无法判断是ACK还是NAK。</span></li></ul><p id="u30a59011" class="ne-p"><span class="ne-text">这种情况下，发送方会不知道接收方是否正确接收了数据包，因此无法确定下一步应该是重传数据包还是继续发送新的数据包。这会导致数据传输的不确定性和可能的重复数据包问题。</span></p><p id="u7539f176" class="ne-p"><span class="ne-text"> ACK/NAK消息损坏的例子可以类比为你发了一条短信，对方收到了却因为某种原因无法阅读，或者根本没收到。这时你不知道对方有没有收到短信，也不知道需不需要重发  </span></p></details>
2. **发送方给每个数据包添加序列号**

每个数据包都附带一个<u>唯一的序列号</u>。这有助于接收方识别并丢弃重复的数据包，确保数据的唯一性。

3. **接收方丢弃（不交付）重复数据包**

如果接收方接收到具有相同序列号的<u>重复数据包</u>，它将丢弃这些数据包，不再将它们交付给上层应用。

4. **<font style="color:#101E60;">stop and wait   这种机制被称为“停止-等待协议"</font>**

<font style="color:#101E60;">发送方在发送 </font>_**<font style="color:#101E60;">一个 </font>**_<font style="color:#101E60;">数据包后，必须等待接收方的确认才能</font>**<font style="color:#101E60;">发送下一个数据包</font>**<font style="color:#101E60;">。这种方式虽然简单，但有效地解决了ACK/NAK消息损坏带来的问题。</font>**<font style="color:#101E60;">  </font>**

<details class="lake-collapse"><summary id="u77eefaaa"><span class="ne-text">停止-等待协议中的超时机制？</span></summary><p id="u07d604db" class="ne-p"><strong><span class="ne-text" style="color: #101E60">Q：如果receiver的ACK在传输过程中损坏了，不就意味着一直没有下一个信息了吗 ？</span></strong></p><p id="u830cb524" class="ne-p"><span class="ne-text">A：“停止-等待协议”确实包含了超时机制，这是确保数据传输可靠性的关键部分。  </span></p><h5 id="wOHTr"><span class="ne-text">超时机制（Timeout Mechanism）</span></h5><p id="ue9d522bd" class="ne-p"><span class="ne-text">如果发送方在一定时间内没有收到接收方的ACK消息，它会认为数据包丢失或确认消息损坏，并自动重传该数据包。以下是超时机制的工作原理：</span></p><ol class="ne-ol"><li id="ub4723c50" data-lake-index-type="0"><strong><span class="ne-text">发送数据包</span></strong><span class="ne-text">：发送方发送一个数据包到接收方。</span></li><li id="u891f9ad5" data-lake-index-type="0"><strong><span class="ne-text">启动计时器</span></strong><span class="ne-text">：发送方在发送数据包后启动一个计时器。</span></li><li id="u9793f10c" data-lake-index-type="0"><strong><span class="ne-text">等待ACK</span></strong><span class="ne-text">：发送方等待接收方的ACK消息。</span></li><li id="ud847bebf" data-lake-index-type="0"><strong><span class="ne-text">接收ACK</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u8c499582" data-lake-index-type="0"><span class="ne-text">如果在计时器超时之前收到ACK，发送方会停止计时器并发送下一个数据包。</span></li><li id="u2e566070" data-lake-index-type="0"><span class="ne-text">如果在计时器超时后仍未收到ACK，发送方会重传该数据包，并重新启动计时器。</span></li></ul></ul></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740463061366-910f31cc-0f79-482c-b518-4d8efdf065eb.png)

> a priori  adj.先天的，推理的           retransmission n.重发
>

---

##### ARQ(Automatic Repeat Request，自动重传请求）
[https://blog.csdn.net/aaahuahua/article/details/119965804](https://blog.csdn.net/aaahuahua/article/details/119965804) - 这篇文章真的很清楚

+ <font style="color:rgba(0, 0, 0, 0.75);">ARQ是OSI模型中的</font><u><font style="color:rgba(0, 0, 0, 0.75);">错误纠正协议</font></u><font style="color:rgba(0, 0, 0, 0.75);">之一。</font>
+ <font style="color:rgba(0, 0, 0, 0.75);">它通过使用</font>**<font style="color:rgba(0, 0, 0, 0.75);">确认</font>**<font style="color:rgba(0, 0, 0, 0.75);">和</font>**<font style="color:rgba(0, 0, 0, 0.75);">重传</font>**<font style="color:rgba(0, 0, 0, 0.75);">这两个机制，</font>_<font style="color:rgba(0, 0, 0, 0.75);">在不可靠服务的基础上实现可靠的信息传输。</font>_
+ <font style="color:rgba(0, 0, 0, 0.75);">如果发送方在发送后一段时间之内</font>**<font style="color:rgba(0, 0, 0, 0.75);">没有收到确认帧，它通常会重新发送</font>**<font style="color:rgba(0, 0, 0, 0.75);">。</font>
+ <font style="color:rgba(0, 0, 0, 0.75);">重传的请求是</font>**<font style="color:rgba(0, 0, 0, 0.75);">自动进行</font>**<font style="color:rgba(0, 0, 0, 0.75);">的，接收方不需要请求发送方重传某个出错的分组</font>
+ <font style="color:rgba(0, 0, 0, 0.75);">ARQ包括停止等待ARQ协议和 连续ARQ协议</font>

---

##### A NAK-free Method
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740463357797-abb61b57-cfa8-49c7-8c99-b58e9a3d28dc.png)

+ **使用ACK而不是NAK**：该方法通过使用ACK（Acknowledgment）来代替NAK进行确认。
+ **接收方发送ACK给正确接收的具有最高顺序号的包**：当接收方正确接收到数据包后，它会发送一个ACK消息，<u>并包含该数据包的序列号</u>。
+ **接收方必须在ACK中包含被确认的包的序号**：ACK消息中必须明确包含被确认的数据包的序列号。
+ **发送方如果收到两个相同包的ACK，则知道接收方没有正确接收到被两次确认的包之后的那个包，然后重新发送这个包**：当发送方收到相同的ACK两次时，发送方会知道接收方没有正确接收在两次确认包之后的那个包，并会重传这个包。

:::color3
**！重点** ACK(N) means:

1. 我已经receive了packet(0)-packet(N)
2. waiting for packet(N+1)

:::

ACK(0)的意思是我已经receive了packet(0)，我需要的是packet(1)，而不是给我的packet(2)。

---

#### Data transfer over "Lossy" channels
<font style="color:rgb(0,0,0);">Underlying channel not only corrupt bits in packets but also lose packets (data or ACKs)</font>

+ <font style="color:rgb(0,0,0);">Corrupted</font>
+ <font style="color:rgb(0,0,0);">Lost</font>

##### <font style="color:rgb(0,0,0);">How to identify the packet lost?</font>
Ans：**<font style="color:rgb(0,0,0);">Set a timer </font>**<font style="color:rgb(192,0,0);">- Sender </font><font style="color:rgb(0,0,0);">waits "reasonable" amount of time for ACK (a Time-Out)  发送方等待一段“合理”的时间来接收确认信息, 如果在这个时间内没有收到确认信息，发送方就会认为数据包丢失了，从而触发重传机制  --  简而言之，这个方法通过设定一个</font>**<font style="color:rgb(0,0,0);">超时机制（Time-Out</font>**<font style="color:rgb(0,0,0);">），帮助识别和处理数据包丢失的情况 。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740705840991-8986fed8-3e8f-49e3-805e-78ed5afa558c.png)

#####  丢包现象的步骤和方法 ：
<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Sender adds sequence number to each packet. - </font>**发送方添加序列号**<font style="color:rgb(0,0,0);">：每个数据包都附加一个唯一的序列号，以便接收方能够区分不同的数据包。  </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Set a timer: sender waits “reasonable” amount of time for ACK (a Time-Out). </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Receiver must specify sequence # of packet being ACKed. - </font>**接收方指定ACK的序列号**<font style="color:rgb(0,0,0);">：接收方在发送确认信息时，必须指定所确认的数据包的序列号。这样，发送方就可以确定哪个数据包已被成功接收。  </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Sender </font>**<font style="color:rgb(0,0,0);">retransmits </font>**<font style="color:rgb(0,0,0);">current packet if ACK/NAK is corrupted 损坏 or lost. </font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Receiver discards 丢弃 (doesn’t deliver up) duplicate packet.</font>

<details class="lake-collapse"><summary id="uef7f6a1b"><span class="ne-text"> 序列号是用于重传还是丢弃？  </span></summary><p id="u60b6c831" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1740706226740-7ccde0f4-8212-4b6d-93e8-de6aedc2a0f9.png" width="546" title="" crop="0,0,1,1" id="ud43d6812" class="ne-image"></p></details>
##### Time-out时间的设置
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740706407473-920baf22-f343-4cc3-b937-37578275db68.png)

<小声：我不认可这张PPT>

过早超时。

1. _第二个确认如何处理？_
+ **第一次确认（ACK）**：**<font style="color:#5C8D07;">接收到第一个确认时，发送方会认为对应的数据包已经被成功接收，因此可以发送下一个数据包</font>**。例如，发送方发送了数据包pkt1并收到了ACK1，那么发送方会继续发送数据包pkt2。
+ **第二次确认（重复ACK）**：由于过早超时，发送方可能会**重传**数据包pkt1，接收方会再次发送ACK1。这个重复的ACK对于发送方来说是**冗余**的，因为发送方已经处理了第一个ACK并继续发送下一个数据包。因此，发送方会**<font style="color:#5C8D07;">忽略</font>**这个重复的ACK。
2. _如何避免？设置一个合适的time-out时间？- 拓展_

<details class="lake-collapse"><summary id="u53cf894f"><span class="ne-text">拓展</span></summary><h6 id="Lgmpp"><span class="ne-text">1. 估算网络延迟</span></h6><ul class="ne-ul"><li id="u131e33a6" data-lake-index-type="0"><strong><span class="ne-text">测量RTT（Round-Trip Time）</span></strong><span class="ne-text">：RTT是指从发送方发出数据包到接收方，再从接收方返回确认包所需的时间。可以通过工具（如ping命令）来测量RTT。</span></li><li id="u8fe98767" data-lake-index-type="0"><strong><span class="ne-text">动态调整RTT</span></strong><span class="ne-text">：由于网络状况可能会变化，可以采用动态调整的方法，持续测量RTT并进行适当调整。</span></li></ul><h6 id="qaX0i"><span class="ne-text">2. 使用动态超时算法</span></h6><ul class="ne-ul"><li id="u5cc24faf" data-lake-index-type="0"><strong><span class="ne-text">自适应超时算法</span></strong><span class="ne-text">：如TCP中的Karn/Partridge算法，可以根据实际测量的RTT值动态调整超时时间。例如，超时时间可以设为RTT的平均值加上一定的偏差，以应对网络波动。</span></li></ul><h6 id="nVpRV"><span class="ne-text">3. 设置合理的初始超时值</span></h6><ul class="ne-ul"><li id="u6d7c161a" data-lake-index-type="0"><strong><span class="ne-text">根据经验设定初始值</span></strong><span class="ne-text">：根据网络环境和应用需求，设定一个初始的超时时间。例如，局域网内可以设为几十毫秒，而广域网可能需要几百毫秒。</span></li><li id="u97f8daa9" data-lake-index-type="0"><strong><span class="ne-text">逐步优化</span></strong><span class="ne-text">：在实际应用中，根据网络延迟情况和确认信息的返回时间，逐步优化和调整超时时间。</span></li></ul><h6 id="tornY"><span class="ne-text">4. 监控和分析网络状况</span></h6><ul class="ne-ul"><li id="uc113a432" data-lake-index-type="0"><strong><span class="ne-text">实时监控</span></strong><span class="ne-text">：使用网络监控工具实时监控网络延迟和数据包丢失情况，及时调整超时时间。</span></li><li id="u4703cdbf" data-lake-index-type="0"><strong><span class="ne-text">分析日志</span></strong><span class="ne-text">：通过分析网络传输日志，了解延迟和丢包情况，优化超时设置。</span></li></ul><h6 id="H3o4j"><span class="ne-text">5. 考虑重传策略</span></h6><ul class="ne-ul"><li id="ud3e35ba9" data-lake-index-type="0"><strong><span class="ne-text">快速重传</span></strong><span class="ne-text">：在检测到少量丢包时，可以采用快速重传策略，不必等待超时时间结束。例如，TCP中的快速重传机制会在接收到三个重复ACK后立即重传数据包。</span></li><li id="u24715b60" data-lake-index-type="0"><strong><span class="ne-text">冗余传输</span></strong><span class="ne-text">：对于关键数据，可以使用冗余传输策略，即发送多个副本，以增加数据传输的可靠性。</span></li></ul><p id="u5738ac75" class="ne-p"><span id="w5quK" class="ne-bookmark-inline"><a href="https://www.cnblogs.com/nn-y/p/13503026.html#:~:text=%E4%BF%A1%E9%81%93%E7%9A%84%E6%95%88%E7%8E%87%E5%8D%B3%E4%B8%BA%E4%BF%A1%E9%81%93%E7%9A%84%E5%88%A9%E7%94%A8%E7%8E%87%EF%BC%8C%E6%98%AF%E6%8C%87%E5%8F%91%E9%80%81%E6%96%B9%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%8F%91%E9%80%81%E5%91%A8%E6%9C%9F%E7%9A%84%E6%97%B6%E9%97%B4%E5%86%85%EF%BC%8C%E6%9C%89%E6%95%88%E7%9A%84%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E6%97%B6%E9%97%B4%E5%8D%A0%E6%95%B4%E4%B8%AA%E5%8F%91%E9%80%81%E5%91%A8%E6%9C%9F%E7%9A%84%E6%AF%94%E7%8E%87%E3%80%82%20%E4%BE%8B%E5%A6%82%2C%E5%8F%91%E9%80%81%E6%96%B9%E4%BB%8E%E5%BC%80%E5%A7%8B%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE%EF%BC%8C%E5%88%B0%E6%94%B6%E5%88%B0%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%A1%AE%E8%AE%A4%E5%B8%A7%E4%B8%BA%E6%AD%A2%EF%BC%8C%E7%A7%B0%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%91%A8%E6%9C%9F%EF%BC%8C%E8%AE%BE%E4%B8%BAT%E3%80%82%20%E5%8F%91%E9%80%81%E6%96%B9%E5%9C%A8%E8%BF%99%E4%B8%AA%E5%91%A8%E6%9C%9F%E5%86%85%E5%85%B1%E5%8F%91%E9%80%81L%E6%AF%94%E7%89%B9%E7%9A%84%E6%95%B0%E6%8D%AE%EF%BC%8C%20%E5%8F%91%E9%80%81%E6%96%B9%E7%9A%84%E4%BC%A0%E8%BE%93%E9%80%9F%E7%8E%87%E4%B8%BAC%EF%BC%8C%E5%88%99%E5%8F%91%E9%80%81%E6%96%B9%E7%94%A8%E4%BA%8E%E5%8F%91%E9%80%81%E6%9C%89%E6%95%88%E6%95%B0%E6%8D%AE%E7%9A%84%E6%97%B6%E9%97%B4%E4%B8%BAL%2FC%2C%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E4%B8%8B%E4%BF%A1%E9%81%93%E7%9A%84%E5%88%A9%E7%94%A8%E7%8E%87%E4%B8%BA%EF%BC%88L%2FC%EF%BC%89%2FT%E3%80%82,%E4%BF%A1%E9%81%93%E5%90%9E%E5%90%90%E7%8E%87%20%3D%20%E4%BF%A1%E9%81%93%E5%88%A9%E7%94%A8%E7%8E%87%20%2A%20%E5%8F%91%E9%80%81%E6%96%B9%E7%9A%84%E5%8F%91%E9%80%81%E9%80%9F%E7%8E%87" target="_blank">信道利用率和吞吐量 - naonaoa - 博客园</a></span></p></details>
### Stop-and-wait Protocol 性能限制
 在停-等协议中，发送方发送一个数据包后，必须等待接收方的确认（ACK）才能发送下一个数据包。这种简单的协议虽然容易实现，但在高延迟或高带宽的网络中性能表现不佳。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740706923091-274a3eca-ac0d-449b-8059-3ffe5ca8c71c.png)

+ 链接带宽：1 Gbps（10^9 bits/sec）
+ 传播延迟：15 毫秒（millisecond）
+ 数据包大小：8000 bits

<details class="lake-collapse"><summary id="ub30df1ac"><span class="ne-text">计算详解</span></summary><p id="u5d44ad9c" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1740706957225-c95798ee-2dea-4b05-9323-a6361885ab38.png" width="443.3333740234375" title="" crop="0,0,1,1" id="Cy5pZ" class="ne-image"></p><p id="ue1e370cb" class="ne-p"><span class="ne-text">！这个就是</span><strong><span class="ne-text">信道利用率</span></strong></p><p id="u8515dd89" class="ne-p" style="text-align: left"><strong><span class="ne-text" style="color: rgb(34, 34, 34)">是指发送方在一个发送周期的时间内，</span></strong><strong><span class="ne-text" style="color: #5C8D07">有效的发送数据所需要的时间</span></strong><strong><span class="ne-text" style="color: rgb(34, 34, 34)">占整个发送周期的比率。</span></strong></p><p id="u5690a251" class="ne-p" style="text-align: left; text-indent: 2em"><em><span class="ne-text" style="color: rgb(34, 34, 34)">发数据≠传播数据</span></em></p><p id="u17655462" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1740706992318-61acaeaf-dfb0-447d-ab04-ba6c60ae6066.png" width="449.66668701171875" title="" crop="0,0,1,1" id="nn8FU" class="ne-image"></p></details>
 由于停-等协议在每次发送数据包后都需要等待确认，导致了很长的等待时间，特别是在高延迟或高带宽的网络中。结果是发送方的大部分时间都在等待确认，而不是实际传输数据，极大地限制了物理资源的使用效率。  

<details class="lake-collapse"><summary id="u5f74f3a4"><span class="ne-text">为什么RTT中传播延迟有两个？</span></summary><p id="u2b402daf" class="ne-p"><span class="ne-text"> 在网络通信中，往返时间（Round-Trip Time, RTT）包括两个传播延迟，这是因为数据包和确认信息（ACK）都需要通过网络传输  </span></p></details>
<details class="lake-collapse"><summary id="u8941fdba"><span class="ne-text">关于RTT?</span></summary><p id="u01a7e157" class="ne-p"><span class="ne-text">TCP中的RTT指的是“往返时延”（Round-Trip Time），</span></p><p id="ud5838bf0" class="ne-p"><span class="ne-text">即从发送方发送数据开始，到发送方接收到来自接收方的确认消息所经过的时间。</span></p><p id="u24b6de1e" class="ne-p"><span class="ne-text">RTT时延通常由三部分决定：链路的传播时间、末端系统的处理时间、路由器等网络中间节点的缓存和排队时间。</span></p><p id="u25f33aa2" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1740708058471-81d8d90b-d7ed-4043-a0ab-dacb88912f55.png" width="1200" title="" crop="0,0,1,1" id="ua72191bd" class="ne-image"></p><p id="u8f791fe5" class="ne-p"><span class="ne-text"> RTT（往返时间）的主要目的是衡量数据包在网络上传输所需的时间，以帮助设定超时时间和评估网络性能。虽然处理时间确实是RTT的一部分，但通常在实际应用中，它被视为一个较小的因素，相比传播延迟和传输延迟显得次要。  </span></p><pre data-language="plain" id="EAffQ" class="ne-codeblock language-plain"><code> 发送方发送数据包 pkt1，并开始计时。
 数据包 pkt1 传播到接收方。
 接收方接收数据包 pkt1，并处理数据包。
 接收方发送确认信息（ACK1）返回给发送方。
 确认信息（ACK1）传播回发送方。
 发送方接收到确认信息（ACK1），计时结束。</code></pre><p id="ud34d2214" class="ne-p"><span id="DsQ4c" class="ne-bookmark-inline"><a href="https://blog.csdn.net/meihualing/article/details/129585743#:~:text=%E5%8F%91%E9%80%81%E6%97%B6%E5%BB%B6%E5%8F%88%E7%A7%B0%E4%B8%BA%E4%BC%A0%E8%BE%93%E6%97%B6%E5%BB%B6%EF%BC%8C%E6%98%AF%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E6%97%B6%E9%97%B4%EF%BC%8C%E6%98%AF%E4%B8%BB%E6%9C%BA%E6%88%96%E8%80%85%E8%B7%AF%E7%94%B1%E5%99%A8%E4%BB%8E%E7%BD%91%E5%8D%A1%E6%88%96%E8%80%85%E8%B7%AF%E7%94%B1%E5%99%A8%20%E9%98%9F%E5%88%97%20%E9%80%92%E4%BA%A4%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE%E7%BB%99%E7%BD%91%E7%BB%9C%E9%93%BE%E8%B7%AF%E5%AE%8C%E6%88%90%E5%8F%91%E9%80%81%E6%95%B0%E6%8D%AE%E5%B8%A7%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E6%97%B6%E9%97%B4%E3%80%82%20%E6%B3%A8%E6%84%8F%E5%AE%83%E6%98%AF%E5%8F%91%E7%94%9F%E5%9C%A8%E6%9C%BA%E5%99%A8%E5%86%85%E9%83%A8%E7%9A%84%EF%BC%8C%E5%AE%83%E4%B8%8E%E4%B8%8B%E9%9D%A2%E8%A6%81%E8%AF%B4%E7%9A%84%E4%BC%A0%E6%92%AD%E6%97%B6%E5%BB%B6%E6%9C%80%E5%A4%A7%E7%9A%84%E4%B8%8D%E5%90%8C%E5%B0%B1%E6%98%AF%E5%AE%83%E4%B8%8E%E4%BC%A0%E8%BE%93%E5%AA%92%E4%BB%8B%E7%9A%84%E8%B7%9D%E7%A6%BB%E6%AF%AB%E6%97%A0%E5%85%B3%E7%B3%BB%E3%80%82,%E5%8F%91%E9%80%81%E6%97%B6%E5%BB%B6%3D%E6%95%B0%E6%8D%AE%E5%B8%A7%E9%95%BF%E5%BA%A6%2F%E5%8F%91%E9%80%81%E7%9A%84%E9%80%9F%E7%8E%87%E3%80%82%20%E4%BC%A0%E6%92%AD%E6%97%B6%E5%BB%B6%E6%98%AF%E7%94%B5%E7%A3%81%E6%B3%A2%E5%9C%A8%20%E4%BF%A1%E9%81%93%20%E4%B8%AD%E4%BC%A0%E6%92%AD%E4%B8%80%E5%AE%9A%E7%9A%84%E8%B7%9D%E7%A6%BB%E8%8A%B1%E8%B4%B9%E7%9A%84%E6%97%B6%E9%97%B4%E3%80%82%20%E5%AE%83%E7%9A%84%E6%97%B6%E5%BB%B6%3D%E4%BC%A0%E8%BE%93%E5%AA%92%E4%BB%8B%E9%95%BF%E5%BA%A6%2F%E7%94%B5%E7%A3%81%E6%B3%A2%E5%9C%A8%E4%BF%A1%E9%81%93%E4%B8%8A%E7%9A%84%E4%BC%A0%E6%92%AD%E9%80%9F%E7%8E%87%E3%80%82" target="_blank">ip网络的时延：发送时延(传输时延)，传播时延，处理时延，排队时延-CSDN博客</a></span></p><p id="u1bd6dcf7" class="ne-p"><strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">发送时延</span></strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">又称为</span><strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">传输时延</span></strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">，是发送数据所需要的时间，是主机或者路由器从网卡或者路由器</span><span class="ne-text" style="color: rgb(252, 85, 49); font-size: 16px">队列</span><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">递交发送数据给网络链路完成发送数据帧所需要的时间。</span></p><p id="uf5af283c" class="ne-p"><strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">传播时延</span></strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">是电磁波在</span><a href="https://so.csdn.net/so/search?q=%E4%BF%A1%E9%81%93&amp;spm=1001.2101.3001.7020" data-href="https://so.csdn.net/so/search?q=%E4%BF%A1%E9%81%93&amp;spm=1001.2101.3001.7020" target="_blank" class="ne-link"><span class="ne-text" style="color: rgb(252, 85, 49)">信道</span></a><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">中传播一定的距离花费的时间。它的时延=传输媒介长度/电磁波在信道上的传播速率。这意味着信号传送的距离越远，它的时延就越大！</span></p><h6 id="UTQhj"><span class="ne-text" style="color: rgb(77, 77, 77)">网络中如何考虑传播时延和传输时延的影响</span></h6><p id="ubadec9e9" class="ne-p"><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">在于固定的网络下（比如上述的二个主机之间的时延），带宽和传播时延都是固定的，所以：</span></p><ul class="ne-ul"><li id="u18b8a9d9" data-lake-index-type="0"><strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">报文长度越大，</span></strong></li></ul><p id="ub77c346c" class="ne-p"><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">需要的发送时延就越长，“发送时延/(发送时延+传播时延)”的比值就越大，所以主要考虑发送时延的影响。</span></p><ul class="ne-ul"><li id="ub73d077d" data-lake-index-type="0"><strong><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">报文长度越短</span></strong></li></ul><p id="uc6699503" class="ne-p"><span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">需要的发送时延就越短，“发送时延/(发送时延+传播时延)”的比值就越大，相应的传播时延占用的总时延的比例就越大，相应的传播时延的影响就越大。</span></p></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740708675897-c5c43994-3c18-4cd4-88cb-cdca943ec163.png)

结论： <font style="color:rgb(255,0,0);">Low efficiency, Low utilization</font>

#### 总结 Stop-and-wait Protocol 等-停协议
1. <u><font style="color:rgb(0,0,0);">Features </font></u>
+ <font style="color:rgb(0,0,0);">It has a timer implementation 定时器实现</font>

 协议中包含定时器。当发送方发送一个数据包时，会启动一个定时器，以等待接收方的确认信息（ACK）。如果在设定时间内未收到确认信息，定时器会触发重传机制，重传该数据包。  

+ <font style="color:rgb(0,0,0);">It has bit error detection mechanism -  位错误检测机制  </font>

<font style="color:rgb(0,0,0);"> 协议具有检测位错误的机制。发送方在发送数据包时会附加错误检测码  ，接收方接收到数据包后会进行错误检测。如果检测到错误，接收方会丢弃该数据包并要求重传。  </font>

+ <font style="color:rgb(0,0,0);">Timer should be set for each </font>**<font style="color:rgb(0,0,0);">individual packet </font>**
+ <font style="color:rgb(0,0,153);"></font><font style="color:rgb(0,0,0);">Only 1 packet is sent at a time </font>
+ <font style="color:rgb(0,0,0);">No pipelining - 无管道机制</font>

<font style="color:rgb(0,0,0);">协议不支持管道机制（Pipelining）。在管道机制中，多个数据包可以同时在网络中传输，而停-等协议中，每次只能传输一个数据包。这种设计的简单性带来了一定的传输延迟。  </font>

+ <font style="color:rgb(0,0,0);">Sender/Receiver window size is 1 </font>
2. <u><font style="color:rgb(0,0,0);">Advantage </font></u>
+ <font style="color:rgb(0,0,153);"></font><font style="color:rgb(0,0,0);">Simple </font>
3. <u><font style="color:rgb(0,0,0);">Disadvantage </font></u>
+ <font style="color:rgb(0,0,0);">Efficiency and utilization are very low</font>

---

### Pipelined protocols
#### Features：
1. **<font style="color:rgb(255,0,0);">The range of sequence numbers </font>****<font style="color:rgb(0,0,0);">must be increased. </font>**

**序列号范围增加**：在更复杂的协议中（例如滑动窗口协议），由于支持同时发送和接收多个数据包，序列号范围必须增加以区分不同的数据包。

+ **停-等协议**<font style="color:rgb(0,0,0);">：每次只发送一个数据包，因此只需要一个简单的序列号（例如0和1）来区分当前数据包和重传数据包。</font>
+ **滑动窗口协议**<font style="color:rgb(0,0,0);">：为了提高传输效率，可以同时发送多个数据包。这就需要更大的序列号范围来区分所有未确认的数据包。例如，如果滑动窗口大小为N，则需要能够使用N个不同的序列号。</font>
2. **<font style="color:rgb(0,0,0);">The sender and the receiver may have to </font>****<font style="color:rgb(255,0,0);">buffer more than one packet</font>****<font style="color:rgb(0,0,0);">.</font>**

**发送方和接收方可能需要缓存多个数据包**：为了支持滑动窗口协议等高级机制，发送方和接收方需要缓存多个数据包。

+ **停-等协议**<font style="color:rgb(0,0,0);">：发送方只需要缓存当前发送的数据包，接收方只需要缓存当前接收的数据包。</font>
+ **滑动窗口协议**<font style="color:rgb(0,0,0);">：发送方需要缓存所有已发送但未确认的数据包，以便在必要时进行重传。接收方需要缓存所有已接收但未按顺序排列的数据包，以便在收到所有前置数据包后按顺序交付给上层应用。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740710377620-1f28acc5-a971-451f-a4e0-1d0737864672.png)

#### Utilization ↑
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740710494811-3a063225-5666-45e5-b260-bf5e1be238a0.png)

#### 两种典型的pipelined protocols：
+ go-Back-N
+ selective repeat

##### GO-BACK-N
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740710618472-ca02e328-6b42-4ffd-b6b0-b0dd2093a76a.png)

**传输效率提高（Improved Transmission Efficiency）**：通过允许发送多个未确认的数据包，**<font style="color:#601BDE;">提高了带宽利用率。  </font>**

**窗口大小（Window Size）****<font style="color:#601BDE;">：</font>**协议引入了一个大小为 N 的窗口，称为窗口大小。发送方可以在没有收到确认信息的情况下，最多发送 N 个数据包**<font style="color:#601BDE;"></font>**

**未确认数据包数量（UnACKed Packets）**：发送方可以在网络中最多存在 N 个未确认的数据包。在接收到确认信息之前，可以持续发送这些数据包。

**<font style="color:#4861E0;">相关概念</font>**

+ **窗口大小（Window Size）**：发送方和接收方都维护一个窗口，用于跟踪和管理多个未确认的数据包。窗口的大小决定了发送方可以同时发送的最大数据包数量。
+ **序列号（Sequence Number）**：每个数据包都附带一个唯一的序列号，用于区分不同的数据包，并确保数据包的有序接收。
+ **累计确认（Cumulative Acknowledgement）**：接收方可以发送累计确认信息（ACK），确认它已成功接收到的所有数据包。这种方式减少了ACK的数量，提高了传输效率。
+ **处理乱序数据包（Out-of-Order Packets）**：当接收方接收到的数据包顺序不正确时，它会缓存这些数据包，并在接收到所有前置数据包后按序交付给上层应用。
+ **定时器和超时（Timer and Timeout）**：发送方为每个数据包设置定时器，如果在超时时间内未收到确认信息，会触发重传机制，重新发送未确认的数据包。

---

 **运行过程**  

> 这里就涉及窗口的概念了，若不理解详情见Flow control中关于窗口的详解
>

GBN：**Go-Back-N** 后退N步

 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740712736773-4c6936f4-fe06-498e-bdbb-885b21cda281.png)

+ 窗口内的数据包序列号相邻。
+ 发送方可以在窗口未满的情况下持续发送数据包。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740713021944-3d98a5f3-bcd6-4621-8cc1-79fe1d2f5340.png)

 累计确认（Cumulative Acknowledgement）  

+ 接收方总是发送最高序列号的正确接收数据包的确认信息（ACK）。
+ 接收方**<font style="color:#2F4BDA;">只需记住期望的下一个序列号</font>**。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740713142961-7c605248-f010-491f-9a7f-65e49941d33c.png)

处理乱序数据包（Out-of-Order Packets）

+ 接收方**丢弃乱序**数据包，不进行缓存。
+ 接收方重新发送最高序列号的确认信息（ACK）。



<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740713184507-2bf0f4cd-8a72-47f5-bb5b-66b36d79c583.png)

**定时器与超时（Timer and Timeout）**：

+ **单一定时器（Single Timer）**：GBN协议使用单一的定时器，_**<font style="color:#4861E0;">该定时器表示最早发送但尚未确认的数据包。-- </font>**_**<font style="color:#2F4BDA;">最早未确认的数据包开始的所有数据包。  </font>**
+ **ACK到达时重启定时器**：如果收到ACK但仍有其他未确认的数据包，定时器会重启。
+ **超时后重传所有未确认数据包**：在超时情况下，发送方会重传所有之前发送但未确认的数据包。

<details class="lake-collapse"><summary id="u58052766"><span class="ne-text">示例</span></summary><ol class="ne-ol"><li id="u828b2969" data-lake-index-type="0"><strong><span class="ne-text">发送数据包</span></strong><span class="ne-text">：</span></li></ol><p id="u271f317d" class="ne-p"><span class="ne-text">发送方连续发送数据包 pkt0、pkt1、pkt2 和 pkt3。</span></p><ol start="2" class="ne-ol"><li id="u0a82bf8b" data-lake-index-type="0"><strong><span class="ne-text">数据包丢失</span></strong><span class="ne-text">：</span></li></ol><p id="u3ac5f7b7" class="ne-p"><span class="ne-text">数据包 pkt2 在传输过程中丢失（用红色标记表示丢失）。</span></p><ol start="3" class="ne-ol"><li id="u928038d9" data-lake-index-type="0"><strong><span class="ne-text">接收ACK</span></strong><span class="ne-text">：</span></li></ol><p id="u72e40280" class="ne-p"><span class="ne-text">接收方接收到 pkt0 和 pkt1，并发送确认信息 ACK0 和 ACK1。</span></p><ol start="4" class="ne-ol"><li id="ud244a721" data-lake-index-type="0"><strong><span class="ne-text">等待超时</span></strong><span class="ne-text">：</span></li></ol><p id="ubf7f8e33" class="ne-p"><span class="ne-text">由于数据包 pkt2 丢失，接收方没有发送 ACK2。</span></p><p id="uc507cb45" class="ne-p"><span class="ne-text">发送方在设定的超时时间内未收到 ACK2，因此触发超时机制。</span></p><ol start="5" class="ne-ol"><li id="ua522f4f3" data-lake-index-type="0"><strong><span class="ne-text">重传数据包</span></strong><span class="ne-text">：</span></li></ol><p id="u659b8dd0" class="ne-p"><span class="ne-text">发送方重传数据包 pkt2、pkt3、pkt4 和 pkt5。</span></p><ol start="6" class="ne-ol"><li id="u30fbc509" data-lake-index-type="0"><strong><span class="ne-text">接收ACK并确认数据包</span></strong><span class="ne-text">：</span></li></ol><p id="u8c0c8b86" class="ne-p"><span class="ne-text">接收方接收并确认重传的数据包 pkt2、pkt3、pkt4 和 pkt5，并发送 ACK2、ACK3、ACK4 和 ACK5。</span></p></details>
---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740713835140-c9a199b7-1c7c-4f24-b619-baee52f8775d.png)

发送方操作

1. **给每个数据包添加序列号**
    - 发送方为每个数据包分配一个唯一的序列号，用于区分不同的数据包。
2. **窗口（Window）的概念**
    - 窗口是由一组相邻的序列号组成的集合，**窗口大小决定了发送方可以同时发送的最大数据包数量。**<font style="color:rgb(0,0,0);">The size of the collection is the sender's window size.</font>
    - 在图中，发送方窗口的大小由N表示。例如，如果N=4，则窗口内包含4个数据包序列号。
3. **发送数据包**
    - 如果窗口未满（即窗口中仍有可用序列号），发送方会继续发送数据包。
    - 发送的数据包会包含其唯一的序列号。
4. **累计确认（****<font style="color:#2F4BDA;">Cumulative ACKs</font>****）**
    - 接收方发送的确认信息（ACK）是累计的，即确认序列号不大于某个特定值的所有数据包均已成功接收。
    - 例如，如果接收方发送ACK2，则表示序列号为0、1和2的数据包均已成功接收。
5. **定时器和超时（Timer and Timeout）**
    - **单一定时器（Single Timer）**：发送方使用一个单一定时器来跟踪最早发送但未确认的数据包。
    - **超时后重传**：如果定时器超时，发送方会重传所有已发送但未确认的数据包。
    - 定时器的设定时间通常基于网络的往返时间（RTT）加上一些额外的安全时长。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740714028553-6e05fb61-73f2-4299-bb47-fda416be8d51.png)

_**<font style="color:#2F4BDA;">优点</font>**_

1. **发送方可以同时发送多个数据包**：
    - 在GBN协议中，发送方可以在等待确认（ACK）的同时，连续发送多个数据包，这有效地提高了带宽利用率。
2. **效率高于停-等协议**：
    - 由于GBN允许多个未确认的数据包在网络中同时传输，相比于每次仅发送一个数据包的停-等协议，GBN显著提高了传输效率。
3. **可以配置窗口大小**：
    - GBN协议的窗口大小可以根据网络状况和需求进行调整，从而优化传输效率。

_**<font style="color:#2F4BDA;">缺点</font>**_

1. **发送方需要存储最后N个未确认的数据包**：
    - 发送方必须缓存所有未确认的数据包，以便在必要时重传。随着窗口大小的增加，缓存的需求也会增加。
2. **错误数据包后的多个无错误数据包重传**：
    - 如果某个数据包在传输过程中出现错误或丢失，发送方需要重传该数据包以及其后的所有未确认数据包，即使这些数据包本身没有错误。这可能导致不必要的数据重传，浪费带宽。
3. **在往返延迟大且数据传输速率高的情况下效率低**：
    - 在网络延迟较大或数据传输速率较高的情况下，GBN的重传机制可能会导致低效，因为大量未确认数据包的重传会浪费宝贵的网络资源。

---

##### Selective repeat
**选择性重传**（Selective Repeat）是一种数据传输协议，用于解决由于丢失或损坏的数据包而引起的重传问题。

+ 核心思想：只重传怀疑在接收方丢失/损坏的数据包，而不是ALL
+ 关键概念：
+ Sender window size 发送窗口大小 - 发送方可以在不接受确认的情况下连续发送的数据包数量。
    - Window size N
+ Sequence number 序列号
+ **<font style="color:#DF2A3F;">Not</font>** <u>cumulative acknowledgement</u> 非累计确认
    -  The receiver **<u><font style="color:#213BC0;">individually acknowledges</font></u>****<font style="color:#213BC0;"> </font>**all correctly received packets  <font style="color:#213BC0;">接收方对每个成功接收到的数据包发送单独的确认（ACK）信息  </font>
+ How to deal with out-of-order packets
    -  接收方可能会以不同的顺序接收到数据包，这种情况称为<u>乱序接收</u>。为了确保数据的正确性和完整性，接收方需要将这些数据包按<u>正确顺序重新排列</u>。  
+ Timer and timeout
    -  当数据包n超时（即在设定时间内未收到确认），发送方会重新发送数据包n并重启该数据包的计时器  

<details class="lake-collapse"><summary id="u7ef9a6e3"><span class="ne-text"> 单个数据包的计时器设置与窗口大小之间的关系</span></summary><p id="u1a788799" class="ne-p"><strong><span class="ne-text">并发传输</span></strong><span class="ne-text">：窗口大小越大，发送方可以同时传输的数据包越多，每个数据包都有独立的计时器。这意味着发送方可以更高效地利用网络带宽，从而提高数据传输的吞吐量。  </span></p><p id="u802463fd" class="ne-p"><strong><span class="ne-text">网络条件</span></strong><span class="ne-text">：在网络良好且延迟较低的情况下，可以使用较大的窗口大小和相对较短的计时器设置，以最大化数据传输速度。而在网络不稳定或延迟较高的情况下，需要适当减小窗口大小并调整计时器，以确保可靠性。  </span></p></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740879740753-1239755f-2e15-4605-85b1-26a9b30d1870.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740880109114-00040a50-5786-4e25-ac8f-8181aa1033f2.png)

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740880169925-b5ac97fd-a0f2-43a9-bbb5-4436ac0ce246.png)

<details class="lake-collapse"><summary id="u7a21d432"><span class="ne-text">详细解释</span></summary><p id="u22176030" class="ne-p"><span class="ne-text">选择性重传协议用于确保数据包在传输过程中不丢失或被错误接收。以下是对图示(b)问题的详细解释：</span></p><ul class="ne-ul"><li id="u6f0b9db4" data-lake-index-type="0"><span class="ne-text">在图示(b)中，数据包0因超时被重传，但接收方将其错误地视为新数据。</span></li><li id="u255afff2" data-lake-index-type="0"><span class="ne-text">这种情况下，接收方的窗口大小设置过大，导致无法区分新数据包和重传数据包。</span></li><li id="uae3d79ea" data-lake-index-type="0"><span class="ne-text">为避免这类问题，</span><strong><em><span class="ne-text">序列号大小和窗口大小 </span></em></strong><span class="ne-text">之前需要满足：</span></li></ul><p id="uad0e524b" class="ne-p" style="text-indent: 2em; margin-left: 2em"><span class="ne-text">序列号大小&gt;2*窗口大小</span></p></details>
##### overview of pepelined protocols 流水线
**Go-Back-N**

+ Cumulative ack
+ timer for oldest unacked packet
+ when timer expires, retransmit _all _unacked packets

**Selective Repeat**

+ Individual ack
+ timer for each unacked packet

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740880935782-b70c02b4-1e0f-4d5d-8909-5a2a0ccdf740.png)

**选择性重传协议（Selective Repeat Protocol）**

图片展示了选择性重传协议中的几种机制及其功能。以下是图片内容的中英对照详细讲解：

1. **校验和（Checksum）**

Used to detect bit errors in a transmitted packet.

用于检测传输数据包中的比特错误。

2. **计时器（Timer）**

****Used to timeout/retransmit a packet, possibly because the packet (or its ACK) was lost within the channel.

用于超时/重传数据包，可能是因为数据包（或其确认ACK）在通道中丢失。

> <font style="color:rgb(0,0,0);">考虑timer timeout的角度:packet lost /ACK lost /Long delay </font>
>
> <font style="color:rgb(0,0,0);">time out? too large-waste; too short-- lots of retransmission</font>
>

3. **序列号（Sequence number）**

****Used for sequential numbering of packets of data flowing from sender to receiver. Gaps in the sequence numbers of received packets allow the receiver to detect a lost packet. Packets with duplicate sequence numbers allow the receiver to detect duplicate copies of a packet.

****用于对从发送方到接收方的数据包进行顺序编号。接收的数据包序列号中的间隙使接收方能够检测到丢失的数据包。具有重复序列号的数据包使接收方能够检测到数据包的重复副本。

4. **确认（Acknowledgment）**

****Used by the receiver to tell the sender that a packet or set of packets has been received correctly. Acknowledgments will typically carry the sequence number of the packet or packets being acknowledged. Acknowledgments may be individual or cumulative, depending on the protocol.

****由接收方用于告知发送方数据包或数据包集合已正确接收。确认通常会携带被确认的数据包的序列号。确认可以是单个的或累积的，取决于协议。

5. **否定确认（Negative acknowledgment）**

****Used by the receiver to tell the sender that a packet has not been received correctly. Negative acknowledgments will typically carry the sequence number of the packet that was not received correctly.

****由接收方用于告知发送方数据包未正确接收。否定确认通常会携带未正确接收的数据包的序列号。

6. **窗口，流水线（Window, pipelining）**

The sender may be restricted to sending only packets with sequence numbers that fall within a given range. By allowing multiple packets to be transmitted but not yet acknowledged, sender utilization can be increased over a stop-and-wait mode of operation.

发送方可能仅限于发送序列号在给定范围内的数据包。通过允许多个数据包传输但尚未确认，可以提高发送方的利用率，相对于停止等待模式的操作。

---

#### Comparison
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740880914440-1fb3813d-3dbc-484e-9022-3ddba88e05cb.png)

**详细解释**

1. 带宽利用率（Bandwidth Utilization）
+ _Stop and Wait（停等协议）_：由于每次只能发送一个数据包，必须等到接收到确认后才能发送下一个数据包，因此带宽利用率较低。
+ _Go-Back-N（回退N步协议）_：允许发送方连续发送多个数据包，带宽利用率中等，但如果有数据包丢失，需要重传该数据包及其后的所有数据包。
+ _Selective Repeat（选择性重传协议）_：允许发送方连续发送多个数据包，并且只重传丢失或损坏的数据包，带宽利用率高。
2. 最大发送窗口大小（Maximum Sender Window Size）
+ _Stop and Wait_：发送窗口大小为1，因为每次只能发送一个数据包。
+ _Go-Back-N_：发送窗口大小等于序列号空间的大小。/ <u>其实不大于就可以，</u>序列号→∞也是OK的
    - 发送窗口大小 ≤\leq 序列号空间大小。
    - 序列号空间的大小应至少等于发送窗口大小，以确保每个发送的数据包都有唯一的序列号。
+ _Selective Repeat_：发送窗口大小等于序列号空间的一半。=Receiver
3. 最大接收窗口大小（Maximum Receiver Window Size）
+ _Stop and Wait_：接收窗口大小为1，因为每次只能接收一个数据包。
+ _Go-Back-N_：接收窗口大小为1，因为需要按顺序接收数据包。
+ _Selective Repeat_：接收窗口大小等于序列号空间的一半，可以处理乱序接收的数据包

---



## <font style="color:#AD1A2B;">五、Connection-oriented transport: TCP</font>
### TCP：Overview
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740986731013-5a2dbd86-5350-4fb6-801a-fee6c7dfa4b6.png)

+ **Point-to-point** 点对点通信协议， 每次连接只有一个发送方和一个接收方。
+ **Reliable, in-order byte stream**. 可靠的、有序的字节流  -  TCP保证数据在传输过程中不会丢失，并且接收方接收到的数据包按发送顺序排列。  
+ **Pipelined** 流水线传输
    - TCP congestion control
    - TCP flow control
+ **Full duplex data** 全双工数据 
    -  Bi-directional data flow in the same connection   在同一连接中实现双向数据流 -  TCP支持双向的数据传输，允许在同一连接中同时发送和接收数据  
    -  MSS: maximum segment size (application layer data)  - MSS定义了每个数据段的**最大大小**。  
+ **Connection-oriented **面向连接
    - TCP setup-three-way handshaking(exchange of control message) initialized sender and receiver state before data exchange. TCP建立连接：三次握手（控制消息交换）在数据交换前初始化发送方和接收方的状态  
    - TCP teardown-close a TCP connection
+ **Send & receive buffers**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740883270716-f4b92ecc-c1eb-4cb5-8e8c-73fd5392a6fc.png)

    -  应用程序将数据写入TCP发送缓冲区。  
    -  数据在发送缓冲区中被分段并准备通过网络发送。  
    -  数据段通过网络传输到接收方。  
    -  接收到的数据段存储在接收缓冲区中。  
    -  应用程序从TCP接收缓冲区读取数据。  
    -  插座接口表示应用程序与TCP缓冲区之间的接口。  

---

### Segment structure
#### B站_TCP报文段首部格式
+ 为了实现可靠传输，TCP采用了**面向字节流**的方式。
+ TCP将应用进程交付下来的<u>应用报文看作字节流</u>，存入TCP发送缓存，但TCP在发送数据时，是从发送缓存取出一部分或者全部字节并给其**添加一个首部**使之成为**TCP报文段**再进行发送
    - TCP报文段=首部+数据载荷

        <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740883895472-089725a7-2050-473c-a0cb-717970f0eefc.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740883973516-cc5121b1-dce7-4e75-b4a2-50a891d37ed0.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740884197802-f41dd694-ea9a-4458-a4ae-27468a790cf9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740884271938-6dbe6e66-8113-404d-9e62-3edf239d8421.png)

确认标志位ACK：取值为1时确认号字段有效；取值为0时确认号字段无效。

TCP规定，在连接建立后所有传送的TCP报文段都必须把ACK置1。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740884686863-af77e750-e640-4c60-8b9e-6a4cc6bb6707.png)

Client→Server 序号+数据载荷长度=确认号

Server→Client 确认号=序号

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740884950295-0121089e-87e6-4fe5-8c70-c09f2ae99725.png)

**<font style="color:#01B2BC;">保留</font>**：占6比特，保留为今后使用，但目前应置为0.

**<font style="color:#01B2BC;">窗口</font>**：占16比特，以字节为单位。指出发送本报文段的一方的接收窗口。

+ 窗口值作为接收方<u>让发送方设置其发送窗口的依据</u>
+ 这是以接收方的接受能力来控制发送方的发送能力--流量控制。
+ Min(接收窗口，拥塞窗口)=发送窗口

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740885573515-a839ab4f-b4d8-436c-8cc6-4591cc6f8e29.png)

**<font style="color:#01B2BC;">同步标志位SYN</font>**:在TCP连接建立时用来同步序号。

**<font style="color:#01B2BC;">终止标志位FIN：</font>**用来释放TCP连接。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740885690760-9097428c-1b06-4d65-aa22-2f0c07ae61be.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740885700100-302e1ab3-799b-4adc-bef3-dea9d280964c.png)

+ **实现紧急操作：**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740885745612-36e8c4b2-08fa-4dda-98f6-258e609df1f9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740885828654-b3460056-8578-4769-a55a-a2180b036673.png)

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740883390093-4b4575d0-a2a6-477c-9edd-6a256802facf.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740987807764-eef3c63d-1bf9-4057-8fa3-094437a3cc1f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740987842715-5855ff17-c8a7-4e56-a44b-efd72f8b169d.png)

### Reliable data transfer
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740885925225-fa01f964-e4cc-41e5-9729-0038e34d6632.png)

1. **客户端应用程序处理数据流**（Client Application Process Passes Data Stream）：客户端应用程序通过插座接口（socket interface）将数据传递给TCP层。插座接口是应用程序与TCP协议栈之间的接口，通过它，应用程序可以发送和接收数据。
2. **TCP 处理数据**（TCP Handles Data）：

运行在客户端的TCP协议负责处理这些数据。TCP协议确保数据的可靠传输。

3. **数据缓冲**（Direct Data to Send Buffer）：

TCP将接收到的数据放入发送缓冲区，以便后续处理。

4. **拆分数据块**（Break Data into Chunks）：

TCP将数据流拆分成更小的数据块，以便于传输和管理。

5. **生成TCP报文段**（Form TCP Segments）：

TCP为每个数据块添加TCP头部信息，包括序列号和校验和等，以形成TCP报文段。

6. **传输到网络层**（Pass to Network Layer）：

最后，TCP将生成的TCP报文段传递到网络层，通过网络进行传输。

#### Buffer
<font style="color:rgb(192,0,0);">Sending buffer: </font><font style="color:rgb(0,0,0);">buffer the outgoing data. </font>

<font style="color:rgb(192,0,0);">Receiving buffer: </font><font style="color:rgb(0,0,0);">buffer the incoming data.</font>

<font style="color:rgb(0,0,0);">The TCP does not know when the application will ask for any received data. TCP buffers incoming data so it is ready when the applications require them.</font>

---

#### Sequence No. & ACK No.
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740886345763-8e964507-d960-4d7f-8dd2-f6f01e328e7b.png)

1. Sequence Number
    1. Unstructured , Ordered Number. TCP将数据视为无结构的、有序的字节流。
    2. Label Bytes with Integer Number 用整数对字节进行变化
    3. Unit of Sequence Number  序列号是段中第一个数据的编号，单位为字节。  
2. Acknowledgement Number
    1. 确认号-在host A中，确认号时host A期望从host B中接收到的下一个字节的序列号

---

                    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740886947651-1512986f-a91a-4141-9885-a97920847296.png)

 TCP 序列号（Seq. #'s）和确认号（ACKs）  

+ 序列号： 序列号用于标识每个TCP段的数据顺序。每个段的序列号是该段中第一个字节的编号。这有助于接收方将数据重新按正确顺序排列。  
+ 确认号： 期望从对端接收的下一个字节的序列号。  
    - 累计确认 Cumulative ACK
+  接收方如何处理乱序段（How receiver handles out-of-order segments）  
    -  TCP规范没有规定，由实现者决定。  常见的方法是缓存乱序段，直到可以按顺序交付。

 图片展示了一个简单的Telnet场景，包括主机A和主机B之间的<u>通信过程</u>：

1. **用户在主机A上输入字符'C'（User types 'C' on Host A）**

主机A发送一个段，序列号=42，确认号=79，数据='C'，到主机B。

2. **主机B确认接收到的字符'C'并回显'C'（Host B acknowledges receipt of 'C' and echoes back 'C'）**

主机B确认收到的数据，并回显'C'，序列号=79，确认号=43，数据='C'。

3. **主机A确认回显的字符'C'（Host A acknowledges receipt of echoed 'C'）**

主机A确认接收到的回显字符'C'，序列号=43，确认号=80。

---

#### Timer and Timeout
1. **TCP 使用单个计时器（TCP Uses a Single Timer）**

在TCP协议中，虽然可以同时发送多个数据包，但通常只使用一个计时器来跟踪这些数据包的确认情况。这个计时器主要用于监控最早未确认的数据包。

2. **重启计时器（Restart Timer）**

The restart timer is triggered 触发 when:

+ A segment is sent and the timer is not running for any other segment.-当一个报文段被发送且没有其他报文段的计时器正在运行时。
+ A timeout event happens-当发生超时事件时.
+ An ACK (Acknowledgment) is received.当收到确认（ACK）时-当发送方收到接收方的确认（ACK）时，会重启计时器。这样可以继续跟踪后续数据包的传输状态，并确保所有数据包都能被正确接收和确认。

<details class="lake-collapse"><summary id="ud947075d"><span class="ne-text">Q：只使用一个Timer，这是Go-Back-N吗</span></summary><p id="uedc20d20" class="ne-p"><span class="ne-text"> TCP协议的计时器使用与Go-Back-N协议有相似之处，因为都使用单个计时器来监控最早未确认的数据包。但TCP可以根据具体实现优化重传机制，减少不必要的重传。  </span></p></details>
---

#### RTT & timeout
1.  How to set TCP timeout value?  -- **<font style="color:#DF2A3F;">Longer than RTT,</font>** but RTT varies -  超时值需要设置得足够长，以覆盖数据包传输和确认的整个过程，但由于网络条件的变化，RTT并不恒定。  
    1. _**Too short:**_ premature过早的 timeout, unnecessary retransmissions - 如果超时值设置得太短，TCP可能会在网络延迟稍大的情况下误以为数据包丢失，从而触发不必要的重传，浪费带宽和资源。  
    2. _**Too long**_：Slow reaction to segent loss, lead to large data transfer delay. 如果超时值设置得太长，当数据包真正丢失时，TCP的反应会变得迟缓，导致数据传输的总延迟增加。_**  **_
2. **How to estimate RTT?**
+  **SampleRTT **是测量每个数据包从发送到接收到确认之间的时间。这种测量值用于计算RTT，但重传的数据包不应该被计入，因为它们会影响RTT的准确性。 
    -   <font style="color:rgb(0,0,0);">Average several </font>_<font style="color:rgb(0,0,0);">recent </font>_<font style="color:rgb(0,0,0);">measurements, not just current </font>**<font style="color:rgb(0,0,0);">SampleRTT</font>**
    - 由于网络状况的变化，SampleRTT值会有所波动，为了得到一个更稳定和准确的RTT估算值，需要对多个SampleRTT值进行平均处理，而不是仅仅依赖当前的SampleRTT。  
+ **<font style="color:rgb(0,0,0);">Ignore retransmissions</font>**

**<font style="color:rgb(0,0,0);">eg.</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740889272023-3ad6ed16-e163-486d-a4dc-d0dd3e34e057.png)

+ 这是一个指数加权移动平均（Exponential Weighted Moving Average, EWMA）公式，其中过去样本的影响随着时间的推移以指数速度减小。典型的α值为0.125。
+  图中比较了SampleRTT和EstimatedRTT的曲线，表明SampleRTT值会有所波动，而EstimatedRTT曲线较为平滑，反映了估算的RTT。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740889292390-54aced5a-0e31-4cbf-9114-34696e8e9e13.png)

+  超时间隔计算（Timeout Interval Calculation）  
+ 偏差的估算（Estimating Deviation）
    -  这是用来估算SampleRTT偏差的公式，表示SampleRTT与EstimatedRTT的差异。典型的β值为0.25。  
+ **设置“安全边界”**：

公式中的 4×DevRTT4 \times \text{DevRTT} 是一个“安全边界”，用于应对RTT的变化和抖动。这意味着如果RTT的变化较大，安全边界会随之增大，从而避免频繁的错误超时。

---

+ **估算RTT**：使用指数加权移动平均公式来平滑RTT的估算值，从而提供一个更稳定的RTT估算。
+ **设置超时间隔**：通过计算EstimatedRTT和偏差DevRTT，并设置安全边界来确定超时间隔，以确保在RTT变化的情况下数据传输的可靠性。

---

#### TCP reliable data transfer
##### brief introduction
** 1. TCP创建可靠数据传输服务（TCP creates a reliable data transfer service）**

+ ****TCP通过以下机制在IP的不可靠服务之上创建可靠的数据传输服务：
    - **流水线段（Pipelined segments）**

 TCP可以同时发送多个数据包，而不必等待每个数据包的确认。通过这种方式，TCP可以提高数据传输的效率，减少等待时间。  

    - **累积确认（Cumulative acknowledgments, acks）**

 接收方发送累积确认（ACK），确认所有按顺序接收到的数据包。这样可以减少确认消息的数量，提高传输效率。  

    - **单一重传计时器（A single retransmission timer）**

TCP使用单一重传计时器来监控未确认数据包的状态。如果计时器超时，发送方会重传未确认的数据包。

**2. TCP的重传机制（Retransmissions in TCP）**

+ ****TCP的重传由以下两种情况触发：
    - **超时事件（Timeout events）**

 如果在预定时间内未收到数据包的确认，TCP会触发超时事件，重传未确认的数据包。这是为了确保数据不会因为丢失或传输错误而未被确认。  

    - **重复确认（Duplicate acknowledgments, acks）**

 当接收方接收到相同的数据包时，会发送重复确认（ACK）。当发送方收到多个重复确认时，会认为数据包可能丢失或传输错误，从而触发重传机制。  

---

##### Sender events
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740889916203-6829c1e4-b0f1-4980-beba-f5ebc74afc0f.png)

TCP发送方在数据传输和重传过程中的三个主要事件：

1. **<font style="color:#5C0036;">从上层应用接收数据</font>**
    1.  创建包含序列号的报文段  create segment with seq #
    -  序列号是段中第一个数据字节的字节流编号  
    - **创建报文段**：当发送方从上层应用接收到数据时，会创建一个包含序列号的TCP报文段。序列号是该报文段中第一个数据字节在字节流中的编号。  
    2.  如果计时器未运行，则启动计时器  
    -  计时器用于最早未确认的报文段  
    - **启动计时器**：如果当前没有其他报文段的计时器在运行，则启动计时器。计时器用于跟踪最早未确认的报文段，确保数据包按时重传。  
    3. 到期间隔
    - ****计时器的到期间隔设定为超时间隔（TimeOutInterval），即在预定时间内未收到确认时触发重传。  
2. **<font style="color:#5C0036;">计时器超时</font>**
+ **重传报文段**：当计时器超时时，发送方会重传导致超时的报文段。这样可以确保数据包不会因为丢失或传输错误而未被接收方确认。
+ **重启计时器**：重传报文段后，发送方会重启计时器，以继续跟踪重传报文段的状态。
3. **<font style="color:#5C0036;">接收确认（ACK）  </font>**
+ **确认未确认的报文段**：当发送方收到接收方的确认（ACK）时，如果该确认包含之前未确认的报文段，发送方会更新已确认的状态。
+ **启动计时器**：如果仍有未确认的报文段，发送方会重启计时器，继续监控未确认报文段的状态。

---

##### Retransmission
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740890209908-f898a252-a898-4ea5-ad2c-b5195f25bb38.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740890231047-3229dcec-6295-4409-a330-20f1c9817457.png)

+ **主机A知道主机B已接收到所有编号到119的字节，因此主机A不会重传前两个数据段。**

这张图片展示了TCP通信中的累积确认（Cumulative Acknowledgment）机制，展示了主机A和主机B之间的数据传输过程。

这张图片展示了TCP中累积确认机制的工作原理：

+ **数据段传输**：发送方将数据拆分为多个段，每个段都有唯一的序列号。
+ **累积确认**：接收方通过发送累积确认（ACK）来确认已接收的数据范围。
+ **重传机制**：如果数据丢失或延迟，发送方会根据接收到的重复确认触发重传。

通过这些机制，TCP能够确保数据在不可靠的网络环境中可靠传输，并有效应对数据丢失和延迟问题。

---

##### TCP fast retransmit
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740890539648-bdd9dc93-ac1c-4339-8225-2f4716b0052a.png)

 TCP协议中的快速重传机制，旨在更快地处理丢失的数据包  

** 1. 普通超时机制的问题（Issues with Timeout Period）**

+ **time-out period often relatively long** -超时时间通常相对较长
+ **long delay before resending lost packet**-在重传丢失的数据包之前有较长的延迟
+ **detect lost segments via duplicate ACKs** -通过重复确认检测丢失的数据包
+ **sender often sends many segments back-to-back** 发送方经常连续发送多个数据包
+ **if segment is lost, there will likely be many duplicate ACKs**：如果某个数据包丢失，很可能会有许多重复确认

**解释**：

+ **超时时间问题**：TCP的普通超时机制中，超时时间通常设定得较长，以确保不会频繁触发重传。然而，这可能导致当数据包丢失时，重传延迟较长。
+ **重复确认检测丢失数据包**：TCP能够通过接收方发送的重复确认（ACK）来检测丢失的数据包。当接收方连续收到多个相同的ACK时，表明某个数据包可能丢失。

** 2. TCP快速重传（TCP Fast Retransmit）**

+ **if sender receives 3 ACKs for same data ("triple duplicate ACKs")**：
    - 如果发送方收到3个相同数据的ACK（“三重重复确认”）
+ **resend unacked segment with smallest seq #**：
    - 重传未确认的序列号最小的数据包
+ **likely that unacked segment lost, so don't wait for timeout**：
    - 未确认的数据包可能丢失，因此无需等待超时

**解释**：

+ **三重重复确认（Triple Duplicate ACKs）**：<font style="color:#2F4BDA;">当发送方连续收到三个相同的ACK时，</font>表示接收方未收到某个数据包。此时，发送方会立即重传最早未确认的那个数据包，而不必等待超时事件。
+ **快速重传**：通过这种机制，TCP能够更快地重传丢失的数据包，减少数据传输的延迟，提高传输效率。

<details class="lake-collapse"><summary id="uc808e0de"><span class="ne-text">//我的理解</span></summary><p id="u18ac1d8c" class="ne-p"><span class="ne-text"> 超时的时间间隔（Timeout Interval）设置通常会长于接收到确认（ACK）的时间间隔，也就是说，它要比数据段（Segment）的传输时间更长。这样做的原因是确保数据包在传输过程中有足够的时间到达接收方并获得确认，从而避免不必要的重传。  </span></p></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740890852818-005a56e5-4d00-44a9-a808-e33984323ad2.png)

### Flow control
#### b站_滑动窗口机制
**流量控制（flow control）**- 让发送方的发送速率不要太快，要让接收方来得及接收

    - 实现方式-**<font style="color:#2F4BDA;">滑动窗口</font>**机制

         <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740499130357-2f317eb4-c9b5-4cc6-93a3-19ebaba4d424.png)

<u>不推荐向后收缩</u>：也许消息已经发出去后，通知窗口缩小

      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740499272979-23c898bc-a1ee-4f38-baf0-745535174745.png)

**<u>发送方</u>****：收到确认后，发送窗口向前移动**，即窗口不包含已发送并收到确认的内容。

窗口包含：1.已发送未确认   2.未发送但允许发送

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740533775619-663b765c-0c34-47c3-bb33-accf0d4e0cbc.png)

**<u>接收方</u>****：收到发送的字节，窗口向前移动**，同时向发送方发送确认。

1. 补充：
    1. 对于不按序到达的数据，TCP无明确规定。
    - 若接收方把不按序到达的数据一律丢弃，那么接收窗口的管理比较简单。但这样做对网络资源的利用不利，因为发送方会重复传送较多的数据。
    - TCP通常对不按序到达的数据，先临时存放在接收窗口，等到字节流中所缺少的字节收到后，再按序交付上层的应用进程。
2. 虽然发送方的发送窗口是根据接收方的接收窗口设置的，但在同一时刻，发送方的发送窗口并不总是和接收窗口一样大。
    - 网络传送窗口值需要经历一段时间滞后，并且这个时间还是不确定的。
    - 发送方还可能根据网络当时的拥塞情况适当减小自己的发送窗口。
3. TCP的通信是全双工。每一方都在发送和接收报文。因此，每一方都有自己的发送窗口和接收窗口。

                      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740534501677-f513bc4b-8521-42b2-9ae8-f0b4d2f59a3b.png)

---

#### PPT
**发送缓存**用于存储待发送和未确认的数据，并通过重传机制确保数据不丢失。

**接收缓存**用于存储接收到的数据，并通过重组机制确保数据按正确顺序传递给上层应用。

                                <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740902823874-c94cdbf3-7c64-459b-8496-0118fdacc589.png)

 图示展示了接收方协议栈（Receiver Protocol Stack），数据从网络层流向应用进程，并通过TCP插座接收缓冲区（TCP Socket Receiver Buffers）进行传递。  

1. **网络层传输数据**：数据从发送方通过网络传输到接收方的网络层。
2. **TCP接收缓冲区**：接收方的TCP协议栈将数据存储在TCP接收缓冲区中，等待应用层处理。
3. **应用层处理数据**：应用层从TCP接收缓冲区中读取数据并进行处理。

---

##### BUFFER OVERFLOW
+  What happens if network layer delivers data faster than application layer removes data from socket buffers?  
    - ANS: **BUFFER OVERFLOW.**

 the sender may easily overflow the receive buffer if the sender sends too much data too quickly and the application at the receiver is relatively slow at reading the data.   如果发送方发送的数据过多过快，而接收方应用程序读取数据的速度相对较慢，则发送方可能容易导致接收缓冲区溢出。  

1. **缓冲区溢出（Buffer Overflow）**：当接收缓冲区中的数据积压过多，超过了缓冲区的容量时，会发生缓冲区溢出。这样可能导致新接收的数据无法存储，导致数据丢失。
2. **发送方调整数据发送速率**：为避免缓冲区溢出，TCP协议中有流量控制机制，例如滑动窗口协议，用于调节发送方的数据发送速率，确保接收方有足够的时间处理数据。

##### Receive window
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740903597317-ec592d36-6642-47ce-a7f2-d727ea1ca576.png)

+  **流量控制**：接收方愿意接受的字节数”（flow control: # bytes receiver willing to accept）， 是TCP流量控制机制的一部分。  
+ **流量控制机制 Sliding Window Protocol**：通过接收窗口的大小，限制发送方的数据发送速率，确保接收方的缓冲区不会溢出。  
    -  滑动窗口协议是一种流量控制协议，用于管理数据传输过程中的数据包流量。它通过一个移动的窗口来控制发送和接收的数据量，以确保数据的可靠传输和接收。  
    -  <u>发送窗口</u>是指发送方在未收到确认（ACK）之前可以连续发送的最大数据量。它定义了当前可以发送的数据包范围。  
    - <u> 接收窗口</u>是指接收方能够接收和处理的数据量。它表示接收方当前愿意接受的最大数据量。  
    -  <u>窗口大小</u>是发送窗口和接收窗口的大小。它决定了发送方和接收方在等待确认之前可以发送和接收的数据量。  
    -  <u>窗口滑动</u>是指发送窗口和接收窗口在数据传输过程中的移动。当数据包被确认或接收时，窗口会向前滑动，以允许新的数据包发送和接收。  

##### Flow control
**Receiver controls sender**, so sender won't overflow receiver's buffer by transmitting too much , too fast.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740903928934-ef1a54cb-94de-4f57-a2bf-0a38f09eebeb.png)

1.  接收方通过在TCP报文段头部包含**<font style="color:#2F4BDA;">接收窗口（</font>**`**<font style="color:#2F4BDA;">rwnd</font>**`**<font style="color:#2F4BDA;">）字段</font>**<font style="color:#2F4BDA;">的值，告知发送方它目前有多少空闲的缓冲区空间可以接受数据</font>。这是TCP流量控制的一部分，用于避免接收方缓冲区溢出。  
2. **接收缓冲区大小设置（RcvBuffer size）**
+ 接收缓冲区的大小可以通过插座选项进行设置，典型的默认值是4096字节。不过，具体的大小可以根据实际需求进行调整。  
3.  **自动调整接收缓冲区（Auto-adjust RcvBuffer）**
+  许多操作系统会根据当前的网络状况和应用需求自动调整接收缓冲区的大小，以提高数据传输的效率和稳定性。  
4.  **发送方限制未确认数据（Sender Limits Unacknowledged Data）**
+  发送方根据接收方的`rwnd`值来限制未确认数据的数量，确保不会发送超过接收方可接收的数据量。这有助于防止接收方缓冲区溢出  
5.  **保证接收缓冲区不会溢出（Ensure Buffer Doesn't Overflow）    **
+  通过接收窗口的流量控制机制，确保接收缓冲区不会因数据量过多而溢出，保证数据的可靠传输。 

---

**图示**展示了TCP接收方的缓冲区结构：

+ **RcvBuffer**：接收缓冲区，用于存储接收到的数据。
+ **rwnd**：接收窗口，表示当前可用的缓冲区空间。
+ **Buffered Data**：缓冲的数据，已接收到但尚未传递给应用程序的数据。
+ **Free Buffer Space**：空闲的缓冲区空间，可用于接收新的数据段。

这张图片详细说明了TCP流量控制的工作原理：

+ **接收方通过接收窗口广告可用的缓冲区空间**。
+ **发送方根据接收窗口的值限制未确认的数据量**。
+ **保证接收缓冲区不会溢出**，确保数据的可靠传输。

---

### connection management
#### TCP运输连接管理--TCP的连接建立_B站网课
+ TCP是**面向连接**的协议，基于运输连接来传送TCP报文段。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740534768547-2614220a-9ab0-4ba2-aaae-c8761168865b.png)

+ TCP的连接建立要解决以下三个问题：

          <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740534821432-d38c9072-b4f0-46e9-bd5f-92a7a8773226.png)

+ TCP的 "三报文" 握手

<u>我的理解：</u>

为什么Client是最先发送邀约的？”吃饭吗？“，其行为具有主动权

因为Client是主动打开连接，发送TCP连接请求

而Server是被动打开。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740538669132-27767200-3baf-4305-826c-829e151ccdd4.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740538642940-d473c29b-a20f-4b12-85af-55ede64ba010.png)

<font style="color:rgb(79, 79, 79);">情景模拟 1.0</font>

<font style="color:rgb(77, 77, 77);">发送方：老铁，可以听得到我说话吗，老铁。</font>

<font style="color:rgb(77, 77, 77);">接收方：可以听到，你听得到吗？</font>

<font style="color:rgb(77, 77, 77);">发送方：听到了，那我开始说正事了。</font>

**<font style="color:rgb(77, 77, 77);background-color:#FBDE28;">三次握手的过程即是通信双方相互告知序列号起始值， 并确认对方已经收到了序列号起始值的必经步骤。如果只是两次握手， 至多只有连接发起方的起始序列号能被确认， 另一方选择的序列号则得不到确认</font>**

<font style="color:rgb(77, 77, 77);">SYN=1 → 连接请求报文段</font>

<font style="color:rgb(77, 77, 77);">seq=x → x为TCP</font><u><font style="color:rgb(77, 77, 77);">客户进程所选择的初始序号</font></u>

<font style="color:rgb(77, 77, 77);">seq=y → y为TCP</font><u><font style="color:rgb(77, 77, 77);">服务器进程所选择的初始序号</font></u>

<font style="color:rgb(77, 77, 77);">TCP规定，SYN=1的报文段不能携带数据，但要消耗掉一个序号</font>

<font style="color:rgb(77, 77, 77);">seq = x / ack = x+1：ack=x+1表示接收方已经收到了序列号为x的字节，并且期望接收下一个字节（即x+1）  </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740539294654-fc83ca07-d95a-416c-8d8f-0b4569891a60.png)

---

#### PPT内容
##### How is a TCP connection established?
**步骤1：客户端请求连接（Client Initiates Connection）**

+ An application process running in Host A wants to initiate a connection with another application process running in Host B.
    - **客户端进程（Client Process）**：发起连接的应用程序进程称为客户端进程。
    - **服务器进程（Server Process）**：接收连接请求的应用程序进程称为服务器进程。

**步骤2：客户端通知传输层（Client Notifies Transport Layer）**

客户端应用程序首先通知客户端<font style="color:#2F4BDA;">传输层</font>，它希望与主机B中的某个进程建立连接。

**命令示例**：

+ java

```java
Socket clientSocket = new Socket("hostname", "portNumber");
```

    - **Socket**：Java中的Socket类用于创建客户端和服务器之间的TCP连接。
    - **hostname**：主机名（或IP地址），表示要连接的服务器。
    - **portNumber**：端口号，表示服务器上监听连接请求的特定端口。

**步骤3：三次握手建立连接（Three-Way Handshake Establishes Connection）**

1. **第一次握手：SYN**：
    - ****客户端发送一个SYN（同步序列号）报文段给服务器，表示希望建立连接，并发送初始序列号。
2. **第二次握手：SYN-ACK**：
    - 服务器接收到SYN报文段后，返回一个SYN-ACK（同步-确认）报文段，表示同意连接，并发送自己的初始序列号。
3. **第三次握手：ACK**：
    - 客户端接收到SYN-ACK报文段后，返回一个ACK（确认）报文段，确认连接已建立并接收服务器的序列号。

---

TCP连接的建立过程通过三次握手来完成，确保客户端和服务器之间的连接是可靠且同步的。三次握手步骤如下：

1. **SYN**：客户端发送SYN请求建立连接。
2. **SYN-ACK**：服务器响应SYN请求，并同意连接。
3. **ACK**：客户端确认连接已建立。

##### Connection Management
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740904637301-012a305d-c17d-4fec-a3d9-b84a008f85d0.png)

+ **同意建立连接**：确保双方都愿意建立连接。
+ **同意连接参数**：包括序列号、缓冲区大小和流量控制信息（如接收窗口，`RcvWindow`）。
+  客户端发起连接请求，服务器响应请求，完成连接的建立。  

##### Three way handshaking
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740904780555-d0fea9ea-993f-42e1-9213-c43945f23ce3.png)

TCP三次握手过程包括以下三个步骤：

1. **客户端发送SYN报文段**：客户端发起连接请求并发送初始序列号。
2. **服务器回复SYNACK报文段**：服务器同意连接请求，回复SYNACK报文段并发送初始序列号。
3. **客户端回复ACK报文段**：客户端确认接收到SYNACK，并回复ACK报文段，确认建立连接。

---

**步骤1：客户端发送SYN报文段（Client sends TCP SYN segment to server）**

+ 客户端主机（Host A）发送一个TCP <font style="color:#2F4BDA;">SYN（同步）报文段</font>到服务器。
    - SYN报文段用于<font style="color:#2F4BDA;">发起连接请求，并同步序列号</font>。
+ 该报文段指定了初始序列号。
    - 客户端的初始序列号将在后续通信中用作数据传输的参考点。
+ 这个SYN报文段不包含数据。

**步骤2：服务器接收SYN，回复SYNACK报文段（Server receives SYN, replies with SYNACK segment）**

+ <u>服务器主机（Host B）接收到SYN报文段后，分配缓冲区</u>并初始化连接参数。
    - 服务器分配缓冲区以准备接收和发送数据。
+ 服务器回复一个<font style="color:#2F4BDA;">SYNACK（同步-确认）</font>报文段，表示<font style="color:#2F4BDA;">同意建立连接</font>。
    - SYNACK报文段同时包含服务器的初始序列号和对客户端SYN报文段的确认。
+ 该报文段也指定了服务器的初始序列号。

**客户端接收SYNACK，回复ACK报文段（Client receives SYNACK, replies with ACK segment, which may contain data）**

+ 客户端接收到SYNACK报文段后，<font style="color:#2F4BDA;">回复一个ACK（确认）报文段</font>。
+ 这个ACK报文段可能包含数据。
    - ACK报文段确认客户端已接收到服务器的初始序列号，并确认建立连接。
    - 从这一刻起，客户端和服务器之间的连接被认为是可靠且已建立的，可以进行数据传输。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740904843848-cfe805d3-189c-4b7e-83e1-d71574fd0d12.png)

1. **客户端启动**：客户端从 LISTEN 状态开始，并通过选择一个初始序列号 x，并发送带有 SYNbit=1 和 Seq=x 的 TCP SYN 消息，进入 SYNSENT 状态。
2. **服务器响应**：服务器从 LISTEN 状态开始，通过选择一个初始序列号 y，并发送带有 SYNbit=1、Seq=y、ACKbit=1 和 ACKnum=x+1 的 TCP SYNACK 消息，进入 SYN RCVD 状态。
3. **客户端确认**：客户端接收到 SYNACK 消息后，发送一个带有 ACKbit=1 和 ACKnum=y+1 的 ACK，以确认服务器的 SYNACK。这个段可能包含从客户端到服务器的数据。
4. **服务器确认**：服务器接收到 ACK 后，表明客户端在线，客户端和服务器都进入 ESTAB（已建立）状态。

**注意：** 在 TCP 协议中，**<font style="color:#4C16B1;">确认位（Acknowledge bit）</font>**。  

**状态说明**：

+ **LISTEN**：在这个状态下，服务器正在等待来自客户端的连接请求。服务器打开一个套接字，并监听指定的端口以等待连接。
+ **SYNSENT**：在这个状态下，客户端已经发送了一个 SYN 数据包，并正在等待服务器的 SYN-ACK 响应。客户端希望与服务器建立连接。
+ **SYN RCVD**：在这个状态下，服务器已经接收到客户端的 SYN 数据包，并发送了一个 SYN-ACK 响应。服务器在等待客户端发送 ACK 数据包以确认连接。
+ **ESTAB（ESTABLISHED）**：一旦客户端和服务器都发送并接收了必要的 SYN 和 ACK 数据包，连接进入 ESTAB 状态。此时，双方可以开始进行数据传输。

##### 
##### 5.2.4. Closing a connection
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905235241-f003aca7-bfbb-4bc1-b660-1f7369a0c818.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905245770-23a0b62f-148c-4049-abca-a58e67eff6cb.png)

**步骤 1**：客户端关闭套接字，并发送一个带有 FIN（结束）控制段的 TCP 消息给服务器。

**步骤 2**：服务器接收到 FIN 后，回复一个 ACK（确认）消息。然后，服务器也关闭连接，并发送一个带有 FIN 的消息。

+ 注意：服务器也可以选择关闭连接。

**步骤 3**：客户端接收到服务器的 FIN 后，回复一个 ACK。客户端进入“时间等待”状态，并将在接收到 FIN 后响应 ACK。

**步骤 4**：服务器接收到 ACK 后，连接关闭。

---

## <font style="color:#AD1A2B;">六、TCP congestion control 拥塞控制</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740906861735-efef13ab-36c8-4382-964c-ed41054507fa.png)

<details class="lake-collapse"><summary id="ub51f9f78"><span class="ne-text">拥塞发生的原因？</span></summary><ol class="ne-ol"><li id="u0e6d1cb1" data-lake-index-type="0"><strong><span class="ne-text">高网络流量</span></strong><span class="ne-text">：当多个用户或设备同时尝试传输大量数据时，网络资源（如带宽）可能会被耗尽，导致拥塞。</span></li><li id="u97e8b20f" data-lake-index-type="0"><strong><span class="ne-text">带宽限制</span></strong><span class="ne-text">：某些网络链路的带宽有限，如果传输的数据量超过了带宽限制，就会发生拥塞。</span></li><li id="ud0cd6cce" data-lake-index-type="0"><strong><span class="ne-text">网络拓扑变化</span></strong><span class="ne-text">：网络中的路由变化或拓扑变化（如网络设备故障、链路中断）可能导致数据包被重新路由，增加特定路由或节点上的负载。</span></li><li id="udbe0757e" data-lake-index-type="0"><strong><span class="ne-text">缓冲区溢出</span></strong><span class="ne-text">：网络设备（如路由器、交换机）的缓冲区容量有限，当数据包到达速率超过设备处理能力时，缓冲区可能会溢出，导致数据包丢失和拥塞。</span></li><li id="uc63736cd" data-lake-index-type="0"><strong><span class="ne-text">网络协议效率低下</span></strong><span class="ne-text">：某些网络协议在处理数据传输时效率较低，可能会导致拥塞。例如，TCP 协议在网络拥塞时会减慢传输速率，但有时调整不及时，导致拥塞持续。</span></li><li id="u466b8cea" data-lake-index-type="0"><strong><span class="ne-text">恶意攻击</span></strong><span class="ne-text">：如分布式拒绝服务（DDoS）攻击，攻击者通过向目标网络发送大量数据包，企图耗尽网络资源，导致网络拥塞。</span></li><li id="uad7bbf4a" data-lake-index-type="0"><strong><span class="ne-text">不良网络配置</span></strong><span class="ne-text">：不当的网络配置（如路由策略、带宽分配）可能导致某些网络节点或链路上的流量过大，从而引发拥塞。</span></li></ol></details>
<details class="lake-collapse"><summary id="u5b80b585"><span class="ne-text"> 拥塞控制是干什么的？  </span></summary><p id="uc6ca3af4" class="ne-p"><span class="ne-text">拥塞控制的主要目标是防止和管理网络中的拥塞情况，以确保数据能够高效、可靠地传输。它通过调整数据发送速率来确保网络资源不会被过度使用，从而保持网络的稳定性和性能。</span></p><p id="uedb1f63f" class="ne-p"><span class="ne-text">具体来说，拥塞控制的功能包括：</span></p><ol class="ne-ol"><li id="ubdeb9bca" data-lake-index-type="0"><strong><span class="ne-text">检测网络拥塞</span></strong><span class="ne-text">：通过监测丢包率、延迟等网络指标，识别是否出现了拥塞。</span></li><li id="uad47550b" data-lake-index-type="0"><strong><span class="ne-text">调整数据传输速率</span></strong><span class="ne-text">：根据网络状况动态调整数据传输速率。当检测到拥塞时，减少传输速率；当网络状况良好时，逐步增加传输速率。</span></li><li id="u647a41c2" data-lake-index-type="0"><strong><span class="ne-text">预防网络崩溃</span></strong><span class="ne-text">：避免网络中某些节点或链路过载，防止整个网络因拥塞而崩溃。</span></li><li id="uf267f774" data-lake-index-type="0"><strong><span class="ne-text">提高网络利用率</span></strong><span class="ne-text">：确保网络资源被合理分配和使用，提高整体网络的传输效率。</span></li></ol></details>
[https://blog.csdn.net/love_668/article/details/116913790](https://blog.csdn.net/love_668/article/details/116913790)

###  基本概念
在某段时间，若**对网络中的某一资源的需求超过了该资源所能提供的可用部分**，网络性能就要被破坏，这种情况就叫做拥塞 Congestion 。

在计算机网络中的链路容量（即带宽）、交换结点中的缓存和处理机等，都是网络的资源。

若出现拥塞而不进行控制，整个网络的吞吐量**将随着负荷的增大而下降**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740906548988-59874068-0a0f-41ce-afbc-74f42e01c5a7.png)

+ 横坐标是输入负载，代表单位时间内<u>输入</u>给网络的分组数量
+ 纵坐标是吞吐量，代表单位时间内从网络<u>输出</u>的分组数量

**具有理想拥塞控制的网络**，在吞吐量达到饱和之前，网络吞吐量应等于输入的负载，故吞吐量曲线是45°的斜线

但当<u>输入负载超过某一限度</u>时，吞吐量就不再增长而保持水平线：

也就是吞吐量达到饱和，这就表明输入的负载中有一部分损失掉了。

虽然如此，网络的吞吐量仍然维持在其所能达到的最大值。



**然而，实际的网络就很不同了**，我们再来看这条吞吐量曲线

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740925677712-49e78d97-7d6f-418c-aa76-f3102689247d.png)

随着输入负载的增大，网络吞吐量的增长率逐渐减小，也就是在网络吞吐量还未达到饱和时，就已经有一部分的输入分组被丢弃了。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740906660452-0c72a9c8-cab6-41da-8110-e2461109edf4.png)

当网络的吞吐量明显地小于理想的吞吐量时，网络就进入了轻度拥塞的状态。

更值得注意的是，

当输入负载到达某一数值时，网络的吞吐量反而随着负载的增大而减小，这是网络就进入了拥塞状态。

当输入负载继续增大到某一数值时，网络的吞吐量就减小为0，此时网络就无法工作了，这就是所谓的死锁。

因此，进行拥塞控制是非常有必要的，实际的拥塞曲线，应该尽量接近理想的拥塞控制曲线。

---

### TCP的四种拥塞控制算法
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740925790760-7972fd07-fcea-4837-ab93-8088abc0f3ab.png)

假定：

1. 数据单方向传送，而另一个方向只传送确认。
2. 接收方总是有足够大的缓存空间，因而**发送方发送窗口的大小由网络的拥塞程度来决定**
3. 以最大报文段MSS的个数为讨论问题的单位，而不是以字节。

<details class="lake-collapse"><summary id="ue20302ef"><span class="ne-text"> 最大报文段MSS是什么 ？</span></summary><p id="u8f7a3714" class="ne-p"><span class="ne-text"> 最大报文段（Maximum Segment Size, MSS）是指在一个 TCP 连接中可以传输的最大数据段大小。MSS 不包括 TCP 和 IP 头部，只包括应用层数据部分的大小。它的设置和使用对提高网络传输效率具有重要意义。  </span></p></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740926136376-22ecdd19-0c34-449e-86f5-95e105b1d8aa.png)

慢开始算法：指数规律

拥塞避免算法：线性加一

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740926730677-2870892f-cdbb-4834-b6e7-7319c83e515f.png)

<details class="lake-collapse"><summary id="u1c22856b"><span class="ne-text"> 超时重传不一定是网络拥塞导致的，为什么发生了超时重传就要改变窗口值？</span></summary><p id="u338d8038" class="ne-p"><span class="ne-text"> 超时重传确实不一定是由网络拥塞引起的，但在 TCP 拥塞控制中，超时重传通常被视为网络拥塞的指示。  </span></p><ol class="ne-ol"><li id="ucad38c06" data-lake-index-type="0"><strong><span class="ne-text">TCP 拥塞控制假设</span></strong><span class="ne-text">：TCP 拥塞控制算法假设超时是网络拥塞的信号。这一假设使得算法在网络状况恶化时可以迅速做出反应，减少数据包的发送速率，以防止网络进一步拥塞。</span></li><li id="ua7a5b8d0" data-lake-index-type="0"><strong><span class="ne-text">防止误判</span></strong><span class="ne-text">：虽然超时重传可能不是由于网络拥塞导致的，但为了安全起见，TCP 仍然会调整窗口值，以防止潜在的拥塞恶化。减少窗口值（通常是减半）可以缓解网络压力，即使实际情况并非如此。</span></li><li id="ufe3d9e41" data-lake-index-type="0"><strong><span class="ne-text">逐步恢复</span></strong><span class="ne-text">：TCP 使用慢启动和拥塞避免机制逐步恢复窗口大小，从而在网络状况好转时逐步增加传输速率。这种方式确保了在拥塞情况解除后，网络可以逐渐恢复到较高的传输效率。</span></li><li id="u1d2e81dd" data-lake-index-type="0"><strong><span class="ne-text">快速重传和快速恢复</span></strong><span class="ne-text">：对于一些更高级的 TCP 拥塞控制算法，像快速重传和快速恢复，这些算法可以更快地恢复窗口大小，减少对传输速率的影响。但总体思路仍然是将超时作为网络状况恶化的信号，以采取相应的措施。</span></li></ol><p id="uea524c90" class="ne-p"><span class="ne-text">总之，虽然超时重传不一定是由网络拥塞导致的，但将其作为拥塞信号来调整窗口值是为了确保网络的稳定性和可靠性。这是 TCP 拥塞控制算法在面对不确定网络状况时的一种安全策略。</span></p></details>
后面的新算法就是针对于你这个问题的解决！

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740926895163-e16576aa-29e8-4c6e-87f9-b43b380eb894.png)

---

+ 快重传

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740927001740-9fd149cc-b1eb-4867-b5fc-45801578acee.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740927126371-8be95fd9-5573-47f8-b401-bec0094a5b08.png)

确认M6，表示M6之前的数据都已经收到并确认。也就是说乱序到达的数据存储在了接收方的buffer中

使用快重传可以使整个网络的吞吐量提高20%

+ 快恢复

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740927288509-8e04be78-68ed-4a25-9376-e7007f0e1f4d.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740927376930-11091657-0bc6-40dd-b1b5-251cabbdacc2.png)

---

题目未给出“慢开始门限值”，只是示意图！

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740927695254-a2264d4e-7138-48a3-a4c6-0c0e86cc22bf.png)

---



<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905354008-7987377c-6fa2-4df8-b7f4-1f52b5eb21a2.png)

+ **加性增加**：这种方法中，拥塞窗口大小（cwnd）每个往返时间（RTT）增加 1 个最大段大小（MSS），直到检测到丢失。
+ **乘性减少**：在这种方法中，丢失发生后拥塞窗口大小（cwnd）减半

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905552188-a1ddf67d-0c6b-4db6-b899-cd62f7cc334d.png)

 “过多的源以过快的速度发送过多的数据，超过了网络的处理能力  

**拥塞表现形式**：

+ **丢失数据包（Lost packets）**： **路由器**用于临时存储数据包的缓冲区有一定的容量限制，当路由器的缓冲区溢出时，会导致数据包丢失。

<details class="lake-collapse"><summary id="u15e9f99d"><span class="ne-text">路由器存储数据包？</span></summary><p id="u30026bf8" class="ne-p"><span class="ne-text">路由器会存储数据包的原因主要与流量管理和数据处理有关。以下是一些具体的原因：</span></p><h6 id="i4APM"><span class="ne-text">流量管理和排队</span></h6><ol class="ne-ol"><li id="uf83dadd0" data-lake-index-type="0"><strong><span class="ne-text">流量管理</span></strong><span class="ne-text">：在网络中，数据包可能会到达路由器的多个接口。路由器需要管理这些流量，以确保数据包能够按照正确的顺序转发到目的地。</span></li><li id="u05261010" data-lake-index-type="0"><strong><span class="ne-text">排队处理</span></strong><span class="ne-text">：当路由器接口上的流量超过处理能力时，数据包会被放入缓冲区中进行排队，等待处理和转发。</span></li></ol><h6 id="fJ5ol"><span class="ne-text">避免丢包</span></h6><ol class="ne-ol"><li id="u7800ec3e" data-lake-index-type="0"><strong><span class="ne-text">避免数据包丢失</span></strong><span class="ne-text">：如果路由器在某个时间段内收到的数据包数量超过其处理能力，缓冲区可以临时存储这些数据包，以避免丢失。</span></li><li id="u4088128e" data-lake-index-type="0"><strong><span class="ne-text">重传机制</span></strong><span class="ne-text">：在一定条件下，路由器可能会通过重传机制重新发送丢失的数据包，以确保数据的可靠性。</span></li></ol></details>
<details class="lake-collapse"><summary id="u80d8b869"><span class="ne-text"> 为什么是路由器，不是host？  </span></summary><ul class="ne-ul"><li id="ufc9801d8" data-lake-index-type="0"><strong><span class="ne-text">数据转发角色</span></strong><span class="ne-text">：路由器的主要任务是数据包转发，它需要处理通过网络传输的大量数据包，临时存储这些数据包以进行流量管理和排队处理，从而避免网络拥塞和丢包。</span></li><li id="u90878fd2" data-lake-index-type="0"><strong><span class="ne-text">网络连接点</span></strong><span class="ne-text">：路由器位于网络的交汇处，连接多个网络，确保数据包能够跨越不同网络段传输。主机则主要负责本地数据的生成和处理，不负责跨网络的数据转发。</span></li><li id="u1cd2f78a" data-lake-index-type="0"><strong><span class="ne-text">流量高峰管理</span></strong><span class="ne-text">：在网络流量高峰期间，路由器需要临时存储数据包，以避免缓冲区溢出和数据包丢失。主机则主要关注本地通信，不需要应对同样程度的流量管理问题。</span></li></ul></details>
+ **长时间延迟（Long delays）**：路由器缓冲区中的排队等待导致数据传输延迟。
    - **排队等待**：当路由器接收到的数据包超过了其即时处理能力时，数据包会被放入缓冲区中排队等待处理。
    - **处理延迟**：在数据包被处理之前，需要在缓冲区中等待一段时间。这段时间就是排队等待时间。
    - **总体延迟增加**：排队等待时间加上数据包在网络中的传输时间，会导致整体数据传输延迟增加。这种延迟对需要低延迟的应用（如语音通信、直播）影响尤为显著。

---

_**TCP 拥塞控制机制**_

1. **TCP 发送方如何限制发送速率？**
    - 拥塞控制机制旨在调节数据发送速率，使其与网络状况相适应。
2. **TCP 发送方如何感知网络拥塞程度？**
    - 通过监测丢包率、延迟等指标，TCP 发送方能够感知网络的拥塞程度。
3. **TCP 发送方应使用什么算法来调整发送速率？**
    - TCP 拥塞控制算法，如加性增加乘性减少（AIMD）、慢启动（Slow Start）、拥塞避免（Congestion Avoidance）、快速重传与快速恢复（Fast Retransmit & Fast Recovery）等，帮助 TCP 发送方在检测到拥塞时调整发送速率。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905568173-41023344-690b-4a38-8708-458650c391eb.png)

 公式中的 rate 是发送速率，CongWin 是拥塞窗口，RTT 是往返时间。  

 在每个 RTT（往返时间）开始时，这个限制允许发送方向连接发送 cwnd 字节的数据；在 RTT 结束时，发送方会收到这些数据的确认。  

+ **拥塞窗口（cwnd）**：这是一个参数，用于限制发送方的传输速率。
+ **发送方限制传输量**：发送方未被确认的数据量不得超过 cwnd 和 rwnd 中的最小值（即拥塞窗口和接收窗口）。
+ **动态性质**：拥塞窗口是动态的，它是根据网络拥塞情况变化的  



<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905578704-0c0c6562-2465-45b1-aa93-3aa679f598be.png)

1. **发送方如何感知拥塞**：

丢失事件（超时或 3 个重复的 ACK）。

2. **TCP 发送方在丢失事件后减少发送速率**：

拥塞窗口（Congestion Window, cwnd）减小。

3. **TCP 的自时钟机制**：

TCP 使用确认（ACK）来触发（时钟）调整其拥塞窗口大小。



**TCP 拥塞控制算法的三种机制**

1. **慢启动（Slow Start）**：
    - 初始阶段或在 RTO（重传超时）之后。
2. **加性增加乘性减少（AIMD）**：
    - 发送方逐渐增加发送速率（加性增加）直到检测到丢失；发生丢失时，发送速率减半（乘性减少）。
3. **对超时事件的反应**：
    - 在超时事件后采取保守策略（拥塞窗口降到 1 个 MSS（最大报文段））。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905590155-411bfcac-53c6-4c1c-83cb-d61e6792f920.png)

**慢启动机制** 是 TCP 拥塞控制中的一部分，旨在确保在连接初期有效利用网络带宽，同时避免过快发送数据导致网络拥塞。  

+ 慢启动阶段刚开始时，拥塞窗口（CWND）通常设为 1 个 MSS（最大报文段）。
+ 发送方在每收到一个 ACK 后，拥塞窗口增加 1 个 MSS。
+ 在一个往返时间（RTT）内，若发送方发送 N 个数据包并收到 N 个 ACK，拥塞窗口就会增加 N 个 MSS。

<details class="lake-collapse"><summary id="ua292a974"><span class="ne-text">例子</span></summary><p id="u2adf6f48" class="ne-p"><span class="ne-text">假设慢启动开始时，CWND = 1 MSS：</span></p><p id="ue8e583a0" class="ne-p"><strong><span class="ne-text">第一个 RTT</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="u24878717" data-lake-index-type="0"><span class="ne-text">发送 1 个数据包，收到 1 个 ACK，CWND = 2 MSS。</span></li></ul><p id="u99314632" class="ne-p"><strong><span class="ne-text">第二个 RTT</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="u8db1ce5d" data-lake-index-type="0"><span class="ne-text">发送 2 个数据包，收到 2 个 ACK，CWND = 4 MSS。</span></li></ul><p id="u4b707fc6" class="ne-p"><strong><span class="ne-text">第三个 RTT</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="u76448d4a" data-lake-index-type="0"><span class="ne-text">发送 4 个数据包，收到 4 个 ACK，CWND = 8 MSS。</span></li></ul></details>
 每个 RTT 结束时，CWND 的值实际上是上一个 RTT 值的两倍。因此，我们说 CWND 呈指数级增长。  

1. **连接初期**：当新的 TCP 连接建立时，发送方初始拥塞窗口（CWND）设为 1 个 MSS。这意味着发送方一开始只能发送 1 个 MSS 的数据。
2. **指数级增加**：在随后的每个 RTT 期间，发送方根据接收到的 ACK 增加拥塞窗口大小。例如，如果在第一个 RTT 收到 1 个 ACK，CWND 将从 1 增加到 2；在第二个 RTT，CWND 将增加到 4；以此类推。
3. **停止条件**：拥塞窗口大小继续指数级增加，直到发生以下两种情况之一：
    - **丢包事件**：检测到数据包丢失，发送方进入拥塞避免阶段，调整发送速率。
    - **阈值（ssthresh）**：达到设定的阈值，发送方停止指数级增长，进入线性增长阶段。

---

慢启动(Slowstart)与拥塞避免(Congestion avoidance)之间的转换

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905601258-36d6c397-c2ab-469f-a6e5-b5d7cdfe9ed6.png)

1. `ssthresh`**（慢启动门限）**：
+ `ssthresh` 是拥塞窗口大小（`cwnd`）的一个阈值。
+ 当 `cwnd` 小于 `ssthresh` 时，TCP 处于慢启动阶段。
+ 当 `cwnd` 大于等于 `ssthresh` 时，TCP 转为拥塞避免阶段。
2. **在丢包事件中**：
+ 丢包事件可以通过超时或连续三个重复的 ACK 指示。
+ 在丢包事件发生时，`ssthresh` 设置为当前 `cwnd` 的一半，即 `ssthresh = cwnd/2`。
+ 通过记住拥塞发生时的传输速率（`cwnd` 的一半）来调整后续传输。
3. **慢启动到拥塞避免的转换**：
+ 当 `cwnd` 达到或超过 `ssthresh` 时，从慢启动阶段过渡到拥塞避免阶段。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905615491-4d4cb71b-ef9c-4733-8267-e7367ac94e2b.png)

1. **拥塞窗口增加策略**：
    - 当 `cwnd > ssthresh` 时，TCP 进入拥塞避免阶段。
    - 在拥塞避免阶段，`cwnd` 以线性方式增长。
    - 每个 RTT（往返时间）增加 1 个 MSS（最大报文段）。
2. **具体实现**：
    - 对于每收到一个 ACK，`cwnd` 增加 `MSS/cwnd`：<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740981509027-309157aa-5670-4a44-b39c-6d0a97472292.png)
3. **AIMD 算法**（加性增加乘性减少）：
    - **ACKs**：每个 RTT 增加 1 MSS，这是加性增加（Additive Increase）。
    - **丢包事件**：将 `cwnd` 减半，这是乘性减少（Multiplicative Decrease）。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905627069-dbb702e7-43fb-4ff8-98d8-cb544cfdfcc1.png)

检测和响应丢失

+ **选项 1：通过超时检测丢失**：
    - 当超时发生时，拥塞窗口（`cwnd`）设置为1个最大报文段（MSS）。
    - 窗口然后以指数级增长（慢启动方式）直到达到阈值（`ssthresh`），然后以线性方式增长。
+ **选项 2：通过三个重复的ACK检测丢失（TCP RENO）**：
    - 重复的ACK表明网络仍然可以传输部分数据段。
    - 拥塞窗口（`cwnd`）减半，然后窗口以线性方式增长。
+ **TCP Tahoe**：无论是超时还是三个重复的ACK，都会将拥塞窗口（`cwnd`）设置为1。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740905637244-3e629d89-22ea-4ec9-a531-f58d66aefb1b.png)

从慢启动到拥塞避免的转换

+ **问题**：什么时候应该从指数级增长切换到线性增长？
+ **答案**：当拥塞窗口（`cwnd`）达到其超时前值的一半时。

实现

+ 变量 `ssthresh`（慢启动门限）
+ 在丢失事件发生时，`ssthresh` 设置为丢失事件前 `cwnd` 值的一半。

---

为什么是三次？

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741660161914-b122e2b6-a734-48b3-b932-7bc1279fd7cb.png)

