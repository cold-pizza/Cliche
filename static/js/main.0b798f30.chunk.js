(this["webpackJsonpcliche-prototype"]=this["webpackJsonpcliche-prototype"]||[]).push([[0],{58:function(e,t,c){},60:function(e,t,c){},81:function(e,t,c){},90:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var s,n=c(1),i=c.n(n),a=c(40),l=c.n(a),r=(c(58),c(51)),j=c(13),o=c.n(j),u=c(26),b=c(20),d=c(14),m=c(5),h=(c(60),c(4)),O=c(41),p=c.n(O),f=(c(79),c(80),p.a.initializeApp({apiKey:"AIzaSyDJMIeMggOEkzvvmzFp4FffCYXRd5_EXnY",authDomain:"cilche-prototype.firebaseapp.com",projectId:"cilche-prototype",storageBucket:"cilche-prototype.appspot.com",messagingSenderId:"529483602235",appId:"1:529483602235:web:bdc665b2d901d9b5b6ff1e"})),x=(c(81),c(0)),g=function(e){var t=e.account.email,c=e.account.password,s=Object(h.e)();return Object(x.jsxs)("div",{id:"sign-up",children:[Object(x.jsx)("h1",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{type:"text",name:"email",value:t,onChange:e.onChange,id:"id",placeholder:"Email"}),Object(x.jsx)("input",{type:"text",name:"password",value:c,onChange:e.onChange,id:"password",placeholder:"PASSWORD"}),Object(x.jsx)("button",{onClick:function(){e.createUser(t,c)},className:"signup-btn",children:"\uac00\uc785\ud558\uae30"}),Object(x.jsx)("button",{onClick:function(){s.replace("/")},className:"cancel-btn",children:"\ucde8\uc18c"})]}),Object(x.jsx)("div",{className:"other-signup"})]})},v=c(46),N=(c(90),c(11)),y=c(47),C=Object(y.a)(N.b)(s||(s=Object(v.a)(["\n  test-decoration: none;\n  color: black;\n"]))),k=function(e){var t=e.account.email,c=e.account.password;return Object(x.jsx)("div",{id:"login",children:Object(x.jsxs)("section",{className:"login-form",children:[Object(x.jsx)("h1",{children:"Cliche"}),Object(x.jsx)("input",{type:"text",name:"email",value:t,onChange:e.onChange,id:"id",placeholder:"ID or Email"}),Object(x.jsx)("input",{type:"password",name:"password",value:c,onChange:e.onChange,id:"password",placeholder:"Password"}),Object(x.jsx)("button",{onClick:function(){e.login(t,c)},className:"login-btn",children:"\ub85c\uadf8\uc778"}),Object(x.jsx)(C,{to:"/signup",children:Object(x.jsx)("button",{className:"signup-btn",children:"\ud68c\uc6d0\uac00\uc785"})})]})})},w=(c(92),function(e){return Object(n.useEffect)((function(){e.source.current.src=e.music[e.nextNum].url}),[e.nextNum]),Object(x.jsxs)("div",{id:"main",children:[Object(x.jsxs)("section",{className:"display-music",children:[Object(x.jsx)("div",{className:"picture",children:"\uc568\ubc94\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694!"}),Object(x.jsx)("span",{className:"title",children:e.music[e.nextNum].title}),Object(x.jsx)("span",{className:"singer",children:e.music[e.nextNum].singer})]}),Object(x.jsxs)("div",{className:"time-line",children:[Object(x.jsx)("p",{className:"current-time",children:"0"}),Object(x.jsx)("p",{className:"duration",children:"0"})]}),Object(x.jsx)("audio",{preload:"auto",controls:!0,className:"music-player",ref:e.player,children:Object(x.jsx)("source",{ref:e.source,src:"",type:"audio/mp3"})})]})}),S=(c(93),function(e){var t=Object(h.e)(),c=Object(n.useState)(!1),s=Object(m.a)(c,2),i=s[0],a=s[1];return Object(x.jsxs)("div",{id:"setting",children:[Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{onClick:function(){t.push("/setting/version")},children:"\ubc84\uc804\uc815\ubcf4"}),Object(x.jsx)("li",{onClick:function(){t.push("/setting/musiclist")},children:"\uace1\uc815\ubcf4"}),Object(x.jsx)("li",{onClick:function(){a(!i)},children:"\ub85c\uadf8\uc544\uc6c3"})]}),!0===i?Object(x.jsxs)("div",{className:"logout-form",children:[Object(x.jsx)("p",{children:"\ub85c\uadf8\uc544\uc6c3 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(x.jsxs)("div",{className:"btns",children:[Object(x.jsx)("button",{onClick:function(){e.logout()},className:"yes",children:"Yes"}),Object(x.jsx)("button",{onClick:function(){a(!i)},className:"no",children:"No"})]})]}):null]})}),A=(c(94),function(){return Object(x.jsxs)("div",{id:"version",children:[Object(x.jsx)("h1",{children:"*\ucd5c\uc2e0 \ubc84\uc804\uc785\ub2c8\ub2e4.*"}),Object(x.jsxs)("section",{className:"item",children:[Object(x.jsx)("h1",{children:"ver - 0.2.1"}),Object(x.jsx)("p",{className:"path-title",children:"\ubc84\uc804\ub0b4\uc6a9"}),Object(x.jsx)("p",{className:"path-content",children:"- \uc624\ub514\uc624 \ucee8\ud2b8\ub864\ub7ec \ud65c\uc131\ud654."})]}),Object(x.jsxs)("section",{className:"item",children:[Object(x.jsx)("h1",{children:"ver - 0.2"}),Object(x.jsx)("p",{className:"path-title",children:"\ubc84\uc804\ub0b4\uc6a9"}),Object(x.jsx)("p",{className:"path-content",children:"- \ub178\ub798\uc800\uc7a5\uc18c \uc800\uc7a5\uae30\ub2a5 \ucd94\uac00.(\uace1\uc815\ubcf4)"}),Object(x.jsx)("p",{className:"path-content",children:"- \uc74c\uc545\uc7ac\uc0dd \uae30\ub2a5 \ucd94\uac00."})]}),Object(x.jsxs)("section",{className:"item",children:[Object(x.jsx)("h1",{children:"ver - 0.1"}),Object(x.jsx)("p",{className:"path-title",children:"\ubc84\uc804\ub0b4\uc6a9"}),Object(x.jsx)("p",{className:"path-content",children:"- \ub85c\uadf8\uc778, \ud68c\uc6d0\uac00\uc785 \uae30\ub2a5 \ucd94\uac00."}),Object(x.jsx)("p",{className:"path-content",children:"- \uc124\uc815\ub780 \ucd94\uac00."})]})]})}),M=(c(95),function(e){var t=Object(h.e)(),c=Object(h.f)().id,s=Number(c);return Object(x.jsxs)("div",{id:"album-edit",children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("i",{className:"fas fa-record-vinyl"}),Object(x.jsxs)("div",{className:"album-info",children:[Object(x.jsx)("span",{children:e.album[s].title}),Object(x.jsx)("input",{className:"album-name",type:"text",placeholder:e.album[s].title})]})]}),Object(x.jsx)("section",{className:"music-list",children:e.album[s].playList.map((function(e){return Object(x.jsxs)("section",{className:"item",children:[Object(x.jsxs)("div",{className:"music-info",children:[Object(x.jsx)("div",{className:"image"}),Object(x.jsxs)("div",{className:"meta-info",children:[Object(x.jsx)("p",{children:e.title}),Object(x.jsx)("span",{children:e.singer})]})]}),Object(x.jsxs)("div",{className:"edit-icons",children:[Object(x.jsx)("i",{className:"fas fa-minus remove-btn"}),Object(x.jsx)("i",{className:"far fa-dot-circle drag-btn"})]})]})}))}),Object(x.jsx)("i",{onClick:function(){t.push("/setting/addmusic/".concat(c))},className:"fas fa-plus plus-album"})]})}),L=(c(96),function(e){var t=Object(n.useState)(!0),c=Object(m.a)(t,2),s=c[0],i=c[1];return Object(x.jsxs)("div",{id:"music-list",children:[e.music.map((function(e){var t=e.title,c=e.singer;return Object(x.jsxs)("section",{className:"item",children:[Object(x.jsxs)("div",{className:"sing-info",children:[Object(x.jsx)("div",{className:"image"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("span",{children:c})]})]}),Object(x.jsx)("i",{className:"fas fa-minus remove-btn"})]})})),s?Object(x.jsxs)("div",{className:"panel",children:[Object(x.jsx)("i",{className:"fas fa-times x",onClick:function(){i(!s)}}),Object(x.jsxs)("p",{children:["\uc81c\ubaa9\uc744 ",Object(x.jsx)("span",{children:'"\uac00\uc218\uc774\ub984"-"\ub178\ub798\uc81c\ubaa9"'}),"\uc73c\ub85c\ub41c \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud574\uc8fc\uc138\uc694!"]})]}):null,Object(x.jsx)("label",{id:"label",htmlFor:"music-file",children:Object(x.jsx)("i",{className:"fas fa-plus plus-music"})}),Object(x.jsx)("i",{style:{display:e.on?"block":"none"},className:"fas fa-check plus-music",onClick:function(){e.upLoadMusic()}}),Object(x.jsx)("input",{type:"file",onChange:e.onChangeMusic,id:"music-file"})]})}),E=(c(97),function(e){var t=Object(n.useState)(!1),c=Object(m.a)(t,2),s=c[0],i=c[1];return Object(x.jsxs)("div",{id:"add-music",children:[e.music.map((function(e){return Object(x.jsxs)("section",{className:"item",children:[Object(x.jsxs)("div",{className:"music-info",children:[Object(x.jsx)("div",{className:"image"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:e.title}),Object(x.jsx)("span",{children:e.singer})]})]}),Object(x.jsx)("i",{style:{color:!0===s?"#698eff":"rgba(0, 0, 0, 0.5)"},className:"fas fa-check check-box",onClick:function(){i(!s)}})]})})),Object(x.jsx)("i",{className:"fas fa-check plus-music"})]})}),I=(c(98),function(e){var t=Object(h.e)();return Object(x.jsxs)("div",{id:"add-album",children:[Object(x.jsxs)("div",{className:"album-form",children:[Object(x.jsx)("i",{className:"fas fa-record-vinyl lp"}),Object(x.jsxs)("div",{className:"input-form",children:[Object(x.jsx)("input",{type:"text",value:e.addAlbumState.name,name:"name",onChange:e.onChangeAlbum,placeholder:"\uc568\ubc94\uc81c\ubaa9"}),Object(x.jsx)("span",{children:e.addAlbumState.name})]})]}),Object(x.jsx)("i",{onClick:function(){console.log("\uc568\ubc94 \uc0dd\uc131!"),e.addAlbum(),t.push("/setting/playlist")},className:"fas fa-check check-box"})]})});var z=function(e){var t=Object(h.e)(),c=Object(n.useState)([{id:0,title:"",site:"/main"},{id:1,title:"\uc124\uc815",site:"/setting"},{id:2,title:"\ubc84\uc804\uc815\ubcf4",site:"/setting/version"},{id:3,title:"\uc568\ubc94",site:"/setting/playlist"},{id:4,title:"\uc568\ubc94\ud3b8\uc9d1",site:"/setting/playlist/:id"},{id:5,title:"\uace1 \ub9ac\uc2a4\ud2b8",site:"/setting/musiclist"},{id:6,title:"\uc568\ubc94\ub178\ub798\ucd94\uac00",site:"/setting/addmusic/:id"},{id:7,title:"\uc568\ubc94\ucd94\uac00",site:"/setting/addalbum"}]),s=Object(m.a)(c,2),i=s[0];s[1];return Object(x.jsx)("div",{id:"nav",children:i.map((function(c){return Object(x.jsxs)(h.a,{exact:!0,path:c.site,children:[Object(x.jsx)("div",{style:{width:"20px"},children:"/main"===c.site?null:Object(x.jsx)("i",{onClick:function(){t.goBack()},className:"fas fa-chevron-left"})}),Object(x.jsx)("span",{children:"/main"===c.site?c.title=e.album[e.num].title:c.title}),Object(x.jsx)("div",{style:{width:"20px"},children:"/main"===c.site?Object(x.jsx)("i",{onClick:function(){t.push("/setting")},className:"fas fa-cog edits"}):"/setting/playlist/:id"===c.site?Object(x.jsx)("p",{className:"edits",children:"\uc644\ub8cc"}):null})]})}))})},D=function(e){var t=Object(n.useState)(!1),c=Object(m.a)(t,2),s=c[0],i=c[1];return Object(x.jsxs)("div",{id:"actions",children:[Object(x.jsx)("section",{className:"up-btn",children:Object(x.jsx)("i",{onClick:function(){e.changeAlbum.beforeAlbum()},className:"fas fa-chevron-up"})}),Object(x.jsxs)("section",{className:"middle-btn",children:[Object(x.jsx)("i",{onClick:function(){e.changeMusic.beforeMusic()},className:"fas fa-chevron-left"}),s?Object(x.jsx)("i",{onClick:function(){i(!s),e.pauseTheMusic()},className:"fas fa-pause play-btn pause"}):Object(x.jsx)("i",{onClick:function(){i(!s),e.playTheMusic()},className:"fas fa-play play-btn play"}),Object(x.jsx)("i",{onClick:function(){e.changeMusic.nextMusic()},className:"fas fa-chevron-right"})]}),Object(x.jsx)("section",{className:"bottom-btn",children:Object(x.jsx)("i",{onClick:function(){e.changeAlbum.nextAlbum()},className:"fas fa-chevron-down"})})]})},R=Object(h.g)((function(){var e=Object(h.e)(),t=Object(n.useState)({email:"",password:""}),c=Object(m.a)(t,2),s=c[0],i=c[1],a=s.email,l=s.password,j=function(e){i(Object(d.a)(Object(d.a)({},s),{},Object(b.a)({},e.target.name,e.target.value)))},O=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.auth().createUserWithEmailAndPassword(a,l).then((function(){console.log("\uac00\uc785 \uc131\uacf5!"),i({email:"",password:""}),e.replace("/")})).catch((function(){console.log("\uac00\uc785 \uc2e4\ud328!")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=Object(n.useState)([]),v=Object(m.a)(p,2),N=v[0],y=v[1],C=Object(n.useState)(0),R=Object(m.a)(C,2),U=R[0],Y=R[1],P=Object(n.useState)(0),T=Object(m.a)(P,2),B=T[0],F=T[1],J=Object(n.useState)([{id:0,title:"favorite",info:"",playList:[{title:"Ive got this feeling",singer:"Glen Check"},{title:"\ub78c\ubcf4\ub974\uae30\ub2c8",singer:"Han Yo Han"},{title:"paint it gold",singer:"Glen Check"}],active:!1},{id:1,title:"rock balad",info:"",playList:[{title:"\ub0a8\uc790\ub97c \ubab0\ub77c",singer:"\ubc84\uc988"},{title:"YOU",singer:"\uae40\uc0c1\ubbfc"},{title:"\uac00\uc2dc",singer:"buzz"}],active:!1}]),W=Object(m.a)(J,2),G=W[0],H=W[1],X=Object(n.useState)({id:3,name:"",playList:[{title:"",singer:""}],info:"",active:!1}),_=Object(m.a)(X,2),K=_[0],q=_[1],Q=K.id,V=(K.name,K.playList),Z=K.info,$=K.active,ee=Object(n.useState)(3),te=Object(m.a)(ee,2),ce=te[0],se=te[1],ne={nextAlbum:function(){if(!(B<G.length-1))return U;Y(U+1),ae.current.load()},beforeAlbum:function(){if(!(U>0))return U;Y(U-1),ae.current.load()}},ie={nextMusic:function(){if(!(B<N.length-1))return B;F(B+1),ae.current.load()},beforeMusic:function(){if(!(B>0))return B;F(B-1),ae.current.load()}},ae=Object(n.useRef)(),le=Object(n.useRef)(),re=Object(n.useState)(!1),je=Object(m.a)(re,2),oe=je[0],ue=je[1],be=Object(n.useState)(null),de=Object(m.a)(be,2),me=de[0],he=de[1],Oe=f.storage();return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(z,{player:ae,source:le,album:G,num:U,nextNum:B,music:N}),Object(x.jsx)(h.a,{exact:!0,path:"/",children:Object(x.jsx)(k,{login:function(t,c){f.auth().signInWithEmailAndPassword(t,c).then(Object(u.a)(o.a.mark((function t(){var c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return(s=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,f.firestore().collection("playList").get().then((function(e){e.forEach((function(e){return t.push(e.data())}))}));case 3:return e.next=5,y(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},c=function(){return s.apply(this,arguments)},i({email:"",password:""}),t.next=5,c();case 5:return console.log("\ub85c\uadf8\uc778\uc131\uacf5!"),t.next=8,e.push("/main");case 8:case"end":return t.stop()}}),t)})))).catch((function(){console.log("\ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694..")}))},account:s,onChange:j})}),Object(x.jsx)(h.a,{path:"/signup",children:Object(x.jsx)(g,{createUser:O,account:s,onChange:j})}),Object(x.jsxs)(h.a,{path:"/main",children:[Object(x.jsx)(w,{source:le,player:ae,album:G,num:U,nextNum:B,music:N}),Object(x.jsx)(D,{playTheMusic:function(){ae.current.play()},pauseTheMusic:function(){ae.current.pause()},changeAlbum:ne,changeMusic:ie})]}),Object(x.jsx)(h.a,{exact:!0,path:"/setting",children:Object(x.jsx)(S,{logout:function(){f.auth().signOut().then((function(){console.log("\ub85c\uadf8\uc544\uc6c3 \ud558\uc168\uc2b5\ub2c8\ub2e4."),e.replace("/")}))}})}),Object(x.jsx)(h.a,{path:"/setting/version",children:Object(x.jsx)(A,{})}),Object(x.jsx)(h.a,{path:"/setting/playlist/:id",children:Object(x.jsx)(M,{album:G,music:N})}),Object(x.jsx)(h.a,{path:"/setting/addmusic/:id",children:Object(x.jsx)(E,{music:N})}),Object(x.jsx)(h.a,{path:"/setting/musiclist",children:Object(x.jsx)(L,{onChangeMusic:function(e){he(e.target.files[0]),ue(!oe)},upLoadMusic:function(){var e=Oe.ref().child("music/"+me.name).put(me);e.on("state_changed",(function(e){console.log("\ub85c\ub529\uc911..",e)}),(function(e){console.log("\uc2e4\ud328\uc0ac\uc720: ",e)}),(function(){e.snapshot.ref.getDownloadURL().then((function(e){console.log("\uc5c5\ub85c\ub4dc \uc131\uacf5!"),ue(!oe),f.firestore().collection("playList").doc(me.name).set({title:me.name.split("-")[1],singer:me.name.split("-")[0],url:e})}))}))},on:oe,music:N})}),Object(x.jsx)(h.a,{path:"/setting/addalbum",children:Object(x.jsx)(I,{album:G,onChangeAlbum:function(e){var t=e.target,c=t.name,s=t.value;q(Object(d.a)(Object(d.a)({},K),{},Object(b.a)({},c,s)))},addAlbumState:K,addAlbum:function(){var e={title:test.name,id:Q,playList:V,info:Z,active:$};H([].concat(Object(r.a)(G),[e])),q({id:ce,name:"",playList:V,info:"",active:!1}),se(ce+1)}})})]})}));l.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(N.a,{basename:"cliche",children:Object(x.jsx)(R,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.0b798f30.chunk.js.map