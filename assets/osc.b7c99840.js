var ot=Object.defineProperty,st=Object.defineProperties;var it=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var be=(g,d,p)=>d in g?ot(g,d,{enumerable:!0,configurable:!0,writable:!0,value:p}):g[d]=p,Se=(g,d)=>{for(var p in d||(d={}))at.call(d,p)&&be(g,p,d[p]);if(ke)for(var p of ke(d))ut.call(d,p)&&be(g,p,d[p]);return g},Oe=(g,d)=>st(g,it(d));import{B as H,P as ct}from"./index.b842cc8b.js";var Ee={exports:{}};(function(g,d){(function(p,u){g.exports=u()})(H,function(){function p(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,t)}return n}function u(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(t){R(r,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))})}return r}function f(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function N(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function l(r,e,n){return e&&N(r.prototype,e),n&&N(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}function R(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function k(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&T(r,e)}function h(r){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}function T(r,e){return(T=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(r,e)}function F(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r)}function y(r){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var n,t=h(r);if(e){var o=h(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return F(this,n)}}function Pe(r,e){for(;!Object.prototype.hasOwnProperty.call(r,e)&&(r=h(r))!==null;);return r}function m(){return(m=typeof Reflect!="undefined"&&Reflect.get?Reflect.get:function(r,e,n){var t=Pe(r,e);if(t){var o=Object.getOwnPropertyDescriptor(t,e);return o.get?o.get.call(arguments.length<3?r:n):o.value}}).apply(this,arguments)}function b(r){return Number(r)===r&&r%1==0}function ee(r){return Number(r)===r}function v(r){return typeof r=="string"}function te(r){return typeof r=="boolean"}function ne(r){return r===1/0}function D(r){return Object.prototype.toString.call(r)==="[object Array]"}function z(r){return Object.prototype.toString.call(r)==="[object Object]"}function j(r){return typeof r=="function"}function re(r){return r instanceof Uint8Array}function Ae(r){return r instanceof Date}function A(r){return r===void 0}function oe(r){return r===null}function V(r){return r+3&-4}function se(r){return Object.prototype.hasOwnProperty.call(typeof H!="undefined"?H:window,r)}function Ie(r){return r.buffer?new DataView(r.buffer):r instanceof ArrayBuffer?new DataView(r):new DataView(new Uint8Array(r))}function ie(r){if(b(r))return"i";if(e=r,Number(e)===e&&e%1!=0)return"f";if(v(r))return"s";if(re(r))return"b";if(te(r))return r?"T":"F";if(oe(r))return"N";if(ne(r))return"I";var e;throw new Error("OSC typeTag() found unknown value type")}function L(r){var e="";if(D(r))return"/".concat(r.join("/"));if(v(r))return(e=r).length>1&&e[e.length-1]==="/"&&(e=e.slice(0,e.length-1)),e.length>1&&e[0]!=="/"&&(e="/".concat(e)),e;throw new Error("OSC prepareAddress() needs addresses of type array or string")}function ae(r){if(!v(r))throw new Error("OSC prepareRegExPattern() needs strings");return r.replace(/\./g,"\\.").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\{/g,"(").replace(/\}/g,")").replace(/,/g,"|").replace(/\[!/g,"[^").replace(/\?/g,".").replace(/\*/g,".*")}var ue=function(){function r(){f(this,r),this.data=[],this.byteLength=0}return l(r,[{key:"add",value:function(e){if(te(e)||ne(e)||oe(e))return this;var n=e.pack();return this.byteLength+=n.byteLength,this.data.push(n),this}},{key:"merge",value:function(){var e=new Uint8Array(this.byteLength),n=0;return this.data.forEach(function(t){e.set(t,n),n+=t.byteLength}),e}}]),r}(),C=function(){function r(e){f(this,r),this.value=e,this.offset=0}return l(r,[{key:"pack",value:function(e,n){if(!e||!n)throw new Error("OSC Atomic cant't be packed without given method or byteLength");var t=new Uint8Array(n),o=new DataView(t.buffer);if(A(this.value))throw new Error("OSC Atomic cant't be encoded with empty value");return o[e](this.offset,this.value,!1),t}},{key:"unpack",value:function(e,n,t){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(!(e&&n&&t))throw new Error("OSC Atomic cant't be unpacked without given dataView, method or byteLength");if(!(e instanceof DataView))throw new Error("OSC Atomic expects an instance of type DataView");return this.value=e[n](o,!1),this.offset=o+t,this.offset}}]),r}(),U=function(r){k(n,r);var e=y(n);function n(t){if(f(this,n),t&&!b(t))throw new Error("OSC AtomicInt32 constructor expects value of type number");return e.call(this,t)}return l(n,[{key:"pack",value:function(){return m(h(n.prototype),"pack",this).call(this,"setInt32",4)}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return m(h(n.prototype),"unpack",this).call(this,t,"getInt32",4,o)}}]),n}(C),ce="utf-8";function De(r){if(se("Buffer"))return Buffer.from(r).toString(ce);if(se("TextDecoder"))return new TextDecoder(ce).decode(new Int8Array(r));for(var e="",n=0;n<r.length;n+=65537)e+=String.fromCharCode.apply(null,r.slice(n,n+65537));return e}var x,S=function(r){k(n,r);var e=y(n);function n(t){if(f(this,n),t&&!v(t))throw new Error("OSC AtomicString constructor expects value of type string");return e.call(this,t)}return l(n,[{key:"pack",value:function(){if(A(this.value))throw new Error("OSC AtomicString can not be encoded with empty value");for(var t="".concat(this.value,"\0"),o=V(t.length),i=new Uint8Array(o),s=0;s<t.length;s+=1)i[s]=t.charCodeAt(s);return i}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(t instanceof DataView))throw new Error("OSC AtomicString expects an instance of type DataView");for(var i,s=o,a=[];s<t.byteLength;s+=1){if((i=t.getUint8(s))===0){s+=1;break}a.push(i)}if(s===t.length)throw new Error("OSC AtomicString found a malformed OSC string");return this.offset=V(s),this.value=De(a),this.offset}}]),n}(C),fe=2208988800,le=4294967296,G=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(f(this,r),!b(e)||!b(n))throw new Error("OSC Timetag constructor expects values of type integer number");this.seconds=e,this.fractions=n}return l(r,[{key:"timestamp",value:function(e){var n;if(typeof e=="number"){n=e/1e3;var t=Math.floor(n);return this.seconds=t+fe,this.fractions=Math.round(le*(n-t)),e}return 1e3*((n=this.seconds-fe)+Math.round(this.fractions/le))}}]),r}(),B=function(r){k(n,r);var e=y(n);function n(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Date.now();f(this,n);var o=new G;return t instanceof G?o=t:b(t)?o.timestamp(t):Ae(t)&&o.timestamp(t.getTime()),e.call(this,o)}return l(n,[{key:"pack",value:function(){if(A(this.value))throw new Error("OSC AtomicTimetag can not be encoded with empty value");var t=this.value,o=t.seconds,i=t.fractions,s=new Uint8Array(8),a=new DataView(s.buffer);return a.setInt32(0,o,!1),a.setInt32(4,i,!1),s}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(t instanceof DataView))throw new Error("OSC AtomicTimetag expects an instance of type DataView");var i=t.getUint32(o,!1),s=t.getUint32(o+4,!1);return this.value=new G(i,s),this.offset=o+8,this.offset}}]),n}(C),he=function(r){k(n,r);var e=y(n);function n(t){if(f(this,n),t&&!re(t))throw new Error("OSC AtomicBlob constructor expects value of type Uint8Array");return e.call(this,t)}return l(n,[{key:"pack",value:function(){if(A(this.value))throw new Error("OSC AtomicBlob can not be encoded with empty value");var t=V(this.value.byteLength),o=new Uint8Array(t+4);return new DataView(o.buffer).setInt32(0,this.value.byteLength,!1),o.set(this.value,4),o}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(t instanceof DataView))throw new Error("OSC AtomicBlob expects an instance of type DataView");var i=t.getInt32(o,!1);return this.value=new Uint8Array(t.buffer,o+4,i),this.offset=V(o+4+i),this.offset}}]),n}(C),pe=function(r){k(n,r);var e=y(n);function n(t){if(f(this,n),t&&!ee(t))throw new Error("OSC AtomicFloat32 constructor expects value of type float");return e.call(this,t)}return l(n,[{key:"pack",value:function(){return m(h(n.prototype),"pack",this).call(this,"setFloat32",4)}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return m(h(n.prototype),"unpack",this).call(this,t,"getFloat32",4,o)}}]),n}(C),de=function(r){k(n,r);var e=y(n);function n(t){if(f(this,n),t&&!ee(t))throw new Error("OSC AtomicFloat64 constructor expects value of type float");return e.call(this,t)}return l(n,[{key:"pack",value:function(){return m(h(n.prototype),"pack",this).call(this,"setFloat64",8)}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return m(h(n.prototype),"unpack",this).call(this,t,"getFloat64",8,o)}}]),n}(C),je=BigInt("9223372036854775807"),xe=BigInt("-9223372036854775808"),ge=function(r){k(n,r);var e=y(n);function n(t){if(f(this,n),t&&typeof t!="bigint")throw new Error("OSC AtomicInt64 constructor expects value of type BigInt");if(t&&(t<xe||t>je))throw new Error("OSC AtomicInt64 value is out of bounds");var o;return t&&(o=BigInt.asIntN(64,t)),e.call(this,o)}return l(n,[{key:"pack",value:function(){return m(h(n.prototype),"pack",this).call(this,"setBigInt64",8)}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return m(h(n.prototype),"unpack",this).call(this,t,"getBigInt64",8,o)}}]),n}(C),Be=BigInt("18446744073709551615"),ve=function(r){k(n,r);var e=y(n);function n(t){if(f(this,n),t&&typeof t!="bigint")throw new Error("OSC AtomicUInt64 constructor expects value of type BigInt");if(t&&(t<0||t>Be))throw new Error("OSC AtomicUInt64 value is out of bounds");var o;return t&&(o=BigInt.asUintN(64,t)),e.call(this,o)}return l(n,[{key:"pack",value:function(){return m(h(n.prototype),"pack",this).call(this,"setBigUint64",8)}},{key:"unpack",value:function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return m(h(n.prototype),"unpack",this).call(this,t,"getBigUint64",8,o)}}]),n}(C),Z=!0,q=!1,J=null,K=1/0,Q=function(){function r(e,n){var t=this;if(f(this,r),this.offset=0,this.address="",this.types="",this.args=[],!A(e)){if(!v(e)&&!D(e))throw new Error("OSC Message constructor first argument (address) must be a string or array");this.address=L(e)}if(!A(n)){if(!D(n))throw new Error("OSC Message constructor second argument (args) must be an array");n.forEach(function(o){return t.add(o.type,o.value)})}}return l(r,[{key:"add",value:function(e,n){if(A(e))throw new Error("OSC Message needs a valid OSC Atomic Data Type");e==="N"?this.args.push(J):e==="T"?this.args.push(Z):e==="F"?this.args.push(q):e==="I"?this.args.push(K):this.args.push(n),this.types+=e}},{key:"pack",value:function(){var e=this;if(this.address.length===0||this.address[0]!=="/")throw new Error("OSC Message has an invalid address");var n=new ue;if(n.add(new S(this.address)),n.add(new S(",".concat(this.types))),this.args.length>0){var t;if(this.args.length>this.types.length)throw new Error("OSC Message argument and type tag mismatch");this.args.forEach(function(o,i){var s=e.types[i];if(s==="i")t=new U(o);else if(s==="h")t=new ge(o);else if(s==="t")t=new ve(o);else if(s==="f")t=new pe(o);else if(s==="d")t=new de(o);else if(s==="s")t=new S(o);else if(s==="b")t=new he(o);else if(s==="T")t=Z;else if(s==="F")t=q;else if(s==="N")t=J;else{if(s!=="I")throw new Error("OSC Message found unknown argument type");t=K}n.add(t)})}return n.merge()}},{key:"unpack",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(e instanceof DataView))throw new Error("OSC Message expects an instance of type DataView.");var t=new S;t.unpack(e,n);var o=new S;if(o.unpack(e,t.offset),t.value.length===0||t.value[0]!=="/")throw new Error("OSC Message found malformed or missing address string");if(o.value.length===0&&o.value[0]!==",")throw new Error("OSC Message found malformed or missing type string");for(var i,s,a=o.offset,c=[],w=1;w<o.value.length;w+=1){if(i=null,(s=o.value[w])==="i")i=new U;else if(s==="h")i=new ge;else if(s==="t")i=new ve;else if(s==="f")i=new pe;else if(s==="d")i=new de;else if(s==="s")i=new S;else if(s==="b")i=new he;else if(s==="T")c.push(Z);else if(s==="F")c.push(q);else if(s==="N")c.push(J);else{if(s!=="I")throw new Error("OSC Message found unsupported argument type");c.push(K)}i&&(a=i.unpack(e,a),c.push(i.value))}return this.offset=a,this.address=t.value,this.types=o.value,this.args=c,this.offset}}]),r}(),E=function(r){k(n,r);var e=y(n);function n(){var t,o,i;f(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return a.length>0&&(o=a.shift()),a.length>0&&a[0]instanceof Array&&(i=a.shift()),t=e.call(this,o,i),a.length>0&&(t.types=a.map(function(w){return ie(w)}).join(""),t.args=a),t}return l(n,[{key:"add",value:function(t){m(h(n.prototype),"add",this).call(this,ie(t),t)}}]),n}(Q),_="#bundle",I=function(){function r(){var e=this;f(this,r),this.offset=0,this.timetag=new B,this.bundleElements=[];for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];t.length>0&&(t[0]instanceof Date||b(t[0])?this.timetag=new B(t[0]):D(t[0])?(t[0].forEach(function(i){e.add(i)}),t.length>1&&(t[1]instanceof Date||b(t[1]))&&(this.timetag=new B(t[1]))):t.forEach(function(i){e.add(i)}))}return l(r,[{key:"timestamp",value:function(e){if(!b(e))throw new Error("OSC Bundle needs an integer for setting the timestamp");this.timetag=new B(e)}},{key:"add",value:function(e){if(!(e instanceof E||e instanceof r))throw new Error("OSC Bundle contains only Messages and Bundles");this.bundleElements.push(e)}},{key:"pack",value:function(){var e=new ue;return e.add(new S(_)),this.timetag||(this.timetag=new B),e.add(this.timetag),this.bundleElements.forEach(function(n){e.add(new U(n.pack().byteLength)),e.add(n)}),e.merge()}},{key:"unpack",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(e instanceof DataView))throw new Error("OSC Bundle expects an instance of type DataView");var t=new S;if(t.unpack(e,n),t.value!==_)throw new Error("OSC Bundle does not contain a valid #bundle head");var o=new B,i=o.unpack(e,t.offset);for(this.bundleElements=[];i<e.byteLength;){var s=new S,a=new U;i=a.unpack(e,i);var c=void 0;s.unpack(e,i),i=(c=s.value===_?new r:new E).unpack(e,i),this.bundleElements.push(c)}return this.offset=i,this.timetag=o,this.offset}}]),r}(),M=function(){function r(e){if(f(this,r),e&&!(e instanceof E||e instanceof I))throw new Error("OSC Packet value has to be Message or Bundle");this.value=e,this.offset=0}return l(r,[{key:"pack",value:function(){if(!this.value)throw new Error("OSC Packet can not be encoded with empty body");return this.value.pack()}},{key:"unpack",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(e instanceof DataView))throw new Error("OSC Packet expects an instance of type DataView");if(e.byteLength%4!=0)throw new Error("OSC Packet byteLength has to be a multiple of four");var t,o=new S;return o.unpack(e,n),(t=o.value===_?new I:new E).unpack(e,n),this.offset=t.offset,this.value=t,this.offset}}]),r}(),Me={discardLateMessages:!1},He=function(){function r(e){f(this,r),this.options=u(u({},Me),e),this.addressHandlers=[],this.eventHandlers={open:[],error:[],close:[]},this.uuid=0}return l(r,[{key:"dispatch",value:function(e,n){var t=this;if(!(e instanceof M))throw new Error("OSC EventHander dispatch() accepts only arguments of type Packet");if(!e.value)throw new Error("OSC EventHander dispatch() can't read empty Packets");if(e.value instanceof I){var o=e.value;return o.bundleElements.forEach(function(s){if(s instanceof I){if(o.timetag.value.timestamp()<s.timetag.value.timestamp())throw new Error("OSC Bundle timestamp is older than the timestamp of enclosed Bundles");return t.dispatch(s)}if(s instanceof E){var a=s;return t.notify(a.address,a,o.timetag.value.timestamp(),n)}throw new Error("OSC EventHander dispatch() can't dispatch unknown Packet value")})}if(e.value instanceof E){var i=e.value;return this.notify(i.address,i,0,n)}throw new Error("OSC EventHander dispatch() can't dispatch unknown Packet value")}},{key:"call",value:function(e,n,t){var o=!1;if(v(e)&&e in this.eventHandlers)return this.eventHandlers[e].forEach(function(a){a.callback(n,t),o=!0}),o;var i=Object.keys(this.addressHandlers),s=this.addressHandlers;return i.forEach(function(a){var c=!1,w=new RegExp(ae(L(e)),"g");if(w.test(a)&&a.length===w.lastIndex&&(c=!0),!c){var P=new RegExp(ae(L(a)),"g");P.test(e)&&e.length===P.lastIndex&&(c=!0)}c&&s[a].forEach(function(rt){rt.callback(n,t),o=!0})}),o}},{key:"notify",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if(n.length===0)throw new Error("OSC EventHandler can not be called without any argument");if(n[0]instanceof M)return this.dispatch(n[0],n[1]);if(n[0]instanceof I||n[0]instanceof E)return this.dispatch(new M(n[0]),n[1]);if(!v(n[0])){var o=new M;return o.unpack(Ie(n[0])),this.dispatch(o,n[1])}var i=n[0],s=null;n.length>1&&(s=n[1]);var a=null;if(n.length>2)if(b(n[2]))a=n[2];else{if(!(n[2]instanceof Date))throw new Error("OSC EventHandler timestamp has to be a number or Date");a=n[2].getTime()}var c=null;if(n.length>=3&&(c=n[3]),a){var w=Date.now();if(w>a&&!this.options.discardLateMessages)return this.call(i,s,c);var P=this;return setTimeout(function(){P.call(i,s,c)},a-w),!0}return this.call(i,s,c)}},{key:"on",value:function(e,n){if(!v(e)&&!D(e))throw new Error("OSC EventHandler accepts only strings or arrays for address patterns");if(!j(n))throw new Error("OSC EventHandler callback has to be a function");this.uuid+=1;var t={id:this.uuid,callback:n};if(v(e)&&e in this.eventHandlers)return this.eventHandlers[e].push(t),this.uuid;var o=L(e);return o in this.addressHandlers||(this.addressHandlers[o]=[]),this.addressHandlers[o].push(t),this.uuid}},{key:"off",value:function(e,n){if(!v(e)&&!D(e))throw new Error("OSC EventHandler accepts only strings or arrays for address patterns");if(!b(n))throw new Error("OSC EventHandler subscription id has to be a number");var t,o;return v(e)&&e in this.eventHandlers?(t=e,o=this.eventHandlers):(t=L(e),o=this.addressHandlers),t in o&&o[t].some(function(i,s){return i.id===n&&(o[t].splice(s,1),!0)})}}]),r}(),Te=0,Le=1,Ne=2,Ve=3,Ue=function(){function r(){throw f(this,r),new Error("DatagramPlugin can not be used in browser context")}return l(r,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=u(u({},this.options.open),n),o=t.port,i=t.exclusive;this.socketStatus=Te,this.socket.bind({address:t.host,port:o,exclusive:i},function(){e.socketStatus=Le,e.notify("open")})}},{key:"close",value:function(){var e=this;this.socketStatus=Ne,this.socket.close(function(){e.socketStatus=Ve,e.notify("close")})}},{key:"send",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=u(u({},this.options.send),n),o=t.port,i=t.host;this.socket.send(Buffer.from(e),0,e.byteLength,o,i)}}]),r}();typeof WebSocket!="undefined"?x=WebSocket:typeof MozWebSocket!="undefined"?x=MozWebSocket:typeof H!="undefined"?x=H.WebSocket||H.MozWebSocket:typeof window!="undefined"?x=window.WebSocket||window.MozWebSocket:typeof self!="undefined"&&(x=self.WebSocket||self.MozWebSocket);var X=void 0,we=x,_e=0,We=1,Re=2,Fe=3,W={udpServer:{host:"localhost",port:41234,exclusive:!1},udpClient:{host:"localhost",port:41235},wsServer:{host:"localhost",port:8080},receiver:"ws"};function ye(r,e){return u(u(u(u({},W),r),e),{},{udpServer:u(u(u({},W.udpServer),r.udpServer),e.udpServer),udpClient:u(u(u({},W.udpClient),r.udpClient),e.udpClient),wsServer:u(u(u({},W.wsServer),r.wsServer),e.wsServer)})}var ze=function(){function r(){throw f(this,r),new Error("BridgePlugin can not be used in browser context")}return l(r,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=ye(this.options,n);this.socketStatus=_e,this.socket.bind({address:t.udpServer.host,port:t.udpServer.port,exclusive:t.udpServer.exclusive},function(){var o={};t.wsServer.server?o.server=t.wsServer.server:o=t.wsServer,e.websocket=new X(o),e.websocket.binaryType="arraybuffer",e.websocket.on("listening",function(){e.socketStatus=We,e.notify("open")}),e.websocket.on("error",function(i){e.notify("error",i)}),e.websocket.on("connection",function(i){i.on("message",function(s,a){e.send(s,{receiver:"udp"}),e.notify(new Uint8Array(s),a)})})})}},{key:"close",value:function(){var e=this;this.socketStatus=Re,this.socket.close(function(){e.websocket.close(function(){e.socketStatus=Fe,e.notify("close")})})}},{key:"send",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=ye(this.options,n),o=t.receiver;if(o==="udp"){var i=e instanceof Buffer?e:Buffer.from(e);this.socket.send(i,0,i.byteLength,t.udpClient.port,t.udpClient.host)}else{if(o!=="ws")throw new Error("BridgePlugin can not send message to unknown receiver");this.websocket.clients.forEach(function(s){s.send(e,{binary:!0})})}}}]),r}(),Ge=-1,Ze=0,qe=1,Je=2,Ke=3,Qe={host:"localhost",port:8080,secure:!1,protocol:[]},me=function(){function r(e){if(f(this,r),!we)throw new Error("WebsocketClientPlugin can't find a WebSocket class");this.options=u(u({},Qe),e),this.socket=null,this.socketStatus=Ge,this.notify=function(){}}return l(r,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=u(u({},this.options),n),o=t.port,i=t.host,s=t.secure,a=t.protocol;this.socket&&this.close();var c=s?"wss":"ws",w={address:i,family:c,port:o,size:0};this.socket=new we("".concat(c,"://").concat(i,":").concat(o),a),this.socket.binaryType="arraybuffer",this.socketStatus=Ze,this.socket.onopen=function(){e.socketStatus=qe,e.notify("open")},this.socket.onclose=function(){e.socketStatus=Ke,e.notify("close")},this.socket.onerror=function(P){e.notify("error",P)},this.socket.onmessage=function(P){e.notify(P.data,w)}}},{key:"close",value:function(){this.socketStatus=Je,this.socket.close()}},{key:"send",value:function(e){this.socket.send(e)}}]),r}(),Xe=0,Ye=1,$e=2,et=3,tt=function(){function r(e){throw f(this,r),new Error("WebsocketServerPlugin can not be used in browser context")}return l(r,[{key:"registerNotify",value:function(e){this.notify=e}},{key:"status",value:function(){return this.socketStatus}},{key:"open",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=u(u({},this.options),n),o=t.port,i=t.host,s={address:i,family:"wsserver",port:o,size:0};this.socket&&this.close(),t.server?this.socket=new X({server:t.server}):this.socket=new X({host:i,port:o}),this.socket.binaryType="arraybuffer",this.socketStatus=Xe,this.socket.on("listening",function(){e.socketStatus=Ye,e.notify("open")}),this.socket.on("error",function(a){e.notify("error",a)}),this.socket.on("connection",function(a){a.on("message",function(c){e.notify(new Uint8Array(c),s)})})}},{key:"close",value:function(){var e=this;this.socketStatus=$e,this.socket.close(function(){e.socketStatus=et,e.notify("close")})}},{key:"send",value:function(e){this.socket.clients.forEach(function(n){n.send(e,{binary:!0})})}}]),r}(),nt={discardLateMessages:!1,plugin:new me},O=function(){function r(e){if(f(this,r),e&&!z(e))throw new Error("OSC options argument has to be an object.");this.options=u(u({},nt),e),this.eventHandler=new He({discardLateMessages:this.options.discardLateMessages});var n=this.eventHandler;this.options.plugin&&this.options.plugin.registerNotify&&this.options.plugin.registerNotify(function(){return n.notify.apply(n,arguments)})}return l(r,[{key:"on",value:function(e,n){if(!v(e)||!j(n))throw new Error("OSC on() needs event- or address string and callback function");return this.eventHandler.on(e,n)}},{key:"off",value:function(e,n){if(!v(e)||!b(n))throw new Error("OSC off() needs string and number (subscriptionId) to unsubscribe");return this.eventHandler.off(e,n)}},{key:"open",value:function(e){if(e&&!z(e))throw new Error("OSC open() options argument needs to be an object");if(!this.options.plugin||!j(this.options.plugin.open))throw new Error("OSC Plugin API #open is not implemented!");return this.options.plugin.open(e)}},{key:"status",value:function(){if(!this.options.plugin||!j(this.options.plugin.status))throw new Error("OSC Plugin API #status is not implemented!");return this.options.plugin.status()}},{key:"close",value:function(){if(!this.options.plugin||!j(this.options.plugin.close))throw new Error("OSC Plugin API #close is not implemented!");return this.options.plugin.close()}},{key:"send",value:function(e,n){if(!this.options.plugin||!j(this.options.plugin.send))throw new Error("OSC Plugin API #send is not implemented!");if(!(e instanceof Q||e instanceof E||e instanceof I||e instanceof M))throw new Error("OSC send() needs Messages, Bundles or Packets");if(n&&!z(n))throw new Error("OSC send() options argument has to be an object");return this.options.plugin.send(e.pack(),n)}}]),r}();return O.STATUS={IS_NOT_INITIALIZED:-1,IS_CONNECTING:0,IS_OPEN:1,IS_CLOSING:2,IS_CLOSED:3},O.Packet=M,O.Bundle=I,O.Message=E,O.TypedMessage=Q,O.DatagramPlugin=Ue,O.WebsocketClientPlugin=me,O.WebsocketServerPlugin=tt,O.BridgePlugin=ze,O})})(Ee);var $=Ee.exports;const Ce=new $;Ce.open();const ft=.1;let Y=-1;ct.prototype.osc=function(){return this._withHap(g=>{const d=(p,u,f,N,l,R)=>{Y<0&&(Y=Date.now()-f*1e3);const k=Object.assign({},{cps:N,cycle:l,delta:R},u.value),h=Object.entries(k).flat(),T=Math.floor(Y+(p+ft)*1e3),F=new $.Message("/dirt/play",...h),y=new $.Bundle([F],T);y.timestamp(T),Ce.send(y)};return g.setContext(Oe(Se({},g.context),{onTrigger:d}))})};
