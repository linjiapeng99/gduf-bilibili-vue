import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from "@/components/UserLogin.vue";
import MainPage from "@/components/MainPage.vue";
import MySpaceHome from "@/components/MySpaceHome.vue";
import MySpacePost from "@/components/MySpacePost.vue";
import PostContent from "@/components/PostContent.vue";

Vue.use(VueRouter)

const routes = [
    {
        // 首页
        path: '/',
        component: MainPage,
    },
    {
        //注册登录页
        path: '/userLogin',
        component: UserLogin
    },
    {
        // 首页
        path: '/mySpace',
        component: MainPage,
        redirect:'/mySpace/home',
        children:[
            {
                //个人中心主页
                path:'/home',
                component:MySpaceHome
            },
            {
                //注册登录页面
                path:'/post',
                component:MySpacePost
            }
        ]
    },
    {
        // 首页
        path: '/postContent',
        component: PostContent,
    },
]

const router = new VueRouter({
    routes
})

export default router