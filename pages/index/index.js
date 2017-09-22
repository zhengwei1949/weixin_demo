//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todos: [
      { name: '吃饭', completed: true },
      { name: '睡觉', completed: false },
      { name: '打豆豆', completed: true }
    ],
    count: 0
  },
  //事件处理函数
  addNewItem: function (e) {
    // console.log(e.detail.value)
    let arr = Array.from(this.data.todos);
    arr.push({
      name: e.detail.value,
      completed: false
    })
    this.setData({
      todos: arr,
      count: arr.filter((item, index) => item.completed === false).length
    })
  },
  deleteItem: function (e) {
    let index = e.currentTarget.dataset.index;
    // console.log(index);
    let arr = Array.from(this.data.todos);
    arr.splice(index, 1);
    this.setData({
      todos: arr,
      count: arr.filter((item, index) => item.completed === false).length
    })
  },
  getCount: function () {
    return 100 ;
  },
  toggleItem: function (e) {
    let index = e.currentTarget.dataset.index;
    let arr = Array.from(this.data.todos);
    arr[index].completed = !arr[index].completed;
    this.setData({
      todos: arr,
      count: arr.filter((item, index) => item.completed === false).length
    })
  },
  clearAll: function () {
    let arr = Array.from(this.data.todos);
    arr = arr.filter((item, index) => item.completed === false);
    this.setData({
      todos: arr,
      count: arr.filter((item, index) => item.completed === false).length
    })
  },
  onLoad: function () {
    this.setData({
      count: this.data.todos.filter((item, index) => item.completed === false).length
    })
  }
})
