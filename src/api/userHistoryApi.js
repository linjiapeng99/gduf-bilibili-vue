import httpRequest from "@/axios/axiosconfig";

export default {

    // 分页查询历史
    async pagListUserVideoHistory(params){
        return await httpRequest.get('/user-service/user-video-histories', {params});
    }

}
