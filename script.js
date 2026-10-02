const PASSWORD="2008";
const lockScreen=document.getElementById("lockScreen");
const messageScreen=document.getElementById("messageScreen");
const safeCard=document.getElementById("safeCard");
const display=document.getElementById("display");
const error=document.getElementById("error");
const clearBtn=document.getElementById("clearBtn");
const enterBtn=document.getElementById("enterBtn");
const backBtn=document.getElementById("backBtn");
let enteredCode="";
function updateDisplay(){display.textContent=enteredCode.length?"•".repeat(enteredCode.length):"••••"}
function addNumber(n){if(enteredCode.length>=4)return;enteredCode+=n;error.textContent="";updateDisplay()}
function clearCode(){enteredCode=enteredCode.slice(0,-1);error.textContent="";updateDisplay()}
function createUnlockHearts(){for(let i=0;i<18;i++){setTimeout(()=>{const h=document.createElement("span");h.className="unlock-heart";h.textContent=i%3===0?"♡":"♥";h.style.setProperty("--x",`${Math.random()*360-180}px`);h.style.setProperty("--y",`${Math.random()*360-180}px`);document.body.appendChild(h);setTimeout(()=>h.remove(),1500)},i*45)}}
function checkCode(){if(enteredCode===PASSWORD){error.textContent="";safeCard.classList.add("unlocking");createUnlockHearts();setTimeout(()=>{lockScreen.classList.remove("active");messageScreen.classList.add("active");safeCard.classList.remove("unlocking");enteredCode="";updateDisplay()},850)}else{error.textContent="الرقم مش صحيح... حاولي تاني ❤️";display.classList.remove("shake");void display.offsetWidth;display.classList.add("shake");enteredCode="";updateDisplay()}}
document.querySelectorAll(".key[data-number]").forEach(b=>b.addEventListener("click",()=>addNumber(b.dataset.number)));
clearBtn.addEventListener("click",clearCode);enterBtn.addEventListener("click",checkCode);
backBtn.addEventListener("click",()=>{messageScreen.classList.remove("active");lockScreen.classList.add("active")});
document.addEventListener("keydown",e=>{if(/^[0-9]$/.test(e.key))addNumber(e.key);if(e.key==="Backspace")clearCode();if(e.key==="Enter")checkCode()});
function createHeart(){const h=document.createElement("span");h.className="heart";h.textContent=Math.random()>.25?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.fontSize=14+Math.random()*26+"px";h.style.animationDuration=5+Math.random()*6+"s";document.querySelector(".hearts").appendChild(h);setTimeout(()=>h.remove(),12000)}
setInterval(createHeart,450);for(let i=0;i<10;i++)setTimeout(createHeart,i*180);updateDisplay();