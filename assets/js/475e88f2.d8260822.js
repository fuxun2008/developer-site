"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[9832],{99278:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59301);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=a(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return p},default:function(){return s}});var r=n(21810),o=n(86919),i=(n(59301),n(99278)),c=["components"],l={title:"\u9875\u9762\u751f\u547d\u5468\u671f",order:3},u="\u9875\u9762\u751f\u547d\u5468\u671f",a={unversionedId:"guide/concept/lifecycle",id:"guide/concept/lifecycle",title:"\u9875\u9762\u751f\u547d\u5468\u671f",description:"\u548c React \u4e00\u6837\uff0c\u5b9c\u642d\u7684\u81ea\u5b9a\u4e49\u9875\u9762\u4e5f\u63d0\u4f9b\u4e86\u9875\u9762\u751f\u547d\u5468\u671f\u80fd\u529b\uff0c\u53ea\u4e0d\u8fc7\u505a\u4e86\u7b80\u5316\u4ec5\u652f\u6301\u4ee5\u4e0b\u4e24\u4e2a\u751f\u547d\u5468\u671f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u52a8\u4f5c\u9762\u677f\u4e2d\u8fdb\u884c\u76f8\u5e94\u7684 JS \u903b\u8f91\u4e66\u5199\u4ee5\u4fbf\u5728\u9875\u9762\u6302\u8f7d\u6216\u8005\u5378\u8f7d\u65f6\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\uff1a",source:"@site/docs/guide/concept/lifecycle.md",sourceDirName:"guide/concept",slug:"/guide/concept/lifecycle",permalink:"/docs/guide/concept/lifecycle",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/guide/concept/lifecycle.md",tags:[],version:"current",frontMatter:{title:"\u9875\u9762\u751f\u547d\u5468\u671f",order:3},sidebar:"guide",previous:{title:"\u8fdc\u7a0b API",permalink:"/docs/guide/concept/datasource"},next:{title:"\u4e8b\u4ef6\u5904\u7406",permalink:"/docs/guide/concept/event"}},p=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9875\u9762\u751f\u547d\u5468\u671f"},"\u9875\u9762\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,"\u548c React \u4e00\u6837\uff0c\u5b9c\u642d\u7684\u81ea\u5b9a\u4e49\u9875\u9762\u4e5f\u63d0\u4f9b\u4e86\u9875\u9762\u751f\u547d\u5468\u671f\u80fd\u529b\uff0c\u53ea\u4e0d\u8fc7\u505a\u4e86\u7b80\u5316\u4ec5\u652f\u6301\u4ee5\u4e0b\u4e24\u4e2a\u751f\u547d\u5468\u671f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u52a8\u4f5c\u9762\u677f\u4e2d\u8fdb\u884c\u76f8\u5e94\u7684 JS \u903b\u8f91\u4e66\u5199\u4ee5\u4fbf\u5728\u9875\u9762\u6302\u8f7d\u6216\u8005\u5378\u8f7d\u65f6\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"didMount"),"- \u7c7b\u4f3c React \u7684 componentDidMount\uff0c\u4f1a\u5728\u9875\u9762\u7b2c\u4e00\u6b21\u6e32\u67d3\u5b8c\u6210\u540e\u8c03\u7528\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"willUnmount"),"- \u7c7b\u4f3c React \u7684 componentWillUnmount\uff0c\u4f1a\u5728\u9875\u9762\u5378\u8f7d\u524d\u8c03\u7528\uff1b")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u5c55\u793a\u751f\u547d\u5468\u671f\u7684\u5177\u4f53\u4f7f\u7528\uff0c\u6211\u4eec\u5728\u52a8\u4f5c\u9762\u677f\u4e2d\u914d\u7f6e\u9875\u9762\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u7528\u4e8e\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53\u9875\u9762\u6302\u8f7d\u5b8c\u6210\u540e\u76d1\u542c document \u7684 resize \u4e8b\u4ef6\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 onResize \u65b9\u6cd5\u5b9e\u65f6\u8f93\u51fa\u5f53\u524d\u9875\u9762\u7684\u5bbd\u5ea6\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u9875\u9762\u5378\u8f7d\u524d\u53d6\u6d88 document \u7684 reisze \u4e8b\u4ef6\u76d1\u542c\uff1b")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN0193Qe721caAuWkm9NA_!!6000000003616-2-tps-3582-2018.png_.webp",alt:null})),(0,i.kt)("p",null,"\u76f8\u5173\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export function didMount() {\n  document.addEventListener('resize', this.onResize);\n}\n\nexport function willUnmount() {\n  document.removeEventListener('resize', this.onResize);\n}\n\nexport function onResize() {\n  const width = document.documentElement.clientWidth;\n  console.log( `current width: ${width}` );\n}\n\n")))}s.isMDXComponent=!0}}]);