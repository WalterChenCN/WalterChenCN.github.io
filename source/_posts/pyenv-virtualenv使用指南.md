---
title: pyenv-virtualenv使用指南
date: 2016-09-07 15:52:00
tags: 
	- Python
	- Pyenv
	- Virtualenv
photos:
 - http://image.pplock.com/2016/09/21/Olivier-10.jpg
 
---

简单的说, pyenv 是一个Python管理工具, 这个是和我们常用的 virtualenv 有所不同, 前者是对 Python 的版本进行管理, 实现不同版本的切换和使用. 后者测试创建一个虚拟环境, 与系统环境以及其他 Python 环境隔离, 避免干扰.
<!-- more -->
简单的说一下使用方法

####安装不同版本的 Python

```
pyenv install <version> #安装特定版本的 Python
pyenv install 3.5.0     #安装 Python 3.5.0
```
当我的系统 Python 版本是 2.7, 但是有个 叫做 py3-project 需要用 Python3 来运行的时候, 只需要这样做:

```
cd py3-project         #进入项目目录
pyenv local 3.5.0      #将当前目录下的Python环境切换为3.5.0
pyenv version          #运行显示通过pyenv设置之后的python版本, 得到结果是3.5.0 
python --version       #查看Python版本, 得到结果也是3.5.0
```
此时就可以通过 python3.5 来运行项目了, 在这个项目之外的目录运行 Python, 你会发现仍然是系统版本. 通过pyenv可以给不同的目录设置不同的 Python 版本, 还可以通过 ``pyenv global`` 这个命令切换整个全局的 Python版本. 赞爆了是不是.

告别virtualenv

接下来, 再介绍一个工具, 配合pyenv, 让我告别了用了很久了virtualenv.这个工具叫做 pyenv-virtualenv, 安装方法依然跳过, 至于使用, 你只需要记住三条命令:

```
pyenv virtualenv 3.5.0 env    #创建一个 Python 版本为 3.5.0 的环境, 环境叫做 env
pyenv activate env_name       #激活 env 这个环境, 此时 Python 版本自动变为 3.5.0, 且是独立环境
pyenv deactivate              #离开已经激活的环境
```
嗯, 就酱，enjoying.

