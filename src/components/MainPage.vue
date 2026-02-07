<script>

import userApi from "@/api/userApi";
import CommonHeader from "@/components/CommonHeader.vue";
import MainPageContent from "@/components/MainPageContent.vue";

export default {
  name: 'MainPage',
  components: {MainPageContent, CommonHeader},
  data() {
    return {
      pk: ''
    }
  },

  methods: {
    // async demo() {
    //   let params = {
    //     p1: 1,
    //     p2: 2
    //   }
    //   try {
    //     let response = await httpRequest.get('/rsa-pks', {params});
    //     console.log('response1', response);
    //     if (response) {
    //       let response2 = await httpRequest.post('/users', params);
    //       console.log('response2', response2);
    //       if (response2) {
    //         let response3 = httpRequest.delete('/refresh-tokens', {params});
    //         console.log('response3', response3);
    //       }
    //     }
    //   }catch (e){
    //     console.log('遇到错误了，需要处理',e);
    //   }
    // }
    async getRsaPublicKey() {
      let response = await userApi.getRsaPublicKey();
      if (response.data) {
        this.pk = response.data
      }
      console.log(this.pk);
    },
    async addUser() {
      let params = {
        phone: '13502569477',
        password: '123456'
      }
      let response = userApi.addUser(params);
      return response.data;
    },
    async updateUser() {
      let params = {
        phone: '13502569477',
        password: '123456'
      }
      let response = userApi.updateUser(params);
      console.log(response)
    },
    async logout() {
      let response = await userApi.logout();
      console.log(response);
    }
  },


  mounted() {
    //this.getRsaPublicKey();
    // this.addUser();
    // this.updateUser();
    //this.logout();

    /* this.demo();
     httpRequest.get('/rsa-pks');
     let params = {
       p1: 1,
       p2: 2
     }
     httpRequest.get('/rsa-pks', {params})

     httpRequest.post('/users', params);

     httpRequest.put('/file-slices', params, {
       headers: {
         'Content-Type': 'multipart/form-data'
       }
     });

     const response = httpRequest.delete('/refresh-tokens', {params})
     console.log('response', response)

     let myProise = new Promise((resolve, reject) => {
       let success = false;
       if (success) {
         resolve('成功时的数据');
       } else {
         reject('失败时的原因');
       }
     });
     myProise.then((data) => {
       console.log('成功', data);
     }).catch((error) => {
       console.log('失败', error);
     });*/
  }
}
</script>

<template>
  <div>
    <CommonHeader/>
    <MainPageContent/>
  </div>

</template>

<style scoped lang="less">

</style>