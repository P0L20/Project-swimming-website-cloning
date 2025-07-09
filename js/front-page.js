
const reviews = [{
  star: 5,
  name: 'Samantha from Wheat Ridge, CO',
  comment: 'Awesome app for finding private swimmming pools. Super easy and fun!'
}, {
  star: 5,
  name: 'Vicmary from Winter Haven, FL',
  comment: 'Perfect for finding spots for celebrations and gatherings. Highly recommend!'
}, {
  star: 5,
  name: 'Cassie from Houston, TX',
  comment: `Used it for my daughter's birthday—great host, big pool, trampoline, privacy. Will book again!`
}];
let reviewHTML = '';

reviews.forEach((review) => {
  reviewHTML += 
      `<div class="review">
        <div class="star">⭐⭐⭐⭐⭐</div>
        <p class="name">${review.name}</p>
        <p class="comment">${review.comment}</p>
      </div>`
});

document.querySelector('.js-review-container')
  .innerHTML = reviewHTML;
  
const personOffers = [{
  image: 'pictures/family.png',
  text: 'Family swims'
}, {
  image: 'pictures/frieds.png',
  text: 'Pool parties'
}, {
  image: 'pictures/solo.png',
  text: 'Solo self care days'
}, {
  image: 'pictures/pool.png',
  text: '$50 budget fun'
}, {
  image: 'pictures/night.png',
  text: 'Night swims'
}, {
  image: 'pictures/pregnant.png',
  text: 'Photo shoots'
}];

let personOffersHTML = ''

personOffers.forEach((personOffer) => {
  personOffersHTML += 
          `<div class="image-container">
            <img class="picture-person-offer" src="${personOffer.image}" alt="picture of family">
            <p>${personOffer.text}</p>
          </div>`
});

document.querySelector('.js-person-offer')
  .innerHTML = personOffersHTML;

//signup
let signUpCondition = true;

document.querySelector('.js-sign-up')
  .addEventListener('click', () => {
    const container = document.querySelector('.sign-up-container');
    if (signUpCondition) {
      container.classList.add('sign-up-opacity-t');
    } else {
      container.classList.remove('sign-up-opacity-t');
    }
    
    signUpCondition = !signUpCondition;
  });

//more than just pools 

