"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[1264],{99278:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(59301);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=m(n),u=r,k=g["".concat(o,".").concat(u)]||g[u]||s[u]||l;return n?a.createElement(k,p(p({ref:e},c),{},{components:n})):a.createElement(k,p({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},87426:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var a=n(47145),r=n(24736),l=(n(59301),n(99278)),p=["components"],i={title:"\u83b7\u53d6\u5173\u8054\u7ec4\u7ec7\u5217\u8868",order:4},o=void 0,m={unversionedId:"examples/connector/associatedOrg",id:"examples/connector/associatedOrg",title:"\u83b7\u53d6\u5173\u8054\u7ec4\u7ec7\u5217\u8868",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/examples/connector/associatedOrg.mdx",sourceDirName:"examples/connector",slug:"/examples/connector/associatedOrg",permalink:"/developer-site/docs/examples/connector/associatedOrg",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/connector/associatedOrg.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647522908,formattedLastUpdatedAt:"2022/3/17",frontMatter:{title:"\u83b7\u53d6\u5173\u8054\u7ec4\u7ec7\u5217\u8868",order:4},sidebar:"examples",previous:{title:"\u96c6\u6210\u9489\u9489\u65e5\u5fd7",permalink:"/developer-site/docs/examples/connector/IntegrateDingLog"},next:{title:"\u83b7\u53d6\u4f01\u4e1a\u7fa4\u804a\u7edf\u8ba1\u6570\u636e",permalink:"/developer-site/docs/examples/connector/enterpriseGroup"}},c={},s=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5b9e\u73b0\u6b65\u9aa4",id:"\u5b9e\u73b0\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa41\uff1a\u57fa\u7840\u8868\u5355\u8bbe\u8ba1",id:"\u6b65\u9aa41\u57fa\u7840\u8868\u5355\u8bbe\u8ba1",level:3},{value:"\u6b65\u9aa42\uff1a\u521b\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668",id:"\u6b65\u9aa42\u521b\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668",level:3},{value:"\u6b65\u9aa43\uff1a\u63d0\u4ea4\u8868\u5355\u6570\u636e",id:"\u6b65\u9aa43\u63d0\u4ea4\u8868\u5355\u6570\u636e",level:3},{value:"3. \u6548\u679c\u5c55\u793a",id:"3-\u6548\u679c\u5c55\u793a",level:2}],g={toc:s};function u(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u300c\u9489\u9489\u4e92\u8054\u5e73\u53f0\u300d\u4ea7\u54c1\u7ec4\u6210\u4e4b\u4e00\u7684\u300c\u5173\u8054\u7ec4\u7ec7\u300d\u529f\u80fd\u7ed9\u4e2d\u5927\u578b\u7ec4\u7ec7\u63d0\u4f9b\u5f3a\u5927\u7684\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u80fd\u529b\uff0c\u65e8\u5728\u5e2e\u52a9\u7528\u6237",(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u8de8\u7ec4\u7ec7\u901a\u8baf\u5f55\u3001\u5e94\u7528\u7684\u4e92\u8054\u4e92\u901a\u3001\u4e0a\u4e0b\u7ea7\u7ec4\u7ec7\u65e0\u7f1d\u6c9f\u901a\u3001\u534f\u540c"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8de8\u7ec4\u7ec7\u6c9f\u901a\u3001\u4e1a\u52a1\u5ba1\u6279\u3001\u5de5\u4f5c\u6c47\u62a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u7ec4\u7ec7\u5206\u6743\u7ba1\u7406\uff0c\u4eba\u5458\u7ed3\u6784\u5b9e\u65f6\u540c\u6b65\uff0c\u63d0\u9ad8\u7ba1\u7406\u6548\u7387\u3002")),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u6b65\u9aa4"},"\u5b9e\u73b0\u6b65\u9aa4"),(0,l.kt)("h3",{id:"\u6b65\u9aa41\u57fa\u7840\u8868\u5355\u8bbe\u8ba1"},"\u6b65\u9aa41\uff1a\u57fa\u7840\u8868\u5355\u8bbe\u8ba1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5e76\u914d\u7f6e\u67e5\u8be2\u8868\u5355"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u666e\u901a\u8868\u5355\uff0c\u547d\u540d\u4e3a\u300c\u83b7\u53d6\u7ec4\u7ec7\u4fe1\u606f\u300d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e0b\u62c9\u5355\u9009\u7ec4\u4ef6\uff0c\u547d\u540d\u4e3a\u300c\u76ee\u6807\u300d\uff0c\u5206\u522b\u6dfb\u52a0\u300c\u67e5\u8be2\u4e3b\u5e72\u7ec4\u7ec7\u300d\u53ca\u300c\u67e5\u8be2\u5206\u652f\u7ec4\u7ec7\u300d\u4e24\u4e2a\u9009\u9879\u3002\u8bbe\u4e3a\u5fc5\u586b\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01pdfEnn1Mxxd94EcPc_!!6000000001502-2-tps-1914-967.png_.webp",alt:null}),"\n\u200b"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u89d2\u300c\u4fdd\u5b58\u300d\u6309\u94ae\uff0c\u5373\u53ef\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5e76\u914d\u7f6e\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u8868"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u666e\u901a\u8868\u5355\uff0c\u547d\u540d\u4e3a\u300c\u4e3b\u5e72\u7ec4\u7ec7\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u300d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u591a\u884c\u6587\u672c\u7ec4\u4ef6\uff0c\u547d\u540d\u4e3a\u300c\u8fde\u63a5\u5668\u8fd4\u56de\u7ed3\u679c\u300d\uff0c\u72b6\u6001\u8bbe\u7f6e\u4e3a\u300c\u9690\u85cf\u300d\u3002\u5982\u4e0b\u6240\u793a\uff1a"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01FAmRch1GKDZHHhnjN_!!6000000000603-2-tps-1914-969.png_.webp",alt:null}),"\n\u200b"),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5b50\u8868\u5355\u7ec4\u4ef6\uff0c\u547d\u540d\u4e3a\u300c\u4e3b\u5e72\u7ec4\u7ec7\u67e5\u8be2\u7ed3\u679c\u300d\uff0c\u72b6\u6001\u8bbe\u7f6e\u4e3a\u300c\u53ea\u8bfb\u300d\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN013drzDG1lRJna5c8Cv_!!6000000004815-2-tps-1912-972.png_.webp",alt:null}),"\n\u200b"),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u5728\u5b50\u8868\u5355\u5185\u6dfb\u52a0\u4e24\u4e2a\u5355\u884c\u6587\u672c\uff0c\u5206\u522b\u547d\u540d\u4e3a\u300c\u4e3b\u5e72\u7ec4\u7ec7\u540d\u79f0\u300d\u53ca\u300c\u4e3b\u5e72\u7ec4\u7ec7\u7684 CorpID\u300d\uff0c\u72b6\u6001\u8bbe\u7f6e\u4e3a\u300c\u53ea\u8bfb\u300d\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01udJHG11HRNNKPE9Kg_!!6000000000754-2-tps-1915-967.png_.webp",alt:null}),"\n\u200b"),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"\u9875\u9762\u5de6\u4fa7\u6253\u5f00\u300cJS \u52a8\u4f5c\u9762\u677f\u300d\uff0c\u5c06\u4e0b\u5217\u4ee3\u7801\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"didMount"),"\u51fd\u6570\u4e2d\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01MKVz6G1Tamu8fPa8D_!!6000000002399-2-tps-1915-972.png_.webp",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u56fe2.1-5 \u6240\u793a\u4ee3\u7801\u90e8\u5206\n//\u83b7\u53d6\u591a\u884c\u6587\u672c\u7ec4\u4ef6\u6570\u636e\u5e76\u8d4b\u503c\u7ed9res\u53d8\u91cf\n//\u300ctextareaField_kwlgqhti\u300d\u9700\u8981\u66ff\u6362\u4e3a\u60a8\u6240\u521b\u5efa\u7684\u591a\u884c\u6587\u672c\u7684\u552f\u4e00\u6807\u8bc6\nconst res = this.$('textareaField_kwlgqhti').getValue();\n//\u8fdb\u884c\u6570\u636e\u683c\u5f0f\u8f6c\u6362\uff0c\u5c06\u591a\u884c\u6587\u672c\u7ec4\u4ef6\u6570\u636e\u5b57\u7b26\u4e32\u683c\u5f0f\u8f6c\u6362\u4e3a\u5bf9\u8c61\u5f62\u5f0f\nlet obj = JSON.parse(res);\n//\u521b\u5efa\u4e00\u4e2a\u540d\u4e3aarr\u7684\u7a7a\u6570\u7ec4\uff0c\u7528\u4e8e\u5b58\u653e\u63a5\u4e0b\u6765\u5904\u7406\u597d\u7684\u6570\u636e\u3002\nlet arr = [];\n//\u904d\u5386\u5bf9\u8c61\uff0c\u7528\u4e8e\u83b7\u53d6\u9700\u8981\u5c55\u793a\u7684\u5b57\u6bb5\nconst list = obj.map((item) => {\n  let object = {};\n  //\u5176\u4e2d\u300ctextField_kwlgqhtk\u300d\u4e0e\u300ctextField_kwlgqhtl\u300d\u4e3a\u5b50\u8868\u5355\u5185\u4e24\u4e2a\u5355\u884c\u6587\u672c\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\n  //\u9700\u8981\u66ff\u6362\u4e3a\u60a8\u6240\u521b\u5efa\u7684\u5355\u884c\u6587\u672c\u7684\u552f\u4e00\u6807\u8bc6\n  object.textField_kwlgqhtk = item.union_org_name;\n  object.textField_kwlgqhtl = item.union_corpid;\n  arr.push(object);\n});\n//\u5c06\u5904\u7406\u597d\u7684\u6570\u636earr\u56de\u586b\u5230\u5b50\u8868\u5355\u7ec4\u4ef6\n//\u5176\u4e2d\u300ctableField_kwlgqhtj\u300d\u4e3a\u5b50\u8868\u5355\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\n//\u9700\u8981\u5c06\u5176\u66ff\u6362\u4e3a\u60a8\u521b\u5efa\u7684\u5b50\u8868\u5355\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\nthis.$('tableField_kwlgqhtj').setValue(arr);\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u89d2\u300c\u4fdd\u5b58\u300d\u6309\u94ae\uff0c\u5373\u53ef\u3002\n. \u91cd\u590d\u6b65\u9aa4 1-6\uff0c\u521b\u5efa\u300c\u5206\u652f\u7ec4\u7ec7\u67e5\u8be2\u7ed3\u679c\u8bb0\u5f55\u300d\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN013gmXtN1U7J1P9QoYw_!!6000000002470-2-tps-1915-967.png_.webp",alt:null})),(0,l.kt)("h3",{id:"\u6b65\u9aa42\u521b\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668"},"\u6b65\u9aa42\uff1a\u521b\u5efa\u5e76\u914d\u7f6e\u8fde\u63a5\u5668"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5b9c\u642d\u8fde\u63a5\u5668\u529f\u80fd\u76f8\u5173\u4ecb\u7ecd\uff0c\u8bf7\u79fb\u6b65\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/guide/concept/connector"},"\u96c6\u6210&\u81ea\u52a8\u5316-\u8fde\u63a5\u5668")))),(0,l.kt)("p",null,"\u4e3a\u300c\u83b7\u53d6\u7ec4\u7ec7\u4fe1\u606f\u300d\u8868\u5355\u521b\u5efa\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u83b7\u53d6\u5173\u8054\u7ec4\u7ec7\u7684\u76f8\u5173\u4fe1\u606f\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u540e\u53f0\u7ba1\u7406\u9875\u9762>>\u300c\u96c6\u6210&\u81ea\u52a8\u5316\u300d>>\u300c\u65b0\u5efa\u96c6\u6210&\u81ea\u52a8\u5316\u300d\u3002\uff08\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01LyxxGA1y37sm9Ovt4_!!6000000006522-2-tps-1914-970.png_.webp",alt:null}),"\n\u200b"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8fde\u63a5\u5668\u547d\u540d\u4e3a\u300c\u67e5\u8be2\u5173\u8054\u7ec4\u7ec7\u4fe1\u606f\u300d\uff0c\u9009\u62e9\u300c\u8868\u5355\u4e8b\u4ef6\u89e6\u53d1\u300d\u89e6\u53d1\u7c7b\u578b\uff0c\u70b9\u51fb\u300c\u786e\u5b9a\u300d\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01svyd941vNKVME58lv_!!6000000006160-2-tps-1909-968.png_.webp",alt:null})),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8fde\u63a5\u5668\u547d\u540d\u4e3a\u300c\u67e5\u8be2\u5173\u8054\u7ec4\u7ec7\u4fe1\u606f\u300d>> \u9009\u62e9\u300c\u8868\u5355\u4e8b\u4ef6\u89e6\u53d1\u300d\u4e2d\u7684\u300c\u521b\u5efa\u6210\u529f\u300d>> \u9009\u62e9\u300c\u6570\u636e\u8fc7\u6ee4\u300d\u4e2d\u7684\u300c\u5168\u90e8\u6570\u636e\u300d>> \u70b9\u51fb\u300c\u786e\u5b9a \u300d\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01DnuZEz1vRuStUKQAh_!!6000000006170-2-tps-1912-972.png_.webp",alt:null})),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u300c\u6761\u4ef6\u5206\u652f\u300d\u5206\u652f\u8282\u70b9\uff1a\u5f53\u6761\u4ef6\u89c4\u5219\u76ee\u6807\u7b49\u4e8e\u67e5\u8be2\u4e3b\u5e72\u7ec4\u7ec7\u65f6\uff0c\u6dfb\u52a0\u300c\u83b7\u53d6\u4e3b\u5e72\u7ec4\u7ec7\u300d\u7684\u8fde\u63a5\u5668\uff0c\u5e76\u6dfb\u52a0\u300c\u65b0\u589e\u6570\u636e\u300d\u6570\u636e\u8282\u70b9\uff1b\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u6dfb\u52a0\u300c\u83b7\u53d6\u5206\u652f\u7ec4\u7ec7\u300d\u7684\u8fde\u63a5\u5668\uff0c\u5e76\u6dfb\u52a0\u300c\u65b0\u589e\u7ec4\u7ec7\u300d\u6570\u636e\u8282\u70b9\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01ct62lH1rRDOy4Fn3v_!!6000000005627-2-tps-1914-973.png_.webp",alt:null}),"\n\u200b"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u300c\u5206\u652f 1\u300d\u4e0b\u8fde\u63a5\u5668"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u8fde\u63a5\u5668\u5e94\u7528\uff1a\u9009\u62e9\u300c\u5173\u8054\u7ec4\u7ec7\u300d\u5e94\u7528>>\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u6309\u94ae\u3002\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01FesWpu2A7V3GVcBOH_!!6000000008156-2-tps-1915-975.png_.webp",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9\u8fde\u63a5\u5668\u6267\u884c\u52a8\u4f5c\uff1a\u9009\u62e9\u300c\u83b7\u53d6\u4e3b\u5e72\u7ec4\u7ec7\u300d>>\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u6309\u94ae\u3002\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01dHXgpe1tQPwdRZy88_!!6000000005896-2-tps-1911-972.png_.webp",alt:null}),"\u200b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u8fde\u63a5\u5668\u6267\u884c\u52a8\u4f5c\uff0c\u70b9\u51fb\u300c\u4fdd\u5b58\u300d\u6309\u94ae\u3002\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01S7aeHI1zWGhIEWIgX_!!6000000006721-2-tps-1913-972.png_.webp",alt:null}),"\n\u200b")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u300c\u5206\u652f 1\u300d\u7684\u300c\u65b0\u589e\u6570\u636e\u300d\u8282\u70b9\u3002\u5982\u4e0b\u6240\u793a\uff1a"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01vDZem61YLjxxZFh7w_!!6000000003043-2-tps-1913-972.png_.webp",alt:null}),"\n\u200b"),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u300c\u5206\u652f 2\u300d\u4e0b\u8fde\u63a5\u5668"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u8fde\u63a5\u5668\u5e94\u7528\uff1a\u9009\u62e9\u300c\u5173\u8054\u7ec4\u7ec7\u300d\u5e94\u7528>>\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u6309\u94ae\u3002\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01Vpkxr926gzHScp7qz_!!6000000007692-2-tps-1906-972.png_.webp",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9\u8fde\u63a5\u5668\u6267\u884c\u52a8\u4f5c\uff1a\u9009\u62e9\u300c\u83b7\u53d6\u5206\u652f\u7ec4\u7ec7\u300d>>\u70b9\u51fb\u300c\u4e0b\u4e00\u6b65\u300d\u6309\u94ae\u3002\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01J4pLhi1NlQPHEy5o2_!!6000000001610-2-tps-1912-973.png_.webp",alt:null}),"\n\u200b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u8fde\u63a5\u5668\u6267\u884c\u52a8\u4f5c\uff0c\u70b9\u51fb\u300c\u4fdd\u5b58\u300d\u6309\u94ae\u3002\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN012HePOJ1asNQLLyo3S_!!6000000003385-2-tps-1916-975.png_.webp",alt:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u300c\u5206\u652f 2\u300d\u4e0b\u300c\u65b0\u589e\u6570\u636e\u300d\u8282\u70b9\u3002\u5982\u4e0b\u6240\u793a\uff1a"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01XaRjk21Fu6ziI3EoM_!!6000000000546-2-tps-1915-972.png_.webp",alt:null}),"\n\u200b\n9. \u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u89d2\u300c\u4fdd\u5b58\u300d\u6309\u94ae\u540e\uff0c\u70b9\u51fb\u300c\u53d1\u5e03\u300d\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u6b65\u9aa43\u63d0\u4ea4\u8868\u5355\u6570\u636e"},"\u6b65\u9aa43\uff1a\u63d0\u4ea4\u8868\u5355\u6570\u636e"),(0,l.kt)("p",null,"\u89e6\u53d1\u8fde\u63a5\u5668\uff0c\u63a5\u6536\u8fde\u63a5\u5668\u8fd4\u56de\u6570\u636e\u5e76\u5728\u5904\u7406\u540e\u8fdb\u884c\u5c55\u793a\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u6b65\u9aa4\uff1a"),"\n\u586b\u5199\u8868\u5355\u6570\u636e\uff0c\u5e76\u63d0\u4ea4\u3002\u5982\u4e0b\u6240\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01CROqNd1inM0VNtnNW_!!6000000004457-2-tps-1920-951.png_.webp",alt:null})),(0,l.kt)("h2",{id:"3-\u6548\u679c\u5c55\u793a"},"3. \u6548\u679c\u5c55\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oinu7i1waRSgS925B_!!6000000006324-2-tps-1920-950.png_.webp",alt:null})))}u.isMDXComponent=!0}}]);