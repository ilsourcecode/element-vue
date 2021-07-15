<template>
  <div class="upload">
    <h1>我是 upload 组件</h1>

    <h6>
      其中钩子函数中的 file 是当前上传的文件对象， fileList 是上传的文件列表 <br>
      1、headers 设置上传文件的请求头 Object <br>
      2、with-credentials 是否支持发送 cookie 凭证信息默认 false <br>
      3、show-file-list 是否显示已上传的文件列表 默认 true <br>
      4、drag 是否启用拖拽上传功能 默认 false <br>
      5、accept 接受上传的文件类型（thumbnail-mode 模式下此参数无效） <br>
      6、:on-preview="handlePreview" 点击文件列表中已上传的文件时的钩子函数 <br>
      7、:on-remove="handleRemove" 文件列表移除文件时的钩子 <br>
      8、on-success	文件上传成功时的钩子   function(response, file, fileList) <br>
      9、on-error	文件上传失败时的钩子	function(err, file, fileList) <br>
      10、on-progress	文件上传时的钩子	function(event, file, fileList) <br>
      11、on-change	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用	function(file, fileList) <br>
      12、before-upload	上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。	function(file) <br>
      13、before-remove	删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。	function(file, fileList) <br>
      14、ist-type	文件列表的类型	string	值 -> text/picture/picture-card <br>
      15、auto-upload	是否在选取文件后立即进行上传 默认 true <br>
      16、file-list 数组格式 [{name: '', url:''}] 待上传文件 <br>
      17、http-request	覆盖默认的上传行为，可以自定义上传的实现	function <br>
      18、limit	最大允许上传个数	number <br>
      19、on-exceed	文件超出个数限制时的钩子	function(files, fileList) <br>
    </h6>

    <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="5"
            :on-exceed="handleExceed"
            :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <h6>
      1、:before-upload="beforeAvatarUpload" 用来限制用户上传文件的格式，大小进行安全校验
    </h6>
    <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <h6>
      1、list-type="picture-card" 文件列表格式
    </h6>
    <el-upload
            multiple
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

    <h6>
      1、使用 scoped-slot 去设置缩略图模版。 <br>
      2、:auto-upload="false" 是否开启自动上传 <br>
      3、list-type="picture-card" 以卡片的方式展示
    </h6>
    <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
        <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

    <h6>
      1、list-type="picture" 以图片的方式展示
    </h6>
    <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <h6>
      1、:on-change="handleChange" 上传文件时触发
    </h6>
    <el-upload
            class="upload-demo"
            action="#"
            :on-change="handleChange"
            :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>


    <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>


    <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    name: "Upload",
    data() {
      return {
        imageUrl: '',
        fileList: [{
          name: '1.png',
          url: '../assets/img/1.png'
        },{
          name: '2.jpeg',
          url: '../assets/img/2.jpeg'
        },{
          name: '3.jpg',
          url: '../assets/img/3.jpg'
        },{
          name: '4.jpg',
          url: '../assets/img/4.jpg'
        },{
          name: '5.jpg',
          url: '../assets/img/5.JPG'
        },{
          name: '6.jpg',
          url: '../assets/img/6.jpeg'
        }],
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      }
    },
    methods: {
      clearFiles() {
        console.log("clearFiles is run!");
        this.$refs['upload'].clearFiles()
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleChange(file, fileList) {
        console.log("handleChange is run!");
        this.fileList = fileList.slice(-3);
      },
      handleExceed() {

      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },leExceed(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>