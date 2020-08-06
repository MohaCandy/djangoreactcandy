(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{135:function(e,t,a){e.exports=a(212)},140:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=(a(140),a(141),a(214)),i=a(101),s=a(220),u=a(61),m=o.a.Header,p=o.a.Content,d=o.a.Footer;var h=function(e){return l.a.createElement(o.a,{className:"layout"},l.a.createElement(m,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(i.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},l.a.createElement(i.a.Item,{key:"1"},"nav 1"),l.a.createElement(i.a.Item,{key:"2"},"nav 2"),l.a.createElement(i.a.Item,{key:"3"},"nav 3"))),l.a.createElement(p,{style:{padding:"0 50px"}},l.a.createElement(s.a,{style:{margin:"16px 0"}},l.a.createElement(s.a.Item,null,l.a.createElement(u.b,{to:"/"},"Home")),l.a.createElement(s.a.Item,null,l.a.createElement(u.b,{to:"/"}," List"))),l.a.createElement("div",{className:"site-layout-content"},e.children)),l.a.createElement(d,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))},E=a(18),v=a(62),f=a(63),g=a(67),b=a(65),y=a(46),k=a.n(y),w=a(215),I=a(218),j=a(221),S=a(222),x=a(223),D=a(224),C=function(e){var t=e.icon,a=e.text;return l.a.createElement(w.a,null,l.a.createElement(t),a)};var O=function(e){return l.a.createElement(I.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:e.data,renderItem:function(e){return l.a.createElement(I.b.Item,{key:e.title,actions:[l.a.createElement(C,{icon:S.a,text:"156",key:"list-vertical-star-o"}),l.a.createElement(C,{icon:x.a,text:"156",key:"list-vertical-like-o"}),l.a.createElement(C,{icon:D.a,text:"2",key:"list-vertical-message"})],extra:l.a.createElement("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},l.a.createElement(I.b.Item.Meta,{avatar:l.a.createElement(j.a,{src:e.avatar}),title:l.a.createElement("a",{href:"/".concat(e.id)},e.title),description:e.description}),e.content)}})};k.a.defaults.xsrfHeaderName="X-CSRFTOKEN",k.a.defaults.xsrfCookieName="csrftoken";var H=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",content:""},e.titleHandler=function(t){e.setState({title:t.target.value})},e.contentHandler=function(t){e.setState({content:t.target.value})},e.submitHandler=function(t,a,n){t.preventDefault();var l={title:e.state.title,content:e.state.content};switch(console.log(l),a){case"post":k()({method:"post",url:"http://127.0.0.1:8000/api/",data:l,headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.setState({title:"",content:""});break;case"put":k()({method:"put",url:"http://127.0.0.1:8000/api/".concat(n,"/"),data:l,headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.setState({title:"",content:""});break;default:console.log("dd")}},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){return e.submitHandler(t,e.props.action,e.props.articleID)}},l.a.createElement("label",null,"title"),l.a.createElement("input",{placeholder:"Title",value:this.state.title,onChange:this.titleHandler}),l.a.createElement("label",null,"Content"),l.a.createElement("input",{placeholder:"Title",value:this.state.content,onChange:this.contentHandler}),l.a.createElement("button",{type:"submit",htmlType:"submit"},this.props.btn),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),a}(n.Component),A=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={articles:[]},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://127.0.0.1:8000/api/").then((function(t){e.setState({articles:t.data}),console.log(t.data)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,{data:this.state.articles}),l.a.createElement(H,{btn:"Add new",action:"post",articleID:null}))}}]),a}(n.Component),N=a(219),T=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={article:{}},e.deleteHandler=function(t){var a=e.props.match.params.articleID;k.a.delete("http://127.0.0.1:8000/api/".concat(a)).then((function(t){e.setState({article:t.data}),console.log(t.data)}))},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.articleID;k.a.get("http://127.0.0.1:8000/api/".concat(t)).then((function(t){e.setState({article:t.data}),console.log(t.data)}))}},{key:"render",value:function(){var e=this.props.match.params.articleID;return l.a.createElement("div",null,l.a.createElement(N.a,{title:this.state.article.title},l.a.createElement("p",null,this.state.article.content)),l.a.createElement(H,{articleID:e,btn:"Update",action:"put"}),l.a.createElement("form",{onSubmit:this.deleteHandler},l.a.createElement("button",null,"delete")))}}]),a}(n.Component);var z=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"test"))};var M=function(){return l.a.createElement("div",null,l.a.createElement(E.a,{exact:!0,path:"/",component:A}),l.a.createElement(E.a,{exact:!0,path:"/:articleID",component:T}),l.a.createElement(E.a,{exact:!0,path:"/test",component:z}))};var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.a,null,l.a.createElement(h,null,l.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.3a589f0d.chunk.js.map