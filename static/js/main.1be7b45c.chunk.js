(this["webpackJsonpreact-animals-photo-search-engine-app"]=this["webpackJsonpreact-animals-photo-search-engine-app"]||[]).push([[0],{48:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);t(47),t(48);var r,a,o,i,c,s,l,d,u,p,h,b,m,j,g,f,x,O,w,v,y=t(0),k=t.n(y),E=t(40),C=t.n(E),q=t(79),N=t(45),F=t(46),z=t(8),L=t(12),S=["aardvark","albatross","alligator","alpaca","ant","anteater","antelope","ape","armadillo","donkey","baboon","badger","barracuda","bat","bear","beaver","bee","bison","boar","buffalo","butterfly","camel","capybara","caribou","cassowary","cat","caterpillar","cattle","chamois","cheetah","chicken","chimpanzee","chinchilla","chough","clam","cobra","cockroach","cod","cormorant","coyote","crab","crane","crocodile","crow","curlew","deer","dinosaur","dog","dogfish","dolphin","dotterel","dove","dragonfly","duck","dugong","dunlin","eagle","echidna","eel","eland","elephant","elk","emu","falcon","ferret","finch","fish","flamingo","fly","fox","frog","gaur","gazelle","gerbil","giraffe","gnat","gnu","goat","goldfinch","goldfish","goose","gorilla","goshawk","grasshopper","grouse","guanaco","gull","hamster","hare","hawk","hedgehog","heron","herring","hippopotamus","hornet","horse","human","hummingbird","hyena","ibex","ibis","jackal","jaguar","jay","jellyfish","kangaroo","kingfisher","koala","kookabura","kouprey","kudu","lapwing","lark","lemur","leopard","lion","llama","lobster","locust","loris","louse","lyrebird","magpie","mallard","manatee","mandrill","mantis","marten","meerkat","mink","mole","mongoose","monkey","moose","mosquito","mouse","mule","narwhal","newt","nightingale","octopus","okapi","opossum","oryx","ostrich","otter","owl","oyster","panther","parrot","partridge","peafowl","pelican","penguin","pheasant","pig","pigeon","pony","porcupine","porpoise","quail","quelea","quetzal","rabbit","raccoon","rail","ram","rat","raven","red deer","red panda","reindeer","rhinoceros","rook","salamander","salmon","sand Dollar","sandpiper","sardine","scorpion","seahorse","seal","shark","sheep","shrew","skunk","snail","snake","sparrow","spider","spoonbill","squid","squirrel","starling","stingray","stinkbug","stork","swallow","swan","tapir","tarsier","termite","tiger","toad","trout","turkey","turtle","viper","vulture","wallaby","walrus","wasp","weasel","whale","wildcat","wolf","wolverine","wombat","woodcock","woodpecker","worm","wren","yak","zebra"],A=t(4),I=t(5),M=I.b.ul(r||(r=Object(A.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0; \n\n  li {\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    margin-bottom: -1px;\n    padding: 0.75rem 1.25rem;\n\n    :first-child {\n      border-top-left-radius: 0.25rem;\n      border-top-right-radius: 0.25rem;\n    }\n\n    :last-child {\n      border-bottom-right-radius: 0.25rem;\n      border-bottom-left-radius: 0.25rem;\n      margin-bottom: 0;\n    }\n\n    &:hover {\n      background-color: #e9e9e9;\n      cursor: pointer;\n    }\n\n    &.isActive {\n      background-color: #198754;\n      border-color: #198754;\n      color: white;\n    }\n  }\n"]))),D=t(1),P=k.a.memo((function(n){var e=n.list,t=n.activeElement,r=n.onMouseDown;return Object(D.jsx)(M,{children:e.map((function(n,e){return Object(D.jsx)("li",{role:"option",className:t===e?"isActive":null,onMouseDown:r,children:n},n)}))})})),B=I.b.form(a||(a=Object(A.a)(["\n  margin: 0 auto 50px;\n  width: 90%;\n  position: relative;\n\n  ul {\n    width: 100%;\n    position: absolute;\n    top: 40px;\n  } \n\n  input {\n    padding: 0.375rem 0.75rem;\n    width: 100%;\n    font-size: 1rem;\n    font-weight: 400;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    line-height: 1.5;\n    display: block;\n\n    &:disabled {\n      opacity: 0.65;\n    }\n  }\n\n  p {\n    position: absolute;\n  }\n\n  @media(min-width: 550px) {\n    width: 60%;\n  }\n"]))),G=t.p+"static/media/cross.486d740d.svg",Q=t.p+"static/media/arrow-down.f03a3cfe.svg",_=t.p+"static/media/arrow-left.dbc9a2c1.svg",R=t.p+"static/media/arrow-right.20002c1c.svg",T=I.b.button(o||(o=Object(A.a)(["  \n  width: 33px;\n  height: 33px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n\n  &:disabled {\n    opacity: .1;\n    cursor: auto;\n\n    &:hover {\n      opacity: .1;\n    }\n  }\n\n  &:focus {\n    opacity: 1;\n    outline: none;\n  }\n"]))),V=Object(I.b)(T)(i||(i=Object(A.a)(["  \n  background-image: url(",");\n  \n  ","\n\n  ","\n"])),G,(function(n){return"form"===n.component&&Object(I.a)(c||(c=Object(A.a)(["\n      width: 14px;\n      height: 14px;\n      position: absolute;\n      top: 50%;\n      right: 8px;\n      transform: translateY(-50%);\n\n      &:focus {\n        outline: -webkit-focus-ring-color auto 1px;\n      }\n  "])))}),(function(n){return"modal"===n.component&&Object(I.a)(s||(s=Object(A.a)(["\n      top: 3px;\n      right: 2px;\n      width: 20px;\n      height: 20px;\n      \n      @media(min-width: 600px) {\n        top: 10px;\n        right: 10px;\n      }\n  "])))})),K=Object(I.b)(T)(l||(l=Object(A.a)(["\n  background-image: url(",");\n  position: relative;\n  bottom: 5px;\n\n  &:focus {\n    outline: -webkit-focus-ring-color auto 1px;\n  }\n"])),Q),U=Object(I.b)(T)(d||(d=Object(A.a)(["  \n  background-image: url(",");\n  top: 50%;\n  left: -5px;\n\n  @media(min-width: 600px) {\n    left: 30px;\n  }\n\n  @media(min-width: 992px) {\n    left: 90px;\n  }\n"])),_),Y=Object(I.b)(T)(u||(u=Object(A.a)(["   \n  background-image: url(",");\n  top: 50%;\n  right: -5px;\n\n  @media(min-width: 600px) {\n    right: 30px;\n  }\n\n  @media(min-width: 992px) {\n    right: 90px;\n  } \n"])),R),J=function(n,e){return e.length<3?[]:n.filter((function(n){return n.toLowerCase().slice(0,e.length)===e.toLowerCase()}))},Z=k.a.memo((function(n){var e=n.history,t=n.match,r=n.setQuery,a=n.setPhotos,o=n.setPage,i=Object(y.useState)([]),c=Object(L.a)(i,2),s=c[0],l=c[1],d=Object(y.useState)(!1),u=Object(L.a)(d,2),p=u[0],h=u[1],b=Object(y.useState)(0),m=Object(L.a)(b,2),j=m[0],g=m[1],f=Object(y.useState)(""),x=Object(L.a)(f,2),O=x[0],w=x[1];return Object(D.jsxs)(B,{role:"search",children:[Object(D.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Photo:"}),Object(D.jsx)("input",{"aria-autocomplete":"list","aria-controls":"animals-listbox","aria-expanded":s.length?"true":"false",autoComplete:"off",id:"username",onBlur:function(){l([]),h(!1)},onFocus:function(n){l(J(S,n.target.value)),h(!0)},onChange:function(n){var e=n.target.value;l(J(S,e)),g(-1),w(e),h(!0)},onKeyDown:function(n){if("Escape"===n.code)g(-1),l([]),w("");else if("Enter"===n.code||"NumpadEnter"===n.code){n.preventDefault();var i=n.target.value,c=s[j]?s[j]:i;w(c),S.includes(c.toLowerCase())&&(h(!1),"/"!==e.location.pathname&&c!==t.params.query&&(a([]),o(1),r(c)),e.push("/photos/".concat(c)))}else"ArrowUp"===n.code?(j<=0&&g(s.length),g((function(n){return n-1}))):"ArrowDown"===n.code&&(j===s.length-1&&g(-1),g((function(n){return n+1})))},placeholder:"e.g Buffalo",role:"combobox",type:"text",value:O}),O?Object(D.jsx)(V,{onClick:function(){return w("")},component:"form",children:Object(D.jsx)("span",{className:"sr-only",children:"Clear"})}):null,p?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(P,{activeElement:j,"aria-label":"Animals",id:"animals-listbox",role:"listbox",onMouseDown:function(n){var i=n.target.innerText;w(i),"/"!==e.location.pathname&&i!==t.params.query&&(a([]),o(1),r(i)),e.push("/photos/".concat(i))},list:s}),0===s.length&&O.length>2?Object(D.jsx)("p",{children:"No matches!"}):null]}):null]})})),H=function(n){var e=n.history;return Object(D.jsxs)("main",{children:[Object(D.jsx)("h1",{children:"Unsplash - Animals"}),Object(D.jsx)("p",{children:"The internet's source of freely-usable animals images."}),Object(D.jsx)("p",{children:"Powered by creators everywhere."}),Object(D.jsx)(Z,{history:e})]})},W=t(28),X=t(17),$=t.n(X),nn=t(23),en=t(44),tn=t.n(en).a.create({baseURL:"https://api.unsplash.com/",headers:{Authorization:"Client-ID ".concat("dxjGIFqOGskBueOEpKeCQtZRMaGT3bvejFB8dVRuuQY")}}),rn=t(80),an=function(n,e){var t=function(t){n.current&&!n.current.contains(t.target)&&e(!1)};Object(y.useEffect)((function(){return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[])},on=I.b.div(p||(p=Object(A.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  \n  div {\n    margin: 0 auto;\n    display: block;\n    width: 2rem;\n    height: 2rem;\n    border: 0.25em solid currentColor;\n    border-right-color: transparent;\n    border-radius: 50%;\n    animation: spinner-border 0.75s linear infinite;    \n  }\n\n  @keyframes spinner-border {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),cn=function(){return Object(D.jsx)(on,{"aria-busy":"true",role:"progressbar",children:Object(D.jsx)("div",{children:Object(D.jsx)("span",{className:"sr-only",children:"Loading content..."})})})},sn=I.b.p(h||(h=Object(A.a)(["\n  color: red;\n  font-weight: 700;\n  height: 18px;\n  text-align: center;\n  width: 100%;\n"]))),ln=I.b.div(b||(b=Object(A.a)(["\n  background-color: #000;\n  height: 100vh;\n  left: 0;\n  opacity: .6;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1040;\n"]))),dn=I.b.div(m||(m=Object(A.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  display: flex;\n  align-items: center;\n"]))),un=I.b.div(j||(j=Object(A.a)(["\n  width: 81vw;\n  margin: 0 auto;\n  position: relative;\n\n  @media(min-width: 576px) {\n    width: 71vw;\n  }\n\n  @media(min-width: 992px) {\n    width: 63vw;\n  }\n"]))),pn=I.b.div(g||(g=Object(A.a)(["\n  background: linear-gradient(0deg,#7176F7 0%,#CA75F1 100%);\n  width: 100%;\n  height: 100%; \n"]))),hn=I.b.div(f||(f=Object(A.a)(["\n  min-height: 40vh;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.2);\n  border-radius: .3rem;\n  position: relative;\n  pointer-events: auto;  \n  outline: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media(min-width: 576px) {\n    min-height: 60vh;\n  }\n\n  @media(min-width: 992px) {\n    min-height: 90vh;\n  }\n"]))),bn=I.b.div(x||(x=Object(A.a)(["\n  padding: 10px;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(.3rem - 1px);\n  border-top-right-radius: calc(.3rem - 1px);\n\n  h2 {\n    margin: 0;\n    font-weight: 500;\n    font-size: 17px;\n  }\n"]))),mn=I.b.div(O||(O=Object(A.a)(["\n  position: relative;\n  max-height: 90vh;  \n\n  img {\n    padding: 4px;\n    min-height: 200px;\n\n    @media(min-width: 992px) {\n      min-height: 397px;\n    }\n  }\n\n  p {\n    margin: 0;\n    padding: 10px;\n    font-size: 15px;\n  }\n\n  @media(min-width: 550px) {\n    padding: 1rem;\n  }\n"]))),jn=I.b.div(w||(w=Object(A.a)(["\n  button {\n    filter: brightness(0) invert(1);\n    position: fixed;\n    opacity: .6;\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n"]))),gn=function(){var n=Object(nn.a)($.a.mark((function n(e){var t,r;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tn.get("https://api.unsplash.com/photos/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fn=k.a.memo((function(n){var e=n.history,t=n.match,r=n.index,a=n.setIndex,o=n.photos,i=n.setIsModalVisible,c=Object(y.useRef)(null);an(c,i);var s=Object(rn.a)(["singlePhoto",t.params.id],(function(){return gn(t.params.id)})),l=s.status,d=s.data,u=s.error;return Object(y.useEffect)((function(){var n=function(n){"Escape"===n.code&&i(!1)};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[]),Object(y.useEffect)((function(){gn(t.params.id)}),[t.params.id]),Object(D.jsxs)(D.Fragment,{children:["error"===l?Object(D.jsxs)(sn,{children:["Error:"," ",u.message]}):null,Object(D.jsx)(ln,{"aria-hidden":"true"}),Object(D.jsx)(dn,{tabIndex:-1,children:Object(D.jsx)(un,{children:Object(D.jsx)(pn,{ref:c,children:Object(D.jsxs)(hn,{children:[d?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(bn,{children:Object(D.jsxs)("h2",{children:[Object(D.jsx)("span",{className:"sr-only",children:"Author of the picture:"}),d.user.first_name," ",d.user.last_name]})}),Object(D.jsxs)(mn,{children:[Object(D.jsx)("img",{src:d.urls.regular,alt:d.alt_description}),d.location.title?Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{className:"sr-only",children:"Location of the picture:"}),null===d||void 0===d?void 0:d.location.title]}):null]})]}):Object(D.jsx)(cn,{}),Object(D.jsxs)(jn,{children:[Object(D.jsx)(V,{onClick:function(){return i(!1)},component:"modal",children:Object(D.jsx)("span",{className:"sr-only",children:"Close"})}),Object(D.jsx)(U,{disabled:0===r,onClick:function(){a((function(n){return n-1}));var n=r-1;e.push("/photos/".concat(t.params.query,"/").concat(o[n].id))},children:Object(D.jsx)("span",{className:"sr-only",children:"Previous photos"})}),Object(D.jsx)(Y,{disabled:r===o.length-1,onClick:function(){a((function(n){return n+1}));var n=r+1;e.push("/photos/".concat(t.params.query,"/").concat(o[n].id))},children:Object(D.jsx)("span",{className:"sr-only",children:"Next photos"})})]})]})})})})]})})),xn=I.b.div(v||(v=Object(A.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  min-height: 100vh;\n\n  div {\n    display: block;\n    padding: 8px;\n    cursor: pointer;\n  }\n\n  @media(min-width: 550px) {\n    div {\n      flex-basis: 50%;\n      max-width: 50%;\n      height: 300px;\n    }\n  }\n\n  @media(min-width: 800px) {\n    div {\n      flex-basis: 33.3333%;\n      max-width: 33.3333%;\n      height: 350px;\n    }\n  }\n"]))),On=function(){var n=Object(nn.a)($.a.mark((function n(e,t){var r,a;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,tn.get("https://api.unsplash.com/search/photos/?page=".concat(t,"&per_page=12&query=").concat(e,"&client_id=dxjGIFqOGskBueOEpKeCQtZRMaGT3bvejFB8dVRuuQY"));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),wn=function(n){var e=n.history,t=n.match,r=Object(N.b)(),a=Object(y.useState)(0),o=Object(L.a)(a,2),i=o[0],c=o[1],s=Object(y.useState)(1),l=Object(L.a)(s,2),d=l[0],u=l[1],p=Object(y.useState)(t.params.query),h=Object(L.a)(p,2),b=h[0],m=h[1],j=Object(y.useState)([]),g=Object(L.a)(j,2),f=g[0],x=g[1],O=Object(y.useState)(!1),w=Object(L.a)(O,2),v=w[0],k=w[1],E=Object(rn.a)(["photos",b,d],(function(){return On(b,d)})),C=E.status,q=E.data,F=E.error;return Object(y.useEffect)((function(){(null===q||void 0===q?void 0:q.total_pages)>=d&&(r.prefetchQuery(["photos",b,d+1],(function(){return On(b,d+1)})),x((function(n){return[].concat(Object(W.a)(n),Object(W.a)(q.results))})))}),[q,d,r]),Object(D.jsxs)("main",{children:[Object(D.jsx)("h1",{children:t.params.query}),Object(D.jsx)(Z,{history:e,match:t,setQuery:m,setPhotos:x,setPage:u}),"loading"===C?Object(D.jsx)(cn,{}):null,"error"===C?Object(D.jsxs)(sn,{children:["Error:"," ",F.message]}):null,q?Object(D.jsx)(xn,{children:f.map((function(n,t){return Object(D.jsxs)("div",{onClick:function(){c(t),k(!0),e.push("/photos/".concat(b,"/").concat(n.id))},children:[Object(D.jsx)("span",{className:"sr-only",children:"Get more details about this picture"}),Object(D.jsx)("img",{src:n.urls.small,alt:n.alt_description})]},n.id)}))}):null,v?Object(D.jsx)(fn,{history:e,match:t,index:i,setIndex:c,photos:f,setIsModalVisible:k}):null,q?Object(D.jsx)(K,{onClick:function(){return u((function(n){return n+1}))},disabled:q.total<=f.length,children:Object(D.jsx)("span",{className:"sr-only",children:"More photos"})}):null]})},vn=new q.a,yn=function(){return Object(D.jsx)(N.a,{client:vn,children:Object(D.jsx)(F.a,{basename:"/",children:Object(D.jsxs)(z.c,{children:[Object(D.jsx)(z.a,{exact:!0,path:"/",component:H}),Object(D.jsx)(z.a,{path:"/photos/:query/:id?",component:wn})]})})})};C.a.render(Object(D.jsx)(k.a.StrictMode,{children:Object(D.jsx)(yn,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.1be7b45c.chunk.js.map