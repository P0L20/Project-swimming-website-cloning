import { hostingPic } from "./arrays-data-hosting.js";

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

hostingPic.forEach(hosting => {
  const host = Object.keys(hosting)[0];
})

const buttonOffers = document.querySelectorAll('.offer');

buttonOffers.forEach(buttonOffer => {
  buttonOffer.addEventListener('click', () => {
    const dataName = buttonOffer.dataset.nameOffer;
    renderHero(dataName);
  })
});

function renderHero(typePicture) {
  const frontPage = document.querySelector('.container-front-page');
  let heroHTML = '';

  hostingPic.forEach(hosting => {
    const host = Object.keys(hosting)[0];

    if (host === typePicture) {
      heroHTML += `<img class="pool-hosting-picture" src="${hosting[host].img}">`;
    }
  })
  
  frontPage.innerHTML = heroHTML;
}