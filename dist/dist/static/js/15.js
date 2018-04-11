webpackJsonp([15,25],{"3W8Q":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gyMJ"),n={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("dyKt").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key};i.a.config.list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.config.del(a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{size:"mini",inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{size:"mini",placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{size:"mini",data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",align:"center",width:"80",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"key",align:"center",label:"参数名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value",align:"center",label:"参数值"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",align:"center",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{size:"mini","current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},o=a("VU/8")(n,r,!1,null,null,null);t.default=o.exports},dyKt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gyMJ"),n={data:function(){return{visible:!1,dataForm:{id:0,key:"",value:"",remark:""},dataRule:{key:[{required:!0,message:"参数名不能为空",trigger:"blur"}],value:[{required:!0,message:"参数值不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&i.a.config.info(t.dataForm.id).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.key=a.config.key,t.dataForm.value=a.config.value,t.dataForm.remark=a.config.remark)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={id:e.dataForm.id||void 0,key:e.dataForm.key,value:e.dataForm.value,remark:e.dataForm.remark};(e.dataForm.id?i.a.config.update(a):i.a.config.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"参数名",prop:"key"}},[a("el-input",{attrs:{placeholder:"参数名"},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"参数值",prop:"value"}},[a("el-input",{attrs:{placeholder:"参数值"},model:{value:e.dataForm.value,callback:function(t){e.$set(e.dataForm,"value",t)},expression:"dataForm.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.remark,callback:function(t){e.$set(e.dataForm,"remark",t)},expression:"dataForm.remark"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=a("VU/8")(n,r,!1,null,null,null);t.default=o.exports}});