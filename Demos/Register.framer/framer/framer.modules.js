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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3Rlc3NnYWRkL0RvY3VtZW50cy9HaXRIdWIvTWF0ZXJpYWxDb21wb25lbnRzL0RlbW9zL1JlZ2lzdGVyLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3Rlc3NnYWRkL0RvY3VtZW50cy9HaXRIdWIvTWF0ZXJpYWxDb21wb25lbnRzL0RlbW9zL1JlZ2lzdGVyLmZyYW1lci9tb2R1bGVzL01hdGVyaWFsQ29tcG9uZW50cy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyBNYXRlcmlhbENvbXBvbmVudHMgdmVyc2lvbiAxXG4jIE1hZGUgYnkgVGVzcyBHYWRkIGh0dHBzOi8vbWVkaXVtLmNvbS9AdGVzc2dhZGRcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIFRoaXMgdmVyc2lvbiBjb250YWluc1xuIyAwLiBnbG9iYWwgZWxlbWVudHNcbiMgMS4gQ29sb3JcbiMgMi4gRmxhdEJ1dHRvblxuIyAzLiBSYWlzZWRCdXR0b25cbiMgNC4gRkFCXG4jIDUuIENoZWNrYm94ZXNcbiMgNi4gUmFkaW8gQnV0dG9uc1xuIyA3LiBTd2l0Y2hcbiMgOC4gVGV4dEZpZWxkIChUZXh0IGZpZWxkcyBmcmFua2Vuc3RpZW5kIGZyb20gSm9yZGFuIFJvYmVydCBEb2Jzb24ncyBJbnB1dEZpZWxkKVxuIyA5LiBUZXh0RmllbGRfVmFsaWRhdGlvbiAoVGV4dCBmaWVsZHMgZnJhbmtlbnN0aWVuZCBmcm9tIEpvcmRhbiBSb2JlcnQgRG9ic29uJ3MgSW5wdXRGaWVsZClcbiMgMTAuIFRleHRBcmVhIChmcmFua2Vuc3RpZW5kIGZyb20gSm9yZGFuIFJvYmVydCBEb2Jzb24ncyBJbnB1dEZpZWxkIGFuZCBCbGFpbmUgQmlsbGluZ3NsZXkncyBBdXRvZ3JvdylcbiMgMTEuIFRleHRGaWVsZF9Ecm9wZG93blxuIyAxMi4gQXBwQmFyXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDAuIEdsb2JhbCBFbGVtZW50cyAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jLS0tLS0tLS0tY29sb3JzXG5sYWJlbF9saWdodCA9IFwicmdiYSgwLDAsMCwwLjg3KVwiXG5sYWJlbF9kYXJrID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbmxpbmVfbGlnaHQgPSBcInJnYmEoMCwwLDAsMC41NClcIlxubGluZV9kYXJrID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNylcIlxuaW5wdXRfbGlnaHQgPSBcInJnYmEoMCwwLDAsMC41NClcIlxuaW5wdXRfZGFyayA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5JbnB1dGxhYmVsX2xpZ2h0ID0gYm94X2xpZ2h0ID0gXCJyZ2JhKDAsMCwwLDAuNTQpXCJcbklucHV0bGFiZWxfZGFyayA9IGJveF9kYXJrID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNylcIlxubGluZV9saWdodF9ob3ZlciA9IFwicmdiYSgwLDAsMCwwLjg3KVwiXG5saW5lX2RhcmtfaG92ZXIgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuXG5cbiMtLS0tLS0tLS10ZXh0bGF5ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBMYWJlbCBleHRlbmRzIFRleHRMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTsnKVxuXHRcdFxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTZcblx0XHRAb3B0aW9ucy50ZXh0ID89ICdMYWJlbCdcblx0XHRAb3B0aW9ucy5jb2xvciA/PSBsYWJlbF9saWdodFxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNDAwXG5cdFx0QG9wdGlvbnMubGV0dGVyU3BhY2luZyA/PSAwXG5cdFx0QG9wdGlvbnMubmFtZSA/PSBcImxhYmVsXCJcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblxuXG4jLS0tLS0tLS0tc2hhZG93LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBTaGFkb3cgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiXCJcblxuXHRcdEB1bWJyYSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRib3JkZXJSYWRpdXM6IEBvcHRpb25zLmJvcmRlclJhZGl1c1xuXHRcdFx0c2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwwLjE0KVwiXG5cdFx0XHRuYW1lOiBcInVtYnJhXCJcblx0XHRcdFxuXHRcdEB1bWJyYS5zdGF0ZXMgPVxuXHRcdFx0XzEyZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiAxMlxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxN1xuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDJcblx0XHRcdF84ZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiA0XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDE1XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzZkcDpcblx0XHRcdFx0c2hhZG93WTogNlxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF80ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDJcblx0XHRcdFx0c2hhZG93Qmx1cjogNFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcdFxuXHRcdFx0XzJkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDBcblx0XHRcdFx0c2hhZG93Qmx1cjogMlxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF8xZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMGRwOiBcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXG5cdFx0QHBlbnVtYnJhID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRzaGFkb3dDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMTIpXCJcblx0XHRcdG5hbWU6IFwicGVudW1icmFcIlxuXHRcdFx0XG5cdFx0QHBlbnVtYnJhLnN0YXRlcyA9XG5cdFx0XHRfMTJkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDVcblx0XHRcdFx0c2hhZG93Qmx1cjogMjJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiA0XG5cdFx0XHRfOGRwOiBcblx0XHRcdFx0c2hhZG93WTogM1xuXHRcdFx0XHRzaGFkb3dCbHVyOiAxNFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDNcblx0XHRcdF82ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogMThcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfNGRwOlxuXHRcdFx0XHRzaGFkb3dZOiA0XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDVcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXHRcblx0XHRcdF8yZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiAyXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMWRwOiBcblx0XHRcdFx0c2hhZG93WTogMlxuXHRcdFx0XHRzaGFkb3dCbHVyOiAyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFx0XHRcdFx0XG5cdFx0XHRfMGRwOiBcblx0XHRcdFx0c2hhZG93WTogMFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXG5cdFx0QGFtYmllbnQ9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRzaGFkb3dDb2xvcjogXCJyZ2JhKDAsMCwwLDAuMjApXCJcblx0XHRcdG5hbWU6IFwiYW1iaWVudFwiXG5cdFx0XHRib3JkZXJSYWRpdXMgOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdFxuXHRcdEBhbWJpZW50LnN0YXRlcyA9XG5cdFx0XHRfMTJkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDdcblx0XHRcdFx0c2hhZG93Qmx1cjogOFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF84ZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiA4XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDEwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMVxuXHRcdFx0XzZkcDpcblx0XHRcdFx0c2hhZG93WTogM1xuXHRcdFx0XHRzaGFkb3dCbHVyOiA1XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzRkcDpcblx0XHRcdFx0c2hhZG93WTogMVxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcdFxuXHRcdFx0XzJkcDpcblx0XHRcdFx0c2hhZG93WTogMVxuXHRcdFx0XHRzaGFkb3dCbHVyOiAzXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzFkcDogXG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogM1xuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF8wZHA6IFxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cblx0XHRAdW1icmEuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuMlxuXHRcdEBwZW51bWJyYS5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC4yXHRcblx0XHRAYW1iaWVudC5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC4yXG5cdFx0XG5cdFx0QHVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzJkcFwiXG5cdFx0QHBlbnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzJkcFwiXG5cdFx0QGFtYmllbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAdW1icmEucGFyZW50ID0gQFxuXHRcdEBwZW51bWJyYS5wYXJlbnQgPSBAXG5cdFx0QGFtYmllbnQucGFyZW50ID0gQFxuXG5cdFx0QGFycmF5ID0gW0B1bWJyYSwgQHBlbnVtYnJhLCBAYW1iaWVudF1cblxuXG5cbiMtLS0tLS0tLUljb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBTeXN0ZW1JY29uIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRcblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpOyBAaW1wb3J0IHVybChodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vY29kZS5nZXRtZGwuaW8vMS4wLjYvbWF0ZXJpYWwuaW5kaWdvLXBpbmsubWluLmNzcyk7IC5tYXRlcmlhbC1pY29ucy50YWJ7fScpXG5cblx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAyNFxuXG5cblx0XHRAb3B0aW9ucy5pY29uID89IFwiYW5kcm9pZFwiXG5cdFx0QG9wdGlvbnMuaHRtbCA9IFwiPGkgY2xhc3M9J21hdGVyaWFsLWljb25zIHRhYic+XCIgKyBAb3B0aW9ucy5pY29uICsgXCI8L2k+XCJcblx0XHRAb3B0aW9ucy5jb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdEBvcHRpb25zLmhlaWdodCA/PSBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdEBvcHRpb25zLndpZHRoID89IEBvcHRpb25zLmZvbnRTaXplXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdEBkZWZpbmUgJ2ZvbnRTaXplJyxcblx0XHRnZXQ6IC0+IFxuXHRcdFx0QG9wdGlvbnMuZm9udFNpemVcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA9IHZhbHVlXG5cblx0XHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7IEBpbXBvcnQgdXJsKGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jb2RlLmdldG1kbC5pby8xLjAuNi9tYXRlcmlhbC5pbmRpZ28tcGluay5taW4uY3NzKTsgLm1hdGVyaWFsLWljb25zLnRhYnt9JylcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDEuIENvbG9yICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuY29sb3IgZXh0ZW5kcyBMYXllclxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG4gICAgICAgIEBvcHRpb25zID0gXy5kZWZhdWx0cyBAb3B0aW9ucyxcbiAgICAgICAgc3VwZXIgQG9wdGlvbnNcblxuI3JlZHMtLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0ZXhwb3J0cy5yZWQgPSBcIiNGNDQzMzZcIlxuXHRcdGV4cG9ydHMucmVkNTAgPSBcIiNGRkVCRUVcIlxuXHRcdGV4cG9ydHMucmVkMTAwID0gXCIjRkZDREQyXCJcblx0XHRleHBvcnRzLnJlZDIwMCA9IFwiI0VGOUE5QVwiXG5cdFx0ZXhwb3J0cy5yZWQzMDAgPSBcIiNFNTczNzNcIlxuXHRcdGV4cG9ydHMucmVkNDAwID0gXCIjRUY1MzUwXCJcblx0XHRleHBvcnRzLnJlZDUwMCA9IFwiI0Y0NDMzNlwiXG5cdFx0ZXhwb3J0cy5yZWQ2MDAgPSBcIiNFNTM5MzVcIlxuXHRcdGV4cG9ydHMucmVkNzAwID0gXCIjRDMyRjJGXCJcblx0XHRleHBvcnRzLnJlZDgwMCA9IFwiI0M2MjgyOFwiXG5cdFx0ZXhwb3J0cy5yZWQ5MDAgPSBcIiNCNzFDMUNcIlxuXHRcdGV4cG9ydHMucmVkQTEwMCA9IFwiI0ZGOEE4MFwiXG5cdFx0ZXhwb3J0cy5yZWRBMjAwID0gXCIjRkY1MjUyXCJcblx0XHRleHBvcnRzLnJlZEE0MDAgPSBcIiNGRjE3NDRcIlxuXHRcdGV4cG9ydHMucmVkQTcwMCA9IFwiI0Q1MDAwMFwiXG5cbiNwaW5rLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLnBpbmsgPSBcIiNFOTFFNjNcIlxuXHRcdGV4cG9ydHMucGluazUwID0gXCIjRkNFNEVDXCJcblx0XHRleHBvcnRzLnBpbmsxMDAgPSBcIiNGOEJCRDBcIlxuXHRcdGV4cG9ydHMucGluazIwMCA9IFwiI0Y0OEZCMVwiXG5cdFx0ZXhwb3J0cy5waW5rMzAwID0gXCIjRjA2MjkyXCJcblx0XHRleHBvcnRzLnBpbms0MDAgPSBcIiNFQzQwN0FcIlxuXHRcdGV4cG9ydHMucGluazUwMCA9IFwiI0U5MUU2M1wiXG5cdFx0ZXhwb3J0cy5waW5rNjAwID0gXCIjRDgxQjYwXCJcblx0XHRleHBvcnRzLnBpbms3MDAgPSBcIiNDMjE4NUJcIlxuXHRcdGV4cG9ydHMucGluazgwMCA9IFwiI0FEMTQ1N1wiXG5cdFx0ZXhwb3J0cy5waW5rOTAwID0gXCIjODgwRTRGXCJcblx0XHRleHBvcnRzLnBpbmtBMTAwID0gXCIjRkY4MEFCXCJcblx0XHRleHBvcnRzLnBpbmtBMjAwID0gXCIjRkY0MDgxXCJcblx0XHRleHBvcnRzLnBpbmtBNDAwID0gXCIjRjUwMDU3XCJcblx0XHRleHBvcnRzLnBpbmtBNzAwID0gXCIjQzUxMTYyXCJcblxuXG4jcHVycGxlLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLnB1cnBsZSA9IFwiIzlDMjdCMFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU1MCA9IFwiI0YzRTVGNVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGUxMDAgPSBcIiNFMUJFRTdcIlxuXHRcdGV4cG9ydHMucHVycGxlMjAwID0gXCIjQ0U5M0Q4XCJcblx0XHRleHBvcnRzLnB1cnBsZTMwMCA9IFwiI0JBNjhDOFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU0MDAgPSBcIiNBQjQ3QkNcIlxuXHRcdGV4cG9ydHMucHVycGxlNTAwID0gXCIjOUMyN0IwXCJcblx0XHRleHBvcnRzLnB1cnBsZTYwMCA9IFwiIzhFMjRBQVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU3MDAgPSBcIiM3QjFGQTJcIlxuXHRcdGV4cG9ydHMucHVycGxlODAwID0gXCIjNkExQjlBXCJcblx0XHRleHBvcnRzLnB1cnBsZTkwMCA9IFwiIzRBMTQ4Q1wiXG5cdFx0ZXhwb3J0cy5wdXJwbGVBMTAwID0gXCIjRUE4MEZDXCJcblx0XHRleHBvcnRzLnB1cnBsZUEyMDAgPSBcIiNFMDQwRkJcIlxuXHRcdGV4cG9ydHMucHVycGxlQTQwMCA9IFwiI0Q1MDBGOVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGVBNzAwID0gXCIjQUEwMEZGXCJcblxuI0RlZXAgcHVycGxlLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmRlZXBQdXJwbGUgPSBcIiM2NzNBQjdcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTUwID0gXCIjRURFN0Y2XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGUxMDAgPSBcIiNEMUM0RTlcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTIwMCA9IFwiI0IzOUREQlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlMzAwID0gXCIjOTU3NUNEXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU0MDAgPSBcIiM3RTU3QzJcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTUwMCA9IFwiIzY3M0FCN1wiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlNjAwID0gXCIjNUUzNUIxXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU3MDAgPSBcIiM1MTJEQThcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTgwMCA9IFwiIzQ1MjdBMFwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlOTAwID0gXCIjMzExQjkyXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBMTAwID0gXCIjQjM4OEZGXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBMjAwID0gXCIjN0M0REZGXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBNDAwID0gXCIjNjUxRkZGXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBNzAwID0gXCIjNjIwMEVBXCJcbiNpbmRpZ28tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuaW5kaWdvID0gXCIjM0Y1MUI1XCJcblx0XHRleHBvcnRzLmluZGlnbzUwID0gXCIjRThFQUY2XCJcblx0XHRleHBvcnRzLmluZGlnbzEwMCA9IFwiI0M1Q0FFOVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ28yMDAgPSBcIiM5RkE4REFcIlxuXHRcdGV4cG9ydHMuaW5kaWdvMzAwID0gXCIjNzk4NkNCXCJcblx0XHRleHBvcnRzLmluZGlnbzQwMCA9IFwiIzVDNkJDMFwiXG5cdFx0ZXhwb3J0cy5pbmRpZ281MDAgPSBcIiMzRjUxQjVcIlxuXHRcdGV4cG9ydHMuaW5kaWdvNjAwID0gXCIjMzk0OUFCXCJcblx0XHRleHBvcnRzLmluZGlnbzcwMCA9IFwiIzMwM0Y5RlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ284MDAgPSBcIiMyODM1OTNcIlxuXHRcdGV4cG9ydHMuaW5kaWdvOTAwID0gXCIjMUEyMzdFXCJcblx0XHRleHBvcnRzLmluZGlnb0ExMDAgPSBcIiM4QzlFRkZcIlxuXHRcdGV4cG9ydHMuaW5kaWdvQTIwMCA9IFwiIzUzNkRGRVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ29BNDAwID0gXCIjM0Q1QUZFXCJcblx0XHRleHBvcnRzLmluZGlnb0E3MDAgPSBcIiMzMDRGRkVcIlxuI2JsdWUtLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuYmx1ZSA9IFwiIzIxOTZGM1wiXG5cdFx0ZXhwb3J0cy5ibHVlNTAgPSBcIiNFM0YyRkRcIlxuXHRcdGV4cG9ydHMuYmx1ZTEwMCA9IFwiI0JCREVGQlwiXG5cdFx0ZXhwb3J0cy5ibHVlMjAwID0gXCIjOTBDQUY5XCJcblx0XHRleHBvcnRzLmJsdWUzMDAgPSBcIiM2NEI1RjZcIlxuXHRcdGV4cG9ydHMuYmx1ZTQwMCA9IFwiIzQyQTVGNVwiXG5cdFx0ZXhwb3J0cy5ibHVlNTAwID0gXCIjMjE5NkYzXCJcblx0XHRleHBvcnRzLmJsdWU2MDAgPSBcIiMxRTg4RTVcIlxuXHRcdGV4cG9ydHMuYmx1ZTcwMCA9IFwiIzE5NzZEMlwiXG5cdFx0ZXhwb3J0cy5ibHVlODAwID0gXCIjMTU2NUMwXCJcblx0XHRleHBvcnRzLmJsdWU5MDAgPSBcIiMwRDQ3QTFcIlxuXHRcdGV4cG9ydHMuYmx1ZUExMDAgPSBcIiM4MkIxRkZcIlxuXHRcdGV4cG9ydHMuYmx1ZUEyMDAgPSBcIiM0NDhBRkZcIlxuXHRcdGV4cG9ydHMuYmx1ZUE0MDAgPSBcIiMyOTc5RkZcIlxuXHRcdGV4cG9ydHMuYmx1ZUE3MDAgPSBcIiMyOTYyRkZcIlxuI2xpZ2h0IGJsdWUtLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZSA9IFwiIzAzQTlGNFwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU1MCA9IFwiI0UxRjVGRVwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWUxMDAgPSBcIiNCM0U1RkNcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlMjAwID0gXCIjODFENEZBXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTMwMCA9IFwiIzRGQzNGN1wiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU0MDAgPSBcIiMyOUI2RjZcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNTAwID0gXCIjMDNBOUY0XCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTYwMCA9IFwiIzAzOUJFNVwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU3MDAgPSBcIiMwMjg4RDFcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlODAwID0gXCIjMDI3N0JEXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTkwMCA9IFwiIzAxNTc5QlwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWVBMTAwID0gXCIjODBEOEZGXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZUEyMDAgPSBcIiM0MEM0RkZcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlQTQwMCA9IFwiIzAwQjBGRlwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWVBNzAwID0gXCIjMDA5MUVBXCJcbiNjeWFuLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuY3lhbiA9IFwiIzAwQkNENFwiXG5cdFx0ZXhwb3J0cy5jeWFuNTAgPSBcIiNFMEY3RkFcIlxuXHRcdGV4cG9ydHMuY3lhbjEwMCA9IFwiI0IyRUJGMlwiXG5cdFx0ZXhwb3J0cy5jeWFuMjAwID0gXCIjODBERUVBXCJcblx0XHRleHBvcnRzLmN5YW4zMDAgPSBcIiM0REQwRTFcIlxuXHRcdGV4cG9ydHMuY3lhbjQwMCA9IFwiIzI2QzZEQVwiXG5cdFx0ZXhwb3J0cy5jeWFuNTAwID0gXCIjMDBCQ0Q0XCJcblx0XHRleHBvcnRzLmN5YW42MDAgPSBcIiMwMEFDQzFcIlxuXHRcdGV4cG9ydHMuY3lhbjcwMCA9IFwiIzAwOTdBN1wiXG5cdFx0ZXhwb3J0cy5jeWFuODAwID0gXCIjMDA4MzhGXCJcblx0XHRleHBvcnRzLmN5YW45MDAgPSBcIiMwMDYwNjRcIlxuXHRcdGV4cG9ydHMuY3lhbkExMDAgPSBcIiM4NEZGRkZcIlxuXHRcdGV4cG9ydHMuY3lhbkEyMDAgPSBcIiMxOEZGRkZcIlxuXHRcdGV4cG9ydHMuY3lhbkE0MDAgPSBcIiMwMEU1RkZcIlxuXHRcdGV4cG9ydHMuY3lhbkE3MDAgPSBcIiMwMEI4RDRcIlxuI3RlYWwtLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy50ZWFsID0gXCIjMDA5Njg4XCJcblx0XHRleHBvcnRzLnRlYWw1MCA9IFwiI0UwRjJGMVwiXG5cdFx0ZXhwb3J0cy50ZWFsMTAwID0gXCIjQjJERkRCXCJcblx0XHRleHBvcnRzLnRlYWwyMDAgPSBcIiM4MENCQzRcIlxuXHRcdGV4cG9ydHMudGVhbDMwMCA9IFwiIzREQjZBQ1wiXG5cdFx0ZXhwb3J0cy50ZWFsNDAwID0gXCIjMjZBNjlBXCJcblx0XHRleHBvcnRzLnRlYWw1MDAgPSBcIiMwMDk2ODhcIlxuXHRcdGV4cG9ydHMudGVhbDYwMCA9IFwiIzAwODk3QlwiXG5cdFx0ZXhwb3J0cy50ZWFsNzAwID0gXCIjMDA3OTZCXCJcblx0XHRleHBvcnRzLnRlYWw4MDAgPSBcIiMwMDY5NUNcIlxuXHRcdGV4cG9ydHMudGVhbDkwMCA9IFwiIzAwNEQ0MFwiXG5cdFx0ZXhwb3J0cy50ZWFsQTEwMCA9IFwiI0E3RkZFQlwiXG5cdFx0ZXhwb3J0cy50ZWFsQTIwMCA9IFwiIzY0RkZEQVwiXG5cdFx0ZXhwb3J0cy50ZWFsQTQwMCA9IFwiIzFERTlCNlwiXG5cdFx0ZXhwb3J0cy50ZWFsQTcwMCA9IFwiIzAwQkZBNVwiXG4jZ3JlZW4tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmdyZWVuID0gXCIjNENBRjUwXCJcblx0XHRleHBvcnRzLmdyZWVuNTAgPSBcIiNFOEY1RTlcIlxuXHRcdGV4cG9ydHMuZ3JlZW4xMDAgPSBcIiNDOEU2QzlcIlxuXHRcdGV4cG9ydHMuZ3JlZW4yMDAgPSBcIiNBNUQ2QTdcIlxuXHRcdGV4cG9ydHMuZ3JlZW4zMDAgPSBcIiM4MUM3ODRcIlxuXHRcdGV4cG9ydHMuZ3JlZW40MDAgPSBcIiM2NkJCNkFcIlxuXHRcdGV4cG9ydHMuZ3JlZW41MDAgPSBcIiM0Q0FGNTBcIlxuXHRcdGV4cG9ydHMuZ3JlZW42MDAgPSBcIiM0M0EwNDdcIlxuXHRcdGV4cG9ydHMuZ3JlZW43MDAgPSBcIiMzODhFM0NcIlxuXHRcdGV4cG9ydHMuZ3JlZW44MDAgPSBcIiMyRTdEMzJcIlxuXHRcdGV4cG9ydHMuZ3JlZW45MDAgPSBcIiMxQjVFMjBcIlxuXHRcdGV4cG9ydHMuZ3JlZW5BMTAwID0gXCIjQjlGNkNBXCJcblx0XHRleHBvcnRzLmdyZWVuQTIwMCA9IFwiIzY5RjBBRVwiXG5cdFx0ZXhwb3J0cy5ncmVlbkE0MDAgPSBcIiMwMEU2NzZcIlxuXHRcdGV4cG9ydHMuZ3JlZW5BNzAwID0gXCIjMDBDODUzXCJcbiNsaWdodCBncmVlbi0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbiA9IFwiIzhCQzM0QVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuNTAgPSBcIiNGMUY4RTlcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjEwMCA9IFwiI0RDRURDOFwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuMjAwID0gXCIjQzVFMUE1XCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW4zMDAgPSBcIiNBRUQ1ODFcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjQwMCA9IFwiIzlDQ0M2NVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuNTAwID0gXCIjOEJDMzRBXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW42MDAgPSBcIiM3Q0IzNDJcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjcwMCA9IFwiIzY4OUYzOFwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuODAwID0gXCIjNTU4QjJGXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW45MDAgPSBcIiMzMzY5MUVcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkExMDAgPSBcIiNDQ0ZGOTBcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkEyMDAgPSBcIiNCMkZGNTlcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkE0MDAgPSBcIiM3NkZGMDNcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkE3MDAgPSBcIiM2NEREMTdcIlxuI2xpbWUtLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMubGltZSA9IFwiI0NEREMzOVwiXG5cdFx0ZXhwb3J0cy5saW1lNTAgPSBcIiNGOUZCRTdcIlxuXHRcdGV4cG9ydHMubGltZTEwMCA9IFwiI0YwRjRDM1wiXG5cdFx0ZXhwb3J0cy5saW1lMjAwID0gXCIjRTZFRTlDXCJcblx0XHRleHBvcnRzLmxpbWUzMDAgPSBcIiNEQ0U3NzVcIlxuXHRcdGV4cG9ydHMubGltZTQwMCA9IFwiI0Q0RTE1N1wiXG5cdFx0ZXhwb3J0cy5saW1lNTAwID0gXCIjQ0REQzM5XCJcblx0XHRleHBvcnRzLmxpbWU2MDAgPSBcIiNDMENBMzNcIlxuXHRcdGV4cG9ydHMubGltZTcwMCA9IFwiI0FGQjQyQlwiXG5cdFx0ZXhwb3J0cy5saW1lODAwID0gXCIjOUU5RDI0XCJcblx0XHRleHBvcnRzLmxpbWU5MDAgPSBcIiM4Mjc3MTdcIlxuXHRcdGV4cG9ydHMubGltZUExMDAgPSBcIiNGNEZGODFcIlxuXHRcdGV4cG9ydHMubGltZUEyMDAgPSBcIiNFRUZGNDFcIlxuXHRcdGV4cG9ydHMubGltZUE0MDAgPSBcIiNDNkZGMDBcIlxuXHRcdGV4cG9ydHMubGltZUE3MDAgPSBcIiNBRUVBMDBcIlxuI3llbGxvdy0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy55ZWxsb3cgPSBcIiNGRkVCM0JcIlxuXHRcdGV4cG9ydHMueWVsbG93NTAgPSBcIiNGRkZERTdcIlxuXHRcdGV4cG9ydHMueWVsbG93MTAwID0gXCIjRkZGOUM0XCJcblx0XHRleHBvcnRzLnllbGxvdzIwMCA9IFwiI0ZGRjU5RFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3czMDAgPSBcIiNGRkYxNzZcIlxuXHRcdGV4cG9ydHMueWVsbG93NDAwID0gXCIjRkZFRTU4XCJcblx0XHRleHBvcnRzLnllbGxvdzUwMCA9IFwiI0ZGRUIzQlwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c2MDAgPSBcIiNGREQ4MzVcIlxuXHRcdGV4cG9ydHMueWVsbG93NzAwID0gXCIjRkJDMDJEXCJcblx0XHRleHBvcnRzLnllbGxvdzgwMCA9IFwiI0Y5QTgyNVwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c5MDAgPSBcIiNGNTdGMTdcIlxuXHRcdGV4cG9ydHMueWVsbG93QTEwMCA9IFwiI0ZGRkY4RFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3dBMjAwID0gXCIjRkZGRjAwXCJcblx0XHRleHBvcnRzLnllbGxvd0E0MDAgPSBcIiNGRkVBMDBcIlxuXHRcdGV4cG9ydHMueWVsbG93QTcwMCA9IFwiI0ZGRDYwMFwiXG4jYW1iZXItLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmFtYmVyID0gXCIjRkZDMTA3XCJcblx0XHRleHBvcnRzLmFtYmVyNTAgPSBcIiNGRkY4RTFcIlxuXHRcdGV4cG9ydHMuYW1iZXIxMDAgPSBcIiNGRkVDQjNcIlxuXHRcdGV4cG9ydHMuYW1iZXIyMDAgPSBcIiNGRkUwODJcIlxuXHRcdGV4cG9ydHMuYW1iZXIzMDAgPSBcIiNGRkQ1NEZcIlxuXHRcdGV4cG9ydHMuYW1iZXI0MDAgPSBcIiNGRkNBMjhcIlxuXHRcdGV4cG9ydHMuYW1iZXI1MDAgPSBcIiNGRkMxMDdcIlxuXHRcdGV4cG9ydHMuYW1iZXI2MDAgPSBcIiNGRkIzMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXI3MDAgPSBcIiNGRkEwMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXI4MDAgPSBcIiNGRjhGMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXI5MDAgPSBcIiNGRjZGMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXJBMTAwID0gXCIjRkZFNTdGXCJcblx0XHRleHBvcnRzLmFtYmVyQTIwMCA9IFwiI0ZGRDc0MFwiXG5cdFx0ZXhwb3J0cy5hbWJlckE0MDAgPSBcIiNGRkM0MDBcIlxuXHRcdGV4cG9ydHMuYW1iZXJBNzAwID0gXCIjRkZBQjAwXCJcbiNvcmFuZ2UtLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLm9yYW5nZSA9IFwiI0ZGOTgwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U1MCA9IFwiI0ZGRjNFMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2UxMDAgPSBcIiNGRkUwQjJcIlxuXHRcdGV4cG9ydHMub3JhbmdlMjAwID0gXCIjRkZDQzgwXCJcblx0XHRleHBvcnRzLm9yYW5nZTMwMCA9IFwiI0ZGQjc0RFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U0MDAgPSBcIiNGRkE3MjZcIlxuXHRcdGV4cG9ydHMub3JhbmdlNTAwID0gXCIjRkY5ODAwXCJcblx0XHRleHBvcnRzLm9yYW5nZTYwMCA9IFwiI0ZCOEMwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U3MDAgPSBcIiNGNTdDMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlODAwID0gXCIjRUY2QzAwXCJcblx0XHRleHBvcnRzLm9yYW5nZTkwMCA9IFwiI0U2NTEwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2VBMTAwID0gXCIjRkZEMTgwXCJcblx0XHRleHBvcnRzLm9yYW5nZUEyMDAgPSBcIiNGRkFCNDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlQTQwMCA9IFwiI0ZGOTEwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2VBNzAwID0gXCIjRkY2RDAwXCJcbiNkZWVwIG9yYW5nZS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmRlZXBPcmFuZ2UgPSBcIiNGRjU3MjJcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTUwID0gXCIjRkJFOUU3XCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2UxMDAgPSBcIiNGRkNDQkNcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTIwMCA9IFwiI0ZGQUI5MVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlMzAwID0gXCIjRkY4QTY1XCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U0MDAgPSBcIiNGRjcwNDNcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTUwMCA9IFwiI0ZGNTcyMlwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlNjAwID0gXCIjRjQ1MTFFXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U3MDAgPSBcIiNFNjRBMTlcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTgwMCA9IFwiI0Q4NDMxNVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlOTAwID0gXCIjQkYzNjBDXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBMTAwID0gXCIjRkY5RTgwXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBMjAwID0gXCIjRkY2RTQwXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBNDAwID0gXCIjRkYzRDAwXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBNzAwID0gXCIjREQyQzAwXCJcbiNicm93bi0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmJyb3duID0gXCIjNzk1NTQ4XCJcblx0XHRleHBvcnRzLmJyb3duNTAgPSBcIiNFRkVCRTlcIlxuXHRcdGV4cG9ydHMuYnJvd24xMDAgPSBcIiNEN0NDQzhcIlxuXHRcdGV4cG9ydHMuYnJvd24yMDAgPSBcIiNCQ0FBQTRcIlxuXHRcdGV4cG9ydHMuYnJvd24zMDAgPSBcIiNBMTg4N0ZcIlxuXHRcdGV4cG9ydHMuYnJvd240MDAgPSBcIiM4RDZFNjNcIlxuXHRcdGV4cG9ydHMuYnJvd241MDAgPSBcIiM3OTU1NDhcIlxuXHRcdGV4cG9ydHMuYnJvd242MDAgPSBcIiM2RDRDNDFcIlxuXHRcdGV4cG9ydHMuYnJvd243MDAgPSBcIiM1RDQwMzdcIlxuXHRcdGV4cG9ydHMuYnJvd244MDAgPSBcIiM0RTM0MkVcIlxuXHRcdGV4cG9ydHMuYnJvd245MDAgPSBcIiM0RTM0MkVcIlxuXHRcdGV4cG9ydHMuYnJvd25BMTAwID0gXCJcIlxuXHRcdGV4cG9ydHMuYnJvd25BMjAwID0gXCJcIlxuXHRcdGV4cG9ydHMuYnJvd25BNDAwID0gXCJcIlxuXHRcdGV4cG9ydHMuYnJvd25BNzAwID0gXCJcIlxuI2dyZXktLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuZ3JleSA9IFwiIzlFOUU5RVwiXG5cdFx0ZXhwb3J0cy5ncmV5NTAgPSBcIiNGQUZBRkFcIlxuXHRcdGV4cG9ydHMuZ3JleTEwMCA9IFwiI0Y1RjVGNVwiXG5cdFx0ZXhwb3J0cy5ncmV5MjAwID0gXCIjRUVFRUVFXCJcblx0XHRleHBvcnRzLmdyZXkzMDAgPSBcIiNFMEUwRTBcIlxuXHRcdGV4cG9ydHMuZ3JleTQwMCA9IFwiI0JEQkRCRFwiXG5cdFx0ZXhwb3J0cy5ncmV5NTAwID0gXCIjOUU5RTlFXCJcblx0XHRleHBvcnRzLmdyZXk2MDAgPSBcIiM3NTc1NzVcIlxuXHRcdGV4cG9ydHMuZ3JleTcwMCA9IFwiIzYxNjE2MVwiXG5cdFx0ZXhwb3J0cy5ncmV5ODAwID0gXCIjNDI0MjQyXCJcblx0XHRleHBvcnRzLmdyZXk5MDAgPSBcIiMyMTIxMjFcIlxuXHRcdGV4cG9ydHMuZ3JleUExMDAgPSBcIlwiXG5cdFx0ZXhwb3J0cy5ncmV5QTIwMCA9IFwiXCJcblx0XHRleHBvcnRzLmdyZXlBNDAwID0gXCJcIlxuXHRcdGV4cG9ydHMuZ3JleUE3MDAgPSBcIlwiXG4jYmx1ZSBncmV5LS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5ibHVlR3JleSA9IFwiIzYwN0Q4QlwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTUwID0gXCIjRUNFRkYxXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5MTAwID0gXCIjQ0ZEOERDXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5MjAwID0gXCIjQjBCRUM1XCJcblx0XHRleHBvcnRzLmJsdWVHcmV5MzAwID0gXCIjOTBBNEFFXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NDAwID0gXCIjNzg5MDlDXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NTAwID0gXCIjNjA3RDhCXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NjAwID0gXCIjNTQ2RTdBXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NzAwID0gXCIjNDU1QTY0XCJcblx0XHRleHBvcnRzLmJsdWVHcmV5ODAwID0gXCIjMzc0NzRGXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5OTAwID0gXCIjMjYzMjM4XCJcblx0XG4jYmxhY2sgYW5kIHdoaXRlLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5ibGFjayA9IFwiIzAwMFwiXG5cdFx0ZXhwb3J0cy53aGl0ZSA9IFwiI2ZmZlwiXG5cbiNsYWJlbHMgLSBsaWdodCAtLS0tLS0tLVxuXHRcdGV4cG9ydHMubGlnaHRQcmltYXJ5ID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcblx0XHRleHBvcnRzLmxpZ2h0U2Vjb25kYXJ5ID0gXCJyZ2JhKDAsMCwwLDAuNTQpXCJcblx0XHRleHBvcnRzLmxpZ2h0RGlzYWJsZWQgPSBcInJnYmEoMCwwLDAsMC4zOClcIlxuXG4jbGFiZWxzIC0gRGFyayAtLS0tLS0tLVxuXHRcdGV4cG9ydHMuZGFya1ByaW1hcnkgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuXHRcdGV4cG9ydHMuZGFya1NlY29uZGFyeSA9IFwicmdiYSgyNTUsMjU1LDI1NSwgMC43KVwiXG5cdFx0ZXhwb3J0cy5kYXJrRGlzYWJsZWQgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG5cblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAyLiBGbGF0QnV0dG9uICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLkZsYXRCdXR0b24gZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gRGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJGbGF0IEJ1dHRvblwiXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdEBvcHRpb25zLmRpc2FibGVkID89IGZhbHNlXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0QG9wdGlvbnMuZGlyZWN0aW9uUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMubGV0dGVyU3BhY2luZyA/PSAwXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA2MDBcblx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNFxuXG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVx0XHRcdFxuXHRcdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdFx0QGRpc2FibGVkX2xhYmVsQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBkaXNhYmxlZF9sYWJlbENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMjYpXCJcblxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IG51bGxcblx0XHRcdGhlaWdodDogNDhcblx0XHRcdGJvcmRlclJhZGl1cyA6IDJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy5sYWJlbFRleHQubGVuZ3RoICogKChAb3B0aW9ucy5mb250U2l6ZSArIDMpIC8gMikgKyAxNiArIDE2XG5cdFx0XHRuYW1lOiBcIkZsYXQgYnV0dG9uXCJcblxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLndpZHRoIDwgODhcblx0XHRcdEBvcHRpb25zLndpZHRoID0gODhcblx0XHRcdFxuXHRcdGlmIEBvcHRpb25zLmRlbnNlIGlzIHRydWVcblx0XHRcdEBvcHRpb25zLndpZHRoID0gQG9wdGlvbnMubGFiZWxUZXh0Lmxlbmd0aCAqICgoQG9wdGlvbnMuZm9udFNpemUgKyAyKSAvIDIpICsgMTYgKyAxNlxuXHRcdFx0QGJ1dHRvbkhlaWdodCA9IDMyXG5cdFx0ZWxzZVxuXHRcdFx0QGJ1dHRvbkhlaWdodCA9IDM2XG5cdFx0XG4jLS0tLS0tIGhvdmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEBidHRuQkcgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAYnV0dG9uSGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdGJvcmRlclJhZGl1czogMlxuXHRcdFx0b3BhY2l0eTogMC4xMlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdG5hbWU6IFwib3ZlcmxheVwiXG5cbiMtLS0tLS0tIHJpcHBsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAcmlwcGxlQkcgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAYnV0dG9uSGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdG5hbWU6IFwicmlwcGxlIHBhcmVudFwiXG5cblx0XHRcdFxuXHRcdEByaXBwbGUgPSBuZXcgIExheWVyXG5cdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwJVwiXG5cdFx0XHRzaXplOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRzY2FsZTogMC4zXG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRuYW1lOiBcInJpcHBsZVwiXG5cdFx0XG4jLS0tLS0tLSBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxhYmVsID0gbmV3IFRleHRMYXllciBcblx0XHRcdHRleHQgOiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0dGV4dFRyYW5zZm9ybTogXCJVcHBlcmNhc2VcIlxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdGZvbnRXZWlnaHQ6IEBvcHRpb25zLmZvbnRXZWlnaHRcblx0XHRcdGZvbnRGYW1pbHk6IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGxldHRlclNwYWNpbmc6IEBvcHRpb25zLmxldHRlclNwYWNpbmdcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFxuIy0tLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAYnR0bkJHLnBhcmVudCA9IEBsYWJlbC5wYXJlbnQgPSBAcmlwcGxlQkcucGFyZW50ID0gQFxuXHRcdEBidHRuQkcueSA9IEFsaWduLmNlbnRlclxuXHRcdEByaXBwbGVCRy55ID0gQWxpZ24uY2VudGVyXG5cdFx0XG5cdFx0QHJpcHBsZUJHLmNsaXAgPSB0cnVlXG5cdFx0XG5cdFx0QHJpcHBsZS5wYXJlbnQgPSBAcmlwcGxlQkdcblx0XHRAcmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAcmlwcGxlLnkgPVx0QWxpZ24uY2VudGVyXG5cdFx0XG5cdFx0QGxhYmVsLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAbGFiZWwueSA9IEFsaWduLmNlbnRlcigxKVxuXHRcdFxuXHRcdGlmIEBkaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cdFx0XHRAcmlwcGxlLmRlc3Ryb3koKVxuXHRcdFx0XHRcbiMtLS0tLS0tLSBFdmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QC5vbkNsaWNrIEBjbGlja2VkXG5cdFx0QC5vbk1vdXNlT3ZlciBASG92ZXJcblx0XHRALm9uTW91c2VPdXQgQEhvdmVyT2ZmXG5cdFx0QC5vbk1vdXNlRG93biBAbW91c2VEb3duXG5cdFx0QC5vbk1vdXNlVXAgQG1vdXNlVXBcblxuIy0tLS0tLS0tIGdldHRlcnMgJiBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdkaXNhYmxlZCcsXG5cdFx0Z2V0OiAtPiBcblx0XHRcdEBvcHRpb25zLmRpc2FibGVkXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuZGlzYWJsZWQgPSB2YWx1ZVxuXHRcdFx0XG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBkaXNhYmxlZF9sYWJlbENvbG9yXG5cdFx0XHRcdFx0XG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cblxuXG4jLS0tLS0tLS0tIEV2ZW50IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFxuXHRIb3ZlcjogPT5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0QGJ0dG5CRy52aXNpYmxlID0gdHJ1ZVxuXHRcblx0SG92ZXJPZmY6ID0+XG5cdFx0QGJ0dG5CRy52aXNpYmxlID0gZmFsc2Vcblx0XHRcblx0bW91c2VEb3duOiAtPlxuXHRcdEBidHRuQkcuYnJpZ2h0bmVzcyA9IDgwXG5cdG1vdXNlVXA6IC0+XG5cdFx0QGJ0dG5CRy5icmlnaHRuZXNzID0gMTAwXG5cdFxuXHRjbGlja2VkOiAoZXYpIC0+XG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgZmFsc2UgXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cdFx0XG5cdFx0XHRcdGlmIEBvcHRpb25zLmRpcmVjdGlvblJpcHBsZSBpcyB0cnVlXG5cdFx0XHRcdFx0QHJpcHBsZS5taWRYID0gZXYub2Zmc2V0WFxuXHRcdFx0XHRcdEByaXBwbGUubWlkWSA9IGV2Lm9mZnNldFlcblx0XHRcdFx0XHRAcmlwcGxlLnNpemUgPSAoQG9wdGlvbnMubGFiZWxUZXh0Lmxlbmd0aCAqIDguNSArIDE2ICsgMTYpICogMS41XG5cdFx0XHRcblx0XHRcdFx0QHJpcHBsZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAcmlwcGxlLnNjYWxlID0gMC40XG5cdFx0XHRcdEByaXBwbGUub3BhY2l0eSA9IDAuM1xuXHRcdFx0XHRcblx0XHRcdFx0cmlwcGxlQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjpcdEByaXBwbGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0XHRcdFxuXHRcdFx0XHRyaXBwbGVCICA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOlx0QHJpcHBsZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblx0XHRcdFx0XHRcblx0XHRcdFx0cmlwcGxlQS5zdGFydCgpXG5cdFx0XHRcdFxuXHRcdFx0XHRyaXBwbGVBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0cmlwcGxlQi5zdGFydCgpXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgMy4gUmFpc2VkQnV0dG9uICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5SYWlzZWRCdXR0b24gZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gRGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJSYWlzZWQgYnV0dG9uXCJcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMuZGlzYWJsZWQgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHRAb3B0aW9ucy5kaXJlY3Rpb25SaXBwbGUgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmhlaWdodCA9IDQ4XG5cdFx0QG9wdGlvbnMuZGlzYWJsZVJpcHBsZSA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPz0gMFxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNjAwXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTRcblxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIHRydWVcdFx0XHRcblx0XHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRcdEBkaXNhYmxlZF9CRyA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjEyKVwiXG5cdFx0XHRcdEBkaXNhYmxlZF9sYWJlbENvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAZGlzYWJsZWRfQkcgPSBcInJnYmEoMCwwLDAsMC4xMilcIlxuXHRcdFx0XHRAZGlzYWJsZWRfbGFiZWxDb2xvciA9IFwicmdiYSgwLDAsMCwwLjI2KVwiXG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0Y29sb3I6IFwiXCJcblx0XHRcdGJvcmRlclJhZGl1cyA6IDJcblx0XHRcdG5hbWU6IFwiUmFpc2VkIGJ1dHRvblwiXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMubGFiZWxUZXh0Lmxlbmd0aCAqICgoQG9wdGlvbnMuZm9udFNpemUgKyAzKSAvIDIpICsgMTYgKyAxNlxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLndpZHRoIDwgODhcblx0XHRcdEBvcHRpb25zLndpZHRoID0gODhcblx0XHRcdFxuXHRcdGlmIEBvcHRpb25zLmRlbnNlIGlzIHRydWVcblx0XHRcdEBidXR0b25IZWlnaHQgPSAzMlxuXHRcdGVsc2Vcblx0XHRcdEBidXR0b25IZWlnaHQgPSAzNlxuXHRcdFxuIy0tLS0tLS1TaGFkb3dzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQGJ1dHRvbkhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdG5hbWU6IFwic2hhZG93c1wiXG5cdFx0XHRcdFxuXG5cbiMtLS0tLS0taG92ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRAYnR0bkJHID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQGJ1dHRvbkhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuXHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyXG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRuYW1lOiBcIm92ZXJsYXlcIlxuXG4jLS0tLS0tLXJpcHBsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEByaXBwbGVCRyA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdGJvcmRlclJhZGl1czogMlxuXHRcdFx0bmFtZTogXCJyaXBwbGUgcGFyZW50XCJcblx0XHRcdGNsaXA6IHRydWVcdFx0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblxuXHRcdFx0XG5cdFx0QHJpcHBsZSA9IG5ldyAgTGF5ZXJcblx0XHRcdGJvcmRlclJhZGl1czogXCIxMDAlXCJcblx0XHRcdHNpemU6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRzY2FsZTowLjNcblx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblx0XHRcdFxuXHRcdEByaXBwbGVDb2xvciA9IEByaXBwbGUuYmFja2dyb3VuZENvbG9yXG5cdFx0XG4jLS0tLS0tLWxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxhYmVsID0gbmV3IFRleHRMYXllciBcblx0XHRcdHRleHQgOiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0dGV4dFRyYW5zZm9ybTogXCJVcHBlcmNhc2VcIlxuXHRcdFx0Y29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRmb250V2VpZ2h0OiBAb3B0aW9ucy5mb250V2VpZ2h0XG5cdFx0XHRmb250RmFtaWx5OiBAb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLS1zdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAbGFiZWwucGFyZW50ID0gQHJpcHBsZUJHLnBhcmVudCA9IEBzaGFkb3cucGFyZW50ID0gQGJ0dG5CRy5wYXJlbnQgPSAgIEBcblx0XHRcblx0XHRAc2hhZG93LnkgPSBAYnR0bkJHLnkgPSBAcmlwcGxlQkcueSA9IEFsaWduLmNlbnRlclxuXHRcdFxuXHRcdEByaXBwbGUucGFyZW50ID0gQHJpcHBsZUJHXG5cdFx0QHJpcHBsZS54ID0gQWxpZ24uY2VudGVyXG5cdFx0QHJpcHBsZS55ID1cdEFsaWduLmNlbnRlclxuXHRcdFxuXHRcdEBsYWJlbC54ID0gQWxpZ24uY2VudGVyXG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5jZW50ZXIoMSlcblx0XHRcblx0XHRpZiBAZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXHRcdFx0QHJpcHBsZS5kZXN0cm95KClcblx0XHRcdFx0XG4jLS0tLS0tLS0tRXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRALm9uQ2xpY2sgQGNsaWNrZWRcblx0XHRALm9uTW91c2VPdmVyIEBIb3ZlclxuXHRcdEAub25Nb3VzZU91dCBASG92ZXJPZmZcblx0XHRALm9uTW91c2VEb3duIEBtb3VzZURvd25cblx0XHRALm9uTW91c2VVcCBAbW91c2VVcFxuXHRcdFx0XG4jLS0tLS0tLS0tZ2V0dGVycyAmIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdkaXNhYmxlZCcsXG5cdFx0Z2V0OiAtPiBcblx0XHRcdEBvcHRpb25zLmRpc2FibGVkXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuZGlzYWJsZWQgPSB2YWx1ZVxuXHRcdFx0XG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBkaXNhYmxlZF9sYWJlbENvbG9yXG5cdFx0XHRcdEBzaGFkb3cuYmFja2dyb3VuZENvbG9yID0gQGRpc2FibGVkX0JHXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzaGFkb3cuYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvciBcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gXCIjZmZmXCJcblxuIy0tLS0tLS0tLUV2ZW50IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XG5cdEhvdmVyOiA9PlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlXG5cdFx0XHRAYnR0bkJHLm9wYWNpdHkgPSAwLjEyXG5cdFx0XHRmb3IgaXRlbSBpbiBAc2hhZG93LmFycmF5XG5cdFx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaCBcIl84ZHBcIlxuXHRIb3Zlck9mZjogPT5cblx0XHRAYnR0bkJHLm9wYWNpdHkgPSAwXG5cdFx0Zm9yIGl0ZW0gaW4gQHNoYWRvdy5hcnJheVxuXHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoIFwiXzJkcFwiXG5cdFxuXHRtb3VzZURvd246IC0+XG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgZmFsc2Vcblx0XHRcdEBicmlnaHRuZXNzID0gODBcblx0XHRcdEBidHRuQkcub3BhY2l0eSA9IDBcblx0bW91c2VVcDogLT5cblx0XHRAYnJpZ2h0bmVzcyA9IDEwMFxuXHRcblx0Y2xpY2tlZDogKGV2KSAtPlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlIFxuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXHRcdFxuXHRcdFx0XHRpZiBAb3B0aW9ucy5kaXJlY3Rpb25SaXBwbGUgaXMgdHJ1ZVxuXHRcdFx0XHRcdEByaXBwbGUubWlkWCA9IGV2Lm9mZnNldFhcblx0XHRcdFx0XHRAcmlwcGxlLm1pZFkgPSBldi5vZmZzZXRZXG5cdFx0XHRcdFx0QHJpcHBsZS5zaXplID0gKEBvcHRpb25zLmxhYmVsVGV4dC5sZW5ndGggKiA4LjUgKyAxNiArIDE2KSAqIDEuNVxuXHRcdFx0XG5cdFx0XHRcdEByaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0QHJpcHBsZS5zY2FsZSA9IDAuNFxuXHRcdFx0XHRAcmlwcGxlLm9wYWNpdHkgPSAwLjNcblxuXHRcdFx0XHRyaXBwbGVBID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdGxheWVyOlx0QHJpcHBsZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRzY2FsZTogMC44XG5cdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cdFx0XHRcdFx0XG5cdFx0XHRcdHJpcHBsZUIgID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdFx0bGF5ZXI6XHRAcmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0XHRcdFxuXHRcdFx0XHRyaXBwbGVBLnN0YXJ0KClcblxuXHRcdFx0XHRyaXBwbGVBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0cmlwcGxlQi5zdGFydCgpXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgNC4gRkFCICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5GQUIgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG4jLS0tLS0tIERlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdHBkID0gMjRcblx0XHRlbHNlIHBkID0gMTZcblx0XHRcblx0XHRAb3B0aW9ucy5taW5pID89IGZhbHNlXG5cdFx0XG5cdFx0aWYgQG9wdGlvbnMubWluaSBpcyB0cnVlIG9yIFNjcmVlbi53aWR0aCA8IDQ2MFxuXHRcdFx0QG9wdGlvbnMud2lkdGggPz0gNDBcblx0XHRcdEBvcHRpb25zLmhlaWdodCA/PSA0MFxuXHRcdGVsc2Vcblx0XHRcdEBvcHRpb25zLndpZHRoID89IDU2XG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gNTZcblx0XHRcblx0XHRAb3B0aW9ucy54ID89IFNjcmVlbi53aWR0aCAtIChAb3B0aW9ucy53aWR0aCArIHBkKVxuXHRcdEBvcHRpb25zLnkgPz0gU2NyZWVuLmhlaWdodCAtIChAb3B0aW9ucy53aWR0aCArIHBkKVxuXHRcdFx0XG5cdFx0QG9wdGlvbnMuYm9yZGVyUmFkaXVzID0gXCIxMDAlXCJcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRAb3B0aW9ucy5pY29uID89IFwiYWRkXCJcblxuIy0tLS0tLSBvdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb3ZlcmxheSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcdFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC4xMilcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2VcdFxuXHRcdFx0bmFtZTogXCJvdmVybGF5XCJcblxuIy0tLS0tLSBzaGFkb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRAc2hhZG93ID0gbmV3IFNoYWRvd1xuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdG5hbWU6IFwic2hhZG93XCJcblxuXHRcdEBzaGFkb3cudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfNmRwXCJcblx0XHRAc2hhZG93LnBlbnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzZkcFwiXG5cdFx0QHNoYWRvdy5hbWJpZW50LnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzZkcFwiXG5cbiMtLS0tLS0gaWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGljb24gPSBuZXcgU3lzdGVtSWNvblxuXHRcdFx0d2lkdGg6IDI0XG5cdFx0XHRoZWlnaHQ6IDI0XG5cdFx0XHRpY29uOiBAb3B0aW9ucy5pY29uXG5cdFx0XHRjb2xvcjogXCIjZmZmXCJcblx0XHRcdG5hbWU6IFwiaWNvblwiXG5cdFx0XG4jLS0tLS0tIHN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAaWNvbi5wYXJlbnQgPSBAb3ZlcmxheS5wYXJlbnQgPSBAc2hhZG93LnBhcmVudCA9ICBAXG5cdFx0QGljb24uY2VudGVyKClcblxuIy0tLS0tLSBldmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRALm9uTW91c2VPdmVyIEBIb3ZlclxuXHRcdFx0QC5vbk1vdXNlT3V0IEBIb3Zlck9mZlxuXHRcdFx0QG9uTW91c2VEb3duIEBtb3VzZURvd25cblx0XHRcdEBvbk1vdXNlVXAgQG1vdXNlVXBcblx0XHRlbHNlXG5cdFx0XHRAb25UYXBTdGFydCBAbW91c2VEb3duXG5cdFx0XHRAb25UYXBFbmQgQG1vdXNlVXBcblxuIy0tLS0tLSBldmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0SG92ZXI6IC0+XG5cdFx0QHNoYWRvdy51bWJyYS5zdGF0ZXMuc3dpdGNoIFwiXzEyZHBcIlxuXHRcdEBzaGFkb3cucGVudW1icmEuc3RhdGVzLnN3aXRjaCBcIl8xMmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaCBcIl8xMmRwXCJcblxuXHRIb3Zlck9mZjogLT5cblx0XHRAc2hhZG93LnVtYnJhLnN0YXRlcy5zd2l0Y2ggXCJfNmRwXCJcblx0XHRAc2hhZG93LnBlbnVtYnJhLnN0YXRlcy5zd2l0Y2ggXCJfNmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaCBcIl82ZHBcIlxuXG5cdG1vdXNlRG93bjogLT5cblx0XHRAb3ZlcmxheS52aXNpYmxlID0gdHJ1ZVxuXHRcdEBzaGFkb3cudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMTJkcFwiXG5cdFx0QHNoYWRvdy5wZW51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8xMmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMTJkcFwiXG5cblx0bW91c2VVcDogLT5cblx0XHRAb3ZlcmxheS52aXNpYmxlID0gZmFsc2Vcblx0XHRAc2hhZG93LnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzZkcFwiXG5cdFx0QHNoYWRvdy5wZW51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl82ZHBcIlxuXHRcdEBzaGFkb3cuYW1iaWVudC5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl82ZHBcIlxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDUuIENoZWNrYm94ZXMgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLkNoZWNrYm94ZXMgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXHRcdEBvcHRpb25zLm5hbWUgPz0gXCJjaGVja2JveGVzXCJcblxuXHRcdEBvcHRpb25zLmRpc2FibGVSaXBwbGUgPz0gZmFsc2Vcblx0XHRcblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QG9wdGlvbnMuc2NyZWVuQ29sb3IgPz0gXCIjMjEyMTIxXCJcblx0XHRlbHNlXG5cdFx0XHRAb3B0aW9ucy5zY3JlZW5Db2xvciA/PSBcIiNmZmZcIlxuXHRcdFx0XG5cdFx0I2xhYmVsIGNob2ljZXNcblx0XHRAb3B0aW9ucy5jaG9pY2VzID89IFtcImFwcGxlc1wiLCBcImJhbmFuYXNcIiwgXCJncmFwZXNcIl1cblxuXHRcdEBvcHRpb25zLmNoZWNrWSA/PSAtNVxuXG4jLS0tLS0tIGNvbG9ycyBcblx0XHRAdGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAdGhlbWVDb2xvclxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2Rhcmtcblx0XHRcdEBib3hDb2xvciA9IGxpbmVfZGFya1xuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfbGlnaHQgXG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3Jcblx0XG5cdFx0I3RleHQgc3R5bGluZ1xuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7Jylcblx0XHRcblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJTZWxlY3QgZnJ1aXRcIlxuXG5cdFx0I0RlZmF1bHQgcHJvcGVydGllc1xuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmNob2ljZXMubGVuZ3RoICogMzYgKyAzMlxuXHRcdFx0d2lkdGggOiAxNTBcblx0XHRcdFxuIy0tLS0tLSBRdWVzdGlvbiAgbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLSBTdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblxuXHRcdGNoZWNrWSA9IEBvcHRpb25zLmNoZWNrWVxuXG4jLS0tLS0tIHRpbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR0MSA9IDAuMlxuXHRcdHQyID0gMC4yXG5cbiMtLS0tLS0gbG9vcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRjaGVja3MgPSBbXVxuXG5cdFx0Zm9yIGkgaW4gWzAuLi5Ab3B0aW9ucy5jaG9pY2VzLmxlbmd0aF1cblxuIy0tLS0tLSBjaGVja2JveCBjb250YWluZXIgXG5cdFx0XHRjb250ID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDpAXG5cdFx0XHRcdGhlaWdodDogNDBcblx0XHRcdFx0eTogaSAqIDQwICsgMjRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRcdHg6IDE2XG5cdFx0XHRcdG5hbWU6IFwiY29udGFpbmVyXCJcblxuIy0tLS0tLSBib3ggc2V0dGluZ3MgXG5cdFx0XHRib3ggPSBuZXcgTGF5ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0XHRzaXplIDogMjBcblx0XHRcdFx0Ym9yZGVyUmFkaXVzIDogMlxuXHRcdFx0XHRib3JkZXJXaWR0aCA6IDJcblx0XHRcdFx0Ym9yZGVyQ29sb3IgOiBAYm94Q29sb3Jcblx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdGNsaXA6IHRydWVcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHRcblx0XHRcdGJveC5hbmltYXRpb25PcHRpb25zID0gXG5cdFx0XHRcdHRpbWU6IHQxXG5cdFx0XHRcdFxuXHRcdFx0Ym94LnN0YXRlcyA9XG5cdFx0XHRcdHNlbGVjdGVkOlxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdGRlc2VsZWN0ZWQ6XG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IEBib3hDb2xvclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQGJveENvbG9yXG5cdFx0XHRcdFx0XHRcblx0XHRcdGJveC5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0Ym94LmJhY2tncm91bmRDb2xvciA9IEBvcHRpb25zLnNjcmVlbkNvbG9yXG5cdFx0XHRcdFxuIy0tLS0tLSBib3ggQ2lyY2xlIHNldHRpbmdzIFxuIy0tLS0tLSBUaGlzIGNyZWF0ZSB0aGUgY2lyY2xlIGFuaW1hdGlvbiB3aXRoaW4gdGhlIGJveFxuXHRcdFx0Ym94Q2lyY2xlID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogYm94XG5cdFx0XHRcdGJvcmRlclJhZGl1czogXCIxMDAlXCJcblx0XHRcdFx0c2l6ZTogMzBcblx0XHRcdFx0c2NhbGU6IDBcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAc2NyZWVuQ29sb3Jcblx0XHRcdFx0eDogQWxpZ24uY2VudGVyKDIpXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlcigyKVxuXHRcdFx0XHRuYW1lOiBcIm92ZXJsYXlcIlxuXHRcdFx0XG5cdFx0XHRib3hDaXJjbGUuYW5pbWF0aW9uT3B0aW9ucyA9IFxuXHRcdFx0XHR0aW1lOiB0MVxuXHRcdFx0XG5cdFx0XHRib3hDaXJjbGUuc3RhdGVzID0gXG5cdFx0XHRcdHNlbGVjdGVkOlxuXHRcdFx0XHRcdHNjYWxlOiAwXG5cdFx0XHRcdGRlc2VsZWN0ZWQ6XG5cdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnNjcmVlbkNvbG9yXHRcdFx0XHRcblxuIy0tLS0tLSBjaGVjayBtYXNrIHNldHRpbmdzIFxuIy0tLS0tLSBUaGlzIGNyZWF0ZSBkcmF3aW5nIGluIGVmZmVjdCBmb3IgdGhlIGNoZWNrXG5cdFx0XHRjaGVja01hc2sgPSBuZXcgTGF5ZXJcblx0XHRcdFx0d2lkdGg6IDBcblx0XHRcdFx0aGVpZ2h0OiAyMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0cGFyZW50OiBib3hcblx0XHRcdFx0eTogY2hlY2tZXG5cdFx0XHRcdHg6IDMuNVxuXHRcdFx0XHRwYXJlbnQ6IGJveFxuXHRcdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRcdG5hbWU6IFwiY2hlY2sgbWFza1wiXG5cdFx0XHRcblx0XHRcdGNoZWNrTWFzay5zdGF0ZXMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdHdpZHRoOjIwXG5cdFx0XHRcdHRpbWU6IHQyXG5cdFx0XHRcdFx0XG5cdFx0XHRjaGVja01hc2suc3RhdGVzLmRlc2VsZWN0ZWQgPVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdHdpZHRoOiAwXG5cdFx0XHRcdHRpbWU6IDAuMDFcblx0XHRcdFx0XG5cdFx0XHRjaGVja01hc2suc3RhdGVzLnN3aXRjaCBcImRlc2VsZWN0ZWRcIlxuXHRcdFxuIy0tLS0tLSBjaGVjayBzZXR0aW5ncyBcblx0XHRcdGNoZWNrID0gbmV3IExheWVyXG5cdFx0XHRcdGh0bWw6ICc8c3ZnIHdpZHRoPVwiMTNweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDEzIDEwXCI+PGcgaWQ9XCJDb21wb25lbnRzXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwb2x5bGluZSBpZD1cIlBhdGgtMlwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCIyXCIgcG9pbnRzPVwiMSA1LjI1IDQgOSAxMiAxLjVcIj48L3BvbHlsaW5lPjwvZz48L3N2Zz4nXG5cdFx0XHRcdHdpZHRoOiAyMFxuXHRcdFx0XHRoZWlnaHQ6IDIwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHRwYXJlbnQ6IGNoZWNrTWFza1xuXHRcdFx0XHRuYW1lOiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHk6IDBcblx0XHRcdFx0bmFtZTogXCJjaGVja1wiXG5cdFx0XHRcdFxuXHRcdFx0Y2hlY2suc3R5bGUgPVxuXHRcdFx0XHRmb250U2l6ZTogXCIxOHB4XCJcblx0XHRcdFx0XG4jLS0tLS0tIFJpcHBsZSBzZXR0aW5ncyBcblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcdFxuXHRcdFx0XHRyaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRzaXplOiA1MFxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxMDBweFwiXG5cdFx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdFx0eTogQWxpZ24uY2VudGVyXG5cdFx0XHRcdFx0eDogLTE1XG5cdFx0XHRcdFx0b3BhY2l0eTogMC4zXG5cdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRuYW1lOiBcInJpcHBsZVwiXG5cdFx0XHRcdFx0XG5cdFx0XHRcdHJpcHBsZS5zdGF0ZXMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJsaWdodFwiXG5cdFx0XHRcdFx0cmlwcGxlLnN0YXRlcy5kZXNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCJcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0XHRcdHJpcHBsZS5zdGF0ZXMuZGVzZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRcdFx0XG4jLS0tLS0tIGNob2lzZSBsYWJsZXMgc2V0dGluZ3MgXG5cdFx0XHRjaG9pY2VfbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdFx0dGV4dDogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHRwYXJlbnQ6IGNvbnRcblx0XHRcdFx0eDogMzBcblx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlcigtMC41KVxuXHRcdFx0XHRuYW1lOiBcImNob2ljZSByaXBwbGVcIlxuXG4jLS0tLS0tIHBvcHVsYXRpbmcgY2hlY2tzIGFycmF5IFxuXHRcdFx0Y2hlY2tzLnB1c2goYm94KVxuXHRcdFx0XG4jLS0tLS0tIGNyZWF0aW5nIG5ldyBhcnJheSB0byBzZWUgd2hhdCBjaGVja3MgYXJlIHNlbGVjdGVkIFxuXHRcdFx0YW8gPSBAb3B0aW9uc1xuXHRcdFx0ZHAgPSBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlXG5cdFx0XHRhby5hY3RpdmVTZWxlY3Rpb24gPSBbXVxuXG4jLS0tLS0tIGV2ZW50IG9uIENsaWNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Y29udC5vbkNsaWNrIC0+XG5cbiMtLS0tLS0gZXZlbnQgc2V0dXAgXG5cdFx0XHRcdGFvLmFjdGl2ZVNlbGVjdGlvbiA9IFtdICNlbXB0eSBhcnJheVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgZHAgaXMgZmFsc2Vcblx0XHRcdFx0XHRwUmlwcGxlID0gdGhpcy5jaGlsZHJlblsxXVxuXHRcdFx0XHRwQ2hlY2tNYXNrID0gIHRoaXMuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV1cblx0XHRcdFx0cEJveCA9IHRoaXMuY2hpbGRyZW5bMF1cblx0XHRcdFx0cEJveENpcmNsZSA9ICB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0XHRcdFxuIy0tLS0tLSBib3ggYW5kIGNoZWNrIGFuaW1hdGlvbiBcblx0XHRcdFx0cEJveC5zdGF0ZUN5Y2xlKFwic2VsZWN0ZWRcIiwgXCJkZXNlbGVjdGVkXCIpXG5cdFx0XHRcdHBCb3hDaXJjbGUuc3RhdGVDeWNsZShcInNlbGVjdGVkXCIsIFwiZGVzZWxlY3RlZFwiKVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgcEJveC5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0XHRwUmlwcGxlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFV0aWxzLmRlbGF5IHQxLCAtPlxuXHRcdFx0XHRcdFx0cENoZWNrTWFzay5zdGF0ZXMuc3dpdGNoIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0XHRwUmlwcGxlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFx0cENoZWNrTWFzay5zdGF0ZXMuc3dpdGNoIFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFxuXHRcdFx0XHQjIHBvcHVsYXRlcyBhcnJheSB0byBzZWUgc2VsZWN0ZWQgaXRlbXNcblx0XHRcdFx0Zm9yIGJveCBpbiBjaGVja3Ncblx0XHRcdFx0XHRpZiBib3guc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdGFvLmFjdGl2ZVNlbGVjdGlvbi5wdXNoKGJveC5uYW1lKVxuXHRcdFx0XHRcbiMtLS0tLVx0cFJpcHBsZSBhbmltYXRpb24gXG5cdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0cFJpcHBsZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdHBSaXBwbGUuc2NhbGUgPSAwLjRcblx0XHRcdFx0XHRwUmlwcGxlLm9wYWNpdHkgPSAwLjRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZlx0cFJpcHBsZS5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC44XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cHVsc2FBID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdFx0bGF5ZXI6XHRwUmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMC44XG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0cFJpcHBsZUIgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdGxheWVyOlx0cFJpcHBsZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRcdHNjYWxlOiAxXG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHB1bHNhQS5zdGFydCgpXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHB1bHNhQS5vbkFuaW1hdGlvbkVuZCAtPlxuXHRcdFx0XHRcdFx0cFJpcHBsZUIuc3RhcnQoKVxuXHRcdFx0XHRcdFxuIy0tLS0tLSBldmVudCBob3ZlciBcblx0XHRcdGNvbnQub25Nb3VzZU92ZXIgLT5cblx0XHRcdFx0dGhpcy5jaGlsZHJlblswXS5ib3JkZXJDb2xvciA9IHRoZW1lQ29sb3JcblxuXHRcdFx0Y29udC5vbk1vdXNlT3V0IC0+XG5cdFx0XHRcdGlmIHRoaXMuY2hpbGRyZW5bMF0uc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdHRoaXMuY2hpbGRyZW5bMF0uYm9yZGVyQ29sb3IgPSBib3hDb2xvclxuXG4jLS0tLS0tIGdldHRlcnMgYW5kIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdEBkZWZpbmUgJ3RoZW1lQ29sb3InLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMudGhlbWVDb2xvciA9IHZhbHVlXG5cblx0QGRlZmluZSAnY2hvaWNlcycsXG5cdFx0Z2V0OiAtPiBcblx0XHRcdEBvcHRpb25zLmNob2ljZXNcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAb3B0aW9ucy5jaG9pY2VzID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lICdhY3RpdmVTZWxlY3Rpb24nLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPSB2YWx1ZVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDYuIFJhZGlvQnV0dG9ucyAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5SYWRpb0J1dHRvbnMgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0XG4jLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdHRoZW1lID0gQG9wdGlvbnMudGhlbWVcblxuXHRcdEBvcHRpb25zLmRpc2FibGVSaXBwbGUgPz0gZmFsc2Vcblx0XHRcblx0XHQjbGFiZWwgY2hvaWNlc1xuXHRcdEBvcHRpb25zLmNob2ljZXMgPz0gW1wiYXBwbGVzXCIsIFwiYmFuYW5hc1wiLCBcImdyYXBlc1wiXVxuXG4jLS0tLS0tLSBjb2xvcnMgXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yIFxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2Rhcmtcblx0XHRcdEBib3hDb2xvciA9IGxpbmVfZGFya1xuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfbGlnaHRcblx0XHRcdEBib3hDb2xvciA9IGxpbmVfbGlnaHRcblx0XHRib3hDb2xvciA9IEBib3hDb2xvclxuXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89ICBcIlNlbGVjdCBmcnVpdFwiXG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5jaG9pY2VzLmxlbmd0aCAqIDM2ICsgMzJcblx0XHRcdHdpZHRoIDogMTUwXG5cdFx0XHRuYW1lOiBcIlJhZGlvQnV0dG9uc1wiXG5cdFx0XHRcbiMtLS0tLS0gUXVlc3Rpb24gbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLSBTdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAbGFiZWwucGFyZW50ID0gQFxuXG5cdFx0bCA9IEBvcHRpb25zLmNob2ljZXNcblxuIy0tLS0tLSBsb29wIGFuZCBhcnJheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRjaGVja3MgPSBbXVxuXHRcdGNpcmNsZXMgPSBbXVxuXHRcdFxuXHRcdGZvciBpIGluIFswLi4uQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGhdXG5cblx0XHRcdGNvbnQgPSBuZXcgTGF5ZXJcblx0XHRcdFx0aGVpZ2h0OiA0MFxuXHRcdFx0XHR5OiA0MCAqIGkgKyAyNFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0cGFyZW50OiBAXG5cdFx0XHRcdG5hbWU6IEBvcHRpb25zLmNob2ljZXNbaV1cblx0XHRcdFx0eDogMTZcblxuIy0tLS0tLSBjaXJjbGUgXG5cblx0XHRcdGNpcmNsZSA9IG5ldyBMYXllclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRcdHNpemUgOiAyMFxuXHRcdFx0XHRib3JkZXJSYWRpdXMgOiBcIjEwMCVcIlxuXHRcdFx0XHRib3JkZXJXaWR0aCA6IDJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IEBib3hDb2xvclxuXHRcdFx0XHRwYXJlbnQ6IGNvbnRcblx0XHRcdFx0eTogQWxpZ24uY2VudGVyXG5cdFx0XHRcdG5hbWU6IFwiY2lyY2xlXCJcblx0XHRcdFxuXHRcdFx0Y2lyY2xlLmFuaW1hdGlvbk9wdGlvbnMgPSBcblx0XHRcdFx0dGltZTogMC4wMDFcblx0XHRcblx0XHRcdGNpcmNsZS5zdGF0ZXMgPVxuXHRcdFx0XHRzZWxlY3RlZDpcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogdGhlbWVDb2xvclxuXHRcdFx0XHRkZXNlbGVjdGVkOlxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiBAYm94Q29sb3Jcblx0XHRcblx0XHRcdGNpcmNsZXMucHVzaChjaXJjbGUpXG5cdFx0XHRjaXJjbGUuc3RhdGVzLnN3aXRjaCBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XG5cdFx0XHRpZiBpIGlzIEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvblxuXHRcdFx0XHRjaXJjbGUuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJzZWxlY3RlZFwiXG5cbiMtLS0tLS0gY2hlY2sgXG5cblx0XHRcdGNoZWNrID0gbmV3IExheWVyXG5cdFx0XHRcdHdpZHRoOiAxMFxuXHRcdFx0XHRoZWlnaHQ6IDEwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IGNpcmNsZS5ib3JkZXJSYWRpdXNcblx0XHRcdFx0cGFyZW50OiBjaXJjbGVcblx0XHRcdFx0eDogNVxuXHRcdFx0XHR5OiA1XG5cdFx0XHRcdG5hbWU6IGlcblx0XHRcdFxuXHRcdFx0Y2hlY2suYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHRcdHRpbWU6IDAuMTdcblx0XHRcdFxuXHRcdFx0Y2hlY2suc3RhdGVzID1cblx0XHRcdFx0c2VsZWN0ZWQ6XG5cdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0ZGVzZWxlY3RlZDpcblx0XHRcdFx0XHRzY2FsZTogMFxuXHRcdFx0XHRcdFxuXHRcdFx0Y2hlY2suc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJkZXNlbGVjdGVkXCJcblx0XHRcdFxuXHRcdFx0Y2hlY2tzLnB1c2goY2hlY2spXG5cdFx0XHRcblx0XHRcdGlmIGkgaXMgQG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uXG5cdFx0XHRcdGNoZWNrLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcbiMtLS0tLS0gcmlwcGxlIHNldHRpbmdzIFxuXHRcdFx0XG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cdFx0XHRcblx0XHRcdFx0cmlwcGxlID0gbmV3IExheWVyXG5cdFx0XHRcdFx0c2l6ZTogNTBcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwcHhcIlxuXHRcdFx0XHRcdHBhcmVudDogY2lyY2xlXG5cdFx0XHRcdFx0eTogQWxpZ24uY2VudGVyKDIpXG5cdFx0XHRcdFx0eDogQWxpZ24uY2VudGVyKDIpXG5cdFx0XHRcdFx0b3BhY2l0eTogMC4xMlxuXHRcdFx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXHRcdFx0XHRcdFx0XHRcdFxuIy0tLS0tLSBjaG9pY2UgXG5cblx0XHRcdGNob2ljZV9sYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0XHR0ZXh0OiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHR4OiAzMFxuXHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0eTogLTAuNVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0bmFtZTogXCJjaG9pY2UgbGFiZWxcIlxuXG4jLS0tLS0tIGhlbHBlciBcblxuXHRcdFx0aGVscGVyID0gbmV3IExheWVyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHRoZWlnaHQ6IDVcblx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdHdpZHRoOiBpXG5cdFx0XHRcdG5hbWU6IFwiaGVscGVyXCJcblxuIy0tLS0tLSBldmVudFxuXG5cdFx0XHRAYWN0aXZlU2VsZWN0aW9uID0gbnVsbFxuXHRcdFx0YmIgPSBAYWN0aXZlU2VsZWN0aW9uXG5cdFx0XHRkcCA9IEBvcHRpb25zLmRpc2FibGVSaXBwbGVcblx0XHRcdG9jID0gQHRoZW1lQ29sb3Jcblx0XG5cdFx0XHRjb250Lm9uQ2xpY2sgLT5cblx0XHRcdFx0XG5cdFx0XHRcdHBSaXBwbGUgPSB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdXG5cdFx0XHRcdHBDaGVjayA9IHRoaXMuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblx0XHRcdFx0cENpcmNsZSA9IHRoaXMuY2hpbGRyZW5bMF1cblx0XHRcdFx0XG5cdFx0XHRcdGZvciBjaGVjayBpbiBjaGVja3Ncblx0XHRcdFx0XHRpZiBjaGVjay5uYW1lIGlzIHBDaGVjay5uYW1lXG5cdFx0XHRcdFx0XHRwQ2hlY2suc3RhdGVzLnN3aXRjaCBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRjaGVjay5zdGF0ZXMuc3dpdGNoIFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdGZvciBjaXJjbGUgaW4gY2lyY2xlc1xuXHRcdFx0XHRcdGNpcmNsZS5zdGF0ZXMuc3dpdGNoIFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFxuXHRcdFx0XHRwQ2lyY2xlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRiYiA9IHRoaXMubmFtZVxuXHRcdFx0XHRcbiMtLS0tLS0gcmlwcGxlIGFuaW1hdGlvbiBcblxuXHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdHBSaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRwUmlwcGxlLnNjYWxlID0gMC40XG5cdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC4yXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgcFJpcHBsZS5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC4zXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0UmlwcGxlQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOiBwUmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMC44XG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0UmlwcGxlQiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOiBwUmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFJpcHBsZUEuc3RhcnQoKVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFJpcHBsZUEub25BbmltYXRpb25FbmQgLT5cblx0XHRcdFx0XHRcdFJpcHBsZUIuc3RhcnQoKVxuXG4jLS0tLS0tIGV2ZW50ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0XHRjb250Lm9uTW91c2VPdmVyIC0+XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5bMF0uYm9yZGVyQ29sb3IgPSB0aGVtZUNvbG9yXG5cdFx0XHRcblx0XHRcdGNvbnQub25Nb3VzZU91dCAtPlxuXHRcdFx0XHRpZiB0aGlzLmNoaWxkcmVuWzBdLnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJkZXNlbGVjdGVkXCJcblx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuWzBdLmJvcmRlckNvbG9yID0gYm94Q29sb3Jcblx0XHRcdFx0XG5cdFx0XHRAb25DbGljayAtPiBcblx0XHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uID0gYmJcblx0XHRcdFx0XG4jLS0tLS0tIGdldHRlciBhbmQgc2V0dGVyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdEBkZWZpbmUgJ2FjdGl2ZVNlbGVjdGlvbicsXG5cdFx0Z2V0OiAtPiBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRzZXQ6ICh2YWx1ZSkgLT4gQG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uID0gdmFsdWVcblxuXHRAZGVmaW5lICd0aGVtZScsXG5cdFx0Z2V0OiAtPiBAb3B0aW9ucy50aGVtZVxuXHRcdHNldDogKHZhbHVlKSAtPiBAb3B0aW9ucy50aGVtZSA9IHZhbHVlXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgNy4gU3dpdGNoICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuU3dpdGNoIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcbiMtLS0tLS0gQ3VzdG9tZSBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMuYWN0aXZlT25TdGFydCA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmFjdGl2ZSA/PSBmYWxzZVxuXHRcdFxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdHRoZW1lID0gQG9wdGlvbnMudGhlbWVcblxuIy0tLS0tLSBjb2xvcnMgXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QHRodW1iQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QHRyYWNrQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QHRodW1iX2xpZ2h0X29mZiA9IFwiI0ZBRkFGQVwiXG5cdFx0QHRodW1iX2Rhcmtfb2ZmID0gXCIjYmRiZGJkXCJcblx0XHRAdHJhY2tfbGlnaHRfb2ZmID0gXCJyZ2JhKDAsMCwwLDAuMzgpXCJcblx0XHRAdHJhY2tfZGFya19vZmYgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiXG5cdFx0QHJpcHBsZV9kYXJrX29mZiA9IFwicmdiYSgyNTUsMjU1LDI1NSwgMSlcIlxuXHRcdEByaXBwbGVfbGlnaHRfb2ZmID0gXCJyZ2JhKDAsMCwwLCAxKVwiXG5cdFx0XG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfZGFya1xuXHRcdFx0QHRodW1iT2ZmID0gQHRodW1iX2Rhcmtfb2ZmXG5cdFx0XHRAdHJhY2tPZmYgPSBAdHJhY2tfZGFya19vZmZcblx0XHRcdEByaXBwbGVPZmYgPSBAcmlwcGxlX2Rhcmtfb2ZmXG5cdFx0ZWxzZVxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9saWdodFxuXHRcdFx0QHRodW1iT2ZmID0gQHRodW1iX2xpZ2h0X29mZlxuXHRcdFx0QHRyYWNrT2ZmID0gQHRyYWNrX2xpZ2h0X29mZlxuXHRcdFx0QHJpcHBsZU9mZiA9IEByaXBwbGVfbGlnaHRfb2ZmXG5cdFx0XHRcblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cdFx0XG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdGhlaWdodDogNDhcblx0XHRcdHdpZHRoIDogMTUwXG5cdFx0XG4jLS0tLS0tIHRyYWNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHRyYWNrID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogNDBcblx0XHRcdGhlaWdodDogMTVcblx0XHRcdGJvcmRlclJhZGl1czogMTVcblx0XHRcdG5hbWU6IFwidHJhY2tcIlxuXHRcdEB0cmFjay5hbmltYXRpb25PcHRpb25zID1cblx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XG5cdFx0QHRyYWNrLnN0YXRlcyA9XG5cdFx0XHRvbjpcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdG9wYWNpdHk6IDAuNVxuXHRcdFx0b2ZmOlxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEB0cmFja09mZlxuXHRcdFx0XHRvcGFjaXR5OiAwLjM4XG5cblx0XHRkZWxldGUgQHRyYWNrLnN0YXRlcy5kZWZhdWx0XG5cdFx0QHRyYWNrLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib2ZmXCJcblxuIy0tLS0tLSByaXBwbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHJpcHBsZSA9IG5ldyBMYXllclxuXHRcdFx0c2l6ZTogNTBcblx0XHRcdHNjYWxlOiAxXG5cdFx0XHRib3JkZXJSYWRpdXM6IDUwXG5cdFx0XHRvcGFjaXR5OiAwLjJcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0XHRuYW1lOiBcInJpcHBsZVwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3JcblxuIy0tLS0tLSB0aHVtYiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAdGh1bWIgPSBuZXcgTGF5ZXJcblx0XHRcdHNpemU6IDE5XG5cdFx0XHRib3JkZXJSYWRpdXM6IDEwMFxuXHRcdFx0bmFtZTogXCJ0aHVtYlwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEB0aHVtYk9mZlxuXHRcdEB0aHVtYi5hbmltYXRpb25PcHRpb25zID1cblx0XHRcdHRpbWU6IDAuM1xuXHRcdFx0XG5cdFx0QHRodW1iLnN0YXRlcyA9IFxuXHRcdFx0b246XG5cdFx0XHRcdHg6IDIxXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0b2ZmOlxuXHRcdFx0XHR4OiAwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQHRodW1iT2ZmXG5cblx0XHRkZWxldGUgQHRodW1iLnN0YXRlcy5kZWZhdWx0XG5cdFx0QHRodW1iLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib2ZmXCJcblx0XHRcbiMtLS0tLS0gbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxhYmVsID0gbmV3IExhYmVsXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cdFx0XG4jLS0tLS0tIFN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAdHJhY2sucGFyZW50ID0gQFxuXHRcdEB0cmFjay55ID0gQWxpZ24uY2VudGVyXG5cdFx0XG5cdFx0QHRodW1iLnBhcmVudCA9IEBcblx0XHRAdGh1bWIueSA9IEFsaWduLmNlbnRlclxuXHRcdFxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0QGxhYmVsLnggPSA1NVxuXHRcdEBsYWJlbC55ID0gQWxpZ24uY2VudGVyXG5cdFx0XG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXHRcdFx0QHJpcHBsZS5wYXJlbnQgPSBAdGh1bWJcblx0XHRcdEByaXBwbGUueCA9IC0gMTVcblx0XHRcdEByaXBwbGUueSA9IC0gMTVcblx0XHRcdHJpcHBsZSA9IEByaXBwbGVcblxuIy0tLS0tLSBzaGFkb3dzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHNoYWRvdyA9IG5ldyBTaGFkb3dcblx0XHRcdHBhcmVudDogQHRodW1iXG5cdFx0XHRib3JkZXJSYWRpdXM6IDEwMFxuXHRcdFx0d2lkdGg6IEB0aHVtYi53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAdGh1bWIud2lkdGhcblx0XHRcdG5hbWU6IFwic2hhZG93XCJcblxuIy0tLS0tLSBhY3RpdmVPblN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0aWYgQG9wdGlvbnMuYWN0aXZlT25TdGFydCBpcyB0cnVlXG5cdFx0XHRAdGh1bWIuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJvblwiXG5cdFx0XHRAdHJhY2suc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJvblwiXG5cdFx0XHRAYWN0aXZlID0gdHJ1ZVxuXG4jLS0tLS0tIHJpcHBsZSBhbmltYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRyaXBwbGVBbmkgPSAtPlxuXHRcdFx0XG5cdFx0XHRyaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdHJpcHBsZS5zY2FsZSA9IDAuNFxuXHRcdFx0XG5cdFx0XHRwdWxzYUEgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdGxheWVyOiByaXBwbGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRzY2FsZTogMC44XG5cdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblx0XHRcdFx0XG5cdFx0XHRyaXBwbGVCID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRsYXllcjogcmlwcGxlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcdFx0XHRcdFxuXHRcdFx0cHVsc2FBLnN0YXJ0KClcblx0XHRcdFxuXHRcdFx0cHVsc2FBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdHJpcHBsZUIuc3RhcnQoKVxuXG4jLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN0YXRlID0gbnVsbFxuXHRcdFxuXHRcdEBvbkNsaWNrIC0+XG5cdFx0XHRcblx0XHRcdEB0cmFjay5zdGF0ZUN5Y2xlKClcblx0XHRcdEB0aHVtYi5zdGF0ZUN5Y2xlKClcblx0XHRcblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2UgXG5cdFx0XHRcdGlmIEB0aHVtYi5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwib25cIlxuXHRcdFx0XHRcdEByaXBwbGUuYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRcdEByaXBwbGUub3BhY2l0eSA9IDAuNFxuXHRcdFx0XHRcdHBvc1ggPSAyMFxuXHRcdFx0XHRcdHJpcHBsZUFuaSgpXG5cdFx0XHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdHJ1ZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cG9zWCA9IDBcblx0XHRcdFx0XHRAcmlwcGxlLmJhY2tncm91bmRDb2xvciA9IEByaXBwbGVPZmZcblx0XHRcdFx0XHRAcmlwcGxlLm9wYWNpdHkgPSAwLjJcblx0XHRcdFx0XHRyaXBwbGVBbmkoKVxuXHRcdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IGZhbHNlXG5cblx0XHRcdFxuXHRcdFx0aWYgQHRodW1iLnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJvblwiXG5cdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0XG4jLS0tLS0tIGdldHRlcnMgYW5kIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdhY3RpdmUnLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAb3B0aW9ucy5hY3RpdmUgPSB2YWx1ZVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDguIFRleHRGaWVsZCAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBUZXh0RmllbGQgZXh0ZW5kcyBMYXllclxuXG5cdElOUFVUX0hJREVfUFNVRURPX1VJICA9IFwieyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGRpc3BsYXk6IG5vbmU7IH1cIlxuXHRJTlBVVF9TRUxFQ1RPUl9OVU1CRVIgPSBcImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uXCJcblx0SU5QVVRfU0VMRUNUT1JfU0VBUkNIID0gXCJpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b25cIlxuXHRcblx0RXZlbnRzLklucHV0ICAgPSBcIklucHV0RmllbGQuT25JbnB1dFwiXG5cdEV2ZW50cy5Gb2N1cyAgID0gXCJJbnB1dEZpZWxkLk9uRm9jdXNcIlxuXHRFdmVudHMuQmx1ciAgICA9IFwiSW5wdXRGaWVsZC5PbkJsdXJcIlxuXHRFdmVudHMuVmFsaWQgICA9IFwiSW5wdXRGaWVsZC5PblZhbGlkXCJcblx0RXZlbnRzLkludmFsaWQgPSBcIklucHV0RmllbGQuT25JbnZhbGlkXCJcblx0RXZlbnRzLk1hdGNoICAgPSBcIklucHV0RmllbGQuT25NYXRjaFwiXG5cdFxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+XG5cdFx0XHRAaW5wdXQudmFsdWVcblx0XHRcdFxuXHRcdHNldDogKHYpIC0+XG5cdFx0XHRyZXR1cm4gdW5sZXNzIHZcblx0XHRcdGlmIEBpbnB1dFxuXHRcdFx0XHRAY2hhbmdlSW5wdXRWYWx1ZSB2XG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFxuXHRcdEBpc051bWJlciA9IGZhbHNlXG5cdFx0QGlzU2VhcmNoID0gZmFsc2Vcblx0XHRcblx0XHRAaXNFbXB0eSAgPSB0cnVlXG5cdFx0QGlzVmFsaWQgID0gbnVsbFxuXHRcdEBvcmlnaW5hbFRleHRDb2xvciA9IG51bGxcblx0XHQgXHRcdFx0XHRcdFx0XHRcdFxuXHRcdCMgRnJhbWVyIExheWVyIFByb3BzXG5cdFx0QG9wdGlvbnMubmFtZSAgICAgICAgICAgICA/PSBcIkJhc2ljIHRleHQgZmllbGRcIlxuXHRcdFxuXHRcdEBvcHRpb25zLmJvcmRlclJhZGl1cyAgICAgPSAwXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cyA/PSBudWxsXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvciA9IFwiXCJcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlciA/PSAgXCJcIlxuXHRcdFxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdHRoZW1lID0gQG9wdGlvbnMudGhlbWVcblxuXHRcdCNjb2xvcnMgXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAdGhlbWVDb2xvclxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfZGFya1xuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9kYXJrXG5cdFx0XHRAbGluZUNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNylcIlxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDFcblx0XHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciAgPSBcInJnYmEoMCwwLDAsMC4wMSlcIlxuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gSW5wdXRsYWJlbF9saWdodFxuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9saWdodFxuXHRcdFx0QGxpbmVDb2xvciA9IFwicmdiYSgwLDAsMCwwLjQyKVwiXG5cdFx0XHRAbGluZUhvdmVyQ29sb3IgPSBcInJnYmEoMCwwLDAsMC44NylcIlxuXHRcdFx0QGxhYmVsRm9jdXNPcGFjaXR5ID0gMC44N1xuXHRcdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yICA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjAxKVwiXG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3Jcblx0XHRcblx0XHRAb3B0aW9ucy5jb2xvciA9IEBpbnB1dENvbG9yXG5cblx0XHRcblx0XHQjdGV4dCBzdHlsaW5nXG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvKTsnKVxuXHRcdFxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKClcblx0XHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2ICogMlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA/PSAgMjQgKiAyXG5cdFx0XHRAb3B0aW9ucy5saW5lSGVpZ2h0ID0gXCIje0BvcHRpb25zLmxpbmVIZWlnaHR9cHhcIiBpZiBAb3B0aW9ucy5saW5lSGVpZ2h0P1xuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID0gNzBcblx0XHRlbHNlXHRcblx0XHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2XG5cdFx0XHRAb3B0aW9ucy5saW5lSGVpZ2h0ID89ICAyNFxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA9IFwiI3tAb3B0aW9ucy5saW5lSGVpZ2h0fXB4XCIgaWYgQG9wdGlvbnMubGluZUhlaWdodD9cblx0XHRcdEBvcHRpb25zLmhlaWdodCA9IDcwXG5cdFx0XHRcblx0XHRAb3B0aW9ucy5sYWJlbFNpemUgPz0xNlxuXHRcdFxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA0MDBcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblx0XHRcblx0XHQjdGV4dCBodG1sXG5cdFx0QG9wdGlvbnMuaGVscGVyVGV4dCA/PSBcIkhlbHBlciB0ZXh0XCJcblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJMYWJlbFwiXG5cdFx0QG9wdGlvbnMuaGVscGVyVGV4dFZpc2JsZSA/PSBmYWxzZVxuXG5cdFx0I0RlZmF1bHQgcHJvcGVydGllc1xuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHR3aWR0aCA6IDIwMFxuXG4jLS0tLS0tLSBFbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxpbmUgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiAxXG5cdFx0XHRjbGlwOiB0cnVlXG5cdFx0XHRuYW1lOiBcImxpbmVcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAbGluZUNvbG9yXG5cdFx0XG5cdFx0QGxpbmVSaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0d2lkdGg6IDBcblx0XHRcdGhlaWdodDogMlxuXHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXHRcdFxuXHRcdEBsYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMubGFiZWxTaXplXG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFx0XG5cdFx0QGhlbHBlclRleHQgPSBuZXcgTGFiZWxcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dGV4dDogQG9wdGlvbnMuaGVscGVyVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImhlbHBlciBUZXh0XCJcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLmhlbHBlclRleHRWaXNibGVcblx0XHRcblx0XHRAaW5wdXRQYXJlbnQgPSBuZXcgTGF5ZXJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogMjhcblx0XHRcdG5hbWU6IFwiaW5wdXQgcGFyZW50XCJcblx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdFxuXHRcdEBoZWxwZXJUZXh0LnBhcmVudCA9IEBsaW5lLnBhcmVudCA9IEBpbnB1dFBhcmVudC5wYXJlbnQgPSAgQFxuXHRcdEBoZWxwZXJUZXh0LnkgPSA1MFxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0QGxhYmVsLnkgPSAyMFxuXHRcdEBsaW5lUmlwcGxlLnBhcmVudCA9IEBsaW5lXG5cdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdEBsaW5lLnkgPSA0NFxuXHRcdEBpbnB1dFBhcmVudC55ID0gMTBcblx0XHRcdFxuIy0tLS0tLS0gZXZlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cdFx0QG9uVGFwIEBjbGlja2VkXG5cdFx0XG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdEBvbk1vdXNlT3ZlciBAaG92ZXJPblxuXHRcdFx0QG9uTW91c2VPdXQgQGhvdmVyT2ZmXG5cdFx0XHRcblx0XHRALm9uIEV2ZW50cy5CbHVyLCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGxpbmUuaGVpZ2h0ID0gMVxuXHRcdFx0QGxpbmVSaXBwbGUud2lkdGggPSAwXG5cdFx0XHRAbGluZVJpcHBsZS54ID0gQWxpZ24uY2VudGVyXG5cdFx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0XHRAb3B0aW9ucy5jb2xvciA9IEBpbnB1dENvbG9yXG5cdFx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdFx0XG5cdFx0XHRpZiBALmlzRW1wdHlcblx0XHRcdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0Zm9udFNpemU6IDE2XG5cdFx0XHRcdFx0XHR5OiAyMFxuXHRcdFx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdFx0dGltZTogMC4yXHRcblx0XHRcbiMtLS0tLS0gQWRqdXN0IGEgZmV3IHRoaW5ncyBmb3IgdmFyaW91cyB0eXBlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdHN3aXRjaCBAb3B0aW9ucy50eXBlXG5cdFx0XHR3aGVuIFwic2VhcmNoXCIgdGhlbiBAaXNTZWFyY2ggPSB0cnVlXG5cdFx0XHR3aGVuIFwibnVtYmVyXCIgdGhlbiBAaXNOdW1iZXIgPSB0cnVlXG5cdFx0XHR3aGVuIFwibnVtYmVycy1vbmx5XCIsIFwibnVtYmVyLW9ubHlcIlxuXHRcdFx0XHRAaXNOdW1iZXIgPSB0cnVlXG5cdFx0XHRcdEBvcHRpb25zLnR5cGUgICAgPSBpZiBAb3B0aW9ucy5wYXR0ZXJuPyB0aGVuIFwibnVtYmVyXCIgICAgICAgICAgZWxzZSBcInRleHRcIlxuXHRcdFx0XHRAb3B0aW9ucy5wYXR0ZXJuID0gaWYgQG9wdGlvbnMucGF0dGVybj8gdGhlbiBAb3B0aW9ucy5wYXR0ZXJuIGVsc2UgUEFUVEVSTl9OVU1CRVJcblx0XHRcblx0XHRAaHRtbCArPSBzd2l0Y2hcblx0XHRcdHdoZW4gQGlzTnVtYmVyIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfTlVNQkVSfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0d2hlbiBAaXNTZWFyY2ggdGhlbiBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+I3tJTlBVVF9TRUxFQ1RPUl9TRUFSQ0h9I3tJTlBVVF9ISURFX1BTVUVET19VSX08L3N0eWxlPlwiXG5cdFx0XHRlbHNlIFwiXCJcblxuXHRcdGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3I/XG5cdFx0XHRAaHRtbCArPSBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOnBsYWNlaG9sZGVyLXNob3duIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH08L3N0eWxlPlwiXG5cdFx0XHRcbiMtLS0tLS0gY3JlYXRpbmcgJiBzdHlsaW5nIHRoZSBpbnB1dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImlucHV0XCJcblx0XHRcblx0XHRAaW5wdXQudHlwZSAgICAgICAgPSBAb3B0aW9ucy50eXBlXG5cdFx0QGlucHV0LnZhbHVlICAgICAgID0gQG9wdGlvbnMudmFsdWUgICAgICAgICAgICAgICAgICBpZiBAb3B0aW9ucy52YWx1ZT9cblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlciAgICAgICAgICAgIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyP1xuXHRcdEBpbnB1dC5wYXR0ZXJuICAgICA9IEBvcHRpb25zLnBhdHRlcm4gICAgICAgICAgICAgICAgaWYgQG9wdGlvbnMucGF0dGVybj9cblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4TGVuZ3RoXCIsIEBvcHRpb25zLm1heExlbmd0aCkgaWYgQG9wdGlvbnMubWF4TGVuZ3RoP1xuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLCAoaWYgQG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgICAoaWYgQG9wdGlvbnMuYXV0b0NvbXBsZXRlICAgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLCAgICAoaWYgQG9wdGlvbnMuYXV0b0NvcnJlY3QgICAgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXG5cdFx0QGlucHV0UGFyZW50Ll9lbGVtZW50LmFwcGVuZENoaWxkIEBpbnB1dFxuIFx0XHRcblx0XHQjIFNldHVwIFZhbHVlc1xuXHRcdEBpc0VtcHR5ICAgICAgICAgICA9ICEoQG9wdGlvbnMudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0QG9yaWdpbmFsVGV4dENvbG9yID0gQG9wdGlvbnMuY29sb3Jcblx0XHRcblx0XHQjIFNldHVwIElucHV0IFN0eWxlXG5cdFx0aW5wdXRTdHlsZSA9XG5cdFx0XHRmb250OiBcIiN7QG9wdGlvbnMuZm9udFdlaWdodH0gI3tAb3B0aW9ucy5mb250U2l6ZX1weC8je0BvcHRpb25zLmxpbmVIZWlnaHR9ICN7QG9wdGlvbnMuZm9udEZhbWlseX1cIlxuXHRcdFx0b3V0bGluZTogXCJub25lXCJcblx0XHRcdHRleHRJbmRlbnQ6IFwiI3tAb3B0aW9ucy5pbmRlbnR9cHhcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdGhlaWdodDogXCIyMnB4XCJcblx0XHRcdHdpZHRoOiAgXCIxMDAlXCJcblx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0XHRwYWRkaW5nOiBcIjBcIlxuXHRcdFx0XCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJub25lXCJcblx0XHRcdFxuXHRcdEBpbnB1dC5zdHlsZVtrZXldICA9IHZhbCBmb3Iga2V5LCB2YWwgb2YgaW5wdXRTdHlsZVxuXHRcdEBpbnB1dC5zdHlsZS5jb2xvciA9IEBvcHRpb25zLmNvbG9yIGlmIEBvcHRpb25zLmNvbG9yP1xuXG5cdFx0XG5cdFx0QGlucHV0Lm9uZm9jdXMgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXM/XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblx0XHRcdEBlbWl0KEV2ZW50cy5Gb2N1cywgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QGlucHV0Lm9uYmx1ciAgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHR1bmxlc3MgQGlucHV0LnBsYWNlaG9sZGVyIGlzIEBvcHRpb25zLnBsYWNlSG9sZGVyIG9yICFAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJcblx0XHRcdEBlbWl0KEV2ZW50cy5CbHVyLCBAaW5wdXQudmFsdWUsIEApXG5cblx0XHRAaW5wdXQub25pbnB1dCA9ID0+XG5cdFx0XHRAaXNFbXB0eSA9ICEoIEBpbnB1dC52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRcdEBlbWl0KEV2ZW50cy5JbnB1dCwgQGlucHV0LnZhbHVlLCBAKVxuXHRcdFx0XG5cdFx0QG9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4gQGlucHV0LmZvY3VzKClcblx0XHRAb24gXCJjaGFuZ2U6Y29sb3JcIiwgIC0+IEBjaGFuZ2VJbnB1dFRleHRDb2xvcigpXG5cblx0XHRAb24gXCJrZXlkb3duXCIsIChldmVudCkgLT5cblx0XHRcdGlmIGV2ZW50LmtleUNvZGUgaXMgMTNcblx0XHRcdFx0QGxpbmUuaGVpZ2h0ID0gMVxuXHRcdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdFx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRcdFx0QG9wdGlvbnMuY29sb3IgPSBAaW5wdXRDb2xvclxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXHRcdFx0XHRcblx0XHRcdFx0aWYgQC5pc0VtcHR5XG5cdFx0XHRcdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAxNlxuXHRcdFx0XHRcdFx0XHR5OiAyMFxuXHRcdFx0XHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0XHRcdHRpbWU6IDAuMlx0XG5cdFx0XG4jLS0tLS0tIGV2ZW50IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcblx0Y2xlYXI6IC0+XG5cdFx0QGlucHV0LnZhbHVlID0gXCJcIlxuXHRcdEBpc1ZhbGlkID0gbnVsbFxuXHRcdEBpc0VtcHR5ID0gdHJ1ZVxuXHRcdFxuXHRjaGFuZ2VJbnB1dFRleHRDb2xvcjogLT4gXG5cdFx0QGlucHV0LnN0eWxlLmNvbG9yID0gQGNvbG9yLnRvSGV4U3RyaW5nKClcblx0XG5cdGNoYW5nZUlucHV0VmFsdWU6ICh2KSAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IHZcblx0XHRAaW5wdXQub25pbnB1dCgpXG5cdFx0XG5cdGNsaWNrZWQ6IC0+XG5cdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0XHR5OiAwXG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRcdG9wYWNpdHk6IEBsYWJlbEZvY3VzT3BhY2l0eVxuXHRcdFx0dGltZTogMC4yXG5cdFx0XHRcblx0XHRAbGluZS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRoZWlnaHQ6IDJcblx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XG5cdFx0QGxpbmVSaXBwbGUuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRcdHg6IDBcblx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XG5cdGhvdmVyT246IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMlxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lSG92ZXJDb2xvclxuXG5cdGhvdmVyT2ZmOiAtPlxuXHRcdEBsaW5lLmhlaWdodCA9IDFcdFx0XG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVDb2xvclxuXG5cblxuXG5cblxuXG5cblxuXG5jbGFzcyBleHBvcnRzLlRleHRGaWVsZF9CYXNpYyBleHRlbmRzIFRleHRGaWVsZFxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDkuIFRleHRGaWVsZF9WYWxpZGF0aW9uICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5UZXh0RmllbGRfVmFsaWRhdGlvbiBleHRlbmRzIFRleHRGaWVsZFxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFxuIy0tLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cdFxuXHRcdCMgTWFrZSBzdXJlIHdlIHNldCB0aGUgQ2hlY2tpbmcgRmxhZ1xuXHRcdEBzaG91bGRDaGVja1ZhbGlkaXR5ID0gdHJ1ZSBpZiBAb3B0aW9ucy5wYXR0ZXJuPyBvciBAb3B0aW9ucy5tYXRjaD9cblx0XHRcblx0XHQjIEZyYW1lciBMYXllciBQcm9wc1xuXHRcdEBvcHRpb25zLm5hbWUgICAgICAgICAgICAgPz0gXCJwYXNzd29yZCBmaWVsZFwiXG5cdFx0XG5cdFx0QG9wdGlvbnMudHlwZSA/PSBcInBhc3N3b3JkXCJcblx0XHRAb3B0aW9ucy5wYXR0ZXJuID89IFwiKD89Xi57OCx9JCkoKD89LipcXGQpfCg/PS4qXFxXKykpKD8hWy5cXG5dKSg/PS4qW0EtWl0pKD89LipbYS16XSkuKiRcIlxuXHRcdEBvcHRpb25zLmV5ZVZpc2libGUgPz0gdHJ1ZVxuXHRcdFxuXHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3JcblxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfZGFya1xuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gSW5wdXRsYWJlbF9saWdodFxuXG5cdFx0QHJlZCA9IFwiI0ZGMTc0NFwiXG5cdFx0XG5cdFx0I3RleHQgaHRtbFxuXHRcdEBvcHRpb25zLmhlbHBlclRleHQgPz0gXCJoZWxwZXJUZXh0XCJcblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJQYXNzd29yZFwiXG5cdFx0QG9wdGlvbnMuaGVscGVyVGV4dFZpc2libGUgPz0gZmFsc2VcblxuXHRcdCNEZWZhdWx0IHByb3BlcnRpZXNcblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0d2lkdGggOiAyMDBcblx0XHRcdFxuXHRcdGlmIEBvcHRpb25zLnBhdHRlcm4gaXMgXCJeKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/IS4qXFxzKS4qJFwiXG5cdFx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0ID89IFwiVXBwZXJDYXNlLCBMb3dlckNhc2UgYW5kIE51bWJlclwiXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5wYXR0ZXJuIGlzIFwiKD89Xi57OCx9JCkoKD89LipcXGQpfCg/PS4qXFxXKykpKD8hWy5cXG5dKSg/PS4qW0EtWl0pKD89LipbYS16XSkuKiRcIlxuXHRcdFx0QG9wdGlvbnMuaGVscGVyVGV4dCA/PSBcIk11c3QgY29udGFpbiA4IGNoYXJhY3RlcnMsIDEgdXBwZXJjYXNlLCAxIGxvd2VyY2FzZSwgYW5kIDEgbnVtYmVyL3NwZWNpYWwgY2hhcmFjdGVyXCJcblx0XHRlbHNlIEBvcHRpb25zLmhlbHBlclRleHQgPz0gXCJoZWxwZXJUZXh0XCJcblxuIy0tLS0tLS0gRWxlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QGVycm9yVGV4dCA9IG5ldyBMYWJlbFxuXHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5oZWxwZXJUZXh0XG5cdFx0XHRjb2xvcjogQHJlZFxuXHRcdFx0bmFtZTogXCJoZWxwZXIgVGV4dFwiXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XG5cdFx0QGV5ZUNvbnRpYW5lciA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDIyXG5cdFx0XHRoZWlnaHQ6IDIyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLmV5ZVZpc2libGVcblx0XHRcdG5hbWU6IFwiZXllQ29udGlhbmVyXCJcblx0XHRcdFx0XHRcblx0XHRAZXllT24gPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyMlxuXHRcdFx0aGVpZ2h0OiAxNlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJleWVPbmVcIlxuXHRcdFx0aHRtbDogJzxzdmcgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMTZweFwiIHZpZXdCb3g9XCIwIDAgMjIgMTZcIiB2ZXJzaW9uPVwiMS4xXCI+PGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPiA8cGF0aCBkPVwiTTguOTEyMDU5MzgsNS44OTA3IEM5LjUwNjA1OTM4LDUuMjk3NyAxMC4yMDkwNTk0LDQuOTk5NyAxMS4wMjEwNTk0LDQuOTk5NyBDMTEuODM0MDU5NCw0Ljk5OTcgMTIuNTM3MDU5NCw1LjI5NzcgMTMuMTMxMDU5NCw1Ljg5MDcgQzEzLjcyNDA1OTQsNi40ODQ3IDE0LjAyMTA1OTQsNy4xODc3IDE0LjAyMTA1OTQsNy45OTk3IEMxNC4wMjEwNTk0LDguODEyNyAxMy43MjQwNTk0LDkuNTE1NyAxMy4xMzEwNTk0LDEwLjEwOTcgQzEyLjUzNzA1OTQsMTAuNzAyNyAxMS44MzQwNTk0LDEwLjk5OTcgMTEuMDIxMDU5NCwxMC45OTk3IEMxMC4yMDkwNTk0LDEwLjk5OTcgOS41MDYwNTkzOCwxMC43MDI3IDguOTEyMDU5MzgsMTAuMTA5NyBDOC4zMTgwNTkzOCw5LjUxNTcgOC4wMjEwNTkzOCw4LjgxMjcgOC4wMjEwNTkzOCw3Ljk5OTcgQzguMDIxMDU5MzgsNy4xODc3IDguMzE4MDU5MzgsNi40ODQ3IDguOTEyMDU5MzgsNS44OTA3IE03LjQ4MjA1OTM4LDExLjUzODcgQzguNDY3MDU5MzgsMTIuNTIzNyA5LjY0NjA1OTM4LDEzLjAxNTcgMTEuMDIxMDU5NCwxMy4wMTU3IEMxMi4zOTYwNTk0LDEzLjAxNTcgMTMuNTc2MDU5NCwxMi41MjM3IDE0LjU2MDA1OTQsMTEuNTM4NyBDMTUuNTQ1MDU5NCwxMC41NTQ3IDE2LjAzNzA1OTQsOS4zNzU3IDE2LjAzNzA1OTQsNy45OTk3IEMxNi4wMzcwNTk0LDYuNjI0NyAxNS41NDUwNTk0LDUuNDQ1NyAxNC41NjAwNTk0LDQuNDYwNyBDMTMuNTc2MDU5NCwzLjQ3NjcgMTIuMzk2MDU5NCwyLjk4NDcgMTEuMDIxMDU5NCwyLjk4NDcgQzkuNjQ2MDU5MzgsMi45ODQ3IDguNDY3MDU5MzgsMy40NzY3IDcuNDgyMDU5MzgsNC40NjA3IEM2LjQ5ODA1OTM4LDUuNDQ1NyA2LjAwNjA1OTM4LDYuNjI0NyA2LjAwNjA1OTM4LDcuOTk5NyBDNi4wMDYwNTkzOCw5LjM3NTcgNi40OTgwNTkzOCwxMC41NTQ3IDcuNDgyMDU5MzgsMTEuNTM4NyBNNC4zMTgwNTkzOCwyLjU2MjcgQzYuMzE4MDU5MzgsMS4xODc3IDguNTUzMDU5MzgsMC40OTk3IDExLjAyMTA1OTQsMC40OTk3IEMxMy40OTAwNTk0LDAuNDk5NyAxNS43MjQwNTk0LDEuMTg3NyAxNy43MjUwNTk0LDIuNTYyNyBDMTkuNzI1MDU5NCwzLjkzNzcgMjEuMTYyMDU5NCw1Ljc0OTcgMjIuMDM3MDU5NCw3Ljk5OTcgQzIxLjE2MjA1OTQsMTAuMjQ5NyAxOS43MjUwNTk0LDEyLjA2MjcgMTcuNzI1MDU5NCwxMy40Mzc3IEMxNS43MjQwNTk0LDE0LjgxMjcgMTMuNDkwMDU5NCwxNS40OTk3IDExLjAyMTA1OTQsMTUuNDk5NyBDOC41NTMwNTkzOCwxNS40OTk3IDYuMzE4MDU5MzgsMTQuODEyNyA0LjMxODA1OTM4LDEzLjQzNzcgQzIuMzE4MDU5MzgsMTIuMDYyNyAwLjg4MTA1OTM3NSwxMC4yNDk3IDAuMDA2MDU5Mzc1LDcuOTk5NyBDMC44ODEwNTkzNzUsNS43NDk3IDIuMzE4MDU5MzgsMy45Mzc3IDQuMzE4MDU5MzgsMi41NjI3XCIgaWQ9XCJGaWxsLTFcIiBmaWxsPVwiJyArIEBsYWJlbENvbG9yICsgJ1wiPjwvcGF0aD48L2c+PC9zdmc+J1xuXHRcdFxuXHRcdEBleWVPZmYgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyM1xuXHRcdFx0aGVpZ2h0OiAxOVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiB0cnVlXG5cdFx0XHRuYW1lOiBcImV5ZU9mZlwiXG5cdFx0XHRodG1sOiAnPHN2ZyB3aWR0aD1cIjIzcHhcIiBoZWlnaHQ9XCIxOXB4XCIgdmlld0JveD1cIjAgMCAyMyAxOVwiIHZlcnNpb249XCIxLjFcIiA+PGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNMTEuMDMzMTU5NCw2IEwxMS4xNzQxNTk0LDYgQzExLjk4NjE1OTQsNiAxMi42ODkxNTk0LDYuMjk3IDEzLjI4MzE1OTQsNi44OTEgQzEzLjg3NzE1OTQsNy40ODQgMTQuMTc0MTU5NCw4LjE4OCAxNC4xNzQxNTk0LDkgTDE0LjE3NDE1OTQsOS4xODggTDExLjAzMzE1OTQsNiBaIE0xMS4xNzQxNTk0LDMuOTg0IEMxMC41NDkxNTk0LDMuOTg0IDkuOTM5MTU5MzcsNC4xMDkgOS4zNDYxNTkzNyw0LjM1OSBMNy4xODkxNTkzNywyLjIwMyBDOC40MDgxNTkzNywxLjczNCA5LjczNjE1OTM3LDEuNSAxMS4xNzQxNTk0LDEuNSBDMTMuNjQyMTU5NCwxLjUgMTUuODY5MTU5NCwyLjE4NyAxNy44NTMxNTk0LDMuNTYyIEMxOS44MzgxNTk0LDQuOTM4IDIxLjI2NzE1OTQsNi43NSAyMi4xNDIxNTk0LDkgQzIxLjM5MjE1OTQsMTAuODQ0IDIwLjI1MjE1OTQsMTIuNDIyIDE4LjcyMDE1OTQsMTMuNzM0IEwxNS44MTQxNTk0LDEwLjgyOCBDMTYuMDY0MTU5NCwxMC4yMzUgMTYuMTg5MTU5NCw5LjYyNSAxNi4xODkxNTk0LDkgQzE2LjE4OTE1OTQsNy42MjUgMTUuNjk3MTU5NCw2LjQ0NSAxNC43MTMxNTk0LDUuNDYxIEMxMy43MjgxNTk0LDQuNDc3IDEyLjU0OTE1OTQsMy45ODQgMTEuMTc0MTU5NCwzLjk4NCBMMTEuMTc0MTU5NCwzLjk4NCBaIE02LjcyMTE1OTM3LDYuNzk3IEM2LjM0NjE1OTM3LDcuNTQ3IDYuMTU4MTU5MzcsOC4yODEgNi4xNTgxNTkzNyw5IEM2LjE1ODE1OTM3LDEwLjM3NSA2LjY1MDE1OTM3LDExLjU1NSA3LjYzNTE1OTM3LDEyLjUzOSBDOC42MTkxNTkzNywxMy41MjMgOS43OTkxNTkzNywxNC4wMTYgMTEuMTc0MTU5NCwxNC4wMTYgQzExLjg5MjE1OTQsMTQuMDE2IDEyLjYyNzE1OTQsMTMuODI4IDEzLjM3NzE1OTQsMTMuNDUzIEwxMS44MzAxNTk0LDExLjkwNiBDMTEuNTgwMTU5NCwxMS45NjkgMTEuMzYxMTU5NCwxMiAxMS4xNzQxNTk0LDEyIEMxMC4zNjExNTk0LDEyIDkuNjU4MTU5MzcsMTEuNzAzIDkuMDY0MTU5MzcsMTEuMTA5IEM4LjQ3MDE1OTM3LDEwLjUxNiA4LjE3NDE1OTM3LDkuODEzIDguMTc0MTU5MzcsOSBDOC4xNzQxNTkzNyw4LjgxMyA4LjIwNTE1OTM3LDguNTk0IDguMjY3MTU5MzcsOC4zNDQgTDYuNzIxMTU5MzcsNi43OTcgWiBNMS4xODkxNTkzNywxLjI2NiBMMi40NTUxNTkzNywwIEwyMC4xNzQxNTk0LDE3LjcxOSBMMTguOTA4MTU5NCwxOC45ODQgQzE4Ljc1MjE1OTQsMTguODI4IDE4LjI2MDE1OTQsMTguMzQ0IDE3LjQzMTE1OTQsMTcuNTMxIEMxNi42MDMxNTk0LDE2LjcxOSAxNS45NzAxNTk0LDE2LjA5NCAxNS41MzMxNTk0LDE1LjY1NiBDMTQuMTg5MTU5NCwxNi4yMTkgMTIuNzM2MTU5NCwxNi41IDExLjE3NDE1OTQsMTYuNSBDOC43MDUxNTkzNywxNi41IDYuNDcxMTU5MzcsMTUuODEzIDQuNDcxMTU5MzcsMTQuNDM4IEMyLjQ3MDE1OTM3LDEzLjA2MiAxLjAzMzE1OTM3LDExLjI1IDAuMTU4MTU5Mzc1LDkgQzAuOTM5MTU5Mzc1LDcuMDYyIDIuMTg5MTU5MzcsNS40MDcgMy45MDgxNTkzNyw0LjAzMSBDMy41MzMxNTkzNywzLjY1NiAzLjAxMDE1OTM3LDMuMTI1IDIuMzM4MTU5MzcsMi40MzcgQzEuNjY2MTU5MzcsMS43NSAxLjI4MzE1OTM3LDEuMzU5IDEuMTg5MTU5MzcsMS4yNjYgTDEuMTg5MTU5MzcsMS4yNjYgWlwiIGlkPVwiRmlsbC0zXCIgZmlsbD1cIicgKyBAbGFiZWxDb2xvciArICdcIj48L3BhdGg+PC9nPjwvc3ZnPidcblxuIy0tLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHRAZXllQ29udGlhbmVyLnBhcmVudCA9IEBcblx0XHRAZXllT24ucGFyZW50ID0gQGV5ZU9mZi5wYXJlbnQgPSBAZXllQ29udGlhbmVyXG5cdFx0QGV5ZUNvbnRpYW5lci54ID0gQC53aWR0aCAtIDIyXG5cdFx0QGV5ZUNvbnRpYW5lci55ID0gMTNcblx0XHRAZXllT24ueSA9IDBcblx0XHRAZXJyb3JUZXh0LnBhcmVudCA9IEBcblx0XHRAZXJyb3JUZXh0LnkgPSBAaGVscGVyVGV4dC55XG5cdFx0XHRcbiMtLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cdFx0QG9uVGFwIEBjbGlja2VkXG5cdFx0XG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdEBvbk1vdXNlT3ZlciBAaG92ZXJPblxuXHRcdFx0QG9uTW91c2VPdXQgQGhvdmVyT2ZmXG5cdFx0XHRcdFxuXHRcdGV5ZU9mZiA9IEBleWVPZmZcblx0XHRleWVPbiA9IEBleWVPblxuXHRcdFxuXHRcdEBleWVDb250aWFuZXIub25DbGljayAtPlxuXHRcdFx0aWYgZXllT2ZmLnZpc2libGUgaXMgdHJ1ZVxuXHRcdFx0XHRleWVPZmYudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdGV5ZU9uLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGlucHV0LnR5cGUgPSBcInRleHRcIlxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0aW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIlxuXHRcdFx0XHRleWVPZmYudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0ZXllT24udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcblx0XHRALm9uIEV2ZW50cy5CbHVyLCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGxhYmVsLmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdEBsaW5lLmhlaWdodCA9IDFcblx0XHRcdEBsaW5lUmlwcGxlLndpZHRoID0gMFxuXHRcdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdFx0XG5cdFx0XHRpZiBALmlzRW1wdHlcblx0XHRcdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLmxhYmVsU2l6ZVxuXHRcdFx0XHRcdFx0eTogMjBcblx0XHRcdFx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XHRpZiBAaGVscGVyVGV4dFZpc2libGUgaXMgdHJ1ZSBcblx0XHRcdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0ZWxzZSBpZiBAaXNWYWxpZFxuXHRcdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBoZWxwZXJUZXh0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdFx0aWYgQGhlbHBlclRleHRWaXNpYmxlIGlzIHRydWUgXG5cdFx0XHRcdFx0QGhlbHBlclRleHQudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0QGVycm9yVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdGVsc2VcdFxuXHRcdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAcmVkXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEByZWRcblx0XHRcdFx0XG5cdFx0XHRcdEBlcnJvclRleHQudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0ZXJyb3JXb2JibGUxID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdGxheWVyOiBAbGFiZWxcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0eDogNVxuXHRcdFx0XHRcdHRpbWU6IDAuMDVcblx0XHRcdFx0ZXJyb3JXb2JibGUyID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdGxheWVyOiBAbGFiZWxcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0eDogLSA1XG5cdFx0XHRcdFx0dGltZTogMC4wNVxuXHRcdFx0XHRlcnJvcldvYmJsZTUgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0bGF5ZXI6IEBsYWJlbFxuXHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHR4OiAwXG5cdFx0XHRcdFx0dGltZTogMC4wMjVcblx0XHRcdFx0ZXJyb3JXb2JibGUxLnN0YXJ0KClcblx0XHRcdFx0ZXJyb3JXb2JibGUxLm9uQW5pbWF0aW9uRW5kIC0+IGVycm9yV29iYmxlMi5zdGFydCgpXG5cdFx0XHRcdGVycm9yV29iYmxlMi5vbkFuaW1hdGlvbkVuZCAtPiBlcnJvcldvYmJsZTUuc3RhcnQoKVxuXHRcdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRcbiMtLS0tLS0gQWRqdXN0IGEgZmV3IHRoaW5ncyBmb3IgdmFyaW91cyB0eXBlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGlucHV0Lm9uaW5wdXQgPSA9PlxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAaW5wdXQudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRAZW1pdChFdmVudHMuSW5wdXQsIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdEBjaGVja1ZhbGlkaXR5KClcblx0XHRcblx0XHRpbnB1dCA9IEBpbnB1dFxuXG5cdGNoZWNrVmFsaWRpdHk6IC0+XG5cdFx0cmV0dXJuIHVubGVzcyBAc2hvdWxkQ2hlY2tWYWxpZGl0eVxuXG5cdFx0aWYgQG9wdGlvbnMucGF0dGVybj9cblx0XHRcdHZhbGlkaXR5ID0gQGlucHV0LmNoZWNrVmFsaWRpdHkoKVxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAaW5wdXQudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRcblx0XHRcdGlmIEBpc1ZhbGlkIGlzbnQgdmFsaWRpdHkgb3IgQGlzRW1wdHlcblx0XHRcdFx0aWYgQGlzRW1wdHkgb3IgIXZhbGlkaXR5XG5cdFx0XHRcdFx0QGlzVmFsaWQgPSBmYWxzZVxuXHRcdFx0XHRcdEBlbWl0KEV2ZW50cy5JbnZhbGlkLCBAaW5wdXQudmFsdWUsIEApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRAaXNWYWxpZCA9IHRydWVcblx0XHRcdFx0XHRAZW1pdChFdmVudHMuVmFsaWQsICAgQGlucHV0LnZhbHVlLCBAKVxuXHRcdFx0XHRcdFxuXHRcdGlmIEBjaGVja01hdGNoKClcblx0XHRcdEBpc1ZhbGlkID0gdHJ1ZVxuXHRcdFx0QGVtaXQoRXZlbnRzLk1hdGNoLCBAaW5wdXQudmFsdWUsIEApXG5cdFx0XHRcblx0Y2hlY2tNYXRjaDogLT5cblx0XHRyZXR1cm4gZmFsc2UgdW5sZXNzIEBvcHRpb25zLm1hdGNoP1xuXHRcdGlmIEFycmF5LmlzQXJyYXkoQG9wdGlvbnMubWF0Y2gpXG5cdFx0XHRmb3IgbWF0Y2ggaW4gQG9wdGlvbnMubWF0Y2hcblx0XHRcdFx0cmV0dXJuIHRydWUgaWYgQGlucHV0LnZhbHVlLmluZGV4T2YobWF0Y2gpID4gLTFcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gdHJ1ZSBpZiBAaW5wdXQudmFsdWUuaW5kZXhPZihAb3B0aW9ucy5tYXRjaCkgPiAtMVxuXHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XG4jLS0tIGV2ZW50IGZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGNsaWNrZWQ6IC0+XG5cdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0XHR5OiAtIDZcblx0XHRcdFx0Y29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0XG5cdFx0QGxpbmUuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0aGVpZ2h0OiAyXG5cdFx0XHR0aW1lOiAwLjJcblx0XHRcdFxuXHRcdEBsaW5lUmlwcGxlLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0XHR4OiAwXG5cdFx0XHR0aW1lOiAwLjJcblx0XHRcdFxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRAbGFiZWwuY29sb3IgPSBAdGhlbWVDb2xvclxuXHRcdEBoZWxwZXJUZXh0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSBmYWxzZVxuXHRcdGlmIEBvcHRpb25zLmhlbHBlclRleHRWaXNpYmxlIGlzIHRydWUgXG5cdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFxuXHRob3Zlck9uOiAtPlxuXHRcdEBsaW5lLmhlaWdodCA9IDJcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUhvdmVyQ29sb3JcblxuXHRob3Zlck9mZjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAxXHRcdFxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRcblx0ZXllQ2xpY2s6IC0+XG5cdFx0QGV5ZS5zdGF0ZUN5Y2xlKFwidmlzaWJsZVwiLCBcInZpc2libGVPZmZcIilcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDEwLiBUZXh0QXJlYSAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLlRleHRBcmVhIGV4dGVuZHMgTGF5ZXJcblxuXHRQQVRURVJOX05VTUJFUiA9IFwiWzAtOV0qXCJcblx0XG5cdElOUFVUX0hJREVfUFNVRURPX1VJICA9IFwieyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGRpc3BsYXk6IG5vbmU7IH1cIlxuXHRJTlBVVF9TRUxFQ1RPUl9OVU1CRVIgPSBcImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uXCJcblx0SU5QVVRfU0VMRUNUT1JfU0VBUkNIID0gXCJpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b25cIlxuXHRcblx0RXZlbnRzLklucHV0ICAgPSBcIklucHV0RmllbGQuT25JbnB1dFwiXG5cdEV2ZW50cy5Gb2N1cyAgID0gXCJJbnB1dEZpZWxkLk9uRm9jdXNcIlxuXHRFdmVudHMuQmx1ciAgICA9IFwiSW5wdXRGaWVsZC5PbkJsdXJcIlxuXHRFdmVudHMuVmFsaWQgICA9IFwiSW5wdXRGaWVsZC5PblZhbGlkXCJcblx0RXZlbnRzLkludmFsaWQgPSBcIklucHV0RmllbGQuT25JbnZhbGlkXCJcblx0RXZlbnRzLk1hdGNoICAgPSBcIklucHV0RmllbGQuT25NYXRjaFwiXG5cdFxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+XG5cdFx0XHRAdGV4dGFyZWEudmFsdWVcblx0XHRcdFxuXHRcdHNldDogKHYpIC0+XG5cdFx0XHRyZXR1cm4gdW5sZXNzIHZcblx0XHRcdGlmIEBpbnB1dFxuXHRcdFx0XHRAY2hhbmdlSW5wdXRWYWx1ZSB2XG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRcbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cdFxuXHRcblx0XHRAaXNOdW1iZXIgPSBmYWxzZVxuXHRcdEBpc1NlYXJjaCA9IGZhbHNlXG5cdFx0XG5cdFx0QGlzRW1wdHkgID0gdHJ1ZVxuXHRcdEBpc1ZhbGlkICA9IG51bGxcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBudWxsXG5cdFx0XG5cdFx0IyBNYWtlIHN1cmUgd2Ugc2V0IHRoZSBDaGVja2luZyBGbGFnXG5cdFx0QHNob3VsZENoZWNrVmFsaWRpdHkgPSB0cnVlIGlmIEBvcHRpb25zLnBhdHRlcm4/IG9yIEBvcHRpb25zLm1hdGNoP1xuIFx0XHRcdFx0XHRcdFx0XHRcblx0XHQjIEZyYW1lciBMYXllciBQcm9wc1xuXHRcdEBvcHRpb25zLm5hbWUgICAgICAgICAgICAgPz0gXCJUZXh0IGFyZWFcIlxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciAgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4wMSlcIlxuXHRcdEBvcHRpb25zLmhlaWdodCA/PSAxODBcblxuXHRcdCMgQ3VzdG9tIExheWVyIFByb3BzXHRcdFxuXHRcdEBvcHRpb25zLnR5cGUgICAgICAgICAgICAgPz0gXCJ0ZXh0XCJcblx0XHRAb3B0aW9ucy5mb250V2VpZ2h0ICAgICAgID89IDQwMFxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgICAgICAgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuaW5kZW50ICAgICAgICAgICA/PSAwXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cyA/PSBudWxsXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvciA/PSBudWxsXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gMzAwXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIlR5cGUgc29tZXRoaW5nLi4uXCJcblx0XHRcblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHR0aGVtZSA9IEBvcHRpb25zLnRoZW1lXG5cblx0XHQjY29sb3JzIFxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblxuXHRcdHRoZW1lQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QHJlZCA9IFwiI0ZGMTc0NFwiXG5cdFx0XG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBsYWJlbENvbG9yID0gSW5wdXRsYWJlbF9kYXJrXG5cdFx0XHRAaW5wdXRDb2xvciA9IGlucHV0X2Rhcmtcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2Rhcmtcblx0XHRcdEBsaW5lSG92ZXJDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cdFx0XHRAbGFiZWxGb2N1c09wYWNpdHkgPSAxXG5cdFx0XHRAbGluZUNvbG9yID0gbGluZV9kYXJrXG5cdFx0XHRAb3B0aW9ucy5jb2xvciA9IFwiI2ZmZlwiXG5cdFx0ZWxzZVxuXHRcdFx0QGxhYmVsQ29sb3IgPSAgSW5wdXRsYWJlbF9saWdodCBcblx0XHRcdEBpbnB1dENvbG9yID0gaW5wdXRfbGlnaHRcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0XHRAbGluZUhvdmVyQ29sb3IgPSBcInJnYmEoMCwwLDAsMC44NylcIlxuXHRcdFx0QGxhYmVsRm9jdXNPcGFjaXR5ID0gMC44N1xuXHRcdFx0QGxpbmVDb2xvciA9IGxpbmVfbGlnaHRcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcblx0XHRcblx0XHRAb3B0aW9ucy5jb2xvciA9IEBpbnB1dENvbG9yXG5cdFx0XG5cdFx0aWYgVXRpbHMuaXNNb2JpbGUoKVxuXHRcdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTYgKiAyXG5cdFx0XHRAb3B0aW9ucy5saW5lSGVpZ2h0ID89ICAyNCAqIDJcblx0XHRcdEBvcHRpb25zLnN0eWxlID1cblx0XHRcdFx0XCJwYWRkaW5nXCIgOiBcIjU2cHggMzJweCAzMnB4IDMycHhcIlxuXHRcdGVsc2VcdFxuXHRcdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTZcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPz0gIDI0XG5cdFx0XHRAb3B0aW9ucy5zdHlsZSA9XG5cdFx0XHRcdFwicGFkZGluZ1wiIDogXCIyOHB4IDE2cHggMTZweCAxNnB4XCJcblx0XHRcdFxuXHRcdEBvcHRpb25zLmxhYmVsU2l6ZSA/PSAxNlxuXHRcdFxuXHRcdCN0ZXh0IHN0eWxpbmdcblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cdFx0XG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5mb250V2VpZ2h0ID89IDQwMFxuXHRcdEBvcHRpb25zLmxldHRlclNwYWNpbmcgPz0gMFxuXHRcdEBvcHRpb25zLmxpbWl0T24gPz0gdHJ1ZVxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLmxpbWl0T24gaXMgZmFsc2Vcblx0XHRcdEBvcHRpb25zLmNoYXJhY3RlckxpbWl0ID0gMTAwMDAwMDAwMDAwMFxuXHRcdGVsc2UgQG9wdGlvbnMuY2hhcmFjdGVyTGltaXQgPz0gMjAwXG5cbiMtLS0tLS0tIEVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0QGxhYmVsID0gbmV3IExhYmVsXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5sYWJlbFNpemVcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcdFxuXHRcdEBsaW1pdCA9IG5ldyBMYXllclxuXHRcdFx0aHRtbDogXCIwIC8gXCIgKyBAb3B0aW9ucy5jaGFyYWN0ZXJMaW1pdFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR3aWR0aDogMTAwXG5cdFx0XHRoZWlnaHQ6IDEyXG5cdFx0XHR2aXNpYmxlOiBAb3B0aW9ucy5saW1pdE9uXG5cdFx0XHRuYW1lOiBcImxpbWl0XCJcblx0XHRAbGltaXQuc3R5bGUgPVxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRmb250RmFtaWx5OiBAb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0XHRmb250U2l6ZTogXCIxMnB4XCJcblx0XHRcdGxpbmVIZWlnaHQ6IFwiMTJweFwiXG5cdFx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRcdFx0bGV0dGVyU3BhY2luZzogQG9wdGlvbnMubGV0dGVyU3BhY2luZ1x0XG5cdFx0XHRcblx0XHRAZXJyb3JUZXh0ID0gbmV3IExhYmVsXG5cdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdGNvbG9yOiBAcmVkXG5cdFx0XHRuYW1lOiBcImVycm9yIHRleHRcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdHRleHQ6IFwiRXhlZWRzIHRleHQgbGltaXQuXCJcblx0XHRcdFxuXHRcdEBib3JkZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdGJvcmRlckNvbG9yOiBAbGluZUNvbG9yXG5cdFx0XHRib3JkZXJSYWRpdXM6IDJcblx0XHRcdG5hbWU6IFwiYm9yZGVyXCJcblxuIy0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGxhYmVsLnBhcmVudCA9IEBib3JkZXIucGFyZW50ID0gQFxuXHRcdEBsaW1pdC5wYXJlbnQgPSBAXG5cdFx0QGVycm9yVGV4dC5wYXJlbnQgPSBAXG5cdFx0QGxhYmVsLnkgPSAyMFxuXHRcdEBsYWJlbC54ID0gMTZcblx0XHRAbGltaXQueCA9IEB3aWR0aCAtIDEwMFxuXHRcdEBsaW1pdC55ID0gQGhlaWdodCArIDhcblx0XHRAZXJyb3JUZXh0LnkgPSBAaGVpZ2h0ICsgOFxuXG4jLS0tLS0tLSBldmVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QG9uQ2xpY2sgQGNsaWNrZWRcblx0XHRcdFxuXHRcdEAub24gRXZlbnRzLkJsdXIsICh2YWx1ZSwgbGF5ZXIpIC0+XG5cdFx0XHRAYmx1cnJlZCgpXG5cdFx0XG5cdFx0QC5vbiBFdmVudHMuRm9jdXMsICh2YWx1ZSwgbGF5ZXIpIC0+XG5cdFx0XHRAZm9jdXMoKVxuXHRcdFx0XG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdEAub25Nb3VzZU92ZXIgQGhvdmVyT25cblx0XHRcdEAub25Nb3VzZU91dCBAaG92ZXJPZmZcdFxuXHRcdFx0XG5cdFx0QC5vbiBFdmVudHMuSW5wdXQsICh2YWx1ZSwgbGF5ZXIpIC0+XG5cdFx0XHRAbGltaXQuaHRtbCA9IEB2YWx1ZS5sZW5ndGggKyBcIiAvIFwiICsgQG9wdGlvbnMuY2hhcmFjdGVyTGltaXRcblx0XHRcdGlmIEB2YWx1ZS5sZW5ndGggPiBAb3B0aW9ucy5jaGFyYWN0ZXJMaW1pdFxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdEBsaW1pdC5jb2xvciA9IEByZWRcblx0XHRcdFx0QGJvcmRlci5ib3JkZXJDb2xvciA9IEByZWRcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gQHJlZFxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0QGVycm9yVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0QGxpbWl0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdFx0QGJvcmRlci5ib3JkZXJDb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcbiMtLS0tLS0tIEFkanVzdCBhIGZldyB0aGluZ3MgZm9yIHZhcmlvdXMgdHlwZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRzd2l0Y2ggQG9wdGlvbnMudHlwZVxuXHRcdFx0d2hlbiBcInNlYXJjaFwiIHRoZW4gQGlzU2VhcmNoID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlclwiIHRoZW4gQGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlcnMtb25seVwiLCBcIm51bWJlci1vbmx5XCJcblx0XHRcdFx0QGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0XHRAb3B0aW9ucy50eXBlICAgID0gaWYgQG9wdGlvbnMucGF0dGVybj8gdGhlbiBcIm51bWJlclwiICAgICAgICAgIGVsc2UgXCJ0ZXh0XCJcblx0XHRcdFx0QG9wdGlvbnMucGF0dGVybiA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gQG9wdGlvbnMucGF0dGVybiBlbHNlIFBBVFRFUk5fTlVNQkVSXG5cdFx0XG5cdFx0QGh0bWwgKz0gc3dpdGNoXG5cdFx0XHR3aGVuIEBpc051bWJlciB0aGVuIFwiPHN0eWxlIHR5cGU9J3RleHQvY3NzJz4je0lOUFVUX1NFTEVDVE9SX05VTUJFUn0je0lOUFVUX0hJREVfUFNVRURPX1VJfTwvc3R5bGU+XCJcblx0XHRcdHdoZW4gQGlzU2VhcmNoIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfU0VBUkNIfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0ZWxzZSBcIlwiXG5cblx0XHRpZiBAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yP1xuXHRcdFx0QGh0bWwgKz0gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfSA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDpwbGFjZWhvbGRlci1zaG93biB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9PC9zdHlsZT5cIlxuXHRcdFx0XG4jLS0tLS0tLSBjcmVhdGUgaW5wdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJ0ZXh0YXJlYVwiXG5cblx0XHRAdGV4dGFyZWEudmFsdWUgICAgICAgPSBAb3B0aW9ucy52YWx1ZSAgICAgICAgICAgICAgICAgIGlmIEBvcHRpb25zLnZhbHVlP1xuXHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IEBvcHRpb25zLnBsYWNlSG9sZGVyICAgICAgICAgICAgaWYgQG9wdGlvbnMucGxhY2VIb2xkZXI/XG5cdFx0QHRleHRhcmVhLnNldEF0dHJpYnV0ZShcIm1heExlbmd0aFwiLCBAb3B0aW9ucy5tYXhMZW5ndGgpIGlmIEBvcHRpb25zLm1heExlbmd0aD9cblx0XHRAdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgKGlmIEBvcHRpb25zLmF1dG9DYXBpdGFsaXplIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsICAgKGlmIEBvcHRpb25zLmF1dG9Db21wbGV0ZSAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIiwgICAgKGlmIEBvcHRpb25zLmF1dG9Db3JyZWN0ICAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRcblx0XHRAX2VsZW1lbnQuYXBwZW5kQ2hpbGQgQHRleHRhcmVhXG5cdFx0XG5cdFx0IyBTZXR1cCBWYWx1ZXNcblx0XHRAaXNFbXB0eSAgICAgICAgICAgPSAhKEBvcHRpb25zLnZhbHVlPy5sZW5ndGggPiAwKVxuXHRcdEBvcmlnaW5hbFRleHRDb2xvciA9IEBvcHRpb25zLmNvbG9yXG5cdFx0XG5cdFx0IyBTZXR1cCBJbnB1dCBTdHlsZVxuXHRcdFxuXHRcdEBfdGV4dEFyZWFTdHlsZSA9XG5cdFx0XHRmb250U2l6ZTogXCIje0BvcHRpb25zLmZvbnRTaXplfXB4XCJcblx0XHRcdGxpbmVIZWlnaHQ6IFwiI3tAb3B0aW9ucy5saW5lSGVpZ2h0fXB4XCJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiI3tAb3B0aW9ucy5mb250V2VpZ2h0fVwiXG5cdFx0XHRmb250RmFtaWx5OiBcIiN7QG9wdGlvbnMuZm9udEZhbWlseX1cIlxuXHRcdFx0b3V0bGluZTogXCJub25lXCJcblx0XHRcdHRleHRJbmRlbnQ6IFwiI3tAb3B0aW9ucy5pbmRlbnR9cHhcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdGhlaWdodDogXCIxMDAlXCJcblx0XHRcdHdpZHRoOiAgXCIxMDAlXCJcblx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0XHRvdmVyZmxvdzogXCJoaWRkZW5cIlxuXHRcdFx0cmVzaXplOiBcIm5vbmVcIlxuXHRcdFx0XCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJub25lXCJcblx0XHRcdFxuXHRcdEB0ZXh0YXJlYS5zdHlsZVtrZXldICA9IHZhbCBmb3Iga2V5LCB2YWwgb2YgQF90ZXh0QXJlYVN0eWxlXG5cdFx0QHRleHRhcmVhLnN0eWxlLmNvbG9yID0gQG9wdGlvbnMuY29sb3IgaWYgQG9wdGlvbnMuY29sb3I/XG5cdFx0XG5cdFx0QHRleHRhcmVhLm9uZm9jdXMgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXM/XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblx0XHRcdEBlbWl0KEV2ZW50cy5Gb2N1cywgQHRleHRhcmVhLnZhbHVlLCBAKVxuXG5cdFx0QHRleHRhcmVhLm9uYmx1ciAgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHR1bmxlc3MgQHRleHRhcmVhLnBsYWNlaG9sZGVyIGlzIEBvcHRpb25zLnBsYWNlSG9sZGVyIG9yICFAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJcblx0XHRcdEBlbWl0KEV2ZW50cy5CbHVyLCBAdGV4dGFyZWEudmFsdWUsIEApXG5cdFxuXHRcdEBfdGV4dEFyZWFTdHlsZW9uYmx1ciAgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHR1bmxlc3MgQGlucHV0LnBsYWNlaG9sZGVyIGlzIEBvcHRpb25zLnBsYWNlSG9sZGVyIG9yICFAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJcblx0XHRcdEBlbWl0KEV2ZW50cy5CbHVyLCBAaW5wdXQudmFsdWUsIEApXG5cblx0XHRAdGV4dGFyZWEub25pbnB1dCA9ID0+XG5cdFx0XHRAaXNFbXB0eSA9ICEoIEB0ZXh0YXJlYS52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRcdEBlbWl0KEV2ZW50cy5JbnB1dCwgQHRleHRhcmVhLnZhbHVlLCBAKVxuXHRcdFx0QGNoZWNrVmFsaWRpdHkoKVxuXHRcdFx0XG5cdFx0QG9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4gQHRleHRhcmVhLmZvY3VzKClcblx0XHRAb24gXCJjaGFuZ2U6Y29sb3JcIiwgIC0+IEBjaGFuZ2VJbnB1dFRleHRDb2xvcigpXG5cblx0XHQjVXBkYXRlIHRoZSBoZWlnaHQgd2hlbmV2ZXIgYW55dGhpbmcgY2hhbmdlcy5cblx0XHRAdGV4dGFyZWEub25rZXlkb3duID0gPT4gQF91cGRhdGUoKVxuXHRcdEB0ZXh0YXJlYS5vbmtleXVwID0gPT4gQF91cGRhdGUoKVxuXHRcdEB0ZXh0YXJlYS5jaGFuZ2UgPSA9PiBAX3VwZGF0ZSgpXG5cdF9yZXNpemVQYXJlbnQgPSAobGF5ZXIsIHBhcmVudE1pbkhlaWdodCwgYm90dG9tUGFkZGluZykgLT5cblx0XHQjIFZhcmlhYmxlIGZvciBwYXJlbnRcblx0XHRsYXllclBhcmVudCA9IGxheWVyLnBhcmVudFxuXHRcdFxuXHRcdCMgQXJyYXkgdG8gc3RvcmUgYWxsIGNoaWxkcmVuJ3MgbWF4WXNcblx0XHRhbGxDaGlsZHJlbk1heFlzID0gW11cblx0XHRcblx0XHQjIFB1c2ggZWFjaCBtYXhZIHRvIGFuIGFycmF5XG5cdFx0Zm9yIG1heCBpbiBsYXllclBhcmVudC5jaGlsZHJlblxuXHRcdFx0YWxsQ2hpbGRyZW5NYXhZcy5wdXNoKG1heC5tYXhZKVxuXHRcdFx0XG5cdFx0IyBGaW5kIHRoZSBib3R0b20tbW9zdCBtYXhZIHZhbHVlXG5cdFx0dGFsbGVzdENoaWxkTWF4WSA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGFsbENoaWxkcmVuTWF4WXMpXG5cdFx0XG5cdFx0IyBTdG9yZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoYXQgYW5kIHRoZSBwYXJlbnQgbGF5ZXJcblx0XHRsYXllclBhcmVudC5oZWlnaHQgPSBNYXRoLm1heCh0YWxsZXN0Q2hpbGRNYXhZICsgYm90dG9tUGFkZGluZywgcGFyZW50TWluSGVpZ2h0KVxuXHRcdFxuXHRcdCMgVE9ETyAtIE1haW50YWluIHRoZSBib3R0b20gcGFkZGluZyBvZiB0aGUgcGFyZW50LlxuXHRcdFxuXHQjIFJlZmxvdyBhbGwgdGhlIHNpYmxpbmdzIHVuZGVyIHRoZSB0ZXh0IGxheWVyXG5cdF9yZWZsb3dTaWJsaW5ncyA9IChsYXllciwgbGF5ZXJNYXhZKSAtPlxuXHRcdGxheWVyTGlzdCA9IGxheWVyLnBhcmVudC5jaGlsZHJlblxuXHRcdGZvciBhIGluIFtsYXllckxpc3QuaW5kZXhPZihsYXllcikrMS4uLmxheWVyTGlzdC5sZW5ndGhdXG5cdFx0XHR5RGlmZiA9IGxheWVyTGlzdFthXS55IC0gbGF5ZXJNYXhZXG5cdFx0XHRsYXllckxpc3RbYV0ueSA9IGxheWVyLm1heFkgKyB5RGlmZlxuXHRcdCMgVE9ETyAtIHJlZG8gdGhpcyB3aXRob3V0IHRoZSBhc3N1bXB0aW9uIHRoYXQgYWxsIHNpYmxpbmdzIGFmdGVyIHRoZSBsYXllciBhcmUgYmVsb3cgaXQuXG5cdFx0XHRcblx0IyBVcGRhdGUgaGVpZ2h0IGZ1bmN0aW9uXG5cdF91cGRhdGU6ID0+XG5cdFx0c2V0VGltZW91dCA9PlxuXHRcdFx0bGF5ZXJNYXhZID0gQC5tYXhZXG5cdFx0XHQjIEFkZCBiYWNrIGFueSBsaW5lIGJyZWFrcyB0aGF0IHRoZSB2YWx1ZSBtZXRob2QgZ2V0cyByaWRlIG9mXG5cdFx0XHRfdHJ1ZVZhbHVlID0gQHRleHRhcmVhLnZhbHVlLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKS5yZXBsYWNlKC9cXG4vZywgXCI8YnIvPiZuYnNwO1wiKTtcblx0XHRcdFxuXHRcdFx0IyBJZiBpdCdzIGVtcHR5LCBtYWtlIHN1cmUgdGhlcmUncyBhIGxldHRlciBpbiB0aGVyZSB0byBjYWxjdWxhdGUgKnNvbWV0aGluZypcblx0XHRcdGlmIF90cnVlVmFsdWUudHJpbSgpID09IFwiXCIgdGhlbiBfdHJ1ZVZhbHVlID0gXCJhXCJcblx0XHRcdFxuXHRcdFx0IyBDYWxjdWxhdGUgdGhlIGhlaWdodCEhIVxuXHRcdFx0Y2FsY0hlaWdodCA9IFV0aWxzLnJvdW5kKFV0aWxzLnRleHRTaXplKF90cnVlVmFsdWUsIEBfdGV4dEFyZWFTdHlsZSwge3dpZHRoOiBALndpZHRofSkuaGVpZ2h0LCAwKVxuXHRcdFx0XG5cdFx0XHQjIFNldCB0aGUgaGVpZ2h0IHRvIGVpdGhlciB0aGUgY2FsY3VsYXRlZCBoZWlnaHQsIG9yIHRoZSBtaW5IZWlnaHQsIHdoaWNoZXZlciBpcyBncmVhdGVyLlxuXHRcdFx0QC5oZWlnaHQgPSBNYXRoLm1heChjYWxjSGVpZ2h0LCBAb3B0aW9ucy5taW5IZWlnaHQpXG5cdFx0XHRpZiBAb3B0aW9ucy5yZWZsb3dTaWJsaW5ncyA9PSB0cnVlIHRoZW4gX3JlZmxvd1NpYmxpbmdzKEAsIGxheWVyTWF4WSlcblx0XHRcdGlmIEBvcHRpb25zLnJlc2l6ZVBhcmVudCA9PSB0cnVlIHRoZW4gX3Jlc2l6ZVBhcmVudChALCBAcGFyZW50T2dIZWlnaHQsIEBvcHRpb25zLnBhcmVudEJvdHRvbVBhZGRpbmcpXG5cbiMtLS0tLS0tIGV2ZW50IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdGNoZWNrVmFsaWRpdHk6IC0+XG5cdFx0cmV0dXJuIHVubGVzcyBAc2hvdWxkQ2hlY2tWYWxpZGl0eVxuXHRcdFx0XHRcdFxuXHRjbGVhcjogLT5cblx0XHRAaW5wdXQudmFsdWUgPSBcIlwiXG5cdFx0QGlzVmFsaWQgPSBudWxsXG5cdFx0QGlzRW1wdHkgPSB0cnVlXG5cdFx0XG5cdGNoYW5nZUlucHV0VGV4dENvbG9yOiAtPiBcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAY29sb3IudG9IZXhTdHJpbmcoKVxuXHRcblx0Y2hhbmdlSW5wdXRWYWx1ZTogKHYpIC0+XG5cdFx0QGlucHV0LnZhbHVlID0gdlxuXHRcdEBpbnB1dC5vbmlucHV0KClcblx0XHRcblx0Y2xpY2tlZDogLT5cblx0XHRAbGFiZWwuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHRcdHk6IDhcblx0XHRcdFx0Y29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0eDogMTZcblx0XHRcdHRpbWU6IDAuMlxuXHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QGJvcmRlci5ib3JkZXJXaWR0aCA9IDJcblxuXHRlcnJvcjogLT5cblx0XHRAYm9yZGVyQ29sb3IgPSBAcmVkXG5cdFx0XG5cdGZvY3VzOiAtPlxuXHRcdEBsYWJlbC5mb250U2l6ZSA9IDEyXG5cdFx0QGJvcmRlckNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAyXG5cdFx0QGxhYmVsLmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XG5cdGhvdmVyT246IC0+XG5cdFx0QGJvcmRlci5ib3JkZXJXaWR0aCA9IDJcblx0XHRAb3B0aW9ucy5ib3JkZXJDb2xvciA9IEBsaW5lSG92ZXJDb2xvclxuXG5cdGhvdmVyT2ZmOiAtPlxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAxXG5cdFx0QGJvcmRlckNvbG9yID0gQGxpbmVDb2xvclxuXHRcdFx0XG5cdGJsdXJyZWQ6ICh2YWx1ZSwgbGF5ZXIpXHQtPlxuXHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0QGJvcmRlci5ib3JkZXJDb2xvciA9IEBsaW5lQ29sb3JcblxuXHRcdGlmIEAuaXNFbXB0eVxuXHRcdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdFx0XHR5OiAyMFxuXHRcdFx0XHRcdHg6IDE2XG5cdFx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0QGJvcmRlci5ib3JkZXJDb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcblx0XHRpZiBAdmFsdWUubGVuZ3RoID4gQG9wdGlvbnMuY2hhcmFjdGVyTGltaXRcblx0XHRcdEBlcnJvclRleHQudmlzaWJsZSA9IHRydWVcblx0XHRcdEBsaW1pdC5jb2xvciA9IEByZWRcblx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAcmVkXG5cdFx0XHRAbGFiZWwuY29sb3IgPSBAcmVkXG5cdFx0XHRcblx0XHRAYm9yZGVyLmJvcmRlcldpZHRoID0gMVxuXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgMTEuIFRleHRGaWVsZF9Ecm9wZG93biAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuVGV4dEZpZWxkX0Ryb3Bkb3duIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRcbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAb3B0aW9ucy5zY3JlZW5Db2xvciA/PSBcIiMwMDBcIlxuXHRcdFxuXHRcdEBvcHRpb25zLmNob2ljZXMgPz0gW1wiYXBwbGVcIiwgXCJiYW5hbmFcIiwgXCJibHVlYmVycnlcIixcImNhbnRhbG91cGVcIiwgXCJjaGVycnlcIixcImNvY29udXRcIiwgXCJmaWdcIiwgXCJncmFwZVwiLFwiZ3JhcGVmcnVpdFwiLFwiZ3VhdmFcIiwgXCJraXdpZnJ1aXRcIiwgXCJsZW1vblwiLFwibGltZVwiLCBcImx5Y2hlZVwiLCBcIm1hbmdvXCIsIFwibWVsb25cIiwgXCJvcmFuZ2VcIixcInBhcGF5YVwiLCBcInBhc3Npb25mcnVpdFwiLCBcInBlYWNoXCIsIFwicGVhclwiLFwicGluZWFwcGxlXCIsIFwicGx1bVwiLFwicG9tZWdyYW5hdGVcIiwgXCJyYXNwYmVycnlcIiwgXCJzdHJhd2JlcnJ5XCIsIFwid2F0ZXJtZWxvblwiXVxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIlNlbGVjdCBhIGZydWl0XCJcblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHRAb3B0aW9ucy52aXNpYmxlSXRlbXMgPz0gNFxuXHRcdEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvbiA/PSBudWxsXG5cdFx0XG5cdFx0I2NvbG9ycyBcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0dGhlbWVDb2xvciA9IEB0aGVtZUNvbG9yXG5cdFx0XG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfZGFya1xuXHRcdFx0QGxpbmVDb2xvciA9IGxpbmVfZGFya1xuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gbGluZV9kYXJrX2hvdmVyXG5cdFx0XHRAaW5wdXRDb2xvciA9IGlucHV0X2Rhcmtcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2xpZ2h0XG5cdFx0XHRAbGluZUNvbG9yID0gbGluZV9saWdodFxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gbGluZV9saWdodF9ob3Zlclx0XG5cdFx0XHRAaW5wdXRDb2xvciA9IGlucHV0X2xpZ2h0XG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0aGVpZ2h0OiA1MFxuXHRcdFx0Y29sb3I6IFwiI0U5MUU2M1wiXG5cdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFx0bmFtZTogXCJEcm9wRG93blwiXG5cbiMtLS0tLS0gbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdEBsYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFxuXHRcdEBwbGFjZUhvbGRlciA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRjb2xvcjogQGlucHV0Q29sb3Jcblx0XHRcdHk6IDIwXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLSBhcnJvdyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGFycm93ID0gbmV3IExheWVyXG5cdFx0XHRodG1sOiAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCI+PGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwb2x5Z29uIGZpbGw9XCInICsgQGxpbmVDb2xvciArICdcIiBwb2ludHM9XCIwLjY2MDEzMzg3NyAwIDkuMTc0ODI3MDYgMCA0LjkxNzQ4MDQ3IDVcIj48L3BvbHlnb24+PC9nPjwvc3ZnPidcblx0XHRcdHNpemU6IDI0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdGNvbG9yOiBcIiM1NTVcIlxuXHRcdFx0d2lkdGg6MTBcblx0XHRcdGhlaWdodDogNVxuXHRcdFx0bmFtZTpcIkFycm93XCJcblxuIy0tLS0tLSBsaW5lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxpbmUgPSBuZXcgTGF5ZXJcblx0XHRcdGhlaWdodDogMVxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHR5OiA0OVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAbGluZUNvbG9yXG5cdFx0XHRuYW1lOiBcImxpbmVcIlxuXG4jLS0tLS0tIGNvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGNvbnRhaW5lciA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRib3JkZXJSYWRpdXM6IDJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcblx0XHRcdGhlaWdodDogQG9wdGlvbnMudmlzaWJsZUl0ZW1zICogNTAgKyAyMFxuXHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0bmFtZTogXCJjb250YWluZXJcIlxuXHRcdFxuIy0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHRAY29udGFpbmVyLnN0YXRlcyA9IFxuXHRcdFx0b3BlbjogXG5cdFx0XHRcdGhlaWdodDogQG9wdGlvbnMudmlzaWJsZUl0ZW1zICogNTAgKyAyMFxuXHRcdFx0XHR5OiAwXG5cdFx0XHRjbG9zZWQ6XG5cdFx0XHRcdGhlaWdodDogMFxuXHRcdFx0XHR5OiA1MFxuXHRcdEBjb250YWluZXIuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJjbG9zZWRcIlxuXHRcdEBjb250YWluZXIuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuNVxuXHRcdFxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0QHBsYWNlSG9sZGVyLnBhcmVudCA9IEBcblx0XHRAY29udGFpbmVyLnBhcmVudCA9IEBhcnJvdy5wYXJlbnQgPSBAbGluZS5wYXJlbnQgPSAgQFxuXHRcdFxuXHRcdEBhcnJvdy55ID0gQWxpZ24uY2VudGVyKDIpXG5cdFx0QGFycm93LnggPSBAb3B0aW9ucy53aWR0aCAtIDI0XG5cdFx0QGNvbnRhaW5lci55ID0gNTBcblx0XHRcblx0XHRwbGFjZUhvbGRlciA9IEBwbGFjZUhvbGRlclxuXHRcdGxhYmVsID0gQGxhYmVsXG5cdFx0Y29udGFpbmVyID0gQGNvbnRhaW5lclxuXHRcdGFjdGl2ZVNlbGVjdGlvbiA9IEBhY3RpdmVTZWxlY3Rpb25cblx0XHRsYWJlbENvbG9yID0gQGxhYmVsQ29sb3JcblxuIy0tLS0tLSBzaGFkb3dzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHNoYWRvdyA9IG5ldyBTaGFkb3dcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy52aXNpYmxlSXRlbXMgKiA1MCArIDIwXG5cdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRib3JkZXJSYWRpdXM6IEBjb250YWluZXIuYm9yZGVyUmFkaXVzXG5cdFx0XHR5OiAwXG5cdFx0XHRuYW1lOiBcInNoYWRvd3NcIlxuXG5cdFx0Zm9yIGl0ZW0gaW4gc2hhZG93LmFycmF5XG5cdFx0XHRpdGVtLnN0YXRlcy5vcGVuID1cblx0XHRcdFx0eTogMFxuXHRcdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnZpc2libGVJdGVtcyAqIDUwICsgMjBcblx0XHRcdGl0ZW0uc3RhdGVzLmNsb3NlZCA9XG5cdFx0XHRcdGhlaWdodDogMFxuXHRcdFx0XHR5OiA1MFxuXHRcdFx0XG5cdFx0XHRpdGVtLmFuaW1hdGlvbk9wdGlvbnMgPSB0aW1lOiAwLjVcblx0XHRcdFx0XHRcblx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJjbG9zZWRcIlxuXHRcdFxuIy0tLS0tLSBzY3JvbGwgYXJlYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhID0gbmV3IFNjcm9sbENvbXBvbmVudFxuXHRcdFx0cGFyZW50OiBAY29udGFpbmVyXG5cdFx0XHR3aWR0aDogQGNvbnRhaW5lci53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnZpc2libGVJdGVtcyAqIDUwICsgMjBcblx0XHRcdG5hbWU6IFwic2Nyb2xsQXJlYVwiXG5cdFx0Y29udGFpbmVyX1Njcm9sbEFyZWEuY29udGVudC5kcmFnZ2FibGUub3ZlcmRyYWcgPSBmYWxzZVxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLmNvbnRlbnQuZHJhZ2dhYmxlLmJvdW5jZSA9IGZhbHNlXG5cdFx0Y29udGFpbmVyX1Njcm9sbEFyZWEubW91c2VXaGVlbEVuYWJsZWQgPSB0cnVlXG5cbiMtLS0tLS0gc2xpZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcblx0XHRzbGlkZXIgPSBuZXcgU2xpZGVyQ29tcG9uZW50XG5cdFx0XHR3aWR0aDogNVxuXHRcdFx0aGVpZ2h0OiBjb250YWluZXJfU2Nyb2xsQXJlYS5oZWlnaHQgLSAzMFxuXHRcdFx0eTogMTVcblx0XHRcdGJvcmRlclJhZGl1czogMFxuXHRcdFx0cGFyZW50OiBjb250YWluZXJfU2Nyb2xsQXJlYVxuXHRcdFx0eDogY29udGFpbmVyX1Njcm9sbEFyZWEud2lkdGggLSA1XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdG1pbjogMFxuXHRcdFx0bWF4OiAoQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGggKiA1MCkgLSAyMDBcblx0XHRcdHZhbHVlOiAtMTVcblx0XHRcdG5hbWU6IHNsaWRlclxuXHRcdHNsaWRlci5maWxsLmJhY2tncm91bmRDb2xvciA9IFwiXCJcblx0XHRcblx0XHRzbGlkZXIua25vYi5iYWNrZ3JvdW5kQ29sb3IgPSBcIkJEQkRCRFwiXG5cdFx0c2xpZGVyLmtub2Iuc2hhZG93WSA9IDBcblx0XHRzbGlkZXIua25vYi5zaGFkb3dTcHJlYWQgPSAwXG5cdFx0c2xpZGVyLmtub2Iuc2hhZG93Qmx1ciA9IDBcblx0XHRzbGlkZXIua25vYi5ib3JkZXJSYWRpdXMgPSAxXG5cdFx0c2xpZGVyLmtub2Iud2lkdGggPSA1XG5cdFx0c2xpZGVyLmtub2IuaGVpZ2h0ID0gMzBcblx0XHRcblx0XHRzbGlkZXIub24gXCJjaGFuZ2U6dmFsdWVcIiwgLT5cblx0XHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLmNvbnRlbnQueSA9IC0gdGhpcy52YWx1ZSBcblxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLm9uTW92ZSAtPlxuXHRcdFx0c2xpZGVyLnZhbHVlID0gY29udGFpbmVyX1Njcm9sbEFyZWEuc2Nyb2xsWSBcblxuIy0tLS0tLSBjaG9pY2UgbG9vcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGFzID0gbnVsbFxuXHRcdFxuXHRcdGZvciBpIGluIFswLi4uQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGhdXG5cdFx0XHRjaG9pY2UgPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OiBjb250YWluZXJfU2Nyb2xsQXJlYS5jb250ZW50XG5cdFx0XHRcdHdpZHRoOiBjb250YWluZXJfU2Nyb2xsQXJlYS53aWR0aFxuXHRcdFx0XHRoZWlnaHQ6IDUwXG5cdFx0XHRcdHk6IDUwICogaSArIDEwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHRuYW1lOiBcImNob2ljZVwiXG5cblx0XHRcdGNob2ljZV9sYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0XHR0ZXh0OiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHBhcmVudDogY2hvaWNlXG5cdFx0XHRcdHg6IDIwXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRuYW1lOiBAb3B0aW9ucy5jaG9pY2VzW2ldICsgXCJsYWJlbFwiXG5cdFx0XHRcdGNvbG9yOiBsYWJlbF9saWdodFxuXHRcdFx0XHRcblx0XHRcdGNob2ljZS5vbk1vdXNlT3ZlciAtPlxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IFwiI2VlZVwiXG5cblx0XHRcdGNob2ljZS5vbk1vdXNlT3V0IC0+XG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCJcblxuXHRcdFx0Y2hvaWNlLm9uQ2xpY2sgLT5cblx0XHRcdFx0YXMgPSB0aGlzLmNoaWxkcmVuWzBdLnRleHRcblx0XHRcdFx0cGxhY2VIb2xkZXIudGV4dCA9IHRoaXMuY2hpbGRyZW5bMF0udGV4dFxuXHRcdFx0XHRwbGFjZUhvbGRlci5jb2xvciA9IGxhYmVsQ29sb3Jcblx0XHRcdFx0Y29udGFpbmVyLnN0YXRlcy5zd2l0Y2ggXCJjbG9zZWRcIlxuXHRcdFx0XHRsYWJlbC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRmb3IgaXRlbSBpbiBzaGFkb3cuYXJyYXlcblx0XHRcdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2ggXCJjbG9zZWRcIlxuXHRcdFx0XHRcblx0XHRjb250YWluZXIgPSBAY29udGFpbmVyXG5cbiMtLS0tLS0gZXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QG9uQ2xpY2sgLT5cblx0XHRcdGZvciBpdGVtIGluIHNoYWRvdy5hcnJheVxuXHRcdFx0XHRpdGVtLnN0YXRlcy5zd2l0Y2ggXCJvcGVuXCJcblx0XHRcdGNvbnRhaW5lci5zdGF0ZXMuc3dpdGNoIFwib3BlblwiXG5cdFx0XHRAYWN0aXZlU2VsZWN0aW9uID0gYXNcblx0XHRcdFx0XHRcblx0XHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0QG9uTW91c2VPdmVyIEBob3Zlck9uXG5cdFx0XHRAb25Nb3VzZU91dCBAaG92ZXJPZmZcblx0XHRcdFx0XG4jLS0tLS0tZXZlbnQgZnVuY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0aG92ZXJPbjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAyXG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVIb3ZlckNvbG9yXG5cblx0aG92ZXJPZmY6IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMVx0XHRcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0XG4jLS0tLS0tIGdldHRlcnMgYW5kIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdjb2xvcicsXG5cdFx0Z2V0OiAtPiBcblx0XHRcdEBvcHRpb25zLmNvbG9yXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QG9wdGlvbnMuY29sb3IgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2Nob2ljZXMnLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5jaG9pY2VzXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0XHRAb3B0aW9ucy5jaG9pY2VzID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lICdhY3RpdmVTZWxlY3Rpb24nLFxuXHRcdGdldDogLT4gXG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPSB2YWx1ZVxuXG5cdFx0XHRcblx0XG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgMTIuIEFwcEJhciAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuQXBwQmFyIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG4jLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIkZvcm1cIlxuXHRcdEBvcHRpb25zLmZvbnRTaXplID89IDIyXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA1MDBcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmxhYmVsQ29sb3IgPSBcIiNmZmZcIlxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEBvcHRpb25zLm1vYmlsZSA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLm1lbnVJY29uVmlzYmxlID89IHRydWVcblx0XHRAb3B0aW9ucy5uYW1lID89IFwiYXBwIGJhclwiXG5cdFx0QG9wdGlvbnMuc3RhdHVzSWNvbnNZID89IEFsaWduLmNlbnRlcigtOClcblx0XHRAb3B0aW9ucy5tZW51SWNvblkgPz0gQWxpZ24uY2VudGVyKClcblxuIy0tLS0tLSBlbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAYXBwQ29udCA9IG5ldyBMYXllclxuXHRcdFx0aGVpZ2h0OiA1NlxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdG5hbWU6IFwiYXBwIGJhciBjb250aWFuZXJcIlxuXG5cdFx0aWYgVXRpbHMuaXNNb2JpbGUoKSBvciBAb3B0aW9ucy5tb2JpbGUgaXMgdHJ1ZVxuXHRcdFx0QHN0YXR1c0JhciA9IG5ldyBMYXllclxuXHRcdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdFx0aGVpZ2h0OiAyNFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjMwKVwiXG5cdFx0XHRcdG5hbWU6IFwic3RhdHVzIGJhclwiXG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gODBcblx0XHRcdEBhcHBDb250LnkgPSAyNFxuXHRcdGVsc2Vcblx0XHRcdEBvcHRpb25zLmhlaWdodCA/PSA1NlxuXHRcblx0XHRAbWVudUljb24gPSBuZXcgTGF5ZXJcblx0XHRcdHNpemU6IDQ4XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLm1lbnVJY29uVmlzYmxlXG5cdFx0XHRuYW1lOiBcIm1lbnUgaWNvblwiXG5cdFx0XHRcblx0XHRAdGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0Zm9udEZhbWlseTogQG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLmxhYmVsQ29sb3Jcblx0XHRcdGZvbnRXZWlnaHQ6IEBvcHRpb25zLmZvbnRXZWlnaHRcblx0XHRcdG5hbWU6IFwidGl0bGVcIlxuXG4jLS0tLS0tIHN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRoZWlnaHQ6IEBoZWlnaHRcblx0XHRcdG5hbWU6IFwic2hhZG93c1wiXG5cblx0XHRzaGFkb3cucGFyZW50ICA9IEBcblx0XHRAdGl0bGUucGFyZW50ID0gQFxuXHRcdEB0aXRsZS55ID0gQWxpZ24uY2VudGVyKClcblx0XHRAdGl0bGUueCA9IDE2XG5cdFx0QGFwcENvbnQucGFyZW50ID0gQFxuXHRcdEBtZW51SWNvbi5wYXJlbnQgPSBAdGl0bGUucGFyZW50ID0gQGFwcENvbnRcblx0XHRAbWVudUljb24ueCA9IDE2XG5cdFx0QG1lbnVJY29uLnkgPSBAb3B0aW9ucy5tZW51SWNvbllcblxuXHRcdGlmICBAbWVudUljb24udmlzaWJsZSBpcyB0cnVlXG5cdFx0XHRAdGl0bGUueCA9IDQ4ICsgMTYgKyAxNlxuXG4jLS0tLS0tIG1lbnUgaWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXHRcdG1lbnVJY29uID0gbmV3IExheWVyXG5cdFx0XHRodG1sOiAnPHN2ZyB3aWR0aD1cIjE4cHhcIiBoZWlnaHQ9XCIxMnB4XCIgdmlld0JveD1cIjAgMCAxOCAxMlwiPjxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTAsMiBMMTgsMiBMMTgsMCBMMCwwIEwwLDIgWiBNMCw2Ljk3IEwxOCw2Ljk3IEwxOCw1IEwwLDUgTDAsNi45NyBaIE0wLDEyIEwxOCwxMiBMMTgsMTAgTDAsMTAgTDAsMTIgWlwiIGZpbGw9XCIjZmZmXCI+PC9wYXRoPjwvZz48L3N2Zz4nXG5cdFx0XHR3aWR0aDogMThcblx0XHRcdGhlaWdodDogMTJcblx0XHRcdHBhcmVudDogQG1lbnVJY29uXG5cdFx0XHR4OiBBbGlnbi5jZW50ZXIoKVxuXHRcdFx0eTogQWxpZ24uY2VudGVyKClcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0bmFtZTogXCJpY29uXCJcblxuIy0tLS0tLSBzdGF0dXMgYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKCkgb3IgQG9wdGlvbnMubW9iaWxlIGlzIHRydWVcblx0XHRcdEBzdGF0dXNCYXIucGFyZW50ID0gQFxuXHRcdFx0QHRpdGxlLnkgPSAgQWxpZ24uY2VudGVyKDEwKVxuXHRcdFx0XG5cdFx0XHRzdGF0dXNCYXJUaW1lID0gbmV3IFRleHRMYXllclxuXHRcdFx0XHRmb250U2l6ZTogMTNcblx0XHRcdFx0cGFyZW50OiBAc3RhdHVzQmFyXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHR4OiBAd2lkdGggLSA1NVxuXHRcdFx0XHRjb2xvciA6IFwiI2ZmZlwiXG5cdFx0XHRcdGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdFx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRcdFx0XHRuYW1lOiBcInN0YXR1cyBiYXIgdGltZVwiXG5cblx0XHRcdHNldFRpbWUgPSAoKSAtPlxuXHRcdFx0XHRkYXRlID0gbmV3IERhdGVcblx0XHRcdFx0bWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcblx0XHRcdFx0aG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuXHRcdFx0XHRcblx0XHRcdFx0em9uZSA9IFwiQU1cIlxuXHRcdFx0XHRcblx0XHRcdFx0aWYgaG91ciA8IDEwXG5cdFx0XHRcdFx0aG91ciA9ICcwJyArIGhvdXIgXG5cdFx0XHRcdFx0XG5cdFx0XHRcdGlmIGhvdXIgPiAxMlxuXHRcdFx0XHRcdGhvdXIgPSBob3VyIC0gMTJcblx0XHRcdFx0XHR6b25lID0gXCJQTVwiXG5cdFx0XHRcdGVsc2VcdFxuXHRcdFx0XHRcdHpvbmUgPSBcIkFNXCJcblx0XHRcdFx0XG5cdFx0XHRcdGlmIG1pbnV0ZSA8IDEwXG5cdFx0XHRcdFx0bWludXRlID0gJzAnICsgbWludXRlIFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRzdGF0dXNCYXJUaW1lLnRleHQgPSBcIiN7aG91cn06I3ttaW51dGV9ICN7em9uZX1cIlxuXHRcdFx0XHRcblx0XHRcdFx0VXRpbHMuZGVsYXkgMzAsIC0+XG5cdFx0XHRcdFx0c2V0VGltZSgpXG5cdFx0XHRcdFx0XG5cdFx0XHRzZXRUaW1lKClcblx0XHRcdFxuXHRcdFx0c3RhdHVzSWNvbnMgPSBuZXcgTGF5ZXJcblx0XHRcdFx0bmFtZTogXCJzdGF0dXMgaWNvbnNcIlxuXHRcdFx0XHRwYXJlbnQ6IEBzdGF0dXNCYXJcblx0XHRcdFx0aHRtbDogJzxzdmcgd2lkdGg9XCI1M3B4XCIgaGVpZ2h0PVwiMTZweFwiPjxnPjxwYXRoIGQ9XCJNMzQuNjA5MzIxNiwwLjYwOTAzNzQ5IEwzNC42MDkzMjE2LDE1LjEwNzQ1OTIgTDIwLjExMDg5OTksMTUuMTA3NDU5MiBMMzQuNjA5MzIxNiwwLjYwOTAzNzQ5IFogTTE1LjI5NDYxNCw3LjA0NzQ3NDc1IEwxNS4zMjgwMTA1LDcuMDgwODcxMjEgTDkuMTY4NTQwNzYsMTQuNzAzOTc3MyBMMy4wMDkwNzEwNiw3LjA4MDg3MTIxIEwzLjA0MjQ2NzUyLDcuMDQ3NDc0NzUgTDAuNzI5Mzk5MzQyLDQuMTg4NDQ2OTcgQzMuNDczNzE3NTIsMi4yNjAxNjQxNCA2LjI4NzczMjY4LDEuMjk2MDIyNzMgOS4xNjg1NDA3NiwxLjI5NjAyMjczIEMxMi4wNTA4MDA5LDEuMjk2MDIyNzMgMTQuODYzMzY0LDIuMjYwMTY0MTQgMTcuNjA5MTM0Miw0LjE4ODQ0Njk3IEwxNS4yOTQ2MTQsNy4wNDc0NzQ3NSBaIE01MS4yMjI5NDIxLDIuMTQ0MDAwNjkgQzUxLjU3NDEzMywyLjE0NDAwMDY5IDUxLjg3NjQ5NTIsMi4yNjc5NTA0MyA1Mi4xMjQzOTQ3LDIuNTE3NzI3OTQgQzUyLjM3NDE3MjIsMi43Njc1MDU0NSA1Mi41LDMuMDY3OTg5NjcgNTIuNSwzLjQyMTA1ODYzIEw1Mi41LDEzLjgxNDI1MjkgQzUyLjUsMTQuMTY1NDQzOCA1Mi4zNzQxNzIyLDE0LjQ2MDI5MzkgNTIuMTI0Mzk0NywxNC42OTUwNDcyIEM1MS44NzY0OTUyLDE0LjkyOTgwMDUgNTEuNTc0MTMzLDE1LjA0NjIzODIgNTEuMjIyOTQyMSwxNS4wNDYyMzgyIEw0NC4zNTY4Nzc2LDE1LjA0NjIzODIgQzQ0LjAwMzgwODYsMTUuMDQ2MjM4MiA0My43MDMzMjQ0LDE0LjkyOTgwMDUgNDMuNDUzNTQ2OSwxNC42OTUwNDcyIEM0My4yMDM3Njk0LDE0LjQ2MDI5MzkgNDMuMDc5ODE5NiwxNC4xNjU0NDM4IDQzLjA3OTgxOTYsMTMuODE0MjUyOSBMNDMuMDc5ODE5NiwzLjQyMTA1ODYzIEM0My4wNzk4MTk2LDMuMDY3OTg5NjcgNDMuMjAzNzY5NCwyLjc2NzUwNTQ1IDQzLjQ1MzU0NjksMi41MTc3Mjc5NCBDNDMuNzAzMzI0NCwyLjI2Nzk1MDQzIDQ0LjAwMzgwODYsMi4xNDQwMDA2OSA0NC4zNTY4Nzc2LDIuMTQ0MDAwNjkgTDQ1Ljg5Njg1OTIsMi4xNDQwMDA2OSBMNDUuODk2ODU5MiwwLjI5NjAyMjcyNyBMNDkuNjgyOTYwNCwwLjI5NjAyMjcyNyBMNDkuNjgyOTYwNCwyLjE0NDAwMDY5IEw1MS4yMjI5NDIxLDIuMTQ0MDAwNjkgWlwiIGZpbGw9XCIjZmZmXCI+PC9wYXRoPjwvZz48L3N2Zz4nXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHR3aWR0aDogNTNcblx0XHRcdFx0aGVpZ2h0OiAxNlxuXHRcdFx0XHR5OiBAb3B0aW9ucy5zdGF0dXNJY29uc1lcblx0XHRcdFx0eDogQHdpZHRoIC0gc3RhdHVzQmFyVGltZS53aWR0aCAtIDcwXG5cblx0XHRcdEB0aXRsZS55ID0gQWxpZ24uY2VudGVyXG5cbiMtLS0tLS0gb24gcmVzaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdFxuXHRcdGF0ID0gQFxuXHRcdHN0YXR1c0JhciA9IEBzdGF0dXNCYXJcblx0XHRpc01vYiA9IEBvcHRpb25zLm1vYmlsZVxuXHRcdFxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IC0+XG5cdFx0XHRhdC53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0c2hhZG93LnVtYnJhLndpZHRoID0gU2NyZWVuLndpZHRoXG5cdFx0XHRzaGFkb3cuYW1iaWVudC53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0c2hhZG93LnBlbnVtYnJhLndpZHRoID0gU2NyZWVuLndpZHRoXG5cdFx0XHRpZiBVdGlscy5pc01vYmlsZSgpIG9yIGlzTW9iIGlzIHRydWVcblx0XHRcdFx0c3RhdHVzQmFyLndpZHRoID0gU2NyZWVuLndpZHRoXG5cdFx0XHRcdHN0YXR1c0JhclRpbWUueCA9IFNjcmVlbi53aWR0aCAtIDU1XG5cdFx0XHRcdHN0YXR1c0ljb25zLnggPSBTY3JlZW4ud2lkdGggLSBzdGF0dXNCYXJUaW1lLndpZHRoIC0gNjhcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FEd0JBLElBQUEsd01BQUE7RUFBQTs7OztBQUFBLFdBQUEsR0FBYzs7QUFDZCxVQUFBLEdBQWE7O0FBQ2IsVUFBQSxHQUFhOztBQUNiLFNBQUEsR0FBWTs7QUFDWixXQUFBLEdBQWM7O0FBQ2QsVUFBQSxHQUFhOztBQUNiLGdCQUFBLEdBQW1CLFNBQUEsR0FBWTs7QUFDL0IsZUFBQSxHQUFrQixRQUFBLEdBQVc7O0FBQzdCLGdCQUFBLEdBQW1COztBQUNuQixlQUFBLEdBQWtCOztBQUlaOzs7RUFDUSxlQUFDLE9BQUQ7QUFFWixRQUFBO0lBRmEsSUFBQyxDQUFBLDRCQUFELFVBQVM7SUFFdEIsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsOERBQWhCOztVQUVRLENBQUMsYUFBYzs7O1dBQ2YsQ0FBQyxXQUFZOzs7V0FDYixDQUFDLE9BQVE7OztXQUNULENBQUMsUUFBUzs7O1dBQ1YsQ0FBQyxhQUFjOzs7V0FDZixDQUFDLGdCQUFpQjs7O1dBQ2xCLENBQUMsT0FBUTs7SUFFakIsdUNBQU0sSUFBQyxDQUFBLE9BQVA7RUFaWTs7OztHQURNOztBQWtCZDs7O0VBQ1EsZ0JBQUMsT0FBRDtBQUVaLFFBQUE7SUFGYSxJQUFDLENBQUEsNEJBQUQsVUFBUzs7VUFFZCxDQUFDLGtCQUFtQjs7SUFFNUIsSUFBQyxDQUFBLEtBQUQsR0FBYSxJQUFBLEtBQUEsQ0FDWjtNQUFBLEtBQUEsRUFBTyxJQUFDLENBQUEsT0FBTyxDQUFDLEtBQWhCO01BQ0EsTUFBQSxFQUFRLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFEakI7TUFF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
