function compute()
{
    //declare variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = parseFloat(interest) + parseFloat(principal)
    //principal validation
    if(parseFloat(principal) <= 0) {
        alert("Please enter a positive number");
    }else{
        //output
    document.getElementById("result").innerText="if you deposit " + principal + " at an interest rate of " + rate + "% you will receive an amount of " + result + " in the year " + year;
    }
}
//update rate
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}