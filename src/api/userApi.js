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
    }
}