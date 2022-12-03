(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.cardInfo,o=e.userId,i=e.handleCardClick,a=e.handleLikeClick,u=e.handleDeleteIconClick,c=e.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardInfo=r,this._cardId=r._id,this._userId=o,this._templateSelector=n,this._handleCardClick=i,this._handleLikeClick=a,this._handleDeleteIconClick=u,this._handleDeleteLike=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-card").cloneNode(!0)}},{key:"getCardElement",value:function(){var e=this;return this._cardElement=this._getTemplate(),this._cardPhoto=this._cardElement.querySelector(".photo-card__photo"),this._likeBtn=this._cardElement.querySelector(".photo-card__like-btn"),this._removeBtn=this._cardElement.querySelector(".photo-card__remove-btn"),this._likesCount=this._cardElement.querySelector(".photo-card__like-count"),this._cardElement.querySelector(".photo-card__title").textContent=this._cardInfo.name,this._cardPhoto.src=this._cardInfo.link,this._cardPhoto.alt="Изображение ".concat(this._cardInfo.name),this.setLikesCounter(),this.isOwner(),this._setEventListeners(),this._cardInfo.likes.forEach((function(t){t._id===e._userId&&e._likeBtn.classList.add("photo-card__like-btn_active")})),this._cardElement}},{key:"handleLike",value:function(e){this._likeBtn.classList.toggle("photo-card__like-btn_active"),this._cardInfo.likes=e.likes,this.setLikesCounter()}},{key:"setLikesCounter",value:function(){this._likesCount.textContent=this._cardInfo.likes.length}},{key:"isOwner",value:function(){this._cardInfo.owner._id!==this._userId&&this._removeBtn.remove()}},{key:"removeCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._likeBtn.classList.contains("photo-card__like-btn_active")?e._handleDeleteLike(e._cardId):e._handleLikeClick(e._cardId)})),this._removeBtn.addEventListener("click",(function(){e._handleDeleteIconClick(e._cardId)})),this._cardPhoto.addEventListener("click",(function(){e._handleCardClick(e._cardInfo.name,e._cardInfo.link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelector(".popup_type_photo"),r=document.querySelector(".popup_type_edit-profile"),o=document.querySelector(".popup_type_add-card"),i=document.querySelector(".profile__edit-btn"),a=document.querySelector(".profile__add-btn"),u=document.querySelector(".gallery"),c=r.querySelector(".popup__input_type_name"),s=r.querySelector(".popup__input_type_job"),l=document.forms.profile,f=document.forms.card,p=".popup__submit-btn",h=document.querySelector(".popup_type_confirm"),d=document.forms.confirm,y=document.querySelector(".popup_type_set-avatar"),_=document.forms.avatar,v=document.querySelector(".profile__picture-btn");function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._form=t,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButton()}))}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButton",value:function(){this._hasInvalidInput(this._inputList)?this._disableButton(this._submitButton):this._enableButton(this._submitButton)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_showInputError",value:function(e,t){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=t}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._closeButton=this._popup.querySelector(".popup__close-btn"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function j(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._photo=t._popup.querySelector(".popup__photo"),t._captionPhoto=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._photo.src=t,this._captionPhoto.textContent=e,this._photo.alt="Изображение ".concat(e),C(I(a.prototype),"open",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){var e={};return e.profileName=this._name.textContent,e.profileAbout=this._about.textContent,e.avatar=this._avatar.src,e}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._about.textContent=t}},{key:"setAvatar",value:function(e){this._avatar.src=e}}],n&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function V(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function a(e,t,n,r){var o,u=r.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,e))._submitForm=u,o._form=t,o._inputs=Array.from(o._form.querySelectorAll(".popup__input")),o._buttonSubmit=document.querySelector(n),o}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){var n=t.getAttribute("name");e[n]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;x(U(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){x(U(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":"Сохранить"}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r,this._response=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:this._headers}).then(this._response)}},{key:"getProfileInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers}).then(this._response)}},{key:"putProfileInfo",value:function(e,t){return fetch(this._url+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then(this._response)}},{key:"addNewCard",value:function(e){return fetch(this._url+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:e.nameCard,link:e.linkCard})}).then(this._response)}},{key:"putLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then(this._response)}},{key:"removeCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{headers:this._headers,method:"DELETE"}).then(this._response)}},{key:"deleteLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then(this._response)}},{key:"setNewAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then(this._response)}},{key:"getAllNeededInfo",value:function(){return Promise.all([this.getProfileInfo(),this.getInitialCards()])}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=G(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},$.apply(this,arguments)}function G(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(r);if(o){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Q(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=t,n}return t=a,(n=[{key:"setSubmit",value:function(e){this.submitForm=e}},{key:"setEventListeners",value:function(){var e=this;$(W(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.submitForm()}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z,ee=new H({baseUrl:"https://nomoreparties.co/v1/cohort-54",headers:{authorization:"50abc53f-8d3e-448b-b494-88b8f2ced152","Content-Type":"application/json"}}),te=new A({profileName:".profile__title",profileJob:".profile__job",profileAvatar:".profile__avatar"}),ne=new g({renderer:function(e){ne.setItem(le(e))}},u);ee.getAllNeededInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z=o._id,te.setUserInfo(o.name,o.about),te.setAvatar(o.avatar);var a=i.reverse();ne.renderItems(a)})).catch((function(e){console.log(e)}));var re=new B(n),oe=new F(r,l,p,{submitForm:function(e){oe.renderLoading(!0),ee.putProfileInfo(e.nameProfile,e.jobProfile).then((function(e){te.setUserInfo(e.name,e.about),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.renderLoading(!1)}))}}),ie=new F(o,f,p,{submitForm:function(e){ie.renderLoading(!0),ee.addNewCard(e).then((function(e){ne.setItem(le(e)),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.renderLoading(!1)}))}}),ae=new F(y,_,p,{submitForm:function(e){ae.renderLoading(!0),ee.setNewAvatar(e).then((function(e){te.setAvatar(e.avatar),ae.close()})).catch((function(e){console.log(e)})).finally((function(){ae.renderLoading(!1)}))}}),ue=new X(h,d);i.addEventListener("click",(function(){var e=te.getUserInfo();console.log(e),c.value=e.profileName,s.value=e.profileAbout,se.profile.resetValidation(),oe.open()})),a.addEventListener("click",(function(){se.card.resetValidation(),ie.open()})),v.addEventListener("click",(function(){se.avatar.resetValidation(),ae.open()})),oe.setEventListeners(),re.setEventListeners(),ie.setEventListeners(),ue.setEventListeners(),ae.setEventListeners();var ce,se={};function le(e){var n=new t({cardInfo:e,userId:Z,handleCardClick:function(e,t){re.open(e,t)},handleLikeClick:function(e){ee.putLike(e).then((function(e){n.handleLike(e)})).catch((function(e){console.log(e)}))},handleDeleteIconClick:function(e){ue.open(),ue.setSubmit((function(){ee.removeCard(e).then((function(e){n.removeCard(e),ue.close()})).catch((function(e){console.log(e)}))}))},handleDeleteLike:function(e){ee.deleteLike(e).then((function(e){n.handleLike(e)})).catch((function(e){console.log(e)}))}},"#photo-card");return n.getCardElement()}ce={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled",inputErrorClass:"popup__input_type_error"},Array.from(document.querySelectorAll(ce.formSelector)).forEach((function(e){var t=new m(e,ce),n=e.getAttribute("name");se[n]=t,t.enableValidation()}))})();
//# sourceMappingURL=main.js.map