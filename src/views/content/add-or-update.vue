<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form size="mini" :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="媒体自定义编号" prop="contentId">
        <el-input size="mini" v-model="dataForm.contentId" placeholder="媒体自定义编号"></el-input>
      </el-form-item>
      <el-form-item label="媒体内容标题" prop="contentTitle">
        <el-input size="mini" v-model="dataForm.contentTitle" placeholder="媒体内容标题"></el-input>
      </el-form-item>
      <el-form-item label="媒体内容类型" prop="contentType">
        <el-input size="mini" v-model="dataForm.contentType" placeholder="媒体内容类型"></el-input>
      </el-form-item>
      <el-form-item label="媒体内容服务器路径" prop="contentLocal">
        <el-input size="mini" v-model="dataForm.contentLocal" placeholder="媒体内容服务器路径"></el-input>
      </el-form-item>
      <el-form-item label="媒体储存路径" prop="contentPath">
        <el-input size="mini" v-model="dataForm.contentPath" placeholder="媒体储存路径"></el-input>
      </el-form-item>
      <el-form-item label="媒体内容名称" prop="fileName">
        <el-input size="mini" v-model="dataForm.fileName" placeholder="媒体内容名称"></el-input>
      </el-form-item>
      <el-form-item label="文件大小" prop="fileSize">
        <el-input size="mini" v-model="dataForm.fileSize" placeholder="文件大小"></el-input>
      </el-form-item>
      <el-form-item label="文件后缀" prop="fileSuffix">
        <el-input size="mini" v-model="dataForm.fileSuffix" placeholder="文件后缀"></el-input>
      </el-form-item>
      <el-form-item label="播放设置" prop="param">
        <el-input size="mini" v-model="dataForm.param" placeholder="播放设置"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-input size="mini" v-model="dataForm.createTime" placeholder="创建时间"></el-input>
      </el-form-item>
      <el-form-item label="所属主题展项" prop="themeId">
        <el-input size="mini" v-model="dataForm.themeId" placeholder="所属主题展项"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取消</el-button>
      <el-button size="mini" type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          id: 0,
          contentId: '',
          contentTitle: '',
          contentType: '',
          contentLocal: '',
          contentPath: '',
          fileName: '',
          fileSize: '',
          fileSuffix: '',
          param: '',
          createTime: '',
          themeId: ''
        },
        dataRule: {
          contentId: [
            { required: true, message: '媒体自定义编号不能为空', trigger: 'blur' }
          ],
          contentTitle: [
            { required: true, message: '媒体内容标题不能为空', trigger: 'blur' }
          ],
          contentType: [
            { required: true, message: '媒体内容类型不能为空', trigger: 'blur' }
          ],
          contentLocal: [
            { required: true, message: '媒体内容服务器路径不能为空', trigger: 'blur' }
          ],
          contentPath: [
            { required: true, message: '媒体储存路径不能为空', trigger: 'blur' }
          ],
          fileName: [
            { required: true, message: '媒体内容名称不能为空', trigger: 'blur' }
          ],
          fileSize: [
            { required: true, message: '文件大小不能为空', trigger: 'blur' }
          ],
          fileSuffix: [
            { required: true, message: '文件后缀不能为空', trigger: 'blur' }
          ],
          param: [
            { required: true, message: '播放设置不能为空', trigger: 'blur' }
          ],
          createTime: [
            { required: true, message: '创建时间不能为空', trigger: 'blur' }
          ],
          themeId: [
            { required: true, message: '所属主题展项不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            API.content.info(this.dataForm.id).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.contentId = data.content.contentId
                this.dataForm.contentTitle = data.content.contentTitle
                this.dataForm.contentType = data.content.contentType
                this.dataForm.contentLocal = data.content.contentLocal
                this.dataForm.contentPath = data.content.contentPath
                this.dataForm.fileName = data.content.fileName
                this.dataForm.fileSize = data.content.fileSize
                this.dataForm.fileSuffix = data.content.fileSuffix
                this.dataForm.param = data.content.param
                this.dataForm.createTime = data.content.createTime
                this.dataForm.themeId = data.content.themeId
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = {
              'id': this.dataForm.id || undefined,
              'contentId': this.dataForm.contentId,
              'contentTitle': this.dataForm.contentTitle,
              'contentType': this.dataForm.contentType,
              'contentLocal': this.dataForm.contentLocal,
              'contentPath': this.dataForm.contentPath,
              'fileName': this.dataForm.fileName,
              'fileSize': this.dataForm.fileSize,
              'fileSuffix': this.dataForm.fileSuffix,
              'param': this.dataForm.param,
              'createTime': this.dataForm.createTime,
              'themeId': this.dataForm.themeId
            }
            var tick = !this.dataForm.id ? API.content.add(params) : API.content.update(params)
            tick.then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
