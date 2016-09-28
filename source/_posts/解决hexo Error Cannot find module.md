---
title: 解决hexo Error Cannot find module
date: 2016-09-01 15:52:00
tags: 
	- Hexo
	- Mac
photos:
 - http://image.pplock.com/2016/09/21/Olivier-6.jpg
 
---


Mac安装hexo之后，执行任何命令都报这个错，无比蛋疼。于是寻求解决办法：

### 官方办法
来自[hexojs](https://github.com/hexojs/hexo/issues/1922):
<!-- more -->
 DTrace install may have issue, use this:
 
``` 
$ npm install hexo --no-optional
```

### 再寻良策
大概解决了一部分同学的问题，but，我就不行，于是再次google，找到了[这篇文章](http://kikoroc.com/2016/05/04/resolve-hexo-DTraceProviderBindings-MODULE-NOT-FOUND.html)，看了一下卸载安装可以解决，尝试后依然不行。我灵机一动，在重装hexo-cli时，忽略操作应该可行，于是：

```
$ npm uninstall hexo-cli -g
$ npm install hexo-cli -g --no-optional

```
解决。

另外，还遇到一个问题：ERROR Deployer not found: git，完美解决[here](https://github.com/hexojs/hexo/issues/1040)

