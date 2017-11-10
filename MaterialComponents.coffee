########################################################################################################
# MaterialComponents version 1
# Made by Tess Gadd https://medium.com/@tessgadd
########################################################################################################

# This version contains
# 0. global elements
# 1. Color
# 2. FlatButton
# 3. RaisedButton
# 4. FAB
# 5. Checkboxes
# 6. Radio Buttons
# 7. Switch
# 8. TextField (Text fields frankenstiend from Jordan Robert Dobson's InputField)
# 9. TextField_Validation (Text fields frankenstiend from Jordan Robert Dobson's InputField)
# 10. TextArea (frankenstiend from Jordan Robert Dobson's InputField and Blaine Billingsley's Autogrow)
# 11. TextField_Dropdown
# 12. AppBar




#################################################  0. Global Elements  ################################################
#---------colors
label_light = "rgba(0,0,0,0.87)"
label_dark = "rgba(255,255,255,1)"
line_light = "rgba(0,0,0,0.54)"
line_dark = "rgba(255,255,255,0.7)"
input_light = "rgba(0,0,0,0.54)"
input_dark = "rgba(255,255,255,1)"
Inputlabel_light = box_light = "rgba(0,0,0,0.54)"
Inputlabel_dark = box_dark = "rgba(255,255,255,0.7)"
line_light_hover = "rgba(0,0,0,0.87)"
line_dark_hover = "rgba(255,255,255,1)"


#---------textlayer----------------------------------------------------------------------------------------------------
class Label extends TextLayer
	constructor: (@options={}) ->

		Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);')
		
		@options.fontFamily ?= "'Roboto', sans serif"
		@options.fontSize ?= 16
		@options.text ?= 'Label'
		@options.color ?= label_light
		@options.fontWeight ?= 400
		@options.letterSpacing ?= 0
		@options.name ?= "label"

		super @options



#---------shadow------------------------------------------------------------------------------------------------------
class Shadow extends Layer
	constructor: (@options={}) ->

		@options.backgroundColor ?= ""

		@umbra = new Layer
			width: @options.width
			height: @options.height
			backgroundColor: @options.themeColor
			borderRadius: @options.borderRadius
			shadowColor: "rgba(0,0,0,0.14)"
			name: "umbra"
			
		@umbra.states =
			_12dp: 
				shadowY: 12
				shadowBlur: 17
				shadowSpread: 2
			_8dp: 
				shadowY: 4
				shadowBlur: 15
				shadowSpread: 0
			_6dp:
				shadowY: 6
				shadowBlur: 10
				shadowSpread: 0
			_4dp:
				shadowY: 2
				shadowBlur: 4
				shadowSpread: 0	
			_2dp: 
				shadowY: 0
				shadowBlur: 2
				shadowSpread: 0
			_1dp: 
				shadowY: 0
				shadowBlur: 2
				shadowSpread: 0
			_0dp: 
				shadowY: 0
				shadowBlur: 0
				shadowSpread: 0

		@penumbra = new Layer
			width: @options.width
			height: @options.height
			backgroundColor: ""
			borderRadius: @options.borderRadius
			shadowColor: "rgba(0,0,0,0.12)"
			name: "penumbra"
			
		@penumbra.states =
			_12dp: 
				shadowY: 5
				shadowBlur: 22
				shadowSpread: 4
			_8dp: 
				shadowY: 3
				shadowBlur: 14
				shadowSpread: 3
			_6dp:
				shadowY: 1
				shadowBlur: 18
				shadowSpread: 0
			_4dp:
				shadowY: 4
				shadowBlur: 5
				shadowSpread: 0	
			_2dp: 
				shadowY: 2
				shadowBlur: 2
				shadowSpread: 0
			_1dp: 
				shadowY: 2
				shadowBlur: 2
				shadowSpread: 0				
			_0dp: 
				shadowY: 0
				shadowBlur: 0
				shadowSpread: 0

		@ambient= new Layer
			width: @options.width
			height: @options.height
			backgroundColor: ""
			shadowColor: "rgba(0,0,0,0.20)"
			name: "ambient"
			borderRadius : @options.borderRadius
			
		@ambient.states =
			_12dp: 
				shadowY: 7
				shadowBlur: 8
				shadowSpread: 0
			_8dp: 
				shadowY: 8
				shadowBlur: 10
				shadowSpread: 1
			_6dp:
				shadowY: 3
				shadowBlur: 5
				shadowSpread: 0
			_4dp:
				shadowY: 1
				shadowBlur: 10
				shadowSpread: 0	
			_2dp:
				shadowY: 1
				shadowBlur: 3
				shadowSpread: 0
			_1dp: 
				shadowY: 1
				shadowBlur: 3
				shadowSpread: 0
			_0dp: 
				shadowY: 0
				shadowBlur: 0
				shadowSpread: 0

		@umbra.animationOptions = time: 0.2
		@penumbra.animationOptions = time: 0.2	
		@ambient.animationOptions = time: 0.2
		
		@umbra.states.switchInstant "_2dp"
		@penumbra.states.switchInstant "_2dp"
		@ambient.states.switchInstant "_2dp"

		super @options

		@umbra.parent = @
		@penumbra.parent = @
		@ambient.parent = @

		@array = [@umbra, @penumbra, @ambient]



#--------Icons------------------------------------------------------------------------------------------------------
class SystemIcon extends Layer
	constructor: (@options={}) ->
		
		Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}')

		@options.fontSize ?= 24


		@options.icon ?= "android"
		@options.html = "<i class='material-icons tab'>" + @options.icon + "</i>"
		@options.color ?= "#009688"
		@options.height ?= @options.fontSize
		@options.width ?= @options.fontSize
		@options.backgroundColor = ""
	
		super @options

	@define 'fontSize',
		get: -> 
			@options.fontSize
		set: (value) -> 
			@options.fontSize = value

			Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}')






#################################################  1. Color  #########################################################
class exports.color extends Layer
    constructor: (@options={}) ->
        @options = _.defaults @options,
        super @options

#reds-----------------

		exports.red = "#F44336"
		exports.red50 = "#FFEBEE"
		exports.red100 = "#FFCDD2"
		exports.red200 = "#EF9A9A"
		exports.red300 = "#E57373"
		exports.red400 = "#EF5350"
		exports.red500 = "#F44336"
		exports.red600 = "#E53935"
		exports.red700 = "#D32F2F"
		exports.red800 = "#C62828"
		exports.red900 = "#B71C1C"
		exports.redA100 = "#FF8A80"
		exports.redA200 = "#FF5252"
		exports.redA400 = "#FF1744"
		exports.redA700 = "#D50000"

#pink-----------------
		exports.pink = "#E91E63"
		exports.pink50 = "#FCE4EC"
		exports.pink100 = "#F8BBD0"
		exports.pink200 = "#F48FB1"
		exports.pink300 = "#F06292"
		exports.pink400 = "#EC407A"
		exports.pink500 = "#E91E63"
		exports.pink600 = "#D81B60"
		exports.pink700 = "#C2185B"
		exports.pink800 = "#AD1457"
		exports.pink900 = "#880E4F"
		exports.pinkA100 = "#FF80AB"
		exports.pinkA200 = "#FF4081"
		exports.pinkA400 = "#F50057"
		exports.pinkA700 = "#C51162"


#purple-----------------
		exports.purple = "#9C27B0"
		exports.purple50 = "#F3E5F5"
		exports.purple100 = "#E1BEE7"
		exports.purple200 = "#CE93D8"
		exports.purple300 = "#BA68C8"
		exports.purple400 = "#AB47BC"
		exports.purple500 = "#9C27B0"
		exports.purple600 = "#8E24AA"
		exports.purple700 = "#7B1FA2"
		exports.purple800 = "#6A1B9A"
		exports.purple900 = "#4A148C"
		exports.purpleA100 = "#EA80FC"
		exports.purpleA200 = "#E040FB"
		exports.purpleA400 = "#D500F9"
		exports.purpleA700 = "#AA00FF"

#Deep purple--------------
		exports.deepPurple = "#673AB7"
		exports.deepPurple50 = "#EDE7F6"
		exports.deepPurple100 = "#D1C4E9"
		exports.deepPurple200 = "#B39DDB"
		exports.deepPurple300 = "#9575CD"
		exports.deepPurple400 = "#7E57C2"
		exports.deepPurple500 = "#673AB7"
		exports.deepPurple600 = "#5E35B1"
		exports.deepPurple700 = "#512DA8"
		exports.deepPurple800 = "#4527A0"
		exports.deepPurple900 = "#311B92"
		exports.deepPurpleA100 = "#B388FF"
		exports.deepPurpleA200 = "#7C4DFF"
		exports.deepPurpleA400 = "#651FFF"
		exports.deepPurpleA700 = "#6200EA"
#indigo--------------
		exports.indigo = "#3F51B5"
		exports.indigo50 = "#E8EAF6"
		exports.indigo100 = "#C5CAE9"
		exports.indigo200 = "#9FA8DA"
		exports.indigo300 = "#7986CB"
		exports.indigo400 = "#5C6BC0"
		exports.indigo500 = "#3F51B5"
		exports.indigo600 = "#3949AB"
		exports.indigo700 = "#303F9F"
		exports.indigo800 = "#283593"
		exports.indigo900 = "#1A237E"
		exports.indigoA100 = "#8C9EFF"
		exports.indigoA200 = "#536DFE"
		exports.indigoA400 = "#3D5AFE"
		exports.indigoA700 = "#304FFE"
#blue--------------
		exports.blue = "#2196F3"
		exports.blue50 = "#E3F2FD"
		exports.blue100 = "#BBDEFB"
		exports.blue200 = "#90CAF9"
		exports.blue300 = "#64B5F6"
		exports.blue400 = "#42A5F5"
		exports.blue500 = "#2196F3"
		exports.blue600 = "#1E88E5"
		exports.blue700 = "#1976D2"
		exports.blue800 = "#1565C0"
		exports.blue900 = "#0D47A1"
		exports.blueA100 = "#82B1FF"
		exports.blueA200 = "#448AFF"
		exports.blueA400 = "#2979FF"
		exports.blueA700 = "#2962FF"
#light blue------------
		exports.lightBlue = "#03A9F4"
		exports.lightBlue50 = "#E1F5FE"
		exports.lightBlue100 = "#B3E5FC"
		exports.lightBlue200 = "#81D4FA"
		exports.lightBlue300 = "#4FC3F7"
		exports.lightBlue400 = "#29B6F6"
		exports.lightBlue500 = "#03A9F4"
		exports.lightBlue600 = "#039BE5"
		exports.lightBlue700 = "#0288D1"
		exports.lightBlue800 = "#0277BD"
		exports.lightBlue900 = "#01579B"
		exports.lightBlueA100 = "#80D8FF"
		exports.lightBlueA200 = "#40C4FF"
		exports.lightBlueA400 = "#00B0FF"
		exports.lightBlueA700 = "#0091EA"
#cyan----------------
		exports.cyan = "#00BCD4"
		exports.cyan50 = "#E0F7FA"
		exports.cyan100 = "#B2EBF2"
		exports.cyan200 = "#80DEEA"
		exports.cyan300 = "#4DD0E1"
		exports.cyan400 = "#26C6DA"
		exports.cyan500 = "#00BCD4"
		exports.cyan600 = "#00ACC1"
		exports.cyan700 = "#0097A7"
		exports.cyan800 = "#00838F"
		exports.cyan900 = "#006064"
		exports.cyanA100 = "#84FFFF"
		exports.cyanA200 = "#18FFFF"
		exports.cyanA400 = "#00E5FF"
		exports.cyanA700 = "#00B8D4"
#teal-------------------
		exports.teal = "#009688"
		exports.teal50 = "#E0F2F1"
		exports.teal100 = "#B2DFDB"
		exports.teal200 = "#80CBC4"
		exports.teal300 = "#4DB6AC"
		exports.teal400 = "#26A69A"
		exports.teal500 = "#009688"
		exports.teal600 = "#00897B"
		exports.teal700 = "#00796B"
		exports.teal800 = "#00695C"
		exports.teal900 = "#004D40"
		exports.tealA100 = "#A7FFEB"
		exports.tealA200 = "#64FFDA"
		exports.tealA400 = "#1DE9B6"
		exports.tealA700 = "#00BFA5"
#green---------------
		exports.green = "#4CAF50"
		exports.green50 = "#E8F5E9"
		exports.green100 = "#C8E6C9"
		exports.green200 = "#A5D6A7"
		exports.green300 = "#81C784"
		exports.green400 = "#66BB6A"
		exports.green500 = "#4CAF50"
		exports.green600 = "#43A047"
		exports.green700 = "#388E3C"
		exports.green800 = "#2E7D32"
		exports.green900 = "#1B5E20"
		exports.greenA100 = "#B9F6CA"
		exports.greenA200 = "#69F0AE"
		exports.greenA400 = "#00E676"
		exports.greenA700 = "#00C853"
#light green---------------
		exports.lightGreen = "#8BC34A"
		exports.lightGreen50 = "#F1F8E9"
		exports.lightGreen100 = "#DCEDC8"
		exports.lightGreen200 = "#C5E1A5"
		exports.lightGreen300 = "#AED581"
		exports.lightGreen400 = "#9CCC65"
		exports.lightGreen500 = "#8BC34A"
		exports.lightGreen600 = "#7CB342"
		exports.lightGreen700 = "#689F38"
		exports.lightGreen800 = "#558B2F"
		exports.lightGreen900 = "#33691E"
		exports.lightGreenA100 = "#CCFF90"
		exports.lightGreenA200 = "#B2FF59"
		exports.lightGreenA400 = "#76FF03"
		exports.lightGreenA700 = "#64DD17"
#lime-----------------
		exports.lime = "#CDDC39"
		exports.lime50 = "#F9FBE7"
		exports.lime100 = "#F0F4C3"
		exports.lime200 = "#E6EE9C"
		exports.lime300 = "#DCE775"
		exports.lime400 = "#D4E157"
		exports.lime500 = "#CDDC39"
		exports.lime600 = "#C0CA33"
		exports.lime700 = "#AFB42B"
		exports.lime800 = "#9E9D24"
		exports.lime900 = "#827717"
		exports.limeA100 = "#F4FF81"
		exports.limeA200 = "#EEFF41"
		exports.limeA400 = "#C6FF00"
		exports.limeA700 = "#AEEA00"
#yellow-----------------
		exports.yellow = "#FFEB3B"
		exports.yellow50 = "#FFFDE7"
		exports.yellow100 = "#FFF9C4"
		exports.yellow200 = "#FFF59D"
		exports.yellow300 = "#FFF176"
		exports.yellow400 = "#FFEE58"
		exports.yellow500 = "#FFEB3B"
		exports.yellow600 = "#FDD835"
		exports.yellow700 = "#FBC02D"
		exports.yellow800 = "#F9A825"
		exports.yellow900 = "#F57F17"
		exports.yellowA100 = "#FFFF8D"
		exports.yellowA200 = "#FFFF00"
		exports.yellowA400 = "#FFEA00"
		exports.yellowA700 = "#FFD600"
#amber------------------
		exports.amber = "#FFC107"
		exports.amber50 = "#FFF8E1"
		exports.amber100 = "#FFECB3"
		exports.amber200 = "#FFE082"
		exports.amber300 = "#FFD54F"
		exports.amber400 = "#FFCA28"
		exports.amber500 = "#FFC107"
		exports.amber600 = "#FFB300"
		exports.amber700 = "#FFA000"
		exports.amber800 = "#FF8F00"
		exports.amber900 = "#FF6F00"
		exports.amberA100 = "#FFE57F"
		exports.amberA200 = "#FFD740"
		exports.amberA400 = "#FFC400"
		exports.amberA700 = "#FFAB00"
#orange------------------
		exports.orange = "#FF9800"
		exports.orange50 = "#FFF3E0"
		exports.orange100 = "#FFE0B2"
		exports.orange200 = "#FFCC80"
		exports.orange300 = "#FFB74D"
		exports.orange400 = "#FFA726"
		exports.orange500 = "#FF9800"
		exports.orange600 = "#FB8C00"
		exports.orange700 = "#F57C00"
		exports.orange800 = "#EF6C00"
		exports.orange900 = "#E65100"
		exports.orangeA100 = "#FFD180"
		exports.orangeA200 = "#FFAB40"
		exports.orangeA400 = "#FF9100"
		exports.orangeA700 = "#FF6D00"
#deep orange-------------
		exports.deepOrange = "#FF5722"
		exports.deepOrange50 = "#FBE9E7"
		exports.deepOrange100 = "#FFCCBC"
		exports.deepOrange200 = "#FFAB91"
		exports.deepOrange300 = "#FF8A65"
		exports.deepOrange400 = "#FF7043"
		exports.deepOrange500 = "#FF5722"
		exports.deepOrange600 = "#F4511E"
		exports.deepOrange700 = "#E64A19"
		exports.deepOrange800 = "#D84315"
		exports.deepOrange900 = "#BF360C"
		exports.deepOrangeA100 = "#FF9E80"
		exports.deepOrangeA200 = "#FF6E40"
		exports.deepOrangeA400 = "#FF3D00"
		exports.deepOrangeA700 = "#DD2C00"
#brown-------------
		exports.brown = "#795548"
		exports.brown50 = "#EFEBE9"
		exports.brown100 = "#D7CCC8"
		exports.brown200 = "#BCAAA4"
		exports.brown300 = "#A1887F"
		exports.brown400 = "#8D6E63"
		exports.brown500 = "#795548"
		exports.brown600 = "#6D4C41"
		exports.brown700 = "#5D4037"
		exports.brown800 = "#4E342E"
		exports.brown900 = "#4E342E"
		exports.brownA100 = ""
		exports.brownA200 = ""
		exports.brownA400 = ""
		exports.brownA700 = ""
#grey--------------
		exports.grey = "#9E9E9E"
		exports.grey50 = "#FAFAFA"
		exports.grey100 = "#F5F5F5"
		exports.grey200 = "#EEEEEE"
		exports.grey300 = "#E0E0E0"
		exports.grey400 = "#BDBDBD"
		exports.grey500 = "#9E9E9E"
		exports.grey600 = "#757575"
		exports.grey700 = "#616161"
		exports.grey800 = "#424242"
		exports.grey900 = "#212121"
		exports.greyA100 = ""
		exports.greyA200 = ""
		exports.greyA400 = ""
		exports.greyA700 = ""
#blue grey------------
		exports.blueGrey = "#607D8B"
		exports.blueGrey50 = "#ECEFF1"
		exports.blueGrey100 = "#CFD8DC"
		exports.blueGrey200 = "#B0BEC5"
		exports.blueGrey300 = "#90A4AE"
		exports.blueGrey400 = "#78909C"
		exports.blueGrey500 = "#607D8B"
		exports.blueGrey600 = "#546E7A"
		exports.blueGrey700 = "#455A64"
		exports.blueGrey800 = "#37474F"
		exports.blueGrey900 = "#263238"
	
#black and white---------
		exports.black = "#000"
		exports.white = "#fff"

#labels - light --------
		exports.lightPrimary = "rgba(0,0,0,0.87)"
		exports.lightSecondary = "rgba(0,0,0,0.54)"
		exports.lightDisabled = "rgba(0,0,0,0.38)"

#labels - Dark --------
		exports.darkPrimary = "rgba(255,255,255,1)"
		exports.darkSecondary = "rgba(255,255,255, 0.7)"
		exports.darkDisabled = "rgba(255,255,255,0.5)"






#################################################  2. FlatButton  ####################################################
class exports.FlatButton extends Layer

	constructor: (@options={}) ->

#------ Default properties --------------------------------------------------------------------------------------------

		Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);')

		@options.labelText ?= "Flat Button"
		@options.themeColor ?= "#009688"
		@options.disabled ?= false
		@options.theme ?= "light"
		@options.directionRipple ?= false
		@options.fontFamily ?= "'Roboto', sans serif"
		@options.disableRipple ?= false
		@options.letterSpacing ?= 0
		@options.fontWeight ?= 600
		@options.fontSize ?= 14

		if @options.disabled is true			
			if @options.theme is "dark"
				@disabled_labelColor = "rgba(255,255,255,0.3)"
			else
				@disabled_labelColor = "rgba(0,0,0,0.26)"


		_.defaults @options,
			backgroundColor : null
			height: 48
			borderRadius : 2
			width: @options.labelText.length * ((@options.fontSize + 3) / 2) + 16 + 16
			name: "Flat button"

		
		if @options.width < 88
			@options.width = 88
			
		if @options.dense is true
			@options.width = @options.labelText.length * ((@options.fontSize + 2) / 2) + 16 + 16
			@buttonHeight = 32
		else
			@buttonHeight = 36
		
#------ hover ---------------------------------------------------------------------------------------------------------
		
		@bttnBG = new Layer
			width: @options.width
			height: @buttonHeight
			backgroundColor: @options.themeColor
			clip: true
			borderRadius: 2
			opacity: 0.12
			visible: false
			name: "overlay"

#------- ripple -------------------------------------------------------------------------------------------------------

		@rippleBG = new Layer
			width: @options.width
			height: @buttonHeight
			backgroundColor: null
			name: "ripple parent"

			
		@ripple = new  Layer
			borderRadius: "100%"
			size: @options.width
			backgroundColor: @options.themeColor
			scale: 0.3
			opacity: 0
			name: "ripple"
		
#------- label -----------------------------------------------------------------------------------------------------

		@label = new TextLayer 
			text : @options.labelText
			fontSize: @options.fontSize
			textTransform: "Uppercase"
			color: @options.themeColor
			fontWeight: @options.fontWeight
			fontFamily: @options.fontFamily
			letterSpacing: @options.letterSpacing
			name: "label"
		
#------- super -----------------------------------------------------------------------------------------------------

		super @options

		@bttnBG.parent = @label.parent = @rippleBG.parent = @
		@bttnBG.y = Align.center
		@rippleBG.y = Align.center
		
		@rippleBG.clip = true
		
		@ripple.parent = @rippleBG
		@ripple.x = Align.center
		@ripple.y =	Align.center
		
		@label.x = Align.center
		@label.y = Align.center(1)
		
		if @disableRipple is false
			@ripple.destroy()
				
#-------- Events ----------------------------------------------------------------------------------------------------

		@.onClick @clicked
		@.onMouseOver @Hover
		@.onMouseOut @HoverOff
		@.onMouseDown @mouseDown
		@.onMouseUp @mouseUp

#-------- getters & setters -------------------------------------------------------------------------------------------

	@define 'disabled',
		get: -> 
			@options.disabled
		set: (value) -> 
			@options.disabled = value
			
			if @options.disabled is true
				@label.color = @disabled_labelColor
					
			if @options.disabled is false
				@label.color = @options.themeColor



#--------- Event functions -------------------------------------------------------------------------------------------
	
	Hover: =>
		if @options.disabled is false
			@bttnBG.visible = true
	
	HoverOff: =>
		@bttnBG.visible = false
		
	mouseDown: ->
		@bttnBG.brightness = 80
	mouseUp: ->
		@bttnBG.brightness = 100
	
	clicked: (ev) ->
		if @options.disabled is false 
			if @options.disableRipple is false
		
				if @options.directionRipple is true
					@ripple.midX = ev.offsetX
					@ripple.midY = ev.offsetY
					@ripple.size = (@options.labelText.length * 8.5 + 16 + 16) * 1.5
			
				@ripple.visible = true
				@ripple.scale = 0.4
				@ripple.opacity = 0.3
				
				rippleA = new Animation
					layer:	@ripple
					properties:
						scale: 0.8
					time: 0.15
					curve: Bezier.linear
					
				rippleB  = new Animation
						layer:	@ripple
						properties:
							scale: 1
							opacity: 0
						time: 0.15
						curve: Bezier.linear
					
				rippleA.start()
				
				rippleA.onAnimationEnd ->
					rippleB.start()





#################################################  3. RaisedButton  ##################################################
class exports.RaisedButton extends Layer

	constructor: (@options={}) ->

#------ Default properties --------------------------------------------------------------------------------------------

		Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);')

		@options.labelText ?= "Raised button"
		@options.themeColor ?= "#009688"
		@options.disabled ?= false
		@options.theme ?= "light"
		@options.directionRipple ?= false
		@options.fontFamily ?= "'Roboto', sans serif"
		@options.height = 48
		@options.disableRipple ?= false
		@options.letterSpacing ?= 0
		@options.fontWeight ?= 600
		@options.fontSize ?= 14

		if @options.disabled is true			
			if @options.theme is "dark"
				@disabled_BG = "rgba(255,255,255,0.12)"
				@disabled_labelColor = "rgba(255,255,255,0.3)"
			else
				@disabled_BG = "rgba(0,0,0,0.12)"
				@disabled_labelColor = "rgba(0,0,0,0.26)"

		_.defaults @options,
			backgroundColor : ""
			color: ""
			borderRadius : 2
			name: "Raised button"
			width: @options.labelText.length * ((@options.fontSize + 3) / 2) + 16 + 16
		
		if @options.width < 88
			@options.width = 88
			
		if @options.dense is true
			@buttonHeight = 32
		else
			@buttonHeight = 36
		
#-------Shadows -------------------------------------------------------------------------------------------------------

		@shadow = new Shadow
			width: @options.width
			height: @buttonHeight
			backgroundColor : @options.themeColor
			borderRadius: @options.borderRadius
			name: "shadows"
				


#-------hover --------------------------------------------------------------------------------------------------------
		
		@bttnBG = new Layer
			width: @options.width
			height: @buttonHeight
			backgroundColor: "#fff"
			clip: true
			borderRadius: 2
			opacity: 0
			name: "overlay"

#-------ripple ---------------------------------------------------------------------------------------------------------

		@rippleBG = new Layer
			width: @options.width
			height: @buttonHeight
			clip: true
			borderRadius: 2
			name: "ripple parent"
			clip: true		
			backgroundColor: ""

			
		@ripple = new  Layer
			borderRadius: "100%"
			size: @options.width
			backgroundColor: "#fff"
			scale:0.3
			opacity: 0
			name: "ripple"
			
		@rippleColor = @ripple.backgroundColor
		
#-------label ---------------------------------------------------------------------------------------------------------

		@label = new TextLayer 
			text : @options.labelText
			fontSize: @options.fontSize
			textTransform: "Uppercase"
			color: "#fff"
			fontWeight: @options.fontWeight
			fontFamily: @options.fontFamily
			letterSpacing: @options.letterSpacing
			name: "label"

#-------super --------------------------------------------------------------------------------------------------------
		
		super @options

		@label.parent = @rippleBG.parent = @shadow.parent = @bttnBG.parent =   @
		
		@shadow.y = @bttnBG.y = @rippleBG.y = Align.center
		
		@ripple.parent = @rippleBG
		@ripple.x = Align.center
		@ripple.y =	Align.center
		
		@label.x = Align.center
		@label.y = Align.center(1)
		
		if @disableRipple is false
			@ripple.destroy()
				
#---------Events -----------------------------------------------------------------------------------------------------

		@.onClick @clicked
		@.onMouseOver @Hover
		@.onMouseOut @HoverOff
		@.onMouseDown @mouseDown
		@.onMouseUp @mouseUp
			
#---------getters & setters -----------------------------------------------------------------------------------------

	@define 'disabled',
		get: -> 
			@options.disabled
		set: (value) -> 
			@options.disabled = value
			
			if @options.disabled is true
				@label.color = @disabled_labelColor
				@shadow.backgroundColor = @disabled_BG
			else
				@shadow.backgroundColor = @options.themeColor 
				@label.color = "#fff"

#---------Event functions ------------------------------------------------------------------------------------------
	
	Hover: =>
		if @options.disabled is false
			@bttnBG.opacity = 0.12
			for item in @shadow.array
				item.states.switch "_8dp"
	HoverOff: =>
		@bttnBG.opacity = 0
		for item in @shadow.array
			item.states.switch "_2dp"
	
	mouseDown: ->
		if @options.disabled is false
			@brightness = 80
			@bttnBG.opacity = 0
	mouseUp: ->
		@brightness = 100
	
	clicked: (ev) ->
		if @options.disabled is false 
			if @options.disableRipple is false
		
				if @options.directionRipple is true
					@ripple.midX = ev.offsetX
					@ripple.midY = ev.offsetY
					@ripple.size = (@options.labelText.length * 8.5 + 16 + 16) * 1.5
			
				@ripple.visible = true
				@ripple.scale = 0.4
				@ripple.opacity = 0.3

				rippleA = new Animation
					layer:	@ripple
					properties:
						scale: 0.8
					time: 0.15
					curve: Bezier.linear
					
				rippleB  = new Animation
						layer:	@ripple
						properties:
							scale: 1
							opacity: 0
						time: 0.15
						curve: Bezier.linear
					
				rippleA.start()

				rippleA.onAnimationEnd ->
					rippleB.start()





#################################################  4. FAB  ###########################################################
class exports.FAB extends Layer
	constructor: (@options={}) ->

#------ Default properties --------------------------------------------------------------------------------------------

		if Utils.isDesktop()
			pd = 24
		else pd = 16
		
		@options.mini ?= false
		
		if @options.mini is true or Screen.width < 460
			@options.width ?= 40
			@options.height ?= 40
		else
			@options.width ?= 56
			@options.height ?= 56
		
		@options.x ?= Screen.width - (@options.width + pd)
		@options.y ?= Screen.height - (@options.width + pd)
			
		@options.borderRadius = "100%"
		@options.themeColor ?= "#009688"
		@options.backgroundColor ?= @options.themeColor
		@options.icon ?= "add"

#------ overlay -----------------------------------------------------------------------------------------------------

		@overlay = new Layer
			width: @options.width
			height: @options.height
			borderRadius: @options.borderRadius	
			backgroundColor: "rgba(0,0,0,0.12)"
			visible: false	
			name: "overlay"

#------ shadow -----------------------------------------------------------------------------------------------------
		
		@shadow = new Shadow
			width: @options.width
			height: @options.height
			borderRadius: @options.borderRadius
			name: "shadow"

		@shadow.umbra.states.switchInstant "_6dp"
		@shadow.penumbra.states.switchInstant "_6dp"
		@shadow.ambient.states.switchInstant "_6dp"

#------ icon -----------------------------------------------------------------------------------------------------

		@icon = new SystemIcon
			width: 24
			height: 24
			icon: @options.icon
			color: "#fff"
			name: "icon"
		
#------ super -----------------------------------------------------------------------------------------------------
	
		super @options

		@icon.parent = @overlay.parent = @shadow.parent =  @
		@icon.center()

#------ events -----------------------------------------------------------------------------------------------------

		if Utils.isDesktop()
			@.onMouseOver @Hover
			@.onMouseOut @HoverOff
			@onMouseDown @mouseDown
			@onMouseUp @mouseUp
		else
			@onTapStart @mouseDown
			@onTapEnd @mouseUp

#------ event functions ---------------------------------------------------------------------------------------------

	Hover: ->
		@shadow.umbra.states.switch "_12dp"
		@shadow.penumbra.states.switch "_12dp"
		@shadow.ambient.states.switch "_12dp"

	HoverOff: ->
		@shadow.umbra.states.switch "_6dp"
		@shadow.penumbra.states.switch "_6dp"
		@shadow.ambient.states.switch "_6dp"

	mouseDown: ->
		@overlay.visible = true
		@shadow.umbra.states.switchInstant "_12dp"
		@shadow.penumbra.states.switchInstant "_12dp"
		@shadow.ambient.states.switchInstant "_12dp"

	mouseUp: ->
		@overlay.visible = false
		@shadow.umbra.states.switchInstant "_6dp"
		@shadow.penumbra.states.switchInstant "_6dp"
		@shadow.ambient.states.switchInstant "_6dp"





#################################################  5. Checkboxes  #####################################################
class exports.Checkboxes extends Layer

	constructor: (@options={}) ->

#------ default properties --------------------------------
		
		@options.theme ?= "light"
		theme = @options.theme
		@options.name ?= "checkboxes"

		@options.disableRipple ?= false
		
		if @options.theme is "dark"
			@options.screenColor ?= "#212121"
		else
			@options.screenColor ?= "#fff"
			
		#label choices
		@options.choices ?= ["apples", "bananas", "grapes"]

		@options.checkY ?= -5

#------ colors 
		@themeColor ?= "#009688"
		themeColor = @themeColor
		
		if @options.theme is "dark"
			@labelColor = label_dark
			@boxColor = line_dark
		else
			@labelColor = label_light 
			@boxColor = line_light
		boxColor = @boxColor
	
		#text styling
		Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);')
		
		@options.labelText ?= "Select fruit"

		#Default properties
		_.defaults @options,
			backgroundColor : ""
			height: @options.choices.length * 36 + 32
			width : 150
			
#------ Question  label --------------------------------------------------------------------------------------------
		
		@label = new Label
			color: @labelColor
			text: @options.labelText
			name: "label"

#------ Super ------------------------------------------------------------------------------------------------------
		super @options

		@label.parent = @

		checkY = @options.checkY

#------ time --------------------------------------------------------------------------------------------------------
		t1 = 0.2
		t2 = 0.2

#------ loop ------------------------------------------------------------------------------------------------
		checks = []

		for i in [0...@options.choices.length]

#------ checkbox container 
			cont = new Layer
				parent:@
				height: 40
				y: i * 40 + 24
				backgroundColor: ""
				x: 16
				name: "container"

#------ box settings 
			box = new Layer
				backgroundColor : ""
				size : 20
				borderRadius : 2
				borderWidth : 2
				borderColor : @boxColor
				parent: cont
				clip: true
				name: @options.choices[i]
				y: Align.center
				name: @options.choices[i]
				
			box.animationOptions = 
				time: t1
				
			box.states =
				selected:
					borderColor: @options.themeColor
					backgroundColor: @options.themeColor
				deselected:
					borderColor: @boxColor
					backgroundColor: @boxColor
						
			box.states.switchInstant "deselected"
			box.backgroundColor = @options.screenColor
				
#------ box Circle settings 
#------ This create the circle animation within the box
			boxCircle = new Layer
				parent: box
				borderRadius: "100%"
				size: 30
				scale: 0
				backgroundColor: @screenColor
				x: Align.center(2)
				y: Align.center(2)
				name: "overlay"
			
			boxCircle.animationOptions = 
				time: t1
			
			boxCircle.states = 
				selected:
					scale: 0
				deselected:
					scale: 1
					backgroundColor: @options.screenColor				

#------ check mask settings 
#------ This create drawing in effect for the check
			checkMask = new Layer
				width: 0
				height: 20
				backgroundColor: ""
				parent: box
				y: checkY
				x: 3.5
				parent: box
				clip: true
				name: "check mask"
			
			checkMask.states.selected =
				properties:
					width:20
				time: t2
					
			checkMask.states.deselected =
				properties:
					width: 0
				time: 0.01
				
			checkMask.states.switch "deselected"
		
#------ check settings 
			check = new Layer
				html: '<svg width="13px" height="10px" viewBox="0 0 13 10"><g id="Components" stroke="none" stroke-width="1" fill="none"  stroke-linejoin="round"><polyline id="Path-2" stroke="#FFFFFF" stroke-width="2" points="1 5.25 4 9 12 1.5"></polyline></g></svg>'
				width: 20
				height: 20
				backgroundColor: ""
				parent: checkMask
				name: @options.choices[i]
				y: 0
				name: "check"
				
			check.style =
				fontSize: "18px"
				
#------ Ripple settings 
			if @options.disableRipple is false
			
				ripple = new Layer
					size: 50
					borderRadius: "100px"
					parent: cont
					y: Align.center
					x: -15
					opacity: 0.3
					visible: false
					name: "ripple"
					
				ripple.states.selected =
						backgroundColor: @options.themeColor
						
				if @options.theme is "light"
					ripple.states.deselected =
						backgroundColor: "#000"
						
				if @options.theme is "dark"
					ripple.states.deselected =
						backgroundColor: "#fff"
					
#------ choise lables settings 
			choice_label = new Label
				text: @options.choices[i]
				parent: cont
				x: 30
				color: @labelColor
				y: Align.center(-0.5)
				name: "choice ripple"

#------ populating checks array 
			checks.push(box)
			
#------ creating new array to see what checks are selected 
			ao = @options
			dp = @options.disableRipple
			ao.activeSelection = []

#------ event on Click ---------------------------------------------------------------------------------------------
			cont.onClick ->

#------ event setup 
				ao.activeSelection = [] #empty array
				
				if dp is false
					pRipple = this.children[1]
				pCheckMask =  this.children[0].children[1]
				pBox = this.children[0]
				pBoxCircle =  this.children[0].children[0]
				
#------ box and check animation 
				pBox.stateCycle("selected", "deselected")
				pBoxCircle.stateCycle("selected", "deselected")
				
				if pBox.states.current.name is "selected"
					if dp is false
						pRipple.states.switchInstant "selected"
					Utils.delay t1, ->
						pCheckMask.states.switch "selected"
				else 
					if dp is false
						pRipple.states.switchInstant "deselected"
					pCheckMask.states.switch "deselected"
				
				# populates array to see selected items
				for box in checks
					if box.states.current.name is "selected"
						ao.activeSelection.push(box.name)
				
#-----	pRipple animation 
				if dp is false
					pRipple.visible = true
					pRipple.scale = 0.4
					pRipple.opacity = 0.4
					
					if	pRipple.states.current.name is "selected"
						pRipple.opacity = 0.8
					
					pulsaA = new Animation
						layer:	pRipple
						properties:
							scale: 0.8
						time: 0.15
						curve: Bezier.linear
						
					pRippleB = new Animation
							layer:	pRipple
							properties:
								scale: 1
								opacity: 0
							time: 0.15
							curve: Bezier.linear
						
						pulsaA.start()
						
						pulsaA.onAnimationEnd ->
						pRippleB.start()
					
#------ event hover 
			cont.onMouseOver ->
				this.children[0].borderColor = themeColor

			cont.onMouseOut ->
				if this.children[0].states.current.name is "deselected"
					this.children[0].borderColor = boxColor

#------ getters and setters ---------------------------------------------------------------------------------------
	@define 'themeColor',
		get: -> 
			@options.themeColor
		set: (value) -> 
			@options.themeColor = value

	@define 'choices',
		get: -> 
			@options.choices
		set: (value) -> 
			@options.choices = value
			
	@define 'activeSelection',
		get: -> 
			@options.activeSelection
		set: (value) -> 
			@options.activeSelection = value





#################################################  6. RadioButtons  ####################################################
class exports.RadioButtons extends Layer

	constructor: (@options={}) ->
		
#------ default properties -----------------------------------------------------------------------------------------
		@options.theme ?= "light"
		theme = @options.theme

		@options.disableRipple ?= false
		
		#label choices
		@options.choices ?= ["apples", "bananas", "grapes"]

#------- colors 
		@options.themeColor ?= "#009688"
		themeColor = @options.themeColor 
		
		if @options.theme is "dark"
			@labelColor = label_dark
			@boxColor = line_dark
		else
			@labelColor = label_light
			@boxColor = line_light
		boxColor = @boxColor

		@options.labelText ?=  "Select fruit"

		_.defaults @options,
			backgroundColor : ""
			height: @options.choices.length * 36 + 32
			width : 150
			name: "RadioButtons"
			
#------ Question label ---------------------------------------------------------------------------------------------

		@label = new Label
			text: @options.labelText
			color: @labelColor
			name: "label"

#------ Super ------------------------------------------------------------------------------------------------------

		super @options

		@label.parent = @

		l = @options.choices

#------ loop and array ---------------------------------------------------------------------------------------------
		
		checks = []
		circles = []
		
		for i in [0...@options.choices.length]

			cont = new Layer
				height: 40
				y: 40 * i + 24
				backgroundColor: ""
				parent: @
				name: @options.choices[i]
				x: 16

#------ circle 

			circle = new Layer
				backgroundColor : ""
				size : 20
				borderRadius : "100%"
				borderWidth : 2
				borderColor: @boxColor
				parent: cont
				y: Align.center
				name: "circle"
			
			circle.animationOptions = 
				time: 0.001
		
			circle.states =
				selected:
					borderColor: themeColor
				deselected:
					borderColor: @boxColor
		
			circles.push(circle)
			circle.states.switch "deselected"
			
			if i is @options.activeSelection
				circle.states.switchInstant "selected"

#------ check 

			check = new Layer
				width: 10
				height: 10
				backgroundColor: @options.themeColor
				borderRadius: circle.borderRadius
				parent: circle
				x: 5
				y: 5
				name: i
			
			check.animationOptions =
				time: 0.17
			
			check.states =
				selected:
					scale: 1
				deselected:
					scale: 0
					
			check.states.switchInstant "deselected"
			
			checks.push(check)
			
			if i is @options.activeSelection
				check.states.switchInstant "selected"
				
#------ ripple settings 
			
			if @options.disableRipple is false
			
				ripple = new Layer
					size: 50
					borderRadius: "100px"
					parent: circle
					y: Align.center(2)
					x: Align.center(2)
					opacity: 0.12
					visible: false
					backgroundColor: @options.themeColor
					name: "ripple"
								
#------ choice 

			choice_label = new Label
				text: @options.choices[i]
				parent: cont
				x: 30
				color: @labelColor
				y: -0.5
				y: Align.center
				name: "choice label"

#------ helper 

			helper = new Layer
				backgroundColor: ""
				height: 5
				parent: cont
				width: i
				name: "helper"

#------ event

			@activeSelection = null
			bb = @activeSelection
			dp = @options.disableRipple
			oc = @themeColor
	
			cont.onClick ->
				
				pRipple = this.children[0].children[1]
				pCheck = this.children[0].children[0]
				pCircle = this.children[0]
				
				for check in checks
					if check.name is pCheck.name
						pCheck.states.switch "selected"
					else
						check.states.switch "deselected"
				for circle in circles
					circle.states.switch "deselected"
				
				pCircle.states.switchInstant "selected"
								
				bb = this.name
				
#------ ripple animation 

				if dp is false
					pRipple.visible = true
					pRipple.scale = 0.4
					pRipple.opacity = 0.2
					
					if pRipple.states.current.name is "selected"
						pRipple.opacity = 0.3
					
					RippleA = new Animation
						layer: pRipple
						properties:
							scale: 0.8
						time: 0.15
						curve: Bezier.linear
						
					RippleB = new Animation
						layer: pRipple
						properties:
							scale: 1
							opacity: 0
						time: 0.15
						curve: Bezier.linear
					
					RippleA.start()
					
					RippleA.onAnimationEnd ->
						RippleB.start()

#------ event  -----------------------------------------------------------------------------------------------------

			cont.onMouseOver ->
				this.children[0].borderColor = themeColor
			
			cont.onMouseOut ->
				if this.children[0].states.current.name is "deselected"
					this.children[0].borderColor = boxColor
				
			@onClick -> 
				@options.activeSelection = bb
				
#------ getter and setter  -----------------------------------------------------------------------------------------

	@define 'activeSelection',
		get: -> @options.activeSelection
		set: (value) -> @options.activeSelection = value

	@define 'theme',
		get: -> @options.theme
		set: (value) -> @options.theme = value





#################################################  7. Switch  #########################################################
class exports.Switch extends Layer

	constructor: (@options={}) ->
	
#------ Custome properties -----------------------------------------------------------------------------------------

		@options.disableRipple ?= false
		@options.activeOnStart ?= false
		@options.active ?= false
		
		@options.theme ?= "light"
		theme = @options.theme

#------ colors 
		@options.themeColor ?= "#009688"
		themeColor = @options.themeColor
		@thumbColor = @options.themeColor
		@trackColor = @options.themeColor
		@thumb_light_off = "#FAFAFA"
		@thumb_dark_off = "#bdbdbd"
		@track_light_off = "rgba(0,0,0,0.38)"
		@track_dark_off = "rgba(255,255,255,0.3)"
		@ripple_dark_off = "rgba(255,255,255, 1)"
		@ripple_light_off = "rgba(0,0,0, 1)"
		
		if @options.theme is "dark"
			@labelColor = label_dark
			@thumbOff = @thumb_dark_off
			@trackOff = @track_dark_off
			@rippleOff = @ripple_dark_off
		else
			@labelColor = label_light
			@thumbOff = @thumb_light_off
			@trackOff = @track_light_off
			@rippleOff = @ripple_light_off
			
		Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);')
		
		_.defaults @options,
			backgroundColor : ""
			height: 48
			width : 150
		
#------ track ---------------------------------------------------------------------------------------------------

		@track = new Layer
			width: 40
			height: 15
			borderRadius: 15
			name: "track"
		@track.animationOptions =
			time: 0.2
			
		@track.states =
			on:
				backgroundColor: @options.themeColor
				opacity: 0.5
			off:
				backgroundColor: @trackOff
				opacity: 0.38

		delete @track.states.default
		@track.states.switchInstant "off"

#------ ripple -------------------------------------------------------------------------------------------------

		@ripple = new Layer
			size: 50
			scale: 1
			borderRadius: 50
			opacity: 0.2
			visible: false
			name: "ripple"
			backgroundColor: @options.themeColor

#------ thumb -------------------------------------------------------------------------------------------------

		@thumb = new Layer
			size: 19
			borderRadius: 100
			name: "thumb"
			backgroundColor: @thumbOff
		@thumb.animationOptions =
			time: 0.3
			
		@thumb.states = 
			on:
				x: 21
				backgroundColor: @options.themeColor
			off:
				x: 0
				backgroundColor: @thumbOff

		delete @thumb.states.default
		@thumb.states.switchInstant "off"
		
#------ label -------------------------------------------------------------------------------------------------

		@label = new Label
			text: @options.labelText
			color: @labelColor
			name: "label"
		
#------ Super -------------------------------------------------------------------------------------------------

		super @options

		@track.parent = @
		@track.y = Align.center
		
		@thumb.parent = @
		@thumb.y = Align.center
		
		@label.parent = @
		@label.x = 55
		@label.y = Align.center
		
		if @options.disableRipple is false
			@ripple.parent = @thumb
			@ripple.x = - 15
			@ripple.y = - 15
			ripple = @ripple

#------ shadows -------------------------------------------------------------------------------------------------

		shadow = new Shadow
			parent: @thumb
			borderRadius: 100
			width: @thumb.width
			height: @thumb.width
			name: "shadow"

#------ activeOnStart ---------------------------------------------------------------------------------------------

		if @options.activeOnStart is true
			@thumb.states.switchInstant "on"
			@track.states.switchInstant "on"
			@active = true

#------ ripple animation ------------------------------------------------------------------------------------------

		rippleAni = ->
			
			ripple.visible = true
			ripple.scale = 0.4
			
			pulsaA = new Animation
				layer: ripple
				properties:
					scale: 0.8
				time: 0.15
				curve: Bezier.linear
				
			rippleB = new Animation
				layer: ripple
				properties:
					scale: 1
					opacity: 0
				time: 0.15
				curve: Bezier.linear				
			pulsaA.start()
			
			pulsaA.onAnimationEnd ->
				rippleB.start()

#------ event -------------------------------------------------------------------------------------------------

		state = null
		
		@onClick ->
			
			@track.stateCycle()
			@thumb.stateCycle()
		
			if @options.disableRipple is false 
				if @thumb.states.current.name is "on"
					@ripple.backgroundColor = @options.themeColor
					@ripple.opacity = 0.4
					posX = 20
					rippleAni()
					@options.active = true
				else
					posX = 0
					@ripple.backgroundColor = @rippleOff
					@ripple.opacity = 0.2
					rippleAni()
					@options.active = false

			
			if @thumb.states.current.name is "on"
				@options.active = true
			else
				@options.active = false
				
#------ getters and setters --------------------------------------------------------------------------------------

	@define 'active',
		get: -> 
			@options.active
		set: (value) -> 
			@options.active = value





#################################################  8. TextField  ######################################################
class TextField extends Layer

	INPUT_HIDE_PSUEDO_UI  = "{ -webkit-appearance: none; display: none; }"
	INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button"
	INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button"
	
	Events.Input   = "InputField.OnInput"
	Events.Focus   = "InputField.OnFocus"
	Events.Blur    = "InputField.OnBlur"
	Events.Valid   = "InputField.OnValid"
	Events.Invalid = "InputField.OnInvalid"
	Events.Match   = "InputField.OnMatch"
	
	@define "value",
		get: ->
			@input.value
			
		set: (v) ->
			return unless v
			if @input
				@changeInputValue v

	constructor: (@options={}) ->

#------- default properties -----------------------------------------------------------------------------------------
	
		@isNumber = false
		@isSearch = false
		
		@isEmpty  = true
		@isValid  = null
		@originalTextColor = null
		 								
		# Framer Layer Props
		@options.name             ?= "Basic text field"
		
		@options.borderRadius     = 0
		@options.placeHolderFocus ?= null
		@options.placeHolderColor = ""
		@options.placeHolder ?=  ""
		
		@options.theme ?= "light"
		theme = @options.theme

		#colors 
		@options.themeColor ?= "#009688"
		themeColor = @themeColor
		
		if @options.theme is "dark"
			@labelColor = Inputlabel_dark
			@inputColor = input_dark
			@lineColor = "rgba(255,255,255,0.7)"
			@lineHoverColor = "rgba(255,255,255,1)"
			@labelFocusOpacity = 1
			@options.backgroundColor  = "rgba(0,0,0,0.01)"
		else
			@labelColor = Inputlabel_light
			@inputColor = input_light
			@lineColor = "rgba(0,0,0,0.42)"
			@lineHoverColor = "rgba(0,0,0,0.87)"
			@labelFocusOpacity = 0.87
			@options.backgroundColor  = "rgba(255,255,255,0.01)"
		boxColor = @boxColor
		
		@options.color = @inputColor

		
		#text styling
		Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);')
		
		if Utils.isMobile()
			@options.fontSize ?= 16 * 2
			@options.lineHeight ?=  24 * 2
			@options.lineHeight = "#{@options.lineHeight}px" if @options.lineHeight?
			@options.height = 70
		else	
			@options.fontSize ?= 16
			@options.lineHeight ?=  24
			@options.lineHeight = "#{@options.lineHeight}px" if @options.lineHeight?
			@options.height = 70
			
		@options.labelSize ?=16
		
		@options.fontFamily ?= "'Roboto', sans serif"
		@options.fontWeight ?= 400
		@options.letterSpacing ?= 0
		
		#text html
		@options.helperText ?= "Helper text"
		@options.labelText ?= "Label"
		@options.helperTextVisble ?= false

		#Default properties
		_.defaults @options,
			width : 200

#------- Elements --------------------------------------------------------------------------------------------------

		@line = new Layer
			width: @options.width
			height: 1
			clip: true
			name: "line"
			backgroundColor: @lineColor
		
		@lineRipple = new Layer
			backgroundColor: @options.themeColor
			width: 0
			height: 2
			name: "ripple"
		
		@label = new Label
			text: @options.labelText
			fontSize: @options.labelSize
			color: @labelColor
			name: "label"
			
		@helperText = new Label
			fontSize: 12
			text: @options.helperText
			color: @labelColor
			name: "helper Text"
			visible: @options.helperTextVisble
		
		@inputParent = new Layer
			backgroundColor: @options.backgroundColor
			width: @options.width
			height: 28
			name: "input parent"
		
		super @options
		
		@helperText.parent = @line.parent = @inputParent.parent =  @
		@helperText.y = 50
		@label.parent = @
		@label.y = 20
		@lineRipple.parent = @line
		@lineRipple.x = Align.center
		@line.y = 44
		@inputParent.y = 10
			
#------- event --------------------------------------------------------------------------------------------------

		@onClick @clicked
		@onTap @clicked
		
		if Utils.isDesktop()
			@onMouseOver @hoverOn
			@onMouseOut @hoverOff
			
		@.on Events.Blur, (value, layer) ->
			@line.height = 1
			@lineRipple.width = 0
			@lineRipple.x = Align.center
			@helperText.color = @labelColor
			@line.backgroundColor = @lineColor
			@options.color = @inputColor
			@label.color = @labelColor
			
			if @.isEmpty
				@label.animate
					properties:
						fontSize: 16
						y: 20
						color: @labelColor
					time: 0.2	
		
#------ Adjust a few things for various types -----------------------------------------------------------------
		
		switch @options.type
			when "search" then @isSearch = true
			when "number" then @isNumber = true
			when "numbers-only", "number-only"
				@isNumber = true
				@options.type    = if @options.pattern? then "number"          else "text"
				@options.pattern = if @options.pattern? then @options.pattern else PATTERN_NUMBER
		
		@html += switch
			when @isNumber then "<style type='text/css'>#{INPUT_SELECTOR_NUMBER}#{INPUT_HIDE_PSUEDO_UI}</style>"
			when @isSearch then "<style type='text/css'>#{INPUT_SELECTOR_SEARCH}#{INPUT_HIDE_PSUEDO_UI}</style>"
			else ""

		if @options.placeHolderColor?
			@html += "<style type='text/css'>::-webkit-input-placeholder { color: #{@options.placeHolderColor}; } ::-moz-placeholder { color: #{@options.placeHolderColor}; } :-ms-input-placeholder { color: #{@options.placeHolderColor}; } ::-ms-input-placeholder { color: #{@options.placeHolderColor}; } :placeholder-shown { color: #{@options.placeHolderColor}; }</style>"
			
#------ creating & styling the input -------------------------------------------------------------------------------
		
		@input = document.createElement "input"
		
		@input.type        = @options.type
		@input.value       = @options.value                  if @options.value?
		@input.placeholder = @options.placeHolder            if @options.placeHolder?
		@input.pattern     = @options.pattern                if @options.pattern?
		@input.setAttribute("maxLength", @options.maxLength) if @options.maxLength?
		@input.setAttribute("autocapitalize", (if @options.autoCapitalize is true then "on" else "off"))
		@input.setAttribute("autocomplete",   (if @options.autoComplete   is true then "on" else "off"))
		@input.setAttribute("autocorrect",    (if @options.autoCorrect    is true then "on" else "off"))

		@inputParent._element.appendChild @input
 		
		# Setup Values
		@isEmpty           = !(@options.value?.length > 0)
		@originalTextColor = @options.color
		
		# Setup Input Style
		inputStyle =
			font: "#{@options.fontWeight} #{@options.fontSize}px/#{@options.lineHeight} #{@options.fontFamily}"
			outline: "none"
			textIndent: "#{@options.indent}px"
			backgroundColor: "transparent"
			height: "22px"
			width:  "100%"
			pointerEvents: "none"
			margin: "0"
			padding: "0"
			"-webkit-appearance": "none"
			
		@input.style[key]  = val for key, val of inputStyle
		@input.style.color = @options.color if @options.color?

		
		@input.onfocus = =>
			document.body.scrollTop = 0
			@input.placeholder = @options.placeHolderFocus if @options.placeHolderFocus?
			document.body.scrollTop = 0
			@emit(Events.Focus, @input.value, @)

		@input.onblur  = =>
			document.body.scrollTop = 0
			unless @input.placeholder is @options.placeHolder or !@options.placeHolder?
				@input.placeholder = @options.placeHolder
			@emit(Events.Blur, @input.value, @)

		@input.oninput = =>
			@isEmpty = !( @input.value?.length > 0)
			@emit(Events.Input, @input.value, @)
			
		@on Events.TouchEnd, -> @input.focus()
		@on "change:color",  -> @changeInputTextColor()

		@on "keydown", (event) ->
			if event.keyCode is 13
				@line.height = 1
				@lineRipple.width = 0
				@lineRipple.x = Align.center
				@helperText.color = @labelColor
				@line.backgroundColor = @lineColor
				@options.color = @inputColor
				@label.color = @labelColor
				
				if @.isEmpty
					@label.animate
						properties:
							fontSize: 16
							y: 20
							color: @labelColor
						time: 0.2	
		
#------ event functions -------------------------------------------------------------------------------
			
	clear: ->
		@input.value = ""
		@isValid = null
		@isEmpty = true
		
	changeInputTextColor: -> 
		@input.style.color = @color.toHexString()
	
	changeInputValue: (v) ->
		@input.value = v
		@input.oninput()
		
	clicked: ->
		@label.animate
			properties:
				fontSize: 12
				y: 0
				color: @options.themeColor
				opacity: @labelFocusOpacity
			time: 0.2
			
		@line.animate
			properties:
				height: 2
			time: 0.2
			
		@lineRipple.animate
			properties:
				width: @options.width
				x: 0
			time: 0.2
			
	hoverOn: ->
		@line.height = 2
		@line.backgroundColor = @lineHoverColor

	hoverOff: ->
		@line.height = 1		
		@line.backgroundColor = @lineColor










class exports.TextField_Basic extends TextField

	constructor: (@options={}) ->

		super @options





#################################################  9. TextField_Validation  ############################################
class exports.TextField_Validation extends TextField

	constructor: (@options={}) ->
	
#------- default properties ----------------------------------------------------------------------------------------	
		# Make sure we set the Checking Flag
		@shouldCheckValidity = true if @options.pattern? or @options.match?
		
		# Framer Layer Props
		@options.name             ?= "password field"
		
		@options.type ?= "password"
		@options.pattern ?= "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
		@options.eyeVisible ?= true
		
		@options.color = @inputColor

		if @options.theme is "dark"
			@labelColor = Inputlabel_dark
		else
			@labelColor = Inputlabel_light

		@red = "#FF1744"
		
		#text html
		@options.helperText ?= "helperText"
		@options.labelText ?= "Password"
		@options.helperTextVisible ?= false

		#Default properties
		_.defaults @options,
			backgroundColor : ""
			width : 200
			
		if @options.pattern is "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
			@options.helperText ?= "UpperCase, LowerCase and Number"
		else if @options.pattern is "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
			@options.helperText ?= "Must contain 8 characters, 1 uppercase, 1 lowercase, and 1 number/special character"
		else @options.helperText ?= "helperText"

#------- Elements ---------------------------------------------------------------------------------------------------
		
		@errorText = new Label
			fontSize: 12
			text: @options.helperText
			color: @red
			name: "helper Text"
			visible: false
			
		@eyeContianer = new Layer
			width: 22
			height: 22
			backgroundColor: ""
			visible: @options.eyeVisible
			name: "eyeContianer"
					
		@eyeOn = new Layer
			width: 22
			height: 16
			backgroundColor: ""
			visible: false
			name: "eyeOne"
			html: '<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M8.91205938,5.8907 C9.50605938,5.2977 10.2090594,4.9997 11.0210594,4.9997 C11.8340594,4.9997 12.5370594,5.2977 13.1310594,5.8907 C13.7240594,6.4847 14.0210594,7.1877 14.0210594,7.9997 C14.0210594,8.8127 13.7240594,9.5157 13.1310594,10.1097 C12.5370594,10.7027 11.8340594,10.9997 11.0210594,10.9997 C10.2090594,10.9997 9.50605938,10.7027 8.91205938,10.1097 C8.31805938,9.5157 8.02105938,8.8127 8.02105938,7.9997 C8.02105938,7.1877 8.31805938,6.4847 8.91205938,5.8907 M7.48205938,11.5387 C8.46705938,12.5237 9.64605938,13.0157 11.0210594,13.0157 C12.3960594,13.0157 13.5760594,12.5237 14.5600594,11.5387 C15.5450594,10.5547 16.0370594,9.3757 16.0370594,7.9997 C16.0370594,6.6247 15.5450594,5.4457 14.5600594,4.4607 C13.5760594,3.4767 12.3960594,2.9847 11.0210594,2.9847 C9.64605938,2.9847 8.46705938,3.4767 7.48205938,4.4607 C6.49805938,5.4457 6.00605938,6.6247 6.00605938,7.9997 C6.00605938,9.3757 6.49805938,10.5547 7.48205938,11.5387 M4.31805938,2.5627 C6.31805938,1.1877 8.55305938,0.4997 11.0210594,0.4997 C13.4900594,0.4997 15.7240594,1.1877 17.7250594,2.5627 C19.7250594,3.9377 21.1620594,5.7497 22.0370594,7.9997 C21.1620594,10.2497 19.7250594,12.0627 17.7250594,13.4377 C15.7240594,14.8127 13.4900594,15.4997 11.0210594,15.4997 C8.55305938,15.4997 6.31805938,14.8127 4.31805938,13.4377 C2.31805938,12.0627 0.881059375,10.2497 0.006059375,7.9997 C0.881059375,5.7497 2.31805938,3.9377 4.31805938,2.5627" id="Fill-1" fill="' + @labelColor + '"></path></g></svg>'
		
		@eyeOff = new Layer
			width: 23
			height: 19
			backgroundColor: ""
			visible: true
			name: "eyeOff"
			html: '<svg width="23px" height="19px" viewBox="0 0 23 19" version="1.1" ><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11.0331594,6 L11.1741594,6 C11.9861594,6 12.6891594,6.297 13.2831594,6.891 C13.8771594,7.484 14.1741594,8.188 14.1741594,9 L14.1741594,9.188 L11.0331594,6 Z M11.1741594,3.984 C10.5491594,3.984 9.93915937,4.109 9.34615937,4.359 L7.18915937,2.203 C8.40815937,1.734 9.73615937,1.5 11.1741594,1.5 C13.6421594,1.5 15.8691594,2.187 17.8531594,3.562 C19.8381594,4.938 21.2671594,6.75 22.1421594,9 C21.3921594,10.844 20.2521594,12.422 18.7201594,13.734 L15.8141594,10.828 C16.0641594,10.235 16.1891594,9.625 16.1891594,9 C16.1891594,7.625 15.6971594,6.445 14.7131594,5.461 C13.7281594,4.477 12.5491594,3.984 11.1741594,3.984 L11.1741594,3.984 Z M6.72115937,6.797 C6.34615937,7.547 6.15815937,8.281 6.15815937,9 C6.15815937,10.375 6.65015937,11.555 7.63515937,12.539 C8.61915937,13.523 9.79915937,14.016 11.1741594,14.016 C11.8921594,14.016 12.6271594,13.828 13.3771594,13.453 L11.8301594,11.906 C11.5801594,11.969 11.3611594,12 11.1741594,12 C10.3611594,12 9.65815937,11.703 9.06415937,11.109 C8.47015937,10.516 8.17415937,9.813 8.17415937,9 C8.17415937,8.813 8.20515937,8.594 8.26715937,8.344 L6.72115937,6.797 Z M1.18915937,1.266 L2.45515937,0 L20.1741594,17.719 L18.9081594,18.984 C18.7521594,18.828 18.2601594,18.344 17.4311594,17.531 C16.6031594,16.719 15.9701594,16.094 15.5331594,15.656 C14.1891594,16.219 12.7361594,16.5 11.1741594,16.5 C8.70515937,16.5 6.47115937,15.813 4.47115937,14.438 C2.47015937,13.062 1.03315937,11.25 0.158159375,9 C0.939159375,7.062 2.18915937,5.407 3.90815937,4.031 C3.53315937,3.656 3.01015937,3.125 2.33815937,2.437 C1.66615937,1.75 1.28315937,1.359 1.18915937,1.266 L1.18915937,1.266 Z" id="Fill-3" fill="' + @labelColor + '"></path></g></svg>'

#------- super ---------------------------------------------------------------------------------------------------
		
		super @options
		
		@eyeContianer.parent = @
		@eyeOn.parent = @eyeOff.parent = @eyeContianer
		@eyeContianer.x = @.width - 22
		@eyeContianer.y = 13
		@eyeOn.y = 0
		@errorText.parent = @
		@errorText.y = @helperText.y
			
#------- event ----------------------------------------------------------------------------------------------------

		@onClick @clicked
		@onTap @clicked
		
		if Utils.isDesktop()
			@onMouseOver @hoverOn
			@onMouseOut @hoverOff
				
		eyeOff = @eyeOff
		eyeOn = @eyeOn
		
		@eyeContianer.onClick ->
			if eyeOff.visible is true
				eyeOff.visible = false
				eyeOn.visible = true
				input.type = "text"
			else 
				input.type = "password"
				eyeOff.visible = true
				eyeOn.visible = false
			
		@.on Events.Blur, (value, layer) ->
			@label.color = @labelColor
			@line.height = 1
			@lineRipple.width = 0
			@lineRipple.x = Align.center
			
			if @.isEmpty
				@label.animate
					properties:
						fontSize: @options.labelSize
						y: 20
						color: @labelColor
					time: 0.2
				if @helperTextVisible is true 
					@helperText.visible = true
				@errorText.visible = false
			else if @isValid
				@line.backgroundColor = @lineColor
				@label.color = @labelColor
				@helperText.color = @labelColor
				if @helperTextVisible is true 
					@helperText.visible = true
				@errorText.visible = false
			else	
				@line.backgroundColor = @red
				@label.color = @red
				
				@errorText.visible = true
				errorWobble1 = new Animation
					layer: @label
					properties:
						x: 5
					time: 0.05
				errorWobble2 = new Animation
					layer: @label
					properties:
						x: - 5
					time: 0.05
				errorWobble5 = new Animation
					layer: @label
					properties:
						x: 0
					time: 0.025
				errorWobble1.start()
				errorWobble1.onAnimationEnd -> errorWobble2.start()
				errorWobble2.onAnimationEnd -> errorWobble5.start()
				@helperText.visible = false
		
#------ Adjust a few things for various types --------------------------------------------------------------------

		@input.oninput = =>
			@isEmpty = !( @input.value?.length > 0)
			@emit(Events.Input, @input.value, @)
			@checkValidity()
		
		input = @input

	checkValidity: ->
		return unless @shouldCheckValidity

		if @options.pattern?
			validity = @input.checkValidity()
			@isEmpty = !( @input.value?.length > 0)
			
			if @isValid isnt validity or @isEmpty
				if @isEmpty or !validity
					@isValid = false
					@emit(Events.Invalid, @input.value, @)
				else
					@isValid = true
					@emit(Events.Valid,   @input.value, @)
					
		if @checkMatch()
			@isValid = true
			@emit(Events.Match, @input.value, @)
			
	checkMatch: ->
		return false unless @options.match?
		if Array.isArray(@options.match)
			for match in @options.match
				return true if @input.value.indexOf(match) > -1
		else
			return true if @input.value.indexOf(@options.match) > -1
		return false
			
#--- event functions  ----------------------------------------------------------------------------------------------

	clicked: ->
		@label.animate
			properties:
				fontSize: 12
				y: - 6
				color: @options.themeColor
			time: 0.2
			
		@line.animate
			properties:
				height: 2
			time: 0.2
			
		@lineRipple.animate
			properties:
				width: @options.width
				x: 0
			time: 0.2
			
		@line.backgroundColor = @lineColor
		@label.color = @themeColor
		@helperText.color = @labelColor
		@errorText.visible = false
		if @options.helperTextVisible is true 
			@helperText.visible = true
		
	hoverOn: ->
		@line.height = 2
		@line.backgroundColor = @lineHoverColor

	hoverOff: ->
		@line.height = 1		
		@line.backgroundColor = @lineColor
		
	eyeClick: ->
		@eye.stateCycle("visible", "visibleOff")






#################################################  10. TextArea  ######################################################
class exports.TextArea extends Layer

	PATTERN_NUMBER = "[0-9]*"
	
	INPUT_HIDE_PSUEDO_UI  = "{ -webkit-appearance: none; display: none; }"
	INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button"
	INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button"
	
	Events.Input   = "InputField.OnInput"
	Events.Focus   = "InputField.OnFocus"
	Events.Blur    = "InputField.OnBlur"
	Events.Valid   = "InputField.OnValid"
	Events.Invalid = "InputField.OnInvalid"
	Events.Match   = "InputField.OnMatch"
	
	@define "value",
		get: ->
			@textarea.value
			
		set: (v) ->
			return unless v
			if @input
				@changeInputValue v

	constructor: (@options={}) ->
		
#------ default properties -------------------------------------------------------------------------------------------	
	
		@isNumber = false
		@isSearch = false
		
		@isEmpty  = true
		@isValid  = null
		@originalTextColor = null
		
		# Make sure we set the Checking Flag
		@shouldCheckValidity = true if @options.pattern? or @options.match?
 								
		# Framer Layer Props
		@options.name             ?= "Text area"
		@options.backgroundColor  = "rgba(255,255,255,0.01)"
		@options.height ?= 180

		# Custom Layer Props		
		@options.type             ?= "text"
		@options.fontWeight       ?= 400
		@options.fontFamily       ?= "'Roboto', sans serif"
		@options.indent           ?= 0
		@options.placeHolderFocus ?= null
		@options.placeHolderColor ?= null
		@options.width ?= 300
		@options.themeColor ?= "#009688"
		@options.labelText ?= "Type something..."
		
		@options.theme ?= "light"
		theme = @options.theme

		#colors 
		@options.themeColor ?= "#009688"

		themeColor = @options.themeColor
		@red = "#FF1744"
		
		if @options.theme is "dark"
			@labelColor = Inputlabel_dark
			@inputColor = input_dark
			@lineColor = line_dark
			@lineHoverColor = "rgba(255,255,255,1)"
			@labelFocusOpacity = 1
			@lineColor = line_dark
			@options.color = "#fff"
		else
			@labelColor =  Inputlabel_light 
			@inputColor = input_light
			@lineColor = line_light
			@lineHoverColor = "rgba(0,0,0,0.87)"
			@labelFocusOpacity = 0.87
			@lineColor = line_light
			@options.color = "rgba(0,0,0,0.87)"
		
		@options.color = @inputColor
		
		if Utils.isMobile()
			@options.fontSize ?= 16 * 2
			@options.lineHeight ?=  24 * 2
			@options.style =
				"padding" : "56px 32px 32px 32px"
		else	
			@options.fontSize ?= 16
			@options.lineHeight ?=  24
			@options.style =
				"padding" : "28px 16px 16px 16px"
			
		@options.labelSize ?= 16
		
		#text styling
		Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);')
		
		@options.fontFamily ?= "'Roboto', sans serif"
		@options.fontWeight ?= 400
		@options.letterSpacing ?= 0
		@options.limitOn ?= true
		
		if @options.limitOn is false
			@options.characterLimit = 1000000000000
		else @options.characterLimit ?= 200

#------- Elements --------------------------------------
		
		@label = new Label
			text: @options.labelText
			fontSize: @options.labelSize
			color: @labelColor
			name: "label"
			name: "label"
			
		@limit = new Layer
			html: "0 / " + @options.characterLimit
			backgroundColor: ""
			width: 100
			height: 12
			visible: @options.limitOn
			name: "limit"
		@limit.style =
			color: @labelColor
			fontFamily: @options.fontFamily
			fontSize: "12px"
			lineHeight: "12px"
			textAlign: "right"
			letterSpacing: @options.letterSpacing	
			
		@errorText = new Label
			fontSize: 12
			color: @red
			name: "error text"
			visible: false
			text: "Exeeds text limit."
			
		@border = new Layer
			width: @options.width
			height: @options.height
			backgroundColor: ""
			borderWidth: 1
			borderColor: @lineColor
			borderRadius: 2
			name: "border"

#------ super -----------------------------------------------------------------------------------------------------
		
		super @options
		
		@label.parent = @border.parent = @
		@limit.parent = @
		@errorText.parent = @
		@label.y = 20
		@label.x = 16
		@limit.x = @width - 100
		@limit.y = @height + 8
		@errorText.y = @height + 8

#------- event -----------------------------------------------------------------------------------------------------

		@onClick @clicked
			
		@.on Events.Blur, (value, layer) ->
			@blurred()
		
		@.on Events.Focus, (value, layer) ->
			@focus()
			
		if Utils.isDesktop()
			@.onMouseOver @hoverOn
			@.onMouseOut @hoverOff	
			
		@.on Events.Input, (value, layer) ->
			@limit.html = @value.length + " / " + @options.characterLimit
			if @value.length > @options.characterLimit
				@errorText.visible = true
				@limit.color = @red
				@border.borderColor = @red
				@label.color = @red
			else 
				@errorText.visible = false
				@limit.color = @labelColor
				@border.borderColor = @options.themeColor
				@label.color = @options.themeColor
	
#------- Adjust a few things for various types --------------------------------------------------------------------
		
		switch @options.type
			when "search" then @isSearch = true
			when "number" then @isNumber = true
			when "numbers-only", "number-only"
				@isNumber = true
				@options.type    = if @options.pattern? then "number"          else "text"
				@options.pattern = if @options.pattern? then @options.pattern else PATTERN_NUMBER
		
		@html += switch
			when @isNumber then "<style type='text/css'>#{INPUT_SELECTOR_NUMBER}#{INPUT_HIDE_PSUEDO_UI}</style>"
			when @isSearch then "<style type='text/css'>#{INPUT_SELECTOR_SEARCH}#{INPUT_HIDE_PSUEDO_UI}</style>"
			else ""

		if @options.placeHolderColor?
			@html += "<style type='text/css'>::-webkit-input-placeholder { color: #{@options.placeHolderColor}; } ::-moz-placeholder { color: #{@options.placeHolderColor}; } :-ms-input-placeholder { color: #{@options.placeHolderColor}; } ::-ms-input-placeholder { color: #{@options.placeHolderColor}; } :placeholder-shown { color: #{@options.placeHolderColor}; }</style>"
			
#------- create input -------------------------------------------------------------------------------------------
		
		@textarea = document.createElement "textarea"

		@textarea.value       = @options.value                  if @options.value?
		@input.placeholder = @options.placeHolder            if @options.placeHolder?
		@textarea.setAttribute("maxLength", @options.maxLength) if @options.maxLength?
		@textarea.setAttribute("autocapitalize", (if @options.autoCapitalize is true then "on" else "off"))
		@textarea.setAttribute("autocomplete",   (if @options.autoComplete   is true then "on" else "off"))
		@textarea.setAttribute("autocorrect",    (if @options.autoCorrect    is true then "on" else "off"))
		
		@_element.appendChild @textarea
		
		# Setup Values
		@isEmpty           = !(@options.value?.length > 0)
		@originalTextColor = @options.color
		
		# Setup Input Style
		
		@_textAreaStyle =
			fontSize: "#{@options.fontSize}px"
			lineHeight: "#{@options.lineHeight}px"
			fontWeight: "#{@options.fontWeight}"
			fontFamily: "#{@options.fontFamily}"
			outline: "none"
			textIndent: "#{@options.indent}px"
			backgroundColor: "transparent"
			height: "100%"
			width:  "100%"
			pointerEvents: "none"
			margin: "0"
			overflow: "hidden"
			resize: "none"
			"-webkit-appearance": "none"
			
		@textarea.style[key]  = val for key, val of @_textAreaStyle
		@textarea.style.color = @options.color if @options.color?
		
		@textarea.onfocus = =>
			document.body.scrollTop = 0
			@input.placeholder = @options.placeHolderFocus if @options.placeHolderFocus?
			document.body.scrollTop = 0
			@emit(Events.Focus, @textarea.value, @)

		@textarea.onblur  = =>
			document.body.scrollTop = 0
			unless @textarea.placeholder is @options.placeHolder or !@options.placeHolder?
				@input.placeholder = @options.placeHolder
			@emit(Events.Blur, @textarea.value, @)
	
		@_textAreaStyleonblur  = =>
			document.body.scrollTop = 0
			unless @input.placeholder is @options.placeHolder or !@options.placeHolder?
				@input.placeholder = @options.placeHolder
			@emit(Events.Blur, @input.value, @)

		@textarea.oninput = =>
			@isEmpty = !( @textarea.value?.length > 0)
			@emit(Events.Input, @textarea.value, @)
			@checkValidity()
			
		@on Events.TouchEnd, -> @textarea.focus()
		@on "change:color",  -> @changeInputTextColor()

		#Update the height whenever anything changes.
		@textarea.onkeydown = => @_update()
		@textarea.onkeyup = => @_update()
		@textarea.change = => @_update()
	_resizeParent = (layer, parentMinHeight, bottomPadding) ->
		# Variable for parent
		layerParent = layer.parent
		
		# Array to store all children's maxYs
		allChildrenMaxYs = []
		
		# Push each maxY to an array
		for max in layerParent.children
			allChildrenMaxYs.push(max.maxY)
			
		# Find the bottom-most maxY value
		tallestChildMaxY = Math.max.apply(null, allChildrenMaxYs)
		
		# Store the distance between the bottom of that and the parent layer
		layerParent.height = Math.max(tallestChildMaxY + bottomPadding, parentMinHeight)
		
		# TODO - Maintain the bottom padding of the parent.
		
	# Reflow all the siblings under the text layer
	_reflowSiblings = (layer, layerMaxY) ->
		layerList = layer.parent.children
		for a in [layerList.indexOf(layer)+1...layerList.length]
			yDiff = layerList[a].y - layerMaxY
			layerList[a].y = layer.maxY + yDiff
		# TODO - redo this without the assumption that all siblings after the layer are below it.
			
	# Update height function
	_update: =>
		setTimeout =>
			layerMaxY = @.maxY
			# Add back any line breaks that the value method gets ride of
			_trueValue = @textarea.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n/g, "<br/>&nbsp;");
			
			# If it's empty, make sure there's a letter in there to calculate *something*
			if _trueValue.trim() == "" then _trueValue = "a"
			
			# Calculate the height!!!
			calcHeight = Utils.round(Utils.textSize(_trueValue, @_textAreaStyle, {width: @.width}).height, 0)
			
			# Set the height to either the calculated height, or the minHeight, whichever is greater.
			@.height = Math.max(calcHeight, @options.minHeight)
			if @options.reflowSiblings == true then _reflowSiblings(@, layerMaxY)
			if @options.resizeParent == true then _resizeParent(@, @parentOgHeight, @options.parentBottomPadding)

#------- event functions -------------------------------------------------------------------------------------------
		
	checkValidity: ->
		return unless @shouldCheckValidity
					
	clear: ->
		@input.value = ""
		@isValid = null
		@isEmpty = true
		
	changeInputTextColor: -> 
		@input.style.color = @color.toHexString()
	
	changeInputValue: (v) ->
		@input.value = v
		@input.oninput()
		
	clicked: ->
		@label.animate
			properties:
				fontSize: 12
				y: 8
				color: @options.themeColor
				x: 16
			time: 0.2
		@border.borderColor = @options.themeColor
		@border.borderWidth = 2

	error: ->
		@borderColor = @red
		
	focus: ->
		@label.fontSize = 12
		@borderColor = @options.themeColor
		@border.borderWidth = 2
		@label.color = @labelColor
	
	hoverOn: ->
		@border.borderWidth = 2
		@options.borderColor = @lineHoverColor

	hoverOff: ->
		@border.borderWidth = 1
		@borderColor = @lineColor
			
	blurred: (value, layer)	->
		@label.color = @labelColor
		@border.borderColor = @lineColor

		if @.isEmpty
			@label.animate
				properties:
					fontSize: 16
					y: 20
					x: 16
					color: @labelColor
				time: 0.2
			@border.borderColor = @labelColor
			
		if @value.length > @options.characterLimit
			@errorText.visible = true
			@limit.color = @red
			@border.borderColor = @red
			@label.color = @red
			
		@border.borderWidth = 1






#################################################  11. TextField_Dropdown  ############################################
class exports.TextField_Dropdown extends Layer
	constructor: (@options={}) ->
		
#------ default properties ------------------------------------------------------------------------------------------
		if @options.theme is "dark"
			@options.screenColor ?= "#000"
		
		@options.choices ?= ["apple", "banana", "blueberry","cantaloupe", "cherry","coconut", "fig", "grape","grapefruit","guava", "kiwifruit", "lemon","lime", "lychee", "mango", "melon", "orange","papaya", "passionfruit", "peach", "pear","pineapple", "plum","pomegranate", "raspberry", "strawberry", "watermelon"]
		@options.labelText ?= "Select a fruit"
		@options.theme ?= "light"
		@options.visibleItems ?= 4
		@options.activeSelection ?= null
		
		#colors 
		@options.themeColor ?= "#009688"
		themeColor = @themeColor
		
		if @options.theme is "dark"
			@labelColor = label_dark
			@lineColor = line_dark
			@lineHoverColor = line_dark_hover
			@inputColor = input_dark
		else
			@labelColor = label_light
			@lineColor = line_light
			@lineHoverColor = line_light_hover	
			@inputColor = input_light

		_.defaults @options,
			backgroundColor : ""
			height: 50
			color: "#E91E63"
			width : 150
			name: "DropDown"

#------ label -------------------------------------------------------------------------------------------------
		
		@label = new Label
			text: @options.labelText
			color: @labelColor
			name: "label"
			fontSize: 12
			visible: false
		
		@placeHolder = new Label
			text: @options.labelText
			color: @inputColor
			y: 20
			name: "label"

#------ arrow -----------------------------------------------------------------------------------------------

		@arrow = new Layer
			html: '<svg version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="' + @lineColor + '" points="0.660133877 0 9.17482706 0 4.91748047 5"></polygon></g></svg>'
			size: 24
			backgroundColor: ""
			color: "#555"
			width:10
			height: 5
			name:"Arrow"

#------ line ---------------------------------------------------------------------------------------------------

		@line = new Layer
			height: 1
			width: @options.width
			y: 49
			backgroundColor: @lineColor
			name: "line"

#------ container -----------------------------------------------------------------------------------------------

		@container = new Layer
			width: @options.width
			borderRadius: 2
			backgroundColor: "#fff"
			height: @options.visibleItems * 50 + 20
			clip: true
			name: "container"
		
#------ super ---------------------------------------------------------------------------------------------------
	
		super @options
		
		@container.states = 
			open: 
				height: @options.visibleItems * 50 + 20
				y: 0
			closed:
				height: 0
				y: 50
		@container.states.switchInstant "closed"
		@container.animationOptions = time: 0.5
		
		@label.parent = @
		@placeHolder.parent = @
		@container.parent = @arrow.parent = @line.parent =  @
		
		@arrow.y = Align.center(2)
		@arrow.x = @options.width - 24
		@container.y = 50
		
		placeHolder = @placeHolder
		label = @label
		container = @container
		activeSelection = @activeSelection
		labelColor = @labelColor

#------ shadows -------------------------------------------------------------------------------------------------

		shadow = new Shadow
			parent: @
			height: @options.visibleItems * 50 + 20
			width: @width
			borderRadius: @container.borderRadius
			y: 0
			name: "shadows"

		for item in shadow.array
			item.states.open =
				y: 0
				height: @options.visibleItems * 50 + 20
			item.states.closed =
				height: 0
				y: 50
			
			item.animationOptions = time: 0.5
					
			item.states.switchInstant "_2dp"
			item.states.switchInstant "closed"
		
#------ scroll area ------------------------------------------------------------------------------------------

		container_ScrollArea = new ScrollComponent
			parent: @container
			width: @container.width
			backgroundColor: ""
			height: @options.visibleItems * 50 + 20
			name: "scrollArea"
		container_ScrollArea.content.draggable.overdrag = false
		container_ScrollArea.content.draggable.bounce = false
		container_ScrollArea.mouseWheelEnabled = true

#------ slider ------------------------------------------------------------------------------------------
	
		slider = new SliderComponent
			width: 5
			height: container_ScrollArea.height - 30
			y: 15
			borderRadius: 0
			parent: container_ScrollArea
			x: container_ScrollArea.width - 5
			backgroundColor: ""
			min: 0
			max: (@options.choices.length * 50) - 200
			value: -15
			name: slider
		slider.fill.backgroundColor = ""
		
		slider.knob.backgroundColor = "BDBDBD"
		slider.knob.shadowY = 0
		slider.knob.shadowSpread = 0
		slider.knob.shadowBlur = 0
		slider.knob.borderRadius = 1
		slider.knob.width = 5
		slider.knob.height = 30
		
		slider.on "change:value", ->
			container_ScrollArea.content.y = - this.value 

		container_ScrollArea.onMove ->
			slider.value = container_ScrollArea.scrollY 

#------ choice loop ------------------------------------------------------------------------------------------

		as = null
		
		for i in [0...@options.choices.length]
			choice = new Layer
				parent: container_ScrollArea.content
				width: container_ScrollArea.width
				height: 50
				y: 50 * i + 10
				backgroundColor: ""
				name: "choice"

			choice_label = new Label
				text: @options.choices[i]
				parent: choice
				x: 20
				y: Align.center
				name: @options.choices[i] + "label"
				color: label_light
				
			choice.onMouseOver ->
				this.backgroundColor = "#eee"

			choice.onMouseOut ->
				this.backgroundColor = "#fff"

			choice.onClick ->
				as = this.children[0].text
				placeHolder.text = this.children[0].text
				placeHolder.color = labelColor
				container.states.switch "closed"
				label.visible = true
				for item in shadow.array
					item.states.switch "closed"
				
		container = @container

#------ events ---------------------------------------------------------------------------------------------------

		@onClick ->
			for item in shadow.array
				item.states.switch "open"
			container.states.switch "open"
			@activeSelection = as
					
		if Utils.isDesktop()
			@onMouseOver @hoverOn
			@onMouseOut @hoverOff
				
#------event function ---------------------------------------------------------------------------------------------

	hoverOn: ->
		@line.height = 2
		@line.backgroundColor = @lineHoverColor

	hoverOff: ->
		@line.height = 1		
		@line.backgroundColor = @lineColor
		
#------ getters and setters -----------------------------------------------------------------------------------------

	@define 'color',
		get: -> 
			@options.color
		set: (value) -> 
			@options.color = value

	@define 'choices',
		get: -> 
			@options.choices
		set: (value) -> 
				@options.choices = value
			
	@define 'activeSelection',
		get: -> 
			@options.activeSelection
		set: (value) -> 
			@options.activeSelection = value

			
	



##################################################  12. AppBar  ########################################################
class exports.AppBar extends Layer

	constructor: (@options={}) ->

#------ default properties ------------------------------------------------------------------------------------------

		@options.width ?= Screen.width
		@options.labelText ?= "Form"
		@options.fontSize ?= 22
		@options.fontWeight ?= 500
		@options.fontFamily ?= "'Roboto', sans serif"
		@options.labelColor = "#fff"
		@options.themeColor ?= "#009688"
		@options.backgroundColor ?= @options.themeColor
		@options.mobile ?= false
		@options.menuIconVisble ?= true
		@options.name ?= "app bar"
		@options.statusIconsY ?= Align.center(-8)
		@options.menuIconY ?= Align.center()

#------ elements -------------------------------------------------------------------------------------------------

		@appCont = new Layer
			height: 56
			width: @options.width
			backgroundColor: ""
			name: "app bar contianer"

		if Utils.isMobile() or @options.mobile is true
			@statusBar = new Layer
				width: @options.width
				height: 24
				backgroundColor: "rgba(0,0,0,0.30)"
				name: "status bar"
			@options.height ?= 80
			@appCont.y = 24
		else
			@options.height ?= 56
	
		@menuIcon = new Layer
			size: 48
			backgroundColor: ""
			visible: @options.menuIconVisble
			name: "menu icon"
			
		@title = new TextLayer
			text: @options.labelText
			fontSize: @options.fontSize
			fontFamily: @options.fontFamily
			color: @options.labelColor
			fontWeight: @options.fontWeight
			name: "title"

#------ super -------------------------------------------------------------------------------------------------

		super @options

		shadow = new Shadow
			width: @width
			height: @height
			name: "shadows"

		shadow.parent  = @
		@title.parent = @
		@title.y = Align.center()
		@title.x = 16
		@appCont.parent = @
		@menuIcon.parent = @title.parent = @appCont
		@menuIcon.x = 16
		@menuIcon.y = @options.menuIconY

		if  @menuIcon.visible is true
			@title.x = 48 + 16 + 16

#------ menu icon -------------------------------------------------------------------------------------------------


		menuIcon = new Layer
			html: '<svg width="18px" height="12px" viewBox="0 0 18 12"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M0,2 L18,2 L18,0 L0,0 L0,2 Z M0,6.97 L18,6.97 L18,5 L0,5 L0,6.97 Z M0,12 L18,12 L18,10 L0,10 L0,12 Z" fill="#fff"></path></g></svg>'
			width: 18
			height: 12
			parent: @menuIcon
			x: Align.center()
			y: Align.center()
			backgroundColor: ""
			name: "icon"

#------ status bar -------------------------------------------------------------------------------------------------

		if Utils.isMobile() or @options.mobile is true
			@statusBar.parent = @
			@title.y =  Align.center(10)
			
			statusBarTime = new TextLayer
				fontSize: 13
				parent: @statusBar
				y: Align.center
				x: @width - 55
				color : "#fff"
				fontFamily: "'Roboto', sans serif"
				textAlign: "right"
				name: "status bar time"

			setTime = () ->
				date = new Date
				minute = date.getMinutes()
				hour = date.getHours()
				
				zone = "AM"
				
				if hour < 10
					hour = '0' + hour 
					
				if hour > 12
					hour = hour - 12
					zone = "PM"
				else	
					zone = "AM"
				
				if minute < 10
					minute = '0' + minute 
					
				statusBarTime.text = "#{hour}:#{minute} #{zone}"
				
				Utils.delay 30, ->
					setTime()
					
			setTime()
			
			statusIcons = new Layer
				name: "status icons"
				parent: @statusBar
				html: '<svg width="53px" height="16px"><g><path d="M34.6093216,0.60903749 L34.6093216,15.1074592 L20.1108999,15.1074592 L34.6093216,0.60903749 Z M15.294614,7.04747475 L15.3280105,7.08087121 L9.16854076,14.7039773 L3.00907106,7.08087121 L3.04246752,7.04747475 L0.729399342,4.18844697 C3.47371752,2.26016414 6.28773268,1.29602273 9.16854076,1.29602273 C12.0508009,1.29602273 14.863364,2.26016414 17.6091342,4.18844697 L15.294614,7.04747475 Z M51.2229421,2.14400069 C51.574133,2.14400069 51.8764952,2.26795043 52.1243947,2.51772794 C52.3741722,2.76750545 52.5,3.06798967 52.5,3.42105863 L52.5,13.8142529 C52.5,14.1654438 52.3741722,14.4602939 52.1243947,14.6950472 C51.8764952,14.9298005 51.574133,15.0462382 51.2229421,15.0462382 L44.3568776,15.0462382 C44.0038086,15.0462382 43.7033244,14.9298005 43.4535469,14.6950472 C43.2037694,14.4602939 43.0798196,14.1654438 43.0798196,13.8142529 L43.0798196,3.42105863 C43.0798196,3.06798967 43.2037694,2.76750545 43.4535469,2.51772794 C43.7033244,2.26795043 44.0038086,2.14400069 44.3568776,2.14400069 L45.8968592,2.14400069 L45.8968592,0.296022727 L49.6829604,0.296022727 L49.6829604,2.14400069 L51.2229421,2.14400069 Z" fill="#fff"></path></g></svg>'
				backgroundColor: ""
				width: 53
				height: 16
				y: @options.statusIconsY
				x: @width - statusBarTime.width - 70

			@title.y = Align.center

#------ on resize -------------------------------------------------------------------------------------------------
			
		at = @
		statusBar = @statusBar
		isMob = @options.mobile
		
		window.onresize = ->
			at.width = Screen.width
			shadow.umbra.width = Screen.width
			shadow.ambient.width = Screen.width
			shadow.penumbra.width = Screen.width
			if Utils.isMobile() or isMob is true
				statusBar.width = Screen.width
				statusBarTime.x = Screen.width - 55
				statusIcons.x = Screen.width - statusBarTime.width - 68





















