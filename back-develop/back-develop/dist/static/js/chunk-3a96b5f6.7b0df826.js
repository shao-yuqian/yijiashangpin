(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a96b5f6"],{"0596":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("product-detail")},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[t.showStatus[0]?n("product-info-detail",{on:{nextStep:t.nextStep}}):t._e(),t.showStatus[1]?n("productAttrDetail",{on:{prevStep:t.prevStep,finishCommit:t.finishCommit,finishCommitUpdate:t.finishCommitUpdate}}):t._e()],1)},o=[],l=(n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),s=n("6b75");function c(t){if(Array.isArray(t))return Object(s["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7");function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var d=n("06c5");function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t){return c(t)||u(t)||Object(d["a"])(t)||f()}var p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"50px"}},[n("el-form",{ref:"productInfoForm",staticStyle:{width:"600px"},attrs:{model:t.value,rules:t.rules,"label-width":"120px",size:"small"}},[n("el-form-item",{attrs:{label:"产品分类：",prop:"productCategoryId"}},[n("el-cascader",{ref:"calssOption",attrs:{disabled:t.isActive,options:t.productCateOptions},on:{change:t.handleCateChange},model:{value:t.selectProductCateValue,callback:function(e){t.selectProductCateValue=e},expression:"selectProductCateValue"}})],1),n("el-form-item",{attrs:{label:"产品名称：",prop:"name"}},[n("el-input",{attrs:{disabled:t.isActive},model:{value:t.value.name,callback:function(e){t.$set(t.value,"name",e)},expression:"value.name"}})],1),n("el-form-item",{attrs:{label:"产品品牌：",prop:"brandName"}},[n("el-select",{attrs:{disabled:t.isActive,placeholder:"请选择品牌"},model:{value:t.value.brandName,callback:function(e){t.$set(t.value,"brandName",e)},expression:"value.brandName"}},[n("el-option",{attrs:{label:"添加新品牌",value:t.newBrand},nativeOn:{click:function(e){return t.addNewBrand(e)}}}),t._l(t.brandOptions,(function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],2)],1),n("el-form-item",{attrs:{label:"产品图片："}},[n("el-upload",{attrs:{disabled:t.isActive,action:"http://www.dreamqd.cn:5100/upload","list-type":"picture-card",limit:1,"on-exceed":t.handleExceed,"on-preview":t.handlePictureCardPreview,"file-list":t.fileList,"on-remove":t.handleRemove,"on-success":t.handle_success}},[n("i",{staticClass:"el-icon-plus"})]),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),n("el-form-item",{attrs:{label:"产品介绍："}},[n("el-input",{attrs:{disabled:t.isActive,autosize:!0,type:"textarea",placeholder:"请输入内容"},model:{value:t.value.description,callback:function(e){t.$set(t.value,"description",e)},expression:"value.description"}})],1),n("el-form-item",{attrs:{label:"产品售价："}},[n("el-input",{attrs:{disabled:t.isActive},model:{value:t.value.price,callback:function(e){t.$set(t.value,"price",e)},expression:"value.price"}})],1),n("el-form-item",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.handleNext("productInfoForm")}}},[t._v("下一步，填写商品属性")])],1)],1)],1)},m=[],g=(n("99af"),n("c975"),n("b0c0"),n("5530")),v=n("c4c8"),b=n("2f62"),y={name:"productInfoDetail",data:function(){return{value:{name:"",description:"",price:"",brandName:""},newBrand:"",isActive:!0,fileList:[],spg_id:"",dialogImageUrl:"",dialogVisible:!1,topTitle:["数码","服饰"],selectProductCateValue:["shumajiadian"],productCateOptions:[{value:"shumajiadian",label:"数码家电",children:[]},{value:"jujiashenghuo",label:"居家生活",children:[]},{value:"fushi",label:"服饰",children:[]},{value:"meishi",label:"美食",children:[]},{value:"gehuqignjie",label:"个护清洁",children:[]},{value:"shoushizhubao",label:"首饰珠宝",children:[]}],brandOptions:[],rules:{name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],brandName:[{required:!0,message:"请输入商品品牌",trigger:"blur"}]}}},created:function(){var t=this;this.$route.query.id?(this.isActive=!0,Object(v["h"])({id:this.$route.query.id}).then((function(e){console.log(e.data.data);var n=e.data.data[0].id,i=e.data.data[0].parent_name;console.log(i),console.log(n);for(var a=0;a<t.productCateOptions.length;a++)if(t.productCateOptions[a].label==i){t.selectProductCateValue[0]=t.productCateOptions[a].value;break}t.getProductCateList(),t.selectProductCateValue.push("".concat(n)),t.updateCategoryId(t.selectProductCateValue[1]),Object(v["o"])({store_id:t.storeInfo.id,category_id:1}).then((function(e){console.log(e);var n=e.data.data;t.brandOptions=[];for(var i=0;i<n.length;i++)t.brandOptions.push({label:"".concat(n[i].name),value:"".concat(n[i].name)})}))})).catch((function(t){console.log(t)})),Object(v["n"])({id:this.$route.query.id}).then((function(e){console.log(e.data.data[0]);var n=e.data.data[0];t.value.name=n.title,t.dialogImageUrl=n.img,t.fileList.push({url:n.img}),t.value.description=n.sub_title,t.value.price=n.price})),Object(v["g"])({id:this.$route.query.id}).then((function(e){console.log(e.data.data),t.value.brandName=e.data.data[0].name})).catch((function(t){console.log(t)}))):(this.isActive=!1,this.getProductCateList(),this.selectProductCateValue.push("27"),this.updateCategoryId(1),console.log(this.storeInfo.id),Object(v["o"])({store_id:this.storeInfo.id,category_id:27}).then((function(e){console.log(e);for(var n=e.data.data,i=0;i<n.length;i++)t.brandOptions.push({label:"".concat(n[i].name),value:"".concat(n[i].name)})})))},methods:Object(g["a"])(Object(g["a"])({},Object(b["b"])("product",["updateProductMessage","updateCategoryId","updateSpuTitle"])),{},{handleNext:function(t){var e=this;this.updateSpuTitle(this.value.name),this.$refs[t].validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(n){var i,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e.$refs["calssOption"].inputValue.indexOf("/"),a=e.$refs["calssOption"].inputValue.substring(i+2),console.log(e.storeInfo.id),r={title:e.value.name,store_id:e.storeInfo.id,spec:a,img:e.dialogImageUrl,price:e.value.price,brand:e.value.brandName,sub_title:e.value.description},n?(console.log("进入下一栏"),e.$route.query.id||Object(v["b"])(r).then((function(t){console.log("添加成功",t)})).catch((function(t){console.log(t)})),e.$emit("nextStep")):e.$message({message:"验证失败",type:"error",duration:1e3});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getProductCateList:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={parent_name:""},i.parent_name=t.productCateOptions[n].label,e.next=4,Object(v["i"])(i).then((function(e){for(var i=e.data.data,a=0;a<i.length;a++)t.productCateOptions[n].children.push({value:"".concat(i[a].id),label:"".concat(i[a].name)})})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})),i=0;case 2:if(!(i<t.productCateOptions.length)){e.next=7;break}return e.delegateYield(n(i),"t0",4);case 4:i++,e.next=2;break;case 7:case"end":return e.stop()}}),e)})))()},handleCateChange:function(){var t=this;console.log("改变了分类");var e=this.selectProductCateValue;this.updateCategoryId(e[1]),console.log(e[1]),Object(v["o"])({store_id:this.storeInfo.id,category_id:e[1]}).then((function(e){console.log(e);var n=e.data.data;t.brandOptions=[];for(var i=0;i<n.length;i++)t.brandOptions.push({label:"".concat(n[i].name),value:"".concat(n[i].name)})}))},handleRemove:function(t,e){console.log(t,e),this.dialogImageUrl=[]},handle_success:function(t){console.log(t.files),this.dialogImageUrl=t.files},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},addNewBrand:function(){var t=this;console.log("添加新品牌"),this.$confirm("添加新的商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$router.push({path:"/product/addBrand"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}),computed:Object(g["a"])({},Object(b["c"])({storeInfo:"storeInfo"}))},w=y,k=n("2877"),x=Object(k["a"])(w,p,m,!1,null,null,null),S=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"50px"}},[n("el-form",{ref:"productAttrForm",staticStyle:{width:"720px"},attrs:{model:t.value,"label-width":"120px",size:"small"}},[n("el-form-item",{attrs:{label:"商品规格："}},[n("el-card",{staticClass:"cardBg",attrs:{shadow:"never"}},t._l(t.selectProductParam,(function(e,i){return n("div",{key:i,staticClass:"littleMarginTop"},[n("div",[t._v(" "+t._s(e.name)+"： "),n("div",[n("el-checkbox-group",{model:{value:t.checkProductAttr[i],callback:function(e){t.$set(t.checkProductAttr,i,e)},expression:"checkProductAttr[index]"}},t._l(t.selectProductAttr[i],(function(e,a){return n("div",{key:a,staticClass:"littleMarginLeft",staticStyle:{display:"inline-block"}},[n("el-checkbox",{attrs:{label:e}}),n("el-button",{staticClass:"littleMarginLeft",attrs:{disabled:t.isActive,type:"text"},on:{click:function(e){return t.handleRemoveProductAttrValue(i,a)}}},[t._v("删除")])],1)})),0)],1)]),n("el-input",{staticStyle:{width:"160px","margin-left":"10px"},model:{value:t.param[i],callback:function(e){t.$set(t.param,i,e)},expression:"param[index]"}}),n("el-button",{staticClass:"littleMarginLeft",attrs:{disabled:t.isActive},on:{click:function(e){return t.handleAddProductAttrValue(i)}}},[t._v("增加")])],1)})),0),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{border:"",data:t.skuParamList}},[t._l(t.selectProductParam,(function(e,i){return n("el-table-column",{key:i,attrs:{label:e.name,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.param[i])+" ")]}}],null,!0)})})),n("el-table-column",{attrs:{label:"销售价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.price,callback:function(n){t.$set(e.row,"price",n)},expression:"scope.row.price"}})]}}])}),n("el-table-column",{attrs:{label:"商品库存",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.stock,callback:function(n){t.$set(e.row,"stock",n)},expression:"scope.row.stock"}})]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.handleRemoveProductSku(e.$index,e.row)}}},[t._v(" 删除 ")])]}}])})],2),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{disabled:t.isActive,type:"primary"},on:{click:t.handleRefreshProductSkuList}},[t._v("刷新列表")])],1),n("el-form-item",{attrs:{label:"商品相册："}},[n("el-upload",{attrs:{action:"http://www.dreamqd.cn:5100/upload","list-type":"picture-card",limit:4,"on-exceed":t.handleExceed,"file-list":t.fileList,"on-remove":t.handleRemove,"on-success":t.handle_success}},[n("i",{staticClass:"el-icon-plus"})]),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),n("el-form-item",{attrs:{label:"规格参数"}},[n("el-tabs",{attrs:{type:"card"},model:{value:t.activeHtmlName,callback:function(e){t.activeHtmlName=e},expression:"activeHtmlName"}},[n("el-tab-pane",{attrs:{label:"电脑端详情",name:"pc"}},[n("tinymce",{attrs:{width:595,height:300},model:{value:t.detailHtml,callback:function(e){t.detailHtml=e},expression:"detailHtml"}})],1),n("el-tab-pane",{attrs:{label:"移动端详情",name:"mobile"}},[n("tinymce",{attrs:{width:595,height:300},model:{value:t.detailMobileHtml,callback:function(e){t.detailMobileHtml=e},expression:"detailMobileHtml"}})],1)],1)],1),n("el-form-item",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{size:"medium"},on:{click:t.handlePrev}},[t._v("上一步，填写商品信息")]),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.handleFinishCommit}},[t._v("完成，提交商品")])],1)],1)],1)},O=[],A=(n("4de4"),n("d81d"),n("a434"),n("07ac"),n("6062"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container editor-container"},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),n("div",{staticClass:"editor-custom-btn-container"},[n("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])}),_=[],P=(n("4160"),n("a9e3"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片 ")]),n("el-dialog",{attrs:{"append-to-body":"",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{action:"http://www.dreamqd.cn:5100/upload",data:t.dataObj,multiple:!0,"file-list":t.fileList,"show-file-list":!0,"list-type":"picture-card","on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)}),I=[];n("b775");var j={name:"editorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[],arr:[],dataObj:{policy:"",signature:"",key:"",ossaccessKeyId:"",dir:"",host:""}}},methods:{checkAllSuccess:function(){return this.arr.length>0},handleSubmit:function(){this.checkAllSuccess()?(console.log(this.arr),this.$emit("successCBK",this.arr),this.arr=[],this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){this.arr.push(e)},handleRemove:function(t){var e=t.uid;this.arr=this.arr.filter((function(t){return console.log(t.uid),t.uid!=e})),console.log(this.arr)},beforeUpload:function(t){var e=t.uid;return this.listObj[e]={},!0}}},R=j,$=(n("c406"),Object(k["a"])(R,P,I,!1,null,"1f10fc8e",null)),T=$.exports,N=(n("198e"),["advlist anchor autolink autosave code codesample colorpicker colorpicker\n contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime\n legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace\n spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"]),L=["bold italic underline strikethrough alignleft aligncenter\n alignright outdent indent  blockquote undo redo removeformat code","hr bullist numlist link image charmap\t preview anchor pagebreak\n   fullscreen insertdatetime media table forecolor backcolor"],H={name:"tinymce",components:{editorImage:T},props:{id:{type:String},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{default:"file edit insert view format table"},height:{type:Number,required:!1,default:360},width:{type:Number,required:!1,default:720}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t)}))}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),width:this.width,height:this.height,language:"zh_CN",body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:L,menubar:!1,plugins:N,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",n.getContent())}))}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.response.files,'" >'))}))}},destroyed:function(){this.destroyTinymce()}},U=H,E=(n("ed23"),Object(k["a"])(U,A,_,!1,null,"7372c2ff",null)),V=E.exports,B=(n("bd11"),[]),D=[],z={name:"productAttrDetail",components:{Tinymce:V},data:function(){return{isActive:!0,stock:"",value:{},selectProductParam:[],dialogImageUrl:[],fileList:[],dialogVisible:!1,param:[],skuPrice:"",spg_id:"",selectProductAttr:[],checkProductAttr:[],skuParamList:[],activeHtmlName:"pc",detailHtml:"",detailMobileHtml:""}},created:function(){var t=this;if(this.isActive=!1,Object(v["i"])({category_id:this.category_id}).then((function(e){var n=e.data.data[0].name;Object(v["m"])({name:n}).then((function(e){t.spg_id=e.data.data[0].id,Object(v["l"])({spg_id:t.spg_id}).then((function(e){console.log(e.data.data),t.selectProductParam=e.data.data;for(var n=0;n<t.selectProductParam.length;n++)t.$route.query.id||t.selectProductAttr.push([]),t.checkProductAttr.push([])})).catch((function(t){}))}))})).catch((function(t){console.log(t)})),this.$route.query.id){this.isActive=!0;var e=[];Object(v["k"])({spu_id:this.$route.query.id}).then((function(n){for(var i=n.data.data,a=JSON.parse(i[0].param),r=0;r<a.length;r++)e.push([]);for(var o=0;o<i.length;o++){for(var l=JSON.parse(i[o].param),s=[],c=0;c<l.length;c++)e[c].push(l[c].value),s.push(l[c].value);t.skuParamList.push({param:s,price:i[o].price,stock:i[o].stock,id:i[o].id}),console.log(t.skuParamList)}var u=JSON.parse(i[0].imgs);console.log(u),t.dialogImageUrl=u;for(var d=0;d<u.length;d++)t.fileList.push({url:u[d]});t.detailHtml=i[0].desc_pc,t.detailMobileHtml=i[0].desc_app;for(var f=0;f<e.length;f++)e[f]=Array.from(new Set(e[f]));t.selectProductAttr=JSON.parse(JSON.stringify(e)),t.checkProductAttr=JSON.parse(JSON.stringify(t.selectProductAttr))})).catch((function(t){console.log(t)}))}},computed:Object(g["a"])({},Object(b["c"])({category_id:"category_id",spuTitle:"spuTitle"})),methods:{handleRefreshProductSkuList:function(){D=[],B=[],this.combin(this.checkProductAttr,0),D=D.map((function(t){return t=JSON.parse(t),Object.assign({},{param:t,price:"",stock:""})})),this.skuParamList=D},combin:function(t,e){for(var n=0;n<t[e].length;n++)B[e]=t[e][n],e!=t.length-1?this.combin(t,e+1):D.push(JSON.stringify(B))},handleAddProductAttrValue:function(t){console.log(t),this.selectProductAttr[t].push(this.param[t]),console.log(this.param[t],this.selectProductAttr)},handleRemoveProductAttrValue:function(t,e){for(var n=0;n<this.checkProductAttr.length;n++)for(var i=0;i<this.checkProductAttr[n].length;i++)this.selectProductAttr[t][e]==this.checkProductAttr[n][i]&&this.checkProductAttr[n].splice(i,1);this.selectProductAttr[t].splice(e,1)},handleRemoveProductSku:function(t,e){var n=this;this.skuParamList.splice(t,1),this.$route.query.id&&Object(v["e"])({id:e.id}).then((function(t){console.log(t),0==n.skuParamList.length&&n.$confirm("您以删除该产品下的所有商品，是否删除此产品","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(v["c"])({id:n.$route.query.id}).then((function(t){console.log(t)}))}))})).catch((function(t){console.log(t)}))},handleRemove:function(t,e){this.$route.query.id?this.dialogImageUrl=this.dialogImageUrl.filter((function(e){return e!=t.url})):this.dialogImageUrl=this.dialogImageUrl.filter((function(e){return e!=t.response.files})),console.log(this.dialogImageUrl)},handle_success:function(t){this.dialogImageUrl.push(t.files)},handlePrev:function(){this.$emit("prevStep")},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},handleFinishCommit:function(){var t=this;Object(v["n"])({title:this.spuTitle}).then((function(e){var n=e.data.data[0].id,i=[];i=JSON.parse(JSON.stringify(t.skuParamList));for(var a=0;a<i.length;a++){for(var r=i[a].param,o=[],l=0;l<r.length;l++)console.log(r[l]),o.push({key:"".concat(t.selectProductParam[l].name),value:"".concat(r[l])});i[a].param=JSON.stringify(o),i[a].title=t.spuTitle,i[a].spu_id=n,i[a].imgs=JSON.stringify(t.dialogImageUrl),i[a].detailHtml=t.detailHtml,i[a].detailMobileHtml=t.detailMobileHtml}for(var s=[],c=0;c<i.length;c++)s=s.concat(h(Object.values(i[c])));var u={params:s};t.$route.query.id?t.$emit("finishCommitUpdate",i):t.$emit("finishCommit",u)})).catch((function(t){console.log(t)}))}}},F=z,q=(n("6310"),Object(k["a"])(F,C,O,!1,null,"5aaa4982",null)),M=q.exports,J={components:{productInfoDetail:S,productAttrDetail:M},data:function(){return{active:0,showStatus:[!0,!1]}},created:function(){},methods:{hideAll:function(){for(var t=0;t<this.showStatus.length;t++)this.showStatus[t]=!1},nextStep:function(){this.active<this.showStatus.length-1&&(console.log("开始进入下一页"),this.active++,this.hideAll(),this.showStatus[this.active]=!0,this.showStatus=h(this.showStatus))},prevStep:function(){console.log("进入了父组件的上一页函数"),this.active>0&&this.active<this.showStatus.length&&(this.active--,this.hideAll(),this.showStatus[this.active]=!0,this.showStatus=h(this.showStatus))},finishCommit:function(t){this.$confirm("是否要提交该产品","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(t),Object(v["a"])(t).then((function(t){console.log(t.data)}))}))},finishCommitUpdate:function(t){this.$confirm("是否要提交该产品","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t),n=regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t[n]),e.next=3,Object(v["p"])(t[n]).then((function(t){console.log(n+"修改成功",t)}));case 3:case"end":return e.stop()}}),e)})),i=0;case 3:if(!(i<t.length)){e.next=8;break}return e.delegateYield(n(i),"t0",5);case 5:i++,e.next=3;break;case 8:case"end":return e.stop()}}),e)}))))}}},K=J,G=(n("1b2c"),Object(k["a"])(K,r,o,!1,null,null,null)),W=G.exports,Y={name:"addProduct",components:{productDetail:W}},Q=Y,X=Object(k["a"])(Q,i,a,!1,null,null,null);e["default"]=X.exports},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var i=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},"07ac":function(t,e,n){var i=n("23e7"),a=n("6f53").values;i({target:"Object",stat:!0},{values:function(t){return a(t)}})},"198e":function(t,e){tinymce.addI18n("zh_CN",{Cut:"剪切","Heading 5":"标题5","Header 2":"标题2","Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":"你的浏览器不支持对剪贴板的访问，请使用Ctrl+X/C/V键进行复制粘贴。","Heading 4":"标题4",Div:"Div区块","Heading 2":"标题2",Paste:"粘贴",Close:"关闭","Font Family":"字体",Pre:"预格式文本","Align right":"右对齐","New document":"新文档",Blockquote:"引用","Numbered list":"编号列表","Heading 1":"标题1",Headings:"标题","Increase indent":"增加缩进",Formats:"格式",Headers:"标题","Select all":"全选","Header 3":"标题3",Blocks:"区块",Undo:"撤消",Strikethrough:"删除线","Bullet list":"项目符号","Header 1":"标题1",Superscript:"上标","Clear formatting":"清除格式","Font Sizes":"字号",Subscript:"下标","Header 6":"标题6",Redo:"重复",Paragraph:"段落",Ok:"确定",Bold:"粗体",Code:"代码",Italic:"斜体","Align center":"居中","Header 5":"标题5","Heading 6":"标题6","Heading 3":"标题3","Decrease indent":"减少缩进","Header 4":"标题4","Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.":"当前为纯文本粘贴模式，再次点击可以回到普通粘贴模式。",Underline:"下划线",Cancel:"取消",Justify:"两端对齐",Inline:"文本",Copy:"复制","Align left":"左对齐","Visual aids":"网格线","Lower Greek":"小写希腊字母",Square:"方块",Default:"默认","Lower Alpha":"小写英文字母",Circle:"空心圆",Disc:"实心圆","Upper Alpha":"大写英文字母","Upper Roman":"大写罗马字母","Lower Roman":"小写罗马字母","Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.":"标识符应该以字母开头，后跟字母、数字、破折号、点、冒号或下划线。",Name:"名称",Anchor:"锚点",Id:"标识符","You have unsaved changes are you sure you want to navigate away?":"你还有文档尚未保存，确定要离开？","Restore last draft":"恢复上次的草稿","Special character":"特殊符号","Source code":"源代码",Language:"语言","Insert/Edit code sample":"插入/编辑代码示例",B:"B",R:"R",G:"G",Color:"颜色","Right to left":"从右到左","Left to right":"从左到右",Emoticons:"表情",Robots:"机器人","Document properties":"文档属性",Title:"标题",Keywords:"关键词",Encoding:"编码",Description:"描述",Author:"作者",Fullscreen:"全屏","Horizontal line":"水平分割线","Horizontal space":"水平边距","Insert/edit image":"插入/编辑图片",General:"普通",Advanced:"高级",Source:"地址",Border:"边框","Constrain proportions":"保持纵横比","Vertical space":"垂直边距","Image description":"图片描述",Style:"样式",Dimensions:"大小","Insert image":"插入图片",Image:"图片","Zoom in":"放大",Contrast:"对比度",Back:"后退",Gamma:"伽马值","Flip horizontally":"水平翻转",Resize:"调整大小",Sharpen:"锐化","Zoom out":"缩小","Image options":"图片选项",Apply:"应用",Brightness:"亮度","Rotate clockwise":"顺时针旋转","Rotate counterclockwise":"逆时针旋转","Edit image":"编辑图片","Color levels":"颜色层次",Crop:"裁剪",Orientation:"方向","Flip vertically":"垂直翻转",Invert:"反转","Date/time":"日期/时间","Insert date/time":"插入日期/时间","Remove link":"删除链接",Url:"地址","Text to display":"显示文字",Anchors:"锚点","Insert link":"插入链接",Link:"链接","New window":"在新窗口打开",None:"无","The URL you entered seems to be an external link. Do you want to add the required http:// prefix?":"你所填写的URL地址属于外部链接，需要加上http://:前缀吗？","Paste or type a link":"粘贴或输入链接",Target:"打开方式","The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?":"你所填写的URL地址为邮件地址，需要加上mailto:前缀吗？","Insert/edit link":"插入/编辑链接","Insert/edit video":"插入/编辑视频",Media:"媒体","Alternative source":"镜像","Paste your embed code below:":"将内嵌代码粘贴在下面:","Insert video":"插入视频",Poster:"封面","Insert/edit media":"插入/编辑媒体",Embed:"内嵌","Nonbreaking space":"不间断空格","Page break":"分页符","Paste as text":"粘贴为文本",Preview:"预览",Print:"打印",Save:"保存","Could not find the specified string.":"未找到搜索内容.",Replace:"替换",Next:"下一个","Whole words":"全字匹配","Find and replace":"查找和替换","Replace with":"替换为",Find:"查找","Replace all":"全部替换","Match case":"区分大小写",Prev:"上一个",Spellcheck:"拼写检查",Finish:"完成","Ignore all":"全部忽略",Ignore:"忽略","Add to Dictionary":"添加到字典","Insert row before":"在上方插入",Rows:"行",Height:"高","Paste row after":"粘贴到下方",Alignment:"对齐方式","Border color":"边框颜色","Column group":"列组",Row:"行","Insert column before":"在左侧插入","Split cell":"拆分单元格","Cell padding":"单元格内边距","Cell spacing":"单元格外间距","Row type":"行类型","Insert table":"插入表格",Body:"表体",Caption:"标题",Footer:"表尾","Delete row":"删除行","Paste row before":"粘贴到上方",Scope:"范围","Delete table":"删除表格","H Align":"水平对齐",Top:"顶部对齐","Header cell":"表头单元格",Column:"列","Row group":"行组",Cell:"单元格",Middle:"垂直居中","Cell type":"单元格类型","Copy row":"复制行","Row properties":"行属性","Table properties":"表格属性",Bottom:"底部对齐","V Align":"垂直对齐",Header:"表头",Right:"右对齐","Insert column after":"在右侧插入",Cols:"列","Insert row after":"在下方插入",Width:"宽","Cell properties":"单元格属性",Left:"左对齐","Cut row":"剪切行","Delete column":"删除列",Center:"居中","Merge cells":"合并单元格","Insert template":"插入模板",Templates:"模板","Background color":"背景色","Custom...":"自定义...","Custom color":"自定义颜色","No color":"无","Text color":"文字颜色","Table of Contents":"内容列表","Show blocks":"显示区块边框","Show invisible characters":"显示不可见字符","Words: {0}":"字数：{0}",Insert:"插入",File:"文件",Edit:"编辑","Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help":"在编辑区按ALT-F9打开菜单，按ALT-F10打开工具栏，按ALT-0查看帮助",Tools:"工具",View:"视图",Table:"表格",Format:"格式"})},"1b2c":function(t,e,n){"use strict";var i=n("bdd0"),a=n.n(i);a.a},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),a=n("825a"),r=n("d039"),o=n("ad6d"),l="toString",s=RegExp.prototype,c=s[l],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=l;(u||d)&&i(RegExp.prototype,l,(function(){var t=a(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,a=n("69f3"),r=n("7dd0"),o="String Iterator",l=a.set,s=a.getterFor(o);r(String,"String",(function(t){l(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,a=e.index;return a>=n.length?{value:void 0,done:!0}:(t=i(n,a),e.index+=t.length,{value:t,done:!1})}))},4406:function(t,e,n){},"4df4":function(t,e,n){"use strict";var i=n("0366"),a=n("7b0b"),r=n("9bdd"),o=n("e95a"),l=n("50c4"),s=n("8418"),c=n("35a1");t.exports=function(t){var e,n,u,d,f,h,p=a(t),m="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,b=void 0!==v,y=c(p),w=0;if(b&&(v=i(v,g>2?arguments[2]:void 0,2)),void 0==y||m==Array&&o(y))for(e=l(p.length),n=new m(e);e>w;w++)h=b?v(p[w],w):p[w],s(n,w,h);else for(d=y.call(p),f=d.next,n=new m;!(u=f.call(d)).done;w++)h=b?r(d,v,[u.value,w],!0):u.value,s(n,w,h);return n.length=w,n}},"4f70":function(t,e,n){},6062:function(t,e,n){"use strict";var i=n("6d61"),a=n("6566");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6310:function(t,e,n){"use strict";var i=n("ba9e"),a=n.n(i);a.a},6566:function(t,e,n){"use strict";var i=n("9bf2").f,a=n("7c73"),r=n("e2cc"),o=n("0366"),l=n("19aa"),s=n("2266"),c=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),p=h.set,m=h.getterFor;t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,i){l(t,u,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&s(i,t[c],t,n)})),h=m(e),g=function(t,e,n){var i,a,r=h(t),o=v(t,e);return o?o.value=n:(r.last=o={index:a=f(e,!0),key:e,value:n,previous:i=r.last,next:void 0,removed:!1},r.first||(r.first=o),i&&(i.next=o),d?r.size++:t.size++,"F"!==a&&(r.index[a]=o)),t},v=function(t,e){var n,i=h(t),a=f(e);if("F"!==a)return i.index[a];for(n=i.first;n;n=n.next)if(n.key==e)return n};return r(u.prototype,{clear:function(){var t=this,e=h(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),i=v(e,t);if(i){var a=i.next,r=i.previous;delete n.index[i.index],i.removed=!0,r&&(r.next=a),a&&(a.previous=r),n.first==i&&(n.first=a),n.last==i&&(n.last=r),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=h(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!v(this,t)}}),r(u.prototype,n?{get:function(t){var e=v(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&i(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(t,e,n){var i=e+" Iterator",a=m(e),r=m(i);c(t,e,(function(t,e){p(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},"6d61":function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),r=n("94ca"),o=n("6eeb"),l=n("f183"),s=n("2266"),c=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),p=n("7156");t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),v=m?"set":"add",b=a[t],y=b&&b.prototype,w=b,k={},x=function(t){var e=y[t];o(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(r(t,"function"!=typeof b||!(g||y.forEach&&!d((function(){(new b).entries().next()})))))w=n.getConstructor(e,t,m,v),l.REQUIRED=!0;else if(r(t,!0)){var S=new w,C=S[v](g?{}:-0,1)!=S,O=d((function(){S.has(1)})),A=f((function(t){new b(t)})),_=!g&&d((function(){var t=new b,e=5;while(e--)t[v](e,e);return!t.has(-0)}));A||(w=e((function(e,n){c(e,w,t);var i=p(new b,e,w);return void 0!=n&&s(n,i[v],i,m),i})),w.prototype=y,y.constructor=w),(O||_)&&(x("delete"),x("has"),m&&x("get")),(_||C)&&x(v),g&&y.clear&&delete y.clear}return k[t]=w,i({global:!0,forced:w!=b},k),h(w,t),g||n.setStrong(w,t,m),w}},"6f53":function(t,e,n){var i=n("83ab"),a=n("df75"),r=n("fc6a"),o=n("d1e7").f,l=function(t){return function(e){var n,l=r(e),s=a(l),c=s.length,u=0,d=[];while(c>u)n=s[u++],i&&!o.call(l,n)||d.push(t?[n,l[n]]:l[n]);return d}};t.exports={entries:l(!0),values:l(!1)}},a434:function(t,e,n){"use strict";var i=n("23e7"),a=n("23cb"),r=n("a691"),o=n("50c4"),l=n("7b0b"),s=n("65f0"),c=n("8418"),u=n("1dde"),d=n("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var n,i,u,d,f,h,b=l(this),y=o(b.length),w=a(t,y),k=arguments.length;if(0===k?n=i=0:1===k?(n=0,i=y-w):(n=k-2,i=m(p(r(e),0),y-w)),y+n-i>g)throw TypeError(v);for(u=s(b,i),d=0;d<i;d++)f=w+d,f in b&&c(u,d,b[f]);if(u.length=i,n<i){for(d=w;d<y-i;d++)f=d+i,h=d+n,f in b?b[h]=b[f]:delete b[h];for(d=y;d>y-i+n;d--)delete b[d-1]}else if(n>i)for(d=y-i;d>w;d--)f=d+i-1,h=d+n-1,f in b?b[h]=b[f]:delete b[h];for(d=0;d<n;d++)b[d+w]=arguments[d+2];return b.length=y-i+n,u}})},a630:function(t,e,n){var i=n("23e7"),a=n("4df4"),r=n("1c7e"),o=!r((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:o},{from:a})},ba9e:function(t,e,n){},bb2f:function(t,e,n){var i=n("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bdd0:function(t,e,n){},c406:function(t,e,n){"use strict";var i=n("4406"),a=n.n(i);a.a},c4c8:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"i",(function(){return l})),n.d(e,"o",(function(){return s})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"n",(function(){return f})),n.d(e,"a",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"e",(function(){return m})),n.d(e,"p",(function(){return g})),n.d(e,"h",(function(){return v})),n.d(e,"g",(function(){return b})),n.d(e,"c",(function(){return y}));var i=n("b775");function a(t){return Object(i["a"])({url:"/wares/getMenu",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/wares/deleteMenu",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/wares/deleteSubmenu",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/wares/getSubmenu",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/wares/getStorBrands",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/store/getSpecParam",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/classification/class",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/store/addSpu",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/store/getSpu",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/store/addMoreSku",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/store/getSku",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/store/checkDelete",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/store/updataShop",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/store/getCatName",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/store/getBrandName",method:"post",data:t})}function y(t){return Object(i["a"])({url:"/store/deleteSpu",method:"post",data:t})}},d28b:function(t,e,n){var i=n("746f");i("iterator")},e01a:function(t,e,n){"use strict";var i=n("23e7"),a=n("83ab"),r=n("da84"),o=n("5135"),l=n("861d"),s=n("9bf2").f,c=n("e893"),u=r.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(f,u);var h=f.prototype=u.prototype;h.constructor=f;var p=h.toString,m="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;s(h,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=p.call(t);if(o(d,t))return"";var n=m?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},ed23:function(t,e,n){"use strict";var i=n("4f70"),a=n.n(i);a.a},f183:function(t,e,n){var i=n("d012"),a=n("861d"),r=n("5135"),o=n("9bf2").f,l=n("90e3"),s=n("bb2f"),c=l("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(t){o(t,c,{value:{objectID:"O"+ ++u,weakData:{}}})},h=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,c)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[c].objectID},p=function(t,e){if(!r(t,c)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[c].weakData},m=function(t){return s&&g.REQUIRED&&d(t)&&!r(t,c)&&f(t),t},g=t.exports={REQUIRED:!1,fastKey:h,getWeakData:p,onFreeze:m};i[c]=!0},fb6a:function(t,e,n){"use strict";var i=n("23e7"),a=n("861d"),r=n("e8b5"),o=n("23cb"),l=n("50c4"),s=n("fc6a"),c=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),h=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),m=u("species"),g=[].slice,v=Math.max;i({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var n,i,u,d=s(this),f=l(d.length),h=o(t,f),p=o(void 0===e?f:e,f);if(r(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,h,p);for(i=new(void 0===n?Array:n)(v(p-h,0)),u=0;h<p;h++,u++)h in d&&c(i,u,d[h]);return i.length=u,i}})}}]);