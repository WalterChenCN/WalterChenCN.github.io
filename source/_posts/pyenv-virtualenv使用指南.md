---
title: pyenv-virtualenv使用指南
date: 2016-09-07 15:52:00
tags: 
	- Python
	- Pyenv
	- Virtualenv
photos:
 - 'https://source.unsplash.com/random/1366x768/?2016-09-07 15:52:00'
 
---
&nbsp;  
&emsp;&emsp;简单的说, pyenv 是一个Python管理工具, 这个是和我们常用的 virtualenv 有所不同, 前者是对 Python 的版本进行管理, 实现不同版本的切换和使用. 后者则是创建一个虚拟环境, 与系统环境以及其他 Python 环境隔离, 避免干扰.
<!-- more -->
简单的说一下使用方法

####安装不同版本的 Python

```
pyenv install <version> #安装特定版本的 Python
pyenv install 3.5.0     #安装 Python 3.5.0
```
&emsp;&emsp;当我的系统 Python 版本是 2.7, 但是有个 叫做 py3-project 需要用 Python3 来运行的时候, 只需要这样做:

```
cd py3-project         #进入项目目录
pyenv local 3.5.0      #将当前目录下的Python环境切换为3.5.0
pyenv version          #运行显示通过pyenv设置之后的python版本, 得到结果是3.5.0 
python --version       #查看Python版本, 得到结果也是3.5.0
```
&emsp;&emsp;此时就可以通过 python3.5 来运行项目了, 在这个项目之外的目录运行 Python, 你会发现仍然是系统版本. 通过pyenv可以给不同的目录设置不同的 Python 版本, 还可以通过 ``pyenv global`` 这个命令切换整个全局的 Python版本. 赞爆了是不是.

告别virtualenv

&emsp;&emsp;接下来, 再介绍一个工具, 配合pyenv, 让我告别了用了很久了virtualenv.这个工具叫做 pyenv-virtualenv, 安装方法依然跳过, 至于使用, 你只需要记住三条命令:

```
pyenv virtualenv 3.5.0 env    #创建一个 Python 版本为 3.5.0 的环境, 环境叫做 env
pyenv activate env_name       #激活 env 这个环境, 此时 Python 版本自动变为 3.5.0, 且是独立环境
pyenv deactivate              #离开已经激活的环境
```
嗯, 就酱，Just enjoying！

<section style="text-align: center; font-size: 1em; font-weight: inherit; text-decoration: inherit; color: rgb(255, 255, 255); border-color: rgb(117, 117, 118); box-sizing: border-box;"><section data-width="2em" style="width: 2em; height: 2em; margin-right: auto; margin-left: auto; border-radius: 100%; box-sizing: border-box; background-color: rgb(117, 117, 118);"><section style="display: inline-block; padding-right: 0.5em; padding-left: 0.5em; font-size: 1em; line-height: 2; box-sizing: border-box; color: inherit;"><section class="135brush" data-brushtype="text" style="box-sizing: border-box; color: inherit;">完</section></section></section><section style="margin-top: -1em; margin-bottom: 1em; box-sizing: border-box; color: inherit;"><section data-width="35%" style="border-top-width: 1px; border-top-style: solid; width: 35%; float: left; border-color: rgb(117, 117, 118); box-sizing: border-box; color: inherit;"></section><section data-width="35%" style="border-top-width: 1px; border-top-style: solid; width: 35%; float: right; border-color: rgb(117, 117, 118); box-sizing: border-box; color: inherit;"></section></section></section>
