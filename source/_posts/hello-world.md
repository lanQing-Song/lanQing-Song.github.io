---
title: Hello World
cover: https://cdn.jsdelivr.net/gh/lanQing-Song/blogimages/1.png
type:
comments: true
aplayer: true
---



Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```
<!-- 各种提示标签标签 -->
More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

{% note default %}
default 提示块标籤
{% endnote %}

{% note primary no-icon %}
primary 提示块标籤
{% endnote %}

{% note success %}
success 提示块标籤
{% endnote %}

{% note info %}
info 提示块标籤
{% endnote %}

{% note warning %}
warning 提示块标籤
{% endnote %}

{% note danger %}
danger 提示块标籤
{% endnote %}



<!-- 图库显示 -->
<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '關於漫威的圖片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '關於OH MY GIRL的圖片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>



<!-- 能自动调整位置的图片插入模式 -->
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

<!-- 点击按钮查看答案-->
哪個英文字母最酷？ {% hideInline 因為西裝褲(C裝酷),查看答案,#FF7242,#fff %}

門裏站着一個人? {% hideInline 閃 %}
content: 文本內容

display: 按鈕顯示的文字(可選)

bg: 按鈕的背景顏色(可選)

color: 按鈕文字的顏色(可選)



<!-- 选择显示内容 -->
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}



<!-- Button按钮的使用方法 -->
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url]         : 鏈接
[text]        : 按鈕文字
[icon]        : [可選] 圖標
[color]       : [可選] 按鈕背景顔色(默認style時）
                      按鈕字體和邊框顔色(outline時)
                      default/blue/pink/red/purple/orange/green
[style]       : [可選] 按鈕樣式 默認實心
                      outline/留空
[layout]      : [可選] 按鈕佈局 默認為line
                      block/留空
[position]    : [可選] 按鈕位置 前提是設置了layout為block 默認為左邊
                      center/right/留空
[size]        : [可選] 按鈕大小
                      larger/留空
<!-- 示例1 -->
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,blue larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,pink larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,red larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,purple larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,orange larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,green larger %}


<!-- 示例2 -->
<div class="btn-center">
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline blue larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline pink larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline red larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline purple larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline orange larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline green larger %}
</div>

<!-- 示例3 -->
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,block %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,block center larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,block right outline larger %}
