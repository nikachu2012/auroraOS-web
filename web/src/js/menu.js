let isMenuOpened = false;

const menuOpen = () => {
    if (isMenuOpened) {
        document.querySelector('.menu').style.visibility = 'hidden'
        isMenuOpened = false;
    }
    else {
        document.querySelector('.menu').style.visibility = 'visible'
        isMenuOpened = true;

        setTimeout(() => {
            document.body.addEventListener('click', () => {
                document.querySelector('.menu').style.visibility = 'hidden'
                isMenuOpened = false;
            }, { once: true })
        }, 10);
    }
}

document.querySelector('#button_menu').addEventListener('click', () => {
    menuOpen();
})

auroraOSConfig.app.forEach(element => {
    const adddiv = document.createElement('div')

    adddiv.className = 'menu-contents';
    adddiv.innerHTML = element;

    adddiv.onclick = () => {
        runSoftware(element);
    }
    document.querySelector('#applicationList').appendChild(adddiv);
});