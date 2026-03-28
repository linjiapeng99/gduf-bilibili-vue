import httpRequest from "@/axios/axiosconfig";

export default {
    async getRsaPublicKey() {
        return await httpRequest.get('/user-service/rsa-pks');
    },
    async getUserToken(params) {
        return await httpRequest.post('/user-service/user-tokens',params)
    },
    async getUserTokenAndRefreshToken(params) {
        return await httpRequest.post('/user-service/user-dts',params)
    },
    async addUser(params) {
        return await httpRequest.post('/user-service/users', params);
    },
    async updateUser(params) {
        return await httpRequest.put('/user-service/users', params);
    },
    async getUserBasicInfo() {
        return await httpRequest.get('/user-service/users');
    },
    async logout(){
        return await httpRequest.delete('/user-service/refresh-tokens');
    },
    //添加用户关注
    async addUserFollowings(params){
        return await httpRequest.post('/user-service/user-followings', params);
    },

    //获取用户关注
    async getUserFollowings(){
        return await httpRequest.get('/user-service/user-followings');
    },

    //更新用户基本信息
    async updateUserInfo(params){
        return await httpRequest.put('/user-service/user-infos',params);
    },

    //使用elasticsearch分页查询用户列表
    async pageListUsersByEs(params) {
        return await httpRequest.get('/user-service/search-users', {params});
    }
}