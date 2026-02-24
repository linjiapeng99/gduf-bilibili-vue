import httpRequest from "@/axios/axiosconfig";

export default {
    async getRsaPublicKey() {
        return await httpRequest.get('/rsa-pks');
    },
    async getUserToken(params) {
        return await httpRequest.post('/user-tokens',params)
    },
    async getUserTokenAndRefreshToken(params) {
        return await httpRequest.post('/user-dts',params)
    },
    async addUser(params) {
        return await httpRequest.post('/users', params);
    },
    async updateUser(params) {
        return await httpRequest.put('/users', params);
    },
    async getUserBasicInfo() {
        return await httpRequest.get('/users');
    },
    async logout(){
        return await httpRequest.delete('/refresh-tokens');
    },
    //添加用户关注
    async addUserFollowings(params){
        return await httpRequest.post('/user-followings', params);
    },

    //获取用户关注
    async getUserFollowings(){
        return await httpRequest.get('/user-followings');
    },

    //更新用户基本信息
    async updateUserInfo(params){
        return await httpRequest.put('/user-infos',params);
    },

    //使用elasticsearch分页查询用户列表
    async pageListUsersByEs(params) {
        return await httpRequest.get('/search-users', {params});
    }
}