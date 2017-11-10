require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"MaterialComponents":[function(require,module,exports){
var Inputlabel_dark, Inputlabel_light, Label, Shadow, SystemIcon, TextField, box_dark, box_light, input_dark, input_light, label_dark, label_light, line_dark, line_dark_hover, line_light, line_light_hover,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

label_light = "rgba(0,0,0,0.87)";

label_dark = "rgba(255,255,255,1)";

line_light = "rgba(0,0,0,0.54)";

line_dark = "rgba(255,255,255,0.7)";

input_light = "rgba(0,0,0,0.54)";

input_dark = "rgba(255,255,255,1)";

Inputlabel_light = box_light = "rgba(0,0,0,0.54)";

Inputlabel_dark = box_dark = "rgba(255,255,255,0.7)";

line_light_hover = "rgba(0,0,0,0.87)";

line_dark_hover = "rgba(255,255,255,1)";

Label = (function(superClass) {
  extend(Label, superClass);

  function Label(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).fontFamily == null) {
      base.fontFamily = "'Roboto', sans serif";
    }
    if ((base1 = this.options).fontSize == null) {
      base1.fontSize = 16;
    }
    if ((base2 = this.options).text == null) {
      base2.text = 'Label';
    }
    if ((base3 = this.options).color == null) {
      base3.color = label_light;
    }
    if ((base4 = this.options).fontWeight == null) {
      base4.fontWeight = 400;
    }
    if ((base5 = this.options).letterSpacing == null) {
      base5.letterSpacing = 0;
    }
    if ((base6 = this.options).name == null) {
      base6.name = "label";
    }
    Label.__super__.constructor.call(this, this.options);
  }

  return Label;

})(TextLayer);

Shadow = (function(superClass) {
  extend(Shadow, superClass);

  function Shadow(options) {
    var base;
    this.options = options != null ? options : {};
    if ((base = this.options).backgroundColor == null) {
      base.backgroundColor = "";
    }
    this.umbra = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: this.options.themeColor,
      borderRadius: this.options.borderRadius,
      shadowColor: "rgba(0,0,0,0.14)",
      name: "umbra"
    });
    this.umbra.states = {
      _12dp: {
        shadowY: 12,
        shadowBlur: 17,
        shadowSpread: 2
      },
      _8dp: {
        shadowY: 4,
        shadowBlur: 15,
        shadowSpread: 0
      },
      _6dp: {
        shadowY: 6,
        shadowBlur: 10,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 2,
        shadowBlur: 4,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 0,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 0,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.penumbra = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      borderRadius: this.options.borderRadius,
      shadowColor: "rgba(0,0,0,0.12)",
      name: "penumbra"
    });
    this.penumbra.states = {
      _12dp: {
        shadowY: 5,
        shadowBlur: 22,
        shadowSpread: 4
      },
      _8dp: {
        shadowY: 3,
        shadowBlur: 14,
        shadowSpread: 3
      },
      _6dp: {
        shadowY: 1,
        shadowBlur: 18,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 4,
        shadowBlur: 5,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 2,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 2,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.ambient = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      shadowColor: "rgba(0,0,0,0.20)",
      name: "ambient",
      borderRadius: this.options.borderRadius
    });
    this.ambient.states = {
      _12dp: {
        shadowY: 7,
        shadowBlur: 8,
        shadowSpread: 0
      },
      _8dp: {
        shadowY: 8,
        shadowBlur: 10,
        shadowSpread: 1
      },
      _6dp: {
        shadowY: 3,
        shadowBlur: 5,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 1,
        shadowBlur: 10,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 1,
        shadowBlur: 3,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 1,
        shadowBlur: 3,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.umbra.animationOptions = {
      time: 0.2
    };
    this.penumbra.animationOptions = {
      time: 0.2
    };
    this.ambient.animationOptions = {
      time: 0.2
    };
    this.umbra.states.switchInstant("_2dp");
    this.penumbra.states.switchInstant("_2dp");
    this.ambient.states.switchInstant("_2dp");
    Shadow.__super__.constructor.call(this, this.options);
    this.umbra.parent = this;
    this.penumbra.parent = this;
    this.ambient.parent = this;
    this.array = [this.umbra, this.penumbra, this.ambient];
  }

  return Shadow;

})(Layer);

SystemIcon = (function(superClass) {
  extend(SystemIcon, superClass);

  function SystemIcon(options) {
    var base, base1, base2, base3, base4;
    this.options = options != null ? options : {};
    Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}');
    if ((base = this.options).fontSize == null) {
      base.fontSize = 24;
    }
    if ((base1 = this.options).icon == null) {
      base1.icon = "android";
    }
    this.options.html = "<i class='material-icons tab'>" + this.options.icon + "</i>";
    if ((base2 = this.options).color == null) {
      base2.color = "#009688";
    }
    if ((base3 = this.options).height == null) {
      base3.height = this.options.fontSize;
    }
    if ((base4 = this.options).width == null) {
      base4.width = this.options.fontSize;
    }
    this.options.backgroundColor = "";
    SystemIcon.__super__.constructor.call(this, this.options);
  }

  SystemIcon.define('fontSize', {
    get: function() {
      return this.options.fontSize;
    },
    set: function(value) {
      this.options.fontSize = value;
      return Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}');
    }
  });

  return SystemIcon;

})(Layer);

exports.color = (function(superClass) {
  extend(color, superClass);

  function color(options) {
    this.options = options != null ? options : {};
    this.options = _.defaults(this.options, color.__super__.constructor.call(this, this.options));
  }

  return color;

})(Layer);

exports.red = "#F44336";

exports.red50 = "#FFEBEE";

exports.red100 = "#FFCDD2";

exports.red200 = "#EF9A9A";

exports.red300 = "#E57373";

exports.red400 = "#EF5350";

exports.red500 = "#F44336";

exports.red600 = "#E53935";

exports.red700 = "#D32F2F";

exports.red800 = "#C62828";

exports.red900 = "#B71C1C";

exports.redA100 = "#FF8A80";

exports.redA200 = "#FF5252";

exports.redA400 = "#FF1744";

exports.redA700 = "#D50000";

exports.pink = "#E91E63";

exports.pink50 = "#FCE4EC";

exports.pink100 = "#F8BBD0";

exports.pink200 = "#F48FB1";

exports.pink300 = "#F06292";

exports.pink400 = "#EC407A";

exports.pink500 = "#E91E63";

exports.pink600 = "#D81B60";

exports.pink700 = "#C2185B";

exports.pink800 = "#AD1457";

exports.pink900 = "#880E4F";

exports.pinkA100 = "#FF80AB";

exports.pinkA200 = "#FF4081";

exports.pinkA400 = "#F50057";

exports.pinkA700 = "#C51162";

exports.purple = "#9C27B0";

exports.purple50 = "#F3E5F5";

exports.purple100 = "#E1BEE7";

exports.purple200 = "#CE93D8";

exports.purple300 = "#BA68C8";

exports.purple400 = "#AB47BC";

exports.purple500 = "#9C27B0";

exports.purple600 = "#8E24AA";

exports.purple700 = "#7B1FA2";

exports.purple800 = "#6A1B9A";

exports.purple900 = "#4A148C";

exports.purpleA100 = "#EA80FC";

exports.purpleA200 = "#E040FB";

exports.purpleA400 = "#D500F9";

exports.purpleA700 = "#AA00FF";

exports.deepPurple = "#673AB7";

exports.deepPurple50 = "#EDE7F6";

exports.deepPurple100 = "#D1C4E9";

exports.deepPurple200 = "#B39DDB";

exports.deepPurple300 = "#9575CD";

exports.deepPurple400 = "#7E57C2";

exports.deepPurple500 = "#673AB7";

exports.deepPurple600 = "#5E35B1";

exports.deepPurple700 = "#512DA8";

exports.deepPurple800 = "#4527A0";

exports.deepPurple900 = "#311B92";

exports.deepPurpleA100 = "#B388FF";

exports.deepPurpleA200 = "#7C4DFF";

exports.deepPurpleA400 = "#651FFF";

exports.deepPurpleA700 = "#6200EA";

exports.indigo = "#3F51B5";

exports.indigo50 = "#E8EAF6";

exports.indigo100 = "#C5CAE9";

exports.indigo200 = "#9FA8DA";

exports.indigo300 = "#7986CB";

exports.indigo400 = "#5C6BC0";

exports.indigo500 = "#3F51B5";

exports.indigo600 = "#3949AB";

exports.indigo700 = "#303F9F";

exports.indigo800 = "#283593";

exports.indigo900 = "#1A237E";

exports.indigoA100 = "#8C9EFF";

exports.indigoA200 = "#536DFE";

exports.indigoA400 = "#3D5AFE";

exports.indigoA700 = "#304FFE";

exports.blue = "#2196F3";

exports.blue50 = "#E3F2FD";

exports.blue100 = "#BBDEFB";

exports.blue200 = "#90CAF9";

exports.blue300 = "#64B5F6";

exports.blue400 = "#42A5F5";

exports.blue500 = "#2196F3";

exports.blue600 = "#1E88E5";

exports.blue700 = "#1976D2";

exports.blue800 = "#1565C0";

exports.blue900 = "#0D47A1";

exports.blueA100 = "#82B1FF";

exports.blueA200 = "#448AFF";

exports.blueA400 = "#2979FF";

exports.blueA700 = "#2962FF";

exports.lightBlue = "#03A9F4";

exports.lightBlue50 = "#E1F5FE";

exports.lightBlue100 = "#B3E5FC";

exports.lightBlue200 = "#81D4FA";

exports.lightBlue300 = "#4FC3F7";

exports.lightBlue400 = "#29B6F6";

exports.lightBlue500 = "#03A9F4";

exports.lightBlue600 = "#039BE5";

exports.lightBlue700 = "#0288D1";

exports.lightBlue800 = "#0277BD";

exports.lightBlue900 = "#01579B";

exports.lightBlueA100 = "#80D8FF";

exports.lightBlueA200 = "#40C4FF";

exports.lightBlueA400 = "#00B0FF";

exports.lightBlueA700 = "#0091EA";

exports.cyan = "#00BCD4";

exports.cyan50 = "#E0F7FA";

exports.cyan100 = "#B2EBF2";

exports.cyan200 = "#80DEEA";

exports.cyan300 = "#4DD0E1";

exports.cyan400 = "#26C6DA";

exports.cyan500 = "#00BCD4";

exports.cyan600 = "#00ACC1";

exports.cyan700 = "#0097A7";

exports.cyan800 = "#00838F";

exports.cyan900 = "#006064";

exports.cyanA100 = "#84FFFF";

exports.cyanA200 = "#18FFFF";

exports.cyanA400 = "#00E5FF";

exports.cyanA700 = "#00B8D4";

exports.teal = "#009688";

exports.teal50 = "#E0F2F1";

exports.teal100 = "#B2DFDB";

exports.teal200 = "#80CBC4";

exports.teal300 = "#4DB6AC";

exports.teal400 = "#26A69A";

exports.teal500 = "#009688";

exports.teal600 = "#00897B";

exports.teal700 = "#00796B";

exports.teal800 = "#00695C";

exports.teal900 = "#004D40";

exports.tealA100 = "#A7FFEB";

exports.tealA200 = "#64FFDA";

exports.tealA400 = "#1DE9B6";

exports.tealA700 = "#00BFA5";

exports.green = "#4CAF50";

exports.green50 = "#E8F5E9";

exports.green100 = "#C8E6C9";

exports.green200 = "#A5D6A7";

exports.green300 = "#81C784";

exports.green400 = "#66BB6A";

exports.green500 = "#4CAF50";

exports.green600 = "#43A047";

exports.green700 = "#388E3C";

exports.green800 = "#2E7D32";

exports.green900 = "#1B5E20";

exports.greenA100 = "#B9F6CA";

exports.greenA200 = "#69F0AE";

exports.greenA400 = "#00E676";

exports.greenA700 = "#00C853";

exports.lightGreen = "#8BC34A";

exports.lightGreen50 = "#F1F8E9";

exports.lightGreen100 = "#DCEDC8";

exports.lightGreen200 = "#C5E1A5";

exports.lightGreen300 = "#AED581";

exports.lightGreen400 = "#9CCC65";

exports.lightGreen500 = "#8BC34A";

exports.lightGreen600 = "#7CB342";

exports.lightGreen700 = "#689F38";

exports.lightGreen800 = "#558B2F";

exports.lightGreen900 = "#33691E";

exports.lightGreenA100 = "#CCFF90";

exports.lightGreenA200 = "#B2FF59";

exports.lightGreenA400 = "#76FF03";

exports.lightGreenA700 = "#64DD17";

exports.lime = "#CDDC39";

exports.lime50 = "#F9FBE7";

exports.lime100 = "#F0F4C3";

exports.lime200 = "#E6EE9C";

exports.lime300 = "#DCE775";

exports.lime400 = "#D4E157";

exports.lime500 = "#CDDC39";

exports.lime600 = "#C0CA33";

exports.lime700 = "#AFB42B";

exports.lime800 = "#9E9D24";

exports.lime900 = "#827717";

exports.limeA100 = "#F4FF81";

exports.limeA200 = "#EEFF41";

exports.limeA400 = "#C6FF00";

exports.limeA700 = "#AEEA00";

exports.yellow = "#FFEB3B";

exports.yellow50 = "#FFFDE7";

exports.yellow100 = "#FFF9C4";

exports.yellow200 = "#FFF59D";

exports.yellow300 = "#FFF176";

exports.yellow400 = "#FFEE58";

exports.yellow500 = "#FFEB3B";

exports.yellow600 = "#FDD835";

exports.yellow700 = "#FBC02D";

exports.yellow800 = "#F9A825";

exports.yellow900 = "#F57F17";

exports.yellowA100 = "#FFFF8D";

exports.yellowA200 = "#FFFF00";

exports.yellowA400 = "#FFEA00";

exports.yellowA700 = "#FFD600";

exports.amber = "#FFC107";

exports.amber50 = "#FFF8E1";

exports.amber100 = "#FFECB3";

exports.amber200 = "#FFE082";

exports.amber300 = "#FFD54F";

exports.amber400 = "#FFCA28";

exports.amber500 = "#FFC107";

exports.amber600 = "#FFB300";

exports.amber700 = "#FFA000";

exports.amber800 = "#FF8F00";

exports.amber900 = "#FF6F00";

exports.amberA100 = "#FFE57F";

exports.amberA200 = "#FFD740";

exports.amberA400 = "#FFC400";

exports.amberA700 = "#FFAB00";

exports.orange = "#FF9800";

exports.orange50 = "#FFF3E0";

exports.orange100 = "#FFE0B2";

exports.orange200 = "#FFCC80";

exports.orange300 = "#FFB74D";

exports.orange400 = "#FFA726";

exports.orange500 = "#FF9800";

exports.orange600 = "#FB8C00";

exports.orange700 = "#F57C00";

exports.orange800 = "#EF6C00";

exports.orange900 = "#E65100";

exports.orangeA100 = "#FFD180";

exports.orangeA200 = "#FFAB40";

exports.orangeA400 = "#FF9100";

exports.orangeA700 = "#FF6D00";

exports.deepOrange = "#FF5722";

exports.deepOrange50 = "#FBE9E7";

exports.deepOrange100 = "#FFCCBC";

exports.deepOrange200 = "#FFAB91";

exports.deepOrange300 = "#FF8A65";

exports.deepOrange400 = "#FF7043";

exports.deepOrange500 = "#FF5722";

exports.deepOrange600 = "#F4511E";

exports.deepOrange700 = "#E64A19";

exports.deepOrange800 = "#D84315";

exports.deepOrange900 = "#BF360C";

exports.deepOrangeA100 = "#FF9E80";

exports.deepOrangeA200 = "#FF6E40";

exports.deepOrangeA400 = "#FF3D00";

exports.deepOrangeA700 = "#DD2C00";

exports.brown = "#795548";

exports.brown50 = "#EFEBE9";

exports.brown100 = "#D7CCC8";

exports.brown200 = "#BCAAA4";

exports.brown300 = "#A1887F";

exports.brown400 = "#8D6E63";

exports.brown500 = "#795548";

exports.brown600 = "#6D4C41";

exports.brown700 = "#5D4037";

exports.brown800 = "#4E342E";

exports.brown900 = "#4E342E";

exports.brownA100 = "";

exports.brownA200 = "";

exports.brownA400 = "";

exports.brownA700 = "";

exports.grey = "#9E9E9E";

exports.grey50 = "#FAFAFA";

exports.grey100 = "#F5F5F5";

exports.grey200 = "#EEEEEE";

exports.grey300 = "#E0E0E0";

exports.grey400 = "#BDBDBD";

exports.grey500 = "#9E9E9E";

exports.grey600 = "#757575";

exports.grey700 = "#616161";

exports.grey800 = "#424242";

exports.grey900 = "#212121";

exports.greyA100 = "";

exports.greyA200 = "";

exports.greyA400 = "";

exports.greyA700 = "";

exports.blueGrey = "#607D8B";

exports.blueGrey50 = "#ECEFF1";

exports.blueGrey100 = "#CFD8DC";

exports.blueGrey200 = "#B0BEC5";

exports.blueGrey300 = "#90A4AE";

exports.blueGrey400 = "#78909C";

exports.blueGrey500 = "#607D8B";

exports.blueGrey600 = "#546E7A";

exports.blueGrey700 = "#455A64";

exports.blueGrey800 = "#37474F";

exports.blueGrey900 = "#263238";

exports.black = "#000";

exports.white = "#fff";

exports.lightPrimary = "rgba(0,0,0,0.87)";

exports.lightSecondary = "rgba(0,0,0,0.54)";

exports.lightDisabled = "rgba(0,0,0,0.38)";

exports.darkPrimary = "rgba(255,255,255,1)";

exports.darkSecondary = "rgba(255,255,255, 0.7)";

exports.darkDisabled = "rgba(255,255,255,0.5)";

exports.FlatButton = (function(superClass) {
  extend(FlatButton, superClass);

  function FlatButton(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9;
    this.options = options != null ? options : {};
    this.HoverOff = bind(this.HoverOff, this);
    this.Hover = bind(this.Hover, this);
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).labelText == null) {
      base.labelText = "Flat Button";
    }
    if ((base1 = this.options).themeColor == null) {
      base1.themeColor = "#009688";
    }
    if ((base2 = this.options).disabled == null) {
      base2.disabled = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).directionRipple == null) {
      base4.directionRipple = false;
    }
    if ((base5 = this.options).fontFamily == null) {
      base5.fontFamily = "'Roboto', sans serif";
    }
    if ((base6 = this.options).disableRipple == null) {
      base6.disableRipple = false;
    }
    if ((base7 = this.options).letterSpacing == null) {
      base7.letterSpacing = 0;
    }
    if ((base8 = this.options).fontWeight == null) {
      base8.fontWeight = 600;
    }
    if ((base9 = this.options).fontSize == null) {
      base9.fontSize = 14;
    }
    if (this.options.disabled === true) {
      if (this.options.theme === "dark") {
        this.disabled_labelColor = "rgba(255,255,255,0.3)";
      } else {
        this.disabled_labelColor = "rgba(0,0,0,0.26)";
      }
    }
    _.defaults(this.options, {
      backgroundColor: null,
      height: 48,
      borderRadius: 2,
      width: this.options.labelText.length * ((this.options.fontSize + 3) / 2) + 16 + 16,
      name: "Flat button"
    });
    if (this.options.width < 88) {
      this.options.width = 88;
    }
    if (this.options.dense === true) {
      this.options.width = this.options.labelText.length * ((this.options.fontSize + 2) / 2) + 16 + 16;
      this.buttonHeight = 32;
    } else {
      this.buttonHeight = 36;
    }
    this.bttnBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: this.options.themeColor,
      clip: true,
      borderRadius: 2,
      opacity: 0.12,
      visible: false,
      name: "overlay"
    });
    this.rippleBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: null,
      name: "ripple parent"
    });
    this.ripple = new Layer({
      borderRadius: "100%",
      size: this.options.width,
      backgroundColor: this.options.themeColor,
      scale: 0.3,
      opacity: 0,
      name: "ripple"
    });
    this.label = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      textTransform: "Uppercase",
      color: this.options.themeColor,
      fontWeight: this.options.fontWeight,
      fontFamily: this.options.fontFamily,
      letterSpacing: this.options.letterSpacing,
      name: "label"
    });
    FlatButton.__super__.constructor.call(this, this.options);
    this.bttnBG.parent = this.label.parent = this.rippleBG.parent = this;
    this.bttnBG.y = Align.center;
    this.rippleBG.y = Align.center;
    this.rippleBG.clip = true;
    this.ripple.parent = this.rippleBG;
    this.ripple.x = Align.center;
    this.ripple.y = Align.center;
    this.label.x = Align.center;
    this.label.y = Align.center(1);
    if (this.disableRipple === false) {
      this.ripple.destroy();
    }
    this.onClick(this.clicked);
    this.onMouseOver(this.Hover);
    this.onMouseOut(this.HoverOff);
    this.onMouseDown(this.mouseDown);
    this.onMouseUp(this.mouseUp);
  }

  FlatButton.define('disabled', {
    get: function() {
      return this.options.disabled;
    },
    set: function(value) {
      this.options.disabled = value;
      if (this.options.disabled === true) {
        this.label.color = this.disabled_labelColor;
      }
      if (this.options.disabled === false) {
        return this.label.color = this.options.themeColor;
      }
    }
  });

  FlatButton.prototype.Hover = function() {
    if (this.options.disabled === false) {
      return this.bttnBG.visible = true;
    }
  };

  FlatButton.prototype.HoverOff = function() {
    return this.bttnBG.visible = false;
  };

  FlatButton.prototype.mouseDown = function() {
    return this.bttnBG.brightness = 80;
  };

  FlatButton.prototype.mouseUp = function() {
    return this.bttnBG.brightness = 100;
  };

  FlatButton.prototype.clicked = function(ev) {
    var rippleA, rippleB;
    if (this.options.disabled === false) {
      if (this.options.disableRipple === false) {
        if (this.options.directionRipple === true) {
          this.ripple.midX = ev.offsetX;
          this.ripple.midY = ev.offsetY;
          this.ripple.size = (this.options.labelText.length * 8.5 + 16 + 16) * 1.5;
        }
        this.ripple.visible = true;
        this.ripple.scale = 0.4;
        this.ripple.opacity = 0.3;
        rippleA = new Animation({
          layer: this.ripple,
          properties: {
            scale: 0.8
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleB = new Animation({
          layer: this.ripple,
          properties: {
            scale: 1,
            opacity: 0
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleA.start();
        return rippleA.onAnimationEnd(function() {
          return rippleB.start();
        });
      }
    }
  };

  return FlatButton;

})(Layer);

exports.RaisedButton = (function(superClass) {
  extend(RaisedButton, superClass);

  function RaisedButton(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9;
    this.options = options != null ? options : {};
    this.HoverOff = bind(this.HoverOff, this);
    this.Hover = bind(this.Hover, this);
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).labelText == null) {
      base.labelText = "Raised button";
    }
    if ((base1 = this.options).themeColor == null) {
      base1.themeColor = "#009688";
    }
    if ((base2 = this.options).disabled == null) {
      base2.disabled = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).directionRipple == null) {
      base4.directionRipple = false;
    }
    if ((base5 = this.options).fontFamily == null) {
      base5.fontFamily = "'Roboto', sans serif";
    }
    this.options.height = 48;
    if ((base6 = this.options).disableRipple == null) {
      base6.disableRipple = false;
    }
    if ((base7 = this.options).letterSpacing == null) {
      base7.letterSpacing = 0;
    }
    if ((base8 = this.options).fontWeight == null) {
      base8.fontWeight = 600;
    }
    if ((base9 = this.options).fontSize == null) {
      base9.fontSize = 14;
    }
    if (this.options.disabled === true) {
      if (this.options.theme === "dark") {
        this.disabled_BG = "rgba(255,255,255,0.12)";
        this.disabled_labelColor = "rgba(255,255,255,0.3)";
      } else {
        this.disabled_BG = "rgba(0,0,0,0.12)";
        this.disabled_labelColor = "rgba(0,0,0,0.26)";
      }
    }
    _.defaults(this.options, {
      backgroundColor: "",
      color: "",
      borderRadius: 2,
      name: "Raised button",
      width: this.options.labelText.length * ((this.options.fontSize + 3) / 2) + 16 + 16
    });
    if (this.options.width < 88) {
      this.options.width = 88;
    }
    if (this.options.dense === true) {
      this.buttonHeight = 32;
    } else {
      this.buttonHeight = 36;
    }
    this.shadow = new Shadow({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: this.options.themeColor,
      borderRadius: this.options.borderRadius,
      name: "shadows"
    });
    this.bttnBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: "#fff",
      clip: true,
      borderRadius: 2,
      opacity: 0,
      name: "overlay"
    });
    this.rippleBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      clip: true,
      borderRadius: 2,
      name: "ripple parent",
      clip: true,
      backgroundColor: ""
    });
    this.ripple = new Layer({
      borderRadius: "100%",
      size: this.options.width,
      backgroundColor: "#fff",
      scale: 0.3,
      opacity: 0,
      name: "ripple"
    });
    this.rippleColor = this.ripple.backgroundColor;
    this.label = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      textTransform: "Uppercase",
      color: "#fff",
      fontWeight: this.options.fontWeight,
      fontFamily: this.options.fontFamily,
      letterSpacing: this.options.letterSpacing,
      name: "label"
    });
    RaisedButton.__super__.constructor.call(this, this.options);
    this.label.parent = this.rippleBG.parent = this.shadow.parent = this.bttnBG.parent = this;
    this.shadow.y = this.bttnBG.y = this.rippleBG.y = Align.center;
    this.ripple.parent = this.rippleBG;
    this.ripple.x = Align.center;
    this.ripple.y = Align.center;
    this.label.x = Align.center;
    this.label.y = Align.center(1);
    if (this.disableRipple === false) {
      this.ripple.destroy();
    }
    this.onClick(this.clicked);
    this.onMouseOver(this.Hover);
    this.onMouseOut(this.HoverOff);
    this.onMouseDown(this.mouseDown);
    this.onMouseUp(this.mouseUp);
  }

  RaisedButton.define('disabled', {
    get: function() {
      return this.options.disabled;
    },
    set: function(value) {
      this.options.disabled = value;
      if (this.options.disabled === true) {
        this.label.color = this.disabled_labelColor;
        return this.shadow.backgroundColor = this.disabled_BG;
      } else {
        this.shadow.backgroundColor = this.options.themeColor;
        return this.label.color = "#fff";
      }
    }
  });

  RaisedButton.prototype.Hover = function() {
    var item, j, len, ref, results;
    if (this.options.disabled === false) {
      this.bttnBG.opacity = 0.12;
      ref = this.shadow.array;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        item = ref[j];
        results.push(item.states["switch"]("_8dp"));
      }
      return results;
    }
  };

  RaisedButton.prototype.HoverOff = function() {
    var item, j, len, ref, results;
    this.bttnBG.opacity = 0;
    ref = this.shadow.array;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      results.push(item.states["switch"]("_2dp"));
    }
    return results;
  };

  RaisedButton.prototype.mouseDown = function() {
    if (this.options.disabled === false) {
      this.brightness = 80;
      return this.bttnBG.opacity = 0;
    }
  };

  RaisedButton.prototype.mouseUp = function() {
    return this.brightness = 100;
  };

  RaisedButton.prototype.clicked = function(ev) {
    var rippleA, rippleB;
    if (this.options.disabled === false) {
      if (this.options.disableRipple === false) {
        if (this.options.directionRipple === true) {
          this.ripple.midX = ev.offsetX;
          this.ripple.midY = ev.offsetY;
          this.ripple.size = (this.options.labelText.length * 8.5 + 16 + 16) * 1.5;
        }
        this.ripple.visible = true;
        this.ripple.scale = 0.4;
        this.ripple.opacity = 0.3;
        rippleA = new Animation({
          layer: this.ripple,
          properties: {
            scale: 0.8
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleB = new Animation({
          layer: this.ripple,
          properties: {
            scale: 1,
            opacity: 0
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleA.start();
        return rippleA.onAnimationEnd(function() {
          return rippleB.start();
        });
      }
    }
  };

  return RaisedButton;

})(Layer);

exports.FAB = (function(superClass) {
  extend(FAB, superClass);

  function FAB(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9, pd;
    this.options = options != null ? options : {};
    if (Utils.isDesktop()) {
      pd = 24;
    } else {
      pd = 16;
    }
    if ((base = this.options).mini == null) {
      base.mini = false;
    }
    if (this.options.mini === true || Screen.width < 460) {
      if ((base1 = this.options).width == null) {
        base1.width = 40;
      }
      if ((base2 = this.options).height == null) {
        base2.height = 40;
      }
    } else {
      if ((base3 = this.options).width == null) {
        base3.width = 56;
      }
      if ((base4 = this.options).height == null) {
        base4.height = 56;
      }
    }
    if ((base5 = this.options).x == null) {
      base5.x = Screen.width - (this.options.width + pd);
    }
    if ((base6 = this.options).y == null) {
      base6.y = Screen.height - (this.options.width + pd);
    }
    this.options.borderRadius = "100%";
    if ((base7 = this.options).themeColor == null) {
      base7.themeColor = "#009688";
    }
    if ((base8 = this.options).backgroundColor == null) {
      base8.backgroundColor = this.options.themeColor;
    }
    if ((base9 = this.options).icon == null) {
      base9.icon = "add";
    }
    this.overlay = new Layer({
      width: this.options.width,
      height: this.options.height,
      borderRadius: this.options.borderRadius,
      backgroundColor: "rgba(0,0,0,0.12)",
      visible: false,
      name: "overlay"
    });
    this.shadow = new Shadow({
      width: this.options.width,
      height: this.options.height,
      borderRadius: this.options.borderRadius,
      name: "shadow"
    });
    this.shadow.umbra.states.switchInstant("_6dp");
    this.shadow.penumbra.states.switchInstant("_6dp");
    this.shadow.ambient.states.switchInstant("_6dp");
    this.icon = new SystemIcon({
      width: 24,
      height: 24,
      icon: this.options.icon,
      color: "#fff",
      name: "icon"
    });
    FAB.__super__.constructor.call(this, this.options);
    this.icon.parent = this.overlay.parent = this.shadow.parent = this;
    this.icon.center();
    if (Utils.isDesktop()) {
      this.onMouseOver(this.Hover);
      this.onMouseOut(this.HoverOff);
      this.onMouseDown(this.mouseDown);
      this.onMouseUp(this.mouseUp);
    } else {
      this.onTapStart(this.mouseDown);
      this.onTapEnd(this.mouseUp);
    }
  }

  FAB.prototype.Hover = function() {
    this.shadow.umbra.states["switch"]("_12dp");
    this.shadow.penumbra.states["switch"]("_12dp");
    return this.shadow.ambient.states["switch"]("_12dp");
  };

  FAB.prototype.HoverOff = function() {
    this.shadow.umbra.states["switch"]("_6dp");
    this.shadow.penumbra.states["switch"]("_6dp");
    return this.shadow.ambient.states["switch"]("_6dp");
  };

  FAB.prototype.mouseDown = function() {
    this.overlay.visible = true;
    this.shadow.umbra.states.switchInstant("_12dp");
    this.shadow.penumbra.states.switchInstant("_12dp");
    return this.shadow.ambient.states.switchInstant("_12dp");
  };

  FAB.prototype.mouseUp = function() {
    this.overlay.visible = false;
    this.shadow.umbra.states.switchInstant("_6dp");
    this.shadow.penumbra.states.switchInstant("_6dp");
    return this.shadow.ambient.states.switchInstant("_6dp");
  };

  return FAB;

})(Layer);

exports.Checkboxes = (function(superClass) {
  extend(Checkboxes, superClass);

  function Checkboxes(options) {
    var ao, base, base1, base2, base3, base4, base5, base6, base7, box, boxCircle, boxColor, check, checkMask, checkY, checks, choice_label, cont, dp, i, j, ref, ripple, t1, t2, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).theme == null) {
      base.theme = "light";
    }
    theme = this.options.theme;
    if ((base1 = this.options).name == null) {
      base1.name = "checkboxes";
    }
    if ((base2 = this.options).disableRipple == null) {
      base2.disableRipple = false;
    }
    if (this.options.theme === "dark") {
      if ((base3 = this.options).screenColor == null) {
        base3.screenColor = "#212121";
      }
    } else {
      if ((base4 = this.options).screenColor == null) {
        base4.screenColor = "#fff";
      }
    }
    if ((base5 = this.options).choices == null) {
      base5.choices = ["apples", "bananas", "grapes"];
    }
    if ((base6 = this.options).checkY == null) {
      base6.checkY = -5;
    }
    if (this.themeColor == null) {
      this.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.boxColor = line_dark;
    } else {
      this.labelColor = label_light;
      this.boxColor = line_light;
    }
    boxColor = this.boxColor;
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base7 = this.options).labelText == null) {
      base7.labelText = "Select fruit";
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: this.options.choices.length * 36 + 32,
      width: 150
    });
    this.label = new Label({
      color: this.labelColor,
      text: this.options.labelText,
      name: "label"
    });
    Checkboxes.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    checkY = this.options.checkY;
    t1 = 0.2;
    t2 = 0.2;
    checks = [];
    for (i = j = 0, ref = this.options.choices.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      cont = new Layer({
        parent: this,
        height: 40,
        y: i * 40 + 24,
        backgroundColor: "",
        x: 16,
        name: "container"
      });
      box = new Layer({
        backgroundColor: "",
        size: 20,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: this.boxColor,
        parent: cont,
        clip: true,
        name: this.options.choices[i],
        y: Align.center,
        name: this.options.choices[i]
      });
      box.animationOptions = {
        time: t1
      };
      box.states = {
        selected: {
          borderColor: this.options.themeColor,
          backgroundColor: this.options.themeColor
        },
        deselected: {
          borderColor: this.boxColor,
          backgroundColor: this.boxColor
        }
      };
      box.states.switchInstant("deselected");
      box.backgroundColor = this.options.screenColor;
      boxCircle = new Layer({
        parent: box,
        borderRadius: "100%",
        size: 30,
        scale: 0,
        backgroundColor: this.screenColor,
        x: Align.center(2),
        y: Align.center(2),
        name: "overlay"
      });
      boxCircle.animationOptions = {
        time: t1
      };
      boxCircle.states = {
        selected: {
          scale: 0
        },
        deselected: {
          scale: 1,
          backgroundColor: this.options.screenColor
        }
      };
      checkMask = new Layer({
        width: 0,
        height: 20,
        backgroundColor: "",
        parent: box,
        y: checkY,
        x: 3.5,
        parent: box,
        clip: true,
        name: "check mask"
      });
      checkMask.states.selected = {
        properties: {
          width: 20
        },
        time: t2
      };
      checkMask.states.deselected = {
        properties: {
          width: 0
        },
        time: 0.01
      };
      checkMask.states["switch"]("deselected");
      check = new Layer({
        html: '<svg width="13px" height="10px" viewBox="0 0 13 10"><g id="Components" stroke="none" stroke-width="1" fill="none"  stroke-linejoin="round"><polyline id="Path-2" stroke="#FFFFFF" stroke-width="2" points="1 5.25 4 9 12 1.5"></polyline></g></svg>',
        width: 20,
        height: 20,
        backgroundColor: "",
        parent: checkMask,
        name: this.options.choices[i],
        y: 0,
        name: "check"
      });
      check.style = {
        fontSize: "18px"
      };
      if (this.options.disableRipple === false) {
        ripple = new Layer({
          size: 50,
          borderRadius: "100px",
          parent: cont,
          y: Align.center,
          x: -15,
          opacity: 0.3,
          visible: false,
          name: "ripple"
        });
        ripple.states.selected = {
          backgroundColor: this.options.themeColor
        };
        if (this.options.theme === "light") {
          ripple.states.deselected = {
            backgroundColor: "#000"
          };
        }
        if (this.options.theme === "dark") {
          ripple.states.deselected = {
            backgroundColor: "#fff"
          };
        }
      }
      choice_label = new Label({
        text: this.options.choices[i],
        parent: cont,
        x: 30,
        color: this.labelColor,
        y: Align.center(-0.5),
        name: "choice ripple"
      });
      checks.push(box);
      ao = this.options;
      dp = this.options.disableRipple;
      ao.activeSelection = [];
      cont.onClick(function() {
        var k, len, pBox, pBoxCircle, pCheckMask, pRipple, pRippleB, pulsaA;
        ao.activeSelection = [];
        if (dp === false) {
          pRipple = this.children[1];
        }
        pCheckMask = this.children[0].children[1];
        pBox = this.children[0];
        pBoxCircle = this.children[0].children[0];
        pBox.stateCycle("selected", "deselected");
        pBoxCircle.stateCycle("selected", "deselected");
        if (pBox.states.current.name === "selected") {
          if (dp === false) {
            pRipple.states.switchInstant("selected");
          }
          Utils.delay(t1, function() {
            return pCheckMask.states["switch"]("selected");
          });
        } else {
          if (dp === false) {
            pRipple.states.switchInstant("deselected");
          }
          pCheckMask.states["switch"]("deselected");
        }
        for (k = 0, len = checks.length; k < len; k++) {
          box = checks[k];
          if (box.states.current.name === "selected") {
            ao.activeSelection.push(box.name);
          }
        }
        if (dp === false) {
          pRipple.visible = true;
          pRipple.scale = 0.4;
          pRipple.opacity = 0.4;
          if (pRipple.states.current.name === "selected") {
            pRipple.opacity = 0.8;
          }
          pulsaA = new Animation({
            layer: pRipple,
            properties: {
              scale: 0.8
            },
            time: 0.15,
            curve: Bezier.linear
          });
          pRippleB = new Animation({
            layer: pRipple,
            properties: {
              scale: 1,
              opacity: 0
            },
            time: 0.15,
            curve: Bezier.linear
          });
          pulsaA.start();
          pulsaA.onAnimationEnd(function() {});
          return pRippleB.start();
        }
      });
      cont.onMouseOver(function() {
        return this.children[0].borderColor = themeColor;
      });
      cont.onMouseOut(function() {
        if (this.children[0].states.current.name === "deselected") {
          return this.children[0].borderColor = boxColor;
        }
      });
    }
  }

  Checkboxes.define('themeColor', {
    get: function() {
      return this.options.themeColor;
    },
    set: function(value) {
      return this.options.themeColor = value;
    }
  });

  Checkboxes.define('choices', {
    get: function() {
      return this.options.choices;
    },
    set: function(value) {
      return this.options.choices = value;
    }
  });

  Checkboxes.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  return Checkboxes;

})(Layer);

exports.RadioButtons = (function(superClass) {
  extend(RadioButtons, superClass);

  function RadioButtons(options) {
    var base, base1, base2, base3, base4, bb, boxColor, check, checks, choice_label, circle, circles, cont, dp, helper, i, j, l, oc, ref, ripple, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).theme == null) {
      base.theme = "light";
    }
    theme = this.options.theme;
    if ((base1 = this.options).disableRipple == null) {
      base1.disableRipple = false;
    }
    if ((base2 = this.options).choices == null) {
      base2.choices = ["apples", "bananas", "grapes"];
    }
    if ((base3 = this.options).themeColor == null) {
      base3.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.boxColor = line_dark;
    } else {
      this.labelColor = label_light;
      this.boxColor = line_light;
    }
    boxColor = this.boxColor;
    if ((base4 = this.options).labelText == null) {
      base4.labelText = "Select fruit";
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: this.options.choices.length * 36 + 32,
      width: 150,
      name: "RadioButtons"
    });
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label"
    });
    RadioButtons.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    l = this.options.choices;
    checks = [];
    circles = [];
    for (i = j = 0, ref = this.options.choices.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      cont = new Layer({
        height: 40,
        y: 40 * i + 24,
        backgroundColor: "",
        parent: this,
        name: this.options.choices[i],
        x: 16
      });
      circle = new Layer({
        backgroundColor: "",
        size: 20,
        borderRadius: "100%",
        borderWidth: 2,
        borderColor: this.boxColor,
        parent: cont,
        y: Align.center,
        name: "circle"
      });
      circle.animationOptions = {
        time: 0.001
      };
      circle.states = {
        selected: {
          borderColor: themeColor
        },
        deselected: {
          borderColor: this.boxColor
        }
      };
      circles.push(circle);
      circle.states["switch"]("deselected");
      if (i === this.options.activeSelection) {
        circle.states.switchInstant("selected");
      }
      check = new Layer({
        width: 10,
        height: 10,
        backgroundColor: this.options.themeColor,
        borderRadius: circle.borderRadius,
        parent: circle,
        x: 5,
        y: 5,
        name: i
      });
      check.animationOptions = {
        time: 0.17
      };
      check.states = {
        selected: {
          scale: 1
        },
        deselected: {
          scale: 0
        }
      };
      check.states.switchInstant("deselected");
      checks.push(check);
      if (i === this.options.activeSelection) {
        check.states.switchInstant("selected");
      }
      if (this.options.disableRipple === false) {
        ripple = new Layer({
          size: 50,
          borderRadius: "100px",
          parent: circle,
          y: Align.center(2),
          x: Align.center(2),
          opacity: 0.12,
          visible: false,
          backgroundColor: this.options.themeColor,
          name: "ripple"
        });
      }
      choice_label = new Label({
        text: this.options.choices[i],
        parent: cont,
        x: 30,
        color: this.labelColor,
        y: -0.5,
        y: Align.center,
        name: "choice label"
      });
      helper = new Layer({
        backgroundColor: "",
        height: 5,
        parent: cont,
        width: i,
        name: "helper"
      });
      this.activeSelection = null;
      bb = this.activeSelection;
      dp = this.options.disableRipple;
      oc = this.themeColor;
      cont.onClick(function() {
        var RippleA, RippleB, k, len, len1, m, pCheck, pCircle, pRipple;
        pRipple = this.children[0].children[1];
        pCheck = this.children[0].children[0];
        pCircle = this.children[0];
        for (k = 0, len = checks.length; k < len; k++) {
          check = checks[k];
          if (check.name === pCheck.name) {
            pCheck.states["switch"]("selected");
          } else {
            check.states["switch"]("deselected");
          }
        }
        for (m = 0, len1 = circles.length; m < len1; m++) {
          circle = circles[m];
          circle.states["switch"]("deselected");
        }
        pCircle.states.switchInstant("selected");
        bb = this.name;
        if (dp === false) {
          pRipple.visible = true;
          pRipple.scale = 0.4;
          pRipple.opacity = 0.2;
          if (pRipple.states.current.name === "selected") {
            pRipple.opacity = 0.3;
          }
          RippleA = new Animation({
            layer: pRipple,
            properties: {
              scale: 0.8
            },
            time: 0.15,
            curve: Bezier.linear
          });
          RippleB = new Animation({
            layer: pRipple,
            properties: {
              scale: 1,
              opacity: 0
            },
            time: 0.15,
            curve: Bezier.linear
          });
          RippleA.start();
          return RippleA.onAnimationEnd(function() {
            return RippleB.start();
          });
        }
      });
      cont.onMouseOver(function() {
        return this.children[0].borderColor = themeColor;
      });
      cont.onMouseOut(function() {
        if (this.children[0].states.current.name === "deselected") {
          return this.children[0].borderColor = boxColor;
        }
      });
      this.onClick(function() {
        return this.options.activeSelection = bb;
      });
    }
  }

  RadioButtons.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  RadioButtons.define('theme', {
    get: function() {
      return this.options.theme;
    },
    set: function(value) {
      return this.options.theme = value;
    }
  });

  return RadioButtons;

})(Layer);

exports.Switch = (function(superClass) {
  extend(Switch, superClass);

  function Switch(options) {
    var base, base1, base2, base3, base4, ripple, rippleAni, shadow, state, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).disableRipple == null) {
      base.disableRipple = false;
    }
    if ((base1 = this.options).activeOnStart == null) {
      base1.activeOnStart = false;
    }
    if ((base2 = this.options).active == null) {
      base2.active = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    theme = this.options.theme;
    if ((base4 = this.options).themeColor == null) {
      base4.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    this.thumbColor = this.options.themeColor;
    this.trackColor = this.options.themeColor;
    this.thumb_light_off = "#FAFAFA";
    this.thumb_dark_off = "#bdbdbd";
    this.track_light_off = "rgba(0,0,0,0.38)";
    this.track_dark_off = "rgba(255,255,255,0.3)";
    this.ripple_dark_off = "rgba(255,255,255, 1)";
    this.ripple_light_off = "rgba(0,0,0, 1)";
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.thumbOff = this.thumb_dark_off;
      this.trackOff = this.track_dark_off;
      this.rippleOff = this.ripple_dark_off;
    } else {
      this.labelColor = label_light;
      this.thumbOff = this.thumb_light_off;
      this.trackOff = this.track_light_off;
      this.rippleOff = this.ripple_light_off;
    }
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    _.defaults(this.options, {
      backgroundColor: "",
      height: 48,
      width: 150
    });
    this.track = new Layer({
      width: 40,
      height: 15,
      borderRadius: 15,
      name: "track"
    });
    this.track.animationOptions = {
      time: 0.2
    };
    this.track.states = {
      on: {
        backgroundColor: this.options.themeColor,
        opacity: 0.5
      },
      off: {
        backgroundColor: this.trackOff,
        opacity: 0.38
      }
    };
    delete this.track.states["default"];
    this.track.states.switchInstant("off");
    this.ripple = new Layer({
      size: 50,
      scale: 1,
      borderRadius: 50,
      opacity: 0.2,
      visible: false,
      name: "ripple",
      backgroundColor: this.options.themeColor
    });
    this.thumb = new Layer({
      size: 19,
      borderRadius: 100,
      name: "thumb",
      backgroundColor: this.thumbOff
    });
    this.thumb.animationOptions = {
      time: 0.3
    };
    this.thumb.states = {
      on: {
        x: 21,
        backgroundColor: this.options.themeColor
      },
      off: {
        x: 0,
        backgroundColor: this.thumbOff
      }
    };
    delete this.thumb.states["default"];
    this.thumb.states.switchInstant("off");
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label"
    });
    Switch.__super__.constructor.call(this, this.options);
    this.track.parent = this;
    this.track.y = Align.center;
    this.thumb.parent = this;
    this.thumb.y = Align.center;
    this.label.parent = this;
    this.label.x = 55;
    this.label.y = Align.center;
    if (this.options.disableRipple === false) {
      this.ripple.parent = this.thumb;
      this.ripple.x = -15;
      this.ripple.y = -15;
      ripple = this.ripple;
    }
    shadow = new Shadow({
      parent: this.thumb,
      borderRadius: 100,
      width: this.thumb.width,
      height: this.thumb.width,
      name: "shadow"
    });
    if (this.options.activeOnStart === true) {
      this.thumb.states.switchInstant("on");
      this.track.states.switchInstant("on");
      this.active = true;
    }
    rippleAni = function() {
      var pulsaA, rippleB;
      ripple.visible = true;
      ripple.scale = 0.4;
      pulsaA = new Animation({
        layer: ripple,
        properties: {
          scale: 0.8
        },
        time: 0.15,
        curve: Bezier.linear
      });
      rippleB = new Animation({
        layer: ripple,
        properties: {
          scale: 1,
          opacity: 0
        },
        time: 0.15,
        curve: Bezier.linear
      });
      pulsaA.start();
      return pulsaA.onAnimationEnd(function() {
        return rippleB.start();
      });
    };
    state = null;
    this.onClick(function() {
      var posX;
      this.track.stateCycle();
      this.thumb.stateCycle();
      if (this.options.disableRipple === false) {
        if (this.thumb.states.current.name === "on") {
          this.ripple.backgroundColor = this.options.themeColor;
          this.ripple.opacity = 0.4;
          posX = 20;
          rippleAni();
          this.options.active = true;
        } else {
          posX = 0;
          this.ripple.backgroundColor = this.rippleOff;
          this.ripple.opacity = 0.2;
          rippleAni();
          this.options.active = false;
        }
      }
      if (this.thumb.states.current.name === "on") {
        return this.options.active = true;
      } else {
        return this.options.active = false;
      }
    });
  }

  Switch.define('active', {
    get: function() {
      return this.options.active;
    },
    set: function(value) {
      return this.options.active = value;
    }
  });

  return Switch;

})(Layer);

TextField = (function(superClass) {
  var INPUT_HIDE_PSUEDO_UI, INPUT_SELECTOR_NUMBER, INPUT_SELECTOR_SEARCH;

  extend(TextField, superClass);

  INPUT_HIDE_PSUEDO_UI = "{ -webkit-appearance: none; display: none; }";

  INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button";

  INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button";

  Events.Input = "InputField.OnInput";

  Events.Focus = "InputField.OnFocus";

  Events.Blur = "InputField.OnBlur";

  Events.Valid = "InputField.OnValid";

  Events.Invalid = "InputField.OnInvalid";

  Events.Match = "InputField.OnMatch";

  TextField.define("value", {
    get: function() {
      return this.input.value;
    },
    set: function(v) {
      if (!v) {
        return;
      }
      if (this.input) {
        return this.changeInputValue(v);
      }
    }
  });

  function TextField(options) {
    var base, base1, base10, base11, base12, base13, base14, base15, base2, base3, base4, base5, base6, base7, base8, base9, boxColor, inputStyle, key, ref, theme, themeColor, val;
    this.options = options != null ? options : {};
    this.isNumber = false;
    this.isSearch = false;
    this.isEmpty = true;
    this.isValid = null;
    this.originalTextColor = null;
    if ((base = this.options).name == null) {
      base.name = "Basic text field";
    }
    this.options.borderRadius = 0;
    if ((base1 = this.options).placeHolderFocus == null) {
      base1.placeHolderFocus = null;
    }
    this.options.placeHolderColor = "";
    if ((base2 = this.options).placeHolder == null) {
      base2.placeHolder = "";
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    theme = this.options.theme;
    if ((base4 = this.options).themeColor == null) {
      base4.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
      this.inputColor = input_dark;
      this.lineColor = "rgba(255,255,255,0.7)";
      this.lineHoverColor = "rgba(255,255,255,1)";
      this.labelFocusOpacity = 1;
      this.options.backgroundColor = "rgba(0,0,0,0.01)";
    } else {
      this.labelColor = Inputlabel_light;
      this.inputColor = input_light;
      this.lineColor = "rgba(0,0,0,0.42)";
      this.lineHoverColor = "rgba(0,0,0,0.87)";
      this.labelFocusOpacity = 0.87;
      this.options.backgroundColor = "rgba(255,255,255,0.01)";
    }
    boxColor = this.boxColor;
    this.options.color = this.inputColor;
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if (Utils.isMobile()) {
      if ((base5 = this.options).fontSize == null) {
        base5.fontSize = 16 * 2;
      }
      if ((base6 = this.options).lineHeight == null) {
        base6.lineHeight = 24 * 2;
      }
      if (this.options.lineHeight != null) {
        this.options.lineHeight = this.options.lineHeight + "px";
      }
      this.options.height = 70;
    } else {
      if ((base7 = this.options).fontSize == null) {
        base7.fontSize = 16;
      }
      if ((base8 = this.options).lineHeight == null) {
        base8.lineHeight = 24;
      }
      if (this.options.lineHeight != null) {
        this.options.lineHeight = this.options.lineHeight + "px";
      }
      this.options.height = 70;
    }
    if ((base9 = this.options).labelSize == null) {
      base9.labelSize = 16;
    }
    if ((base10 = this.options).fontFamily == null) {
      base10.fontFamily = "'Roboto', sans serif";
    }
    if ((base11 = this.options).fontWeight == null) {
      base11.fontWeight = 400;
    }
    if ((base12 = this.options).letterSpacing == null) {
      base12.letterSpacing = 0;
    }
    if ((base13 = this.options).helperText == null) {
      base13.helperText = "Helper text";
    }
    if ((base14 = this.options).labelText == null) {
      base14.labelText = "Label";
    }
    if ((base15 = this.options).helperTextVisble == null) {
      base15.helperTextVisble = false;
    }
    _.defaults(this.options, {
      width: 200
    });
    this.line = new Layer({
      width: this.options.width,
      height: 1,
      clip: true,
      name: "line",
      backgroundColor: this.lineColor
    });
    this.lineRipple = new Layer({
      backgroundColor: this.options.themeColor,
      width: 0,
      height: 2,
      name: "ripple"
    });
    this.label = new Label({
      text: this.options.labelText,
      fontSize: this.options.labelSize,
      color: this.labelColor,
      name: "label"
    });
    this.helperText = new Label({
      fontSize: 12,
      text: this.options.helperText,
      color: this.labelColor,
      name: "helper Text",
      visible: this.options.helperTextVisble
    });
    this.inputParent = new Layer({
      backgroundColor: this.options.backgroundColor,
      width: this.options.width,
      height: 28,
      name: "input parent"
    });
    TextField.__super__.constructor.call(this, this.options);
    this.helperText.parent = this.line.parent = this.inputParent.parent = this;
    this.helperText.y = 50;
    this.label.parent = this;
    this.label.y = 20;
    this.lineRipple.parent = this.line;
    this.lineRipple.x = Align.center;
    this.line.y = 44;
    this.inputParent.y = 10;
    this.onClick(this.clicked);
    this.onTap(this.clicked);
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    this.on(Events.Blur, function(value, layer) {
      this.line.height = 1;
      this.lineRipple.width = 0;
      this.lineRipple.x = Align.center;
      this.helperText.color = this.labelColor;
      this.line.backgroundColor = this.lineColor;
      this.options.color = this.inputColor;
      this.label.color = this.labelColor;
      if (this.isEmpty) {
        return this.label.animate({
          properties: {
            fontSize: 16,
            y: 20,
            color: this.labelColor
          },
          time: 0.2
        });
      }
    });
    switch (this.options.type) {
      case "search":
        this.isSearch = true;
        break;
      case "number":
        this.isNumber = true;
        break;
      case "numbers-only":
      case "number-only":
        this.isNumber = true;
        this.options.type = this.options.pattern != null ? "number" : "text";
        this.options.pattern = this.options.pattern != null ? this.options.pattern : PATTERN_NUMBER;
    }
    this.html += (function() {
      switch (false) {
        case !this.isNumber:
          return "<style type='text/css'>" + INPUT_SELECTOR_NUMBER + INPUT_HIDE_PSUEDO_UI + "</style>";
        case !this.isSearch:
          return "<style type='text/css'>" + INPUT_SELECTOR_SEARCH + INPUT_HIDE_PSUEDO_UI + "</style>";
        default:
          return "";
      }
    }).call(this);
    if (this.options.placeHolderColor != null) {
      this.html += "<style type='text/css'>::-webkit-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-moz-placeholder { color: " + this.options.placeHolderColor + "; } :-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } :placeholder-shown { color: " + this.options.placeHolderColor + "; }</style>";
    }
    this.input = document.createElement("input");
    this.input.type = this.options.type;
    if (this.options.value != null) {
      this.input.value = this.options.value;
    }
    if (this.options.placeHolder != null) {
      this.input.placeholder = this.options.placeHolder;
    }
    if (this.options.pattern != null) {
      this.input.pattern = this.options.pattern;
    }
    if (this.options.maxLength != null) {
      this.input.setAttribute("maxLength", this.options.maxLength);
    }
    this.input.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
    this.input.setAttribute("autocomplete", (this.options.autoComplete === true ? "on" : "off"));
    this.input.setAttribute("autocorrect", (this.options.autoCorrect === true ? "on" : "off"));
    this.inputParent._element.appendChild(this.input);
    this.isEmpty = !(((ref = this.options.value) != null ? ref.length : void 0) > 0);
    this.originalTextColor = this.options.color;
    inputStyle = {
      font: this.options.fontWeight + " " + this.options.fontSize + "px/" + this.options.lineHeight + " " + this.options.fontFamily,
      outline: "none",
      textIndent: this.options.indent + "px",
      backgroundColor: "transparent",
      height: "22px",
      width: "100%",
      pointerEvents: "none",
      margin: "0",
      padding: "0",
      "-webkit-appearance": "none"
    };
    for (key in inputStyle) {
      val = inputStyle[key];
      this.input.style[key] = val;
    }
    if (this.options.color != null) {
      this.input.style.color = this.options.color;
    }
    this.input.onfocus = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (_this.options.placeHolderFocus != null) {
          _this.input.placeholder = _this.options.placeHolderFocus;
        }
        document.body.scrollTop = 0;
        return _this.emit(Events.Focus, _this.input.value, _this);
      };
    })(this);
    this.input.onblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.input.value, _this);
      };
    })(this);
    this.input.oninput = (function(_this) {
      return function() {
        var ref1;
        _this.isEmpty = !(((ref1 = _this.input.value) != null ? ref1.length : void 0) > 0);
        return _this.emit(Events.Input, _this.input.value, _this);
      };
    })(this);
    this.on(Events.TouchEnd, function() {
      return this.input.focus();
    });
    this.on("change:color", function() {
      return this.changeInputTextColor();
    });
    this.on("keydown", function(event) {
      if (event.keyCode === 13) {
        this.line.height = 1;
        this.lineRipple.width = 0;
        this.lineRipple.x = Align.center;
        this.helperText.color = this.labelColor;
        this.line.backgroundColor = this.lineColor;
        this.options.color = this.inputColor;
        this.label.color = this.labelColor;
        if (this.isEmpty) {
          return this.label.animate({
            properties: {
              fontSize: 16,
              y: 20,
              color: this.labelColor
            },
            time: 0.2
          });
        }
      }
    });
  }

  TextField.prototype.clear = function() {
    this.input.value = "";
    this.isValid = null;
    return this.isEmpty = true;
  };

  TextField.prototype.changeInputTextColor = function() {
    return this.input.style.color = this.color.toHexString();
  };

  TextField.prototype.changeInputValue = function(v) {
    this.input.value = v;
    return this.input.oninput();
  };

  TextField.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: 0,
        color: this.options.themeColor,
        opacity: this.labelFocusOpacity
      },
      time: 0.2
    });
    this.line.animate({
      properties: {
        height: 2
      },
      time: 0.2
    });
    return this.lineRipple.animate({
      properties: {
        width: this.options.width,
        x: 0
      },
      time: 0.2
    });
  };

  TextField.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  return TextField;

})(Layer);

exports.TextField_Basic = (function(superClass) {
  extend(TextField_Basic, superClass);

  function TextField_Basic(options) {
    this.options = options != null ? options : {};
    TextField_Basic.__super__.constructor.call(this, this.options);
  }

  return TextField_Basic;

})(TextField);

exports.TextField_Validation = (function(superClass) {
  extend(TextField_Validation, superClass);

  function TextField_Validation(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9, eyeOff, eyeOn, input;
    this.options = options != null ? options : {};
    if ((this.options.pattern != null) || (this.options.match != null)) {
      this.shouldCheckValidity = true;
    }
    if ((base = this.options).name == null) {
      base.name = "password field";
    }
    if ((base1 = this.options).type == null) {
      base1.type = "password";
    }
    if ((base2 = this.options).pattern == null) {
      base2.pattern = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
    }
    if ((base3 = this.options).eyeVisible == null) {
      base3.eyeVisible = true;
    }
    this.options.color = this.inputColor;
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
    } else {
      this.labelColor = Inputlabel_light;
    }
    this.red = "#FF1744";
    if ((base4 = this.options).helperText == null) {
      base4.helperText = "helperText";
    }
    if ((base5 = this.options).labelText == null) {
      base5.labelText = "Password";
    }
    if ((base6 = this.options).helperTextVisible == null) {
      base6.helperTextVisible = false;
    }
    _.defaults(this.options, {
      backgroundColor: "",
      width: 200
    });
    if (this.options.pattern === "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$") {
      if ((base7 = this.options).helperText == null) {
        base7.helperText = "UpperCase, LowerCase and Number";
      }
    } else if (this.options.pattern === "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$") {
      if ((base8 = this.options).helperText == null) {
        base8.helperText = "Must contain 8 characters, 1 uppercase, 1 lowercase, and 1 number/special character";
      }
    } else {
      if ((base9 = this.options).helperText == null) {
        base9.helperText = "helperText";
      }
    }
    this.errorText = new Label({
      fontSize: 12,
      text: this.options.helperText,
      color: this.red,
      name: "helper Text",
      visible: false
    });
    this.eyeContianer = new Layer({
      width: 22,
      height: 22,
      backgroundColor: "",
      visible: this.options.eyeVisible,
      name: "eyeContianer"
    });
    this.eyeOn = new Layer({
      width: 22,
      height: 16,
      backgroundColor: "",
      visible: false,
      name: "eyeOne",
      html: '<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M8.91205938,5.8907 C9.50605938,5.2977 10.2090594,4.9997 11.0210594,4.9997 C11.8340594,4.9997 12.5370594,5.2977 13.1310594,5.8907 C13.7240594,6.4847 14.0210594,7.1877 14.0210594,7.9997 C14.0210594,8.8127 13.7240594,9.5157 13.1310594,10.1097 C12.5370594,10.7027 11.8340594,10.9997 11.0210594,10.9997 C10.2090594,10.9997 9.50605938,10.7027 8.91205938,10.1097 C8.31805938,9.5157 8.02105938,8.8127 8.02105938,7.9997 C8.02105938,7.1877 8.31805938,6.4847 8.91205938,5.8907 M7.48205938,11.5387 C8.46705938,12.5237 9.64605938,13.0157 11.0210594,13.0157 C12.3960594,13.0157 13.5760594,12.5237 14.5600594,11.5387 C15.5450594,10.5547 16.0370594,9.3757 16.0370594,7.9997 C16.0370594,6.6247 15.5450594,5.4457 14.5600594,4.4607 C13.5760594,3.4767 12.3960594,2.9847 11.0210594,2.9847 C9.64605938,2.9847 8.46705938,3.4767 7.48205938,4.4607 C6.49805938,5.4457 6.00605938,6.6247 6.00605938,7.9997 C6.00605938,9.3757 6.49805938,10.5547 7.48205938,11.5387 M4.31805938,2.5627 C6.31805938,1.1877 8.55305938,0.4997 11.0210594,0.4997 C13.4900594,0.4997 15.7240594,1.1877 17.7250594,2.5627 C19.7250594,3.9377 21.1620594,5.7497 22.0370594,7.9997 C21.1620594,10.2497 19.7250594,12.0627 17.7250594,13.4377 C15.7240594,14.8127 13.4900594,15.4997 11.0210594,15.4997 C8.55305938,15.4997 6.31805938,14.8127 4.31805938,13.4377 C2.31805938,12.0627 0.881059375,10.2497 0.006059375,7.9997 C0.881059375,5.7497 2.31805938,3.9377 4.31805938,2.5627" id="Fill-1" fill="' + this.labelColor + '"></path></g></svg>'
    });
    this.eyeOff = new Layer({
      width: 23,
      height: 19,
      backgroundColor: "",
      visible: true,
      name: "eyeOff",
      html: '<svg width="23px" height="19px" viewBox="0 0 23 19" version="1.1" ><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11.0331594,6 L11.1741594,6 C11.9861594,6 12.6891594,6.297 13.2831594,6.891 C13.8771594,7.484 14.1741594,8.188 14.1741594,9 L14.1741594,9.188 L11.0331594,6 Z M11.1741594,3.984 C10.5491594,3.984 9.93915937,4.109 9.34615937,4.359 L7.18915937,2.203 C8.40815937,1.734 9.73615937,1.5 11.1741594,1.5 C13.6421594,1.5 15.8691594,2.187 17.8531594,3.562 C19.8381594,4.938 21.2671594,6.75 22.1421594,9 C21.3921594,10.844 20.2521594,12.422 18.7201594,13.734 L15.8141594,10.828 C16.0641594,10.235 16.1891594,9.625 16.1891594,9 C16.1891594,7.625 15.6971594,6.445 14.7131594,5.461 C13.7281594,4.477 12.5491594,3.984 11.1741594,3.984 L11.1741594,3.984 Z M6.72115937,6.797 C6.34615937,7.547 6.15815937,8.281 6.15815937,9 C6.15815937,10.375 6.65015937,11.555 7.63515937,12.539 C8.61915937,13.523 9.79915937,14.016 11.1741594,14.016 C11.8921594,14.016 12.6271594,13.828 13.3771594,13.453 L11.8301594,11.906 C11.5801594,11.969 11.3611594,12 11.1741594,12 C10.3611594,12 9.65815937,11.703 9.06415937,11.109 C8.47015937,10.516 8.17415937,9.813 8.17415937,9 C8.17415937,8.813 8.20515937,8.594 8.26715937,8.344 L6.72115937,6.797 Z M1.18915937,1.266 L2.45515937,0 L20.1741594,17.719 L18.9081594,18.984 C18.7521594,18.828 18.2601594,18.344 17.4311594,17.531 C16.6031594,16.719 15.9701594,16.094 15.5331594,15.656 C14.1891594,16.219 12.7361594,16.5 11.1741594,16.5 C8.70515937,16.5 6.47115937,15.813 4.47115937,14.438 C2.47015937,13.062 1.03315937,11.25 0.158159375,9 C0.939159375,7.062 2.18915937,5.407 3.90815937,4.031 C3.53315937,3.656 3.01015937,3.125 2.33815937,2.437 C1.66615937,1.75 1.28315937,1.359 1.18915937,1.266 L1.18915937,1.266 Z" id="Fill-3" fill="' + this.labelColor + '"></path></g></svg>'
    });
    TextField_Validation.__super__.constructor.call(this, this.options);
    this.eyeContianer.parent = this;
    this.eyeOn.parent = this.eyeOff.parent = this.eyeContianer;
    this.eyeContianer.x = this.width - 22;
    this.eyeContianer.y = 13;
    this.eyeOn.y = 0;
    this.errorText.parent = this;
    this.errorText.y = this.helperText.y;
    this.onClick(this.clicked);
    this.onTap(this.clicked);
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    eyeOff = this.eyeOff;
    eyeOn = this.eyeOn;
    this.eyeContianer.onClick(function() {
      if (eyeOff.visible === true) {
        eyeOff.visible = false;
        eyeOn.visible = true;
        return input.type = "text";
      } else {
        input.type = "password";
        eyeOff.visible = true;
        return eyeOn.visible = false;
      }
    });
    this.on(Events.Blur, function(value, layer) {
      var errorWobble1, errorWobble2, errorWobble5;
      this.label.color = this.labelColor;
      this.line.height = 1;
      this.lineRipple.width = 0;
      this.lineRipple.x = Align.center;
      if (this.isEmpty) {
        this.label.animate({
          properties: {
            fontSize: this.options.labelSize,
            y: 20,
            color: this.labelColor
          },
          time: 0.2
        });
        if (this.helperTextVisible === true) {
          this.helperText.visible = true;
        }
        return this.errorText.visible = false;
      } else if (this.isValid) {
        this.line.backgroundColor = this.lineColor;
        this.label.color = this.labelColor;
        this.helperText.color = this.labelColor;
        if (this.helperTextVisible === true) {
          this.helperText.visible = true;
        }
        return this.errorText.visible = false;
      } else {
        this.line.backgroundColor = this.red;
        this.label.color = this.red;
        this.errorText.visible = true;
        errorWobble1 = new Animation({
          layer: this.label,
          properties: {
            x: 5
          },
          time: 0.05
        });
        errorWobble2 = new Animation({
          layer: this.label,
          properties: {
            x: -5
          },
          time: 0.05
        });
        errorWobble5 = new Animation({
          layer: this.label,
          properties: {
            x: 0
          },
          time: 0.025
        });
        errorWobble1.start();
        errorWobble1.onAnimationEnd(function() {
          return errorWobble2.start();
        });
        errorWobble2.onAnimationEnd(function() {
          return errorWobble5.start();
        });
        return this.helperText.visible = false;
      }
    });
    this.input.oninput = (function(_this) {
      return function() {
        var ref;
        _this.isEmpty = !(((ref = _this.input.value) != null ? ref.length : void 0) > 0);
        _this.emit(Events.Input, _this.input.value, _this);
        return _this.checkValidity();
      };
    })(this);
    input = this.input;
  }

  TextField_Validation.prototype.checkValidity = function() {
    var ref, validity;
    if (!this.shouldCheckValidity) {
      return;
    }
    if (this.options.pattern != null) {
      validity = this.input.checkValidity();
      this.isEmpty = !(((ref = this.input.value) != null ? ref.length : void 0) > 0);
      if (this.isValid !== validity || this.isEmpty) {
        if (this.isEmpty || !validity) {
          this.isValid = false;
          this.emit(Events.Invalid, this.input.value, this);
        } else {
          this.isValid = true;
          this.emit(Events.Valid, this.input.value, this);
        }
      }
    }
    if (this.checkMatch()) {
      this.isValid = true;
      return this.emit(Events.Match, this.input.value, this);
    }
  };

  TextField_Validation.prototype.checkMatch = function() {
    var j, len, match, ref;
    if (this.options.match == null) {
      return false;
    }
    if (Array.isArray(this.options.match)) {
      ref = this.options.match;
      for (j = 0, len = ref.length; j < len; j++) {
        match = ref[j];
        if (this.input.value.indexOf(match) > -1) {
          return true;
        }
      }
    } else {
      if (this.input.value.indexOf(this.options.match) > -1) {
        return true;
      }
    }
    return false;
  };

  TextField_Validation.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: -6,
        color: this.options.themeColor
      },
      time: 0.2
    });
    this.line.animate({
      properties: {
        height: 2
      },
      time: 0.2
    });
    this.lineRipple.animate({
      properties: {
        width: this.options.width,
        x: 0
      },
      time: 0.2
    });
    this.line.backgroundColor = this.lineColor;
    this.label.color = this.themeColor;
    this.helperText.color = this.labelColor;
    this.errorText.visible = false;
    if (this.options.helperTextVisible === true) {
      return this.helperText.visible = true;
    }
  };

  TextField_Validation.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField_Validation.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  TextField_Validation.prototype.eyeClick = function() {
    return this.eye.stateCycle("visible", "visibleOff");
  };

  return TextField_Validation;

})(TextField);

exports.TextArea = (function(superClass) {
  var INPUT_HIDE_PSUEDO_UI, INPUT_SELECTOR_NUMBER, INPUT_SELECTOR_SEARCH, PATTERN_NUMBER, _reflowSiblings, _resizeParent;

  extend(TextArea, superClass);

  PATTERN_NUMBER = "[0-9]*";

  INPUT_HIDE_PSUEDO_UI = "{ -webkit-appearance: none; display: none; }";

  INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button";

  INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button";

  Events.Input = "InputField.OnInput";

  Events.Focus = "InputField.OnFocus";

  Events.Blur = "InputField.OnBlur";

  Events.Valid = "InputField.OnValid";

  Events.Invalid = "InputField.OnInvalid";

  Events.Match = "InputField.OnMatch";

  TextArea.define("value", {
    get: function() {
      return this.textarea.value;
    },
    set: function(v) {
      if (!v) {
        return;
      }
      if (this.input) {
        return this.changeInputValue(v);
      }
    }
  });

  function TextArea(options) {
    var base, base1, base10, base11, base12, base13, base14, base15, base16, base17, base18, base19, base2, base20, base21, base22, base3, base4, base5, base6, base7, base8, base9, key, ref, ref1, theme, themeColor, val;
    this.options = options != null ? options : {};
    this._update = bind(this._update, this);
    this.isNumber = false;
    this.isSearch = false;
    this.isEmpty = true;
    this.isValid = null;
    this.originalTextColor = null;
    if ((this.options.pattern != null) || (this.options.match != null)) {
      this.shouldCheckValidity = true;
    }
    if ((base = this.options).name == null) {
      base.name = "Text area";
    }
    this.options.backgroundColor = "rgba(255,255,255,0.01)";
    if ((base1 = this.options).height == null) {
      base1.height = 180;
    }
    if ((base2 = this.options).type == null) {
      base2.type = "text";
    }
    if ((base3 = this.options).fontWeight == null) {
      base3.fontWeight = 400;
    }
    if ((base4 = this.options).fontFamily == null) {
      base4.fontFamily = "'Roboto', sans serif";
    }
    if ((base5 = this.options).indent == null) {
      base5.indent = 0;
    }
    if ((base6 = this.options).placeHolderFocus == null) {
      base6.placeHolderFocus = null;
    }
    if ((base7 = this.options).placeHolderColor == null) {
      base7.placeHolderColor = null;
    }
    if ((base8 = this.options).width == null) {
      base8.width = 300;
    }
    if ((base9 = this.options).themeColor == null) {
      base9.themeColor = "#009688";
    }
    if ((base10 = this.options).labelText == null) {
      base10.labelText = "Type something...";
    }
    if ((base11 = this.options).theme == null) {
      base11.theme = "light";
    }
    theme = this.options.theme;
    if ((base12 = this.options).themeColor == null) {
      base12.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    this.red = "#FF1744";
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
      this.inputColor = input_dark;
      this.lineColor = line_dark;
      this.lineHoverColor = "rgba(255,255,255,1)";
      this.labelFocusOpacity = 1;
      this.lineColor = line_dark;
      this.options.color = "#fff";
    } else {
      this.labelColor = Inputlabel_light;
      this.inputColor = input_light;
      this.lineColor = line_light;
      this.lineHoverColor = "rgba(0,0,0,0.87)";
      this.labelFocusOpacity = 0.87;
      this.lineColor = line_light;
      this.options.color = "rgba(0,0,0,0.87)";
    }
    this.options.color = this.inputColor;
    if (Utils.isMobile()) {
      if ((base13 = this.options).fontSize == null) {
        base13.fontSize = 16 * 2;
      }
      if ((base14 = this.options).lineHeight == null) {
        base14.lineHeight = 24 * 2;
      }
      this.options.style = {
        "padding": "56px 32px 32px 32px"
      };
    } else {
      if ((base15 = this.options).fontSize == null) {
        base15.fontSize = 16;
      }
      if ((base16 = this.options).lineHeight == null) {
        base16.lineHeight = 24;
      }
      this.options.style = {
        "padding": "28px 16px 16px 16px"
      };
    }
    if ((base17 = this.options).labelSize == null) {
      base17.labelSize = 16;
    }
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base18 = this.options).fontFamily == null) {
      base18.fontFamily = "'Roboto', sans serif";
    }
    if ((base19 = this.options).fontWeight == null) {
      base19.fontWeight = 400;
    }
    if ((base20 = this.options).letterSpacing == null) {
      base20.letterSpacing = 0;
    }
    if ((base21 = this.options).limitOn == null) {
      base21.limitOn = true;
    }
    if (this.options.limitOn === false) {
      this.options.characterLimit = 1000000000000;
    } else {
      if ((base22 = this.options).characterLimit == null) {
        base22.characterLimit = 200;
      }
    }
    this.label = new Label({
      text: this.options.labelText,
      fontSize: this.options.labelSize,
      color: this.labelColor,
      name: "label",
      name: "label"
    });
    this.limit = new Layer({
      html: "0 / " + this.options.characterLimit,
      backgroundColor: "",
      width: 100,
      height: 12,
      visible: this.options.limitOn,
      name: "limit"
    });
    this.limit.style = {
      color: this.labelColor,
      fontFamily: this.options.fontFamily,
      fontSize: "12px",
      lineHeight: "12px",
      textAlign: "right",
      letterSpacing: this.options.letterSpacing
    };
    this.errorText = new Label({
      fontSize: 12,
      color: this.red,
      name: "error text",
      visible: false,
      text: "Exeeds text limit."
    });
    this.border = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      borderWidth: 1,
      borderColor: this.lineColor,
      borderRadius: 2,
      name: "border"
    });
    TextArea.__super__.constructor.call(this, this.options);
    this.label.parent = this.border.parent = this;
    this.limit.parent = this;
    this.errorText.parent = this;
    this.label.y = 20;
    this.label.x = 16;
    this.limit.x = this.width - 100;
    this.limit.y = this.height + 8;
    this.errorText.y = this.height + 8;
    this.onClick(this.clicked);
    this.on(Events.Blur, function(value, layer) {
      return this.blurred();
    });
    this.on(Events.Focus, function(value, layer) {
      return this.focus();
    });
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    this.on(Events.Input, function(value, layer) {
      this.limit.html = this.value.length + " / " + this.options.characterLimit;
      if (this.value.length > this.options.characterLimit) {
        this.errorText.visible = true;
        this.limit.color = this.red;
        this.border.borderColor = this.red;
        return this.label.color = this.red;
      } else {
        this.errorText.visible = false;
        this.limit.color = this.labelColor;
        this.border.borderColor = this.options.themeColor;
        return this.label.color = this.options.themeColor;
      }
    });
    switch (this.options.type) {
      case "search":
        this.isSearch = true;
        break;
      case "number":
        this.isNumber = true;
        break;
      case "numbers-only":
      case "number-only":
        this.isNumber = true;
        this.options.type = this.options.pattern != null ? "number" : "text";
        this.options.pattern = this.options.pattern != null ? this.options.pattern : PATTERN_NUMBER;
    }
    this.html += (function() {
      switch (false) {
        case !this.isNumber:
          return "<style type='text/css'>" + INPUT_SELECTOR_NUMBER + INPUT_HIDE_PSUEDO_UI + "</style>";
        case !this.isSearch:
          return "<style type='text/css'>" + INPUT_SELECTOR_SEARCH + INPUT_HIDE_PSUEDO_UI + "</style>";
        default:
          return "";
      }
    }).call(this);
    if (this.options.placeHolderColor != null) {
      this.html += "<style type='text/css'>::-webkit-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-moz-placeholder { color: " + this.options.placeHolderColor + "; } :-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } :placeholder-shown { color: " + this.options.placeHolderColor + "; }</style>";
    }
    this.textarea = document.createElement("textarea");
    if (this.options.value != null) {
      this.textarea.value = this.options.value;
    }
    if (this.options.placeHolder != null) {
      this.input.placeholder = this.options.placeHolder;
    }
    if (this.options.maxLength != null) {
      this.textarea.setAttribute("maxLength", this.options.maxLength);
    }
    this.textarea.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
    this.textarea.setAttribute("autocomplete", (this.options.autoComplete === true ? "on" : "off"));
    this.textarea.setAttribute("autocorrect", (this.options.autoCorrect === true ? "on" : "off"));
    this._element.appendChild(this.textarea);
    this.isEmpty = !(((ref = this.options.value) != null ? ref.length : void 0) > 0);
    this.originalTextColor = this.options.color;
    this._textAreaStyle = {
      fontSize: this.options.fontSize + "px",
      lineHeight: this.options.lineHeight + "px",
      fontWeight: "" + this.options.fontWeight,
      fontFamily: "" + this.options.fontFamily,
      outline: "none",
      textIndent: this.options.indent + "px",
      backgroundColor: "transparent",
      height: "100%",
      width: "100%",
      pointerEvents: "none",
      margin: "0",
      overflow: "hidden",
      resize: "none",
      "-webkit-appearance": "none"
    };
    ref1 = this._textAreaStyle;
    for (key in ref1) {
      val = ref1[key];
      this.textarea.style[key] = val;
    }
    if (this.options.color != null) {
      this.textarea.style.color = this.options.color;
    }
    this.textarea.onfocus = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (_this.options.placeHolderFocus != null) {
          _this.input.placeholder = _this.options.placeHolderFocus;
        }
        document.body.scrollTop = 0;
        return _this.emit(Events.Focus, _this.textarea.value, _this);
      };
    })(this);
    this.textarea.onblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.textarea.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.textarea.value, _this);
      };
    })(this);
    this._textAreaStyleonblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.input.value, _this);
      };
    })(this);
    this.textarea.oninput = (function(_this) {
      return function() {
        var ref2;
        _this.isEmpty = !(((ref2 = _this.textarea.value) != null ? ref2.length : void 0) > 0);
        _this.emit(Events.Input, _this.textarea.value, _this);
        return _this.checkValidity();
      };
    })(this);
    this.on(Events.TouchEnd, function() {
      return this.textarea.focus();
    });
    this.on("change:color", function() {
      return this.changeInputTextColor();
    });
    this.textarea.onkeydown = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
    this.textarea.onkeyup = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
    this.textarea.change = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
  }

  _resizeParent = function(layer, parentMinHeight, bottomPadding) {
    var allChildrenMaxYs, j, layerParent, len, max, ref, tallestChildMaxY;
    layerParent = layer.parent;
    allChildrenMaxYs = [];
    ref = layerParent.children;
    for (j = 0, len = ref.length; j < len; j++) {
      max = ref[j];
      allChildrenMaxYs.push(max.maxY);
    }
    tallestChildMaxY = Math.max.apply(null, allChildrenMaxYs);
    return layerParent.height = Math.max(tallestChildMaxY + bottomPadding, parentMinHeight);
  };

  _reflowSiblings = function(layer, layerMaxY) {
    var a, j, layerList, ref, ref1, results, yDiff;
    layerList = layer.parent.children;
    results = [];
    for (a = j = ref = layerList.indexOf(layer) + 1, ref1 = layerList.length; ref <= ref1 ? j < ref1 : j > ref1; a = ref <= ref1 ? ++j : --j) {
      yDiff = layerList[a].y - layerMaxY;
      results.push(layerList[a].y = layer.maxY + yDiff);
    }
    return results;
  };

  TextArea.prototype._update = function() {
    return setTimeout((function(_this) {
      return function() {
        var _trueValue, calcHeight, layerMaxY;
        layerMaxY = _this.maxY;
        _trueValue = _this.textarea.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n/g, "<br/>&nbsp;");
        if (_trueValue.trim() === "") {
          _trueValue = "a";
        }
        calcHeight = Utils.round(Utils.textSize(_trueValue, _this._textAreaStyle, {
          width: _this.width
        }).height, 0);
        _this.height = Math.max(calcHeight, _this.options.minHeight);
        if (_this.options.reflowSiblings === true) {
          _reflowSiblings(_this, layerMaxY);
        }
        if (_this.options.resizeParent === true) {
          return _resizeParent(_this, _this.parentOgHeight, _this.options.parentBottomPadding);
        }
      };
    })(this));
  };

  TextArea.prototype.checkValidity = function() {
    if (!this.shouldCheckValidity) {

    }
  };

  TextArea.prototype.clear = function() {
    this.input.value = "";
    this.isValid = null;
    return this.isEmpty = true;
  };

  TextArea.prototype.changeInputTextColor = function() {
    return this.input.style.color = this.color.toHexString();
  };

  TextArea.prototype.changeInputValue = function(v) {
    this.input.value = v;
    return this.input.oninput();
  };

  TextArea.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: 8,
        color: this.options.themeColor,
        x: 16
      },
      time: 0.2
    });
    this.border.borderColor = this.options.themeColor;
    return this.border.borderWidth = 2;
  };

  TextArea.prototype.error = function() {
    return this.borderColor = this.red;
  };

  TextArea.prototype.focus = function() {
    this.label.fontSize = 12;
    this.borderColor = this.options.themeColor;
    this.border.borderWidth = 2;
    return this.label.color = this.labelColor;
  };

  TextArea.prototype.hoverOn = function() {
    this.border.borderWidth = 2;
    return this.options.borderColor = this.lineHoverColor;
  };

  TextArea.prototype.hoverOff = function() {
    this.border.borderWidth = 1;
    return this.borderColor = this.lineColor;
  };

  TextArea.prototype.blurred = function(value, layer) {
    this.label.color = this.labelColor;
    this.border.borderColor = this.lineColor;
    if (this.isEmpty) {
      this.label.animate({
        properties: {
          fontSize: 16,
          y: 20,
          x: 16,
          color: this.labelColor
        },
        time: 0.2
      });
      this.border.borderColor = this.labelColor;
    }
    if (this.value.length > this.options.characterLimit) {
      this.errorText.visible = true;
      this.limit.color = this.red;
      this.border.borderColor = this.red;
      this.label.color = this.red;
    }
    return this.border.borderWidth = 1;
  };

  return TextArea;

})(Layer);

exports.TextField_Dropdown = (function(superClass) {
  extend(TextField_Dropdown, superClass);

  function TextField_Dropdown(options) {
    var activeSelection, as, base, base1, base2, base3, base4, base5, base6, choice, choice_label, container, container_ScrollArea, i, item, j, k, label, labelColor, len, placeHolder, ref, ref1, shadow, slider, themeColor;
    this.options = options != null ? options : {};
    if (this.options.theme === "dark") {
      if ((base = this.options).screenColor == null) {
        base.screenColor = "#000";
      }
    }
    if ((base1 = this.options).choices == null) {
      base1.choices = ["apple", "banana", "blueberry", "cantaloupe", "cherry", "coconut", "fig", "grape", "grapefruit", "guava", "kiwifruit", "lemon", "lime", "lychee", "mango", "melon", "orange", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "pomegranate", "raspberry", "strawberry", "watermelon"];
    }
    if ((base2 = this.options).labelText == null) {
      base2.labelText = "Select a fruit";
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).visibleItems == null) {
      base4.visibleItems = 4;
    }
    if ((base5 = this.options).activeSelection == null) {
      base5.activeSelection = null;
    }
    if ((base6 = this.options).themeColor == null) {
      base6.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.lineColor = line_dark;
      this.lineHoverColor = line_dark_hover;
      this.inputColor = input_dark;
    } else {
      this.labelColor = label_light;
      this.lineColor = line_light;
      this.lineHoverColor = line_light_hover;
      this.inputColor = input_light;
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: 50,
      color: "#E91E63",
      width: 150,
      name: "DropDown"
    });
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label",
      fontSize: 12,
      visible: false
    });
    this.placeHolder = new Label({
      text: this.options.labelText,
      color: this.inputColor,
      y: 20,
      name: "label"
    });
    this.arrow = new Layer({
      html: '<svg version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="' + this.lineColor + '" points="0.660133877 0 9.17482706 0 4.91748047 5"></polygon></g></svg>',
      size: 24,
      backgroundColor: "",
      color: "#555",
      width: 10,
      height: 5,
      name: "Arrow"
    });
    this.line = new Layer({
      height: 1,
      width: this.options.width,
      y: 49,
      backgroundColor: this.lineColor,
      name: "line"
    });
    this.container = new Layer({
      width: this.options.width,
      borderRadius: 2,
      backgroundColor: "#fff",
      height: this.options.visibleItems * 50 + 20,
      clip: true,
      name: "container"
    });
    TextField_Dropdown.__super__.constructor.call(this, this.options);
    this.container.states = {
      open: {
        height: this.options.visibleItems * 50 + 20,
        y: 0
      },
      closed: {
        height: 0,
        y: 50
      }
    };
    this.container.states.switchInstant("closed");
    this.container.animationOptions = {
      time: 0.5
    };
    this.label.parent = this;
    this.placeHolder.parent = this;
    this.container.parent = this.arrow.parent = this.line.parent = this;
    this.arrow.y = Align.center(2);
    this.arrow.x = this.options.width - 24;
    this.container.y = 50;
    placeHolder = this.placeHolder;
    label = this.label;
    container = this.container;
    activeSelection = this.activeSelection;
    labelColor = this.labelColor;
    shadow = new Shadow({
      parent: this,
      height: this.options.visibleItems * 50 + 20,
      width: this.width,
      borderRadius: this.container.borderRadius,
      y: 0,
      name: "shadows"
    });
    ref = shadow.array;
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      item.states.open = {
        y: 0,
        height: this.options.visibleItems * 50 + 20
      };
      item.states.closed = {
        height: 0,
        y: 50
      };
      item.animationOptions = {
        time: 0.5
      };
      item.states.switchInstant("_2dp");
      item.states.switchInstant("closed");
    }
    container_ScrollArea = new ScrollComponent({
      parent: this.container,
      width: this.container.width,
      backgroundColor: "",
      height: this.options.visibleItems * 50 + 20,
      name: "scrollArea"
    });
    container_ScrollArea.content.draggable.overdrag = false;
    container_ScrollArea.content.draggable.bounce = false;
    container_ScrollArea.mouseWheelEnabled = true;
    slider = new SliderComponent({
      width: 5,
      height: container_ScrollArea.height - 30,
      y: 15,
      borderRadius: 0,
      parent: container_ScrollArea,
      x: container_ScrollArea.width - 5,
      backgroundColor: "",
      min: 0,
      max: (this.options.choices.length * 50) - 200,
      value: -15,
      name: slider
    });
    slider.fill.backgroundColor = "";
    slider.knob.backgroundColor = "BDBDBD";
    slider.knob.shadowY = 0;
    slider.knob.shadowSpread = 0;
    slider.knob.shadowBlur = 0;
    slider.knob.borderRadius = 1;
    slider.knob.width = 5;
    slider.knob.height = 30;
    slider.on("change:value", function() {
      return container_ScrollArea.content.y = -this.value;
    });
    container_ScrollArea.onMove(function() {
      return slider.value = container_ScrollArea.scrollY;
    });
    as = null;
    for (i = k = 0, ref1 = this.options.choices.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      choice = new Layer({
        parent: container_ScrollArea.content,
        width: container_ScrollArea.width,
        height: 50,
        y: 50 * i + 10,
        backgroundColor: "",
        name: "choice"
      });
      choice_label = new Label({
        text: this.options.choices[i],
        parent: choice,
        x: 20,
        y: Align.center,
        name: this.options.choices[i] + "label",
        color: label_light
      });
      choice.onMouseOver(function() {
        return this.backgroundColor = "#eee";
      });
      choice.onMouseOut(function() {
        return this.backgroundColor = "#fff";
      });
      choice.onClick(function() {
        var len1, m, ref2, results;
        as = this.children[0].text;
        placeHolder.text = this.children[0].text;
        placeHolder.color = labelColor;
        container.states["switch"]("closed");
        label.visible = true;
        ref2 = shadow.array;
        results = [];
        for (m = 0, len1 = ref2.length; m < len1; m++) {
          item = ref2[m];
          results.push(item.states["switch"]("closed"));
        }
        return results;
      });
    }
    container = this.container;
    this.onClick(function() {
      var len1, m, ref2;
      ref2 = shadow.array;
      for (m = 0, len1 = ref2.length; m < len1; m++) {
        item = ref2[m];
        item.states["switch"]("open");
      }
      container.states["switch"]("open");
      return this.activeSelection = as;
    });
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
  }

  TextField_Dropdown.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField_Dropdown.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  TextField_Dropdown.define('color', {
    get: function() {
      return this.options.color;
    },
    set: function(value) {
      return this.options.color = value;
    }
  });

  TextField_Dropdown.define('choices', {
    get: function() {
      return this.options.choices;
    },
    set: function(value) {
      return this.options.choices = value;
    }
  });

  TextField_Dropdown.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  return TextField_Dropdown;

})(Layer);

exports.AppBar = (function(superClass) {
  extend(AppBar, superClass);

  function AppBar(options) {
    var at, base, base1, base10, base11, base12, base13, base2, base3, base4, base5, base6, base7, base8, base9, isMob, menuIcon, setTime, shadow, statusBar, statusBarTime, statusIcons;
    this.options = options != null ? options : {};
    if ((base = this.options).width == null) {
      base.width = Screen.width;
    }
    if ((base1 = this.options).labelText == null) {
      base1.labelText = "Form";
    }
    if ((base2 = this.options).fontSize == null) {
      base2.fontSize = 22;
    }
    if ((base3 = this.options).fontWeight == null) {
      base3.fontWeight = 500;
    }
    if ((base4 = this.options).fontFamily == null) {
      base4.fontFamily = "'Roboto', sans serif";
    }
    this.options.labelColor = "#fff";
    if ((base5 = this.options).themeColor == null) {
      base5.themeColor = "#009688";
    }
    if ((base6 = this.options).backgroundColor == null) {
      base6.backgroundColor = this.options.themeColor;
    }
    if ((base7 = this.options).mobile == null) {
      base7.mobile = false;
    }
    if ((base8 = this.options).menuIconVisble == null) {
      base8.menuIconVisble = true;
    }
    if ((base9 = this.options).name == null) {
      base9.name = "app bar";
    }
    if ((base10 = this.options).statusIconsY == null) {
      base10.statusIconsY = Align.center(-8);
    }
    if ((base11 = this.options).menuIconY == null) {
      base11.menuIconY = Align.center();
    }
    this.appCont = new Layer({
      height: 56,
      width: this.options.width,
      backgroundColor: "",
      name: "app bar contianer"
    });
    if (Utils.isMobile() || this.options.mobile === true) {
      this.statusBar = new Layer({
        width: this.options.width,
        height: 24,
        backgroundColor: "rgba(0,0,0,0.30)",
        name: "status bar"
      });
      if ((base12 = this.options).height == null) {
        base12.height = 80;
      }
      this.appCont.y = 24;
    } else {
      if ((base13 = this.options).height == null) {
        base13.height = 56;
      }
    }
    this.menuIcon = new Layer({
      size: 48,
      backgroundColor: "",
      visible: this.options.menuIconVisble,
      name: "menu icon"
    });
    this.title = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      fontFamily: this.options.fontFamily,
      color: this.options.labelColor,
      fontWeight: this.options.fontWeight,
      name: "title"
    });
    AppBar.__super__.constructor.call(this, this.options);
    shadow = new Shadow({
      width: this.width,
      height: this.height,
      name: "shadows"
    });
    shadow.parent = this;
    this.title.parent = this;
    this.title.y = Align.center();
    this.title.x = 16;
    this.appCont.parent = this;
    this.menuIcon.parent = this.title.parent = this.appCont;
    this.menuIcon.x = 16;
    this.menuIcon.y = this.options.menuIconY;
    if (this.menuIcon.visible === true) {
      this.title.x = 48 + 16 + 16;
    }
    menuIcon = new Layer({
      html: '<svg width="18px" height="12px" viewBox="0 0 18 12"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M0,2 L18,2 L18,0 L0,0 L0,2 Z M0,6.97 L18,6.97 L18,5 L0,5 L0,6.97 Z M0,12 L18,12 L18,10 L0,10 L0,12 Z" fill="#fff"></path></g></svg>',
      width: 18,
      height: 12,
      parent: this.menuIcon,
      x: Align.center(),
      y: Align.center(),
      backgroundColor: "",
      name: "icon"
    });
    if (Utils.isMobile() || this.options.mobile === true) {
      this.statusBar.parent = this;
      this.title.y = Align.center(10);
      statusBarTime = new TextLayer({
        fontSize: 13,
        parent: this.statusBar,
        y: Align.center,
        x: this.width - 55,
        color: "#fff",
        fontFamily: "'Roboto', sans serif",
        textAlign: "right",
        name: "status bar time"
      });
      setTime = function() {
        var date, hour, minute, zone;
        date = new Date;
        minute = date.getMinutes();
        hour = date.getHours();
        zone = "AM";
        if (hour < 10) {
          hour = '0' + hour;
        }
        if (hour > 12) {
          hour = hour - 12;
          zone = "PM";
        } else {
          zone = "AM";
        }
        if (minute < 10) {
          minute = '0' + minute;
        }
        statusBarTime.text = hour + ":" + minute + " " + zone;
        return Utils.delay(30, function() {
          return setTime();
        });
      };
      setTime();
      statusIcons = new Layer({
        name: "status icons",
        parent: this.statusBar,
        html: '<svg width="53px" height="16px"><g><path d="M34.6093216,0.60903749 L34.6093216,15.1074592 L20.1108999,15.1074592 L34.6093216,0.60903749 Z M15.294614,7.04747475 L15.3280105,7.08087121 L9.16854076,14.7039773 L3.00907106,7.08087121 L3.04246752,7.04747475 L0.729399342,4.18844697 C3.47371752,2.26016414 6.28773268,1.29602273 9.16854076,1.29602273 C12.0508009,1.29602273 14.863364,2.26016414 17.6091342,4.18844697 L15.294614,7.04747475 Z M51.2229421,2.14400069 C51.574133,2.14400069 51.8764952,2.26795043 52.1243947,2.51772794 C52.3741722,2.76750545 52.5,3.06798967 52.5,3.42105863 L52.5,13.8142529 C52.5,14.1654438 52.3741722,14.4602939 52.1243947,14.6950472 C51.8764952,14.9298005 51.574133,15.0462382 51.2229421,15.0462382 L44.3568776,15.0462382 C44.0038086,15.0462382 43.7033244,14.9298005 43.4535469,14.6950472 C43.2037694,14.4602939 43.0798196,14.1654438 43.0798196,13.8142529 L43.0798196,3.42105863 C43.0798196,3.06798967 43.2037694,2.76750545 43.4535469,2.51772794 C43.7033244,2.26795043 44.0038086,2.14400069 44.3568776,2.14400069 L45.8968592,2.14400069 L45.8968592,0.296022727 L49.6829604,0.296022727 L49.6829604,2.14400069 L51.2229421,2.14400069 Z" fill="#fff"></path></g></svg>',
        backgroundColor: "",
        width: 53,
        height: 16,
        y: this.options.statusIconsY,
        x: this.width - statusBarTime.width - 70
      });
      this.title.y = Align.center;
    }
    at = this;
    statusBar = this.statusBar;
    isMob = this.options.mobile;
    window.onresize = function() {
      at.width = Screen.width;
      shadow.umbra.width = Screen.width;
      shadow.ambient.width = Screen.width;
      shadow.penumbra.width = Screen.width;
      if (Utils.isMobile() || isMob === true) {
        statusBar.width = Screen.width;
        statusBarTime.x = Screen.width - 55;
        return statusIcons.x = Screen.width - statusBarTime.width - 68;
      }
    };
  }

  return AppBar;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3Rlc3NnYWRkL0RvY3VtZW50cy9HaXRIdWIvTWF0ZXJpYWxDb21wb25lbnRzL0RlbW9zL0Zvcm0uZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvdGVzc2dhZGQvRG9jdW1lbnRzL0dpdEh1Yi9NYXRlcmlhbENvbXBvbmVudHMvRGVtb3MvRm9ybS5mcmFtZXIvbW9kdWxlcy9NYXRlcmlhbENvbXBvbmVudHMuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgTWF0ZXJpYWxDb21wb25lbnRzIHZlcnNpb24gMVxuIyBNYWRlIGJ5IFRlc3MgR2FkZCBodHRwczovL21lZGl1bS5jb20vQHRlc3NnYWRkXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyBUaGlzIHZlcnNpb24gY29udGFpbnNcbiMgMC4gZ2xvYmFsIGVsZW1lbnRzXG4jIDEuIENvbG9yXG4jIDIuIEZsYXRCdXR0b25cbiMgMy4gUmFpc2VkQnV0dG9uXG4jIDQuIEZBQlxuIyA1LiBDaGVja2JveGVzXG4jIDYuIFJhZGlvIEJ1dHRvbnNcbiMgNy4gU3dpdGNoXG4jIDguIFRleHRGaWVsZCAoVGV4dCBmaWVsZHMgZnJhbmtlbnN0aWVuZCBmcm9tIEpvcmRhbiBSb2JlcnQgRG9ic29uJ3MgSW5wdXRGaWVsZClcbiMgOS4gVGV4dEZpZWxkX1ZhbGlkYXRpb24gKFRleHQgZmllbGRzIGZyYW5rZW5zdGllbmQgZnJvbSBKb3JkYW4gUm9iZXJ0IERvYnNvbidzIElucHV0RmllbGQpXG4jIDEwLiBUZXh0QXJlYSAoZnJhbmtlbnN0aWVuZCBmcm9tIEpvcmRhbiBSb2JlcnQgRG9ic29uJ3MgSW5wdXRGaWVsZCBhbmQgQmxhaW5lIEJpbGxpbmdzbGV5J3MgQXV0b2dyb3cpXG4jIDExLiBUZXh0RmllbGRfRHJvcGRvd25cbiMgMTIuIEFwcEJhclxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAwLiBHbG9iYWwgRWxlbWVudHMgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIy0tLS0tLS0tLWNvbG9yc1xubGFiZWxfbGlnaHQgPSBcInJnYmEoMCwwLDAsMC44NylcIlxubGFiZWxfZGFyayA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5saW5lX2xpZ2h0ID0gXCJyZ2JhKDAsMCwwLDAuNTQpXCJcbmxpbmVfZGFyayA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCJcbmlucHV0X2xpZ2h0ID0gXCJyZ2JhKDAsMCwwLDAuNTQpXCJcbmlucHV0X2RhcmsgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuSW5wdXRsYWJlbF9saWdodCA9IGJveF9saWdodCA9IFwicmdiYSgwLDAsMCwwLjU0KVwiXG5JbnB1dGxhYmVsX2RhcmsgPSBib3hfZGFyayA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCJcbmxpbmVfbGlnaHRfaG92ZXIgPSBcInJnYmEoMCwwLDAsMC44NylcIlxubGluZV9kYXJrX2hvdmVyID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblxuXG4jLS0tLS0tLS0tdGV4dGxheWVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgTGFiZWwgZXh0ZW5kcyBUZXh0TGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7Jylcblx0XHRcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2XG5cdFx0QG9wdGlvbnMudGV4dCA/PSAnTGFiZWwnXG5cdFx0QG9wdGlvbnMuY29sb3IgPz0gbGFiZWxfbGlnaHRcblx0XHRAb3B0aW9ucy5mb250V2VpZ2h0ID89IDQwMFxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPz0gMFxuXHRcdEBvcHRpb25zLm5hbWUgPz0gXCJsYWJlbFwiXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cblxuIy0tLS0tLS0tLXNoYWRvdy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgU2hhZG93IGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBcIlwiXG5cblx0XHRAdW1icmEgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsMC4xNClcIlxuXHRcdFx0bmFtZTogXCJ1bWJyYVwiXG5cdFx0XHRcblx0XHRAdW1icmEuc3RhdGVzID1cblx0XHRcdF8xMmRwOiBcblx0XHRcdFx0c2hhZG93WTogMTJcblx0XHRcdFx0c2hhZG93Qmx1cjogMTdcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAyXG5cdFx0XHRfOGRwOiBcblx0XHRcdFx0c2hhZG93WTogNFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxNVxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF82ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDZcblx0XHRcdFx0c2hhZG93Qmx1cjogMTBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfNGRwOlxuXHRcdFx0XHRzaGFkb3dZOiAyXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDRcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXHRcblx0XHRcdF8yZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMWRwOiBcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzBkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDBcblx0XHRcdFx0c2hhZG93Qmx1cjogMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblxuXHRcdEBwZW51bWJyYSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRib3JkZXJSYWRpdXM6IEBvcHRpb25zLmJvcmRlclJhZGl1c1xuXHRcdFx0c2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwwLjEyKVwiXG5cdFx0XHRuYW1lOiBcInBlbnVtYnJhXCJcblx0XHRcdFxuXHRcdEBwZW51bWJyYS5zdGF0ZXMgPVxuXHRcdFx0XzEyZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiA1XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDIyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogNFxuXHRcdFx0XzhkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdFx0c2hhZG93Qmx1cjogMTRcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAzXG5cdFx0XHRfNmRwOlxuXHRcdFx0XHRzaGFkb3dZOiAxXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDE4XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzRkcDpcblx0XHRcdFx0c2hhZG93WTogNFxuXHRcdFx0XHRzaGFkb3dCbHVyOiA1XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFx0XG5cdFx0XHRfMmRwOiBcblx0XHRcdFx0c2hhZG93WTogMlxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzFkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDJcblx0XHRcdFx0c2hhZG93Qmx1cjogMlxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcdFx0XHRcdFxuXHRcdFx0XzBkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDBcblx0XHRcdFx0c2hhZG93Qmx1cjogMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblxuXHRcdEBhbWJpZW50PSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0c2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwwLjIwKVwiXG5cdFx0XHRuYW1lOiBcImFtYmllbnRcIlxuXHRcdFx0Ym9yZGVyUmFkaXVzIDogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRcblx0XHRAYW1iaWVudC5zdGF0ZXMgPVxuXHRcdFx0XzEyZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiA3XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDhcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfOGRwOiBcblx0XHRcdFx0c2hhZG93WTogOFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDFcblx0XHRcdF82ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdFx0c2hhZG93Qmx1cjogNVxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF80ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogMTBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXHRcblx0XHRcdF8yZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogM1xuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF8xZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiAxXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDNcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMGRwOiBcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXG5cdFx0QHVtYnJhLmFuaW1hdGlvbk9wdGlvbnMgPSB0aW1lOiAwLjJcblx0XHRAcGVudW1icmEuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuMlx0XG5cdFx0QGFtYmllbnQuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuMlxuXHRcdFxuXHRcdEB1bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8yZHBcIlxuXHRcdEBwZW51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8yZHBcIlxuXHRcdEBhbWJpZW50LnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzJkcFwiXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QHVtYnJhLnBhcmVudCA9IEBcblx0XHRAcGVudW1icmEucGFyZW50ID0gQFxuXHRcdEBhbWJpZW50LnBhcmVudCA9IEBcblxuXHRcdEBhcnJheSA9IFtAdW1icmEsIEBwZW51bWJyYSwgQGFtYmllbnRdXG5cblxuXG4jLS0tLS0tLS1JY29ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgU3lzdGVtSWNvbiBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0XG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTsgQGltcG9ydCB1cmwoaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2NvZGUuZ2V0bWRsLmlvLzEuMC42L21hdGVyaWFsLmluZGlnby1waW5rLm1pbi5jc3MpOyAubWF0ZXJpYWwtaWNvbnMudGFie30nKVxuXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMjRcblxuXG5cdFx0QG9wdGlvbnMuaWNvbiA/PSBcImFuZHJvaWRcIlxuXHRcdEBvcHRpb25zLmh0bWwgPSBcIjxpIGNsYXNzPSdtYXRlcmlhbC1pY29ucyB0YWInPlwiICsgQG9wdGlvbnMuaWNvbiArIFwiPC9pPlwiXG5cdFx0QG9wdGlvbnMuY29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gQG9wdGlvbnMuZm9udFNpemVcblx0XHRAb3B0aW9ucy53aWR0aCA/PSBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IFwiXCJcblx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRAZGVmaW5lICdmb250U2l6ZScsXG5cdFx0Z2V0OiAtPiBcblx0XHRcdEBvcHRpb25zLmZvbnRTaXplXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuZm9udFNpemUgPSB2YWx1ZVxuXG5cdFx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpOyBAaW1wb3J0IHVybChodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vY29kZS5nZXRtZGwuaW8vMS4wLjYvbWF0ZXJpYWwuaW5kaWdvLXBpbmsubWluLmNzcyk7IC5tYXRlcmlhbC1pY29ucy50YWJ7fScpXG5cblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAxLiBDb2xvciAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLmNvbG9yIGV4dGVuZHMgTGF5ZXJcbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgICAgICBAb3B0aW9ucyA9IF8uZGVmYXVsdHMgQG9wdGlvbnMsXG4gICAgICAgIHN1cGVyIEBvcHRpb25zXG5cbiNyZWRzLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGV4cG9ydHMucmVkID0gXCIjRjQ0MzM2XCJcblx0XHRleHBvcnRzLnJlZDUwID0gXCIjRkZFQkVFXCJcblx0XHRleHBvcnRzLnJlZDEwMCA9IFwiI0ZGQ0REMlwiXG5cdFx0ZXhwb3J0cy5yZWQyMDAgPSBcIiNFRjlBOUFcIlxuXHRcdGV4cG9ydHMucmVkMzAwID0gXCIjRTU3MzczXCJcblx0XHRleHBvcnRzLnJlZDQwMCA9IFwiI0VGNTM1MFwiXG5cdFx0ZXhwb3J0cy5yZWQ1MDAgPSBcIiNGNDQzMzZcIlxuXHRcdGV4cG9ydHMucmVkNjAwID0gXCIjRTUzOTM1XCJcblx0XHRleHBvcnRzLnJlZDcwMCA9IFwiI0QzMkYyRlwiXG5cdFx0ZXhwb3J0cy5yZWQ4MDAgPSBcIiNDNjI4MjhcIlxuXHRcdGV4cG9ydHMucmVkOTAwID0gXCIjQjcxQzFDXCJcblx0XHRleHBvcnRzLnJlZEExMDAgPSBcIiNGRjhBODBcIlxuXHRcdGV4cG9ydHMucmVkQTIwMCA9IFwiI0ZGNTI1MlwiXG5cdFx0ZXhwb3J0cy5yZWRBNDAwID0gXCIjRkYxNzQ0XCJcblx0XHRleHBvcnRzLnJlZEE3MDAgPSBcIiNENTAwMDBcIlxuXG4jcGluay0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5waW5rID0gXCIjRTkxRTYzXCJcblx0XHRleHBvcnRzLnBpbms1MCA9IFwiI0ZDRTRFQ1wiXG5cdFx0ZXhwb3J0cy5waW5rMTAwID0gXCIjRjhCQkQwXCJcblx0XHRleHBvcnRzLnBpbmsyMDAgPSBcIiNGNDhGQjFcIlxuXHRcdGV4cG9ydHMucGluazMwMCA9IFwiI0YwNjI5MlwiXG5cdFx0ZXhwb3J0cy5waW5rNDAwID0gXCIjRUM0MDdBXCJcblx0XHRleHBvcnRzLnBpbms1MDAgPSBcIiNFOTFFNjNcIlxuXHRcdGV4cG9ydHMucGluazYwMCA9IFwiI0Q4MUI2MFwiXG5cdFx0ZXhwb3J0cy5waW5rNzAwID0gXCIjQzIxODVCXCJcblx0XHRleHBvcnRzLnBpbms4MDAgPSBcIiNBRDE0NTdcIlxuXHRcdGV4cG9ydHMucGluazkwMCA9IFwiIzg4MEU0RlwiXG5cdFx0ZXhwb3J0cy5waW5rQTEwMCA9IFwiI0ZGODBBQlwiXG5cdFx0ZXhwb3J0cy5waW5rQTIwMCA9IFwiI0ZGNDA4MVwiXG5cdFx0ZXhwb3J0cy5waW5rQTQwMCA9IFwiI0Y1MDA1N1wiXG5cdFx0ZXhwb3J0cy5waW5rQTcwMCA9IFwiI0M1MTE2MlwiXG5cblxuI3B1cnBsZS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5wdXJwbGUgPSBcIiM5QzI3QjBcIlxuXHRcdGV4cG9ydHMucHVycGxlNTAgPSBcIiNGM0U1RjVcIlxuXHRcdGV4cG9ydHMucHVycGxlMTAwID0gXCIjRTFCRUU3XCJcblx0XHRleHBvcnRzLnB1cnBsZTIwMCA9IFwiI0NFOTNEOFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGUzMDAgPSBcIiNCQTY4QzhcIlxuXHRcdGV4cG9ydHMucHVycGxlNDAwID0gXCIjQUI0N0JDXCJcblx0XHRleHBvcnRzLnB1cnBsZTUwMCA9IFwiIzlDMjdCMFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU2MDAgPSBcIiM4RTI0QUFcIlxuXHRcdGV4cG9ydHMucHVycGxlNzAwID0gXCIjN0IxRkEyXCJcblx0XHRleHBvcnRzLnB1cnBsZTgwMCA9IFwiIzZBMUI5QVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU5MDAgPSBcIiM0QTE0OENcIlxuXHRcdGV4cG9ydHMucHVycGxlQTEwMCA9IFwiI0VBODBGQ1wiXG5cdFx0ZXhwb3J0cy5wdXJwbGVBMjAwID0gXCIjRTA0MEZCXCJcblx0XHRleHBvcnRzLnB1cnBsZUE0MDAgPSBcIiNENTAwRjlcIlxuXHRcdGV4cG9ydHMucHVycGxlQTcwMCA9IFwiI0FBMDBGRlwiXG5cbiNEZWVwIHB1cnBsZS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlID0gXCIjNjczQUI3XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU1MCA9IFwiI0VERTdGNlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlMTAwID0gXCIjRDFDNEU5XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGUyMDAgPSBcIiNCMzlEREJcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTMwMCA9IFwiIzk1NzVDRFwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlNDAwID0gXCIjN0U1N0MyXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU1MDAgPSBcIiM2NzNBQjdcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTYwMCA9IFwiIzVFMzVCMVwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlNzAwID0gXCIjNTEyREE4XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU4MDAgPSBcIiM0NTI3QTBcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTkwMCA9IFwiIzMxMUI5MlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTEwMCA9IFwiI0IzODhGRlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTIwMCA9IFwiIzdDNERGRlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTQwMCA9IFwiIzY1MUZGRlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlQTcwMCA9IFwiIzYyMDBFQVwiXG4jaW5kaWdvLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmluZGlnbyA9IFwiIzNGNTFCNVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ281MCA9IFwiI0U4RUFGNlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ28xMDAgPSBcIiNDNUNBRTlcIlxuXHRcdGV4cG9ydHMuaW5kaWdvMjAwID0gXCIjOUZBOERBXCJcblx0XHRleHBvcnRzLmluZGlnbzMwMCA9IFwiIzc5ODZDQlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ280MDAgPSBcIiM1QzZCQzBcIlxuXHRcdGV4cG9ydHMuaW5kaWdvNTAwID0gXCIjM0Y1MUI1XCJcblx0XHRleHBvcnRzLmluZGlnbzYwMCA9IFwiIzM5NDlBQlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ283MDAgPSBcIiMzMDNGOUZcIlxuXHRcdGV4cG9ydHMuaW5kaWdvODAwID0gXCIjMjgzNTkzXCJcblx0XHRleHBvcnRzLmluZGlnbzkwMCA9IFwiIzFBMjM3RVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ29BMTAwID0gXCIjOEM5RUZGXCJcblx0XHRleHBvcnRzLmluZGlnb0EyMDAgPSBcIiM1MzZERkVcIlxuXHRcdGV4cG9ydHMuaW5kaWdvQTQwMCA9IFwiIzNENUFGRVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ29BNzAwID0gXCIjMzA0RkZFXCJcbiNibHVlLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmJsdWUgPSBcIiMyMTk2RjNcIlxuXHRcdGV4cG9ydHMuYmx1ZTUwID0gXCIjRTNGMkZEXCJcblx0XHRleHBvcnRzLmJsdWUxMDAgPSBcIiNCQkRFRkJcIlxuXHRcdGV4cG9ydHMuYmx1ZTIwMCA9IFwiIzkwQ0FGOVwiXG5cdFx0ZXhwb3J0cy5ibHVlMzAwID0gXCIjNjRCNUY2XCJcblx0XHRleHBvcnRzLmJsdWU0MDAgPSBcIiM0MkE1RjVcIlxuXHRcdGV4cG9ydHMuYmx1ZTUwMCA9IFwiIzIxOTZGM1wiXG5cdFx0ZXhwb3J0cy5ibHVlNjAwID0gXCIjMUU4OEU1XCJcblx0XHRleHBvcnRzLmJsdWU3MDAgPSBcIiMxOTc2RDJcIlxuXHRcdGV4cG9ydHMuYmx1ZTgwMCA9IFwiIzE1NjVDMFwiXG5cdFx0ZXhwb3J0cy5ibHVlOTAwID0gXCIjMEQ0N0ExXCJcblx0XHRleHBvcnRzLmJsdWVBMTAwID0gXCIjODJCMUZGXCJcblx0XHRleHBvcnRzLmJsdWVBMjAwID0gXCIjNDQ4QUZGXCJcblx0XHRleHBvcnRzLmJsdWVBNDAwID0gXCIjMjk3OUZGXCJcblx0XHRleHBvcnRzLmJsdWVBNzAwID0gXCIjMjk2MkZGXCJcbiNsaWdodCBibHVlLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5saWdodEJsdWUgPSBcIiMwM0E5RjRcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNTAgPSBcIiNFMUY1RkVcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlMTAwID0gXCIjQjNFNUZDXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTIwMCA9IFwiIzgxRDRGQVwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWUzMDAgPSBcIiM0RkMzRjdcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNDAwID0gXCIjMjlCNkY2XCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTUwMCA9IFwiIzAzQTlGNFwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU2MDAgPSBcIiMwMzlCRTVcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNzAwID0gXCIjMDI4OEQxXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTgwMCA9IFwiIzAyNzdCRFwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU5MDAgPSBcIiMwMTU3OUJcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlQTEwMCA9IFwiIzgwRDhGRlwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWVBMjAwID0gXCIjNDBDNEZGXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZUE0MDAgPSBcIiMwMEIwRkZcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlQTcwMCA9IFwiIzAwOTFFQVwiXG4jY3lhbi0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmN5YW4gPSBcIiMwMEJDRDRcIlxuXHRcdGV4cG9ydHMuY3lhbjUwID0gXCIjRTBGN0ZBXCJcblx0XHRleHBvcnRzLmN5YW4xMDAgPSBcIiNCMkVCRjJcIlxuXHRcdGV4cG9ydHMuY3lhbjIwMCA9IFwiIzgwREVFQVwiXG5cdFx0ZXhwb3J0cy5jeWFuMzAwID0gXCIjNEREMEUxXCJcblx0XHRleHBvcnRzLmN5YW40MDAgPSBcIiMyNkM2REFcIlxuXHRcdGV4cG9ydHMuY3lhbjUwMCA9IFwiIzAwQkNENFwiXG5cdFx0ZXhwb3J0cy5jeWFuNjAwID0gXCIjMDBBQ0MxXCJcblx0XHRleHBvcnRzLmN5YW43MDAgPSBcIiMwMDk3QTdcIlxuXHRcdGV4cG9ydHMuY3lhbjgwMCA9IFwiIzAwODM4RlwiXG5cdFx0ZXhwb3J0cy5jeWFuOTAwID0gXCIjMDA2MDY0XCJcblx0XHRleHBvcnRzLmN5YW5BMTAwID0gXCIjODRGRkZGXCJcblx0XHRleHBvcnRzLmN5YW5BMjAwID0gXCIjMThGRkZGXCJcblx0XHRleHBvcnRzLmN5YW5BNDAwID0gXCIjMDBFNUZGXCJcblx0XHRleHBvcnRzLmN5YW5BNzAwID0gXCIjMDBCOEQ0XCJcbiN0ZWFsLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMudGVhbCA9IFwiIzAwOTY4OFwiXG5cdFx0ZXhwb3J0cy50ZWFsNTAgPSBcIiNFMEYyRjFcIlxuXHRcdGV4cG9ydHMudGVhbDEwMCA9IFwiI0IyREZEQlwiXG5cdFx0ZXhwb3J0cy50ZWFsMjAwID0gXCIjODBDQkM0XCJcblx0XHRleHBvcnRzLnRlYWwzMDAgPSBcIiM0REI2QUNcIlxuXHRcdGV4cG9ydHMudGVhbDQwMCA9IFwiIzI2QTY5QVwiXG5cdFx0ZXhwb3J0cy50ZWFsNTAwID0gXCIjMDA5Njg4XCJcblx0XHRleHBvcnRzLnRlYWw2MDAgPSBcIiMwMDg5N0JcIlxuXHRcdGV4cG9ydHMudGVhbDcwMCA9IFwiIzAwNzk2QlwiXG5cdFx0ZXhwb3J0cy50ZWFsODAwID0gXCIjMDA2OTVDXCJcblx0XHRleHBvcnRzLnRlYWw5MDAgPSBcIiMwMDRENDBcIlxuXHRcdGV4cG9ydHMudGVhbEExMDAgPSBcIiNBN0ZGRUJcIlxuXHRcdGV4cG9ydHMudGVhbEEyMDAgPSBcIiM2NEZGREFcIlxuXHRcdGV4cG9ydHMudGVhbEE0MDAgPSBcIiMxREU5QjZcIlxuXHRcdGV4cG9ydHMudGVhbEE3MDAgPSBcIiMwMEJGQTVcIlxuI2dyZWVuLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5ncmVlbiA9IFwiIzRDQUY1MFwiXG5cdFx0ZXhwb3J0cy5ncmVlbjUwID0gXCIjRThGNUU5XCJcblx0XHRleHBvcnRzLmdyZWVuMTAwID0gXCIjQzhFNkM5XCJcblx0XHRleHBvcnRzLmdyZWVuMjAwID0gXCIjQTVENkE3XCJcblx0XHRleHBvcnRzLmdyZWVuMzAwID0gXCIjODFDNzg0XCJcblx0XHRleHBvcnRzLmdyZWVuNDAwID0gXCIjNjZCQjZBXCJcblx0XHRleHBvcnRzLmdyZWVuNTAwID0gXCIjNENBRjUwXCJcblx0XHRleHBvcnRzLmdyZWVuNjAwID0gXCIjNDNBMDQ3XCJcblx0XHRleHBvcnRzLmdyZWVuNzAwID0gXCIjMzg4RTNDXCJcblx0XHRleHBvcnRzLmdyZWVuODAwID0gXCIjMkU3RDMyXCJcblx0XHRleHBvcnRzLmdyZWVuOTAwID0gXCIjMUI1RTIwXCJcblx0XHRleHBvcnRzLmdyZWVuQTEwMCA9IFwiI0I5RjZDQVwiXG5cdFx0ZXhwb3J0cy5ncmVlbkEyMDAgPSBcIiM2OUYwQUVcIlxuXHRcdGV4cG9ydHMuZ3JlZW5BNDAwID0gXCIjMDBFNjc2XCJcblx0XHRleHBvcnRzLmdyZWVuQTcwMCA9IFwiIzAwQzg1M1wiXG4jbGlnaHQgZ3JlZW4tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpZ2h0R3JlZW4gPSBcIiM4QkMzNEFcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjUwID0gXCIjRjFGOEU5XCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW4xMDAgPSBcIiNEQ0VEQzhcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjIwMCA9IFwiI0M1RTFBNVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuMzAwID0gXCIjQUVENTgxXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW40MDAgPSBcIiM5Q0NDNjVcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjUwMCA9IFwiIzhCQzM0QVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuNjAwID0gXCIjN0NCMzQyXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW43MDAgPSBcIiM2ODlGMzhcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjgwMCA9IFwiIzU1OEIyRlwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuOTAwID0gXCIjMzM2OTFFXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BMTAwID0gXCIjQ0NGRjkwXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BMjAwID0gXCIjQjJGRjU5XCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BNDAwID0gXCIjNzZGRjAzXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW5BNzAwID0gXCIjNjRERDE3XCJcbiNsaW1lLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpbWUgPSBcIiNDRERDMzlcIlxuXHRcdGV4cG9ydHMubGltZTUwID0gXCIjRjlGQkU3XCJcblx0XHRleHBvcnRzLmxpbWUxMDAgPSBcIiNGMEY0QzNcIlxuXHRcdGV4cG9ydHMubGltZTIwMCA9IFwiI0U2RUU5Q1wiXG5cdFx0ZXhwb3J0cy5saW1lMzAwID0gXCIjRENFNzc1XCJcblx0XHRleHBvcnRzLmxpbWU0MDAgPSBcIiNENEUxNTdcIlxuXHRcdGV4cG9ydHMubGltZTUwMCA9IFwiI0NEREMzOVwiXG5cdFx0ZXhwb3J0cy5saW1lNjAwID0gXCIjQzBDQTMzXCJcblx0XHRleHBvcnRzLmxpbWU3MDAgPSBcIiNBRkI0MkJcIlxuXHRcdGV4cG9ydHMubGltZTgwMCA9IFwiIzlFOUQyNFwiXG5cdFx0ZXhwb3J0cy5saW1lOTAwID0gXCIjODI3NzE3XCJcblx0XHRleHBvcnRzLmxpbWVBMTAwID0gXCIjRjRGRjgxXCJcblx0XHRleHBvcnRzLmxpbWVBMjAwID0gXCIjRUVGRjQxXCJcblx0XHRleHBvcnRzLmxpbWVBNDAwID0gXCIjQzZGRjAwXCJcblx0XHRleHBvcnRzLmxpbWVBNzAwID0gXCIjQUVFQTAwXCJcbiN5ZWxsb3ctLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMueWVsbG93ID0gXCIjRkZFQjNCXCJcblx0XHRleHBvcnRzLnllbGxvdzUwID0gXCIjRkZGREU3XCJcblx0XHRleHBvcnRzLnllbGxvdzEwMCA9IFwiI0ZGRjlDNFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3cyMDAgPSBcIiNGRkY1OURcIlxuXHRcdGV4cG9ydHMueWVsbG93MzAwID0gXCIjRkZGMTc2XCJcblx0XHRleHBvcnRzLnllbGxvdzQwMCA9IFwiI0ZGRUU1OFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c1MDAgPSBcIiNGRkVCM0JcIlxuXHRcdGV4cG9ydHMueWVsbG93NjAwID0gXCIjRkREODM1XCJcblx0XHRleHBvcnRzLnllbGxvdzcwMCA9IFwiI0ZCQzAyRFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c4MDAgPSBcIiNGOUE4MjVcIlxuXHRcdGV4cG9ydHMueWVsbG93OTAwID0gXCIjRjU3RjE3XCJcblx0XHRleHBvcnRzLnllbGxvd0ExMDAgPSBcIiNGRkZGOERcIlxuXHRcdGV4cG9ydHMueWVsbG93QTIwMCA9IFwiI0ZGRkYwMFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3dBNDAwID0gXCIjRkZFQTAwXCJcblx0XHRleHBvcnRzLnllbGxvd0E3MDAgPSBcIiNGRkQ2MDBcIlxuI2FtYmVyLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5hbWJlciA9IFwiI0ZGQzEwN1wiXG5cdFx0ZXhwb3J0cy5hbWJlcjUwID0gXCIjRkZGOEUxXCJcblx0XHRleHBvcnRzLmFtYmVyMTAwID0gXCIjRkZFQ0IzXCJcblx0XHRleHBvcnRzLmFtYmVyMjAwID0gXCIjRkZFMDgyXCJcblx0XHRleHBvcnRzLmFtYmVyMzAwID0gXCIjRkZENTRGXCJcblx0XHRleHBvcnRzLmFtYmVyNDAwID0gXCIjRkZDQTI4XCJcblx0XHRleHBvcnRzLmFtYmVyNTAwID0gXCIjRkZDMTA3XCJcblx0XHRleHBvcnRzLmFtYmVyNjAwID0gXCIjRkZCMzAwXCJcblx0XHRleHBvcnRzLmFtYmVyNzAwID0gXCIjRkZBMDAwXCJcblx0XHRleHBvcnRzLmFtYmVyODAwID0gXCIjRkY4RjAwXCJcblx0XHRleHBvcnRzLmFtYmVyOTAwID0gXCIjRkY2RjAwXCJcblx0XHRleHBvcnRzLmFtYmVyQTEwMCA9IFwiI0ZGRTU3RlwiXG5cdFx0ZXhwb3J0cy5hbWJlckEyMDAgPSBcIiNGRkQ3NDBcIlxuXHRcdGV4cG9ydHMuYW1iZXJBNDAwID0gXCIjRkZDNDAwXCJcblx0XHRleHBvcnRzLmFtYmVyQTcwMCA9IFwiI0ZGQUIwMFwiXG4jb3JhbmdlLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5vcmFuZ2UgPSBcIiNGRjk4MDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlNTAgPSBcIiNGRkYzRTBcIlxuXHRcdGV4cG9ydHMub3JhbmdlMTAwID0gXCIjRkZFMEIyXCJcblx0XHRleHBvcnRzLm9yYW5nZTIwMCA9IFwiI0ZGQ0M4MFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2UzMDAgPSBcIiNGRkI3NERcIlxuXHRcdGV4cG9ydHMub3JhbmdlNDAwID0gXCIjRkZBNzI2XCJcblx0XHRleHBvcnRzLm9yYW5nZTUwMCA9IFwiI0ZGOTgwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U2MDAgPSBcIiNGQjhDMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlNzAwID0gXCIjRjU3QzAwXCJcblx0XHRleHBvcnRzLm9yYW5nZTgwMCA9IFwiI0VGNkMwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U5MDAgPSBcIiNFNjUxMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlQTEwMCA9IFwiI0ZGRDE4MFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2VBMjAwID0gXCIjRkZBQjQwXCJcblx0XHRleHBvcnRzLm9yYW5nZUE0MDAgPSBcIiNGRjkxMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlQTcwMCA9IFwiI0ZGNkQwMFwiXG4jZGVlcCBvcmFuZ2UtLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlID0gXCIjRkY1NzIyXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U1MCA9IFwiI0ZCRTlFN1wiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlMTAwID0gXCIjRkZDQ0JDXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2UyMDAgPSBcIiNGRkFCOTFcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTMwMCA9IFwiI0ZGOEE2NVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlNDAwID0gXCIjRkY3MDQzXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U1MDAgPSBcIiNGRjU3MjJcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTYwMCA9IFwiI0Y0NTExRVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlNzAwID0gXCIjRTY0QTE5XCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U4MDAgPSBcIiNEODQzMTVcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTkwMCA9IFwiI0JGMzYwQ1wiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTEwMCA9IFwiI0ZGOUU4MFwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTIwMCA9IFwiI0ZGNkU0MFwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTQwMCA9IFwiI0ZGM0QwMFwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlQTcwMCA9IFwiI0REMkMwMFwiXG4jYnJvd24tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5icm93biA9IFwiIzc5NTU0OFwiXG5cdFx0ZXhwb3J0cy5icm93bjUwID0gXCIjRUZFQkU5XCJcblx0XHRleHBvcnRzLmJyb3duMTAwID0gXCIjRDdDQ0M4XCJcblx0XHRleHBvcnRzLmJyb3duMjAwID0gXCIjQkNBQUE0XCJcblx0XHRleHBvcnRzLmJyb3duMzAwID0gXCIjQTE4ODdGXCJcblx0XHRleHBvcnRzLmJyb3duNDAwID0gXCIjOEQ2RTYzXCJcblx0XHRleHBvcnRzLmJyb3duNTAwID0gXCIjNzk1NTQ4XCJcblx0XHRleHBvcnRzLmJyb3duNjAwID0gXCIjNkQ0QzQxXCJcblx0XHRleHBvcnRzLmJyb3duNzAwID0gXCIjNUQ0MDM3XCJcblx0XHRleHBvcnRzLmJyb3duODAwID0gXCIjNEUzNDJFXCJcblx0XHRleHBvcnRzLmJyb3duOTAwID0gXCIjNEUzNDJFXCJcblx0XHRleHBvcnRzLmJyb3duQTEwMCA9IFwiXCJcblx0XHRleHBvcnRzLmJyb3duQTIwMCA9IFwiXCJcblx0XHRleHBvcnRzLmJyb3duQTQwMCA9IFwiXCJcblx0XHRleHBvcnRzLmJyb3duQTcwMCA9IFwiXCJcbiNncmV5LS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmdyZXkgPSBcIiM5RTlFOUVcIlxuXHRcdGV4cG9ydHMuZ3JleTUwID0gXCIjRkFGQUZBXCJcblx0XHRleHBvcnRzLmdyZXkxMDAgPSBcIiNGNUY1RjVcIlxuXHRcdGV4cG9ydHMuZ3JleTIwMCA9IFwiI0VFRUVFRVwiXG5cdFx0ZXhwb3J0cy5ncmV5MzAwID0gXCIjRTBFMEUwXCJcblx0XHRleHBvcnRzLmdyZXk0MDAgPSBcIiNCREJEQkRcIlxuXHRcdGV4cG9ydHMuZ3JleTUwMCA9IFwiIzlFOUU5RVwiXG5cdFx0ZXhwb3J0cy5ncmV5NjAwID0gXCIjNzU3NTc1XCJcblx0XHRleHBvcnRzLmdyZXk3MDAgPSBcIiM2MTYxNjFcIlxuXHRcdGV4cG9ydHMuZ3JleTgwMCA9IFwiIzQyNDI0MlwiXG5cdFx0ZXhwb3J0cy5ncmV5OTAwID0gXCIjMjEyMTIxXCJcblx0XHRleHBvcnRzLmdyZXlBMTAwID0gXCJcIlxuXHRcdGV4cG9ydHMuZ3JleUEyMDAgPSBcIlwiXG5cdFx0ZXhwb3J0cy5ncmV5QTQwMCA9IFwiXCJcblx0XHRleHBvcnRzLmdyZXlBNzAwID0gXCJcIlxuI2JsdWUgZ3JleS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuYmx1ZUdyZXkgPSBcIiM2MDdEOEJcIlxuXHRcdGV4cG9ydHMuYmx1ZUdyZXk1MCA9IFwiI0VDRUZGMVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTEwMCA9IFwiI0NGRDhEQ1wiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTIwMCA9IFwiI0IwQkVDNVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTMwMCA9IFwiIzkwQTRBRVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTQwMCA9IFwiIzc4OTA5Q1wiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTUwMCA9IFwiIzYwN0Q4QlwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTYwMCA9IFwiIzU0NkU3QVwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTcwMCA9IFwiIzQ1NUE2NFwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTgwMCA9IFwiIzM3NDc0RlwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTkwMCA9IFwiIzI2MzIzOFwiXG5cdFxuI2JsYWNrIGFuZCB3aGl0ZS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuYmxhY2sgPSBcIiMwMDBcIlxuXHRcdGV4cG9ydHMud2hpdGUgPSBcIiNmZmZcIlxuXG4jbGFiZWxzIC0gbGlnaHQgLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpZ2h0UHJpbWFyeSA9IFwicmdiYSgwLDAsMCwwLjg3KVwiXG5cdFx0ZXhwb3J0cy5saWdodFNlY29uZGFyeSA9IFwicmdiYSgwLDAsMCwwLjU0KVwiXG5cdFx0ZXhwb3J0cy5saWdodERpc2FibGVkID0gXCJyZ2JhKDAsMCwwLDAuMzgpXCJcblxuI2xhYmVscyAtIERhcmsgLS0tLS0tLS1cblx0XHRleHBvcnRzLmRhcmtQcmltYXJ5ID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XHRleHBvcnRzLmRhcmtTZWNvbmRhcnkgPSBcInJnYmEoMjU1LDI1NSwyNTUsIDAuNylcIlxuXHRcdGV4cG9ydHMuZGFya0Rpc2FibGVkID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIlxuXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgMi4gRmxhdEJ1dHRvbiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5GbGF0QnV0dG9uIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG4jLS0tLS0tIERlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTsnKVxuXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiRmxhdCBCdXR0b25cIlxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHRAb3B0aW9ucy5kaXNhYmxlZCA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdEBvcHRpb25zLmRpcmVjdGlvblJpcHBsZSA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZGlzYWJsZVJpcHBsZSA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPz0gMFxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNjAwXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTRcblxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIHRydWVcdFx0XHRcblx0XHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRcdEBkaXNhYmxlZF9sYWJlbENvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAZGlzYWJsZWRfbGFiZWxDb2xvciA9IFwicmdiYSgwLDAsMCwwLjI2KVwiXG5cblxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBudWxsXG5cdFx0XHRoZWlnaHQ6IDQ4XG5cdFx0XHRib3JkZXJSYWRpdXMgOiAyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMubGFiZWxUZXh0Lmxlbmd0aCAqICgoQG9wdGlvbnMuZm9udFNpemUgKyAzKSAvIDIpICsgMTYgKyAxNlxuXHRcdFx0bmFtZTogXCJGbGF0IGJ1dHRvblwiXG5cblx0XHRcblx0XHRpZiBAb3B0aW9ucy53aWR0aCA8IDg4XG5cdFx0XHRAb3B0aW9ucy53aWR0aCA9IDg4XG5cdFx0XHRcblx0XHRpZiBAb3B0aW9ucy5kZW5zZSBpcyB0cnVlXG5cdFx0XHRAb3B0aW9ucy53aWR0aCA9IEBvcHRpb25zLmxhYmVsVGV4dC5sZW5ndGggKiAoKEBvcHRpb25zLmZvbnRTaXplICsgMikgLyAyKSArIDE2ICsgMTZcblx0XHRcdEBidXR0b25IZWlnaHQgPSAzMlxuXHRcdGVsc2Vcblx0XHRcdEBidXR0b25IZWlnaHQgPSAzNlxuXHRcdFxuIy0tLS0tLSBob3ZlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRAYnR0bkJHID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQGJ1dHRvbkhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRib3JkZXJSYWRpdXM6IDJcblx0XHRcdG9wYWNpdHk6IDAuMTJcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRuYW1lOiBcIm92ZXJsYXlcIlxuXG4jLS0tLS0tLSByaXBwbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHJpcHBsZUJHID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQGJ1dHRvbkhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRuYW1lOiBcInJpcHBsZSBwYXJlbnRcIlxuXG5cdFx0XHRcblx0XHRAcmlwcGxlID0gbmV3ICBMYXllclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwMCVcIlxuXHRcdFx0c2l6ZTogQG9wdGlvbnMud2lkdGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0c2NhbGU6IDAuM1xuXHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXHRcdFxuIy0tLS0tLS0gbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXIgXG5cdFx0XHR0ZXh0IDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuZm9udFNpemVcblx0XHRcdHRleHRUcmFuc2Zvcm06IFwiVXBwZXJjYXNlXCJcblx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRmb250V2VpZ2h0OiBAb3B0aW9ucy5mb250V2VpZ2h0XG5cdFx0XHRmb250RmFtaWx5OiBAb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcbiMtLS0tLS0tIHN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGJ0dG5CRy5wYXJlbnQgPSBAbGFiZWwucGFyZW50ID0gQHJpcHBsZUJHLnBhcmVudCA9IEBcblx0XHRAYnR0bkJHLnkgPSBBbGlnbi5jZW50ZXJcblx0XHRAcmlwcGxlQkcueSA9IEFsaWduLmNlbnRlclxuXHRcdFxuXHRcdEByaXBwbGVCRy5jbGlwID0gdHJ1ZVxuXHRcdFxuXHRcdEByaXBwbGUucGFyZW50ID0gQHJpcHBsZUJHXG5cdFx0QHJpcHBsZS54ID0gQWxpZ24uY2VudGVyXG5cdFx0QHJpcHBsZS55ID1cdEFsaWduLmNlbnRlclxuXHRcdFxuXHRcdEBsYWJlbC54ID0gQWxpZ24uY2VudGVyXG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5jZW50ZXIoMSlcblx0XHRcblx0XHRpZiBAZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXHRcdFx0QHJpcHBsZS5kZXN0cm95KClcblx0XHRcdFx0XG4jLS0tLS0tLS0gRXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEAub25DbGljayBAY2xpY2tlZFxuXHRcdEAub25Nb3VzZU92ZXIgQEhvdmVyXG5cdFx0QC5vbk1vdXNlT3V0IEBIb3Zlck9mZlxuXHRcdEAub25Nb3VzZURvd24gQG1vdXNlRG93blxuXHRcdEAub25Nb3VzZVVwIEBtb3VzZVVwXG5cbiMtLS0tLS0tLSBnZXR0ZXJzICYgc2V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnZGlzYWJsZWQnLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5kaXNhYmxlZFxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBvcHRpb25zLmRpc2FibGVkID0gdmFsdWVcblx0XHRcdFxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAZGlzYWJsZWRfbGFiZWxDb2xvclxuXHRcdFx0XHRcdFxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgZmFsc2Vcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXG5cblxuIy0tLS0tLS0tLSBFdmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcblx0SG92ZXI6ID0+XG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgZmFsc2Vcblx0XHRcdEBidHRuQkcudmlzaWJsZSA9IHRydWVcblx0XG5cdEhvdmVyT2ZmOiA9PlxuXHRcdEBidHRuQkcudmlzaWJsZSA9IGZhbHNlXG5cdFx0XG5cdG1vdXNlRG93bjogLT5cblx0XHRAYnR0bkJHLmJyaWdodG5lc3MgPSA4MFxuXHRtb3VzZVVwOiAtPlxuXHRcdEBidHRuQkcuYnJpZ2h0bmVzcyA9IDEwMFxuXHRcblx0Y2xpY2tlZDogKGV2KSAtPlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlIFxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXHRcdFxuXHRcdFx0XHRpZiBAb3B0aW9ucy5kaXJlY3Rpb25SaXBwbGUgaXMgdHJ1ZVxuXHRcdFx0XHRcdEByaXBwbGUubWlkWCA9IGV2Lm9mZnNldFhcblx0XHRcdFx0XHRAcmlwcGxlLm1pZFkgPSBldi5vZmZzZXRZXG5cdFx0XHRcdFx0QHJpcHBsZS5zaXplID0gKEBvcHRpb25zLmxhYmVsVGV4dC5sZW5ndGggKiA4LjUgKyAxNiArIDE2KSAqIDEuNVxuXHRcdFx0XG5cdFx0XHRcdEByaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0QHJpcHBsZS5zY2FsZSA9IDAuNFxuXHRcdFx0XHRAcmlwcGxlLm9wYWNpdHkgPSAwLjNcblx0XHRcdFx0XG5cdFx0XHRcdHJpcHBsZUEgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0bGF5ZXI6XHRAcmlwcGxlXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHNjYWxlOiAwLjhcblx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblx0XHRcdFx0XHRcblx0XHRcdFx0cmlwcGxlQiAgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRsYXllcjpcdEByaXBwbGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdHNjYWxlOiAxXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cdFx0XHRcdFx0XG5cdFx0XHRcdHJpcHBsZUEuc3RhcnQoKVxuXHRcdFx0XHRcblx0XHRcdFx0cmlwcGxlQS5vbkFuaW1hdGlvbkVuZCAtPlxuXHRcdFx0XHRcdHJpcHBsZUIuc3RhcnQoKVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDMuIFJhaXNlZEJ1dHRvbiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuUmFpc2VkQnV0dG9uIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG4jLS0tLS0tIERlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTsnKVxuXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiUmFpc2VkIGJ1dHRvblwiXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdEBvcHRpb25zLmRpc2FibGVkID89IGZhbHNlXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0QG9wdGlvbnMuZGlyZWN0aW9uUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5oZWlnaHQgPSA0OFxuXHRcdEBvcHRpb25zLmRpc2FibGVSaXBwbGUgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblx0XHRAb3B0aW9ucy5mb250V2VpZ2h0ID89IDYwMFxuXHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE0XG5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyB0cnVlXHRcdFx0XG5cdFx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0XHRAZGlzYWJsZWRfQkcgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4xMilcIlxuXHRcdFx0XHRAZGlzYWJsZWRfbGFiZWxDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjMpXCJcblx0XHRcdGVsc2Vcblx0XHRcdFx0QGRpc2FibGVkX0JHID0gXCJyZ2JhKDAsMCwwLDAuMTIpXCJcblx0XHRcdFx0QGRpc2FibGVkX2xhYmVsQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4yNilcIlxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdGNvbG9yOiBcIlwiXG5cdFx0XHRib3JkZXJSYWRpdXMgOiAyXG5cdFx0XHRuYW1lOiBcIlJhaXNlZCBidXR0b25cIlxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLmxhYmVsVGV4dC5sZW5ndGggKiAoKEBvcHRpb25zLmZvbnRTaXplICsgMykgLyAyKSArIDE2ICsgMTZcblx0XHRcblx0XHRpZiBAb3B0aW9ucy53aWR0aCA8IDg4XG5cdFx0XHRAb3B0aW9ucy53aWR0aCA9IDg4XG5cdFx0XHRcblx0XHRpZiBAb3B0aW9ucy5kZW5zZSBpcyB0cnVlXG5cdFx0XHRAYnV0dG9uSGVpZ2h0ID0gMzJcblx0XHRlbHNlXG5cdFx0XHRAYnV0dG9uSGVpZ2h0ID0gMzZcblx0XHRcbiMtLS0tLS0tU2hhZG93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAc2hhZG93ID0gbmV3IFNoYWRvd1xuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRuYW1lOiBcInNoYWRvd3NcIlxuXHRcdFx0XHRcblxuXG4jLS0tLS0tLWhvdmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QGJ0dG5CRyA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdGJvcmRlclJhZGl1czogMlxuXHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0bmFtZTogXCJvdmVybGF5XCJcblxuIy0tLS0tLS1yaXBwbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAcmlwcGxlQkcgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAYnV0dG9uSGVpZ2h0XG5cdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRib3JkZXJSYWRpdXM6IDJcblx0XHRcdG5hbWU6IFwicmlwcGxlIHBhcmVudFwiXG5cdFx0XHRjbGlwOiB0cnVlXHRcdFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cblx0XHRcdFxuXHRcdEByaXBwbGUgPSBuZXcgIExheWVyXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwJVwiXG5cdFx0XHRzaXplOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuXHRcdFx0c2NhbGU6MC4zXG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRuYW1lOiBcInJpcHBsZVwiXG5cdFx0XHRcblx0XHRAcmlwcGxlQ29sb3IgPSBAcmlwcGxlLmJhY2tncm91bmRDb2xvclxuXHRcdFxuIy0tLS0tLS1sYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXIgXG5cdFx0XHR0ZXh0IDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuZm9udFNpemVcblx0XHRcdHRleHRUcmFuc2Zvcm06IFwiVXBwZXJjYXNlXCJcblx0XHRcdGNvbG9yOiBcIiNmZmZcIlxuXHRcdFx0Zm9udFdlaWdodDogQG9wdGlvbnMuZm9udFdlaWdodFxuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0bGV0dGVyU3BhY2luZzogQG9wdGlvbnMubGV0dGVyU3BhY2luZ1xuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0tc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEByaXBwbGVCRy5wYXJlbnQgPSBAc2hhZG93LnBhcmVudCA9IEBidHRuQkcucGFyZW50ID0gICBAXG5cdFx0XG5cdFx0QHNoYWRvdy55ID0gQGJ0dG5CRy55ID0gQHJpcHBsZUJHLnkgPSBBbGlnbi5jZW50ZXJcblx0XHRcblx0XHRAcmlwcGxlLnBhcmVudCA9IEByaXBwbGVCR1xuXHRcdEByaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdEByaXBwbGUueSA9XHRBbGlnbi5jZW50ZXJcblx0XHRcblx0XHRAbGFiZWwueCA9IEFsaWduLmNlbnRlclxuXHRcdEBsYWJlbC55ID0gQWxpZ24uY2VudGVyKDEpXG5cdFx0XG5cdFx0aWYgQGRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcdEByaXBwbGUuZGVzdHJveSgpXG5cdFx0XHRcdFxuIy0tLS0tLS0tLUV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QC5vbkNsaWNrIEBjbGlja2VkXG5cdFx0QC5vbk1vdXNlT3ZlciBASG92ZXJcblx0XHRALm9uTW91c2VPdXQgQEhvdmVyT2ZmXG5cdFx0QC5vbk1vdXNlRG93biBAbW91c2VEb3duXG5cdFx0QC5vbk1vdXNlVXAgQG1vdXNlVXBcblx0XHRcdFxuIy0tLS0tLS0tLWdldHRlcnMgJiBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnZGlzYWJsZWQnLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5kaXNhYmxlZFxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBvcHRpb25zLmRpc2FibGVkID0gdmFsdWVcblx0XHRcdFxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAZGlzYWJsZWRfbGFiZWxDb2xvclxuXHRcdFx0XHRAc2hhZG93LmJhY2tncm91bmRDb2xvciA9IEBkaXNhYmxlZF9CR1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc2hhZG93LmJhY2tncm91bmRDb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3IgXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IFwiI2ZmZlwiXG5cbiMtLS0tLS0tLS1FdmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFxuXHRIb3ZlcjogPT5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0QGJ0dG5CRy5vcGFjaXR5ID0gMC4xMlxuXHRcdFx0Zm9yIGl0ZW0gaW4gQHNoYWRvdy5hcnJheVxuXHRcdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2ggXCJfOGRwXCJcblx0SG92ZXJPZmY6ID0+XG5cdFx0QGJ0dG5CRy5vcGFjaXR5ID0gMFxuXHRcdGZvciBpdGVtIGluIEBzaGFkb3cuYXJyYXlcblx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaCBcIl8yZHBcIlxuXHRcblx0bW91c2VEb3duOiAtPlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlXG5cdFx0XHRAYnJpZ2h0bmVzcyA9IDgwXG5cdFx0XHRAYnR0bkJHLm9wYWNpdHkgPSAwXG5cdG1vdXNlVXA6IC0+XG5cdFx0QGJyaWdodG5lc3MgPSAxMDBcblx0XG5cdGNsaWNrZWQ6IChldikgLT5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZSBcblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcblx0XHRcdFx0aWYgQG9wdGlvbnMuZGlyZWN0aW9uUmlwcGxlIGlzIHRydWVcblx0XHRcdFx0XHRAcmlwcGxlLm1pZFggPSBldi5vZmZzZXRYXG5cdFx0XHRcdFx0QHJpcHBsZS5taWRZID0gZXYub2Zmc2V0WVxuXHRcdFx0XHRcdEByaXBwbGUuc2l6ZSA9IChAb3B0aW9ucy5sYWJlbFRleHQubGVuZ3RoICogOC41ICsgMTYgKyAxNikgKiAxLjVcblx0XHRcdFxuXHRcdFx0XHRAcmlwcGxlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdEByaXBwbGUuc2NhbGUgPSAwLjRcblx0XHRcdFx0QHJpcHBsZS5vcGFjaXR5ID0gMC4zXG5cblx0XHRcdFx0cmlwcGxlQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjpcdEByaXBwbGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0XHRcdFxuXHRcdFx0XHRyaXBwbGVCICA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOlx0QHJpcHBsZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblx0XHRcdFx0XHRcblx0XHRcdFx0cmlwcGxlQS5zdGFydCgpXG5cblx0XHRcdFx0cmlwcGxlQS5vbkFuaW1hdGlvbkVuZCAtPlxuXHRcdFx0XHRcdHJpcHBsZUIuc3RhcnQoKVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDQuIEZBQiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuRkFCIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBEZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRwZCA9IDI0XG5cdFx0ZWxzZSBwZCA9IDE2XG5cdFx0XG5cdFx0QG9wdGlvbnMubWluaSA/PSBmYWxzZVxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLm1pbmkgaXMgdHJ1ZSBvciBTY3JlZW4ud2lkdGggPCA0NjBcblx0XHRcdEBvcHRpb25zLndpZHRoID89IDQwXG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gNDBcblx0XHRlbHNlXG5cdFx0XHRAb3B0aW9ucy53aWR0aCA/PSA1NlxuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDU2XG5cdFx0XG5cdFx0QG9wdGlvbnMueCA/PSBTY3JlZW4ud2lkdGggLSAoQG9wdGlvbnMud2lkdGggKyBwZClcblx0XHRAb3B0aW9ucy55ID89IFNjcmVlbi5oZWlnaHQgLSAoQG9wdGlvbnMud2lkdGggKyBwZClcblx0XHRcdFxuXHRcdEBvcHRpb25zLmJvcmRlclJhZGl1cyA9IFwiMTAwJVwiXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QG9wdGlvbnMuaWNvbiA/PSBcImFkZFwiXG5cbiMtLS0tLS0gb3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QG92ZXJsYXkgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMTIpXCJcblx0XHRcdHZpc2libGU6IGZhbHNlXHRcblx0XHRcdG5hbWU6IFwib3ZlcmxheVwiXG5cbiMtLS0tLS0gc2hhZG93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QHNoYWRvdyA9IG5ldyBTaGFkb3dcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRuYW1lOiBcInNoYWRvd1wiXG5cblx0XHRAc2hhZG93LnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzZkcFwiXG5cdFx0QHNoYWRvdy5wZW51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl82ZHBcIlxuXHRcdEBzaGFkb3cuYW1iaWVudC5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl82ZHBcIlxuXG4jLS0tLS0tIGljb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBpY29uID0gbmV3IFN5c3RlbUljb25cblx0XHRcdHdpZHRoOiAyNFxuXHRcdFx0aGVpZ2h0OiAyNFxuXHRcdFx0aWNvbjogQG9wdGlvbnMuaWNvblxuXHRcdFx0Y29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRuYW1lOiBcImljb25cIlxuXHRcdFxuIy0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGljb24ucGFyZW50ID0gQG92ZXJsYXkucGFyZW50ID0gQHNoYWRvdy5wYXJlbnQgPSAgQFxuXHRcdEBpY29uLmNlbnRlcigpXG5cbiMtLS0tLS0gZXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0QC5vbk1vdXNlT3ZlciBASG92ZXJcblx0XHRcdEAub25Nb3VzZU91dCBASG92ZXJPZmZcblx0XHRcdEBvbk1vdXNlRG93biBAbW91c2VEb3duXG5cdFx0XHRAb25Nb3VzZVVwIEBtb3VzZVVwXG5cdFx0ZWxzZVxuXHRcdFx0QG9uVGFwU3RhcnQgQG1vdXNlRG93blxuXHRcdFx0QG9uVGFwRW5kIEBtb3VzZVVwXG5cbiMtLS0tLS0gZXZlbnQgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdEhvdmVyOiAtPlxuXHRcdEBzaGFkb3cudW1icmEuc3RhdGVzLnN3aXRjaCBcIl8xMmRwXCJcblx0XHRAc2hhZG93LnBlbnVtYnJhLnN0YXRlcy5zd2l0Y2ggXCJfMTJkcFwiXG5cdFx0QHNoYWRvdy5hbWJpZW50LnN0YXRlcy5zd2l0Y2ggXCJfMTJkcFwiXG5cblx0SG92ZXJPZmY6IC0+XG5cdFx0QHNoYWRvdy51bWJyYS5zdGF0ZXMuc3dpdGNoIFwiXzZkcFwiXG5cdFx0QHNoYWRvdy5wZW51bWJyYS5zdGF0ZXMuc3dpdGNoIFwiXzZkcFwiXG5cdFx0QHNoYWRvdy5hbWJpZW50LnN0YXRlcy5zd2l0Y2ggXCJfNmRwXCJcblxuXHRtb3VzZURvd246IC0+XG5cdFx0QG92ZXJsYXkudmlzaWJsZSA9IHRydWVcblx0XHRAc2hhZG93LnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzEyZHBcIlxuXHRcdEBzaGFkb3cucGVudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMTJkcFwiXG5cdFx0QHNoYWRvdy5hbWJpZW50LnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzEyZHBcIlxuXG5cdG1vdXNlVXA6IC0+XG5cdFx0QG92ZXJsYXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0QHNoYWRvdy51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl82ZHBcIlxuXHRcdEBzaGFkb3cucGVudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfNmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfNmRwXCJcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA1LiBDaGVja2JveGVzICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5DaGVja2JveGVzIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG4jLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdHRoZW1lID0gQG9wdGlvbnMudGhlbWVcblx0XHRAb3B0aW9ucy5uYW1lID89IFwiY2hlY2tib3hlc1wiXG5cblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0XG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBvcHRpb25zLnNjcmVlbkNvbG9yID89IFwiIzIxMjEyMVwiXG5cdFx0ZWxzZVxuXHRcdFx0QG9wdGlvbnMuc2NyZWVuQ29sb3IgPz0gXCIjZmZmXCJcblx0XHRcdFxuXHRcdCNsYWJlbCBjaG9pY2VzXG5cdFx0QG9wdGlvbnMuY2hvaWNlcyA/PSBbXCJhcHBsZXNcIiwgXCJiYW5hbmFzXCIsIFwiZ3JhcGVzXCJdXG5cblx0XHRAb3B0aW9ucy5jaGVja1kgPz0gLTVcblxuIy0tLS0tLSBjb2xvcnMgXG5cdFx0QHRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQHRoZW1lQ29sb3Jcblx0XHRcblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9kYXJrXG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2Rhcmtcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2xpZ2h0IFxuXHRcdFx0QGJveENvbG9yID0gbGluZV9saWdodFxuXHRcdGJveENvbG9yID0gQGJveENvbG9yXG5cdFxuXHRcdCN0ZXh0IHN0eWxpbmdcblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cdFx0XG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiU2VsZWN0IGZydWl0XCJcblxuXHRcdCNEZWZhdWx0IHByb3BlcnRpZXNcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5jaG9pY2VzLmxlbmd0aCAqIDM2ICsgMzJcblx0XHRcdHdpZHRoIDogMTUwXG5cdFx0XHRcbiMtLS0tLS0gUXVlc3Rpb24gIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QGxhYmVsID0gbmV3IExhYmVsXG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0gU3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cblx0XHRjaGVja1kgPSBAb3B0aW9ucy5jaGVja1lcblxuIy0tLS0tLSB0aW1lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dDEgPSAwLjJcblx0XHR0MiA9IDAuMlxuXG4jLS0tLS0tIGxvb3AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Y2hlY2tzID0gW11cblxuXHRcdGZvciBpIGluIFswLi4uQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGhdXG5cbiMtLS0tLS0gY2hlY2tib3ggY29udGFpbmVyIFxuXHRcdFx0Y29udCA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6QFxuXHRcdFx0XHRoZWlnaHQ6IDQwXG5cdFx0XHRcdHk6IGkgKiA0MCArIDI0XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHR4OiAxNlxuXHRcdFx0XHRuYW1lOiBcImNvbnRhaW5lclwiXG5cbiMtLS0tLS0gYm94IHNldHRpbmdzIFxuXHRcdFx0Ym94ID0gbmV3IExheWVyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdFx0c2l6ZSA6IDIwXG5cdFx0XHRcdGJvcmRlclJhZGl1cyA6IDJcblx0XHRcdFx0Ym9yZGVyV2lkdGggOiAyXG5cdFx0XHRcdGJvcmRlckNvbG9yIDogQGJveENvbG9yXG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRcdG5hbWU6IEBvcHRpb25zLmNob2ljZXNbaV1cblx0XHRcdFx0eTogQWxpZ24uY2VudGVyXG5cdFx0XHRcdG5hbWU6IEBvcHRpb25zLmNob2ljZXNbaV1cblx0XHRcdFx0XG5cdFx0XHRib3guYW5pbWF0aW9uT3B0aW9ucyA9IFxuXHRcdFx0XHR0aW1lOiB0MVxuXHRcdFx0XHRcblx0XHRcdGJveC5zdGF0ZXMgPVxuXHRcdFx0XHRzZWxlY3RlZDpcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRkZXNlbGVjdGVkOlxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiBAYm94Q29sb3Jcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBib3hDb2xvclxuXHRcdFx0XHRcdFx0XG5cdFx0XHRib3guc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJkZXNlbGVjdGVkXCJcblx0XHRcdGJveC5iYWNrZ3JvdW5kQ29sb3IgPSBAb3B0aW9ucy5zY3JlZW5Db2xvclxuXHRcdFx0XHRcbiMtLS0tLS0gYm94IENpcmNsZSBzZXR0aW5ncyBcbiMtLS0tLS0gVGhpcyBjcmVhdGUgdGhlIGNpcmNsZSBhbmltYXRpb24gd2l0aGluIHRoZSBib3hcblx0XHRcdGJveENpcmNsZSA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IGJveFxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwJVwiXG5cdFx0XHRcdHNpemU6IDMwXG5cdFx0XHRcdHNjYWxlOiAwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQHNjcmVlbkNvbG9yXG5cdFx0XHRcdHg6IEFsaWduLmNlbnRlcigyKVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoMilcblx0XHRcdFx0bmFtZTogXCJvdmVybGF5XCJcblx0XHRcdFxuXHRcdFx0Ym94Q2lyY2xlLmFuaW1hdGlvbk9wdGlvbnMgPSBcblx0XHRcdFx0dGltZTogdDFcblx0XHRcdFxuXHRcdFx0Ym94Q2lyY2xlLnN0YXRlcyA9IFxuXHRcdFx0XHRzZWxlY3RlZDpcblx0XHRcdFx0XHRzY2FsZTogMFxuXHRcdFx0XHRkZXNlbGVjdGVkOlxuXHRcdFx0XHRcdHNjYWxlOiAxXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy5zY3JlZW5Db2xvclx0XHRcdFx0XG5cbiMtLS0tLS0gY2hlY2sgbWFzayBzZXR0aW5ncyBcbiMtLS0tLS0gVGhpcyBjcmVhdGUgZHJhd2luZyBpbiBlZmZlY3QgZm9yIHRoZSBjaGVja1xuXHRcdFx0Y2hlY2tNYXNrID0gbmV3IExheWVyXG5cdFx0XHRcdHdpZHRoOiAwXG5cdFx0XHRcdGhlaWdodDogMjBcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRcdHBhcmVudDogYm94XG5cdFx0XHRcdHk6IGNoZWNrWVxuXHRcdFx0XHR4OiAzLjVcblx0XHRcdFx0cGFyZW50OiBib3hcblx0XHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0XHRuYW1lOiBcImNoZWNrIG1hc2tcIlxuXHRcdFx0XG5cdFx0XHRjaGVja01hc2suc3RhdGVzLnNlbGVjdGVkID1cblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHR3aWR0aDoyMFxuXHRcdFx0XHR0aW1lOiB0MlxuXHRcdFx0XHRcdFxuXHRcdFx0Y2hlY2tNYXNrLnN0YXRlcy5kZXNlbGVjdGVkID1cblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHR3aWR0aDogMFxuXHRcdFx0XHR0aW1lOiAwLjAxXG5cdFx0XHRcdFxuXHRcdFx0Y2hlY2tNYXNrLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblx0XHRcbiMtLS0tLS0gY2hlY2sgc2V0dGluZ3MgXG5cdFx0XHRjaGVjayA9IG5ldyBMYXllclxuXHRcdFx0XHRodG1sOiAnPHN2ZyB3aWR0aD1cIjEzcHhcIiBoZWlnaHQ9XCIxMHB4XCIgdmlld0JveD1cIjAgMCAxMyAxMFwiPjxnIGlkPVwiQ29tcG9uZW50c1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cG9seWxpbmUgaWQ9XCJQYXRoLTJcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHBvaW50cz1cIjEgNS4yNSA0IDkgMTIgMS41XCI+PC9wb2x5bGluZT48L2c+PC9zdmc+J1xuXHRcdFx0XHR3aWR0aDogMjBcblx0XHRcdFx0aGVpZ2h0OiAyMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0cGFyZW50OiBjaGVja01hc2tcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHR5OiAwXG5cdFx0XHRcdG5hbWU6IFwiY2hlY2tcIlxuXHRcdFx0XHRcblx0XHRcdGNoZWNrLnN0eWxlID1cblx0XHRcdFx0Zm9udFNpemU6IFwiMThweFwiXG5cdFx0XHRcdFxuIy0tLS0tLSBSaXBwbGUgc2V0dGluZ3MgXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cdFx0XHRcblx0XHRcdFx0cmlwcGxlID0gbmV3IExheWVyXG5cdFx0XHRcdFx0c2l6ZTogNTBcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwcHhcIlxuXHRcdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRcdHg6IC0xNVxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuM1xuXHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRyaXBwbGUuc3RhdGVzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwibGlnaHRcIlxuXHRcdFx0XHRcdHJpcHBsZS5zdGF0ZXMuZGVzZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdFx0XHRyaXBwbGUuc3RhdGVzLmRlc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuXHRcdFx0XHRcdFxuIy0tLS0tLSBjaG9pc2UgbGFibGVzIHNldHRpbmdzIFxuXHRcdFx0Y2hvaWNlX2xhYmVsID0gbmV3IExhYmVsXG5cdFx0XHRcdHRleHQ6IEBvcHRpb25zLmNob2ljZXNbaV1cblx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdHg6IDMwXG5cdFx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoLTAuNSlcblx0XHRcdFx0bmFtZTogXCJjaG9pY2UgcmlwcGxlXCJcblxuIy0tLS0tLSBwb3B1bGF0aW5nIGNoZWNrcyBhcnJheSBcblx0XHRcdGNoZWNrcy5wdXNoKGJveClcblx0XHRcdFxuIy0tLS0tLSBjcmVhdGluZyBuZXcgYXJyYXkgdG8gc2VlIHdoYXQgY2hlY2tzIGFyZSBzZWxlY3RlZCBcblx0XHRcdGFvID0gQG9wdGlvbnNcblx0XHRcdGRwID0gQG9wdGlvbnMuZGlzYWJsZVJpcHBsZVxuXHRcdFx0YW8uYWN0aXZlU2VsZWN0aW9uID0gW11cblxuIy0tLS0tLSBldmVudCBvbiBDbGljayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdGNvbnQub25DbGljayAtPlxuXG4jLS0tLS0tIGV2ZW50IHNldHVwIFxuXHRcdFx0XHRhby5hY3RpdmVTZWxlY3Rpb24gPSBbXSAjZW1wdHkgYXJyYXlcblx0XHRcdFx0XG5cdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0cFJpcHBsZSA9IHRoaXMuY2hpbGRyZW5bMV1cblx0XHRcdFx0cENoZWNrTWFzayA9ICB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdXG5cdFx0XHRcdHBCb3ggPSB0aGlzLmNoaWxkcmVuWzBdXG5cdFx0XHRcdHBCb3hDaXJjbGUgPSAgdGhpcy5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuXHRcdFx0XHRcbiMtLS0tLS0gYm94IGFuZCBjaGVjayBhbmltYXRpb24gXG5cdFx0XHRcdHBCb3guc3RhdGVDeWNsZShcInNlbGVjdGVkXCIsIFwiZGVzZWxlY3RlZFwiKVxuXHRcdFx0XHRwQm94Q2lyY2xlLnN0YXRlQ3ljbGUoXCJzZWxlY3RlZFwiLCBcImRlc2VsZWN0ZWRcIilcblx0XHRcdFx0XG5cdFx0XHRcdGlmIHBCb3guc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdFx0cFJpcHBsZS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRVdGlscy5kZWxheSB0MSwgLT5cblx0XHRcdFx0XHRcdHBDaGVja01hc2suc3RhdGVzLnN3aXRjaCBcInNlbGVjdGVkXCJcblx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdFx0cFJpcHBsZS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdHBDaGVja01hc2suc3RhdGVzLnN3aXRjaCBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XHRcblx0XHRcdFx0IyBwb3B1bGF0ZXMgYXJyYXkgdG8gc2VlIHNlbGVjdGVkIGl0ZW1zXG5cdFx0XHRcdGZvciBib3ggaW4gY2hlY2tzXG5cdFx0XHRcdFx0aWYgYm94LnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJzZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRhby5hY3RpdmVTZWxlY3Rpb24ucHVzaChib3gubmFtZSlcblx0XHRcdFx0XG4jLS0tLS1cdHBSaXBwbGUgYW5pbWF0aW9uIFxuXHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdHBSaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRwUmlwcGxlLnNjYWxlID0gMC40XG5cdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC40XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWZcdHBSaXBwbGUuc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdHBSaXBwbGUub3BhY2l0eSA9IDAuOFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHB1bHNhQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOlx0cFJpcHBsZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHBSaXBwbGVCID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdFx0XHRsYXllcjpcdHBSaXBwbGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRwdWxzYUEuc3RhcnQoKVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRwdWxzYUEub25BbmltYXRpb25FbmQgLT5cblx0XHRcdFx0XHRcdHBSaXBwbGVCLnN0YXJ0KClcblx0XHRcdFx0XHRcbiMtLS0tLS0gZXZlbnQgaG92ZXIgXG5cdFx0XHRjb250Lm9uTW91c2VPdmVyIC0+XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5bMF0uYm9yZGVyQ29sb3IgPSB0aGVtZUNvbG9yXG5cblx0XHRcdGNvbnQub25Nb3VzZU91dCAtPlxuXHRcdFx0XHRpZiB0aGlzLmNoaWxkcmVuWzBdLnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJkZXNlbGVjdGVkXCJcblx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuWzBdLmJvcmRlckNvbG9yID0gYm94Q29sb3JcblxuIy0tLS0tLSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRAZGVmaW5lICd0aGVtZUNvbG9yJyxcblx0XHRnZXQ6IC0+IFxuXHRcdFx0QG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2Nob2ljZXMnLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5jaG9pY2VzXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuY2hvaWNlcyA9IHZhbHVlXG5cdFx0XHRcblx0QGRlZmluZSAnYWN0aXZlU2VsZWN0aW9uJyxcblx0XHRnZXQ6IC0+IFxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uID0gdmFsdWVcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA2LiBSYWRpb0J1dHRvbnMgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuUmFkaW9CdXR0b25zIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdFxuIy0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHR0aGVtZSA9IEBvcHRpb25zLnRoZW1lXG5cblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0XG5cdFx0I2xhYmVsIGNob2ljZXNcblx0XHRAb3B0aW9ucy5jaG9pY2VzID89IFtcImFwcGxlc1wiLCBcImJhbmFuYXNcIiwgXCJncmFwZXNcIl1cblxuIy0tLS0tLS0gY29sb3JzIFxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvciBcblx0XHRcblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9kYXJrXG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2Rhcmtcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2xpZ2h0XG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3JcblxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSAgXCJTZWxlY3QgZnJ1aXRcIlxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGggKiAzNiArIDMyXG5cdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFx0bmFtZTogXCJSYWRpb0J1dHRvbnNcIlxuXHRcdFx0XG4jLS0tLS0tIFF1ZXN0aW9uIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxhYmVsID0gbmV3IExhYmVsXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0gU3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblxuXHRcdGwgPSBAb3B0aW9ucy5jaG9pY2VzXG5cbiMtLS0tLS0gbG9vcCBhbmQgYXJyYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0Y2hlY2tzID0gW11cblx0XHRjaXJjbGVzID0gW11cblx0XHRcblx0XHRmb3IgaSBpbiBbMC4uLkBvcHRpb25zLmNob2ljZXMubGVuZ3RoXVxuXG5cdFx0XHRjb250ID0gbmV3IExheWVyXG5cdFx0XHRcdGhlaWdodDogNDBcblx0XHRcdFx0eTogNDAgKiBpICsgMjRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRcdHBhcmVudDogQFxuXHRcdFx0XHRuYW1lOiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHg6IDE2XG5cbiMtLS0tLS0gY2lyY2xlIFxuXG5cdFx0XHRjaXJjbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0XHRzaXplIDogMjBcblx0XHRcdFx0Ym9yZGVyUmFkaXVzIDogXCIxMDAlXCJcblx0XHRcdFx0Ym9yZGVyV2lkdGggOiAyXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBAYm94Q29sb3Jcblx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRuYW1lOiBcImNpcmNsZVwiXG5cdFx0XHRcblx0XHRcdGNpcmNsZS5hbmltYXRpb25PcHRpb25zID0gXG5cdFx0XHRcdHRpbWU6IDAuMDAxXG5cdFx0XG5cdFx0XHRjaXJjbGUuc3RhdGVzID1cblx0XHRcdFx0c2VsZWN0ZWQ6XG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IHRoZW1lQ29sb3Jcblx0XHRcdFx0ZGVzZWxlY3RlZDpcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogQGJveENvbG9yXG5cdFx0XG5cdFx0XHRjaXJjbGVzLnB1c2goY2lyY2xlKVxuXHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblx0XHRcdFxuXHRcdFx0aWYgaSBpcyBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXG4jLS0tLS0tIGNoZWNrIFxuXG5cdFx0XHRjaGVjayA9IG5ldyBMYXllclxuXHRcdFx0XHR3aWR0aDogMTBcblx0XHRcdFx0aGVpZ2h0OiAxMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBjaXJjbGUuYm9yZGVyUmFkaXVzXG5cdFx0XHRcdHBhcmVudDogY2lyY2xlXG5cdFx0XHRcdHg6IDVcblx0XHRcdFx0eTogNVxuXHRcdFx0XHRuYW1lOiBpXG5cdFx0XHRcblx0XHRcdGNoZWNrLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRcdFx0XHR0aW1lOiAwLjE3XG5cdFx0XHRcblx0XHRcdGNoZWNrLnN0YXRlcyA9XG5cdFx0XHRcdHNlbGVjdGVkOlxuXHRcdFx0XHRcdHNjYWxlOiAxXG5cdFx0XHRcdGRlc2VsZWN0ZWQ6XG5cdFx0XHRcdFx0c2NhbGU6IDBcblx0XHRcdFx0XHRcblx0XHRcdGNoZWNrLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcblx0XHRcdGNoZWNrcy5wdXNoKGNoZWNrKVxuXHRcdFx0XG5cdFx0XHRpZiBpIGlzIEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvblxuXHRcdFx0XHRjaGVjay5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcInNlbGVjdGVkXCJcblx0XHRcdFx0XG4jLS0tLS0tIHJpcHBsZSBzZXR0aW5ncyBcblx0XHRcdFxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXHRcdFx0XG5cdFx0XHRcdHJpcHBsZSA9IG5ldyBMYXllclxuXHRcdFx0XHRcdHNpemU6IDUwXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwMHB4XCJcblx0XHRcdFx0XHRwYXJlbnQ6IGNpcmNsZVxuXHRcdFx0XHRcdHk6IEFsaWduLmNlbnRlcigyKVxuXHRcdFx0XHRcdHg6IEFsaWduLmNlbnRlcigyKVxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuMTJcblx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblx0XHRcdFx0XHRcdFx0XHRcbiMtLS0tLS0gY2hvaWNlIFxuXG5cdFx0XHRjaG9pY2VfbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdFx0dGV4dDogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHRwYXJlbnQ6IGNvbnRcblx0XHRcdFx0eDogMzBcblx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdHk6IC0wLjVcblx0XHRcdFx0eTogQWxpZ24uY2VudGVyXG5cdFx0XHRcdG5hbWU6IFwiY2hvaWNlIGxhYmVsXCJcblxuIy0tLS0tLSBoZWxwZXIgXG5cblx0XHRcdGhlbHBlciA9IG5ldyBMYXllclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0aGVpZ2h0OiA1XG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHR3aWR0aDogaVxuXHRcdFx0XHRuYW1lOiBcImhlbHBlclwiXG5cbiMtLS0tLS0gZXZlbnRcblxuXHRcdFx0QGFjdGl2ZVNlbGVjdGlvbiA9IG51bGxcblx0XHRcdGJiID0gQGFjdGl2ZVNlbGVjdGlvblxuXHRcdFx0ZHAgPSBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlXG5cdFx0XHRvYyA9IEB0aGVtZUNvbG9yXG5cdFxuXHRcdFx0Y29udC5vbkNsaWNrIC0+XG5cdFx0XHRcdFxuXHRcdFx0XHRwUmlwcGxlID0gdGhpcy5jaGlsZHJlblswXS5jaGlsZHJlblsxXVxuXHRcdFx0XHRwQ2hlY2sgPSB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0XHRcdHBDaXJjbGUgPSB0aGlzLmNoaWxkcmVuWzBdXG5cdFx0XHRcdFxuXHRcdFx0XHRmb3IgY2hlY2sgaW4gY2hlY2tzXG5cdFx0XHRcdFx0aWYgY2hlY2submFtZSBpcyBwQ2hlY2submFtZVxuXHRcdFx0XHRcdFx0cENoZWNrLnN0YXRlcy5zd2l0Y2ggXCJzZWxlY3RlZFwiXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0Y2hlY2suc3RhdGVzLnN3aXRjaCBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XHRmb3IgY2lyY2xlIGluIGNpcmNsZXNcblx0XHRcdFx0XHRjaXJjbGUuc3RhdGVzLnN3aXRjaCBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XHRcblx0XHRcdFx0cENpcmNsZS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0YmIgPSB0aGlzLm5hbWVcblx0XHRcdFx0XG4jLS0tLS0tIHJpcHBsZSBhbmltYXRpb24gXG5cblx0XHRcdFx0aWYgZHAgaXMgZmFsc2Vcblx0XHRcdFx0XHRwUmlwcGxlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0cFJpcHBsZS5zY2FsZSA9IDAuNFxuXHRcdFx0XHRcdHBSaXBwbGUub3BhY2l0eSA9IDAuMlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIHBSaXBwbGUuc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdHBSaXBwbGUub3BhY2l0eSA9IDAuM1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFJpcHBsZUEgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRsYXllcjogcFJpcHBsZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFJpcHBsZUIgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRsYXllcjogcFJpcHBsZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRSaXBwbGVBLnN0YXJ0KClcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRSaXBwbGVBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0XHRSaXBwbGVCLnN0YXJ0KClcblxuIy0tLS0tLSBldmVudCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFx0Y29udC5vbk1vdXNlT3ZlciAtPlxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuWzBdLmJvcmRlckNvbG9yID0gdGhlbWVDb2xvclxuXHRcdFx0XG5cdFx0XHRjb250Lm9uTW91c2VPdXQgLT5cblx0XHRcdFx0aWYgdGhpcy5jaGlsZHJlblswXS5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFx0dGhpcy5jaGlsZHJlblswXS5ib3JkZXJDb2xvciA9IGJveENvbG9yXG5cdFx0XHRcdFxuXHRcdFx0QG9uQ2xpY2sgLT4gXG5cdFx0XHRcdEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvbiA9IGJiXG5cdFx0XHRcdFxuIy0tLS0tLSBnZXR0ZXIgYW5kIHNldHRlciAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdhY3RpdmVTZWxlY3Rpb24nLFxuXHRcdGdldDogLT4gQG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvbiA9IHZhbHVlXG5cblx0QGRlZmluZSAndGhlbWUnLFxuXHRcdGdldDogLT4gQG9wdGlvbnMudGhlbWVcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQG9wdGlvbnMudGhlbWUgPSB2YWx1ZVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDcuIFN3aXRjaCAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLlN3aXRjaCBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XG4jLS0tLS0tIEN1c3RvbWUgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QG9wdGlvbnMuZGlzYWJsZVJpcHBsZSA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmFjdGl2ZU9uU3RhcnQgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5hY3RpdmUgPz0gZmFsc2Vcblx0XHRcblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHR0aGVtZSA9IEBvcHRpb25zLnRoZW1lXG5cbiMtLS0tLS0gY29sb3JzIFxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0aHVtYkNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0cmFja0NvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0aHVtYl9saWdodF9vZmYgPSBcIiNGQUZBRkFcIlxuXHRcdEB0aHVtYl9kYXJrX29mZiA9IFwiI2JkYmRiZFwiXG5cdFx0QHRyYWNrX2xpZ2h0X29mZiA9IFwicmdiYSgwLDAsMCwwLjM4KVwiXG5cdFx0QHRyYWNrX2Rhcmtfb2ZmID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIlxuXHRcdEByaXBwbGVfZGFya19vZmYgPSBcInJnYmEoMjU1LDI1NSwyNTUsIDEpXCJcblx0XHRAcmlwcGxlX2xpZ2h0X29mZiA9IFwicmdiYSgwLDAsMCwgMSlcIlxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2Rhcmtcblx0XHRcdEB0aHVtYk9mZiA9IEB0aHVtYl9kYXJrX29mZlxuXHRcdFx0QHRyYWNrT2ZmID0gQHRyYWNrX2Rhcmtfb2ZmXG5cdFx0XHRAcmlwcGxlT2ZmID0gQHJpcHBsZV9kYXJrX29mZlxuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfbGlnaHRcblx0XHRcdEB0aHVtYk9mZiA9IEB0aHVtYl9saWdodF9vZmZcblx0XHRcdEB0cmFja09mZiA9IEB0cmFja19saWdodF9vZmZcblx0XHRcdEByaXBwbGVPZmYgPSBAcmlwcGxlX2xpZ2h0X29mZlxuXHRcdFx0XG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTsnKVxuXHRcdFxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRoZWlnaHQ6IDQ4XG5cdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFxuIy0tLS0tLSB0cmFjayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEB0cmFjayA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDQwXG5cdFx0XHRoZWlnaHQ6IDE1XG5cdFx0XHRib3JkZXJSYWRpdXM6IDE1XG5cdFx0XHRuYW1lOiBcInRyYWNrXCJcblx0XHRAdHJhY2suYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOiAwLjJcblx0XHRcdFxuXHRcdEB0cmFjay5zdGF0ZXMgPVxuXHRcdFx0b246XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRvcGFjaXR5OiAwLjVcblx0XHRcdG9mZjpcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAdHJhY2tPZmZcblx0XHRcdFx0b3BhY2l0eTogMC4zOFxuXG5cdFx0ZGVsZXRlIEB0cmFjay5zdGF0ZXMuZGVmYXVsdFxuXHRcdEB0cmFjay5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIm9mZlwiXG5cbiMtLS0tLS0gcmlwcGxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEByaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdHNpemU6IDUwXG5cdFx0XHRzY2FsZTogMVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiA1MFxuXHRcdFx0b3BhY2l0eTogMC4yXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cbiMtLS0tLS0gdGh1bWIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHRodW1iID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiAxOVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAxMDBcblx0XHRcdG5hbWU6IFwidGh1bWJcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAdGh1bWJPZmZcblx0XHRAdGh1bWIuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOiAwLjNcblx0XHRcdFxuXHRcdEB0aHVtYi5zdGF0ZXMgPSBcblx0XHRcdG9uOlxuXHRcdFx0XHR4OiAyMVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdG9mZjpcblx0XHRcdFx0eDogMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEB0aHVtYk9mZlxuXG5cdFx0ZGVsZXRlIEB0aHVtYi5zdGF0ZXMuZGVmYXVsdFxuXHRcdEB0aHVtYi5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIm9mZlwiXG5cdFx0XG4jLS0tLS0tIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFxuIy0tLS0tLSBTdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QHRyYWNrLnBhcmVudCA9IEBcblx0XHRAdHJhY2sueSA9IEFsaWduLmNlbnRlclxuXHRcdFxuXHRcdEB0aHVtYi5wYXJlbnQgPSBAXG5cdFx0QHRodW1iLnkgPSBBbGlnbi5jZW50ZXJcblx0XHRcblx0XHRAbGFiZWwucGFyZW50ID0gQFxuXHRcdEBsYWJlbC54ID0gNTVcblx0XHRAbGFiZWwueSA9IEFsaWduLmNlbnRlclxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcdEByaXBwbGUucGFyZW50ID0gQHRodW1iXG5cdFx0XHRAcmlwcGxlLnggPSAtIDE1XG5cdFx0XHRAcmlwcGxlLnkgPSAtIDE1XG5cdFx0XHRyaXBwbGUgPSBAcmlwcGxlXG5cbiMtLS0tLS0gc2hhZG93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHRwYXJlbnQ6IEB0aHVtYlxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAxMDBcblx0XHRcdHdpZHRoOiBAdGh1bWIud2lkdGhcblx0XHRcdGhlaWdodDogQHRodW1iLndpZHRoXG5cdFx0XHRuYW1lOiBcInNoYWRvd1wiXG5cbiMtLS0tLS0gYWN0aXZlT25TdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIEBvcHRpb25zLmFjdGl2ZU9uU3RhcnQgaXMgdHJ1ZVxuXHRcdFx0QHRodW1iLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib25cIlxuXHRcdFx0QHRyYWNrLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib25cIlxuXHRcdFx0QGFjdGl2ZSA9IHRydWVcblxuIy0tLS0tLSByaXBwbGUgYW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cmlwcGxlQW5pID0gLT5cblx0XHRcdFxuXHRcdFx0cmlwcGxlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRyaXBwbGUuc2NhbGUgPSAwLjRcblx0XHRcdFxuXHRcdFx0cHVsc2FBID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRsYXllcjogcmlwcGxlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cdFx0XHRcdFxuXHRcdFx0cmlwcGxlQiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0bGF5ZXI6IHJpcHBsZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdHNjYWxlOiAxXG5cdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXHRcdFx0XHRcblx0XHRcdHB1bHNhQS5zdGFydCgpXG5cdFx0XHRcblx0XHRcdHB1bHNhQS5vbkFuaW1hdGlvbkVuZCAtPlxuXHRcdFx0XHRyaXBwbGVCLnN0YXJ0KClcblxuIy0tLS0tLSBldmVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdGF0ZSA9IG51bGxcblx0XHRcblx0XHRAb25DbGljayAtPlxuXHRcdFx0XG5cdFx0XHRAdHJhY2suc3RhdGVDeWNsZSgpXG5cdFx0XHRAdGh1bWIuc3RhdGVDeWNsZSgpXG5cdFx0XG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlIFxuXHRcdFx0XHRpZiBAdGh1bWIuc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcIm9uXCJcblx0XHRcdFx0XHRAcmlwcGxlLmJhY2tncm91bmRDb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0XHRAcmlwcGxlLm9wYWNpdHkgPSAwLjRcblx0XHRcdFx0XHRwb3NYID0gMjBcblx0XHRcdFx0XHRyaXBwbGVBbmkoKVxuXHRcdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHRydWVcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHBvc1ggPSAwXG5cdFx0XHRcdFx0QHJpcHBsZS5iYWNrZ3JvdW5kQ29sb3IgPSBAcmlwcGxlT2ZmXG5cdFx0XHRcdFx0QHJpcHBsZS5vcGFjaXR5ID0gMC4yXG5cdFx0XHRcdFx0cmlwcGxlQW5pKClcblx0XHRcdFx0XHRAb3B0aW9ucy5hY3RpdmUgPSBmYWxzZVxuXG5cdFx0XHRcblx0XHRcdGlmIEB0aHVtYi5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwib25cIlxuXHRcdFx0XHRAb3B0aW9ucy5hY3RpdmUgPSB0cnVlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcdFxuIy0tLS0tLSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnYWN0aXZlJyxcblx0XHRnZXQ6IC0+IFxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdmFsdWVcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA4LiBUZXh0RmllbGQgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgVGV4dEZpZWxkIGV4dGVuZHMgTGF5ZXJcblxuXHRJTlBVVF9ISURFX1BTVUVET19VSSAgPSBcInsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBkaXNwbGF5OiBub25lOyB9XCJcblx0SU5QVVRfU0VMRUNUT1JfTlVNQkVSID0gXCJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiXG5cdElOUFVUX1NFTEVDVE9SX1NFQVJDSCA9IFwiaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uXCJcblx0XG5cdEV2ZW50cy5JbnB1dCAgID0gXCJJbnB1dEZpZWxkLk9uSW5wdXRcIlxuXHRFdmVudHMuRm9jdXMgICA9IFwiSW5wdXRGaWVsZC5PbkZvY3VzXCJcblx0RXZlbnRzLkJsdXIgICAgPSBcIklucHV0RmllbGQuT25CbHVyXCJcblx0RXZlbnRzLlZhbGlkICAgPSBcIklucHV0RmllbGQuT25WYWxpZFwiXG5cdEV2ZW50cy5JbnZhbGlkID0gXCJJbnB1dEZpZWxkLk9uSW52YWxpZFwiXG5cdEV2ZW50cy5NYXRjaCAgID0gXCJJbnB1dEZpZWxkLk9uTWF0Y2hcIlxuXHRcblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QGlucHV0LnZhbHVlXG5cdFx0XHRcblx0XHRzZXQ6ICh2KSAtPlxuXHRcdFx0cmV0dXJuIHVubGVzcyB2XG5cdFx0XHRpZiBAaW5wdXRcblx0XHRcdFx0QGNoYW5nZUlucHV0VmFsdWUgdlxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcblx0XHRAaXNOdW1iZXIgPSBmYWxzZVxuXHRcdEBpc1NlYXJjaCA9IGZhbHNlXG5cdFx0XG5cdFx0QGlzRW1wdHkgID0gdHJ1ZVxuXHRcdEBpc1ZhbGlkICA9IG51bGxcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBudWxsXG5cdFx0IFx0XHRcdFx0XHRcdFx0XHRcblx0XHQjIEZyYW1lciBMYXllciBQcm9wc1xuXHRcdEBvcHRpb25zLm5hbWUgICAgICAgICAgICAgPz0gXCJCYXNpYyB0ZXh0IGZpZWxkXCJcblx0XHRcblx0XHRAb3B0aW9ucy5ib3JkZXJSYWRpdXMgICAgID0gMFxuXHRcdEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXMgPz0gbnVsbFxuXHRcdEBvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3IgPSBcIlwiXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXIgPz0gIFwiXCJcblx0XHRcblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHR0aGVtZSA9IEBvcHRpb25zLnRoZW1lXG5cblx0XHQjY29sb3JzIFxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQHRoZW1lQ29sb3Jcblx0XHRcblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBJbnB1dGxhYmVsX2Rhcmtcblx0XHRcdEBpbnB1dENvbG9yID0gaW5wdXRfZGFya1xuXHRcdFx0QGxpbmVDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCJcblx0XHRcdEBsaW5lSG92ZXJDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cdFx0XHRAbGFiZWxGb2N1c09wYWNpdHkgPSAxXG5cdFx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgID0gXCJyZ2JhKDAsMCwwLDAuMDEpXCJcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfbGlnaHRcblx0XHRcdEBpbnB1dENvbG9yID0gaW5wdXRfbGlnaHRcblx0XHRcdEBsaW5lQ29sb3IgPSBcInJnYmEoMCwwLDAsMC40MilcIlxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDAuODdcblx0XHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciAgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4wMSlcIlxuXHRcdGJveENvbG9yID0gQGJveENvbG9yXG5cdFx0XG5cdFx0QG9wdGlvbnMuY29sb3IgPSBAaW5wdXRDb2xvclxuXG5cdFx0XG5cdFx0I3RleHQgc3R5bGluZ1xuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7Jylcblx0XHRcblx0XHRpZiBVdGlscy5pc01vYmlsZSgpXG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNiAqIDJcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPz0gIDI0ICogMlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA9IFwiI3tAb3B0aW9ucy5saW5lSGVpZ2h0fXB4XCIgaWYgQG9wdGlvbnMubGluZUhlaWdodD9cblx0XHRcdEBvcHRpb25zLmhlaWdodCA9IDcwXG5cdFx0ZWxzZVx0XG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA/PSAgMjRcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPSBcIiN7QG9wdGlvbnMubGluZUhlaWdodH1weFwiIGlmIEBvcHRpb25zLmxpbmVIZWlnaHQ/XG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPSA3MFxuXHRcdFx0XG5cdFx0QG9wdGlvbnMubGFiZWxTaXplID89MTZcblx0XHRcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNDAwXG5cdFx0QG9wdGlvbnMubGV0dGVyU3BhY2luZyA/PSAwXG5cdFx0XG5cdFx0I3RleHQgaHRtbFxuXHRcdEBvcHRpb25zLmhlbHBlclRleHQgPz0gXCJIZWxwZXIgdGV4dFwiXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiTGFiZWxcIlxuXHRcdEBvcHRpb25zLmhlbHBlclRleHRWaXNibGUgPz0gZmFsc2VcblxuXHRcdCNEZWZhdWx0IHByb3BlcnRpZXNcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0d2lkdGggOiAyMDBcblxuIy0tLS0tLS0gRWxlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsaW5lID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogMVxuXHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0bmFtZTogXCJsaW5lXCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQGxpbmVDb2xvclxuXHRcdFxuXHRcdEBsaW5lUmlwcGxlID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdHdpZHRoOiAwXG5cdFx0XHRoZWlnaHQ6IDJcblx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblx0XHRcblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLmxhYmVsU2l6ZVxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcdFxuXHRcdEBoZWxwZXJUZXh0ID0gbmV3IExhYmVsXG5cdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdHRleHQ6IEBvcHRpb25zLmhlbHBlclRleHRcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0bmFtZTogXCJoZWxwZXIgVGV4dFwiXG5cdFx0XHR2aXNpYmxlOiBAb3B0aW9ucy5oZWxwZXJUZXh0VmlzYmxlXG5cdFx0XG5cdFx0QGlucHV0UGFyZW50ID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLmJhY2tncm91bmRDb2xvclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IDI4XG5cdFx0XHRuYW1lOiBcImlucHV0IHBhcmVudFwiXG5cdFx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHRAaGVscGVyVGV4dC5wYXJlbnQgPSBAbGluZS5wYXJlbnQgPSBAaW5wdXRQYXJlbnQucGFyZW50ID0gIEBcblx0XHRAaGVscGVyVGV4dC55ID0gNTBcblx0XHRAbGFiZWwucGFyZW50ID0gQFxuXHRcdEBsYWJlbC55ID0gMjBcblx0XHRAbGluZVJpcHBsZS5wYXJlbnQgPSBAbGluZVxuXHRcdEBsaW5lUmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAbGluZS55ID0gNDRcblx0XHRAaW5wdXRQYXJlbnQueSA9IDEwXG5cdFx0XHRcbiMtLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb25DbGljayBAY2xpY2tlZFxuXHRcdEBvblRhcCBAY2xpY2tlZFxuXHRcdFxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRAb25Nb3VzZU92ZXIgQGhvdmVyT25cblx0XHRcdEBvbk1vdXNlT3V0IEBob3Zlck9mZlxuXHRcdFx0XG5cdFx0QC5vbiBFdmVudHMuQmx1ciwgKHZhbHVlLCBsYXllcikgLT5cblx0XHRcdEBsaW5lLmhlaWdodCA9IDFcblx0XHRcdEBsaW5lUmlwcGxlLndpZHRoID0gMFxuXHRcdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdFx0QGhlbHBlclRleHQuY29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVDb2xvclxuXHRcdFx0QG9wdGlvbnMuY29sb3IgPSBAaW5wdXRDb2xvclxuXHRcdFx0QGxhYmVsLmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdFxuXHRcdFx0aWYgQC5pc0VtcHR5XG5cdFx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAxNlxuXHRcdFx0XHRcdFx0eTogMjBcblx0XHRcdFx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0XHRcdHRpbWU6IDAuMlx0XG5cdFx0XG4jLS0tLS0tIEFkanVzdCBhIGZldyB0aGluZ3MgZm9yIHZhcmlvdXMgdHlwZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRzd2l0Y2ggQG9wdGlvbnMudHlwZVxuXHRcdFx0d2hlbiBcInNlYXJjaFwiIHRoZW4gQGlzU2VhcmNoID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlclwiIHRoZW4gQGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlcnMtb25seVwiLCBcIm51bWJlci1vbmx5XCJcblx0XHRcdFx0QGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0XHRAb3B0aW9ucy50eXBlICAgID0gaWYgQG9wdGlvbnMucGF0dGVybj8gdGhlbiBcIm51bWJlclwiICAgICAgICAgIGVsc2UgXCJ0ZXh0XCJcblx0XHRcdFx0QG9wdGlvbnMucGF0dGVybiA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gQG9wdGlvbnMucGF0dGVybiBlbHNlIFBBVFRFUk5fTlVNQkVSXG5cdFx0XG5cdFx0QGh0bWwgKz0gc3dpdGNoXG5cdFx0XHR3aGVuIEBpc051bWJlciB0aGVuIFwiPHN0eWxlIHR5cGU9J3RleHQvY3NzJz4je0lOUFVUX1NFTEVDVE9SX05VTUJFUn0je0lOUFVUX0hJREVfUFNVRURPX1VJfTwvc3R5bGU+XCJcblx0XHRcdHdoZW4gQGlzU2VhcmNoIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfU0VBUkNIfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0ZWxzZSBcIlwiXG5cblx0XHRpZiBAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yP1xuXHRcdFx0QGh0bWwgKz0gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfSA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDpwbGFjZWhvbGRlci1zaG93biB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9PC9zdHlsZT5cIlxuXHRcdFx0XG4jLS0tLS0tIGNyZWF0aW5nICYgc3R5bGluZyB0aGUgaW5wdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJpbnB1dFwiXG5cdFx0XG5cdFx0QGlucHV0LnR5cGUgICAgICAgID0gQG9wdGlvbnMudHlwZVxuXHRcdEBpbnB1dC52YWx1ZSAgICAgICA9IEBvcHRpb25zLnZhbHVlICAgICAgICAgICAgICAgICAgaWYgQG9wdGlvbnMudmFsdWU/XG5cdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXIgICAgICAgICAgICBpZiBAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRAaW5wdXQucGF0dGVybiAgICAgPSBAb3B0aW9ucy5wYXR0ZXJuICAgICAgICAgICAgICAgIGlmIEBvcHRpb25zLnBhdHRlcm4/XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZShcIm1heExlbmd0aFwiLCBAb3B0aW9ucy5tYXhMZW5ndGgpIGlmIEBvcHRpb25zLm1heExlbmd0aD9cblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgKGlmIEBvcHRpb25zLmF1dG9DYXBpdGFsaXplIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsICAgKGlmIEBvcHRpb25zLmF1dG9Db21wbGV0ZSAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIiwgICAgKGlmIEBvcHRpb25zLmF1dG9Db3JyZWN0ICAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblxuXHRcdEBpbnB1dFBhcmVudC5fZWxlbWVudC5hcHBlbmRDaGlsZCBAaW5wdXRcbiBcdFx0XG5cdFx0IyBTZXR1cCBWYWx1ZXNcblx0XHRAaXNFbXB0eSAgICAgICAgICAgPSAhKEBvcHRpb25zLnZhbHVlPy5sZW5ndGggPiAwKVxuXHRcdEBvcmlnaW5hbFRleHRDb2xvciA9IEBvcHRpb25zLmNvbG9yXG5cdFx0XG5cdFx0IyBTZXR1cCBJbnB1dCBTdHlsZVxuXHRcdGlucHV0U3R5bGUgPVxuXHRcdFx0Zm9udDogXCIje0BvcHRpb25zLmZvbnRXZWlnaHR9ICN7QG9wdGlvbnMuZm9udFNpemV9cHgvI3tAb3B0aW9ucy5saW5lSGVpZ2h0fSAje0BvcHRpb25zLmZvbnRGYW1pbHl9XCJcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiXG5cdFx0XHR0ZXh0SW5kZW50OiBcIiN7QG9wdGlvbnMuaW5kZW50fXB4XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRoZWlnaHQ6IFwiMjJweFwiXG5cdFx0XHR3aWR0aDogIFwiMTAwJVwiXG5cdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdFx0cGFkZGluZzogXCIwXCJcblx0XHRcdFwiLXdlYmtpdC1hcHBlYXJhbmNlXCI6IFwibm9uZVwiXG5cdFx0XHRcblx0XHRAaW5wdXQuc3R5bGVba2V5XSAgPSB2YWwgZm9yIGtleSwgdmFsIG9mIGlucHV0U3R5bGVcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAb3B0aW9ucy5jb2xvciBpZiBAb3B0aW9ucy5jb2xvcj9cblxuXHRcdFxuXHRcdEBpbnB1dC5vbmZvY3VzID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cyBpZiBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzP1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAZW1pdChFdmVudHMuRm9jdXMsIEBpbnB1dC52YWx1ZSwgQClcblxuXHRcdEBpbnB1dC5vbmJsdXIgID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0dW5sZXNzIEBpbnB1dC5wbGFjZWhvbGRlciBpcyBAb3B0aW9ucy5wbGFjZUhvbGRlciBvciAhQG9wdGlvbnMucGxhY2VIb2xkZXI/XG5cdFx0XHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IEBvcHRpb25zLnBsYWNlSG9sZGVyXG5cdFx0XHRAZW1pdChFdmVudHMuQmx1ciwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QGlucHV0Lm9uaW5wdXQgPSA9PlxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAaW5wdXQudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRAZW1pdChFdmVudHMuSW5wdXQsIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdFxuXHRcdEBvbiBFdmVudHMuVG91Y2hFbmQsIC0+IEBpbnB1dC5mb2N1cygpXG5cdFx0QG9uIFwiY2hhbmdlOmNvbG9yXCIsICAtPiBAY2hhbmdlSW5wdXRUZXh0Q29sb3IoKVxuXG5cdFx0QG9uIFwia2V5ZG93blwiLCAoZXZlbnQpIC0+XG5cdFx0XHRpZiBldmVudC5rZXlDb2RlIGlzIDEzXG5cdFx0XHRcdEBsaW5lLmhlaWdodCA9IDFcblx0XHRcdFx0QGxpbmVSaXBwbGUud2lkdGggPSAwXG5cdFx0XHRcdEBsaW5lUmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblx0XHRcdFx0QGhlbHBlclRleHQuY29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0XHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3Jcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdFx0XG5cdFx0XHRcdGlmIEAuaXNFbXB0eVxuXHRcdFx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdFx0XHRcdFx0eTogMjBcblx0XHRcdFx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjJcdFxuXHRcdFxuIy0tLS0tLSBldmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0XG5cdGNsZWFyOiAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IFwiXCJcblx0XHRAaXNWYWxpZCA9IG51bGxcblx0XHRAaXNFbXB0eSA9IHRydWVcblx0XHRcblx0Y2hhbmdlSW5wdXRUZXh0Q29sb3I6IC0+IFxuXHRcdEBpbnB1dC5zdHlsZS5jb2xvciA9IEBjb2xvci50b0hleFN0cmluZygpXG5cdFxuXHRjaGFuZ2VJbnB1dFZhbHVlOiAodikgLT5cblx0XHRAaW5wdXQudmFsdWUgPSB2XG5cdFx0QGlucHV0Lm9uaW5wdXQoKVxuXHRcdFxuXHRjbGlja2VkOiAtPlxuXHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdFx0eTogMFxuXHRcdFx0XHRjb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRvcGFjaXR5OiBAbGFiZWxGb2N1c09wYWNpdHlcblx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XG5cdFx0QGxpbmUuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0aGVpZ2h0OiAyXG5cdFx0XHR0aW1lOiAwLjJcblx0XHRcdFxuXHRcdEBsaW5lUmlwcGxlLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0XHR4OiAwXG5cdFx0XHR0aW1lOiAwLjJcblx0XHRcdFxuXHRob3Zlck9uOiAtPlxuXHRcdEBsaW5lLmhlaWdodCA9IDJcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUhvdmVyQ29sb3JcblxuXHRob3Zlck9mZjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAxXHRcdFxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3JcblxuXG5cblxuXG5cblxuXG5cblxuY2xhc3MgZXhwb3J0cy5UZXh0RmllbGRfQmFzaWMgZXh0ZW5kcyBUZXh0RmllbGRcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA5LiBUZXh0RmllbGRfVmFsaWRhdGlvbiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuVGV4dEZpZWxkX1ZhbGlkYXRpb24gZXh0ZW5kcyBUZXh0RmllbGRcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcbiMtLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHRcblx0XHQjIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIENoZWNraW5nIEZsYWdcblx0XHRAc2hvdWxkQ2hlY2tWYWxpZGl0eSA9IHRydWUgaWYgQG9wdGlvbnMucGF0dGVybj8gb3IgQG9wdGlvbnMubWF0Y2g/XG5cdFx0XG5cdFx0IyBGcmFtZXIgTGF5ZXIgUHJvcHNcblx0XHRAb3B0aW9ucy5uYW1lICAgICAgICAgICAgID89IFwicGFzc3dvcmQgZmllbGRcIlxuXHRcdFxuXHRcdEBvcHRpb25zLnR5cGUgPz0gXCJwYXNzd29yZFwiXG5cdFx0QG9wdGlvbnMucGF0dGVybiA/PSBcIig/PV4uezgsfSQpKCg/PS4qXFxkKXwoPz0uKlxcVyspKSg/IVsuXFxuXSkoPz0uKltBLVpdKSg/PS4qW2Etel0pLiokXCJcblx0XHRAb3B0aW9ucy5leWVWaXNpYmxlID89IHRydWVcblx0XHRcblx0XHRAb3B0aW9ucy5jb2xvciA9IEBpbnB1dENvbG9yXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBJbnB1dGxhYmVsX2Rhcmtcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfbGlnaHRcblxuXHRcdEByZWQgPSBcIiNGRjE3NDRcIlxuXHRcdFxuXHRcdCN0ZXh0IGh0bWxcblx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0ID89IFwiaGVscGVyVGV4dFwiXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiUGFzc3dvcmRcIlxuXHRcdEBvcHRpb25zLmhlbHBlclRleHRWaXNpYmxlID89IGZhbHNlXG5cblx0XHQjRGVmYXVsdCBwcm9wZXJ0aWVzXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdHdpZHRoIDogMjAwXG5cdFx0XHRcblx0XHRpZiBAb3B0aW9ucy5wYXR0ZXJuIGlzIFwiXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPyEuKlxccykuKiRcIlxuXHRcdFx0QG9wdGlvbnMuaGVscGVyVGV4dCA/PSBcIlVwcGVyQ2FzZSwgTG93ZXJDYXNlIGFuZCBOdW1iZXJcIlxuXHRcdGVsc2UgaWYgQG9wdGlvbnMucGF0dGVybiBpcyBcIig/PV4uezgsfSQpKCg/PS4qXFxkKXwoPz0uKlxcVyspKSg/IVsuXFxuXSkoPz0uKltBLVpdKSg/PS4qW2Etel0pLiokXCJcblx0XHRcdEBvcHRpb25zLmhlbHBlclRleHQgPz0gXCJNdXN0IGNvbnRhaW4gOCBjaGFyYWN0ZXJzLCAxIHVwcGVyY2FzZSwgMSBsb3dlcmNhc2UsIGFuZCAxIG51bWJlci9zcGVjaWFsIGNoYXJhY3RlclwiXG5cdFx0ZWxzZSBAb3B0aW9ucy5oZWxwZXJUZXh0ID89IFwiaGVscGVyVGV4dFwiXG5cbiMtLS0tLS0tIEVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEBlcnJvclRleHQgPSBuZXcgTGFiZWxcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dGV4dDogQG9wdGlvbnMuaGVscGVyVGV4dFxuXHRcdFx0Y29sb3I6IEByZWRcblx0XHRcdG5hbWU6IFwiaGVscGVyIFRleHRcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFxuXHRcdEBleWVDb250aWFuZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyMlxuXHRcdFx0aGVpZ2h0OiAyMlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiBAb3B0aW9ucy5leWVWaXNpYmxlXG5cdFx0XHRuYW1lOiBcImV5ZUNvbnRpYW5lclwiXG5cdFx0XHRcdFx0XG5cdFx0QGV5ZU9uID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogMjJcblx0XHRcdGhlaWdodDogMTZcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdG5hbWU6IFwiZXllT25lXCJcblx0XHRcdGh0bWw6ICc8c3ZnIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjE2cHhcIiB2aWV3Qm94PVwiMCAwIDIyIDE2XCIgdmVyc2lvbj1cIjEuMVwiPjxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj4gPHBhdGggZD1cIk04LjkxMjA1OTM4LDUuODkwNyBDOS41MDYwNTkzOCw1LjI5NzcgMTAuMjA5MDU5NCw0Ljk5OTcgMTEuMDIxMDU5NCw0Ljk5OTcgQzExLjgzNDA1OTQsNC45OTk3IDEyLjUzNzA1OTQsNS4yOTc3IDEzLjEzMTA1OTQsNS44OTA3IEMxMy43MjQwNTk0LDYuNDg0NyAxNC4wMjEwNTk0LDcuMTg3NyAxNC4wMjEwNTk0LDcuOTk5NyBDMTQuMDIxMDU5NCw4LjgxMjcgMTMuNzI0MDU5NCw5LjUxNTcgMTMuMTMxMDU5NCwxMC4xMDk3IEMxMi41MzcwNTk0LDEwLjcwMjcgMTEuODM0MDU5NCwxMC45OTk3IDExLjAyMTA1OTQsMTAuOTk5NyBDMTAuMjA5MDU5NCwxMC45OTk3IDkuNTA2MDU5MzgsMTAuNzAyNyA4LjkxMjA1OTM4LDEwLjEwOTcgQzguMzE4MDU5MzgsOS41MTU3IDguMDIxMDU5MzgsOC44MTI3IDguMDIxMDU5MzgsNy45OTk3IEM4LjAyMTA1OTM4LDcuMTg3NyA4LjMxODA1OTM4LDYuNDg0NyA4LjkxMjA1OTM4LDUuODkwNyBNNy40ODIwNTkzOCwxMS41Mzg3IEM4LjQ2NzA1OTM4LDEyLjUyMzcgOS42NDYwNTkzOCwxMy4wMTU3IDExLjAyMTA1OTQsMTMuMDE1NyBDMTIuMzk2MDU5NCwxMy4wMTU3IDEzLjU3NjA1OTQsMTIuNTIzNyAxNC41NjAwNTk0LDExLjUzODcgQzE1LjU0NTA1OTQsMTAuNTU0NyAxNi4wMzcwNTk0LDkuMzc1NyAxNi4wMzcwNTk0LDcuOTk5NyBDMTYuMDM3MDU5NCw2LjYyNDcgMTUuNTQ1MDU5NCw1LjQ0NTcgMTQuNTYwMDU5NCw0LjQ2MDcgQzEzLjU3NjA1OTQsMy40NzY3IDEyLjM5NjA1OTQsMi45ODQ3IDExLjAyMTA1OTQsMi45ODQ3IEM5LjY0NjA1OTM4LDIuOTg0NyA4LjQ2NzA1OTM4LDMuNDc2NyA3LjQ4MjA1OTM4LDQuNDYwNyBDNi40OTgwNTkzOCw1LjQ0NTcgNi4wMDYwNTkzOCw2LjYyNDcgNi4wMDYwNTkzOCw3Ljk5OTcgQzYuMDA2MDU5MzgsOS4zNzU3IDYuNDk4MDU5MzgsMTAuNTU0NyA3LjQ4MjA1OTM4LDExLjUzODcgTTQuMzE4MDU5MzgsMi41NjI3IEM2LjMxODA1OTM4LDEuMTg3NyA4LjU1MzA1OTM4LDAuNDk5NyAxMS4wMjEwNTk0LDAuNDk5NyBDMTMuNDkwMDU5NCwwLjQ5OTcgMTUuNzI0MDU5NCwxLjE4NzcgMTcuNzI1MDU5NCwyLjU2MjcgQzE5LjcyNTA1OTQsMy45Mzc3IDIxLjE2MjA1OTQsNS43NDk3IDIyLjAzNzA1OTQsNy45OTk3IEMyMS4xNjIwNTk0LDEwLjI0OTcgMTkuNzI1MDU5NCwxMi4wNjI3IDE3LjcyNTA1OTQsMTMuNDM3NyBDMTUuNzI0MDU5NCwxNC44MTI3IDEzLjQ5MDA1OTQsMTUuNDk5NyAxMS4wMjEwNTk0LDE1LjQ5OTcgQzguNTUzMDU5MzgsMTUuNDk5NyA2LjMxODA1OTM4LDE0LjgxMjcgNC4zMTgwNTkzOCwxMy40Mzc3IEMyLjMxODA1OTM4LDEyLjA2MjcgMC44ODEwNTkzNzUsMTAuMjQ5NyAwLjAwNjA1OTM3NSw3Ljk5OTcgQzAuODgxMDU5Mzc1LDUuNzQ5NyAyLjMxODA1OTM4LDMuOTM3NyA0LjMxODA1OTM4LDIuNTYyN1wiIGlkPVwiRmlsbC0xXCIgZmlsbD1cIicgKyBAbGFiZWxDb2xvciArICdcIj48L3BhdGg+PC9nPjwvc3ZnPidcblx0XHRcblx0XHRAZXllT2ZmID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogMjNcblx0XHRcdGhlaWdodDogMTlcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0dmlzaWJsZTogdHJ1ZVxuXHRcdFx0bmFtZTogXCJleWVPZmZcIlxuXHRcdFx0aHRtbDogJzxzdmcgd2lkdGg9XCIyM3B4XCIgaGVpZ2h0PVwiMTlweFwiIHZpZXdCb3g9XCIwIDAgMjMgMTlcIiB2ZXJzaW9uPVwiMS4xXCIgPjxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTExLjAzMzE1OTQsNiBMMTEuMTc0MTU5NCw2IEMxMS45ODYxNTk0LDYgMTIuNjg5MTU5NCw2LjI5NyAxMy4yODMxNTk0LDYuODkxIEMxMy44NzcxNTk0LDcuNDg0IDE0LjE3NDE1OTQsOC4xODggMTQuMTc0MTU5NCw5IEwxNC4xNzQxNTk0LDkuMTg4IEwxMS4wMzMxNTk0LDYgWiBNMTEuMTc0MTU5NCwzLjk4NCBDMTAuNTQ5MTU5NCwzLjk4NCA5LjkzOTE1OTM3LDQuMTA5IDkuMzQ2MTU5MzcsNC4zNTkgTDcuMTg5MTU5MzcsMi4yMDMgQzguNDA4MTU5MzcsMS43MzQgOS43MzYxNTkzNywxLjUgMTEuMTc0MTU5NCwxLjUgQzEzLjY0MjE1OTQsMS41IDE1Ljg2OTE1OTQsMi4xODcgMTcuODUzMTU5NCwzLjU2MiBDMTkuODM4MTU5NCw0LjkzOCAyMS4yNjcxNTk0LDYuNzUgMjIuMTQyMTU5NCw5IEMyMS4zOTIxNTk0LDEwLjg0NCAyMC4yNTIxNTk0LDEyLjQyMiAxOC43MjAxNTk0LDEzLjczNCBMMTUuODE0MTU5NCwxMC44MjggQzE2LjA2NDE1OTQsMTAuMjM1IDE2LjE4OTE1OTQsOS42MjUgMTYuMTg5MTU5NCw5IEMxNi4xODkxNTk0LDcuNjI1IDE1LjY5NzE1OTQsNi40NDUgMTQuNzEzMTU5NCw1LjQ2MSBDMTMuNzI4MTU5NCw0LjQ3NyAxMi41NDkxNTk0LDMuOTg0IDExLjE3NDE1OTQsMy45ODQgTDExLjE3NDE1OTQsMy45ODQgWiBNNi43MjExNTkzNyw2Ljc5NyBDNi4zNDYxNTkzNyw3LjU0NyA2LjE1ODE1OTM3LDguMjgxIDYuMTU4MTU5MzcsOSBDNi4xNTgxNTkzNywxMC4zNzUgNi42NTAxNTkzNywxMS41NTUgNy42MzUxNTkzNywxMi41MzkgQzguNjE5MTU5MzcsMTMuNTIzIDkuNzk5MTU5MzcsMTQuMDE2IDExLjE3NDE1OTQsMTQuMDE2IEMxMS44OTIxNTk0LDE0LjAxNiAxMi42MjcxNTk0LDEzLjgyOCAxMy4zNzcxNTk0LDEzLjQ1MyBMMTEuODMwMTU5NCwxMS45MDYgQzExLjU4MDE1OTQsMTEuOTY5IDExLjM2MTE1OTQsMTIgMTEuMTc0MTU5NCwxMiBDMTAuMzYxMTU5NCwxMiA5LjY1ODE1OTM3LDExLjcwMyA5LjA2NDE1OTM3LDExLjEwOSBDOC40NzAxNTkzNywxMC41MTYgOC4xNzQxNTkzNyw5LjgxMyA4LjE3NDE1OTM3LDkgQzguMTc0MTU5MzcsOC44MTMgOC4yMDUxNTkzNyw4LjU5NCA4LjI2NzE1OTM3LDguMzQ0IEw2LjcyMTE1OTM3LDYuNzk3IFogTTEuMTg5MTU5MzcsMS4yNjYgTDIuNDU1MTU5MzcsMCBMMjAuMTc0MTU5NCwxNy43MTkgTDE4LjkwODE1OTQsMTguOTg0IEMxOC43NTIxNTk0LDE4LjgyOCAxOC4yNjAxNTk0LDE4LjM0NCAxNy40MzExNTk0LDE3LjUzMSBDMTYuNjAzMTU5NCwxNi43MTkgMTUuOTcwMTU5NCwxNi4wOTQgMTUuNTMzMTU5NCwxNS42NTYgQzE0LjE4OTE1OTQsMTYuMjE5IDEyLjczNjE1OTQsMTYuNSAxMS4xNzQxNTk0LDE2LjUgQzguNzA1MTU5MzcsMTYuNSA2LjQ3MTE1OTM3LDE1LjgxMyA0LjQ3MTE1OTM3LDE0LjQzOCBDMi40NzAxNTkzNywxMy4wNjIgMS4wMzMxNTkzNywxMS4yNSAwLjE1ODE1OTM3NSw5IEMwLjkzOTE1OTM3NSw3LjA2MiAyLjE4OTE1OTM3LDUuNDA3IDMuOTA4MTU5MzcsNC4wMzEgQzMuNTMzMTU5MzcsMy42NTYgMy4wMTAxNTkzNywzLjEyNSAyLjMzODE1OTM3LDIuNDM3IEMxLjY2NjE1OTM3LDEuNzUgMS4yODMxNTkzNywxLjM1OSAxLjE4OTE1OTM3LDEuMjY2IEwxLjE4OTE1OTM3LDEuMjY2IFpcIiBpZD1cIkZpbGwtM1wiIGZpbGw9XCInICsgQGxhYmVsQ29sb3IgKyAnXCI+PC9wYXRoPjwvZz48L3N2Zz4nXG5cbiMtLS0tLS0tIHN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGV5ZUNvbnRpYW5lci5wYXJlbnQgPSBAXG5cdFx0QGV5ZU9uLnBhcmVudCA9IEBleWVPZmYucGFyZW50ID0gQGV5ZUNvbnRpYW5lclxuXHRcdEBleWVDb250aWFuZXIueCA9IEAud2lkdGggLSAyMlxuXHRcdEBleWVDb250aWFuZXIueSA9IDEzXG5cdFx0QGV5ZU9uLnkgPSAwXG5cdFx0QGVycm9yVGV4dC5wYXJlbnQgPSBAXG5cdFx0QGVycm9yVGV4dC55ID0gQGhlbHBlclRleHQueVxuXHRcdFx0XG4jLS0tLS0tLSBldmVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb25DbGljayBAY2xpY2tlZFxuXHRcdEBvblRhcCBAY2xpY2tlZFxuXHRcdFxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRAb25Nb3VzZU92ZXIgQGhvdmVyT25cblx0XHRcdEBvbk1vdXNlT3V0IEBob3Zlck9mZlxuXHRcdFx0XHRcblx0XHRleWVPZmYgPSBAZXllT2ZmXG5cdFx0ZXllT24gPSBAZXllT25cblx0XHRcblx0XHRAZXllQ29udGlhbmVyLm9uQ2xpY2sgLT5cblx0XHRcdGlmIGV5ZU9mZi52aXNpYmxlIGlzIHRydWVcblx0XHRcdFx0ZXllT2ZmLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRleWVPbi52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRpbnB1dC50eXBlID0gXCJ0ZXh0XCJcblx0XHRcdGVsc2UgXG5cdFx0XHRcdGlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCJcblx0XHRcdFx0ZXllT2ZmLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGV5ZU9uLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XG5cdFx0QC5vbiBFdmVudHMuQmx1ciwgKHZhbHVlLCBsYXllcikgLT5cblx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRAbGluZS5oZWlnaHQgPSAxXG5cdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdEBsaW5lUmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblx0XHRcdFxuXHRcdFx0aWYgQC5pc0VtcHR5XG5cdFx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5sYWJlbFNpemVcblx0XHRcdFx0XHRcdHk6IDIwXG5cdFx0XHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0XHR0aW1lOiAwLjJcblx0XHRcdFx0aWYgQGhlbHBlclRleHRWaXNpYmxlIGlzIHRydWUgXG5cdFx0XHRcdFx0QGhlbHBlclRleHQudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0QGVycm9yVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdGVsc2UgaWYgQGlzVmFsaWRcblx0XHRcdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVDb2xvclxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdFx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdGlmIEBoZWxwZXJUZXh0VmlzaWJsZSBpcyB0cnVlIFxuXHRcdFx0XHRcdEBoZWxwZXJUZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdEBlcnJvclRleHQudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRlbHNlXHRcblx0XHRcdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQHJlZFxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAcmVkXG5cdFx0XHRcdFxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGVycm9yV29iYmxlMSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjogQGxhYmVsXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHg6IDVcblx0XHRcdFx0XHR0aW1lOiAwLjA1XG5cdFx0XHRcdGVycm9yV29iYmxlMiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjogQGxhYmVsXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHg6IC0gNVxuXHRcdFx0XHRcdHRpbWU6IDAuMDVcblx0XHRcdFx0ZXJyb3JXb2JibGU1ID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdGxheWVyOiBAbGFiZWxcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0eDogMFxuXHRcdFx0XHRcdHRpbWU6IDAuMDI1XG5cdFx0XHRcdGVycm9yV29iYmxlMS5zdGFydCgpXG5cdFx0XHRcdGVycm9yV29iYmxlMS5vbkFuaW1hdGlvbkVuZCAtPiBlcnJvcldvYmJsZTIuc3RhcnQoKVxuXHRcdFx0XHRlcnJvcldvYmJsZTIub25BbmltYXRpb25FbmQgLT4gZXJyb3JXb2JibGU1LnN0YXJ0KClcblx0XHRcdFx0QGhlbHBlclRleHQudmlzaWJsZSA9IGZhbHNlXG5cdFx0XG4jLS0tLS0tIEFkanVzdCBhIGZldyB0aGluZ3MgZm9yIHZhcmlvdXMgdHlwZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBpbnB1dC5vbmlucHV0ID0gPT5cblx0XHRcdEBpc0VtcHR5ID0gISggQGlucHV0LnZhbHVlPy5sZW5ndGggPiAwKVxuXHRcdFx0QGVtaXQoRXZlbnRzLklucHV0LCBAaW5wdXQudmFsdWUsIEApXG5cdFx0XHRAY2hlY2tWYWxpZGl0eSgpXG5cdFx0XG5cdFx0aW5wdXQgPSBAaW5wdXRcblxuXHRjaGVja1ZhbGlkaXR5OiAtPlxuXHRcdHJldHVybiB1bmxlc3MgQHNob3VsZENoZWNrVmFsaWRpdHlcblxuXHRcdGlmIEBvcHRpb25zLnBhdHRlcm4/XG5cdFx0XHR2YWxpZGl0eSA9IEBpbnB1dC5jaGVja1ZhbGlkaXR5KClcblx0XHRcdEBpc0VtcHR5ID0gISggQGlucHV0LnZhbHVlPy5sZW5ndGggPiAwKVxuXHRcdFx0XG5cdFx0XHRpZiBAaXNWYWxpZCBpc250IHZhbGlkaXR5IG9yIEBpc0VtcHR5XG5cdFx0XHRcdGlmIEBpc0VtcHR5IG9yICF2YWxpZGl0eVxuXHRcdFx0XHRcdEBpc1ZhbGlkID0gZmFsc2Vcblx0XHRcdFx0XHRAZW1pdChFdmVudHMuSW52YWxpZCwgQGlucHV0LnZhbHVlLCBAKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0QGlzVmFsaWQgPSB0cnVlXG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLlZhbGlkLCAgIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdFx0XHRcblx0XHRpZiBAY2hlY2tNYXRjaCgpXG5cdFx0XHRAaXNWYWxpZCA9IHRydWVcblx0XHRcdEBlbWl0KEV2ZW50cy5NYXRjaCwgQGlucHV0LnZhbHVlLCBAKVxuXHRcdFx0XG5cdGNoZWNrTWF0Y2g6IC0+XG5cdFx0cmV0dXJuIGZhbHNlIHVubGVzcyBAb3B0aW9ucy5tYXRjaD9cblx0XHRpZiBBcnJheS5pc0FycmF5KEBvcHRpb25zLm1hdGNoKVxuXHRcdFx0Zm9yIG1hdGNoIGluIEBvcHRpb25zLm1hdGNoXG5cdFx0XHRcdHJldHVybiB0cnVlIGlmIEBpbnB1dC52YWx1ZS5pbmRleE9mKG1hdGNoKSA+IC0xXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHRydWUgaWYgQGlucHV0LnZhbHVlLmluZGV4T2YoQG9wdGlvbnMubWF0Y2gpID4gLTFcblx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdFxuIy0tLSBldmVudCBmdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRjbGlja2VkOiAtPlxuXHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdFx0eTogLSA2XG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHR0aW1lOiAwLjJcblx0XHRcdFxuXHRcdEBsaW5lLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGhlaWdodDogMlxuXHRcdFx0dGltZTogMC4yXG5cdFx0XHRcblx0XHRAbGluZVJpcHBsZS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdFx0eDogMFxuXHRcdFx0dGltZTogMC4yXG5cdFx0XHRcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0QGxhYmVsLmNvbG9yID0gQHRoZW1lQ29sb3Jcblx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0QGVycm9yVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRpZiBAb3B0aW9ucy5oZWxwZXJUZXh0VmlzaWJsZSBpcyB0cnVlIFxuXHRcdFx0QGhlbHBlclRleHQudmlzaWJsZSA9IHRydWVcblx0XHRcblx0aG92ZXJPbjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAyXG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVIb3ZlckNvbG9yXG5cblx0aG92ZXJPZmY6IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMVx0XHRcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0XG5cdGV5ZUNsaWNrOiAtPlxuXHRcdEBleWUuc3RhdGVDeWNsZShcInZpc2libGVcIiwgXCJ2aXNpYmxlT2ZmXCIpXG5cblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAxMC4gVGV4dEFyZWEgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5UZXh0QXJlYSBleHRlbmRzIExheWVyXG5cblx0UEFUVEVSTl9OVU1CRVIgPSBcIlswLTldKlwiXG5cdFxuXHRJTlBVVF9ISURFX1BTVUVET19VSSAgPSBcInsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBkaXNwbGF5OiBub25lOyB9XCJcblx0SU5QVVRfU0VMRUNUT1JfTlVNQkVSID0gXCJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiXG5cdElOUFVUX1NFTEVDVE9SX1NFQVJDSCA9IFwiaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uXCJcblx0XG5cdEV2ZW50cy5JbnB1dCAgID0gXCJJbnB1dEZpZWxkLk9uSW5wdXRcIlxuXHRFdmVudHMuRm9jdXMgICA9IFwiSW5wdXRGaWVsZC5PbkZvY3VzXCJcblx0RXZlbnRzLkJsdXIgICAgPSBcIklucHV0RmllbGQuT25CbHVyXCJcblx0RXZlbnRzLlZhbGlkICAgPSBcIklucHV0RmllbGQuT25WYWxpZFwiXG5cdEV2ZW50cy5JbnZhbGlkID0gXCJJbnB1dEZpZWxkLk9uSW52YWxpZFwiXG5cdEV2ZW50cy5NYXRjaCAgID0gXCJJbnB1dEZpZWxkLk9uTWF0Y2hcIlxuXHRcblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QHRleHRhcmVhLnZhbHVlXG5cdFx0XHRcblx0XHRzZXQ6ICh2KSAtPlxuXHRcdFx0cmV0dXJuIHVubGVzcyB2XG5cdFx0XHRpZiBAaW5wdXRcblx0XHRcdFx0QGNoYW5nZUlucHV0VmFsdWUgdlxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0XG4jLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHRcblx0XG5cdFx0QGlzTnVtYmVyID0gZmFsc2Vcblx0XHRAaXNTZWFyY2ggPSBmYWxzZVxuXHRcdFxuXHRcdEBpc0VtcHR5ICA9IHRydWVcblx0XHRAaXNWYWxpZCAgPSBudWxsXG5cdFx0QG9yaWdpbmFsVGV4dENvbG9yID0gbnVsbFxuXHRcdFxuXHRcdCMgTWFrZSBzdXJlIHdlIHNldCB0aGUgQ2hlY2tpbmcgRmxhZ1xuXHRcdEBzaG91bGRDaGVja1ZhbGlkaXR5ID0gdHJ1ZSBpZiBAb3B0aW9ucy5wYXR0ZXJuPyBvciBAb3B0aW9ucy5tYXRjaD9cbiBcdFx0XHRcdFx0XHRcdFx0XG5cdFx0IyBGcmFtZXIgTGF5ZXIgUHJvcHNcblx0XHRAb3B0aW9ucy5uYW1lICAgICAgICAgICAgID89IFwiVGV4dCBhcmVhXCJcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDEpXCJcblx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gMTgwXG5cblx0XHQjIEN1c3RvbSBMYXllciBQcm9wc1x0XHRcblx0XHRAb3B0aW9ucy50eXBlICAgICAgICAgICAgID89IFwidGV4dFwiXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCAgICAgICA/PSA0MDBcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ICAgICAgID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmluZGVudCAgICAgICAgICAgPz0gMFxuXHRcdEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXMgPz0gbnVsbFxuXHRcdEBvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3IgPz0gbnVsbFxuXHRcdEBvcHRpb25zLndpZHRoID89IDMwMFxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJUeXBlIHNvbWV0aGluZy4uLlwiXG5cdFx0XG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG5cdFx0I2NvbG9ycyBcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cblx0XHR0aGVtZUNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEByZWQgPSBcIiNGRjE3NDRcIlxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfZGFya1xuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9kYXJrXG5cdFx0XHRAbGluZUNvbG9yID0gbGluZV9kYXJrXG5cdFx0XHRAbGluZUhvdmVyQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuXHRcdFx0QGxhYmVsRm9jdXNPcGFjaXR5ID0gMVxuXHRcdFx0QGxpbmVDb2xvciA9IGxpbmVfZGFya1xuXHRcdFx0QG9wdGlvbnMuY29sb3IgPSBcIiNmZmZcIlxuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gIElucHV0bGFiZWxfbGlnaHQgXG5cdFx0XHRAaW5wdXRDb2xvciA9IGlucHV0X2xpZ2h0XG5cdFx0XHRAbGluZUNvbG9yID0gbGluZV9saWdodFxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDAuODdcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0XHRAb3B0aW9ucy5jb2xvciA9IFwicmdiYSgwLDAsMCwwLjg3KVwiXG5cdFx0XG5cdFx0QG9wdGlvbnMuY29sb3IgPSBAaW5wdXRDb2xvclxuXHRcdFxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKClcblx0XHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2ICogMlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA/PSAgMjQgKiAyXG5cdFx0XHRAb3B0aW9ucy5zdHlsZSA9XG5cdFx0XHRcdFwicGFkZGluZ1wiIDogXCI1NnB4IDMycHggMzJweCAzMnB4XCJcblx0XHRlbHNlXHRcblx0XHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2XG5cdFx0XHRAb3B0aW9ucy5saW5lSGVpZ2h0ID89ICAyNFxuXHRcdFx0QG9wdGlvbnMuc3R5bGUgPVxuXHRcdFx0XHRcInBhZGRpbmdcIiA6IFwiMjhweCAxNnB4IDE2cHggMTZweFwiXG5cdFx0XHRcblx0XHRAb3B0aW9ucy5sYWJlbFNpemUgPz0gMTZcblx0XHRcblx0XHQjdGV4dCBzdHlsaW5nXG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTsnKVxuXHRcdFxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA0MDBcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblx0XHRAb3B0aW9ucy5saW1pdE9uID89IHRydWVcblx0XHRcblx0XHRpZiBAb3B0aW9ucy5saW1pdE9uIGlzIGZhbHNlXG5cdFx0XHRAb3B0aW9ucy5jaGFyYWN0ZXJMaW1pdCA9IDEwMDAwMDAwMDAwMDBcblx0XHRlbHNlIEBvcHRpb25zLmNoYXJhY3RlckxpbWl0ID89IDIwMFxuXG4jLS0tLS0tLSBFbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEBsYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMubGFiZWxTaXplXG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cdFx0XHRcblx0XHRAbGltaXQgPSBuZXcgTGF5ZXJcblx0XHRcdGh0bWw6IFwiMCAvIFwiICsgQG9wdGlvbnMuY2hhcmFjdGVyTGltaXRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0d2lkdGg6IDEwMFxuXHRcdFx0aGVpZ2h0OiAxMlxuXHRcdFx0dmlzaWJsZTogQG9wdGlvbnMubGltaXRPblxuXHRcdFx0bmFtZTogXCJsaW1pdFwiXG5cdFx0QGxpbWl0LnN0eWxlID1cblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0Zm9udFNpemU6IFwiMTJweFwiXG5cdFx0XHRsaW5lSGVpZ2h0OiBcIjEycHhcIlxuXHRcdFx0dGV4dEFsaWduOiBcInJpZ2h0XCJcblx0XHRcdGxldHRlclNwYWNpbmc6IEBvcHRpb25zLmxldHRlclNwYWNpbmdcdFxuXHRcdFx0XG5cdFx0QGVycm9yVGV4dCA9IG5ldyBMYWJlbFxuXHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHRjb2xvcjogQHJlZFxuXHRcdFx0bmFtZTogXCJlcnJvciB0ZXh0XCJcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHR0ZXh0OiBcIkV4ZWVkcyB0ZXh0IGxpbWl0LlwiXG5cdFx0XHRcblx0XHRAYm9yZGVyID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdGJvcmRlcldpZHRoOiAxXG5cdFx0XHRib3JkZXJDb2xvcjogQGxpbmVDb2xvclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyXG5cdFx0XHRuYW1lOiBcImJvcmRlclwiXG5cbiMtLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdFxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAYm9yZGVyLnBhcmVudCA9IEBcblx0XHRAbGltaXQucGFyZW50ID0gQFxuXHRcdEBlcnJvclRleHQucGFyZW50ID0gQFxuXHRcdEBsYWJlbC55ID0gMjBcblx0XHRAbGFiZWwueCA9IDE2XG5cdFx0QGxpbWl0LnggPSBAd2lkdGggLSAxMDBcblx0XHRAbGltaXQueSA9IEBoZWlnaHQgKyA4XG5cdFx0QGVycm9yVGV4dC55ID0gQGhlaWdodCArIDhcblxuIy0tLS0tLS0gZXZlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cdFx0XHRcblx0XHRALm9uIEV2ZW50cy5CbHVyLCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGJsdXJyZWQoKVxuXHRcdFxuXHRcdEAub24gRXZlbnRzLkZvY3VzLCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGZvY3VzKClcblx0XHRcdFxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRALm9uTW91c2VPdmVyIEBob3Zlck9uXG5cdFx0XHRALm9uTW91c2VPdXQgQGhvdmVyT2ZmXHRcblx0XHRcdFxuXHRcdEAub24gRXZlbnRzLklucHV0LCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGxpbWl0Lmh0bWwgPSBAdmFsdWUubGVuZ3RoICsgXCIgLyBcIiArIEBvcHRpb25zLmNoYXJhY3RlckxpbWl0XG5cdFx0XHRpZiBAdmFsdWUubGVuZ3RoID4gQG9wdGlvbnMuY2hhcmFjdGVyTGltaXRcblx0XHRcdFx0QGVycm9yVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAbGltaXQuY29sb3IgPSBAcmVkXG5cdFx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAcmVkXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEByZWRcblx0XHRcdGVsc2UgXG5cdFx0XHRcdEBlcnJvclRleHQudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdEBsaW1pdC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XG4jLS0tLS0tLSBBZGp1c3QgYSBmZXcgdGhpbmdzIGZvciB2YXJpb3VzIHR5cGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0c3dpdGNoIEBvcHRpb25zLnR5cGVcblx0XHRcdHdoZW4gXCJzZWFyY2hcIiB0aGVuIEBpc1NlYXJjaCA9IHRydWVcblx0XHRcdHdoZW4gXCJudW1iZXJcIiB0aGVuIEBpc051bWJlciA9IHRydWVcblx0XHRcdHdoZW4gXCJudW1iZXJzLW9ubHlcIiwgXCJudW1iZXItb25seVwiXG5cdFx0XHRcdEBpc051bWJlciA9IHRydWVcblx0XHRcdFx0QG9wdGlvbnMudHlwZSAgICA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gXCJudW1iZXJcIiAgICAgICAgICBlbHNlIFwidGV4dFwiXG5cdFx0XHRcdEBvcHRpb25zLnBhdHRlcm4gPSBpZiBAb3B0aW9ucy5wYXR0ZXJuPyB0aGVuIEBvcHRpb25zLnBhdHRlcm4gZWxzZSBQQVRURVJOX05VTUJFUlxuXHRcdFxuXHRcdEBodG1sICs9IHN3aXRjaFxuXHRcdFx0d2hlbiBAaXNOdW1iZXIgdGhlbiBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+I3tJTlBVVF9TRUxFQ1RPUl9OVU1CRVJ9I3tJTlBVVF9ISURFX1BTVUVET19VSX08L3N0eWxlPlwiXG5cdFx0XHR3aGVuIEBpc1NlYXJjaCB0aGVuIFwiPHN0eWxlIHR5cGU9J3RleHQvY3NzJz4je0lOUFVUX1NFTEVDVE9SX1NFQVJDSH0je0lOUFVUX0hJREVfUFNVRURPX1VJfTwvc3R5bGU+XCJcblx0XHRcdGVsc2UgXCJcIlxuXG5cdFx0aWYgQG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcj9cblx0XHRcdEBodG1sICs9IFwiPHN0eWxlIHR5cGU9J3RleHQvY3NzJz46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfSA6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfSA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfSA6cGxhY2Vob2xkZXItc2hvd24geyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfTwvc3R5bGU+XCJcblx0XHRcdFxuIy0tLS0tLS0gY3JlYXRlIGlucHV0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRAdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwidGV4dGFyZWFcIlxuXG5cdFx0QHRleHRhcmVhLnZhbHVlICAgICAgID0gQG9wdGlvbnMudmFsdWUgICAgICAgICAgICAgICAgICBpZiBAb3B0aW9ucy52YWx1ZT9cblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlciAgICAgICAgICAgIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyP1xuXHRcdEB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJtYXhMZW5ndGhcIiwgQG9wdGlvbnMubWF4TGVuZ3RoKSBpZiBAb3B0aW9ucy5tYXhMZW5ndGg/XG5cdFx0QHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImF1dG9jYXBpdGFsaXplXCIsIChpZiBAb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSBpcyB0cnVlIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIikpXG5cdFx0QHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCAgIChpZiBAb3B0aW9ucy5hdXRvQ29tcGxldGUgICBpcyB0cnVlIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIikpXG5cdFx0QHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsICAgIChpZiBAb3B0aW9ucy5hdXRvQ29ycmVjdCAgICBpcyB0cnVlIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIikpXG5cdFx0XG5cdFx0QF9lbGVtZW50LmFwcGVuZENoaWxkIEB0ZXh0YXJlYVxuXHRcdFxuXHRcdCMgU2V0dXAgVmFsdWVzXG5cdFx0QGlzRW1wdHkgICAgICAgICAgID0gIShAb3B0aW9ucy52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBAb3B0aW9ucy5jb2xvclxuXHRcdFxuXHRcdCMgU2V0dXAgSW5wdXQgU3R5bGVcblx0XHRcblx0XHRAX3RleHRBcmVhU3R5bGUgPVxuXHRcdFx0Zm9udFNpemU6IFwiI3tAb3B0aW9ucy5mb250U2l6ZX1weFwiXG5cdFx0XHRsaW5lSGVpZ2h0OiBcIiN7QG9wdGlvbnMubGluZUhlaWdodH1weFwiXG5cdFx0XHRmb250V2VpZ2h0OiBcIiN7QG9wdGlvbnMuZm9udFdlaWdodH1cIlxuXHRcdFx0Zm9udEZhbWlseTogXCIje0BvcHRpb25zLmZvbnRGYW1pbHl9XCJcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiXG5cdFx0XHR0ZXh0SW5kZW50OiBcIiN7QG9wdGlvbnMuaW5kZW50fXB4XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiXG5cdFx0XHR3aWR0aDogIFwiMTAwJVwiXG5cdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCJcblx0XHRcdHJlc2l6ZTogXCJub25lXCJcblx0XHRcdFwiLXdlYmtpdC1hcHBlYXJhbmNlXCI6IFwibm9uZVwiXG5cdFx0XHRcblx0XHRAdGV4dGFyZWEuc3R5bGVba2V5XSAgPSB2YWwgZm9yIGtleSwgdmFsIG9mIEBfdGV4dEFyZWFTdHlsZVxuXHRcdEB0ZXh0YXJlYS5zdHlsZS5jb2xvciA9IEBvcHRpb25zLmNvbG9yIGlmIEBvcHRpb25zLmNvbG9yP1xuXHRcdFxuXHRcdEB0ZXh0YXJlYS5vbmZvY3VzID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cyBpZiBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzP1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAZW1pdChFdmVudHMuRm9jdXMsIEB0ZXh0YXJlYS52YWx1ZSwgQClcblxuXHRcdEB0ZXh0YXJlYS5vbmJsdXIgID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0dW5sZXNzIEB0ZXh0YXJlYS5wbGFjZWhvbGRlciBpcyBAb3B0aW9ucy5wbGFjZUhvbGRlciBvciAhQG9wdGlvbnMucGxhY2VIb2xkZXI/XG5cdFx0XHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IEBvcHRpb25zLnBsYWNlSG9sZGVyXG5cdFx0XHRAZW1pdChFdmVudHMuQmx1ciwgQHRleHRhcmVhLnZhbHVlLCBAKVxuXHRcblx0XHRAX3RleHRBcmVhU3R5bGVvbmJsdXIgID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0dW5sZXNzIEBpbnB1dC5wbGFjZWhvbGRlciBpcyBAb3B0aW9ucy5wbGFjZUhvbGRlciBvciAhQG9wdGlvbnMucGxhY2VIb2xkZXI/XG5cdFx0XHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IEBvcHRpb25zLnBsYWNlSG9sZGVyXG5cdFx0XHRAZW1pdChFdmVudHMuQmx1ciwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QHRleHRhcmVhLm9uaW5wdXQgPSA9PlxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAdGV4dGFyZWEudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRAZW1pdChFdmVudHMuSW5wdXQsIEB0ZXh0YXJlYS52YWx1ZSwgQClcblx0XHRcdEBjaGVja1ZhbGlkaXR5KClcblx0XHRcdFxuXHRcdEBvbiBFdmVudHMuVG91Y2hFbmQsIC0+IEB0ZXh0YXJlYS5mb2N1cygpXG5cdFx0QG9uIFwiY2hhbmdlOmNvbG9yXCIsICAtPiBAY2hhbmdlSW5wdXRUZXh0Q29sb3IoKVxuXG5cdFx0I1VwZGF0ZSB0aGUgaGVpZ2h0IHdoZW5ldmVyIGFueXRoaW5nIGNoYW5nZXMuXG5cdFx0QHRleHRhcmVhLm9ua2V5ZG93biA9ID0+IEBfdXBkYXRlKClcblx0XHRAdGV4dGFyZWEub25rZXl1cCA9ID0+IEBfdXBkYXRlKClcblx0XHRAdGV4dGFyZWEuY2hhbmdlID0gPT4gQF91cGRhdGUoKVxuXHRfcmVzaXplUGFyZW50ID0gKGxheWVyLCBwYXJlbnRNaW5IZWlnaHQsIGJvdHRvbVBhZGRpbmcpIC0+XG5cdFx0IyBWYXJpYWJsZSBmb3IgcGFyZW50XG5cdFx0bGF5ZXJQYXJlbnQgPSBsYXllci5wYXJlbnRcblx0XHRcblx0XHQjIEFycmF5IHRvIHN0b3JlIGFsbCBjaGlsZHJlbidzIG1heFlzXG5cdFx0YWxsQ2hpbGRyZW5NYXhZcyA9IFtdXG5cdFx0XG5cdFx0IyBQdXNoIGVhY2ggbWF4WSB0byBhbiBhcnJheVxuXHRcdGZvciBtYXggaW4gbGF5ZXJQYXJlbnQuY2hpbGRyZW5cblx0XHRcdGFsbENoaWxkcmVuTWF4WXMucHVzaChtYXgubWF4WSlcblx0XHRcdFxuXHRcdCMgRmluZCB0aGUgYm90dG9tLW1vc3QgbWF4WSB2YWx1ZVxuXHRcdHRhbGxlc3RDaGlsZE1heFkgPSBNYXRoLm1heC5hcHBseShudWxsLCBhbGxDaGlsZHJlbk1heFlzKVxuXHRcdFxuXHRcdCMgU3RvcmUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGF0IGFuZCB0aGUgcGFyZW50IGxheWVyXG5cdFx0bGF5ZXJQYXJlbnQuaGVpZ2h0ID0gTWF0aC5tYXgodGFsbGVzdENoaWxkTWF4WSArIGJvdHRvbVBhZGRpbmcsIHBhcmVudE1pbkhlaWdodClcblx0XHRcblx0XHQjIFRPRE8gLSBNYWludGFpbiB0aGUgYm90dG9tIHBhZGRpbmcgb2YgdGhlIHBhcmVudC5cblx0XHRcblx0IyBSZWZsb3cgYWxsIHRoZSBzaWJsaW5ncyB1bmRlciB0aGUgdGV4dCBsYXllclxuXHRfcmVmbG93U2libGluZ3MgPSAobGF5ZXIsIGxheWVyTWF4WSkgLT5cblx0XHRsYXllckxpc3QgPSBsYXllci5wYXJlbnQuY2hpbGRyZW5cblx0XHRmb3IgYSBpbiBbbGF5ZXJMaXN0LmluZGV4T2YobGF5ZXIpKzEuLi5sYXllckxpc3QubGVuZ3RoXVxuXHRcdFx0eURpZmYgPSBsYXllckxpc3RbYV0ueSAtIGxheWVyTWF4WVxuXHRcdFx0bGF5ZXJMaXN0W2FdLnkgPSBsYXllci5tYXhZICsgeURpZmZcblx0XHQjIFRPRE8gLSByZWRvIHRoaXMgd2l0aG91dCB0aGUgYXNzdW1wdGlvbiB0aGF0IGFsbCBzaWJsaW5ncyBhZnRlciB0aGUgbGF5ZXIgYXJlIGJlbG93IGl0LlxuXHRcdFx0XG5cdCMgVXBkYXRlIGhlaWdodCBmdW5jdGlvblxuXHRfdXBkYXRlOiA9PlxuXHRcdHNldFRpbWVvdXQgPT5cblx0XHRcdGxheWVyTWF4WSA9IEAubWF4WVxuXHRcdFx0IyBBZGQgYmFjayBhbnkgbGluZSBicmVha3MgdGhhdCB0aGUgdmFsdWUgbWV0aG9kIGdldHMgcmlkZSBvZlxuXHRcdFx0X3RydWVWYWx1ZSA9IEB0ZXh0YXJlYS52YWx1ZS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKS5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvXFxuL2csIFwiPGJyLz4mbmJzcDtcIik7XG5cdFx0XHRcblx0XHRcdCMgSWYgaXQncyBlbXB0eSwgbWFrZSBzdXJlIHRoZXJlJ3MgYSBsZXR0ZXIgaW4gdGhlcmUgdG8gY2FsY3VsYXRlICpzb21ldGhpbmcqXG5cdFx0XHRpZiBfdHJ1ZVZhbHVlLnRyaW0oKSA9PSBcIlwiIHRoZW4gX3RydWVWYWx1ZSA9IFwiYVwiXG5cdFx0XHRcblx0XHRcdCMgQ2FsY3VsYXRlIHRoZSBoZWlnaHQhISFcblx0XHRcdGNhbGNIZWlnaHQgPSBVdGlscy5yb3VuZChVdGlscy50ZXh0U2l6ZShfdHJ1ZVZhbHVlLCBAX3RleHRBcmVhU3R5bGUsIHt3aWR0aDogQC53aWR0aH0pLmhlaWdodCwgMClcblx0XHRcdFxuXHRcdFx0IyBTZXQgdGhlIGhlaWdodCB0byBlaXRoZXIgdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0LCBvciB0aGUgbWluSGVpZ2h0LCB3aGljaGV2ZXIgaXMgZ3JlYXRlci5cblx0XHRcdEAuaGVpZ2h0ID0gTWF0aC5tYXgoY2FsY0hlaWdodCwgQG9wdGlvbnMubWluSGVpZ2h0KVxuXHRcdFx0aWYgQG9wdGlvbnMucmVmbG93U2libGluZ3MgPT0gdHJ1ZSB0aGVuIF9yZWZsb3dTaWJsaW5ncyhALCBsYXllck1heFkpXG5cdFx0XHRpZiBAb3B0aW9ucy5yZXNpemVQYXJlbnQgPT0gdHJ1ZSB0aGVuIF9yZXNpemVQYXJlbnQoQCwgQHBhcmVudE9nSGVpZ2h0LCBAb3B0aW9ucy5wYXJlbnRCb3R0b21QYWRkaW5nKVxuXG4jLS0tLS0tLSBldmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRjaGVja1ZhbGlkaXR5OiAtPlxuXHRcdHJldHVybiB1bmxlc3MgQHNob3VsZENoZWNrVmFsaWRpdHlcblx0XHRcdFx0XHRcblx0Y2xlYXI6IC0+XG5cdFx0QGlucHV0LnZhbHVlID0gXCJcIlxuXHRcdEBpc1ZhbGlkID0gbnVsbFxuXHRcdEBpc0VtcHR5ID0gdHJ1ZVxuXHRcdFxuXHRjaGFuZ2VJbnB1dFRleHRDb2xvcjogLT4gXG5cdFx0QGlucHV0LnN0eWxlLmNvbG9yID0gQGNvbG9yLnRvSGV4U3RyaW5nKClcblx0XG5cdGNoYW5nZUlucHV0VmFsdWU6ICh2KSAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IHZcblx0XHRAaW5wdXQub25pbnB1dCgpXG5cdFx0XG5cdGNsaWNrZWQ6IC0+XG5cdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0XHR5OiA4XG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdHg6IDE2XG5cdFx0XHR0aW1lOiAwLjJcblx0XHRAYm9yZGVyLmJvcmRlckNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAyXG5cblx0ZXJyb3I6IC0+XG5cdFx0QGJvcmRlckNvbG9yID0gQHJlZFxuXHRcdFxuXHRmb2N1czogLT5cblx0XHRAbGFiZWwuZm9udFNpemUgPSAxMlxuXHRcdEBib3JkZXJDb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRAYm9yZGVyLmJvcmRlcldpZHRoID0gMlxuXHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFxuXHRob3Zlck9uOiAtPlxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAyXG5cdFx0QG9wdGlvbnMuYm9yZGVyQ29sb3IgPSBAbGluZUhvdmVyQ29sb3JcblxuXHRob3Zlck9mZjogLT5cblx0XHRAYm9yZGVyLmJvcmRlcldpZHRoID0gMVxuXHRcdEBib3JkZXJDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRcdFxuXHRibHVycmVkOiAodmFsdWUsIGxheWVyKVx0LT5cblx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAbGluZUNvbG9yXG5cblx0XHRpZiBALmlzRW1wdHlcblx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0Zm9udFNpemU6IDE2XG5cdFx0XHRcdFx0eTogMjBcblx0XHRcdFx0XHR4OiAxNlxuXHRcdFx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0XHR0aW1lOiAwLjJcblx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdFx0XG5cdFx0aWYgQHZhbHVlLmxlbmd0aCA+IEBvcHRpb25zLmNoYXJhY3RlckxpbWl0XG5cdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0XHRAbGltaXQuY29sb3IgPSBAcmVkXG5cdFx0XHRAYm9yZGVyLmJvcmRlckNvbG9yID0gQHJlZFxuXHRcdFx0QGxhYmVsLmNvbG9yID0gQHJlZFxuXHRcdFx0XG5cdFx0QGJvcmRlci5ib3JkZXJXaWR0aCA9IDFcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDExLiBUZXh0RmllbGRfRHJvcGRvd24gICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLlRleHRGaWVsZF9Ecm9wZG93biBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0XG4jLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QG9wdGlvbnMuc2NyZWVuQ29sb3IgPz0gXCIjMDAwXCJcblx0XHRcblx0XHRAb3B0aW9ucy5jaG9pY2VzID89IFtcImFwcGxlXCIsIFwiYmFuYW5hXCIsIFwiYmx1ZWJlcnJ5XCIsXCJjYW50YWxvdXBlXCIsIFwiY2hlcnJ5XCIsXCJjb2NvbnV0XCIsIFwiZmlnXCIsIFwiZ3JhcGVcIixcImdyYXBlZnJ1aXRcIixcImd1YXZhXCIsIFwia2l3aWZydWl0XCIsIFwibGVtb25cIixcImxpbWVcIiwgXCJseWNoZWVcIiwgXCJtYW5nb1wiLCBcIm1lbG9uXCIsIFwib3JhbmdlXCIsXCJwYXBheWFcIiwgXCJwYXNzaW9uZnJ1aXRcIiwgXCJwZWFjaFwiLCBcInBlYXJcIixcInBpbmVhcHBsZVwiLCBcInBsdW1cIixcInBvbWVncmFuYXRlXCIsIFwicmFzcGJlcnJ5XCIsIFwic3RyYXdiZXJyeVwiLCBcIndhdGVybWVsb25cIl1cblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJTZWxlY3QgYSBmcnVpdFwiXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0QG9wdGlvbnMudmlzaWJsZUl0ZW1zID89IDRcblx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPz0gbnVsbFxuXHRcdFxuXHRcdCNjb2xvcnMgXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAdGhlbWVDb2xvclxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2Rhcmtcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2Rhcmtcblx0XHRcdEBsaW5lSG92ZXJDb2xvciA9IGxpbmVfZGFya19ob3ZlclxuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9kYXJrXG5cdFx0ZWxzZVxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9saWdodFxuXHRcdFx0QGxpbmVDb2xvciA9IGxpbmVfbGlnaHRcblx0XHRcdEBsaW5lSG92ZXJDb2xvciA9IGxpbmVfbGlnaHRfaG92ZXJcdFxuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9saWdodFxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdGhlaWdodDogNTBcblx0XHRcdGNvbG9yOiBcIiNFOTFFNjNcIlxuXHRcdFx0d2lkdGggOiAxNTBcblx0XHRcdG5hbWU6IFwiRHJvcERvd25cIlxuXG4jLS0tLS0tIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcblx0XHRAcGxhY2VIb2xkZXIgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Y29sb3I6IEBpbnB1dENvbG9yXG5cdFx0XHR5OiAyMFxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0gYXJyb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBhcnJvdyA9IG5ldyBMYXllclxuXHRcdFx0aHRtbDogJzxzdmcgdmVyc2lvbj1cIjEuMVwiPjxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cG9seWdvbiBmaWxsPVwiJyArIEBsaW5lQ29sb3IgKyAnXCIgcG9pbnRzPVwiMC42NjAxMzM4NzcgMCA5LjE3NDgyNzA2IDAgNC45MTc0ODA0NyA1XCI+PC9wb2x5Z29uPjwvZz48L3N2Zz4nXG5cdFx0XHRzaXplOiAyNFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRjb2xvcjogXCIjNTU1XCJcblx0XHRcdHdpZHRoOjEwXG5cdFx0XHRoZWlnaHQ6IDVcblx0XHRcdG5hbWU6XCJBcnJvd1wiXG5cbiMtLS0tLS0gbGluZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsaW5lID0gbmV3IExheWVyXG5cdFx0XHRoZWlnaHQ6IDFcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0eTogNDlcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQGxpbmVDb2xvclxuXHRcdFx0bmFtZTogXCJsaW5lXCJcblxuIy0tLS0tLSBjb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBjb250YWluZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnZpc2libGVJdGVtcyAqIDUwICsgMjBcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdG5hbWU6IFwiY29udGFpbmVyXCJcblx0XHRcbiMtLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGNvbnRhaW5lci5zdGF0ZXMgPSBcblx0XHRcdG9wZW46IFxuXHRcdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnZpc2libGVJdGVtcyAqIDUwICsgMjBcblx0XHRcdFx0eTogMFxuXHRcdFx0Y2xvc2VkOlxuXHRcdFx0XHRoZWlnaHQ6IDBcblx0XHRcdFx0eTogNTBcblx0XHRAY29udGFpbmVyLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiY2xvc2VkXCJcblx0XHRAY29udGFpbmVyLmFuaW1hdGlvbk9wdGlvbnMgPSB0aW1lOiAwLjVcblx0XHRcblx0XHRAbGFiZWwucGFyZW50ID0gQFxuXHRcdEBwbGFjZUhvbGRlci5wYXJlbnQgPSBAXG5cdFx0QGNvbnRhaW5lci5wYXJlbnQgPSBAYXJyb3cucGFyZW50ID0gQGxpbmUucGFyZW50ID0gIEBcblx0XHRcblx0XHRAYXJyb3cueSA9IEFsaWduLmNlbnRlcigyKVxuXHRcdEBhcnJvdy54ID0gQG9wdGlvbnMud2lkdGggLSAyNFxuXHRcdEBjb250YWluZXIueSA9IDUwXG5cdFx0XG5cdFx0cGxhY2VIb2xkZXIgPSBAcGxhY2VIb2xkZXJcblx0XHRsYWJlbCA9IEBsYWJlbFxuXHRcdGNvbnRhaW5lciA9IEBjb250YWluZXJcblx0XHRhY3RpdmVTZWxlY3Rpb24gPSBAYWN0aXZlU2VsZWN0aW9uXG5cdFx0bGFiZWxDb2xvciA9IEBsYWJlbENvbG9yXG5cbiMtLS0tLS0gc2hhZG93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdGhlaWdodDogQG9wdGlvbnMudmlzaWJsZUl0ZW1zICogNTAgKyAyMFxuXHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAY29udGFpbmVyLmJvcmRlclJhZGl1c1xuXHRcdFx0eTogMFxuXHRcdFx0bmFtZTogXCJzaGFkb3dzXCJcblxuXHRcdGZvciBpdGVtIGluIHNoYWRvdy5hcnJheVxuXHRcdFx0aXRlbS5zdGF0ZXMub3BlbiA9XG5cdFx0XHRcdHk6IDBcblx0XHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy52aXNpYmxlSXRlbXMgKiA1MCArIDIwXG5cdFx0XHRpdGVtLnN0YXRlcy5jbG9zZWQgPVxuXHRcdFx0XHRoZWlnaHQ6IDBcblx0XHRcdFx0eTogNTBcblx0XHRcdFxuXHRcdFx0aXRlbS5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC41XG5cdFx0XHRcdFx0XG5cdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzJkcFwiXG5cdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiY2xvc2VkXCJcblx0XHRcbiMtLS0tLS0gc2Nyb2xsIGFyZWEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRjb250YWluZXJfU2Nyb2xsQXJlYSA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdHBhcmVudDogQGNvbnRhaW5lclxuXHRcdFx0d2lkdGg6IEBjb250YWluZXIud2lkdGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy52aXNpYmxlSXRlbXMgKiA1MCArIDIwXG5cdFx0XHRuYW1lOiBcInNjcm9sbEFyZWFcIlxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLmNvbnRlbnQuZHJhZ2dhYmxlLm92ZXJkcmFnID0gZmFsc2Vcblx0XHRjb250YWluZXJfU2Nyb2xsQXJlYS5jb250ZW50LmRyYWdnYWJsZS5ib3VuY2UgPSBmYWxzZVxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLm1vdXNlV2hlZWxFbmFibGVkID0gdHJ1ZVxuXG4jLS0tLS0tIHNsaWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XG5cdFx0c2xpZGVyID0gbmV3IFNsaWRlckNvbXBvbmVudFxuXHRcdFx0d2lkdGg6IDVcblx0XHRcdGhlaWdodDogY29udGFpbmVyX1Njcm9sbEFyZWEuaGVpZ2h0IC0gMzBcblx0XHRcdHk6IDE1XG5cdFx0XHRib3JkZXJSYWRpdXM6IDBcblx0XHRcdHBhcmVudDogY29udGFpbmVyX1Njcm9sbEFyZWFcblx0XHRcdHg6IGNvbnRhaW5lcl9TY3JvbGxBcmVhLndpZHRoIC0gNVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRtaW46IDBcblx0XHRcdG1heDogKEBvcHRpb25zLmNob2ljZXMubGVuZ3RoICogNTApIC0gMjAwXG5cdFx0XHR2YWx1ZTogLTE1XG5cdFx0XHRuYW1lOiBzbGlkZXJcblx0XHRzbGlkZXIuZmlsbC5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG5cdFx0XG5cdFx0c2xpZGVyLmtub2IuYmFja2dyb3VuZENvbG9yID0gXCJCREJEQkRcIlxuXHRcdHNsaWRlci5rbm9iLnNoYWRvd1kgPSAwXG5cdFx0c2xpZGVyLmtub2Iuc2hhZG93U3ByZWFkID0gMFxuXHRcdHNsaWRlci5rbm9iLnNoYWRvd0JsdXIgPSAwXG5cdFx0c2xpZGVyLmtub2IuYm9yZGVyUmFkaXVzID0gMVxuXHRcdHNsaWRlci5rbm9iLndpZHRoID0gNVxuXHRcdHNsaWRlci5rbm9iLmhlaWdodCA9IDMwXG5cdFx0XG5cdFx0c2xpZGVyLm9uIFwiY2hhbmdlOnZhbHVlXCIsIC0+XG5cdFx0XHRjb250YWluZXJfU2Nyb2xsQXJlYS5jb250ZW50LnkgPSAtIHRoaXMudmFsdWUgXG5cblx0XHRjb250YWluZXJfU2Nyb2xsQXJlYS5vbk1vdmUgLT5cblx0XHRcdHNsaWRlci52YWx1ZSA9IGNvbnRhaW5lcl9TY3JvbGxBcmVhLnNjcm9sbFkgXG5cbiMtLS0tLS0gY2hvaWNlIGxvb3AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRhcyA9IG51bGxcblx0XHRcblx0XHRmb3IgaSBpbiBbMC4uLkBvcHRpb25zLmNob2ljZXMubGVuZ3RoXVxuXHRcdFx0Y2hvaWNlID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogY29udGFpbmVyX1Njcm9sbEFyZWEuY29udGVudFxuXHRcdFx0XHR3aWR0aDogY29udGFpbmVyX1Njcm9sbEFyZWEud2lkdGhcblx0XHRcdFx0aGVpZ2h0OiA1MFxuXHRcdFx0XHR5OiA1MCAqIGkgKyAxMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0bmFtZTogXCJjaG9pY2VcIlxuXG5cdFx0XHRjaG9pY2VfbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdFx0dGV4dDogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHRwYXJlbnQ6IGNob2ljZVxuXHRcdFx0XHR4OiAyMFxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXSArIFwibGFiZWxcIlxuXHRcdFx0XHRjb2xvcjogbGFiZWxfbGlnaHRcblx0XHRcdFx0XG5cdFx0XHRjaG9pY2Uub25Nb3VzZU92ZXIgLT5cblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZWVcIlxuXG5cdFx0XHRjaG9pY2Uub25Nb3VzZU91dCAtPlxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiXG5cblx0XHRcdGNob2ljZS5vbkNsaWNrIC0+XG5cdFx0XHRcdGFzID0gdGhpcy5jaGlsZHJlblswXS50ZXh0XG5cdFx0XHRcdHBsYWNlSG9sZGVyLnRleHQgPSB0aGlzLmNoaWxkcmVuWzBdLnRleHRcblx0XHRcdFx0cGxhY2VIb2xkZXIuY29sb3IgPSBsYWJlbENvbG9yXG5cdFx0XHRcdGNvbnRhaW5lci5zdGF0ZXMuc3dpdGNoIFwiY2xvc2VkXCJcblx0XHRcdFx0bGFiZWwudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Zm9yIGl0ZW0gaW4gc2hhZG93LmFycmF5XG5cdFx0XHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoIFwiY2xvc2VkXCJcblx0XHRcdFx0XG5cdFx0Y29udGFpbmVyID0gQGNvbnRhaW5lclxuXG4jLS0tLS0tIGV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIC0+XG5cdFx0XHRmb3IgaXRlbSBpbiBzaGFkb3cuYXJyYXlcblx0XHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoIFwib3BlblwiXG5cdFx0XHRjb250YWluZXIuc3RhdGVzLnN3aXRjaCBcIm9wZW5cIlxuXHRcdFx0QGFjdGl2ZVNlbGVjdGlvbiA9IGFzXG5cdFx0XHRcdFx0XG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdEBvbk1vdXNlT3ZlciBAaG92ZXJPblxuXHRcdFx0QG9uTW91c2VPdXQgQGhvdmVyT2ZmXG5cdFx0XHRcdFxuIy0tLS0tLWV2ZW50IGZ1bmN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGhvdmVyT246IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMlxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lSG92ZXJDb2xvclxuXG5cdGhvdmVyT2ZmOiAtPlxuXHRcdEBsaW5lLmhlaWdodCA9IDFcdFx0XG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVDb2xvclxuXHRcdFxuIy0tLS0tLSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnY29sb3InLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5jb2xvclxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gdmFsdWVcblxuXHRAZGVmaW5lICdjaG9pY2VzJyxcblx0XHRnZXQ6IC0+IFxuXHRcdFx0QG9wdGlvbnMuY2hvaWNlc1xuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdFx0QG9wdGlvbnMuY2hvaWNlcyA9IHZhbHVlXG5cdFx0XHRcblx0QGRlZmluZSAnYWN0aXZlU2VsZWN0aW9uJyxcblx0XHRnZXQ6IC0+IFxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uID0gdmFsdWVcblxuXHRcdFx0XG5cdFxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDEyLiBBcHBCYXIgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLkFwcEJhciBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJGb3JtXCJcblx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAyMlxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNTAwXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5sYWJlbENvbG9yID0gXCIjZmZmXCJcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRAb3B0aW9ucy5tb2JpbGUgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5tZW51SWNvblZpc2JsZSA/PSB0cnVlXG5cdFx0QG9wdGlvbnMubmFtZSA/PSBcImFwcCBiYXJcIlxuXHRcdEBvcHRpb25zLnN0YXR1c0ljb25zWSA/PSBBbGlnbi5jZW50ZXIoLTgpXG5cdFx0QG9wdGlvbnMubWVudUljb25ZID89IEFsaWduLmNlbnRlcigpXG5cbiMtLS0tLS0gZWxlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGFwcENvbnQgPSBuZXcgTGF5ZXJcblx0XHRcdGhlaWdodDogNTZcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRuYW1lOiBcImFwcCBiYXIgY29udGlhbmVyXCJcblxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKCkgb3IgQG9wdGlvbnMubW9iaWxlIGlzIHRydWVcblx0XHRcdEBzdGF0dXNCYXIgPSBuZXcgTGF5ZXJcblx0XHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRcdGhlaWdodDogMjRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC4zMClcIlxuXHRcdFx0XHRuYW1lOiBcInN0YXR1cyBiYXJcIlxuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDgwXG5cdFx0XHRAYXBwQ29udC55ID0gMjRcblx0XHRlbHNlXG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gNTZcblx0XG5cdFx0QG1lbnVJY29uID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiA0OFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiBAb3B0aW9ucy5tZW51SWNvblZpc2JsZVxuXHRcdFx0bmFtZTogXCJtZW51IGljb25cIlxuXHRcdFx0XG5cdFx0QHRpdGxlID0gbmV3IFRleHRMYXllclxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuZm9udFNpemVcblx0XHRcdGZvbnRGYW1pbHk6IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGNvbG9yOiBAb3B0aW9ucy5sYWJlbENvbG9yXG5cdFx0XHRmb250V2VpZ2h0OiBAb3B0aW9ucy5mb250V2VpZ2h0XG5cdFx0XHRuYW1lOiBcInRpdGxlXCJcblxuIy0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0c2hhZG93ID0gbmV3IFNoYWRvd1xuXHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0aGVpZ2h0OiBAaGVpZ2h0XG5cdFx0XHRuYW1lOiBcInNoYWRvd3NcIlxuXG5cdFx0c2hhZG93LnBhcmVudCAgPSBAXG5cdFx0QHRpdGxlLnBhcmVudCA9IEBcblx0XHRAdGl0bGUueSA9IEFsaWduLmNlbnRlcigpXG5cdFx0QHRpdGxlLnggPSAxNlxuXHRcdEBhcHBDb250LnBhcmVudCA9IEBcblx0XHRAbWVudUljb24ucGFyZW50ID0gQHRpdGxlLnBhcmVudCA9IEBhcHBDb250XG5cdFx0QG1lbnVJY29uLnggPSAxNlxuXHRcdEBtZW51SWNvbi55ID0gQG9wdGlvbnMubWVudUljb25ZXG5cblx0XHRpZiAgQG1lbnVJY29uLnZpc2libGUgaXMgdHJ1ZVxuXHRcdFx0QHRpdGxlLnggPSA0OCArIDE2ICsgMTZcblxuIy0tLS0tLSBtZW51IGljb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblx0XHRtZW51SWNvbiA9IG5ldyBMYXllclxuXHRcdFx0aHRtbDogJzxzdmcgd2lkdGg9XCIxOHB4XCIgaGVpZ2h0PVwiMTJweFwiIHZpZXdCb3g9XCIwIDAgMTggMTJcIj48ZyBpZD1cIlBhZ2UtMVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk0wLDIgTDE4LDIgTDE4LDAgTDAsMCBMMCwyIFogTTAsNi45NyBMMTgsNi45NyBMMTgsNSBMMCw1IEwwLDYuOTcgWiBNMCwxMiBMMTgsMTIgTDE4LDEwIEwwLDEwIEwwLDEyIFpcIiBmaWxsPVwiI2ZmZlwiPjwvcGF0aD48L2c+PC9zdmc+J1xuXHRcdFx0d2lkdGg6IDE4XG5cdFx0XHRoZWlnaHQ6IDEyXG5cdFx0XHRwYXJlbnQ6IEBtZW51SWNvblxuXHRcdFx0eDogQWxpZ24uY2VudGVyKClcblx0XHRcdHk6IEFsaWduLmNlbnRlcigpXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdG5hbWU6IFwiaWNvblwiXG5cbiMtLS0tLS0gc3RhdHVzIGJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRpZiBVdGlscy5pc01vYmlsZSgpIG9yIEBvcHRpb25zLm1vYmlsZSBpcyB0cnVlXG5cdFx0XHRAc3RhdHVzQmFyLnBhcmVudCA9IEBcblx0XHRcdEB0aXRsZS55ID0gIEFsaWduLmNlbnRlcigxMClcblx0XHRcdFxuXHRcdFx0c3RhdHVzQmFyVGltZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdFx0Zm9udFNpemU6IDEzXG5cdFx0XHRcdHBhcmVudDogQHN0YXR1c0JhclxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0eDogQHdpZHRoIC0gNTVcblx0XHRcdFx0Y29sb3IgOiBcIiNmZmZcIlxuXHRcdFx0XHRmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRcdFx0dGV4dEFsaWduOiBcInJpZ2h0XCJcblx0XHRcdFx0bmFtZTogXCJzdGF0dXMgYmFyIHRpbWVcIlxuXG5cdFx0XHRzZXRUaW1lID0gKCkgLT5cblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlXG5cdFx0XHRcdG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpXG5cdFx0XHRcdGhvdXIgPSBkYXRlLmdldEhvdXJzKClcblx0XHRcdFx0XG5cdFx0XHRcdHpvbmUgPSBcIkFNXCJcblx0XHRcdFx0XG5cdFx0XHRcdGlmIGhvdXIgPCAxMFxuXHRcdFx0XHRcdGhvdXIgPSAnMCcgKyBob3VyIFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRpZiBob3VyID4gMTJcblx0XHRcdFx0XHRob3VyID0gaG91ciAtIDEyXG5cdFx0XHRcdFx0em9uZSA9IFwiUE1cIlxuXHRcdFx0XHRlbHNlXHRcblx0XHRcdFx0XHR6b25lID0gXCJBTVwiXG5cdFx0XHRcdFxuXHRcdFx0XHRpZiBtaW51dGUgPCAxMFxuXHRcdFx0XHRcdG1pbnV0ZSA9ICcwJyArIG1pbnV0ZSBcblx0XHRcdFx0XHRcblx0XHRcdFx0c3RhdHVzQmFyVGltZS50ZXh0ID0gXCIje2hvdXJ9OiN7bWludXRlfSAje3pvbmV9XCJcblx0XHRcdFx0XG5cdFx0XHRcdFV0aWxzLmRlbGF5IDMwLCAtPlxuXHRcdFx0XHRcdHNldFRpbWUoKVxuXHRcdFx0XHRcdFxuXHRcdFx0c2V0VGltZSgpXG5cdFx0XHRcblx0XHRcdHN0YXR1c0ljb25zID0gbmV3IExheWVyXG5cdFx0XHRcdG5hbWU6IFwic3RhdHVzIGljb25zXCJcblx0XHRcdFx0cGFyZW50OiBAc3RhdHVzQmFyXG5cdFx0XHRcdGh0bWw6ICc8c3ZnIHdpZHRoPVwiNTNweFwiIGhlaWdodD1cIjE2cHhcIj48Zz48cGF0aCBkPVwiTTM0LjYwOTMyMTYsMC42MDkwMzc0OSBMMzQuNjA5MzIxNiwxNS4xMDc0NTkyIEwyMC4xMTA4OTk5LDE1LjEwNzQ1OTIgTDM0LjYwOTMyMTYsMC42MDkwMzc0OSBaIE0xNS4yOTQ2MTQsNy4wNDc0NzQ3NSBMMTUuMzI4MDEwNSw3LjA4MDg3MTIxIEw5LjE2ODU0MDc2LDE0LjcwMzk3NzMgTDMuMDA5MDcxMDYsNy4wODA4NzEyMSBMMy4wNDI0Njc1Miw3LjA0NzQ3NDc1IEwwLjcyOTM5OTM0Miw0LjE4ODQ0Njk3IEMzLjQ3MzcxNzUyLDIuMjYwMTY0MTQgNi4yODc3MzI2OCwxLjI5NjAyMjczIDkuMTY4NTQwNzYsMS4yOTYwMjI3MyBDMTIuMDUwODAwOSwxLjI5NjAyMjczIDE0Ljg2MzM2NCwyLjI2MDE2NDE0IDE3LjYwOTEzNDIsNC4xODg0NDY5NyBMMTUuMjk0NjE0LDcuMDQ3NDc0NzUgWiBNNTEuMjIyOTQyMSwyLjE0NDAwMDY5IEM1MS41NzQxMzMsMi4xNDQwMDA2OSA1MS44NzY0OTUyLDIuMjY3OTUwNDMgNTIuMTI0Mzk0NywyLjUxNzcyNzk0IEM1Mi4zNzQxNzIyLDIuNzY3NTA1NDUgNTIuNSwzLjA2Nzk4OTY3IDUyLjUsMy40MjEwNTg2MyBMNTIuNSwxMy44MTQyNTI5IEM1Mi41LDE0LjE2NTQ0MzggNTIuMzc0MTcyMiwxNC40NjAyOTM5IDUyLjEyNDM5NDcsMTQuNjk1MDQ3MiBDNTEuODc2NDk1MiwxNC45Mjk4MDA1IDUxLjU3NDEzMywxNS4wNDYyMzgyIDUxLjIyMjk0MjEsMTUuMDQ2MjM4MiBMNDQuMzU2ODc3NiwxNS4wNDYyMzgyIEM0NC4wMDM4MDg2LDE1LjA0NjIzODIgNDMuNzAzMzI0NCwxNC45Mjk4MDA1IDQzLjQ1MzU0NjksMTQuNjk1MDQ3MiBDNDMuMjAzNzY5NCwxNC40NjAyOTM5IDQzLjA3OTgxOTYsMTQuMTY1NDQzOCA0My4wNzk4MTk2LDEzLjgxNDI1MjkgTDQzLjA3OTgxOTYsMy40MjEwNTg2MyBDNDMuMDc5ODE5NiwzLjA2Nzk4OTY3IDQzLjIwMzc2OTQsMi43Njc1MDU0NSA0My40NTM1NDY5LDIuNTE3NzI3OTQgQzQzLjcwMzMyNDQsMi4yNjc5NTA0MyA0NC4wMDM4MDg2LDIuMTQ0MDAwNjkgNDQuMzU2ODc3NiwyLjE0NDAwMDY5IEw0NS44OTY4NTkyLDIuMTQ0MDAwNjkgTDQ1Ljg5Njg1OTIsMC4yOTYwMjI3MjcgTDQ5LjY4Mjk2MDQsMC4yOTYwMjI3MjcgTDQ5LjY4Mjk2MDQsMi4xNDQwMDA2OSBMNTEuMjIyOTQyMSwyLjE0NDAwMDY5IFpcIiBmaWxsPVwiI2ZmZlwiPjwvcGF0aD48L2c+PC9zdmc+J1xuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0d2lkdGg6IDUzXG5cdFx0XHRcdGhlaWdodDogMTZcblx0XHRcdFx0eTogQG9wdGlvbnMuc3RhdHVzSWNvbnNZXG5cdFx0XHRcdHg6IEB3aWR0aCAtIHN0YXR1c0JhclRpbWUud2lkdGggLSA3MFxuXG5cdFx0XHRAdGl0bGUueSA9IEFsaWduLmNlbnRlclxuXG4jLS0tLS0tIG9uIHJlc2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcblx0XHRhdCA9IEBcblx0XHRzdGF0dXNCYXIgPSBAc3RhdHVzQmFyXG5cdFx0aXNNb2IgPSBAb3B0aW9ucy5tb2JpbGVcblx0XHRcblx0XHR3aW5kb3cub25yZXNpemUgPSAtPlxuXHRcdFx0YXQud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRcdHNoYWRvdy51bWJyYS53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0c2hhZG93LmFtYmllbnQud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRcdHNoYWRvdy5wZW51bWJyYS53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0aWYgVXRpbHMuaXNNb2JpbGUoKSBvciBpc01vYiBpcyB0cnVlXG5cdFx0XHRcdHN0YXR1c0Jhci53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0XHRzdGF0dXNCYXJUaW1lLnggPSBTY3JlZW4ud2lkdGggLSA1NVxuXHRcdFx0XHRzdGF0dXNJY29ucy54ID0gU2NyZWVuLndpZHRoIC0gc3RhdHVzQmFyVGltZS53aWR0aCAtIDY4XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRHdCQSxJQUFBLHdNQUFBO0VBQUE7Ozs7QUFBQSxXQUFBLEdBQWM7O0FBQ2QsVUFBQSxHQUFhOztBQUNiLFVBQUEsR0FBYTs7QUFDYixTQUFBLEdBQVk7O0FBQ1osV0FBQSxHQUFjOztBQUNkLFVBQUEsR0FBYTs7QUFDYixnQkFBQSxHQUFtQixTQUFBLEdBQVk7O0FBQy9CLGVBQUEsR0FBa0IsUUFBQSxHQUFXOztBQUM3QixnQkFBQSxHQUFtQjs7QUFDbkIsZUFBQSxHQUFrQjs7QUFJWjs7O0VBQ1EsZUFBQyxPQUFEO0FBRVosUUFBQTtJQUZhLElBQUMsQ0FBQSw0QkFBRCxVQUFTO0lBRXRCLEtBQUssQ0FBQyxTQUFOLENBQWdCLDhEQUFoQjs7VUFFUSxDQUFDLGFBQWM7OztXQUNmLENBQUMsV0FBWTs7O1dBQ2IsQ0FBQyxPQUFROzs7V0FDVCxDQUFDLFFBQVM7OztXQUNWLENBQUMsYUFBYzs7O1dBQ2YsQ0FBQyxnQkFBaUI7OztXQUNsQixDQUFDLE9BQVE7O0lBRWpCLHVDQUFNLElBQUMsQ0FBQSxPQUFQO0VBWlk7Ozs7R0FETTs7QUFrQmQ7OztFQUNRLGdCQUFDLE9BQUQ7QUFFWixRQUFBO0lBRmEsSUFBQyxDQUFBLDRCQUFELFVBQVM7O1VBRWQsQ0FBQyxrQkFBbUI7O0lBRTVCLElBQUMsQ0FBQSxLQUFELEdBQWEsSUFBQSxLQUFBLENBQ1o7TUFBQSxLQUFBLEVBQU8sSUFBQyxDQUFBLE9BQU8sQ0FBQyxLQUFoQjtNQUNBLE1BQUEsRUFBUSxJQUFDLENBQUEsT0FBTyxDQUFDLE1BRGpCO01BRUEsZUFBQSxF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
