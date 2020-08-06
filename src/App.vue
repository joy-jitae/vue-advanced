<template>
  <div id="app">
    <tool-bar></tool-bar>

    <transition name="page">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {

  components: {
    ToolBar,
  },

}
 
</script>


<style>
body {
  padding : 0;
  margin : 0;
}
a{
  /* 클릭이 되었던거에 대해서 밑줄이 그어져있는것을 none 으로 바꿔주는거 */
  text-decoration: none;    
  color: #34495e;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover{
  color: #42b883;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
