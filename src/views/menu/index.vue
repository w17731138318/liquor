<template>
  <div class="mod-menu">
    <el-form size="mini" :inline="true" :model="dataForm">
      <el-form-item>
        <el-button size="mini" v-if="isAuth('sys:user:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      size="mini" 
      :data="dataList"
      border
      style="width: 100%;">
      <el-table-column
        prop="menuId"
        align="center"
        width="80"
        label="ID">
      </el-table-column>
      <table-tree-column
        prop="name"
        treeKey="menuId"
        width="150"
        label="名称">
      </table-tree-column>
      <el-table-column
        prop="parentName"
        align="center"
        width="120"
        label="上级菜单">
      </el-table-column>
      <el-table-column
        prop="icon"
        align="center"
        label="图标">
        <template slot-scope="scope">
          <i :class="['fa-lg', scope.row.icon]"></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        align="center"
        label="类型">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type === 0" size="mini" >目录</el-tag>
          <el-tag v-else-if="scope.row.type === 1" size="mini"  type="success">菜单</el-tag>
          <el-tag v-else-if="scope.row.type === 2" size="mini"  type="info">按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="orderNum"
        align="center"
        label="排序号">
      </el-table-column>
      <el-table-column
        prop="url"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="菜单URL">
      </el-table-column>
      <el-table-column
        prop="perms"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="授权标识">
      </el-table-column>
      <el-table-column
        align="center"
        width="150"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="isAuth('sys:user:update')" type="primary" size="mini" @click="addOrUpdateHandle(scope.row.menuId)">修改</el-button>
          <el-button v-if="isAuth('sys:user:delete')" type="danger" size="mini" @click="deleteHandle(scope.row.menuId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
  import TableTreeColumn from '@/components/table-tree-column'
  import AddOrUpdate from './add-or-update'
  import API from '@/api'
  import { treeDataTranslate } from '@/utils'
  export default {
    data () {
      return {
        dataForm: {},
        dataList: [],
        dataListLoading: false,
        addOrUpdateVisible: false
      }
    },
    components: {
      TableTreeColumn,
      AddOrUpdate
    },
    activated () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        API.menu.list().then(({data}) => {
          this.dataList = treeDataTranslate(data, 'menuId')
          this.dataListLoading = false
        })
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
        this.$confirm(`确定对[id=${id}]进行[删除]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          API.menu.del(id).then(({data}) => {
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
