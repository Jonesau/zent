(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[509],{70509:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>x});var t=a(73450),p=a(27378),e=a(57318),o=a(32925),c=a(39215),l=a(56377),u=a(24246);function i(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function k(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?i(Object(a),!0).forEach((function(s){(0,t.Z)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var r=function(){return(0,u.jsx)(o.C,{count:5,children:(0,u.jsx)(c.J,{type:"bell-o",className:"demo-cont"})})},d=function(){return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"zent-badge-demo-wrapper",children:[(0,u.jsx)("span",{children:"shop messages"}),(0,u.jsx)(o.C,{count:100})]})})},m=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.C,{count:99,children:(0,u.jsx)(c.J,{type:"bell-o",className:"demo-cont"})}),(0,u.jsx)(o.C,{count:120,children:(0,u.jsx)(c.J,{type:"bell-o",className:"demo-cont"})}),(0,u.jsx)(o.C,{count:120,maxCount:10,children:(0,u.jsx)(c.J,{type:"bell-o",className:"demo-cont"})})]})},h=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showZero:!0}),(0,t.Z)(this,"handleChange",(n=>{this.setState({showZero:n})}))}render(){var n=this.state.showZero;return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.C,{count:0,showZero:n,children:(0,u.jsx)(c.J,{type:"bell-o",className:"demo-cont"})}),(0,u.jsx)(l.r,{size:"small",checked:n,onChange:this.handleChange})]})}}return(0,u.jsx)(n,{})},g=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showDot:!0}),(0,t.Z)(this,"handleChange",(n=>{this.setState({showDot:n})}))}render(){var n=this.state.showDot;return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.C,{dot:n,children:(0,u.jsx)(c.J,{type:"bell-o",className:"demo-cont"})}),(0,u.jsx)(o.C,{dot:n,offset:[-4,-2],children:"shop messages"}),(0,u.jsx)(l.r,{size:"small",checked:n,onChange:this.handleChange})]})}}return(0,u.jsx)(n,{})},b=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.C,{count:5,offset:[-8,-8],children:(0,u.jsx)("div",{className:"zent-badge-demo-square"})}),(0,u.jsx)(o.C,{dot:!0,offset:[-2,-2],children:(0,u.jsx)("div",{className:"zent-badge-demo-square"})})]})};function f(n){return(0,u.jsx)(n.tag,k(k({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function y(n){return(0,u.jsx)(f,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function v(n){return(0,u.jsx)(f,{tag:"style",html:n.style})}function w(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),w(n.parentNode,s);return s}class j extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return(0,u.jsxs)("div",{className:"zandoc-react-demo",children:[(0,u.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,u.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,u.jsx)("div",{className:"zandoc-react-demo__title",children:(0,u.jsx)("p",{children:a||""})}),(0,u.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,u.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,u.jsx)(f,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class x extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&(0,e.l)(document.documentElement,0,w(s,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(v,{style:".zent-badge .demo-cont {\n\twidth: 40px;\n\theight: 40px;\n\tline-height: 40px;\n\tborder-radius: 20px;\n\tbackground: #38f;\n\tcolor: #fff;\n\tfont-size: 20px;\n}\n.zent-badge {\n\tmargin-right: 30px;\n}\n\n.zent-badge-demo-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.zent-badge-demo-square {\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 4px;\n\tbackground: #eee;\n}"}),p.createElement(y,{html:'<h2 class="anchor-heading"><a href="#badge">¶</a><a href="javascript:void(0)" id="badge" class="anchor-point"></a>Badge</h2>\n<p>The prompt element located in the upper right corner of the main object, indicating the change of the main object</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<h4 class="anchor-heading"><a href="#suggest">¶</a><a href="javascript:void(0)" id="suggest" class="anchor-point"></a>Suggest</h4>\n<ul>\n<li>When the linked page has content or status changes, it is displayed at the entrance to prompt the change;</li>\n<li>When you need to prompt the specific quantity of change (such as order quantity, message quantity), it is recommended to use the badge with numbers;</li>\n<li>When you need to remind the status of changes (such as order status changes), it is recommended to use the red dot badge;</li>\n<li>When you click on the linked page and read the changed content, the badge disappears (or reduces the corresponding number of reads);</li>\n</ul>\n<h4 class="anchor-heading"><a href="#forbid">¶</a><a href="javascript:void(0)" id="forbid" class="anchor-point"></a>Forbid</h4>\n<ul>\n<li>Entrances at the same level need to have a unified badge style. In principle, there is no mixed use of "digital badge + red dot badge" at the same level of entry.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),p.createElement(j,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Badge</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(r)),p.createElement(j,{title:"Standalone badge, in the right of text",id:"Demosinglebadge",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Badge</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-badge-demo-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>shop messages<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span><span class="token maybe-class-name">Badge</span> count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token operator">/</span> <span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(d)),p.createElement(j,{title:"Set the max number to show",id:"Demomaxnum",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Badge</span><span class="token punctuation">,</span><span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span> <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(m)),p.createElement(j,{title:"Set whether to display zero",id:"Demoshowzero",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Badge</span><span class="token punctuation">,</span><span class="token maybe-class-name">Icon</span><span class="token punctuation">,</span><span class="token maybe-class-name">Switch</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>showZero<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">showZero</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showZero <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> showZero <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">showZero</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showZero<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showZero<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(h)),p.createElement(j,{title:"Red dot without specific number",id:"Demodot",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Badge</span><span class="token punctuation">,</span><span class="token maybe-class-name">Icon</span><span class="token punctuation">,</span><span class="token maybe-class-name">Switch</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>showDot<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">showDot</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showDot <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> showDot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showDot<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bell-o<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-cont<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showDot<span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>shop messages<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showDot<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(g)),p.createElement(j,{title:"Custom offset",id:"Demooffset",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Badge</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-badge-demo-square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">dot</span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-badge-demo-square<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(b)),p.createElement(y,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>The number of messages to show</td>\n<td><code>number</code></td>\n<td>No</td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>maxCount</td>\n<td>Max count to show</td>\n<td><code>number</code></td>\n<td>No</td>\n<td><code>99</code></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>Whether to show red dot without number</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showZero</td>\n<td>Whether to show badge when count is zero</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Badge offset, \n<code>[x, y]</code></td>\n<td><code>array</code></td>\n<td>No</td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Custom style</td>\n<td><code>object</code></td>\n<td>No</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}},32925:(n,s,a)=>{"use strict";a.d(s,{C:()=>u});var t=a(59312),p=a(24246),e=a(27378),o=a(60042),c=a.n(o),l={},u=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(s,n),s.prototype.renderCount=function(){var n=this.props,s=n.count,a=n.maxCount,e=n.dot,o=n.showZero,c=n.offset,u=n.style,i=Array.isArray(c)&&2===c.length?{right:c[0],top:c[1]}:l,k=u?(0,t.pi)((0,t.pi)({},u),i):i;return e?(0,p.jsx)("span",{className:"zent-badge-dot",style:k,"data-zv":"10.0.0-rc.9"},void 0):s>0||0===s&&o?(0,p.jsx)("span",(0,t.pi)({className:"zent-badge-count",style:k,"data-zv":"10.0.0-rc.9"},{children:(0,p.jsx)("span",(0,t.pi)({className:"zent-badge-count-num","data-zv":"10.0.0-rc.9"},{children:s>a?a+"+":s}),void 0)}),void 0):null},s.prototype.render=function(){var n,s=this.props,a=s.className,e=s.children,o=c()(((n={"zent-badge":!0,"zent-badge--has-content":e,"zent-badge--no-content":!e})[a]=!!a,n["zent-badge-none-cont"]=!e,n));return(0,p.jsxs)("div",(0,t.pi)({className:o,"data-zv":"10.0.0-rc.9"},{children:[e?(0,p.jsx)("div",(0,t.pi)({className:"zent-badge-content","data-zv":"10.0.0-rc.9"},{children:e}),void 0):null,this.renderCount()]}),void 0)},s.defaultProps={count:0,maxCount:99,dot:!1,showZero:!1,className:""},s}(e.PureComponent)},56377:(n,s,a)=>{"use strict";a.d(s,{r:()=>u});var t=a(59312),p=a(24246),e=a(27378),o=a(60042),c=a.n(o),l=a(1348),u=function(n){function s(){var s=null!==n&&n.apply(this,arguments)||this;return s.toggle=function(){var n=s.props,a=n.onChange,t=n.checked;a&&a(!t)},s}return(0,t.ZT)(s,n),s.prototype.render=function(){var n,s=this.props,a=s.className,t=s.size,e=s.disabled,o=void 0===e?this.context.value:e,l=s.loading,u=s.checked,i=o||l,k=c()(((n={})["zent-switch-"+t]="default"!==t,n["zent-switch-disabled"]=i,n["zent-switch-loading"]=l,n["zent-switch-checked"]=u,n),"zent-switch",a);return(0,p.jsx)("div",{className:k,onClick:i?void 0:this.toggle,"data-zv":"10.0.0-rc.9"},void 0)},s.defaultProps={size:"default"},s.contextType=l.d,s}(e.Component);s.Z=u}}]);