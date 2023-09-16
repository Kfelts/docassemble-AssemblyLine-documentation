"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[7843],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(4137));const i={id:"alkiln_advanced",title:"ALKiln advanced topics",sidebar_label:"Advanced",slug:"/alkiln/advanced"},r=void 0,s={unversionedId:"alkiln_advanced",id:"alkiln_advanced",title:"ALKiln advanced topics",description:"\ud83d\udea7 This page is a stub and sections will be added as resources allow.",source:"@site/docs/alkiln_advanced.md",sourceDirName:".",slug:"/alkiln/advanced",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln/advanced",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alkiln_advanced.md",tags:[],version:"current",frontMatter:{id:"alkiln_advanced",title:"ALKiln advanced topics",sidebar_label:"Advanced",slug:"/alkiln/advanced"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docassemble-AssemblyLine-documentation/docs/alkiln"},next:{title:"Answer Sets: save and reuse answers across interviews\n",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/answer_sets"}},l={},u=[{value:"Two ways to run ALKiln",id:"two-ways-to-run-alkiln",level:2},{value:"Playground pros",id:"playground-pros",level:3},{value:"GitHub pros",id:"github-pros",level:3},{value:"What&#39;s happening when you run the tests in the Playground?",id:"whats-happening-when-you-run-the-tests-in-the-playground",level:2},{value:"What&#39;s happening in GitHub?",id:"whats-happening-in-github",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udea7 This page is a stub and sections will be added as resources allow."),(0,o.kt)("h2",{id:"two-ways-to-run-alkiln"},"Two ways to run ALKiln"),(0,o.kt)("p",null,"You don't have to choose between running ALKiln on GitHub or in the Playground. You can do both. Here are some differences to help you use each more effectively."),(0,o.kt)("h3",{id:"playground-pros"},"Playground pros"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Advantages of testing on your server.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running ALKiln on your server lets you loop through your development cycle faster - edit, test, edit, test. You don't have to go through committing your code to GitHub every time."),(0,o.kt)("li",{parentName:"ul"},"You can see the output online right away, including images and documents. In GitHub, to see ",(0,o.kt)("em",{parentName:"li"},"all")," of the output files, you have to download a zip file. The only thing you can see online in GitHub is the summary report."),(0,o.kt)("li",{parentName:"ul"},"You can more easily limit your tests to a specific set of tests using ",(0,o.kt)("a",{parentName:"li",href:"https://www.cuketest.com/en/cucumber/tag-expressions"},"tag expressions"),". You can use tags on GitHub too, it just takes more steps."),(0,o.kt)("li",{parentName:"ul"},'You can more often avoid the red "x" that appears next to failing tests on GitHub. The red "x" is a useful piece of information, but it can be uncomfortable.')),(0,o.kt)("h3",{id:"github-pros"},"GitHub pros"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Advantages of testing in GitHub.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ALKiln on GitHub will test any changes any team member commits. On your server, you only tests your changes."),(0,o.kt)("li",{parentName:"ul"},"On GitHub, there are ways to schedule tests to run regularly - every week, every day, or whatever schedule you prefer. If packages you depend on change and break your code, those tests will let you know."),(0,o.kt)("li",{parentName:"ul"},"If you've forgotten to add a file to the package that an interview depends on (like a missing template file), GitHub will catch that. It installs the file fresh in a new Project, so it only has the files that have been committed properly."),(0,o.kt)("li",{parentName:"ul"},"You can continue editing any files in your Playground while the GitHub tests run because GitHub creates a whole new Project of its own. When running tests on your server, you must avoid editing the Project that ALKiln is testing."),(0,o.kt)("li",{parentName:"ul"},"When your server reloads, tests in GitHub may fail, but they will recover better and be able to retry the tests that failed. That's because ALKiln is running on GitHub's servers. When running tests on your server, though, the ALKiln is affected directly by that reload. Your server reloads whenever anyone on the server saves a module, pulls a package that has a module, edits the server's config file, updates server packages, and so on."),(0,o.kt)("li",{parentName:"ul"},'You can configure your GitHub "action" to create GitHub issues whenever tests fail.')),(0,o.kt)("h2",{id:"whats-happening-when-you-run-the-tests-in-the-playground"},"What's happening when you run the tests in the Playground?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For each test (or Scenario), Alkiln pretends to be a human and goes to whatever interview you named in the test in the Project you chose."),(0,o.kt)("li",{parentName:"ul"},"It tries to fill out the fields as the test has instructed, and to take the actions described in the test."),(0,o.kt)("li",{parentName:"ul"},"If one of the Steps fails, ALKiln adds that to the test report and tries to take a picture of the page with the problem. It tries to avoid taking pictures of sensitive information.")),(0,o.kt)("p",null,"When the tests are done, the output page will show you all the generated reports, images, and files. It will also give you a link to download all of that in a ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," file."),(0,o.kt)("h2",{id:"whats-happening-in-github"},"What's happening in GitHub?"),(0,o.kt)("p",null,"Whenever you push (or commit) to GitHub, GitHub will run the tests automatically."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ALKiln goes to the testing account on your server and creates a new Project."),(0,o.kt)("li",{parentName:"ul"},"It pulls the relevant branch of your package into the Project."),(0,o.kt)("li",{parentName:"ul"},"For each test (or Scenario), Alkiln pretends to be a human and goes to whatever interview you named in the test."),(0,o.kt)("li",{parentName:"ul"},"It tries to fill out the fields as the test has instructed, and to take the actions described in the test."),(0,o.kt)("li",{parentName:"ul"},"If one of the Steps fails, ALKiln adds that to the test report and tries to take a picture of the page with the problem. It tries to avoid taking pictures of sensitive information."),(0,o.kt)("li",{parentName:"ul"},"When all the tests are done, ALKiln deletes the Project it created.")),(0,o.kt)("p",null,"You can see the tests running on your repository's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-workflows-activity"},"GitHub Actions page"),"."),(0,o.kt)("p",null,"At the end, you can see a report and logs right in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs"},'workflow\'s "job" page')," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts"},"download a ",(0,o.kt)("inlineCode",{parentName:"a"},".zip")," file containing the results of the tests to your computer"),". That ",(0,o.kt)("inlineCode",{parentName:"p"},".zip"),' file is what GitHub calls an "artifact".'))}d.isMDXComponent=!0}}]);