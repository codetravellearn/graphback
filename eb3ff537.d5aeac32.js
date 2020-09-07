(window.webpackJsonp=window.webpackJsonp||[]).push([[948],{1004:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(6),i=(r(0),r(1082)),a={id:"plugin-intro",title:"Graphback Plugins introduction",sidebar_label:"Introduction"},c={unversionedId:"plugins/plugin-intro",id:"version-0.12.x/plugins/plugin-intro",isDocsHomePage:!1,title:"Graphback Plugins introduction",description:"Graphback generator plugins allow developers to define custom set of transformations",source:"@site/versioned_docs/version-0.12.x/plugins/introduction.md",slug:"/plugins/plugin-intro",permalink:"/docs/0.12.x/plugins/plugin-intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/plugins/introduction.md",version:"0.12.x",sidebar_label:"Introduction",sidebar:"version-0.12.x/docs",previous:{title:"CRUD Runtime Abstraction",permalink:"/docs/0.12.x/crud/crudruntime"},next:{title:"Graphback CRUD Schema Plugin",permalink:"/docs/0.12.x/plugins/crud-schema"}},l=[{value:"Global configuiration for plugins",id:"global-configuiration-for-plugins",children:[]}],u={rightToc:l};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback generator plugins allow developers to define custom set of transformations\non top of GraphQL schema and create resources like files or even database tables. "),Object(i.b)("p",null,"Graphback plugins are executed in the order they are defined in the configuration.\nEach plugin can decorate current schema and also create file resources."),Object(i.b)("p",null,"Graphback offers standard suite of plugins that give developers ability to\ngenerate fully functional server and client."),Object(i.b)("h2",{id:"global-configuiration-for-plugins"},"Global configuiration for plugins"),Object(i.b)("p",null,"Each plugin requires globally available configuration for model and crud flags.\nExample configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"  # Graphback configuration\n  graphback:\n    ##  Input schema\n    model: ./model/**/*.graphql\n    ## Global configuration for CRUD generator\n    crud:\n      create: true\n      update: true\n      findAll: true\n      find: true\n      delete: true\n      subCreate: true\n      subUpdate: true\n      subDelete: true\n")),Object(i.b)("p",null,"This configuration should not be replicated by hand.\nDevelopers should use ",Object(i.b)("inlineCode",{parentName:"p"},"graphback config")," to initialize configuration for their project."))}p.isMDXComponent=!0},1082:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=t,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return r?o.a.createElement(b,c(c({ref:n},u),{},{components:r})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);