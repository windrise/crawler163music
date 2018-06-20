## 爬取网易云音乐.mp3文件
#### 不使用selenium和PhantomJS，通过fiddler抓包工具解析网易云音乐框架中的core.js的加密算法。

# 获取歌单列表中歌曲的.mp3文件的url
----
## 1、分析目标网站`http://music.163.com/`（Chrome）
先随便点入一个歌单，右键点击查看框架源代码  
![1.jpg](https://github.com/windrise/crawler163music/blob/master/163/picture/1.jpg)   
然后我们发现歌曲中的链接url是隐藏的，点击进入的是单曲，并且单曲中的播放链接是经过JavaScript渲染处理过的。  
![2.png](https://github.com/windrise/crawler163music/blob/master/163/picture/2.png)  
![3.png](https://github.com/windrise/crawler163music/blob/master/163/picture/3.png)  
---
## 2、分析数据包，获取加密的四个参数，以方便我们伪造POST请求，最终我们要做的就是通过python里面的加密函数按照core.js中的加密算法加密必要的参数，以此来伪造POST请求。
这时候就要具体分析数据包了。打开开发者模式，F5刷新
选中XHR（XMLHttpRequest）选项，Name栏是requests和response，Initiator栏是涉及的文件。core.js是主要的js脚本。把它下载到本地
Name栏中，从`refresh?csrf_token=` 之后
第一个是 付费信息的请求和回应
第二个是 权限的请求和回应
第三个是 状态的反馈feedback的请求和回应
第四个是 对应歌单的请求和回应。
![4.png](https://github.com/windrise/crawler163music/blob/master/163/picture/4.png)
以第四个为例，发现POST请求中有两个参数 params和encSecKey,而且后面跟了很长的字符串，这就是被加密的参数。
response是歌单信息。
![5.png](https://github.com/windrise/crawler163music/blob/master/163/picture/5.png)   
![6.png](https://github.com/windrise/crawler163music/blob/master/163/picture/6.png)
点击进入一个core.js文件，或者点开sources找到js文件，如下图进行操作，把js里的内容复制下来存到本地（后面要进行js调试）也可以下载下来。
![7.png](https://github.com/windrise/crawler163music/blob/master/163/picture/7.png)
点击搜索window.asrsea这部分代码四负责加密的，我们看到最终是一个bBB5B对象，里面包含了我们前面提到的两个加密后的参数。
那么我们的问题就变成了如何得到这个bBB5G(这个参数也是定期变动的),它是由window.asrsea这个函数得到的。里面需要四个参数，j0x,b...（这个参数过一段时间就会被修改，可能是为了防止更多人破解吧）。
在本地的core.js代码中加入上面4行代码，window可带可不带，一会儿调试的时候会显示这些参数。这样我们就知道加密的参数是什么了。
![8.png](https://github.com/windrise/crawler163music/blob/master/163/picture/8.png)
### 接下来我们要做的是获得那四个参变量，然后在看是如何加密的.
打开fiddler,
**我们要使用 AutoResponder模块将Chrome的请求重定向到我们修改的core.js文件，这样在浏览器的控制台console中就可以看到我们想要看到的加密参数了，因为我们的请求是在本地本core.js文件加密后才发送给服务器的，我们想要得到的歌曲的id信息被加密之后发送出去，服务器得到之后返回给我们想要的url**

![11.png](https://github.com/windrise/crawler163music/blob/master/163/picture/11.png)  
(第一次使用时，我是自行百度的fiddler auturesponder怎么使用的)
清空fiddler中的数据包
随便点击一首歌曲播放，发现增加了两个包，在选中
`url?csrf_token=`，点击add rule,在第二栏中find a file 中添加自己修改的.js文件，然后保存。再次点击另外一首歌播放，此时console就会显示，那些参数。但是我的Chrome好像出了问题，无法显示。所以我换了Edge，然后实验的。
![12.png](https://github.com/windrise/crawler163music/blob/master/163/picture/12.png)
![14.png](https://github.com/windrise/crawler163music/blob/master/163/picture/14.png)
可以发现返回的是一个json里面包含了歌曲的url
**因此我们的下一个小目标就是得到这个json文件**
![16.png](https://github.com/windrise/crawler163music/blob/master/163/picture/16.png)
第一个参数是这样的一个json
`{br: 128000, csrf_token: "", ids: "[432506345]"}`
,其中csrf_token可以为空。
![15.png](https://github.com/windrise/crawler163music/blob/master/163/picture/15.png)
同理可以得到其他参数，在这里我就不再截图了，不过我发现这几个参数一直都没有变过，因为我看了很多人爬网易云歌单或者评论什么的写的博客，可能他们实现了，也可能没有实现，参数的内容都差不多。  
第二个参数：`010001`    
第三个参数： `00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7`      
第四个参数：  
`0CoJUm6Qyw8W8jud` 


点击搜索encText 这部分（在刚刚的代码上面一点点）是加密函数。
总共四个加密函数，因为对这方面并不是很了解，所以不做细究。在代码中看看到。
还一些加密参考的量。
![9.png](https://github.com/windrise/crawler163music/blob/master/163/picture/9.png)  
window.asrsea函数其实就是叫做d的函数（如下图）
如果你研究了每个加密函数的具体内容就会发现 i是一个长度为16 的随机字符，你可以随便取16个，16个A或者其他的都可以，这个encText明显就是params，encSecKey就是encSecKey，而b函数就是一个AES加密，经过两次加密，第一次是对第一个参数的json加密，秘钥key是第四个参数，第二次是对第一次加密的结果进行了加密，key是i。仔细看一下b函数，可以发现秘钥偏移量是0102030405060708,模式是CBC，那就不难写出对于这个json的加密了。
![10.png](https://github.com/windrise/crawler163music/blob/master/163/picture/10.png) 
对于encSecKey，你会发现传入c的三个参数i是16个F（可自定义）,e
是第二个参数，f是第三个参数，都是固定值。所以encSecKey就可以理解为一个常量，随便抄下来一个就可以使用（因为是用了16个随机数，所以可能每次都是不一样的）。**这样我们就得到了两个参数**


代码就是`fakePost.py`
结果如下： 

![17.png](https://github.com/windrise/crawler163music/blob/master/163/picture/17.png)
