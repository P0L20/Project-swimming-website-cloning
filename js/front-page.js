import { signUp } from "./sign-up.js";
import { diffOfferArray, personOffers, reviewsGuest, reviewsHosts, offerWantArray } from "./arrays-data.js";

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const hosts = document.querySelector('.bHost');
  const signUp = document.querySelector('.sign-up');
  if(window.scrollY > 50) {
    header.classList.add('scrolled');
    hosts.classList.add('scrolled-hosts');
    signUp.classList.add('scrolled-sign-up');
    header.classList.remove('header-trans');
  } else {
    header.classList.remove('scrolled');
    hosts.classList.remove('scrolled-hosts');
    signUp.classList.remove('scrolled-sign-up');
    header.classList.add('header-trans');
  }
});

//signup
signUp();

//for searching offer (I want to...)
const want = document.querySelector('.mid-search-left');
const searchWant = document.querySelector('.search-want');
let searchWantChoice = true;

want.addEventListener('click', () => {
  if (searchWantChoice) {
  searchWant.classList.add('opacity-search-want')
  } else {
  searchWant.classList.remove('opacity-search-want')
  }
  searchWantChoice = !searchWantChoice;
})

//for interactivity of searching diff offer 
const styleBgShowcase = document.querySelector('.showcase-container');
const findX = document.querySelector('.fPool');
const iWant = document.querySelector('.data-label');
const searchIcon = document.querySelector('.search-button');
const containerBackground = document.querySelector('.video-container');
const rent = document.querySelector('.text-offer');
const offerWant = document.querySelectorAll('.offer-want');

offerWant.forEach((offer) => {
    offer.addEventListener('click', (event) => {
        const dataWant = event.currentTarget.dataset.want;

        offerWantArray.forEach((offerWant) => {
        const offers = Object.keys(offerWant)[0];
        if(dataWant === offers) {
          styleBgShowcase.style.backgroundColor = `${offerWant[offers].backgroundColor}`;
          findX.innerHTML = `Find a ${offerWant[offers].find}`;
          findX.style.backgroundColor = `${offerWant[offers].backgroundColor}`
          iWant.innerHTML = `${offerWant[offers].iWant}`;
          searchIcon.style.backgroundColor = `${offerWant[offers].backgroundColor}`;
          rent.innerHTML = `Rent ${offerWant[offers].rent}, by the hour`;
          if(offerWant[offers].find === 'pool') {
            containerBackground.innerHTML = offerWant[offers].videoBackground;
          } else {
            containerBackground.innerHTML =  `<img class="video" src="${offerWant[offers].background}">`;
          }

          }
        });
    })
})

//reviews
const guestButton = document.querySelector('.guest-button');
const hostsButton = document.querySelector('.hosts-button');
const choiceType = document.querySelectorAll('.choice-button');

choiceType.forEach((choice) => {
  choice.addEventListener('click', (event) => {
    const choiceData = event.currentTarget.dataset.choiceType;
    if(choiceData === 'reviewsGuests') {
      let choice = reviewsGuest;
      reviews(choice);
      guestButton.classList.add('guest-button');
      guestButton.classList.remove('hosts-button');
      hostsButton.classList.add('hosts-button');
    } else {
      let choice = reviewsHosts;
      reviews(choice);
      hostsButton.classList.add('guest-button');
      hostsButton.classList.remove('hosts-button');
      guestButton.classList.add('hosts-button');
    }
  })
})
reviews(reviewsGuest);

function reviews(reviewType) {
  let reviewHTML = '';

      reviewType.forEach((review) => {
        reviewHTML += 
            `<div class="review">
              <div class="star">⭐⭐⭐⭐⭐</div>
              <p class="name">${review.name}</p>
              <p class="comment">${review.comment}</p>
            </div>`
      });

      document.querySelector('.js-review-container')
        .innerHTML = reviewHTML;
}

          
//person offers (family swims...)
let personOffersHTML = ''

personOffers.forEach((personOffer) => {
  personOffersHTML += 
          `<div class="image-container">
            <img class="picture-person-offer" src="${personOffer.image}" alt="picture of family">
            <div>
              <p>${personOffer.icon}</p>
              <p>${personOffer.text}</p>
            </div>
          </div>`
});

document.querySelector('.js-person-offer')
  .innerHTML = personOffersHTML;

//different offers
document.querySelectorAll('.js-button')
  .forEach(button => {
    button.addEventListener('click', (event) => {
      const option = event.currentTarget.dataset.option;
      document.querySelectorAll('.js-button')
        .forEach(button => {
          button.classList.remove('make-blue');
        })
      document.querySelector(`.${option}`)
        .classList.add('make-blue');
        
      let renderHTML = '';

      diffOfferArray.forEach(offer => {
        const category = Object.keys(offer)[0];
        if(category === option) {
          offer[category].forEach(key => {
            document.querySelector('.js-discover-button')
              .innerHTML = `Discover ${key.discover} near me`
            renderHTML += renderOffer(key);
          })
        }
      });
        document.querySelector('.picture-offer')
          .innerHTML = renderHTML;
    });
  });

function renderOffer(option) {
  return `
  <div class="pool-container transition">
      <img src="${option.img}"x>
      <p class="name-pool">${option.name}</p>
      <p class="place">
        <i class="fa-solid fa-map-pin"></i>
        ${option.place}
      </p>
      <p class="stars">
        
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        (${option.star})
      </p>
      <p class="price">$${option.price}/hr</p>
    </div>
  `
}