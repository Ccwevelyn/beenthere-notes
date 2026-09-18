---
title: Chapter3 Application Layer
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/chapter3-application-layer.pdf
grade: year-2
semester: spring
course: computer-networks
date: 2026-09-18
order: 1
published: true
---
## <font style="color:#DF2A3F;">一、</font><font style="color:rgb(255,0,0);">Principles of network applications</font>
### Outline
- [ ] <u>Conceptual and implementation</u> aspects of application-layer protocols  概念/实现
- [ ] Examining fomous protocols.

### b站网课
#### 应用层概述
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739181883726-36dceb4b-afa6-4315-8740-524e703ffd39.png)

应用层是计算机网络体系结构的**最顶层**，是设计和建立计算机网络的最终目的。

+ 万维网WWW
+ 多媒体网络应用
+ 文件传送FTP和P2P文件共享
+ 电子邮件
+ 域名系统DNS
+ 动态主机配置DHCP

#### 客户/服务器方式（C/S）和对等方式（P2P）
**<font style="background-color:#FBDFEF;">网络应用程序</font>**运行在处于**<font style="background-color:#FBDFEF;">网络边缘的不同端系统</font>**上，通过通讯<font style="background-color:#FBDFEF;">共同完成某种任务</font>。

开发一种新的网络应用首先要考虑的问题-<font style="color:#DF2A3F;">网络应用程序在各个端系统上的</font>**<font style="color:#DF2A3F;">组织方式</font>**<font style="color:#DF2A3F;">和关系</font>。

1. **<font style="color:#2F4BDA;">客户/服务器（Client/Server, C/S）</font>**

**客户和服务器**指通信中所涉及的两个**应用进程**。

进程服务和被服务的关系

客户是**服务的请求方**，服务器是**服务的提供方**。

**<font style="background-color:#FBDE28;">服务器总是处于运行状态</font>**，并等待客户的服务请求。**服务器**具有固定**端口号**（HTTP-80），而运行服务器的**主机**也有**固定的IP地址**。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739182635077-eac1fb70-d8e6-4495-96b2-fbe7a54f1058.png)

eg.万维网WWW、电子邮件、文件传输FTP...

**服务及中型**：服务集中在服务型计算机（<客户计算机）

一台服务器计算机要为多个客户及提供服务→服务器计算机跟不上众多客户机请求。

Solution → <font style="background-color:#FBDE28;">用</font>**<font style="background-color:#FBDE28;">计算机集群</font>**<font style="background-color:#FBDE28;">构建一个强大的</font>**<font style="background-color:#FBDE28;">虚拟服务器</font>**。



2. **<font style="color:#2F4BDA;">对等（Peer to Peer，P2P）</font>**

<font style="background-color:#FBDFEF;">没有固定的服务请求者/服务者。</font>

分布在网络边缘各端系统中的应用进程是对等的，被称为**对等方**。

对等方相互之间通信。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739183051983-696f59dd-40f0-4723-8323-fdf5d5b7ba7c.png)

eg. P2P文件共享、即时通信、P2P流媒体、分布式存储.

**服务分散型**：分散在大量对等计算机中，这些计算机并不为服务提供商所有，而是为<u>个人控制</u>的桌面计算机和笔记本电脑，通常位于住宅、校园和办公室中。

**<font style="background-color:#FBDFEF;">可扩展性：</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739183217849-35532d51-4578-43fa-b640-12390bc1b8d0.png)

**成本优势**：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739183239243-4c726d7a-8217-4c4e-a272-faf07af87874.png)



### <font style="color:rgb(0,0,153);">Creating a </font><font style="color:rgb(0,0,153);background-color:#FBDE28;">network APP</font>
**编写程序的要求**：

+ <font style="background-color:#FBDFEF;">在（不同的）终端系统上运行 - Run on (different) end systems</font>.
+ <font style="background-color:#FBDFEF;">通过网络进行通信</font>

**不需要为网络核心设备编写软件**：

> No need to write software for **network-core devices**.
>

+ 网络核心设备不运行用户应用程序

> **网络核心设备**指的是诸如路由器、交换机等**基础网络设备**，它们的主要功能是转发数据包，维持网络的连通性和效率。
>
> **用户应用程序**，也称为客户端应用程序，是指运行**在终端设备上**，直接为用户提供功能和服务的软件。
>

+ 终端系统上的应用程序允许快速开发和传播应用程序

> + **<u>终端系统</u>**<u>指的是</u>**<u>用户直接使用</u>**<u>的计算设备</u>，如个人电脑、智能手机、平板电脑等。这些设备运行各种用户应用程序，例如网页浏览器、电子邮件客户端、移动应用等。
> + 在终端系统上开发应用程序的一个重要优势是：<u>开发者可以专注于直接为用户提供功能和服务，而不必考虑网络传输的细节问题</u>。这种方式允许应用程序的快速开发和传播，因为终端系统上有丰富的开发环境和工具，且更新和部署更为便捷。
>

:::success
Network APP：网络应用程序

1. <font style="color:rgb(0,0,0);">run on different hosts (end system)</font>
2. <font style="color:rgb(0,0,0);">communication over network</font>

:::



### <font style="color:rgb(0,0,153);">Application architectures 应用架构</font>
+ **客户端-服务器（Client-Server）**：

客户端设备（如用户的电脑或手机）通过网络与服务器进行通信。服务器提供资源和服务，而客户端向服务器请求这些资源和服务。

+ **对等网络（Peer-to-Peer, P2P）**：

 	各个节点（如用户的电脑）既可以作为客户端，也可以作为服务器。每个节点可以相互提供资源和服务，不需要集中式的服务器。

+ **混合架构（Hybrid of Client-Server and P2P）**：

这种架构结合了客户端-服务器和对等网络的特点，利用两者的优势。例如，一些资源和服务由集中式服务器提供，而其他资源和服务由对等节点提供。

#### <font style="color:rgb(0,0,153);">Client-server architecture 客户端-服务器架构</font>
**Server** : 

❖ Always-on 在线 host

❖ **Permanent** IP address     固定的IP地址，便于客户端查找

❖ Data centers for scaling

（可扩展的数据中心）-服务器通常位于数据中心，可以根据需求进行扩展。

**Clients**:

❖ Contact,Communicate with server

❖ May be intermittently 间歇 connected

❖ May have dynamic 动态 IP addresses

❖ Do not communicate directly with each other  客户端设备之间通常不直接通信，而是通过服务器进行数据交换。  

**优缺点（Pros and cons）**：  

+ **基础设施密集型（Infrastructure intensive）**：构建和维护客户端-服务器架构需要大量的基础设施，如服务器和数据中心。
+ **成本高昂（Costly to provide）**：提供和维护这种架构的成本较高。
+ **易于管理和安全（Easy to manage and secure）**：由于集中管理，客户端-服务器架构相对容易管理和确保安全性。

<details class="lake-collapse"><summary id="u1041d5a6"><span class="ne-text"> “可扩展的数据中心”指的是</span><strong><span class="ne-text">数据中心</span></strong><span class="ne-text">能够灵活地增加或减少计算资源（如服务器、存储设备、网络设备等）</span></summary><h6 id="PXzxp"><strong><span class="ne-text">数据中心（Data Centers）</span></strong></h6><ul class="ne-ul"><li id="u9089c9ba" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">定义</span></strong><span class="ne-text" style="font-size: 14px">：数据中心是一个</span><strong><span class="ne-text" style="font-size: 14px">集中的设施</span></strong><span class="ne-text" style="font-size: 14px">，用于存放和管理计算资源、存储设备、网络设备和其他相关基础设施。-- 物理的场所。</span></li><li id="u024bfabe" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">作用</span></strong><span class="ne-text" style="font-size: 14px">：为服务器提供稳定的运行环境，包括电力供应、网络连接、温度控制和安全保障。</span></li></ul><h6 id="k9qev"><strong><span class="ne-text">扩展性（Scalability）</span></strong></h6><ul class="ne-ul"><li id="u0619f043" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">水平扩展（Horizontal Scaling）</span></strong><span class="ne-text" style="font-size: 14px">：通过增加更多的服务器来处理更多的请求。每个新增加的服务器可以分担一部分负载，从而提升整个系统的处理能力。</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u566ba9bb" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">举例</span></strong><span class="ne-text" style="font-size: 14px">：在高峰期，电商网站可以增加更多的服务器来处理大量的访问请求，避免服务器过载。</span></li></ul></ul><ul class="ne-ul"><li id="u469646b6" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">垂直扩展（Vertical Scaling）</span></strong><span class="ne-text" style="font-size: 14px">：通过增加现有服务器的硬件资源（如CPU、内存、存储）来提升其处理能力。</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u11284f34" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">举例</span></strong><span class="ne-text" style="font-size: 14px">：为数据库服务器增加更多的内存和处理器，以便更快速地处理查询请求。</span></li></ul></ul></details>
#### <font style="color:rgb(0,0,153);">P2P architecture </font>
+ **无始终在线的服务器（****<font style="background-color:#FBDE28;">no always-on server</font>****）**：对等网络中没有中央服务器，所有节点都是平等的。
+ **任意终端系统直接通信（****<font style="background-color:#FBDE28;">arbitrary end systems directly communicate</font>****）**：各个节点可以直接与其他节点通信，而不需要通过中央服务器中转。
+ **对等节点请求和提供服务（****<font style="background-color:#FBDE28;">peers request service from other peers, provide service in return to other peers</font>****）**：节点可以同时作为服务请求者和服务提供者，相互之间进行资源共享。
+ **自我扩展性（****<font style="background-color:#FBDE28;">self scalability</font>****）**：每增加一个新节点，不仅带来新的服务需求，也增加了服务能力，网络可以自动扩展。
+ **<font style="color:#DF2A3F;">节点间歇性连接和IP地址变化</font>****（****<font style="background-color:#FBDE28;">peers are intermittently connected and change IP addresses</font>****）**：节点可能会间歇性连接到网络，并且可能会频繁更改IP地址。

> **间歇性连接**：在对等网络中，节点（如个人电脑、手机等）不需要始终保持在线状态。  
>
> IP地址动态变化？
>

<details class="lake-collapse"><summary id="ub1984a01"><span class="ne-text"> 对等网络（P2P）中节点的</span><strong><span class="ne-text">动态变化</span></strong><span class="ne-text">，如</span><strong><span class="ne-text">频繁更换IP地址和间歇性连接</span></strong><span class="ne-text">，会使得</span><em><span class="ne-text">节点的查找和连接变得更加复杂</span></em><span class="ne-text">，相比于具有固定IP地址和持续在线的服务器，确实增加了难度。BUT!!! 这种动态变化也带来了独特的好处 (了解）</span></summary><h3 id="97fd8b00"><strong><span class="ne-text">动态变化的好处</span></strong></h3><ol class="ne-ol"><li id="u314c966f" data-lake-index-type="0"><strong><span class="ne-text">高扩展性（Scalability）</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u151cead1" data-lake-index-type="0"><strong><span class="ne-text">资源增长与节点数量成正比</span></strong><span class="ne-text">：每当新的节点加入网络时，它不仅消耗资源，也</span><span class="ne-text" style="color: #DF2A3F">提供资源</span><span class="ne-text">（如带宽、存储、计算能力）。这意味着，网络的整体资源随着节点的增加而线性增长。</span></li><li id="udbee8a92" data-lake-index-type="0"><strong><span class="ne-text">无中心瓶颈</span></strong><span class="ne-text">：没有单一的中央服务器，避免了服务器成为性能瓶颈或单点故障的风险。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="ufd6f3b61" data-lake-index-type="0"><strong><span class="ne-text">资源利用率高</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="uf0d93173" data-lake-index-type="0"><strong><span class="ne-text">充分利用闲置资源</span></strong><span class="ne-text">：大量个人设备的计算能力和存储空间往往未被充分利用。P2P网络能够整合这些闲置资源，提高整体资源利用率。</span></li><li id="u580e44d2" data-lake-index-type="0"><strong><span class="ne-text">降低成本</span></strong><span class="ne-text">：无需昂贵的服务器和数据中心，参与者只需贡献自己的设备资源，降低了运营和维护成本。</span></li></ul></ul><ol start="3" class="ne-ol"><li id="u78cc00ef" data-lake-index-type="0"><strong><span class="ne-text">抗故障性强（Fault Tolerance）</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ua1979487" data-lake-index-type="0"><strong><span class="ne-text">去中心化设计</span></strong><span class="ne-text">：没有中心服务器的依赖，使得网络对单点故障免疫。即使部分节点离线，网络仍能继续运行。</span></li><li id="u1d46d016" data-lake-index-type="0"><strong><span class="ne-text">动态自愈合</span></strong><span class="ne-text">：网络能自动调整和重组，以适应节点的加入和离开，保持服务的连续性。</span></li></ul></ul><ol start="4" class="ne-ol"><li id="u5481c427" data-lake-index-type="0"><strong><span class="ne-text">提高传输效率</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u9ac1f7bb" data-lake-index-type="0"><strong><span class="ne-text">就近连接</span></strong><span class="ne-text">：节点可以与地理位置更接近的其他节点通信，减少数据传输的延迟和网络拥塞。</span></li><li id="uc773f2fd" data-lake-index-type="0"><strong><span class="ne-text">分布式负载</span></strong><span class="ne-text">：数据传输的负载分散在众多节点之间，避免了集中式服务器过载的问题。</span></li></ul></ul><ol start="5" class="ne-ol"><li id="u0e163bd6" data-lake-index-type="0"><strong><span class="ne-text">增强隐私和匿名性</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u2c36168f" data-lake-index-type="0"><strong><span class="ne-text">分散性</span></strong><span class="ne-text">：由于数据分布在众多节点上，追踪和监控特定用户的活动变得更加困难，增加了隐私保护。</span></li></ul></ul><h3 id="cd673ee8"><strong><span class="ne-text">应对动态变化的挑战</span></strong></h3><p id="u0618b4d5" class="ne-p"><span class="ne-text">确实，节点的动态变化增加了查找和连接的复杂性。但P2P网络采用了一系列技术来应对这些挑战：</span></p><ol class="ne-ol"><li id="uf6769a2a" data-lake-index-type="0"><strong><span class="ne-text">分布式哈希表（DHT）</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u1813764c" data-lake-index-type="0"><strong><span class="ne-text">高效查找机制</span></strong><span class="ne-text">：DHT使得在一个巨大且动态变化的节点集合中，仍然可以在O(log N)的时间复杂度内找到所需的资源或节点。</span></li><li id="ua8514d91" data-lake-index-type="0"><strong><span class="ne-text">自动更新</span></strong><span class="ne-text">：当节点加入或离开时，DHT会自动更新路由信息，确保查找路径的有效性。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="uc4cdc67e" data-lake-index-type="0"><strong><span class="ne-text">节点发现和路由协议</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="uc6b073d7" data-lake-index-type="0"><strong><span class="ne-text">先进的算法</span></strong><span class="ne-text">：协议如Kademlia、Chord、Pastry等，设计了高效的节点查找和路由算法，能够快速适应网络的动态变化。</span></li><li id="u28081170" data-lake-index-type="0"><strong><span class="ne-text">路由冗余</span></strong><span class="ne-text">：维护多个备选路径，即使一些节点失效，也能通过其他路径找到目标节点。</span></li></ul></ul><ol start="3" class="ne-ol"><li id="u8afa5fc9" data-lake-index-type="0"><strong><span class="ne-text">数据冗余和副本</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="uf516811c" data-lake-index-type="0"><strong><span class="ne-text">提高可用性</span></strong><span class="ne-text">：将数据存储在多个节点上，即使部分节点离线，数据仍然可以从其他节点获取。</span></li><li id="u8dd910a7" data-lake-index-type="0"><strong><span class="ne-text">自动副本迁移</span></strong><span class="ne-text">：当节点离开网络时，数据副本会自动迁移到其他在线节点。</span></li></ul></ul><ol start="4" class="ne-ol"><li id="u6804eff2" data-lake-index-type="0"><strong><span class="ne-text">心跳机制和节点状态监控</span></strong></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u220c820b" data-lake-index-type="0"><strong><span class="ne-text">定期检测</span></strong><span class="ne-text">：节点之间定期发送心跳消息，检测彼此的在线状态，及时更新网络拓扑。</span></li><li id="u03daa21a" data-lake-index-type="0"><strong><span class="ne-text">快速反应</span></strong><span class="ne-text">：一旦检测到节点离线，立即调整路由和数据存储策略，最小化影响。</span></li></ul></ul><h3 id="e6c69a21"><strong><span class="ne-text">与固定服务器的比较</span></strong></h3><ul class="ne-ul"><li id="uc77ac110" data-lake-index-type="0"><strong><span class="ne-text" style="background-color: #FBDFEF">固定服务器的优势</span></strong><span class="ne-text" style="background-color: #FBDFEF">：易于管理和维护，具有稳定的IP地址，方便客户端访问。</span></li><li id="u370656bf" data-lake-index-type="0"><strong><span class="ne-text" style="background-color: #FBDFEF">P2P网络的优势</span></strong><span class="ne-text" style="background-color: #FBDFEF">：扩展性强、成本低、资源利用率高、抗故障能力强。</span></li></ul><p id="u06ff9613" class="ne-p"><span class="ne-text">在一些应用场景下，如大型文件共享、内容分发、分布式计算等，P2P网络的优势非常明显。例如：</span></p><ul class="ne-ul"><li id="u62d6b39b" data-lake-index-type="0"><strong><span class="ne-text">文件共享应用</span></strong><span class="ne-text">：如BitTorrent，当用户数量增加时，下载速度反而会提升，因为每个用户都贡献了上传带宽。</span></li><li id="uf13afb88" data-lake-index-type="0"><strong><span class="ne-text">分布式计算</span></strong><span class="ne-text">：利用大量节点的计算能力，完成复杂的计算任务，如SETI@home等项目。</span></li></ul></details>
**优点和缺点（Pros and cons）**

+ **优点**：

**高度可扩展性（Highly scalable）**：对等网络可以通过增加节点来轻松扩展，不受中央服务器的限制。

+ **缺点**：

**管理难度大（Difficult to manage）**：由于没有中央服务器，管理和维护网络更加复杂。

**安全挑战（Challenge to secure such as privacy risk, online attacks, etc.）**：对等网络面临隐私风险、网络攻击等安全问题。

<details class="lake-collapse"><summary id="ue448d4a7"><span class="ne-text">抗单点故障/管理复杂性-矛盾吗？</span></summary><p id="u47f0ced2" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739187210237-a4a1b7de-503a-4383-8d80-fcd637987730.png" width="219.95834350585938" title="" crop="0,0,1,1" id="u1e647928" class="ne-image"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739187262294-43feb818-64ee-474d-9ff0-ca0bf50eb1da.png" width="241.5416717529297" title="" crop="0,0,1,1" id="ud5fbd093" class="ne-image"></p></details>
---

### <font style="color:rgb(0,0,153);">Processes communicating</font>
<details class="lake-collapse"><summary id="u0f0659bd"><em><span class="ne-text">Process: </span></em><span class="ne-text">Program running instantiated 实例化 as a process</span></summary><ol class="ne-ol"><li id="u3cab6abf" data-lake-index-type="0"><strong><span class="ne-text" style="color: rgb(36, 36, 36); background-color: rgb(250, 250, 250); font-size: 14px">程序</span></strong><span class="ne-text" style="color: rgb(36, 36, 36); background-color: rgb(250, 250, 250); font-size: 14px">：这是静态的代码，通常存储在硬盘上，包含了指令和数据。</span></li><li id="u9a797297" data-lake-index-type="0"><strong><span class="ne-text" style="color: rgb(36, 36, 36); background-color: rgb(250, 250, 250); font-size: 14px">实例化</span></strong><span class="ne-text" style="color: rgb(36, 36, 36); background-color: rgb(250, 250, 250); font-size: 14px">：当你启动一个程序时，操作系统会为它分配资源（如内存、CPU时间等），并创建一个进程。</span></li><li id="u51a4db62" data-lake-index-type="0"><strong><span class="ne-text" style="color: rgb(36, 36, 36); background-color: rgb(250, 250, 250); font-size: 14px">进程</span></strong><span class="ne-text" style="color: rgb(36, 36, 36); background-color: rgb(250, 250, 250); font-size: 14px">：这是程序在运行时的实例。它包含了程序的代码、当前活动的指令、使用的资源（如内存、文件句柄等）以及执行状态（如寄存器值、程序计数器等）</span></li></ol></details>
_正在执行的program→Process_

Process communication：

    - Within same host -- inter-process communication (ipc)
    - Different hosts -- communicate by exchanging **messages.**

<font style="color:rgb(255,0,0);">Client process: </font><font style="color:rgb(0,0,0);">process that initiates communication,</font>

<font style="color:rgb(0,0,0);">the peer that is downloading the file is labeled as the client</font>

<font style="color:rgb(0,0,0);"> 在文件共享应用中，下载文件的对等方被标记为客户端。  </font>

<font style="color:rgb(255,0,0);">Server process: </font><font style="color:rgb(0,0,0);">process that waits to be contacted</font>

<font style="color:rgb(0,0,0);">the peer that is uploading the file-server</font>

<font style="color:rgb(0,0,0);"> 在文件共享应用中，下载文件的对等方被标记为客户端。  </font>

### <font style="color:rgb(0,0,153);">Socket</font>
<u>参考黄老师笔记</u>



## <font style="color:#DF2A3F;">二、Web and HTTP</font>
### <font style="color:#213BC0;">review</font>
+ <font style="color:rgb(204,0,0);">Web page </font><font style="color:rgb(0,0,0);">consists of </font><font style="color:rgb(204,0,0);">objects </font>
    - <font style="color:rgb(0,0,0);">An object is simply a file, can be HTML file, JPEG ,image, Java applet, audio file,… </font>

<font style="color:rgb(0,0,0);">Web page consists of a</font>**<font style="color:rgb(0,0,0);"> </font>****<font style="color:rgb(204,0,0);">base HTML-file</font>**<font style="color:rgb(204,0,0);"> </font><font style="color:rgb(0,0,0);">which includes </font><font style="color:rgb(204,0,0);">several referenced objects </font><font style="color:rgb(0,0,153);">，</font><font style="color:rgb(0,0,0);">each object is addressable by a </font><font style="color:rgb(204,0,0);">URL,</font>

<font style="color:rgb(0,0,0);"> In the context of the web, anything that can be uniquely identified and accessed using a</font>_<font style="color:rgb(0,0,0);"> Uniform Resource Locator (URL)  </font>_

### <font style="color:#213BC0;">HTTP overview</font>
**HTTP：hypertext transfer protocol - ****<font style="background-color:#FBDE28;">application layer</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739675356690-8b2f07a3-1740-498e-94f0-29fd3cb6a6e6.png)

#### HTTP如何使用TCP（传输控制协议）-<font style="color:#DF2A3F;"> reliable</font>
+ 客户端**启动** initiates 一个TCP**连接**（创建一个套接字 creates socket）到服务器的80端口。
+ 服务器接受来自客户端的TCP连接。
+ HTTP消息（应用层协议消息）在浏览器（HTTP客户端）和网络服务器（HTTP服务器）之间交换。
+ TCP连接关闭。

结合Non-persistent与persistent HTTP



#### HTTP is "stateless" 无状态的
Server maintains no information about past client requests

### <font style="color:#213BC0;">HTTP connections</font>
#### non-persistent HTTP
非持久性HTTP

+ **连接特性**：每个TCP连接最多只能发送一个对象。
+ **连接关闭**：对象传输完成后，连接会关闭。
+ **多对象下载**：下载多个对象需要多个连接。multiple connection

#### persistent HTTP<font style="background-color:#FBDE28;">（default）</font>
持久性HTTP

multiple objects can be sent over single TCP connection 

<u>参考黄老师笔记</u>

## <font style="color:#DF2A3F;">三、Electronic mail</font>
### <font style="color:#213BC0;">Brief introduction</font>
One of the _oldest_ and the _most important _applications in the Internet.

因特网上最早流行的一种应用，并且仍然是当今因特网上最重要、实用的应用之一

传统的电话通信属于**实时通信**，而电子邮件与邮政系统的寄信相似

 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739771880874-bc5bb966-9b4e-4755-9e25-d0d0897c35d6.png)

<font style="color:rgb(255,0,0);">asynchronous-异步的 </font>communicate medium

<font style="color:rgb(255,0,0);">fast, inexpensive, and easy to distribute</font>

---

**<font style="color:rgb(255,0,0);">电子邮件采用客户/服务器方式</font>**

### <font style="color:#213BC0;">Three major components：</font>
    1. **user agents 用户代理**
    2. **mail servers 邮件服务器**
    3. **simple mail transfer 电子邮件所需协议**

protocol: SMTP ( Simple Mail Transfer Protocol)

---

#### User agent = mail reader
**用户代理**是 _用户与电子邮件系统 _的**接口**，又称为**电子邮件客户端软件**

+ <font style="color:rgb(0,0,0);">Composing</font><font style="color:rgb(0,0,0);"> 写作、排版 , </font><font style="color:rgb(0,0,0);">editing, reading mail messages</font>
+ eg. Outlook
+ <font style="color:rgb(42, 43, 46);">Outgoing, incoming messages stored on server </font><font style="color:rgb(42, 43, 46);">存储在服务器上的传出和传入消息</font>

#### <font style="color:rgb(42, 43, 46);">Mail server</font>
**邮件服务器**是电子邮件系统的基础设施。因特网上所有的ISP都有邮件服务器，其功能是发送和接收邮件，同时还要负责维护用户的邮箱。

+ _<font style="color:rgb(204,0,0);">mailbox </font>_<font style="color:rgb(0,0,0);">contains incoming messages for user </font><font style="color:rgb(0,0,153);"> </font>
+ _<font style="color:rgb(204,0,0);">message queue </font>_<font style="color:rgb(0,0,0);">of outgoing (to be sent) mail messages</font>

**邮件服务器：**

    - **邮箱（Mailbox）**：包含用户的**接收邮件**。
    - **邮件队列（Message queue）**：存储待发送的**外发邮件**。

#### <font style="color:rgb(0,0,0);">protocol</font>
包括**发送协议（SMTP）**和**读取协议（POP3,IMAP)**

<font style="color:rgb(0,0,0);">A protocol used to send and receive email messages between mail servers.</font>

<details class="lake-collapse"><summary id="ud6343d5d"><span class="ne-text">图中Alice给Bob发邮件：</span></summary><ol class="ne-ol"><li id="u01c9adf7" data-lake-index-type="0"><strong><span class="ne-text">用户代理（Alice's agent）</span></strong><span class="ne-text">：用户Alice的邮件客户端，开始创建和发送邮件。</span></li><li id="uc6801001" data-lake-index-type="0"><strong><span class="ne-text">Alice的邮件服务器</span></strong><span class="ne-text">：发送邮件的邮件服务器，将邮件加入发送队列。</span></li><li id="u241523a8" data-lake-index-type="0"><strong><span class="ne-text">SMTP协议</span></strong><span class="ne-text">：邮件通过SMTP协议传输，在Alice的邮件服务器与Bob的邮件服务器之间进行交换。</span></li><li id="ufb008242" data-lake-index-type="0"><strong><span class="ne-text">Bob的邮件服务器</span></strong><span class="ne-text">：接收邮件的邮件服务器将邮件存储在Bob的邮箱中。</span></li><li id="u16fa74a0" data-lake-index-type="0"><strong><span class="ne-text">Bob的邮件客户端（Bob’s agent）</span></strong><span class="ne-text">：Bob的邮件客户端最终从服务器中读取邮件。</span></li></ol></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739771514223-c7779300-03cc-493e-b8f7-55c46fd2d0db.png)

+ **<font style="color:rgb(0,0,0);">client</font>**<font style="color:rgb(0,0,0);">: sending mail server </font>
+ **<font style="color:rgb(0,0,0);">server </font>**<font style="color:rgb(0,0,0);">: receiving mail server </font>
+ <font style="color:rgb(255,0,0);">SMTP </font><font style="color:rgb(0,0,0);">uses </font><font style="color:rgb(255,0,0);">TCP </font><font style="color:rgb(0,0,0);">as its underlying transport protocol to provide the reliable data transfer service. SMTP使用TCP作为其底层传输协议来提供可靠的数据传输服务。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739772359482-82f82eaf-ff5a-46fe-b0e8-b0775588efcc.png)

##### SMTP (Simple Mail Transfer Protocol)
+ <font style="color:rgb(0,0,0);">建立TCP连接：Client's SMTP mail server establishes </font><font style="color:rgb(192,0,0);">a </font><font style="color:rgb(192,0,0);background-color:#FBDE28;">TCP</font><font style="color:rgb(192,0,0);"> connection </font><font style="color:rgb(0,0,0);">to the recipients SMTP server </font><font style="color:rgb(192,0,0);">using</font>**<font style="color:rgb(192,0,0);"> Port 25 </font>**
+ <font style="color:rgb(0,0,0);">直接传输-Direct transfer: sending server to receiving server </font>

The email is transferred directly from the **sending server** to the **receiving server** without intermediaries.

+ <font style="color:rgb(192,0,0);">Three phases </font><font style="color:rgb(0,0,0);">of transfer  传输的三个阶段</font>
    - <font style="color:rgb(0,0,0);">handshaking (greeting) -初始连接阶段，客户端和服务器进行身份识别并建立通信</font>
    - <font style="color:rgb(0,0,0);">transfer of messages 消息传输-发送设计的邮件消息的阶段</font>
    - <font style="color:rgb(0,0,0);">closure关闭-消息传输完成后，连接终止</font>
+ <font style="color:rgb(0,0,0);">Command/response interaction (like HTTP, FTP)  </font>**<font style="color:rgb(0,0,0);">命令/响应交互</font>**
    - <font style="color:rgb(0,0,153);">commands: </font><font style="color:rgb(0,0,0);">ASCII text  由客户端发送的 ASCII 文本，用于执行诸如发送邮件的操作  </font>
    - <font style="color:rgb(0,0,153);">response: </font><font style="color:rgb(0,0,0);">status code and phrase  由服务器发送的状态代码和短语，用于指示命令的结果。  </font>
+ <font style="color:rgb(192,0,0);">Messages must be in 7-bit ASCII</font>

不能传送可执行文件或者其他的二进制对象

SMTP不能满足传送多媒体邮件（例如带有图片、音频或视频数据）的需要。并且许多其他非英语国家的文字（如中文、俄文、甚至带有重音符号的法文或德文）也无法通过SMTP传送

为解决不能传送非ASCII码文本的问题，提出MIME

<details class="lake-collapse"><summary id="ue28c5178"><span class="ne-text">MIME（多用途互联网邮件扩展）</span></summary><p id="uc49b1fd9" class="ne-p"><span class="ne-text" style="color: rgb(51, 51, 51); background-color: rgb(250, 252, 253); font-size: 14px">MIME (</span><strong><span class="ne-text" style="color: rgb(51, 51, 51); background-color: rgb(250, 252, 253); font-size: 14px">Multipurpose Internet Mail Extensions</span></strong><span class="ne-text" style="color: rgb(51, 51, 51); background-color: rgb(250, 252, 253); font-size: 14px">) </span></p><p id="ud4f92ab5" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739777264000-32d5704c-b3ca-46a9-9be9-e628919675c5.png" width="362.6666666666667" title="" crop="0,0,1,1" id="u487f478e" class="ne-image"></p><p id="udeb628f7" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739777324809-4c00bbc0-518f-48d4-bd57-fa109fb112f3.png" width="430" title="" crop="0,0,1,1" id="u46ac1b3a" class="ne-image"></p></details>
+ <font style="color:rgb(0,0,0);">SMTP uses </font><font style="color:#DF2A3F;">persistent connections </font><font style="color:rgb(0,0,0);">持久连接</font>
    - <font style="color:rgb(0,0,0);">If the sending mail server has several messages to send to the same receiving mail server, it can send all of the messages over the same TCP connection. </font>

如果发送邮件的邮件服务器有多个邮件要发送到同一个接收邮件服务器，它可以通过**同一个TCP连接发送所有邮件**。

+ <font style="color:rgb(0,0,0);">SMTP requires message (header & body) to be in 7-bit ASCII </font>

<font style="color:rgb(0,0,0);">SMTP要求邮件（包括头部和正文）使用7位ASCII编码。</font>

<font style="color:rgb(0,0,0);">这保证了邮件在不同的系统和平台之间能够兼容并且传输一致。</font>

+ <font style="color:rgb(0,0,0);">SMTP server uses </font><font style="color:rgb(0,0,0);background-color:#FBDE28;">CRLF.CRLF</font><font style="color:rgb(0,0,0);"> to determine end of message (where CR and LF stand for carriage return and line feed, respectively)</font>

SMTP服务器使用CRLF.CRLF用于确定消息的结束，

其中**<font style="color:#101E60;">CR</font>**<font style="color:#101E60;">代表回车（Carriage Return</font>）\r，**<font style="color:#101E60;">LF</font>**<font style="color:#101E60;">代表换行符（Line Feed）\n。</font>

CRLF表示回车（CR）和换行符（LF）的组合，这在计算机网络协议中常用于标记文本的结束或换行。在SMTP协议中，每一行的消息都会用CRLF标记结束，以确保数据传输的规范性。

---

###### SMTP interaction / SMTP交互示例
**发送方**邮件服务器_周期性扫描邮件缓存_，如果发现有待转发的邮件 → 建立TCP连接

建立连接后：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739773838772-6d03ba74-509e-4756-b1c2-7225f3af125d.png)

以下对话从TCP连接建立开始：

```plain
S: 220 hamburger.edu
C: HELO crepes.fr
S: 250 Hello crepes.fr, pleased to meet you
C: MAIL FROM: <alice@crepes.fr>
S: 250 alice@crepes.fr... Sender ok
C: RCPT TO: <bob@hamburger.edu>
S: 250 bob@hamburger.edu... Recipient ok
C: DATA
S: 354 Enter mail, end with "." on a line by itself
C: Do you like ketchup?
C: How about pickles?
C: .
S: 250 Message accepted for delivery
C: QUIT
S: 221 hamburger.edu closing connection
```

1. **S: 220 hamburger.edu**
    - 服务器（S）向客户端（C）发送欢迎信息，表示SMTP服务已准备好开始通信。
2. **C: HELO crepes.fr**
    - 客户端（Alice的邮件服务器）发送HELO命令，向服务器问候，并表明自己的身份（`crepes.fr`）。
3. **S: 250 Hello crepes.fr, pleased to meet you**
    - 服务器回应确认，表示已识别并接受来自`crepes.fr`的连接请求。
4. **C: MAIL FROM: **[**alice@crepes.fr**](mailto:alice@crepes.fr)
    - 客户端发送邮件的发件人地址，告诉服务器邮件来源是`alice@crepes.fr`。
5. **S: 250 **[**alice@crepes.fr**](mailto:alice@crepes.fr)**... Sender ok**
    - 服务器确认发件人地址有效。
6. **C: RCPT TO: **[**bob@hamburger.edu**](mailto:bob@hamburger.edu)
    - 客户端指定收件人地址为`bob@hamburger.edu`。
7. **S: 250 **[**bob@hamburger.edu**](mailto:bob@hamburger.edu)**... Recipient ok**
    - 服务器确认收件人地址有效。
8. **C: DATA**
    - _<u>客户端发送</u>__**<u>DATA命令</u>**__<u>，告知服务器准备传输邮件内容。</u>_

```plain
354 Start mail input; end with <CRLF>.<CRLF>
```

<details class="lake-collapse"><summary id="u7989eca7"><span class="ne-text" style="font-size: 14px">详解</span></summary><ol class="ne-ol"><li id="ue0fded70" data-lake-index-type="0"><strong><span class="ne-text">354 响应代码</span></strong><span class="ne-text" style="font-size: 14px">：这表示服务器已准备好接收邮件数据。客户端可以开始发送邮件的实际内容，包括邮件头和正文。</span></li><li id="u5df204c4" data-lake-index-type="0"><strong><span class="ne-text">Start mail input</span></strong><span class="ne-text" style="font-size: 14px">：这是服务器告诉客户端可以开始输入邮件数据。</span></li><li id="udb54aaa5" data-lake-index-type="0"><strong><span class="ne-text">end with &lt;CRLF&gt;.&lt;CRLF&gt;</span></strong><span class="ne-text" style="font-size: 14px">：这是指示邮件数据结束的方式。</span></li></ol><ul class="ne-ul"><li id="u37eaaade" data-lake-index-type="0"><strong><span class="ne-text">&lt;CRLF&gt;</span></strong><span class="ne-text" style="font-size: 14px">：表示回车换行（Carriage Return and Line Feed），即 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">\r\n</span></code><span class="ne-text" style="font-size: 14px">。</span></li><li id="u712479cd" data-lake-index-type="0"><strong><span class="ne-text">.</span></strong><span class="ne-text" style="font-size: 14px">：表示邮件数据的结束。当客户端发送完邮件内容后，需要在单独的一行上发送一个点（</span><code class="ne-code"><span class="ne-text" style="font-size: 14px">.</span></code><span class="ne-text" style="font-size: 14px">）。</span></li><li id="u9e1f71ae" data-lake-index-type="0"><strong><span class="ne-text">&lt;CRLF&gt;.&lt;CRLF&gt;</span></strong><span class="ne-text" style="font-size: 14px">：完整的结束标志是回车换行加一个点再加回车换行（</span><code class="ne-code"><span class="ne-text" style="font-size: 14px">\r\n.\r\n</span></code><span class="ne-text" style="font-size: 14px">），表示邮件数据的结束。</span></li></ul></details>
9. **S: 354 **
    - 服务器回应，若准备好接受，服务器发送应答代码
10. **C: Do you like ketchup?**  
**C: How about pickles?**
    - 客户端输入邮件的内容（例如，询问对方是否喜欢番茄酱和腌黄瓜）。
11. **C: .**
    - 客户端用一个**句点“.”表示邮件内容的结束**。
12. **S: 250 Message accepted for delivery**
    - 服务器确认邮件已接受并准备发送。
13. **C: QUIT**
    - 客户端发送QUIT命令，表示通信结束。
14. **S: 221 hamburger.edu closing connection**
    - 服务器回应并关闭连接，表明会话结束。

---

###### Comparison of HTTP and SMTP
1. **<font style="color:#101E60;">Common characteristics:</font>**
+ <font style="color:rgb(0,0,0);">Both are </font><font style="color:rgb(192,0,0);">client-and-serve</font><font style="color:rgb(0,0,0);">r Model </font>
+ <font style="color:rgb(0,0,0);">Both use </font><font style="color:rgb(192,0,0);">the reliable data transfer service of TCP </font>
+ <font style="color:rgb(0,0,0);">Use </font><font style="color:rgb(192,0,0);">persistent connection</font>
2. **<font style="color:#101E60;">Differece:</font>**
+ **<font style="color:rgb(0,0,0);">HTTP:</font>**<font style="color:rgb(0,0,0);"> </font><font style="color:rgb(192,0,0);">pull protocol</font>**拉取协议**<font style="color:rgb(192,0,0);"> </font><font style="color:rgb(0,0,0);">-someone loads information on a Web server and users use HTTP to pull the information from the server. -</font><font style="color:rgb(0,0,0);">意味着用户加载网页时，</font>_<font style="color:rgb(0,0,0);">浏览器</font>_<font style="color:rgb(0,0,0);">使用HTTP协议</font>_<font style="color:rgb(0,0,0);">从服务器拉取数据</font>_<font style="color:rgb(0,0,0);">。例如，用户请求一个网页，服务器返回页面数据。client需要请求</font>
+ **<font style="color:rgb(0,0,0);">SMTP</font>**<font style="color:rgb(0,0,0);">: </font><font style="color:rgb(192,0,0);">push protocol</font>**推送协议**<font style="color:rgb(192,0,0);">-</font><font style="color:rgb(0,0,0);">the sending mail server pushes the file to the receiving mail server. -</font><font style="color:rgb(0,0,0);">SMTP是一个推送协议，发送邮件的邮件服务器将邮件“推送”到接收方邮件服务器。即，</font>_<font style="color:rgb(0,0,0);">发送方主动将邮件发送给接收方，而不是由接收方请求。</font>_

p.s. client-发送方--client直接发送

+ **<font style="color:rgb(0,0,0);">SMTP</font>**<font style="color:rgb(0,0,0);"> has 7-bit ASCII restriction. HTTP does not have this kind of restriction. </font>

<font style="color:rgb(0,0,0);">SMTP协议要求邮件内容必须使用7位ASCII字符集，这是一种标准化的字符编码方式。而HTTP协议没有类似的限制，可以支持更广泛的字符集（如UTF-8）。</font>

+ **<font style="color:rgb(0,0,0);">HTTP: </font>**<font style="color:rgb(0,0,0);">each object encapsulated in its own response message </font>

**HTTP：每个对象都封装在自己的响应消息中**

    - <font style="color:rgb(0,0,0);">在HTTP协议中，</font><u><font style="color:rgb(0,0,0);">服务器每次返回的响应消息通常只包含一个对象</font></u><font style="color:rgb(0,0,0);">，例如一个HTML页面、一个图片文件等。</font>
+ **<font style="color:rgb(0,0,0);">SMTP:</font>**<font style="color:rgb(0,0,0);"> place all of message’s objects into one message</font>

**SMTP：将所有邮件内容封装到一个消息中**

    - <font style="color:rgb(0,0,0);">SMTP协议会将</font><u><font style="color:rgb(0,0,0);">所有的</font></u><font style="color:rgb(0,0,0);">邮件对象（如邮件头、正文等）整合到一个邮件消息中一起传输。</font>

---

##### Mail access protocols
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739777541034-dfbc10d1-1fce-4688-9cc2-047c43df2cdc.png)

**<font style="color:rgb(204,0,0);">SMTP: </font>****<font style="color:rgb(0,0,0);">delivery/storage to receiver's server</font>**

**<font style="color:rgb(0,0,0);">Mail access protocol: retrieval/检索 from server </font>**

**<font style="color:rgb(204,0,0);">POP: </font>****<font style="color:rgb(0,0,0);">Post Office Protocol</font>**<font style="color:rgb(0,0,0);"> 邮局协议[RFC 1939]: authorization, download </font>

<font style="color:rgb(0,0,0);">从邮件服务器检索邮件，主要实现授权和下载功能</font>

<details class="lake-collapse"><summary id="u3f6da9c6"><span class="ne-text">特</span><span class="ne-text" style="color: rgb(0,0,0)">点：下载后，邮件通常会从服务器上删除，适合离线邮件访问</span></summary><p id="u54a4fd90" class="ne-p"><span class="ne-text">POP（邮局协议）设计的</span><em><span class="ne-text">初衷</span></em><span class="ne-text">是为了在</span><em><span class="ne-text">本地存储邮件</span></em><span class="ne-text">，从而实现</span><em><span class="ne-text">离线访问</span></em><span class="ne-text">。以下是详细解释：</span></p><p id="ue8d59510" class="ne-p"><strong><span class="ne-text" style="color: rgb(0,0,0)">POP协议与离线邮件访问</span></strong></p><ol class="ne-ol"><li id="uc93eef98" data-lake-index-type="0"><strong><span class="ne-text">本地存储</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：当使用POP协议时，邮件客户端会从邮件服务器上下载邮件并将其存储在本地设备上（如计算机、手机等）。</span></li><li id="ue8a285a2" data-lake-index-type="0"><strong><span class="ne-text">删除服务器邮件</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：下载完成后，通常会将服务器上的邮件删除。这确保了邮件只存在于本地设备上。</span></li><li id="ua73d029c" data-lake-index-type="0"><strong><span class="ne-text">离线访问</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：由于邮件已经下载到本地设备，无需与服务器保持连接，用户可以在没有互联网连接的情况下访问、阅读和管理邮件。</span></li></ol><p id="uf203adca" class="ne-p"><strong><span class="ne-text" style="color: rgb(0,0,0)">优点</span></strong></p><ul class="ne-ul"><li id="ub3ff7717" data-lake-index-type="0"><strong><span class="ne-text">带宽节省</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：下载一次后，无需重复从服务器获取邮件，减少了带宽消耗。</span></li><li id="u7dcfbebe" data-lake-index-type="0"><strong><span class="ne-text">快速访问</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：由于邮件存储在本地，访问速度更快。</span></li><li id="ud660a9a7" data-lake-index-type="0"><strong><span class="ne-text">离线操作</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：用户可以在没有互联网的情况下查看和处理邮件，这对于网络不稳定或无网络环境下非常有用。</span></li></ul><p id="uf197a482" class="ne-p"><strong><span class="ne-text" style="color: rgb(0,0,0)">注意事项</span></strong></p><ul class="ne-ul"><li id="u55b7ecac" data-lake-index-type="0"><strong><span class="ne-text">同步问题</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：由于POP协议默认删除服务器上的邮件，在多个设备上使用时可能会导致邮件不同步。</span></li><li id="u784ccf39" data-lake-index-type="0"><strong><span class="ne-text">数据丢失风险</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：如果本地设备丢失或损坏，可能会丢失所有邮件。因此，定期备份是必要的。</span></li></ul></details>
<font style="color:rgb(0,0,0);">通常使用端口</font><font style="color:rgb(0,0,0);background-color:#FBDE28;">110</font><font style="color:rgb(0,0,0);">（POP3)</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739778177618-f4fa9121-b75f-4147-8c57-67af192c699d.png)

###### POP3 protocol
POP3协议主要用于电子邮件的接收和管理，它的工作包括：

+ 在认证阶段验证用户身份。
+ 在事务阶段，客户端可以列出邮件、检索邮件、删除邮件等。
+ 该协议支持简单的命令与响应机制，确保邮件的有效管理。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738475890666-0ace1615-f61a-426a-b1dc-f144739a6745.png)

**端口：110**

**  认证阶段（Authorization phase）**

+ **客户端命令**：
    - **user**：声明用户名
    - **pass**：提供密码
+ **服务器响应**：
    - **+OK**：成功
    - **-ERR**：错误

**  事务阶段（Transaction phase）**

**客户端命令**： 

**list**：列出邮件编号

**retr**：按编号检索邮件

**dele**：删除邮件

**quit**：退出

<details class="lake-collapse"><summary id="ua22ec61c"><span class="ne-text">解释</span></summary><ol class="ne-ol"><li id="u84810dd7" data-lake-index-type="0"><strong><span class="ne-text">认证阶段</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ue8ee8ace" data-lake-index-type="0"><span class="ne-text">客户端首先通过</span><strong><span class="ne-text">user</span></strong><span class="ne-text">命令提供用户名，然后通过</span><strong><span class="ne-text">pass</span></strong><span class="ne-text">命令提供密码，服务器响应**+OK</span><strong><span class="ne-text">表示认证成功，或者</span></strong><span class="ne-text">-ERR**表示认证失败。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="u7049acc2" data-lake-index-type="0"><strong><span class="ne-text">事务阶段</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ub3018b63" data-lake-index-type="0"><span class="ne-text">客户端在认证成功后，可以使用多种命令与服务器交互： </span></li></ul></ul><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul ne-level="2" class="ne-ul"><li id="ufeb36664" data-lake-index-type="0"><strong><span class="ne-text">list</span></strong><span class="ne-text">：列出所有邮件的编号。</span></li><li id="ucc5cf7d1" data-lake-index-type="0"><strong><span class="ne-text">retr</span></strong><span class="ne-text">：检索指定编号的邮件内容。</span></li><li id="u2720f8cb" data-lake-index-type="0"><strong><span class="ne-text">dele</span></strong><span class="ne-text">：删除指定编号的邮件。</span></li><li id="u64aa6e6b" data-lake-index-type="0"><strong><span class="ne-text">quit</span></strong><span class="ne-text">：结束会话，退出POP3协议。</span></li></ul></ul></ul><ol start="3" class="ne-ol"><li id="u60e897ca" data-lake-index-type="0"><strong><span class="ne-text">响应</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ub8f35279" data-lake-index-type="0"><span class="ne-text">服务器会相应地返回邮件编号列表、邮件内容或状态信息，并在完成操作后返回**+OK</span><strong><span class="ne-text">表示成功，或者</span></strong><span class="ne-text">-ERR**表示出错。</span></li></ul></ul><ol start="4" class="ne-ol"><li id="u047d9898" data-lake-index-type="0"><span class="ne-text">在</span><strong><span class="ne-text">事务阶段</span></strong><span class="ne-text">中，客户端可以对邮件进行操作（如查看和删除），这些操作会在会话结束时提交。</span></li></ol></details>
先前的示例使用了POP3的**“下载并删除”**模式

+ Bob如果更换客户端，无法重新读取邮件。
1. POP3的“下载并保留”模式

在此模式下，邮件的副本会保留在服务器上，可以在不同的客户端之间访问。

2. POP3在会话之间是无状态的
+ 每个POP3会话的操作都是独立的，不会记住之前的会话状态。

---

**<font style="color:rgb(204,0,0);">IMAP: </font>****<font style="color:rgb(0,0,0);">Internet Mail Access Protocol</font>**<font style="color:rgb(0,0,0);"> [RFC 17 30]: more features, including manipulation of stored msgs on server 	</font>

<font style="color:rgb(0,0,0);">允许在服务器上管理和组织邮件，支持多设备同步，适合在线邮件访问</font>

<font style="color:rgb(0,0,0);background-color:#FBDE28;">143(</font><font style="color:rgb(0,0,0);">IMAP)/993(IMAPS,IMAP over SSL/TLS)</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739778189580-97b1f34c-4f8f-4425-bff2-27ec98292665.png)

**POP3和IMAP4都采用基于TCP连接的客户/服务器方法**

---

**<font style="color:rgb(204,0,0);">HTTP: </font>****<font style="color:rgb(0,0,0);">Web-based</font>**<font style="color:rgb(0,0,0);"> Email, such as gmail, Hotmail, Yahoo! Mail, etc.</font>

<font style="color:rgb(0,0,0);">用户可以通过浏览器访问邮件，无需专门的邮件客户端</font>

<font style="color:rgb(0,0,0);">80(HTTP)/443(HTTPS)</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739778367278-167b5d48-71fd-481b-b05e-bbf533e95269.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739778607488-8590f4d8-e726-48c7-bb06-a0c011114ba2.png)

<details class="lake-collapse"><summary id="u791319c0"><span class="ne-text">服务器差异</span></summary><p id="uc5823d47" class="ne-p"><strong><span class="ne-text">HTTP</span></strong><span class="ne-text">：基于Web的电子邮件通常使用Web服务器（例如Apache或Nginx）来提供邮件服务，并通过HTTP/HTTPS协议进行通信。</span></p><p id="uc568f223" class="ne-p"><strong><span class="ne-text">IMAP</span></strong><span class="ne-text">：IMAP服务器（例如Dovecot或Courier-IMAP）专门处理电子邮件的存储和检索，并通过IMAP协议进行通信。</span></p></details>
---

### <font style="color:#213BC0;">Mail message format</font>
电子邮件的信息格式并不是由SMTP定义的，而是在RFC 822中单独定义的。这个RFC文档已在2008年更新为RFC 5322。一个电子邮件由**信封**和**内容**两部分。而内容又由**首部**和**主题**两部分构成

<font style="color:rgb(0,0,0);">ASCII characters only</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739777074260-71b23ebf-37f2-40c6-806c-85a604b4dd2a.png)

<font style="color:rgb(0,0,0);">SMTP: protocol for exchanging email msgs </font>

<font style="color:rgb(0,0,0);">RFC 822: standard for text message format</font>

---

### <font style="color:#213BC0;">Summary</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739778683116-ad9c2d07-befc-43fb-8b70-dd5bf3111fa3.png)

<font style="color:rgb(0,0,0);">Three main component of E-mail system </font><font style="color:rgb(0,0,153);">：</font><font style="color:rgb(0,0,0);">Users agents, mail server, and SMTP </font>

<font style="color:rgb(0,0,0);">SMTP and the comparison with HTTP. </font>

<font style="color:rgb(0,0,0);">SMTP mail message format </font>

<font style="color:rgb(0,0,0);">Mail </font>**<font style="color:rgb(0,0,0);">access</font>**<font style="color:rgb(0,0,0);"> protocols ：PoP, IMAP, HTTP</font>



## <font style="color:#DF2A3F;">四、DNS </font>
### <font style="color:#2F4BDA;">Hostname/IP Address</font>
域名系统（Domain Name System)

**<font style="color:rgb(255,0,0);">Internet hosts: two ways to identify a host </font>**

+ <font style="color:rgb(192,0,0);">hostname</font><font style="color:rgb(0,0,0);">,主机名 e.g., www.yahoo.com </font>
    - <font style="color:rgb(0,0,0);">Easy to be remembered, human beings prefer </font>
    - <font style="color:rgb(0,0,0);">Provide little information about the location of this host </font>

-提供关于主机位置的信息很少

    - <font style="color:rgb(0,0,0);">Difficult to process by router - 路由器处理困难</font>

<details class="lake-collapse"><summary id="u3aa74da5"><span class="ne-text">为什么路由器处理困难？</span></summary><ol class="ne-ol"><li id="ub5e63461" data-lake-index-type="0"><strong><span class="ne-text">可变性</span></strong></li></ol><ul class="ne-ul"><li id="ud2f02c96" data-lake-index-type="0"><strong><span class="ne-text">主机名长度不固定</span></strong><span class="ne-text">：主机名的长度和格式不固定，处理起来更加复杂。</span></li><li id="u3956c0bb" data-lake-index-type="0"><strong><span class="ne-text">字符处理</span></strong><span class="ne-text">：主机名由字母、数字和其他符号组成，而IP地址由固定格式的数字组成。路由器在处理字符数据时需要更多的计算和存储资源。</span></li></ul><ol start="2" class="ne-ol"><li id="ub1b32dcd" data-lake-index-type="0"><strong><span class="ne-text">性能和效率：</span></strong></li></ol><ul class="ne-ul"><li id="u94abaa59" data-lake-index-type="0"><strong><span class="ne-text">速度问题</span></strong><span class="ne-text">：直接处理IP地址比处理主机名更快，因为IP地址是固定长度、层次结构的数字格式，便于快速查找和路由。</span></li><li id="u19d2b32c" data-lake-index-type="0"><strong><span class="ne-text">资源开销</span></strong><span class="ne-text">：处理主机名需要更多的内存和计算资源，这对路由器的性能产生不利影响。</span></li></ul></details>
+ <font style="color:rgb(192,0,0);">IP address </font><font style="color:rgb(0,0,0);">(IPV4: 4 bytes (i.e.,32 bit) such as 121.7.106.83) </font>
    - <font style="color:rgb(0,0,0);">Fixed length, hierarchical structure-固定长度、层次结构, </font>
    - <font style="color:rgb(0,0,0);">Easy to process by router, routers prefer </font>
    - <font style="color:rgb(0,0,0);">Difficult to be remembered </font>

<font style="color:rgb(0,0,0);">The transformation between hostname and IP address </font>

<font style="color:rgb(0,0,0);">主机名和IP地址之间的转换的</font>**<font style="color:rgb(0,0,0);">必要性</font>**<font style="color:rgb(0,0,0);">：</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Applications running at a host need to translate a hostname to its IP address (identifier is IP address + port number) 在主机上运行的应用程序需要将主机名转换为对应的IP地址  </font>

<font style="color:rgb(255,0,0);">DNS -实现主机名和ip地址之间的转换</font>

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739781166565-3f1ac5d8-1e7f-4dec-89f0-ddf45b1fd18b.png)

我们输入ping的是域名，但是实际上ping到的是ip地址- <u>即使不使用域名，也可以使用ip地址进行寻址</u>。但是域名与ip地址相比，便于记忆。-- 用域名访问

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739781461463-f3b1cddd-971d-4957-abaf-6cf097d0b33e.png)

### <font style="color:#2F4BDA;">DNS工作流程</font>
<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Before a network application (e.g., web browser) sends a message to its receiving host, it should know the IP address of the receiving host. -</font>

    - <font style="color:rgb(0,0,0);">在网络应用（例如：网页浏览器）向接收主机发送消息之前，它必须知道接收主机的</font>**IP地址**<font style="color:rgb(0,0,0);">。</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">The application invokes the client side of DNS, specifying the hostname that needs to be translated. -应用程序调用DNS</font>**<font style="color:rgb(0,0,0);">客户端</font>**<font style="color:rgb(0,0,0);">，置顶需要转换的主机名</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Then, </font>**<font style="color:rgb(0,0,0);">DNS client</font>**<font style="color:rgb(0,0,0);"> sends a query message to a </font>**<font style="color:rgb(0,0,0);">DNS server. </font>**

    - <font style="color:rgb(0,0,0);">然后，DNS客户端向DNS服务器发送查询请求。</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">After a time delay, DNS client receives a DNS reply message including the IP address for this hostname. </font>

    - <font style="color:rgb(0,0,0);">在经历一段时间的延迟后，DNS客户端接收到一个DNS响应消息，其中包含该主机名对应的</font>**IP地址**<font style="color:rgb(0,0,0);">。</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">The IP address is then passed to the invoking application. </font>

    - <font style="color:rgb(0,0,0);">获取到IP地址后，它被传递给调用的应用程序。</font>

<font style="color:rgb(0,0,153);">▪</font><font style="color:rgb(0,0,153);"> </font><font style="color:rgb(0,0,0);">Once the browser receives the IP address from DNS, it can initiate a TCP connection to the HTTP server process (IP address + port 80)</font>

    - <font style="color:rgb(0,0,0);">一旦浏览器从DNS接收到IP地址，它便可以发起与HTTP服务器的</font>**TCP连接**<font style="color:rgb(0,0,0);">（IP地址 + 端口号80）。</font>

---

+ **网络应用与IP地址获取**<font style="color:rgb(0,0,0);">： 在发送消息给目标主机之前，网络应用需要知道目标主机的IP地址。通常我们使用域名而不是直接输入IP地址。</font>
+ **DNS的工作流程**<font style="color:rgb(0,0,0);">： 当你在浏览器中输入网站地址（如 </font>`<font style="color:rgb(0,0,0);">www.example.com</font>`<font style="color:rgb(0,0,0);">），浏览器需要通过DNS查询得到该网站的IP地址。DNS首先接受一个查询请求，通过查询DNS服务器返回正确的IP地址。</font>
+ **DNS的角色**<font style="color:rgb(0,0,0);">： DNS的作用是</font><font style="color:rgb(0,0,0);background-color:#FBDE28;">将易记的主机名转换为计算机能够处理的IP地址。</font><font style="color:rgb(0,0,0);">这个过程是浏览器能够通过TCP协议建立连接的前提。</font>
+ **最后步骤**<font style="color:rgb(0,0,0);">： 获取到IP地址后，浏览器使用此地址建立与目标服务器的TCP连接，然后通过HTTP协议进行数据交换。</font>

---

### <font style="color:#2F4BDA;">DNS提供的服务</font>
<font style="color:rgb(255,0,0);">DNS </font><font style="color:rgb(0,0,0);">provides </font>

+ <font style="color:rgb(0,0,0);">Translation between </font>**<font style="color:#2F4BDA;">hostname to IP address </font>**
+ **<font style="color:rgb(192,0,0);">Host aliasing:</font>**<font style="color:rgb(192,0,0);"> </font><font style="color:rgb(0,0,0);">translation from alias name别名 to canonical name正式名. </font>

<font style="color:rgb(0,0,0);">主机别名是将容易记住的</font>_**<font style="color:rgb(0,0,0);">别名转换为正式 </font>**_<font style="color:rgb(0,0,0);">的主机名。</font>

    - <font style="color:rgb(0,0,0);">Two types of hostnames </font>

<font style="color:rgb(0,0,0);">– Canonical name: formal hostname, e.g., relay1.west-cost.enterprise.com </font>

<font style="color:rgb(0,0,0);">– Alias name: easy to remember, e.g., enterprise.com </font>

+ **两种主机名**<font style="color:rgb(0,0,0);">： </font>
    - **规范名（Canonical name）**<font style="color:rgb(0,0,0);">：这是正式的主机名，例如：</font>`<font style="color:rgb(0,0,0);">relay1.west-cost.enterprise.com</font>`<font style="color:rgb(0,0,0);">。</font>
    - **别名（Alias name）**<font style="color:rgb(0,0,0);">：这是易于记住的名称，例如：</font>`<font style="color:rgb(0,0,0);">enterprise.com</font>`<font style="color:rgb(0,0,0);">。</font>

<details class="lake-collapse"><summary id="u50638091"><span class="ne-text"> 区分规范名（正式名称）和别名（简化名称）有几个重要的原因： </span></summary><ul class="ne-ul"><li id="u40b64161" data-lake-index-type="0"><strong><span class="ne-text">管理和维护</span></strong><span class="ne-text">：规范名通常会反映具体的服务器或服务的详细信息，例如部门名称、服务器位置等。如果使用简化的别名，可能会失去这些详细的信息，降低管理和维护的效率。</span></li><li id="uadec239c" data-lake-index-type="0"><strong><span class="ne-text">灵活性</span></strong><span class="ne-text">：使用别名允许在后台更改规范名，而无需通知用户。例如，如果服务器名称改变了，只需更新别名的映射，而用户仍然可以使用相同的别名访问服务。这种灵活性在大规模网络管理中非常重要。</span></li><li id="u59d11b91" data-lake-index-type="0"><strong><span class="ne-text">负载均衡</span></strong><span class="ne-text">：别名可以指向多个规范名，实现负载均衡。例如，别名 </span><code class="ne-code"><span class="ne-text">www</span></code><span class="ne-text"> 可以同时指向多个服务器，这样可以分散流量，提高访问速度和可靠性。</span></li><li id="uab0846d7" data-lake-index-type="0"><strong><span class="ne-text">易用性</span></strong><span class="ne-text">：别名通常更简短，更易记。对于用户来说，输入和记住别名比记住复杂的规范名要容易得多。</span></li><li id="u5b62b1b1" data-lake-index-type="0"><strong><span class="ne-text">安全性</span></strong><span class="ne-text">：通过使用别名，可以隐藏规范名的具体信息，增加安全性，减少潜在的攻击面</span></li></ul></details>
---

+ **<font style="color:rgb(192,0,0);">Mail server aliasing:</font>**<font style="color:rgb(192,0,0);"> </font><font style="color:rgb(0,0,0);">translation from alias name to canonical name of a mail server </font>
    - <font style="color:rgb(0,0,0);">e.g., mail server is mailhost1.ipm.edu.mo, and E-mail address is xuyang@ipm.edu.mo</font>
+ **<font style="color:rgb(0,0,0);">邮件服务器别名： </font>**

<font style="color:rgb(0,0,0);">邮件服务器的别名是将别名转换为邮件服务器的正式名称。</font>

    - <font style="color:rgb(0,0,0);">例如：邮件服务器的正式地址是 </font>`<font style="color:rgb(0,0,0);">mailhost1.ipm.edu.mo</font>`<font style="color:rgb(0,0,0);">，而电子邮件地址是 </font>`<font style="color:rgb(0,0,0);">xuyang@ipm.edu.mo</font>`<font style="color:rgb(0,0,0);">。</font>

---

### <font style="color:#2F4BDA;">Load distribution 负载分配</font>
+ _<font style="color:rgb(0,0,0);">Replicated web</font>__**<font style="color:rgb(0,0,0);"> servers</font>**_<font style="color:rgb(0,0,0);"> for </font>**<font style="color:rgb(0,0,0);">busy sites</font>**<font style="color:rgb(0,0,0);">: a set of IP addresses for one canonical name - </font>繁忙**网站的复制网站****<font style="background-color:#FBDE28;">服务器</font>**：一个规范名称对应**多个**IP地址
    - <font style="color:rgb(0,0,0);">Busy sites are replicated 自我复制 over multiple web servers. 繁忙的网站通过多个网站服务器进行复制。</font>
    - <font style="color:rgb(0,0,0);">Each replicated server run on a different end system and have a different IP address. - 每个复制的服务器在不同的终端系统上运行，具有不同的IP地址。</font>
    - <font style="color:rgb(0,0,0);">But all replicated servers are associated with one canonical name. -但所有复制的服务器都与同一个规范名称关联</font>
+ <font style="color:rgb(255,0,0);"> DNS rotation </font><font style="color:rgb(0,0,0);">distributes the traffic among the replicated servers. </font>

**DNS轮询（DNS rotation）分配流量到复制的服务器**

    - <font style="color:rgb(0,0,0);">When </font>_<font style="color:rgb(0,0,0);">clients</font>_<font style="color:rgb(0,0,0);"> make a </font>_<font style="color:rgb(0,0,0);">DNS query</font>_<font style="color:rgb(0,0,0);"> for a busy site, the server responds with the entire set of IP addresses, but rotates the ordering of the addresses within each reply</font>

当客户端对繁忙站点进行DNS查询时，服务器会返回整个IP地址集合，但每次<font style="color:#2F4BDA;">回复中的地址顺序会进行轮换。</font>

这种方式可以将流量分配到不同的复制服务器上，确保负载均衡。

---

+ **复制网站服务器**<font style="color:rgb(0,0,0);">：  
</font><font style="color:rgb(0,0,0);">当一个网站的流量过大时，通常会通过</font>**<font style="color:rgb(0,0,0);">复制多个服务器来分担流</font>**<font style="color:rgb(0,0,0);">量。每个服务器会有不同的IP地址，但是它们都与同一个规范的主机名（例如 </font>`<font style="color:rgb(0,0,0);">www.example.com</font>`<font style="color:rgb(0,0,0);">）关联。这样做可以减少单个服务器的负载，提高网站的访问速度和可靠性。</font>
+ **DNS轮询**<font style="color:rgb(0,0,0);">：  
</font><font style="color:rgb(0,0,0);">在多个复制服务器的情况下，当客户端请求访问该网站时，DNS服务器会返回多个IP地址。为了避免单一服务器过载，DNS服务器会根据</font>**<font style="color:rgb(0,0,0);">轮询</font>**<font style="color:rgb(0,0,0);">的方式改变返回IP地址的顺序，从而均匀地</font>_<font style="color:rgb(0,0,0);">分配流量到不同的服务器上</font>_<font style="color:rgb(0,0,0);">。这样，每次请求都可以分散到不同的服务器，优化了网站的性能并提高了访问速度。</font>
+ **负载均衡**：

<font style="color:rgb(0,0,0);"> 	这种机制有助于避免单个服务器过载，提高网站的可用性和响应速度</font>

<details class="lake-collapse"><summary id="ua0b1f38f"><span class="ne-text">负载</span></summary><p id="ua37a28f2" class="ne-p"><span class="ne-text" style="color: rgb(0,0,0)"> 系统或设备所承受的工作量或处理的任务数量。负载可以有多种形式，例如CPU负载、网络负载、服务器负载等。  </span></p><ul class="ne-ul"><li id="udaf538b2" data-lake-index-type="0"><strong><span class="ne-text">CPU负载</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></li></ul><p id="u9fb0040b" class="ne-p"><span class="ne-text" style="color: rgb(0,0,0)">CPU负载指处理器正在执行任务的数量。高CPU负载意味着处理器正在处理大量任务，可能会导致性能下降。</span></p><ul class="ne-ul"><li id="ue0bf3f5d" data-lake-index-type="0"><strong><span class="ne-text">网络负载</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></li></ul><p id="u0b599e52" class="ne-p"><span class="ne-text" style="color: rgb(0,0,0)">网络负载指网络设备（如路由器、交换机）处理的数据流量。高网络负载可能会导致网络拥塞和延迟。</span></p><ul class="ne-ul"><li id="u90ebcd74" data-lake-index-type="0"><strong><span class="ne-text">服务器负载</span></strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></li></ul><p id="uf448d4c1" class="ne-p"><span class="ne-text" style="color: rgb(0,0,0)">服务器负载指服务器正在处理的请求数量。高服务器负载可能会导致响应时间变慢或服务器崩溃。</span></p></details>
---

### <font style="color:#2F4BDA;">如何实现DNS</font>
Q：因特网是否可以只是用一台DNS服务器？

A :   No！因为因特网的规模很大，这样的域名肯定会因为超负荷而无法正常工作，而且一旦域名服务器出现故障，整个因特网就会瘫痪。

---

_How to implement DNS?_

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738498737831-47c2a8ff-7059-454a-8aae-9715d5ba9be8.png)

1. **集中式****<font style="background-color:#FBDE28;">Centralized</font>**** DNS？**
+ <font style="color:rgb(0,0,0);">一个DNS服务器包含</font>**<font style="color:rgb(0,0,0);">所有</font>**_<font style="color:rgb(0,0,0);">主机名homename</font>_<font style="color:rgb(0,0,0);">与</font>_<font style="color:rgb(0,0,0);">IP地址 IP address</font>_<font style="color:rgb(0,0,0);">的映射。</font>
    - **单点故障**<font style="color:rgb(0,0,0);">：如果这个单一的DNS服务器出现问题，整个系统将无法工作。</font>
    - **流量量大 traffic volume，扩展性差 less scalability**<font style="color:rgb(0,0,0);">：所有请求都集中到一个服务器，会增加负载，无法有效处理大量的查询请求。</font>
    - **远程集中式数据库**<font style="color:rgb(0,0,0);">：单一DNS服务器无法与所有end system终端系统靠得很近，因此对于某些终端系统的查询会有</font><u><font style="color:rgb(0,0,0);">较长的延迟</font></u><font style="color:rgb(0,0,0);">。</font>
    - **维护问题Maintenance**<font style="color:rgb(0,0,0);">：这个集中式数据库将非常庞大，需要频繁更新，以便处理每一个新主机的请求。</font>

**结论：**<font style="color:rgb(0,0,0);"> 这种方式无法扩展（Doesn't scale）。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738498737831-47c2a8ff-7059-454a-8aae-9715d5ba9be8.png)

2. **分布式****<font style="background-color:#FBDE28;">Distributed</font>**** DNS：**
    - <font style="color:rgb(0,0,0);">DNS由全球分布的大量DNS服务器组成，指定了这些</font>**<font style="color:rgb(0,0,0);">DNS服务器</font>**<font style="color:rgb(0,0,0);">和</font>**<font style="color:rgb(0,0,0);">查询主机</font>**<font style="color:rgb(0,0,0);">之间的通信方式。</font>

---

+ **集中式DNS的缺点：**<font style="color:rgb(0,0,0);"> 在集中式DNS架构中，所有DNS查询都由单一服务器处理，这意味着如果服务器出现故障，整个系统将无法使用。而且，由于所有数据都存储在一个服务器上，这导致了流量和维护的瓶颈。此外，集中式服务器通常位于远程位置，可能会造成一些查询的延迟。</font>
+ **分布式DNS的优势：**<font style="color:rgb(0,0,0);"> 为了解决这些问题，现代DNS采用了分布式架构，将DNS查询分散到多个全球分布的DNS服务器。这种方式可以减少单一服务器的负担，提升查询效率，同时避免单点故障，提高系统的可靠性和扩展性。</font>



### <font style="color:#2F4BDA;">DNS具体层次结构</font>
1983，因特网采用**层次结构的命名树**作为主机的名字（即域名），并使用分布式的域名系统DNS。DNS使大多数域名都在本地解析，仅少量解析需要在因特网上通信，因此系统效率很高。

DNS是分布式系统，即使单个计算机出了故障，也不会妨碍整个系统的正常运行。<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739781826728-ab0f7cde-cc4f-4abf-89af-4dc7dc3ccd7c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739782006384-e8e9d630-e4fb-4a82-bbce-305ac30cad6f.png)

这种按等级管理的命名方式，便于维护名字的唯一性，并且也容易设计出一种高效的域名查询机制。需要注意的是，域名是一个逻辑概念，并不代表计算机所在的物理地点。

---

**<font style="color:rgb(0,0,0);">DNS：分布式层次化数据库</font>**

<!-- 这是一张图片，ocr 内容为：CAL DATABASE DNS: A DISTRIBUTED, HIERARCHICAL AND ROOT DNS SERVERS EDU DNS SERVERS ORG DNS SERVERS COM DNS SERVERS UMASS.EDU POLY.EDU PBS.ORG YAHOO.COM AMAZON.COM DNS SERVERSDNS S SERVERS DNS SERVERS DNS SERVERS DNS SERVERS CLIENT WANTS IP FO IST APPROX: FOR WWW.AMAZON.COM; S ROOT SERVER TO FIND COM DNS SEE CLIENT QUERIES SERVER ES .COM DNS SERVER (TLD S CLIENT QUERIES SERVER) TO GET AMAZON.COM DNS SERVER AMAZON.COM DNS S CLIENT QUERIES IS SERVER (AUTHORITATIVE SERVER )TO IP ADDRESS FOR WWW.AMAZON.COM GET -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738499442377-741cca80-5963-4e59-a5cd-1e50fbd0cafb.png)

1. **DNS的层次结构：**
    - _**根 **_**DNS服务器：**<font style="color:rgb(0,0,0);"> 根DNS服务器位于系统的顶部，负责管理不同</font>_<font style="color:rgb(0,0,0);">顶级域名</font>_<font style="color:rgb(0,0,0);">（如.com, .org, .edu等）的DNS服务器。</font>
    - _**顶级域 **_**DNS服务器（TLD DNS）：**<font style="color:rgb(0,0,0);"> 例如，.com域名下有多个DNS服务器，处理像</font>**yahoo.com**<font style="color:rgb(0,0,0);">、</font>**amazon.com**<font style="color:rgb(0,0,0);">等域名的查询。</font>
    - **域名服务器：**<font style="color:rgb(0,0,0);"> 每个网站都有特定的DNS服务器，比如</font>**amazon.com**<font style="color:rgb(0,0,0);">的DNS服务器。</font>
2. **客户端查询过程：**
    - <font style="color:rgb(0,0,0);">客户端希望获取**</font><font style="color:rgb(0,0,0);">www.amazon.com**的IP地址。查询过程如下：</font>
        * **第一步：**<font style="color:rgb(0,0,0);"> 客户端首先查询 root server </font>_**根DNS服务器**_<font style="color:rgb(0,0,0);">，获取**.com**域名的DNS服务器。</font>
        * **第二步：**<font style="color:rgb(0,0,0);"> 客户端查询**.com DNS服务器**，这个被称为</font>_<font style="color:rgb(0,0,0);">顶级域（TLD）服务器</font>_<font style="color:rgb(0,0,0);">，来获取</font>**amazon.com**<font style="color:rgb(0,0,0);">的DNS服务器。</font>
        * **第三步：**<font style="color:rgb(0,0,0);"> 客户端查询</font>**amazon.com DNS服务器**<font style="color:rgb(0,0,0);">，即</font>**权威DNS服务器**<font style="color:rgb(0,0,0);">，最终获取**</font>[www.amazon.com**的IP地址。](http://www.amazon.xn--com%2A%2Aip-9n1tqgs324b./)

---

+ **分布式结构：**<font style="color:rgb(0,0,0);"> DNS采用了</font>**<font style="color:rgb(0,0,0);">分布式和层次化</font>**<font style="color:rgb(0,0,0);">的结构，这使得域名解析可以更加高效地进行。根DNS服务器是整个系统的顶点，它负责管理不同的域名层级。每个域名（如.com）都有自己的DNS服务器，这些服务器负责将域名解析为具体的IP地址。</font>
+ **查询过程：**<font style="color:rgb(0,0,0);"> 当客户端想要获取某个域名的IP地址时，它会通过层级查询的方式逐步找到最终的解析结果。首先，客户端会联系根DNS服务器，获取顶级域DNS服务器信息，然后进一步查询特定域名的DNS服务器，最终得到所需的IP地址。</font>

---

#### <font style="color:rgb(0,0,0);">Root DNS service: 根域名服务器</font>
+ <font style="color:rgb(0,0,0);">In the Internet, there are </font>**<font style="color:rgb(0,0,0);">13 root DNS servers</font>**

<font style="color:rgb(0,0,0);">most of which are located in North America. (2012) </font>

+ <font style="color:rgb(0,0,0);">Root DNS servers typically do </font>**<font style="color:rgb(0,0,0);">not </font>**<font style="color:rgb(0,0,0);">contain hostname to IP mappings; they </font><font style="color:rgb(192,0,0);">contain mappings for </font>**<font style="color:rgb(192,0,0);">locating top-level domain (TLD) servers</font>****<font style="color:rgb(0,0,0);">.</font>**

**根DNS服务器的功能：**

    - <font style="color:rgb(0,0,0);">根DNS服务器通常</font>**<font style="color:#2F4BDA;">不包含</font>**_<font style="color:rgb(0,0,0);">主机名到IP地址的映射</font>_<font style="color:rgb(0,0,0);">（即不直接进行域名解析）。它们主要负责</font>**定位顶级域（TLD）服务器**<font style="color:rgb(0,0,0);">的映射。例如，根DNS服务器可以帮助查询“.com”、“.org”以及其他顶级域的DNS服务器。</font>

<details class="lake-collapse"><summary id="ue8d674b4"><span class="ne-text">根DNS服务器的功能</span></summary><p id="ub56da023" class="ne-p"><span class="ne-text"> 根DNS服务器是DNS层次结构的顶层。它们不存储特定域名的IP地址信息，而是指向存储这些信息的顶级域（TLD）服务器。  </span></p></details>
<details class="lake-collapse"><summary id="u3ef9a672"><span class="ne-text">定位过程</span></summary><ol class="ne-ol"><li id="u7f300a58" data-lake-index-type="0"><strong><span class="ne-text">查询启动</span></strong><span class="ne-text">：</span></li></ol><p id="u0ea00e88" class="ne-p"><span class="ne-text">当用户在浏览器中输入一个URL（如 www.example.com）并按下回车键，浏览器会向本地DNS解析器发送查询请求。</span></p><ol start="2" class="ne-ol"><li id="u78516f69" data-lake-index-type="0"><strong><span class="ne-text">本地DNS解析器</span></strong><span class="ne-text">：</span></li></ol><p id="u549163fe" class="ne-p"><span class="ne-text">如果本地DNS解析器没有缓存这个域名的IP地址，它会向根DNS服务器发送查询请求。</span></p><ol start="3" class="ne-ol"><li id="uf195a3f5" data-lake-index-type="0"><strong><span class="ne-text">根DNS服务器响应</span></strong><span class="ne-text">：</span></li></ol><p id="u04744693" class="ne-p"><span class="ne-text">根DNS服务器不直接返回域名的IP地址，而是返回顶级域（如“.com”）DNS服务器的IP地址。</span></p><ol start="4" class="ne-ol"><li id="u8cbcdad2" data-lake-index-type="0"><strong><span class="ne-text">查询TLD服务器</span></strong><span class="ne-text">：</span></li></ol><p id="ua271a1f0" class="ne-p"><span class="ne-text">本地DNS解析器接着向顶级域（TLD）服务器发送查询请求。TLD服务器存储有该顶级域中所有二级域名的信息。</span></p><ol start="5" class="ne-ol"><li id="u8c30385b" data-lake-index-type="0"><strong><span class="ne-text">获取最终IP地址</span></strong><span class="ne-text">：</span></li></ol><p id="u1182acc2" class="ne-p"><span class="ne-text">TLD服务器返回负责具体域名（如 www.example.com）的权威DNS服务器的IP地址。</span></p><p id="u78ffa116" class="ne-p"><span class="ne-text">本地DNS解析器最终向权威DNS服务器发送查询请求，获取域名对应的IP地址，并返回给用户的浏览器。</span></p></details>
```plain
用户浏览器 ➔ 本地DNS解析器 ➔ 根DNS服务器 ➔ TLD服务器 ➔ 权威DNS服务器 ➔ IP地址返回给用户浏览器
```

<!-- 这是一张图片，ocr 内容为：DNS: ROOT NAME SERVERS 13 ROOT DNS LABELED A IN THE INTERNET, THERE A SERVERS ARE THROUGHPUT M IN THE FOLLOWING FIGURES, MOST ON OF WHICH ARE LOCATED IN NORTH AMERICA. (2012) ROOT DNS TYPICALLY DO NOT CONTAIN HOSTNAME TO IP SERVERS DOMAIN MAPPINGS; THEY CONTAIN MAPPINGS FOR LOCATING TOP-LEVEL ON (TLD) SERVERS. C.COGENT,HERNDON,VA(5 OTHER SITES) K. RIPE LONDON(17 OTHER SITES) D.U MARYLAND COLLEGEPARK,MD H.ARL ABERDEEN,MD I.NETNOD,STOCKHOLM(37 OTHER SITES) J.VERISIGN,DULLES VA(69 OTHER SITES) M.WIDE TOKYO E. NASA MT VIEW,CA (5 OTHER SITES) F.INTERNET SOFTWARE C PALO ALTOCA(AND 48 OTHER SITES) 13 ROOT NAME A VERISIGN,LOS ANGELES CA SERVERS (5 OTHER SITES) B.USC-ISI MARINA DEL REY,CA WORLDWIDE I.ICANNLOS ANGELES,CA (41 OTHER SITES) G.US DOD COLUMBUS OH(5 OTHER SITES) -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738499771090-b8e28f8d-d7d6-4aec-8418-22c44e11470b.png)

1. **分布位置：**
    - <font style="color:rgb(0,0,0);">这些根DNS服务器分布在全球多个地点，以下是几个例子： </font>
        * **Cogent**<font style="color:rgb(0,0,0);">（位于美国弗吉尼亚州Herndon，其他5个地点）</font>
        * **U Maryland**<font style="color:rgb(0,0,0);">（位于美国马里兰州College Park）</font>
        * **NASA**<font style="color:rgb(0,0,0);">（位于美国加利福尼亚州Mt View，其他48个地点）</font>
        * **Verisign**<font style="color:rgb(0,0,0);">（位于美国加利福尼亚州洛杉矶，其他5个地点）</font>
        * **RIPE**<font style="color:rgb(0,0,0);">（位于英国伦敦，其他17个地点）</font>
        * **Netnod**<font style="color:rgb(0,0,0);">（位于瑞典斯德哥尔摩，其他37个地点）</font>
        * **WIDE**<font style="color:rgb(0,0,0);">（位于日本东京，其他5个地点）</font>
2. **根DNS服务器的作用：**
    - <font style="color:rgb(0,0,0);">根DNS服务器的主要作用是</font>**<font style="color:#2F4BDA;">帮助寻找顶级域（TLD）服务器</font>**<font style="color:rgb(0,0,0);">。它们不会直接解析主机名到IP地址的映射，而是提供如何定位顶级域服务器的信息。</font>
+ 

#### <font style="color:rgb(0,0,0);">TLD DNS Server：顶级域服务器  </font>
+ <font style="color:rgb(255,0,0);">Top-level domain (TLD) servers </font><font style="color:rgb(0,0,0);">are responsible for com, org, net, edu, etc, and all top-level </font>**<font style="color:rgb(0,0,0);">通用顶级域名</font>**<font style="color:rgb(0,0,0);"> country domains uk, fr, ca, jp. </font>**<font style="color:rgb(0,0,0);">各个国家的顶级域</font>**
    - <font style="color:rgb(0,0,0);">Company </font><font style="color:rgb(255,0,0);">Network Solutions </font><font style="color:rgb(0,0,0);">maintains the TLD servers for com top-level domain.  - </font>**Network Solutions公司**<font style="color:rgb(0,0,0);">维护了 </font>**.com**<font style="color:rgb(0,0,0);"> 顶级域名的TLD服务器。</font>
    - <font style="color:rgb(0,0,0);">Company </font><font style="color:rgb(255,0,0);">Educause </font><font style="color:rgb(0,0,0);">maintains the TLD servers for the edu top-level domain.  - </font>**Educause公司**<font style="color:rgb(0,0,0);">负责维护 </font>**.edu**<font style="color:rgb(0,0,0);"> 顶级域名的TLD服务器。</font>
+ <font style="color:rgb(255,0,0);">TLD servers </font><font style="color:rgb(0,0,0);">typically do not contain hostname to IP mappings; they contain </font><font style="color:rgb(192,0,0);"> </font>

<font style="color:rgb(0,0,0);">TLD服务器通常</font>**<font style="color:rgb(0,0,0);">不包含主机名到IP地址的直接映射</font>**<font style="color:rgb(0,0,0);">。它们的作用是提供指向**</font>**权威服务器（authoritative servers）**<font style="color:rgb(0,0,0);">**的映射，</font>_<font style="color:#2F4BDA;">权威服务器才会进行具体的域名解析。</font>_

<!-- 这是一张图片，ocr 内容为：ROOT DNS SERVERS EDU DNS SERVERS .ORG DNS SERVERS .COM DNS SERVERS PBS.ORG NYU.EDU YAHOO.COM AMAZON.COM UMASS.EDU DNS SERVERS DNS SERVERS DNS SERVERS DNS SERVERS DNS SERVERS -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738499976565-0930d38d-3494-4182-8b53-348fc3b60d41.png)

**理解：**

**TLD服务器的作用：**<font style="color:rgb(0,0,0);"> TLD服务器管理着特定顶级域（如 </font>**.com**<font style="color:rgb(0,0,0);">、</font>**.org**<font style="color:rgb(0,0,0);">）的名称解析。当一个用户请求访问一个网站时，TLD服务器会指引用户去查询到更具体的域名服务器（如**</font>[www.example.com**的权威DNS服务器），这些服务器负责最终的IP地址解析。](http://www.example.xn--com%2A%2Adns),ip-jr1zw34cda054qea615bskq77czu0fpjaf51mlzdu67rpa5288dyu5de8wa9dx99h./)

**与根DNS服务器的关系：**<font style="color:rgb(0,0,0);"> 根DNS服务器指向TLD服务器，而TLD服务器则指向负责具体网站解析的权威DNS服务器。这样，DNS查询过程通过多个层级逐步实现域名的最终解析。</font>

**公司角色：**<font style="color:rgb(0,0,0);"> 如 </font>**Network Solutions**<font style="color:rgb(0,0,0);"> 和 </font>**Educause**<font style="color:rgb(0,0,0);"> 等公司负责管理和维护相应的TLD服务器，确保顶级域名的管理和查询可以顺利进行。</font>

---

#### <font style="color:rgb(0,0,0);">Authoritative DNS Servers：权威DNS服务器</font>
+ <font style="color:rgb(255,0,0);">Authoritative DNS servers </font>**权威DNS服务器**<font style="color:rgb(255,0,0);">: </font><font style="color:rgb(0,0,0);">provides mapping from </font>**<font style="color:rgb(192,0,0);">hostname to IP address</font>**<font style="color:rgb(192,0,0);"> for organization’s servers </font><font style="color:rgb(0,0,0);">(e.g., Web server, mail server). - 通常用于组织的服务器</font>
    - **<font style="color:rgb(0,0,0);">Store</font>**<font style="color:rgb(0,0,0);"> the </font>**<font style="color:rgb(0,0,0);">mapping</font>**<font style="color:rgb(0,0,0);"> from hostname to IP address. </font>
    - <font style="color:rgb(0,0,0);">Each organization can implement its own authoritative DNS server to hold these records, it also can have these records stored in an authoritative DNS server of some service provider. - 每个组织可以实现自己的权威DNS服务器来存储这些记录，也可以将这些记录存储在某个DNS服务提供商的权威DNS服务器中。</font>
    - <font style="color:rgb(0,0,0);">Each organization with publicly accessible hosts (e.g., Web servers or mail servers) on the Internet must have records that map the name of these hosts to IP addresses-  任何拥有公开可访问主机（如Web服务器或邮件服务器）的组织，都必须拥有将这些主机名称映射到IP地址的记录。</font>

         <!-- 这是一张图片，ocr 内容为：ROOT DNS SERVERS EDU DNS SERVERS .COM DNS SERVERS .ORG DNS SERVERS PBS.ORG NYU.EDU UMASS.EDU AMAZON.COM YAHOO.COM DNS SERVERS DNS SERVERS DNS SERVERS DNS SERVERS DNS SERVERS -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738500045854-51d08a81-8327-41fb-87b0-ed88dd309d48.png)

**理解：**

**权威DNS服务器的作用：**<font style="color:rgb(0,0,0);"> 权威DNS服务器负责存储和提供</font>_<font style="color:rgb(0,0,0);">组织内服务器 </font>_<font style="color:rgb(0,0,0);">的详细信息，特别是它们的</font>**主机名**<font style="color:rgb(0,0,0);">和</font>**IP地址**<font style="color:rgb(0,0,0);">之间的映射。例如，一个Web服务器的主机名可能是**</font>[www.example.com**，它的IP地址则会存储在权威DNS服务器中，当用户访问时，DNS服务器会返回相应的IP地址。](http://www.example.xn--com%2A%2A,ipdns,,dnsip-zm78ao4lja254hv6j7ydga7110aha198am1cxhva86cwa588xe4l7sbky8d7sgfs7avp8asikla53wq79zv5na7a820dh424ayhsbx33d./)

**组织的DNS管理：**<font style="color:rgb(0,0,0);"> 每个组织都可以设置自己的权威DNS服务器来存储这些信息，尤其是在其网络中使用的各种服务。比如，组织可能会有多个Web服务器、邮件服务器等，它们都有对应的主机名和IP地址。</font>

**外部DNS服务提供商：**<font style="color:rgb(0,0,0);"> 组织还可以选择将这些记录交由外部DNS服务提供商管理和存储，尤其是当组织没有足够的技术资源来维护自己的DNS基础设施时。</font>

**公开可访问主机：**<font style="color:rgb(0,0,0);"> 如果一个组织的Web服务器或邮件服务器需要向互联网上的其他用户提供服务，它必须确保这些服务器的主机名和IP地址能够通过</font><font style="color:#2F4BDA;">权威DNS服务器</font><font style="color:rgb(0,0,0);">进行查询。</font>

<font style="color:rgb(0,0,0);">简而言之，</font>**权威DNS服务器**<font style="color:rgb(0,0,0);">负责在互联网上提供主机名与IP地址之间的最终映射，保证客户端能够找到并访问相应的服务器。</font>

#### <font style="color:rgb(0,0,0);">本地DNS服务器（Local DNS Server）</font>
> ipconfig
>

+ **<font style="color:rgb(0,0,0);">Each ISP</font>**<font style="color:rgb(0,0,0);"> (residential ISP, company, university, etc) has a </font>**<font style="color:rgb(0,0,0);">local DNS server</font>**<font style="color:rgb(0,0,0);">. When a host connects to Internet through a ISP, the ISP provides the host with the IP addresses of its local DNS server. </font>
+ **每个ISP（互联网服务提供商）**<font style="color:rgb(0,0,0);">（如住宅ISP、公司、大学等）都有一个本地DNS服务器。当一个主机通过ISP连接到互联网时，ISP会提供本地DNS服务器的IP地址。</font>
+ <font style="color:rgb(0,0,0);">A local DNS server </font><font style="color:rgb(255,0,0);">does not </font><font style="color:rgb(0,0,0);">strictly belong to the hierarchy of servers. </font>
+ **本地DNS服务器不严格隶属于服务器层级结构**<font style="color:rgb(0,0,0);">。  
</font><font style="color:rgb(0,0,0);">本地DNS服务器只是用作请求的中介，帮助主机快速解析域名，而不直接位于DNS的层级结构之内。</font>
+ <font style="color:rgb(0,0,0);">A host's local DNS server is typically"close to"the host. </font>
    - <font style="color:rgb(0,0,153);"></font><font style="color:rgb(0,0,0);">For an institutional ISP, at the same LAN </font>
    - <font style="color:rgb(0,0,153);"></font><font style="color:rgb(0,0,0);">For a residential ISP, no more than a few routers.</font>
+ **主机的本地DNS服务器通常非常靠近主机**<font style="color:rgb(0,0,0);">。</font>
    - <font style="color:rgb(0,0,0);">对于机构级ISP，本地DNS服务器通常位于同一个局域网（LAN）内。</font>
    - <font style="color:rgb(0,0,0);">对于住宅级ISP，通常不会跨越多个路由器，只需经过几个路由器。</font>
+ <font style="color:rgb(0,0,0);">A </font><font style="color:rgb(255,0,0);">local DNS server </font><font style="color:rgb(0,0,0);">is also called a </font><font style="color:rgb(255,0,0);">default name server</font><font style="color:rgb(0,0,0);">. When a host makes a DNS query, query is sent to its local DNS server </font>
+ **本地DNS服务器**<font style="color:rgb(0,0,0);">，也叫</font>**默认名称服务器**<font style="color:rgb(0,0,0);">。当主机进行DNS查询时，查询会被发送到它的本地DNS服务器。 </font>
    - <font style="color:rgb(0,0,0);">The local DNS server acts as a proxy, forwards query into hierarchy of servers. </font>

<font style="color:rgb(0,0,0);">本地DNS服务器充当代理，将查询转发到层级结构中的其他服务器。</font>

    - <font style="color:rgb(0,0,0);">Reduces lookup latency for commonly searched hostnames </font>

<font style="color:rgb(0,0,0);">本地DNS服务器能减少常查询主机名的查找延迟。</font>

+ <font style="color:rgb(0,0,0);">The IP address of your local DNS server can be easily determined by using the command </font><font style="color:rgb(255,0,0);">ipconfig /all </font><font style="color:rgb(0,0,0);">in Windows OS</font>
+ **如何找到本地DNS服务器的IP地址**<font style="color:rgb(0,0,0);">： </font>
    - <font style="color:rgb(0,0,0);">可以通过在Windows操作系统中使用</font>`<font style="color:rgb(0,0,0);">ipconfig /all</font>`<font style="color:rgb(0,0,0);">命令轻松地获取本地DNS服务器的IP地址。</font>

**<font style="color:rgb(0,0,0);">讲解：</font>**

1. **本地DNS服务器的作用**<font style="color:rgb(0,0,0);">： 本地DNS服务器是计算机或网络中的一个重要组成部分，负责接收并处理从主机发出的DNS查询请求。它通常会作为一个</font>**代理**<font style="color:rgb(0,0,0);">服务器存在，并将查询请求转发给更上层的DNS服务器。通过使用本地DNS服务器，常访问的主机名能够被快速解析，减少了延迟。</font>
2. **提高效率**<font style="color:rgb(0,0,0);">： 本地DNS服务器通常会</font>_<font style="color:rgb(0,0,0);">缓存 </font>_<font style="color:rgb(0,0,0);">那些常用的域名解析记录。这样，当同一主机名再次被请求时，服务器不必重新向其他更高层次的DNS服务器查询，而是直接从缓存中提取数据，从而加速了查询响应速度。</font>
3. **如何查找本地DNS服务器**<font style="color:rgb(0,0,0);">： 用户可以在Windows操作系统中通过</font>`<font style="color:rgb(0,0,0);">ipconfig /all</font>`<font style="color:rgb(0,0,0);">命令查看网络配置信息，其中包括本地DNS服务器的IP地址。这有助于确认网络的DNS配置以及故障排除。</font>

<font style="color:rgb(0,0,0);">总之，本地DNS服务器通过缓存和代理功能，加速了DNS查询的过程，尤其对于经常访问的主机名，它大大减少了延迟。</font>

<font style="color:#2F4BDA;"></font>

### <font style="color:#2F4BDA;">A distributed,hierarchical database</font>
<details class="lake-collapse"><summary id="u1d5b4aeb"><span class="ne-text">为什么说DNS是数据库？</span></summary><p id="ue6a0e856" class="ne-p"><span class="ne-text">因为它具有一些与数据库类似的功能和特点。以下是DNS作为数据库的一些关键点：</span></p><ol class="ne-ol"><li id="u7cf2720b" data-lake-index-type="0"><strong><span class="ne-text">数据存储</span></strong></li></ol><ul class="ne-ul"><li id="u962c5c53" data-lake-index-type="0"><span class="ne-text">记录存储：DNS存储域名与IP地址之间的映射关系。每个域名都对应一个或多个IP地址，存储在DNS记录中。</span></li><li id="ufd3e85a7" data-lake-index-type="0"><span class="ne-text">类型多样：DNS记录包括A记录（IPv4地址）、AAAA记录（IPv6地址）、CNAME记录（规范名称）、MX记录（邮件交换服务器）等多种类型。</span></li></ul><ol start="2" class="ne-ol"><li id="ud76450b6" data-lake-index-type="0"><strong><span class="ne-text">数据查询</span></strong><span class="ne-text"></span></li></ol><ul class="ne-ul"><li id="u1b620393" data-lake-index-type="0"><span class="ne-text">查询机制：DNS允许用户和应用程序通过DNS查询来获取存储在其中的数据，例如将域名解析为IP地址。</span></li><li id="uc6833411" data-lake-index-type="0"><span class="ne-text">递归查询和迭代查询：DNS支持递归查询和迭代查询，通过逐级查询不同的DNS服务器来获取最终结果。</span></li></ul><ol start="3" class="ne-ol"><li id="ua0009756" data-lake-index-type="0"><strong><span class="ne-text">数据分布</span></strong></li></ol><ul class="ne-ul"><li id="ub46da584" data-lake-index-type="0"><span class="ne-text">分布式数据库：DNS是一个分布式数据库系统，其数据分布在全球各地的多个DNS服务器上。这种分布式架构提高了系统的可靠性和可扩展性。</span></li><li id="u10cf118f" data-lake-index-type="0"><span class="ne-text">分层结构：DNS具有分层结构，从根DNS服务器到顶级域（TLD）服务器，再到权威DNS服务器，每一层次负责不同范围的数据。</span></li></ul><ol start="4" class="ne-ol"><li id="u29241185" data-lake-index-type="0"><strong><span class="ne-text">数据管理</span></strong></li></ol><ul class="ne-ul"><li id="ue6692124" data-lake-index-type="0"><span class="ne-text">更新和维护：DNS记录需要定期更新和维护，以确保数据的准确性和及时性。例如，当IP地址发生变化时，需要更新对应的DNS记录。</span></li><li id="u8be83c5d" data-lake-index-type="0"><span class="ne-text">缓存：为了提高查询效率，DNS解析器通常会缓存查询结果，以减少重复查询的负载。</span></li></ul><ol start="5" class="ne-ol"><li id="u26f1841f" data-lake-index-type="0"><strong><span class="ne-text">数据一致性</span></strong></li></ol><ul class="ne-ul"><li id="u15424e34" data-lake-index-type="0"><span class="ne-text">数据一致性：尽管DNS是分布式的，但它具有一定的数据一致性机制，确保不同DNS服务器之间的数据同步和一致性。</span></li></ul></details>
**<font style="background-color:#FBDE28;">DNS : A distributed,hierarchical database</font>**<font style="background-color:#FBDE28;"> </font>

<font style="color:rgb(255,0,0);">The DNS is </font>

+ <font style="color:rgb(255,0,0);">A distributed database </font>**分布式数据库**<font style="color:rgb(255,0,0);"> </font><font style="color:rgb(0,0,0);">implemented in hierarchy of DNS servers. (</font><font style="color:rgb(255,0,0);">scalability</font>**扩展性**<font style="color:rgb(255,0,0);"> and reliability</font>**可靠性**<font style="color:rgb(0,0,0);">) </font>
+ <font style="color:rgb(0,0,0);">An</font>**<font style="color:#2F4BDA;"> application-layer</font>**<font style="color:rgb(0,0,0);"> protocol that allows hosts to query the distributed database. </font>**应用层协议：**<font style="color:rgb(0,0,0);"> DNS作为一个应用层协议，允许主机查询分布式数据库中的信息。</font>
+ <font style="color:rgb(0,0,0);">An application-layer protocol that </font><font style="color:rgb(255,0,0);">uses UDP </font><font style="color:rgb(0,0,0);">as its underlying transport layer protocol and use </font><font style="color:rgb(192,0,0);">Port 53. </font><font style="color:rgb(0,0,0);">DNS使用UDP作为其底层传输层协议，并且使用</font>**53端口**<font style="color:rgb(0,0,0);">进行通信。-- </font>**<font style="color:rgb(0,0,0);">Less delay.</font>**

> 为什么使用UDP?
>
> Less delay - 但是会有数据错误和丢失 -- multiple DNS query
>

<details class="lake-collapse"><summary id="u0b803307"><span class="ne-text">更多扩展</span></summary><p id="u8b026fad" class="ne-p"><span class="ne-text">由于UDP（用户数据报协议）是无连接协议，不保证数据包的顺序和交付，DNS（域名系统）在使用UDP时引入了一些机制来处理这个问题：</span></p><ol class="ne-ol"><li id="u2df89b0d" data-lake-index-type="0"><strong><span class="ne-text">请求标识符（Transaction ID）</span></strong><span class="ne-text">：每个DNS请求都有一个唯一的请求标识符，用于区分不同的查询和响应。即使数据包顺序发生变化，也能确保响应与正确的请求对应。</span></li><li id="ucf66f01f" data-lake-index-type="0"><strong><span class="ne-text">单一请求-响应</span></strong><span class="ne-text">：DNS查询通常是独立的单一请求-响应事务。每个查询从发送到接收到响应都是一个独立的操作，因此不会涉及数据包顺序问题。</span></li><li id="uc1a9bb71" data-lake-index-type="0"><strong><span class="ne-text">超时和重传</span></strong><span class="ne-text">：如果客户端在预定时间内没有收到响应，会重发请求。UDP不会自动重传丢失的数据包，但DNS客户端会负责这一部分工作。</span></li><li id="u06f7bef8" data-lake-index-type="0"><strong><span class="ne-text">TCP回退</span></strong><span class="ne-text">：在某些情况下，如果UDP不能满足需求（如响应过大或需要确保顺序），DNS会回退到TCP协议。TCP是面向连接的协议，可以保证数据包的顺序和完整性。</span></li></ol></details>
+ <font style="color:rgb(0,0,0);">DNS is commonly employed by other application-layer protocols—including HTTP, SMTP, and FTP—to translate user-supplied hostnames to IP addresses.</font>
    - **常用于其他协议：**<font style="color:rgb(0,0,0);"> DNS广泛应用于其他应用层协议中，比如HTTP、SMTP、FTP等，用来将用户提供的主机名（hostname）转换为对应的IP地址。</font>

### <font style="color:#2F4BDA;">DNS名称解析示例</font>
<!-- 这是一张图片，ocr 内容为：DNS NAME ROOT DNS SERVER RESOLUTION EXAMPLE HOST AT CIS.POLY.EDU TLD DNS SERVER IP ADDRESS FOR WANTS GAIA.CS.UMASS.EDU 5 1 ITERATED QUERY: LOCAL DNS SERVER DNS.POLY.EDU CONTACTED SERVER 67 REPLIES WITH NAME OF 1 SERVER TO CONTACT 8 DNS MESSAGES E DNS SERVER AUTHORITATIVE WERE DNSCSUMASSEDU SENT:4 QUERY MESSAGES REQUESTING HOST AND 4 REPLY MESSAGES. CIS.POLY.EDU THE QUERY SENT FROM CIS POLY.EDU TO GAIA.CS.UMASS.EDU DNS.POLY.EDU IS A RECURSIVE QUERY, SINCE THE QUERY ASKS DNS.POLY.EDU TO OBTAIN THE MAPPING ON ITS BEHALF. APPLICATION LAYER 2-74 -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738513644535-1e4cd7c2-dba7-4dd4-bdda-0bbc0227fedd.png)

+ **主机（cis.poly.edu）****需要获取****gaia.cs.umass.edu**<font style="color:rgb(0,0,0);">的IP地址。</font>

##### <font style="color:#AE146E;">迭代查询（Iterated Query）</font><font style="color:rgb(0,0,0);">：</font>
+ <font style="color:rgb(0,0,0);">被联系的服务器会返回</font>_<font style="color:rgb(0,0,0);">下一个 </font>_<font style="color:rgb(0,0,0);">需要联系的服务器的名称。</font>

**过程：**

+ <font style="color:rgb(0,0,0);">一共发送了8条DNS消息：</font><u>4条查询消息</u><font style="color:rgb(0,0,0);">和</font><u>4条回复消息</u><font style="color:rgb(0,0,0);">。 </font>
        1. <font style="color:rgb(0,0,0);">**请求主机（cis.poly.edu）**向本地DNS服务器（dns.poly.edu）发送查询请求。</font>
        2. <font style="color:rgb(0,0,0);">本地DNS服务器（dns.poly.edu）向</font>**根DNS服务器**<font style="color:rgb(0,0,0);">发出查询。</font>
        3. <font style="color:rgb(0,0,0);">根DNS服务器返回</font>**TLD DNS服务器**<font style="color:rgb(0,0,0);">的地址。</font>
        4. <font style="color:rgb(0,0,0);">本地DNS服务器（dns.poly.edu）再向</font>**TLD DNS服务器**<font style="color:rgb(0,0,0);">（负责edu域名的服务器）发送查询请求。</font>
        5. <font style="color:rgb(0,0,0);">TLD DNS服务器返回</font>**授权DNS服务器**<font style="color:rgb(0,0,0);">的地址。</font>
        6. <font style="color:rgb(0,0,0);">本地DNS服务器（dns.poly.edu）向</font>**授权DNS服务器**<font style="color:rgb(0,0,0);">（dns.cs.umass.edu）发出查询请求。</font>
        7. <font style="color:rgb(0,0,0);">授权DNS服务器返回目标主机（gaia.cs.umass.edu）的IP地址。</font>
        8. <font style="color:rgb(0,0,0);">本地DNS服务器将结果返回给请求主机（cis.poly.edu）。</font>

**递归查询：**

+ <font style="color:rgb(0,0,0);">从</font>**cis.poly.edu**<font style="color:rgb(0,0,0);">到</font>**dns.poly.edu**<font style="color:rgb(0,0,0);">的查询是递归查询（</font>**<font style="color:#DF2A3F;">recursive query</font>**<font style="color:rgb(0,0,0);">）。这是因为该查询请求dns.poly.edu代替它获取最终的映射信息。换句话说，dns.poly.edu</font><u><font style="color:rgb(0,0,0);">会一直向其他服务器查询，直到得到目标主机的IP地址</font></u><font style="color:rgb(0,0,0);">。</font>



**理解****：**

1. **<font style="color:#5C8D07;">迭代查询</font>**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">在迭代查询中，</font>**<font style="color:rgb(0,0,0);">每一台服务器只会告诉请求方下一步应该查询哪一台服务器，而不会直接返回最终结果。</font>**<font style="color:rgb(0,0,0);">每个查询都会逐步引导到正确的DNS服务器。</font>
2. **<font style="color:#5C8D07;">递归查询</font>**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">与迭代查询不同，递归查询要求</font>**<font style="color:rgb(0,0,0);">DNS服务器代替客户端继续查询</font>**<font style="color:rgb(0,0,0);">，</font>**<font style="color:rgb(0,0,0);">直到返回最终结果</font>**<font style="color:rgb(0,0,0);">。在本示例中，cis.poly.edu请求dns.poly.edu进行递归查询，dns.poly.edu会一直查询，直到最终获得gaia.cs.umass.edu的IP地址。</font>
3. **DNS消息的数量**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">本示例中共发送了8条DNS消息，其中4条为查询消息，4条为回复消息。这表明，在查询过程中，每一步都需要一次请求和一次响应。</font>

<font style="color:rgb(0,0,0);">通过这种方式，DNS可以实现高效的分布式解析，逐层查询直到找到正确的IP地址。</font>

<!-- 这是一张图片，ocr 内容为：DNS NAME ROOT DNS SERVER EXAMPLE RESOLUTION 2 RECURSIVE QUERY: 6 PUTS BURDEN OF NAME TLD DNS SERVER RESOLUTION ON CONTACTED NAME LOCAL DNS SERVER 5 DNS.POLY.EDU SERVER HEAYY LOAD AT UPPER 8 LEVELS OF HIERARCHY! AUTHORITATIVE DNS SERVER DNS.CS.UMASS.EDU REQUESTING HOST CIS.POLY.EDU GAIA.CS.UMASS.EDU A DNS QUERY CHAIN FOR WHICH ALL OF THE QUERIES ARE RECURSIVE. APPLICATION LAYER 2-75 -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738514062368-90a795d7-8e03-4497-96bc-d56ba0a490d7.png)

##### <font style="color:#AE146E;">递归查询（Recursive Query）：</font>
+ **递归查询**<font style="color:rgb(0,0,0);">：把名称解析的责任burden交给被联系的DNS服务器。</font>
+ **上层层次的负载较重**<font style="color:rgb(0,0,0);">：递归查询会增加上层DNS服务器的负担，因为它们需要处理多个查询请求。</font>

**过程：**

    1. **请求主机（cis.poly.edu）****向****本地DNS服务器**<font style="color:rgb(0,0,0);">（dns.poly.edu）发送查询请求，要求解析</font>**gaia.cs.umass.edu**<font style="color:rgb(0,0,0);">的IP地址。</font>
    2. <font style="color:rgb(0,0,0);">本地DNS服务器向</font>**根DNS服务器**<font style="color:rgb(0,0,0);">发送查询请求。</font>
    3. <font style="color:rgb(0,0,0);">根DNS服务器返回</font>**TLD DNS服务器**<font style="color:rgb(0,0,0);">的地址（如.edu域的TLD服务器）。</font>
    4. <font style="color:rgb(0,0,0);">本地DNS服务器向</font>**TLD DNS服务器**<font style="color:rgb(0,0,0);">发送查询请求。</font>
    5. <font style="color:rgb(0,0,0);">TLD DNS服务器返回</font>**授权DNS服务器**<font style="color:rgb(0,0,0);">的地址。</font>
    6. <font style="color:rgb(0,0,0);">本地DNS服务器向</font>**授权DNS服务器**<font style="color:rgb(0,0,0);">（dns.cs.umass.edu）发送查询请求。</font>
    7. <font style="color:rgb(0,0,0);">授权DNS服务器返回</font>**gaia.cs.umass.edu**<font style="color:rgb(0,0,0);">的IP地址。</font>
    8. <font style="color:rgb(0,0,0);">本地DNS服务器将结果返回给请求主机（cis.poly.edu）。</font>

**理解：**

1. **递归查询的工作原理**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">递归查询要求DNS服务器</font>**<font style="color:rgb(0,0,0);">从根服务器开始，逐步向下查询</font>**<font style="color:rgb(0,0,0);">，直到找到最终的IP地址，并将结果返回给客户端。</font>
    - <font style="color:rgb(0,0,0);">在此过程中，客户端将所有查询任务交给本地DNS服务器处理。本地DNS服务器向上层DNS服务器发起请求，一直到获得所需的IP地址为止。</font>
2. **递归查询与迭代查询的不同**<font style="color:rgb(0,0,0);">：</font>
    - **迭代查询**<font style="color:rgb(0,0,0);">：每个DNS服务器只会将查询引导到下一个服务器，直到找到最终的答案，而</font><u><font style="color:rgb(0,0,0);">不会替客户端完成所有查询</font></u><font style="color:rgb(0,0,0);">。</font>
    - **递归查询**<font style="color:rgb(0,0,0);">：客户端要求DNS服务器替它完成所有查询工作，直到返回最终结果。--</font>_<font style="color:rgb(0,0,0);">本地DNS解析器全权负责整个查询过程</font>_
3. **负载问题**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">递归查询虽然能够</font>_<font style="color:rgb(0,0,0);">减少 </font>_**<font style="color:rgb(0,0,0);">客户端</font>**<font style="color:rgb(0,0,0);">的查询次数，但却将负担转移到了上层的DNS服务器。随着查询链条的增加，根DNS和TLD DNS服务器的负担会逐步加重，特别是在互联网规模越来越大时，递归查询会造成上层DNS服务器的高负载。</font>

<font style="color:rgb(0,0,0);">这种递归查询机制通过分层结构有效地将DNS解析过程分解开来，但在实际应用中可能导致某些服务器的负载过重。</font>

<font style="color:rgb(0,0,0);"></font>

### <font style="color:#2F4BDA;">DNS：缓存与更新记录</font>
**DNS : caching , updating records**

<!-- 这是一张图片，ocr 内容为：DNS: CACHING, UPDATING RECORDS CACHING:(ANY) NAME SERVER LEARNS MAPPING, IT CACHES MAPPING CACHE ENTRIES TIMEOUT (DISAPPEAR) AFTER SOME TIME (TTL) TLD S TYPICALLY CACHED IN LOCAL SERVERS NAME SERVERS THUS ROOT NAME SERVERS NOT OFTEN VISITED CACHED ENTRIES MAY BE OUT-OF-DATE (BEST EFFORT NAME-TO-ADDRESS TRANSLATION!) IF NAME HOST CHANGES IP ADDRESS, MAY NOT BE KNOWN INTERNET-WIDE UNTIL ALL TTLS EXPIRE CACHING IS TO IMPROVE DELAY PERFORMANCE BY OF DNS MESSAGES. REDUCING THE NUMBER -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738514256720-b4c5c2b2-1fa3-46d6-a425-b32f6f120cd8.png)

#### <font style="color:rgb(0,0,0);">缓存（Caching）：</font>
+ **缓存**<font style="color:rgb(0,0,0);">：任何DNS服务器在学习到主机名与IP地址的映射关系后，都会将其缓存起来。 </font>
+ <font style="color:rgb(0,0,0);">Cache entries timeout (disappear) after some time (TTL) </font>

<details class="lake-collapse"><summary id="u01ea596e"><span class="ne-text">TTL(Time To Live)</span></summary><p id="u3b745da1" class="ne-p"><strong><span class="ne-text">TTL</span></strong><span class="ne-text">代表“存活时间”，是DNS记录中的一个重要参数。它指示DNS解析器应该缓存该记录的时间长度，以秒为单位。例如，如果TTL设置为600秒，DNS解析器将在600秒内缓存该记录，然后在缓存过期后重新查询。</span></p><p id="u7436ad55" class="ne-p"><strong><span class="ne-text">用途</span></strong><span class="ne-text">：</span></p><ol class="ne-ol"><li id="u4f06f598" data-lake-index-type="0"><strong><span class="ne-text">减少查询次数</span></strong><span class="ne-text">：通过缓存DNS记录，TTL可以减少DNS服务器的查询次数，减轻服务器的负载。</span></li><li id="u7e86c740" data-lake-index-type="0"><strong><span class="ne-text">提高效率</span></strong><span class="ne-text">：缓存可以加快DNS解析速度，提高用户访问网站的效率。</span></li><li id="u1dd83b2d" data-lake-index-type="0"><strong><span class="ne-text">控制更新频率</span></strong><span class="ne-text">：较短的TTL允许DNS记录更频繁地更新，较长的TTL则可以减少更新频率。</span></li></ol></details>
**缓存条目的过期**<font style="color:rgb(0,0,0);">（Timeout）：缓存内容会在一定时间后过期（TTL，生存时间）。</font>

+ **<font style="color:rgb(0,0,0);">TLD</font>**<font style="color:rgb(0,0,0);"> servers typically cached in </font>**<font style="color:rgb(0,0,0);">local name servers</font>**

<details class="lake-collapse"><summary id="u3086e415"><span class="ne-text"> TLD（Top-Level Domain）  </span></summary><p id="uec25d308" class="ne-p"><strong><span class="ne-text">TLD</span></strong><strong><span class="ne-text" style="color: rgb(0,0,0)">代表“顶级域”，是域名系统中的最高层级  </span></strong></p></details>
**TLD服务器缓存**<font style="color:rgb(0,0,0);">：TLD服务器通常将缓存存储在本地名称服务器中，这意味着根名称服务器不会频繁访问。</font>

**缓存的条目可能是过时的**<font style="color:rgb(0,0,0);">，因此需要尽力进行地址到名称的翻译。 </font>

+ <font style="color:rgb(0,0,0);">例如，如果主机名改变了IP地址，那么这个改变可能需要直到所有TTL过期后，才能在互联网上广泛更新。</font>

**缓存的目的是通过 **improve <font style="color:#AE146E;">delay performance</font> by <font style="background-color:#FBDE28;">reducing the number of DNS messages</font>**<font style="background-color:#FBDE28;"> </font>****减少DNS查询消息的数量来提高延迟性能**<font style="color:rgb(0,0,0);">。通过缓存DNS查询结果，DNS服务器能够更快地响应常见的查询请求，从而减少查询所需的时间。</font>

**理解：**

1. **缓存机制**<font style="color:rgb(0,0,0);">：</font>
    - **缓存映射**<font style="color:rgb(0,0,0);">：当DNS服务器学习到某个主机名和IP地址的映射后，它会将这个映射存储到缓存中。这样，当以后需要查询该主机名时，服务器可以直接从缓存中获取结果，而无需再次进行复杂的查询过程。</font>
2. **缓存过期与TTL**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">每个缓存条目都有一个TTL（Time to Live，生存时间），表示该条目存活的最大时间。当TTL过期后，该条目就会从缓存中移除。</font>
    - <font style="color:rgb(0,0,0);">TLD（顶级域名）服务器通常会将这些缓存存储在本地名称服务器中，从而减少对根名称服务器的访问频率。</font>
3. **缓存过时的风险**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">如果某个主机名的IP地址发生了变化，而该IP地址仍然在缓存中，用户可能会获取到过时的IP地址，导致无法连接到目标服务器。</font>
    - <font style="color:rgb(0,0,0);">这个问题在缓存过期前会影响多个用户，直到TTL过期后，缓存才会更新。</font>
4. **提高DNS性能**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">通过缓存机制，可以减少DNS查询所需的时间，并减少DNS服务器之间的通信频率，这对于提高网络的响应速度和减少延迟非常有帮助。</font>

<font style="color:rgb(0,0,0);">总之，缓存是DNS系统中非常重要的一部分，它能够通过减少DNS查询的频率，优化延迟性能，并提高用户访问网站的速度。然而，缓存的过时也可能带来一些问题，尤其是在主机名IP地址变化的情况下。</font>

#### <font style="color:rgb(0,0,0);">DNS记录（DNS Records）</font>
<!-- 这是一张图片，ocr 内容为：DNS RECORDS DNS: DISTRIBUTED DB STORING RESOURCE RECORDS (RR) RR FORMAT: TYPE, TTL) (NAME , VALUE, TYPECNAME TYPE三A NAME IS HOSTNAME NAME IS ALI ALIAS NAME FOR SOME VALUE IS IP ADDRESS CANONICAL"(THE REAL) NAME IS REALLY WWW.IBM.COM IS TYPENS SERVEREAST.BACKUP2.IBM.COM (E.G., NAME IS DOMAIN FOO.COM VALUE IS CANONICAL NAME VALUE IS HOSTNAME OF TYPEMX AUTHORITATIVE NAME SERVER FOR THIS DOMAIN F MAILSERVER NAME OF M VALUE TTL:TIME TO LIVE. ASSOCIATED WITH NAME SHOULD BE DETERMINES WHEN FROM RR REMOVED A CACHE A -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738514552210-c6958504-ff46-49c4-85be-73d5b74c5ba7.png)

**DNS：分布式数据库存储资源记录（RR）**

**RR格式**<font style="color:rgb(0,0,0);">：（name, value, type, ttl）</font>

+ **name**<font style="color:rgb(0,0,0);">：记录的名称</font>
+ **value**<font style="color:rgb(0,0,0);">：记录的值</font>
+ **type**<font style="color:rgb(0,0,0);">：记录的类型</font>
+ **ttl**<font style="color:rgb(0,0,0);">：生存时间（Time To Live）</font>

---

#### <font style="color:rgb(0,0,0);">记录类型（Record Types）</font>
1. **type=A**
    - **name**<font style="color:rgb(0,0,0);"> 是主机名（例如：</font>[www.example.com）](http://www.example.com)/)
    - **value**<font style="color:rgb(0,0,0);"> 是与该主机名对应的IP地址（例如：192.168.1.1）</font>
2. **type=NS**
    - **name**<font style="color:rgb(0,0,0);"> 是域名（例如：foo.com）</font>
    - **value**<font style="color:rgb(0,0,0);"> 是该域名的权威名称服务器的主机名（例如：ns1.foo.com）</font>
3. **type=CNAME**
    - **name**<font style="color:rgb(0,0,0);"> 是某个“别名”名称，指向一个“规范的”（真实的）名称（例如：</font>[www.ibm.com](http://www.ibm.com/)<font style="color:rgb(0,0,0);"> 实际上指向 servereast.backup2.ibm.com）</font>
    - **value**<font style="color:rgb(0,0,0);"> 是规范名称（例如：servereast.backup2.ibm.com）</font>
4. **type=MX**
    - **value**<font style="color:rgb(0,0,0);"> 是与</font>**name**<font style="color:rgb(0,0,0);">关联的邮件服务器的名称（例如：mailserver.foo.com）</font>

---

#### <font style="color:rgb(0,0,0);">TTL（Time to Live）</font>
+ <font style="color:rgb(0,0,0);">TTL：生存时间，指示一个记录在缓存中保存的时间长度。</font>
+ <font style="color:rgb(0,0,0);">TTL决定了当记录过期时，缓存中何时应被移除。</font>

---

**理解：**

+ **A记录**<font style="color:rgb(0,0,0);">：将主机名与其对应的IP地址关联起来。当我们访问一个网站时，浏览器会查询DNS中的A记录，以获取该网站的IP地址。</font>
+ **NS记录**<font style="color:rgb(0,0,0);">：指示某个域名（如foo.com）的权威DNS服务器。通常在域名注册时，会配置该记录来指向负责管理该域名的DNS服务器。</font>
+ **CNAME记录**<font style="color:rgb(0,0,0);">：为某个主机名提供别名，常用于指向另一个“规范的”域名。例如，</font>`<font style="color:rgb(0,0,0);">www.ibm.com</font>`<font style="color:rgb(0,0,0);">可以是</font>`<font style="color:rgb(0,0,0);">servereast.backup2.ibm.com</font>`<font style="color:rgb(0,0,0);">的别名。这种记录常用于负载均衡或通过更简单的域名访问服务。</font>
+ **MX记录**<font style="color:rgb(0,0,0);">：用来指定与某个域名相关的邮件服务器。它通常用于电子邮件系统中，指示邮件应该发送到哪个服务器。</font>
+ **TTL**<font style="color:rgb(0,0,0);">：指示DNS记录在缓存中保存的时长。TTL越短，记录更新的频率越高，但也可能增加查询延迟。TTL过期后，DNS服务器需要重新查询该记录的最新数据。</font>

<font style="color:rgb(0,0,0);"></font>

### <font style="color:#2F4BDA;">DNS协议与消息格式</font>
<!-- 这是一张图片，ocr 内容为：DNS PROTOCOL, MESSAGES QUERY AND REPLY MESSAGES, BOTH WITH SAME MESSAGE FORMAT 2 BYTES 2 BYTES 画 IDENTIFICATION FLAGS MSG HEADER IDENTIFICATION:16 BIT#FOR #ANSWER RRS # QUESTIONS QUERY,REPLY TO QUERY USES #ADDITIONAL RRS #AUTHORITY RRS SAME# FLAGS: QUESTIONS (VARIABLE # OF QUESTIONS) QUERY OR REPLY ANSWERS(VARIABLE#OF RRS) RECURSION DESIRED RECURSION AVAILABLE AUTHORITY(VARIABLE#OF RRS) REPLY IS AUTHORITATIVE THE FIRST 12 BYTES IS THE HEADER ADDITIONAL INFO(VARIABLE#OF RRS) SECTION -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738514676938-9d67d82b-3e8e-4fa0-b4a9-b4ae7feb96ac.png)

**查询（query）和回复（reply）消息：两者具有相同的消息格式**

**消息头（msg header）**

1. **标识符（identification）**<font style="color:rgb(0,0,0);">：</font>
    - <font style="color:rgb(0,0,0);">16位标识符，用于查询的标识，查询的回复使用相同的标识符。</font>
2. **标志（flags）**<font style="color:rgb(0,0,0);">：</font>
    - **查询或回复**<font style="color:rgb(0,0,0);">：标志消息是查询还是回复。</font>
    - **递归请求**<font style="color:rgb(0,0,0);">：指示是否需要递归查询。</font>
    - **递归可用**<font style="color:rgb(0,0,0);">：标志服务器是否支持递归查询。</font>
    - **回复是权威的**<font style="color:rgb(0,0,0);">：标志回复是否来自权威DNS服务器。</font>

**消息格式的其他部分：**

+ **问题数（# questions）**<font style="color:rgb(0,0,0);">：查询中问题的数量。</font>
+ **回答资源记录数（# answer RRs）**<font style="color:rgb(0,0,0);">：答案中的资源记录数。</font>
+ **权威资源记录数（# authority RRs）**<font style="color:rgb(0,0,0);">：包含权威信息的资源记录数。</font>
+ **附加资源记录数（# additional RRs）**<font style="color:rgb(0,0,0);">：附加的资源记录数。</font>

**第一部分是消息头（12字节）**

---

**理解：**

+ **查询与回复消息**<font style="color:rgb(0,0,0);">：DNS协议中的查询消息与回复消息的格式相同，通过标识符和标志位区分它们。</font>
+ **标识符**<font style="color:rgb(0,0,0);">：查询消息和回复消息通过一个16位的数字来进行关联。每次查询都会生成一个唯一的标识符，服务器回复时会带上相同的标识符，以此来关联查询和回复。</font>
+ **标志位（flags）**<font style="color:rgb(0,0,0);">： </font>
    - **查询或回复**<font style="color:rgb(0,0,0);">：该标志指示消息是一个查询请求还是一个回复。</font>
    - **递归请求和递归可用**<font style="color:rgb(0,0,0);">：如果客户端请求递归查询，它会在标志位中设置相应标志，服务器也会表明自己是否支持递归查询。</font>
    - **权威回复**<font style="color:rgb(0,0,0);">：指示DNS回复是否来自权威DNS服务器。如果是，表示该服务器拥有该域名的管理权。</font>

<!-- 这是一张图片，ocr 内容为：DNS PROTOCOL, MESSAGES 2 BYTES 2 BYTES 画 IDENTIFICATION FLAGS #ANSWER RRS # QUESTIONS ADDITIONAL RRS #AUTHORITY RRS # NAME,TYPEFIELDS QUESTIONS (VARIABLE # OF QUESTIONS) FOR A QUERY RRS IN RESPONSE ANSWERS(VARIABLE# OF RRS) TO QUERY RECORDS FOR AUTHORITY(VARIABLE#OF RRS) AUTHORITATIVE SERVERS ADDITIONAL 'HELPFUL" ADDITIONAL INFO(VARIABLE#OF RRS) INFO THAT MAY BE Y BE USED -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1738514822598-02bedab9-8f7f-464b-a4cc-2c72e4a938bd.png)

**消息头（msg header）**

+ **标识符（identification）**<font style="color:rgb(0,0,0);">：16位标识符，查询使用一个标识符，回复使用相同的标识符。</font>
+ **标志（flags）**<font style="color:rgb(0,0,0);">：包含查询或回复的标志，递归请求和可用性，是否为权威回复等信息。</font>

**字段描述：**

1. **问题数（# questions）**<font style="color:rgb(0,0,0);">：该字段指示查询中问题的数量。</font>
2. **回答资源记录数（# answer RRs）**<font style="color:rgb(0,0,0);">：该字段指示该消息中答案的资源记录数。</font>
3. **权威资源记录数（# authority RRs）**<font style="color:rgb(0,0,0);">：该字段指示提供权威信息的资源记录数。</font>
4. **附加资源记录数（# additional RRs）**<font style="color:rgb(0,0,0);">：该字段指示附加的资源记录数。</font>

**查询部分（questions）**<font style="color:rgb(0,0,0);">：</font>

+ **name, type 字段**<font style="color:rgb(0,0,0);">：这些字段指定了查询的名称和类型。</font>

**响应部分**<font style="color:rgb(0,0,0);">：</font>

+ **答复资源记录（RRs）**<font style="color:rgb(0,0,0);">：提供与查询相关的资源记录。</font>
+ **权威服务器的记录（authority）**<font style="color:rgb(0,0,0);">：提供有关权威服务器的信息。</font>
+ **附加信息（additional info）**<font style="color:rgb(0,0,0);">：该部分提供任何额外的、可能有用的帮助信息。</font>

---

**理解：**

+ **查询（query）和回复（reply）消息**<font style="color:rgb(0,0,0);">：查询消息和回复消息在格式上是相同的，但它们通过标识符和标志位来区分。</font>
+ **问题部分**<font style="color:rgb(0,0,0);">：查询部分包括要查询的名称和类型字段。名称是域名，类型是DNS记录的类型（如A记录、MX记录等）。</font>
+ **响应部分**<font style="color:rgb(0,0,0);">：当DNS服务器回复时，它会返回多个字段： </font>
    - **答案部分（answers）**<font style="color:rgb(0,0,0);">：这是服务器对查询的答复，包含响应的资源记录。</font>
    - **权威部分（authority）**<font style="color:rgb(0,0,0);">：提供查询的权威服务器信息。</font>
    - **附加信息（additional info）**<font style="color:rgb(0,0,0);">：有时会返回其他有用的信息，可能对查询有帮助。</font>

<font style="color:rgb(0,0,0);">这种结构使得DNS可以有效地处理查询和响应，并确保网络中信息的传递正确高效。</font>

