const searchable = [
    "php","css","html","Javascript","java","coding","some other item","how to code"
]

const searchInput = document.querySelector("#search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper =  document.querySelector(".results")
const searchBtn = document.querySelector("#search-btn")


let results = [];
searchInput.addEventListener("keyup",(event)=>{
    let inputVal = searchInput.value;
    console.log(searchInput.value,"val")
    if(inputVal.length){
        results = searchable.filter((item)=>{
            return item.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())
        })
    }
    console.log(results,"results")
    renderResults(results)

    if (event.keyCode === 13){
        
        searchBtn.click()
        
        console.log("yes")
    }
})

function renderResults(results){
    resultsWrapper.innerHTML = ""
    if(!results.length){
        console.log("no inside")
      return  searchWrapper.classList.remove("show");
    }
    let ul = document.createElement("ul")
        results.map((item)=>{
        // return `<li>${item}</li>`
        let li = document.createElement("li");
         li.textContent = item 
         ul.appendChild(li);
         return ul;
    }).join("");

    searchWrapper.classList.add("show");
   
  
    // resultsWrapper . innerHTML = `<ul>${content}</ul>`
    resultsWrapper.appendChild(ul)

    // console.log(content)
    // console.log("-------")

    clickEvent()

}

function clickEvent(){
    const result = document.querySelectorAll(".results ul li")
    // console.log(result,"result")
   for(let element of result){
       element.addEventListener("click",(event)=>{
         searchInput.value = event.target.textContent
         searchWrapper.classList.remove("show")
         searchInput.focus()
       })
   }
   
}

searchBtn.addEventListener("click",(event)=>{
    const output = document.querySelector(".output");
    output.innerHTML=searchInput.value
    searchInput.value = ""
    searchWrapper.classList.remove("show")
    
})