---
title: Chapter2 Software process + Agile Process
attachments:
  - label: PDF
    file: /uploads/chapter-2-software-process-agile-process.pdf
grade: year-2
semester: spring
course: software-engineering
date: 2026-07-19
order: 2
type: note
published: true
---
## Introduction
#### Fundamental activities for <font style="color:#DF2A3F;">every</font> software process
1. _**<font style="color:rgb(35,31,32);background-color:#FBDFEF;">Software specification</font>**__**<font style="color:rgb(35,31,32);">: </font>**_

<font style="color:rgb(35,31,32);">The </font>**<font style="color:rgb(35,31,32);">functionality of the software</font>**<font style="color:rgb(35,31,32);"> and </font>**<font style="color:rgb(35,31,32);">constraints on its operation </font>**<font style="color:rgb(35,31,32);">must be defined.  必须明确软件的功能和操作限制。开发团队需要了解客户的需求，并定义软件应具备的功能、性能要求和操作环境  </font>

2. _**<font style="color:rgb(35,31,32);background-color:#FBDFEF;">Software development</font>**__<font style="color:rgb(35,31,32);"> :</font>_

<font style="color:rgb(35,31,32);">The software to meet the specification must be produced.  在这个阶段，开发团队需要根据规格说明文档开发满足需求的软件  </font>

3. _**<font style="color:rgb(35,31,32);background-color:#FBDFEF;">Software validation</font>**__<font style="color:rgb(35,31,32);background-color:#FBDFEF;">: </font>_

<font style="color:rgb(35,31,32);">The software must be validated to ensure that it does what the customer wants.  在这个阶段，必须验证软件以确保其满足客户的需求 - 做测试。</font>

4. _**<font style="color:rgb(35,31,32);background-color:#FBDFEF;">Software evolution :</font>**_

<font style="color:rgb(35,31,32);">The software must evolve to meet changing customer needs.  在这个阶段，软件必须不断进化以满足客户不断变化的需求  - 修复、更新、适应。</font>

---

> <font style="color:rgb(35,31,32);">These activities are complex activities in themselves, and they include </font>**<font style="color:rgb(35,31,32);">subactivities</font>**<font style="color:rgb(35,31,32);"> such as requirements validation, architectural design, and unit testing. Processes also include other activities, such as software configuration management and project planning that support production activities. </font><u><font style="color:rgb(35,31,32);">When we describe and discuss processes, we usually talk about the activities in these processes</font></u><font style="color:rgb(35,31,32);">, </font>**<font style="color:rgb(35,31,32);">such as specifying a data model and designing a user interface, and the ordering of these activities</font>**
>

<details class="lake-collapse"><summary id="uece1e006"><span class="ne-text" style="font-size: 12px">解释</span></summary><p id="ub3b57350" class="ne-p"><span class="ne-text">软件开发过程非常复杂，包含了一系列技术、协作和管理活动，其总体目标是制定、设计、实现和测试一个软件系统。这些活动包括：</span></p><ul class="ne-ul"><li id="ue4c4a5b2" data-lake-index-type="0"><strong><span class="ne-text">需求验证</span></strong><span class="ne-text">：确保软件需求是正确的、完整的、可行的，这是防止后续开发过程中出现误解和错误的重要步骤。</span></li><li id="u99df1d98" data-lake-index-type="0"><strong><span class="ne-text">架构设计</span></strong><span class="ne-text">：设计软件系统的总体结构，定义各个组件、它们的交互方式以及如何组合在一起以满足需求。</span></li><li id="u923d6623" data-lake-index-type="0"><strong><span class="ne-text">单元测试</span></strong><span class="ne-text">：测试软件的各个独立组件，确保它们在单独运行时能够正常工作。这有助于在开发早期发现和解决错误。</span></li></ul><p id="u28736f69" class="ne-p"><span class="ne-text">除了这些核心活动，还有一些支持性活动非常重要：</span></p><ul class="ne-ul"><li id="ud0048859" data-lake-index-type="0"><strong><span class="ne-text">软件配置管理</span></strong><span class="ne-text">：跟踪和控制软件的变更，确保软件及其组件的不同版本得到妥善管理。</span></li><li id="u033ad3f5" data-lake-index-type="0"><strong><span class="ne-text">项目规划</span></strong><span class="ne-text">：计划完成软件项目所需的时间表、资源和任务，确保项目按计划进行并按时完成。</span></li></ul><p id="ub069de29" class="ne-p"><span class="ne-text">在讨论这些过程时，我们通常会关注具体的活动，如：</span></p><ul class="ne-ul"><li id="u9ffcfb40" data-lake-index-type="0"><strong><span class="ne-text">指定数据模型</span></strong><span class="ne-text">：定义数据在软件中的结构和组织方式。</span></li><li id="ue20f3417" data-lake-index-type="0"><strong><span class="ne-text">设计用户界面</span></strong><span class="ne-text">：创建用户在使用软件时将会看到和互动的视觉元素。</span></li></ul><p id="u2fb2859e" class="ne-p"><span class="ne-text">我们也会考虑这些活动的顺序，因为顺序会影响项目的效率和成功。例如，需求验证通常在早期进行，以确保为后续设计和实施活动打下坚实的基础。</span></p></details>
#### <font style="color:rgb(35,31,32);">How to describing processes ? - Description</font>
+ <font style="color:rgb(35,31,32);">It is important to describe </font>**<font style="color:rgb(35,31,32);">who is involved ,what is produced, and conditions that influence the sequence of activities.</font>**
1. <u><font style="color:rgb(35,31,32);background-color:#FBDE28;">Products or deliverables </font></u><u><font style="color:rgb(35,31,32);">are the </font></u>**<u><font style="color:#2F4BDA;">outcomes</font></u>**<u><font style="color:rgb(35,31,32);"> of a process activity. </font></u><font style="color:rgb(35,31,32);">For example, the outcome of the activity of architectural design may be a model of the software architecture. </font>

**产出物或交付物（Products or Deliverables）**<font style="color:rgb(35,31,32);">：</font>

**定义**<font style="color:rgb(35,31,32);">：</font><font style="color:rgb(35,31,32);background-color:#E6DCF9;">过程活动的结果</font><font style="color:rgb(35,31,32);">。例如，架构设计活动的结果可能是软件架构模型。</font>

**例子**<font style="color:rgb(35,31,32);">：需求文档、设计文档、测试报告等。</font>

2. <u><font style="color:rgb(35,31,32);background-color:#FBDE28;">Roles</font></u><u><font style="color:rgb(35,31,32);"> reflect the responsibilities of the </font></u>**<u><font style="color:#2F4BDA;">people</font></u>**<u><font style="color:rgb(35,31,32);"> involved in the process. </font></u><font style="color:rgb(35,31,32);">Examples of roles are project manager, configuration manager, and programmer. </font>

**角色（Roles）**<font style="color:rgb(35,31,32);">：</font>

**定义**<font style="color:rgb(35,31,32);">：反映参与过程的</font><font style="color:rgb(35,31,32);background-color:#E6DCF9;">人员的职责</font><font style="color:rgb(35,31,32);">。</font>

**例子**<font style="color:rgb(35,31,32);">：项目经理、配置管理人员、程序员等。</font>

3. <font style="color:rgb(35,31,32);background-color:#FBDE28;">P</font><u><font style="color:rgb(35,31,32);background-color:#FBDE28;">re- and postconditions</font></u><u><font style="color:rgb(35,31,32);"> </font></u><font style="color:rgb(35,31,32);">are conditions that must hold before and after a process activity has been enacted or a product produced. For example, before architectural design begins, a precondition may be that the consumer has approved all requirements; after this activity is finished, a postcondition might be that the UML models describing the architecture have been reviewed.</font>

**前置条件和后置条件（Pre- and Postconditions）**<font style="color:rgb(35,31,32);">：</font>

**定义**<font style="color:rgb(35,31,32);">：在一个过程活动开始之前和结束之后必须满足的条件。</font>

**例子**<font style="color:rgb(35,31,32);">：架构设计开始之前的前置条件可能是所有需求已获得客户批准；完成后的后置条件可能是UML模型已被审查。</font>

#### **<font style="color:rgb(0,0,0);">Software process model: </font>**
<details class="lake-collapse"><summary id="u9d920647"><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">An abstract representation of a process. </span></summary><p id="u8eacc6ca" class="ne-p" style="text-indent: 2em"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px"> 过程的抽象表示是一种</span><span class="ne-text" style="color: #DF2A3F; font-size: 13px">简化的、概念性</span><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">的描述，用于表示过程的核心部分和主要步骤。它可以帮助我们理解过程的基本结构和工作原理，而不必关注所有的细节。</span><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">  </span></p></details>
<details class="lake-collapse"><summary id="u9ad1ac5a"><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">Presents a description of a process from some particular perspective. - 特定角度描述过程 </span></summary><p id="ud23914fc" class="ne-p" style="text-indent: 2em"><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px"> </span><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">过程的描述可以从不同的视角进行，这些视角可以是开发人员、项目经理、测试人员等不同角色的角度。不同的视角可以帮助我们更全面地理解过程的各个方面和其对不同角色的影响。  </span></p></details>
<details class="lake-collapse"><summary id="u3ef6fa4d"><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">A </span><strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">structured set</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px"> of activities required to develop a software system. -  发展软件系统所需的</span><strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">结构化活动集</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">  </span></summary><p id="u3cacc6f4" class="ne-p" style="text-indent: 2em"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px"> 发软件系统所需的结构化活动集是指一系列有组织的、系统化的活动，这些活动按照一定的顺序和规则进行，以确保软件系统的成功开发和交付。这些活动通常包括需求分析、设计、编码、测试、部署和维护等。</span><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">  </span></p></details>
#### <font style="color:rgb(0,0,0);">Plan-driven (Waterfall) and agile processes</font>
+ Plan-driven processes : in advance
+ Agile processes : incremental planning and easier to change.

实际开发中两者相结合，没有绝对的对与错



## 一、Software process models - framework
> <font style="color:rgb(35,31,32);">A software process model (sometimes called a Software Development Life Cycle or SDLC model) is a simplified representation of a software process.</font>
>
> <font style="color:rgb(35,31,32);">.Each process model represents a process from a particular perspective and thus only provides partial information about that process.</font>
>
> <font style="color:rgb(35,31,32);">These </font>**<font style="color:rgb(35,31,32);">generic models</font>**<font style="color:rgb(35,31,32);"> are high-level, abstract descriptions of software processes that can be used to explain different approaches to software development.</font>
>

#### <font style="color:rgb(35,31,32);">常见的通用process model：</font>
1. _**<font style="color:rgb(35,31,32);">The waterfall model </font>**__<font style="color:rgb(35,31,32);">：</font>_<font style="color:rgb(35,31,32);">This takes the fundamental process activities of </font>**<font style="color:rgb(35,31,32);">specification, development, validation, and evolution</font>**<font style="color:rgb(35,31,32);"> and represents them as separate process phases such as </font>**<font style="color:#DF2A3F;">requirements specification, software design, implementation, and testing.</font>**

:::color3
<font style="color:rgb(0,0,0);">Plan-driven model : separate and distinct phases of specification and development.</font>

:::

2. _<font style="color:rgb(35,31,32);">I</font>__**<font style="color:rgb(35,31,32);">ncremental development </font>**__<font style="color:rgb(35,31,32);">： </font>_<font style="color:rgb(35,31,32);">This approach interleaves交织 the activities of specification, development, and validation. The system is developed as a series of versions </font>**<font style="color:rgb(35,31,32);">(increments)</font>**<font style="color:rgb(35,31,32);">, with </font><u><font style="color:rgb(35,31,32);">each version adding functionality to the previous version.</font></u><font style="color:rgb(35,31,32);"> </font><font style="color:rgb(35,31,32);">系统是作为一系列版本（增量）开发的，每个版本都在前一个版本的基础上添加功能。</font>

:::color3
<font style="color:rgb(0,0,0);">Specification, development and validation are interleaved. May be plan-driven or agile.</font>

:::

3. _**<font style="color:rgb(35,31,32);">Integration and configuration </font>**__<font style="color:rgb(35,31,32);">： </font>_<font style="color:rgb(35,31,32);">This approach relies on the availability可用性 of </font>**<font style="color:rgb(35,31,32);">reusable</font>**<font style="color:rgb(35,31,32);"> components or systems. The system development process focuses on configuring these components for use in a new setting and integrating them into a system.</font>

:::color3
<font style="color:rgb(0,0,0);">The system is assembled 组装 from existing configurable components. May be plan-driven or agile.</font>

:::

<font style="color:rgb(35,31,32);">The majority of practical software processes are based on a general model but often incorporate 包含 features of other models.</font>

---

#### <font style="color:rgb(35,31,32);">RUP</font>
<font style="color:rgb(35,31,32);">已经进行了很多尝试去develop一个universal的process models that 利用所有general model ( general model 根据其特点反应整个开发的部分功能、呈现部分视角）</font>

<font style="color:rgb(35,31,32);">One of the best known of these universal models is the Rational Unified Process (RUP) ，the </font>**<font style="color:rgb(35,31,32);">RUP</font>**<font style="color:rgb(35,31,32);"> has been adopted by some large software companies (notably IBM), but it has not gained widespread acceptance..</font>

---

### The waterfall model
##### 各步骤详解
<!-- 这是一张图片，ocr 内容为：REQUIREMENTS DEFINITION SYSTEM AND SOFTWARE DESIGN IMPLEMENTATION AND UNIT TESTING INTEGRATION AND SYSTEM TESTING OPERATION AND FIGURE 2.1 THE MAINTENANCE WATERFALL MODEL -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737212112170-95165407-4b30-455f-9463-a3e8f162ec91.png)

> <font style="color:rgb(35,31,32);">The waterfall mode was derived from engineering process models used in large military systems engineering.</font>
>
> <font style="color:rgb(35,31,32);">.Because of the cascade from one phase to another, this model is known as the waterfall model or software life cycle.</font>
>

由于每个阶段<u>依次推进</u>，该模型被称为**瀑布模型**或软件生命周期。

瀑布模型是一个**<font style="color:#DF2A3F;">计划驱动</font>**的过程。 _ "__<font style="color:rgb(35,31,32);">Plan-driven process"</font>_

瀑布模型的各个阶段直接反映了基本的软件开发活动：

1️⃣ **需求分析和定义（****<font style="background-color:#FBDE28;">Requirements analysis and definition</font>****）**  
系统的服务、约束和目标通过与系统用户协商来确定。然后，详细定义这些内容，并作为系统规格说明书。

2️⃣ **系统与软件设计（****<font style="background-color:#FBDE28;">System and software design</font>****）**  
系统设计过程将需求分配到硬件或软件系统中。它建立了整体系统架构。软件设计包括识别和描述基本的软件系统抽象及其关系。<font style="color:rgb(35,31,32);">Software design involves identifying and describing the fundamental software system abstractions and their relationships.</font>

3️⃣ **实现与单元测试（****<font style="background-color:#FBDE28;">Implementation and unit testing</font>****）**  
在这一阶段，软件设计被实现为一组程序或程序单元。单元测试的目的是验证每个单元是否符合其规格。

4️⃣ **集成与系统测试（****<font style="background-color:#FBDE28;">Integration and system testing</font>****）**  
单独的程序单元被集成并作为一个完整的系统进行测试，以确保软件需求得到满足。测试完成后，软件系统交付给客户。

5️⃣ **运行与维护（****<font style="background-color:#FBDE28;">Operation and maintenance</font>****）**  
通常，这是最长的生命周期阶段-<font style="color:#DF2A3F;">the longest life-cycle phase</font>。系统被安装并投入实际使用。维护包括修正生命周期早期阶段未发现的错误、改进系统单元的实现，以及在发现新需求时增强系统的服务。<font style="color:rgb(35,31,32);">Maintenance involves correcting errors that were not discovered in earlier stages of the life cycle, improving the implementation of system units, and enhancing the system’s services as new requirements are discovered.</font>

##### 问题缺点 | **Main Drawback of the Waterfall Model**
+ **The main drawback of the waterfall model is the difficulty of accommodating change after the process is underway 进行.**  
瀑布模型的主要缺点是，在过程进行中难以适应需求的变化。
+ **In principle, a phase has to be complete before moving onto the next phase.**  
原则上，一个阶段必须完成后才能进入下一个阶段。

> <font style="color:rgb(35,31,32);">In principle, the</font>**<font style="color:rgb(35,31,32);"> result </font>**<font style="color:rgb(35,31,32);">of each phase in the waterfall model is </font>**<font style="color:rgb(35,31,32);">one or more documents</font>**<font style="color:rgb(35,31,32);"> that are approved ( 批准“signed off”). The following phase should not start until the previous phase has finished.</font>
>
> + **硬件开发**<font style="color:rgb(35,31,32);">：由于涉及到高昂的制造成本，严格的顺序开发对硬件开发来说是合理的。</font>
> + **软件开发**<font style="color:rgb(35,31,32);">：在软件开发中，各个阶段往往是重叠的，并且相互传递信息。例如，在设计阶段可能会发现需求问题，而在编码阶段可能会发现设计问题。</font>
> + **非线性模型**<font style="color:rgb(35,31,32);">：软件开发过程实际上并不是一个简单的线性模型，而是涉及各个阶段之间的反馈。</font>
> + **动态文档**：随着新信息在过程阶段中的出现，之前阶段产生的文档应该进行修改以反映所需的系统更改。<font style="color:rgb(35,31,32);">As new information emerges in a process stage, the documents produced at previous stages should be </font>**<font style="color:rgb(35,31,32);">modified to reflect the required system changes</font>**<font style="color:rgb(35,31,32);">. </font>
>     - <font style="color:rgb(35,31,32);">For example, if it is discovered that a requirement is too expensive to implement, the requirements document should be changed to remove that requirement. However,</font><font style="color:rgb(35,31,32);background-color:#E8F7CF;"> this requires customer approval and delays the overall development process</font><font style="color:rgb(35,31,32);">.</font>
>

具体来说：

**1.****<font style="background-color:#FBDE28;">Inflexible partitioning </font>****of the project into distinct stages makes **_**it difficult to respond to changing customer requirements.**_  
将项目划分为不同阶段的刚性结构使得难以应对客户需求的变化。

+ **Therefore, this model is only appropriate when the requirements are well-understood and changes will be fairly limited during the design process.**  
因此，只有当需求非常明确并且在设计过程中的变化非常有限时，该模型才适用。
+ **Few business systems have stable requirements.**  
很少有业务系统能够维持稳定的需求。

**2.The waterfall model is mostly used for large systems engineering projects where a system is developed at several sites.**  
瀑布模型主要用于在多个地点开发的大型系统工程项目。

+ **In those circumstances, the plan-driven nature of the waterfall model helps coordinate the work.**  
在这种情况下，瀑布模型的计划驱动特性有助于协调工作。

> <font style="color:rgb(35,31,32);">Th</font><font style="color:rgb(35,31,32);">e waterfall model is not the right process model in situations where </font>**<font style="color:rgb(35,31,32);">informal team communication is possible and software </font>****<font style="color:#601BDE;">requirements change quickly</font>****<font style="color:rgb(35,31,32);">.</font>**<font style="color:rgb(35,31,32);"> Iterative development and agile methods are better for these systems.</font>
>

### 增量开发 (Incremental Development)  
#### 各步骤详解
<!-- 这是一张图片，ocr 内容为：CONCURRENT ACTIVITIES INITIAL SPECIFICATION VERSION INTERMEDIATE OUTLINE DEVELOPMENT VERSIONS DESCRIPTION FINAL VALIDATION VERSION FIGURE 2.2 INCREMENTAL DEVELOPMENT -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737218639822-8a075f12-b1ba-4142-b071-ad3efd211489.png)

整个过程从初步的“**概要描述 (Outline description)**”开始，通过三个并发活动**（需求规格说明 (Specification)**、**开发 (Development)**、**验证 (Validation)**交替进行，生成多个版本。  

通过并发活动的交替运作，依次生成**初始版本 (Initial version)**、**中间版本 (Intermediate versions)**，最终形成完整的**最终版本 (Final version)**。  

> <font style="color:rgb(35,31,32);">Incremental development is based on the idea of </font>
>
> **<font style="color:rgb(35,31,32);">Developing an initial implementation, </font>**<font style="color:rgb(35,31,32);">开发初始实现</font>
>
> **<font style="color:rgb(35,31,32);">Getting feedback from users and others, </font>**<font style="color:rgb(35,31,32);">收集用户及其他人的反馈</font>
>
> **<font style="color:rgb(35,31,32);">Evolving the software through several versions until the required system has been developed</font>****<font style="color:rgb(35,31,32);">. </font>**<font style="color:rgb(35,31,32);">通过多个版本不断改进软件，直到最终开发出所需系统</font>
>

课本知识：

+ 某种形式的增量开发是目前应用系统和软件产品开发中**<font style="color:#601BDE;">最常用</font>**的方法。这种方法既可以是计划驱动的（ plan-driven）、敏捷的（agile），或更常见的是两者的混合。
    - 在计划驱动的方法中，系统增量会被提前确定；而如果采用敏捷方法，早期增量会被确定，后续增量的开发则取决于进展和客户优先级。  

> <font style="color:rgb(35,31,32);">Incremental software development, which is a fundamental part of </font>**<font style="color:rgb(35,31,32);">agile development methods</font>**<font style="color:rgb(35,31,32);">, is better than a waterfall approach for systems whose requirements </font>_<font style="color:rgb(35,31,32);">are likely to change</font>_<font style="color:rgb(35,31,32);"> during the development process.</font>
>

+ **增量开发是敏捷开发方法的基础组成部分**，<u>对于需求可能在开发过程中发生变化的系统来说，这种方法比瀑布模型更适用</u>。这种情况在大多数业务系统和软件产品中都存在。增量开发反映了我们解决问题的方式：我们很少提前得出一个完整的解决方案，而是通过一系列步骤逐步靠近解决方案，并在发现错误时进行回溯。通过增量方式开发软件，可以更便宜且更容易地在开发过程中进行修改。  

<details class="lake-collapse"><summary id="ue86c8180"><strong><span class="ne-text" style="font-size: 14px">早期评估</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 14px">：每个系统的增量或版本都包含一些客户需要的功能。通常，系统的早期增量包含最重要或最紧急需要的功能。这意味着客户或用户可以在开发的相对早期阶段评估系统是否满足需求</span><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">。</span></summary><p id="u26c6509c" class="ne-p"><span class="ne-text" style="color: rgb(35,31,32); font-size: 14px">Generally, the </span><strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 14px">early increments</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 14px"> of the system include the </span><strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 14px">most important</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 14px"> or most urgently required functionality. This means that the customer or user can evaluate the system at a relatively early stage in the development to see if it delivers what is required. </span></p></details>
<details class="lake-collapse"><summary id="u580f65ed"><strong><span class="ne-text">快速反馈</span></strong><span class="ne-text">：如果系统没有达到预期要求，只需更改当前的增量，并为后续增量定义新的功能。  </span></summary><p id="u591f3c7e" class="ne-p"><span class="ne-text" style="color: rgb(35,31,32); font-size: 16px">If not, then only the current increment has to be changed and, possibly, new functionality defined for later increments. </span></p></details>
#### Incremental development benefits: (<font style="color:rgb(35,31,32);">3 Major</font><font style="color:#DF2A3F;"> advantages</font><font style="color:rgb(35,31,32);"> over the waterfall model)</font>
1. **The cost of accommodating changing customer requirements is reduced.**  
<font style="background-color:#E8F7CF;">适应客户需求变化的成本降低。</font>
    - **The amount of analysis and documentation that has to be redone is much less than is required with the waterfall model.**  
需要重新进行的分析和文档工作的量远少于瀑布模型中要求的量。
2. **It is easier to get customer feedback on the development work that has been done.** 更容易获得对已完成开发工作的客户反馈。
    - **Customers can comment on demonstrations of the software and see how much has been implemented.** 客户可以对软件演示提出意见，并了解已经实现了多少功能。
3. **More rapid delivery and deployment of useful software to the customer is possible.** 可以更快速地将有用的软件交付和部署给客户。
    - **Customers are able to use and gain value from the software earlier than is possible with a waterfall process.** 客户能够比使用瀑布流程更早地使用软件并从中获得价值。

#### 问题缺点 problems:
**增量开发的问题：**

1. **The process is not visible.**  过程不可见。
    - **Managers need regular deliverables to measure progress. If systems are developed quickly, it is not cost-effective to produce documents that reflect every version of the system.**  
管理者需要通过定期的可交付成果来衡量进度。如果系统开发速度很快，生成反映每个版本系统的文档在成本上并不划算。

> + **瀑布模型**：在瀑布模型中，每个阶段结束时通常会生成详细的文档，这些文档用于记录阶段成果和为下一阶段提供输入。因此，管理者可以通过这些文档来跟踪和管理进度。
>

> + **增量开发**：虽然增量开发也会生成文档，但由于其快速迭代和不断变化的特性，文档可能没有瀑布模型那样详细和系统化。这会导致管理者难以像瀑布模型那样清晰地看到整个项目的进展。
>

2. **System structure tends to degrade as new increments are added.**  
随着新增量的加入，系统结构往往会退化。
    - **Unless time and money is spent on****<font style="background-color:#CEF5F7;"> refactoring</font>**** to improve the software, regular change tends to corrupt its structure. Incorporating further software changes becomes increasingly difficult and costly.**  
除非投入时间和资金对软件进行重构以改进其结构，否则频繁的变更往往会破坏系统结构。集成更多的软件更改变得越来越困难且成本高昂。

> <font style="color:rgb(35,31,32);">System structure tends to degrade 减低 as new increments are added</font>_<font style="color:rgb(35,31,32);">.</font>_<font style="color:rgb(35,31,32);"> Regular change leads to messy code as new functionality 新功能 is added in whatever way is possible. It becomes increasingly difficult and costly to add new features to a system. To reduce structural degradation and general code messiness, agile methods suggest that you should regularly refactor (improve and restructure) the software. 系统结构的退化。为了应对这一问题，敏捷开发方法建议定期重构代码，以保持系统的健康和可维护性。  </font>
>

<font style="color:rgb(35,31,32);"> 在大型、复杂、长生命周期的系统中，增量开发的挑战在于需要一个稳定的框架和清晰的职责分工。这些都需要在开发开始前进行详细的规划，而不是在开发过程中逐步演进。  </font>

---

###  集成与配置（Integration and configuration）
+ <font style="color:rgb(0,0,0);">Based on software </font><font style="color:rgb(0,0,0);background-color:#FBDE28;">reuse </font><font style="color:rgb(0,0,0);">where systems are integrated</font>**<font style="color:rgb(0,0,0);"> from existing components</font>**<font style="color:rgb(0,0,0);"> or application systems. </font>
+ <font style="color:rgb(0,0,0);">Sometimes called COTS (Commercial-off-the-shelf) systems. </font>
+ <font style="color:rgb(0,0,0);">Reused elements may be configured to adapt their behavior and functionality to a user requirements. </font>
+ <font style="color:rgb(0,0,0);">Reuse is now the standard approach for building many types of business system.</font>

大多数软件项目中，都会存在一些软件复用的情况。这通常发生在项目团队成员知晓或寻找与需求类似的代码时。他们找到这些代码，根据需要进行修改，并将其与他们开发的新代码集成。  

<font style="color:rgb(35,31,32);">. Reuse-oriented approaches rely on a base of reusable software components and an integrating framework for the composition of these components</font>

#### 以下三种类型的软件组件经常被复用：
1. **独立应用系统（Stand-alone application systems）**  
这些系统经过配置后可以在特定环境中使用。它们是具有多种功能的通用系统，但需要根据特定应用进行调整。
2. **对象集合（Collections of objects）**  
这些对象被开发为组件或包，以便集成到组件框架中，例如 Java Spring 框架（Wheeler 和 White 2013）。
3. **Web 服务（Web services）**  
根据服务标准开发的服务，可通过互联网远程调用。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737256925457-d5df5499-bf24-4411-aacc-6d354124571a.png)

#### 基于集成和配置的复用开发的一般过程模型。该过程的阶段包括：
1. **需求规格说明（Requirements specification）**  
系统的初始需求被提出。这些需求不需要详细展开 <font style="color:rgb(35,31,32);">elaborated in detail</font>，但应包括对基本需求和期望系统功能的简要描述。
2. **软件发现与评估（Software discovery and evaluation）**  
根据软件需求的概要，寻找能够提供所需功能的组件和系统。评估候选组件和系统，以确定它们是否满足基本需求以及是否适合在系统中使用。
3. **需求细化（Requirements refinement）**  
在这一阶段，利用已发现的可复用组件和应用的信息对需求进行细化。需求被修改以反映可用组件，同时系统规格说明被重新定义。如果修改不可行，则可能需要重新进行组件分析以寻找替代解决方案。
4. **应用系统配置（Application system configuration）**  
如果有符合需求的现成应用系统，则可以配置其用于创建新系统。
5. **组件适配与集成（Component adaptation and integration）**  
如果没有现成系统，则可以修改单个可复用组件并开发新的组件。然后，将这些组件集成以创建系统。

#### 课本针对软件复用的优缺点总结：
基于配置和集成的复用导向软件工程，具有减少需开发软件量的明显优势，从而降低了成本和风险。这种方法通常也会加快软件的交付速度。然而，需求妥协是不可避免的，这可能导致系统无法满足用户的实际需求。此外，由于复用组件的新版本不受使用它们的组织控制，因此对系统演进的某些控制也会丧失。  

## 二、Process activities
### Process Activities
> <font style="color:rgb(35,31,32);background-color:#FBDFEF;">Real software processes are interleaved sequences of</font>**<font style="color:rgb(35,31,32);background-color:#FBDFEF;"> technical, collaborative, and managerial activities</font>**<font style="color:rgb(35,31,32);background-color:#FBDFEF;"> with the </font><u><font style="color:rgb(35,31,32);background-color:#FBDFEF;">overall goal of specifying, designing, implementing, and testing a software system</font></u>
>
> <font style="color:rgb(35,31,32);">Technical works: coding,debugging</font>
>
> <font style="color:rgb(35,31,32);">Collaboraive: meetings and discussions.</font>
>
> <font style="color:rgb(35,31,32);">Management tasks: Scheduling and progress tracking...</font>
>

**规范（Specification）、开发（Development）、验证（Validation）和演化（Evolution）这四个基本过程活动在不同的开发过程中以不同的方式组织起来。** 

<font style="color:rgb(0,0,0);background-color:#FBDFEF;">The four basic process activities of </font>**<font style="color:rgb(0,0,0);background-color:#FBDFEF;">specification, development, validation and evolution </font>**<font style="color:rgb(0,0,0);background-color:#FBDFEF;">are organized differently in different development processes.</font>

+ 瀑布模型中，它们是按顺序组织的. <font style="color:rgb(35,31,32);">.</font><font style="color:rgb(35,31,32);background-color:#FBDE28;"> In the waterfall model, they are organized in sequence</font>
+ 在增量开发中，它们是交错进行的。 <font style="color:rgb(35,31,32);background-color:#FBDE28;">In incremental development they are interleaved</font>

这些活动的执行方式取决于所开发软件的类型、开发人员的经验和能力，以及开发软件的组织类型。  

<font style="color:rgb(35,31,32);">H</font><font style="color:rgb(35,31,32);">ow these activities are carried out depends on the type of software being developed, the experience and competence of the developers, and the type of organization developing the software.</font>

### Software specification
#### Definition
:::success
<font style="color:rgb(0,0,0);">The process of establishing what services are required and the constraints on the system's operation and development.</font>

:::

**软件需求规格说明(****<font style="color:rgb(35,31,32);">Software specification)</font>**或**需求工程(****<font style="color:rgb(35,31,32);">requirements engineering</font>****)**是理解和定义系统需要提供哪些服务以及识别系统操作和开发限制的过程。  

> <font style="color:rgb(35,31,32);">Software specification or requirements engineering is the process of understanding and defining </font><font style="color:rgb(35,31,32);background-color:#E8F7CF;">what services are required from the system and identifying the constraints on the system's operation and development.</font>
>
> <font style="color:rgb(35,31,32);">Requirements engineering is a particularly critical stage of the software process, as mistakes made at this stage inevitably 不可避免地 lead to later problems in the system design and implementation.</font>
>

在需求工程过程开始之前，公司可能会进行**可行性研究或市场研究 feasibility or marketing study**，以评估是否需要该软件或市场是否有需求，并判断开发该软件在技术上和财务上是否可行。

可行性研究 Feasibility studies 是一种短期 short-term且相对廉价的研究，用以决定是否需要进行更详细的分析。  

The requiements enginerring process amis to produce an agreed requirement document that specifies a system satisfying stakeholder requirements. <font style="color:rgb(42, 43, 46);">指定一个满足涉众需求的系统。</font>

> <font style="color:rgb(35,31,32);">Requirements are usually presented at two levels of detail. End-users and customers need a high-level statement of the requirements; system developers need a more detailed system specification.</font>
>

<!-- 这是一张图片，ocr 内容为：REQUIREMENTS ELICITATION AND ANALYSIS REQUIREMENTS SPECIFICATION REQUIREMENTS VALIDATION SYSTEM DESCRIPTIONS USER AND SYSTEM REQUIREMENTS FIGURE 2.4 THE REQUIREMENTS REQUIREMENTS DOCUMENT ENGINEERING PROCESS -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737257937461-0dcb476b-aa6c-4834-99b8-40b19d892821.png)

#### Requirements engineering process
在需求工程过程中有三个主要活动：

1. **需求引导与分析（****<font style="background-color:#E7E9E8;">Requirements elicitation and analysis）</font>**  
这是通过观察现有系统、与潜在用户和采购方讨论、任务分析等方法获取系统需求的过程。这可能涉及开发一个或多个系统模型和原型，以帮助理解需要明确的系统。

<font style="color:rgb(0,0,0);background-color:#E7E9E8;">What do the system stakeholders require or expect from the system?</font>

2. **需求规格说明（****<font style="background-color:#E7E9E8;">Requirements specification）</font>**  
需求规格说明是将需求分析过程中收集的信息转化为定义需求集的文档的活动。文档中可能包括两种类型的需求：<font style="color:rgb(0,0,0);background-color:#E7E9E8;">Defining the requirements in detail.</font>
    - 用户需求：针对客户和最终用户的系统需求的抽象描述；
    - 系统需求：对将提供的功能的更详细描述。
3. **需求验证（****<font style="background-color:#E7E9E8;">Requirements validation）</font>**  
该活动检查需求是否真实、一致且完整。在这个过程中，不可避免地会发现需求文档中的错误，随后需要修改以纠正这些问题。<font style="color:rgb(0,0,0);background-color:#E7E9E8;">Checking the validity 有效性 of the requirements.</font>

---

需求分析在定义和规格说明过程中持续进行，并且在整个过程中不断发现新的需求。因此，分析、定义和规格说明的活动是交错进行的。

在_敏捷方法(__<font style="color:rgb(35,31,32);">agile methods</font>__) _中，需求规格说明不是一个独立的活动，而是被视为系统开发的一部分。需求通常根据用户优先级被非正式地为系统的每个增量指定，而这些需求的引导则来自于用户，或者来自与开发团队紧密合作的用户。

### Software design and implementation
:::warning
+ **<font style="color:rgb(0,0,0);">Software design –</font>**<font style="color:rgb(0,0,0);">Design a software structure that realizes the specification. </font>

:::

:::warning
+ **<font style="color:rgb(0,0,0);">Implementation –</font>**<font style="color:rgb(0,0,0);">Translate this structure into an executable program.</font>

:::

软件开发的实施阶段是<u>指开发一个可交付给客户使用的 </u>_<u>可执行系统 </u>_<u>的过程。</u>

<font style="color:rgb(35,31,32);">The process of developing an </font>_<font style="color:rgb(35,31,32);">executable system</font>_<font style="color:rgb(35,31,32);"> for delivery to the customer.</font>

有时这包括将软件设计和编程作为独立活动。然而，如果采用<u>敏捷开发方法agile approach</u>，设计 design 和实现 implementation是交织在一起的，过程中**不产生**<u>正式的设计文档</u>。当然，软件仍然需要设计，但设计通常是非正式地记录在白板和程序员的笔记本中。

---

#### Software design
**软件设计(Software design)**是<u>对所需实现的</u>**<u>软件结构的描述</u>**<u>，包括系统使用的数据模型和结构、系统组件之间的接口以及有时使用的算法</u>。

> <font style="color:rgb(35,31,32);">A software design is</font>**<font style="color:rgb(35,31,32);"> a description of the structure of the software to be implemented, </font>**<font style="color:rgb(35,31,32);">the data models and structures used by the system, the interfaces between system components and, sometimes, the algorithms used.</font>
>

设计者不会立即得出一个完成的设计，而是分阶段开发设计。他们在开发过程中不断补充细节，同时频繁回溯以修改早期设计。

##### 设计过程的一般模型: General Model
展示了设计过程的输入、设计活动以及设计输出。这些**<u>设计过程活动</u>**既**相互交织又彼此依赖**。关于设计的新信息不断被生成，并且会影响先前的设计决策。因此，设计返工是不可避免的。 <!-- 这是一张图片，ocr 内容为：DESIGN INPUTS PLATFORM SOFTWARE DATA INFORMATION DESCRIPTIONS REQUIREMENTS DESIGN ACTIVITIES ARCHITECTURAL INTERFACE DESIGN DESIGN COMPONENT DATABASE SELECTION DESIGN AND DESIGN DESIGN OUTPUTS INTERFACE COMPONENT DATABASE SYSTEM FIGURE 2.5 A GENERAL SPECIFICATION DESIGN DESCRIPTIONS ARCHITECTURE MODEL OF THE DESIGN PROCESS -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737258409727-18abf636-4ab8-400c-b774-7ce08b3ec2cd.png)

##### Design activities：
信息系统设计过程中可能包含的四种活动：

1. **架构设计 (Architectural design)**：<font style="color:rgb(0,0,0);">where you identify the overall structure of the system, the principal components (subsystems or modules), their relationships and how they are distributed.</font>

> 在此阶段，确定系统的整体结构，主要组件（有时称为子系统或模块）、它们之间的关系以及它们的分布方式。
>

2. **数据库设计 (Database design)**<font style="color:rgb(0,0,0);">：Where you design the system data structures and how these are to be represented in a database.</font>

> 设计系统的数据结构以及如何在数据库中表示这些数据。同样，工作的重点取决于是否要重用现有数据库或创建新数据库。
>

3. **接口设计 (Interface design)**：<font style="color:rgb(0,0,0);">where you define the interfaces between system components</font><font style="color:rgb(0,0,0);">.</font>

> 定义系统组件之间的接口。此接口规范必须是明确的。有了精确的接口，一个组件可以被其他组件使用，而无需了解它是如何实现的。一旦接口规范达成一致，组件可以分别进行设计和开发。
>

4. **<font style="color:rgb(0,0,0);">组件选择与设计 (Component selection and design)：</font>**<font style="color:rgb(0,0,0);">where you search for reusable components. If unavailable, you design how it will operate.</font>

> 在此阶段，搜索可复用的组件，如果没有合适的组件可用，则设计新的软件组件。在这一阶段，设计可能是一个简单的组件描述，具体的实现细节留给程序员完成。或者，它可能是一系列修改以便将其转换为可复用组件，或者是一份使用UML表示的详细设计模型。设计模型随后可以用于自动生成实现。
>

这些活动会导致**设计输出(Design outputs)**，如图2.5所示。<font style="color:rgb(35,31,32);">The outputs of the design process are </font>**<font style="color:rgb(35,31,32);">detailed design document</font>**<font style="color:rgb(35,31,32);">s setting out precise and accurate descriptions of the system. </font>对于关键系统，设计过程的输出是**详细的设计文档**，这些文档准确描述了系统。如果采用**基于模型**的方法（详见Chap5），设计输出通常是<u>设计图 Design diagrams</u>。如果采用**敏捷开发方法**（<font style="color:rgb(35,31,32);">agile methods</font>），设计过程的输出可能不会是单独的规范文档，而可能直接体现在程序代码中。

---

#### Software implementation
<font style="color:rgb(35,31,32);">The development of a program to implement a system follows naturally from system design. It is more common for design and program development to be interleaved.</font>

<font style="color:rgb(35,31,32);">Software development tools may be used to generate a skeleton program from a design.</font>

**生成骨架程序**<font style="color:rgb(35,31,32);">：软件开发工具可以从设计生成一个骨架程序。这个骨架程序包含定义和实现接口的代码。</font>

**添加细节**<font style="color:rgb(35,31,32);">：开发人员只需在这个骨架基础上添加各个程序组件的具体操作细节即可。</font>

---

+ <font style="color:rgb(0,0,0);">The software is implemented either by </font>**<font style="color:rgb(0,0,0);">developing a program</font>**<font style="color:rgb(0,0,0);"> or programs or by</font>**<font style="color:rgb(0,0,0);"> configuring an application system. </font>**

<details class="lake-collapse"><summary id="u0489a98f"><span class="ne-text">配置应用</span></summary><ul class="ne-ul"><li id="ub2ca442c" data-lake-index-type="0"><strong><span class="ne-text">选择合适的应用系统</span></strong><strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></strong><span class="ne-text" style="color: rgb(0,0,0)">选择一个可以满足大部分需求的现成软件系统。</span></li><li id="uf01b4794" data-lake-index-type="0"><strong><span class="ne-text">配置</span></strong><strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></strong><span class="ne-text" style="color: rgb(0,0,0)">通过系统设置和配置来定制软件，使其适应特定的业务需求。例如，设置用户权限、调整工作流程等</span><strong><span class="ne-text" style="color: rgb(0,0,0)">。</span></strong></li><li id="ufb075efb" data-lake-index-type="0"><strong><span class="ne-text">定制开发</span></strong><strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></strong><span class="ne-text" style="color: rgb(0,0,0)">如果现有系统无法完全满足需求，可能需要进行一定的定制开发，例如编写插件或扩展模块</span><strong><span class="ne-text" style="color: rgb(0,0,0)">。</span></strong></li><li id="u8e6943f1" data-lake-index-type="0"><strong><span class="ne-text">集成</span></strong><strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></strong><span class="ne-text" style="color: rgb(0,0,0)">将配置好的系统与其他现有系统进行集成，确保数据流和业务流程的连续性。</span></li><li id="u1a855506" data-lake-index-type="0"><strong><span class="ne-text">测试和部署</span></strong><strong><span class="ne-text" style="color: rgb(0,0,0)">：</span></strong><span class="ne-text" style="color: rgb(0,0,0)">对配置好的系统进行测试，确保其符合预期，然后将其部署到生产环境中。</span></li></ul></details>
+ **<font style="color:rgb(0,0,0);">Design and implementation</font>**<font style="color:rgb(0,0,0);"> are </font>**<font style="color:rgb(0,0,0);">interleaved</font>**<font style="color:rgb(0,0,0);"> activities for most types of software system. </font>
+ <font style="color:rgb(0,0,0);">Programming is an individual activity with no standard process. </font>
+ **<font style="color:rgb(0,0,0);">Debugging</font>**<font style="color:rgb(0,0,0);"> is the activity of finding program faults and correcting these faults</font>

> **<font style="color:rgb(35,31,32);">Testing </font>**<font style="color:rgb(35,31,32);">establishes the existence of defects缺点. </font>**<font style="color:rgb(35,31,32);">Debuggin</font>**<font style="color:rgb(35,31,32);">g is concerned with locating and correcting these defects. 定位并纠正</font>
>

<details class="lake-collapse"><summary id="u1ddba10c"><span class="ne-text" style="font-size: 13px">Debugging</span></summary><p id="ucdf94ae4" class="ne-p"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">Interactive debugging tools, which show the </span><strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">intermediate values of program variables and a trace of the statements executed</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">, are usually used to support the debugging process.</span></p><ul class="ne-ul"><li id="ua7e54450" data-lake-index-type="0"><strong><span class="ne-text">显示变量的中间值</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">：调试工具可以在程序运行时显示变量的当前值，帮助开发人员了解变量在不同阶段的变化。</span></li><li id="u257534b7" data-lake-index-type="0"><strong><span class="ne-text">语句跟踪</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">：调试工具可以记录和显示程序执行的每一条语句，帮助开发人员追踪程序的执行路径和逻辑。</span></li></ul></details>
### Software validation  
**软件验证（Software validation）**，或者更广义上的**“验证与确认”（Verification and Validation，简称V&V）**，旨在证明<u>系统既符合其规范要求，也满足系统客户的期望</u><u> </u><font style="color:rgb(35,31,32);">Conforms 符合 to its specification and meets the expectations of the system customer</font><font style="color:rgb(35,31,32);">.</font>。

+ **<font style="color:#2F4BDA;">Verification and validation </font>**<font style="color:rgb(0,0,0);">(V & V) is intended to show that a system conforms to its specification and meets the requirements of the system customer</font>

**程序测试（Program Testing）**是执行验证的主要技术 <u>The principal validation technique</u>，即通过模拟测试数据运行系统。验证还可以包括在软件过程的每个阶段（从用户需求定义到程序开发）的检查和审查。然而，**大部分验证与确认的时间和精力都花费在程序测试上。  **

+ <font style="color:rgb(0,0,0);">Validation involves to check and review processes and system testing.</font>
+ **<font style="color:rgb(0,0,0);">System testing</font>**<font style="color:rgb(0,0,0);"> involves executing the system with </font>_<font style="color:rgb(0,0,0);">test cases</font>_<font style="color:rgb(0,0,0);"> that are derived from the </font>_<font style="color:rgb(0,0,0);">specification of the real data</font>_<font style="color:rgb(0,0,0);"> to be processed by the system. -- specification" 指的是对系统要处理的真实数据的详细描述或说明。 </font>
+ **<font style="color:#2F4BDA;">Testing</font>**<font style="color:rgb(0,0,0);"> is </font><font style="color:#2F4BDA;">the most commonly used V & V activity.</font>

除非是小型程序，系统不应该作为单一的、整体化的单元进行测试。**图2.6**展示了一个包含三个阶段的测试过程：首先对系统组件单独测试，然后对整个系统集成测试，

> <font style="color:rgb(35,31,32);">For custom software, customer testing involves testing the system with </font>_<font style="color:rgb(35,31,32);">real customer data</font>_<font style="color:rgb(35,31,32);">. For products that are sold as applications, customer testing is sometimes called beta testing where selected users try out and comment on the software.</font>
>

<details class="lake-collapse"><summary id="u67f2648e"><span class="ne-text" style="font-size: 13px">Beta testing</span></summary><p id="u11b41c1f" class="ne-p"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px"> 在软件开发过程中，对于作为应用程序销售的产品，客户测试有时被称为</span><strong><span class="ne-text" style="font-size: 14px">Beta 测试</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">。在这个阶段，开发团队会选择一部分用户，让他们试用软件并提供反馈意见。</span></p><p id="ub4dfe845" class="ne-p"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">当一个系统作为软件产品推向市场时，通常会使用称为</span><strong><span class="ne-text">beta测试</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">的测试过程。beta测试涉及将一个系统交付给同意使用该系统的潜在客户。这些客户向系统开发人员报告问题。这种测试让产品暴露在真实使用场景中，并检测出开发人员可能未预见到的错误。在收到这些反馈后，软件产品可以被修改并重新发布进行进一步的beta测试或正式销售。    </span></p></details>
---

#### Stages of testing
<!-- 这是一张图片，ocr 内容为：COMPONENT CUSTOMER SYSTEM TESTING TESTING TESTING FIGURE 2.6 STAGES OF TESTING -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737259370312-23bb79a0-a7bc-4f63-9b89-230520662395.png)

1. **组件测试（****<font style="background-color:#FBDE28;">Component testing</font>****）**：单独测试程序的每个组件，确保它们按预期工作。

<font style="color:rgb(0,0,0);">• Individual components are tested independently; </font>

<font style="color:rgb(0,0,0);">• Components may be </font>**<u><font style="color:rgb(0,0,0);">functions or objects or coherent groupings</font></u>****<font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">of these entities.</font>

2. **系统测试（****<font style="background-color:#FBDE28;">System testing</font>****）**：将组件集成到一个完整的系统中并进行测试，确保整体系统满足需求。
+ <font style="color:rgb(0,0,0);">Testing of the system as a whole. </font>**<font style="color:#2F4BDA;">Testing of emergent properties</font>**<font style="color:rgb(0,0,0);"> is particularly important.</font>

> <font style="color:rgb(0,0,0);">Emergent properties: Are characteristics of a system that arise from the interactions of its components, but are not properties of any individual component.  </font>
>
> <font style="color:rgb(0,0,0);">eg. </font>**群体行为**<font style="color:rgb(0,0,0);">：例如，鸟群的飞行模式或鱼群的游动模式。单个鸟或鱼的行为无法预测整个群体的复杂动作。  </font>
>

<details class="lake-collapse"><summary id="u8f5d289e"><span class="ne-text" style="font-size: 14px">补充</span></summary><ul class="ne-ul"><li id="u24873f88" data-lake-index-type="0"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">This process is concerned with finding errors that result from unanticipated interactions 意料之外的相互影响 between components and component interface problems.</span></li></ul><p id="u1d1251dc" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739502767712-7e278681-7ee5-4341-bc5e-4e5e68d145f4.png" width="720" title="" crop="0,0,1,1" id="uc803074d" class="ne-image"></p><ul class="ne-ul"><li id="uee513fc0" data-lake-index-type="0"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">It is also concerned with showing that the system meets its functional and non-functional requirements, and testing the emergent system properties.</span></li><li id="u23ed102b" data-lake-index-type="0"><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">For large systems, this may be a </span><strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px">multistage</span></strong><span class="ne-text" style="color: rgb(35,31,32); font-size: 13px"> process where components are integrated to form subsystems that are individually tested before these subsystems are integrated to form the final system.</span></li></ul><p id="u35db41eb" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739502860691-9fff7c08-0292-44f3-91cc-ef3773c8e488.png" width="697.3333333333334" title="" crop="0,0,1,1" id="uee4df96b" class="ne-image"></p></details>
3. **客户测试（****<font style="background-color:#FBDE28;">Customer testing</font>****）**：在最终用户环境中对系统进行测试，以确保它在真实环境中按预期运行。
+ <font style="color:rgb(0,0,0);">Testing with</font>**<font style="color:#2F4BDA;"> customer data</font>**<font style="color:rgb(0,0,0);"> to check that the system meets the needs of customers.</font>

> <font style="color:rgb(35,31,32);">The system is tested by the</font>**<font style="color:rgb(35,31,32);"> system customer</font>**<font style="color:rgb(35,31,32);"> (or potential customer) rather than with simulated test data.</font>
>

---

+ 理想情况下，组件的缺陷会在测试过程的早期阶段被发现，而接口问题会在系统集成时被检测出来。然而，当缺陷被发现时，程序必须进行调试，这可能需要重复测试过程中的其他阶段。在系统测试期间，程序组件中的错误可能显现出来。因此，该过程是一个迭代的过程，允许将后续阶段的信息反馈给前面的部分。  
+ 通常情况下，组件测试是正常开发过程的一部分。程序员根据自己的测试数据逐步测试代码。程序员最了解组件，因此也是生成测试用例的最佳人选。
+ 如果使用增量开发方法，每个增量都应在开发过程中进行测试，这些测试基于该增量的需求。在测试驱动开发中，这是一种敏捷过程的正常部分，测试在开发之前就被创建。这帮助测试人员和开发人员理解需求，并确保在创建测试用例时不会有延误。

在**计划驱动 plan-driven**的软件过程中（例如用于关键系统开发），测试是通过一组测试计划来驱动的。一组独立的测试人员团队根据从系统规范和设计中开发的测试计划执行测试。**图2.7**说明了测试计划是测试活动和开发活动之间的联系。这有时被称为开发的“**V模型**”（将图形旋转过来看“V”形状）。V模型展示了与瀑布模型过程阶段对应的软件验证活动。  

<!-- 这是一张图片，ocr 内容为：REQUIREMENTS SYSTEM SYSTEM COMPONENT DESIGN DESIGN SPECIFICATION SPECIFICATION SUB-SYSTEM SYSTEM COMPONENT CUSTOMER INTEGRATION INTEGRATION CODE AND TEST TEST PLAN TEST PLAN TEST PLAN CUSTOMER SUB-SYSTEM SYSTEM SERVICE INTEGRATION TEST INTEGRATION TEST TEST FIGURE 2.7 TESTING PHASES IN A PLAN-DRIVEN SOFTWARE PROCESS -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737259821490-af681e43-ff02-4f7e-8c00-bfd392a42f04.png)

“V模型”测试框架，其中：

1. **上方**展示了开发阶段，从需求规范开始，经过系统规范、设计、组件设计，再到组件代码与测试。
2. **下方**展示了对应的测试阶段，从子系统集成测试、系统集成测试到最终客户测试。这些测试确保系统的功能和需求得到验证。

测试与开发阶段之间通过明确的测试计划紧密联系，每个阶段都产生相关的输出，推动下一阶段的发展。这种方法特别适用于计划驱动型开发流程（<font style="color:rgb(35,31,32);">plan-driven）</font>和关键系统的开发（<font style="color:rgb(35,31,32);">critical systems development）</font>。  

---

### Software evolution
+ <font style="color:rgb(0,0,0);">Software is inherently </font>**<font style="color:#DF2A3F;">flexible</font>****<font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">and can be changed. </font>

> <font style="color:rgb(0,0,0);"> 由于软件的灵活性和相对较低的修改成本,在大型复杂系统中，更倾向于应用软件。通过这种方式，系统可以更容易地进行升级和改进，以满足不断变化的需求和挑战。  </font>
>

+ <font style="color:rgb(0,0,0);">As requirements change through changing business circumstances 业务环境变化, the software that supports the business must also evolve and change. </font>
+ <font style="color:rgb(0,0,0);">Although there has been a demarcation 划分 between development and evolution (maintenance) . This is increasingly irrelevant as fewer and fewer systems are completely new. 尽管过去在开发和进化（维护）之间有明确的划分，但这种划分正变得越来越不重要，因为越来越少的系统是全新开发的。  </font>

从历史上看，软件开发过程和**软件演化 ****<font style="color:rgb(35,31,32);">software evolution</font>****（即软件维护****<font style="color:rgb(35,31,32);">software maintenance</font>****）**之间一直存在分歧。人们通常将软件开发视为一种创造性的活动，从初始概念到功能性系统的开发。然而，他们有时认为软件维护乏味且无趣，认为软件维护的吸引力和挑战性不及原始软件开发。

开发和维护之间的这种区分正在变得越来越无关紧要。**极少数的软件系统是全新的系统，因此更有必要将开发和维护视为一个连续体，而非两个独立的过程。**更现实的方式是<u>将软件工程视为一个演化的过程（如图2.8所示），在整个生命周期中不断响应变化的需求和客户需求。</u>  
<!-- 这是一张图片，ocr 内容为：ASSESS EXISTING PROPOSE SYSTEM MODIFY DEFINE SYSTEM CHANGES REQUIREMENTS SYSTEMS SYSTEMS EXISTING NEW FIGURE 2.8 SOFTWARE SYSTEM SYSTEMS SYSTEM EVOLUTION -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737260358616-ffa25904-3db8-49df-b47c-480b0673440d.png)

#### **软件系统演化（Software System Evolution）**
图2.8 展示了软件演化的连续过程：

1. **定义系统需求(Define system requirements)**：明确需要对系统进行哪些更改，以满足客户或业务需求。
2. **评估现有系统(Assess existing systems)**：检查当前系统的状态，以确定可以保留哪些部分以及需要改进哪些部分。
3. **提出系统更改(Propose system changes)**：制定具体的更改建议，这些建议可能涉及功能增强或性能优化。
4. **修改系统（Modify systems）**：对现有系统进行更改，或者在必要时开发全新的系统。

这个过程展示了软件如何通过持续的反馈和改进不断响应不断变化的需求，以保持其相关性和实用性。

## 三、Coping with change
+ <font style="color:rgb(0,0,0);">Change is inevitable in all large software projects: </font>
    - <font style="color:rgb(0,0,0);">Business changes lead to new and changed system requirements. </font>
    - <font style="color:rgb(0,0,0);">New technologies open up new possibilities for improving implementations. </font>
    - <font style="color:rgb(0,0,0);">Changing platforms require application changes.</font>

变化是所有大型软件项目中不可避免的。随着企业应对外部压力、竞争以及管理优先级的变化，系统需求也会随之改变。当新技术出现时，新的设计和实现方法也会成为可能。因此，无论采用何种软件过程模型，确保它能够适应正在开发软件的变化是至关重要的。

+ <font style="color:rgb(0,0,0);">Change leads to rework so the costs of change include both rework (e.g. re-analyzing requirements) as well as the costs of implementing new functionality</font>

**变化增加了软件开发的成本**，因为通常意味着<u>已完成的工作需要被重做</u>。这被称为**“返工”(****<font style="color:rgb(35,31,32);">rework</font>****)**。例如，如果一个系统中需求之间的关系已经被分析，但新需求随后被识别出来，则部分或全部需求分析需要重新进行。这可能需要重新设计系统以满足新需求，修改已开发的程序，并对系统重新测试。

#### <font style="color:rgb(0,0,0);">Reducing the costs of rework</font>
两种相关的方法可以用来减少返工的成本：

##### **Change anticipation (变更预见)：**
**<font style="color:rgb(0,0,0);">Change anticipation , </font>**<font style="color:rgb(0,0,0);">where the software process includes activities that can anticipate 预料 possible changes before significant rework is required. </font>

<font style="color:rgb(0,0,0);">• For example, a prototype system may be developed to show some key features of the system to customers.</font>  
此方法包括能够预期或预测可能发生的变化，从而在重大返工之前采取行动。

例如，可以开发一个原型系统来展示系统的某些关键功能，并让客户进行实验。他们可以通过原型测试和完善需求，然后再承诺进行高成本的软件生产。

<details class="lake-collapse"><summary id="ufae1a68e"><span class="ne-text">Prototype system</span></summary><h4 id="7e9acca2"><span class="ne-text">原型系统的定义</span></h4><p id="u5c443527" class="ne-p"><span class="ne-text">原型系统是一个初步的、实验性的版本，旨在展示系统的关键特性和功能，而不是一个完整、最终的产品。它通常用于与客户交流和收集反馈，从而在早期阶段就发现并解决潜在的问题。</span></p><h4 id="99a2f31c"><span class="ne-text">原型系统的作用</span></h4><ol class="ne-ol"><li id="u9ec67988" data-lake-index-type="0"><strong><span class="ne-text">展示关键特性</span></strong><span class="ne-text">：向客户展示系统的主要功能和界面，使他们能够直观地理解系统的运作方式。</span></li><li id="u2d1e62ad" data-lake-index-type="0"><strong><span class="ne-text">收集反馈</span></strong><span class="ne-text">：通过原型系统，开发团队可以获取客户的反馈意见，了解他们的需求和期望。</span></li><li id="u611691fd" data-lake-index-type="0"><strong><span class="ne-text">验证设计</span></strong><span class="ne-text">：在投入大量资源之前，通过原型系统验证设计的可行性和有效性。</span></li><li id="ud6eaaabb" data-lake-index-type="0"><strong><span class="ne-text">预见变更</span></strong><span class="ne-text">：原型系统帮助开发团队识别未来可能的需求变化和调整，从而在正式开发之前进行相应的改进，避免日后的大量返工。</span></li></ol></details>
##### **Change tolerance (变更容忍)：**
<font style="color:rgb(0,0,0);">Change tolerance, where the process is designed so that changes can be accommodated at relatively low cost. </font>

<font style="color:rgb(0,0,0);">• This normally involves some form of incremental development. Proposed changes may be implemented in increments that have not yet been developed. If this is impossible, then only a single increment (a small part of the system) may have be altered to incorporate the change.</font>

通常，这涉及一些增量开发。提议的变化可能会被逐步实施，而不是全部重做。如果无法实现，则可能需要更改一个单独的增量（系统的一小部分）以适应变化。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739505192006-860d1061-c2f4-4362-978f-762f1f52dad1.png)

#### 两种应对变化和系统需求变化的方法：
1️⃣ **System prototyping (系统原型)：**  
通过快速开发系统或系统的一部分来检查客户需求和设计决策的可行性。这是变化预期的一种方法，因为它允许用户在交付前对系统进行实验并完善其需求。因此，交付后提出的需求更改建议数量可能会减少。

<font style="color:rgb(0,0,0);">where a version of the system or part of the system is developed quickly to check the customer requirements and the feasibility of design decisions.</font>

<font style="color:rgb(0,0,0);">This approach supports change anticipation.</font>

2️⃣ **Incremental delivery (增量交付)：**  
将系统增量交付给客户以便评论和实验。这支持了变化的规避和容忍性。它避免了对整个系统的需求作出过早承诺，并允许在稍后的增量中以较低的成本集成变化。

<font style="color:rgb(0,0,0);">Incremental delivery, where system increments are delivered to the customer for comment and experimentation. </font>

<font style="color:rgb(0,0,0);">This supports both change avoidance and change tolerance.</font>

重构（Refactoring）的概念，即改善程序的结构和组织，也是支持变化容忍的重要机制。在Chap3（敏捷方法Agile method）中将对此进行讨论。



##### <font style="color:rgb(0,174,239);">Prototyping </font>**系统原型**
<font style="color:rgb(0,0,0);">A </font>**<font style="color:rgb(0,0,0);">prototype</font>**<font style="color:rgb(0,0,0);"> is an initial version of a system used to </font>_<font style="color:rgb(0,0,0);">demonstrate concepts and try </font>_

_<font style="color:rgb(0,0,0);">out design options.</font>_

**原型**是一种软件系统的早期版本，通常用于演示概念、尝试设计选项，并进一步了解问题及其可能的解决方案。原型的快速、迭代开发非常重要，因为它能够控制成本，并使系统的相关利益者在软件过程的早期就可以通过原型进行实验。

###### <font style="color:rgb(0,0,0);">A prototype can be </font>**<font style="color:rgb(0,0,0);">used in: </font>**
<font style="color:rgb(0,0,0);">• The requirements engineering process to help with requirements elicitation and validation; </font>

<font style="color:rgb(0,0,0);">• In design processes to explore options and develop a UI design; </font>

<font style="color:rgb(0,0,0);">• In the testing process to run back-to-back tests.</font>

**软件原型可以在软件开发过程中用于帮助预期可能需要的变化：**

1️⃣ 在需求工程过程 (Requirements engineering process) 中，**原型可以帮助系统需求的获取与验证。

2️⃣ 在系统设计过程 (System design process) 中，**原型可以用于探索软件解决方案并开发系统的用户界面。

<details class="lake-collapse"><summary id="uada2073f"><span class="ne-text">Back-to-back tests</span></summary><p id="u33a06c19" class="ne-p"><span class="ne-text">      是指使用两个或多个版本的系统（或子系统）同时执行相同的测试，用于比较它们的输出结果是否一致。这种测试方法的目的是检测软件中的错误，确保不同版本或实现之间的行为一致性。  </span></p><p id="u3321a83a" class="ne-p" style="text-indent: 2em"><span class="ne-text">假设你有一个计算程序的两个版本：</span></p><ul class="ne-ul"><li id="u0f85926d" data-lake-index-type="0"><span class="ne-text">版本A：原始实现。</span></li><li id="u498523e8" data-lake-index-type="0"><span class="ne-text">版本B：经过优化的版本。</span></li></ul><p id="u4536bc33" class="ne-p"><span class="ne-text">通过对这两个版本进行背靠背测试，可以确保优化后的版本B在功能上与原始版本A一致，同时也可以发现可能在优化过程中引入的新错误</span></p></details>
###### <font style="color:rgb(0,0,0);">Benefits of prototyping </font>
+ <font style="color:rgb(0,0,0);">Improved system usability. </font>
+ <font style="color:rgb(0,0,0);">A closer match to real needs of customers. </font>
+ <font style="color:rgb(0,0,0);">Improved design quality. </font>
+ <font style="color:rgb(0,0,0);">Improved maintainability. 可维护性</font>
+ <font style="color:rgb(0,0,0);">Reduced development effort.</font>

---

**系统原型**允许潜在用户了解系统对其工作的支持程度。

+ 用户可能从中获得新的需求想法，发现软件中的强项与弱项。
+ 然后他们可以提出新的系统需求。
+ 此外，随着原型的开发，可能会暴露出需求中的错误和遗漏。

例如，规范中描述的某项功能可能看起来清晰且有用，但在功能与其他功能结合使用时，用户可能会发现他们最初的观点是不正确或不完整的。此时，系统规范可以根据需求的变化理解进行修改。

######  **原型开发 (Prototype Development)  **
<!-- 这是一张图片，ocr 内容为：ESTABLISH DEFINE EVALUATE DEVELOP PROTOTYPE PROTOTYPE PROTOTYPE PROTOTYPE OBJECTIVES FUNCTIONALITY OUTLINE PROTOTYPING EVALUATION EXECUTABLE FIGURE 2.9 PROTYPE DEFINITION PLAN REPORT PROTOTYPE DEVELOPMENT -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737276217381-92f86d7c-24a8-496c-8a78-26c7d8317e45.png)

+ <font style="color:rgb(0,0,0);">May be based on rapid prototyping languages or tools. </font>
+ <font style="color:rgb(0,0,0);">May involve leaving out functionality 省略功能</font>

<font style="color:rgb(0,0,0);">Prototype should </font>**<font style="color:rgb(0,0,0);">focus on</font>**<font style="color:rgb(0,0,0);"> areas of the product that are not well-understood; 重点关注不熟悉的产品领域- 原型应集中在产品中尚不熟悉或不完全了解的领域，以便尽早发现和解决问题。  </font>

<font style="color:rgb(0,0,0);">可能的取舍：</font>

            1. **<font style="color:rgb(0,0,0);">Error checking and recovery may not be included </font>**<font style="color:rgb(0,0,0);">in the prototype; 错误检查和恢复</font>
            2. **<font style="color:rgb(0,0,0);">Focus on functional </font>**<font style="color:rgb(0,0,0);">rather than non-functional requirements such as reliability and security. 非功能性需求</font>

原型开发的目的是快速验证和演示关键功能，帮助团队和客户更好地理解系统的核心部分。在这个过程中，可能会省略一些次要功能和详细的错误处理，以便更快地迭代和收集反馈。  



**原型模型的开发过程包括以下阶段：**

1️⃣ **设定原型目标 (Establish prototype objectives)**

+ 在过程开始时，就应该明确原型开发的目标。这些目标可能包括开发用户界面、验证功能性系统需求的系统，或开发一个向管理者展示应用程序的系统。
+ 同一个原型通常无法同时满足所有目标。如果目标没有明确说明，管理者或最终用户可能会误解原型的功能，从而无法从原型开发中获得预期的好处。  

2️⃣ **定义原型功能 (Define prototype functionality)**

+ 需要决定原型系统中需要包含什么内容，更重要的是，需要排除哪些内容。为了减少原型开发成本并加快交付进度，可以选择不将某些功能包括在原型中。
+ 例如，可以放宽对非功能性需求的要求，如响应时间和内存利用率。除非原型的目标是建立用户界面，否则错误处理和管理可以被忽略，这可能导致可靠性和程序质量的降低。  

3️⃣ **开发原型 (Develop prototype)**  
使用快速开发的方法完成可执行原型的设计和实现。

4️⃣ **评估原型 (Evaluate prototype)**

在此阶段必须为用户培训做好准备，并利用原型的目标制定评估计划。潜在用户需要时间熟悉新系统，并逐步适应正常的使用模式。一旦他们正常使用系统，便可能发现需求中的错误和遗漏, 评估报告会记录潜在用户的反馈，以便改进系统。

###### **<font style="color:rgb(0,0,0);">Throw-away prototypes:</font>**
<font style="color:rgb(0,0,0);">Prototypes should be discarded after development as they are not a good basis for a production system: 是指在开发完成后应该被丢弃的原型，因为它们不适合作为生产系统的基础。这种类型的原型在快速开发和演示阶段非常有用，但并不适合直接转变为最终产品 ，以下为抛弃型原型不适合作为生产系统基础的主要原因：</font>

+ <font style="color:rgb(0,0,0);">It may be impossible to tune the system to meet non-functional requirements;  如性能、可靠性、安全性等。  </font>
+ <font style="color:rgb(0,0,0);">Prototypes are normally undocumented;  原型通常没有完整的文档记录，缺乏详细的设计说明和实现细节，这会导致后续维护和扩展困难。  </font>
+ <font style="color:rgb(0,0,0);">The prototype structure is usually degraded through rapid change;  由于原型系统在快速变化中开发，其结构通常会退化，不利于长期维护和扩展。  </font>
+ <font style="color:rgb(0,0,0);">The prototype probably will not meet normal organizational quality standards. 原型可能无法满足正常的组织质量标准，因为在开发过程中可能没有严格遵循质量控制和测试流程。  </font>



##### <font style="color:rgb(0,174,239);">Incremental delivery </font>增量交付
+ <font style="color:rgb(0,0,0);">Rather than deliver the system as a single delivery, the </font>**<font style="color:rgb(0,0,0);">development and delivery is broken down into increments </font>**<font style="color:rgb(0,0,0);">with each increment delivering part of the required functionality.</font>
+ **<font style="color:rgb(0,0,0);">User requirements are prioritized </font>**<font style="color:rgb(0,0,0);">and the highest priority requirements are included in early increments.</font>
+ <font style="color:rgb(0,0,0);">Once the development of an increment is started, the requirements are frozen though requirements for later increments can continue to evolve. 当一个增量的开发开始后，该增量的需求就被冻结了，尽管后续增量的需求可以继续演变。--</font>通过这种方式，增量开发能够在确保每个增量稳定开发的同时，也能灵活应对不断变化的用户需求。  

---

###### <font style="color:rgb(0,0,0);">Incremental development 增量开发</font>
+ <font style="color:rgb(0,0,0);">Develop the system in increments and evaluate each increment before proceeding to the development of the next increment;  系统以增量的方式开发，每完成一个增量后进行评估，然后再继续开发下一个增量。  </font>
+ <font style="color:rgb(0,0,0);">Normal approach used in </font><font style="color:#2F4BDA;">agile methods</font><font style="color:rgb(0,0,0);">; </font>
+ <font style="color:rgb(0,0,0);">Evaluation done by user/customer proxy.  由用户或客户代理对每个增量进行评估，确保开发符合需求。  </font>

###### <font style="color:rgb(0,0,0);">Incremental delivery 增量交付</font>
+ <font style="color:rgb(0,0,0);">Deploy（部署，调用） an increment for use by end-users;   每个增量完成后交付给终端用户使用。  </font>
+ <font style="color:rgb(0,0,0);">More realistic evaluation about practical use of software;  通过终端用户的实际使用来评估软件的实用性和效果。  </font>
+ <font style="color:rgb(0,0,0);">Difficult to implement for replacement systems as increments have less functionality than the system being replaced. 对于替换现有系统的情况，增量交付可能比较困难，因为每个增量的功能通常不如被替换的系统完整。 </font>

<font style="color:rgb(0,0,0);"> </font>

**增量开发**<font style="color:rgb(0,0,0);">：强调逐步开发和内部评估，通过每个增量的评估来确保开发方向正确。</font>

**增量交付**<font style="color:rgb(0,0,0);">：强调实际交付和用户评估，通过终端用户的使用反馈来优化和改进软件，但在替换已有系统时可能面临挑战。</font>

---

**增量交付**（Incremental delivery，见图2.10）

在这种方法中，**部分开发完成的增量被交付给客户并部署到其工作环境中**。在增量交付过程中，<u>客户会定义哪些服务最重要，哪些服务较不重要</u>。随后，根据服务的优先级，定义多个交付增量，每个增量提供一部分系统功能。**服务的分配依据优先级进行**，优先级最高的服务最先被实现并交付。

当系统增量被明确定义后，第一批增量中需要交付的服务需求会被详细地确定，并开始开发。在开发期间，可以针对后续增量进行进一步的需求分析，但当前增量的需求变更**不会被接受**。

一旦某个增量完成并交付，它会被安装到客户的正常工作环境中。客户可以**实验性地使用**该系统，这有助于他们**明确后续系统增量的需求**。随着新增量的完成，它们会被集成到现有的增量中，以便系统功能随着每次交付的增量而逐步**改进**。

<!-- 这是一张图片，ocr 内容为：DEFINE OUTLINE DEVELOP SYSTEM DESIGN SYSTEM ASSIGN REQUIREMENTS TO INCREMENTS REQUIREMENTS INCREMENT ARCHITECTURE SYSTEM INCOMPLETE? INTEGRATE VALIDATE VALIDATE DEPLOY INCREMENT INCREMENT INCREMENT SYSTEM SYSTEM COMPLETE? FINAL FIGURE 2.10 SYSTEM INCREMENTAL DELIVERY -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737277127158-c387eeff-e1de-440e-a033-1e29fe4ed97c.png)

+ **Define outline requirements（定义概要需求）**

确定系统的高层次需求和目标。这是初步的需求定义阶段，用于明确需要实现的核心功能。

+ **Assign requirements to increments（将需求分配给增量）**

根据需求的优先级，将系统的功能模块分配到不同的开发增量中，优先实现重要和核心的功能。

+ **Design system architecture（设计系统架构）**

设计系统的整体架构，以确保增量能够在统一的框架下进行开发和集成。

+ **Develop system increment（开发系统增量）**

按照分配好的需求，开发对应的增量功能。每个增量都是独立的一部分，可以独立实现特定的功能。

+ **Validate increment（验证增量）**

对开发完成的增量进行测试和验证，确保其功能正确并符合预期。

+ **Integrate increment（集成增量）**

将新开发的增量集成到已有的系统中，形成更大的整体系统。此阶段的重点是确保不同增量之间的兼容性。

+ **Validate system（验证系统）**

在集成之后，对整个系统进行验证，确保新增功能与原有系统保持一致，并满足系统整体需求。

+ **Deploy increment（部署增量）**

将已验证的增量部署到客户的工作环境中，使客户可以开始使用这部分功能。

+ **System incomplete?（系统是否完成？）**

检查整个系统是否完成。如果未完成，返回开发阶段，继续开发下一批增量。

+ **Final system（最终系统）**

当所有的增量开发完成，并通过验证和部署后，形成完整的系统。



###### PROS&CONS
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739513748774-786bead4-afc2-46a5-86fd-6cdf5b627a7a.png)

**增量交付有以下几个优势：**

1. **客户能够将早期的增量作为原型进行使用，并通过这些原型获得经验，从而明确后续增量的需求。**
+ 与传统的原型不同，这些增量实际上是完整系统的一部分，因此在完整系统交付后无需重新学习。
2. **客户无需等到整个系统交付完毕才能开始获益。**
+ 第一个增量能够满足他们最关键的需求，因此客户可以立即使用软件。
3. **这个过程保留了增量开发的优点，即相对容易将变更集成到系统中。**
4. **由于优先级最高的服务会首先交付并经过大量测试，后续增量才逐步集成，最重要的系统服务得到充分验证。**
+ 这意味着客户在系统最重要部分遇到软件故障的可能性大幅降低。

**增量交付的问题缺点:**

1. **增量交付在替换现有系统时存在问题**  
当新系统旨在替换旧系统时，增量交付可能会变得复杂。用户通常需要旧系统的全部功能，并且不愿意在新系统不完整的情况下进行实验。因为新旧系统可能具有不同的数据库和用户界面，同时运行两个系统通常是不可行的。
2. **许多系统需要通用基础设施支持**  
大多数系统的不同部分使用一组通用的基础设施功能。然而，由于需求通常直到增量实施时才被详细定义，因此很难识别出所有增量都需要的通用设施。
3. **增量方法中的规格问题**  
增量开发的核心在于，系统规格与软件同时发展。然而，这种方法与许多组织的采购模式相冲突，因为这些模式通常要求在签署合同之前就明确整个系统的规格。在增量方法中，直到最终的增量被定义之前，系统规格都是不完整的。这需要重新定义合同形式，这对于一些大型客户（例如政府机构）可能难以接受。

---

**不适合增量交付的情况（Scenarios Unsuitable for Incremental Delivery）**

对于某些类型的系统，增量开发和交付并不是最好的选择。这些系统包括：

+ **超大规模系统**：这些系统可能需要多个团队在不同地点协作开发。
+ **嵌入式系统**：这种系统的软件高度依赖硬件的开发。
+ **关键系统**：所有需求必须被详细分析，以检查可能影响系统安全性或稳定性的交互行为。

这些大型系统同样面临需求不确定和变化的问题。为了应对这些问题并获得增量开发的部分优势，可以开发一个**系统原型**（System Prototype），将其作为对系统需求和设计进行实验的平台。通过原型所获得的经验，可以就最终的需求达成一致。

## 四、Process improvement
>  当前软件行业的一个重要趋势: 对更_便宜_、更_优质 _的软件的需求不断增加，而_交付的时间期限 _却越来越紧张。于是，
>

+ <font style="color:rgb(0,0,0);">Many software companies have turned to </font>**<font style="color:#2F4BDA;">software process improvement </font>**<font style="color:rgb(0,0,0);">as a way of </font>**<font style="color:rgb(0,0,0);">enhancing the quality of their software (Q) , reducing costs (C) or acceleratingc促进their development processes (D)≈delivery time.</font>**
+ <font style="color:rgb(0,0,0);">Process improvement means understanding existing processes and changing these processes to increase product quality and/or reduce costs and development time. 过程改进指的是理解现有的流程，并对这些流程进行改变，以提高产品质量和/或降低成本和开发时间。  </font>

#### <font style="color:rgb(0,0,0);">Approach to process improvement and change</font>
##### Process maturity approach 过程成熟度方法
<font style="color:rgb(35,31,32);">,which has focused on </font><font style="color:#2F4BDA;">improving process and project management and introducing good software engineering practice into an organization. </font><font style="color:rgb(35,31,32);"> 改进过程和项目管理，将良好的软件工程实践引入组织。  </font>

<font style="color:rgb(35,31,32);">The level of process </font><u><font style="color:rgb(35,31,32);">maturity</font></u><font style="color:rgb(35,31,32);"> reflects the extent to which good technical and management practice has been adopted 采取 in organizational software development processes.  反映了在组织软件开发过程中，已经采用了多少良好的技术和管理实践。  </font>

<u><font style="color:rgb(35,31,32);">The primary goals</font></u><font style="color:rgb(35,31,32);"> of this approach are improved product quality and process predictability</font>

##### <font style="color:rgb(35,31,32);">The agile approach, 敏捷方法</font>
 敏捷方法强调通过频繁的小迭代和持续改进来迅速响应变化，并尽量减少繁琐的过程开销。 

<font style="color:rgb(35,31,32);">, which has focused on</font><font style="color:#2F4BDA;"> iterative development and the reduction 减少 of overheads 开销 in the software process. </font> 迭代开发，减少软件过程中的开销。 <font style="color:#2F4BDA;"> </font>

<font style="color:rgb(35,31,32);">The</font><u><font style="color:rgb(35,31,32);"> primary characteristics</font></u><font style="color:rgb(35,31,32);"> of agile methods are </font>_<font style="color:rgb(35,31,32);">rapid delivery of functionality and responsiveness to changing customer requirements.  快速交付功能，响应不断变化的客户需求  </font>_

<font style="color:rgb(35,31,32);">The improvement philosophy here is that the best processes are those with the lowest overheads and agile approaches can achieve this</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739509580535-416c9b0c-0d02-4dbc-9cfb-e4ad18cbce2c.png)

> <font style="color:rgb(35,31,32);">The process </font>**<font style="color:rgb(35,31,32);">maturity approach</font>**<font style="color:rgb(35,31,32);"> is rooted in </font>_<font style="color:rgb(35,31,32);">plan-driven development</font>_<font style="color:rgb(35,31,32);"> and usually requires increased “overhead,” in the sense that activities are introduced that are not directly relevant to program development. </font>
>
> <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739509753886-2f32e662-2795-40fb-a4a6-de3aad711832.png)
>
> **<font style="color:rgb(35,31,32);">Agile approaches</font>**<font style="color:rgb(35,31,32);"> focus on the code being developed and deliberately minimize formality and documentation.</font>
>

##### <font style="color:rgb(35,31,32);">总结</font>
+ **过程成熟度方法**<font style="color:rgb(35,31,32);">：强调计划和控制，通过引入额外的活动来提高过程的可预测性和产品质量，但可能增加时间和成本开销。</font>
+ **敏捷方法**<font style="color:rgb(35,31,32);">：强调灵活性和快速响应，通过减少形式化和文档编写来提高开发效率和适应性。</font>

---

#### The process improvement cycle
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739509900371-1ad618fc-e99e-4ca1-aef7-1a6fc8c99334.png)

<font style="color:rgb(35,31,32);">The general process improvement process underlying the process maturity approach is a cyclical process, 在过程成熟度方法（Process Maturity Approach）中的一般过程改进过程是一个循环过程。 </font>

##### <font style="color:rgb(0,0,0);">Process measurement 过程测量</font>
+ <font style="color:rgb(0,0,0);">You measure one or more attributes of the software process or product. These measurements forms a baseline that helps you decide if process improvements have been effective.  这些测量结果形成了一个基准，帮助决定过程改进是否有效  </font>

> <font style="color:rgb(35,31,32);"> As you introduce improvements, you re-measure the same attributes, which will hopefully have improved in some way.</font>
>

##### <font style="color:rgb(0,0,0);">Process analysis 过程分析</font>
+ <font style="color:rgb(0,0,0);">The current process is assessed, and process weaknesses and bottlenecks are identified.  评估当前的过程，识别过程中的弱点和瓶颈  </font>
+ <font style="color:rgb(0,0,0);">Process models (sometimes called process maps 过程图) that describe the process may be developed. </font>

##### <font style="color:rgb(0,0,0);">Process change 过程变更</font>
+ <font style="color:rgb(0,0,0);">Process changes are proposed to address some of the identified process weaknesses. 提出针对识别出的过程弱点的一些变更建议。  </font>
+ <font style="color:rgb(0,0,0);"> These are introduced and the cycle resumes to collect data about the effectiveness of the changes. 引入这些变更，并重新开始循环以收集关于变更有效性的数据  </font>

---

#### Lack of data
> <font style="color:rgb(35,31,32);">Without concrete 具体的 data on a process or the software developed using that process, it is impossible to assess the value of process improvement. However, companies starting the process improvement process are unlikely to have process data available as an improvement baseline. Therefore, as part of the first cycle of changes, you may have to collect data about the software process and to measure software product characteristics.</font>
>

<font style="color:rgb(35,31,32);"></font>

#### <font style="color:rgb(35,31,32);">过程改进的长期性和连续性</font>
+ **长期活动**<font style="color:rgb(35,31,32);">：过程改进是一个长期活动，每个改进过程的阶段可能会持续几个月。</font>
+ **连续性活动**<font style="color:rgb(35,31,32);">：无论引入了什么新过程，业务环境都会发生变化，新的过程本身也必须随着这些变化不断发展。</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739512171872-e34f8165-6494-491d-8418-e792c17abe7e.png)

#### Process metric 流程度量
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739512677325-b2eaa899-dab0-4be1-9a93-3fc2877a9c7d.png)

---

#### 过程成熟度模型的引入 <font style="color:rgb(35,31,32);">notion of process maturity</font>
**<font style="color:rgb(0,0,0);">The SEI (</font>****<font style="color:rgb(0,153,153);">Software Engineering Institute</font>****<font style="color:rgb(0,0,0);">) capability maturity model</font>**

+ **引入背景**：过程成熟度的概念在20世纪80年代末由软件工程研究所（SEI）提出。他们提出了过程能力成熟度模型（Humphrey 1988）。
+ **反映内容**：软件公司的过程成熟度反映了其过程管理、测量和良好软件工程实践的使用情况。<font style="color:rgb(35,31,32);">Reflects the process </font>_<font style="color:rgb(35,31,32);">management, measurement, and use of good software engineering practices </font>_<font style="color:rgb(35,31,32);">in the company.</font>
+ **目的**：美国国防部引入这一概念是为了评估防务承包商的软件工程能力，并将合同限制在那些达到所需过程成熟度水平的承包商。
+ **模型发展**：过程成熟度模型提出了五个成熟度级别，这些级别在过去25年中不断演变和发展，但Humphrey模型的基本理念仍然是软件过程成熟度评估的基础

##### 5 level in the process maturity model
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739512379164-cf5172a9-06ab-408e-8c71-113c512d8506.png)

<font style="color:rgb(0,0,0);"></font>**<font style="color:rgb(0,0,0);">Initial: </font>**<font style="color:rgb(0,0,0);">Essentially uncontrolled </font>

<font style="color:rgb(0,0,0);"></font>**<font style="color:rgb(0,0,0);">Repeatable: </font>**<font style="color:rgb(0,0,0);">Product management procedures defined and used </font>

<font style="color:rgb(0,0,0);"></font>**<font style="color:rgb(0,0,0);">Defined: </font>**<font style="color:rgb(0,0,0);">Process management procedures and strategies defined and used </font>

<font style="color:rgb(0,0,0);"></font>**<font style="color:rgb(0,0,0);">Managed: </font>**<font style="color:rgb(0,0,0);">Quality management strategies defined and used </font>

**<font style="color:rgb(0,0,0);">Optimizing: </font>**<font style="color:rgb(0,0,0);">Process improvement strategies defined and used</font>

<details class="lake-collapse"><summary id="ub9b01cdd"><span class="ne-text" style="font-size: 14px">过程成熟度模型级别</span></summary><p id="u8d967676" class="ne-p"><strong><span class="ne-text" style="font-size: 14px">1.  初始级别（Initial）</span></strong></p><ul class="ne-ul"><li id="ud2d59d01" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">控制情况</span></strong><span class="ne-text" style="font-size: 14px">：基本上是无法控制的。</span></li><li id="uc2019364" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">目标满足</span></strong><span class="ne-text" style="font-size: 14px">：过程领域相关的目标已经达成，并且所有过程的工作范围都明确设置并传达给团队成员。</span></li></ul><p id="uef6f584c" class="ne-p"><span class="ne-text" style="font-size: 14px">2.</span><strong><span class="ne-text" style="font-size: 14px"> 可重复级别（Repeatable）</span></strong></p><ul class="ne-ul"><li id="u07a3820f" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">产品管理程序</span></strong><span class="ne-text" style="font-size: 14px">：定义并使用产品管理程序。</span></li><li id="u55f08ac3" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">组织政策</span></strong><span class="ne-text" style="font-size: 14px">：有组织政策定义何时使用每个过程。</span></li><li id="ua2e58c8c" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">项目计划</span></strong><span class="ne-text" style="font-size: 14px">：必须有记录的项目计划来定义项目目标。</span></li><li id="ue95e3a0c" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">资源管理和过程监控</span></strong><span class="ne-text" style="font-size: 14px">：整个机构中必须有资源管理和过程监控程序。</span></li></ul><p id="u9bbeb136" class="ne-p"><strong><span class="ne-text" style="font-size: 14px">3. 已定义级别（Defined）</span></strong></p><ul class="ne-ul"><li id="uebecf012" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">过程管理程序和策略</span></strong><span class="ne-text" style="font-size: 14px">：定义并使用过程管理程序和策略。</span></li><li id="u77e847b9" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">组织标准化和部署</span></strong><span class="ne-text" style="font-size: 14px">：每个项目都有一个已管理的过程，这个过程是根据一套已定义的组织过程来调整以满足项目要求的。</span></li><li id="u8196e14d" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">过程资产和测量</span></strong><span class="ne-text" style="font-size: 14px">：必须收集并使用过程资产和过程测量数据，以便用于未来的过程改进。</span></li></ul><p id="u88ab204f" class="ne-p"><strong><span class="ne-text" style="font-size: 14px">4. 定量管理级别（Quantitatively Managed）</span></strong></p><ul class="ne-ul"><li id="uf47cd9c0" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">质量管理策略</span></strong><span class="ne-text" style="font-size: 14px">：定义并使用质量管理策略。</span></li><li id="uc8767a09" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">统计和定量方法</span></strong><span class="ne-text" style="font-size: 14px">：组织有责任使用统计和其他定量方法来控制子过程。收集的过程和产品测量数据必须用于过程管理。</span></li></ul><p id="u0772f657" class="ne-p"><strong><span class="ne-text" style="font-size: 14px">5. 优化级别（Optimizing）</span></strong></p><ul class="ne-ul"><li id="uc57642b8" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">过程改进策略</span></strong><span class="ne-text" style="font-size: 14px">：定义并使用过程改进策略。</span></li><li id="uc3f7f3dc" data-lake-index-type="0"><strong><span class="ne-text" style="font-size: 14px">数据驱动的改进</span></strong><span class="ne-text" style="font-size: 14px">：组织必须使用过程和产品测量数据来推动过程改进。趋势必须进行分析，并根据不断变化的业务需求调整过程。</span></li></ul></details>
<font style="color:rgb(35,31,32);">1. </font>_**<font style="color:rgb(35,31,32);">Initial</font>**__<font style="color:rgb(35,31,32);">  </font>_<font style="color:rgb(35,31,32);">The goals associated with the process area are satisfied, and for all processes the scope of the work to be performed is explicitly set out and communicated to the team members. </font>

<font style="color:rgb(35,31,32);">2. </font>_**<font style="color:rgb(35,31,32);">Managed</font>**__<font style="color:rgb(35,31,32);"> </font>_<font style="color:rgb(35,31,32);">At this level, the goals associated with the process area are met, and organizational policies are in place that define when each process should be used. There must be documented project plans that define the project goals. Resource management and process monitoring procedures must be in place across the institution. </font>

<font style="color:rgb(35,31,32);">3. </font>_**<font style="color:rgb(35,31,32);">Defined</font>**__<font style="color:rgb(35,31,32);">  </font>_<font style="color:rgb(35,31,32);">This level focuses on organizational standardization and deployment of processes. Each project has a managed process that is adapted to the project requirements from a defined set of organizational processes. Process assets and process measurements must be collected and used for future process improvements.</font>

<font style="color:rgb(35,31,32);">4. </font>_**<font style="color:rgb(35,31,32);">Quantitatively managed</font>**__<font style="color:rgb(35,31,32);"> </font>_<font style="color:rgb(35,31,32);">At this level, there is an organizational responsibility to use statistical and other quantitative methods to control subprocesses. That is, collected process and product measurements must be used in process management. </font>

<font style="color:rgb(35,31,32);">5. </font>_**<font style="color:rgb(35,31,32);">Optimizing </font>**_<font style="color:rgb(35,31,32);">At this highest level, the organization must use the process and product measurements to drive process improvement. Trends must be analyzed and the processes adapted to changing business needs.</font>

> _<font style="color:rgb(35,31,32);">The work on process maturity levels has had a major impact on the software industry. It focused attention on the software engineering processes and practices that were used and led to significant improvements in software engineering capability. However, there is too much overhead in formal 正式 process improvement for small companies, and maturity estimation with agile processes is difficult. Consequently, only large software companies now use this maturity-focused approach to software process improvement.</font>_
>

---

## 五、Agile process_Part1
### Brief introduction
> <font style="color:rgb(35,31,32);">Businesses are operating in a changing environment, it is practically impossible to derive a complete set of stable software requirements. Requirements change because customers find it impossible to predict how a system will affect working practices, how it will interact with other systems, and what user operations should be automated. It may only be after a system has been delivered and users gain experience with it that the real requirements become clear. Even then, external factors drive requirements change.</font>
>

对于某些类型的软件（例如安全关键控制系统<font style="color:rgb(35,31,32);">safety-critical control systems</font>），进行完整的系统分析是必不可少的，这时<u>计划驱动</u>的方法是合适的。然而，在<u>快速发展的商业环境</u>中，这种方法可能会<u>引发实际问题</u>。例如，到软件可用时，其最初采购的理由可能已经发生了根本性变化，以至于软件变得无用。因此，尤其是对于业务系统，专注于快速开发和交付的软件开发流程是必不可少的。

多年来，人们一直认识到快速软件开发和能应对需求变化的流程的重要性。然而，**真正推动更快的软件开发是在1990年代末期，随着“敏捷方法”**（例如极限编程（Beck, 1999）、Scrum（Schwaber and Beedle, 2001）以及DSDM（Stapleton, 2003））**等理念的发展而实现的**。

快速软件开发（<font style="color:rgb(35,31,32);">Rapid software development</font>）被称为敏捷开发（<font style="color:rgb(35,31,32);">agile development</font>）或敏捷方法（<font style="color:rgb(35,31,32);">agile methods</font>）。这些敏捷方法的设计目标是**快速生成有用的软件**。所有提出的敏捷方法都具有以下共同特点：

### Agile methods charactersitics：
1. **规范、设计和实现过程交错进行**  
在敏捷方法中，没有详细的系统规范，设计文档被最小化，或者由用于实现系统的编程环境自动生成。用户需求文档仅包含系统最重要特性的概要定义。
    - <font style="color:rgb(0,0,0);background-color:#FBDFEF;">Program specification, design and implementation are inter-leaved </font><font style="color:rgb(0,0,0);">交织. </font>
2. **系统按增量开发**  
系统以一系列增量形式开发。最终用户和其他系统相关方参与每个增量的规范和评估过程中。他们可以建议对软件的更改以及系统后续版本中应实现的新需求。
    - <font style="color:rgb(0,0,0);background-color:#FBDFEF;">The system is developed as a series of versions or increments with stakeholders involved in version specification and evaluation.</font><font style="color:rgb(0,0,0);">  系统开发为一系列版本或增量，涉众参与版本规范和评估。</font>
3. **广泛的工具支持**  
为支持开发过程，使用了广泛的工具。这些工具可能包括自动化测试工具、支持配置管理的工具、系统集成工具以及用于自动化用户界面生成的工具。
    - <font style="color:rgb(0,0,0);background-color:#FBDFEF;">Extensive 大量 tool support (e.g. automated testing tools) used to support development. </font>
4. <font style="color:rgb(0,0,0);background-color:#FBDFEF;">Frequent delivery of new versions for evaluation. </font>
5. <font style="color:rgb(0,0,0);background-color:#FBDFEF;">Minimal documentation – focus on working code.</font>

<!-- 这是一张图片，ocr 内容为：PLAN-BASED DEVELOPMENT DESIGN AND REQUIREMENTS REQUIREMENTS IMPLEMENTATION ENGINEERING SPECIFICATION REQUIREMENTS CHANGE REQUESTS AGILE DEVELOPMENT REQUIREMENTS DESIGN AND ENGINEERING IMPLEMENTATION FIGURE 3.1 PLAN-DRIVEN AND AGILE DEVELOPMENT -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737296199679-bfcd4ec1-9e27-4923-a6aa-1e1286d027b4.png)

:::success
**<font style="color:rgb(0,0,0);">Plan-driven development </font>**

+ <font style="color:rgb(0,0,0);">A plan-driven approach to software engineering is based around separate development stages with the outputs to be produced at each of these stages planned in advance. （一个计划驱动的软件工程方法是基于独立的开发阶段，每个阶段的产出都是预先计划好的。）</font>
+ <font style="color:rgb(0,0,0);">Not necessarily waterfall model – plan-driven, incremental development is possible </font>
+ <font style="color:rgb(0,0,0);">Iteration occurs within activities. </font>

<font style="color:rgb(0,0,0);"></font>**<font style="color:rgb(0,0,0);">Agile development </font>**

+ <font style="color:rgb(0,0,0);">Specification, design, implementation and testing are inter-leaved and the outputs from the development process are decided through a process of negotiation during the software development process.</font>

:::



敏捷方法是一种**增量开发方法**_**( **__<font style="color:rgb(35,31,32);">Agile methods are incremental development methods</font>_<font style="color:rgb(35,31,32);">)</font>，其中<u>增量规模较小，通常每两到三周生成并提供给客户新的系统版本</u>。这些方法将客户纳入开发过程，迅速获得关于需求变更的反馈 _(__<font style="color:rgb(35,31,32);">They involve customers in the development process to get rapid feedback on changing requirements</font>_<font style="color:rgb(35,31,32);">)</font>。它们通过使用非正式沟通而非正式会议及书面文件来减少文档编制的需求(_<font style="color:rgb(35,31,32);">They minimize documentation by using informal communications rather than formal meetings with written documents</font>_<font style="color:rgb(35,31,32);">)</font>。

敏捷开发方法将**设计和实现(**_<font style="color:rgb(35,31,32);">design and implementation</font>_<font style="color:rgb(35,31,32);">)</font>视为软件开发过程中的核心活动。它们还将其他活动（如需求获取和测试）整合到设计和实现中。相比之下，基于计划的开发方法将软件工程分为各个阶段，每个阶段的输出用于规划后续的过程活动。

<!-- 这是一张图片，ocr 内容为：PLAN-BASED DEVELOPMENT DESIGN AND REQUIREMENTS REQUIREMENTS IMPLEMENTATION ENGINEERING SPECIFICATION REQUIREMENTS CHANGE REQUESTS AGILE DEVELOPMENT REQUIREMENTS DESIGN AND ENGINEERING IMPLEMENTATION FIGURE 3.1 PLAN-DRIVEN AND AGILE DEVELOPMENT -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737296199679-bfcd4ec1-9e27-4923-a6aa-1e1286d027b4.png)

**图 3.1** 展示了**基于计划的开发方法（Plan-based development）**与**敏捷开发方法(****<font style="color:rgb(35,31,32);">agile methods</font>****)**在系统规范化方面的主要区别。

在**基于计划的软件开发 plan-driven**过程中，迭代iteration发生在活动内部，通常通过**正式文档formal documents **进行阶段间的沟通。例如，需求会逐步演变，最终生成需求规范文档specification。这将成为设计和实现阶段的输入。

而在**敏捷开发方法 agile **中，迭代贯穿于各个活动。因此，需求和设计是联合开发的_(__<font style="color:rgb(35,31,32);">The requirements and the design are developed together)</font>_，而不是分阶段进行的。  

敏捷开发与计划驱动开发并非完全对立，而是可以相辅相成。在敏捷过程中，可以在一定程度上引入计划和文档编制，而计划驱动流程也可以通过分阶段交付的方式实现敏捷的特点。

### 3. Agile method
#### 课本背景：
在20世纪80年代和90年代初期，人们普遍认为，<u>获得更优质软件的最佳方式</u>是通过**仔细的项目规划** careful project planning、**正式化的质量保证 **formalized quality assurance、**使用分析和设计方法 **use of analysis and design methods supported by software tools（这些方法由软件工具支持），以及**受控且严格的软件开发流程**controlled and rigorous software development processes。这种观点来自于**<font style="color:#DF2A3F;">负责开发大型、长期使用的软件系统</font>**（如航空航天和政府系统）的软件工程社区。

<u>这种计划驱动的方法</u>是为<u>大型团队开发的软件设计</u>的，这些团队分布在不同的公司，通常在长期项目中协同工作。例如，这种类型的软件可以是现代飞机的控制系统，从初始规格到最终部署可能需要长达10年的时间。计划驱动方法在规划、设计和记录系统上涉及大量开销。这种开销在以下情况下是合理的：当需要协调多个开发团队的工作时；当系统是一个关键系统时；以及当许多不同的人需要在其生命周期中维护该软件时。

然而，**当这种繁重的计划驱动开发方法应用于小型和中型企业系统时，涉及的开销过于庞大，以至于主导了软件开发过程**。与程序开发和测试相比，人们在系统如何开发上花费了更多的时间( _<font style="color:rgb(35,31,32);">More time is spent on how the system should be developed than on program development and testing</font>_<font style="color:rgb(35,31,32);">)</font>。随着系统需求的变化，返工变得至关重要，并且原则上，规范和设计必须随程序一起改变。

**对这些繁重方法的不满，促使在20世纪90年代末开发了敏捷方法**。**这些方法允许开发团队将注意力集中在软件本身，而不是其设计和文档上**。**敏捷方法最适合于系统需求在开发过程中****<font style="background-color:#FBDE28;">经常迅速变化的应用程序开发</font>**。它们<u>旨在快速向客户交付可用的软件，客户可以在系统的后续迭代中提出新的和更改后的需求。这些方法旨在减少流程官僚化，避免长期来看可能没有用的工作，并消除可能永远不会被使用的文档。</u>

---

#### Agile manifesto
敏捷方法的理念体现在**敏捷宣言（****<font style="color:rgb(35,31,32);">agile manifesto）</font>**中，该宣言由这些方法的主要开发者提出，具体声明如下：  

<!-- 这是一张图片，ocr 内容为：WE ARE UNCOVERING BETTER WAYS OF DEVELOPING SOFTWARE BY DOING IT AND HELPING OTHERS DO IT. THROUGH THIS WORK WE HAVE COME TO VALUE: INDIVIDUALS AND INTERACTIONS OVER PROCESSES AND TOOLS WORKING SOFTWARE OVER COMPREHENSIVE DOCUMENTATION CUSTOMER COLLABORATION OVER CONTRACT NEGOTIATION RESPONDING TO CHANGE OVER FOLLOWING A PLAN THAT IS, WHILE THERE IS VALUE IN THE ITEMS ON THE RIGHT, WE VALUE ITEMS ON THE LEFT MORE -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737298025691-9a807e53-2810-403e-8944-32d09d2cb8d7.png)

我们通过亲自实践和协助他人实践软件开发，探索出更好的开发方式。通过这些工作，我们重视以下内容：

+ **个人和互动胜过流程和工具**
+ **可运行的软件胜过详尽的文档**
+ **与客户的合作胜过合同的谈判**
+ **响应变化胜过遵循计划**

**虽然我们承认右边的内容也有价值，但我们更重视左边的内容。**

---

#### Principle of Agile methods
<font style="color:rgb(35,31,32);">Figure 3.2 The principles of agile methods</font>

<!-- 这是一张图片，ocr 内容为：PRINCIPLE DESCRIPTION CUSTOMERS SHOULD BE CLOSELY INVOLVED THROUGHOUT THE DEVELOPMENT PROCESS. CUSTOMER INVOLVEMENT THEIR ROLE IS PROVIDE AND PRIORITIZE NEW SYSTEM REQUIREMENTS AND TO EVALUATE THE ITERATIONS OF THE SYSTEM. EMBRACE CHANGE EXPECT THE SYSTEM REQUIREMENTS TO CHANGE, AND SO DESIGN THE SYSTEM TO ACCOMMODATE THESE CHANGES. INCREMENTAL DELIVERY THE SOFTWARE IS DEVELOPED IN INCREMENTS, WITH THE CUSTOMER SPECIFVING THE REQUIREMENTS TO BE INCLUDED IN EACH INCREMENT. FOCUS ON SIMPLICITY IN BOTH THE SOFTWARE BEING DEVELOPED AND IN THE MAINTAIN SIMPLICITY DEVELOPMENT PROCESS.WHEREVER POSSIBLE,ACTIVELY WORK TO ELIMINATE COMPLEXITY FROM THE SYSTEM. THE SKILLS OF THE DEVELOPMENT TEAM SHOULD BE RECOGNIZED AND EXPLOITED. PEOPLE,NOT PROCESS DEVELOP THEIR OWN WAYS OF WORKING WITHOUT TEAM MEMBERS SHOULD BE LEFT TO DEVELOP THE PRESCRIPTIVE PROCESSES. -->
![](https://cdn.nlark.com/yuque/0/2025/png/42435744/1737297745583-237f62ff-b0be-4a4e-8b8a-7283b5e132fc.png)

所有敏捷方法都建议，软件应以增量的方式 incrementally 开发和交付。这些方法基于不同的敏捷流程，但它们共享一套基于敏捷宣言的原则，因此具有许多共同点。上图3.2列出了这些原则。

**敏捷方法的原则：**

1. **客户参与（Customer involvement）**：客户应在整个开发过程中密切参与。他们的角色是提供和优先化新的系统需求，并评估系统的每次迭代。
2. **拥抱变化(Embrace change)**：系统需求预期会发生变化，因此需要设计系统以适应这些变化。
3. **增量交付(Incremental delivery)**：软件以增量形式开发，由客户指定每个增量中需要包含的功能需求。
4. **保持简洁(Maintain simplicity)**：专注于开发中的简单性以及开发过程本身的简单性。在可能的情况下，积极致力于消除系统中的复杂性。
5. **以人为本，而非流程(people,not process)**：应该识别并充分利用开发团队的技能，让团队成员自行决定如何工作，而无需遵循过于规定化的流程。

**图表说明（Figure 3.2）：**

+ 敏捷方法的原则以客户需求和系统迭代为中心。
+ 强调团队合作与灵活性，尽量减少过度复杂的过程或文档。
+ 这些方法提倡在开发过程中不断响应需求变化，注重实际功能的交付。

---

#### 敏捷方法在两种系统开发中特别成功(Agile method app;icability)：
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739404221897-2a2dc64d-b2fd-40f7-90ac-4a15bfc4e46b.png)

1. **产品开发 Product development**：当一家软件公司正在开发用于销售的小型或中型产品 small or medium-sized product 时。<u>事实上，现在几乎所有的软件产品和应用程序都使用敏捷方法开发</u>。
2. **定制系统开发 Custom system development**：在组织内部进行的定制系统开发中，客户明确承诺参与开发过程，并且受到影响的软件外部利益相关者和法规较少。<font style="color:rgb(35,31,32);">There is a clear commitment from the customer to become involved in the development process and where there are few external stakeholders and regulations that affect the software</font><font style="color:rgb(35,31,32);">.</font>

敏捷方法在这些情况下表现良好，因为它能够在产品经理或系统客户与开发团队之间实现持续通信 continuous communication。软件本身是一个独立的系统stand-alone system，而不是与同时开发的其他系统紧密集成。因此，无需协调并行的开发流 no need to coordinate parallel development systems。小型和中型系统可以由共处同一地点的团队开发，因此团队成员之间的非正式沟通效果良好。

#### Tools of Agile Process:
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739404303658-d86221f2-1a5a-4ccc-9dc0-10e386b1e011.png)

## 六、Summary
- [ ] <font style="color:rgb(0,0,0);">Software processes are the activities involved in producing a software system. </font>
- [ ] **<font style="color:rgb(0,0,0);">Software process models </font>**<font style="color:rgb(0,0,0);">are </font><font style="color:#2F4BDA;">abstract representations</font><font style="color:rgb(0,0,0);"> of these processes. </font>
- [ ] <font style="color:rgb(0,0,0);">General process models describe the organization of software processes. </font>
- [ ] **<font style="color:rgb(0,0,0);">Requirements engineering </font>**<font style="color:rgb(0,0,0);">is the process of </font><font style="color:#2F4BDA;">developing a software specification. </font>
- [ ] **<font style="color:rgb(0,0,0);">Design and implementation </font>**<font style="color:rgb(0,0,0);">processes are concerned with </font>**<font style="color:rgb(0,0,0);">transforming </font>**<font style="color:rgb(0,0,0);">a requirements specification</font>**<font style="color:rgb(0,0,0);"> into</font>**<font style="color:rgb(0,0,0);"> an </font>**<font style="color:rgb(0,0,0);">executable software system.</font>**
- [ ] **<font style="color:rgb(0,0,0);">Software validation </font>**<font style="color:rgb(0,0,0);">is the process of </font>**<font style="color:rgb(0,0,0);">checking </font>**<font style="color:rgb(0,0,0);">that the system conforms to its specification and that it meets the real needs of the users of the system. </font>
- [ ] **<font style="color:rgb(0,0,0);">Software evolution </font>**<font style="color:rgb(0,0,0);">takes place when you change existing software systems </font>**<font style="color:rgb(0,0,0);">to meet new requirements</font>**<font style="color:rgb(0,0,0);">. The software must evolve to remain useful. </font>
- [ ] <font style="color:rgb(0,0,0);">Processes should include activities such as </font>**<font style="color:rgb(0,0,0);">prototyping</font>**<font style="color:rgb(0,0,0);"> and </font>**<font style="color:rgb(0,0,0);">incremental</font>**<font style="color:rgb(0,0,0);"> delivery to cope with change. </font>
- [ ] <font style="color:rgb(0,0,0);">Processes may be structured for </font>**<font style="color:rgb(0,0,0);">iterative development</font>**<font style="color:rgb(0,0,0);"> and </font>**<font style="color:rgb(0,0,0);">delivery</font>**<font style="color:rgb(0,0,0);"> so that changes may be made without disrupting the system as a whole.</font>
- [ ] <font style="color:rgb(0,0,0);">The principal approaches to process improvement are agile approaches, geared to reducing process overheads, and maturity-based approaches based on better process management and the use of good software engineering practice. </font>
- [ ] <font style="color:rgb(0,0,0);">The SEI process maturity framework identifies </font>**<font style="color:rgb(0,0,0);">maturity levels</font>**<font style="color:rgb(0,0,0);"> that essentially correspond to the use of good software engineering practice.</font>

