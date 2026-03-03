let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newbtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let trunO=true;
const winingPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunO){
            box.innerText="O";
            trunO=false;
        }else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const checkwinner=()=>{
    for(let pattern of winingPattern){
        let ptrn1=boxes[pattern[0]].innerText;
        let ptrn2=boxes[pattern[1]].innerText;
        let ptrn3=boxes[pattern[2]].innerText;
        

        if(ptrn1 !="" && ptrn2!="" && ptrn3!=""){
            if(ptrn1===ptrn2 && ptrn1===ptrn3){
                
                showWinner(ptrn1);
            }
        }
    }
}

const dis=()=>{
 for(let box of boxes){
    box.disabled=true;
 }
}
const enable=()=>{
 for(let box of boxes){
    box.disabled=false;
    box.innerText="";
 }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulation winner is  ${winner} `;
    msgcontainer.classList.remove("hide");
    dis();
}

const reset=()=>{
    trunO=true;
    enable();
    msgcontainer.classList.add("hide");
}
resetbtn.addEventListener("click",reset);
newbtn.addEventListener("click",reset);
