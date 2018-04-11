webpackJsonp([13,23],{uMyE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("gyMJ"),i={data:function(){return{dataForm:{goodsName:"",goodsType:"",productionDate:"",batch:"",indexes:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("xM/T").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,goodsName:this.dataForm.goodsName,goodsType:this.dataForm.goodsType,productionDate:this.dataForm.productionDate,batch:this.dataForm.batch,indexes:this.dataForm.indexes};o.a.goods.list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.a.goods.del(a).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{size:"mini",inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",{attrs:{label:"品名:"}},[a("el-input",{attrs:{size:"mini",placeholder:"品名",clearable:""},model:{value:e.dataForm.goodsName,callback:function(t){e.$set(e.dataForm,"goodsName",t)},expression:"dataForm.goodsName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产品类型:"}},[a("el-input",{attrs:{size:"mini",placeholder:"产品类型",clearable:""},model:{value:e.dataForm.goodsType,callback:function(t){e.$set(e.dataForm,"goodsType",t)},expression:"dataForm.goodsType"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生成日期:"}},[a("el-date-picker",{attrs:{size:"mini",type:"date",placeholder:"选择日期","value-format":"yyyy年MM月dd日",format:"yyyy年MM月dd日"},model:{value:e.dataForm.productionDate,callback:function(t){e.$set(e.dataForm,"productionDate",t)},expression:"dataForm.productionDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生产批次号:"}},[a("el-input",{attrs:{size:"mini",placeholder:"生产批次号",clearable:""},model:{value:e.dataForm.batch,callback:function(t){e.$set(e.dataForm,"batch",t)},expression:"dataForm.batch"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"编号:"}},[a("el-input",{attrs:{size:"mini",placeholder:"编号",clearable:""},model:{value:e.dataForm.indexes,callback:function(t){e.$set(e.dataForm,"indexes",t)},expression:"dataForm.indexes"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("web:goods:save")?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("web:goods:delete")?a("el-button",{attrs:{size:"mini",type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{size:"mini",data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",align:"center",label:"ID",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsType",align:"center",label:"产品类型",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsName","show-overflow-tooltip":!0,align:"center",label:"品名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"volume",align:"center",label:"容量",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"proof",align:"center",label:"度数",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"productionDate",align:"center",label:"生产日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"batch",align:"center",label:"生产批次号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"indexes",align:"center",label:"商品数量",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",align:"center",label:"创建时间",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{size:"mini","current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},l=a("VU/8")(i,r,!1,null,null,null);t.default=l.exports},"xM/T":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("gyMJ"),i={data:function(){return{visible:!1,dataForm:{id:0,goodsName:"",goodsType:"",details:"",volume:"",proof:"",productionDate:"",status:"",createUserId:"",createTime:"",batch:"",indexes:"",company:"",place:"",packing:""},dataRule:{goodsName:[{required:!0,message:"品名不能为空",trigger:"blur"}],goodsType:[{required:!0,message:"产品类型不能为空",trigger:"blur"}],volume:[{required:!0,message:"容量不能为空",trigger:"blur"}],proof:[{required:!0,message:"度数不能为空",trigger:"blur"}],productionDate:[{required:!0,message:"生产日期不能为空",trigger:"blur"}],batch:[{required:!0,message:"生产批次号不能为空",trigger:"blur"}],indexes:[{required:!0,message:"商品数量",trigger:"blur"}],company:[{required:!0,message:"客商名称不能为空",trigger:"blur"}],place:[{required:!0,message:"产地不能为空",trigger:"blur"}],packing:[{required:!0,message:"包装规格不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&o.a.goods.info(t.dataForm.id).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.goodsName=a.goods.goodsName,t.dataForm.goodsType=a.goods.goodsType,t.dataForm.details=a.goods.details,t.dataForm.volume=a.goods.volume,t.dataForm.proof=a.goods.proof,t.dataForm.productionDate=a.goods.productionDate,t.dataForm.createTime=a.goods.createTime,t.dataForm.batch=a.goods.batch,t.dataForm.indexes=a.goods.indexes,t.dataForm.company=a.goods.company,t.dataForm.place=a.goods.place,t.dataForm.packing=a.goods.packing)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={id:e.dataForm.id||void 0,goodsName:e.dataForm.goodsName,goodsType:e.dataForm.goodsType,details:e.dataForm.details,volume:e.dataForm.volume,proof:e.dataForm.proof,productionDate:e.dataForm.productionDate,status:e.dataForm.status,createUserId:e.dataForm.createUserId,createTime:e.dataForm.createTime,batch:e.dataForm.batch,indexes:e.dataForm.indexes,company:e.dataForm.company,place:e.dataForm.place,packing:e.dataForm.packing};(e.dataForm.id?o.a.goods.update(a):o.a.goods.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{size:"mini",model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"产品类型",prop:"goodsType"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"产品类型"},model:{value:e.dataForm.goodsType,callback:function(t){e.$set(e.dataForm,"goodsType",t)},expression:"dataForm.goodsType"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品名",prop:"goodsName"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"品名"},model:{value:e.dataForm.goodsName,callback:function(t){e.$set(e.dataForm,"goodsName",t)},expression:"dataForm.goodsName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"容量",prop:"volume"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"容量"},model:{value:e.dataForm.volume,callback:function(t){e.$set(e.dataForm,"volume",t)},expression:"dataForm.volume"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"度数",prop:"proof"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"度数"},model:{value:e.dataForm.proof,callback:function(t){e.$set(e.dataForm,"proof",t)},expression:"dataForm.proof"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生成日期",prop:"productionDate"}},[a("el-date-picker",{attrs:{size:"mini",type:"date",placeholder:"选择日期","value-format":"yyyy年MM月dd日",format:"yyyy年MM月dd日"},model:{value:e.dataForm.productionDate,callback:function(t){e.$set(e.dataForm,"productionDate",t)},expression:"dataForm.productionDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生产批次号",prop:"batch"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"生产批次号"},model:{value:e.dataForm.batch,callback:function(t){e.$set(e.dataForm,"batch",t)},expression:"dataForm.batch"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品数量",prop:"indexes"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"商品数量"},model:{value:e.dataForm.indexes,callback:function(t){e.$set(e.dataForm,"indexes",t)},expression:"dataForm.indexes"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客商名称",prop:"company"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"客商名称"},model:{value:e.dataForm.company,callback:function(t){e.$set(e.dataForm,"company",t)},expression:"dataForm.company"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产地",prop:"place"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"产地"},model:{value:e.dataForm.place,callback:function(t){e.$set(e.dataForm,"place",t)},expression:"dataForm.place"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"包装规格",prop:"packing"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"包装规格"},model:{value:e.dataForm.packing,callback:function(t){e.$set(e.dataForm,"packing",t)},expression:"dataForm.packing"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"详情"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:2,size:"mini",placeholder:"详情"},model:{value:e.dataForm.details,callback:function(t){e.$set(e.dataForm,"details",t)},expression:"dataForm.details"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=a("VU/8")(i,r,!1,null,null,null);t.default=l.exports}});