// get a reference to the sms or call radio buttons
var radioButton = document.querySelector(".billItemTypeWithSettings")

// get refences to all the settings fields
var callTotalField = document.querySelector(".callTotalSettings")
var smsTotalField = document.querySelector(".smsTotalSettings")
var totalField = document.querySelector(".totalSettings")
//get a reference to the add button
var addRadioBillButton = document.querySelector(".buttonSettings")
//get a reference to the 'Update settings' button
var updateButton = document.querySelector(".updateSettings")

// create a variables that will keep track of all the settings
var callCostSet = document.querySelector(".callCostSetting")
var smsCostSet = document.querySelector(".smsCostSetting")
var warningLevelSet = document.querySelector(".warningLevelSetting")
var criticalLevelSet = document.querySelector(".criticalLevelSetting")
// create a variables that will keep track of all three totals.

var setCall = 0;
var setSms = 0;
var setWarning = 0;
var setCritical = 0; 

var callCosts = 0;
var smsCosts = 0; 
var totalCosts = 0;
//add an event listener for when the 'Update settings' button is pressed


//add an event listener for when the add button is pressed
function updateSettings(){
    setCall = Number(callCostSet.value);
    setSms = Number(smsCostSet.value);
    setWarning = Number(warningLevelSet.value);
    setCritical = Number(criticalLevelSet.value);
}
updateButton.addEventListener('click', updateSettings)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function billSettings() {
    var radioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if(radioButton) {
        //var billItem = radioButton.value;
        if(totalCosts < setCritical) {
            // radioButton === "call"
            

            if(radioButton.value === "call") {
                callCosts += setCall;
                totalCosts += setCall;
            }

            else if(radioButton.value === "sms") {
                // radioButton === "sms"
                smsCosts += setSms;
                totalCosts += setSms;
            }
        }
        

    }

    // totalCosts = callCosts + smsCosts;
    callTotalField.innerHTML = callCosts.toFixed(2);
    smsTotalField.innerHTML = smsCosts.toFixed(2);
    totalField.innerHTML = totalCosts.toFixed(2);

    if(totalCosts >= setWarning && totalCosts < setCritical) {
        totalField.classList.add("warning");
        totalField.classList.remove("danger");
    }
    else if(totalCosts >= setCritical ) {
        totalField.classList.add("danger");
        totalField.classList.remove("warning");
    }
  
}
addRadioBillButton.addEventListener('click', billSettings)



