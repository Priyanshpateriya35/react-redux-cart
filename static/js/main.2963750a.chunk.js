(this["webpackJsonpreact-redux-cart"]=this["webpackJsonpreact-redux-cart"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);c(0);var r=c(3),a=c.n(r),n=c(2),s=c(1);var i=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container m-5 p-5",children:[Object(s.jsx)("h1",{className:"Heading-cart",children:"Shopping Cart"}),Object(s.jsxs)("div",{className:"card-wrapper",children:[Object(s.jsx)("div",{className:"img-wrapper img",children:Object(s.jsx)("img",{src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000",alt:"not found"})}),Object(s.jsxs)("div",{className:"text-decorate",children:[Object(s.jsx)("span",{children:"I-Phone"}),Object(s.jsx)("span",{children:"Price: $215.23"})]}),Object(s.jsxs)("div",{className:"btn-wrapper button",children:[Object(s.jsx)("button",{className:"first-bt",onClick:function(){e.addToCartHandler({price:1e3,name:"I-Phone11"})},children:"Add To Cart "}),Object(s.jsx)("button",{onClick:function(){e.removeToCartHandler()},className:"second-bt",children:"Remove To Cart"})]})]})]})})},d="ADD_TO_CART",o="REMOVE_TO_CART",j=Object(n.b)((function(e){return{cardData:e.cartItems}}),(function(e){return{addToCartHandler:function(t){return e(function(e){return{type:d,data:e}}(t))},removeToCartHandler:function(t){return e({type:o})}}}))(i);var l=function(e){return console.log("Header:",e.cardData),Object(s.jsx)("div",{className:"Cartshop",children:Object(s.jsx)("span",{children:e.cardData.length})})},u=Object(n.b)((function(e){return{cardData:e.cartItems}}),(function(e){return{}}))(l);c(20);var b=function(){return Object(s.jsxs)("div",{className:"App-header",children:[Object(s.jsx)(u,{}),Object(s.jsx)(j,{})]})},p=c(4),h=c(7);var m=Object(p.a)({cartItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return[].concat(Object(h.a)(e),[{cardData:t.data}]);case o:return e.pop(),Object(h.a)(e);default:return e}}}),O=Object(p.b)(m);a.a.render(Object(s.jsx)(n.a,{store:O,children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2963750a.chunk.js.map