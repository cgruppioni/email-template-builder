(this["webpackJsonpemail-builder"]=this["webpackJsonpemail-builder"]||[]).push([[0],{41:function(e,a,t){e.exports=t.p+"static/media/mail.f54212c1.svg"},49:function(e,a,t){e.exports=t(84)},50:function(e,a,t){},53:function(e,a,t){},57:function(e,a){},59:function(e,a){},7:function(e,a,t){e.exports={form:"styles_form__3IYdK",formGroup:"styles_formGroup__1YNNr",label:"styles_label__23RGZ",button:"styles_button__155hl",description:"styles_description__MDQa5",tinyUrlResponse:"styles_tinyUrlResponse__ZWkMF"}},84:function(e,a,t){"use strict";t.r(a);t(50),t(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(0),l=t.n(n),o=(t(53),t(41)),r=t.n(o),c=t(47),m=t(48),s=t(9),i=t(5),u=t(42),d=t.n(u),p=t(46),b=t(7),f=t.n(b),E=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:f.a.description},"Fill out this form and you will recieve a tiny.url to share an email template."),l.a.createElement(p.a,{onSubmit:function(e){var a=encodeURIComponent(e.body),t=encodeURIComponent(e.subject),n={url:"mailTo:".concat(e.mailTo,"?cc=").concat(e.cc,"&bcc=").concat(e.bcc,"&subject=").concat(t,"&body=").concat(a),alias:e.alias};d.a.shortenWithAlias(n).then((function(e){o(l.a.createElement("a",{href:"".concat(e),rel:"noopener noreferrer",target:"_blank"},e))}),(function(e){o("Please try a different alias.")}))},initialValues:{mailTo:"",cc:"",bcc:"",subject:"",body:"",alias:""}},(function(e){var a=e.handleSubmit,t=e.handleChange,n=e.values;return l.a.createElement(i.a,{noValidate:!0,onSubmit:a,className:f.a.form},l.a.createElement(i.a.Group,{as:s.a,md:"7",controlId:"validationFormikMailTo",className:f.a.formGroup},l.a.createElement(i.a.Label,{className:f.a.label},"Mail to"),l.a.createElement(i.a.Control,{type:"text",name:"mailTo",value:n.mailTo,onChange:t})),l.a.createElement(i.a.Group,{as:s.a,md:"7",controlId:"validationFormikCC",className:f.a.formGroup},l.a.createElement(i.a.Label,{className:f.a.label},"CC"),l.a.createElement(i.a.Control,{type:"text",name:"cc",value:n.cc,onChange:t})),l.a.createElement(i.a.Group,{as:s.a,md:"7",controlId:"validationFormikBCC",className:f.a.formGroup},l.a.createElement(i.a.Label,{className:f.a.label},"BCC"),l.a.createElement(i.a.Control,{type:"text",placeholder:"",name:"bcc",value:n.bcc,onChange:t})),l.a.createElement(i.a.Group,{as:s.a,md:"7",controlId:"validationFormikSubject",className:f.a.formGroup},l.a.createElement(i.a.Label,{className:f.a.label},"Subject"),l.a.createElement(i.a.Control,{type:"text",placeholder:"",name:"subject",value:n.subject,onChange:t})),l.a.createElement(i.a.Group,{as:s.a,md:"7",controlId:"validationFormikBody",className:f.a.formGroup},l.a.createElement(i.a.Label,{className:f.a.label},"Body"),l.a.createElement(i.a.Control,{as:"textarea",type:"text",placeholder:"",name:"body",value:n.body,onChange:t})),l.a.createElement(i.a.Group,{as:s.a,md:"7",controlId:"validationFormikBody",className:f.a.formGroup},l.a.createElement(i.a.Label,{className:f.a.label},"Alias*"),l.a.createElement(i.a.Control,{type:"text",placeholder:"",name:"alias",value:n.alias,onChange:t})),l.a.createElement(i.a.Group,{as:s.a,md:"7"},l.a.createElement("small",null,"*If you do not enter an alias, TinyUrl will return a random string")),l.a.createElement(m.a,{type:"submit",size:"lg",className:f.a.button},"Submit form"))})),l.a.createElement("div",{className:f.a.tinyUrlResponse},t))},h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:r.a,className:"App-logo",alt:"logo"})),l.a.createElement("main",null,l.a.createElement(E,null)),l.a.createElement("footer",null))},y=t(45);t.n(y).a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.ddf8aca6.chunk.js.map