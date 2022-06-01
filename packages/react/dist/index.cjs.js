"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var o=require("react"),te=require("react-codemirror6"),D=require("@codemirror/view"),I=require("@codemirror/state"),oe=require("@codemirror/lang-javascript"),s=require("@codemirror/highlight"),ae=require("react-hook-inview"),re=require("@strudel.cycles/eval"),ne=require("@strudel.cycles/core/util.mjs"),p=require("@strudel.cycles/tone"),z=require("@strudel.cycles/core"),v=require("@strudel.cycles/midi");function se(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var f=se(o);const ce="#abb2bf",le="#7d8799",ie="#ffffff",ue="#21252b",P="rgba(0, 0, 0, 0.5)",de="transparent",W="#353a42",fe="rgba(128, 203, 196, 0.2)",F="#ffcc00",ge=D.EditorView.theme({"&":{color:"#ffffff",backgroundColor:de,fontSize:"15px","z-index":11},".cm-content":{caretColor:F,lineHeight:"22px"},".cm-line":{background:"#2C323699"},"&.cm-focused .cm-cursor":{borderLeftColor:F},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:fe},".cm-panels":{backgroundColor:ue,color:"#ffffff"},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:P},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847",outline:"1px solid #515a6b"},".cm-gutters":{background:"#2C323699",color:"#676e95",border:"none"},".cm-activeLineGutter":{backgroundColor:P},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:W},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:W,borderBottomColor:W},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:P,color:ce}}},{dark:!0}),me=s.HighlightStyle.define([{tag:s.tags.keyword,color:"#c792ea"},{tag:s.tags.operator,color:"#89ddff"},{tag:s.tags.special(s.tags.variableName),color:"#eeffff"},{tag:s.tags.typeName,color:"#f07178"},{tag:s.tags.atom,color:"#f78c6c"},{tag:s.tags.number,color:"#ff5370"},{tag:s.tags.definition(s.tags.variableName),color:"#82aaff"},{tag:s.tags.string,color:"#c3e88d"},{tag:s.tags.special(s.tags.string),color:"#f07178"},{tag:s.tags.comment,color:le},{tag:s.tags.variableName,color:"#f07178"},{tag:s.tags.tagName,color:"#ff5370"},{tag:s.tags.bracket,color:"#a2a1a4"},{tag:s.tags.meta,color:"#ffcb6b"},{tag:s.tags.attributeName,color:"#c792ea"},{tag:s.tags.propertyName,color:"#c792ea"},{tag:s.tags.className,color:"#decb6b"},{tag:s.tags.invalid,color:ie}]),be=[ge,me],B=I.StateEffect.define(),pe=I.StateField.define({create(){return D.Decoration.none},update(e,a){try{for(let l of a.effects)l.is(B)&&(e=D.Decoration.set(l.value.flatMap(u=>(u.context.locations||[]).map(({start:g,end:c})=>{const i=u.context.color||"#FFCA28";let m=a.newDoc.line(g.line).from+g.column,n=a.newDoc.line(c.line).from+c.column;const r=a.newDoc.length;return m>r||n>r?void 0:D.Decoration.mark({attributes:{style:`outline: 1px solid ${i}`}}).range(m,n)})).filter(Boolean),!0));return e}catch{return e}},provide:e=>D.EditorView.decorations.from(e)});function $({value:e,onChange:a,onViewChanged:l,onCursor:u,options:g,editorDidMount:c}){return f.default.createElement(f.default.Fragment,null,f.default.createElement(te.CodeMirror,{onViewChange:l,style:{display:"flex",flexDirection:"column",flex:"1 0 auto"},value:e,onChange:a,extensions:[oe.javascript(),be,pe]}))}function Q(e){const{onEvent:a,onQuery:l,onSchedule:u,ready:g=!0,onDraw:c}=e,[i,m]=o.useState(!1),n=1,r=()=>Math.floor(p.Tone.getTransport().seconds/n),y=(b=r())=>{const w=new z.TimeSpan(b,b+1),S=l?.(new z.State(w))||[];u?.(S,b);const H=w.begin.valueOf();p.Tone.getTransport().cancel(H);const N=(b+1)*n-.5,R=Math.max(p.Tone.getTransport().seconds,N)+.1;p.Tone.getTransport().schedule(()=>{y(b+1)},R),S?.filter(h=>h.part.begin.equals(h.whole?.begin)).forEach(h=>{p.Tone.getTransport().schedule(M=>{a(M,h,p.Tone.getContext().currentTime),p.Tone.Draw.schedule(()=>{c?.(M,h)},M)},h.part.begin.valueOf())})};o.useEffect(()=>{g&&y()},[a,u,l,c,g]);const x=async()=>{m(!0),await p.Tone.start(),p.Tone.getTransport().start("+0.1")},C=()=>{p.Tone.getTransport().pause(),m(!1)};return{start:x,stop:C,onEvent:a,started:i,setStarted:m,toggle:()=>i?C():x(),query:y,activeCycle:r}}function U(e){return o.useEffect(()=>(window.addEventListener("message",e),()=>window.removeEventListener("message",e)),[e]),o.useCallback(a=>window.postMessage(a,"*"),[])}let he=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);const ve=e=>encodeURIComponent(btoa(e));function G({tune:e,defaultSynth:a,autolink:l=!0,onEvent:u,onDraw:g}){const c=o.useMemo(()=>he(),[]),[i,m]=o.useState(e),[n,r]=o.useState(),[y,x]=o.useState(""),[C,E]=o.useState(),[b,w]=o.useState(!1),[S,H]=o.useState(""),[N,R]=o.useState(),h=o.useMemo(()=>i!==n||C,[i,n,C]),M=o.useCallback(d=>x(t=>t+`${t?`

`:""}${d}`),[]),K=o.useMemo(()=>{if(n&&!n.includes("strudel disable-highlighting"))return(d,t)=>g?.(d,t,n)},[n,g]),T=Q({onDraw:K,onEvent:o.useCallback((d,t,Y)=>{try{u?.(t),t.context.logs?.length&&t.context.logs.forEach(M);const{onTrigger:_,velocity:Z}=t.context;if(_)_(d,t,Y,1,t.wholeOrPart().begin.valueOf(),t.duration.valueOf());else if(a){const ee=ne.getPlayableNoteValue(t);a.triggerAttackRelease(ee,t.duration.valueOf(),d,Z)}else throw new Error("no defaultSynth passed to useRepl.")}catch(_){console.warn(_),_.message="unplayable event: "+_?.message,M(_.message)}},[u,M,a]),onQuery:o.useCallback(d=>{try{return N?.query(d)||[]}catch(t){return console.warn(t),t.message="query error: "+t.message,E(t),[]}},[N]),onSchedule:o.useCallback((d,t)=>X(d,t),[]),ready:!!N&&!!n}),V=U(({data:{from:d,type:t}})=>{t==="start"&&d!==c&&(T.setStarted(!1),r(void 0))}),A=o.useCallback(async(d=i)=>{if(n&&!h){E(void 0),T.start();return}try{w(!0);const t=await re.evaluate(d);T.start(),V({type:"start",from:c}),R(()=>t.pattern),l&&(window.location.hash="#"+encodeURIComponent(btoa(i))),H(ve(i)),E(void 0),r(d),w(!1)}catch(t){t.message="evaluation error: "+t.message,console.warn(t),E(t)}},[n,h,i,T,l,c,V]),X=(d,t)=>{d.length};return{pending:b,code:i,setCode:m,pattern:N,error:C,cycle:T,setPattern:R,dirty:h,log:y,togglePlay:()=>{T.started?T.stop():A()},setActiveCode:r,activateCode:A,activeCode:n,pushLog:M,hash:S}}function L(...e){return e.filter(Boolean).join(" ")}let q=[],O;function J({view:e,pattern:a,active:l}){o.useEffect(()=>{if(e)if(a&&l){let g=function(){try{const c=p.Tone.getTransport().seconds,m=[Math.max(O||c,c-1/10),c+1/60];O=c+1/60,q=q.filter(r=>r.whole.end>c);const n=a.queryArc(...m).filter(r=>r.hasOnset());q=q.concat(n),e.dispatch({effects:B.of(q)})}catch{e.dispatch({effects:B.of([])})}u=requestAnimationFrame(g)},u=requestAnimationFrame(g);return()=>{cancelAnimationFrame(u)}}else q=[],e.dispatch({effects:B.of([])})},[a,l,e])}const ye="_container_10e1g_1",Ce="_header_10e1g_5",we="_buttons_10e1g_9",Me="_button_10e1g_9",ke="_buttonDisabled_10e1g_17",Ee="_error_10e1g_21",Te="_body_10e1g_25";var k={container:ye,header:Ce,buttons:we,button:Me,buttonDisabled:ke,error:Ee,body:Te};function j({type:e}){return f.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-h-5 sc-w-5",viewBox:"0 0 20 20",fill:"currentColor"},{refresh:f.default.createElement("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),play:f.default.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"}),pause:f.default.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}[e])}function _e({tune:e,defaultSynth:a,hideOutsideView:l=!1}){const{code:u,setCode:g,pattern:c,activateCode:i,error:m,cycle:n,dirty:r,togglePlay:y}=G({tune:e,defaultSynth:a,autolink:!1}),[x,C]=o.useState(),[E,b]=ae.useInView({threshold:.01}),w=o.useRef(),S=o.useMemo(()=>((b||!l)&&(w.current=!0),b||w.current),[b,l]);return J({view:x,pattern:c,active:n.started}),f.default.createElement("div",{className:k.container,ref:E},f.default.createElement("div",{className:k.header},f.default.createElement("div",{className:k.buttons},f.default.createElement("button",{className:L(k.button,n.started?"sc-animate-pulse":""),onClick:()=>y()},f.default.createElement(j,{type:n.started?"pause":"play"})),f.default.createElement("button",{className:L(r?k.button:k.buttonDisabled),onClick:()=>i()},f.default.createElement(j,{type:"refresh"}))),m&&f.default.createElement("div",{className:k.error},m.message)),f.default.createElement("div",{className:k.body},S&&f.default.createElement($,{value:u,onChange:g,onViewChanged:C})))}function xe(e){const{ready:a,connected:l,disconnected:u}=e,[g,c]=o.useState(!0),[i,m]=o.useState(v.WebMidi?.outputs||[]);return o.useEffect(()=>{v.enableWebMidi().then(()=>{v.WebMidi.addListener("connected",r=>{m([...v.WebMidi.outputs]),l?.(v.WebMidi,r)}),v.WebMidi.addListener("disconnected",r=>{m([...v.WebMidi.outputs]),u?.(v.WebMidi,r)}),a?.(v.WebMidi),c(!1)}).catch(r=>{if(r){console.error(r),console.warn("Web Midi could not be enabled..");return}})},[a,l,u,i]),{loading:g,outputs:i,outputByName:r=>v.WebMidi.getOutputByName(r)}}exports.CodeMirror=$;exports.MiniRepl=_e;exports.cx=L;exports.useCycle=Q;exports.useHighlighting=J;exports.usePostMessage=U;exports.useRepl=G;exports.useWebMidi=xe;