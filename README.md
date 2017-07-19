# chrome-extension-development
chrome扩展开发功能示范与开发环境配置。该项目包含了chrome开发中常见功能与场景的代码例子，以及一个使用webpack配置的开发环境，其支持以下特性：

1. javascript语法支持`ES6+`(babel-preset-latest)、css支持`sass`预编译器。
2. 支持`React-jsx`，自定义页面（`option`、`browser action`等）和`content scripts`都可以使用react构建ui。
3. 代码变动支持时时重载扩展runtime、`HMR`(Hot Moudule Replacement)。
4. 支持eslint代码预检查，可以在页面与终端控制台显示错误与警告。

![][5]

## 使用 & usage

* Fork或者直接clone本项目
* 打开chrome的扩展页面的开发者模式（`chrome://extensions/`）
* 接下来有两种方式：
    * 方式一：点击“加载已解压的扩展程序”，选择`<chrome-extension-development>/extension/`目录
    * 方式二：将目录下的 extension.crx 托放到扩展管理页面上即可

然后就可以看到本示例扩展已成功安装到你的chrome浏览器上。

## 开发 & development

#### 开始开发
进入到项目目录，运行：

    $ npm install
    $ npm start

* 然后按照前面的方式一安装插件即可看到开发模式下插件效果，更改代码后会自动更新插件
* 需要注意的是，扩展所在目录在项目下的`extension`目录下（默认，可更改）。开发代码在项目的 `app` 目录下。经过webpack打包，代码会被放到 `extension/dist/` 目录下。  
之所以这么做，是为了避免chrome会将 `node_modules` 目录当作扩展一部分加载，否则会导致chrome假死。
* <font color="red">默认开发环境中的package.json中端口号为`3666`，`https`为true。这是因为本扩展示例针对github，github为全站https，所以`content scripts`中代码需要socket连接到`dev server`，只能是https方式。但是这样子会由于浏览器默认拦截未通过证书验证的https请求，所以需要手动访问下开发服务器地址(https://localhost:3666/sockjs-node/info) ，选择 `高级`、`仍然访问`，保证可以访问https形式的开发服务器。如果你要注入`content scripts`的站点不是https协议，可以直接将`package.json`中的`https`配置为`false`。</font>

#### 打包上线

    $ npm run build

以上命令依然会将代码输出到 `extension/dist/` ，但是js代码会经过压缩，大大减小文件体积。  

发布插件时，通过 `chrome://extensions/` 页面的 `打包扩展程序` 按钮，依然选择项目下的extension目录，然后就可以将打包后的扩展文件发布到`chrome store`。

## 扩展功能介绍

该示例扩展以github.com站点为示范，围绕chrome开发中常用场景示范了几个基础开发实现方法。

#### github站内搜索
* 支持任意页面通过右键，快速搜索选中的文本。参考：[background.js][10]
* github.com页面支持选中文本旁边出现 快捷搜索图标（因为我们的插件只针对github网站的配置了content scripts）。参考：[modules/App/search.js][17]

#### 地址栏快捷访问 omnibox
![][7]

* 地址栏输入 `gh`，然后空格，就会激活插件的omnibox功能，然后根据提示快速访问开发者主页、项目，或者直接回车搜索github。参考：[modules/omnibox][18]

#### 页面设置

![][0]

* 该处示范了获取当前激活tab页面基础信息（例如：标题、地址），并生成了一个地址二维码，方便手机扫一扫快速访问页面。
* 中间几个按钮开关，是对github.com站点进行显示优化，包括护眼模式（黑色皮肤，只是示例，所以效果并不怎么样）、简洁模式（去除了部分不重要的侧边栏）、全屏模式（就是页面宽度占满屏幕）。
* 绿色按钮是示范常见对于tab的各种操作。以上参考：[components/PageOption][12]、[modules/App][15]
* 最后还有一个动态icon的开关，可以控制右上角的icon是否自动旋转。参考：[background.js][10]、[utils/animationIcon][11]

[0]: https://user-images.githubusercontent.com/3774036/28240644-12bfd4e4-69b8-11e7-81cc-b4bbbd50f307.png
[1]: https://user-images.githubusercontent.com/3774036/28240645-12ef4da0-69b8-11e7-80dd-b35bae7d1861.png
[3]: https://user-images.githubusercontent.com/3774036/28240646-12eff8ea-69b8-11e7-8120-6c2588dfbb9b.png
[4]: https://user-images.githubusercontent.com/3774036/28240643-12babf86-69b8-11e7-9ace-75b93e707b3b.png
[5]: https://user-images.githubusercontent.com/3774036/28240610-b7533ac4-69b7-11e7-8423-0179cadc7a93.png "全屏1"
[6]: https://user-images.githubusercontent.com/3774036/28240609-b75342c6-69b7-11e7-86c4-9bc2519c50b0.png "全屏2"
[7]: https://user-images.githubusercontent.com/3774036/28306210-0d71f31c-6bd1-11e7-8e73-2260ecb63324.png "omnibox"

[10]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/background.js
[11]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/utils/animateIcon/index.js
[12]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/components/PageOptions/index.js
[13]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/components/PageGithub/index.js
[14]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/components/PageExecute/index.js
[15]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/modules/App/index.js
[16]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/components/PageWorkSpace/index.js
[17]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/modules/App/search.js
[18]: https://github.com/qiqiboy/chrome-extension-development/blob/master/app/modules/omnibox/index.js

#### Github

![][1]

这里只是示范了用react开发了个获取github开发者信息以及其仓库列表的开发。参考：[components/PageGithub][13]

### 代码注入

![][3]

这里示范了几种不同的在扩展中像页面注入各种代码的方式（内联注入开关）。不同注入方式会影响对页面上js作用域的访问差异。参考：[components/PageExecute][14]、[background.js][10]、[modules/App][15]

#### 工作区

![][4]

这个功能是可以将当前浏览器窗口的打开的tab记录下来，方便后面随时可以一键重新打开这一组tab，快速开始工作。参考：[components/PageWorkSpace][16]


## 更多 & more

本示例还会继续不定时开发，添加更多功能，可能会将自己的各种使用chrome的小需求，自己实现出来。

欢迎fork本项目，谢谢阅读。^_^
