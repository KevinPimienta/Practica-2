(this.webpackJsonpfirebase0=this.webpackJsonpfirebase0||[]).push([[0],{11:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(3),r=a.n(i),c=a(21),o=a.n(c),s=(a(29),a(22)),d=a(12),l=a(4),j=a(13),b=a(14),h=a(17),m=a(16),p=(a(11),a(37)),u=(a(20),function(e){return Object(n.jsx)("div",{className:"Form",children:Object(n.jsxs)("form",{onSubmit:e.enviar,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"dex",children:"Pokedex:"}),Object(n.jsx)("input",{type:"text",placeholder:"Ejm. 999",onChange:e.guardarCambios,value:e.pokemon.dex,name:"dex",disabled:e.desactivado})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"nombre",children:"Nombre:"}),Object(n.jsx)("input",{type:"text",placeholder:"Ejm. Pikachu",onChange:e.guardarCambios,value:e.pokemon.nombre,name:"nombre"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"tipo",children:"Tipo:"}),Object(n.jsx)("input",{type:"text",placeholder:"Ej. Agua",onChange:e.guardarCambios,value:e.pokemon.tipo,name:"tipo"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"region",children:"Region:"}),Object(n.jsx)("input",{type:"text",placeholder:"Ej. Kanto",onChange:e.guardarCambios,value:e.pokemon.region,name:"region"})]}),Object(n.jsx)(p.a,{children:"Enviar"})]})})}),O=a(36),x=function(e){return Object(n.jsx)("div",{className:"List",children:0===e.lista.length?Object(n.jsx)("p",{children:"No hay alumnos"}):Object(n.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Pokedex"}),Object(n.jsx)("th",{children:"Nombre"}),Object(n.jsx)("th",{children:"Tipo"}),Object(n.jsx)("th",{children:"Region"}),Object(n.jsx)("th",{}),Object(n.jsx)("th",{})]})}),Object(n.jsx)("tbody",{children:e.lista.map((function(t,a){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.dex}),Object(n.jsx)("td",{children:t.nombre}),Object(n.jsx)("td",{children:t.tipo}),Object(n.jsx)("td",{children:t.region}),Object(n.jsx)("td",{children:Object(n.jsx)(p.a,{onClick:function(){return e.eliminar(t.matricula)},variant:"danger",children:"Eliminar"})}),Object(n.jsx)("td",{children:Object(n.jsx)(p.a,{onClick:function(){return e.modificar(t.matricula)},variant:"success",children:"Modificar"})})]},a)}))})]})})},f=a.p+"static/media/pokeball.ed58ec53.png",g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("p",{children:" Practica 2 - Cisneros Acosta - Pimienta Castillo "}),Object(n.jsx)("img",{src:f,className:"App-logo",alt:"logo"})]})}}]),a}(i.Component),v=a(18),k=(a(31),v.a.apps.length?v.a.app():v.a.initializeApp({apiKey:"AIzaSyApYE4E7C88MFk0oGpkXMfVGEYw-bWQdhM",authDomain:"reactfirebase-57601.firebaseapp.com",databaseURL:"https://reactfirebase-57601.firebaseio.com",projectId:"reactfirebase-57601",storageBucket:"reactfirebase-57601.appspot.com",messagingSenderId:"493093172213",appId:"1:493093172213:web:ed1919072ca4bd81f326bc",measurementId:"G-7J8183TD31"})),C=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).guardarCambios=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{pokemon:Object(l.a)(Object(l.a)({},e.state.pokemon),{},Object(d.a)({},t.target.name,t.target.value))}))},e.eliminar=function(t){k.database().ref("Pokemon/"+t).set(null).then((function(){}));var a=e.state.lista.filter((function(e){return e.dex!==t}));e.setState(Object(l.a)(Object(l.a)({},e.state),{},{lista:a}))},e.modificar=function(t){var a=e.state.lista.find((function(e){return e.dex===t}));e.setState(Object(l.a)(Object(l.a)({},e.state),{},{pokemon:{dex:a.dex,nombre:a.nombre,tipo:a.tipo,region:a.region},desactivado:!0}))},e.enviar=function(t){t.preventDefault();var a=e.state.pokemon,n=a.dex,i=a.nombre,r=a.tipo,c=a.region;if(0===n.length&&0===i.length&&0===r.length&&0===c.length)alert("Vacio.");else{k.database().ref("Pokemon/"+n).update(e.state.pokemon).then((function(){alert("Guardado.")}));var o=e.state.lista;!0===e.state.desactivado&&(o=o.filter((function(e){return e.dex!==n}))),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{lista:[].concat(Object(s.a)(o),[e.state.pokemon]),pokemon:{dex:"",nombre:"",tipo:"",region:""},desactivado:!1}))}},e.state={pokemon:{dex:"",nombre:"",tipo:"",region:""},lista:[],desactivado:!1},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.database().ref("Pokemon").on("value",(function(t){var a=[];t.forEach((function(e){a.push({dex:e.key,nombre:e.val().nombre,tipo:e.val().tipo,region:e.val().region})})),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{lista:a}))}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(g,{}),Object(n.jsxs)("div",{className:"Containers",children:[Object(n.jsx)(u,{enviar:this.enviar,guardarCambios:this.guardarCambios,pokemon:this.state.pokemon,desactivado:this.state.desactivado}),Object(n.jsx)(x,{lista:this.state.lista,eliminar:this.eliminar,modificar:this.modificar})]})]})}}]),a}(i.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),y()}},[[35,1,2]]]);
//# sourceMappingURL=main.18ad034e.chunk.js.map