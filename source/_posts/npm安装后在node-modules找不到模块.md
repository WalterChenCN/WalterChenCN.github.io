---
title: npm安装后模块后在node_modules找不到
tags:
  - 运维
photos:
  - 'https://source.unsplash.com/random/960x540/?2018-09-06 03:22:26'
date: 2018-09-06 11:22:26
---

#### 问题描述

最近通过npm安装mocha，运行命令提示 『 Error: Cannot find test framework "mocha" in /Users/walter/node_modules 』，这时候看node_modules文件夹下确实没有**mocha** 
<!--more-->
#### 解决方案

我们可以通过在node_modules文件夹里增加全局模块的快捷方式或者链接，解决方法如下：

> npm link mocha

OK，正常啦






<p><section style="text-align: center; font-size: 1em; font-weight: inherit; text-decoration: inherit; color: rgb(255, 255, 255); border-color: rgb(117, 117, 118); box-sizing: border-box;"><section data-width="2em" style="width: 2em; height: 2em; margin-right: auto; margin-left: auto; border-radius: 100%; box-sizing: border-box; background-color: rgb(117, 117, 118);"><section style="display: inline-block; padding-right: 0.5em; padding-left: 0.5em; font-size: 1em; line-height: 2; box-sizing: border-box; color: inherit;"><section class="135brush" data-brushtype="text" style="box-sizing: border-box; color: inherit;">完</section></section></section><section style="margin-top: -1em; margin-bottom: 1em; box-sizing: border-box; color: inherit;"><section data-width="35%" style="border-top-width: 1px; border-top-style: solid; width: 35%; float: left; border-color: rgb(117, 117, 118); box-sizing: border-box; color: inherit;"></section><section data-width="35%" style="border-top-width: 1px; border-top-style: solid; width: 35%; float: right; border-color: rgb(117, 117, 118); box-sizing: border-box; color: inherit;"></section></section></section><br><br></p>