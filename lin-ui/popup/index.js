// mask
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['popup-class'],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // z-index值
    zIndex: {
      type: Number,
      value: 99
    },
    // 动画效果的显示和隐藏
    animation: {
      type: String,
      value: 'show'
    },
    // slot的位置
    contentAlign: {
      type: String,
      value: 'center'
    },
    // 锁定
    locked: {
      type: Boolean,
      value: false
    }
  },

  attached() {
    this._init();
  },

  pageLifetimes: {
    show() {
      this._init();
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showPopup = (options) => {
        const {
          zIndex = 99,
          animation = 'show',
          contentAlign = 'center',
          locked = false
        } = { ...options };
        this.setData({
          zIndex,
          animation,
          contentAlign,
          locked,
          show: true
        });
      };
      wx.lin.hidePopup = () => {
        this.setData({
          show: false
        });
      };
    },
    // 阻止滑动
    doNothingMove() {
      // do nothing……
    },
    doNothingTap() {
      // do nathing
    },

    // 点击事件
    onPupopTap() {
      let detail = true;
      let option = { bubbles: true, composed: true };
      if (this.data.locked !== true) {
        this.setData({
          show: !this.data.show
        });
      }

      this.triggerEvent('lintap', detail, option);
    }
  }
});
