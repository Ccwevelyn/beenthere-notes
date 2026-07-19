---
title: Ch1_HTTP Operation and  Message Format
description: 了解即可~
attachments:
  - label: PDF
    file: /uploads/ch1_http-operation-and-_message-format.pdf
grade: year-3
semester: fall
course: advanced-web-development
date: 2026-07-19
order: 2
type: note
published: true
---
#### Preview
1. Javascript : **interpreted** programming language
    - Interactive
    - User interface manipulation
2. Node.js 
    - Javascript **runtime environement  JavaScript 的运行环境  **
    - Allow you to execute JavaScript code outside of a web broswer
    - cross - platform
    - Open-source
    - 基于 Chrome V8 引擎构建的 JavaScript 运行环境
    - 让 JavaScript 可以像 Python、Java 一样在各种环境中执行，而不只是在网页中运行
3. Npm ( Node Package Manager)
    - **default package manager** for Node.js
    - Open-source JavaScript packages
    -  npm 是 Node.js 的官方**包管理工具**，用来安装和管理 JavaScript 库和工具（比如 React、Express、Vite 等）
        *  当你从 Node.js 官网下载并安装 Node.js  时, npm 就作为附带组件一起安装了  
        * **npm 是 Node.js  附带的包管理工具**，它不自带 React，但可以帮你从网上下载 React 和其他框架、库。  

**Node.js  提供运行环境，npm 提供获取工具和依赖的能力**。  

4. Vue.js
    - **轻量级**：核心库只有几十 KB，加载快，适合移动端  
    -  Vue.js 是可以用来开发移动应用的  
5. Web API
    - Application Programming Interface
        * DOM - 操作HTML元素
        * Google Maps
        * Encapsulation
6. JSON -  JavaScript Object **Notation ** 
    -  数据交换格式  
    -  键值对组成，类似 JavaScript 对象  
    -  可以直接在网络中传输  

```json
{
  "name": "Li Hua",
  "age": 28,
  "skills": ["React Native", "Expo", "API Integration"],
  "profile": {
    "location": "Macao",
  }
}
```

---

#### HTTP basics
##### Web browsers and web servers
<font style="color:rgb(0,0,0);">A </font><font style="color:rgb(0,0,255);">web browser </font><font style="color:rgb(0,0,0);">is a program to retrieve 检索 and display resources on the Web</font>

+ <font style="color:rgb(0,0,0);">Microsoft Edge, Mozilla Firefox, Google Chrome, Apple Safari</font>
+ <font style="color:rgb(0,0,0);">Browser Engine 内核 (</font><u><font style="color:rgb(0,0,0);">拓展</font></u><font style="color:rgb(0,0,0);">)：</font>
    - <font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">Blink</font>**<font style="color:rgb(0,0,0);"> 是目前最主流的渲染引擎，Google、Microsoft、Opera 都采用它。  </font>
    - <font style="color:rgb(0,0,0);"> IE（旧版）-  Trident  </font>
    - <font style="color:rgb(0,0,0);">Safari - WebKit</font>

<font style="color:rgb(0,0,0);">A </font><font style="color:rgb(0,0,255);">web server </font>**<font style="color:rgb(0,0,0);">receives requests from a web browser</font>**<font style="color:rgb(0,0,0);"> and returns the requested resource</font>

+ <font style="color:rgb(0,0,0);">Apache HTTP server, Microsoft IIS, nginx</font>

##### Web resources
###### Example
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756699856214-010e041a-eb8b-499b-a247-d07508e9c2db.png)

“Flash movies”- 动画或交互式内容

###### Defination
<font style="color:rgb(0,0,0);">A </font><font style="color:rgb(0,0,255);">resource </font><font style="color:rgb(0,0,0);">is anything that is </font>**<font style="color:rgb(0,0,0);">important enough</font>**<font style="color:rgb(0,0,0);"> to be referenced as a thing in itself. </font>

<font style="color:rgb(116,140,188);">资源指的是任何具有足够重要性、能够单独</font>**<font style="color:rgb(116,140,188);">作为</font>**<font style="color:rgb(116,140,188);">一个</font>**<font style="color:rgb(116,140,188);">实体被提及</font>**<font style="color:rgb(116,140,188);">的事物。</font>

###### <font style="color:rgb(0,0,0);">特征 & URL（是什么+encode）</font>
<font style="color:rgb(0,0,0);">A </font>**<font style="color:rgb(0,0,0);">resource</font>**<font style="color:rgb(0,0,0);"> has at least one </font>**<font style="color:rgb(51,51,255);">URL</font>**<font style="color:rgb(51,51,255);"> </font><font style="color:rgb(0,0,0);">as its </font>**<font style="color:rgb(0,0,0);">address</font>**<font style="color:rgb(0,0,0);">. A </font>**<font style="color:rgb(0,0,0);">browser</font>**<font style="color:rgb(0,0,0);"> uses the </font>**<font style="color:rgb(0,0,0);">URL</font>**<font style="color:rgb(0,0,0);"> to </font>**<font style="color:rgb(0,0,0);">download the resource from a server. </font>**

+ **<font style="color:#DF2A3F;">URL</font>**

<font style="color:rgb(0,0,0);">Each web </font>**<font style="color:rgb(0,0,0);">resource</font>**<font style="color:rgb(0,0,0);"> has a </font>**<font style="color:rgb(0,0,255);">URL </font>**<font style="color:rgb(0,0,0);">(Uniform Resource Locator) as an </font>**<font style="color:rgb(0,0,0);">address</font>**

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756700688533-2cf49350-33e9-46c1-88ae-a3917b01fdb9.png)

1. **<font style="color:rgb(0,0,0);background-color:#FBDE28;">Syntax of URL</font>**

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756700726369-c63c8eae-384a-41f6-9812-525e6245dc3d.png)

| **Protocol** | Communication protocol, such as `http` or `https`<br/>Determines how data is transmitted (**encrypted or not**). |
| --- | --- |
| **Host** | Hostname or domain name 主机名或域名, indicates the server address, e.g., `www.example.com` |
| **File path** |  文件路径，指向服务器上的资源位置   e.g., `/path/to/file` |
| **Query** |  查询参数，通常用于**向服务器传递数据**  e.g., `?name=Congwen&id=123` |
| **Anchor** |  页面锚点，跳转到 HTML 中某个元素的 `id`e.g., `#section2`<br/>+ 用于页面内跳转，定位到某个元素<br/>+ 格式为：`#id`，不会发送到服务器，只在浏览器端处理 |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756701100056-62474a24-84d3-47e3-b2cf-e1479c1f5256.png)

| `**?**` | **开始查询**参数 | `https://example.com/page?name=Congwen` | 表示后面是要传给服务器的参数 |
| --- | --- | --- | --- |
| `**&**` | **分隔多个**参数 | `?name=Congwen&id=123` | 把多个 `key=value`参数连接起来 |
| `**#**` | **页面内**跳转锚点 | `https://example.com/page#section2` | 浏览器定位到页面中某个元素，不发送到服务器 |




2. **<font style="color:rgb(0,0,0);background-color:#FBDE28;">Encode characters in URL</font>**

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756701601065-f5104352-597b-4a6a-b066-e665891796aa.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756702401104-1b409633-48dc-41fb-838d-56b60ec28160.png)

 **字符编码（Character Encoding）**  

 把人类可读的字符（如“中”）转换成计算机能处理的字节序列（如 E4B8AD）  

| 编码名称 | 适用语言 | 示例（“中”） | 特点 |
| --- | --- | --- | --- |
| ISO-8859 | 西方语言 | 不支持“中” | 类似 ASCII，只支持英文和部分欧洲字符 |
| Big5 | 繁体中文 | A4A4 | 台湾和香港常用 |
| GB2312 | 简体中文 | D6D0 | 中国大陆早期标准 |
| UTF-8 | Unicode | E4B8AD | 全球通用，支持所有语言，现代网页首选 |


---

###### <font style="color:rgb(0,0,0);">MIME</font>
<font style="color:rgb(0,0,0);">The </font>**<font style="color:rgb(0,0,0);">web server</font>**<font style="color:rgb(0,0,0);"> uses </font>**<font style="color:rgb(0,0,204);">MIME type</font>**<font style="color:rgb(0,0,204);"> </font><font style="color:rgb(0,0,0);">to specify the data type of a representation of a resource.</font>

+ MIME 类型（**Multipurpose** Internet Mail Extensions）
    - MIME 类型是一种**<font style="color:#DF2A3F;">标准格式 internet standard</font>**，用来描述**资源的内容类型**
    - 最初用于电子邮件系统  
    - 现在被广泛用于 HTTP 协议中，告诉浏览器“我发送的这个资源是什么类型

当浏览器向服务器请求资源时，服务器会在响应头中添加一个字段：

```plain
Content-Type: text/html
```

**<font style="color:rgb(32, 33, 34);">多用途互联网邮件扩展</font>**<font style="color:rgb(32, 33, 34);">( </font>**<font style="color:rgb(32, 33, 34);">MIME ) 是一种标准，它扩展了</font>**[<font style="color:rgb(51, 102, 204);">电子邮件</font>](https://en.wikipedia.org/wiki/Email)<font style="color:rgb(32, 33, 34);">格式，使其支持除</font>[<font style="color:rgb(51, 102, 204);">ASCII</font>](https://en.wikipedia.org/wiki/ASCII)[<font style="color:rgb(51, 102, 204);">字符集</font>](https://en.wikipedia.org/wiki/Character_set)<font style="color:rgb(32, 33, 34);">以外的文本，以及音频、视频、图像和应用程序</font>[<font style="color:rgb(51, 102, 204);">附件</font>](https://en.wikipedia.org/wiki/Email_attachment)<font style="color:rgb(32, 33, 34);">。邮件正文可能由多个部分组成，并且标头信息可以使用非 ASCII 字符集指定。</font>

<font style="color:rgb(32, 33, 34);">采用 MIME 格式的电子邮件通常使用标准协议传输，例如</font>[<font style="color:rgb(51, 102, 204);">简单邮件传输协议</font>](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)<font style="color:rgb(32, 33, 34);">(SMTP)、</font>[<font style="color:rgb(51, 102, 204);">邮局协议</font>](https://en.wikipedia.org/wiki/Post_Office_Protocol)<font style="color:rgb(32, 33, 34);">(POP) 和</font>[<font style="color:rgb(51, 102, 204);">互联网消息访问协议</font>](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)<font style="color:rgb(32, 33, 34);">(IMAP)。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756702304749-2da3745d-8009-47cc-b365-fdb7d3887e69.png)

###### Client/ Server architecture
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756700516250-cd937b9b-12c9-4086-8671-69357c8716ef.png)

<font style="color:rgb(192,0,0);">Each request retrieves one resource only</font>

<font style="color:rgb(192,0,0);"> </font>一个网页 = 多个资源 = 多次请求  

 每个资源都是一次独立的 HTTP 请求，服务器逐个响应。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756700542457-c0cdeef2-2d25-4c7c-b904-d926b059d676.png)

###### <font style="color:rgb(45,47,43);">Data type of web resource</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756702105079-bbf50b77-3fa1-4aeb-93b6-ef12c2b1c148.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756702299819-e1a313b8-d717-41bc-a02e-6586fee6a559.png)

##### HTTP
###### HTTP protocol
<font style="color:rgb(0,0,204);">Hypertext Transfer Protocol </font><font style="color:rgb(0,0,0);">(</font>**<font style="color:rgb(0,0,204);">HTTP</font>**<font style="color:rgb(0,0,0);">) is the protocol used to deliver and perform operations on web resources on the </font>**<font style="color:rgb(0,0,0);">Web</font>**<font style="color:rgb(0,0,0);">.</font>

+ <font style="color:rgb(0,0,0);">It defines the </font>**<font style="color:rgb(0,0,0);">meaning</font>**<font style="color:rgb(0,0,0);"> and </font>**<font style="color:rgb(0,0,0);">structure</font>**<font style="color:rgb(0,0,0);"> of </font>**<u><font style="color:rgb(0,0,0);">requests and responses,</font></u>**<font style="color:rgb(0,0,0);"> and how </font>

<font style="color:rgb(0,0,0);">to handle error.</font>

+ <font style="color:rgb(0,0,0);">HTTP is also used in Ajax and Web API, e.g. Google Search, Facebook，Graph API, Amazon Simple Storage Service</font>
    - <font style="color:rgb(0,0,0);"> HTTP 协议不仅用于加载网页，还广泛用于前端与后端之间的数据通信 </font>
    -  Ajax（Asynchronous JavaScript and XML）<font style="color:rgb(0,0,0);"> 是一种前端技术，用来在不刷新页面的情况下向服务器发送 HTTP 请求   </font>

<font style="color:rgb(0,0,0);">HTTP is a</font>**<font style="color:rgb(0,0,0);"> W3C standard</font>**

+ World Wide Web Consortium（万维网联盟）
+ 是全球最权威的 Web 技术标准制定机构  

         <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756702972587-999eae12-93cf-49c5-a0cf-4e96ce3467f2.png)

###### <font style="color:rgb(45,47,43);">HTTP operation （ Request + Response）</font>
**<font style="color:rgb(0,0,0);">Client</font>**<font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">sends a request</font>**<font style="color:rgb(0,0,0);"> for a resource to the server. </font>

<font style="color:rgb(0,0,0);">Then </font>**<font style="color:rgb(0,0,0);">server returns a response</font>**<font style="color:rgb(0,0,0);"> containing a representation of the resource to the client.</font>

   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756703110758-fe4cb16f-6093-489f-a4c7-a1a2c326c926.png)

+ **HTTP/1.1 - TCP**
    - HTTP/1.0、HTTP/1.1、HTTP/2 都是基于 TCP 的
    - 直到 **HTTP/3** 才开始使用 **QUIC 协议**，它是基于 UDP 的，但加入了可靠性机制（比如重传、顺序控制）

<details class="lake-collapse"><summary id="u2988e351"><span class="ne-text">UDP产生时间更早，为什么UDP是http/3，TCP是1.1？</span></summary><p id="u2de6961a" class="ne-p"><span class="ne-text" style="font-size: 12px">虽然 </span><strong><span class="ne-text" style="font-size: 12px">UDP 的确比 TCP 更早诞生</span></strong><span class="ne-text" style="font-size: 12px">，但 HTTP 协议的演化并不是按“谁先出现就用谁”的逻辑，而是根据 </span><strong><span class="ne-text" style="font-size: 12px">技术需求和网络环境的变化</span></strong><span class="ne-text" style="font-size: 12px">来选择底层协议。</span></p><h6 id="oWAwh"><span class="ne-text">为什么 HTTP/1.1 用 TCP？</span></h6><p id="u97a9bc9d" class="ne-p"><span class="ne-text" style="font-size: 12px">当 HTTP/1.1 在 1997 年发布时，互联网的核心需求是：</span></p><ul class="ne-ul"><li id="ub9766713" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 12px">可靠传输</span></strong><span class="ne-text" style="font-size: 12px">：网页内容不能丢失或乱序</span></li><li id="u4bc47e25" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 12px">广泛兼容</span></strong><span class="ne-text" style="font-size: 12px">：TCP 已在所有操作系统和设备中稳定支持</span></li><li id="u7e52ed57" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 12px">简单部署</span></strong><span class="ne-text" style="font-size: 12px">：TCP 是操作系统内核的一部分，开发者不需要额外处理丢包、重传等问题</span></li></ul><p id="u1a800257" class="ne-p"><span class="ne-text" style="font-size: 12px">所以 HTTP/1.1 选择了 TCP，是非常合理的技术决策。</span></p><h6 id="vkyBb"><span class="ne-text">那为什么 HTTP/3 改用 UDP？</span></h6><p id="ude3c4008" class="ne-p"><strong><span class="ne-text" style="font-size: 12px">--解决 TCP 的几个关键痛点</span></strong></p><p id="u0e08493e" class="ne-p"><span class="ne-text" style="font-size: 12px">HTTP/3 使用的是 </span><strong><span class="ne-text" style="font-size: 12px">QUIC 协议</span></strong><span class="ne-text" style="font-size: 12px">，它是 Google 基于 UDP 开发的一个“类 TCP”的协议</span></p><p id="u1a180859" class="ne-p"><span class="ne-text" style="font-size: 12px"> QUIC 的优势（基于 UDP 实现）</span></p><ul class="ne-ul"><li id="u2b3caad2" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 12px">0-RTT 建链</span></strong><span class="ne-text" style="font-size: 12px">：第一次连接后，后续连接几乎瞬间建立</span></li><li id="ueafc90d2" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 12px">多路复用无阻塞</span></strong><span class="ne-text" style="font-size: 12px">：每个数据流独立，丢包不影响其他流</span></li><li id="u4e841a95" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 12px">连接迁移支持</span></strong><span class="ne-text" style="font-size: 12px">：IP 变了也能继续通信（适合手机网络切换）</span></li><li id="u3112b8d2" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 12px">用户空间实现</span></strong><span class="ne-text" style="font-size: 12px">：不依赖操作系统内核，更新更快</span></li></ul><p id="u1602b656" class="ne-p"><span class="ne-text" style="font-size: 12px">UDP 本身虽然“不可靠”，但 QUIC 在它之上实现了可靠性机制，等于“用 UDP 模拟出更强大的 TCP”。</span></p></details>
+ Transmission Control Protocol - **传输控制协议**

   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756703252689-31bb3ada-e9cf-43ee-8dca-599098e5f999.png)

---

###### <font style="color:rgb(45,47,43);">Basic retrieval</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756703412276-d57a391b-9a21-4107-a46b-1694d453cc8f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756703494181-aeee3145-07b8-4183-842e-fcc022abcdbc.png)

##### <font style="color:rgb(45,47,43);">Basic HTTP request and response</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756703957141-da6b2f15-999c-4bb3-b0dc-a901ba5c516b.png)

###### HTTP message structure
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756704419573-12619b40-0d11-4edf-9565-36e588b5ed1d.png)

Similiar in HTTP requests and responses

+ **<font style="color:rgb(0,0,0);">Start line(</font>**<font style="color:rgb(0,0,0);">URL requested, any error) and </font>**<font style="color:rgb(0,0,0);">blank</font>**<font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">line</font>**<font style="color:rgb(0,0,0);"> are </font>**<font style="color:rgb(0,0,0);">required</font>**<font style="color:rgb(0,0,0);">; </font>
+ **<font style="color:rgb(0,0,0);">headers(</font>**<font style="color:rgb(0,0,0);">additional info)</font>**<font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">and</font>**<font style="color:rgb(0,0,0);"> body(</font>**<font style="color:rgb(0,0,0);">representation of the resource) are </font>**<font style="color:rgb(0,0,0);">optional</font>**<font style="color:rgb(0,0,0);">.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756704476581-377c7359-483e-44df-9aee-a3a522a2e12e.png)

HTTP 协议的起始行和头部字段是**协议控制信息**，必须使用标准的 ASCII 字符集（即英文字符、数字和常见符号）  

Message body 可以是**任意编码**的文本或二进制数据  

+ 消息体是实际传输的数据部分，可以是：
    - HTML、JSON、XML 等**文本**格式
    - 图片、音频、视频等**二进制**格式
+ 编码方式不受限制，但必须通过 Header 告知接收方如何解析

---

1. **<font style="color:#DF2A3F;">Start Line</font>**（起始行）
    - 标识请求或响应的**类型**

**<font style="color:#DF2A3F;">Requests</font>**：包含 **请求方法（如 GET、POST）+ URL 路径 + 协议**版本

    - 示例：`GET /index.html HTTP/1.1`

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756704743570-ee2394d8-7f4d-49e1-85ec-8f2596726a74.png)

**<font style="color:#DF2A3F;">Response</font>**：包含 **<font style="color:#2F4BDA;">协议版本 + 状态码 + 状态描述</font>**

    - 示例：`HTTP/1.1 200 OK`
2. **Message Headers**（消息头）
    - 提供请求或响应的**元信息**
+ 常见请求头：
    - `Host`: 指定目标服务器域名
    - `User-Agent`: 浏览器或客户端信息
    - `Accept`: 支持的响应格式（如 JSON、HTML）
+ 常见响应头：
    - `Content-Type`: 响应内容类型
    - `Content-Length`: 内容长度
    - `Set-Cookie`: 设置客户端 Cookie
3. **Blank Line**（空行）
    - **分隔头部和消息体**
    - 是 HTTP 协议的语法要求，表示头部结束，接下来是正文内容
4. **Message Body**（消息体）
    - 包含实际传输的数据内容



```plain
http://www.example.com/test.html
```

**浏览器**会向**服务器**发送一个 **HTTP 请求**，请求获取 `/test.html` 这个网页。

```plain
GET /test.html HTTP/1.1
Host: www.example.com
```

第一行：请求行（**Request Line**）

+ `GET`：请求方法，表示“我要获取这个资源”
+ `/test.html`：**资源路径**，表示请求的是服务器上的 `test.html` 文件
+ `HTTP/1.1`：使用的协议版本

 第二行：请求头（**Header**）

+ `Host: www.example.com`：指定目标服务器的域名
    - 这是 **HTTP/1.1 的要求**，因为_多个网站可能__**共享**__同一个 IP 地址_

###### Host
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756705238497-e0a6acf1-16a6-48fa-95ae-dfb7cf19d628.png)

+ 一台服务器上托管了多个网站：他们的IP地址是一样的，服务器通过Host头来判断你要访问的是哪个网站。

###### Status line
** HTTP 状态码**是**服务器对客户端请求**的**响应结果**  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756705348250-96e17a2f-2f49-4d56-88f3-ed857ddc0f9e.png)

如，401 Unauthorized；403 Forbidden ...

+ **<font style="color:rgb(45,47,43);">Common codes for success and error</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756705482199-3fcc76ca-b5a3-487e-8c24-aed566b7f361.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756705549452-e3edd446-f8e6-4234-ba17-d32d4826051f.png)

---

###### <font style="color:rgb(45,47,43);">Content-Type</font>
<font style="color:rgb(0,0,0);">Indicates the </font>**<font style="color:rgb(0,0,0);">data type (MIME)</font>**<font style="color:rgb(0,0,0);"> and character encoding of the message body in </font>**<font style="color:rgb(0,0,0);">requests and responses</font>**

+ 如果服务器无法确定响应体的数据类型，它会默认使用 `Content-Type: application/octet-stream` (通用的二进制数据类型)。

###### **<font style="color:rgb(0,0,0);">Content - Length: </font>**
<font style="color:rgb(0,0,0);">Indicates the </font>**<font style="color:rgb(0,0,0);">size (in bytes)</font>**<font style="color:rgb(0,0,0);"> of the message body in requests and responses</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756705840382-c781e533-cd50-4641-992f-c679dde60f4e.png)

在 HTTP 请求或响应中，`Content-Length` 是一个头字段，用来告诉接收方：**消息体的字节长度是多少**。  

如果服务器是**动态生成响应内容**（比如从数据库读取），它在开始发送数据时可能**还不知道最终长度是多少**。--> 无法提前设置 `Content-Length`，但 HTTP 协议又要求先发送头部，再发送消息体。

=> 解决方案：分块传输编码（Chunked Transfer Encoding)

这是 HTTP/1.1 提供的一个机制，允许服务器**分块发送数据**，每一块都带有自己的长度标记 

---

###### <font style="color:#DF2A3F;">Common headers</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756705774655-a9d3dc6c-7b12-493c-88b0-73b27ceb1d08.png)

###### User-Agent & Server
<details class="lake-collapse"><summary id="ube49272f"><span class="ne-text">中文详解</span></summary><p id="uff1666f5" class="ne-p"><strong><span class="ne-text">请求中的浏览器信息：</span></strong><code class="ne-code"><strong><span class="ne-text">User-Agent</span></strong></code></p><p id="u63a5966e" class="ne-p"><span class="ne-text" style="font-size: 14px">在 HTTP 请求中，浏览器会发送一个 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">User-Agent</span></code><span class="ne-text" style="font-size: 14px"> 头，</span></p><pre data-language="plain" id="oLsHc" class="ne-codeblock language-plain"><code>GET /test.html HTTP/1.1  
Host: csproject.mpu.edu.mo  
User-Agent: Mozilla/5.0 (Windows)</code></pre><p id="uf3d06a5a" class="ne-p"><span class="ne-text" style="font-size: 14px">这个头字段告诉服务器：</span></p><ul class="ne-ul"><li id="ucbb61f46" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">浏览器的类型</span></strong><span class="ne-text" style="font-size: 14px">（如 Chrome、Firefox、Safari）</span></li><li id="ueaf6cd27" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">操作系统（如 Windows、macOS、Android）</span></li><li id="u82337d2e" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">有时还包括浏览器版本、设备类型等信息</span></li></ul><p id="ua22a04a8" class="ne-p"><strong><span class="ne-text" style="font-size: 14px">统计分析</span></strong><span class="ne-text" style="font-size: 14px">：网站可以收集这些信息来分析用户使用的浏览器市场份额</span></p><p id="u8117b1f5" class="ne-p"><strong><span class="ne-text" style="font-size: 14px">定制响应</span></strong><span class="ne-text" style="font-size: 14px">：服务器可以根据浏览器类型返回不同的内容（比如为旧版 IE 提供兼容页面）</span></p><hr id="QBkN7" class="ne-hr"><p id="ud40a3fea" class="ne-p"><strong><span class="ne-text">响应中的服务器信息：</span></strong><code class="ne-code"><strong><span class="ne-text">Server</span></strong></code></p><p id="u2668bf57" class="ne-p"><span class="ne-text" style="font-size: 14px">服务器在响应中也会包含自己的信息，例如：</span></p><pre data-language="plain" id="g1ldY" class="ne-codeblock language-plain"><code>HTTP/1.1 200 OK  
Server: Apache</code></pre><ul class="ne-ul"><li id="uf9a7c976" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">使用的是哪种</span><strong><span class="ne-text" style="font-size: 14px">服务器</span></strong><span class="ne-text" style="font-size: 14px">软件（如 Apache、Nginx、IIS）</span></li><li id="u185c63df" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">有时还包括版本号或其他模块信息</span></li></ul><p id="u556cbff9" class="ne-p"><span class="ne-text"> </span><strong><span class="ne-text" style="font-size: 14px">调试与兼容性分析</span></strong><span class="ne-text" style="font-size: 14px">：开发者可以根据服务器类型调整请求策略</span></p><p id="u80a02f5a" class="ne-p"><span class="ne-text" style="font-size: 14px"> </span><strong><span class="ne-text" style="font-size: 14px">安全考虑</span></strong><span class="ne-text" style="font-size: 14px">：有些网站会隐藏或模糊这个字段，防止暴露服务器细节</span></p></details>
+ User -Agent：Indicate which web browser generates requests
+ Server：Indicate which web server generates the response.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756706235478-fadb8456-6c2b-4841-b23d-ac46296cf299.png)

###### Referer
<font style="color:rgb(0,0,0);">From which page the browser obtains the URL of the requested resource</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756706406630-80d178a4-b475-476a-842b-4a7350371cbb.png)

---

#### HTTP methods：GET vs. POST
##### Methods in HTTP/ 1.0
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756722352495-652f81ed-d9f9-47ec-8db1-0230c6727703.png)

+ <font style="color:rgb(0,0,0);">GET用于从服务器</font>**<font style="color:rgb(0,0,0);">获取数据</font>**<font style="color:rgb(0,0,0);">，</font>**<font style="color:rgb(0,0,0);">数据通过URL传输</font>**<font style="color:rgb(0,0,0);">且有长度限制；</font>
+ <font style="color:rgb(0,0,0);">POST用于向服务器</font>**<font style="color:rgb(0,0,0);">提交</font>**<font style="color:rgb(0,0,0);">数据，</font>**<font style="color:rgb(0,0,0);">数据在请求内部</font>**<font style="color:rgb(0,0,0);">传输且无长度限制，更适合发送敏感信息或大量数据；</font>
+ <font style="color:rgb(0,0,0);">HEAD请求仅</font>**<font style="color:rgb(0,0,0);">获取资源头部信息</font>**<font style="color:rgb(0,0,0);">，不返回实体主体</font>

###### <font style="color:rgb(0,0,0);">GET method</font>
1. **Retrieves** a representation of a resource ( mainly )
2. **<font style="background-color:#FBDE28;">Empty body</font>** in **request** message
3. Read - only operation

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756722718647-549708c8-e7fc-4bd5-a338-ac8e339e8b40.png)

###### HEAD method
1. **Response** only contains headers and **<font style="background-color:#FBDE28;">an empty body</font>**
2. 有助于在不实际获取资源的情况下检查其特性。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756722802009-0a7f3bde-a52e-4221-b41e-d16bf1f55dd2.png)

###### POST method
1. **<font style="color:#DF2A3F;">Submit data</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756722921994-f8fa6298-1dc2-4ef0-be72-4b69afa0096a.png)

2. POST 请求通常是<u>发给</u>一个 **服务端程序**，比如 PHP、Node.js、Python Flask、Java Servlet 等。这些程序负责接收数据、处理逻辑，比如验证用户、保存数据库、生成响应等。  
3. POST 请求的数据是放在 **<font style="background-color:#FBDE28;">请求体（body）</font>**中，而不是像 GET 请求那样放在 URL 中。  
4. POST 请求的目的：**触发服务端行为**。不像 GET 请求只是读取数据  

---

##### Application
+ **浏览器行为上**：浏览器允许你用 **GET** 方法**提交表单**，<u>提交的</u>**<u>数据</u>**<u>会</u>**<u><font style="color:#DF2A3F;">附加</font></u>**<u><font style="color:#DF2A3F;">在 </font></u>**<u><font style="color:#DF2A3F;">URL</font></u>**<u><font style="color:#DF2A3F;"> 后面</font></u><u>（作为查询参数）  </u>
    - **GET ****<font style="color:#DF2A3F;">请求的数据</font>****暴露在****<font style="color:#DF2A3F;"> URL</font>**** 中**：不安全，尤其是密码、敏感信息。
    - **GET 请求可以被缓存、记录、重复执行**：比如浏览器“刷新”或“回退”时可能会重新发送请求。

                <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756723805614-d323c659-f0b2-4872-bd0d-7840a7dbe1d1.png)

             <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756724004929-80b135de-aef2-4117-9dbb-c928bec2a159.png)

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756892019075-0ed1aa77-41ca-42c6-a28f-bc67d33a8456.png)

提交表单 ≠ 修改服务器数据

###### GET 提交表单时的数据格式
`<form method="get">` 

```http
http://example.com/login.jsp?user=philip&passwd=12345
```

**GET提交**，data is encoded as `**x-www-form-urlencoded**` 编码规则：

+ 每个字段是 `**name=value**` 的形式
+ 多个字段之间用 `&` 分隔
+ **非 ASCII 字符（比如中文）会被转成 UTF-8 **的十六进制，并用 `%XX` 表示
+ GET 提交 appended to the URL

###### x-www-form-urlencoded 编码详解
这个编码方式不仅用于 **GET**，也用于 **POST**（尤其是传统表单提交）。它的特点：

+ 空格变成 `+`
+ 特殊字符变成 `%XX`（URL 编码）
+ 默认字符集是 US-ASCII，但现代浏览器通常使用 UTF-8

   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756723668873-a9755a40-f2b1-45e7-9af6-20165e72b159.png)

---

###### Submit form by POST
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756724272061-9ca9273d-f8b3-44f8-b296-4ae2ee47aa62.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756724291440-c2ea0f03-2d1d-418f-b254-ad014d460907.png)

GET 和 POST 都有 `**x-www-form-urlencoded**`**，**

**但是：**

GET 请求通常**没有****<font style="background-color:#FBDE28;">请求体（body）</font>**，因此在标准情况下它**不需要也不会包含 **`**<font style="color:#DF2A3F;background-color:#FBDE28;">Content-Type</font>**`**头部**。

---

###### Side - effect 副作用
“副作用”指的是一个请求<u><font style="color:#DF2A3F;">是否会</font></u>**<u><font style="color:#DF2A3F;">改变服务器状态</font></u>**，比如写入数据库、发送邮件、创建订单等。

        <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756724459643-fddc301a-52f3-4eea-90c4-7fcfe4325c02.png)

**POST -> 可能有 side-effect**

+ 如果用户刷新页面或回退，浏览器会弹出确认框（“是否重新提交表单？”）
+ <u>防止用户无意中重复执行操作</u>

       <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756724688743-54db0b1c-dbc7-4f63-a85b-113d9973ea32.png)

    - 用户提交购买请求（POST `/buy.asp`），服务器返回一个确认页面（200 OK）。
    - 用户**刷新**页面时，浏览器会提示：“是否重新提交表单？”因为这是一个 POST 响应。

<details class="lake-collapse"><summary id="u02693646"><span class="ne-text">浏览器的作用</span></summary><ol class="ne-ol"><li id="u1fa4d60e" data-lake-index-type="0"><strong><span class="ne-text">构造并发送 HTTP 请求</span></strong></li></ol><ul class="ne-ul"><li id="u0da55098" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">根据 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">&lt;form&gt;</span></code><span class="ne-text" style="font-size: 14px"> 标签的 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">method</span></code><span class="ne-text" style="font-size: 14px"> 和 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">action</span></code><span class="ne-text" style="font-size: 14px"> 属性，浏览器构造请求：</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u62379c33" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">如果是 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">method=&quot;get&quot;</span></code><span class="ne-text" style="font-size: 14px">：</span><span class="ne-text" style="color: #DF2A3F; font-size: 14px">拼接参数到 URL</span></li><li id="u28bbd72b" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">如果是 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">method=&quot;post&quot;</span></code><span class="ne-text" style="font-size: 14px">：</span><span class="ne-text" style="color: #DF2A3F; font-size: 14px">将参数放入请求体</span><span class="ne-text" style="font-size: 14px">，设置 </span><code class="ne-code"><span class="ne-text" style="font-size: 14px">Content-Type</span></code></li></ul></ul><pre data-language="http" id="FIZim" class="ne-codeblock language-http"><code>POST /login.jsp HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 24

user=philip&amp;passwd=12345</code></pre><ol start="2" class="ne-ol"><li id="uae47d71b" data-lake-index-type="0"><strong><span class="ne-text">记录请求上下文（用于刷新/返回）</span></strong></li></ol><p id="u22566e7a" class="ne-p"><span class="ne-text" style="font-size: 14px">浏览器会把</span><strong><span class="ne-text" style="font-size: 14px">请求和响应</span></strong><span class="ne-text" style="font-size: 14px">缓存起来，以便用户点击“返回”或“刷新”时能重新加载页面。</span></p><ul class="ne-ul"><li id="u0c57c5f2" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">对于 GET 请求，它可以直接重发request，因为无副作用。</span></li><li id="u7d56f964" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">对于 POST 请求，它会弹出提示，因为可能有副作用。</span></li></ul><p id="ub8fb9c6f" class="ne-p"><span class="ne-text">3</span><span class="ne-text" style="font-size: 14px">. </span><strong><span class="ne-text" style="font-size: 14px">判断是否需要用户确认</span></strong></p><ul class="ne-ul"><li id="u94157fdb" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">如果用户点击“刷新”或“返回”，浏览器会检查：</span></li><li id="u6e29879b" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">这就是浏览器的“保护机制”：</span><strong><span class="ne-text" style="font-size: 14px">不是阻止你操作，而是提醒你可能会“无意中重复执行”敏感操作。</span></strong></li></ul></details>
<details class="lake-collapse"><summary id="uca4fb6a4"><span class="ne-text">刷新页面意味着浏览器重新发送请求 request</span></summary><ol class="ne-ol"><li id="u7e398b03" data-lake-index-type="0"><strong><span class="ne-text" style="text-decoration: underline">对于 GET 请求</span></strong></li></ol><ul class="ne-ul"><li id="u1554fee3" data-lake-index-type="0"><span class="ne-text">浏览器会</span><strong><span class="ne-text" style="text-decoration: underline">重新发送</span></strong><strong><span class="ne-text">原始的 GET 请求</span></strong><span class="ne-text">，包括 URL 和查询参数。</span></li><li id="u20ce8f21" data-lake-index-type="0"><span class="ne-text">不需要用户确认，因为 GET 是无副作用的。</span></li><li id="ub4ad5e5c" data-lake-index-type="0"><span class="ne-text">常见场景：</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u144a6cae" data-lake-index-type="0"><span class="ne-text">刷新商品列表页</span></li><li id="ub06d8d43" data-lake-index-type="0"><span class="ne-text">刷新搜索结果页</span></li></ul></ul><pre data-language="http" id="WeZUt" class="ne-codeblock language-http"><code>GET /search?q=react+native&amp;page=2</code></pre><p id="u7fcc83b2" class="ne-p"><span class="ne-text">刷新时会重新发出这个请求，重新获取数据。</span></p><ol start="2" class="ne-ol"><li id="u8cadd94a" data-lake-index-type="0"><strong><span class="ne-text" style="text-decoration: underline">对于 POST 请求</span></strong></li></ol><ul class="ne-ul"><li id="ufb1bd74a" data-lake-index-type="0"><span class="ne-text">浏览器会</span><em><strong><span class="ne-text">尝试 </span></strong></em><strong><span class="ne-text">重新发送原始 POST 请求</span></strong><span class="ne-text">，包括请求体中的数据。</span></li><li id="u1897baf3" data-lake-index-type="0"><span class="ne-text">但因为 POST 可能有副作用（比如创建订单）</span></li></ul><hr id="B8JRL" class="ne-hr"><p id="ud1e152b8" class="ne-p"><span class="ne-text">刷</span><span class="ne-text" style="font-size: 14px">新页面时，浏览器的目标是：</span><strong><span class="ne-text" style="font-size: 14px">重新加载当前页面的内容</span></strong><span class="ne-text" style="font-size: 14px">。这意味着它必须</span><strong><span class="ne-text" style="font-size: 14px">重新获取页面资源</span></strong><span class="ne-text" style="font-size: 14px">——但是否真的“重发请求”，取决于缓存策略。</span></p><h3 id="104ef06b"><span class="ne-text">🔁</span><span class="ne-text"> 刷新 ≠ 必然重发请求</span></h3><p id="u6c5c63ee" class="ne-p"><span class="ne-text"></span></p></details>
##### Comparison
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756725672392-c0c09f2e-15f8-4e03-9dfb-267b74e1904c.png)

**Form data in URL ？**

-- **用户在**_**网页表单中填写的数据**_**，被编码进了 ****<font style="background-color:#FBDE28;">URL 的查询字符串</font>****中**。

```http
<form action="/search" method="GET">
  <input name="q" value="React Native">
  <button type="submit">Search</button>
</form>
```

用户点击提交后，浏览器会跳转到：

```http
/search?q=React+Native
```

+ 表单字段 `q` 的值 `React Native` 被编码进了 URL 的**查询参数**中
+ <u>浏览器地址栏会显示完整的 URL</u>
+ 用户可以复制这个地址、保存书签、分享给别人

---

#### Redirection
重定向 ≠ 原地址不可用  

原地址是**有效的入口**，只是服务器根据逻辑决定跳转

“客户端请求了一个地址，服务器**可以处理它**，但希望客户端去另一个地址继续操作或查看结果。”  

When browsers receive a redirect, they immediately **load** the **new URL** provided in the `Location` header

                             <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756892269687-76a8e964-c8b2-403d-b765-7b8d2c95397f.png)

+ <font style="color:rgb(0,0,0);">A web </font>**<font style="color:rgb(0,0,0);">server</font>**<font style="color:rgb(0,0,0);"> </font><u><font style="color:rgb(0,0,0);">requires</font></u><font style="color:rgb(0,0,0);"> the </font>**<font style="color:rgb(0,0,0);">browser</font>**<font style="color:rgb(0,0,0);"> to </font>**<font style="color:rgb(0,0,0);">send a second request</font>**<font style="color:rgb(0,0,0);"> to get the 'real' response</font>
+ <font style="color:rgb(0,0,0);">A redirection response uses status code </font><font style="color:#213BC0;">301, 302, 303</font><font style="color:rgb(0,0,0);"> or </font><font style="color:#213BC0;">307</font><font style="color:rgb(0,0,0);"> and indicates the</font><font style="color:#213BC0;"> new URL</font><font style="color:rgb(0,0,0);"> in the Location </font><font style="color:#213BC0;">header</font><font style="color:rgb(0,0,0);"> in the response.</font>
+ <font style="color:rgb(0,0,0);">The client has to send </font>**<font style="color:rgb(0,0,0);">another request</font>**<font style="color:rgb(0,0,0);"> to the new URL</font>

        <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756892487646-5aa79af4-cb46-49f6-b4b1-d2ec33d6ca79.png)

---

##### Redirection of GET requests
###### 301 Moved <font style="background-color:#FBDE28;">permanently</font>
+ Redirection responses may be **reused** by <u>broswer</u> cache and cache servers
+ A client should use the **new URL** for future requests
+ eg. Move to a different folder , to a different site

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756892670179-03ec6a27-238c-4cd0-b3a7-da257febdca4.png)

When a <u>browser</u> sees a`301`:

+ It **remembers** the redirect
+ Future requests to the old URL may **automatically jump** to the new one without asking the server again

###### 302 Found
+ Move temporarily
+ A client use **original URL**
    - Similar status code：303，307

  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756893191975-4a1f3a6f-8890-46c5-b289-8ba18bb5b8c9.png)

---

##### Redirection of a POST request
| 场景 | 状态码 | 是否处理原请求 | 客户端行为 |
| --- | --- | --- | --- |
| 未处理 | 302 Found | ❌ 没处理 | 再次用 POST 请求新地址 |
| 已处理 | 303 See Other | ✅ 已处理 | 用 GET 请求新地址查看结果 |


| 方法 | 是否有副作用 | 重定向后行为 |
| --- | --- | --- |
| GET | ❌ 无副作用 | 直接 GET 新地址 |
| POST | ✅ 有副作用 | 要么重新提交，要么查看结果（303） |


两种服务器处理 **POST** 请求后的**重定向**策略

###### 情况一：**服务器****<u><font style="background-color:#FBDE28;">不处理原请求</font></u>**（数据写入、状态变更）**，只是****<u>引导到新地址处理</u>**
+ 状态码：`302 Found` 或 `<font style="background-color:#FBDE28;">307</font> Temporary Redirect`
+ 意图：告诉客户端“你应该去另一个地方提交这个请求”
+ 客户端行为：**<font style="color:#213BC0;background-color:#FBDE28;">重新用 POST 请求</font>****新地址**
+ 场景示例：
    - 老接口 `/submit` 被废弃，重定向到新接口 `/api/submit`
    - 用户访问 `/login`，被引导到 `/sso-login`

              <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756893902248-8c9f6326-b55a-4008-99e7-b87b92d15e77.png)

+ 在 **HTTP/1.0** 中，302 的定义是“**临时重定向**”，但没有明确规定客户端是否可以**改变请求方法。**
    - 结果是：**不同浏览器行为不一致**，尤其是当原请求是 `POST` 时，有的浏览器会自动改成 `GET`，有的不会

               <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756894077896-e71dac3c-ad7c-4142-8758-779d8f42b475.png)

+ **307** Temporary redirect - client **submit** the **<font style="color:#213BC0;">form data</font>** at **new URL** using the **<u>original</u>**** HTTP** method

            <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756894370756-96521de9-c9ad-4c6c-baba-bec52c3a49f9.png)



###### 情况二：**服务器****<font style="background-color:#FBDE28;">已经处理</font>****原请求，然后引导去查看结果**
+ 状态码：`<font style="background-color:#FBDE28;">303</font> See Other`
+ 意图：告诉客户端“我已经处理好了，请去另一个地址查看结果”
+ 客户端行为：**用 ****<font style="background-color:#FBDE28;">GET 请求</font>****新地址**

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756893919698-dcec6146-05ba-4fd9-83b2-cea3a04c10f4.png)

   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756894458469-025cc860-173e-4a5b-9d21-32165bdf82b7.png)

+ 场景示例：
    - 用户提交订单 → POST `/checkout`
    - 服务器处理完订单 → 返回 `303 → Location: /order-confirmation`
    - 浏览器自动跳转到确认页 `/order-confirmation`

---

用户提交POST请求，刷新页面，浏览器提示“是否重新提交表单”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756894566235-e4b33f7b-ae33-451b-bcf5-d269265baefa.png)

1. 用户提交 POST `/buy.asp`
2. 服务器返回 **302 Found** 或 **303 See Other**，并附带 `Location: /thankyou.asp`
3. 浏览器自动发起 **GET /thankyou.asp**
4. 用户看到确认页面，但此时页面是 GET 请求的结果

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756894728831-b929c536-cc4a-4da7-bf98-23e06ae33b5e.png)

| **状态码** | 用途 | 是否改变请求方法 | 推荐场景 |
| --- | --- | --- | --- |
| **302 Found** | 临时重定向 | 浏览器可能改为 GET（不可靠） | 老旧兼容 |
| **303 See Other** | 明确要求改为 GET | ✅ **改为 GET** | PRG 模式推荐 |
| **307 Temporary Redirect** | 保持原方法 | ❌ 不改方法 | API 请求中保持 POST |


##### Common code for redirection
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756894539956-8cd96bb5-b9a2-4dd3-a040-55fa6e706654.png)

