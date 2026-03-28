import httpRequest from "@/axios/axiosconfig";

export default {
    async pageListVideos(params) {
        return await httpRequest.get('/video-service/videos',params);
    },
    async uploadFileBySlices(formData) {
        return await httpRequest.put('/video-service/file-slices', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    //添加视频标签
    async addTag(params){
        return await httpRequest.post('/video-service/tags', params);
    },

    //视频投稿
    async postVideo(params){
        return await httpRequest.post('/video-service/videos', params);
    },
    //获取视频详情
    async getVideoDetail(videoId){
        let config = {
            params:{
                videoId:videoId
            }
        };
        return await httpRequest.get('/video-service/video-details', config);
    },
    //添加视频播放记录
    async addVideoViews(params){
        return await httpRequest.post('/video-service/video-views',params);
    },
    //查询视频点赞数量
    async getVideoLikes (videoId) {
        let params = {
            params:{videoId:videoId}
        }
        return await httpRequest.get('/video-service/video-likes', params);
    },

    //查询视频投币数量
    async getVideoCoins (videoId) {
        let params = {
            params:{videoId:videoId}
        }
        return await httpRequest.get('/video-service/video-coins', params);
    },

    //查询视频收藏数量
    async getVideoCollections (videoId) {
        let params = {
            params:{videoId:videoId}
        }
        return await httpRequest.get('/video-service/video-collections', params);
    },

    //点赞视频
    async addVideoLike(videoId) {
        let params = {
            videoId:videoId
        }
        return await httpRequest.post('/video-service/video-likes', params,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    //取消点赞视频
    async deleteVideoLike(videoId) {
        let params = {
            params:{videoId:videoId}
        }
        return await httpRequest.delete('/video-service/video-likes', params);
    },

    //视频投币
    async addVideoCoins(params){
        return await httpRequest.post('/video-service/video-coins', params);
    },

    //收藏视频
    async addVideoCollection(params){
        return await httpRequest.post('/video-service/video-collections', params);
    },

    //取消收藏视频
    async deleteVideoCollection(videoId) {
        let params = {
            params:{videoId:videoId}
        }
        return await httpRequest.delete('/video-service/video-collections', params);
    },

    //查询视频播放量
    async getVideoViewCounts (videoId) {
        let params = {
            params:{videoId:videoId}
        }
        return await httpRequest.get('/video-service/video-view-counts', params);
    },
    //添加视频评论
    async addVideoComment(params){
        return await httpRequest.post('/video-service/video-comments', params);
    },

    //分页查询视频评论
    async pageListVideoComments(params){
        return await httpRequest.get('/video-service/video-comments', params);
    },

    //更新收藏视频
    async updateVideoCollections(params) {
        return await httpRequest.put('/video-service/video-collections', params);
    },

    //使用elasticsearch分页查询视频列表
    async pageListVideosByEs (params) {
        return await httpRequest.get('/video-service/search-videos', {params});
    },

    //获取推荐视频（游客模式）
    async getVideoRecommendationsForVisitor(){
        return await httpRequest.get('/video-service/visitor-video-recommendations');
    },

    //获取推荐视频（登录模式）
    async getVideoRecommendations(params){
        return await httpRequest.get('/video-service/video-recommendations', {params});
    },



}