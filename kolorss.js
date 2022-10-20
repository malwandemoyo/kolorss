
const btn = document.querySelector('#generator')
let color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex')
const rgb = document.querySelectorAll('.rgb')
let lockbtn = document.querySelectorAll(".lock-toggle")

let unlocked = '<img src="icons/lock-open.svg">';
let locked = '<img src="icons/lock-closed.svg">';

btn.addEventListener('click', generateColors);

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
    }
    throw new Error('Bad Hex');
}

function generateColors(){
    for(let i =0; i<color.length; i++){

        if(color[i].childNodes[1].innerHTML == unlocked){
            const randomColor = Math.floor(Math.random()*12482382).toString(16);
            color[i].style.background = "#" + randomColor;
            color[i].classList.add('fade-in');
            setTimeout(() => color[i].classList.remove('fade-in'), 400)
            hex[i].innerHTML = `#${randomColor.toUpperCase()}`;
            //let colorName = hexToRgbA(`#${randomColor}`);
            rgb[i].innerHTML = hexToRgbA(`#${randomColor}`);
        }

        else{
        }
    }
}


function toggleLock(){
    classes = [...this.classList]
    
    if(classes.length == 2){
        this.classList.remove("is-locked")
        this.innerHTML = unlocked;
    }
    else if(classes.length == 1){
        this.classList.add("is-locked")
        this.innerHTML = locked;
    
    }     
}

lockbtn.forEach(btn =>{
    btn.addEventListener('click', toggleLock)
})

document.addEventListener('keyup', (event) => {
    let code = event.code;
    if (code === 'Space') {
        generateColors()
    }
  }, false);


document.addEventListener("DOMContentLoaded", ()=>{
    generateColors()
});

generateColors()

// const plus = document.querySelector("#plus")
// const minus = document.querySelector("#minus")

// minus.addEventListener('click', minusColor)
// plus.addEventListener('click', addColor)

// function minusColor(){

//     child1.appendChild(template)
// }

// function addColor(){
//     child1.innerHTML += template
//     generateColors()
// }