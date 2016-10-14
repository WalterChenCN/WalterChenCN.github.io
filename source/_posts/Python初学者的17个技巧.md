---
title: Python初学者的17个技巧
date: 2016-09-30 11:00:00
tags: 
	- Python
	- Tips
photos:
 - http://image.pplock.com/2016/09/21/Olivier.jpg
 
---

&nbsp;&emsp;&emsp;
[译]以下是我在Python中，多年来收集的一些有用的快捷键和工具。希望你能在其中找到对你有帮助的。
<!-- more -->
#### 交换变量

```
x = 6
y = 5
x, y = y, x
print x
>>> 5
print y
>>> 6
```

#### if 语句在行内

```
print "hello" if True else "world"
>>> hello
```

#### 连接

下面的最后一种方式在绑定两个不同类型的对象时显得很酷。

```
nfc = ["Packers", "49ers"]
afc = ["Ravens", "Patriots"]
print nfc + afc
>>> ['Packers', '49ers', 'Ravens', 'Patriots']
 
print str(1) + " world"
>>> 1 world
 
print `1` + " world"
>>> 1 world
 
print 1, "world"
>>> 1 world
print nfc, 1
>>> ['Packers', '49ers'] 1
```

#### 计算技巧

```
# 向下取整
print 5.0//2
>>> 2
# 2的5次方
print 2**5
>> 32
```

#### 注意浮点数

```
print .3/.1
>>> 2.9999999999999996
print .3//.1
>>> 2.0
```

#### 数值比较

```python
x = 2
if 3 > x > 1:
    print x
>>> 2
if 1 < X > 0:
    print x
>>> 2
```

#### 两个列表同时迭代

```
nfc = ["Packers", "49ers"]
afc = ["Ravens", "Patriots"]
 
for teama, teamb in zip(nfc, afc):
    print teama + " vs. " + teamb
 
>>> Packers vs. Ravens
>>> 49ers vs. Patriots
```

#### 带索引的列表迭代

```
teams = ["Packers", "49ers", "Ravens", "Patriots"]
for index, team in enumerate(teams):
    print index, team
 
>>> 0 Packers
>>> 1 49ers
>>> 2 Ravens
>>> 3 Patriots
```

#### 列表推导

已知一个列表，筛选出偶数列表方法：

```
numbers = [1,2,3,4,5,6]
even = []
for number in numbers:
	if number%2 == 0:
		even.append(number)
```

用下面的代替

```
numbers = [1,2,3,4,5,6]
even = [number for number in numbers if number%2 == 0]
```

#### 字典推导

```
colors = ["red","black","blue","green"]
print {key: value for value, key in enumerate(colors)}
>>> {'blue': 2, 'green': 3, 'black': 1, 'red': 0}
```

#### 初始化列表的值

```
items = [0]*3
print items
>>> [0, 0, 0]
```

#### 将列表转换成字符串

```
colors = ["red","black","blue","green"]
print ",".join(colors)
>>> 'red, black, blue, green'
```

#### 从字典中获取元素

虽然用try/except处理也可以比配不到的情况，但这样不是很优雅

```
data = {'user': 1, 'name': 'Max', 'three': 4}
try:
    is_admin = data['admin']
except KeyError:
    is_admin = False
```

这样做更好

```
data = {'user': 1, 'name': 'Max', 'three': 4}
is_admin = data.get('admin', False)
```

#### 获取子列表

```
x = [1,2,3,4,5,6]
 
# 前3个 
print x[:3]
>>> [1,2,3]
 
# 中间4个
print x[1:5]
>>> [2,3,4,5]
 
# 最后3个
print x[-3:]
>>> [4,5,6]
 
# 奇数项
print x[::2]
>>> [1,3,5]
 
# 偶数项
print x[1::2]
>>> [2,4,6]
```

#### 60个字符解决FizzBuzz

前段时间Jeff Atwood 推广了一个简单的编程练习叫FizzBuzz，问题引用如下：

> 写一个程序，打印数字1到100，3的倍数打印“Fizz”来替换这个数，5的倍数打印“Buzz”，对于既是3的倍数又是5的倍数的数字打印“FizzBuzz”。

这里有一个简短的方法解决这个问题：

```
for x in range(1,101):print"Fizz"[x%3*4:]+"Buzz"[x%5*4:]or x
```

#### 集合

用到``Counter``库

```
from collections import Counter
print Counter("hello")
>>> Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})
```

#### 迭代工具

和``collections``库一样，还有一个库叫``itertools``

```
from itertools import combinations
 
teams = ["Packers", "49ers", "Ravens", "Patriots"]
for game in combinations(teams, 2):
    print game
 
>>> ('Packers', '49ers')
>>> ('Packers', 'Ravens')
>>> ('Packers', 'Patriots')
>>> ('49ers', 'Ravens')
>>> ('49ers', 'Patriots')
>>> ('Ravens', 'Patriots')
```

False == True

在python中，``True``和``False``是全局变量，因此

```
False = True
if False:
	print "Hello"
else:
	print "World"
>>> Hello
```

> 原文：[Python Shortcuts for the Python Beginner](http://www.maxburstein.com/blog/python-shortcuts-for-the-python-beginner/)



<section style="text-align: center; font-size: 1em; font-weight: inherit; text-decoration: inherit; color: rgb(255, 255, 255); border-color: rgb(117, 117, 118); box-sizing: border-box;"><section data-width="2em" style="width: 2em; height: 2em; margin-right: auto; margin-left: auto; border-radius: 100%; box-sizing: border-box; background-color: rgb(117, 117, 118);"><section style="display: inline-block; padding-right: 0.5em; padding-left: 0.5em; font-size: 1em; line-height: 2; box-sizing: border-box; color: inherit;"><section class="135brush" data-brushtype="text" style="box-sizing: border-box; color: inherit;">完</section></section></section><section style="margin-top: -1em; margin-bottom: 1em; box-sizing: border-box; color: inherit;"><section data-width="35%" style="border-top-width: 1px; border-top-style: solid; width: 35%; float: left; border-color: rgb(117, 117, 118); box-sizing: border-box; color: inherit;"></section><section data-width="35%" style="border-top-width: 1px; border-top-style: solid; width: 35%; float: right; border-color: rgb(117, 117, 118); box-sizing: border-box; color: inherit;"></section></section></section>
