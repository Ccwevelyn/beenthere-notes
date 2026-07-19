---
title: Ch4 Requirement Engineering(下)
description: 收获还是放过，是自己的选择~
attachments:
  - label: PDF
    file: /uploads/ch4-requirement-engineering-下-.pdf
grade: year-2
semester: spring
course: software-engineering
date: 2026-07-19
order: 4
type: note
published: true
---
### 一、Requirement specification
#### Introduction
##### 是什么？
<font style="color:rgb(35,31,32);">Requirements specification is</font>**<font style="color:rgb(35,31,32);"> the process of writing down the user and system requirements in a requirements document.</font>**<font style="color:rgb(35,31,32);">- </font><font style="color:rgb(35,31,32);">在需求文档中撰写用户和系统需求的过程</font>

##### 要求
理想情况下，用户和系统需求应当是 clear 清晰、unambiguous 无二义、easy to understand 易于理解、complete 完整和 consistent 一致的。

+ 但这在实际中很难实现，固有冲突存在。-**固有的冲突**（inherent conflicts）指的是在需求和解释过程中，由于利益相关者（Stakeholders）对需求的不同理解和解释，自然会产生的一些矛盾和不一致。
    1. **用户需求 User requirements**
    - 用自然语言 natural language书写，图形diagrams和表格 tables辅助。
    - 应当描述功能性和非功能性需求，以使不具有详细的技术知识系统的用户也可以理解。
    - 理想情况下，这些需求应当只刻画<u>系统的外部行为</u>。<u>需求文档</u>不应该包含<u>系统体系结构</u>或<u>设计的细节</u>。<font style="color:rgb(35,31,32);">Ideally, they should specify only the </font>**<font style="color:rgb(35,31,32);">external behavior of the system</font>**<font style="color:rgb(35,31,32);">. The requirements document should not include </font>**<font style="color:rgb(35,31,32);">details of the system architecture or design.</font>**

<details class="lake-collapse"><summary id="ue97dc6e1"><span class="ne-text">解释</span></summary><h6 id="YQ4Ba"><span class="ne-text">系统的外部行为（External Behavior of the System）</span></h6><ul class="ne-ul"><li id="uc1b5ee4f" data-lake-index-type="0"><strong><span class="ne-text">定义</span></strong><span class="ne-text">：系统的外部行为是指</span><em><span class="ne-text" style="color: #101E60">系统在与外部环境</span></em><span class="ne-text">（用户或其他系统）</span><strong><span class="ne-text" style="color: #101E60">交互过程中展示的</span></strong><strong><span class="ne-text" style="color: #101E60; background-color: #FBDE28">功能和反应</span></strong><span class="ne-text">。</span><strong><span class="ne-text" style="color: #117CEE">它描述了系统在接收到特定输入时所做出的响应，而不涉及系统内部的实现细节</span></strong><span class="ne-text">。</span></li><li id="ue8f62757" data-lake-index-type="0"><strong><span class="ne-text">示例</span></strong><span class="ne-text">：一个外部行为的需求可能是“系统应能够在用户输入查询后10秒内返回搜索结果。”</span></li></ul><h6 id="bWZ7i"><span class="ne-text">需求文档（Requirements Document）</span></h6><ul class="ne-ul"><li id="u4e09da8f" data-lake-index-type="0"><strong><span class="ne-text">定义</span></strong><span class="ne-text">：需求文档是一份</span><strong><span class="ne-text">详细记录系统需求的文件</span></strong><span class="ne-text">，包含用户需求和系统需求。它用于指导系统的设计、开发和测试。</span></li><li id="u9132f2bf" data-lake-index-type="0"><strong><span class="ne-text">特点</span></strong><span class="ne-text">：需求文档应当清晰、具体，并且易于理解，以确保所有利益相关者对系统的预期行为有一致的认识。</span></li><li id="u535e26a2" data-lake-index-type="0"><strong><span class="ne-text">示例</span></strong><span class="ne-text">：需求文档可能包括“用户可以通过用户名和密码登录系统”的需求。</span></li></ul><h6 id="T8o3d"><span class="ne-text">系统体系结构（System Architecture）</span></h6><ul class="ne-ul"><li id="uf8f94b00" data-lake-index-type="0"><strong><span class="ne-text">定义</span></strong><span class="ne-text">：</span><span class="ne-text" style="color: #117CEE">系统体系结构是指系统的</span><strong><span class="ne-text" style="color: #117CEE">整体</span></strong><strong><span class="ne-text" style="color: #117CEE; background-color: #FBDE28">结构</span></strong><strong><span class="ne-text" style="color: #117CEE">设计</span></strong><span class="ne-text">，</span><strong><span class="ne-text">包括</span></strong><strong><span class="ne-text" style="color: #101E60">系统的各个组件、模块以及它们之间的关系和交互方式</span></strong><span class="ne-text">。它是系统设计的基础。</span></li><li id="ubf67b239" data-lake-index-type="0"><strong><span class="ne-text">特点</span></strong><span class="ne-text">：体系结构描述了系统的内部结构和组织方式，通常涉及技术选型、模块划分、数据流和接口设计等内容。</span></li><li id="u21a1afbb" data-lake-index-type="0"><strong><span class="ne-text">示例</span></strong><span class="ne-text">：系统体系结构可能描述“系统采用微服务架构，每个服务独立部署和运行”的设计。</span></li></ul><h6 id="q6X5q"><span class="ne-text">设计的细节（Design Details）</span></h6><ul class="ne-ul"><li id="ua7e179a7" data-lake-index-type="0"><strong><span class="ne-text">定义</span></strong><span class="ne-text">：设计的细节是指系统内部实现的</span><strong><span class="ne-text" style="background-color: #FBDE28">具体技术方案和实现方法</span></strong><span class="ne-text">，包括算法、数据结构、接口定义等。它是将系统需求转化为具体实现的详细描述。</span></li><li id="u013eb006" data-lake-index-type="0"><strong><span class="ne-text">特点</span></strong><span class="ne-text">：设计的细节包括具体的代码实现、数据库设计、接口协议等内容，通常在系统开发阶段进行详细描述。</span></li><li id="ue96492cc" data-lake-index-type="0"><strong><span class="ne-text">示例</span></strong><span class="ne-text">：设计的细节可能包括“用户认证模块使用OAuth 2.0协议进行身份验证”的实现方案。</span></li></ul></details>


    2. **系统需求 System requirements**
    - **书写系统需求的表示方法**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740485700613-f42232d5-5d9d-4eb7-ae6a-81f65eff6690.png)

1. **Natural language sentences（自然语言句子）**

需求使用自然语言编写成编号句子。每个句子应该表达一个需求。

eg. _系统应能够在10秒内响应用户的查询请求/用户可以通过用户名和密码登录系统。_

2. **Structured natural language（结构化自然语言）**

需求在标准表单或模板上用自然语言编写。每个字段提供需求的一个方面的信息。

- 将每个字段理解为一种信息类别 (表格的表头)

3. **Graphical notations（图形符号）**

使用图形模型，辅以文本注释，定义系统的功能需求。通常使用统一建模语言（UML）的用例图和序列图。

4. **Mathematical specifications（数学规格）**

这些符号基于数学概念，如有限状态机或集合。虽然这些明确的规格可以减少需求文档中的模糊性，但大多数客户不理解正式规格。他们无法检查其代表的内容是否符合他们的期望，并且不愿意接受其作为系统合同。

---

    - 系统需求是用户需求的详述版本 expanded versions，软件工程师将其用作系统设计的起点。
    - 增加了细节并解释了如何提供用户需求

> _<font style="color:rgb(35,31,32);">They may be used as part of the contract for the implementation of the system and should therefore be a complete and detailed specification of the whole system.</font>_
>

    - 可以作为系统实现的合约的一部分
    - 是对整个系统完整、详细的规格说明
    - 应当只描述系统的外部行为及其运行约束。不应当关注系统如何设计和实现。- <font style="color:rgb(35,31,32);">only describe the external behavior of the system and its operational constraints. They should not be concerned with how the system should be designed or implemented. - 然而在完整刻画一个复杂软件系统所需的详细程度上，排除所有的设计细节也是不现实的。/ 例如，信息安全系统，给网络工程师实现特定功能时，应告知网络工程师，我们需要用到什么技术。这就涉及具体的细节了。</font>

               <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740488048667-e7f5be45-0c67-4390-a4f6-fb3d01f7de4e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741080137210-48a021a1-f8bb-4cd4-a084-5b9039f5f2ac.png)

1. **非功能需求**

非功能需求是指**软件系统的性能和质量属性**，例如可扩展性、可靠性、可维护性、安全性和性能。与功能需求（系统需要做什么）不同，非功能需求描述的是系统需要**如何做**。

2. **具体架构**

在软件开发中，架构是指**<font style="color:#270070;">系统的高层设计</font>**，决定了系统的总体结构和行为模式。选择特定的架构是为了确保系统能满足特定的非功能需求。例如，微服务架构可以提高系统的可扩展性和可维护性，而单体架构可能更容易实现。

3. **领域需求**

领域需求是指**<font style="color:#270070;">特定领域或行业的特殊需求</font>**。例如，在金融行业，系统可能需要满足严格的安全和合规性要求。在医疗行业，系统可能需要确保高度的可靠性和数据隐私。



#### Natural language specification
##### 特点
+ <font style="color:rgb(35,31,32);">优点：It is expressive表达能力强, intuitive直观, and universal具有普适性. </font>
+ <font style="color:rgb(35,31,32);">弊端：It is also potentially vague模糊性 and ambiguous二义性, and its interpretation depends on the background of the reader.</font>
+ <font style="color:rgb(35,31,32);">The most widely used way of specifying system and software requirements.</font>

##### <font style="color:rgb(35,31,32);">Guidelines</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740715049002-f272dec5-fcf1-4819-9727-08b00f91cbe2.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740715722443-323ed65c-3341-48ca-9efe-19343bcbaed3.png)

> adhere <font style="color:rgb(42, 43, 46);">v. 黏附，附着；遵守，遵循（规定或协议）；拥护，持有（观点或信仰）</font>
>

1. 使用一种标准格式，并确保所有的需求定义都遵循该格式。
2. 以一致的方式使用语言，使得必须满足的以及期望满足的需求能够区分开。

必须满足的需求 -- 用“shall”表示；期望而不必须 -- 用“should”表示。

3. 使用强调性文本（粗体、斜体、颜色）来突出需求中的关键部分
4. 不要假设读者理解技术性的软件工程语言。避免使用专业术语、缩写以及首字母缩略词。
5. 只要有可能都应当尽量将每个用户需求与其原理关联起来。原理应当解释为什么这项需求被包含进来以及谁提出了该需求（需求来源），这样你就可以知道在需求要发生变化时咨询谁。需求原理在需求发生变化时，尤其有用。因为它可以帮助判断哪些变化是不适宜的。

eg.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740715531936-faf50ff6-1a6a-421d-93b3-02771b88504d.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740715697993-d5ea8c87-d553-4766-af63-e139aba3cfaf.png)

##### Problems with natural language
+ **<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Lack of clarity: </font>**<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Precision is difficult without making the document difficult to read. </font><font style="color:rgb(0,0,0);">- </font>**缺乏清晰性**<font style="color:rgb(0,0,0);">：编写需求文档时，既要精确又要易于阅读是很困难的。过于详细的描述会使文档变得繁琐，而模糊的描述又可能导致误解。  </font>
+ **<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Requirements confusion: </font>**<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Functional and non-functional requirements tend to be mixed-up</font><font style="color:rgb(0,0,0);">. - </font>**需求混淆**<font style="color:rgb(0,0,0);">：功能需求描述系统应该做什么，而非功能需求描述系统如何执行特定功能。混淆这些需求可能会导致不完整或不正确的实施  </font>
+ **<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Requirements amalgamation: </font>**<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Several different requirements may be expressed together</font><font style="color:rgb(0,0,0);">. - </font>**需求合并**<font style="color:rgb(0,0,0);">：这指的是将几个不同的需求合并为一个。这会使理解和实施需求变得困难，因为不清楚每个部分具体满足了哪个需求。  </font>



#### Structured specification - 结构化规格说明
##### 特点
+ <font style="color:rgb(35,31,32);">Written in a standard way - 标准的方式书写需求</font>
    - <font style="color:rgb(35,31,32);">Maintains most of the expressiveness 表达能力 and understandability 可理解性 of natural language</font>
    - <font style="color:rgb(35,31,32);">Ensures that some uniformity is imposed on the specification 保证了规格说明具有一定的统一性</font>

> impose on 施加影响于
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741083229768-f7327b23-593e-4c70-8396-fb783a9e0642.png)

##### 如何使用结构化方法刻画系统需求？
-- _定义_一个或多个标准的_需求模板_，并将这些模板_表示为结构化的表单。_

<font style="color:rgb(35,31,32);">To use a structured approach to specifying system requirements, you define one or more standard templates for requirements and represent these templates as structured forms.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741083409015-f3737a70-8ee1-4051-8641-170cef728c0b.png)

##### 刻画功能性需求时应包含的信息：
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741082746249-09dc8ea7-ce46-4d21-aab6-894a9808caef.png)



上图描述了一个功能或实体规范的各个方面。涵盖了功能或实体的描述、其输入和输出、计算所需的信息、需要执行的操作、使用功能方法时的前置条件和后置条件，以及操作的任何副作用：

+ 对指定功能或实体的描述。
+ 对其输入的描述以及这些输入的来源。
+ 对其输出的描述以及这些输出的去向。
+ 关于计算所需的信息或系统中需要的其他实体的信息（“要求”部分）。
+ 需要执行的操作的描述。
+ 如果使用功能方法，设置一个前置条件，说明调用该功能前必须满足的条件，以及一个后置条件，说明调用该功能后必须满足的条件。
+ 对操作的副作用（如果有）的描述。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741083365155-35c662bc-728d-4794-b37f-1edcc98f6edf.png)

##### 局限性
<font style="color:rgb(35,31,32);">However, it is still sometimes difficult to write requirements in a clear and unambiguous way, particularly when complex computations (e.g., how to calculate the insulin胰岛素 dose剂量) are to be specified.</font>

##### <font style="color:rgb(35,31,32);">解决</font>
<font style="color:rgb(35,31,32);">To address this problem, you can add extra information to natural language requirements, 针对这一问题，可以向自然语言需求中添加额外的信息。例如，通过使用表格或系统的图形化模型。</font>

<font style="color:rgb(35,31,32);">Tables are particularly useful when there are a number of possible alternative situations and you need to describe the actions to be taken for each of these.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741083097775-3fa0e756-1b68-46c6-bc5d-ba5ecf091ea7.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741083611069-e988ee0c-aa4a-4a69-a37f-3255d7528147.png)

---

#### Use cases
##### 是什么？
<font style="color:rgb(35,31,32);">Use cases are a way of describing interactions between users and a system using a graphical model and structured text.</font>

<font style="color:rgb(35,31,32);">用况是一种使用</font>**<font style="color:rgb(35,31,32);">图形化模型</font>**<font style="color:rgb(35,31,32);">和</font>**<font style="color:rgb(35,31,32);">结构化文本</font>**<font style="color:rgb(35,31,32);">表述用户和系统间交互的方法。</font>

<font style="color:rgb(35,31,32);">Fundamental feature of the Unified Modeling Language (UML)-UML的基本特性</font>

##### 表达形式
用况使用高层的用况图进行描述。一组用况的集合表示**系统需求**中将要描述的**所有可能的交互。**

<font style="color:rgb(35,31,32);">The set of use cases represents </font><u><font style="color:rgb(35,31,32);">all of the possible interactions</font></u><font style="color:rgb(35,31,32);"> that will be described in the system requirements. </font>

**<font style="color:rgb(35,31,32);">Actors</font>**<font style="color:rgb(35,31,32);"> in the process, who may be human or other systems, are represented as </font>**<font style="color:rgb(35,31,32);">stick figures </font>**<font style="color:rgb(35,31,32);">简笔画人物. Each class of </font>**<font style="color:rgb(35,31,32);">interaction</font>**<font style="color:rgb(35,31,32);"> is represented as a named ellipse 椭圆形.  </font>

> <font style="color:rgb(35,31,32);">interaction-与系统的交互=role</font>
>

<font style="color:rgb(35,31,32);">用户识别系统与其用户/其它系统之间的交互。</font>

<font style="color:rgb(35,31,32);">按照最简单的用况形式，一个用况识别参与一个交互的参与者(actor)，并对交互的类型进行命名。在此基础上，</font>_<font style="color:rgb(35,31,32);">可以添加一些描述与系统交互的附加信息</font>_<font style="color:rgb(35,31,32);">。这些</font>**<font style="color:rgb(35,31,32);">附加信息</font>**<font style="color:rgb(35,31,32);">可以是一段</font><u><font style="color:rgb(35,31,32);">文本描述</font></u><font style="color:rgb(35,31,32);">，或者是一个或多个</font><u><font style="color:rgb(35,31,32);">图形化模型</font></u><font style="color:rgb(35,31,32);">。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741084991731-7ce33986-4abe-4259-821d-6dfd0d2de8f2.png)

##### use case与其他图像相结合
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741085329222-0c26310c-33df-47f1-ba46-2369e03f9d3a.png)

1. **高级图形模型补充更详细的表格描述**

这意味着在用例分析中，高级图形模型（例如用例图）需要通过更详细的表格描述来补充。这些表格描述包含了具体的输入、输出、前置条件、后置条件等细节信息，以确保用例的全面性和准确性。

2. **UML序列图用于增加用例细节**

UML序列图可以通过展示系统中事件处理的顺序来为用例添加细节。这有助于更好地理解系统中的交互和流程，确保系统行为的一致性和正确性。

这些要点帮助我们理解如何通过图形模型和详细描述来完善用例分析，从而确保系统设计和实现的完整性。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741085467382-9e87fd1c-bea2-4247-9784-94af8b628b7a.png)

---

#### The software requirements document
##### 是什么？
<font style="color:rgb(35,31,32);">The software requirements document (sometimes called the software requirements specification or SRS) is an official statement of what the system developers should implement. - 软件需求文档是关于系统开发者应当实现的所有东西的正式陈述</font>

<font style="color:rgb(35,31,32);">It may include both the </font>**<font style="color:rgb(35,31,32);">user requirement</font>**<font style="color:rgb(35,31,32);">s for a system and a detailed specification of the </font>**<font style="color:rgb(35,31,32);">system requirements.</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741090672629-c8c94470-de71-4c50-90c2-846a19164fdb.png)

##### **<font style="color:rgb(35,31,32);">应用场景</font>**
<font style="color:rgb(35,31,32);">Requirements documents are essential when systems are outsourced for development, when different teams develop different parts of the system, and when a detailed analysis of the requirements is mandatory</font>

当系统是外包开发的，即不同团队开发系统的不同部分，以及当详细的需求分析是必须的时候，需求文档十分关键。

在其他情况下，不一定。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741091086333-417006ab-ef36-4a0d-8765-518ca0c4ea0b.png)

##### 敏捷开发不适用
1. <font style="color:rgb(35,31,32);">原因：Agile methods argue that requirements change so rapidly that a requirements document is out of date as soon as it is written, so the effort is largely wasted.</font>
2. <font style="color:rgb(35,31,32);">取而代之的方法：Agile approaches often collect user requirements incrementally and write these on cards or whiteboards as short user stories. The user then prioritizes these stories for implementation in the next increment of the system.</font>
3. <font style="color:rgb(35,31,32);">对于需求不稳定的业务系统，这是一个好办法。但是，更加推荐书写一个定义系统业务和可依赖性需求的简短支持文档-为了提醒系统整体的需求。</font>

##### 文档要求
1. 用户多样性产生：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741089873928-0532d7bd-d9fd-4f45-84de-657b9a99de42.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741089146958-56b49878-cf7b-4f57-b772-830c06dcb5d0.png)

<font style="color:rgb(35,31,32);">描述：</font>

+ <font style="color:rgb(35,31,32);">面向客户的需求</font>
+ <font style="color:rgb(35,31,32);">面向开发者和测试者精确定义需求细节</font>
+ <font style="color:rgb(35,31,32);">包括关于未来系统演化的信息</font>
+ <font style="color:rgb(35,31,32);">关于预期的变更信息可以帮助系统设计者避免作出限制性较强的设计决策，并帮助维护工程师按照新需求对系统进行适应性调整。</font>

<font style="color:rgb(35,31,32);"></font>

2. 详细程度取决于：

所开发的系统类型以及所使用的开发过程。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741089437254-2c52de8c-7e1f-468d-9417-f30e9c5d9f9a.png)

+ **系统类型**：
    - **关键系统**：这些系统对安全性和保密性有严格要求，因此需要非常详细的需求文档，以便可以进行详细的分析，发现并修正可能的需求错误。
    - **一般系统**：这些系统在安全性和保密性方面的要求相对较低，可以接受较简略的需求文档。
+ **开发过程**：
    - **外包开发**：当系统开发由外部公司进行时，需要详细和精确的需求文档，以确保外部开发团队能完全理解并实现客户的要求。--见<font style="background-color:#EFF0F0;">应用场景</font>
    - **内部迭代开发**：如果使用内部的迭代开发过程，可以在开发过程中逐步完善需求文档。这种情况下，初始的需求文档不需要过于详细，可以在开发过程中添加细节并解决模糊之处。

##### 在IEEE文档标准下拓展
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741090492316-7640840f-03dd-4edd-a877-ea0e332f90f7.png)

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741090506020-3c1a2bcd-d72e-43dc-86cc-2e420447172d.png)

<font style="color:rgb(35,31,32);">This standard is a </font>**<font style="color:rgb(35,31,32);">generic</font>**<font style="color:rgb(35,31,32);"> one that </font>**<font style="color:rgb(35,31,32);">can be adapted to specific use</font>**<font style="color:rgb(35,31,32);">s. In this case, the standard has been extended to include information about </font><u><font style="color:rgb(35,31,32);">predicted system evolution.</font></u><font style="color:rgb(35,31,32);"> This information helps the maintainers of the system and allows designers to include support for future system features.</font>

---

##### <font style="color:rgb(35,31,32);">需求文档中信息来源</font>
<font style="color:rgb(35,31,32);">The information included in a requirements document depends on the type of software being developed and the approach to development that is to be used.</font>

---

##### 目录/索引的重要性
<font style="color:rgb(35,31,32);">A requirements document might be produced for a complex engineering system that includes hardware and software developed by different companies. The requirements document is likely to be long and detailed. It is therefore important that a comprehensive全面的 </font><u><font style="color:rgb(35,31,32);">table of contents </font></u><font style="color:rgb(35,31,32);">目录and document index be included so that readers can easily find the information they need</font>

---

##### 面向内部开发的软件产品的需求文档特点
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741090290157-1a705400-f60f-44a6-9175-5140ad437bf2.png)

面向一个内部开发的软件产品的需求文档可以去掉很多上面所建议的详细章节。其关注点将主要集中在定义用户需求以及高层的非功能性系统需求上。系统设计者和程序员根据自己的判断来决定如何满足系统的用户需求概要。

<details class="lake-collapse"><summary id="uc7611422"><span class="ne-text"> 高层的非功能性系统需求是什么  </span></summary><p id="ue9f42f17" class="ne-p"><span class="ne-text"> 高层的非功能性系统需求通常是指那些不直接与系统具体功能相关的需求，而是描述系统整体性能和质量方面的要求。 高层非功能性系统需求涉及系统的性能、可靠性、安全性、可维护性、可扩展性、互操作性和可用性等方面。这些需求确保系统不仅能满足其功能要求，还能在不同环境和负载下稳定、高效、安全地运行。  </span></p></details>


---

### 二、Requirements validation
##### 是什么？
**<font style="color:rgb(35,31,32);">Requirements validation </font>**<font style="color:rgb(35,31,32);">is the process of checking that requirements define the system that the customer really wants.</font>

>  英文中的 "checking that..."，其语义包含“验证某个陈述是否正确”的含义。  
>
> + **主干句**：_Requirements validation is the process of checking_ 表明“需求验证”是一个检查的过程。
> + **检查什么**：检查 _requirements define the system_ （需求是否定义了系统）。
> + **系统的特性**：系统是 _that the customer really wants_ （客户真正想要的）
>

需求确认是检查需求是否定义了用户真正想要的系统的过程。

<font style="color:rgb(35,31,32);">It overlaps 重叠 with elicitation and analysis, as it is concerned with finding problems with the requirements.因为它关注发现需求中的问题。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741141418374-29a5019d-2b3e-4baa-80c9-207a7176efc1.png)

##### 为什么？（重要性）
<font style="color:rgb(35,31,32);">Requirements validation is critically important because errors in a requirements document can lead to extensive 巨大的 rework costs when these problems are discovered during development or after the system is in service. </font>

<font style="color:rgb(35,31,32);">The cost of </font><u><font style="color:rgb(35,31,32);">fixing a requirements problem by making a </font></u>_<u><font style="color:rgb(35,31,32);">system change</font></u>_<font style="color:rgb(35,31,32);"> is usually much greater than </font>_<font style="color:rgb(35,31,32);">repairing design or coding errors</font>_<font style="color:rgb(35,31,32);">. A change to the requirements usually means that the system design and implementation must also be changed. Furthermore, the system must then be retested. </font>

<font style="color:rgb(35,31,32);">通过进行</font>_<font style="color:rgb(35,31,32);">系统变更 </font>_<font style="color:rgb(35,31,32);">修正一个需求问题的开销通常比</font>_<font style="color:rgb(35,31,32);">修复设计或编码错误 </font>_<font style="color:rgb(35,31,32);">要高得多。一个需求变更通常意味着系统设计和实现也必须修改。而且，系统接下来还必须重新测试。</font>

+ <font style="color:rgb(35,31,32);">系统变更指的是对现有系统进行调整、修改或升级，以满足新的需求、修复问题或适应环境变化。这种变更可能涉及硬件、软件、配置或流程等多个方面。</font>

<details class="lake-collapse"><summary id="u18defb91"><span class="ne-text" style="font-size: 16px">MyQ.</span></summary><ol class="ne-ol"><li id="u841c6600" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">除了系统变更，还有别的修正需求问题的方法吗？</span></li></ol><p id="u0a7867a4" class="ne-p"><strong><span class="ne-text">a. 需求规避</span></strong></p><ul class="ne-ul"><li id="u7df59355" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">如果需求错误在不影响系统关键功能的情况下，可以通过用户操作指南或功能限制进行规避，而不是直接修改系统。</span></li><li id="u560ba435" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">示例：通过培训或说明手册让用户使用现有功能来达成需求。</span></li></ul><p id="u188f1666" class="ne-p"><strong><span class="ne-text">b. 外部功能扩展</span></strong></p><ul class="ne-ul"><li id="u727909ef" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">通过开发一个独立的模块或插件来补充现有系统，而不是直接修改核心系统的结构。</span></li><li id="u9105ab10" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">示例：开发API接口实现新功能需求。</span></li></ul><p id="u71a463a6" class="ne-p"><strong><span class="ne-text">c. 需求妥协</span></strong></p><ul class="ne-ul"><li id="u0971cd22" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">通过与客户或用户沟通，重新定义需求范围，以减少对系统现有结构的影响。</span></li><li id="u874ecc02" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">示例：调整客户需求，采用现有功能的替代方案。</span></li></ul><hr id="lVqEF" class="ne-hr"><ol start="2" class="ne-ol"><li id="u16356421" data-lake-index-type="0"><span class="ne-text" style="font-size: 16px">修正需求问题的成本</span></li></ol><p id="u68c98661" class="ne-p"><span class="ne-text">修正需求问题的成本取决于发现问题的时间点：</span></p><ul class="ne-ul"><li id="uec99f9d3" data-lake-index-type="0"><strong><span class="ne-text">早期发现</span></strong><span class="ne-text">：在需求分析阶段发现问题时，成本较低，只需要重新定义或修改文档。</span></li><li id="u40c86a76" data-lake-index-type="0"><strong><span class="ne-text">后期发现</span></strong><span class="ne-text">：如果需求问题是在系统设计或开发完成后才发现，其修正需要重新回溯至需求阶段，并可能导致大规模的设计和实现变更。</span></li></ul></details>
##### 检查的类型
在需求确认过程中，应该对需求文档中的需求进行各种不同类型的检查。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741140293548-14014157-458b-4ed6-9024-143162537213.png)

1. **正确性检查。**检查需求是否真实反映了系统用户的需求。由于环境不断变化，用户需求可能在最初被抽取后已经发生了变化。
2. **一致性检查。**文档中的需求不能相互冲突。这意味着不应该存在矛盾的约束或对同一系统功能的不同描述。
3. **完整性检查。**需求文档应该包括所有功能的定义和系统用户意想要约束要求，确保完整性。
4. **现实性检查。**通过利用现有技术的知识检查需求，确保它们可以在系统预算范围内实现。这些检查还应考虑系统开发的预算和时间安排。
5. **可验证性。**为了减少客户与承包商之间的争议，系统需求应以可验证的方式编写。这意味着应该能够设计一套测试，证明交付的系统满足每一项指定的需求。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741141513697-87aee280-9977-484c-9bf5-29dd943f6c74.png)

在需求确认的过程中，应该对需求文档中的需求进行各种不同类型的检查（如上），而检查的方式/技术有很多（如下）

---

##### 需求确认技术
可以单独或结合使用一系列需求确认结束，例如。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741140456504-f9003964-7ed9-4d39-a0fe-aace9fb9ccbb.png)

> devise 设计；发明；<font style="color:rgb(42, 43, 46);">通过遗嘱）遗赠（不动产）</font>
>

<details class="lake-collapse"><summary id="ua253349f"><span class="ne-text" style="font-size: 14px">Test-driven development</span></summary><p id="u5257e0ac" class="ne-p"><span class="ne-text">测试驱动开发（Test-Driven Development，简称 TDD）是一种软件开发的方法论，其核心思想是</span><strong><span class="ne-text">先写测试代码，再写实现代码</span></strong><span class="ne-text">。通过这种方式，开发过程更加明确和可控，同时可以有效地提高代码的质量。以下是对测试驱动开发的详细解释：</span></p><h6 id="jGZjL"><strong><span class="ne-text">测试驱动开发的基本流程</span></strong></h6><p id="uf92fc60b" class="ne-p"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">TDD 的开发流程可以总结为以下几个循环步骤：</span></p><ol class="ne-ol"><li id="ud0d62d9b" data-lake-index-type="0"><strong><span class="ne-text">编写失败的测试（Red）</span></strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u13490b77" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">开发者首先根据需求编写一个自动化测试代码，用来验证某个功能的预期行为。</span></li><li id="ud53180f9" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">此时由于功能尚未实现，测试必然会失败。这一步的目的是明确功能的需求和验证条件。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="u57fdc48b" data-lake-index-type="0"><strong><span class="ne-text">实现代码使测试通过（Green）</span></strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u011af395" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">开发者编写最少量的代码以实现功能，目的是让刚刚写的测试通过。</span></li><li id="u6617bb51" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">此时的代码可能并不完美，但它能够满足测试条件。</span></li></ul></ul><ol start="3" class="ne-ol"><li id="udfebcb10" data-lake-index-type="0"><strong><span class="ne-text">重构代码（Refactor）</span></strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u68090792" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">在确保所有测试通过的前提下，对代码进行优化和重构，提升其可读性、可维护性或性能。</span></li><li id="u42e789ad" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">重构后的代码仍需通过测试，确保功能没有被破坏。</span></li></ul></ul><ol start="4" class="ne-ol"><li id="u34e43a39" data-lake-index-type="0"><strong><span class="ne-text">重复循环</span></strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="uaa2a3e62" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">根据新的需求或功能扩展，重复上述步骤，持续构建和完善系统。</span></li></ul></ul></details>
1. **Requirements reviews（需求审查）**
+ **含义**：需求审查是一个团队合作的过程，审查小组系统地检查需求文档，寻找可能的错误和不一致。
+ **演绎应用**：
    - 想象一个设计新手机应用的团队，他们定期开会审查需求，比如是否在需求中明确说明用户可以离线浏览内容。如果发现某个功能描述模糊或多余，他们会立即标注并修正，从而避免开发时的潜在问题。
2. **Prototyping（原型设计）**
+ **含义**：原型是一种可执行的模型，开发团队和用户可以通过原型一起验证需求，用户可以使用原型提供反馈，帮助改进需求。
+ **演绎应用**：
    - 假如你要开发一款在线购物平台，可以设计一个简单的点击界面原型，让用户尝试下单并给出意见。如果用户觉得导航太复杂，那么设计团队可以基于反馈改进流程，从而定义更清晰的需求。
3. **Test-case generation（测试用例生成）**
+ **含义**：为需求生成测试用例可以验证需求的可测试性。如果发现某个需求无法设计出测试方法，这可能意味着需求过于模糊，需要重新审视。
+ **演绎应用**：
    - 举例来说，你的系统需求可能是“系统在3秒内响应用户登录”。在设计测试用例时，开发者会定义一个脚本来测量响应时间。如果测试过程发现这一需求无法实现，那需求本身需要重新评估，调整为一个更现实的目标，比如5秒内响应。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741141633919-2fe4ce81-fe5c-47f0-ad0d-49ed9193a3db.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741141777219-628e4c9e-19e2-404c-b82c-e15ef74f0bad.png)

Requirement review属于review checks的一种。

**Review check**

+ 是一种**广义的检查方法**，适用于多个阶段（需求、设计、开发、测试等），用来审查任何文档、设计或代码的正确性、完整性和一致性。
+  用于质量保证的所有阶段，适用于需求审查（requirement review）、设计审查（design review）、代码审查（code review）等  

**Requirement review**

+ 是一种**特定于需求文档**的检查方法，专注于确保需求的准确性、完整性和一致性。
+ 其检查内容通常局限于需求阶段，并专注于与系统功能、用户需求、非功能需求相关的内容。

不过下图的案例是review check针对于requirement check的细化问题。任何的review check都是那四个小标题为主，check的具体内容取决于需要check的对象。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741142137814-9c927b81-f26b-4184-8301-a55cedec57be.png)

---

##### 局限性/存在的问题
从根本上说，很难显示一组需求实际上满足用户的需求。用户需要想象系统运行以及系统如何融入他们的工作。即使对于计算机专业技术人员也很难进行这种抽象的分析，对于系统用户就更难了。

由此造成的问题是，你很少能在需求确认过程中找到所有的需求问题。在相关利益相关者就需求文档已经达成共识后，不可避免地还需要通过进一步的需求变更来纠正遗漏和误解的需求

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741141191767-77143b68-2f17-45ac-a750-67710092b343.png)

> Inevitably 不可避免地
>

---

### 三、Requirements change
#### Introduction
##### 大型软件系统需求频繁变化的原因
1. <font style="color:rgb(35,31,32);">One reason for the frequent changes is that these systems are often developed to address “wicked” problems 非 常规的问题—</font>_**<font style="color:rgb(35,31,32);">problems that cannot be completely defined</font>**_<font style="color:rgb(35,31,32);"> (Rittel and Webber 1973). 问题不能被充分定义</font>

<font style="color:rgb(35,31,32);">Because the problem cannot be fully defined, </font>_**<font style="color:rgb(35,31,32);">the software requirements 		are bound to be incomplete.</font>**_<font style="color:rgb(35,31,32);">不完整</font>

> be bound to do 必然会
>

2. _**<font style="color:rgb(35,31,32);">The stakeholders' understanding of the problem is constantly changing.</font>**_

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741143142795-54e2ff65-b3de-4139-abb0-6ca861d5ed76.png)

3. _**Once a system has been installed 安装 and is regularly used, new requirements inevitably emerge.**_

##### 为什么系统一经使用会产生那么多问题？
1. <font style="color:rgb(35,31,32);background-color:#F4F5F5;">It is the consequence of errors and omissions in the original requirements that have to be corrected</font><font style="color:rgb(35,31,32);">. 原始需求中存在需要纠正的错误和遗漏</font>

> <font style="color:rgb(35,31,32);">omission n.省略，遗漏；（尤指道德上或法律义务的）疏忽</font>
>

2. <font style="color:rgb(35,31,32);">C</font><font style="color:rgb(35,31,32);background-color:#F4F5F5;">hanges to the business environment of the system：</font>

<details class="lake-collapse"><summary id="ud88f548f"><span class="ne-text">什么是</span><strong><span class="ne-text">Business environment of the system？</span></strong></summary><p id="u44b7cb64" class="ne-p"><strong><span class="ne-text">Business environment of the system</span></strong><span class="ne-text">（系统的业务环境）是指一个系统所在的组织环境和运作背景，包括其运行的业务流程、目标、法规、市场条件以及利益相关者等。它定义了系统所需支持的外部和内部条件，以实现业务目标。</span></p><p id="ud09d792f" class="ne-p"><strong><span class="ne-text">特点：</span></strong></p><ol class="ne-ol"><li id="u0ead1902" data-lake-index-type="0"><strong><span class="ne-text">外部环境</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u7bf83ec0" data-lake-index-type="0"><span class="ne-text">系统需考虑的外部因素，例如市场变化、法律法规、行业标准等。</span></li><li id="u7d426be8" data-lake-index-type="0"><span class="ne-text">例子：在线支付系统需满足金融行业的合规要求，如数据隐私法。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="u0ad15c76" data-lake-index-type="0"><strong><span class="ne-text">内部环境</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ue1320724" data-lake-index-type="0"><span class="ne-text">系统在组织内部的运行条件，如业务流程、员工使用习惯以及现有的 IT 基础架构。</span></li><li id="u998ff80a" data-lake-index-type="0"><span class="ne-text">例子：一个库存管理系统需要适配公司的库存处理流程。</span></li></ul></ul><ol start="3" class="ne-ol"><li id="u66ec59f2" data-lake-index-type="0"><strong><span class="ne-text">动态性</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u00de4092" data-lake-index-type="0"><span class="ne-text">业务环境是动态变化的，可能需要系统能够灵活适应新需求或外部变化。</span></li></ul></ul></details>
下图 阐述了业务环境对系统需求的具体影响和挑战  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741143572546-94389fbb-9b27-4f2b-8018-75909765fd05.png)

> interface v.（通过界面或接口）连接；相互联系，相互交流（interface with）
>
> business priorities 业务优先级
>
> consequent adj.随之发生的
>
> <font style="color:rgb(35,31,32);">with consequent changes in the system support required 所需要的系统支持会因此发生变化</font>
>
> compliance n. 服从，遵守；屈从，迁就；可塑性
>
> impose v.强制推行，强制实行；
>

<details class="lake-collapse"><summary id="ufcb7ab29"><span class="ne-text"> New legislation and regulations may be introduced that require system compliance.  </span></summary><p id="u964b0327" class="ne-p"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">完整句子可以分成以下几个部分：</span></p><ol class="ne-ol"><li id="ude80c518" data-lake-index-type="0"><strong><span class="ne-text">主要句子</span></strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ueccb05d8" data-lake-index-type="0"><em><span class="ne-text">New legislation and regulations may be introduced</span></em></li></ul></ul><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul ne-level="2" class="ne-ul"><li id="uff3ae340" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">意思是“新的法律和法规可能会被引入”。</span></li></ul></ul></ul><ol start="2" class="ne-ol"><li id="u2c652a09" data-lake-index-type="0"><strong><span class="ne-text">修饰成分（定语从句）</span></strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ue1d2039d" data-lake-index-type="0"><em><span class="ne-text">that require system compliance</span></em></li></ul></ul><ul class="ne-list-wrap"><ul class="ne-list-wrap"><ul ne-level="2" class="ne-ul"><li id="u7d425664" data-lake-index-type="0"><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">进一步解释这些法律和法规，它们“要求系统符合合规性”。</span></li></ul></ul></ul></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741145899105-4926a524-9df1-4fbf-9e38-4e61bf527561.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741145910195-955d5c71-cfe2-4930-afec-4b8df53c0fd5.png)

---

##### 敏捷开发应对需求变更
1. 方式：<font style="color:rgb(35,31,32);">When a user proposes a requirements change, this change does not go through a formal change management.process. Rather, the user has to prioritize that change and, if it is high priority, decide what system features that were planned for the next iteration should be dropped for the change to be implemented. - 如果一个变更请求优先级更高，那么要决定下一次迭代计划的哪些系统特征应当为实现该变更而暂时搁置。</font>
2. <font style="color:rgb(35,31,32);">问题：</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741145105348-81508739-cbab-4646-85f5-11cd2c46ac69.png)

> cost-effective adj.划算的；成本效益好的（等于 cost-efficient）
>

此时，让一个可以平衡不同利益相关者需要的独立权威机构来决定变更是否应当被接受了能更好

---

#### Requirements management planning
##### 关注点
<font style="color:rgb(35,31,32);">Requirements management planning需求管理计划 is concerned with establishing how a set of evolving requirements will be managed.</font>

<font style="color:rgb(35,31,32);">关注 确定</font><u><font style="color:rgb(35,31,32);">如何管理一组不断演化的需求</font></u><font style="color:rgb(35,31,32);">。</font>

> establish v.建立，设立；证实，确定；找出
>
> is concerned with 涉及
>

与区分requirement management（见本小节末），虽然两者按照上述定义都是确定如何管理变化的需求，但是planing会更加宏观。

##### 计划阶段需确认的问题
<font style="color:rgb(35,31,32);">During the planning stage, you have to decide on a number of issues:</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741146478019-f378f16a-f1f1-4e3c-8cbf-82326825462f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741147636299-367a3c09-eedc-480f-98c8-b7ba5856d4ec.png)

##### 工具的选择要求
需求管理需要<u>自动化的支持</u>，相关的软件<u>工具应当</u>在这个计划阶段中<u>选择好</u>。工具需支持以下这些方面：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741146633458-596f59b2-bb7f-4e0b-b194-c287f23ecbfc.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741146877555-6a4f6326-e459-4a6f-b3d2-7193234bf53a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741146891391-8f794a8d-8994-43dc-8a05-93fbc43d10c2.png)

<details class="lake-collapse"><summary id="uf8a7d6e6"><span class="ne-text"> 什么是追踪关系工具？  </span></summary><p id="u47ccbf7f" class="ne-p"><span class="ne-text">追踪关系工具（Traceability Tools）是一类用于记录和管理需求、设计、实现和测试之间关系的软件工具。它们的主要目的是确保系统开发的每个阶段都能追溯到原始需求，从而保证需求的完整性和一致性。</span></p><p id="u6da13ab9" class="ne-p"><strong><span class="ne-text">核心功能：</span></strong></p><ol class="ne-ol"><li id="uaeca6c47" data-lake-index-type="0"><strong><span class="ne-text">需求追踪</span></strong><span class="ne-text">：记录需求与设计、实现、测试之间的映射关系。</span></li><li id="u1595a885" data-lake-index-type="0"><strong><span class="ne-text">变更管理</span></strong><span class="ne-text">：当需求发生变更时，工具可以帮助识别受影响的模块或功能。</span></li><li id="u503d3635" data-lake-index-type="0"><strong><span class="ne-text">验证和验证支持</span></strong><span class="ne-text">：通过追踪关系，确保系统的每个部分都满足需求。</span></li><li id="u5b47d9fb" data-lake-index-type="0"><strong><span class="ne-text">可视化</span></strong><span class="ne-text">：以图表或表格的形式展示需求之间的关系，便于开发团队理解和管理。</span></li></ol></details>
<details class="lake-collapse"><summary id="u1567e5e0"><span class="ne-text"> 为什么开发组可以通过追踪关系工具发现相关需求？  </span></summary><p id="ufe65fe84" class="ne-p"><span class="ne-text">追踪关系工具的设计使得开发组能够轻松地发现需求之间的关联性和潜在的遗漏，原因如下：</span></p><ol class="ne-ol"><li id="u816fa0f5" data-lake-index-type="0"><strong><span class="ne-text">需求的全覆盖性</span></strong><span class="ne-text">：</span></li></ol><p id="u32aae5da" class="ne-p"><span class="ne-text">工具能够显示每个需求是否已经被实现或测试。如果某个需求没有对应的实现或测试，开发组可以快速发现并补充。</span></p><ol start="2" class="ne-ol"><li id="u740830b3" data-lake-index-type="0"><strong><span class="ne-text">变更影响分析</span></strong><span class="ne-text">：</span></li></ol><p id="u8d20fe9a" class="ne-p"><span class="ne-text">当某个需求发生变更时，工具会自动标记与之相关的设计、代码或测试用例。这使得开发组能够快速识别哪些部分需要调整。</span></p><ol start="3" class="ne-ol"><li id="ufa034f9f" data-lake-index-type="0"><strong><span class="ne-text">需求间的依赖关系</span></strong><span class="ne-text">：</span></li></ol><p id="udd6e7146" class="ne-p"><span class="ne-text">工具可以揭示需求之间的依赖关系。例如，如果一个高优先级需求依赖于另一个需求，开发组可以确保优先处理相关需求。</span></p><ol start="4" class="ne-ol"><li id="u216fed23" data-lake-index-type="0"><strong><span class="ne-text">减少遗漏和错误</span></strong><span class="ne-text">：</span></li></ol><p id="u0699d2ad" class="ne-p"><span class="ne-text">通过追踪关系，开发组可以确保所有需求都被正确实现，避免遗漏或误解。</span></p><ol start="5" class="ne-ol"><li id="uc43b2d7d" data-lake-index-type="0"><strong><span class="ne-text">提高协作效率</span></strong><span class="ne-text">：</span></li></ol><p id="uab1ee8a2" class="ne-p"><span class="ne-text">追踪关系工具为团队提供了一个共享的需求视图，便于开发、测试和产品团队之间的沟通和协作。</span></p></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741147577531-977d9c6f-29bb-419a-9f7e-2efb6f5771f0.png)

##### Requirement management（planning）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741147702522-48b302c8-8952-43c4-86b8-ba888ecd29cd.png)

+  表明**需求管理规划**的核心是<u>确定需求管理的详细程度和范围</u>。   
+ 这是一个高层次的**计划阶段**，目的是为后续的需求管理活动制定策略和基准。

  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741147868505-161afd4a-e697-4fb4-91a3-ea159ce5611a.png)

+ 描述了需求管理的<u>具体活动</u>，即如何在需求工程和系统开发中管理需求的变更。
+ 它是执行需求管理规划的实际工作阶段，侧重于应对需求的动态变化。

---

#### Requirements change management
##### 对象
针对的是需求文档**被批准后**<u>对系统需求</u>所提出的所有变更

<font style="color:rgb(35,31,32);">Requirements change management should be applied to </font>**<font style="color:rgb(35,31,32);">all proposed changes </font>**<font style="color:rgb(35,31,32);">to a </font><u><font style="color:rgb(35,31,32);">system's requirements</font></u><font style="color:rgb(35,31,32);"> </font>_<font style="color:rgb(35,31,32);">after the requirements document has been approved</font>_

+  需求变更管理专注于**需求文档被批准后**对系统需求所提出的变更，原因在于正式批准的需求文档作为项目开发的**基准（Baseline）**，是系统设计、开发和测试的基础。 
+  需求变更管理专注于对批准后的需求文档进行管理，是为了确保项目开发的一致性、效率和资源的有效利用。未被批准的需求通常在需求分析阶段进行评估，并不直接影响系统开发的基准   

##### Why？
<font style="color:rgb(35,31,32);">Because you need to decide if the benefits of implementing new requirements are justified by the costs of implementation. </font>

<font style="color:rgb(35,31,32);"> 实施新需求的收益是否能通过其实施成本来证明是合理的。~因为要决定实现新需求的成本和收益是否合算。</font>

> <font style="color:rgb(35,31,32);">Be justified by... 被...证明是合理的 Can love be justified by time</font>
>

<font style="color:rgb(35,31,32);">The advantage of using a formal process for change management is that all change proposals are treated consistently and changes to the requirements document are made in a controlled way.</font>

<font style="color:rgb(35,31,32);">使用正式的变更管理过程的好处是，所有的变更请求都可以以一致的方式进行处理，而对于需求文档的修改可以以一种受控的方式进行。</font>

---

##### 三个阶段-requirement change 能否被接受
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741149028275-cf6bbb30-d90c-4192-ac9c-0a4a8681bea6.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741149040395-b30fc331-67a5-4599-ac21-3c14ef0846b7.png)

1. **问题分析和变更规范**：
    - 该阶段从识别需求问题或特定变更提案开始。
    - 分析问题或变更提案的有效性，分析结果会反馈给变更提出者。变更提出者可以根据反馈进一步调整提案，或者撤回请求。
2. **变更分析和成本估算**：
    - 评估所提议变更的影响。这通过系统需求的知识及可追溯性信息进行。
    - 同时，需要估算变更的成本，包括需求文档的修改成本，以及对系统设计和实现进行必要调整的成本。
    - 一旦分析完成，决定是否继续推进需求变更。
3. **变更实施**：
    - 在这一阶段，修改需求文档，同时对系统设计和实现进行相应调整（如果需要）。
    - 文档被设计成模块化，以便于在修改单个部分时，不需要进行大规模重写或调整。

**解释：**

1. **阶段划分清晰：**
    - 这三个阶段代表了从变更问题的识别、影响评估到实施的完整生命周期。
    - 每个阶段都有独特的目标和任务，确保变更的可控性和高效性。
2. **降低风险：**
    - **第一阶段**通过分析问题的有效性，减少了不必要的变更请求。
    - **第二阶段**通过评估成本和影响，确保变更的可行性。
    - **第三阶段**通过模块化文档结构，最大限度减少变更对整体系统的干扰。
3. **可追溯性的重要性：**
    - 整个过程依赖可追溯性信息，确保变更的影响被充分理解，并能追溯到变更的源头。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741149217961-bc0eb11f-010e-4c28-894b-010ea27ddb20.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1741149246714-e2fe408c-4a44-4168-acb8-4395d06c209d.png)

### Conclusion
<终于结束了>

- [ ] **<font style="color:rgb(0,0,0);">Requirements specification </font>**<font style="color:rgb(0,0,0);">is the process of formally documenting the user and system requirements and creating a software requirements document. </font>
- [ ] **<font style="color:rgb(0,0,0);">The software requirements document </font>**<font style="color:rgb(0,0,0);">is an agreed statement of the system requirements. It should be organized so that both system customers and software developers can use it</font>
- [ ] **<font style="color:rgb(0,0,0);">Requirements validation </font>**<font style="color:rgb(0,0,0);">is the process of checking the requirements for validity, consistency, completeness, realism and verifiability. </font>
- [ ] <font style="color:rgb(0,0,0);">Business, organizational and technical changes inevitably lead to changes to the requirements for a software system. </font>
- [ ] <font style="color:rgb(0,0,0);">Requirements management is the process of managing and controlling these changes</font>

