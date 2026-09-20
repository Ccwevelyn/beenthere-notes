---
title: Ch3_Essential Enterprise Development Technologies
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/ch3_essential-enterprise-development-technologies.pdf
grade: year-4
semester: fall
course: enterprise-system-application-development
date: 2026-09-20
order: 3
published: true
---
## Introduction
### J2EE → Java EE → Jakarta EE
它们并不是三个完全不同的平台，而是同一套企业级 Java 技术在不同历史阶段的名称  

全称：**Java Enterprise Edition**

现在已经改名为：**Jakarta EE**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789901973002-7cb49004-8884-4407-9c7d-949b32ac4dc6.png)

### Java EE 是什么？/ **<font style="color:rgb(20,20,20);">What is Java EE</font>**
它不是一种新的编程语言，而是建立在 Java 之上的一套**企业级应用开发规范和技术体系**，主要用于开发大型 Web 系统和企业系统  

#### Aim/ Specification/ Implementation
+ **<font style="color:rgb(20,20,20);">The</font>****<font style="color:#2F4BDA;"> aim</font>****<font style="color:rgb(20,20,20);"> of the Java EE platform is to provide developers with a powerful </font>****<font style="color:#2F4BDA;">set of API </font>****<font style="color:rgb(20,20,20);">while</font>**<font style="color:rgb(20,20,20);"> </font>**<font style="color:#2F4BDA;">shortening development time, reducing application complexity, and improving application performance.</font>**
+ **<font style="color:#2F4BDA;">Specifications</font>****<font style="color:rgb(20,20,20);">: Java EE</font>****<font style="color:#2F4BDA;"> API </font>****<font style="color:rgb(20,20,20);">describes </font>****<font style="color:#2F4BDA;">how an enterprise application should be created, what components should contain</font>****<font style="color:rgb(20,20,20);">, etc</font>**
+ **<font style="color:rgb(20,20,20);">Implementations (Application Servers) : </font>****<font style="color:#2F4BDA;">GlassFish, Payara,WeblogicServer, Jboss</font>****<font style="color:rgb(20,20,20);"> etc</font>**

#### **<font style="color:rgb(20,20,20);">Java EE 与 Java SE</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789903136196-456622ff-ce91-4838-b2c2-5f1b9329f491.png)

Java SE 提供基础能力，例如：

+ Java 语法
+ JVM
+ 集合框架
+ 异常处理
+ 文件 I/O
+ 网络基础
+ 多线程基础

Java EE 在 Java SE 之上增加企业开发能力，例如：

+ Web 请求处理
+ 数据库持久化
+ 事务管理
+ 身份认证
+ 消息通信
+ 依赖注入
+ Web Service

:::warning
**Java EE = Java SE 基础 + 企业级 API 和运行环境**

**Java EE 是建立在 Java SE 之上的企业级 API 规范集合**

:::

#### Java EE 的特点
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789902221692-aea3883b-37d7-45d8-b44f-5b6265123a2d.png)

##### **<font style="color:#2F4BDA;">Set</font>****<font style="color:rgb(20,20,20);"> of interoperable API specifications = </font>****<font style="color:rgb(20,20,20);background-color:#FBDE28;">一组标准</font>**
> <font style="color:rgb(20,20,20);">interoperable </font><font style="color:rgb(225, 227, 230);background-color:rgb(11, 12, 13);">尤指计算机系统或软件、不同机器等）可互操作的，可共同操作的，能交换和利用信息的</font>
>

Java EE 不是一个具体软件，也不是单独的编程语言，而是一组能够互相配合的 **API 规范**。 

“规范”规定了：

+ API 应该提供哪些类和方法
+ 应用服务器应该如何执行这些 API
+ 不同组件应该如何协作
+ 开发者编写的程序应该得到什么结果

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789902895359-849994a6-e859-46b0-a157-93f64e6be083.png)

** Web 开发**  

+ **Servlet**：处理 HTTP 请求与响应
+ **JSP**：动态生成网页
+ **JSF**：基于组件构建 Web 用户界面
+ **WebSocket**：客户端与服务器之间进行双向实时通信

**消息与后台任务**

+ **JMS**：消息通信
+ **Batch**：批处理任务
+ **Concurrency**：容器管理的并发任务
+ **Mail**：发送电子邮件

 **数据与事务  **

+ **JPA**：将 Java 对象映射到数据库表
+ **JTA**：管理事务
+ **JCA**：连接企业信息系统

**安全与验证**

+ **Bean Validation**：验证对象数据
+ **Security**：身份认证与权限控制
+ **JASPIC、JACC**：更底层的安全规范

**业务组件与依赖管理**

+ **EJB**：构建企业业务组件，支持事务、安全等功能
+ **CDI**：依赖注入和对象生命周期管理
+ **Managed Beans**：由容器管理的 Java 对象
+ **Interceptors**：在方法执行前后加入通用处理

**Web Service 与数据格式**

+ **JAX-RS**：创建 RESTful Web API
+ **JAX-WS**：创建 SOAP Web Service
+ **JSON-P**：处理 JSON 数据
+ **JSON-B**：在 Java 对象和 JSON 之间转换

##### **<font style="color:rgb(20,20,20);">Supports development of enterprise grade systems</font>**
 Java EE 提供相关 API 和运行环境，开发者不用从头实现基础功能，如支持大量用户，同时处理多个请求，连接数据库，管理事务，保证安全，在多台服务器上运行，长期稳定运行

#####  **<font style="color:rgb(20,20,20);">APIs governed by the Java Community Process (</font>****<font style="color:rgb(20,20,20);background-color:#FBDE28;">JCP</font>****<font style="color:rgb(20,20,20);">)</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789902694488-48b4446e-1a0a-4aad-ac7a-b28eeb90228b.png)

**JSR 是规范制定过程，不是普通的 Java 程序库**：每一项 Java 规范通常通过一份 JSR 提出，每个 JSR 都有唯一编号，用于标识某项具体规范

1. **JSR Proposed**：有人提出新的 Java 技术规范或修改现有规范。
2. **JSR Approved**：提案经过审核，同意进入开发阶段。
3. **Specification Developed**，专家组设计 API、行为规则和相关文档。
4. **Specification Released**，正式发布规范
5. **Implementations Developed** 厂商和开源社区根据规范开发实际产品。

##### **<font style="color:rgb(20,20,20);">Multiple open-source and proprietary implementations  同一套 Java EE 规范可以有多个实现。  </font>**
 例如，规范规定 Servlet 应该如何工作，而不同应用服务器负责提供实际实现  

+ Java EE specification = 建筑设计标准
+ Application server = 按照标准建造的建筑

 只要服务器符合 Java EE 规范，理论上，同一个 Java EE 应用就可以在不同服务器之间迁移。  而这就是 portability，即可移植性的重要来源  

### Java EE 为什么会出现？
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789901486620-1f8bef87-cc29-4211-80b0-37462bafd8d7.png)

    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789901429352-9ac1eef7-08f2-4625-a4b9-fd41df3c8a30.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789901629165-4c874125-9530-49d4-9324-822ae0658534.png)

需要一个框架替开发人员处理通用的底层工作。Java EE/Jakarta EE 正是这样的标准平台，让开发者把主要精力放在业务逻辑上，而不是重复编写数据库连接、事务和安全管理代码  

:::warning
企业系统非常复杂 -> 仅有编程语言和设计知识不够方便 -> 需要统一的企业开发框架 ->Java EE / Jakarta EE

:::

### **Advantages of Using Java EE in Enterprise**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789903616618-0ec22c72-0989-4ca5-9eb2-5517fa5f5084.png)

#### **<font style="color:rgb(31,35,40);">Java can run on multi-platform (WORA) </font>**
 Java 可以在多个操作系统上运行。WORA 是：Write Once, Run Anywhere， 即“编写一次，到处运行”  

 Java 源代码不会直接编译成特定操作系统的机器码，而是先编译成字节码：  

```plain
Java source code (.java)
          ↓ javac
Java bytecode (.class)
          ↓ JVM
Windows / Linux / macOS
```

只要操作系统安装了相应的 JVM，同一份 `.class` 文件通常不需要重新编译即可运行  

#### **<font style="color:rgb(31,35,40);">Object Oriented design for system architecture </font>**
Java 是一种面向对象语言，适合使用类和对象组织大型系统

例如，一个电商系统可以分成：Customer, Product, ShoppingCart, Order...

每个类负责一部分**数据和行为**。这种方式有助于：

+ 将大型系统拆成较小模块
+ 降低不同模块之间的依赖

#### **<font style="color:rgb(31,35,40);">Plenty of framework for system building </font>**
Java 拥有大量成熟框架和工具，例如：

+ Spring：依赖注入和企业应用开发
+ Spring Boot：简化应用配置和部署
+ Hibernate：数据库对象关系映射
+ Jakarta EE：企业级 API 规范
+ Maven、Gradle：依赖和项目构建管理
+ JUnit：自动化测试

这些框架解决了许多重复问题，使开发者可以把更多精力放在业务逻辑上。

#### **<font style="color:rgb(31,35,40);">Wide dissemination with minimal cost </font>**
Java 传播范围广，而且使用成本相对较低。  

原因包括：

+ Java 开发工具容易获得
+ OpenJDK 可以免费使用
+ 有大量免费的框架和程序库
+ 能在普通服务器和主流操作系统上运行
+ 社区规模大，学习资料丰富

对于企业而言，可以使用开源 Java 生态建立系统，而不一定要购买昂贵的专有开发工具

#### **<font style="color:rgb(31,35,40);">Dominating the e-Commerce industry </font>**
在电子商务和大型企业后端系统中曾占有重要地位。  

Java 的并发支持、企业框架、事务管理、安全机制和成熟生态适合这些需求。因此，许多大型电商、银行和企业后台长期使用 Java。  

#### **<font style="color:rgb(31,35,40);">FOSS (free and open source software)</font>**
即“自由及开源软件”。

+ **Free** 更强调使用、研究、修改和分发软件的自由，不一定只表示价格免费。
+ **Open Source** 表示软件源代码开放，并允许按照许可证使用和修改。

---

## Java EE application
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789905516945-1d7e913e-1584-4d84-a513-69f16d34fca7.png)

:::warning
应用被划分成**多个层（Tier）**->每一层包含**不同组件（Component）**-> **组件由对应容器（Container）管理和运行**

:::

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789903517554-25f9b596-5e1b-4183-a003-b9c6e918defb.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789903700948-b92e5389-3c5a-42ac-842b-74312ffc1c29.png)

Java EE 使用分布式多层应用模型  Distributed multi-tier application model：

+ **Distributed**：组件可以分布在不同机器上
+ **Multi-tier**：系统根据功能划分为多个层

多层设计的主要目的是**职责分离**。用户界面、请求处理、业务规则和数据存储由不同部分负责，而不是把全部代码写在一起。  

### Java EE 的四层架构  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789903646120-ef99e890-bc59-4ddf-ab7d-9e5f738d57a3.png)  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789903662286-1b408809-4535-4bdf-8303-1023b2018907.png)

#### 第一层：Client Tier
Client Tier 是用户直接接触的**<font style="color:#2F4BDA;">前端</font>**。

常见组件包括：Web pages, application client, 早期的 Java applet

它负责：

+ 接收用户输入
+ 向服务器发送请求
+ 显示服务器返回的结果

#### 第二层：Web Tier
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789904456225-8183b63e-079e-4a69-9dce-51dba293c3d7.png)

Web Tier 接收客户端请求，**<font style="color:#2F4BDA;">调用业务逻辑，并生成响应</font>**。



![画板](https://cdn.nlark.com/yuque/0/2026/jpeg/42556572/1789904818412-c48742b4-ec56-4342-8f36-c45e5a7fcf5e.jpeg)

##### Servlet
Servlet 是运行在**服务器端的 Java 组件，用来处理 HTTP 请求和响应**。

Servlet 通常负责：

+ 读取请求参数
+ 调用业务服务
+ 控制请求流程
+ 返回响应

它不应该包含大量核心业务逻辑。

##### JSP
JSP 全称是 JavaServer Pages，主要用于**生成动态 HTML**。

服务器执行 JSP 后，会生成普通 HTML 并发送给浏览器。

##### JSF
JSF 全称是 JavaServer Faces，是一种服务器端 UI 组件框架。

它提供按钮、输入框、表单验证和页面导航等组件，并常用于 MVC 架构。

MVC 是：

+ **Model**：数据和业务状态
+ **View**：用户界面
+ **Controller**：处理请求并协调 Model 和 View

---

#### 第三层：Business Logic Tier
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789904977467-0d96cc42-6d42-4320-a040-9c802d34c315.png)

Business Logic Tier 负责真正的业务规则。

#### 第四层：Enterprise Information System Tier
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789905016799-54282dfb-fad1-4b1a-b70a-1dea8717dfff.png)

它表示企业应用所连接的后端信息系统

##### JDBC
它允许 Java 程序直接执行 SQL：

JDBC 接近数据库底层，开发者通常需要自己：

+ 编写 SQL
+ 读取查询结果
+ 将结果转换成 Java 对象
+ 处理连接和异常

##### JPA
它用于把 Java 对象**映射**为数据库表，这种机制称为 ORM：Object-Relational Mapping} 

JDBC 与 JPA 的关系可以简单理解为：

```plain
JPA：较高层的对象操作方式
 ↓
JDBC：较底层的数据库访问方式
 ↓
关系型数据库
```

##### Web Services
Web Service 允许系统通过网络调用另一个系统提供的功能。

###### SOAP
SOAP 通常使用 XML，具有较**严格的消息格式和服务契约**。

```plain
系统A → SOAP XML消息 → 系统B
```

它在传统企业系统、政府系统和银行系统中较常见。

###### REST
REST 通常使用 HTTP 方法：

+ `GET`：获取数据
+ `POST`：创建数据
+ `PUT`：更新数据
+ `DELETE`：删除数据

---

### Containers
组件本身只包含应用逻辑，但它还需要许多基础功能才能运行  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789905278725-944e85a0-f94a-48b5-b0b8-877a450582bd.png)

**Component 写业务逻辑，Container 提供运行环境**

+  Web Container，管理 Web 组件 
    - 例如，Servlet，JSP，JSF，WebSocket
+  EJB Container，管理 EJB 等企业业务组件。  

---

## Java EE server & Web server
### Web server 是什么？
Web server 是通过 HTTP 向客户端提供 Web 内容的软件。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789909345743-2083818e-a735-4398-8b39-08f337c0b4de.png)

1. **静态内容：**Web server 最擅长处理静态内容，也就是服务器上已经存在的文件，如 web pages, images, documents，Web server 会读取文件并返回。
2. **动态内容**： **Web server** 本身通常**不负责执行**复杂的**服务器端程序**，** 动态页面**需要应用程序**根据**用户、数据库或**请求参数生成**。因此通常需要 Web Server 把**<font style="color:#2F4BDA;">请求转交给后端应用</font>**，或者由 Application Server 处理。 

###  浏览器访问网页的过程  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789909358038-8e35833f-2a53-4b5b-ad06-e0fbee0f9251.png)

###  常见 Web Server  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789909824994-a8d069e2-5f30-4940-b525-ee54e7277eed.png)

###  Application Server 是什么 ？
 Application server 是能够托管和运行应用程序的服务器软件。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789909939961-9352eb3b-8f60-41fa-953d-4c54ecc70dc9.png)

```plain
接收请求 → 返回文件
```

```plain
接收请求
→ 执行业务逻辑
→ 访问数据库
→ 管理事务
→ 处理安全
→ 返回动态结果
```



![画板](https://cdn.nlark.com/yuque/0/2026/jpeg/42556572/1789910111718-21ca85c1-f8ee-4d93-acb1-e15df6e0ffa9.jpeg)

**Web Server 的作用**

+ 接收外部 HTTP 请求；
+ 提供**静态文件**；
+ 作为反向代理；
+ 过滤和**转发**请求；
+ 处理 HTTPS；
+ 进行负载均衡。

**Application Server 的作用**

+ 执行后端应用；
+ 处理业务逻辑；
+ 管理事务；
+ 管理数据库连接；
+ 处理用户权限；
+ 运行 Java EE 组件。

###  Java EE Application Server  
 Java EE 定义了企业应用服务器应该支持的一组 API 和功能。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789910255836-461b2dc8-74b2-4c62-b8d0-6d7564873338.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789910261697-1a0b5977-5345-479e-b2a5-44ae28226c65.png)

**Web Container**

Web Container 管理：

+ **Servlet**
+ JSP
+ JSF
+ WebSocket

它负责处理 Web 请求、Servlet 生命周期和 Session 等内容

**EJB Container**

EJB Container 管理 Enterprise JavaBeans，负责：

+ 业务逻辑组件
+ 事务
+ 安全
+ 并发
+ 生命周期
+ 依赖注入
+ 远程调用

### GlassFish
 GlassFish 是一个 Java EE Application Server 实现。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789910449895-3ca69e87-91ff-4e6b-a293-2034f55f5ad7.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789910475417-0a373648-d3c6-43b1-805e-87844f7a0024.png)

| **<font style="color:rgb(26, 28, 31);">项目</font>** | **<font style="color:rgb(26, 28, 31);">Web Server</font>** | **<font style="color:rgb(26, 28, 31);">Web Container</font>** | **<font style="color:rgb(26, 28, 31);">Application Server</font>** |
| --- | --- | --- | --- |
| <font style="color:rgb(26, 28, 31);">主要任务</font> | <font style="color:rgb(26, 28, 31);">返回静态网页</font> | <font style="color:rgb(26, 28, 31);">运行 Web 组件</font> | <font style="color:rgb(26, 28, 31);">运行完整企业应用</font> |
| <font style="color:rgb(26, 28, 31);">典型内容</font> | <font style="color:rgb(26, 28, 31);">HTML、CSS、图片</font> | <font style="color:rgb(26, 28, 31);">Servlet、JSP</font> | <font style="color:rgb(26, 28, 31);">Servlet、EJB、JPA、JMS 等</font> |
| <font style="color:rgb(26, 28, 31);">业务逻辑</font> | <font style="color:rgb(26, 28, 31);">通常很少</font> | <font style="color:rgb(26, 28, 31);">可以调用业务层</font> | <font style="color:rgb(26, 28, 31);">可以完整执行</font> |
| <font style="color:rgb(26, 28, 31);">事务管理</font> | <font style="color:rgb(26, 28, 31);">通常不负责</font> | <font style="color:rgb(26, 28, 31);">有限</font> | <font style="color:rgb(26, 28, 31);">支持</font> |
| <font style="color:rgb(26, 28, 31);">数据库连接</font> | <font style="color:rgb(26, 28, 31);">通常通过代理</font> | <font style="color:rgb(26, 28, 31);">可以连接</font> | <font style="color:rgb(26, 28, 31);">提供完整管理</font> |
| <font style="color:rgb(26, 28, 31);">例子</font> | <font style="color:rgb(26, 28, 31);">Nginx、Apache、IIS</font> | <font style="color:rgb(26, 28, 31);">Tomcat</font> | <font style="color:rgb(26, 28, 31);">GlassFish、WildFly、WebLogic</font> |




---

## Java EE development tools
###  Development Tool Chain
Java EE 开发通常需要一组工具，而不是只安装一个 Java 程序。    

**典型工具链**是：

```plain
JDK 编译和运行 Java 程序；
 ↓
IDE 编写、调试和管理代码；
 ↓
Build Automation  自动编译、打包和测试；
 ↓
Test Automation 自动运行测试；
 ↓
Java EE Server 部署和运行企业应用。
```

#### **<font style="color:rgb(31,35,40);">Software Development Kit (SDK)</font>**<font style="color:rgb(31,35,40);"> & JDK</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789910882830-2ca2aee6-a1e0-4aa0-a7a3-83841278b36d.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789910909848-3a3892cf-b4d5-4a98-b6da-a001e6866a37.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789910923546-2dc40979-2fe7-4c09-8800-94ab3e3faaaa.png)

##### JVM
Java Virtual Machine,  JVM 负责执行 Java 字节码。  

```plain
.java 源代码
    ↓ javac
.class 字节码
    ↓ JVM
程序运行
```

JVM 是**跨平台的关键**。不同操作系统有不同版本的 JVM，但它们都可以执行相同的 Java 字节码。

##### JRE
Java **Runtime** Environment

JRE 主要包含：

+ **JVM；**
+ Java 类库；
+ **运行** Java 程序所需的其他文件。

它适合运行 Java 程序，但通常不包含完整的开发工具。

##### JDK
Java Development Kit，JDK =** JRE** +** Java开发工具**

常见工具包括：

+ `javac`：Java 编译器；
+ `java`：运行 Java 程序；
+ `jar`：打包 JAR 文件；
+ `javadoc`：生成 API 文档；
+ `jdb`：调试程序；
+ `jlink`：创建运行时镜像。

| **组件** | **作用** |
| --- | --- |
| JVM | 执行字节码 |
| JRE | 提供**运行**环境 |
| JDK | 提供**开发和运行**环境 |


通常：

+ 只运行程序：需要运行环境；
+ 编写和编译程序：需要 JDK。

现在的 Java 发行版通常主要安装 JDK

#### IDE
 IDE 把很多开发功能集中在一个图形界面中  

 IDE 的作用主要是提高开发效率，并不是 Java 程序运行所必需的。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789911248015-ce964ab1-6cf1-4603-ad04-b66c4425c8a9.png)

没有 IDE 也可以使用命令行开发 Java：

```plain
javac Hello.java
java Hello
```

#### Build Automation 
 Build Automation 是构建自动化。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789911322827-1b8ed7b7-ba18-48f5-af91-5d246c399f71.png)

 它把重复的项目操作自动执行, 如果手动执行，每次都要输入很多命令。构建工具可以把这些步骤写进配置文件，然后通过一条命令完成。  

#### **<font style="color:rgb(31,35,40);">Test Automation</font>**
 测试自动化是使用**独立的软件**自动执行测，并比较：实际结果 vs 预期结果

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789911393999-74052463-d1d9-4f65-b346-5137e1a66029.png)

###  Standalone Java Application 和 Java Enterprise Application  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789911435755-641648c7-58f1-486c-a2d3-df45562e85ff.png)

**Standalone Java Application**

独立 Java 程序通常：

+ 在本地机器上运行；
+ 有 `main()` 方法作为入口；
+ 编译成 `.class` 或 `.jar` 文件；
+ 由 JVM 直接启动。

**Java Enterprise Application**

Java EE 应用通常：

+ 运行在 Java EE/Jakarta EE Server 上；
+ 不依赖普通的 `main()` 方法作为应用入口；
+ 包装成 `.war` 或 `.ear` 文件；
+ 由 Application Server 负责启动和管理。

## Summary
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789911575003-a7e2cf37-de88-46b4-8f94-0fc2b4706f6a.png)

