!function e(){let t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)});if(!document.getElementById(t)){let x=document.createElement("div");x.id=t,x.style.position="fixed",x.style.bottom="20px",x.style.right="20px",x.style.zIndex="9999",document.body.appendChild(x)}let o=console.log;console.log=function(...e){!function e(x){"string"!=typeof x&&(x=x.toString(),l.style.color="#fde68a"),"object"==typeof x&&(x=JSON.stringify(x));let o=document.getElementById(t),l=document.createElement("div");l.style.backgroundColor="rgba(0, 0, 0, 0.7)",l.style.color="white",l.style.padding="10px 20px",l.style.marginTop="10px",l.style.borderRadius="5px",l.style.boxShadow="0px 2px 6px rgba(0, 0, 0, 0.3)",l.style.animation="fadeInOut 4s forwards",l.textContent=x,o.appendChild(l),setTimeout(()=>{o.removeChild(l)},4e3)}(e.join(" ")),o.apply(console,e)}}();
