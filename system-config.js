// 由于本js不会经过babel转义，所有的语法都需要使用兼容性最好的语法，const，let等避免使用
(function () {
  var theme = window.APP_THEME || 'default'
  var layout = window.APP_LAYOUT || 'default'
  /**
   * 必须和样式中的主题色保持一致，否则可能出现主题色部分替换失败的问题
   */
  window.APP_PRIMARY_COLOR = window.APP_PRIMARY_COLOR || '#00b38a'
  var themeMap = {
    default: {
      monaco: {
        theme: 'vs'
      }
    },
    dark: {
      monaco: {
        theme: 'vs-dark'
        // theme: 'hc-black'
      }
    }
  }
  var hideOnlyChild = true
  var layoutMap = {
    default: {
      navProps: {
        hideOnlyChild: hideOnlyChild,
        border: true
      },
      slot: {
        navPrimary: 'header-right-end', // 不存在的slot不显示
        navSecondary: 'main-left',
        // filter: 'header-left',
        // toolbar: 'header-right',
        // pagination: 'main-bottom-center'
        filter: 'main-top-left',
        toolbar: 'main-top-right',
        pagination: 'main-bottom-right'
      },
      pageSlot: {
        indexRebuildManage: {
          toolbar: 'header-right'
        }
      },
      element: {
        button: {
          size: 'small', // medium small mini
          round: false
        },
        dialog: {
          closeOnClickModal: false,
          appendToBody: true
        },
        link: {
          underline: false
        },
        form: {
          size: 'small',
          labelPosition: 'left', // left right top
          labelWidth: '100px'
        },
        pagination: {
          small: false,
          background: false,
          hideOnSinglePage: false,
          layout: 'prev, pager, next, total, sizes'
        },
        table: {
          border: true,
          stripe: false,
          size: 'middle',
          headerCellStyle: function () {
            return {}
          },
          rowStyle: function () {
            return {}
          }
        }
      }
    },
    top: {
      navProps: {
        hideOnlyChild: hideOnlyChild,
        border: false
      },
      slot: {
        navPrimary: 'header-center',
        navSecondary: 'header-secondary',
        filter: 'main-top-left',
        toolbar: 'main-top-right',
        pagination: 'main-bottom-right'
      },
      pageSlot: {},
      element: {
        button: {
          size: 'small', // medium small mini
          round: true
        },
        dialog: {
          closeOnClickModal: false,
          appendToBody: true
        },
        link: {
          underline: false
        },
        form: {
          size: 'small',
          labelPosition: 'top', // left right top
          labelWidth: '100px'
        },
        pagination: {
          small: false,
          background: true,
          hideOnSinglePage: false,
          layout: 'prev, pager, next, total'
        },
        table: {
          border: false,
          stripe: true,
          size: 'middle',
          headerCellStyle: function () {
            return {}
          },
          rowStyle: function () {
            return {}
          }
        }
      }
    },
    left: {
      navProps: {
        hideOnlyChild: hideOnlyChild,
        border: true
      },
      slot: {
        navPrimary: null, // 不存在的slot不显示
        navSecondary: 'header-right-start',
        filter: 'header-left',
        toolbar: 'header-right',
        pagination: 'main-bottom-center'
        // filter: 'main-top-left',
        // toolbar: 'main-top-left',
        // pagination: 'main-top-right'
      },
      pageSlot: {
        pageKey: {
          toolbar: 'header-right'
        }
      },
      element: {
        button: {
          size: 'small', // medium small mini
          round: false
        },
        dialog: {
          closeOnClickModal: false,
          appendToBody: true
        },
        link: {
          underline: false
        },
        form: {
          size: 'small',
          labelPosition: 'left', // left right top
          labelWidth: '100px'
        },
        pagination: {
          small: false,
          background: false,
          hideOnSinglePage: false,
          layout: 'prev, pager, next, total, sizes'
        },
        table: {
          border: true,
          stripe: false,
          size: 'middle',
          headerCellStyle: function () {
            return {}
          },
          rowStyle: function () {
            return {}
          }
        }
      }
    }
  }
  var verifyConfig = {
    switch: {
      completeness: false,
      length: true,
      specialCharacter: true
    },
    map: {
      verifyDataDemo: { // 建议使用组件名称
        fieldOne: { // 建议使用字段名
          max: 20, // 最大长度或数字的最大值
          min: 10, // 最小长度或数字的最小值
          sc: /\./ // 不可出现的特殊字符,不写会用defaultSpecialCharacter，false时不校验特殊字符
        },
        fieldTwo: {
          max: 20,
          min: 10
        },
        form: {
          testField: { // 可根据实际情况再嵌套
            max: 50
          }
        }
      }
    },
    defaultSpecialCharacter: new RegExp('^([Nn][Uu][Ll][Ll])+$|[`\\\\（）\\(\\)~！@#$^&*=|{}\\[\\]<>《》/~@#￥&*——|{}【】%……;+\\-："；\'，。？、·!０１２３４５６７８９.:_ ]')
  }
  /**
   * 无特殊需求，不要直接使用window.APP_CONFIG, 使用vue对象中的$config,或者Vue.prototype.$config代替,
   * Vue.prototype.$config考虑后续克隆一份window.APP_CONFIG，而不直接使用该引用，以免合并动态配置后，丢失原始数据
   */
  window.APP_SYSTEM_CONFIG = {
    APPName: 'plantdata',
    allowOrigins: [],
    apps: [],
    autoBackToIndex: false,
    configNsId: null,
    configBaseURL: '',
    css: '',
    editLogoPreview: false,
    element: layoutMap[layout].element,
    emitRouteChange: true,
    layout: layout,
    layoutMap: layoutMap,
    logParamInHeader: true,
    menus: [],
    menusDefaultValue: {}, // 菜单参数默认值
    monaco: themeMap[theme].monaco,
    // isDev: false,
    navProps: layoutMap[layout].navProps,
    needLogin: true,
    pageSlot: layoutMap[layout].pageSlot,
    slot: layoutMap[layout].slot,
    targetOrigin: window.location.origin,
    // targetOrigin: '*',
    theme: theme,
    titleAutoUpdate: true, // 页签标题是否自动更新
    updateUrl: true,
    useVuex: true,
    verifyConfig: verifyConfig
  }
})()
