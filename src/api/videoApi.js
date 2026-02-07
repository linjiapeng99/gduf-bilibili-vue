import httpRequest from "@/axios/axiosconfig";

export default {
    async pageListVideos(params) {
        return await httpRequest.get('/videos',params);
    },
    async uploadFileBySlices(formData) {
        return await httpRequest.put('/file-slices', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    }
}