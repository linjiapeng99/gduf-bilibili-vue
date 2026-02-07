<script>
import fileUtils from "@/utils/fileUtils";

export default {
  name: "PostVideo",
  mixins:[fileUtils],
  data(){
    return{
      uploadFileName:'',
      uploadProgress:0,
      seletedFile:null,
      videoIndo: {
        url: ''
      }
    }
  },
  methods:{
    //将输入框选择视频的事件绑定到按钮上
    seleteVideo(){
      this.$refs.fileInput.click();
    },
    handleDrop(event){
      event.preventDefault();
      const files=event.dataTransfer.files;
      if(files.length>0){
        this.seletedFile=files[0];
        this.uploadFileName=this.seletedFile.name;
      }
    },
    setVideo(){
      const files=this.$refs.fileInput.files;
      if(files.length>0){
        this.seletedFile=files[0];
        this.uploadFileName=this.seletedFile.name;
      }
    },
    async uploadVideo() {
      if (this.seletedFile) {
        const response = await this.uploadFileBySlices(this.seletedFile);
        if(response){
          const {data:data}=response;
          this.videoIndo.url=data;
          console.log(this.videoIndo.url);
        }
      }
    }
  }
}
</script>

<template>
  <div class="post-video-container">
    <div class="post-video-body" @dragover.prevent @drop="handleDrop">
      <i class="el-icon-upload2"></i>
      <div v-if="uploadFileName">{{uploadFileName}}</div>
      <div v-else>拖拽到此处也可上传</div>
      <input type="file" ref="fileInput" @change="setVideo" accept="video/*" style="display: none">
      <el-button class="video-operation-btn" @click="seleteVideo" type="primary">选择视频</el-button>
      <el-button class="video-operation-btn" @click="uploadVideo" type="primary">上传视频</el-button>
      <div v-if="uploadProgress>0" class="upload-progress">
        <progress :value="uploadProgress" max="100"></progress>
        {{uploadProgress}}
      </div>
      <video ref="video-element" style="display: none"></video>
    </div>
  </div>
</template>

<style scoped lang="less">
.post-video-container{
  max-width: 830px;
  margin: 0 auto;
  position: relative;
  .post-video-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    position: relative;
    color: #999;
    font-size: 14px;
    border: 2px dashed #ccc;
    padding: 30px;
    .el-icon-upload2{
      font-size: 30px;
    }
    .video-operation-btn{
      margin-top: 20px;
      font-size: 16px;
      margin-left:0;
    }
    .upload-progress{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;
      font-size: 16px;
      margin-left:0;
    }
  }

  .video-form{
    display: flex;
    flex-direction: column;
    justify-content: center;

    .video-thumbnail{
      display: flex;
      .video-thumbnail-text{
        width: 100px;
      }
      .video-thumbnail-img{
        img{
          width: 320px;
          height: 180px;
          border-radius: 4px;
        }
      }
    }

    .video-title{
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      .video-title-text{
        width: 100px;
      }

      .video-title-input{
        border-radius: 4px;
        padding: 0 12px;
        border: 1px solid #ccd0d7;
        min-width: 200px;
        width: 100%;
        .input-val{
          width: 100%;
          border: none;
          color: #222;
          line-height: 22px;
          height: 22px;
          outline: 0;
          border: 0;
          background-color: transparent;
          font-size: 16px;
        }
      }
    }

    .video-type{
      display: flex;
      margin-top: 40px;
      align-items: center;

      .video-type-text{
        width: 100px;
      }
      .video-type-selector{
        display: flex;
      }
    }

    .video-area{
      display: flex;
      margin-top: 40px;
      align-items: center;

      .video-area-text{
        width: 100px;
      }
      .video-area-selector{
        display: flex;
      }
    }

    .video-tag{
      display: flex;
      margin-top: 40px;
      flex-direction: column;

      .video-tag-container{
        display: flex;
        align-items: center;
        .video-tag-text{
          width: 100px;
        }
        .video-tag-input{
          border-radius: 4px;
          padding: 0 12px;
          border: 1px solid #ccd0d7;
          min-width: 200px;
          width: 100%;
          .input-val{
            width: 100%;
            border: none;
            color: #222;
            line-height: 22px;
            height: 22px;
            outline: 0;
            border: 0;
            background-color: transparent;
            font-size: 16px;
          }
        }
      }
      .video-tag-show{
      }
    }

    .video-description{
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      .video-description-text{
        width: 100px;
      }
      .video-description-input{
        border-radius: 4px;
        padding: 0 12px;
        border: 1px solid #ccd0d7;
        min-width: 200px;
        width: 100%;
        height: 60px;
        .input-val{
          width: 100%;
          border: none;
          color: #222;
          line-height: 22px;
          height: 22px;
          outline: 0;
          border: 0;
          background-color: transparent;
          font-size: 16px;
        }
      }
    }

    .submit-video{
      display: flex;
      justify-content: center;
    }

  }
}
</style>