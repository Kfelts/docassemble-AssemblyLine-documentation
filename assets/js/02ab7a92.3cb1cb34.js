"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[6984],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(7462),a=(n(7294),n(4137));const l={id:"efiling_through_docassemble",title:"E-filing through Docassemble\n",sidebar_label:"Integrating Docassemble interviews with e-filing",slug:"/efiling/docassemble"},r=void 0,o={unversionedId:"efiling/efiling_through_docassemble",id:"efiling/efiling_through_docassemble",title:"E-filing through Docassemble\n",description:"This is a guide to get from a working Assembly Line Interview to an interview that can e-file through our EFSP to the Tyler EFM system.",source:"@site/docs/efiling/efiling_through_docassemble.md",sourceDirName:"efiling",slug:"/efiling/docassemble",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/docassemble",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/efiling/efiling_through_docassemble.md",tags:[],version:"current",frontMatter:{id:"efiling_through_docassemble",title:"E-filing through Docassemble\n",sidebar_label:"Integrating Docassemble interviews with e-filing",slug:"/efiling/docassemble"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/overview"},next:{title:"Case Search",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/case_search"}},s={},d=[{value:"Before starting",id:"before-starting",level:2},{value:"Steps",id:"steps",level:2},{value:"Server Setup",id:"server-setup",level:3},{value:"Including the EFSP Library",id:"including-the-efsp-library",level:3},{value:"Get the information needed to file",id:"get-the-information-needed-to-file",level:3},{value:"Give all of the info that the EFSP needs to file your doc",id:"give-all-of-the-info-that-the-efsp-needs-to-file-your-doc",level:3},{value:"Interview Logic and Question Screens",id:"interview-logic-and-question-screens",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a guide to get from a working Assembly Line Interview to an interview that can e-file through our EFSP to the Tyler EFM system."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This e-filing functionality is being updated often, so this documentation might be out of date.\nIf anything is incorrect or doesn't work as expected, feel free to email us at\n",(0,a.kt)("a",{parentName:"p",href:"mailto:massaccess@suffolk.edu"},"massaccess@suffolk.edu"),".")),(0,a.kt)("p",null,"This example interview will be simple; it will make an initial filing into a new case. While our API is flexible enough to\nlet you add capabilities and features to your interview, it's also complex, and some of that complexity will need\nto be embedded into your interview."),(0,a.kt)("h2",{id:"before-starting"},"Before starting"),(0,a.kt)("p",null,"Before starting this guide, you should have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a working docassemble interview, preferably using the AssemblyLine.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you don't have one yet, follow ",(0,a.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/planning"},"these steps to author your interview"),"."))),(0,a.kt)("li",{parentName:"ul"},"contacted us for access to the EFSP server. We aren't yet making access publicly available, but will include an interest form here when we do.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"server-setup"},"Server Setup"),(0,a.kt)("p",null,"To start, you'll need to setup the server."),(0,a.kt)("p",null,"First, install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration"},"docassemble.EFSPIntegration")," package on your server in docassemble's ",(0,a.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/packages.html#installing"},"Package Management menu"),"."),(0,a.kt)("p",null,"Then, set your docassemble server's ",(0,a.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/config.html"},"configuration"),".\nIn the configuration file, add the below section, replacing each value on the right with the information that we provide to you."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"efile proxy:\n  api key: abcDEFghiJKL123456789\n  url: https://efile-test.serverurl.com\n  jeffnet api token: ABCDEF123  # only required if your interview operates is Louisiana\n  global waiver: 123a4567-b89c-1234-abcd-123456789000\n  global server admins:\n    - your_email@example.com\n")),(0,a.kt)("h3",{id:"including-the-efsp-library"},"Including the EFSP Library"),(0,a.kt)("p",null,"Start by making a blank YAML file in a ",(0,a.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/playground.html#interview_files"},"playground project"),"."),(0,a.kt)("p",null,"Next, add our EFSP library to your interview, as well as the AssemblyLine library (so we can use the ALDocument class)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"include:\n  - docassemble.AssemblyLine:assembly_line.yml\n  - docassemble.EFSPIntegration:efiling_integration.yml\n  - docassemble.EFSPIntegration:login_qs.yml\n  - docassemble.EFSPIntegration:codes_helper.yml\n")),(0,a.kt)("p",null,"Next, create a connection to our EFSP server. This allows your interview to communicate with our EFSP server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"code: |\n  proxy_conn = ProxyConnection(credentials_code_block='tyler_login', default_jurisdiction='illinois')\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials_code_block")," is a YAML code block that triggers asking the user questions to login to the Tyler system.\nWe provide a code block that additionally handles password resets and incorrect logins. It defines ",(0,a.kt)("inlineCode",{parentName:"p"},"tyler_login")," at the end, which is why we pass ",(0,a.kt)("inlineCode",{parentName:"p"},"tyler_login")," to the connection object. If you want to have different login screens, you can define your own code block, as long as it sets the trigger variable to\n",(0,a.kt)("inlineCode",{parentName:"p"},"True")," only if ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_conn.authenticate_user(...).is_ok()."),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default_jurisdiction")," is the jurisdiction that you are filing in. Currently, we only support ",(0,a.kt)("inlineCode",{parentName:"p"},"illinois"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"louisiana")," (with ",(0,a.kt)("inlineCode",{parentName:"p"},"massachusetts")," coming soon)."),(0,a.kt)("h3",{id:"get-the-information-needed-to-file"},"Get the information needed to file"),(0,a.kt)("p",null,"As mentioned previously, this interview will create a new case with the court, aka an initial filing.\nTo keep it simple, the interview will only file one type of case; this lets us hardcode a few pieces of information in our interview."),(0,a.kt)("p",null,"We'll first need to find the right \"codes\" for our interview. Tyler's E-filing system defines specific codes for many different\nparts of the filing process, include the over-arching category of the case, the more specific case type, and even things like whether or not\nthe filed document should be confidential or not."),(0,a.kt)("p",null,"To find the right codes, navigate through the URLs provided by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes"},"https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes"),".\nFirefox will display clickable links that you can use to browse the different codes."),(0,a.kt)("p",null,"For example, say we want to write an Adoption interview. The codes in Illinois are split by courts, so to see the case categories available to\none particular court, say Adams, we can go to\n",(0,a.kt)("a",{parentName:"p",href:"https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/categories"},"https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/categories"),', and scroll through the responses until we find the "Adoption" entry,\ncode 7306. We would then see the case types for Adoption cases in adams at\n',(0,a.kt)("a",{parentName:"p",href:"https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/case_types?category_id=7306&timing=Initial"},"https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/case_types?category_id=7306&timing=Initial"),", which is 25361."),(0,a.kt)("p",null,"The endpoints should say when they need parameters, like we provided with ",(0,a.kt)("inlineCode",{parentName:"p"},"category_id=7306&timing=Initial")," above."),(0,a.kt)("p",null,"We are currently working on a better interface for finding and handling these codes at runtime based on our experiences in Illinois and Massachusetts. Stay tuned."),(0,a.kt)("p",null,"For this guide, we'll stick with a single court, to make things simple to understand. We'll use the following codes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"variable name"),(0,a.kt)("th",{parentName:"tr",align:null},"purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"example value"),(0,a.kt)("th",{parentName:"tr",align:null},"example meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"efile_case_category")),(0,a.kt)("td",{parentName:"tr",align:null},"the over arching category of the case"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"7306"')),(0,a.kt)("td",{parentName:"tr",align:null},"Adoption")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"efile_case_type")),(0,a.kt)("td",{parentName:"tr",align:null},"the specific type of case"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"25361"')),(0,a.kt)("td",{parentName:"tr",align:null},"Adoption")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"efile_case_subtype")),(0,a.kt)("td",{parentName:"tr",align:null},"optional, if there needs to be more specific case types"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"party_type")),(0,a.kt)("td",{parentName:"tr",align:null},"what the role of an individual or party is in the case"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"7067"')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"20640"')),(0,a.kt)("td",{parentName:"tr",align:null},"Adoptive parent or child")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"filing_type")),(0,a.kt)("td",{parentName:"tr",align:null},"what the filing actually is, usually the name of the document"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"29730"')),(0,a.kt)("td",{parentName:"tr",align:null},"Application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"document_type")),(0,a.kt)("td",{parentName:"tr",align:null},"If the document is confidential or not"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"5766"')),(0,a.kt)("td",{parentName:"tr",align:null},"Non-confidential")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"filing_component")),(0,a.kt)("td",{parentName:"tr",align:null},"If this is the lead document or if it's an attachment"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"332"')),(0,a.kt)("td",{parentName:"tr",align:null},"Lead document")))),(0,a.kt)("h3",{id:"give-all-of-the-info-that-the-efsp-needs-to-file-your-doc"},"Give all of the info that the EFSP needs to file your doc"),(0,a.kt)("p",null,"Now that we have all of the codes that we want, we need to define the right variables, setting their values to the codes we found above."),(0,a.kt)("p",null,"Your interview must define the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"ALIndividual"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"other_parties"),". Each individual should have at least a first name. Note that if only a first name is provided, then the person is assumed to be a business. ",(0,a.kt)("inlineCode",{parentName:"p"},"users[0]")," is almost always the person completing the interview, or at least who the form is being completed on behalf of."),(0,a.kt)("p",null,"For each object in ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," and in ",(0,a.kt)("inlineCode",{parentName:"p"},"other_parties"),", your interview needs to define the following attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"party_type"),": this should be the Tyler party type code of that user"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_new"),": if you are filing into an existing case and are adding additional participants to the case, this should be true. They aren't necessary since this interview is making an initial case (where all parties are implicitly new)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"users[0].email")," must be defined. Email is not required for any other parties.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"code: |\n  trial_court = 'adams`\n  efile_case_category = '7306'\n  efile_case_type= '25361'\n---\ncode: |\n  users[i].name.first\n  if i == 0:\n    users[i].email\n  users[i].party_type = '7067' # adoptive parent\n  users[i].completed = True\n---\ncode: |\n  other_parties[i].name.first\n  other_parties[i].party_type = '20640' # adoptive child\n  other_parties[i].completed = True\n")),(0,a.kt)("p",null,"The following variables must also be defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_started_case"),": an Assembly Line variable determining if the ",(0,a.kt)("inlineCode",{parentName:"li"},"users")," are plaintiffs/petitioners."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lead_contact"),": this is the person who will be contacted about the status of this filing, and can just be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"users[0]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tyler_payment_id"),": This is the payment information that Tyler needs to collect payment for the filing. It is the string of the payment method ID. We'll deal more with this in the advanced guide (coming soon), but  for now, we'll assume that the filer qualifies for a fee waiver, and can use the global waiver payment account, \"global\" meaning that any filer can use when filing. You can get this waiver payment account from the config: ",(0,a.kt)("inlineCode",{parentName:"li"},"get_config('efile proxy', {}).get('global waiver', '')"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"al_court_bundle")," should be an ALDocumentBundle, containing all of the documents that you want to file. Each top level ALDocument or ALDocumentBundle in ",(0,a.kt)("inlineCode",{parentName:"li"},"al_court_bundle")," will be treated as a separate filing, and each filing needs the following attributes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filing_component")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"filing_type")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filename"),": this will be defined by default when declaring the ALDocument"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filing_parties"),": these are the parties that are initiating the filing. When the party that's filing is also being added in that filing, the value is the ",(0,a.kt)("inlineCode",{parentName:"li"},"instanceName")," of docassemble var representing that individual. Usually this will be ",(0,a.kt)("inlineCode",{parentName:"li"},'"users[0]"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filing_action"),": for us, this will be ",(0,a.kt)("inlineCode",{parentName:"li"},'"efile"'))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncode: |\n  main_document.document_type = '5766'\n  main_document.filing_component = '332'\n  main_document.filing_type = '29730'\n  main_document.filing_parties = ['users[0]']\n  main_document.filing_action = 'efile'\n  main_document.completed = True\n")),(0,a.kt)("h2",{id:"interview-logic-and-question-screens"},"Interview Logic and Question Screens"),(0,a.kt)("p",null,"Now that all of the information is defined, we just need to specify the interview order logic. Notably, you can use the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"can_check_efile")," to\nask the user if they want to e-file their documents, or if they'd rather print them out themselves. You can then define the variables ",(0,a.kt)("inlineCode",{parentName:"p"},"ready_to_efile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"efile")," to trigger actual document to e-file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"mandatory: True\nid: main interview order block\ncode: |\n  user_ask_role = 'plaintiff'\n  users.gather(complete_attribute='completed')\n  other_parties.gather(complete_attribute='completed')\n  if can_check_efile:\n    tyler_login\n    lead_contact = users[0]\n    main_document.completed\n    tyler_payment_id = get_config('efile proxy', {}).get('global waiver', '')\n    ready_to_efile\n    efile\n    ending_screen\n  else:\n    cannot_efile # triggers the kickout event screen\n")),(0,a.kt)("p",null,"The full minimal interview file can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/minimal_interview.yml"},"in the EFSPIntegration github"),"."))}p.isMDXComponent=!0}}]);