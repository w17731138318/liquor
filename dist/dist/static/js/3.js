webpackJsonp([3,12,22,27],{"6f/g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("8HvM"),r=n("jqh9"),o=n("sPSN"),u=n("gyMJ"),l=n("NYxO"),c={data:function(){return{loading:!0}},components:{Topbar:i.default,Sidebar:r.default,ContentTabs:o.default},computed:{siteWarpperClasses:function(){return[{"site-sidebar--collapse":this.$store.state.sidebarCollapse}]},siteContentWarpperStyles:function(){return[{minHeight:this.$store.state.documentClientHeight+"px"}]}},created:function(){this.getUserInfo()},mounted:function(){var e=this;this.resetDocumentClientHeight(),window.onresize=function(){e.resetDocumentClientHeight()}},methods:s()({resetDocumentClientHeight:function(){this.UPDATE_DOCUMENT_CLIENT_HEIGHT({height:document.documentElement.clientHeight})},getUserInfo:function(){var e=this;u.a.user.info().then(function(t){var n=t.data;n&&0===n.code&&(e.loading=!1,e.DELETE_CONTENT_TABS([]),e.UPDATE_USER_ID({id:n.user.userId}),e.UPDATE_USER_NAME({name:n.user.username}))})}},Object(l.b)(["UPDATE_DOCUMENT_CLIENT_HEIGHT","UPDATE_USER_ID","UPDATE_USER_NAME","DELETE_CONTENT_TABS"]))},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"site-wrapper",class:this.siteWarpperClasses,attrs:{"element-loading-text":"拼命加载中"}},[this.loading?this._e():[t("topbar"),this._v(" "),t("sidebar"),this._v(" "),t("div",{staticClass:"site-content__wrapper",style:this.siteContentWarpperStyles},[t("router-view")],1)]],2)},staticRenderFns:[]},A=n("VU/8")(c,d,!1,null,null,null);t.default=A.exports},"8HvM":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("OHGg"),r=n("gyMJ"),o=n("NYxO"),u={data:function(){return{updatePassowrdVisible:!1}},components:{UpdatePassword:i.default},methods:s()({switchSidebarCollapseHandle:function(){this.SWITCH_SIDEBAR_COLLAPSE({collapse:!this.$store.state.sidebarCollapse})},updatePasswordHandle:function(){var e=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){e.$refs.updatePassowrd.init()})},logoutHandle:function(){var e=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a.common.logout().then(function(t){var n=t.data;n&&0===n.code&&(e.DELETE_CONTENT_TABS([]),e.$cookie.delete("token"),e.$router.replace({name:"login"}))})})}},Object(o.b)(["SWITCH_SIDEBAR_COLLAPSE","DELETE_CONTENT_TABS"]))},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"site-topbar"},[a("div",{staticClass:"site-topbar__header"},[a("h1",{staticClass:"site-logo",on:{click:function(t){e.$router.push({name:"home"})}}},[a("a",{staticClass:"site-logo__lg",attrs:{href:"javascript:;"}},[e._v("开发平台")]),e._v(" "),a("a",{staticClass:"site-logo__mini",attrs:{href:"javascript:;"}},[e._v("home")])])]),e._v(" "),a("div",{staticClass:"site-topbar__body clearfix"},[a("el-menu",{staticClass:"site-topbar__menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__switch",attrs:{index:"1-1"},on:{click:function(t){e.switchSidebarCollapseHandle()}}},[a("icon-svg",{attrs:{name:"zhedie"}})],1)],1),e._v(" "),a("el-menu",{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__avatar",attrs:{index:"1-2"}},[a("el-dropdown",{attrs:{placement:"bottom","hide-on-click":!1}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:n("jpVj"),alt:e.$store.state.user.name}}),e._v("\n            "+e._s(e.$store.state.user.name)+"\n          ")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){e.updatePasswordHandle()}}},[e._v("修改密码")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){e.logoutHandle()}}},[e._v("退出")])],1)],1)],1)],1)],1),e._v(" "),e.updatePassowrdVisible?a("update-password",{ref:"updatePassowrd"}):e._e()],1)},staticRenderFns:[]},c=n("VU/8")(u,l,!1,null,null,null);t.default=c.exports},jpVj:function(e,t){e.exports="data:image/jpeg;base64,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"},jqh9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),s=n.n(a),i=n("Dd8w"),r=n.n(i),o=n("0xDb"),u={name:"sub-menu-nav",props:{menuNav:Object,required:!0},components:{SubMenuNav:c},methods:{gotoRouteHandle:function(e){var t=Object(o.a)(e);/\S/.test(t)&&this.$router.push({name:t})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.menuNav.list&&e.menuNav.list.length>=1?n("el-submenu",{attrs:{"data-idx":e.menuNav.menuId+"",index:e.menuNav.menuId+""}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])]),e._v(" "),e._l(e.menuNav.list,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2):n("el-menu-item",{attrs:{index:e.menuNav.menuId+"","data-idx":e.menuNav.menuId+""},on:{click:function(t){e.gotoRouteHandle(e.menuNav.url)}}},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])])},staticRenderFns:[]},c=n("VU/8")(u,l,!1,null,null,null).exports,d=n("gyMJ"),A=n("NYxO"),m=n("lHK6"),v=n.n(m),f={data:function(){return{menuNavActive:"1-1"}},components:{SubMenuNav:c},watch:{$route:"routeHandle"},created:function(){var e=this;this.getMenuNavList().then(function(){e.routeHandle(e.$route)})},methods:r()({getMenuNavList:function(){var e=this;return d.a.menu.nav().then(function(t){var n=t.data;n&&0===n.code?(e.UPDATE_MENU_NAV_LIST(n.menuList),sessionStorage.setItem("permissions",s()(n.permissions||"[]"))):(e.UPDATE_MENU_NAV_LIST([]),sessionStorage.setItem("permissions","[]"))})},routeHandle:function(e){if(/^\/n\/.*$/.test(e.path)){var t=this.$store.state.contentTabs.filter(function(t){return t.name===e.name})[0];if(v()(t)){var n=this.getMenuNavByRouteName(e.name,this.$store.state.menuNavList);if(v()(n))return console.error("未能找到可用tab标签页！");t={id:n.menuId,name:e.name,title:n.name,type:-1!==(window.SITE_CONFIG.nestIframeRouteNameList||[]).indexOf(e.name)?"iframe":"module",url:n.url},this.ADD_CONTENT_TAB(t)}this.menuNavActive=t.id+"",this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e.name})}},getMenuNavByRouteName:function(e,t){for(var n=[],a=0;a<t.length;a++)if(t[a].list&&t[a].list.length>=1)n=n.concat(t[a].list);else if(Object(o.a)(t[a].url)===e)return t[a];return n.length>=1?this.getMenuNavByRouteName(e,n):[]}},Object(A.b)(["UPDATE_MENU_NAV_LIST","ADD_CONTENT_TAB","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"site-sidebar"},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":e.menuNavActive,collapse:e.$store.state.sidebarCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(t){e.$router.push({name:"home"})}}},[n("i",{staticClass:"site-sidebar__menu-icon fa fa-home"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),e._l(e.$store.state.menuNavList,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2)],1)])},staticRenderFns:[]},E=n("VU/8")(f,p,!1,null,null,null);t.default=E.exports},sPSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("lHK6"),r=n.n(i),o=n("NYxO"),u={data:function(){return{}},computed:{tabActiveName:{get:function(){return this.$store.state.contentTabsActiveName},set:function(e){this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e})}}},methods:s()({contentViewHeight:function(e){var t=this.$store.state.documentClientHeight;return t-=50,t-=40,t-=15,t-=15,t-=2,t+="px","iframe"===e.type?{height:t}:{minHeight:t}},getNestIframeUrl:function(e){return window.SITE_CONFIG.nestIframeUrl+e},selectedTabHandle:function(e){e=this.$store.state.contentTabs.filter(function(t){return t.name===e.name}),r()(e)||this.$router.push({name:e[0].name})},removeTabHandle:function(e){var t=this,n=this.$store.state.contentTabs.filter(function(t){return t.name!==e});e===this.tabActiveName&&this.$router.push({name:n[n.length-1].name},function(){t.tabActiveName=t.$route.name}),this.UPDATE_CONTENT_TABS(n)}},Object(o.b)(["UPDATE_CONTENT_TABS","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-content site-content--tabs"},[n("el-tabs",{attrs:{closable:e.$store.state.contentTabs.length>1},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.tabActiveName,callback:function(t){e.tabActiveName=t},expression:"tabActiveName"}},e._l(e.$store.state.contentTabs,function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[n("el-card",{attrs:{"body-style":e.contentViewHeight(t)}},["iframe"===t.type?n("iframe",{attrs:{src:e.getNestIframeUrl(t.url),width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("keep-alive",[t.name===e.tabActiveName?n("router-view"):e._e()],1)],1)],1)}))],1)},staticRenderFns:[]},c=n("VU/8")(u,l,!1,null,null,null);t.default=c.exports}});