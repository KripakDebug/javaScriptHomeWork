let btn = document.querySelector('.btn');
let light = document.getElementsByClassName('light');
let i = -1;

btn.addEventListener('click', () => {
    i++;
    let arr = ['red','yellow','green'];
    if(light[i-1]){
        light[i-1].style.backgroundColor = '';
    }
    if(i == arr.length){
        i=0;
    }
    light[i].style.backgroundColor = arr[i];
});
