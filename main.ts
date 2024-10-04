let dev = document.getElementById('custom') as HTMLButtonElement;

let customprojects = () =>{
    const boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        const box = (boxes[i] as HTMLElement);
        box.style.display = 'block'
        box.offsetHeight;
        box.style.opacity = '1';
    }

    const boxes2 = document.getElementsByClassName('box2');
    for (let i = 0; i < boxes2.length; i++) {
        const box = (boxes2[i] as HTMLElement)
        box.style.opacity = '0';
        box.style.display = 'none';
        box.classList.remove('show');}
}
dev.addEventListener('click',customprojects)
window.addEventListener('load',customprojects)

let commandline = document.getElementById('cli') as HTMLButtonElement;

let cliprojects = () =>{
    const boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        const box = (boxes[i] as HTMLElement)
        box.style.opacity = '0';
        box.style.display = 'none';
        box.classList.remove('show');
}
const boxes2 = document.getElementsByClassName('box2');
for (let i = 0; i < boxes2.length; i++) {
    const box2 = (boxes2[i] as HTMLElement);
    box2.style.display = 'block'
    box2.offsetHeight;
    box2.style.opacity = '1';
}
}

commandline.addEventListener('click',cliprojects)

let all = document.getElementById('all') as HTMLButtonElement;

let showallprojects = () =>{
    const boxes = document.getElementsByClassName('box');
    const boxes2 = document.getElementsByClassName('box2');
    for (let i = 0; i < boxes.length; i++) {
        const box = (boxes[i] as HTMLElement)
        box.style.opacity = '0';
        box.style.display = 'block';
        box.offsetHeight;
        box.style.opacity = '1';
        box.classList.remove('show');
}
    for (let i = 0; i < boxes2.length; i++) {
    const box2 = (boxes2[i] as HTMLElement)
        box2.style.opacity = '0';
        box2.style.display = 'block';
        box2.offsetHeight;
        box2.style.opacity = '1';
        box2.classList.remove('show');
    }
}

all.addEventListener('click',showallprojects)