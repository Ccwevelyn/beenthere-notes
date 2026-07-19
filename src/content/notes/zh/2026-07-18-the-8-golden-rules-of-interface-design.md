---
title: The 8 Golden Rules of Interface Design
description: 8 Golden Rules 在 HCI 中十分重要，不仅是第一次作业的主要依据，也会在期中/期末考试有所体现。所以，理解 8
  Golden Rules 至关重要！
type: note
lang: zh
grade: year-3
semester: fall
course: human-factors-user-interfaces
date: 2026-07-19
published: true
attachments:
  - file: the-8-golden-rules-of-interface-design.pdf
    label: 8-golden-rule
---
1985 Ben Shneiderman

[https://youtu.be/INY_M3Ebtck?si=ZfVcA6OIsx5VlGLq](https://youtu.be/INY_M3Ebtck?si=ZfVcA6OIsx5VlGLq)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760667305076-187fdb13-b555-4d87-8ba3-1cc66a97036c.png)

1. **<font style="color:#2F4BDA;">Strive for consistency</font>**

**<font style="color:rgb(0, 0, 0);">Consistent sequences of actions</font>**<font style="color:rgb(0, 0, 0);"> should be required in similar situations;</font>

+ <font style="color:rgb(0, 0, 0);">在类似的情境中，用户执行的操作流程应该保持一致。</font>
+ <font style="color:rgb(0, 0, 0);">在电商网站中，无论是购买书籍还是衣服，流程都应是：选择 → 加入购物车 → 结账 → 确认。 </font><font style="color:rgb(0, 0, 0);">   </font>
+ <font style="color:rgb(0, 0, 0);">符合用户习惯</font>

**<font style="color:rgb(0, 0, 0);">Identical terminology</font>**<font style="color:rgb(0, 0, 0);"> should be used in prompts, menus, and help screens</font>

+ <font style="color:rgb(0, 0, 0);">如果按钮叫“Submit”，那帮助文档也应该说“Click Submit”，而不是“Click Send”。</font>
+ <font style="color:rgb(0, 0, 0);">在中英文界面中，“保存”应始终对应 “Save”，不能一处叫“Store”。</font>

**<font style="color:rgb(0, 0, 0);">Consistent color, layout, capitalization, fonts</font>**<font style="color:rgb(0, 0, 0);">, and so on, should be employed throughout</font>

+  颜色、布局、大小写、字体等视觉元素应保持一致。 

**<font style="color:rgb(0, 0, 0);">Exceptions</font>**<font style="color:rgb(0, 0, 0);">, such as required confirmation of the delete command or no echoing of passwords, </font>**<font style="color:rgb(0, 0, 0);">should be comprehensible and limited in number </font>**<font style="color:rgb(0, 0, 0);"> </font>

+ 例外情况（如删除前确认、密码不显示）应易于理解且数量有限。
    - 删除文件时弹出“确认删除？”是合理的例外。
    - 密码输入框不显示字符是安全例外，但用户名输入框就不该隐藏。

---

2. **<font style="color:#2F4BDA;">Cater to universal usability</font>**

<font style="color:rgb(0, 0, 0);">Recognize the needs of </font>**<font style="color:rgb(0, 0, 0);">diverse</font>**<font style="color:rgb(0, 0, 0);"> users and design for plasticity, facilitating transformation of content. </font>

**<font style="color:rgb(0, 0, 0);">Novice</font>**<font style="color:rgb(0, 0, 0);"> 初学者 to </font>**<font style="color:rgb(0, 0, 0);">expert</font>**<font style="color:rgb(0, 0, 0);"> differences, </font>**<font style="color:rgb(0, 0, 0);">age</font>**<font style="color:rgb(0, 0, 0);"> ranges, </font>**<font style="color:rgb(0, 0, 0);">disabilities</font>**<font style="color:rgb(0, 0, 0);">, </font>**<font style="color:rgb(0, 0, 0);">international variations</font>**<font style="color:rgb(0, 0, 0);">, and technological diversity each enrich the spectrum of requirements that guides design. </font>

<font style="color:rgb(0, 0, 0);">Adding features for </font>**<font style="color:rgb(0, 0, 0);">novices</font>**<font style="color:rgb(0, 0, 0);">, such as </font>**<font style="color:rgb(0, 0, 0);">explanations</font>**<font style="color:rgb(0, 0, 0);">, and features for </font>**<font style="color:rgb(0, 0, 0);">experts</font>**<font style="color:rgb(0, 0, 0);">, such as shortcuts and faster pacing 步调、节奏, enriches the interface design and improves perceived quality.</font>

+ **Novice to expert differences**（新手与专家差异）：新手需要引导与解释，专家则追求效率与控制。
    - 新手用户： 提供课程导航、术语解释、学习进度提示、自动播放关闭 autoplay toggle  选项等  
    - 专家：支持跳过基础模块、快速访问高级内容、提供快捷键控制视频播放速度 keyboard shortcuts for playback speed    
+ **Age ranges**（年龄层次）：年长者可能需要**更大字体**、简化流程 simplified workflow 、色彩对比增强 enhanced color contrast  ；年轻人可能偏好探索性设计。
+ **Disabilities**（残障情况）：包括视觉（ Screen reader support，color-blind-friendly palettes）、听觉（Subtitles）、运动障碍（voice control, enlarged clickable areas），需提供辅助功能。
    - Enlarged clickable area - 扩大点击区域
        * 指的是将按钮、链接或交互元素的**可点击范围**设计得更大  
        * 老年用户（手指控制不精确）、运动障碍用户（使用辅助设备或手势）
+ **International variations**（国际差异）：语言、<u>图标理解（</u>Culturally neutral icons）、<u>颜色含义</u>等**文化**因素。
    -  文化中性图标”是指**不依赖特定文化背景理解**的图标设计  
        *  使用猪表示“储蓄”在某些文化中可能不适宜。  
+ **Technological diversity**（技术多样性）：**设备性能**、网络条件、操作习惯的差异。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760258597655-a5bcb227-42da-4599-b21b-2d8a108e729f.png)

---

3. **<font style="color:#2F4BDA;">Offer informative feedback</font>**

<font style="color:rgb(0, 0, 0);">For </font>**<font style="color:rgb(0, 0, 0);">every user action</font>**<font style="color:rgb(0, 0, 0);">, there should be an </font>**<font style="color:rgb(0, 0, 0);">interface feedback</font>**<font style="color:rgb(0, 0, 0);">. </font>

<font style="color:rgb(0, 0, 0);">For</font>**<font style="color:#DF2A3F;"> frequent and minor actions</font>**<font style="color:rgb(0, 0, 0);">, the response can be modest 适中, whereas for </font>**<font style="color:#DF2A3F;">infrequent and major actions</font>**<font style="color:rgb(0, 0, 0);">, the response should be more substantial. </font>

<font style="color:rgb(0, 0, 0);">对于频繁且轻微的操作，可给予简洁反馈；而对于不常见且重要的操作，应提供更显著的反馈。  </font>

**<font style="color:rgb(0, 0, 0);">Visual presentation</font>**<font style="color:rgb(0, 0, 0);"> of the objects of </font>**<font style="color:rgb(0, 0, 0);">interest</font>**<font style="color:rgb(0, 0, 0);"> provides a convenient environment for </font>**<font style="color:rgb(0, 0, 0);">showing changes explicitly</font>**

+ Visual presentation of the objects of interest  按钮、图表、进度条、卡片、列表项等界面元素。 
+  for showing changes explicitly  颜色变化、位置移动、数值更新、状态切换等。  

**<font style="color:#004347;">关注于</font>****<font style="color:#004347;background-color:#FBDE28;">不断的的反馈</font>**

+ Button **color change** on **hover**
+ 输入错误： Show error message + red border  
+ Icon color change or animation** on click  **
+ 边框高亮、显示输入提示  Highlighted border, show input hint  
+ 加载动画 - 表示系统正在处理： Loading spinner  
+ 进度条： Progress bar  

---

4. **<font style="color:#2F4BDA;">Design dialogs to yield closure  设计对话流程以实现闭合感  </font>**

**<font style="color:rgb(0, 0, 0);">Sequences of actions</font>**<font style="color:rgb(0, 0, 0);"> should be organized into groups with a </font>**<font style="color:rgb(0, 0, 0);">beginning, middle, and end</font>**<font style="color:rgb(0, 0, 0);">. </font>

<font style="color:rgb(0, 0, 0);">Informative </font>**<font style="color:rgb(0, 0, 0);">feedback</font>**<font style="color:rgb(0, 0, 0);"> </font>**<font style="color:rgb(0, 0, 0);">at the completion of a group of actions</font>**<font style="color:rgb(0, 0, 0);"> gives users the satisfaction of accomplishment, a sense of relief, a signal to drop contingency plans from their minds, and an indicator to prepare for the next group of actions. </font>

<font style="color:rgb(0, 0, 0);">For example, e-commerce websites =>  Select product → Add to cart → Checkout → Pay → Confirmation page  </font>

<font style="color:rgb(0, 0, 0);"> 操作流程应有</font>**<font style="color:rgb(0, 0, 0);">明确起止</font>**<font style="color:rgb(0, 0, 0);">，结束时给予完成感反馈  </font>

<font style="color:rgb(0, 0, 0);"> 让用户知道任务已完成，可安心进入下一阶段  </font>

**<font style="color:rgb(0, 0, 0);">如果可以明确看到，是阶段性任务的结束 </font>**<font style="color:rgb(0, 0, 0);">=> </font>_**<font style="color:rgb(0, 0, 0);">Design dialogs to yield closure</font>**_

**<font style="color:#004347;">关注于</font>****<font style="color:#004347;background-color:#FBDE28;">一个阶段任务结束</font>****<font style="color:#004347;">的反馈</font>**

+ 完成注册流程： Welcome page with username  
+ 成功登录：Show welcome message + redirect to dashboard  
+ 表单填写完成并提交  'Submission successful' message + redirect to confirmation  

---

5. **<font style="color:#2F4BDA;">Prevent errors</font>**

<font style="color:rgb(0, 0, 0);">As much as possible, design the interface so that </font>**<font style="color:rgb(0, 0, 0);">users cannot make serious errors</font>**<font style="color:rgb(0, 0, 0);">;</font>

<font style="color:rgb(0, 0, 0);">设计目标是“</font><u><font style="color:rgb(0, 0, 0);">防错优先”</font></u>**<u><font style="color:rgb(0, 0, 0);">（Error Prevention）</font></u>**<font style="color:rgb(0, 0, 0);">，而不是“事后纠错”</font>

**<font style="color:#004347;">不允许非法输入、不显示无效选项、不允许误操作</font>**<font style="color:rgb(0, 0, 0);">。 </font><font style="color:rgb(0, 0, 0);"> </font>

+ <font style="color:rgb(0, 0, 0);">For example, </font>**<font style="color:rgb(0, 0, 0);">gray out menu items that are not appropriate</font>**<font style="color:rgb(0, 0, 0);"> and </font>**<font style="color:rgb(0, 0, 0);">do not allow alphabetic characters in numeric entry fields</font>**<font style="color:rgb(0, 0, 0);"> . </font>
+ <font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 0, 0);">Gray out, disable click  置灰处理，禁止点击</font>
+ <font style="color:rgb(0, 0, 0);"> Show 'Password must include uppercase, lowercase, and digits'</font>

<font style="color:rgb(0, 0, 0);">If users make an error, the interface should offer </font>**<font style="color:rgb(0, 0, 0);">simple, constructive, and specific instructions for recovery. </font>**

+ <font style="color:rgb(0, 0, 0);">For example, users should </font>**<font style="color:rgb(0, 0, 0);">not have to retype an entire</font>**<font style="color:rgb(0, 0, 0);"> name-address form if they enter an invalid zip code but rather should be guided to </font>**<font style="color:rgb(0, 0, 0);">repair only the faulty part</font>**<font style="color:rgb(0, 0, 0);">.</font><font style="color:#004347;"> </font>**<font style="color:#004347;">局部</font>**<font style="color:rgb(0, 0, 0);">纠错</font>
+ <font style="color:rgb(0, 0, 0);"> Preserve filled data, guide to fix specific fields  </font>

<font style="color:rgb(0, 0, 0);">Erroneous actions should leave the interface state unchanged, or the interface should give instructions about restoring the state</font><font style="color:rgb(0, 0, 0);">.</font>

<font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 0, 0);">错误操作</font>**<font style="color:rgb(0, 0, 0);">不应改变界面状态</font>**<font style="color:rgb(0, 0, 0);">，或界面应提供恢复状态的指导 </font><font style="color:rgb(0, 0, 0);"> </font>

+  如果用户误点'删除'，应弹出<font style="background-color:#FBDE28;">确认框</font>，而不是立即清除数据。
+ 如果状态已变，应提供“撤销”或“恢复”选项。  

---

6. **<font style="color:#2F4BDA;">Permit easy reversal of actions</font>**

<font style="color:rgb(0, 0, 0);">As much as possible, actions should be</font>**<font style="color:rgb(0, 0, 0);"> reversible</font>**<font style="color:rgb(0, 0, 0);">. </font>

<font style="color:rgb(0, 0, 0);">This feature relieves anxiety, since users know that errors can be undone, and encourages exploration of unfamiliar options. </font>

<font style="color:rgb(0, 0, 0);">The units of reversibility may be a single action, a data-entry task, or a complete group of actions, such as entry of a name-address block.</font>

+  Support **<font style="color:#004347;">Undo/Redo</font>** 撤销/重做 buttons  

---

7. **<font style="color:#2F4BDA;">Keep users in control</font>**

<font style="color:rgb(0, 0, 0);">Experienced users strongly desire the sense that they are </font>**<font style="color:rgb(0, 0, 0);">in charge of the interface </font>**<font style="color:rgb(0, 0, 0);">and that the interface responds to their actions. -> 页面听话</font>

+  Customizable layout  
+  Skipping animations -> Provide 'Skip' button to avoid forced wait  
+  Support **keyword** search, filters, sorting  => 用户主动获取信息，系统响应其意图  
+  Users can click arrows or swipe to change slides  => 用户决定何时切换内容，而不是被动等待自动播放  

**<font style="color:rgb(0, 0, 0);">They don't want surprises or changes in familiar behavior,</font>**<font style="color:rgb(0, 0, 0);"> </font>

+ 当界面设计**与用户以往的生活习惯不一致**时，如果处理不当，会导致用户失去控制感、产生挫败感，甚至放弃使用
    -  用户习惯从右向左阅读（如阿拉伯语用户），但界面为左到右布局  
    -  用户习惯点击图标展开菜单，但系统要求长按  

<font style="color:rgb(0, 0, 0);">and they are annoyed by </font>**<font style="color:rgb(0, 0, 0);">tedious data-entry sequences</font>**<font style="color:rgb(0, 0, 0);">,</font><u><font style="color:rgb(0, 0, 0);"> </font></u>**<u><font style="color:rgb(0, 0, 0);">difficulty in obtaining necessary information</font></u>**<font style="color:rgb(0, 0, 0);">, and </font>**<font style="color:rgb(0, 0, 0);">inability to produce their desired result</font>**<font style="color:rgb(0, 0, 0);">.</font>

+ Users cannot clearly read text, losing control over information

---

8. **<font style="color:#2F4BDA;">Reduce short-term memory load</font>**

<font style="color:rgb(0, 0, 0);">Humans' limited capacity for information processing in short-term memory (the rule of thumb is that people can remember 'seven plus or minus two chunks' of information 经验法则是人们能记住“七个上下两个信息块”) </font>

<font style="color:rgb(0, 0, 0);">It requires that designers </font>**<font style="color:rgb(0, 0, 0);">avoid</font>**<font style="color:rgb(0, 0, 0);"> interfaces in which </font>**<font style="color:rgb(0, 0, 0);">users must remember information from one display and then use that information on another display</font>**<font style="color:rgb(0, 0, 0);">.</font>

<font style="color:rgb(0, 0, 0);">It means that cellphones should not require reentry of phone numbers, </font>

<font style="color:rgb(0, 0, 0);">这意味着手机不应要求用户重新输入电话号码 -  复制粘贴、自动填充、联系人选择等方式可以避免重复输入。  </font>

<font style="color:rgb(0, 0, 0);">Website locations should remain visible  </font>

<font style="color:rgb(0, 0, 0);">用户不应被迫记住网址，应能随时查看或点击链接。  </font>

<font style="color:rgb(0, 0, 0);">And lengthy forms should be compacted to fit a single display. </font><font style="color:rgb(0, 0, 0);">避免分页表单或跳转式填写，减少用户在不同页面之间记忆字段内容。  </font>



