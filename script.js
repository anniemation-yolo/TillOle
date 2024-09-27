const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0', 
        width: '0',
        videoId: 'v3_xIahrt_I', 
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
}

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Annie älskar Ole också!😘";
    gif.src = "https://i.giphy.com/media/61WzwoIxiOQ3e6Y7s2/giphy.gif";

    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    player.playVideo();
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const yesBtnRect = yesBtn.getBoundingClientRect();

    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    let randomX, randomY;
    let overlap = true;
    let attempts = 0; 

    while (overlap && attempts < 100) {
        attempts++;

        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);

        const newNoBtnRect = {
            left: randomX,
            right: randomX + noBtnRect.width,
            top: randomY,
            bottom: randomY + noBtnRect.height
        };

        if (
            newNoBtnRect.right < yesBtnRect.left ||
            newNoBtnRect.left > yesBtnRect.right ||
            newNoBtnRect.bottom < yesBtnRect.top ||
            newNoBtnRect.top > yesBtnRect.bottom
        ) {

            overlap = false;
        }
    }

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
