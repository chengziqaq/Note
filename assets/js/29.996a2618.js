(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{766:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"快速入门-编写你的第一个-django-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门-编写你的第一个-django-应用"}},[s._v("#")]),s._v(" 快速入门: 编写你的第一个 Django 应用")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[s._v("建议先看 [官方文档]快速入门: 编写你的第一个 Django 应用")]),s._v(" "),a("p",[s._v("熟悉django开发基本步骤")]),s._v(" "),a("p",[s._v("再查看 Django官方文档(完整版)")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/contents/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Django官方文档(完整版)"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/intro/tutorial01/",target:"_blank",rel:"noopener noreferrer"}},[s._v("[官方文档]快速入门: 编写你的第一个 Django 应用"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1Tx411d7E7",target:"_blank",rel:"noopener noreferrer"}},[s._v("Django视频"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/chengziqaq/Note/tree/master/docs/cs/backend/Django/django%E6%A1%86%E6%9E%B6_%E8%A7%86%E9%A2%91%E6%96%87%E6%A1%A3.docx",target:"_blank",rel:"noopener noreferrer"}},[s._v("django框架_视频文档.docx"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/chengziqaq/Django",target:"_blank",rel:"noopener noreferrer"}},[s._v("之前的学习笔记"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"django介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django介绍"}},[s._v("#")]),s._v(" Django介绍")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Django",target:"_blank",rel:"noopener noreferrer"}},[s._v("维基百科介绍"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Web%E5%BA%94%E7%94%A8%E6%A1%86%E6%9E%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("扩展阅读: Web应用框架"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"项目规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目规划"}},[s._v("#")]),s._v(" 项目规划")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("项目规划")])]),s._v(" "),a("li",[a("p",[s._v("测试数据")])])]),s._v(" "),a("h2",{attrs:{id:"编写你的第一个-django-应用-第-5-部分-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写你的第一个-django-应用-第-5-部分-测试"}},[s._v("#")]),s._v(" 编写你的第一个 Django 应用，第 5 部分: 测试")]),s._v(" "),a("p",[s._v("https://docs.djangoproject.com/zh-hans/3.1/intro/tutorial05/#writing-our-first-test")]),s._v(" "),a("ul",[a("li",[s._v("shell里测试")]),s._v(" "),a("li",[s._v("编写测试代码")])]),s._v(" "),a("h3",{attrs:{id:"如果你对测试有个整体规划-那么它们就几乎不会变得混乱。下面有几条好的建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果你对测试有个整体规划-那么它们就几乎不会变得混乱。下面有几条好的建议"}},[s._v("#")]),s._v(" 如果你对测试有个整体规划，那么它们就几乎不会变得混乱。下面有几条好的建议：")]),s._v(" "),a("ul",[a("li",[s._v("对于每个模型和视图都建立单独的 "),a("code",[s._v("TestClass")])]),s._v(" "),a("li",[s._v("每个测试方法只测试一个功能")]),s._v(" "),a("li",[s._v("给每个测试方法起个能描述其功能的名字")])]),s._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),a("p",[s._v("三个双引号")]),s._v(" "),a("h2",{attrs:{id:"编写你的第一个-django-应用-第-6-部分-静态文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写你的第一个-django-应用-第-6-部分-静态文件"}},[s._v("#")]),s._v(" 编写你的第一个 Django 应用，第 6 部分: 静态文件")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("警告\nThe")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("% static %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" template tag is not available for use in static files which aren't generated by Django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like your stylesheet. You should always use relative paths to link your static files between each other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" because then you can change STATIC_URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("used by the static template tag to generate its URLs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" without having to modify a bunch of paths in your static files as well.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面警告的一个例子:")]),s._v(" "),a("ul",[a("li",[s._v("例子中的css中引入背景图片需要用相对路径, 这个背景图片不是由Django生成,不能使用{% static %}引用")])]),s._v(" "),a("h2",{attrs:{id:"编写你的第一个-django-应用-第-7-部分-自定义后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写你的第一个-django-应用-第-7-部分-自定义后台"}},[s._v("#")]),s._v(" 编写你的第一个 Django 应用，第 7 部分: 自定义后台")]),s._v(" "),a("h2",{attrs:{id:"进阶指南-如何编写可重用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶指南-如何编写可重用程序"}},[s._v("#")]),s._v(" 进阶指南：如何编写可重用程序")]),s._v(" "),a("h1",{attrs:{id:"详细文档学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细文档学习"}},[s._v("#")]),s._v(" 详细文档学习")]),s._v(" "),a("h2",{attrs:{id:"开始项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始项目"}},[s._v("#")]),s._v(" 开始项目")]),s._v(" "),a("h3",{attrs:{id:"新建项目和app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建项目和app"}},[s._v("#")]),s._v(" 新建项目和app")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("django-admin startproject 项目名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里我的项目名称为learning")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python manage.py startapp app名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里我的app名称为app1")]),s._v(" "),a("h3",{attrs:{id:"配置mysql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql数据库"}},[s._v("#")]),s._v(" 配置mysql数据库")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装mysql")])]),s._v(" "),a("li",[a("p",[s._v("创建数据库(django不会自动创建数据库 需要手动创建)")]),s._v(" "),a("p",[s._v("我创建的 数据库名字 为django_learning, 后面要填入到配置文件中")])]),s._v(" "),a("li",[a("p",[s._v("安装pymysql")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" PyMySQL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("由于django官方貌似不支持pymysql,但是有其他办法用pymysql(且mysqldb安装失败)")])]),s._v(" "),a("li",[a("p",[s._v("setting.py中")]),s._v(" "),a("p",[s._v("来源: "),a("a",{attrs:{href:"https://adamj.eu/tech/2020/02/04/how-to-use-pymysql-with-django/",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to use PyMySQL with Django"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pymysql\n\nDATABASES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.mysql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据库名字'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据库用户名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据库密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql数据库服务器ip地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql端口'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Fake PyMySQL's version and install as MySQLdb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://adamj.eu/tech/2020/02/04/how-to-use-pymysql-with-django/")]),s._v("\npymysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"final"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npymysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("install_as_MySQLdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("测试")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("进入django命令行"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \npython manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py shell\n运行下面两个命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MySQLdb\nMySQLdb\n\n输出信息"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pymysql'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/.../site-packages/pymysql/__init__.py'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("注册项目到Django setting文件中.")])]),s._v(" "),a("li",[a("p",[s._v("增加下面这句到 INSTALLED_APPS, 其中app1替换为自己的app名字,")]),s._v(" "),a("p",[s._v("也就是")]),s._v(" "),a("p",[s._v("python manage.py startapp app名称 这里面的app名称")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app1.apps.App1Config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改后看起来是这样的")]),s._v(" "),a("div",{staticClass:"language-tex line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tex"}},[a("code",[s._v("INSTALLED_APPS = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'app1.apps.App1Config',\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("编写app1/models.py文件测试")]),s._v(" "),a("p",[s._v("这是Django官方教程里的一个例子")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Question")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    question_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    pub_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DateTimeField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date published'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Choice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    question "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ForeignKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Question"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" on_delete"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CASCADE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    choice_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    votes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IntegerField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("命令行操作, 执行数据库相关的操作:")]),s._v(" "),a("p",[s._v("必须先执行第一句,生成数据库迁移文件")]),s._v(" "),a("p",[s._v("第二句是应用到数据库.")]),s._v(" "),a("p",[s._v("第一句只是在本地生成数据库相关的py文件")]),s._v(" "),a("p",[s._v("第二句才操作数据库")]),s._v(" "),a("ul",[a("li",[s._v("第一句")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("python manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py makemigrations\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("第二句")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("python manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py migrate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("执行后可以查看 app1/migrations/0001_initial.py这个文件, 如下")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Generated by Django 3.1 on 2020-08-07 13:42")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" migrations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deletion\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Migration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("migrations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Migration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    initial "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n    dependencies "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    operations "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        migrations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CreateModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Question'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            fields"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AutoField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("auto_created"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" primary_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" serialize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verbose_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'question_text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pub_date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DateTimeField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("verbose_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date published'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        migrations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CreateModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Choice'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            fields"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AutoField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("auto_created"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" primary_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" serialize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verbose_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'choice_text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'votes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IntegerField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'question'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ForeignKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("on_delete"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deletion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CASCADE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app1.question'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("可以对照数据库查看表结构, 我用的sequel pro 2(mac软件)")]),s._v(" "),a("p",[s._v("可以看到有 app1_choice 和 app1_question 还有其他django系统用到的数据库. 可以看出是 models.py中的 应用名称_类名")]),s._v(" "),a("p",[s._v("变量名为数据表里的列名, 所以很直观models.py是定义数据库相关的")]),s._v(" "),a("p",[s._v("进一步可以查看表结构")])])])])]),s._v(" "),a("p",[s._v("接下来就可以看模型和数据库试试")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("所需python包记录")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("pip freeze "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" requirements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"模型和数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型和数据库"}},[s._v("#")]),s._v(" 模型和数据库")]),s._v(" "),a("h3",{attrs:{id:"模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型"}},[s._v("#")]),s._v(" 模型")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一般来说，每一个模型都映射一张数据库表。")])]),s._v(" "),a("li",[a("p",[s._v("每个模型都是一个 Python 的类，这些类继承 "),a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/ref/models/instances/#django.db.models.Model",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("django.db.models.Model")]),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("模型类的每个属性都相当于一个数据库的字段。")])]),s._v(" "),a("li",[a("p",[s._v("利用这些，Django 提供了一个自动生成访问数据库的 API；请参阅 "),a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/topics/db/queries/",target:"_blank",rel:"noopener noreferrer"}},[s._v("执行查询"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("一个 "),a("code",[s._v("id")]),s._v(" 字段会被自动添加，但是这种行为可以被改写。请参阅 "),a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/topics/db/models/#automatic-primary-key-fields",target:"_blank",rel:"noopener noreferrer"}},[s._v("自动设置主键"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("当你向 "),a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/ref/settings/#std:setting-INSTALLED_APPS",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("INSTALLED_APPS")]),a("OutboundLink")],1),s._v(" 添加新的应用的时候，请务必运行 "),a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/ref/django-admin/#django-admin-migrate",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("manage.py migrate")]),a("OutboundLink")],1),s._v("，此外你也可以先使用以下命令进行迁移 "),a("a",{attrs:{href:"https://docs.djangoproject.com/zh-hans/3.1/ref/django-admin/#django-admin-makemigrations",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("manage.py makemigrations")]),a("OutboundLink")],1),s._v("。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);