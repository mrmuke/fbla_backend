(this.webpackJsonpfbla_quiz_frontend=this.webpackJsonpfbla_quiz_frontend||[]).push([[0],{102:function(e,t,s){},103:function(e,t,s){},125:function(e,t,s){},126:function(e,t,s){},221:function(e,t,s){},232:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),a=s.n(c),i=s(22),r=s.n(i),l=(s(102),s(103),s(104),s(5)),o=s(12),j=s(7),d=(s(56),s(23)),u=s(24),b=s(8),h=s.n(b),x=window.location.origin.indexOf("fbla")>-1?"https://fbla-prep.herokuapp.com":"http://localhost:8000",O=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"loginUser",value:function(e){var t="".concat(x,"/api/users/login");return h.a.post(t,e)}},{key:"registerUser",value:function(e){var t="".concat(x,"/api/users/register");return h.a.post(t,e)}},{key:"logOutUser",value:function(){var e="".concat(x,"/api/users/logout");return h.a.post(e)}}]),e}(),p=Object(c.createContext)();function m(){return Object(c.useContext)(p)}var g=new O;function f(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),d=r[0],u=r[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),x=(h[0],h[1]),O=m(),p=O.authTokens,f=O.setAuthTokens;return p?Object(n.jsx)(j.a,{to:"/dashboard"}):Object(n.jsx)("div",{className:"limiter",children:Object(n.jsx)("div",{className:"container-login100",children:Object(n.jsx)("div",{className:"wrap-login100",children:Object(n.jsxs)("div",{className:"login100-form validate-form p-l-55 p-r-55 p-t-178",children:[Object(n.jsx)("span",{className:"login100-form-title",children:"Sign In"}),Object(n.jsxs)("div",{className:"wrap-input100 validate-input m-b-16","data-validate":"Please enter username",children:[Object(n.jsx)("input",{className:"input100",type:"text",name:"username",placeholder:"Username",value:s,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("span",{className:"focus-input100"})]}),Object(n.jsxs)("div",{className:"wrap-input100 validate-input","data-validate":"Please enter password",value:d,onChange:function(e){return u(e.target.value)},children:[Object(n.jsx)("input",{className:"input100",type:"password",name:"pass",placeholder:"Password"}),Object(n.jsx)("span",{className:"focus-input100"})]}),Object(n.jsxs)("div",{className:"text-right p-t-13 p-b-23",children:[Object(n.jsx)("span",{children:"Forgot "}),Object(n.jsx)("a",{href:"#",className:"txt2",children:"Username / Password?"})]}),Object(n.jsx)("div",{className:"container-login100-form-btn",children:Object(n.jsx)("button",{className:"login100-form-btn",onClick:function(){x(!0),g.loginUser({username:s,password:d}).then((function(e){f(e.data),x(!1)})).catch((function(e){x(!1)}))},children:"Sign in"})}),Object(n.jsxs)("div",{className:"flex-col-c p-t-170 p-b-40",children:[Object(n.jsx)("span",{className:"txt1 p-b-9",children:"Don\u2019t have an account?"}),Object(n.jsx)(o.b,{to:"/signup",className:"txt3",children:"Sign up now"})]})]})})})})}var v=new O;function y(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),d=r[0],u=r[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),x=h[0],O=h[1],p=Object(c.useState)(!1),g=Object(l.a)(p,2),f=(g[0],g[1]),y=m(),w=y.authTokens,z=y.setAuthTokens;return w?Object(n.jsx)(j.a,{to:"/dashboard"}):Object(n.jsx)("div",{className:"limiter",children:Object(n.jsx)("div",{className:"container-login100",children:Object(n.jsx)("div",{className:"wrap-login100",children:Object(n.jsxs)("div",{className:"login100-form validate-form p-l-55 p-r-55 p-t-178",children:[Object(n.jsx)("span",{className:"login100-form-title",children:"Register"}),Object(n.jsxs)("div",{className:"wrap-input100 validate-input m-b-16","data-validate":"Please enter username",children:[Object(n.jsx)("input",{className:"input100",type:"text",name:"username",placeholder:"Username",value:s,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("span",{className:"focus-input100"})]}),Object(n.jsxs)("div",{className:"wrap-input100 validate-input m-b-16","data-validate":"Please enter email",children:[Object(n.jsx)("input",{className:"input100",type:"email",name:"email",placeholder:"Email",value:d,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("span",{className:"focus-input100"})]}),Object(n.jsxs)("div",{className:"wrap-input100 validate-input m-b-23","data-validate":"Please enter password",children:[Object(n.jsx)("input",{className:"input100",type:"password",name:"pass",placeholder:"Password",value:x,onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("span",{className:"focus-input100"})]}),Object(n.jsx)("div",{className:"container-login100-form-btn",children:Object(n.jsx)("button",{className:"login100-form-btn",onClick:function(){f(!0),v.registerUser({username:s,email:d,password:x}).then((function(e){z(e.data)})).catch((function(e){f(!1)}))},children:"Sign up"})}),Object(n.jsxs)("div",{className:"flex-col-c p-t-170 p-b-40",children:[Object(n.jsx)("span",{className:"txt1 p-b-9",children:"Already have an account?"}),Object(n.jsx)(o.b,{to:"/login",className:"txt3",children:"Login in now"})]})]})})})})}var w=s(37),z=s(94);var k=function(e){var t=e.component,s=Object(z.a)(e,["component"]),c=m().authTokens;return Object(n.jsx)(j.b,Object(w.a)(Object(w.a)({},s),{},{render:function(e){return c?Object(n.jsx)(t,Object(w.a)({},e)):Object(n.jsx)(j.a,{to:"/login"})}}))};s(125);function N(){return Object(n.jsxs)("container",{children:[Object(n.jsx)("h2",{style:{padding:"20px"},children:"SMART Summary"}),Object(n.jsxs)("details",{children:[Object(n.jsx)("summary",{class:"success",children:"Pacing"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("div",{class:"success",children:["Journalism 1",Object(n.jsx)("span",{class:"status",children:"Just Right"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("div",{class:"warning",children:["Journalism 2",Object(n.jsx)("span",{class:"status",children:"A Little Too Slow"})]})})]})]}),Object(n.jsxs)("details",{open:"open",children:[Object(n.jsx)("summary",{class:"warning",children:"Vocabulary"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("div",{class:"success",children:["Journalism - Vocab 1",Object(n.jsx)("span",{class:"status",children:"High Percentage"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("div",{class:"warning",children:["Journalism - Vocab 2",Object(n.jsx)("span",{class:"status",children:"Average"}),Object(n.jsx)("span",{class:"info",children:"Learning vocab is important and try a few more times so that you can truly master your objective tests."})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("div",{class:"success",children:["Journalism - Vocab 3",Object(n.jsx)("span",{class:"status",children:"High Percentage"})]})})]})]}),Object(n.jsxs)("details",{children:[Object(n.jsx)("summary",{class:"failure",children:"Multiple Choice"}),Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:Object(n.jsxs)("div",{class:"failure",children:["Journalism 1",Object(n.jsx)("span",{class:"status",children:"Maybe take a little more time and look through each question carefully. You rushed a little."})]})})})]})]})}var q=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"getQuizzes",value:function(){return h.a.get("".concat(x,"/api/quiz/quizzes"))}},{key:"getQuiz",value:function(e){return h.a.get("".concat(x,"/api/quiz/").concat(e))}},{key:"saveAnswer",value:function(e){return h.a.patch("".concat(x,"/api/quiz/saveAnswer"),e)}},{key:"getMyQuizzes",value:function(){return h.a.get("".concat(x,"/api/quiz/myQuizzes"))}},{key:"retakeQuiz",value:function(e){return h.a.post("".concat(x,"/api/quiz/retake/").concat(e))}},{key:"submitQuiz",value:function(e,t){return h.a.post("".concat(x,"/api/quiz/").concat(t,"/submit"),e)}},{key:"uploadQuiz",value:function(e){return h.a.post("".concat(x,"/api/quiz/upload"),e)}},{key:"createPlan",value:function(e){return h.a.post("".concat(x,"/api/quiz/createPlan"),e)}},{key:"getPlan",value:function(){return h.a.get("".concat(x,"/api/quiz/plan"))}}]),e}(),C=new q;function S(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(null),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(c.useState)("Advertising"),u=Object(l.a)(d,2),b=u[0],h=u[1],x=Object(c.useState)(null),O=Object(l.a)(x,2),p=O[0],m=O[1];Object(c.useEffect)((function(){C.getPlan().then((function(e){m(e.data)}))}),[]);return Object(n.jsx)("div",{className:"goal-header",children:p?p.length>0?Object(n.jsxs)("div",{className:"feedback-container",children:[Object(n.jsxs)("div",{style:{color:"white",display:"flex",flexDirection:"column"},children:[Object(n.jsx)("h2",{style:{textDecorationLine:"underline",marginBottom:"10px",padding:"20px"},children:"Reach Nationals"}),p.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"step",children:[Object(n.jsx)("h1",{className:new Date>new Date(e.date)?"filled-step-header":"step-header",children:t+1}),Object(n.jsxs)("p",{className:"step-text",children:[e.date," : ",Object(n.jsx)("a",{href:"/quizzes/".concat(e.quiz.id),children:Object(n.jsx)("strong",{children:e.quiz.name})})," ",(i=new Date,r=new Date(e.date),i.getFullYear()===r.getFullYear()&&i.getMonth()===r.getMonth()&&i.getDate()===r.getDate()&&Object(n.jsx)(n.Fragment,{children:" \u2190 You are here"}))]})]}),Object(n.jsx)("div",{className:"step border-left",children:Object(n.jsxs)("p",{className:"step-text",children:[e.date," to ",p[t+1]?p[t+1].date:"Test Date"," : ",Object(n.jsx)("strong",{children:"Study"}),(s=new Date,c=e.date,a=p[t+1]?p[t+1].date:"2099-10-12",s>new Date(c)&&s<new Date(a)&&Object(n.jsx)(n.Fragment,{children:" \u2190 You are here"}))]})})]},e.id);var s,c,a,i,r})),Object(n.jsxs)("div",{className:"step",children:[Object(n.jsx)("h1",{className:"step-header",children:p.length+1}),Object(n.jsxs)("p",{className:"step-text",children:["Ready for your ",Object(n.jsx)("b",{children:"Objective Test"})]})]})]}),Object(n.jsx)(N,{})]}):s?Object(n.jsxs)("div",{style:{color:"white",display:"flex",flexDirection:"column"},children:[Object(n.jsx)("strong",{style:{margin:"10px"},children:"Test Date"}),Object(n.jsx)("input",{type:"date",onChange:function(e){return j(e.target.value)}}),Object(n.jsx)("strong",{style:{margin:"10px"},children:"Test Category"}),Object(n.jsxs)("select",{style:{padding:"10px"},value:b,onChange:function(e){return h(e.target.value)},children:[Object(n.jsx)("option",{value:"Journalism",children:"Journalism"}),Object(n.jsx)("option",{value:"Securities and Investments",children:"Securities and Investments"}),Object(n.jsx)("option",{value:"Advertising",children:"Advertising"})]}),Object(n.jsx)("button",{style:{color:"#1586CA",backgroundColor:"white",padding:"10px",borderRadius:"10px",marginTop:"10px"},onClick:function(){o?C.createPlan({testDate:o,category:b}).then((function(e){m(e.data)})):alert("Please select your test date...")},children:"Create My Study Plan"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{className:"goal-image",src:"https://cdn.kastatic.org/images/sat/overview-ctas/schedule.svg",alt:"","aria-hidden":"true"}),Object(n.jsxs)("div",{style:{color:"white",padding:"15px"},children:[Object(n.jsx)("h2",{style:{marginBottom:"10px"},children:"Set up new goals today!"}),"Based on your test date, we'll put together a practice plan to ensure you're ready.",Object(n.jsx)("br",{}),Object(n.jsx)("button",{style:{color:"#1586CA",backgroundColor:"white",padding:"10px",borderRadius:"10px",marginTop:"10px"},onClick:function(){return a(!0)},children:"Plan Your Studying"})]})]}):Object(n.jsx)("div",{style:{color:"white"},children:"Loading..."})})}s(126);function A(e){var t=e.quizzes;return Object(n.jsx)("div",{children:Object(n.jsx)("section",{className:"cards-wrapper",children:t.map((function(e){return Object(n.jsx)("div",{className:"card-grid-space",children:Object(n.jsxs)(o.b,{to:"/quizzes/"+e.id,className:"quiz-card",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg')"},children:[Object(n.jsx)("div",{className:"date",children:null!=e.score?"Finished":"In Progress"}),Object(n.jsx)("h1",{children:e.name}),Object(n.jsx)("h5",{children:e.description}),Object(n.jsxs)("div",{className:"tags",children:[Object(n.jsx)("div",{className:"tag",children:"Business"}),Object(n.jsx)("div",{className:"tag",children:"FBLA"})]}),Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",width:"100%",fontSize:"3em"},children:null!=e.score?e.score+"%":Object(n.jsxs)("div",{children:["Resume",Object(n.jsxs)("div",{style:{textAlign:"center"},children:[e.progress,"%"]})]})})]})},e.id)}))})})}var T=s(95),_=s(92),D=s(235),P=s(236),L=s(237),F=s(238),Q=s(239),J=s(54),B=(new q,function(e){Object(T.a)(s,e);var t=Object(_.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e="rgb(9, 85, 148)",t={labels:["Advertising","Securities and Investments","Journalism"],datasets:[{data:[50,20,30],backgroundColor:["rgb(68, 159, 238)","rgb(23, 139, 234)","rgb(14, 117, 202)"],hoverBackgroundColor:[e,e,e]}]},s={data:{labels:["Journalism 1","Journalism 2","Journalism Sample","Advertising 1","Advertising 2","Advertising Sample","Journalism 1"],datasets:[{label:"# of Votes",data:[10,7,12,10,11,18,20],borderColor:"transparent",backgroundColor:"rgb(68, 159, 238)",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderWidth:4}]}};return Object(n.jsx)("div",{style:{marginTop:"10px"},children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(P.a,{md:8,sm:12,children:Object(n.jsxs)(L.a,{children:[Object(n.jsx)(F.a,{children:"Answers Correct"}),Object(n.jsx)(Q.a,{children:Object(n.jsx)("div",{children:Object(n.jsx)(J.Line,{data:s.data,width:2068,height:846,legend:{display:!1}})})})]})}),Object(n.jsx)(P.a,{md:4,sm:12,children:Object(n.jsxs)(L.a,{style:{height:"100%"},children:[Object(n.jsx)(F.a,{children:"Mastery in Different Topics"}),Object(n.jsx)(Q.a,{children:Object(n.jsx)(J.Doughnut,{data:t,width:908,height:768,legend:{display:!1}})})]})})]})})}}]),s}(c.Component)),I=new q;function R(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!1),r=Object(l.a)(i,2),o=r[0],j=r[1];return Object(c.useEffect)((function(){I.getMyQuizzes().then((function(e){a(e.data),console.log(e.data)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{}),Object(n.jsxs)("div",{style:{padding:"22px"},children:[o?Object(n.jsx)(B,{quizzes:s}):Object(n.jsx)(A,{quizzes:s}),Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"10px"},children:Object(n.jsx)("button",{style:{color:"white",backgroundColor:"#1586CA",padding:"20px",borderRadius:"10px",marginTop:"10px"},onClick:function(){return j(!o)},children:o?"Back to My Quizzes":"Show Progress and Quiz Analytics"})})]})]})}s(221);function M(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{class:"welcome-area",children:Object(n.jsx)("div",{class:"header-text",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12",children:[Object(n.jsxs)("h1",{children:["We provide the best ",Object(n.jsx)("strong",{children:"strategy"}),Object(n.jsx)("br",{})," to prepare you for ",Object(n.jsx)("strong",{children:"FBLA"})]}),Object(n.jsx)("p",{children:"Use the best tool out there to help you achieve your maximum potential on FBLA objective tests..."}),Object(n.jsx)(o.b,{to:"/signup",class:"welcome-button",children:"Get Started"})]})})})})}),Object(n.jsx)("section",{class:"section home-feature",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsx)("div",{class:"row",children:Object(n.jsx)("div",{class:"col-lg-12",children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-lg-4 col-md-6 col-sm-6 col-12","data-scroll-reveal":"enter bottom move 50px over 0.6s after 0.2s",children:Object(n.jsxs)("div",{class:"features-small-item",children:[Object(n.jsx)("div",{class:"icon",children:Object(n.jsx)("i",{children:Object(n.jsx)("img",{src:"/static/checklist.png",style:{width:"50px"},alt:""})})}),Object(n.jsx)("h5",{class:"features-title",children:"Plan Your Studying"}),Object(n.jsx)("p",{children:"Ace the test by creating a study plan, and we will provide dates for you to take our practice quizzes"})]})}),Object(n.jsx)("div",{class:"col-lg-4 col-md-6 col-sm-6 col-12","data-scroll-reveal":"enter bottom move 50px over 0.6s after 0.4s",children:Object(n.jsxs)("div",{class:"features-small-item",children:[Object(n.jsx)("div",{class:"icon",children:Object(n.jsx)("i",{children:Object(n.jsx)("img",{src:"/static/quiz.png",style:{width:"50px"},alt:""})})}),Object(n.jsx)("h5",{class:"features-title",children:"Take Quizzes"}),Object(n.jsx)("p",{children:"Take our already existing quizzes or import your own to hone your FBLA skills and prep for objective tests"})]})}),Object(n.jsx)("div",{class:"col-lg-4 col-md-6 col-sm-6 col-12","data-scroll-reveal":"enter bottom move 50px over 0.6s after 0.6s",children:Object(n.jsxs)("div",{class:"features-small-item",children:[Object(n.jsx)("div",{class:"icon",children:Object(n.jsx)("i",{children:Object(n.jsx)("img",{src:"/static/analyze.png",style:{width:"50px"},alt:""})})}),Object(n.jsx)("h5",{class:"features-title",children:"Analyze Your Results"}),Object(n.jsx)("p",{children:"View your quiz efficiency and other analytics on your dashboard and also keep track of your results after you take a test"})]})})]})})})})})]})}var U=s(240),Y=s(241),E=new O;function V(){var e=m(),t=e.authTokens,s=e.setAuthTokens;return Object(n.jsxs)(U.a,{expand:"lg",children:[Object(n.jsx)(U.a.Brand,{href:"/",children:"FBLA SMART"}),Object(n.jsx)(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(U.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsx)(Y.a,{className:"ml-auto",children:t?Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(Y.a.Link,{href:"/dashboard",children:"Dashboard"}),Object(n.jsx)(Y.a.Link,{href:"/quizzes",children:"Take Quizzes"}),Object(n.jsx)(Y.a.Link,{onClick:function(){E.logOutUser().then((function(){s(null)}))},children:"Logout"})]}):Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(Y.a.Link,{href:"/login",children:"Login"}),Object(n.jsx)(Y.a.Link,{href:"/signup",children:"Sign up"})]})})})]})}var H=s(93),W=s(55),G=s.n(W),K=s(90),X=new q;function Z(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(null),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(c.useState)(""),u=Object(l.a)(d,2),b=u[0],h=u[1],x=Object(c.useState)(!1),O=Object(l.a)(x,2),p=O[0],m=O[1],g=Object(c.useRef)(null);return Object(c.useEffect)(Object(K.a)(G.a.mark((function e(){var t,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.getQuizzes();case 2:t=e.sent,s=t.data,a(s);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"#1586CA",minHeight:"100vh",padding:"20px"},children:Object(n.jsxs)("div",{className:"quizzes-container",children:[p?Object(n.jsxs)("div",{className:"create-quiz",style:{justifyContent:"space-between"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{className:"upload-btn",onClick:function(e){g.current.click()},children:"Select Quiz"}),Object(n.jsx)("input",{ref:g,style:{display:"none"},accept:"application/pdf",type:"file",onChange:function(e){j(e.target.files[0])}})," "]}),Object(n.jsx)("button",{onClick:function(){console.log(o);var e=new FormData;e.append("myFile",o,o.name),X.uploadQuiz(e).then((function(e){m(!1),a((function(t){return[].concat(Object(H.a)(t),[e.data])}))}))},children:"Submit!"})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"create-quiz",children:Object(n.jsx)("button",{onClick:function(){return m(!0)},children:"Import Sample"})})}),Object(n.jsx)("div",{style:{textAlign:"center"},children:"or"}),Object(n.jsx)("input",{style:{padding:"10px",width:"100%",margin:"5px",border:"2px solid #eee"},onChange:function(e){return h(e.target.value)},placeholder:"Search for a quiz.."}),s.length>0?s.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})).map((function(e){return Object(n.jsx)($,{quiz:e},e.id)})):Object(n.jsx)("div",{style:{textAlign:"center"},children:"No quizzes left.. Check your dashboard to resume quizzes.."})]})})}function $(e){var t=e.quiz;return Object(n.jsx)(o.b,{to:"/quizzes/".concat(t.id),children:Object(n.jsxs)("div",{className:"quiz-item",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("p",{children:t.description}),Object(n.jsx)("div",{style:{display:"flex"},children:Object(n.jsxs)("span",{children:[t.questions_count," Questions"]})})]}),Object(n.jsx)("button",{className:"take-quiz",children:" Take Quiz"})]})})}var ee=s(91),te=s.n(ee),se=new q;function ne(e){var t=Object(c.useState)(null),s=Object(l.a)(t,2),a=s[0],i=s[1],r=e.match.params.id,o=Object(c.useState)([]),j=Object(l.a)(o,2),d=j[0],u=j[1],b=Object(c.useState)(0),h=Object(l.a)(b,2),x=h[0],O=h[1],p=Object(c.useState)(null),m=Object(l.a)(p,2),g=m[0],f=m[1],v=Object(c.useState)(-1),y=Object(l.a)(v,2),w=y[0],z=y[1],k=Object(c.useState)([]),N=Object(l.a)(k,2),q=N[0],C=N[1],S=Object(c.useState)(!1),A=Object(l.a)(S,2),T=A[0],_=A[1];function D(e){i(e.data.quiz),e.data.quiz.quiztakers_set.completed&&(C(e.data.quiz.quiztakers_set.usersanswer_set.map((function(e){return e.message}))),z(e.data.quiz.quiztakers_set.score)),function(e){for(var t=e.quiztakers_set.usersanswer_set,s=[],n=!1,c=0;c<t.length;c++)t[c].answer.length>0?(console.log(t[c].answer),s.push(t[c].answer)):n||(n=!0,O(c));console.log(s),u(s)}(e.data.quiz)}function P(){var e={quiztaker:a.quiztakers_set.id,question:a.question_set[x].id,answer:g};se.saveAnswer(e)}return Object(c.useEffect)((function(){se.getQuiz(r).then((function(e){D(e)}))}),[]),a?-1!=w?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"table-title",children:[Object(n.jsx)("div",{style:{padding:"15px"},children:Object(n.jsx)(re,{score:w})}),Object(n.jsxs)("h2",{children:[a.name," "]}),Object(n.jsx)("button",{onClick:function(){se.retakeQuiz(r).then((function(e){D(e),z(-1),_(!1),O(0)}))},className:"take-quiz",children:"Retake"})]}),Object(n.jsxs)("table",{className:"table-fill",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"text-left",children:"Question"}),Object(n.jsx)("th",{className:"text-left",children:"Answer"})]})}),Object(n.jsx)("tbody",{className:"table-hover",children:q.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"text-left",children:a.question_set[t]&&a.question_set[t].label}),Object(n.jsx)("td",{className:"text-left",children:e})]})}))})]})]}):Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center",background:"#1586CA"},children:[Object(n.jsx)(te.a,{isOpen:T,children:Object(n.jsxs)("div",{className:"buttons",style:{diplay:"flex",flexDirection:"column",justifyContent:"center",marginTop:"10%"},children:[Object(n.jsx)("h2",{children:"Confirm Submission"}),Object(n.jsx)("p",{children:a.question_set.length-d.filter((function(e){return e.length>0})).length?"You have ".concat(a.question_set.length-d.filter((function(e){return e.length>0})).length," unanswered, are you sure you want to submit?"):"Check all of your answers"}),Object(n.jsx)("button",{onClick:function(){var e={quiztaker:a.quiztakers_set.id,question:a.question_set[x].id,answer:g};se.submitQuiz(e,r).then((function(e){z(e.data.quiztakers_set.score),C(e.data.quiztakers_set.usersanswer_set.map((function(e){return e.message})))}))},children:"Submit"}),Object(n.jsx)("button",{onClick:function(){return _(!1)},children:"Cancel"})]})}),Object(n.jsxs)("div",{style:{maxWidth:"550px",background:"white",borderRadius:"10px",padding:"10px"},children:[Object(n.jsxs)("div",{className:"question-wrapper",children:[Object(n.jsxs)("div",{className:"question-number",children:["QUESTION  ",x+1," OF ",a.question_set.length]}),Object(n.jsx)(ce,{selectedAnswer:d[x],question:a.question_set[x],selectAnswer:function(e){f(e);var t=d;t[x]=e,console.log(t),u(t)}})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("button",{onClick:function(){g&&P(),0!=x&&(O(x-1),f(null))},children:"Previous"}),Object(n.jsxs)("button",{onClick:function(){x!=a.question_set.length-1?(g&&g.length>0&&P(),x!==a.question_set.length-1&&(O(x+1),f(null))):_(!0)},children:[" ",x==a.question_set.length-1?"Submit":"Next"]})]})]})]}):null}function ce(e){var t=e.question,s=e.selectAnswer,c=e.selectedAnswer;return Object(n.jsxs)("div",{style:{padding:"15px"},children:[Object(n.jsx)("h5",{children:t.label}),Object(n.jsx)("hr",{}),"multiple"===t.question_type?t.answer_set.map((function(e,t){return Object(n.jsx)(ie,{answer:e,index:t,selectAnswer:s,selectedAnswer:c},e.id)})):"dropdown"===t.question_type?Object(n.jsxs)("select",{value:c,onChange:function(e){return s([+e.target.value])},children:[Object(n.jsx)("option",{value:null,selected:!0,disabled:!0,hidden:!0,children:"Choose here"}),t.answer_set.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.label},e.id)}))]}):Object(n.jsxs)("div",{children:[t.answer_set.map((function(e){return Object(n.jsx)(ae,{selectedAnswer:c,selectAnswer:s,answer:e},e.id)})),"     "]})]})}function ae(e){var t=e.answer,s=e.selectAnswer,a=e.selectedAnswer,i=Object(c.useState)(!1),r=Object(l.a)(i,2),o=r[0],j=r[1];return Object(c.useEffect)((function(){a&&a.includes(t.id)&&j(!0)}),[a]),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{checked:o,type:"checkbox",onChange:function(e){return function(e){o?(a.splice(a.indexOf(+e.target.value),1),s(a),j(!1)):(a||(a=[]),a.push(+e.target.value),s(a),j(!0))}(e)},value:t.id}),t.label]})}function ie(e){var t=e.answer,s=e.selectAnswer,c=e.selectedAnswer;return Object(n.jsx)("div",{className:"answer",onClick:function(){return s([t.id])},children:Object(n.jsx)("div",{className:c==t.id?"selected-letter":"",children:t.label})})}function re(e){var t=e.score;return t<=60?Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{style:{fontSize:"100px"},children:["\ud83d\ude22",t,"%"]}),Object(n.jsx)("h2",{style:{color:"red",textDecorationLine:"underline"},children:"Uh oh. Better luck next time."})]}):t<=80?Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{style:{fontSize:"100px"},children:["\ud83d\ude00",t,"%"]}),Object(n.jsx)("h2",{style:{color:"orange",textDecorationLine:"underline"},children:"You can do it! Keep trying!"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{style:{fontSize:"100px"},children:["\ud83d\ude1c",t,"%"]}),Object(n.jsx)("h2",{style:{color:"green",textDecorationLine:"underline"},children:"Congrats! You did it!"})]})}h.a.defaults.xsrfCookieName="csrftoken",h.a.defaults.xsrfHeaderName="X-CSRFToken";var le=function(){var e=JSON.parse(localStorage.getItem("tokens")),t=Object(c.useState)(e),s=Object(l.a)(t,2),a=s[0],i=s[1];return a?h.a.defaults.headers.common.Authorization="Token "+a.token:delete h.a.defaults.headers.common.Authorization,Object(n.jsx)(p.Provider,{value:{authTokens:a,setAuthTokens:function(e){localStorage.setItem("tokens",JSON.stringify(e)),i(e)}},children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(V,{}),Object(n.jsxs)(j.d,{children:[Object(n.jsx)(k,{exact:!0,path:"/dashboard",component:R}),Object(n.jsx)(k,{exact:!0,path:"/quizzes",component:Z}),Object(n.jsx)(k,{exact:!0,path:"/quizzes/:id",component:ne}),Object(n.jsx)(j.b,{path:"/login",component:f}),Object(n.jsx)(j.b,{path:"/signup",component:y}),Object(n.jsx)(j.b,{path:"/",component:M})]})]})})},oe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,242)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(le,{})}),document.getElementById("root")),oe()},56:function(e,t,s){}},[[232,1,2]]]);
//# sourceMappingURL=main.c16737a1.chunk.js.map