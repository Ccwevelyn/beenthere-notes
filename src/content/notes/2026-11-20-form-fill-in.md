---
title: Form Fill-in
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/form-fill-in.pdf
grade: year-3
semester: fall
course: human-factors-user-interfaces
date: 2026-11-20
order: 4
published: true
---
# Form Fill-in

The elements of form fill-in design include the following：

## 1. Meaningful title
点明主题。Identify the topic and avoid computer terminology.

Form 的标题要和 form 内容息息相关，且有意义、通俗易懂。

## 2. Comprehensible instructions
- **简单易懂**：Describe the user's tasks in familiar terminology. Be brief.
- **新用户指引**：If more information is needed, make a set of help screens available to the novice user.
- **语言规范**
  - 提示用户输入信息用 **Type**。
  - 用 **press** 表示操作特殊键。e.g. Press Enter, Press Tab
  - 不用 Enter 来表示“输入内容”，因为 Enter 同时是键盘上的按键名称，容易产生歧义。
  - 统一 grammatical style for instructions

## 3. Label the fields
标签放在一致的位置（e.g., top or left of the field）。

A less desirable location：把提示文字（label）放在输入框里面，用灰色字体显示。

- **优点**：Saves space
- **缺点**：Labels disappear as soon as users start typing, requiring users to remember what is needed, which often leads to errors.

## 4. Limit data entry
- Make sure all fields are really needed. 只保留真正必要的字段
- Carefully set default values（e.g., use the current location）；通过合理默认值减少输入负担
- 例：Maybe only a single phone number is enough
- Some fields may be removed entirely and reserved only for large devices. 将非关键字段仅在桌面端显示，移动端隐藏或延后到“完善资料”阶段。

## 5. Explanatory messages for fields
字段的解释信息。

- 邮箱输入框下方显示：“你的邮箱将作为登录用户名”。
- 密码输入框下方显示：“至少 8 位，包含字母和数字” → permissible value
- Appear in a standard position, such as next to or below the field。提示信息应靠近字段，preferably using a different font and style（如灰色小字、斜体）来区分说明与主要字段。

**说明 Explanatory message**：对主要字段的补充说明，解释用途或输入规则。

**主要字段 Main field**：表单里真正要用户填写的内容的“标题”或“标签”，告诉用户这个输入框是用来填什么的。如 Email address → 邮箱地址。

## 6. Error prevention
Prevent users from entering incorrect values. 强调在 error 发生之前的 prevent。

示例：

- 电话号码字段只允许输入数字。
- 日期字段提供日期选择器，而不是自由输入。

改正（24卷）：2-D menus should be used to replace the textboxes in order to prevent incorrect dates to be entered.

## 7. Error recovery
- 错误信息置于页面顶部。Summarize errors at the top of the page. 顶部汇总错误，可以让用户一眼看到有哪些问题需要修正。
- 字段高亮，在具体字段旁边标注错误：Highlight errors in the form.
- 给出正确规则：If users enter unacceptable values, indicate permissible values for the field.

## 8. Immediate feedback
最好即时反馈 Immediate feedback。

如果只能在整个表单提交后才反馈错误，那么需要清楚地标示出需要更正的字段位置。

具体做法：

- 在页面最上方显示一个错误列表或提示框。
- 同时在具体字段旁边也标注错误，方便用户定位。
- 如：在邮箱字段旁显示红字：“请输入有效的邮箱地址”，同时在顶部显示“请修正以下错误”。

## 9. Logical grouping and sequencing of fields
Related fields should be adjacent and should be aligned with blank spaces for separation between groups.

强调信息结构、认知负担、信息逻辑上的对齐。强调相关字段分组在一起。字段排列遵循常见输入顺序。如：城市 → 州/省 → 邮编。Reduce cognitive load.

## 10. Visually appealing layout of the form
强调视觉呈现的对齐。Alignment creates a feeling of order and comprehensibility. → 对齐

## 11. Familiar field labels
Common terms should be used. 使用 “Home Address”，而不是 “Domicile”。

## 12. Consistent terminology and abbreviations
缩写。在表单或系统说明中，所有字段的名称和缩写要保持统一，不要随意更换。

e.g. 全程使用 “Address”，避免 “Employee Address”、“ADDR.” 和 “Addr.” 混用。

## 13. Visible space and boundaries for data-entry fields
字段的尺寸与边界应可见，让用户预判可输入的长度、是否需要缩写或精简（abbreviations or trimming）。

- 合适的输入框宽度能暗示最大字符数。An appropriately sized box can show the maximum field length.
- Avoid misleading sizing：不要给很短的框却允许超长输入；也不要给超宽框却仅允许少量字符。
- Field width matches expected input length
- Visible boundaries：提示可输入区域。

## 14. Convenient cursor movement
支持键盘导航（Tab、方向键）。

## 15. Required fields clearly marked
For fields that must be filled in, the word “Required” or some other indicator（e.g., *）should be visible.

布局时，先放必填，后放选填。

## 16. Privacy and data sharing information
告知用户数据用途与访问方，降低个人信息填写时的焦虑。

如，字段旁提示：“We do not share your phone number without consent（未经同意不会共享你的手机号）”。

## 17. Accessibility
确保读屏器等辅助技术可顺畅使用。

## 18. Completion signal
当用户填写完表单时，表单底部有一个明显的 Submit / Save / ... 按钮，用户点击后才提交。

Avoid automatic form submission when the final field is filled in because users may wish to review or alter previous field entries.

在长表单里，提供多个“提交/保存”按钮，减少滚动负担。
