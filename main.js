const elementInput = document.querySelector("#main");
const elementBtn = document.querySelector("#btn");
const ul = document.querySelector("#main-ul");
var newAdd = "click1";

console.log(elementBtn)
console.log(elementInput)

elementBtn.addEventListener("click", function(){
   
    const output = elementInput.value;
 

     
        const newElement = document.createElement("li");
       ul.appendChild(newElement);
       newElement.className ="main-li";

       console.log(newElement)
        newElement.textContent = output;

       const span = document.createElement("span");
       newElement.appendChild(span);
       span.innerHTML = "&times"
       span.style.position = "absolute";
       span.style.fontSize = "20px";
       span.style.color= " white";
       span.style.cursor = "pointer";
       span.className = "close";
      span.style.right = "30px";



      const alertElement = document.createElement("span");
  
     
      
    
      if(elementInput.value === ""){
             
        document.body.appendChild(alertElement);
        newElement.remove();
        notification();
        
        alertElement.innerHTML = "please write anything";
    }
    

        newElement.onclick =()=>{
            console.log(newAdd)
          

            if(newAdd === "click1"){
                
                newElement.classList.add("click")
                newAdd = "click2";
            }
            else if(newAdd === "click2"){
                newElement.classList.remove("click");
                newAdd = "click1";
            }
        };

        span.onclick = ()=>{
            newElement.remove();
        }

        
          function notification() {
            setTimeout(function(){ alertElement.remove() }, 3000);
          }

        

        
    
})



