<template>
  <div class="mod-log">
    <el-form size="mini" :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input size="mini" v-model="dataForm.key" placeholder="用户名／用户操作" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" @click="getDataList()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      size="mini" 
      :data="dataList"
      border
      v-loading="dataListLoading"
      style="width: 100%">
      <el-table-column
        prop="id"
        align="center"
        width="80"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="username"
        align="center"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="operation"
        align="center"
        label="用户操作">
      </el-table-column>
      <el-table-column
        prop="method"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="请求方法">
      </el-table-column>
      <el-table-column
        prop="params"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="请求参数">
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="执行时长(毫秒)">
      </el-table-column>
      <el-table-column
        prop="ip"
        align="center"
        width="150"
        label="IP地址">
      </el-table-column>
      <el-table-column
        prop="createDate"
        align="center"
        width="180"
        label="创建时间">
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
  </div>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        dataForm: {
          key: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        selectionDataList: []
      }
    },
    created () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        var params = {
          page: this.pageIndex,
          limit: this.pageSize,
          key: this.dataForm.key
        }
        API.log.list(params).then(({data}) => {
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
      }
    }
  }
</script>
