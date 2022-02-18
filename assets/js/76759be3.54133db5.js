"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[5756],{71766:function(e,t,a){var r=a(97218),o=a(67294),i=(a(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(r.Z,{dataSource:e.dataSource,columns:i,pagination:!1})}},72181:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(75068),o=a(67294),i=a(45697),n=a.n(i),d=a(41481),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).createRecevier=function(){a.destroyRecevier(),a.recevier=new d.Z,a.recevier.on("updateHeight",(function(e,t,r){a.iframe&&r===a.iframe.contentWindow&&(a.container.style.height=(e.msg||0)+"px",a.props.onUpdateHeight(e.msg||"#"))}))},a.destroyRecevier=function(){a.recevier&&(a.recevier.destroy(),a.recevier=null)},a.container=null,a.iframe=null,a}(0,r.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},a.componentDidUpdate=function(e){var t=e.url,a=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),a!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},a.componentWillUnmount=function(){this.destroyRecevier()},a.render=function(){var e=this,t=this.props,a=t.className,r=t.id,i=t.style,n=t.url;return n?o.createElement("div",{className:"bg-iframe "+a,id:r,style:Object.assign({height:800,width:"100%"},i),ref:function(t){e.container=t}},o.createElement("iframe",{src:n,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);l.displayName="bg-iframe",l.propTypes={className:n().string,disableHeightSync:n().bool,id:n().string,onUpdateHeight:n().func,style:n().object,url:n().string.isRequired},l.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},50347:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=a(87462),o=a(63366),i=(a(67294),a(3905)),n=a(72181),d=a(71766),l=["components"],c={title:"\u4e0b\u62c9\u591a\u9009",order:5},s="\u4e0b\u62c9\u591a\u9009",u={unversionedId:"components/form/selects",id:"components/form/selects",title:"\u4e0b\u62c9\u591a\u9009",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/selects.mdx",sourceDirName:"components/form",slug:"/components/form/selects",permalink:"/developer-site/docs/components/form/selects",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/selects.mdx",tags:[],version:"current",frontMatter:{title:"\u4e0b\u62c9\u591a\u9009",order:5},sidebar:"components",previous:{title:"\u591a\u9009",permalink:"/developer-site/docs/components/form/checkbox"},next:{title:"\u65e5\u671f\u9009\u62e9",permalink:"/developer-site/docs/components/form/dateSelect"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e0b\u62c9\u591a\u9009"},"\u4e0b\u62c9\u591a\u9009"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(n.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/multi-select-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(d.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"fieldData",type:"Object",demo:'\u5355\u9009: "4121", \u591a\u9009: ["4102", "4212"]',dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:"\u201cleft\u201d",dafault:"",desc:"\u53ef\u9009\u503c\uff1a\u201cleft\u201d,\u201dtop\u201d"},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:"\u201cleft\u201d",dafault:"",desc:'\u53ef\u9009\u503c\uff1a\u201cleft\u201d,\u201dright"'},{attr:"\u63d0\u793a\u6587\u5b57",code:"placeholder",type:"String",demo:"\u201c\u8bf7\u9009\u62e9\u201d",dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:"\u201csmall\u201d",dafault:"",desc:'\u53ef\u9009\u503c\uff1a\u201csmall\u201d,\u201dmedium\u201d,"large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL","DISABLED","READONLY","HIDDEN"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL","DISABLED","READONLY","HIDDEN" '},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}]',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u6307\u5b9a\u9879", param: "function validateRule(value) { return value === test; }"} '},{attr:"\u662f\u5426\u6709\u4e0b\u62c9\u7bad\u5934",code:"hasArrow",type:"Boolean",demo:"true",dafault:"",desc:"\u53ef\u9009\u503c\uff1atrue, false"},{attr:"\u662f\u5426\u591a\u9009",code:"multiple",type:"BoBooleanol",demo:"true",dafault:"",desc:"\u53ef\u9009\u503c\uff1atrue, false "},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"}'},{attr:"\u662f\u5426\u6709\u641c\u7d22",code:"showSearch",type:"Boolean",demo:"true",dafault:"",desc:" \u53ef\u9009\u503c\uff1atrue, false"},{attr:"\u4e0b\u62c9\u6846\u663e\u793a\u6216\u5173\u95ed\u4e8b\u4ef6",code:"onVisibleChange",type:"Function",demo:'function onVisibleChange({ visible, type }){console.log("onVisibleChange", visible, type);} ',dafault:"",desc:""},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:' function onChange({ value, data, extra }){ console.log("onChange", value, data, extra);} ',dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);