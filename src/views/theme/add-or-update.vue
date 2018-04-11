<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form size="mini" :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="主题名称" prop="themeName">
        <el-input size="mini" v-model="dataForm.themeName" placeholder="主题名称"></el-input>
      </el-form-item>
      <el-form-item label="创建人ID" prop="createUserId">
        <el-input size="mini" v-model="dataForm.createUserId" placeholder="创建人ID"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-input size="mini" v-model="dataForm.createTime" placeholder="创建时间"></el-input>
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
          themeName: '',
          createUserId: '',
          createTime: ''
        },
        dataRule: {
          themeName: [
            { required: true, message: '主题名称不能为空', trigger: 'blur' }
          ],
          createUserId: [
            { required: true, message: '创建人ID不能为空', trigger: 'blur' }
          ],
          createTime: [
            { required: true, message: '创建时间不能为空', trigger: 'blur' }
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
            API.theme.info(this.dataForm.id).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.themeName = data.theme.themeName
                this.dataForm.createUserId = data.theme.createUserId
                this.dataForm.createTime = data.theme.createTime
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
              'themeName': this.dataForm.themeName,
              'createUserId': this.dataForm.createUserId,
              'createTime': this.dataForm.createTime
            }
            var tick = !this.dataForm.id ? API.theme.add(params) : API.theme.update(params)
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
