(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[3345],{33345:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>N});var t=a(73450),p=a(27378),o=a(57318),c=a(3454),e=a(23476),l=a(24246);function u(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?u(Object(a),!0).forEach((function(s){(0,t.Z)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var k=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(c.z,{onClick:()=>e.g.info("常规提示"),children:"常规提示"}),(0,l.jsx)(c.z,{onClick:()=>e.g.success("成功通知"),children:"成功通知"}),(0,l.jsx)(c.z,{onClick:()=>e.g.warn("警告通知"),children:"警告通知"}),(0,l.jsx)(c.z,{onClick:()=>e.g.error("错误通知"),children:"错误通知"})]})},r=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(c.z,{onClick:()=>e.g.config({duration:1e3}),children:"调整持续时间为1s"}),(0,l.jsx)(c.z,{onClick:()=>e.g.config({duration:2e3}),children:"2s"}),(0,l.jsx)(c.z,{onClick:()=>e.g.config({duration:3e3}),children:"3s"}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)(c.z,{onClick:()=>e.g.info("常规提示"),children:"常规提示"}),(0,l.jsx)(c.z,{onClick:()=>e.g.success("成功通知"),children:"成功通知"}),(0,l.jsx)(c.z,{onClick:()=>e.g.warn("警告通知"),children:"警告通知"}),(0,l.jsx)(c.z,{onClick:()=>e.g.error("错误通知"),children:"错误通知"})]})},d=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(c.z,{onClick:()=>e.g.success("持续1s",1e3),children:"持续1s"})})},m=function(){return(0,l.jsx)(c.z,{onClick:function(){e.g.success((0,l.jsxs)("div",{children:[(0,l.jsx)("span",{style:{color:"#f67"},children:"颜色"}),(0,l.jsx)("i",{children:"斜体"}),(0,l.jsx)("b",{children:"粗体"})]}))},children:"自定义内容通知"})},g=function(){function n(){alert("Notify has over")}return(0,l.jsx)(c.z,{onClick:()=>e.g.success("通知结束回调函数",1e3,n),children:"自定义通知结束回调"})},f=function(){function n(){}return(0,l.jsxs)("div",{children:[(0,l.jsx)(c.z,{onClick:()=>e.g.success("成功通知",2e3,n),children:"成功通知"}),(0,l.jsx)(c.z,{onClick:()=>e.g.clear(),children:"清除通知"})]})};function y(n){return(0,l.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return(0,l.jsx)(y,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function b(n){return(0,l.jsx)(y,{tag:"style",html:n.style})}function j(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),j(n.parentNode,s);return s}class v extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return(0,l.jsxs)("div",{className:"zandoc-react-demo",children:[(0,l.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,l.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,l.jsx)("div",{className:"zandoc-react-demo__title",children:(0,l.jsx)("p",{children:a||""})}),(0,l.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,l.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,l.jsx)(y,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class N extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&(0,o.l)(document.documentElement,0,j(s,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(b,{style:""}),p.createElement(h,{html:'<h2 class="anchor-heading"><a href="#notify-qing-ti-shi">¶</a><a href="javascript:void(0)" id="notify-qing-ti-shi" class="anchor-point"></a>Notify 轻提示</h2>\n<p>全局展示通知提醒信息。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>主要用于提示简要的文字信息。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),p.createElement(v,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">info</span><span class="token punctuation">(</span><span class="token string">\'常规提示\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>常规提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'成功通知\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      成功通知\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">warn</span><span class="token punctuation">(</span><span class="token string">\'警告通知\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>警告通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">\'错误通知\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>错误通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(k)),p.createElement(v,{title:"通过 config 调整全局默认时间",id:"Demoglobalduration",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>调整持续时间为<span class="token number">1</span>s<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token number">2</span>s<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token number">3</span>s<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">info</span><span class="token punctuation">(</span><span class="token string">\'常规提示\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>常规提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'成功通知\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>成功通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">warn</span><span class="token punctuation">(</span><span class="token string">\'警告通知\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>警告通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">\'错误通知\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>错误通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(r)),p.createElement(v,{title:"自定义通知显示时间",id:"Democustomshowtime",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'持续1s\'</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      持续<span class="token number">1</span>s\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(d)),p.createElement(v,{title:"自定义通知内容",id:"Democustomcontent",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">customContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">\'#f67\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>颜色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span>斜体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>粗体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customContent<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>自定义内容通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(m)),p.createElement(v,{title:"自定义通知结束回调",id:"Democustomcallback",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">closeCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'Notify has over\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'通知结束回调函数\'</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> closeCallback<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>自定义通知结束回调<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(g)),p.createElement(v,{title:"清除屏幕所有通知",id:"Democlear",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">closeCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'Callback has call\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'成功通知\'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> closeCallback<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      成功通知\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>清除通知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(f)),p.createElement(h,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<ul>\n<li><code>Notify.info(text: node, duration?: number, callback?: () => ()): number</code></li>\n<li><code>Notify.success(text: node, duration?: number, callback?: () => ()): number</code></li>\n<li><code>Notify.warn(text: node, duration?: number, callback?: () => ()): number</code></li>\n<li><code>Notify.error(text: node, duration?: number, callback?: () => ()): number</code></li>\n</ul>\n<p><code>Notify.info</code>，<code>Notify.success</code>，<code>Notify.warn</code> 和 <code>Notify.error</code> 方法会返回一个 <code>id</code>，这个 <code>id</code> 可以作为 <code>Notify.clear(id)</code> 的入参，用于关闭指定 notify。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>通知文案</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>持续时间</td>\n<td>number</td>\n<td><code>3500</code></td>\n</tr>\n<tr>\n<td>callback</td>\n<td>关闭时的回调</td>\n<td>func</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li><code>Notify.clear(number: id): void</code></li>\n</ul>\n<p>如果 <code>Notify.clear</code> 调用时没有传入 <code>id</code> 参数，所有当前未关闭的实例都会被关闭。</p>\n<ul>\n<li><code>Notify.config(options): void</code></li>\n</ul>\n<p><code>options</code> 当前只支持一个设置：<code>duration</code>，可以用来全局设置 <code>Notify</code> 的关闭延迟时间。</p>'}))}}}}]);