// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let amountavailable =localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText  = +(amountavailable);



let timer;
function debounce(fn,t){
if(timer){
    clearTimeout(timer)
}
timer = setTimeout(()=>{
    fn()
},t)

}


 async function main(){

let data = await serchfun()

append(data)

}


async  function serchfun(){

    try {
        const query = document.getElementById("search").value;

       const url = `http://www.omdbapi.com/?s=${query}&apikey=b59a653a`

       let response = await fetch(url)
      let kamkaresponce  = await response.json();
// console.log(kamkaresponce.Search)

        return kamkaresponce.Search;
    }
    catch (reject){
           console.log("fetch nhi hua shayad: ",reject)
    }


}

function create (a){
    return document.createElement(a);
}

function append(data){
    console.log(data)
    document.getElementById("movies").innerHTML =null;
    data.forEach((el) => {
        
     let main_box = create("div")
     let image  =create("img")
     image.src = el.Poster

     let title = create("p")
     title.innerText =el.Title

     let bookbtn =create("button")
     bookbtn.innerText ="Book Now"
     bookbtn.setAttribute("class", "book_now")

     bookbtn.addEventListener("click",()=>{
        localStorage.setItem("movie",JSON.stringify(el));

        window.location.href = "checkout.html"
    })

     main_box.append(image,title,bookbtn)

     document.getElementById("movies").append(main_box)

    });
}
