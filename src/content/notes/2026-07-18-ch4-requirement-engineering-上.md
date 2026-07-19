---
title: Ch4 Requirement Engineering(上)
description: 这一章~ 或许内容真的很多！但是收获不仅体现在这一门课上，后续项目管理、ISP等课程也会因为本章的内容变得容易起来~
attachments:
  - label: PDF
    file: /uploads/ch4-requirement-engineering-上-.pdf
grade: year-2
semester: spring
course: software-engineering
date: 2026-07-19
order: 3
type: note
published: true
---
### Contents
- [ ] <font style="color:rgb(0,0,0);">Functional and non-functional requirements. </font>
- [ ] <font style="color:rgb(0,0,0);"></font><font style="color:rgb(0,0,0);">Requirements engineering processes. </font>
- [ ] <font style="color:rgb(0,0,0);">Requirements elicitation (extraction). </font>
- [ ] <font style="color:rgb(0,0,0);">Requirements specification. </font>
- [ ] <font style="color:rgb(0,0,0);">Requirements validation. </font>
- [ ] <font style="color:rgb(0,0,0);">Requirements change.</font>

---

### Objectives
<font style="color:rgb(35,31,32);">Understand the </font>_<font style="color:rgb(35,31,32);">concepts</font>_<font style="color:rgb(35,31,32);"> of </font>**<font style="color:rgb(35,31,32);">user and system requirements</font>**<font style="color:rgb(35,31,32);"> and why these requirements should be written in different ways;  </font>

<font style="color:rgb(35,31,32);">Understand the differences between </font>**<font style="color:rgb(35,31,32);">functional and non-functional </font>**<font style="color:rgb(35,31,32);">software requirements; </font>

<font style="color:rgb(35,31,32);">Understand the main</font>**<font style="color:rgb(35,31,32);"> requirements</font>**<font style="color:rgb(35,31,32);"> engineering activities of elicitation, analysis, and validation, and the relationships between these activities; </font>

<font style="color:rgb(35,31,32);">Understand why requirements management is necessary and how it supports other requirements engineering activities.</font>

---

## <font style="color:#213BC0;">一、introduction</font>
### Requirement engineering
+ Requirement for system- **<font style="color:#4C16B1;">descriptions of the services </font>**<font style="color:rgb(35,31,32);">that a system should provide and the </font>**<font style="color:#4C16B1;">constraints on its operation.</font>**
+ <font style="color:rgb(35,31,32);">These requirements reflect the needs of customers for a system that serves a certain purpose.</font>
+ <font style="color:rgb(35,31,32);">The process of finding out, analyzing, documenting and checking these services and constraints is called </font>**<font style="color:rgb(35,31,32);">requirements engineering (RE).</font>**

### Requirement?
#### 不同阶段→需求范围广泛
+ <font style="color:rgb(0,0,0);background-color:#F4F5F5;">It may range from a high-level abstract statement of a service or of a system constraint to a detailed functional specification.</font><font style="color:rgb(0,0,0);"> - This variance is essential because requirements need to serve different puposes and audience. 需求范围</font>
+ <font style="color:rgb(0,0,0);background-color:#F4F5F5;">This is inevitable as requirements may serve a dual function</font><font style="color:rgb(0,0,0);">双重功能. </font>
    - <font style="color:rgb(0,0,0);background-color:#F4F5F5;">May be the basis for a bid 投标 for a contract - therefore must be open to interpretation </font><font style="color:rgb(0,0,0);">理解. </font>

在项目的早期阶段，需求可能用来为投标合同提供基础。在这个阶段，需求需要<u>有足够的解释空间，以便不同的供应商能够根据自己的理解提出他们的解决方案</u>。这种灵活性有助于吸引更多的竞标者，并鼓励创新。

    - <font style="color:rgb(0,0,0);background-color:#F4F5F5;">May be the basis for the contract itself - therefore must be defined in detail. </font>

<font style="color:rgb(0,0,0);"> 一旦合同被授予，需求将成为合同的基础。在这个阶段，需求需要详细和明确，以确保各方对交付内容有一致的理解。这种详细性和明确性有助于减少误解和纠纷。  </font>

---

Davis 解释了为什么 requirement 有 high-level, abstract statement of service 和detailed 两个极端：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739889812391-901200d1-e097-4495-9154-f8e03aa40985.png)

---

#### Types of requirement
<font style="color:rgb(42, 43, 46);">在需求工程过程中出现的一些问题是由于未能在这些不同层次的描述之间做出清晰的分离。我用术语“用户需求 user requirement”来表示高层次的抽象需求 high-level abstract requirements，用术语“系统需求system requirement”来表示系统应该做什么的详细描述detailed description，以此来区分它们。用户需求和系统需求可定义如下：</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739888564286-f55f5d2a-fbf1-437c-980f-895688bd7715.png)

1. **User requirements **are statements 报告、说明, in a natural language自然语言 plus diagrams, of what services the system is expected to provide to system users and the constraints限制 under which it must operate. The user requirements may vary from <u>broad statements泛泛而谈</u> of the system features required /to detailed, precise descriptions of the system functionality. <font style="color:rgb(42, 43, 46);">用户需求可能从对系统特性的广泛描述到对系统功能的详细、精确描述不等。</font>
2. **System requirements** are more detailed descriptions of the software system's functions, services, and operational constraints-<font style="color:rgb(42, 43, 46);">运营限制：指在特定的运营环境下，对业务或活动施加的限制或限制条件。这些限制可能包括时间、资源、技术、法律或其他方面的限制。</font> The **system requirements document **(sometimes called a **functional specification**) should define exactly <u>what is to be implemented</u>. It may be part of the **contract **between the system buyer and the software developers.

---

<font style="color:rgb(42, 43, 46);">将系统信息传递给不同类型的读者需要不同类型的需求。图4.1说明了用户需求和系统需求之间的区别。这个来自精神卫生保健患者信息系统（Mentcare）的示例展示了如何将用户需求扩展到多个系统需求。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739890936958-e69a0396-fce0-46d4-9fc4-645d73204e09.png)

> The user requirement is quite general.
>
> <font style="color:rgb(35,31,32);">The system requirements provide more specific information about the services and functions of the system that is to be implemented.</font>
>

---

#### Readers of different types of requirement specification
<font style="color:rgb(42, 43, 46);">您需要在不同的细节层次上编写需求，因为不同类型的读者以不同的方式使用它们。图4.2给出了用户对读卡器的类型和系统要求。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739888587674-ca113535-9136-42eb-be36-1f42fa5891ed.png)

#### System stakeholders:
 在需求文档和系统开发过程中，提到利益相关者这个概念是非常重要的，因为利益相关者对系统的需求和期望会直接影响系统的设计、开发和最终的成功  

+ <font style="color:rgb(35,31,32);">Anyone who is affected by the system in some way and so anyone who has a legitimate 正当的 interest in it.</font>
+ <font style="color:rgb(35,31,32);">Stakeholders range from end-users of a system through managers to external stakeholders such as regulators who certify the acceptability of the system.-   系统利益相关者包括任何受到系统影响的人，因此任何对系统有合法利益的人都可以是利益相关者。利益相关者的范围从系统的终端用户到管理人员，再到认证系统可接受性的外部利益相关者，如监管机构。  </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739888598909-17b48f26-3c90-4032-b466-93bfa59e462e.png)

<details class="lake-collapse"><summary id="uecc25cf2"><span class="ne-text">详细</span></summary><ol class="ne-ol"><li id="u53a5ff30" data-lake-index-type="0"><strong><span class="ne-text">终端用户 (End-users)</span></strong><span class="ne-text"><br /></span><span class="ne-text">角色：系统的直接用户。</span></li></ol><p id="uc45b3565" class="ne-p"><span class="ne-text">关心点：系统的功能性、易用性和用户体验。</span></p><p id="uc40789bc" class="ne-p"><span class="ne-text">示例：软件的日常使用者、客户服务代表等。</span></p><ol start="2" class="ne-ol"><li id="u8ac26533" data-lake-index-type="0"><strong><span class="ne-text">管理者 (Managers)</span></strong><span class="ne-text"><br /></span><span class="ne-text">角色：负责系统的规划、实施和管理。</span></li></ol><p id="u8a100474" class="ne-p"><span class="ne-text">关心点：系统的成本效益、进度、性能和对组织目标的支持。</span></p><p id="uc3fc96a2" class="ne-p"><span class="ne-text">示例：项目经理、运营主管等。</span></p><ol start="3" class="ne-ol"><li id="u95ab2e89" data-lake-index-type="0"><strong><span class="ne-text">外部利益相关者 (External Stakeholders)</span></strong><span class="ne-text"><br /></span><span class="ne-text">角色：对系统有间接影响或利益的外部实体。</span></li></ol><p id="ufe0a879f" class="ne-p"><span class="ne-text">关心点：系统的合规性、安全性和对外部标准的符合。</span></p><p id="uec3a7c46" class="ne-p"><span class="ne-text">示例：监管机构、认证机构、供应商、合作伙伴等。</span></p></details>
##### Example of Mentcare system
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739892072630-3364b7f8-5264-4375-ae76-d57ae2f94c9f.png)

 需求工程通常被视为软件工程过程的第一阶段。然而，在决定是否进行系统的采购或开发之前，可能需要对系统需求有一定的了解。这个<u>需求工程（RE）的早期阶段</u>_建立了系统可能的功能和潜在收益的高层次视图_。这些内容随后会在可行性研究中进行考虑，该研究评估系统在技术和财务上的可行性。研究结果帮助管理层决定是否进行系统的采购或开发。  

 在这一章中，我将介绍“传统”的需求视角，而不是在第3章中讨论的敏捷过程中的需求。对于大多数大型系统，在系统实施开始之前，<u>通常会有一个明确的需求工程阶段</u>。这个阶段的结果是生成需求文档，该文档可能会成为系统开发合同的一部分。当然，随后需求会有所变化，用户需求也可能会扩展。  

---

#### Agile methods and requirements
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739892142687-17c7c30b-9b9a-472a-ba81-6ca4aabfa5a7.png)

**概述**： Agile方法在需求工程方面有其独特的观点和实践，主要强调灵活性和响应性。以下是对Agile方法和需求的主要观点和挑战的解释：

1. **快速变化的需求**：
    - **观点**：许多Agile方法认为，编写详细的系统需求是一种时间浪费，因为需求变化太快。
    - **解释**：由于业务环境和用户需求不断变化，详细的需求文档可能会迅速过时，无法反映当前的需求。
2. **需求文档过时**：
    - **观点**：因此，需求文档总是处于过时状态。
    - **解释**：详细的需求文档在变化的环境下很难保持更新，导致它们不能有效指导项目的开发和实施。
3. **增量需求工程**：
    - **观点**：Agile方法通常采用增量需求工程，并可能将需求表达为用户故事。
    - **解释**：Agile方法通过小步迭代和增量开发，逐步收集和完善需求。用户故事是一种常见的需求表达方式，描述了用户的需求及其业务价值。
4. **业务系统的实用性**：
    - **观点**：这种方法对业务系统是实用的，但对需要交付前分析的系统（如关键系统）或由多个团队开发的系统则具有挑战性。
    - **解释**：在业务系统中，灵活性和快速响应是关键。然而，对于安全关键系统或需要严格预先分析的系统，缺乏详细的需求文档可能会导致风险增加。此外，多团队协作中，详细需求有助于协调和统一理解。

## <font style="color:#213BC0;">二、Functional and non-functional requirements. </font>
:::warning
你需要区分两者的区别 -- 会作为考试的重点

:::

software system requirement : <font style="color:rgb(35,31,32);">functional or non-functional requirements: </font>

<font style="color:rgb(35,31,32);">1. </font>_**<font style="color:#213BC0;">Functional requirements</font>**__<font style="color:rgb(35,31,32);"> -聚焦于具体服务行为: </font>_<font style="color:rgb(35,31,32);">These are </font><font style="color:rgb(35,31,32);background-color:#F4F5F5;">statements 陈述 of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations. </font><font style="color:rgb(35,31,32);">In some cases, the functional requirements may also explicitly 明确 state what the system should not do. </font><font style="color:rgb(35,31,32);">-  </font><font style="color:rgb(35,31,32);">系统应该提供的服务的陈述/eg.用户登录功能，描述了系统如何对特定输入做出反应/输入错误密码反馈，以及系统在特定情况下应该如何表现/断电恢复系统保持之前的功能。在某些情况下，功能需求也可能明确说明系统不应该做什么/系统不应在未经授权的情况下删除用户的数据。  </font>

<font style="color:rgb(35,31,32);">2. </font>_**<font style="color:#213BC0;">Non-functional requirements</font>**__**<font style="color:rgb(35,31,32);"> -</font>**__<font style="color:rgb(35,31,32);">行为适用于整个系统</font>__**<font style="color:rgb(35,31,32);">： </font>**_<font style="color:rgb(35,31,32);">T</font><font style="color:rgb(35,31,32);background-color:#F4F5F5;">hese are </font>**<font style="color:rgb(35,31,32);background-color:#F4F5F5;">constraints 限制</font>**<font style="color:rgb(35,31,32);background-color:#F4F5F5;"> on the services or functions offered by the system. They include timing constraints, constraints on the development process, and constraints imposed by standards</font><font style="color:rgb(35,31,32);">. Non-functional requirements </font><font style="color:rgb(35,31,32);background-color:#F4F5F5;">often apply to the system as a whole rather than individual system features or services.</font>

+ **<font style="color:#213BC0;background-color:#F4F5F5;">Domain requirement 域需求</font>**<font style="color:rgb(35,31,32);background-color:#F4F5F5;">：Constraints on the system from the domain of operation.  </font><font style="color:rgb(35,31,32);">域需求是指由系统运行领域引入的对系统的限制- 域需求是指由</font>**<font style="color:rgb(35,31,32);">系统运行领域</font>**<font style="color:rgb(35,31,32);">引入的对系统的限制， 这些需求可能源自法律法规、操作环境、业务流程和技术限制。  </font>

<details class="lake-collapse"><summary id="u51059b45"><span class="ne-text">示例</span></summary><ol class="ne-ol"><li id="u238e753c" data-lake-index-type="0"><strong><span class="ne-text">医疗系统</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：</span></li></ol><ul class="ne-ul"><li id="ufe3b0501" data-lake-index-type="0"><strong><span class="ne-text">需求</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：系统必须加密和保护患者数据。</span></li><li id="uc6fe6c11" data-lake-index-type="0"><strong><span class="ne-text">原因</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：以确保符合HIPAA和其他数据隐私法规。</span></li></ul><ol start="2" class="ne-ol"><li id="uf0d7c569" data-lake-index-type="0"><strong><span class="ne-text">汽车控制系统</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：</span></li></ol><ul class="ne-ul"><li id="ubd03453a" data-lake-index-type="0"><strong><span class="ne-text">需求</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：系统必须在-40°C到+85°C的温度范围内正常工作。</span></li><li id="u6b9fed81" data-lake-index-type="0"><strong><span class="ne-text">原因</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：车辆在不同环境下操作，系统必须具有高耐候性。</span></li></ul><ol start="3" class="ne-ol"><li id="ud40ecc7c" data-lake-index-type="0"><strong><span class="ne-text">金融交易系统</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：</span></li></ol><ul class="ne-ul"><li id="u988242dd" data-lake-index-type="0"><strong><span class="ne-text">需求</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：所有交易必须在2秒内确认。</span></li><li id="ud16ca5ec" data-lake-index-type="0"><strong><span class="ne-text">原因</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：提供快速交易处理以满足客户需求和市场竞争。</span></li></ul><ol start="4" class="ne-ol"><li id="u19215caf" data-lake-index-type="0"><strong><span class="ne-text">制造业生产系统</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：</span></li></ol><ul class="ne-ul"><li id="u02e30885" data-lake-index-type="0"><strong><span class="ne-text">需求</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：系统必须与现有的工业控制系统兼容。</span></li><li id="ub6a458bb" data-lake-index-type="0"><strong><span class="ne-text">原因</span></strong><span class="ne-text" style="color: rgb(35,31,32)">：确保无缝集成和高效生产管理。</span></li></ul></details>
---

### Functional requirements
+ <font style="color:rgb(35,31,32);">Describe what the system should do. </font>
    - <font style="color:rgb(35,31,32);">- </font><font style="color:rgb(35,31,32);background-color:#F4F5F5;">Describe </font><font style="color:#601BDE;background-color:#F4F5F5;">functionality or system service</font>
+ <font style="color:rgb(35,31,32);background-color:#F4F5F5;">Depend on the type of software being developed, the expected users of the software, </font><font style="color:rgb(35,31,32);">and the general approach taken by the organization when writing requirements.-organization编写requirement时候采取的方法（敏捷方法/传统方法/混合方法）/ </font><font style="color:rgb(35,31,32);background-color:#F4F5F5;">type of system where the software is used.</font>
+ <font style="color:rgb(35,31,32);">Functional system requirements vary from general requirements covering what the system should do to very specific requirements reflecting local ways of working or an organization's existing systems. - </font><font style="color:rgb(42, 43, 46);">功能系统需求从涵盖系统应该做什么的一般需求到反映本地工作方式或组织现有系统的非常具体的需求不等</font>
+ **<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Functional </font>****<font style="color:#601BDE;background-color:#F4F5F5;">user</font>****<font style="color:rgb(0,0,0);background-color:#F4F5F5;"> requirements</font>**<font style="color:rgb(0,0,0);background-color:#F4F5F5;"> may be </font><font style="color:#601BDE;background-color:#F4F5F5;">high-level statements</font><font style="color:rgb(0,0,0);background-color:#F4F5F5;"> of </font><font style="color:#601BDE;background-color:#F4F5F5;">what the system should do</font><font style="color:rgb(0,0,0);background-color:#F4F5F5;">. </font><font style="color:rgb(0,0,0);">- 功能用户需求通常是高层次的陈述，</font><u><font style="color:rgb(0,0,0);">描述系统应该做什么。  </font></u>
+ **<font style="color:rgb(0,0,0);background-color:#F4F5F5;">Functional </font>****<font style="color:#601BDE;background-color:#F4F5F5;">system</font>****<font style="color:rgb(0,0,0);background-color:#F4F5F5;"> requirements</font>**<font style="color:rgb(0,0,0);background-color:#F4F5F5;"> should describe the system services in </font><font style="color:#601BDE;background-color:#F4F5F5;">detail</font><font style="color:rgb(0,0,0);background-color:#F4F5F5;"> . </font><font style="color:rgb(0,0,0);">- 功能系统需求应该详细描述系统的服务，关注系统的具体实现和各项服务的细节，确保所有功能和行为都被明确定义  </font>

         <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739930423568-4614b99d-90bf-4997-9eee-5820883a58fe.png)

---

eg. Mentcare system

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739929021274-dcd5046d-b423-4b09-ac0b-34d8af473615.png)

<details class="lake-collapse"><summary id="u8832e051"><span class="ne-text">解释</span></summary><ol class="ne-ol"><li id="u6671ee53" data-lake-index-type="0"><strong><span class="ne-text">用户应能够搜索所有诊所的预约列表</span></strong><span class="ne-text">：</span></li></ol><p id="u2d610109" class="ne-p"><strong><span class="ne-text">解释</span></strong><span class="ne-text">：此需求定义了系统应提供的一项服务，允许用户在所有诊所的预约列表中进行搜索。其合理性在于，患有精神健康问题的患者有时会感到困惑，可能预约了一个诊所却去了另一个诊所。如果他们有预约，不论在哪个诊所，都应记录为已出席。-  </span><span class="ne-text" style="font-size: 12px">假设一个患有抑郁症的患者，他可能因为记忆力减退和注意力不集中而记错预约的诊所位置。虽然他的预约在A诊所，但他可能误认为是在B诊所。这种情况下，系统应允许在所有诊所的预约列表中进行搜索，以确保患者即使去了错误的诊所，也能及时得到帮助，并被记录为已出席。  </span></p><ol start="2" class="ne-ol"><li id="u82991d33" data-lake-index-type="0"><strong><span class="ne-text">系统应每天为每个诊所生成一份预计当天预约的患者名单</span></strong><span class="ne-text">：</span></li></ol><p id="u6ccc154c" class="ne-p"><strong><span class="ne-text">解释</span></strong><span class="ne-text">：此需求定义了系统应具备的一个功能，即每天为每个诊所生成一份当天预约的患者名单。这有助于诊所准备接待患者，并确保他们能够按时出席。</span></p><ol start="3" class="ne-ol"><li id="uffc82f32" data-lake-index-type="0"><strong><span class="ne-text">使用系统的每个工作人员应通过其八位数字员工编号进行唯一标识</span></strong><span class="ne-text">：</span></li></ol><p id="u87a0f950" class="ne-p"><strong><span class="ne-text">解释</span></strong><span class="ne-text">：此需求定义了系统的一个特性，即确保每个使用系统的工作人员通过其唯一的八位数字员工编号进行标识。这有助于追踪和管理系统的使用。</span></p></details>
---

#### information requirement
功能需求，顾名思义，传统上侧重于系统应该做什么。然而，如果一个组织决定现有的现成软件产品可以满足其需求，那么开发详细的功能规范就没有多大意义。在这种情况下，重点应放在开发信息需求上，指定人们工作所需的信息。信息需求规定了所需信息以及如何传递和组织。因此，Mentcare系统的信息需求可能会规定当天预约的患者名单中应包含哪些信息

#### <font style="background-color:#EFF0F0;">Impercision in the requirements specification</font> 需求规格
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739930589283-a52c5d19-7c31-4990-98b3-e95d456ae2c3.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739930595685-c7eb498b-bc73-4bd6-b8c4-8149584583a1.png)

<font style="color:rgb(35,31,32);">Imprecision in the requirements specification can lead to disputes between customers and software developers. It is natural for a system developer to interpret 解释 an ambiguous 有歧义的 requirement in a way that simplifies its implementation. Often, however, this is not what the customer wants. New requirements have to be established and changes made to the system. Of course, this delays system delivery and increases costs. - </font><font style="color:rgb(42, 43, 46);">必须建立新的需求并对系统进行更改。当然，这会延迟系统交付并增加成本</font>

<details class="lake-collapse"><summary id="u0fc236aa"><span class="ne-text" style="font-size: 14px">eg.</span></summary><p id="ufe928c17" class="ne-p"><strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">用户意图</span></strong></p><p id="u91db80f9" class="ne-p"><em><span class="ne-text">搜索所有诊所的预约</span></em><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：用户希望在所有诊所的所有预约中搜索患者姓名。</span></p><p id="ue5b0e514" class="ne-p"><em><span class="ne-text">原因</span></em><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：用户可能认为系统应该能够在所有诊所范围内进行全面搜索，以确保找到所有相关的预约记录。</span></p><p id="ue99213a7" class="ne-p"><strong><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">开发人员解释</span></strong></p><p id="u1ae5fad1" class="ne-p"><em><span class="ne-text">单个诊所搜索</span></em><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：开发人员可能会为了简化实现，而设计成在单个诊所内搜索患者姓名。用户需要先选择诊所，然后进行搜索。</span></p><p id="ue236de64" class="ne-p"><em><span class="ne-text">原因</span></em><em><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">：</span></em><span class="ne-text" style="color: rgb(42, 43, 46); font-size: 14px">这种实现方式可能更容易开发，因为它减少了系统需要处理的数据量和复杂性。</span></p></details>
#### <font style="color:rgb(35,31,32);">Complete and consistent 完整/一致</font>
“ Ideally, <font style="background-color:#EFF0F0;">the functional requirements specification of a system should be both complete and consistent</font>. 

Completeness means that all services and information required by the user should be defined. -  完整性意味着用户所需的所有服务和信息都应被定义  

Consistency means that requirements should not be contradictory."  - 一致性意味着需求不应是矛盾的。 

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739930787445-1abfd597-b89e-4065-b30c-2b1d82e28f63.png)

facility - 设施；工具；设备

##### HARD TO PRODUCE
<font style="color:rgb(0,0,0);">In practice, because of system and environmental complexity, </font>

<font style="color:rgb(0,0,0);">it is impossible to produce a complete and consistent requirements document.</font>

 在实际操作中，只有对于非常小的软件系统，才能实现需求的一致性和完整性。一个原因是在为大型复杂系统编写规范时很容易犯错和遗漏。另一个原因是大型系统有许多利益相关者，他们的背景和期望不同。利益相关者可能有不同的——往往是不一致的需求。这些不一致性在最初指定需求时可能并不明显，只有在更深入的分析或系统开发过程中才会被发现  

---

### Non-Functional requirements
:::warning
没有直接相关的

:::

<font style="color:rgb(35,31,32);">NOT directly concerned with the specific 明确的、具体的 services delivered by the system to its users.</font>

<font style="color:rgb(35,31,32);background-color:#EFF0F0;">These define system properties and constraints =</font>

<font style="color:rgb(35,31,32);">These non-functional requirements usually specify or constrain characteristics of the system</font>**<font style="color:rgb(35,31,32);"> as a whole</font>**<font style="color:rgb(35,31,32);">. They may relate to emergent system properties such as </font><font style="color:rgb(35,31,32);background-color:#EFF0F0;">reliability, response time, and memory use.</font><font style="color:rgb(35,31,32);"> Alternatively 或者, they may define constraints on the system implementation, such as the capabilities of I/O devices or the data representations used in interfaces with other systems.- </font><font style="color:rgb(42, 43, 46);">例如I/O设备的功能或与其他系统接口中使用的数据表示</font>

<font style="color:rgb(0,0,0);background-color:#EFF0F0;">Process requirements may also be specified mandating a particular IDE, programming language or development method.</font><font style="color:rgb(42, 43, 46);">过程需求也可以通过特定的IDE、编程语言或开发方法来指定。</font>

<font style="color:rgb(35,31,32);background-color:#EFF0F0;">Non-functional requirements are often more critical than individual functional requirements.</font>

<font style="color:rgb(35,31,32);"> System users can usually find ways to work around 解决 a </font>**<font style="color:rgb(35,31,32);">system function </font>**<font style="color:rgb(35,31,32);">that doesn't really meet their needs 不完全满足其需求. </font><font style="color:rgb(35,31,32);background-color:#EFF0F0;">However, failing to meet a non-functional requirement can mean that the whole system is unusable  </font><font style="color:rgb(35,31,32);">例如，如果飞机系统不符合其可靠性要求，它将不会被认证为安全操作；如果嵌入式控制系统未能满足其性能要求，控制功能将无法正常运行。  </font>

---

Non-functional requirement → Hard to identify which system components implement = <font style="color:rgb(35,31,32);">The implementation of these requirements may be </font><u><font style="color:rgb(35,31,32);">spread throughout 分散</font></u><font style="color:rgb(35,31,32);"> the system,</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739934297668-31dffc51-e156-4220-99d6-bfc7fa3423a4.png)

#### <font style="color:rgb(35,31,32);">Reason 分散的原因</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739932448488-600cb398-c6bd-45e0-8f61-4c13b0619106.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739932481644-2ff317f0-7054-4bd6-b0c2-4e7136ebf736.png)

<details class="lake-collapse"><summary id="u9b213e51"><span class="ne-text">解释</span></summary><h3 id="3e655521"><span class="ne-text">1. 非功能需求影响系统架构</span></h3><ul class="ne-ul"><li id="uc9e833ac" data-lake-index-type="0"><strong><span class="ne-text">性能需求</span></strong><span class="ne-text">：为了满足嵌入式系统的性能需求，可能需要组织系统以最小化组件之间的通信。例如，减少数据传输的频率和量，以提高系统的整体响应速度和效率。</span></li><li id="ue2d96199" data-lake-index-type="0"><span class="ne-text"> 为了提高系统的性能，可能需要最小化组件之间的通信。这意味着系统设计时需要将相互依赖的功能整合在同一个组件中，以减少数据传输的频率和延迟。例如，一个嵌入式控制系统可能会将传感器数据处理和控制逻辑放在同一个模块中，以提高响应速度。  </span></li></ul><h3 id="2602f51e"><span class="ne-text">2. 安全需求生成相关功能需求</span></h3><ul class="ne-ul"><li id="uc29c90fb" data-lake-index-type="0"><strong><span class="ne-text">安全需求</span></strong><span class="ne-text">：一个非功能需求（如安全需求）可能会产生多个相关的功能需求。例如，为了实现安全需求，系统可能需要提供新服务，如用户身份验证、访问控制和数据加密。</span></li><li id="u3bb20a3f" data-lake-index-type="0"><strong><span class="ne-text">生成新功能需求</span></strong><span class="ne-text">：这些功能需求定义了为了满足安全需求，系统需要提供的具体服务。</span></li><li id="u8eddf421" data-lake-index-type="0"><span class="ne-text"> 为了提高系统的安全性，可能需要将某些关键功能分散在不同的组件中，防止单点故障或安全漏洞。例如，一个银行系统可能会将身份验证、交易处理和数据存储分别放在不同的组件中，并通过安全协议进行通信。  </span></li></ul><h3 id="4f37a984"><span class="ne-text">3. 约束现有需求</span></h3><ul class="ne-ul"><li id="u4a6f9cbf" data-lake-index-type="0"><strong><span class="ne-text">限制访问</span></strong><span class="ne-text">：非功能需求还可能会约束现有需求。例如，安全需求可能会限制系统中信息的访问权限，以确保只有授权用户可以访问敏感数据。</span></li><li id="u310a0ea8" data-lake-index-type="0"><strong><span class="ne-text">影响功能设计</span></strong><span class="ne-text">：这种约束可能会影响系统的功能设计和实现，确保系统符合特定的非功能要求。</span></li><li id="u31ca9b05" data-lake-index-type="0"><span class="ne-text"> 为了提高系统的可维护性，通常需要将功能分散成多个独立的模块。这使得每个模块可以独立开发、测试和维护，减少了复杂性和维护成本。例如，一个电商系统可能会将用户管理、商品管理和订单管理分成不同的模块，以便于维护和更新。  </span></li></ul></details>
---

#### Types of non-functional requirements
<font style="color:rgb(42, 43, 46);">由于预算限制、组织策略、与其他软件或硬件系统互操作性的需要，或安全法规或隐私立法等外部因素，用户需要产生非功能性需求。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739932877711-ef640c11-a028-4db7-a44a-366829925c5d.png)

##### Product requirements classification
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739934322432-d60ad89e-8593-44c8-bda5-b92fdcf83bd5.png)

 These requirements specify or constrain the runtime behavior of the software -  这些需求**规定或限制软件在运行时的行为**。  

+ **性能需求 (Performance Requirements)**：系统必须以多快的速度执行以及需要多少内存。例如，系统响应时间必须在2秒内，最大内存使用量为512MB。
+ **可靠性需求 (Reliability Requirements)**：设定可接受的故障率。例如，系统的故障率必须低于每1000小时1次。
+ **安全性需求 (Security Requirements)**：确保系统的安全性。例如，系统必须具备多因素身份验证和数据加密功能。
+ **可用性需求 (Usability Requirements)**：规定系统的易用性。例如，系统界面必须易于导航，用户操作步骤不超过3步。

##### Organizational requirements
 These requirements are broad system requirements derived from policies and procedures in the customer's and developer's organizations.  -  这些需求是从客户和开发者组织的政策和程序中派生出的广泛系统需求。  

+ **操作过程需求 (Operational Process Requirements)**：定义系统将如何使用。例如，系统必须支持24/7不间断运行，提供实时监控功能。
+ **开发过程需求 (Development Process Requirements)**：规定系统的开发过程。例如，开发过程必须遵循特定的编码标准和最佳实践，定期进行代码审查和测试。
+ **环境需求 (Environmental Requirements)**：规定系统的运行环境。例如，系统必须在Windows Server操作系统上运行，或需要特定的硬件配置。

##### External requirements
 This broad heading covers all requirements that are derived from factors external to the system and its development process.  -  这一大类需求涵盖了所有源自系统及其开发过程之外的因素的需求  

+ **监管需求 (Regulatory Requirements)**：规定系统必须完成哪些事项才能获得监管机构的批准。例如，核安全系统必须符合核安全局的标准和规定。
+ **法律需求 (Legislative Requirements)**：规定系统必须遵循的法律法规。例如，数据保护系统必须符合GDPR（通用数据保护条例）的要求。
+ **伦理需求 (Ethical Requirements)**：确保系统在道德上是可接受的。例如，确保AI系统的决策过程透明、公正，不会对特定人群产生歧视

---

Example of non-functional requirement for mentcare system

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739933521768-29d78c14-cf33-4874-afa2-4ee742f298dd.png)

 产品需求是一种可用性需求，定义了系统必须可用的时间和每天允许的停机时间。它没有涉及Mentcare系统的功能，而是明确指出了系统设计师必须考虑的一个约束条件。  

组织需求规定了用户如何对系统进行身份验证。运营该系统的卫生部门正在转向一种标准的认证程序，用户不再使用登录名，而是通过刷身份卡来进行身份识别。  

 外部需求源自系统需要遵守隐私立法的要求。隐私显然是医疗系统中的一个非常重要的问题，需求规定系统应按照国家隐私标准进行开发。  

---

##### Goals and requirements
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740108263234-c6a40aec-214c-4766-998b-f9aaaa356964.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739934746193-df023b3b-a6a0-4e71-a3ef-ec1ac0f9fbac.png)

 非功能需求的一个常见问题是，利益相关者可能会将需求提出为一般性目标，如易用性、系统从故障中恢复的能力或快速用户响应。这些目标确立了良好的意图，但会给系统开发人员带来问题，因为它们留下了解释和后续争议的余地。-  stakeholders propose requirements as general goals, such as ease of use, the ability of the system to recover from failure, or rapid user response.]

+ Manager expressed as:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739933867944-5f74e987-c0b1-48a3-be6f-0f6ffc8aded6.png)

通过 Metrics for specifying 说明 non-functional requiremens

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739934006880-3a63dc53-586d-490a-a411-6045dcd2be96.png)

+ Rewrite it as:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739933948767-f2aa2ee8-50fd-4d79-884e-7c6c3420f3e7.png)

---

<font style="color:rgb(42, 43, 46);">在需求文档中区分功能性需求和非功能性需求是很困难的。如果将非功能性需求与功能性需求分开陈述，那么它们之间的关系可能很难理解。但是，理想情况下，您应该突出显示与紧急系统属性（如性能或可靠性）明显相关的需求。您可以将它们放在需求文档的单独部分中，或者以某种方式将它们与其他系统需求区分开来</font>

<font style="color:rgb(42, 43, 46);">非功能性需求，如可靠性reliability、安全性safety和机密性confidentiality需求，对于关键系统尤为重要。我将在第2部分中介绍这些可靠性需求，其中描述了指定可靠性、安全性和安全性需求的方法。</font>

<details class="lake-collapse"><summary id="u92db5a5c"><span class="ne-text">Functional &amp; Non-functional</span></summary><h3 id="a5d302de"><span class="ne-text">非功能需求与功能需求的产生和转化</span></h3><ol class="ne-ol"><li id="u18892848" data-lake-index-type="0"><strong><span class="ne-text">初期需求</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u561bc792" data-lake-index-type="0"><span class="ne-text">在需求工程的初期，通常会识别和理解高层次的业务目标和非功能需求。这些需求反映了利益相关者对系统的期望和限制，包括性能、安全性、可用性等。</span></li><li id="u2579a662" data-lake-index-type="0"><span class="ne-text">这些非功能需求有时会引导和影响功能需求的产生。例如，安全性需求可能会引发用户身份验证功能的需求。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="u9fd61747" data-lake-index-type="0"><strong><span class="ne-text">需求规格说明 (Requirement Specification)</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u864806b3" data-lake-index-type="0"><span class="ne-text">在编写需求规格说明时，我们会将初期的高层次需求（包括非功能需求和功能需求）细化和具体化。这包括明确系统的具体功能和行为，以确保系统满足最初定义的业务目标和非功能需求。</span></li><li id="u530a97e8" data-lake-index-type="0"><span class="ne-text">非功能需求和功能需求在这个过程中是相互交织和影响的。例如，系统的性能需求（非功能需求）可能会影响数据库查询优化功能（功能需求）的设计和实现。</span></li></ul></ul><h3 id="b4bd78df"><span class="ne-text">非功能需求的内容</span></h3><ul class="ne-ul"><li id="u592e66c6" data-lake-index-type="0"><strong><span class="ne-text">非功能需求</span></strong><span class="ne-text">不仅仅包括利益相关者提出的需求，还包括与系统整体相关的需求。它们通常规定系统的整体品质和限制，涉及系统的性能、安全性、可用性、可靠性等方面。</span></li><li id="u488970a4" data-lake-index-type="0"><strong><span class="ne-text">例子</span></strong><span class="ne-text">：系统必须在一定的响应时间内处理用户请求（性能需求），必须防止未经授权的访问（安全需求），必须在规定的环境条件下运行（环境需求）。</span></li></ul><h3 id="c986b623"><span class="ne-text">功能需求的内容</span></h3><ul class="ne-ul"><li id="u7f064597" data-lake-index-type="0"><strong><span class="ne-text">功能需求</span></strong><span class="ne-text">描述了系统应该提供的具体服务、系统如何对特定输入做出反应，以及系统在特定情况下应该如何表现。这些需求通常更为详细和具体。</span></li><li id="u03b73bec" data-lake-index-type="0"><strong><span class="ne-text">例子</span></strong><span class="ne-text">：用户应该能够登录系统并查看其账户信息（功能需求），系统应该在用户输入错误密码时显示错误消息（功能需求）。</span></li></ul><h3 id="25f9c7fa"><span class="ne-text">总结</span></h3><p id="u5484ceea" class="ne-p"><span class="ne-text">非功能需求和功能需求是相互关联和交织的。虽然非功能需求通常在需求工程的初期被识别和定义，但在编写需求规格说明时，它们会细化并引导具体的功能需求。非功能需求不仅包括利益相关者提出的需求，还包括系统整体品质和限制的需求。</span></p></details>
---

## <font style="color:#213BC0;">三、Requirements engineering processes. </font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739935070608-8999027e-5d96-44b0-9461-e8216ade73e8.png)

###### 需求工程的三个关键活动
**英文**： "As I discussed in Chapter 2, requirements engineering involves three key activities. These are **discovering requirements** by interacting with stakeholders (elicitation and analysis); **converting these requirements into a standard form **(specification); and **checking that the requirements actually define the system that the customer wants** (validation)."

**中文**： 正如我在第2章中讨论的那样，需求工程涉及三个关键活动：通过与利益相关者互动来发现需求（引导和分析）；将这些需求转换为标准形式（规格说明）；以及检查这些需求是否真正定义了客户想要的系统（验证）。

###### 需求工程的迭代过程
**英文**： "I have shown these as sequential processes in Figure 2.4. However, in practice, requirements engineering is an iterative process in which the activities are interleaved."

**中文**： 我在图2.4中将这些活动展示为顺序过程。然而，在实际操作中，需求工程是一个迭代过程，其中活动是交错进行的。

###### 图4.6中的螺旋模型
**英文**： "Figure 4.6 shows this interleaving. The activities are organized as an iterative process around a spiral. The output of the RE process is a system requirements document. The amount of time and effort devoted to each activity in an iteration depends on the stage of the overall process, the type of system being developed, and the budget that is available."

**中文**： 图4.6展示了这种交错。活动围绕螺旋作为迭代过程进行组织。需求工程过程的输出是系统需求文档。每次迭代中投入到每项活动的时间和精力取决于整个过程的阶段、正在开发的系统类型以及可用的预算。

###### 过程早期和晚期的重点
**英文**： "Early in the process, most effort will be spent on understanding high-level business and non-functional requirements, and the user requirements for the system. Later in the process, in the outer rings of the spiral, more effort will be devoted to eliciting and understanding the non-functional requirements and more detailed system requirements."

**中文**： 在过程的早期，大部分精力将用于理解高层次的业务和非功能需求，以及系统的用户需求。过程中后期，在螺旋的外环，将更多的精力用于引导和理解非功能需求以及更详细的系统需求。

###### 螺旋模型的适应性
**英文**： "This spiral model accommodates approaches to development where the requirements are developed to different levels of detail. The number of iterations around the spiral can vary so that the spiral can be exited after some or all of the user requirements have been elicited. Agile development can be used instead of prototyping so that the requirements and the system implementation are developed together."

**中文**： 这种螺旋模型适应了需求被开发到不同细节层次的方法。螺旋的迭代次数可以变化，以便在引导了部分或全部用户需求后退出螺旋。敏捷开发可以代替原型开发，以便需求和系统实现一起开发。

###### 需求变更的管理
**英文**： "In virtually all systems, requirements change. The people involved develop a better understanding of what they want the software to do; the organization buying the system changes; and modifications are made to the system’s hardware, software, and organizational environment. Changes have to be managed to understand the impact on other requirements and the cost and system implications of making the change. I discuss this process of requirements management in Section 4.6"

**中文**： 几乎在所有系统中，需求都会发生变化。相关人员对他们希望软件做什么有了更好的理解；购买系统的组织发生了变化；并且对系统的硬件、软件和组织环境进行了修改。必须管理这些变更，以了解对其他需求的影响以及进行变更的成本和系统影响。我在第4.6节讨论了这个需求管理过程。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739935102857-007ffe63-26e2-4d72-8684-3a301acf7efd.png)

<details class="lake-collapse"><summary id="u73e7c1fd"><span class="ne-text">细节</span></summary><p id="uef38c310" class="ne-p"><span class="ne-text">在需求工程中，&quot;一轮迭代” 通常指的是</span><strong><span class="ne-text">螺旋模型</span></strong><span class="ne-text">（Spiral Model）中的一个概念。螺旋模型是一种软件开发过程模型，它结合了瀑布模型和迭代开发模型的优点，通过多个迭代周期逐步完善系统。</span></p><h6 id="hW7tO"><span class="ne-text">螺旋模型的特点：</span></h6><ol class="ne-ol"><li id="u99ce2080" data-lake-index-type="0"><strong><span class="ne-text">每个迭代周期</span></strong><span class="ne-text">：螺旋模型将开发过程分为多个迭代周期，每个周期包括需求分析、设计、实现、测试等活动。</span></li><li id="u7542e04a" data-lake-index-type="0"><strong><span class="ne-text">风险评估</span></strong><span class="ne-text">：在每个迭代周期中，都会进行风险评估和管理，以确保项目的可行性和稳定性。</span></li><li id="ua1ba8ced" data-lake-index-type="0"><strong><span class="ne-text">逐步完善</span></strong><span class="ne-text">：随着每一轮迭代的完成，系统将逐步完善和扩展，最终形成一个完整的系统。</span></li><li id="u740f99b6" data-lake-index-type="0"><strong><span class="ne-text">用户反馈</span></strong><span class="ne-text">：在每一轮迭代结束时，都会收集用户和利益相关者的反馈，以便在下一轮迭代中进行改进。</span></li></ol><h6 id="JYxMa"><span class="ne-text">为什么叫“螺旋”？</span></h6><p id="u059c4784" class="ne-p"><span class="ne-text">螺旋模型的图形表示通常是一个螺旋形，这象征着每次迭代都是围绕着项目目标逐步逼近的，就像螺旋线逐渐向中心靠近一样。</span></p><h6 id="TT6zm"><span class="ne-text">需求文档在螺旋模型中的作用：</span></h6><p id="u0438762f" class="ne-p"><span class="ne-text">在螺旋模型中，每一轮迭代都会对需求进行更新和完善，需求文档在这个过程中起到了重要的记录和指导作用。需求工程师需要在每一轮迭代中记录新的需求、变更和改进建议，为下一轮迭代提供参考。</span></p></details>
---

## <font style="color:#213BC0;">四、Requirements elicitation (extraction). </font>
### Brief introduction
<font style="background-color:#EFF0F0;">Requirements elicitation = requirement discovery</font>

<font style="color:rgb(0,0,0);background-color:#EFF0F0;">Involves technical staff working with customers to find out about the </font>**<font style="color:rgb(0,0,0);background-color:#EFF0F0;">application domain,</font>**<font style="color:rgb(0,0,0);background-color:#EFF0F0;"> the</font>**<font style="color:rgb(0,0,0);background-color:#EFF0F0;"> services that the system should provide and the system's operational constraints.</font>**

<font style="color:rgb(0,0,0);background-color:#EFF0F0;">May involve end-users, managers, engineers involved in maintenance, domain experts, trade unions, etc. These are called stakeholders.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740006491973-813d0e9f-8b46-4992-b6b3-c4a3f7a2c073.png)

:::warning
你需要了解四个过程中input和output是什么

:::

### The difficulties od understanding the requirements
<font style="color:rgb(35,31,32);">Eliciting and understanding requirements from system stakeholders is a difficult process for several reasons:</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740006616398-68fe1cfe-6804-434e-b68c-dcdc906bad75.png)

=>**<font style="color:#213BC0;"> 提不出合理的需求</font>**

+ 利益相关者通常不知道他们对计算机系统的具体需求 - 通常只能提供最一般的需求
+ 利益相关者可能很难清晰表达他们的需求
+ 可能提出不切实际的需求

> articulate 清晰表达
>
> feasible 可行的
>

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740006838864-a840ff66-e18a-458a-bb1d-0a1c4fb7f0af.png)

=><font style="color:#213BC0;"> </font>**<font style="color:#213BC0;">提出的需求有“代沟”，因知识维度差异，难以理解</font>**

**利益相关者**（Stakeholders）通常会使用他们自己的术语和隐含的工作知识来表达他们的需求,但这对于Requirement engineers来说很难理解

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740006994136-fa68a00b-d8a6-4ee2-b01d-159ea915c906.png)

=>**<font style="color:#213BC0;"> 不同利益相关者提出、表达需求的方法不同，需要整合</font>**

需求工程师需要：

+ **发现所有潜在的需求来源**：不仅仅依赖最明显的利益相关者，还要深入挖掘所有可能影响系统需求的人群。
+ **识别共性和冲突**：分析不同利益相关者的需求，找出共性以统一需求，同时解决不同需求之间的冲突。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007173531-1288dfe3-aa86-429b-9dea-f1846b2c53bb.png)

=>**<font style="color:#213BC0;"> 政策因素对系统需求的影响</font>**

+ **管理层的需求**：某些需求可能是由管理层提出的，目的是为了增强他们在组织中的影响力。
+ **权力关系**：需求可能反映了组织内部的权力关系和动态，需求工程师需要识别并理解这些隐含的动机。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007184860-1de20ae5-16c2-4ee7-b39f-9e8bb12f5459.png)

=> **<font style="color:#213BC0;">经济和商业环境的动态变化</font>**

+ **需求的优先级可能变化：**随着时间的推移，<u>某些需求的重要性可能会发生变化。</u>
+ **新的需求可能会出现：**新的利益相关者可能会在分析过程中出现，并提出新的需求。

> inevitably - 不可避免地
>
> particular - 特定的、某一个
>
> emerge from - 从... 出现
>

#### Conclusion
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007741912-e62fc30c-a849-4621-b4af-345f2cc42a1b.png)

---

### The requirements elicitation and analysis process
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007792418-a0e0c041-65c1-4bbb-9c08-c12a59f01d8f.png)

注：_<font style="color:rgb(35,31,32);">Each organization will have its own version or instantiation of this general model</font>_

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007877048-adc70c88-a50c-4b06-8a51-8bbc56232a7f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007951157-73fd327f-7d08-46b9-a8b1-71d22977c033.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007931949-58dbb5e7-9c86-4dff-8239-c83309d368f9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740007972670-6656cafd-1d0d-4d29-ad3e-eb56c0ef2551.png)

#### 需求发现和理解 (Requirements Discovery and Understanding)
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740009525884-8f1b2088-7bce-406d-9235-55389d8cde3e.png)

这一过程包括与系统的利益相关者互动，以<u>发现他们的需求</u>。在这个过程中，不仅会识别利益相关者的需求，还会通过文档等来源发现**领域需求**。

#### 需求分类和组织 (Requirements Classification and Organization)
这一步骤将不结构化的需求集合进行分组，将相关的需求<u>组织成一致的集群</u>，从而使需求更加有条理和易于管理。

#### 需求优先级和协商 (Requirements Prioritization and Negotiation)
在涉及多个利益相关者时，需求不可避免地会产生冲突。这个活动的重点是对需求进行优先级排序，通过协商找到并解决需求冲突。通常，利益相关者需要开会解决分歧，并达成妥协需求。

It is important that you organize regular stakeholder meetings. Stakeholders should have the opportunity to express their concerns and agree on requirements compromises妥协.  

#### 需求文档 (Requirements Documentation)
需求被记录下来，并作为下一轮迭代的输入。在这个阶段，可能会编写早期的软件需求文档草案，或者简单地在白板、维基或其他共享空间中非正式地维护需求。

 At the requirements documentation stage, it is important that you use **simple language and diagrams** to describe the requirements. This makes it possible for stakeholders to understand and comment on these requirements. To make information sharing easier, it is best to use a shared document (e.g., on Google Docs or Office 365) or a wiki that is accessible to all interested stakeholders.  

---

+ **<font style="color:rgb(0,0,0);">Requirements discovery: </font>**<font style="color:rgb(0,0,0);">Interacting with stakeholders to discover their requirements. Domain requirements are also discovered at this stage. </font>
+ **<font style="color:rgb(0,0,0);">Requirements classification and organization: </font>**<font style="color:rgb(0,0,0);">Groups related requirements and organizes them into coherent有条理的clusters组</font>
+ **<font style="color:rgb(0,0,0);">Prioritization and negotiation: </font>**<font style="color:rgb(0,0,0);">Prioritizing requirements and resolving requirements conflicts. </font>
+ **<font style="color:rgb(0,0,0);">Requirements specification: </font>**<font style="color:rgb(0,0,0);">Requirements are documented and input into the next round of the spiral</font>

---

_Figure 4.7 shows that requirements elicitation and analysis is an __**iterative process 迭代过程 **__with __**continual feedback**__ from each activity to other activities_

+ Starts with- Requirements discovery

               ↓  improvement

+ Ends with - Requirements documentations



 为了简化需求的分析，组织和分组利益相关者的信息是有帮助的。  

 一个方法是将每个利益相关者群体视为一个视角，并将该群体的所有需求收集到这个视角中。你还可以包括代表领域需求和其他系统约束的视角。

或者，可以使用系统架构模型来识别子系统，并将需求与每个子系统相关联。  

<details class="lake-collapse"><summary id="ufc585caf"><span class="ne-text">解释</span></summary><ol class="ne-ol"><li id="u5dfda669" data-lake-index-type="0"><strong><span class="ne-text">将每个利益相关者群体视为一个视角</span></strong><span class="ne-text"><br /></span><span class="ne-text">方法：将不同的利益相关者群体（例如，用户、客户、管理层等）视为不同的视角（viewpoints），并将每个群体的所有需求收集到相应的视角中。</span></li></ol><p id="u8cb0d6bb" class="ne-p"><strong><span class="ne-text">优势</span></strong><span class="ne-text">：</span></p><p id="uf05f4a68" class="ne-p"><span class="ne-text">系统化收集需求：通过将需求按视角分组，可以更系统地收集和管理求。</span></p><p id="u3e270900" class="ne-p"><span class="ne-text">明确需求来源：有助于识别每个需求的来源，便于分析和追踪。</span></p><ul class="ne-ul"><li id="u4671d2df" data-lake-index-type="0"><span class="ne-text">示例：</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="uc5003a62" data-lake-index-type="0"><span class="ne-text">用户视角：包括用户界面需求、用户体验需求等。</span></li><li id="u52a09e55" data-lake-index-type="0"><span class="ne-text">管理层视角：包括系统性能需求、报告和统计需求等。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="ud959d998" data-lake-index-type="0"><strong><span class="ne-text">代表领域需求和其他系统约束的视角</span></strong><span class="ne-text"><br /></span><span class="ne-text">方法：除利益相关者群体视角外，还可以引入代表领域需求和其他系统约束的视角。这些视角可以帮助需求工程师考虑领域特定的需求和系统间的约束。</span></li></ol><p id="u783fc4a4" class="ne-p"><strong><span class="ne-text">优势：</span></strong></p><p id="u4e745d5c" class="ne-p"><span class="ne-text">全面覆盖需求：确保不仅考虑利益相关者的需求，还包括领域特定的需求和系统约束。</span></p><p id="u01354399" class="ne-p"><span class="ne-text">综合考虑约束：帮助识别和解决不同系统之间的约束和依赖关系。</span></p><ul class="ne-ul"><li id="u568ababc" data-lake-index-type="0"><span class="ne-text">示例：</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u5c874554" data-lake-index-type="0"><span class="ne-text">安全需求视角：包括系统的安全性和隐私保护需求。</span></li><li id="ub51d2444" data-lake-index-type="0"><span class="ne-text">合规性视角：包括遵守行业标准和法规的需求。</span></li></ul></ul><p id="ue0399cb0" class="ne-p"><br></p><ol start="3" class="ne-ol"><li id="u2a70b6ed" data-lake-index-type="0"><strong><span class="ne-text">使用系统架构模型识别子系统</span></strong><span class="ne-text"><br /></span><span class="ne-text">方法：通过系统架构模型识别系统中的子系统，并将需求与每个子系统相关联。</span></li></ol><p id="uad751f5a" class="ne-p"><strong><span class="ne-text">优势：</span></strong></p><p id="u05e52e24" class="ne-p"><span class="ne-text">明确系统结构：有助于理解系统的架构和子系统的相互关系。</span></p><p id="u35a8bfe1" class="ne-p"><span class="ne-text">需求分配：可以更精确地将需求分配到各个子系统，便于系统设计和实现。</span></p><ul class="ne-ul"><li id="u8bb78858" data-lake-index-type="0"><span class="ne-text">示例：</span></li></ul><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="ubed92ecb" data-lake-index-type="0"><span class="ne-text">前端子系统：与用户交互相关的需求。</span></li><li id="ubf44e167" data-lake-index-type="0"><span class="ne-text">后端子系统：与数据处理和存储相关的需求。</span></li></ul></ul></details>
---

### Requirement elicitation techniques
<font style="color:rgb(35,31,32);">You need to spend time understanding how people work, what they produce, how they use other systems, and how they may need to change to accommodate适应a new system</font>

+ <font style="color:rgb(35,31,32);">Two approach to requirement elicitation:</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740009837669-e4d3acb1-6837-427b-9823-f23160986475.png)

你应该将这两种相结合。

#### Interviewing
<font style="color:rgb(0,0,0);background-color:#EFF0F0;">Formal or informal interviews with stakeholders are part of most RE processes.</font>

 正式或非正式的系统利益相关者访谈是大多数需求工程过程的一部分。在这些访谈中，需求工程团队向利益相关者提问，关于他们目前使用的系统和即将开发的系统。需求从这些问题的答案中得出。  

##### <font style="background-color:#EFF0F0;">Classification</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740010046027-6dedda1f-6305-406e-837c-bfe9e11aa426.png)

+ 封闭式访谈，在这种访谈中，利益相关者回答预定义的问题。
+ 开放式访谈，没有预定义的议程。需求工程团队与系统利益相关者探讨一系列问题，从而更好地了解他们的需求。

> agenda 代议事项
>

 Completely open-ended 完全开放的 discussions rarely work well. You usually have to ask some questions to get started and to keep the interview focused on the system to be developed.   并保持访谈集中在即将开发的系统上。  

Unless you have a **system prototype** to demonstrate, you should not expect stakeholders to suggest specific and detailed requirements. Everyone finds it difficult to visualize what a system might be like. You need to analyze the information collected and to generate the requirements from this.  

 除非你有**系统原型**可以展示，否则不要指望利益相关者能提出具体和详细的需求。每个人都很难想象一个系统会是什么样子。你需要分析收集的信息并从中生成需求。  

##### 通过interview获得domain knowledge困难的原因
<details class="lake-collapse"><summary id="u632f5d1d"><span class="ne-text">Domain knowledge 领域知识</span></summary><p id="u612761e7" class="ne-p"><span class="ne-text"> 是指在特定领域或专业中积累的知识和技能  </span></p><p id="udf2e3d8c" class="ne-p"><span class="ne-text">eg. 医疗领域，医生和医务人员需要掌握医疗领域的知识，以便诊断和治疗病人。</span></p><p id="u618b8a45" class="ne-p" style="text-indent: 2em"><span class="ne-text">金融领域，金融分析师和投资顾问需要掌握金融市场的知识，以便为客户提供投资建议。</span></p></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740010553727-00b55da7-32d8-40de-a8bc-4ea06589954c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740010564823-975c845a-56bc-4f0e-a528-5f61063cf0d9.png)

1. 所有应用专家都会使用特定于他们工作领域的行话。在讨论领域需求时，他们不可能不使用这些术语。他们通常以精确且微妙的方式使用这些词语，这可能会使需求工程师产生误解。  

> jargon-行话；黑行
>
> specialist-专家
>
> precise-精确的
>
> subtle-微妙的；灵活的；敏锐的
>

2.  一些领域知识对利益相关者来说是如此熟悉，以至于他们要么觉得难以解释，要么认为这些知识太基本，以至于不值得提及。  

##### interview不是一种高效获得<font style="color:rgb(42, 43, 46);">组织需求和约束的方式</font>
<font style="color:rgb(35,31,32);">Interviews are not an effective technique for eliciting knowledge about organizational requirements and constraints because there are subtle power relationships between the different people in the organization.</font>

+ **原因**<font style="color:rgb(35,31,32);">：组织内部的人员之间存在微妙的权力关系。</font>
+ **现实与理论的差异**<font style="color:rgb(35,31,32);">：公布的组织结构图往往与实际的决策过程不符，但被访者可能不愿意向陌生人透露实际而非理论上的结构。</font>
+ **对话的顾虑**<font style="color:rgb(35,31,32);">：大多数人一般不愿意讨论可能影响需求的政治和组织问题。</font>
+ **示例**<font style="color:rgb(35,31,32);">：某个项目可能在正式结构中由A部门负责，但实际上B部门的人在做决定。  </font>
+ **示例**<font style="color:rgb(35,31,32);">：例如，一个中层管理人员可能不愿意透露某个高层领导的真实决策方式，因为这可能会影响他们的职业生涯。  </font>

---

##### <font style="background-color:#EFF0F0;">Be an effective interviewer,</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740011369322-0028251c-6f1a-492a-9730-33240fe2dd35.png)

 你应该保持开放的心态，避免对需求有先入为主的观念，并愿意倾听利益相关者的意见。如果利益相关者提出了令人意外的需求，你应该愿意改变对系统的看法。 

> preconceived 事先形成的 / preconceive 预想
>

 你应该通过使用引导性问题或需求提案，或者通过共同工作在一个原型系统上，来引导被访者进行讨论。直接对人们说“告诉我你想要什么”不太可能得到有用的信息。他们在定义明确的上下文中更容易进行讨论，而不是泛泛而谈。  

<details class="lake-collapse"><summary id="u79dc40a9"><span class="ne-text">Spring-board question</span></summary><p id="u48539b04" class="ne-p"><strong><span class="ne-text">&quot;Spring-board question&quot;</span></strong><span class="ne-text"> 是一种引导性问题，旨在激发讨论并帮助被访者思考和表达他们的需求和意见。这类问题可以作为一个“跳板”，让对话更有深度和广度。  </span></p><p id="uc77fee5f" class="ne-p"><span class="ne-text"> &quot;Spring-board question&quot; 这个术语可能并不能完全通过直译来理解，因为它带有一些隐含的意义。直译过来可能是 &quot;跳板问题&quot;，但我们需要考虑它在需求工程中的实际用途和背景。  </span></p></details>
---

 Information from interviews is used along with other information about the system from documentation describing business processes or existing systems, user observations, and developer experience. Sometimes, apart from the information in the system documents, the interview information may be the only source of information about the system requirements. However, interviewing on its own is liable to miss essential information, and so it should be used in conjunction with other requirements elicitation techniques.  

 **访谈**中获得的信息与来自**描述业务流程或现有系统的文档、用户观察和开发人员经验的信息**一起使用。有时，除了系统文档中的信息外，访谈信息可能是唯一的系统需求信息来源。然而，仅依靠访谈可能会遗漏关键信息，因此应与其他需求引导技术结合使用。  

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740028989954-d4359e4e-97c2-49ae-9523-ddf11bcaaa37.png)

> substitute 替代品
>

<details class="lake-collapse"><summary id="u3e8f58a4"><span class="ne-text"> RFQ/RFI/RFP  </span></summary><h6 id="jWDMV"><span class="ne-text">RFI（Request for Information）</span></h6><p id="u8f285849" class="ne-p"><strong><span class="ne-text">定义</span></strong><span class="ne-text">：RFI是信息请求，用于</span><span class="ne-text" style="text-decoration: underline">收集供应商的基本信息和潜在解决方案的概述。</span><span class="ne-text">RFI通常是采购过程的初始步骤，用于了解市场上的可用选项和供应商的能力。</span></p><p id="u168b7dca" class="ne-p"><strong><span class="ne-text">目的</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="u8bbcdc19" data-lake-index-type="0"><span class="ne-text">获取供应商的基本信息。</span></li><li id="ud8863a1b" data-lake-index-type="0"><span class="ne-text">了解市场上可用的技术和解决方案。</span></li><li id="u136eb53d" data-lake-index-type="0"><span class="ne-text">确定潜在供应商的名单。</span></li></ul><p id="u64ab0802" class="ne-p"><strong><span class="ne-text">适用场景</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="u192012a9" data-lake-index-type="0"><span class="ne-text">当需要了解市场上有哪些供应商和技术。</span></li><li id="uf0984ff6" data-lake-index-type="0"><span class="ne-text">在正式采购流程之前进行初步调查。</span></li></ul><p id="u1a322d55" class="ne-p"><strong><span class="ne-text">示例问题</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="ua77f285f" data-lake-index-type="0"><span class="ne-text">供应商的公司背景和历史。</span></li><li id="u2774334c" data-lake-index-type="0"><span class="ne-text">提供的产品或服务的概述。</span></li><li id="ufeb22d5b" data-lake-index-type="0"><span class="ne-text">成功案例和客户参考。</span></li></ul><hr id="sIkEO" class="ne-hr"><h6 id="JHcJG"><span class="ne-text">RFQ（Request for Quotation）</span></h6><p id="uc4a6bf11" class="ne-p"><strong><span class="ne-text">定义</span></strong><span class="ne-text">：RFQ是报价请求，用于</span><span class="ne-text" style="text-decoration: underline">收集供应商针对特定产品或服务的报价。</span><span class="ne-text">RFQ通常在已确定需求并缩小潜在供应商范围后使用。</span></p><p id="u78c792f6" class="ne-p"><strong><span class="ne-text">目的</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="ube81aedd" data-lake-index-type="0"><span class="ne-text">获取具体产品或服务的价格和条款。</span></li><li id="u61f80939" data-lake-index-type="0"><span class="ne-text">比较不同供应商的报价和条款。</span></li></ul><p id="u5bf956fc" class="ne-p"><strong><span class="ne-text">适用场景</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="ua1f1d178" data-lake-index-type="0"><span class="ne-text">当需求和规格已经明确。</span></li><li id="u0ef9786a" data-lake-index-type="0"><span class="ne-text">需要从多个供应商处获取具体的价格和交付条件。</span></li></ul><p id="ub8cc5851" class="ne-p"><strong><span class="ne-text">示例内容</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="u44f0fb88" data-lake-index-type="0"><span class="ne-text">产品或服务的详细规格。</span></li><li id="ucbc6388a" data-lake-index-type="0"><span class="ne-text">数量和交付时间。</span></li><li id="u5f9d7c07" data-lake-index-type="0"><span class="ne-text">价格和付款条件。</span></li></ul><hr id="J5ndX" class="ne-hr"><h6 id="u8mmE"><span class="ne-text">RFP（Request for Proposal）</span></h6><p id="ud1870c68" class="ne-p"><strong><span class="ne-text">定义</span></strong><span class="ne-text">：RFP是提案请求，用于收集供应商针对特定项目或需求的详细提案。RFP比RFQ更详细，通常包括技术和商业要求。</span></p><p id="u475cac16" class="ne-p"><strong><span class="ne-text">目的</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="u22f5a122" data-lake-index-type="0"><span class="ne-text">获取供应商针对特定项目的详细解决方案和报价。</span></li><li id="ue2208107" data-lake-index-type="0"><span class="ne-text">评估不同供应商的技术和商业能力。</span></li></ul><p id="u03028011" class="ne-p"><strong><span class="ne-text">适用场景</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="ubea5efc6" data-lake-index-type="0"><span class="ne-text">当需要综合评估供应商的技术解决方案和商业条件。</span></li><li id="uc6e108ec" data-lake-index-type="0"><span class="ne-text">项目需求复杂，需要详细的提案和方案。</span></li></ul><p id="u735bad91" class="ne-p"><strong><span class="ne-text">示例内容</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="ub3354105" data-lake-index-type="0"><span class="ne-text">项目的详细需求和目标。</span></li><li id="ua9db63ec" data-lake-index-type="0"><span class="ne-text">技术和功能要求。</span></li><li id="udd25290b" data-lake-index-type="0"><span class="ne-text">项目管理和实施计划。</span></li><li id="u9ccba68a" data-lake-index-type="0"><span class="ne-text">价格和商业条款。</span></li></ul><h3 id="BUYEg"><span class="ne-text">总结</span></h3><ul class="ne-ul"><li id="ue00bfcd5" data-lake-index-type="0"><strong><span class="ne-text">RFI</span></strong><span class="ne-text">：用于初步了解市场和供应商信息。</span></li><li id="u7d754d87" data-lake-index-type="0"><strong><span class="ne-text">RFQ</span></strong><span class="ne-text">：用于获取具体产品或服务的报价。</span></li><li id="uc4727f7f" data-lake-index-type="0"><strong><span class="ne-text">RFP</span></strong><span class="ne-text">：用于收集供应商的详细提案和解决方案。</span></li></ul></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740108097205-7e93b995-053c-4502-b6b8-b098f8ecf2b9.png)



Problem =>4.1.2 & 4.1.3

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740029025662-8d6ec38a-94bc-447c-a2d8-7b9405d0607b.png)

---

#### Ethnography（social ecology）
##### 软件交付但是未使用的原因
<font style="color:rgb(35,31,32);">Software systems do not exist in isolation. They are used in a social and organizational environment, and software system requirements may be generated or constrained by that environment. One reason why many software systems are delivered but never used is that their requirements do not take proper account of how social and organizational factors affect the practical operation of the system</font><font style="color:rgb(35,31,32);">. - </font><font style="color:rgb(42, 43, 46);">没有适当考虑社会和组织因素如何影响系统的实际操作</font>

---

<font style="color:rgb(42, 43, 46);">所以理解social and organizational issues that affect the use of the system很重要。</font>

##### <font style="color:rgb(42, 43, 46);">Breif introduction</font>
###### What is Ethnography 民族志？
[https://www.scribbr.com/methodology/ethnography/](https://www.scribbr.com/methodology/ethnography/)

:::warning
_<font style="color:rgb(35,31,32);">Ethnograph</font>_<font style="color:rgb(35,31,32);">y is an </font>**<font style="color:rgb(35,31,32);">observational technique</font>**<font style="color:rgb(35,31,32);"> that can be used to understand </font>**<font style="color:rgb(35,31,32);">operational processes</font>**<font style="color:rgb(35,31,32);"> and </font><font style="color:rgb(35,31,32);">help derive来自于,获得requirements for software / to support these processes -  可以用来理解操作过程，并帮助得出支持这些过程的软件需求。  </font>

:::

**民族志**（Ethnography）是一种质性研究方法，通过**直接观察和记录人们在自然环境中的行为和互动**，来理解他们的日常生活和工作方式。  

###### The value of ethnography？
<font style="color:rgb(35,31,32);">The value of ethnography is that it helps </font><u><font style="color:rgb(35,31,32);">discover implicit system 隐形需求requirements</font></u><font style="color:rgb(35,31,32);"> that reflect the actual ways that people work, rather than the </font>_<font style="color:rgb(35,31,32);">formal processes</font>_<font style="color:rgb(35,31,32);"> defined by the organization.</font>

**正式流程**<font style="color:rgb(35,31,32);">（Formal Processes）是</font>**<font style="color:rgb(35,31,32);">组织定义的标准化流程</font>**<font style="color:rgb(35,31,32);">，旨在确保一致性和控制。然而，这些流程往往</font>_<font style="color:rgb(35,31,32);">无法捕捉到实际工作中的复杂性和灵活性</font>_<font style="color:rgb(35,31,32);">。  </font>

+ **示例**<font style="color:rgb(35,31,32);">：在一个办公室环境中，正式流程可能要求员工使用某个软件来报告问题，但实际情况是，员工可能更倾向于通过口头沟通或即时消息来解决问题。</font>
+ **<font style="color:rgb(35,31,32);">以太学的优势</font>**
    1. **真实工作环境**<font style="color:rgb(35,31,32);">：以太学研究在真实工作环境中进行，可以捕捉到人们在自然情境下的真实行为和需求。</font>
    2. **非正式流程**<font style="color:rgb(35,31,32);">：它揭示了那些在正式文档和流程中未被记录的非正式流程和实践。</font>

<font style="color:rgb(35,31,32);">People often find it very difficult to articulate details of their work because it is </font>**<font style="color:rgb(35,31,32);">second nature</font>**<font style="color:rgb(35,31,32);"> to them.-工作自然而然就完成，难以详细说明细节； They understand their own work but may not understand its relationship to other work in the organization-了解自己的工作但不了解其在组织中的关系. Social and organizational factors that affect the work-社会和组织因素的影响（有些决策有高层做出，普通员工不知道其背后的考量）, but that are not obvious to individuals, may only become clear when noticed by an unbiased observer-需要一个没有偏见的外部观察者，清晰看到这些影响工作的问题。</font>

> <font style="color:rgb(35,31,32);">second nature -  这种行为或技能已经内化到一个人的日常习惯中，甚至不需要特别去思考  </font>
>

<font style="color:rgb(35,31,32);">Reason for No siginificant effect on producitivity - The difference between the assumed and the actual work.</font>

---

##### Ethnography在以下两种需求中尤其有效：
1. <font style="color:rgb(35,31,32);">Requirements derived from the way in which people actually work, rather than the way in which business process definitions say they ought to work. - 来源于实际的需求</font>
2. <font style="color:rgb(35,31,32);">Requirements derived from cooperation and awareness of other people’s activities. - 来源于合作的需求 / 他人行为</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740107809188-eb5402f4-5927-422a-b99f-44980546eb16.png)

---

<font style="color:rgb(35,31,32);">Ethnography can be combined with the development of a system prototype (Figure 4.8). The ethnography informs为...提供信息 the development of the prototype so that fewer prototype refinement改良 cycles are required. Furthermore, the prototyping focuses the ethnography by identifying找到、识别 problems and questions that can then be discussed with the ethnographer. </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740107945508-f3a2dc64-1081-4c92-95d3-58b252bbe5aa.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740105442126-c30ed795-acdc-488b-9574-2cf68b43b360.png)

+ **Ethnographic analysis**（以太学分析）：观察和记录用户在自然环境中的行为，以了解他们的实际需求。
+ **Debriefing meetings**（汇报会议）：研究人员与团队成员讨论以太学分析的结果，分享观察到的用户需求和行为模式。
+ **Focused ethnography**（重点以太学）：进一步深入特定方面的以太学研究，以获得更详细和具体的用户需求。
+ **Prototype evaluation**（原型评估）：根据以太学分析结果，创建系统原型，并通过用户测试评估原型的有效性和可用性。
+ **Generic system development**（通用系统开发）：在原型评估的基础上，开发通用的系统功能和特性。
+ **System prototyping**（系统原型制作）：不断改进和迭代系统原型，基于用户反馈和观察结果进行调整。

---

##### Ethnography and innovation
 Ethnography is helpful to understand existing systems, but this understanding does not always help with innovation. Innovation is particularly relevant for new product development.  - Ethnography有助于理解现有系统，但这种理解不总是有助于创新，创新尤其与新产品开发相关。

 评论者认为，诺基亚使用以太学发现人们如何使用他们的手机，并在此基础上开发新型号。 而苹果通过彻底的创新（即iPhone），引领了手机行业的革命。这说明在某些情况下，忽略现有使用模式，追求大胆的创新可能会带来更大的突破。  

###### 局限性
However, because of its focus on the end-user, this approach is not effective for 1. <u>discovering broader organizational or domain requirements </u>or  <u>2. for suggesting innovations  </u>

<details class="lake-collapse"><summary id="u3e86634c"><span class="ne-text"> Ethnography适用于Requirements derived from cooperation与其discovering broader organizational requirement有局限性，前后矛盾？</span></summary><p id="ua413b9ff" class="ne-p"><span class="ne-text">不矛盾。前者是合作，通过观察个体与个体间的合作，深入了解这些行为是如何受到彼此活动的影响 - 侧重点在观察个体之间；后者强调整体的视角，缺乏全局视角，无法揭示整个组织层面的需求。</span></p></details>
---

 You therefore have to use ethnography as one of a number of techniques for requirements elicitation.  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740107431172-9ced3a34-e36f-4b88-a84e-48f4bf52954f.png)

---

#### Stories and scenarios
<font style="color:rgb(35,31,32);">People find it easier to relate to</font><u><font style="color:rgb(35,31,32);"> real-life examples </font></u><font style="color:rgb(35,31,32);">than abstract descriptions.</font>

<font style="color:rgb(35,31,32);">                                           Using Stories and scenarios </font>

<font style="color:rgb(35,31,32);">                                                      - </font><font style="color:rgb(35,31,32);">在与利益相关者的交谈中-去获得更加特定的、具体的需求</font>

<font style="color:rgb(35,31,32);">Stories and scenarios 基本上是一样的</font>

##### <font style="color:rgb(35,31,32);">What ?</font>
<font style="color:rgb(35,31,32);">They are a description of </font><u><font style="color:rgb(35,31,32);">how the system can be used for some particular task</font></u><font style="color:rgb(35,31,32);">. They describe what people do, what information they use and produce, and what systems they may use in this process. </font>

##### <font style="color:rgb(35,31,32);">Difference</font>
<font style="color:rgb(35,31,32);">The difference is in the ways that descriptions are structured and in the level of detail presented. </font>

+ <font style="color:rgb(35,31,32);">Stories are written as narrative记叙文 text and present a high-level description of system use; </font>
+ <font style="color:rgb(35,31,32);">Scenarios are usually structured with specific information collected such as inputs and outputs. </font>

<font style="color:rgb(35,31,32);">Stories is effective in setting out the "big picture". Parts of stories can then be developed in more detail and represented as scenarios.</font>

##### <font style="color:rgb(35,31,32);">Scenario</font>
<font style="color:rgb(35,31,32);">A scenario starts with an outline of the interaction相互影响、交流. During the </font>**<font style="color:rgb(35,31,32);">elicitation process</font>**<font style="color:rgb(35,31,32);">, details are added to create a complete description of that interaction相互作用.</font>

---

###### Including
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740109823141-d822c956-0f73-41ce-85ca-c7a8f0eb49f8.png)

1. **场景开始时系统和用户的预期**：

图中提到，在场景开始时，系统和用户会有一定的预期。例如，用户可能希望系统快速响应，而系统则期望用户输入准确的信息。

2. **场景中的正常事件流**：

这个要点描述了在场景中事件的正常流动情况。也就是说，在理想情况下，用户和系统之间的互动是如何进行的，例如用户提交一个表单，系统成功接收并处理。

3. **可能出错的地方及问题处理方法**：

这个要点列出了在场景中可能出现的问题和错误，并描述了系统如何处理这些问题。例如，用户提交的信息有误时，系统如何提示用户进行更正。

4. **同时进行的其他活动**：

这个要点说明了在场景中可能同时进行的其他活动。例如，在用户提交表单的同时，系统可能在后台执行一些数据验证或处理任务。

5. **场景结束时的系统状态**：

这个要点描述了场景结束时系统的状态。例如，用户成功提交信息后，系统会显示确认消息并保存用户的数据。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740109991481-a249fe73-338a-4ba6-b587-669677a6b4c9.png)

---

Sample of scenario and stories

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740110048455-2a7f78b2-f35f-4ea5-981f-a71b95fcec75.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740110132708-1a08382d-d01c-45f7-a641-f5f6801d2fd3.png)

## <font style="color:#213BC0;">五、Summary</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740110438793-838f5a05-9bc4-43a3-b906-ef5c7dd1780e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1740110458573-12f32131-bfe9-4ebe-93e8-49f0f2312af2.png)

---

+ <font style="color:rgb(0,0,0);">需求的重要性：Requirements for a software system set out-安排、制定计划 what the system should do and define constraints on its operation and implementation. -定义对其操作和执行的限制</font>
+ **<font style="color:rgb(0,0,0);">Functional requirements </font>**<font style="color:rgb(0,0,0);">are statements of the services that the system must provide or are descriptions of how some computations-计算指令 must be carried out. - 功能需求是系统必须提供的服务声明或对某些计算指令的描述。  </font>
+ **<font style="color:rgb(0,0,0);">Non-functional requirements </font>**<font style="color:rgb(0,0,0);">often constrain the system being developed and the development process being used. 非功能需求通常限制正在开发的系统及所使用的开发过程。</font>
    - <font style="color:rgb(0,0,0);">They often relate to the emergent properties of the system and therefore apply to the system as a whole. 它们通常与系统的涌现特性相关，因此适用于整个系统。  - 非功能需求通常涉及系统的整体性能、安全性、可靠性等，限制了系统的开发和使用过程。  </font>
+ <font style="color:rgb(0,0,0);">The </font>**<font style="color:rgb(0,0,0);">requirements engineering process </font>**<font style="color:rgb(0,0,0);">is an iterative process that includes requirements elicitation, specification and validation.  需求工程过程是一个迭代过程，包括需求引导、需求规格说明和需求验证。  </font>
+ **<font style="color:rgb(0,0,0);">Requirements elicitation </font>**<font style="color:rgb(0,0,0);">is an iterative process that can be represented as a spiral of activities – requirements discovery, requirements classification and organization, requirements negotiation and requirements documentation.  需求引导是一个可以表示为一系列活动螺旋的迭代过程——需求发现、需求分类和组织、需求协商和需求文档化。  </font>
+ <font style="color:rgb(0,0,0);">You can use a range of techniques for requirements elicitation including interviews and ethnography. User stories and scenarios may be used to facilitate discussions.</font>

