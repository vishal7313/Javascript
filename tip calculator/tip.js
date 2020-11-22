function calculateTip() {
    let billAmt = document.getElementById('billamt').value;
    let serviceQuality = document.getElementById('serviceQual').value;
    let numPeople = document.getElementById('numpeople').value;
    let altTip = document.getElementById('altTip').value;
    let total = 0;
    if (billAmt === "") {
        alert("Please enter Bill Amount");
        return;
    } 
    if(serviceQuality === "" || serviceQuality === "0") {
        alert("Choose Service Quality");
        return;
    }
    if(altTip === "0") {
        alert("Entered Tip Percentage Cannot be 0%");
        return;
    }
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById('numpeople').value = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }

    if(altTip === "") {
        total = ((Number(billAmt) * Number(serviceQuality)) / Number(numPeople)).toFixed(2);
    }
    else {
        maxPercentage = Math.max(Number(serviceQuality), Number(altTip / 100));
        total = ((Number(billAmt) * Number(maxPercentage)) / Number(numPeople)).toFixed(2);
    }
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculateTip").onclick = function() {
    calculateTip();
};