MaterialComponents = require 'MaterialComponents'

padding = 32



scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	backgroundColor: "#fff"
	scrollHorizontal: false

head = new MaterialComponents.AppBar 
	themeColor: MaterialComponents.indigo
	labelText: "Survey"
	mobile: true
	statusIconsY: Align.center()
	menuIconY: Align.center(-1)

field1 = new MaterialComponents.TextField_Basic
	x: padding
	y: padding + head.height
	width: 300
	labelText: "Name"
	themeColor: MaterialComponents.indigo
	parent: scroll.content

field2 = new MaterialComponents.RadioButtons
	x: padding
	y: padding + field1.height + field1.y
	width: 300
	labelText: "Did you like the event?"
	themeColor: MaterialComponents.indigo
	type: "password"
	choices: ["yes", "it was 'ok'", "no"]
	parent: scroll.content


field3 = new MaterialComponents.Checkboxes
	x: padding
	y: padding + field2.height + field2.y
	width: 300
	labelText: "What did you like"
	themeColor: MaterialComponents.indigo
	type: "password"
	parent: scroll.content
	choices: ["the bar", "pony rides", "jumping castles", "music"]
	checkY: 4
	
field4 = new MaterialComponents.TextArea 
	x: padding
	y: padding + field3.height + field3.y
	width: 300
	labelText: "Comments"
	themeColor: MaterialComponents.indigo
	parent: scroll.content

button = new MaterialComponents.RaisedButton
	x: padding
	y: padding + field4.height + field4.y
	labelText: "Submit"
	themeColor: MaterialComponents.indigo
	parent: scroll.content