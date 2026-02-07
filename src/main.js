import Vue from 'vue';
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Element from 'element-ui';
Element.Dialog.props.lockScroll.default=false
import InfiniteLoading from 'vue-infinite-loading'
Vue.use(InfiniteLoading);
import store from '@/vuex/index'
/*
*main.js文件是vue.js应用程序的入口文件
* 他主要负责初始化vue实例，并将组挂在到html文档中的某个元素上
*
* Vue.config.productionTip=false是vue.js中的一个配置选项
* 用于控制是否在控制台中显示生产提示。当设置为fakse时，他会禁用vue.js 开发模式下的警告
* 实际生产环境中一般会关闭这个选项，减少打包后的体积，提升代码的运行效率
*
* */


Vue.config.productionTip = false

new Vue({
    //render(createElement) {
    //  return createElement(App);
    //}

    // render(createElement) {
    //   return createElement("h1","hello");
    // }

    // render: (createElement) => {
    //   return createElement(App);
    // }

    // render:createElement=> createElement(App),

    router,
    store,
    render: h => h(App),
}).$mount('#app')
