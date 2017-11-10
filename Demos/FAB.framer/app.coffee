MaterialComponents = require 'MaterialComponents'

bg = new BackgroundLayer
	backgroundColor: MaterialComponents.white

header = new MaterialComponents.AppBar 
	mobile: true 
	themeColor: MaterialComponents.purple
	menuIconY: Align.center(-5)
	statusIconsY: Align.center(-3)
	
fab = new MaterialComponents.FAB 
	themeColor: MaterialComponents.purple
	icon: "share"
