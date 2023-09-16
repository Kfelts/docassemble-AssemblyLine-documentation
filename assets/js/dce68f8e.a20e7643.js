"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9845],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_label:"save_input_data",title:"ALToolbox.save_input_data"},i=void 0,s={unversionedId:"reference/ALToolbox/save_input_data",id:"reference/ALToolbox/save_input_data",title:"ALToolbox.save_input_data",description:"save\\input\\data",source:"@site/docs/reference/ALToolbox/save_input_data.md",sourceDirName:"reference/ALToolbox",slug:"/reference/ALToolbox/save_input_data",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/save_input_data",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/ALToolbox/save_input_data.md",tags:[],version:"current",frontMatter:{sidebar_label:"save_input_data",title:"ALToolbox.save_input_data"},sidebar:"api",previous:{title:"misc",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/ALToolbox/misc"},next:{title:"al_courts",permalink:"/docassemble-AssemblyLine-documentation/docs/reference/AssemblyLine/al_courts"}},l={},c=[{value:"save_input_data",id:"save_input_data",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"save_input_data"},"save","_","input","_","data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def save_input_data(title: str = "",\n                    input_dict: Optional[Dict[str, Any]] = None,\n                    tags: Optional[List[str]] = None) -> None\n')),(0,a.kt)("p",null,"This function is used by survey type interviews to save input data for data reporting purposes."),(0,a.kt)("p",null,"The input_dict should a dictionary where each key is a string and each value is a value from a Docassemble interview\nquestion. Typically that is a string, float, int, or a DADict."))}p.isMDXComponent=!0}}]);