import httpRequest from "@/axios/axiosconfig";

export default {

    async getDanmus(videoId, startTime, endTime){
        let params = {
            params:{
                videoId:videoId,
                startTime:startTime,
                endTime:endTime
            }
        };
        return await httpRequest.get('/danmu-service/danmus', params);
    }

}