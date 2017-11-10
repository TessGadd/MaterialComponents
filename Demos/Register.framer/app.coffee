MaterialComponents = require 'MaterialComponents'

padding = 32


bg = new BackgroundLayer
	backgroundColor : "#fff"

head = new MaterialComponents.AppBar 
	themeColor: MaterialComponents.cyan
	labelText: "Sign in"
	mobile: true
head.menuIcon.y = Align.center(-12)
head.statusBar.children[1].y = Align.center(-8)

field1 = new MaterialComponents.TextField_Validation
	x: padding
	y: head.height + padding
	labelText: "email"
	eyeVisible: false
	type: "text"
	width: 300
	match: ["joe@soap.com", "jane@doe.com", "john@smith.com"]
	themeColor: MaterialComponents.cyan
	helperText: "email address not recognised"
	width: Screen.width - (padding  * 2)
	
	
field2 = new MaterialComponents.TextField_Validation
	x: padding
	y: field1.height + padding + field1.y
	labelText: "password" 
	eyeVisible: false
	type: "text"
	width: 300
	match: ["password123", "Fido", "alpha"]
	themeColor: MaterialComponents.cyan
	helperText: "Incorrect password"
	width: Screen.width - (padding  * 2)
	
button = new MaterialComponents.RaisedButton
	themeColor: MaterialComponents.cyan
	x: padding
	y: field2.height + padding + field2.y