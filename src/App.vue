<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view" />
    </transition>
    <van-tabbar v-model="active" route active-color="#07c160" inactive-color="#000">
      <van-tabbar-item name="home" icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="category" icon="shop" to="/category">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="user" icon="manager" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left',
        active: 'home'
      }
    },
    watch: {
      $route(to, from) {
        // 由主级到次级
        // to.meta 能取到 route 路由参数中的 meta 属性
        if (to.meta.index > from.meta.index) {
          // 通过改变变量名称控制左右滑动
          this.transitionName = 'slide-left' // 向左滑动
        } else if (to.meta.index < from.meta.index) {
          // 由次级到主级
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = ''   //同级无过渡效果
        }
      }
    }
  }
</script>

<style lang="less">
  @import './common/style/mixin';
</style>