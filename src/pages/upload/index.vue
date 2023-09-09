<script setup>
import { ref, onMounted } from "vue";
import Upload from "@/components/Upload/index.vue";

// 引入icon图标
import {
  Delete,
  Download,
  Plus,
  ZoomIn,
  UploadFilled,
} from "@element-plus/icons-vue";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

const handleRemove = (file) => {
  console.log(file);
};

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};

const handleDownload = (file) => {
  console.log(file);
};

const centerDialogVisible = ref(false);

onMounted(() => {});

// tag标签的回调函数

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>
  <div>
    <div class="container">
      <!-- 第一个上传文件框 -->
      <div class="upload">
        <div class="btn">
          <el-button type="danger">取消</el-button>
          <span>草稿</span>
          <el-button type="primary">发布</el-button>
        </div>

        <el-upload
          class="upload-demo"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="uploadText">
            <h1>项目文件库</h1>
            <div class="uploadText1">
              <p>添加文件,然后拖动到步骤</p>
              <el-icon><zoom-in /></el-icon>
            </div>
          </div>
        </el-upload>
      </div>
      <!-- 第二个上传文件筐 -->
      <div class="upload2">
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <el-icon><Plus /></el-icon>
          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                sizes="500px"
                :src="file.url"
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <el-icon><zoom-in /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <el-icon><Download /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
        <div class="form">
          <h1>项目基础知识</h1>
          <el-form :model="form" label-position="left" label-width="80px">
            <el-form-item label="项目名称">
              <el-input placeholder="你做了什么?" style="width: 300px;"/>
            </el-form-item>
            <el-form-item label="类别">
              <el-select placeholder="请选择类别" style="width: 300px;">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!-- 第三个文件上传框 -->
      <div class="upload3">
        <h1>介绍</h1>
        <div class="uploadBox" @click="centerDialogVisible = true">
          <span>从顶部栏拖动图像或</span>
          <el-icon><Plus /></el-icon>
        </div>
        <el-input
          style="width: 70%; margin: 10px 0;height: 60px;"
          placeholder="简单描述一下你做了什么,为什么。包括一张你完成的项目的照片"
        >
        </el-input>
        <span>点击上传附件</span>
        
        <!-- 富文本编辑器插件 -->
        <!-- <quill-editor theme="snow"></quill-editor> -->

        <el-dialog
          v-model="centerDialogVisible"
          title="Warning"
          width="30%"
          center
        >
          <template #title>
            <h1>添加到简介</h1>
            <el-tabs
              v-model="activeName"
              class="demo-tabs"
              @tab-click="handleClick"
            >
              <el-tab-pane label="上传新品" name="first">
                <div>
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    multiple
                  >
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                      Drop file here or <em>click to upload</em>
                    </div>
                    <template #tip>
                      <div class="el-upload__tip">
                        支持的文件：jpg，png，gif，bmp，pdf，txt，stl等。最大 25
                        MB。 想要添加视频？使用“嵌入网址”选项卡。
                      </div>
                    </template>
                  </el-upload>
                </div>
              </el-tab-pane>
              <el-tab-pane label="项目库" name="second"> </el-tab-pane>
              <el-tab-pane label="嵌入网址" name="third">Role</el-tab-pane>
            </el-tabs>
          </template>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false">
                确定
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>

      <!-- 第四个文件上传框 -->
      <!-- <div class="upload4">
        <div class="inp">
          <h1>第一步:</h1>
          <el-input placeholder="输入步骤标题" style="width: 200px;"/>
        </div>
      </div> -->

      <div class="upload3">
        <h1>介绍</h1>
        <div class="uploadBox" @click="centerDialogVisible = true">
          <span>从顶部栏拖动图像或</span>
          <el-icon><Plus /></el-icon>
        </div>
        <el-input
          style="width: 70%; margin: 10px 0;height: 60px;"
          placeholder="简单描述一下你做了什么,为什么。包括一张你完成的项目的照片"
        >
        </el-input>
        <span>点击上传附件</span>
        
        <!-- 富文本编辑器插件 -->
        <!-- <quill-editor theme="snow"></quill-editor> -->

        <el-dialog
          v-model="centerDialogVisible"
          title="Warning"
          width="30%"
          center
        >
          <template #title>
            <h1>添加到简介</h1>
            <el-tabs
              v-model="activeName"
              class="demo-tabs"
              @tab-click="handleClick"
            >
              <el-tab-pane  label="上传新品" name="first">
                <div>
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    multiple
                    >
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                      Drop file here or <em>click to upload</em>
                    </div>
                    <template #tip>
                      <div class="el-upload__tip">
                        支持的文件：jpg，png，gif，bmp，pdf，txt，stl等。最大 25
                        MB。 想要添加视频？使用“嵌入网址”选项卡。
                      </div>
                    </template>
                  </el-upload>
                </div>
              </el-tab-pane>
              <el-tab-pane label="项目库" name="second"> </el-tab-pane>
              <el-tab-pane label="嵌入网址" name="third">Role</el-tab-pane>
            </el-tabs>
          </template>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false">
                确定
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  // background: pink;
  margin: 0 100px;
  .upload {
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
    }
    .uploadText {
      display: flex;
      flex-direction: column;
      h1 {
        margin-bottom: 10px;
      }
      .uploadText1 {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          margin-right: 6px;
        }
      }
    }
  }
  .upload2 {
    display: flex;
    border: 1px dashed #dcdfe6;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 10px;
    .form {
      margin:auto 20px;
      h1 {
        margin: 0 0 20px 50px;
      }
    }
  }
  .upload3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #dcdfe6;
    padding: 20px 50px;

    h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .uploadBox {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #ddd;
    border-radius: 4px;
    color: #555;
    background: rgba(246, 246, 246);
    width: 70%;
    height: 100px;
    cursor: pointer;
  }
  }
  .upload4 {
    padding: 20px;
    border: 1px solid #000;
    margin: 10px 0;
    border-radius: 6px;
    .inp {
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 21px;
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}
</style>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>