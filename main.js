document.getElementById('Shanghai').onclick = ShanghaiPic
document.getElementById('NewYork').onclick = NewYorkPic
document.getElementById('Berlin').onclick = BerlinPic
document.getElementById('Sydney').onclick = SydneyPic
document.getElementById('MexicoCity').onclick = MexicoCityPic

function ShanghaiPic () {
    document.querySelector('body').style.backgroundImage = "url(shanghai.gif)"
    document.querySelector('body').style.color = 'white'
}

function NewYorkPic () {
    document.querySelector('body').style.backgroundImage = "url(newyork.gif)"
    document.querySelector('body').style.color = 'white'
}

function BerlinPic () {
    document.querySelector('body').style.backgroundImage = "url(berlin.gif)"
    document.querySelector('body').style.color = 'white'
}

function SydneyPic () {
    document.querySelector('body').style.backgroundImage = "url(sydney.gif)"
    document.querySelector('body').style.color = 'white'
}

function MexicoCityPic () {
    document.querySelector('body').style.backgroundImage = "url(mexicocity.gif)"
    document.querySelector('body').style.backgroundImage = 'white'
}