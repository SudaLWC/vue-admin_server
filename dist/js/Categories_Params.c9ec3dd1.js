(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Categories_Params"],{"498a":function(t,e,a){"use strict";var r=a("23e7"),n=a("58a8").trim,i=a("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("577e"),i=a("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),c=function(t){return function(e){var a=n(r(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(l,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6f88":function(t,e,a){"use strict";a("c9b2")},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),i=a("e8b5"),s=a("861d"),o=a("7b0b"),l=a("50c4"),c=a("8418"),u=a("65f0"),d=a("1dde"),m=a("b622"),p=a("2d00"),f=m("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",h=p>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),v=d("concat"),_=function(t){if(!s(t))return!1;var e=t[f];return void 0!==e?!!e:i(t)},C=!h||!v;r({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,r,n,i,s=o(this),d=u(s,0),m=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?s:arguments[e],_(i)){if(n=l(i.length),m+n>g)throw TypeError(b);for(a=0;a<n;a++,m++)a in i&&c(d,m,i[a])}else{if(m>=g)throw TypeError(b);c(d,m++,i)}return d.length=m,d}})},aad8:function(t,e,a){},c7dc:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("分类参数")])],1),a("el-card",[a("el-alert",{attrs:{title:"注意: 只允许为第三级分类设置相关参数!",type:"warning","show-icon":"",closable:!1}}),a("el-row",{staticClass:"good-choice"},[a("el-col",[a("span",[t._v("选择商品分类:")]),a("el-cascader",{attrs:{options:t.cateList,props:t.cateProps,clearable:"",size:"small"},on:{change:t.cateChange},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}})],1)],1),a("el-row",{staticClass:"tabnav"},[a("el-col",[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtnDisabled},on:{click:function(e){t.addAttrDialogVisible=!0}}},[t._v(" 添加参数 ")]),"many"===t.activeName?a("el-table",{attrs:{data:t.manyData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.removeValTag(e.row,n)}}},[t._v(" "+t._s(r)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}],null,!1,2245866858)}),a("el-table-column",{attrs:{type:"index",align:"center"}}),a("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){return t.showEditAttrDialog(e.row.attr_id)}}},[t._v(" 修改 ")]),a("el-button",{attrs:{type:"danger ",size:"mini",icon:"el-icon-delete"},on:{click:function(a){return t.removeAttrById(e.row.attr_id)}}},[t._v(" 删除 ")])]}}],null,!1,1222309842)})],1):t._e()],1)],[a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtnDisabled},on:{click:function(e){t.addAttrDialogVisible=!0}}},[t._v(" 添加属性 ")]),"only"===t.activeName?a("el-table",{attrs:{data:t.onlyData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.removeValTag(e.row,n)}}},[t._v(" "+t._s(r)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}],null,!1,2245866858)}),a("el-table-column",{attrs:{type:"index",align:"center"}}),a("el-table-column",{attrs:{label:"属性名称",prop:"attr_name"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){return t.showEditAttrDialog(e.row.attr_id)}}},[t._v(" 修改 ")]),a("el-button",{attrs:{type:"danger ",size:"mini",icon:"el-icon-delete"},on:{click:function(a){return t.removeAttrById(e.row.attr_id)}}},[t._v(" 删除 ")])]}}],null,!1,1222309842)})],1):t._e()],1)]],2)],1)],1)],1),a("el-dialog",{attrs:{title:"添加"+t.titleContent,visible:t.addAttrDialogVisible,width:"600px"},on:{"update:visible":function(e){t.addAttrDialogVisible=e},close:t.addAttrDialogclosed}},[a("el-form",{ref:"addAttrFormRef",attrs:{model:t.addAttrForm,rules:t.addAttrFormRules,"label-width":"134px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"参数名称",prop:"attr_name"}},[a("el-input",{attrs:{placeholder:"请输入参数名称",clearable:""},model:{value:t.addAttrForm.attr_name,callback:function(e){t.$set(t.addAttrForm,"attr_name",e)},expression:"addAttrForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addAttrDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveAddAttr}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改"+t.titleContent,visible:t.editAttrDialogVisible,width:"600px"},on:{"update:visible":function(e){t.editAttrDialogVisible=e},close:t.editAttrDialogclosed}},[a("el-form",{ref:"editAttrFormRef",attrs:{model:t.editAttrForm,rules:t.editAttrFormRules,"label-width":"134px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"参数名称",prop:"attr_name"}},[a("el-input",{attrs:{placeholder:"请输入参数名称",clearable:""},model:{value:t.editAttrForm.attr_name,callback:function(e){t.$set(t.editAttrForm,"attr_name",e)},expression:"editAttrForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editAttrDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEditAttr}},[t._v("确 定")])],1)],1)],1)},n=[],i=a("1da1"),s=(a("159b"),a("ac1f"),a("1276"),a("99af"),a("498a"),a("a434"),a("a15b"),a("96cf"),{data:function(){return{cateList:[],cateProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},selectedKeys:[],activeName:"many",manyData:[],onlyData:[],addAttrDialogVisible:!1,addAttrForm:{attr_name:""},addAttrFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},editAttrDialogVisible:!1,editAttrForm:{},editAttrFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]}}},created:function(){this.getCateList()},methods:{getCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories");case 2:if(a=e.sent,r=a.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error({message:"获取商品分类列表失败!",duration:1500}));case 6:t.cateList=r.data;case 7:case"end":return e.stop()}}),e)})))()},cateChange:function(){if(3!==this.selectedKeys.length)return this.selectedKeys=[],this.manyData=[],void(this.onlyData=[]);this.getTableData()},handleClick:function(){3===this.selectedKeys.length&&this.getTableData()},getTableData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.manyData=[],t.onlyData=[],e.next=4,t.$http.get("categories/".concat(t.cateId,"/attributes"),{params:{sel:t.activeName}});case 4:if(a=e.sent,r=a.data,200===r.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error({message:"获取表格数据失败!",duration:1e3}));case 8:if(r.data.forEach((function(t){t.attr_vals=t.attr_vals?t.attr_vals.split(","):[],t.inputVisible=!1,t.inputValue=""})),"many"!==t.activeName){e.next=14;break}return t.manyData=r.data,e.abrupt("return");case 14:return t.onlyData=r.data,e.abrupt("return");case 16:case"end":return e.stop()}}),e)})))()},addAttrDialogclosed:function(){this.$refs.addAttrFormRef.resetFields()},saveAddAttr:function(){var t=this;this.$refs.addAttrFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("categories/".concat(t.cateId,"/attributes"),{attr_name:t.addAttrForm.attr_name,attr_sel:t.activeName});case 4:if(r=e.sent,n=r.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error({message:"添加参数失败!",duration:1e3}));case 8:t.addAttrDialogVisible=!1,t.$message.success({message:"添加参数成功!",duration:1e3}),t.getTableData();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},showEditAttrDialog:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.get("categories/".concat(e.cateId,"/attributes/")+t,{params:{attr_sel:e.activeName}});case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error({message:"获取"+e.titleContent+"信息失败!",duration:1e3}));case 6:e.editAttrForm=n.data,e.editAttrDialogVisible=!0;case 8:case"end":return a.stop()}}),a)})))()},saveEditAttr:function(){var t=this;this.$refs.editAttrFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.put("categories/".concat(t.cateId,"/attributes/").concat(t.editAttrForm.attr_id),{attr_name:t.editAttrForm.attr_name,attr_sel:t.activeName,attr_vals:t.editAttrForm.attr_vals});case 4:if(r=e.sent,n=r.data,200===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error({message:"修改"+t.titleContent+"失败!",duration:1500}));case 8:t.editAttrDialogVisible=!1,t.$message.success({message:"修改"+t.titleContent+"成功!",duration:1500}),t.getTableData();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},editAttrDialogclosed:function(){this.$refs.editAttrFormRef.clearValidate()},removeAttrById:function(t){var e=this;this.$confirm("'此操作将永久删除该'".concat(this.titleContent,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.delete("categories/".concat(e.cateId,"/attributes/")+t);case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error({message:"删除"+e.titleContent+"失败!",duration:1500}));case 6:e.$message.success({message:"删除"+e.titleContent+"成功!",duration:1500}),e.getTableData();case 8:case"end":return a.stop()}}),a)})))).catch((function(){e.$message({message:"已取消删除",duration:1500})}))},showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(t){if(!t.inputValue.trim())return t.inputVisible=!1,void(t.inputValue="");t.attr_vals.push(t.inputValue.trim()),t.inputVisible=!1,t.inputValue="",this.saveAttrVal(t)},removeValTag:function(t,e){t.attr_vals.splice(e,1),this.saveAttrVal(t)},saveAttrVal:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.put("categories/".concat(e.cateId,"/attributes/").concat(t.attr_id),{attr_name:t.attr_name,attr_sel:e.activeName,attr_vals:t.attr_vals.join(",")});case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error({message:"更新参数项失败!",duration:1500}));case 6:e.$message.success({message:"更新参数项成功!",duration:1500});case 7:case"end":return a.stop()}}),a)})))()}},computed:{isBtnDisabled:function(){return 3!==this.selectedKeys.length},cateId:function(){return 3!==this.selectedKeys.length?null:this.selectedKeys[2]},titleContent:function(){return"many"===this.activeName?"动态参数":"静态属性"}}}),o=s,l=(a("ce48"),a("2877")),c=Object(l["a"])(o,r,n,!1,null,"076f8d46",null);e["default"]=c.exports},c8d2:function(t,e,a){var r=a("d039"),n=a("5899"),i="​᠎";t.exports=function(t){return r((function(){return!!n[t]()||i[t]()!=i||n[t].name!==t}))}},c9b2:function(t,e,a){},ce48:function(t,e,a){"use strict";a("aad8")},d765:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("商品分类")])],1),a("el-card",[a("el-row",[a("el-col",[a("el-button",{staticClass:"addCate",attrs:{type:"primary"},on:{click:t.showAddCateDialog}},[t._v("添加分类")])],1)],1),a("tree-table",{staticClass:"tree-table",attrs:{data:t.cateList,columns:t.columns,"show-index":"","index-text":"","show-row-hover":!1,border:"","expand-type":!1,"selection-type":!1},scopedSlots:t._u([{key:"available",fn:function(t){return[!1===t.row.cat_deleted?a("i",{staticClass:"el-icon-success",staticStyle:{color:"lightgreen"}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"red"}})]}},{key:"sort",fn:function(e){return[0===e.row.cat_level?a("el-tag",{attrs:{size:"mini"}},[t._v("一级")]):1===e.row.cat_level?a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("二级")]):a("el-tag",{attrs:{size:"mini",type:"warning"}},[t._v("三级")])]}},{key:"operate",fn:function(e){return[a("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"mini"},on:{click:function(a){return t.showEditCate(e.row.cat_id)}}},[t._v("编辑")]),a("el-button",{attrs:{icon:"el-icon-delete",type:"danger",size:"mini"},on:{click:function(a){return t.removeCateById(e.row.cat_id)}}},[t._v("删除")])]}}])}),a("el-pagination",{attrs:{"current-page":t.cateQueryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":t.cateQueryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"添加分类",visible:t.addCateDialogVisible,width:"600px"},on:{"update:visible":function(e){t.addCateDialogVisible=e},close:t.addCateDialogclosed}},[a("el-form",{ref:"addCateFormRef",attrs:{model:t.addCateForm,rules:t.addCateFormRules,"label-width":"134px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{attrs:{placeholder:"请输入分类名称",clearable:""},model:{value:t.addCateForm.cat_name,callback:function(e){t.$set(t.addCateForm,"cat_name",e)},expression:"addCateForm.cat_name"}})],1),a("el-form-item",{attrs:{label:"父级分类"}},[a("el-cascader",{ref:"cascader",attrs:{options:t.parentCateList,props:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children",checkStrictly:"true"},clearable:""},on:{change:t.parentCateChange},model:{value:t.chosenKeys,callback:function(e){t.chosenKeys=e},expression:"chosenKeys"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addCateDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveAddCate}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑分类",visible:t.editCateDialogVisible,width:"600px"},on:{"update:visible":function(e){t.editCateDialogVisible=e},close:t.editCateDialogclosed}},[a("el-form",{ref:"editCateFormRef",attrs:{model:t.editCateForm,rules:t.editCateFormRules,"label-width":"134px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{attrs:{placeholder:"请输入分类名称",clearable:""},model:{value:t.editCateForm.cat_name,callback:function(e){t.$set(t.editCateForm,"cat_name",e)},expression:"editCateForm.cat_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editCateDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEditCate}},[t._v("确 定")])],1)],1)],1)},n=[],i=a("1da1"),s=(a("96cf"),{data:function(){return{cateQueryInfo:{type:3,pagenum:1,pagesize:5},cateList:[],total:0,columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"available"},{label:"排序",type:"template",template:"sort"},{label:"操作",type:"template",template:"operate",width:200,align:"center"}],addCateDialogVisible:!1,addCateForm:{cat_name:"",cat_pid:0,cat_level:0},addCateFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},parentCateList:[],chosenKeys:[],editCateDialogVisible:!1,editCateForm:{},editCateFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}}},created:function(){this.getCateList()},methods:{getCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories",{params:t.cateQueryInfo});case 2:if(a=e.sent,r=a.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error({message:"获取商品分类数据失败!",duration:1500}));case 6:t.cateList=r.data.result,t.total=r.data.total;case 8:case"end":return e.stop()}}),e)})))()},addCate:function(){console.log("添加分类")},handleSizeChange:function(t){this.cateQueryInfo.pagesize=t,this.getCateList()},handleCurrentChange:function(t){this.cateQueryInfo.pagenum=t,this.getCateList()},showAddCateDialog:function(){this.getParentCateList(),this.addCateDialogVisible=!0},getParentCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories",{params:{type:2}});case 2:if(a=e.sent,r=a.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error({message:"获取父级分类失败!",duration:1e3}));case 6:t.parentCateList=r.data;case 7:case"end":return e.stop()}}),e)})))()},parentCateChange:function(){if(this.chosenKeys.length)return this.addCateForm.cat_pid=this.chosenKeys[this.chosenKeys.length-1],this.addCateForm.cat_level=this.chosenKeys.length,this.$refs.cascader.dropDownVisible=!1;this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0},saveAddCate:function(){var t=this;this.$refs.addCateFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("categories",t.addCateForm);case 4:if(r=e.sent,n=r.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error({message:"添加分类失败!",duration:1e3}));case 8:t.$message.success({message:"添加分类成功!",duration:1e3}),t.getCateList(),t.addCateDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addCateDialogclosed:function(){this.$refs.addCateFormRef.resetFields(),this.chosenKeys=[],this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0},showEditCate:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.get("categories/"+t);case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error({message:"获取分类失败!",duration:1e3}));case 6:e.editCateForm=n.data,e.editCateDialogVisible=!0;case 8:case"end":return a.stop()}}),a)})))()},editCateDialogclosed:function(){this.$refs.editCateFormRef.clearValidate()},saveEditCate:function(){var t=this;this.$refs.editCateFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.put("categories/"+t.editCateForm.cat_id,{cat_name:t.editCateForm.cat_name});case 4:if(r=e.sent,n=r.data,200===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error({message:"更新分类失败!",duration:1e3}));case 8:t.editCateDialogVisible=!1,t.getCateList(),t.$message.success({message:"更新分类成功!",duration:1e3});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},removeCateById:function(t){var e=this;this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.delete("categories/"+t);case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error({message:"删除分类失败!",duration:1e3}));case 6:e.$message.success({message:"删除分类成功!",duration:1e3}),e.getCateList();case 8:case"end":return a.stop()}}),a)})))).catch((function(){e.$message({message:"已取消删除",duration:1e3})}))}}}),o=s,l=(a("6f88"),a("2877")),c=Object(l["a"])(o,r,n,!1,null,"34dc941f",null);e["default"]=c.exports}}]);
//# sourceMappingURL=Categories_Params.c9ec3dd1.js.map