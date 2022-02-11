(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5861:function(o,e,t){"use strict";t.d(e,{Z:function(){return x}});var r=t(3366),n=t(7462),a=t(7294),i=t(6010),s=t(9707),c=t(7192),l=t(1496),d=t(3616),p=t(8216),u=t(8979);function h(o){return(0,u.Z)("MuiTypography",o)}(0,t(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=t(5893);const m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.variant&&e[t.variant],"inherit"!==t.align&&e[`align${(0,p.Z)(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})((({theme:o,ownerState:e})=>(0,n.Z)({margin:0},e.variant&&o.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=a.forwardRef((function(o,e){const t=(0,d.Z)({props:o,name:"MuiTypography"}),a=(o=>Z[o]||o)(t.color),l=(0,s.Z)((0,n.Z)({},t,{color:a})),{align:u="inherit",className:x,component:y,gutterBottom:b=!1,noWrap:C=!1,paragraph:w=!1,variant:j="body1",variantMapping:M=v}=l,N=(0,r.Z)(l,m),R=(0,n.Z)({},l,{align:u,color:a,className:x,component:y,gutterBottom:b,noWrap:C,paragraph:w,variant:j,variantMapping:M}),k=y||(w?"p":M[j]||v[j])||"span",S=(o=>{const{align:e,gutterBottom:t,noWrap:r,paragraph:n,variant:a,classes:i}=o,s={root:["root",a,"inherit"!==o.align&&`align${(0,p.Z)(e)}`,t&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,c.Z)(s,h,i)})(R);return(0,g.jsx)(f,(0,n.Z)({as:k,ref:e,ownerState:R,className:(0,i.Z)(S.root,x)},N))}))},5301:function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9135)}])},9135:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return F}});var r=t(5893),n=t(9008),a=t(7462),i=t(3366),s=t(7294),c=t(6010),l=t(7192),d=t(1496),p=t(3616),u=t(5113),h=t(8979),g=t(6087);function m(o){return(0,h.Z)("MuiCard",o)}(0,g.Z)("MuiCard",["root"]);const f=["className","raised"],v=(0,d.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(o,e)=>e.root})((()=>({overflow:"hidden"})));var Z=s.forwardRef((function(o,e){const t=(0,p.Z)({props:o,name:"MuiCard"}),{className:n,raised:s=!1}=t,d=(0,i.Z)(t,f),u=(0,a.Z)({},t,{raised:s}),h=(o=>{const{classes:e}=o;return(0,l.Z)({root:["root"]},m,e)})(u);return(0,r.jsx)(v,(0,a.Z)({className:(0,c.Z)(h.root,n),elevation:s?8:void 0,ref:e,ownerState:u},d))}));function x(o){return(0,h.Z)("MuiCardActionArea",o)}var y=(0,g.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),b=t(6054);const C=["children","className","focusVisibleClassName"],w=(0,d.ZP)(b.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,e)=>e.root})((({theme:o})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${y.focusHighlight}`]:{opacity:o.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${y.focusVisible} .${y.focusHighlight}`]:{opacity:o.palette.action.focusOpacity}}))),j=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,e)=>e.focusHighlight})((({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})));var M=s.forwardRef((function(o,e){const t=(0,p.Z)({props:o,name:"MuiCardActionArea"}),{children:n,className:s,focusVisibleClassName:d}=t,u=(0,i.Z)(t,C),h=t,g=(o=>{const{classes:e}=o;return(0,l.Z)({root:["root"],focusHighlight:["focusHighlight"]},x,e)})(h);return(0,r.jsxs)(w,(0,a.Z)({className:(0,c.Z)(g.root,s),focusVisibleClassName:(0,c.Z)(d,g.focusVisible),ref:e,ownerState:h},u,{children:[n,(0,r.jsx)(j,{className:g.focusHighlight,ownerState:h})]}))}));function N(o){return(0,h.Z)("MuiCardMedia",o)}(0,g.Z)("MuiCardMedia",["root","media","img"]);const R=["children","className","component","image","src","style"],k=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{isMediaComponent:r,isImageComponent:n}=t;return[e.root,r&&e.media,n&&e.img]}})((({ownerState:o})=>(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"}))),S=["video","audio","picture","iframe","img"],P=["picture","img"];var B=s.forwardRef((function(o,e){const t=(0,p.Z)({props:o,name:"MuiCardMedia"}),{children:n,className:s,component:d="div",image:u,src:h,style:g}=t,m=(0,i.Z)(t,R),f=-1!==S.indexOf(d),v=!f&&u?(0,a.Z)({backgroundImage:`url("${u}")`},g):g,Z=(0,a.Z)({},t,{component:d,isMediaComponent:f,isImageComponent:-1!==P.indexOf(d)}),x=(o=>{const{classes:e,isMediaComponent:t,isImageComponent:r}=o,n={root:["root",t&&"media",r&&"img"]};return(0,l.Z)(n,N,e)})(Z);return(0,r.jsx)(k,(0,a.Z)({className:(0,c.Z)(x.root,s),as:d,role:!f&&u?"img":void 0,ref:e,style:v,ownerState:Z,src:f?u||h:void 0},m,{children:n}))}));function W(o){return(0,h.Z)("MuiCardContent",o)}(0,g.Z)("MuiCardContent",["root"]);const A=["className","component"],H=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,e)=>e.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var _=s.forwardRef((function(o,e){const t=(0,p.Z)({props:o,name:"MuiCardContent"}),{className:n,component:s="div"}=t,d=(0,i.Z)(t,A),u=(0,a.Z)({},t,{component:s}),h=(o=>{const{classes:e}=o;return(0,l.Z)({root:["root"]},W,e)})(u);return(0,r.jsx)(H,(0,a.Z)({as:s,className:(0,c.Z)(h.root,n),ownerState:u,ref:e},d))})),E=t(8396),O=t(7357),I=t(6886),T=t(5861),V=t(2734),$="https://jylee378.github.io/hgu-power-lab",z={divContainer:{background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(".concat("".concat($,"/background.png"),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100vw",height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}},F=function(){var o=(0,V.Z)(),e=(0,E.Z)(o.breakpoints.down("md"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.default,{children:[(0,r.jsx)("title",{children:"Power Lab"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(O.Z,{style:!e&&z.divContainer||void 0,children:(0,r.jsx)(Z,{sx:{maxWidth:800},children:(0,r.jsx)(M,{children:(0,r.jsxs)(I.ZP,{container:!0,display:"flex",children:[(0,r.jsx)(I.ZP,{item:!0,md:6,children:(0,r.jsx)(B,{component:"img",image:"".concat($,"/professor.png"),alt:"professor",sx:{width:e?"100vw":"400px",padding:e?"30px 50px":"0px"}})}),(0,r.jsx)(I.ZP,{item:!0,md:6,children:(0,r.jsxs)(_,{sx:{padding:"30px 50px"},children:[(0,r.jsx)(T.Z,{gutterBottom:!0,variant:"h4",component:"div",children:"JaeYoung, Lee"}),(0,r.jsx)(T.Z,{variant:"body2",color:"text.secondary",children:"Professor of Handong Global University Dept. Mechanical and Control Engineering"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(T.Z,{style:{fontWeight:"bold",fontSize:18},children:"\uc804\ud654\ubc88\ud638"}),(0,r.jsx)(T.Z,{variant:"body2",color:"text.secondary",children:"054-260-1392"}),(0,r.jsx)("br",{}),(0,r.jsx)(T.Z,{style:{fontWeight:"bold",fontSize:18},children:"\uc774\uba54\uc77c"}),(0,r.jsx)(T.Z,{variant:"body2",color:"text.secondary",children:"jylee7@handong.edu"}),(0,r.jsx)("br",{}),(0,r.jsx)(T.Z,{style:{fontWeight:"bold",fontSize:18},children:"\uc8fc\uc18c"}),(0,r.jsx)(T.Z,{variant:"body2",color:"text.secondary",children:"103, Newton-Hall, 558, Handong-ro, Heunghae-eup, Buk-gu, Pohang-si, Gyeongsangbuk-do, Republic of Korea, 37554"})]})})]})})})})]})}},9008:function(o,e,t){o.exports=t(5443)}},function(o){o.O(0,[774,888,179],(function(){return e=5301,o(o.s=e);var e}));var e=o.O();_N_E=e}]);