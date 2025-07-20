import { hostingPic } from "./arrays-data-hosting.js";
import { signUp } from "./sign-up.js";

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const offers = document.querySelectorAll('.offer');
  const signUp = document.querySelector('.sign-up');
  if(window.scrollY > 50) {
    header.classList.add('scrolled');
    offers.forEach(offer => {
      offer.classList.add('scrolled-offer');
    });
    signUp.classList.add('scrolled-sign-up-hosting');
    header.classList.remove('header-hosting-trans');
  } else {
    header.classList.remove('scrolled');
    offers.forEach(offer => {
    offer.classList.remove('scrolled-offer');
    });
    signUp.classList.remove('scrolled-sign-up-hosting');
    header.classList.add('header-hosting-trans');
  }
});

signUp();

const hostingData = hostingPic;

hostingPic.forEach(hosting => {
  const host = Object.keys(hosting)[0];
})

const buttonOffers = document.querySelectorAll('.offer');

buttonOffers.forEach(buttonOffer => {
  buttonOffer.addEventListener('click', () => {
    const dataName = buttonOffer.dataset.nameOffer;
    renderHero(dataName, dataName);

    buttonOffers.forEach(buttons => {
      hostingData.forEach(data => {
          const dataName = Object.keys(data)[0];
          buttons.classList.remove(data[dataName].color);
      })
    })

    hostingData.forEach(data => {
      if(Object.keys(data)[0] === dataName) {
        buttonOffer.classList.add(data[dataName].color);
      }
    });
  })
});

function renderHero(typePicture, dataName) {
  const frontPage = document.querySelector('.container-front-page');
  let heroHTML = '';

  hostingPic.forEach(hosting => {
    const host = Object.keys(hosting)[0];

    if (host === typePicture) {
      heroHTML += `<div class="container-text-front">
          <p>Earn $6,000+/mo ${hosting[host].earnText}</p>
          <p>${hosting[host].lowerText}</p>
          <button class="get-started">Get Started</button>
        </div>
        <img class="pool-hosting-picture" src="${hosting[host].img}">`;
    }
  })
  
  frontPage.innerHTML = heroHTML;

  hostingData.forEach(data => {
    if(Object.keys(data)[0] === dataName) {
    const getStarted = document.querySelector('.get-started');
    getStarted.style.backgroundColor = `${data[dataName].colorElements}`;
    }
  })
  
}