// curseur planete _ boutons navbar

let deployer = false;

document.getElementById('left').addEventListener('click', function () {
    let mymenu = document.querySelector('nav ul');
    if (!deployer) {
        mymenu.style.top = '100%';
        mymenu.style.animation = 'descente .5s linear';
        mymenu.style.animationIterationCount = '1';
        deployer = true;
    } else {
        mymenu.style.top = '-600%';
        mymenu.style.animation = 'remontee .5s linear';
        mymenu.style.animationIterationCount = '1';
        deployer = false;
    }
});

