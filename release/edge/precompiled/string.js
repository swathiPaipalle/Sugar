var Cb=[{type:"a",shift:65248,start:65,end:90},{type:"a",shift:65248,start:97,end:122},{type:"n",shift:65248,start:48,end:57},{type:"p",shift:65248,start:33,end:47},{type:"p",shift:65248,start:58,end:64},{type:"p",shift:65248,start:91,end:96},{type:"p",shift:65248,start:123,end:126}],Db={},Eb={},Fb=/[\u0020-\u00A5]|[\uFF61-\uFF9F][\uff9e\uff9f]?/g,Gb=/[\u3000-\u301C]|[\u301A-\u30FC]|[\uFF01-\uFF60]|[\uFFE0-\uFFE6]/g,Hb=/[\u30ab\u30ad\u30af\u30b1\u30b3\u30b5\u30b7\u30b9\u30bb\u30bd\u30bf\u30c1\u30c4\u30c6\u30c8\u30cf\u30d2\u30d5\u30d8\u30db]/,
Ib=/[\u30cf\u30d2\u30d5\u30d8\u30db\u30f2]/;function Jb(a,b,c,d){var e=A(b).join("");e=e.replace(/all/,"").replace(/(\w)lphabet|umbers?|atakana|paces?|unctuation/g,"$1");return a.replace(c,function(g){return d[g]&&(!e||e.has(d[g].type))?d[g].to:g})}function Y(a,b,c){Db[b]={type:a,to:c};Eb[c]={type:a,to:b}}var Kb,Lb;
x(u,j,m,{escapeRegExp:function(){return R(this)},escapeURL:function(a){return a?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(a){return a?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},encodeBase64:function(){return Kb(this)},decodeBase64:function(){return Lb(this)},each:function(a,b){var c,
d;if(K(a)){b=a;a=/[\s\S]/g}else if(a)if(E(a))a=s(R(a),"gi");else{if(M(a))a=s(a.source,sa(a,"g"))}else a=/[\s\S]/g;c=this.match(a)||[];if(b)for(d=0;d<c.length;d++)c[d]=b.call(this,c[d],d,c)||c[d];return c},shift:function(a){var b="";a=a||0;this.codes(function(c){b+=u.fromCharCode(c+a)});return b},codes:function(a){for(var b=[],c=0;c<this.length;c++){var d=this.charCodeAt(c);b.push(d);a&&a.call(this,d,c)}return b},chars:function(a){return this.each(a)},words:function(a){return this.trim().each(/\S+/g,
a)},lines:function(a){return this.trim().each(/^.*$/gm,a)},paragraphs:function(a){var b=this.trim().split(/[\r\n]{2,}/);return b=b.map(function(c){if(a)var d=a.call(c);return d?d:c})},startsWith:function(a,b){if(G(b))b=j;var c=M(a)?a.source.replace("^",""):R(a);return s("^"+c,b?"":"i").test(this)},endsWith:function(a,b){if(G(b))b=j;var c=M(a)?a.source.replace("$",""):R(a);return s(c+"$",b?"":"i").test(this)},isBlank:function(){return this.trim().length===0},has:function(a){return this.search(M(a)?
a:R(a))!==-1},add:function(a,b){b=G(b)?this.length:b;return this.slice(0,b)+a+this.slice(b)},remove:function(a){return this.replace(a,"")},hankaku:function(){return Jb(this,arguments,Gb,Eb)},zenkaku:function(){return Jb(this,arguments,Fb,Db)},hiragana:function(a){var b=this;if(a!==m)b=b.zenkaku("k");return b.replace(/[\u30A1-\u30F6]/g,function(c){return c.shift(-96)})},katakana:function(){return this.replace(/[\u3041-\u3096]/g,function(a){return a.shift(96)})},reverse:function(){return this.split("").reverse().join("")},
compact:function(){return this.trim().replace(/([\r\n\s\u3000])+/g,function(a,b){return b==="\u3000"?b:" "})},at:function(){return ta(this,arguments,j)},from:function(a){return this.slice(a)},to:function(a){if(G(a))a=this.length;return this.slice(0,a)},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(u.Inflector&&u.Inflector.acronymRegExp,function(a,b){return(b>0?"_":"")+a.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,
"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(a){return this.underscore().replace(/(^|_)([^_]+)/g,function(b,c,d,e){b=d;b=(c=u.Inflector)&&c.acronyms[b];b=E(b)?b:void 0;e=a!==m||e>0;if(b)return e?b:b.toLowerCase();return e?d.capitalize():d})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var a=this;A(arguments.length>0?arguments:[""],function(b){a=a.replace(s("</?"+R(b)+"[^<>]*>","gi"),"")});return a},removeTags:function(){var a=
this;A(arguments.length>0?arguments:["\\S+"],function(b){b=s("<("+b+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");a=a.replace(b,"")});return a},truncate:function(a,b,c,d){var e="",g="",f=this.toString(),i="["+oa()+"]+",h="[^"+oa()+"]*",l=s(i+h+"$");d=G(d)?"...":u(d);if(f.length<=a)return f;switch(c){case "left":a=f.length-a;e=d;f=f.slice(a);l=s("^"+h+i);break;case "middle":a=P(a/2);g=d+f.slice(f.length-a).trimLeft();f=f.slice(0,a);break;default:a=a;g=d;f=f.slice(0,a)}if(b===m&&this.slice(a,a+1).match(/\S/))f=
f.remove(l);return e+f+g},pad:function(a,b){return pa(b,a)+this+pa(b,a)},padLeft:function(a,b){return pa(b,a)+this},padRight:function(a,b){return this+pa(b,a)},first:function(a){if(G(a))a=1;return this.substr(0,a)},last:function(a){if(G(a))a=1;return this.substr(this.length-a<0?0:this.length-a)},repeat:function(a){var b="",c=0;if(L(a)&&a>0)for(;c<a;){b+=this;c++}return b},toNumber:function(a){var b=this.replace(/,/g,"");return b.match(/\./)?parseFloat(b):parseInt(b,a||10)},capitalize:function(a){var b;
return this.toLowerCase().replace(a?/[\s\S]/g:/^\S/,function(c){var d=c.toUpperCase(),e;e=b?c:d;b=d!==c;return e})},assign:function(){var a={};A(arguments,function(b,c){if(ha(b))ka(a,b);else a[c+1]=b});return this.replace(/\{([^{]+?)\}/g,function(b,c){return ja(a,c)?a[c]:b})}});
x(u,j,function(a){return M(a)},{split:function(a,b){var c=[],d=0,e=sa(a,"g");a=new s(a.source,e);var g,f,i;s.oa||(g=s("^"+a.source+"$(?!\\s)",e));if(G(b)||b<0)b=Infinity;else{b=P(b);if(!b)return[]}for(;f=a.exec(this);){e=f.index+f[0].length;if(e>d){c.push(this.slice(d,f.index));!s.oa&&f.length>1&&f[0].replace(g,function(){for(var h=1;h<arguments.length-2;h++)if(G(arguments[h]))f[h]=void 0});f.length>1&&f.index<this.length&&r.prototype.push.apply(c,f.slice(1));i=f[0].length;d=e;if(c.length>=b)break}a.lastIndex===
f.index&&a.lastIndex++}if(d===this.length){if(i||!a.test(""))c.push("")}else c.push(this.slice(d));return c.length>b?c.slice(0,b):c}});x(u,j,m,{insert:u.prototype.add});
(function(a){if(this.btoa){Kb=this.btoa;Lb=this.atob}else{var b=/[^A-Za-z0-9\+\/\=]/g;Kb=function(c){var d="",e,g,f,i,h,l,n=0;do{e=c.charCodeAt(n++);g=c.charCodeAt(n++);f=c.charCodeAt(n++);i=e>>2;e=(e&3)<<4|g>>4;h=(g&15)<<2|f>>6;l=f&63;if(isNaN(g))h=l=64;else if(isNaN(f))l=64;d=d+a.charAt(i)+a.charAt(e)+a.charAt(h)+a.charAt(l)}while(n<c.length);return d};Lb=function(c){var d="",e,g,f,i,h,l=0;if(c.match(b))throw Error("String contains invalid base64 characters");c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");
do{e=a.indexOf(c.charAt(l++));g=a.indexOf(c.charAt(l++));i=a.indexOf(c.charAt(l++));h=a.indexOf(c.charAt(l++));e=e<<2|g>>4;g=(g&15)<<4|i>>2;f=(i&3)<<6|h;d+=u.fromCharCode(e);if(i!=64)d+=u.fromCharCode(g);if(h!=64)d+=u.fromCharCode(f)}while(l<c.length);return d}}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
(function(){var a;Cb.forEach(function(b){N(b.start,b.end,function(c){Y(b.type,u.fromCharCode(c),u.fromCharCode(c+b.shift))})});"\u30a2\u30a4\u30a6\u30a8\u30aa\u30a1\u30a3\u30a5\u30a7\u30a9\u30ab\u30ad\u30af\u30b1\u30b3\u30b5\u30b7\u30b9\u30bb\u30bd\u30bf\u30c1\u30c4\u30c3\u30c6\u30c8\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d2\u30d5\u30d8\u30db\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e3\u30e6\u30e5\u30e8\u30e7\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f2\u30f3\u30fc\u30fb".each(function(b,c){a="\uff71\uff72\uff73\uff74\uff75\uff67\uff68\uff69\uff6a\uff6b\uff76\uff77\uff78\uff79\uff7a\uff7b\uff7c\uff7d\uff7e\uff7f\uff80\uff81\uff82\uff6f\uff83\uff84\uff85\uff86\uff87\uff88\uff89\uff8a\uff8b\uff8c\uff8d\uff8e\uff8f\uff90\uff91\uff92\uff93\uff94\uff6c\uff95\uff6d\uff96\uff6e\uff97\uff98\uff99\uff9a\uff9b\uff9c\uff66\uff9d\uff70\uff65".charAt(c);
Y("k",a,b);b.match(Hb)&&Y("k",a+"\uff9e",b.shift(1));b.match(Ib)&&Y("k",a+"\uff9f",b.shift(2))});"\u3002\u3001\u300c\u300d\uffe5\uffe0\uffe1".each(function(b,c){Y("p","\uff61\uff64\uff62\uff63\u00a5\u00a2\u00a3".charAt(c),b)});Y("k","\uff73\uff9e","\u30f4");Y("k","\uff66\uff9e","\u30fa");Y("s"," ","\u3000")})();
[{ca:["Arabic"],source:"\u0600-\u06ff"},{ca:["Cyrillic"],source:"\u0400-\u04ff"},{ca:["Devanagari"],source:"\u0900-\u097f"},{ca:["Greek"],source:"\u0370-\u03ff"},{ca:["Hangul"],source:"\uac00-\ud7af\u1100-\u11ff"},{ca:["Han","Kanji"],source:"\u4e00-\u9fff\uf900-\ufaff"},{ca:["Hebrew"],source:"\u0590-\u05ff"},{ca:["Hiragana"],source:"\u3040-\u309f\u30fb-\u30fc"},{ca:["Kana"],source:"\u3040-\u30ff\uff61-\uff9f"},{ca:["Katakana"],source:"\u30a0-\u30ff\uff61-\uff9f"},{ca:["Latin"],source:"\u0001-\u0080-\u00ff\u0100-\u017f\u0180-\u024f"},
{ca:["Thai"],source:"\u0e00-\u0e7f"}].forEach(function(a){var b=s("^["+a.source+"\\s]+$"),c=s("["+a.source+"]");a.ca.forEach(function(d){fa(u.prototype,"is"+d,function(){return b.test(this.trim())});fa(u.prototype,"has"+d,function(){return c.test(this)})})});