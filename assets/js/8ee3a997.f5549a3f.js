"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[880],{4137:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>p});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var r=n.createContext({}),c=function(e){var t=n.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(o),b=a,p=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return o?n.createElement(p,s(s({ref:t},m),{},{components:o})):n.createElement(p,s({ref:t},m))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,s=new Array(i);s[0]=b;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},1240:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(7462),a=(o(7294),o(4137));const i={id:"itemizedjobs",title:"Itemized Jobs: ALItemizedJob and ALItemizedJobList\n",sidebar_label:"Itemized Jobs\n",slug:"/alincome/itemizedjobs"},s=void 0,l={unversionedId:"alincome/itemizedjobs",id:"alincome/itemizedjobs",title:"Itemized Jobs: ALItemizedJob and ALItemizedJobList\n",description:"Sometimes, you'll need detailed information about a person's",source:"@site/docs/alincome/itemizedjobs.md",sourceDirName:"alincome",slug:"/alincome/itemizedjobs",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/itemizedjobs",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/alincome/itemizedjobs.md",tags:[],version:"current",frontMatter:{id:"itemizedjobs",title:"Itemized Jobs: ALItemizedJob and ALItemizedJobList\n",sidebar_label:"Itemized Jobs\n",slug:"/alincome/itemizedjobs"},sidebar:"mainSidebar",previous:{title:"Jobs\n",permalink:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs"},next:{title:"Overview",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/overview"}},r={},c=[{value:"ALItemizedJob",id:"alitemizedjob",level:2},{value:"ALItemizedJobList Tutorial",id:"alitemizedjoblist-tutorial",level:2},{value:"Before",id:"before",level:3},{value:"Writing the interview",id:"writing-the-interview",level:3}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes, you'll need detailed information about a person's\nincome at the same job, including how much income comes from tips, or\nhow much is deducted from their paycheck for different reasons. ",(0,a.kt)("inlineCode",{parentName:"p"},"ALItemizedJob")," is custom built for this purpose."),(0,a.kt)("h2",{id:"alitemizedjob"},"ALItemizedJob"),(0,a.kt)("p",null,"If you want to jump right in, check out a ",(0,a.kt)("a",{parentName:"p",href:"https://apps-test.suffolklitlab.org/start/ALToolbox/al_income_demo?use_feature=ALItemizedJob"},"live demo of the ALItemizedJob feature"),"."),(0,a.kt)("p",null,"Sometimes, courts will ask for specific pieces of information about a person's pay, such as how many tips they received, or how much is deducted from their pay for health insurance. To keep track of all of those pieces of information for several jobs, you, the interview author,\nwill want to use a job that can handle itemizing different types of incomes and deductions for the same type of job."),(0,a.kt)("p",null,"This is not the class that you should reach for first. You should\ncheck and see if the ",(0,a.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs"},"ALJob")," class satisfies your needs, since it asks the user far fewer questions than the ALItemizedJob."),(0,a.kt)("p",null,"If you need to use it, a main benefit is the fact that the ALItemizedJobList\nwill do all of the calculations needed over multiple jobs to get a single answer for monthly pay, even if the jobs have different pay schedules, and have multiple incomes per job that come at different rates."),(0,a.kt)("h2",{id:"alitemizedjoblist-tutorial"},"ALItemizedJobList Tutorial"),(0,a.kt)("h3",{id:"before"},"Before"),(0,a.kt)("p",null,"Before you start, we'll assume that you"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"have access to a ",(0,a.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1#before-you-get-started"},"developer account on a docassemble server")),(0,a.kt)("li",{parentName:"ul"},"have the ",(0,a.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/installation#run-the-installation-script"},(0,a.kt)("inlineCode",{parentName:"a"},"ALToolbox")," package installed on your server")),(0,a.kt)("li",{parentName:"ul"},"know ",(0,a.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#introduction-to-the-docassemble-playground"},"what the playground is")," and ",(0,a.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/classes/docacon-2020/hello-world#hello-world"},"how to use it to develop a docassemble interview")),(0,a.kt)("li",{parentName:"ul"},"know ",(0,a.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/yaml#documents"},'what "blocks" are')," in docassemble"),(0,a.kt)("li",{parentName:"ul"},"have looked at the ",(0,a.kt)("a",{parentName:"li",href:"/docassemble-AssemblyLine-documentation/docs/alincome/jobs"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"ALJob")," tutorial")," and decided you need to handle more complicated information")),(0,a.kt)("h3",{id:"writing-the-interview"},"Writing the interview"),(0,a.kt)("p",null,"First, include the ",(0,a.kt)("inlineCode",{parentName:"p"},"al_income.yml")," YAML file in your interview. This will let you use the al_income questions and python code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"include:\n  - docassemble.ALToolbox:al_income.yml\n")),(0,a.kt)("p",null,"Then, create an ",(0,a.kt)("inlineCode",{parentName:"p"},"ALItemizedJobList")," using a ",(0,a.kt)("inlineCode",{parentName:"p"},"objects")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"objects:\n  - jobs: ALItemizedJobList.using(complete_attribute='complete', ask_number=True)\n")),(0,a.kt)("p",null,"Next, add a ",(0,a.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block"},"interview order code block"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"mandatory: True\ncode: |\n  jobs.gather()\n")),(0,a.kt)("p",null,"The interview will ask how many jobs the user has, and then for each job, will ask them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"their job title. This is mostly for their benefit, and is the simplest way of asking for the information."),(0,a.kt)("li",{parentName:"ul"},'information about their employer. They can mark if they are self-employed, and the module will mark the employers name as\n"self-employed".'),(0,a.kt)("li",{parentName:"ul"},"if it's hourly, and how often the users receives payment"),(0,a.kt)("li",{parentName:"ul"},"Itemized information from their paystub (hence the name of the class!).\nBy default this includes gross wages, federal taxes, and insurance deductions.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"users can also enter different sources of income and deductions, that\ncan happen on different time periods from their standard pay period, like yearly bonuses or weekly tips.")))),(0,a.kt)("p",null,"You can let the user review their answers with the following screen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"id: job review\nquestion: |\n  Review your jobs\nsubquestion: |\n  Here is what you've told us about your jobs. You can add more or continue\n  to the next question.\n\n  ${ jobs.table }\n\n  ${ jobs.add_action() }\nfield: review_jobs\n")),(0,a.kt)("admonition",{title:"Review screens",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also add the job list to a ",(0,a.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#review"},"review screen")," with the below code:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"review:\n  - Edit: jobs.revisit\n    button: |\n      **Jobs**:\n\n      % for job in jobs:\n      * ${ job.source } at ${ job.employer.name }\n      % endfor\n"))),(0,a.kt)("p",null,"Once you have this information, you have many different ways to display it."),(0,a.kt)("p",null,"Let's add one last screen to display our information. We'll\ndescribe what each line of code is doing on the screen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'event: final_screen\nquestion: Summary of your jobs\nsubquestion: |\n  All of itemized value names, which we call "sources": ${ jobs.sources() }\n\n  Itemized deduction names: ${ jobs.sources(which_side="deductions")}\n\n  Itemized income names: ${ jobs.sources(which_side="incomes") }\n\n  Annual gross income from all jobs: ${ currency(jobs.total()) }\n\n  Annual net income (gross - deductions) from all jobs: ${ currency(jobs.net_total()) }\n\n  Monthly gross income from all jobs: ${ currency(jobs.total(times_per_year=12)) }\n\n  Annual gross income from the first job listed: ${ currency(jobs[0].total()) }\n\n  Employer information from the first job: ${ jobs[0].employer_name_address_phone() }\n')),(0,a.kt)("p",null,"Add the screens we just made to the mandatory code block above, so it looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"mandatory: True\ncode: |\n  jobs.gather()\n  review_jobs\n  final_screen\n")),(0,a.kt)("p",null,"And you can now run through the interview!"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click this section to see the whole interview"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'---\ninclude:\n  - al_income.yml\n---\nobjects:\n  - jobs: ALItemizedJobList.using(complete_attribute=\'complete\', ask_number=True)\n---\nmandatory: True\ncode: |\n  jobs.gather()\n  review_jobs\n  final_screen\n---\nid: job review\nquestion: |\n  Review your jobs\nsubquestion: |\n  Here is what you\'ve told us about your jobs. You can add more or continue\n  to the next question.\n\n  ${ jobs.table }\n\n  ${ jobs.add_action() }\nfield: review_jobs\n---\nevent: final_screen\nquestion: Summary of your jobs\nsubquestion: |\n  All of itemized value names, which we call "sources": ${ jobs.sources() }\n\n  Itemized deduction names: ${ jobs.sources(which_side="deductions")}\n\n  Itemized income names: ${ jobs.sources(which_side="incomes") }\n\n  Annual gross income from all jobs: ${ currency(jobs.total()) }\n\n  Annual net income (gross - deductions) from all jobs: ${ currency(jobs.net_total()) }\n\n  Monthly gross income from all jobs: ${ currency(jobs.total(times_per_year=12)) }\n\n  Annual gross income from the first job listed: ${ currency(jobs[0].total()) }\n\n  Employer information from the first job: ${ jobs[0].employer_name_address_phone() }\n'))),(0,a.kt)("p",null,"You'll likely want to display this information in a PDF or word template as well. ",(0,a.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/generated_yaml#attachment-block"},"This section describing the Attachment block")," will help with displaying information in the PDF, and ",(0,a.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/docx"},"this page about working with DOCX files")," will help DOCX users."))}d.isMDXComponent=!0}}]);