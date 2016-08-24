/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/2f774e5433689be1418db43de2e04596", [], function(__weex_require__, exports, __weex_module__){

	;
	    __webpack_require__(1);
	    var constants = __webpack_require__(13);
	    var utils = __webpack_require__(15);
	    var constants = __webpack_require__(13);
	    __weex_module__.exports = {
	        data: function () {return {
	            navBarHeight: 88,
	            tab: '\t',
	            return: '\n',
	            title: 'xx简介',
	            backImageUrl: constants.imageUrl.BACK_BLACK,
	        }},
	        created: function() {
	            this.$getConfig(function(config) {
	                var env = config.env;
	                if (env.platform == 'iOS') {
	                    var scale = env.scale;
	                    var deviceWidth = env.deviceWidth / scale;
	                    this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	                }

	            }.bind(this));
	            this.$on('naviBar.leftItem.click', function(e) {
	                utils.pop(this);
	            });
	        },
	        methods: {

	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "wxc-navpage",
	  "attr": {
	    "height": function () {return this.navBarHeight},
	    "backgroundColor": "white",
	    "title": function () {return this.title},
	    "titleColor": "#333333",
	    "leftItemColor": "black",
	    "leftItemSrc": function () {return this.backImageUrl}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "line-div"
	      ]
	    },
	    {
	      "type": "scroller",
	      "classList": [
	        "root-view"
	      ],
	      "attr": {
	        "showScrollbar": "false"
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "backgroundColor": "#FFFFFF",
	            "marginTop": 20,
	            "width": 750
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text-title"
	              ],
	              "attr": {
	                "value": "一、服务协议的范围"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-content"
	              ],
	              "attr": {
	                "value": function () {return (this.tab) + '1.1广州华多网络科技有限公司及其关联公司（以下称欢聚时代）拥有并经营多玩游戏网（www.duowan.com）、YY网站（www.yy.com）、YY语音软件、YY游戏平台以及其他各网站、网页、软件以及YY开放平台等平台。本协议适用于多玩游戏网、YY网站、YY语音软件、YY游戏平台以及欢聚时代经营的所有互联网以及移动网业务平台。欢聚时代按照本协议及其发布的规则、公约、办法、细则、方法等规定（以下称“运营规则”）提供基于互联网以及移动网的相关视频直播服务（以下称\"视频直播服务\"）。' + (this.return) + (this.tab) + '1.2为获得视频直播服务，服务使用人（以下称“用户”）                    已审慎和仔细阅读本协议，清楚理解本协议的全部条款和含义，包括免除或者限制欢聚时代责任的免责条款以及对用户的权利限制条款，用户同意并接受本协议的全部条款。除非用户已阅读并接受本协议所有条款，否则用户无权使用欢聚时代提供的服务。用户在使用视频直播服务及充值视频直播保证金时，勾选“同意YY视频直播服务协议”勾选框即表示用户完全接受本协议项下的全部条款。用户使用欢聚时代的视频直播服务视为用户完全同意本协议的条款并受本协议的约束。' + (this.return) + (this.tab) + '1.3使用视频直播服务的用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动、事件、结果负法律责任。'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-title"
	              ],
	              "attr": {
	                "value": "二、服务内容"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-content"
	              ],
	              "attr": {
	                "value": function () {return (this.tab) + '2.1欢聚时代视频直播服务的具体内容由欢聚时代根据现有技术和实际情况提供。' + (this.return) + (this.tab) + '2.2鉴于视频直播的特殊性，保证用户按国家相关法律法规及欢聚时代相关运营规则使用视频直播服务，用户必须交纳视频直播服务保证金后方可使用欢聚时代提供的视频直播服务。用户交纳保证金是以充值的形式进行，充值时需要提供实名认证、银行卡帐号、手机号等个人资料并经欢聚时代审核通过后方可开通视频直播服务。如果用户或欢聚时代终止视频直播服务，在用户提供的个人资料审核通过的条件下，用户可对未消耗或未扣除的保证金予以提现。'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-title"
	              ],
	              "attr": {
	                "value": "三、服务规则"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-content"
	              ],
	              "attr": {
	                "value": function () {return (this.tab) + '3.1鉴于视频直播服务的特殊性，用户同意欢聚时代有权随时变更、中断或终止部分或全部的视频直播服务。如变更、中断或终止视频直播服务而造成任何损失，欢聚时代无需对用户或任何第三方承担任何责任，欢聚时代应尽量在变更、中断或终止服务之前事先以公告、邮件或系统弹窗等形式通知用户。' + (this.return) + (this.tab) + '3.2欢聚时代需要定期或不定期地对提供视频直播服务的平台（如互联网网站、移动网络等）或相关的设备进行检修和维护，如因此类情况而造成视频直播服务在合理时间内的中断，欢聚时代无需为此承担任何责任，但欢聚时代应尽量减小因此给用户造成的影响。' + (this.return) + (this.tab) + '3.3如发生下列任何一种情形，欢聚时代有权随时中断或终止向用户提供本协议项下的视频直播服务而无需对用户或任何第三方承担任何责任：' + (this.return) + (this.tab) + '3.3.1用户提供的个人资料不真实；' + (this.return) + (this.tab) + '3.3.2用户违反本协议的约定或违反欢聚时代公布的运营规则；' + (this.return) + (this.tab) + '3.3.3用户在使用视频直播服务时未按规定向欢聚时代交纳相应的保证金或补交保证金。'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-title"
	              ],
	              "attr": {
	                "value": "四、使用规则"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-content"
	              ],
	              "attr": {
	                "value": function () {return (this.tab) + '4.1用户在使用视频直播服务时，必须向欢聚时代提供准确的用户个人资料，如用户提供资料不实，欢聚时代有权拒绝提供视频直播服务；如用户个人资料有任何变动，必须及时更新并通知欢聚时代进行审核。如因用户提供的个人资料等不实而造成任何损失，由用户自已承担全部责任和损失。' + (this.return) + (this.tab) + '4.2用户不得将其账号、密码转让或出借给他人使用。如因黑客行为或用户的保管疏忽导致账号、密码遭他人非法盗取、使用或遭受损失，欢聚时代不承担任何责任；如给欢聚时代造成损害，则用户应予赔偿。' + (this.return) + (this.tab) + '4.3用户同意欢聚时代有权在提供视频直播服务过程中以各种方式投放商业性广告、非商业性广告、其他任何类型的商业信息和非商业信息，用户必须予以配合，且欢聚时代无需要支付任何对价，但应尽量减小给用户造成的影响。' + (this.return) + (this.tab) + '4.4用户在使用视频直播服务过程中有任何不当行为，或违反法律法规和欢聚时代的相关运营规则，或侵犯第三方合法权益，都由用户自行承担相应责任，欢聚时代无需要承担任何责任。如因用户的行为而给欢聚时代造成损害的，用户应予赔偿。' + (this.return) + (this.tab) + '4.5用户在使用视频直播服务过程中，遵守国家相关法律法规和本协议的约定，同意接受和遵守欢聚时代发布的《YY视频直播违规管理办法》、《YY社区用户违规管理规则》、《YY社区频道违规管理规则》及其它相关运营规则（具体运营规则以欢聚时代发布的最新内容为准）。如用户违反法律法规、本协议约定或欢聚时代相关运营规则，用户同意并接受欢聚时代根据约定或规则对其交纳的保证金进行相应的扣除并对其采取暂停直播服务、扣罚佣金等其它处罚措施。'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-title"
	              ],
	              "attr": {
	                "value": "五、免责声明"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-content"
	              ],
	              "attr": {
	                "value": function () {return (this.tab) + '5.1用户完全根据自身意志和意愿以自身行为使用视频直播服务，同意使用欢聚时代视频直播服务所存在的风险完全由其自己承担；因用户使用视频直播服务而产生的一切损害、损失、责任及后果也由其自己承担，欢聚时代对用户不承担任何责任。' + (this.return) + (this.tab) + '5.2欢聚时代根据现有技术条件和实际情况尽量提供符合要求的视频直播服务，但并不担保视频直播服务一定能满足用户的全部要求，也不担保视频直播服务因实际情况出现变更、中断或终止的情形；欢聚时代对视频直播服务的及时性、安全性、准确性也都不作担保，用户不得就此向欢聚时代提供任何要求。' + (this.return) + (this.tab) + '5.3对于因不可抗力或欢聚时代不能控制的原因造成的视频直播服务中断或其它缺陷，欢聚时代不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。' + (this.return) + (this.tab) + '5.4用户如无法接受本协议相关约定和免责声明，有权自主决定不使用视频直播服务或终止使用视频直播服务。如接受本协议，应严格遵守相关条款。用户使用视频直播服务视为用户接受协议并受协议、运营规则约束。'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-title"
	              ],
	              "attr": {
	                "value": "六、规则和协议的修改"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-content"
	              ],
	              "attr": {
	                "value": function () {return (this.tab) + '6.1欢聚时代有权修改相关运营规则和本协议的条款，一旦运营规则或本协议的内容有修改和变动，欢聚时代将会直接在欢聚时代旗下经营的网站上公布修改之后的运营规则或协议内容，新的运营规则或协议自公布之日即时生效。该公布行为视为欢聚时代已经通知用户修改内容，欢聚时代也可通过其他适当方式向用户提示修改内容，用户也可自行到欢聚时代相关网站查阅。' + (this.return) + (this.tab) + '6.2如果用户不同意欢聚时代新的运营规则或本协议内容所做的修改，用户有权停止使用视频直播服务。如果用户继续使用视频直播服务，则视为用户同意并接受欢聚时代新的运营规则和欢聚时代对本协议相关条款所做的修改。'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-title"
	              ],
	              "attr": {
	                "value": "七、其它约定"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-content"
	              ],
	              "attr": {
	                "value": function () {return (this.tab) + '7.1如用户和欢聚时代之间就协议的签订、履行等产生任何纠纷，双方应友好协商；如协商不成，则应提交广州市天河区人民法院管辖。' + (this.return) + (this.tab) + '7.2欢聚时代视频直播服务的所有权、运作权和解释权归欢聚时代所有。'}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "root-view": {
	    "width": 750,
	    "backgroundColor": "#ebebeb",
	    "alignItems": "center"
	  },
	  "line-div": {
	    "backgroundColor": "#cccccc",
	    "height": 2,
	    "width": 750
	  },
	  "text-title": {
	    "color": "#62c4aa",
	    "fontSize": 32,
	    "marginTop": 30,
	    "width": 710,
	    "marginLeft": 20
	  },
	  "text-content": {
	    "color": "#333333",
	    "fontSize": 28,
	    "marginTop": 10,
	    "marginBottom": 30,
	    "width": 710,
	    "marginLeft": 20,
	    "lineHeight": 40
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/2f774e5433689be1418db43de2e04596", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/index", [], function(__weex_require__, exports, __weex_module__){

	;
	  __webpack_require__(2);
	  __webpack_require__(3);
	  __webpack_require__(4);
	  __webpack_require__(5);
	  __webpack_require__(6);
	  __webpack_require__(7);
	  __webpack_require__(8);
	  __webpack_require__(9);
	  __webpack_require__(10);
	  __webpack_require__(11);
	  __webpack_require__(12);

	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-button", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      size: 'large',
	      value: ''
	    }},
	    methods: {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-hn", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      level: 1,
	      value: ''
	    }},
	    methods: {}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-list-item", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      bgColor: '#ffffff'
	    }},
	    methods: {
	      touchstart: function() {
	        // FIXME android touch
	        // TODO adaptive opposite bgColor
	//        this.bgColor = '#e6e6e6';
	      },
	      touchend: function() {
	        // FIXME android touchend not triggered
	//        this.bgColor = '#ffffff';
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-panel", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      title: '',
	      paddingBody: 20,
	      paddingHead: 20,
	      dataClass: '', // FIXME transfer class
	      border: 0
	    }},
	    ready: function() {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	})
	})

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tip", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'success',
	      value: ''
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-countdown", [], function(__weex_require__, exports, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function() {
	        if (this.remain <= 0) {
	            return;
	        }
	        // this.isWeb = this.$getConfig().env.platform === 'Web';
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', Object.assign({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', Object.assign({}, this.time));
	                }
	                this._app.updateActions(); 
	            }
	        },
	        format: function(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	            // console.log(remain, this.D, this.h, this.hh, this.H, this.HH, this.m, this.MM, this.s, this.ss, this.S, this.SS);
	            return remain > 0;
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden"
	  }
	})
	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-marquee", [], function(__weex_require__, exports, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function () {
	        if (this.interval > 0
	                && this.step > 0
	                && this.duration > 0) {
	            this.nextTick();    
	        }
	    },
	    methods: {
	        nextTick: function() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function() {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	              styles: {
	                transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	              },
	              timingFunction: 'ease',
	              duration: self.duration
	            }, function() {
	                self.index = (self.index + 1) % (self.count);
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	})
	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-navbar", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',

	          //导航条背景色
	          backgroundColor: 'black',

	          //导航条高度
	          height: 88,

	          //导航条标题 
	          title: "",

	          //导航条标题颜色
	          titleColor: 'black',

	          //右侧按钮图片
	          rightItemSrc: '',

	          //右侧按钮标题
	          rightItemTitle: '',

	          //右侧按钮标题颜色
	          rightItemColor: 'black',

	          //左侧按钮图片
	          leftItemSrc: '',

	          //左侧按钮标题
	          leftItemTitle: '',

	          //左侧按钮颜色
	          leftItemColor: 'black',
	        }},
	        methods: {
	          onclickrightitem: function (e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	          },
	          onclickleftitem: function (e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	})
	})

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-navpage", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(9);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',
	          backgroundColor: 'black',
	          height: 88,
	          title: "",
	          titleColor: 'black',
	          rightItemSrc: '',
	          rightItemTitle: '',
	          rightItemColor: 'black',
	          leftItemSrc: '',
	          leftItemTitle: '',
	          leftItemColor: 'black',
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	})
	})

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-tabbar", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(12);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          tabItems: [ ],
	          selectedIndex: 0,
	          selectedColor: '#ff0000',
	          unselectedColor: '#000000',
	        }},
	        created: function () {
	          this.selected(this.selectedIndex);

	          this.$on('tabItem.onClick',function(e){
	            var detail= e.detail;
	            this.selectedIndex = detail.index;
	            this.selected(detail.index);

	            var params = {
	              index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	          });
	        },
	        methods: {
	            selected: function(index) {
	              for(var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if(i == index){
	                  tabItem.icon = tabItem.selectedImage;
	                  tabItem.titleColor = this.selectedColor;
	                  tabItem.visibility = 'visible';
	                }
	                else {
	                  tabItem.icon = tabItem.image;
	                  tabItem.titleColor = this.unselectedColor;
	                  tabItem.visibility = 'hidden';
	                }
	              }
	            },  
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	})
	})

/***/ },
/* 12 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tabitem", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          index: 0,
	          title: '',
	          titleColor: '#000000',
	          icon: '',
	          backgroundColor: '#ffffff',
	        }},
	        methods: {
	          onclickitem: function (e) {
	            var vm = this;
	            var params = {
	              index: vm.index
	            };
	            vm.$dispatch('tabItem.onClick', params);
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	})
	})

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Created by walid on 16/7/29.
	 *  常量封装
	 */

	var datas = {
	    baseImageUrl: 'http://xiaobaiossdevortest.oss-cn-beijing.aliyuncs.com/icon/',
	}

	// color
	exports.color = {
	    MAIN: '#ff6b43',
	}

	exports.spEnum = {
	    TELEPHONE: 'TELEPHONE',
	    AVATAR: 'AVATAR',
	    NICK_NAME: 'NICK_NAME',
	    BRIEF: 'BRIEF',
	    OPEN_3G4G: 'OPEN_3G4G',
	}

	exports.imageUrl = {
	    BACK_BLACK: datas.baseImageUrl + 'back_black.png',
	    BACK_WDITE: datas.baseImageUrl + 'back_white.png',
	    MINE_FAVORITE: datas.baseImageUrl + 'mine_favorite.png',
	    IC_MINE_MESSAGE: datas.baseImageUrl + 'ic_mine_message.png',
	    MINE_SETTING: datas.baseImageUrl + 'mine_setting.png',
	    MINE_EDIT: datas.baseImageUrl + 'mine_edit.png',
	    IC_RIGHT_ARROW: datas.baseImageUrl + 'ic_right_arrow.png',
	    DEFAULT: datas.baseImageUrl + 'ic_market_normal.png',
	    IC_MINE_PHOTO: datas.baseImageUrl + 'ic_mine_photo.png',
	    IC_HER_VIDEO: datas.baseImageUrl + 'ic_her_video.png',
	    IC_MESSAGE_LEFT_ARROW: datas.baseImageUrl + 'ic_message_left_arrow.png',
	    IC_OFFICAL_MESSAGE: datas.baseImageUrl + 'ic_offical_message.png',
	    IC_MESSAGE_COMMENT: datas.baseImageUrl + 'ic_message_comment.png',
	    IC_MINE_NAVIGATION: datas.baseImageUrl + 'ic_mine_navigation.png',
	    IC_MINE_BACKGROUND: datas.baseImageUrl + 'ic_mine_background.png',
	}

	exports.pageUrl = {
	    SETTING_URL: 'mine/setting/xb-setting.js',
	    SETTING_BINGPHONE: 'mine/setting/xb-setting-bindphone.js',
	    OTHER_PERSON_PAGE: 'mine/xb-other-person-page.js',
	    MINE_PAGE: 'mine/xb-minepage.js',
	    MINE_MESSAGE: 'mine/message/xb-mine-message.js',
	    MINE_TEST_PARAMS: 'mine/test-params.js',
	    MINE_OFFICAL_MESSAGE: 'mine/message/xb-offical-message.js',
	    MINE_COMMENT_MESSAGE: 'mine/message/xb-comment-message.js',
	    ABOUTUS_URL: 'mine/setting/xb-about-us.js',
	    SETTING_AGREEMENT: 'mine/setting/xb-agreement.js',
	    SETTING_APP_INTRODUCE: 'mine/setting/xb-app-introduce.js',
	    UPDATE_USERINFO: 'mine/xb-update-userinfo.js',
	    SETTING_COLLECT: 'mine/xb-collect.js',
	}


/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by walid on 16/6/13.
	 *  封装utils工具类使用
	 */

	var strUtil = __webpack_require__(16)

	var modal
	__weex_define__('@weex-temp/x', function(__weex_require__) {
	    modal = __weex_require__('@weex-module/modal')
	})

	var navigator
	__weex_define__('@weex-temp/x', function(__weex_require__) {
	    navigator = __weex_require__('@weex-module/navigator')
	})

	var data = {
	    baseurl: 'http://192.168.1.57:12580/project/build/src/ui/',
	    // baseurl: 'http://192.168.0.111:12580/project/build/src/ui/',
	    baseImageUrl: 'http://xiaobaiossdevortest.oss-cn-beijing.aliyuncs.com/common/',
	    baseh5url: 'http://192.168.1.57:12580/index.html?page=./project/build/src/ui/',
	    debug: true
	};

	function push(self, url) {
	    var filterUrl = strUtil.trim(url, true)
	    var params = {
	        'url': getBaseUrl() + filterUrl,
	        'animated': 'true',
	    }
	    // nativeLog('xbBridge' + xbBridge)
	    toastDebug(self, getBaseUrl() + filterUrl);
	    navigator.push(params, function(e) {
	        //callback
	    });
	}

	function pop(self) {
	    var params = {
	        'animated': 'true',
	    }
	    navigator.pop(params, function(e) {
	        //callback
	    });
	}

	function toastDebug(self, content) {
	    if (data.debug) {
	        toast(self, content);
	    }
	}

	function toast(self, content) {
	    self.$call('modal', 'toast', {
	        'message': content,
	        'duration': 2.0
	    });
	}

	function getParameterByName(name, url) {
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function getBaseUrl() {
	    // in Native
	    var base = data.baseurl;
	    if (typeof window === 'object') {
	        // in Browser or WebView
	        base = data.baseh5url;
	    }
	    return base;
	}

	function getBaseImageUrl() {
	    return data.baseImageUrl;
	}

	exports.push = push
	exports.pop = pop
	exports.toastDebug = toastDebug
	exports.toast = toast
	exports.getParameterByName = getParameterByName
	exports.getBaseUrl = getBaseUrl
	exports.getBaseImageUrl = getBaseImageUrl


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Created by walid on 16/6/13.
	 *  str操作工具类使用
	 */

	function trim(str, isGlobal) {
	    var result;
	    result = str.replace(/(^\s+)|(\s+$)/g, "");
	    if (isGlobal) {
	        result = result.replace(/\s/g, "");
	    }
	    return result;
	}

	exports.trim = trim


/***/ }
/******/ ]);