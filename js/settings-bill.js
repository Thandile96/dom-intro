// get a reference to the sms or call radio buttons
var radioButton = documement.querySelector(".billItemTypeWithSettings")

// get refences to all the settings fields
var callTotalField = document.querySelector(".callTotalSettings")
var smsTotalField = document.querySelector(".smsTotalSettings")
var totalField = document.querySelector(".totalSettings")
//get a reference to the add button
var addRadioBillButton = document.querySelector(".button-primary")
//get a reference to the 'Update settings' button
var updateButton = document.querySelector(".updateSettings")

// create a variables that will keep track of all the settings
var callCostSet = document.querySelector(".callCostSetting")
var smsCostSet = document.querySelector(".smsCostSetting")
var warningLevelSet = document.querySelector(".warningLevelSetting")
var criticalLevelSet = document.querySelector(".criticalLevelSetting")
// create a variables that will keep track of all three totals.
var callCosts = 0;
var smsCosts = 0; 
var totalCosts = 0;
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
