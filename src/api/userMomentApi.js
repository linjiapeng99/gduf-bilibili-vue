import httpRequest from "@/axios/axiosconfig";

export default {

    // 分页查询用户动态
    async pageListMoments(params){
        return await httpRequest.get('/user-service/moments', {params});
    },

    //添加用户动态内容
    async addUserMomentContents(params){
        return await httpRequest.post('/user-service/contents', params);
    },

    //添加用户动态
    async addUserMoments (params) {
        return await httpRequest.post('/user-service/user-moments', params);
    },

}
