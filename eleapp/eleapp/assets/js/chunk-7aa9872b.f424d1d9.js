(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aa9872b"],{6015:function(e,t,n){"use strict";var i=n("bc31"),o=n.n(i);o.a},"776e":function(e,t,n){},"7a23":function(e,t,n){"use strict";var i=n("776e"),o=n.n(i);o.a},b640:function(e,t,n){e.exports=n.p+"assets/img/logo.87ab03f8.jpg"},bc31:function(e,t,n){},dd7b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[e._m(0),n("InputGroup",{attrs:{type:"number",placeholder:"手机号",btnTitle:e.btnTitle,disabled:e.disabled,error:e.errors.phone},on:{btnClick:e.getVerifyCode},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("InputGroup",{attrs:{type:"number",placeholder:"验证码",error:e.errors.code},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}}),e._m(1),n("div",{staticClass:"login_btn"},[n("button",{attrs:{disabled:e.isClick},on:{click:e.login}},[e._v("登录")])])],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:n("b640"),alt:"my login image"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_des"},[n("p",[e._v("新用户登录即自动注册，表示已同意\n            "),n("span",[e._v("《用户服务协议》")])])])}],r=(n("cadf"),n("551c"),n("f751"),n("097d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text_group"},[n("div",{staticClass:"input_group",class:{"is-invalid":e.error}},[n("input",{attrs:{type:e.type,placeholder:e.placeholder,name:e.name},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.btnTitle?n("button",{attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("btnClick")}}},[e._v(e._s(e.btnTitle))]):e._e()]),e.error?n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.error))]):e._e()])}),s=[],a={name:"inputGroup",props:{type:{type:String,default:"text"},value:String,placeholder:String,name:String,btnTitle:String,disabled:Boolean,error:String},data:function(){return{}}},l=a,c=(n("7a23"),n("2877")),u=Object(c["a"])(l,r,s,!1,null,"e2268b06",null),d=u.exports,p={name:"login",data:function(){return{phone:"",verifyCode:"",errors:{},btnTitle:"获取验证码",disabled:!1}},computed:{isClick:function(){return!this.phone||!this.verifyCode}},methods:{login:function(){var e=this;this.errors={},this.$axios.post("/api/posts/sms_back",{phone:this.phone,code:this.verifyCode}).then(function(t){console.log(t),localStorage.setItem("ele_login",!0),e.$router.push("/")}).catch(function(t){e.errors={code:t.response.data.msg}})},getVerifyCode:function(){this.validatePhone()&&(this.validateBtn(),this.$axios.post("/api/posts/sms_send",{tpl_id:"137839",key:"4f027fc02b72502cc24e58c160bd46d7",phone:this.phone}).then(function(e){console.log(e)}))},validatePhone:function(){return this.phone?/^1[345678]\d{9}$/.test(this.phone)?(this.errors={},!0):void(this.errors={phone:"请填写正确的手机号！"}):(this.errors={phone:"手机号码不能为空！"},!1)},validateBtn:function(){var e=this,t=60,n=setInterval(function(){0==t?(clearInterval(n),e.btnTitle="获取验证码",e.disabled=!1):(e.btnTitle=t+"秒后重试",e.disabled=!0,t--)},1e3)}},components:{InputGroup:d}},h=p,f=(n("6015"),Object(c["a"])(h,i,o,!1,null,"8d92faa6",null));t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-7aa9872b.f424d1d9.js.map