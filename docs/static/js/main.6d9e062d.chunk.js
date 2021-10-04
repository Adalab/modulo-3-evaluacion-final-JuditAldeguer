(this["webpackJsonpmi-primera-web"]=this["webpackJsonpmi-primera-web"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(14),s=c.n(n),r=c(8),i=c(10),l=c(2),j=c(45),o=function(){return fetch("//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))},d=(c(21),c(22),c.p+"static/media/Rick_and_Morty_-_logo.de13d484.png"),h=c(0),u=function(e){return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("img",{className:"header--img",src:d,alt:"Rick and Morty"})})},b=(c(24),function(e){return Object(h.jsxs)("footer",{children:["Copyright\xa9 Made with \u2764\ufe0f by Judit Aldeguer using"," ",Object(h.jsx)("a",{href:"https://es.reactjs.org/",rel:"noreferrer",target:"_blank",children:"React"})," "]})}),x=(c(25),c(26),function(e){return Object(h.jsx)("button",{className:"button_back",title:"atr\xe1s",onClick:function(e){e.preventDefault(),window.history.back()},children:"Volver atr\xe1s"})}),O=function(e){return Object(h.jsx)("div",{className:"modal",children:Object(h.jsx)("div",{className:"modal__dialog",children:Object(h.jsxs)("div",{className:"modal__content",children:[Object(h.jsx)(x,{className:"button_back"}),Object(h.jsx)("header",{className:"modal__header",children:Object(h.jsx)("h2",{className:"modal__title",children:e.title})}),Object(h.jsx)("section",{children:e.children})]})})})},m=(c(27),function(e){return void 0===e.character?Object(h.jsx)(O,{title:"Usuario no encontrado",children:Object(h.jsx)("p",{className:"detail",children:"Revisa que la direcci\xf3n sea correcta"})}):Object(h.jsx)(O,{title:e.character.name,children:Object(h.jsxs)("article",{className:"detail",children:[Object(h.jsx)("img",{className:"detail--img",src:e.character.image,alt:"personaje"}),Object(h.jsxs)("ul",{className:"detail--list",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Status: "}),"Dead"===e.character.status?Object(h.jsx)("i",{class:"fas fa-skull-crossbones"}):"Alive"===e.character.status?Object(h.jsx)("i",{class:"fas fa-heartbeat"}):Object(h.jsx)("i",{class:"fas fa-question-circle"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Species: "}),e.character.species]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Gender: "}),e.character.gender]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Location: "}),e.character.location.name]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Origin: "}),e.character.species]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Episodes: "}),e.character.episode.length]})]})]})})}),p=(c(28),function(e){return Object(h.jsxs)("label",{className:"label",htmlFor:e.id,children:[e.labelText,Object(h.jsx)("input",{className:"input",id:e.id,type:e.inputType,name:e.inputName,placeholder:e.inputPlaceholder,value:e.searchWord,onChange:function(t){e.handleChange(e.inputName,t.target.value)}})]})});p.defaultProps={inputType:"text",placeholder:"Escribe aqui...",labelText:"Escribe aqui: "};var f=p,v=(c(29),function(e){return Object(h.jsxs)("select",{name:e.inputName,id:e.id,className:"select_input",htmlFor:e.id,onChange:function(t){e.handleChange(e.inputName,t.target.value)},children:[Object(h.jsx)("option",{value:e.value1,disabled:!0,selected:!0,children:e.optionText1}),Object(h.jsxs)("option",{value:e.value2,children:[" ",e.optionText2]}),Object(h.jsxs)("option",{value:e.value3,children:[" ",e.optionText3]}),Object(h.jsxs)("option",{value:e.value4,children:[" ",e.optionText4]})]})}),g=(c(30),function(e){return Object(h.jsxs)("form",{className:"form",action:"/",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)("h1",{className:"form--h1",children:"Wellcome!!"}),Object(h.jsx)("h2",{className:"form--h2",children:"Here you can find your favorites characters"}),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)(f,{labelText:"Search name: ",id:"search-word",inputName:"search-word",value:e.searchWord,handleChange:e.handleSearchWord}),Object(h.jsx)(f,{labelText:"Search species: ",id:"search-species",inputName:"search-species",value:e.searchWord,handleChange:e.handleSearchWord})]}),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)(v,{id:"get-gender",inputName:"get-gender",value1:"all",optionText1:"Chose a GENDER",value2:"Male",optionText2:"Male",value3:"Female",optionText3:"Female",value4:"unknown",optionText4:"Unknown",handleChange:e.handleSearchWord}),Object(h.jsx)(v,{id:"get-status",inputName:"get-status",value1:"all",optionText1:"Chose a STATUS",value2:"Alive",optionText2:"Alive",value3:"Dead",optionText3:"Dead",value4:"unknown",optionText4:"Unknown",handleChange:e.handleSearchWord})]})]})}),N=(c(31),c(32),function(e){return Object(h.jsx)(r.b,{to:"./character/".concat(e.character.id),title:"Detail",activeClassName:"selected-link",children:Object(h.jsxs)("article",{className:"card",children:[Object(h.jsx)("img",{src:e.character.image,alt:"personaje"}),Object(h.jsx)("h2",{children:Object(h.jsx)("strong",{children:e.character.name})}),Object(h.jsx)("p",{children:e.character.species})]})})}),T=function(e){return Object(h.jsx)("ul",{className:"list",children:e.data.map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)(N,{character:t,characterId:e.characterId})},t.id)}))})},_=(c(41),function(){return Object(h.jsx)("div",{className:"not_found_page",children:Object(h.jsx)(O,{title:"ERROR: La pagina que buscas no existe",children:Object(h.jsxs)("p",{children:["Revisa que la direcci\xf3n de la p\xe1gina",Object(h.jsx)("span",{className:"cursiva",children:" (url)"})," sea correcta."]})})})}),k=(c(42),function(e){return e.loading?Object(h.jsxs)("div",{className:"lds-spinner",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]}):null});var w=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(c),r=Object(i.a)(s,2),d=r[0],x=r[1],O=Object(a.useState)(""),p=Object(i.a)(O,2),f=p[0],v=p[1],N=Object(a.useState)(!1),w=Object(i.a)(N,2),C=w[0],S=w[1];Object(a.useEffect)((function(){S(!0),o().then((function(e){e.map((function(e){return e.id=Object(j.a)()}));n(e),S(!1),v(" ")}))}),[]),Object(a.useEffect)((function(){E()}),[f]);var y=Object(l.f)("/character/:characterId"),I=null!==y?y.params.characterId:"",W=c.find((function(e){return e.id===I}));console.log("CharacterID: ".concat(I)),console.log(W);var E=function(){var e=c.filter((function(e){return e.name.toLocaleLowerCase().includes(f.toLocaleLowerCase())}));x(e)};return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)(u,{productId:"321"}),Object(h.jsxs)("main",{children:[Object(h.jsx)(k,{loading:C}),Object(h.jsx)(g,{value:f,handleSearchWord:function(e,t){v(t)}}),Object(h.jsx)(T,{data:d,searchWord:f,characterId:I}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0}),Object(h.jsx)(l.a,{path:"/character/:characterId",children:Object(h.jsx)(m,{character:W,characterId:I})}),Object(h.jsx)(l.a,{children:Object(h.jsx)(_,{})})]})]}),Object(h.jsx)(b,{})]})};s.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6d9e062d.chunk.js.map