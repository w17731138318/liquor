<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form size="mini" :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="终端id" prop="terminalId">
        <el-input size="mini" v-model="dataForm.terminalId" placeholder="终端id"></el-input>
      </el-form-item>
      <el-form-item label="终端名称" prop="terminalName">
        <el-input size="mini" v-model="dataForm.terminalName" placeholder="终端名称"></el-input>
      </el-form-item>
      <el-form-item label="ip" prop="hostName">
        <el-input size="mini" v-model="dataForm.hostName" placeholder="ip"></el-input>
      </el-form-item>
      <el-form-item label="mac地址" prop="macAddr">
        <el-input size="mini" v-model="dataForm.macAddr" placeholder="mac地址"></el-input>
      </el-form-item>
      <el-form-item label="终端状态" prop="terminalState">
        <el-input size="mini" v-model="dataForm.terminalState" placeholder="终端状态"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-input size="mini" v-model="dataForm.createTime" placeholder="创建时间"></el-input>
      </el-form-item>
      <el-form-item label="是否允许批量关机 1允许 0不允许" prop="closeType">
        <el-input size="mini" v-model="dataForm.closeType" placeholder="是否允许批量关机 1允许 0不允许"></el-input>
      </el-form-item>
      <el-form-item label="自动播放1播放0不播放" prop="autoPlay">
        <el-input size="mini" v-model="dataForm.autoPlay" placeholder="自动播放1播放0不播放"></el-input>
      </el-form-item>
      <el-form-item label="默认内容ID" prop="contentId">
        <el-input size="mini" v-model="dataForm.contentId" placeholder="默认内容ID"></el-input>
      </el-form-item>
      <el-form-item label="所属主题区域" prop="themeId">
        <el-input size="mini" v-model="dataForm.themeId" placeholder="所属主题区域"></el-input>
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
          terminalId: '',
          terminalName: '',
          hostName: '',
          macAddr: '',
          terminalState: '',
          createTime: '',
          closeType: '',
          autoPlay: '',
          contentId: '',
          themeId: ''
        },
        dataRule: {
          terminalId: [
            { required: true, message: '终端id不能为空', trigger: 'blur' }
          ],
          terminalName: [
            { required: true, message: '终端名称不能为空', trigger: 'blur' }
          ],
          hostName: [
            { required: true, message: 'ip不能为空', trigger: 'blur' }
          ],
          macAddr: [
            { required: true, message: 'mac地址不能为空', trigger: 'blur' }
          ],
          terminalState: [
            { required: true, message: '终端状态不能为空', trigger: 'blur' }
          ],
          createTime: [
            { required: true, message: '创建时间不能为空', trigger: 'blur' }
          ],
          closeType: [
            { required: true, message: '是否允许批量关机 1允许 0不允许不能为空', trigger: 'blur' }
          ],
          autoPlay: [
            { required: true, message: '自动播放1播放0不播放不能为空', trigger: 'blur' }
          ],
          contentId: [
            { required: true, message: '默认内容ID不能为空', trigger: 'blur' }
          ],
          themeId: [
            { required: true, message: '所属主题区域不能为空', trigger: 'blur' }
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
            API.terminal.info(this.dataForm.id).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.terminalId = data.terminal.terminalId
                this.dataForm.terminalName = data.terminal.terminalName
                this.dataForm.hostName = data.terminal.hostName
                this.dataForm.macAddr = data.terminal.macAddr
                this.dataForm.terminalState = data.terminal.terminalState
                this.dataForm.createTime = data.terminal.createTime
                this.dataForm.closeType = data.terminal.closeType
                this.dataForm.autoPlay = data.terminal.autoPlay
                this.dataForm.contentId = data.terminal.contentId
                this.dataForm.themeId = data.terminal.themeId
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
              'terminalId': this.dataForm.terminalId,
              'terminalName': this.dataForm.terminalName,
              'hostName': this.dataForm.hostName,
              'macAddr': this.dataForm.macAddr,
              'terminalState': this.dataForm.terminalState,
              'createTime': this.dataForm.createTime,
              'closeType': this.dataForm.closeType,
              'autoPlay': this.dataForm.autoPlay,
              'contentId': this.dataForm.contentId,
              'themeId': this.dataForm.themeId
            }
            var tick = !this.dataForm.id ? API.terminal.add(params) : API.terminal.update(params)
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
