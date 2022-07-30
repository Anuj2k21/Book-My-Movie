// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amountavailable =localStorage.getItem("amount") || 0;
function showamount()
{
    let amountavailable =localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText  = +(amountavailable);
}

showamount()


function create (a){
    return document.createElement(a);
}

let el = JSON.parse(localStorage.getItem("movie"))

let image =create("img");
image.src = el.Poster;

let title = create("p")
     title.innerText =el.Title

let moviebox =create("div");
moviebox.append(title,image)

document.getElementById("movie").append(moviebox)




function confirm(){

    let no_tickets = +(document.getElementById("number_of_seats").value)
    // console.log(no_tickets ,typeof no_tickets)
    let amounttopay = 100*no_tickets;
//   if(amounttopay ==null){
//     return 
// }
    if(amounttopay > +(amountavailable)){
        alert("insufficient Balance")
    }
    else{

      let amountremains =  +( amountavailable) -amounttopay
      localStorage.setItem("amount",amountremains)
        setTimeout(function(){
            
            alert("Booking Successfull!")
        },1000) 
        showamount();

      


    }


}