(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[1415],{77148:(e,t,n)=>{"use strict";n.d(t,{F:()=>_});var i=n(59312),a=n(24246),r=n(27378),l=n(60042),s=n.n(l),c=n(45300),o=n(26608),u=n(28627).Z,d=n(52074),f=n(36055),h=n(98407),m=n(82285),v=function(e){var t=e.showSearch,n=e.classNamePrefix,r=e.searchPlaceholder,l=e.i18n,s=e.handleInputChange,c=e.inputVal;return t?(0,a.jsx)("div",(0,i.pi)({className:n+"__search","data-zv":"10.0.0-rc.9"},{children:(0,a.jsx)(m.I,{placeholder:r||l.placeholder,icon:"search",onChange:s,value:c,showClear:!0},void 0)}),void 0):null},g=n(68150),p=function(e){var t=e.classNamePrefix,n=e.isAllChecked,l=e.handleCheckBoxChange,s=e.compontentDisabled,c=e.i18n,o=e.selectedKeysLength,u=e.listDataLength,d=e.title,f=(0,r.useCallback)((function(e){var t=e.item,n=e.items,i=u+" "+(u>1?n:t);return o>0?d?d+"（"+o+"/"+i+"）":o+"/"+i:d?d+"（"+i+"）":i}),[d,u,o]);return(0,a.jsx)("div",(0,i.pi)({className:t+"__allCheckbox","data-zv":"10.0.0-rc.9"},{children:(0,a.jsx)(g.ZP,(0,i.pi)({checked:n,indeterminate:o&&!n,onChange:l,disabled:s},{children:f(c)}),void 0)}),void 0)},y=function(e){var t=e.prefix,n=e.title,l=e.dataSets,m=e.selectedKeys,g=e.handleSelectChange,y=e.keyName,b=e.filterOption,C=e.showSearch,N=e.searchPlaceholder,k=e.list,_=e.pagination,K=e.disabled,S=t+"__item",x="object"==typeof _?_.pageSize:10,w=k.columns,L=k.selection,P=(0,i._T)(k,["columns","selection"]),j=(0,r.useState)(""),R=j[0],z=j[1],Z=(0,r.useState)(l),M=Z[0],O=Z[1],T=(0,r.useState)(1),A=T[0],J=T[1],D=(0,r.useMemo)((function(){return(0,h.Q1)(M,y)}),[M,y]),G=(0,r.useMemo)((function(){return m.filter((function(e){return!D.includes(e)})).length}),[D,m]),B=(0,r.useMemo)((function(){return G&&G===M.filter((function(e){return!e.disabled})).length}),[M,G]),E=(0,r.useCallback)((function(e){var t=e.disabled;return{disabled:K||t}}),[K]),I=(0,r.useCallback)((function(){var e=M.map((function(e){return e[y]}));g(e.filter((function(e){return B?D.includes(e)&&m.includes(e):!D.includes(e)||m.includes(e)})))}),[g,M,m,y,D,B]),Q=(0,r.useCallback)((function(e){var t=e.target.value;z(t)}),[]),H=(0,r.useCallback)((function(e){var t=e,n=t[y];!t.disabled&&!K&&g(m.includes(n)?m.filter((function(e){return n!==e})):m.concat(n))}),[g,m,y,K]),V=(0,r.useCallback)((function(e){var t=e.current;J(t)}),[]),F=(0,r.useMemo)((function(){return _?M.slice(A*x-x,A*x):M}),[M,A,_,x]),q=(0,r.useMemo)((function(){var e;return(null===(e=w[0])||void 0===e?void 0:e.title)?w:w.map((function(e){return(0,i.pi)((0,i.pi)({},e),{title:""})}))}),[w]);return(0,r.useEffect)((function(){O(C&&b?l.filter((function(e){return b(R,e)})):l)}),[l,b,R,C]),(0,r.useEffect)((function(){if(_&&M.length){var e=Math.ceil(M.length/x);A>e&&J(e)}}),[M,A,x,_]),(0,a.jsx)(d.Z,(0,i.pi)({componentName:"Transfer"},{children:function(e){var t,r,l,d;return(0,a.jsxs)("div",(0,i.pi)({className:s()(S,(t={},t[S+"--disabled"]=K,t)),"data-zv":"10.0.0-rc.9"},{children:[(0,a.jsx)(p,{classNamePrefix:S,isAllChecked:B,handleCheckBoxChange:I,compontentDisabled:K,i18n:e,selectedKeysLength:G,listDataLength:M.length,title:n},void 0),(0,a.jsx)(v,{showSearch:C,searchPlaceholder:N,handleInputChange:Q,inputVal:R,classNamePrefix:S,i18n:e},void 0),(0,a.jsx)(u,(0,i.pi)({rowKey:y,className:s()(S+"__grid",(r={},r[S+"__header--hidden"]=0==!!(null===(d=w[0])||void 0===d?void 0:d.title),r)),rowClassName:s()(S+"__grid__row",(l={},l[S+"__grid__row--disabled"]=K,l)),datasets:F,selection:{selectedRowKeys:m,onSelect:g,getCheckboxProps:(null==L?void 0:L.getCheckboxProps)||E},columns:q,onRowClick:H,emptyLabel:e.emptyLabel,scroll:{y:240}},(0,c.Z)(P,o.ij)),void 0),_&&M.length?(0,a.jsx)(f.Z,{className:S+"__pagination",current:A,pageSize:x,total:M.length,onChange:V},void 0):null]}),void 0)}}),void 0)},b=n(90347),C=n(27036),N=function(e){var t,n=e.direction,r=e.onChange,l=e.disabled,c=e.prefix;return(0,a.jsx)(b.ZP,(0,i.pi)({type:l?"default":"primary",disabled:l,onClick:r,className:c+"__arrow__button"},{children:(0,a.jsx)(C.Z,{type:o.Nm.Right===n?"right":"left",className:s()(c+"__arrow__icon",(t={},t[c+"__arrow__icon--disabled"]=l,t))},void 0)}),void 0)},k=n(1348),_=function(e){var t=e.keyName,n=e.dataSource,l=e.targetKeys,u=e.onChange,d=e.selectedKeys,f=e.onSelectChange,m=e.titles,v=e.showSearch,g=e.searchPlaceholder,p=e.filterOption,b=e.children,C=e.list,_=e.pagination,K=e.disabled,S=e.className,x="zent-transfer",w=(0,r.useState)(d),L=w[0],P=w[1],j=(0,r.useContext)(k.d).value,R=null!=K?K:j,z=(0,r.useMemo)((function(){return(0,h.Q1)(n,t)}),[n,t]),Z=(0,r.useCallback)((function(e){return Array.isArray(C)?o.Nm.Left===e?C[0]:C[1]:C}),[C]),M=(0,r.useCallback)((function(e){return o.Nm.Left===e?n.filter((function(e){var n=e[t];return!l.includes(n)})):l.map((function(e){return n.find((function(n){var i=n[t];return e===i}))}))}),[n,t,l]),O=(0,r.useCallback)((function(e){return L.filter((function(t){return o.Nm.Left===e?!l.includes(t):l.includes(t)}))}),[L,l]),T=(0,r.useCallback)((function(e){return function(t){var n=t.concat(O((0,h.fJ)(e)));f?f(n):P(n)}}),[O,f]),A=(0,r.useCallback)((function(e){var t=Z(e).columns,n=o.Nm.Left===e?null==t?void 0:t[0]:null==t?void 0:t[1];return Array.isArray(null==t?void 0:t[0])?n:t}),[Z]),J=(0,r.useCallback)((function(e){var t=e.direction,n=e.selectedKeys,i=e.handleSelectChange,r=e.title,l=e.keyName,s=e.dataSets,c=e.showSearch,o=e.searchPlaceholder,u=e.filterOption,d=e.list,f=e.prefix,h=b&&b({direction:t,selectedKeys:n,handleSelectChange:i});return null!=h?h:(0,a.jsx)(y,{title:r,direction:t,keyName:l,dataSets:s,selectedKeys:n,handleSelectChange:i,showSearch:c,searchPlaceholder:o,filterOption:u,list:d,prefix:f,pagination:_,disabled:R},void 0)}),[b,_,R]),D=(0,r.useCallback)((function(e){return function(){var t=(0,h.Gn)({direction:(0,h.fJ)(e),selectedKeys:L,targetKeys:l,disabledKeys:z}),n=L.filter((function(e){return!t.includes(e)}));P(n),u({targetKeys:o.Nm.Right===e?t.concat(l):l.filter((function(e){return!t.includes(e)})),direction:e,transferredKeys:t,selectedKeys:n})}}),[L,l,u,z]),G=(0,r.useCallback)((function(e){return(0,a.jsx)("div",(0,i.pi)({className:"zent-transfer__arrow__item","data-zv":"10.0.0-rc.9"},{children:(0,a.jsx)(N,{disabled:R||!(0,h.Gn)({direction:(0,h.fJ)(e),selectedKeys:L,targetKeys:l,disabledKeys:z}).length,direction:e,onChange:D(e),prefix:x},void 0)}),void 0)}),[D,x,R,l,L,z]);return(0,r.useEffect)((function(){P(d)}),[d]),(0,a.jsxs)("div",(0,i.pi)({className:s()("zent-transfer",S),"data-zv":"10.0.0-rc.9"},{children:[J({title:null==m?void 0:m[0],direction:o.Nm.Left,keyName:t,dataSets:(0,r.useMemo)((function(){return M(o.Nm.Left)}),[M]),selectedKeys:O(o.Nm.Left),handleSelectChange:T(o.Nm.Left),showSearch:v,searchPlaceholder:g,filterOption:p,list:(0,i.pi)({columns:A(o.Nm.Left)},(0,c.Z)(Z(o.Nm.Left),o.PR)),prefix:x,pagination:_,disabled:R}),(0,a.jsxs)("div",(0,i.pi)({className:"zent-transfer__arrow","data-zv":"10.0.0-rc.9"},{children:[G(o.Nm.Right),G(o.Nm.Left)]}),void 0),J({title:null==m?void 0:m[1],direction:o.Nm.Right,keyName:t,dataSets:(0,r.useMemo)((function(){return M(o.Nm.Right)}),[M]),selectedKeys:O(o.Nm.Right),handleSelectChange:T(o.Nm.Right),showSearch:v,searchPlaceholder:g,filterOption:p,list:(0,i.pi)({columns:A(o.Nm.Right)},(0,c.Z)(Z(o.Nm.Right),o.PR)),prefix:x,pagination:_,disabled:R})]}),void 0)};_.defaultProps={titles:["Source","Target"],targetKeys:[],selectedKeys:[],showSearch:!1,searchPlaceholder:"",className:"",pagination:!1}},26608:(e,t,n)=>{"use strict";n.d(t,{Nm:()=>i,ij:()=>r,PR:()=>l});var i,a=n(59312);!function(e){e.Left="left",e.Right="right"}(i||(i={}));var r=["rowKey","scroll","emptyLabel","onRowClick","sortBy","sortType","defaultSortType","bordered","ellipsis","components","rowProps","autoStick","autoStickOffsetTop","disableHoverHighlight","onChange","loading","className","rowClassName"],l=(0,a.ev)(["selection"],r)},36603:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(27378),a=n(26608),r=n(98407);function l(e){var t=e||{},n=t.targetKeys,l=void 0===n?[]:n,s=t.selectedKeys,c=void 0===s?[]:s,o=t.disabledKeys,u=void 0===o?[]:o,d=(0,i.useState)(l),f=d[0],h=d[1],m=(0,i.useState)(c),v=m[0],g=m[1],p=(0,i.useCallback)((function(e){return v.filter((function(t){return a.Nm.Left===e?!f.includes(t):f.includes(t)}))}),[v,f]),y=(0,i.useCallback)((function(e){var t=(0,r.Gn)({direction:(0,r.fJ)(e),selectedKeys:v,targetKeys:f,disabledKeys:u});g(v.filter((function(e){return!t.includes(e)}))),h(a.Nm.Right===e?t.concat(f):f.filter((function(e){return!t.includes(e)})))}),[v,f,u]),b=(0,i.useCallback)((function(e,t){g(t.concat(p((0,r.fJ)(e))))}),[p]),C=(0,i.useCallback)((function(e){g(e)}),[]),N=(0,i.useCallback)((function(e){h(e)}),[]);return{targetKeys:f,selectedKeys:v,transferKeys:y,changeSelectedKeys:b,resetSelectedKeys:C,resetTargetKeys:N}}},98407:(e,t,n)=>{"use strict";n.d(t,{fJ:()=>a,Q1:()=>r,Gn:()=>l});var i=n(26608),a=function(e){return i.Nm.Left===e?i.Nm.Right:i.Nm.Left},r=function(e,t){return e.filter((function(e){return e.disabled})).map((function(e){return e[t]}))},l=function(e){var t=e.direction,n=e.selectedKeys,a=e.targetKeys,r=e.disabledKeys;return n.filter((function(e){return!r.includes(e)&&(i.Nm.Left===t?!a.includes(e):a.includes(e))}))}},45300:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(72551);function a(e,t){return null==e?{}:t.reduce((function(t,n){return(0,i.n)(e,n)&&(t[n]=e[n]),t}),{})}}}]);