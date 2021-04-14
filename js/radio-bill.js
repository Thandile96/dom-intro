// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector(".billItemTypeRadio")

//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")

//create a variable that will keep track of the total bill
var callTotalTwoElement = document.querySelector(".callTotalTwo")
var smsTotalTwoElement = document.querySelector(".smsTotalTwo")
var totalTwoElement = document.querySelector(".totalTwo")

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var callsTotalsTwo = 0;
var smsTotalsTwo = 0;
var totalCostsTwo = 0;

function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    
     // billItemType will be 'call' or 'sms'
     if (billItemType === "call") {
        callsTotalsTwo += 2.75;
     }
    
     else if (billItemType === "sms"){
        smsTotalsTwo += 0.75;
     }
        
    }
  

    totalCostsTwo =  callsTotalsTwo + smsTotalsTwo;
    callTotalTwoElement.innerHTML = callsTotalsTwo.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalsTwo.toFixed(2);

    totalTwoElement.innerHTML = totalCostsTwo.toFixed(2);

   
   
    if (totalCostsTwo >= 50){
        // totalTwoElement.classList.remove("warning")
        totalTwoElement.classList.add("danger");
    }

    else if (totalCostsTwo >= 30){
        // totalTwoElement.classList.remove("danger")
        totalTwoElement.classList.add("warning");
    } 
   
}


radioBillAddBtnElement.addEventListener('click', radioBill)
