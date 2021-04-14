// get a reference to the textbox where the bill type is to be entered
var textboxElement = document.querySelector(".billTypeText");

//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

//add an event listener for when the add button is pressed


//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen (Inner HTML)
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;


function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = textboxElement.value.trim();
    console.log(billTypeEntered);
    //for (var i=0;i<billTypeEntered.length;i++){
    // update the correct total
        if (billTypeEntered === "call"){
       callsTotal += 2.75;
      totalCost += 2.75;

        } else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
       totalCost += 0.75;
       }

    var totalCost = callsTotal + smsTotal;
    console.log(totalCost);
    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
    
    totalOneElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 30 && totalCost < 50){
        totalOneElement.classList.remove("danger")
        totalOneElement.classList.add("warning")
    }
    else if (totalCost >= 50){
    // adding the danger class will make the text red
        totalOneElement.classList.remove("warning")
        totalOneElement.classList.add("danger")
    }
    if(totalCost < 30){
        totalOneElement.classList.remove("danger")
        totalOneElement.classList.remove("warning")
    }

}

addToBillBtnElement.addEventListener('click', textBillTotal)
