import{e as D,j as R,l as E,q as O}from"./index.ec9f9930.js";var T={exports:{}};(function(b,N){(function(m,g){b.exports=g()})(self,()=>(()=>{var m={d:(e,t)=>{for(var s in t)m.o(t,s)&&!m.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},g={};function h(e,t){if(this.msg=e,this.ac=t.ac,this.sampleBank=t.sampleBank,this.outputNode=t.destination,this.cutGroups=t.cutGroups,this.eventCounter=t.eventCounter,this.audioOutputs=t.audioOutputs,this.workletsAvailable=t.workletsAvailable,typeof e.buffer=="object")this.bufferContainer=e.buffer;else{if(this.sampleBank==null)return void console.log("WebDirt: there is no sample bank, cancelling event");if(typeof this.sampleBank!="object")return void console.log("WebDirt: buffer not provided by calling application + no WebDirt sample bank");if(this.msg.n=parseInt(this.msg.n),isNaN(this.msg.n)&&(this.msg.n=0),!this.sampleBank.sampleNameExists(this.msg.s))return void console.log("WebDirt: no sample named "+this.msg.s+" exists in sample map");if(!this.sampleBank.getBufferMightSucceed(this.msg.s,this.msg.n))return}if(this.when=this.msg.when,isNaN(this.when))console.log("WebDirt: 'when' is null or not a number");else if(this.nudge=parseFloat(this.msg.nudge),isNaN(this.nudge)||(this.when=this.when+this.nudge),isNaN(parseFloat(this.msg.speed))&&(this.msg.speed=1),this.msg.speed!=0)if(isNaN(parseFloat(this.msg.note))&&(this.msg.note=0),this.msg.speed=this.msg.speed*Math.pow(2,this.msg.note/12),this.msg.begin=w(this.msg.begin,0),this.msg.end=w(this.msg.end,1),this.msg.end!=this.msg.begin){if(this.msg.begin>this.msg.end&&(this.msg.speed=-1*this.msg.speed),this.msg.speed<0&&(this.msg.begin=1-this.msg.begin,this.msg.end=1-this.msg.end),this.msg.begin>this.msg.end){let W=this.msg.begin;this.msg.begin=this.msg.end,this.msg.end=W}var s;if(this.source=s=this.ac.createBufferSource(),this.source.onended=this.disconnectHandler(),this.disconnectOnEnd(this.source),this.source.playbackRate.value=Math.abs(this.msg.speed),this.prepareBuffer(),this.buffer!=null)this.source.buffer=this.buffer,this.start();else{var a=this,n=1e3*(this.msg.when-this.ac.currentTime-.2);n<=0&&(n=1e3*(this.msg.when-this.ac.currentTime-.2)),n>0&&setTimeout(function(){a.prepareBuffer(),a.buffer!=null?(a.source.buffer=a.buffer,a.start()):(console.log("WebDirt: unable to access sample "+e.s+":"+e.n+" on second attempt"),a.stopAll())},n)}this.cut(this.msg.cut,this.msg.s),s=this.shape(s,this.msg.shape),s=this.lowPassFilter(s,this.msg.cutoff,this.msg.resonance),s=this.highPassFilter(s,this.msg.hcutoff,this.msg.hresonance),s=this.bandPassFilter(s,this.msg.bandf,this.msg.bandq),s=this.vowel(s,this.msg.vowel),s=this.delay(s,this.msg.delay,this.msg.delaytime,this.msg.delayfeedback),s=this.loop(s,this.msg.loop,this.msg.begin,this.msg.end,this.msg.speed),s=this.crush(s,this.msg.crush),s=this.coarse(s,this.msg.coarse),this.unit(this.msg.unit,this.msg.speed);var i=parseFloat(this.msg.gain);isNaN(i)&&(i=1),i>2&&(i=2),i<0&&(i=0);var o=parseFloat(this.msg.overgain);isNaN(o)||(i+=o),i=Math.pow(i,4);var r,c,l,u=parseFloat(e.pan);if(isNaN(u)&&(u=.5),this.audioOutputs==2)(u>1||u<0)&&(u-=Math.floor(u)),r=u,c=0,l=1;else{var A=(u-=Math.floor(u))*this.audioOutputs;(l=(c=Math.floor(A))+1)>=this.audioOutputs&&(l=0),r=A-Math.floor(A)}var v=this.ac.createGain();this.disconnectOnEnd(v);var S=this.ac.createGain();this.disconnectOnEnd(S),v.gain.value=Math.cos(r*Math.PI/2)*i,S.gain.value=Math.sin(r*Math.PI/2)*i,s.connect(v),s.connect(S),this.gain1=v,this.gain2=S;var k=this.ac.createChannelMerger(this.audioOutputs);this.disconnectOnEnd(k),v.connect(k,0,c),S.connect(k,0,l),k.connect(this.outputNode)}else this.stopAll()}function w(e,t){let s=parseFloat(e);return isNaN(s)?t:s>1?1:s<0?0:s}m.r(g),m.d(g,{WebDirt:()=>f}),h.prototype.prepareBuffer=function(){typeof this.bufferContainer=="object"?typeof this.bufferContainer.buffer=="object"&&(this.msg.speed>=0?this.buffer=this.bufferContainer.buffer:(typeof this.bufferContainer.reverseBuffer=="object"||(this.bufferContainer.reverseBuffer=this.reverseBuffer(this.ac,this.bufferContainer.buffer)),this.buffer=this.bufferContainer.reverseBuffer)):(this.msg.speed>=0?this.buffer=this.sampleBank.getBuffer(this.msg.s,this.msg.n):this.buffer=this.sampleBank.getReverseBuffer(this.msg.s,this.msg.n),this.buffer=this.accel(this.buffer,this.msg.accelerate,this.msg.speed))},h.prototype.disconnectOnEnd=function(e){this.source.disconnectQueue==null&&(this.source.disconnectQueue=new Array),this.source.disconnectQueue.unshift(e)},h.prototype.start=function(){let e=Math.abs(this.msg.speed),t=(this.msg.end-this.msg.begin)*this.source.buffer.duration/e,s=this.msg.begin*this.source.buffer.duration;this.source.start(this.when,s,t)},h.prototype.stopAll=function(){if(this.source!=null&&this.source.disconnectQueue!=null){for(var e=0;e<this.source.disconnectQueue.length;e++)this.source.disconnectQueue[e].disconnect();this.source.disconnectQueue=null;try{this.source.stop()}catch{}}},h.prototype.disconnectHandler=function(){var e=this;return function(){setTimeout(function(){if(e.source.disconnectQueue==null)throw Error("WebDirt: no disconnectQueue for event "+e.eventCounter);for(var t=0;t<e.source.disconnectQueue.length;t++)e.source.disconnectQueue[t].disconnect();e.source.disconnectQueue=null},250)}},h.prototype.coarse=function(e,t){if(t=parseInt(t),isNaN(t)&&(t=1),t>1&&this.workletsAvailable){var s=new AudioWorkletNode(this.ac,"coarse-processor");return s.parameters.get("coarse").value=t,e.connect(s),this.disconnectOnEnd(s),s}return e},h.prototype.crush=function(e,t){if(t=parseInt(t),isNaN(t)&&(t=null),t!=null&&t>0&&this.workletsAvailable){var s=new AudioWorkletNode(this.ac,"crush-processor");return s.parameters.get("crush").value=t,e.connect(s),this.disconnectOnEnd(s),s}return e},h.prototype.cut=function(e,t){if(e=parseInt(e),!isNaN(e)&&e!=0){for(var s={cutGroup:e,node:this,sampleName:t},a=0;a<this.cutGroups.length;a++){var n=this.cutGroups[a];n.cutGroup==e&&(e<0?n.sampleName==t&&(n.node.stop(this.when),this.cutGroups.splice(a,1)):(n.node.stop(this.when),this.cutGroups.splice(a,1)))}this.cutGroups.push(s)}},h.prototype.delay=function(e,t,s,a){if(isNaN(parseInt(t))&&(t=0),(t=Math.abs(t))!=0){var n=this.ac.createDelay();this.disconnectOnEnd(n),isNaN(parseInt(s))&&(console.log("WebDirt: warning: delaytime not a number, using default of 1"),s=1),n.delayTime.value=s;var i=this.ac.createGain();this.disconnectOnEnd(i),isNaN(parseInt(a))&&(console.log("WebDirt: warning: delayfeedback not a number, using default of 0.5"),a=.5),i.gain.value=Math.min(Math.abs(a),.995);var o=this.ac.createGain();return this.disconnectOnEnd(o),o.gain.value=t,e.connect(n),n.connect(i),n.connect(o),o.gain.setValueAtTime(o.gain.value,this.when+parseFloat(s)),i.connect(n),o}return e},h.prototype.highPassFilter=function(e,t,s){if(isNaN(parseFloat(t))&&isNaN(parseFloat(s)))return e;isNaN(parseFloat(t))&&(t=440),t<20&&(t=20),t>2e4&&(t=2e4),isNaN(parseFloat(s))&&(s=0),s<0&&(s=0),s>1&&(s=1),s=1/(s=1-.999*(s*=s));var a=this.ac.createBiquadFilter();return this.disconnectOnEnd(a),a.type="highpass",a.frequency.value=t,a.Q.value=s,e.connect(a),a},h.prototype.lowPassFilter=function(e,t,s){if(isNaN(parseFloat(t))&&isNaN(parseFloat(s)))return e;isNaN(parseFloat(t))&&(t=440),t<20&&(t=20),t>2e4&&(t=2e4),isNaN(parseFloat(s))&&(s=0),s<0&&(s=0),s>1&&(s=1),s=1/(s=1-.999*(s*=s));var a=this.ac.createBiquadFilter();return this.disconnectOnEnd(a),a.type="lowpass",a.frequency.value=t,a.Q.value=s,e.connect(a),a},h.prototype.bandPassFilter=function(e,t,s){if(isNaN(parseFloat(t))&&isNaN(parseFloat(s)))return e;isNaN(parseFloat(t))&&(t=440),t<20&&(t=20),t>2e4&&(t=2e4),isNaN(parseFloat(s))&&(s=10),s<1&&(s=1),s>100&&(s=100);var a=this.ac.createBiquadFilter();return this.disconnectOnEnd(a),a.type="bandpass",a.frequency.value=t,a.Q.value=s,a.gain.value=s,e.connect(a),a},h.prototype.loop=function(e,t){if(isNaN(parseInt(t))||t==0)return e;try{var s=this.source.buffer.duration-this.msg.begin*this.source.buffer.duration-(1-this.msg.end)*this.source.buffer.duration;return this.source.loop=!0,this.source.loopStart=this.msg.begin*this.source.buffer.duration,this.source.loopEnd=this.msg.end*this.source.buffer.duration,this.source.stop(this.when+s*t/this.source.playbackRate.value),e}catch{return console.log("WebDirt Warning: buffer data not yet available to calculate loop time - no looping applied"),e}},h.prototype.accelerate=function(e,t){if(t=Math.abs(t),isNaN(parseFloat(e))&&(e=0),e!=0){e=parseFloat(e),this.source.playbackRate.setValueAtTime(t,this.when);var s=Math.abs((this.source.buffer.length*e/this.ac.sampleRate+t)/t),a=t+this.source.buffer.length*e/this.ac.sampleRate;if(a<0)this.source.buffer=this.negativeAccelerateBuffer(this.source.buffer,e,t),this.source.playbackRate.linearRampToValueAtTime(0,this.when+s),this.source.playbackRate.linearRampToValueAtTime(1,this.when+this.source.buffer.duration);else try{this.source.playbackRate.linearRampToValueAtTime(a,this.when+this.source.buffer.duration)}catch{console.log("WebDirt: Warning, buffer data not loaded, could not apply acclerate effect")}}},h.prototype.negativeAccelerateBuffer=function(e,t,s){var a=e.length,n=new Float32Array(a),i=this.ac.createBuffer(e.numberOfChannels,e.length,this.ac.sampleRate),o=new Float32Array(a),r=Math.abs(s/(s-t))*a;r=a*Math.abs((this.source.buffer.length*t/this.ac.sampleRate+s)/s)/this.source.buffer.duration,r=Math.trunc(r);for(var c=0;c<e.numberOfChannels;c++){e.copyFromChannel(n,c,0);for(var l=0;l<r;l++)o[l]=n[l];for(l=0;l<a-r;l++)o[l+r]=n[r-l];i.copyToChannel(o,c,0)}return i},h.prototype.accel=function(e,t,s){if(isNaN(parseFloat(t)))return e;t=parseFloat(t);try{var a=e.length}catch{return void console.log("WebDirt: Warning, buffer data not loaded, accelerate effect not applied")}for(var n=new Float32Array(a),i=this.ac.createBuffer(e.numberOfChannels,e.length,this.ac.sampleRate),o=new Float32Array(a),r=0;r<e.numberOfChannels;r++){var c=s;e.copyFromChannel(n,r,0);for(var l=0,u=0;u<a&&(o[l]=n[Math.round(u)],c+=t/this.ac.sampleRate,!(u<0));u+=c)l++;i.copyToChannel(o,r,0)}return i},h.prototype.shape=function(e,t){if(t=parseFloat(t),isNaN(t)&&(t=0),t>=1&&(t=.999),t>0&&this.workletsAvailable){var s=new AudioWorkletNode(this.ac,"shape-processor");return s.parameters.get("shape").value=t,e.connect(s),this.disconnectOnEnd(s),s}return e},h.prototype.stop=function(e){this.gain1.gain.setValueAtTime(this.gain1.gain.value,e),this.gain1.gain.linearRampToValueAtTime(0,e+.02),this.gain2.gain.setValueAtTime(this.gain1.gain.value,e),this.gain2.gain.linearRampToValueAtTime(0,e+.02)},h.prototype.unit=function(e,t){e=="c"&&(this.source.playbackRate.value=this.source.playbackRate.value*this.source.buffer.duration)},h.prototype.vowel=function(e,t){if(typeof t!="string")return e;if((t=t.toLowerCase())=="a"||t=="e"||t=="i"||t=="o"||t=="u"){var s,a,n,i=this.ac.createGain();switch(this.disconnectOnEnd(i),t){case"a":s=p.a.freqs,a=p.a.qs,n=p.a.amps;break;case"e":s=p.e.freqs,a=p.e.qs,n=p.e.amps;break;case"i":s=p.i.freqs,a=p.i.qs,n=p.i.amps;break;case"o":s=p.o.freqs,a=p.o.qs,n=p.o.amps;break;case"u":s=p.u.freqs,a=p.u.qs,n=p.u.amps}for(var o=0;o<5;o++){var r=this.ac.createGain();this.disconnectOnEnd(r),r.gain.value=n[o];var c=this.ac.createBiquadFilter();this.disconnectOnEnd(c),c.type="bandpass",c.Q.value=a[o]/8,c.frequency.value=s[o],e.connect(c),c.connect(r),r.connect(i)}return i.gain.value=8,i}return e},h.prototype.reverseBuffer=function(e,t){for(var s=t.length,a=new Float32Array(s),n=e.createBuffer(t.numberOfChannels,t.length,e.sampleRate),i=new Float32Array(s),o=0;o<t.numberOfChannels;o++){t.copyFromChannel(a,o,0);for(var r=0;r<s;r++)i[r]=a[s-r];i[0]=i[1],n.copyToChannel(i,o,0)}return n};var p={a:{freqs:[660,1120,2750,3e3,3350],amps:[1,.5012,.0708,.0631,.0126],qs:[80,90,120,130,140]},e:{freqs:[440,1800,2700,3e3,3300],amps:[1,.1995,.1259,.1,.1],qs:[70,80,100,120,120]},i:{freqs:[270,1850,2900,3350,3590],amps:[1,.0631,.0631,.0158,.0158],qs:[40,90,100,120,120]},o:{freqs:[430,820,2700,3e3,3300],amps:[1,.3162,.0501,.0794,.01995],qs:[40,80,100,120,120]},u:{freqs:[370,630,2750,3e3,3400],amps:[1,.1,.0708,.0316,.01995],qs:[40,60,100,120,120]}};function d(e,t,s){this.STATUS_PRELOAD=0,this.STATUS_LOADING=1,this.STATUS_READY=2,this.STATUS_ERROR=3,this.sampleMapUrl=e,this.urlPrefix=t,this.samples={};var a=new XMLHttpRequest;a.open("GET",this.sampleMapUrl,!0),a.responseType="json";var n=this;a.onload=function(){if(a.readyState!=4)throw Error("WebDirt: readyState != 4 in callback of sampleMap load");if(a.status!=200)throw Error("WebDirt: status != 200 in callback of sampleMap load");if(a.response==null)throw Error("WebDirt: JSON response null in callback of sampleMap load");n.sampleMap=a.response,console.log("WebDirt: sampleMap loaded from "+n.sampleMapUrl),typeof s=="function"&&s()},a.onerror=function(){console.log("WebDirt: unspecified error in loading of sampleMap from "+n.sampleMapUrl)},a.send()}function f(e){this.workletsAvailable=!1,e===void 0&&(e={}),typeof e=="object"?(typeof e.sampleMapUrl=="string"?(e.sampleFolder==null&&(e.sampleFolder="samples"),console.log("WebDirt: will manage own sample bank, samplemap="+e.sampleMapUrl+" sampleFolder="+e.sampleFolder),this.sampleBank=new d(e.sampleMapUrl,e.sampleFolder,e.readyCallback)):console.log("WebDirt: will expect application to provide sample buffers"),e.latency==null&&(e.latency=.4),this.latency=e.latency,typeof e.maxLateness!="number"?this.maxLateness=.005:this.maxLateness=e.maxLateness,this.ac=e.audioContext,this.destination=e.destination,this.cutGroups=new Array,this.eventCounter=0,this.audioOutputs=2,this.ac==null?console.log("WebDirt: initialized (without audio context)"):this.destination==null?(this.destination=this.ac.destination,console.log("WebDirt: initialized with provided context")):console.log("WebDirt: initialized with provided context + destination")):console.log("WebDirt: unable to construct WebDirt object, arguments object not provided to constructor")}return d.prototype.loadAllNamed=function(e){if(this.ac==null)throw Error("WebDirt: called SampleBank.loadAllNamed with null audio context");if(this.sampleMap==null)throw Error("WebDirt: SampleBank.loadAllNamed: sampleMap is null");if(this.sampleMap[e]!=null)for(var t=0;t<this.sampleMap[e].length;t++)this.load(this.getFilename(e,t));else console.log("WebDirt: can't loadAllNamed "+e+" (not present in sampleMap)")},d.prototype.load=function(e,t){if(this.samples[e]==null&&(this.samples[e]={},this.samples[e].status=this.STATUS_PRELOAD),this.samples[e].status!=this.STATUS_READY){if(this.samples[e].status!=this.STATUS_ERROR&&this.samples[e].status!=this.STATUS_LOADING){this.samples[e].status=this.STATUS_LOADING;var s=this.urlPrefix+"/"+e,a=new XMLHttpRequest;try{a.open("GET",s,!0),a.responseType="arraybuffer";var n=this;a.onload=function(){n.ac.decodeAudioData(a.response,function(i){n.samples[e].buffer=i,n.samples[e].status=n.STATUS_READY,typeof t=="function"&&t()},function(i){console.log("WebDirt: error decoding "+s),n.samples[e].status=n.STATUS_ERROR})},a.onerror=function(){console.log("WebDirt: error requesting "+s),n.samples[e].status=n.STATUS_ERROR},a.send()}catch(i){console.log("WebDirt: exception loading "+s+" = "+i),n.samples[e].status=n.STATUS_ERROR}}}else typeof t=="function"&&t()},d.prototype.sampleNameExists=function(e){return this.sampleMap==null?(console.log("WebDirt: can't lookup sample bank because sampleMap doesn't exist"),!1):this.sampleMap[e]!=null},d.prototype.getFilename=function(e,t){return t==null&&(t=0),t<0&&(t=this.sampleMap[e].length-Math.abs(t)%this.sampleMap[e].length),t%=this.sampleMap[e].length,this.sampleMap[e][t]},d.prototype.getBufferMightSucceed=function(e,t){var s=this.getFilename(e,t);if(this.samples[s]==null)return!0;if(this.samples[s].status==this.STATUS_PRELOAD)return!1;if(this.samples[s].status==this.STATUS_LOADING||this.samples[s].status==this.STATUS_READY)return!0;if(this.samples[s].status==this.STATUS_ERROR)return!1;throw Error("WebDirt: SampleBank.getBufferMightSucceed: unrecognized status for "+e+":"+t)},d.prototype.getBuffer=function(e,t){var s=this.getFilename(e,t);return this.samples[s]==null?(this.load(s),null):this.samples[s].status==this.STATUS_PRELOAD?(console.log("WebDirt: *strange error* in SampleBank.getBuffer: sample "+e+":"+t+" status is PRELOAD"),null):this.samples[s].status==this.STATUS_ERROR?(console.log("WebDirt: SampleBank.getBuffer: sample "+e+" has status error"),null):this.samples[s].status==this.STATUS_LOADING?(console.log("WebDirt: SampleBank.getBuffer: "+e+":"+t+" is still loading"),null):this.samples[s].status==this.STATUS_READY?this.samples[s].buffer:(console.log("WebDirt: *strange error* in SampleBank.getBuffer: sample "+e+":"+t+" has unknown status"),null)},d.prototype.getReverseBuffer=function(e,t){if(this.sampleMap[e]!=null){var s=this.getFilename(e,t);if(this.samples[s]!=null){if(this.samples[s].reverseBuffer!=null)return this.samples[s].reverseBuffer;if(this.samples[s].status==this.STATUS_READY)return this.samples[s].reverseBuffer=function(a,n){for(var i=n.length,o=new Float32Array(i),r=a.createBuffer(n.numberOfChannels,n.length,a.sampleRate),c=new Float32Array(i),l=0;l<n.numberOfChannels;l++){n.copyFromChannel(o,l,0);for(var u=0;u<i;u++)c[u]=o[i-u];c[0]=c[1],r.copyToChannel(c,l,0)}return r}(this.ac,this.samples[s].buffer),this.samples[s].reverseBuffer}return this.load(s),null}console.log("WebDirt: can't getReverseBuffer "+e+" (not present in sampleMap)")},f.prototype.initializeWebAudio=function(){if(this.ac==null)try{window.AudioContext=window.AudioContext||window.webkitAudioContext,this.ac=new AudioContext,this.destination=this.ac.destination,console.log("WebDirt: own audio context created")}catch(t){return console.log(t),void alert("Web Audio API is not supported in this browser")}if(this.ac!=null){this.ac.audioWorklet!=null?this.ac.audioWorklet.addModule("WebDirt/AudioWorklets.js").then(()=>{console.log("WebDirt: audio worklets added"),this.workletsAvailable=!0}).catch(t=>{console.log("WebDirt: error loading AudioWorklets.js: "+t),console.log("(WebDirt should still work but shape, coarse, and crush will have no effect)"),this.workletsAvailable=!1}):(console.log("WebDirt: browser does not support audio worklets"),console.log("(WebDirt should still work but shape, coarse, and crush will have no effect)"),this.workletsAvailable=!1),this.tempo={time:this.ac.currentTime,beats:0,bpm:30},this.clockDiff=Date.now()/1e3-this.ac.currentTime,this.sampleBank!=null&&(this.sampleBank.ac=this.ac),this.silentNote=this.ac.createOscillator(),this.silentNote.type="sine",this.silentNote.frequency.value=440,this.silentGain=this.ac.createGain(),this.silentGain.gain.value=0,this.silentNote.connect(this.silentGain),this.silentGain.connect(this.ac.destination),this.silentNote.start();var e=this;setTimeout(function(){e.silentGain.disconnect(e.ac.destination),e.silentNote.disconnect(e.silentGain),e.silentNote.stop(),e.silentGain=null,e.silentNote=null},500)}console.log("WebDirt: initializeWebAudio finished.")},f.prototype.playSample=function(e,t){if(t==null&&(t=this.latency),e.whenPosix!=null&&(e.when=e.whenPosix-(new Date().getTime()/1e3-this.ac.currentTime)),e.when==null&&(e.when=this.ac.currentTime),e.when=e.when+t,typeof e.maxLateness!="number"&&(e.maxLateness=this.maxLateness),this.ac.currentTime-e.when>e.maxLateness)return void console.log("WebDirt warning: dropping msg late by "+(this.ac.currentTime-e.when)+" seconds");let s=new h(e,this);return this.eventCounter++,s},f.prototype.playScore=function(e,t,s){this.initializeWebAudio(),t==null&&(t=this.latency);for(var a=this.ac.currentTime,n=0,i=0;i<e.length;i++){var o=e[i];o.when>n&&(n=o.when),o.when=o.when+a,o.s!=null&&(o.sample_name=o.s),o.n!=null&&(o.sample_n=o.n),this.playSample(o,t)}setTimeout(function(){typeof s=="function"&&s()},1e3*(n+t))},f.prototype.playScoreWhenReady=function(e,t,s,a){this.initializeWebAudio(),t==null&&(t=this.latency);for(var n=e.length,i=0;i<e.length;i++){var o=e[i],r=this;o.s!=null&&(o.sample_name=o.s),o.n!=null&&(o.sample_n=o.n),this.sampleBank!=null&&this.sampleBank.load(o.sample_name,o.sample_n,function(){(n-=1)<=0&&(r.playScore(e,t,a),typeof s=="function"&&s())})}},f.prototype.loadAndPlayScore=function(e,t,s,a){this.initializeWebAudio(),t==null&&(t=this.latency);var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="json";var i=this;n.onload=function(){if(n.readyState!=4)throw Error("readyState != 4 in callback of loadAndPlayScore");if(n.status!=200)throw Error("status != 200 in callback of loadAndPlayScore");if(n.response==null)throw Error("JSON response null in callback of loadAndPlayScore");console.log("playing JSON score from "+e),i.playScoreWhenReady(n.response,t,s,a)},n.send()},f.prototype.renderAndPlayScore=function(e,t,s,a,n,i,o){this.initializeWebAudio(),n==null&&(n=this.latency),window.WebSocket=window.WebSocket||window.MozWebSocket,console.log("WebDirt.renderAndPlayScore: attempting websocket connection to "+e);var r=new WebSocket(e);r.onerror=function(){console.log(" ERROR opening websocket connection to "+e)},r.onopen=function(){console.log(" websocket connection to "+e+" established");try{var l='{"render":'+JSON.stringify(t)+',"cps":'+s+',"cycles":'+a+"}";console.log(l),r.send(l),console.log(" render request sent")}catch{console.log(" EXCEPTION during transmission of render request"),r.close()}};var c=this;r.onmessage=function(l){var u=JSON.parse(l.data);if(!u instanceof Array)return console.log(" WebDirt warning: rendering socket received non-array message"),console.log(typeof u),void(globalX=u);console.log(" received score from "+e),c.playScoreWhenReady(u,n,i,o),console.log(" closing websocket connection to "+e),r.close()}},f.prototype.subscribeToTidalSocket=function(e,t){this.initializeWebAudio(),t==null&&(t=!1),window.WebSocket=window.WebSocket||window.MozWebSocket,console.log("WebDirt: attempting websocket connection to "+e),ws=new WebSocket(e),ws.onopen=function(){console.log("websocket connection to tidalSocket opened")},ws.onerror=function(){console.log("ERROR opening websocket connection to tidalSocket")};var s=this;ws.onmessage=function(a){if(a.data==null)throw Error("null data in tidalSocket onmessage handler");var n=JSON.parse(a.data);if(n.address==null)throw Error("received message from tidalSocket with no address: "+a.data);if(n.address!="/play")throw Error("address of message from tidalSocket wasn't /play: "+a.data);if(n.args.constructor!==Array)throw Error("ERROR: message from tidalSocket where args doesn't exist or isn't an array: "+a.data);if(n.args.length!=30&&n.args.length!=33)throw Error("ERROR: message from tidalSocket with "+n.args.length+" args instead of 30 or 33: "+a.data);var i={};i.when=n.args[0]+n.args[1]/1e6+s.clockDiff,i.sample_name=n.args[3],i.begin=n.args[5],i.end=n.args[6],i.speed=n.args[7],i.pan=n.args[8],i.vowel=n.args[10],i.cutoff=n.args[11],i.resonance=n.args[12],i.accelerate=n.args[13],i.shape=n.args[14],i.gain=n.args[16],i.cut=n.args[17],i.delay=n.args[18],i.delaytime=n.args[19],i.delayfeedback=n.args[20],i.crush=n.args[21],i.coarse=n.args[22],i.hcutoff=n.args[23],i.hresonance=n.args[24],i.bandf=n.args[25],i.bandq=n.args[26],i.unit_name=n.args[27],i.sample_loop=n.args[28],i.sample_n=n.args[29],n.args.length==33&&(i.attack=n.args[30],i.hold=n.args[31],i.release=n.args[32]),s.playSample(i),t&&console.log(n)}},f.prototype.getCurrentTime=function(){return this.ac.currentTime},f.prototype.syncWithEsp=function(e){if(typeof EspClient=="function")if(this.espClient==null){this.espClient=new EspClient(e,this.ac);var t=this;this.espClient.tempoCallback=function(s){t.tempo=s}}else this.espClient.setUrl(e);else console.log("WebDirt ERROR: syncWithEsp called but EspClient does not exist")},f.prototype.setTempo=function(e){if(typeof e.time!="number")throw Error("WebDirt: no time in setTempo");if(typeof e.beats!="number")throw Error("WebDirt: no beats in setTempo");if(typeof e.bpm!="number")throw Error("WebDirt: no bpm in setTempo");this.espClient!=null&&this.espClient.sendSetTempo(e),this.tempo=e},f.prototype.sampleHint=function(e){this.sampleBank!=null&&(console.log("WebDirt received sample hint: "+e),this.sampleBank.loadAllNamed(e))},g})())})(T);const{Pattern:M}=D;let y;function F(b){y=new T.exports.WebDirt(b),y.initializeWebAudio()}M.prototype.webdirt=function(){return this._withHap(b=>{const N=async(m,g,h)=>{if(!y)throw new Error("WebDirt not initialized!");const w=m-h,{s:p,n:d=0,...f}=g.value||{};p||console.warn('Pattern.webdirt: no "s" was set!');const e=O();if(!(e!=null&&e[p])){y.playSample({s:p,n:d,...f},w);return}if(!(e!=null&&e[p]))console.warn(`Pattern.webdirt: sample "${p}" not found in loaded samples`,e);else{const t=e[p],s=t[d%t.length],a=R(s);if(!a)console.log(`Pattern.webdirt: load ${p}:${d} from ${s}`),E(s,y.ac);else{const n={buffer:{buffer:a},...f};y.playSample(n,w)}}};return b.setContext({...b.context,onTrigger:N})})};export{F as loadWebDirt};