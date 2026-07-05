// ===== PARTICLES =====
for(let i=0;i<25;i++){
    let p = document.createElement("div");
    p.style.position = "fixed";
    p.style.width = "6px";
    p.style.height = "6px";
    p.style.background = "white";
    p.style.borderRadius = "50%";
    p.style.boxShadow = "0 0 10px cyan";
    p.style.left = Math.random()*100 + "vw";
    p.style.top = "100vh";
    p.style.animation = `floatUp ${(3+Math.random()*3)}s linear infinite`;
    document.body.appendChild(p);
}

// particle animation style
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp{
    0%{transform:translateY(0); opacity:0;}
    30%{opacity:1;}
    100%{transform:translateY(-120vh); opacity:0;}
}`;
document.head.appendChild(style);


// ===== START EFFECT =====
function start(){
    const audio = document.getElementById("bgm");
    const card = document.querySelector(".card");
    const flash = document.querySelector(".flash");

    audio.play();

    document.querySelector("button").style.display = "none";

    // beat effect
    setInterval(()=>{
        card.animate([
            {transform:"scale(1)"},
            {transform:"scale(1.05)"},
            {transform:"scale(1)"}
        ],{
            duration:200
        });

        // flash like capcut cut
        flash.style.opacity = 0.25;
        setTimeout(()=>flash.style.opacity=0,80);

    },600);
}


// ===== TYPE TEXT EFFECT =====
const text = "MUKA LU KAYA 😎🔥";
let i = 0;
const cap = document.querySelector(".caption");
cap.innerHTML = "";

function type(){
    if(i < text.length){
        cap.innerHTML += text[i];
        i++;
        setTimeout(type,60);
    }
}
type();
