<template>
  <div class="mod-config">
    <el-form :inline="true" size="mini" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input size="mini" v-model="dataForm.key" placeholder="参数名" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" @click="getDataList()">查询</el-button>
        <el-button size="mini" v-if="isAuth('web:content:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button size="mini" v-if="isAuth('web:content:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
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
        header-align="center"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        prop="id"
        header-align="center"
        align="center"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="contentId"
        header-align="center"
        align="center"
        label="媒体自定义编号">
      </el-table-column>
      <el-table-column
        prop="contentTitle"
        header-align="center"
        align="center"
        label="媒体内容标题">
      </el-table-column>
      <el-table-column
        prop="contentType"
        header-align="center"
        align="center"
        label="媒体内容类型">
      </el-table-column>
      <el-table-column
        prop="contentLocal"
        header-align="center"
        align="center"
        label="媒体内容服务器路径">
      </el-table-column>
      <el-table-column
        prop="contentPath"
        header-align="center"
        align="center"
        label="媒体储存路径">
      </el-table-column>
      <el-table-column
        prop="fileName"
        header-align="center"
        align="center"
        label="媒体内容名称">
      </el-table-column>
      <el-table-column
        prop="fileSize"
        header-align="center"
        align="center"
        label="文件大小">
      </el-table-column>
      <el-table-column
        prop="fileSuffix"
        header-align="center"
        align="center"
        label="文件后缀">
      </el-table-column>
      <el-table-column
        prop="param"
        header-align="center"
        align="center"
        label="播放设置">
      </el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="themeId"
        header-align="center"
        align="center"
        label="所属主题展项">
      </el-table-column>
      <el-table-column
        width="200"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="mini" icon="el-icon-edit" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
          <el-button type="text" size="mini" icon="el-icon-delete" @click="deleteHandle(scope.row.id)">删除</el-button>
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
          id: '',
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
          id: this.dataForm.id,
          contentId: this.dataForm.contentId,
          contentTitle: this.dataForm.contentTitle,
          contentType: this.dataForm.contentType,
          contentLocal: this.dataForm.contentLocal,
          contentPath: this.dataForm.contentPath,
          fileName: this.dataForm.fileName,
          fileSize: this.dataForm.fileSize,
          fileSuffix: this.dataForm.fileSuffix,
          param: this.dataForm.param,
          createTime: this.dataForm.createTime,
          themeId: this.dataForm.themeId
        }
        API.content.list(params).then(({data}) => {
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
          API.content.del(ids).then(({data}) => {
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
