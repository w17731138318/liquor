<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form size="mini" :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="120px">
      <el-form-item label="产品类型" prop="goodsType">
        <el-input size="mini" v-model="dataForm.goodsType" placeholder="产品类型" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="品名" prop="goodsName">
        <el-input size="mini" v-model="dataForm.goodsName" placeholder="品名" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="容量" prop="volume">
        <el-input size="mini" v-model="dataForm.volume" placeholder="容量" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="度数" prop="proof">
        <el-input size="mini" v-model="dataForm.proof" placeholder="度数" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="生成日期" prop="productionDate">
        <el-date-picker size="mini" v-model="dataForm.productionDate" type="date" placeholder="选择日期" value-format="yyyy年MM月dd日" format="yyyy年MM月dd日">
      </el-date-picker>
      </el-form-item>
      <el-form-item label="生产批次号" prop="batch">
        <el-input size="mini" v-model="dataForm.batch" placeholder="生产批次号" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="indexes">
        <el-input size="mini" v-model="dataForm.indexes" placeholder="商品数量" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="客商名称" prop="company">
        <el-input size="mini" v-model="dataForm.company" placeholder="客商名称" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="产地" prop="place">
        <el-input size="mini" v-model="dataForm.place" placeholder="产地" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="包装规格" prop="packing">
        <el-input size="mini" v-model="dataForm.packing" placeholder="包装规格" style="width:200px;"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <el-input type="textarea" :rows="2" size="mini" v-model="dataForm.details" placeholder="详情"  style="width:300px;"></el-input>
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
          goodsName: '',
          goodsType: '',
          details: '',
          volume: '',
          proof: '',
          productionDate: '',
          status: '',
          createUserId: '',
          createTime: '',
          batch: '',
          indexes: '',
          company: '',
          place: '',
          packing: ''
        },
        dataRule: {
          goodsName: [
            { required: true, message: '品名不能为空', trigger: 'blur' }
          ],
          goodsType: [
            { required: true, message: '产品类型不能为空', trigger: 'blur' }
          ],
          volume: [
            { required: true, message: '容量不能为空', trigger: 'blur' }
          ],
          proof: [
            { required: true, message: '度数不能为空', trigger: 'blur' }
          ],
          productionDate: [
            { required: true, message: '生产日期不能为空', trigger: 'blur' }
          ],
          batch: [
            { required: true, message: '生产批次号不能为空', trigger: 'blur' }
          ],
          indexes: [
            { required: true, message: '商品数量', trigger: 'blur' }
          ],
          company: [
            { required: true, message: '客商名称不能为空', trigger: 'blur' }
          ],
          place: [
            { required: true, message: '产地不能为空', trigger: 'blur' }
          ],
          packing: [
            { required: true, message: '包装规格不能为空', trigger: 'blur' }
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
            API.goods.info(this.dataForm.id).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.goodsName = data.goods.goodsName
                this.dataForm.goodsType = data.goods.goodsType
                this.dataForm.details = data.goods.details
                this.dataForm.volume = data.goods.volume
                this.dataForm.proof = data.goods.proof
                this.dataForm.productionDate = data.goods.productionDate
                this.dataForm.createTime = data.goods.createTime
                this.dataForm.batch = data.goods.batch
                this.dataForm.indexes = data.goods.indexes
                this.dataForm.company = data.goods.company
                this.dataForm.place = data.goods.place
                this.dataForm.packing = data.goods.packing
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
              'goodsName': this.dataForm.goodsName,
              'goodsType': this.dataForm.goodsType,
              'details': this.dataForm.details,
              'volume': this.dataForm.volume,
              'proof': this.dataForm.proof,
              'productionDate': this.dataForm.productionDate,
              'status': this.dataForm.status,
              'createUserId': this.dataForm.createUserId,
              'createTime': this.dataForm.createTime,
              'batch': this.dataForm.batch,
              'indexes': this.dataForm.indexes,
              'company': this.dataForm.company,
              'place': this.dataForm.place,
              'packing': this.dataForm.packing
            }
            var tick = !this.dataForm.id ? API.goods.add(params) : API.goods.update(params)
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
