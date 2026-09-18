---
title: Ch10_Django's ORM vs SQL
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/ch10_djangos-orm-vs-sql.pdf
grade: year-2
semester: spring
course: web-design-development
date: 2026-09-18
order: 4
published: true
---
Database management：

+ ORM** (Object Relational Mapper) **

**- **<u>Higher level of abstraction; More efficient ; Generate slower;</u>

+ SQL 

-<u>Higher hands-on management ; Complex query; </u>

---

**Advantages of Django ORM**

+ <font style="color:rgb(0,0,0);">A huge improvement in development speed, code maintenance, security and ease of development.</font>
+ <font style="color:rgb(0,0,0);">Much easier and less error-prone 容易出错 to modify the query</font>
+ <font style="color:rgb(0,0,0);">By using ORM exclusively you are guaranteed to be safe from SQL injections.</font>
+ <font style="color:rgb(0,0,0);">It supports seamless schema generation and migration, and queries with them, data validation and integrity, switching between various databases without rewriting code, etc. </font>

---

##### Raw SQL queries
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745633887892-01976584-10cd-4033-9e61-1607f0ae190d.png)

Django 提供了两种执行原生 SQL 的方式：

1. 使用 `Manager.raw()` 方法。-- 通过调用模型管理器的**raw()**方法，执行原生SQL查询并返回模型实例。
2. 绕过模型层，直接执行自定义的 SQL 语句



```python
queryset = MyModel.objects.raw('SELECT * FROM my_table WHERE id=%s', [1])
for obj in queryset:
    print(obj.name)
```

`raw()` 返回的结果是 **RawQuerySet** 类的实例，其行为与 Django 的 QuerySet 类似，但直接映射原生 SQL 的输出。

---

###### 使用raw（）方法


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745634131563-074c3d0c-76ce-4058-b1c6-531b22b85321.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745634885796-17ddc426-1c50-4313-8ed9-dc5ef05d7af1.png)

=> 通过 `params` 参数将用户提供的数据动态传递给 `raw()` 方法，以执行 **动态的 SELECT 查询**。  

+ `**<font style="color:#DF2A3F;">[lname]</font>**`**<font style="color:#DF2A3F;"> 是参数列表，表示占位符 </font>**`**<font style="color:#DF2A3F;">%s</font>**`**<font style="color:#DF2A3F;"> 的具体值。  </font>**
+  这里的 `'%s'` 是一个占位符，用来表示 SQL 查询的参数。它并不是直接拼接字符串，而是通过安全的参数传递机制避免 SQL 注入。  

---

###### 通过connection.cursor()直接执行SQL查询
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745634955545-d2a37c2d-2b35-491d-aa99-98aedae3dd8b.png)

1. **使用 **`django.db.connection`：

Django 提供了一个默认的数据库连接对象 `connection`，您可以通过它执行自定义 SQL 查询。

该对象允许通过 `connection.cursor()` 方法获取游标（cursor），游标用于执行 SQL 和获取查询结果。

2. **游标的主要方法**：
+ `cursor.execute(sql, [params])`：**<font style="color:#DF2A3F;">用于执行 SQL 查询</font>**。例如，您可以执行插入、更新或选择语句。
+ `cursor.fetchone()` 或 `cursor.fetchall()`：用于**<font style="color:#DF2A3F;">返回 SQL 查询的结果：</font>**
    - `fetchone()` 返回单行数据。
    - `fetchall()` 返回所有查询结果。

```python
from django.db import connection

with connection.cursor() as cursor:
    cursor.execute("SELECT * FROM my_table WHERE id=%s", [1])  # 执行查询
    rows = cursor.fetchall()  # 获取所有查询结果
    for row in rows:
        print(row)  # 处理查询结果
```

该方法绕过了Django的ORM提供的抽象层，在某些场合提高了灵活性

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745635716498-5129118d-e3a5-4970-9725-436f3eb595e4.png)

---

`**<u>raw()</u>**`**<u> 方法</u>**

返回一个 **RawQuerySet**，与模型实例绑定。可以像处理 QuerySet 一样迭代结果

```python
queryset = MyModel.objects.raw('SELECT * FROM my_table WHERE id=%s', [1])
for obj in queryset:
    print(obj.name)  # 访问模型字段
```

+ 不支持复杂的非模型字段查询。
+ 只能用于读取操作（SELECT 查询），不适用于写入（INSERT、UPDATE）或删除操作。

`**<u>connection.cursor()</u>**`

+ 提供完全灵活的原生 SQL 操作能力。
+ **结果类型**：
    - 返回原始查询结果（通常是元组列表）。

```python
from django.db import connection
with connection.cursor() as cursor:
    cursor.execute('SELECT name FROM my_table WHERE id=%s', [1])
result = cursor.fetchall()
for row in result:
    print(row[0])  # 手动解析结果
```

+ 可执行任何类型的 SQL（包括 SELECT、INSERT、UPDATE、DELETE）。
+ 适合操作复杂的数据库结构（如存储过程或触发器）。
+ 返回的是原始数据（例如元组），不与 Django 模型绑定。

| **特性** | `raw()` | `connection.cursor()` |
| --- | --- | --- |
| **适用场景** | 模型绑定的 SELECT 查询 | 任意原生 SQL（包括写入、删除） |
| **结果类型** | Django 模型实例（RawQuerySet） | 原始查询结果（如元组） |
| **复杂查询支持** | 仅支持与模型相关的简单查询 | 支持复杂查询和数据库特性 |
| **写入支持** | 不支持 | 完全支持（INSERT、UPDATE、DELETE 等） |
| **易用性** | 简单，易于结合 ORM | 灵活性高，但需要手动处理结果 |


---

###### SQL injection!
<font style="color:rgb(0,0,0);">Using the </font><font style="color:rgb(0,0,255);">params argument ([ ]) </font><font style="color:rgb(0,0,0);">and leaving the placeholders (%s) unquoted protects you from SQL injection attacks</font>

```python
Person.objects.raw('SELECT * FROM myapp_person WHERE last_name = %s', [lname])
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745636154798-0e997a67-d2ff-49de-933d-1734ff0c310d.png)

```sql
select * from library_book where borrower='';
select true;
-- (注释掉后续语句)
```

---

 在 Django 中，推荐使用 `cursor.execute()` 的参数列表形式，它会自动转义非法字符，避免用户输入直接影响查询逻辑  

```python
def search(request):
    ...
    cursor.execute("SELECT * FROM blog_post WHERE title LIKE %s", ['%' + query + '%'])
```

+ **关键点**：
    - `%s` 是 SQL 语句的占位符，表示需要动态填充的数据。
    - 第二个参数 `[query]` 是参数列表，`query` 的值会被安全地嵌入到查询中替换占位符。
+ **安全注入过程**：
    - 用户输入的数据会被数据库驱动程序转义，确保不会破坏 SQL 语法。
    - 即使用户输入恶意内容（如 `'; DELETE FROM blog_post;--`），查询只会将它视为字符串处理，而不会执行破坏性操作。

---

##### 考试重点！
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745636499370-f13c0fcd-5ca3-422f-aec3-0a58bdc5805a.png)

对比RAW SQL查询和Django ORM查询的不同

**（左）主要逻辑**：

+ 通过 `request.GET` 获取查询参数 `q`，判断是否存在有效值。
+ 使用 `connection.cursor()` 直接执行原生 SQL 查询，并使用 `%s` 占位符安全地传递参数。
+ 查询结果通过自定义方法 `dictfetchall()` 转换为字典列表，便于在模板中使用。

**（右）Django ORM 查询**

```python
def search(request):
    if 'q' in request.GET and request.GET['q']:
        query = request.GET['q']
        posts = Post.objects.filter(title__icontains=query)
        return render(request, 'search_results.html', {'posts': posts, 'query': query})
    else:
        return HttpResponse('Submit a search term.')
```

+ 定义了一个名为 `search` 的视图函数，接受 `request` 对象作为参数。
+ `request.GET` 是一个字典样式的对象，包含所有通过 GET 方法传递的参数。

`'q' in request.GET` 检查参数名 `q` 是否存在于用户请求中。

`request.GET['q']` 检查 `q` 的值是否非空。

如果用户提交了 `q` 参数且值有效，则继续执行，否则进入 `else` 块。

+ 从请求中提取参数 `q` 的值，并将其赋值给变量 `query`；`query` 代表用户输入的搜索关键词。  
+ `Post.objects.filter()` 方法返回一个 QuerySet，对应数据库中满足查询条件的数据。
    - `title__icontains=query` 表示对 `Post` 模型的 `title` 字段进行模糊查询：
        * `icontains` 是一种字段查询表达式，表示大小写不敏感的子字符串匹配。
        * 如果 `query` 是 "Django"，它会匹配任何包含 "django" 或 "Django" 的标题。
+ `posts` 是一个 QuerySet，包含符合条件的所有结果。

---

**Django 的 **`request.GET`

+ `request.GET` 是一个 **类字典对象**，包含所有通过查询字符串传递的参数。
+ 它是 Django 的 `HttpRequest` 对象的一部分，专门用于处理 GET 请求数据。

```python
query = request.GET['q']
```

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745637130634-f3894f0e-3151-4d11-92b6-7404d5cc6cd5.png)

默认情况下，Python 的 DB API 返回结果为列表，仅包含字段值。  

`zip()`** 和 **`dict()`：

+ `zip(columns, row)` 将字段名和数据值配对。
+ `dict()` 将配对转换为字典。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745637094069-a10ffe53-02cf-445d-b1c8-0a92150be480.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745637103972-60eb25b4-c0be-4f57-8c0c-9302502fd390.png)

