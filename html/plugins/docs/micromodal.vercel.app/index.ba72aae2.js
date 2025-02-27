function e(e){return e&&e.__esModule?e.default:e}var t,n,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};t=o,n=function(){function e(e,t){for(let n=0;n<t.length;n++){const a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);let a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}let a,o,i,r,s;const l=(a=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],o=function(){function n(e){const a=e.targetModal,o=e.triggers,i=void 0===o?[]:o,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,u=e.openTrigger,d=void 0===u?"data-micromodal-trigger":u,g=e.closeTrigger,f=void 0===g?"data-micromodal-close":g,h=e.openClass,m=void 0===h?"is-open":h,p=e.disableScroll,y=void 0!==p&&p,v=e.disableFocus,b=void 0!==v&&v,w=e.awaitCloseAnimation,k=void 0!==w&&w,S=e.awaitOpenAnimation,A=void 0!==S&&S,E=e.debugMode,C=void 0!==E&&E;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.modal=document.getElementById(a),this.config={debugMode:C,disableScroll:y,openTrigger:d,closeTrigger:f,openClass:m,onShow:s,onClose:c,awaitCloseAnimation:k,awaitOpenAnimation:A,disableFocus:b},i.length>0&&this.registerTriggers.apply(this,t(i)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}let o,i;return o=n,i=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){const e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){const t=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",t,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){const e=this.config.openClass;this.modal.addEventListener("animationend",(function n(){t.classList.remove(e),t.removeEventListener("animationend",n,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){const t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){const e=this.modal.querySelectorAll(a);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){const e=this;if(!this.config.disableFocus){const t=this.getFocusableNodes();if(0!==t.length){const n=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));n.length>0&&n[0].focus(),0===n.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){let t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){const n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&n===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}],e(o.prototype,i),n}(),i=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')),!t)return!0;for(const e in t)r(e);return!0},{init:function(e){const n=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),a=t(document.querySelectorAll("[".concat(n.openTrigger,"]"))),r=function(e,t){const n=[];return e.forEach((function(e){const a=e.attributes[t].value;void 0===n[a]&&(n[a]=[]),n[a].push(e)})),n}(a,n.openTrigger);if(!0!==n.debugMode||!1!==s(a,r))for(const e in r){const a=r[e];n.targetModal=e,n.triggers=t(a),i=new o(n)}},show:function(e,t){const n=t||{};n.targetModal=e,!0===n.debugMode&&!1===r(e)||(i&&i.removeEventListeners(),(i=new o(n)).showModal())},close:function(e){e?i.closeModalById(e):i.closeModal()}});return"undefined"!=typeof window&&(window.MicroModal=l),l},"object"==typeof o?o=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).MicroModal=n();var i={},r="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},s=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=r.Prism={manual:r.Prism&&r.Prism.manual,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=n.util.clone(e[a]));return t;case"Array":return e.map((function(e){return n.util.clone(e)}))}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var o in t)a[o]=t[o];return a},insertBefore:function(e,t,a,o){var i=(o=o||n.languages)[e];if(2==arguments.length){for(var r in a=arguments[1])a.hasOwnProperty(r)&&(i[r]=a[r]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var r in a)a.hasOwnProperty(r)&&(s[r]=a[r]);s[l]=i[l]}return n.languages.DFS(n.languages,(function(t,n){n===o[e]&&t!=e&&(this[t]=s)})),o[e]=s},DFS:function(e,t,a,o){for(var i in o=o||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||o[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||o[n.util.objId(e[i])]||(o[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,o)):(o[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,o)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var o,i=a.elements||document.querySelectorAll(a.selector),r=0;o=i[r++];)n.highlightElement(o,!0===e,a.callback)},highlightElement:function(t,a,o){for(var i,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var c={element:t,language:i,grammar:s,code:t.textContent};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(n.hooks.run("before-highlight",c),c.element.textContent=c.code,n.hooks.run("after-highlight",c)),void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),a&&r.Worker){var u=new Worker(n.filename);u.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(t),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,t,o){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),o)},matchGrammar:function(e,t,a,o,i,r,s){var l=n.Token;for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==s)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var g=u[d],f=g.inside,h=!!g.lookbehind,m=!!g.greedy,p=0,y=g.alias;if(m&&!g.pattern.global){var v=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,v+"g")}g=g.pattern||g;for(var b=o,w=i;b<t.length;w+=t[b].length,++b){var k=t[b];if(t.length>e.length)return;if(!(k instanceof l)){g.lastIndex=0;var S=1;if(!(M=g.exec(k))&&m&&b!=t.length-1){if(g.lastIndex=w,!(M=g.exec(e)))break;for(var A=M.index+(h?M[1].length:0),E=M.index+M[0].length,C=b,j=w,T=t.length;T>C&&(E>j||!t[C].type&&!t[C-1].greedy);++C)A>=(j+=t[C].length)&&(++b,w=j);if(t[b]instanceof l||t[C-1].greedy)continue;S=C-b,k=e.slice(w,j),M.index-=w}if(M){h&&(p=M[1].length);E=(A=M.index+p)+(M=M[0].slice(p)).length;var M,L=k.slice(0,A),x=k.slice(E),F=[b,S];L&&(++b,w+=L.length,F.push(L));var O=new l(c,f?n.tokenize(M,f):M,y,M,m);if(F.push(O),x&&F.push(x),Array.prototype.splice.apply(t,F),1!=S&&n.matchGrammar(e,t,a,b,w,!0,c),r)break}else if(r)break}}}}},tokenize:function(e,t){var a=[e],o=t.rest;if(o){for(var i in o)t[i]=o[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var o,i=0;o=a[i++];)o(t)}}},a=n.Token=function(e,t,n,a,o){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!o};if(a.stringify=function(e,t,o){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map((function(n){return a.stringify(n,t,e)})).join("");var i={type:e.type,content:a.stringify(e.content,t,o),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:o};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var r="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}n.hooks.run("wrap",i);var s=Object.keys(i.attributes).map((function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(s?" "+s:"")+">"+i.content+"</"+i.tag+">"},!r.document)return r.addEventListener?(r.addEventListener("message",(function(e){var t=JSON.parse(e.data),a=t.language,o=t.code,i=t.immediateClose;r.postMessage(n.highlight(o,n.languages[a],a)),i&&r.close()}),!1),r.Prism):r.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(n.filename=o.src,n.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),r.Prism}();i&&(i=s),void 0!==a&&(a.Prism=s),s.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),s.languages.xml=s.languages.markup,s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},s.languages.css.atrule.inside.rest=s.util.clone(s.languages.css),s.languages.markup&&(s.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:s.languages.css,alias:"language-css"}}),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:s.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},s.languages.markup.tag)),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),s.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),s.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}}}),s.languages.markup&&s.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:s.languages.javascript,alias:"language-javascript"}}),s.languages.js=s.languages.javascript,e(o).init({openTrigger:"data-custom-open",disableScroll:!1,awaitCloseAnimation:!0}),document.querySelector(".js-modal-trigger").addEventListener("click",(function(t){e(o).show("modal-2",{debugMode:!0,disableScroll:!0,onShow:function(e){document.querySelector(".js-body").classList.add(e.id)},onClose:function(e){document.querySelector(".js-body").classList.remove(e.id)},closeTrigger:"data-custom-close",awaitCloseAnimation:!0})})),document.querySelector(".js-modal-close-trigger").addEventListener("click",(function(t){t.preventDefault(),e(o).close("modal-2")}));let l=document.querySelectorAll(".heading");const c={};Array.prototype.forEach.call(l,(function(e){c[e.id]=e.offsetTop})),window.onscroll=function(){const e=document.documentElement.scrollTop||document.body.scrollTop;for(l in c)c[l]<=e&&(document.querySelector(".active").classList.remove("blue","fw6","active"),document.querySelector("a[href*="+l+"]").classList.add("blue","fw6","active"))};
