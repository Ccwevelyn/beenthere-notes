---
title: Lab 1 Setup Environment
type: note
attachments:
  - label: PDF
    file: /uploads/lab-1-setup-environment.pdf
grade: year-4
semester: fall
course: enterprise-system-application-development
date: 2026-09-11
order: 2
published: true
---
**核心目标：配置好 企业级 Java EE 开发环境**

### TO DO LIST
**① 下载三个软件（NetBeans、GlassFish、JDK）**

+ Binary / Installer：已经编译完成，可以直接使用。
+ Source ZIP / Source TAR.GZ：软件源代码，需要自己配置编译环境并编译，适合软件开发者研究或修改

Apache NetBeans 31：[https://netbeans.apache.org/front/main/download/nb31/](https://netbeans.apache.org/front/main/download/nb31/)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789099647927-58414265-0eb8-4029-8dfc-0c616ff73ce7.png)

GlassFish 8.0.x：[https://glassfish.org/download.html](https://glassfish.org/download.html)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789099689190-4165b6d7-7b5f-4978-a50c-9235b4e55788.png)

JDK 25.0.2：[https://jdk.java.net/archive/](https://jdk.java.net/archive/)

千万不要安装 JDK 26，否则不兼容！！！

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789104303447-ef7a9c0b-3564-4ef7-af6c-1a51a0ead87d.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789104395636-50e85092-cc99-4a6e-b99f-5aaf46120bf0.png)

**② 解压 ZIP 文件：**只需要解压，不需要安装程序。

```plain
C:\Java\
```

```plain
C:\Java\jdk-25.0.2
C:\Java\netbeans-31
C:\Java\glassfish8
```

**③ 修改 NetBeans 配置文件**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789102964196-3b416bf1-cf25-433e-9830-ce007d717f03.png)

进入 NetBeans 的配置目录，找到 `netbeans.conf`。

```plain
#netbeans_jdkhome="..."
```

```plain
netbeans_jdkhome="C:\Java\jdk-25.0.2"
```

**④  启动 NetBeans  **

```plain
C:\Java\netbeans-31\bin\
```

```plain
netbeans64.exe
```

```plain
netbeans.exe
```

如果 NetBeans 能正常打开，说明 JDK 配置成功。

**⑤ 配置 GlassFish  ：**让 NetBeans 使用你下载的 JDK 25.0.2。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789103475571-12ae2b74-073e-4811-9287-06a9d22e9611.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789103517743-7a61d21a-e2ae-4a62-af10-fe7f433c2386.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789103558292-1ac52db9-304a-4aa6-8c8b-9cebcb5d9fcd.png)

```plain
C:\Java\glassfish8
```

+ 保持默认端口即可，通常是：
    - HTTP：`8080`
    - 管理端口：`4848`

之后可以在 NetBeans 中启动 GlassFish，并运行 Java Web/Jakarta EE 项目。

完成后，你的开发环境就能运行 Java EE / Jakarta EE 项目。

+ **Ctrl + 5 打开 service**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789105676865-931f7f28-7a28-47f7-990b-76ca4783eae4.png)

 服务器启动后，打开 Chrome 或 Edge，在地址栏输入  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789105732189-77755250-762d-4042-9896-a188c715a5fc.png)

---

**Apache NetBeans** —— 企业级 Java IDE

是一个 **专门用于 Java EE / Jakarta EE 开发的 ****<font style="color:#DF2A3F;">IDE</font>**。

**它能做什么？**

+ 写 Java 代码
+ 写 REST API
+ 写 EJB（Enterprise Java Beans）
+ 写 JPA（数据库 ORM）
+ 管理 GlassFish 服务器
+ 自动部署企业应用（WAR / EAR）



**GlassFish** —— 企业级应用服务器（Application Server）

一个 **Jakarta EE（原 Java EE）官方应用****<font style="color:#DF2A3F;">服务器</font>**。

它能做什么？

+ 运行企业级应用（EJB、JPA、JTA、REST API）
+ 管理数据库连接池
+ 管理事务（Transaction Manager）
+ 提供企业级安全（Jakarta Security）
+ 提供企业级部署环境（WAR / EAR）



**JDK 25.0.2** ——**<font style="color:#DF2A3F;"> Java 开发工具包</font>**

Java 的编译器 + 运行环境。
