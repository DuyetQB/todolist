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

      
        newElement.textContent = output;
        //nội dung của element mới bằng output 
        //mà output là biến chứa giá trị nhập vào 

       const span = document.createElement("span");
       newElement.appendChild(span);
       span.innerHTML = "&times"
       span.style.position = "absolute";
       span.style.fontSize = "20px";
       span.style.color= " white";
       span.style.cursor = "pointer";
       span.className = "close";
      span.style.right = "3rem";
//tạo ra một span dùng để click cho element biến mất và đặt tên là span 


      const alertElement = document.createElement("span");
    alertElement.className = "popup";
     //tạo một biến gọi là alertElement chứa span vừa tạo 
     //cho nó tên class là popup 
      
    
      if(elementInput.value === ""){
             
        document.body.appendChild(alertElement);
        newElement.remove();
        notification();
        
        alertElement.innerHTML = "please write anything";
    }
    //nếu giá trị trong ô input bằng chuỗi trống thì body sẽ chứa thằng alertElement 
    //newElement lúc này bị loại bỏ ,không tạo element mới 
    //sau đó chạy hàm notifiction 
    

        newElement.onclick =()=>{
         
          

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
//sau 3s thì hàm này sẽ đk gọi và cái alertElement sẽ biến mất 
        

        
    
})



