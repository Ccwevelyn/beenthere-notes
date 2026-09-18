---
title: Notes on HTTP
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/notes-on-http.pdf
grade: year-2
semester: spring
course: web-design-development
date: 2026-09-18
order: 3
published: true
---
### HTTP
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739459689798-1ee241ab-b21c-45b7-85c3-3353ef9b17f4.png)

1. **<font style="color:#2F4BDA;">stateless(无状态的）</font>**：每个HTTP请求都是独立的，**不会保留前一个请求的任何信息。**

<details class="lake-collapse"><summary id="u088cd00c"><span class="ne-text">如何在HTTP环境保留购物车记录？</span></summary><h6 id="uonCq"><span class="ne-text">Cookie 和 Session</span></h6><ol class="ne-ol"><li id="ufa6f8d6a" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">Cookies</span></strong><span class="ne-text" style="font-size: 14px">：浏览器在客户端存储少量数据，可以用来保存用户的会话信息和购物车内容。当用户访问网站时，浏览器会自动发送相关的 Cookies 到服务器，从而保留用户的状态。</span></li><li id="u054a120b" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">Session</span></strong><span class="ne-text" style="font-size: 14px">：服务器端技术，通过生成一个唯一的会话 ID 并将其存储在客户端的 Cookie 中，服务器可以通过这个会话 ID 跟踪用户的状态和数据。购物车内容等信息保存在服务器端的 Session 中。</span></li></ol><h6 id="R1wcC"><span class="ne-text">Local Storage 和 Session Storage</span></h6><ol class="ne-ol"><li id="ufe9cf4e7" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">Local Storage</span></strong><span class="ne-text" style="font-size: 14px">：浏览器提供的本地存储，可以用来保存用户的数据，如购物车内容，数据会一直保留，直到被手动清除。</span></li><li id="u8c0a7ca7" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">Session Storage</span></strong><span class="ne-text" style="font-size: 14px">：与 Local Storage 类似，但数据仅在会话期间有效，关闭浏览器标签页或窗口后数据就会被清除。</span></li></ol></details>
2. Distributed system

 **分布式系统**是一种计算系统，其中的组件分布在**多个网络节点**上，通过网络进行通信和协调来完成任务。与集中式系统不同，<u>分布式系统没有单一的中心节点</u>，系统的各个部分可以在不同的物理位置上独立运行和协作。  

<details class="lake-collapse"><summary id="u5901cf2c"><span class="ne-text">分布式=P2P？NO！也可以包含C/S</span></summary><p id="u667f136c" class="ne-p"><span class="ne-text">尽管这种架构在某些情况下是集中式的，但它也可以在分布式系统中实现。举个例子：</span></p><ul class="ne-ul"><li id="ufa71323e" data-lake-index-type="0"><strong><span class="ne-text">Web应用</span></strong><span class="ne-text">：一个分布式Web应用可以有多个服务器节点（例如，多个Web服务器和应用服务器），它们共同处理来自客户端的请求。尽管每个请求仍然是客户端发送到服务器，但服务器节点可以是分布式的。</span></li></ul></details>
3. 服务器和客户端之间的通信通过请求/响应对（request/response pair）进行。
+ **客户端请求**：客户端（如浏览器）发起一个 HTTP 请求消息。
+ **服务器响应**：服务器接收到请求后，通过 HTTP 响应消息进行回应。

---

### URL
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739460854571-449583c2-b259-44ff-9bf9-8d8877753c89.png)

  在 URL 中，本地路径（resource path）是指**资源在服务器上具体资源的位置或路径**。它是用来指示服务器上保存网页、图片、文件等资源的具体位置的。  

在这个例子中，本地路径是 `/docs/resource.html`。它指示了服务器 `www.example.com` 上的文件 `resource.html` 存储在 `docs` 目录下。

#### 路径的组成
+ **根目录**（Root）：以 `/` 开头，表示服务器的根目录。
+ **目录**（Directory）：`/docs`，表示存储文件的文件夹。
+ **文件名**（File name）：`resource.html`，表示具体的文件。

 **端口（Port）**：

+ **默认端口**：对于 HTTP 协议，默认端口是 80。对于 HTTPS 协议，默认端口是 443。
+ **显式端口**：可以在 URL 中显式指定端口。

例如，`http://www.example.com:8080` 使用端口 8080。

---

### Request
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739461411197-93a1ab40-d02e-4ff2-a2c7-cf20c9861865.png)

   URL（统一资源定位符）用于标识<u>我们想要通信的</u>**<u>特定主机</u>**。例如，在 URL `https://www.example.com` 中，`www.example.com` 表示主机名（服务器地址），这是我们希望与之通信的目标服务器。  

+ **<font style="color:#2F4BDA;">GET：获取现有资源</font>**
+ **<font style="color:#2F4BDA;">POST：创建新资源</font>**

---

### Status code
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739583248672-45709367-c32a-472b-8e6d-7ec8a7247e49.png)

###### Status code（状态码）
<details class="lake-collapse"><summary id="u79127c23"><span class="ne-text">服务器在响应HTTP请求时返回的数字码，用来指示请求的结果。</span></summary><p id="ua7c77fb4" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739583479705-a346d0aa-dd17-4d7a-a68e-1c769f482d77.png" width="575.3333333333334" title="" crop="0,0,1,1" id="u0004de1f" class="ne-image"></p></details>
###### Message payload（消息载荷）
 消息载荷是指HTTP请求或响应中的实际数据内容。通常包含在请求体或响应体中。 

```http
POST /api/resource HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "key": "value"
} 
```

---

### Request and Respond message formats
_<font style="color:rgb(0,0,0);">Verbs and status codes </font>_<font style="color:rgb(0,0,0);">make up the fundamental pieces of an </font>**<font style="color:rgb(0,0,0);">HTTP request/response pair.</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739583797253-71bc664b-0560-48ef-863e-89ed22307645.png)

###### HTTP动词（Verbs）/状态码
 HTTP_动词_（也称为方法）指定了客户端希望服务器执行的操作。如GET,POST...

 HTTP_状态码 _用于指示请求的结果。服务器通过状态码告知客户端请求是否成功以及发生了什么情况。

示例，

GET请求-request请求-Verb

```http
GET /resource HTTP/1.1
Host: example.com
```

响应-respond-Status code

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
  "data": "sample resource"
}
```

---

###   Viewing HTTP headers
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739584798078-f0674cdc-8c0b-4522-93ef-b1a023872c4e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739584859513-7e692540-218c-4644-bffa-fbb0fb7cc7b5.png)

<font style="color:rgb(32, 33, 36);">该请求并非通过网络发送，而是从本地缓存提供，其中不会存储原始请求标头。在这种情况下，您可以</font>[停用缓存](https://developer.chrome.com/docs/devtools/network/reference?utm_source=devtools&hl=zh-cn#disable-cache)<font style="color:rgb(32, 33, 36);">以查看完整请求标头。</font>

