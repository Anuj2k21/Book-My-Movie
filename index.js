// Store the wallet amount to your local storage with key "amount"
 let amountavailable =localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText  = +(amountavailable);

function gotomovies(){
    window.location.href ="movies.html"
}

function addmoney(){


    let addedmoney = document.getElementById("amount").value;
    if(addedmoney !="")
    {
        addedmoney =  +(addedmoney);
        console.log(addedmoney, +(amountavailable))
            amountavailable = +(amountavailable) + (addedmoney);
        
            localStorage.setItem("amount",amountavailable)
        
            document.getElementById("wallet").innerText  = +(amountavailable);
    }
  



}