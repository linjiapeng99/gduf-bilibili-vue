<script>
import userUtils from "@/utils/userUtils";
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: "CommonHeader",
  components: {LoginDialog},
  computed: {
    /*isUserLoggedIn() {
      return localStorage.getItem('token');
    }*/
    avatar(){
      const userInfo=this.$store.state.userInfo;
      if(userInfo&&userInfo.avatar&&userInfo.avatar!==''){
        return userInfo.avatar;
      }else{
        return require('@/assets/bilibiliavatar.png')
      }
    }
  },
  async mounted() {
    if (this.isUserLoggedIn) {
     this.$store.state.userInfo=await this.getUserBasicInfo();
    }
  },

  methods:{
    jumpWithUserLogin(path){
      if(!this.isUserLoggedIn){
        this.dialogVisible=true
      }else {
        if(this.$route.path!==path){
          this.$router.push(path);
        }else {
          location.reload();
        }
      }
    },
    jumpToPath(path){
      this.$router.push(path);
    },
    searchContent(){

    }
  },
  mixins:[userUtils],
  data() {
    return {
      dialogVisible: false,
      entries:[
        {
          id:1,
          name:'首页',
          path:'/'
        },
        {
          id:2,
          name:'番剧',
          path:'/'
        },
        {
          id:3,
          name:'直播',
          path:'/'
        },
        {
          id:4,
          name:'游戏中心',
          path:'/'
        }
      ],
      searchTxt:''
    }
  }
}
</script>

<template>
  <div class="bili-header">
    <div class="header-nav-container">
      <div class="left-entry">
        <div v-for="entry in entries" :key="entry.id">
          <span @click="jumpToPath(entry.path)">{{entry.name}}</span>
        </div>
      </div>
      <div class="center-search-bar">
        <form class="nav-search-form">
          <div class="nav-search-content">
            <input class="nav-search-input"
            type="text" autocapitalize="off" maxlength="100" placeholder="请输入要搜索的内容"
            v-model="searchTxt">
          </div>
          <div class="nav-search-btn">
            <el-button icon="el-icon-search" circle size="mini" @click="searchContent"></el-button>
          </div>
        </form>
      </div>
      <div class="right-entry">
        <div v-if="isUserLoggedIn" class="user-center">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="avatar" alt="" style="width: 50px;height: 50px;border-radius: 50%">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button type="text" style="color: black" @click="jumpToPath('/mySpace')">个人中心</el-button>
              </el-dropdown-item>
              <el-dropdown-item style="color: black">
                <el-button type="text" style="color: black" @click="logout">退出登录</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-else class="user-center">
          <el-button class="login-button" type="text" @click="dialogVisible = true">
            登录
          </el-button>
          <el-dialog
              title="密码登录"
              :visible.sync="dialogVisible"
              width="30%">
            <LoginDialog/>
          </el-dialog>
        </div>
        <div class="right-entry-moment">
          <el-popover
              placement="top-start"
              width="200"
              trigger="hover">
            <div v-if="isUserLoggedIn">
              <div>
                用户动态内容
              </div>
              <div>
                <el-button type="info">
                  查看更多
                </el-button>
              </div>
            </div>
            <div v-else>
              <div>
                登录即可查看动态内容
              </div>
              <div>
                <el-button type="info">
                  立即登录
                </el-button>
              </div>
            </div>
            <el-button slot="reference" class="el-btn">hover 激活</el-button>
          </el-popover>
        </div>
        <div class="right-entry-content">
          <el-button type="danger" icon="el-icon-upload2" circle></el-button>
          <span>历史</span>
        </div>
        <div class="right-entry-content">
          <el-button type="danger" icon="el-icon-upload2" circle @click="jumpWithUserLogin('/postContent')"></el-button>
          <span>投稿</span>
        </div>
      </div>
    </div>
    <div class="header-baner-container">
      <img class="banner"
          :src="require('@/assets/header/header-banner.png')" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">
.bili-header{
  .header-nav-container{
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-entry{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin:40px;
      span{
        margin-right: 20px;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .center-search-bar{
      flex: 1 auto;
      min-width: 181px;
      max-width: 500px;
      .nav-search-form{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px 0 4px;
        height: 40px;
        background-color: white;
        border-radius: 8px;
        opacity: 0.8;
        .nav-search-content{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 36px;
          border: 2px solid transparent;
          border-radius: 6px;
          .nav-search-input{
            width: 100%;
            font-size: 14px;
            padding-right: 8px;
            background-color: transparent;
            border: none;
            box-shadow: none;
            outline: none;
          }
        }
        .nav-search-btn{
          margin: 0;
          padding: 0;
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }
    .right-entry{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top:10px ;
      padding-left:10px ;
      .user-center{
        margin-right: 10px;
        .login-button{
          color: #00a1d6;
          font-weight: bold;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #fff;
        }
      }
      .right-entry-moment{
        margin-right: 10px;
        .el-btn{
          border-radius: 5px;
        }
      }
      .right-entry-content{
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
          margin-top: 5px;
          color: white;
        }
      }
    }

  }

  .header-baner-container{
    .banner{
      width: 100%;
    }
  }
}
</style>