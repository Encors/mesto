(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.cardInfo,o=e.user,i=e.handleCardClick,c=e.handleLikeClick,u=e.handleDeleteIconClick,a=e.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardInfo=r,this._cardId=r._id,this._user=o,this._templateSelector=n,this._handleCardClick=i,this._handleLikeClick=c,this._handleDeleteIconClick=u,this._handleDeleteLike=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-card").cloneNode(!0)}},{key:"getCardElement",value:function(){var e=this;return this._cardElement=this._getTemplate(),this._cardPhoto=this._cardElement.querySelector(".photo-card__photo"),this._likeBtn=this._cardElement.querySelector(".photo-card__like-btn"),this._removeBtn=this._cardElement.querySelector(".photo-card__remove-btn"),this._likesCount=this._cardElement.querySelector(".photo-card__like-count"),this._cardElement.querySelector(".photo-card__title").textContent=this._cardInfo.name,this._cardPhoto.src=this._cardInfo.link,this._cardPhoto.alt="Изображение ".concat(this._cardInfo.name),this.setLikesCounter(),this.isOwner(),this._setEventListeners(),this._cardInfo.likes.forEach((function(t){(t._id=e._cardInfo._id)&&e._likeBtn.classList.add("photo-card__like-btn_active")})),this._cardElement}},{key:"handleLike",value:function(e){this._likeBtn.classList.toggle("photo-card__like-btn_active"),this._cardInfo.likes=e.likes,this.setLikesCounter()}},{key:"setLikesCounter",value:function(){this._likesCount.textContent=this._cardInfo.likes.length}},{key:"isOwner",value:function(){this._cardInfo.owner._id!==this._user._id&&this._removeBtn.remove()}},{key:"removeCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._likeBtn.classList.contains("photo-card__like-btn_active")?e._handleDeleteLike(e._cardId):e._handleLikeClick(e._cardId)})),this._removeBtn.addEventListener("click",(function(){e._handleDeleteIconClick(e._cardId)})),this._cardPhoto.addEventListener("click",(function(){e._handleCardClick(e._cardInfo.name,e._cardInfo.link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelector(".popup_type_photo"),r=document.querySelector(".popup_type_edit-profile"),o=document.querySelector(".popup_type_add-card"),i=document.querySelector(".profile__edit-btn"),c=document.querySelector(".profile__add-btn"),u=document.querySelector(".gallery"),a=r.querySelector(".popup__input_type_name"),s=r.querySelector(".popup__input_type_job"),l=document.forms.profile,f=document.forms.card,p=(f.querySelector(".popup__submit-btn"),document.querySelector(".popup_type_confirm")),h=document.forms.confirm;function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n.formSelector,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._form=t,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButton()}))}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButton",value:function(){this._hasInvalidInput(this._inputList)?this._disableButton(this._submitButton):this._enableButton(this._submitButton)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_showInputError",value:function(e,t){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=t}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._closeButton=this._popup.querySelector(".popup__close-btn"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._photo=t._popup.querySelector(".popup__photo"),t._captionPhoto=t._popup.querySelector(".popup__caption"),t}return t=c,(n=[{key:"open",value:function(e,t){this._photo.src=t,this._captionPhoto.textContent=e,this._photo.alt="Изображение ".concat(e),w(S(c.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(m);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=document.querySelector(n),this.about=document.querySelector(r),this.avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(e){return Object.assign({},e)}},{key:"setUserInfo",value:function(e,t){this.name.textContent=e,this.about.textContent=t}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function D(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function c(e,t,n){var r,o=n.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e))._submitForm=o,r._form=t,r._inputs=Array.from(r._form.querySelectorAll(".popup__input")),r}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){var n=t.getAttribute("name");e[n]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;q(x(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){q(x(c.prototype),"close",this).call(this),this._form.reset()}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(m);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r,this._response=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:this._headers}).then(this._response)}},{key:"getProfileInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers}).then(this._response)}},{key:"putProfileInfo",value:function(e,t){return fetch(this._url+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then(this._response)}},{key:"addNewCard",value:function(e){return fetch(this._url+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:e.nameCard,link:e.linkCard})}).then(this._response)}},{key:"putLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then(this._response)}},{key:"removeCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{headers:this._headers,method:"DELETE"}).then(this._response)}},{key:"deleteLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then(this._response)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function M(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._form=t,n}return t=c,(n=[{key:"setSubmit",value:function(e){this.submitForm=e}},{key:"setEventListeners",value:function(){var e=this;J(G(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.submitForm()}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(m),Q=new F({baseUrl:"https://nomoreparties.co/v1/cohort-54",headers:{authorization:"50abc53f-8d3e-448b-b494-88b8f2ced152","Content-Type":"application/json"}});Q.getInitialCards().then((function(e){X.renderItems(e)})).catch((function(e){console.log(e)}));var W,X=new b({renderer:function(e){X.setItem(re(e))}},u);function Y(){Q.getProfileInfo().then((function(e){var t=new j({profileName:".profile__title",profileJob:".profile__job",profileAvatar:"profile__avatar"});W=t.getUserInfo(e),t.setUserInfo(W.name,W.about)})).catch((function(e){console.log(e)}))}Y();var Z,$={};Z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled",inputErrorClass:"popup__input_type_error"},Array.from(document.querySelectorAll(Z.formSelector)).forEach((function(e){var t=new _(e,Z),n=e.getAttribute("name");$[n]=t,t.enableValidation()}));var ee=new A(r,l,{submitForm:function(e){Q.putProfileInfo(e.nameProfile,e.jobProfile),Y(),ee.close()}});i.addEventListener("click",(function(){a.value=W.name,s.value=W.about,$.profile.resetValidation(),ee.open()})),ee.setEventListeners();var te=new P(n);te.setEventListeners();var ne=new A(o,f,{submitForm:function(e){Q.addNewCard(e).then((function(e){X.setItem(re(e)),ne.close()})).catch((function(e){console.log(e)}))}});function re(e){var n=new t({cardInfo:e,user:W,handleCardClick:function(e,t){te.open(e,t)},handleLikeClick:function(e){Q.putLike(e).then((function(e){n.handleLike(e)})).catch((function(e){console.log(e)}))},handleDeleteIconClick:function(e){oe.open(),oe.setSubmit((function(){Q.removeCard(e).then((function(e){n.removeCard(e),oe.close()})).catch((function(e){console.log(e)}))}))},handleDeleteLike:function(e){Q.deleteLike(e).then((function(e){n.handleLike(e)})).catch((function(e){console.log(e)}))}},"#photo-card");return n.getCardElement()}c.addEventListener("click",(function(){$.card.resetValidation(),ne.open()})),ne.setEventListeners();var oe=new K(p,h);oe.setEventListeners()})();