<template>
  <div class="mod-config">
    <el-form size="mini" :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item label="品名:">
        <el-input size="mini" v-model="dataForm.goodsName" placeholder="品名" clearable></el-input>
      </el-form-item>
      <el-form-item label="产品类型:">
        <el-input size="mini" v-model="dataForm.goodsType" placeholder="产品类型" clearable></el-input>
      </el-form-item>
      <el-form-item label="生成日期:">
        <el-date-picker size="mini" v-model="dataForm.productionDate" type="date" placeholder="选择日期" value-format="yyyy年MM月dd日" format="yyyy年MM月dd日"></el-date-picker>
      </el-form-item>
      <el-form-item label="生产批次号:">
        <el-input size="mini" v-model="dataForm.batch" placeholder="生产批次号" clearable></el-input>
      </el-form-item>
      <el-form-item label="编号:">
        <el-input size="mini" v-model="dataForm.indexes" placeholder="编号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" @click="getDataList()">查询</el-button>
        <el-button size="mini" v-if="isAuth('web:goods:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button size="mini" v-if="isAuth('web:goods:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table
      size="mini" 
      :data="dataList"
      border
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%;">
      <el-table-column
        type="selection"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        prop="id"
        align="center"
        label="ID"
        width="60">
      </el-table-column>
      <el-table-column
        prop="goodsType"
        align="center"
        label="产品类型"
        width="100">
      </el-table-column>
      <el-table-column
        prop="goodsName"
        :show-overflow-tooltip="true"
        align="center"
        label="品名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="volume"
        align="center"
        label="容量"
        width="60">
      </el-table-column>
      <el-table-column
        prop="proof"
        align="center"
        label="度数"
        width="60">
      </el-table-column>
       <el-table-column
        prop="productionDate"
        align="center"
        label="生产日期">
      </el-table-column>
      <el-table-column
        prop="batch"
        align="center"
        label="生产批次号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="indexes"
        align="center"
        label="商品数量"
        width="100">
      </el-table-column>
      <el-table-column
        prop="createTime"
        align="center"
        label="创建时间"
        width="160">
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteHandle(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      size="mini" 
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
  import API from '@/api'
  import AddOrUpdate from './add-or-update'
  export default {
    data () {
      return {
        dataForm: {
          goodsName: '',
          goodsType: '',
          productionDate: '',
          batch: '',
          indexes: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false
      }
    },
    components: {
      AddOrUpdate
    },
    activated () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        var params = {
          page: this.pageIndex,
          limit: this.pageSize,
          goodsName: this.dataForm.goodsName,
          goodsType: this.dataForm.goodsType,
          productionDate: this.dataForm.productionDate,
          batch: this.dataForm.batch,
          indexes: this.dataForm.indexes
        }
        API.goods.list(params).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      // 删除
      deleteHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.id
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.goods.del(ids).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        })
      }
    }
  }
</script>
