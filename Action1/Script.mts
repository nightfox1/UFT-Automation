'Set the device ID to the device you want to work on in the line below and uncomment it
'Device("DUT").SetTOProperty "device_id",""

'The open command makes the device available for the script, when running the script externally 
' from HP ALM or other tools, it is essential
Device("DUT").Open

'The Navigates device to idle screen and unlocks device
'Recommended to always use before actual script begins
Device("DUT").Home

'Mbrowser navigates device browser to the required URL
'Go into the MBrowser in the object reppsitory and see that the "automation" property is set to os
'This means we will open Chrome/Safari/Explorer according to OS
'It is recommended to always set this property to ensure the correct browser
Device("DUT").MBrowser("Browser").Goto "http://nxc.co.il/demoaut/index.php"

'The Checkpoints validates the text appears on the sceeen
Device("DUT").Checkpoints.TextCheckpoint "Perfecto Virtual Tours","timeout=30"

'Medit enters text into an input field
Device("DUT").MEdit("Username").Set "John"
Device("DUT").MEdit("Password").Set "Perfecto1"

'the MButton clicks on the text found on the device
Device("DUT").MButton("Sign in").Click

Device("DUT").Checkpoints.TextCheckpoint "Welcome Back","timeout=30"

'Device close releases the device and makes it available for the next script
Device("DUT").Close











