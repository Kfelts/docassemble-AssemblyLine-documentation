"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5284],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,f=d["".concat(i,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(f,s(s({ref:t},m),{},{components:a})):n.createElement(f,s({ref:t},m))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(4137));const r={id:"getting_started_docassemble",title:"Getting started developing in Docassemble\n",sidebar_label:"Getting started developing in Docassemble\n",slug:"/getting_started_docassemble"},s=void 0,l={unversionedId:"getting_started_docassemble",id:"getting_started_docassemble",title:"Getting started developing in Docassemble\n",description:"This documentation covers the custom stuff",source:"@site/docs/getting_started_docassemble.md",sourceDirName:".",slug:"/getting_started_docassemble",permalink:"/docassemble-AssemblyLine-documentation/docs/getting_started_docassemble",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/getting_started_docassemble.md",tags:[],version:"current",frontMatter:{id:"getting_started_docassemble",title:"Getting started developing in Docassemble\n",sidebar_label:"Getting started developing in Docassemble\n",slug:"/getting_started_docassemble"},sidebar:"mainSidebar",previous:{title:"About",permalink:"/docassemble-AssemblyLine-documentation/docs/"},next:{title:"Bootcamp",permalink:"/docassemble-AssemblyLine-documentation/docs/bootcamp"}},i={},c=[{value:"This documentation covers the custom stuff",id:"this-documentation-covers-the-custom-stuff",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"this-documentation-covers-the-custom-stuff"},"This documentation covers the custom stuff"),(0,o.kt)("p",null,"While some of the documentation in this guide is general purpose,\nwe don't cover the basics of Docassemble development."),(0,o.kt)("p",null,"To learn about Docassemble syntax, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/yaml"},"The format of a Docassemble question file (YAML)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/python"},"Using Python in Docassemble")),(0,o.kt)("li",{parentName:"ul"},"The syntax for inserting ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/mako"},"Mako")," or ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/jinja2"},"Jinja2")," variables"),(0,o.kt)("li",{parentName:"ul"},"Advanced logic, like ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order"},"controlling question order")),(0,o.kt)("li",{parentName:"ul"},"Working with Docassemble ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/object-oriented-programming"},"objects")," and object-oriented programming"),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/repeated-information"},"repeated items")," and lists in Docassemble")),(0,o.kt)("p",null,"Please review:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/introduction-to-docassemble/"},"Introduction to Docassemble")," (and the pages that follow) for a readable, step-by-step guide to the core features and syntax of Docassemble"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs.html"},"The official Docassemble documentation")," for everything else. Be aware that the official documentation has a ",(0,o.kt)("strong",{parentName:"li"},"lot")," of content. Feel free to ask for help finding the right link!")))}d.isMDXComponent=!0}}]);