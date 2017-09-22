## 最终效果
![](http://7fvanf.com1.z0.glb.clouddn.com/17-9-22/23814214.jpg)

![](http://7fvanf.com1.z0.glb.clouddn.com/17-9-22/72008800.jpg)

## 理解小程序
1. 任何程序就像电影一样，必须有播放器才能运行
2. 小程序的播放器是微信 —> 微信不管是android,还是ios平台都有 —> 小程序是跨平台的，一次编写可以运行在各个平台 —> 微信可以和手机打交道 —> 借助微信，小程序也可以和手机打交道

## 小程序目录结构

```
.
|____app.js 应用程序逻辑
|____app.json 应用程序配置
|____app.wxss 应用程序公共样式
|____pages 页面目录
| |____index index页面
| | |____index.js
| | |____index.wxml
| | |____index.wxss
| |____logs Log页面
| | |____logs.js
| | |____logs.json
| | |____logs.wxml
| | |____logs.wxss
|____utils 公共脚本目录
| |____util.js
```

## 如何理解小程序代码
- wxml相当于html
    + view相当于div
    + bindtap相当于onclick
    + bindconfirm相当于v-bind:click.enter
- wxss相当于css
    + rpx相当于px
    + 支持flex布局
        1. display:flex
        2. align-items
        3. justify-content
        4. flex-direction
- 小程序框架语法类似vue
    + 生命周期函数 --> onLaunch相当于created
- 整个小程序分为二个层级：应用级和页面级
- 一个路由对应一个页面，所有的页面必须要注册到app.json当中，默认第一个页面是默认打开的时候的页面(相当于react中的indexRoute)
- 只支持单向数据流：我们只能在组件中通过事件改变data中的数据，一旦data中的数据发生了变化，视图会进行同步，反过来是不行的

## todoMVC案例
### 列表渲染

1. 打开pages/index/index.js，清空里面的代码，并添加如下代码

```javascript
Page({//如果你熟悉vue,你可以理解成这里是new Vue()
  data: {
    todos:[
      {name:'吃饭',completed:true},
      {name:'睡觉',completed:false},
      {name:'打豆豆',completed:true}
    ]
  },
  onLoad: function () {//类似vue中的created
      //这里是生命周期函数
  }
})
```

2. 打开pages/index/index.wxml,清空里面的代码，并添加如下代码：

```html
<!--index.wxml-->
<view class="container">
  <view class="body">
    <view wx:for="{{todos}}" wx:key="{{index}}" class="item">
      <view>
        <checkbox-group bindchange="toggleItem" data-index="{{index}}">
          <label class="checkbox">
            <checkbox  checked="{{item.completed}}"   />
          </label>
        </checkbox-group>
      </view>
      <view>{{item.name}}</view>
      <view>
        <button type="warn" size="1"  data-index="{{index}}">x</button>
      </view>
    </view>
  </view>
</view>
```

3. 打开pages/index/index.wxss,清空里面的代码，并添加如下的代码

```css
.body{
  display: flex;
  width:80%;
  flex-direction: column;
  border-top:1px solid gray;
}
.item{
  display: flex;
  border: 1rpx solid gray;
  border-top:none;
  align-items: center;
  justify-content: space-between;
  padding:20rpx;
}
```
    
### 添加项目
1. 打开pages/index/index.wxml,在里面添加如下代码

```html
<view class="container">
+  <view class="header">
+    <input placeholder="这是一个可以自动聚焦的input" auto-focus bindconfirm="addNewItem"  />
+  </view>
  <view class="body">
    <view wx:for="{{todos}}" wx:key="{{index}}" class="item">
      <view>
        <checkbox-group bindchange="toggleItem" data-index="{{index}}">
          <label class="checkbox">
            <
```

2. 打开pages/index/index.js,添加如下代码

```javascript
Page({
  data: {
    todos:[
      {name:'吃饭',completed:true},
      {name:'睡觉',completed:false},
      {name:'打豆豆',completed:true}
    ]
  },
  //事件处理函数
+ addNewItem:function(e){
+    // console.log(e.detail.value)
+    let arr = Array.from(this.data.todos);
+    arr.push({
+      name:e.detail.value,
+      completed:false
+    })
+    this.setData({
+      todos:arr,
+    })
+  },
```

### 删除项目

```html
      <view>
        <button type="warn" size="1" bindtap="deleteItem" data-index="{{index}}">x</button>
      </view>
    </view>
```

```javascript
  deleteItem:function(e){
    let index = e.currentTarget.dataset.index;
    // console.log(index);
    let arr = Array.from(this.data.todos);
    arr.splice(index,1);
    this.setData({
      todos:arr
    })
  },
``` 

### 删除所有已完成及统计未完成数量 --> 见最终代码效果

### 使用的接口
https://github.com/jokermonn/-Api/blob/master/Tuchong.md
