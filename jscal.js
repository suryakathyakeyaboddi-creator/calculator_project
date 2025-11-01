let result = document.querySelector("#inputar");
let keys = document.querySelectorAll("button");
for(let i=0;i<keys.length;i++){
    let key = keys[i];
    if(key.innerHTML === "="){
        key.addEventListener("click",()=>{
            try{
                result.value = eval(result.value);
            }catch{
                result.value = "error";
            }
        });
    }else if(key.innerHTML === "AC"){
        key.addEventListener("click",()=>{
            result.value = "";
        });
    }else if(key.innerHTML === "DEL"){
        key.addEventListener("click",()=>{
            result.value = result.value.slice(0,-1);
        });
    }else{
        key.addEventListener("click",()=>{
            result.value += key.innerHTML;
        });
    }
}
