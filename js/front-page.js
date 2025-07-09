
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
  text: 'Family swims',
  icon: '🏡'
}, {
  image: 'pictures/frieds.png',
  text: 'Pool parties',
  icon: '🥳'
}, {
  image: 'pictures/solo.png',
  text: 'Solo self care days',
  icon: '🧖'
}, {
  image: 'pictures/pool.png',
  text: '$50 budget fun',
  icon: '🤑'
}, {
  image: 'pictures/night.png',
  text: 'Night swims',
  icon: '✨'
}, {
  image: 'pictures/pregnant.png',
  text: 'Photo shoots',
  icon: '📸'
}];

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

//diff offer

const diffOfferArray = [{
  pools: [{
    img: 'diff-offer-pictures/pool-1.png',
    name: 'Azure Springs Resort',
    discover: 'pools',
    place: 'Philippines',
    star: 671,
    price: 80
  },{
    name: 'Blue Lagoon Retreat',
    img: 'diff-offer-pictures/pool-2.png',
    discover: 'pools',
    place: 'Japan',
    star: 457,
    price: 80
  }]
}, {
  tennis: [{
    img: 'diff-offer-pictures/tennis-1.png',
    name: 'Tennis Court. Villa',
    discover: 'court',
    place: 'Los Angeles',
    star: 27,
    price: 27
  },{
    img: 'diff-offer-pictures/tennis-2.png',
    name: 'Tennis Oasis',
    discover: 'court',
    place: 'Los Angeles',
    star: 8,
    price: 25
  }]
}, {
  pickleball: [{
    img: 'diff-offer-pictures/pickleball-1.png',
    name: 'Private Pickleball Paradise In San Diego',
    discover: 'court',
    place: 'San Diego',
    star: 14,
    price: 35
  }, {
    img: 'diff-offer-pictures/pickleball-2.png',
    name: 'Gorgeous Pickleball Court',
    discover: 'court',
    place: 'Los Angeles',
    star: 18,
    price: 38
  }]
}, {
  hoops: [{
    img: 'diff-offer-pictures/bball-1.png',
    name: 'Beutifully Surfaced Basketball Half-Court',
    discover: 'court',
    place: 'Los Angeles',
    star: 1,
    price: 80
  }, {
    img: 'diff-offer-pictures/bball-2.png',
    name: 'Ballers Paradise!',
    discover: 'court',
    place: 'Vaughan',
    star: 1,
    price: 50
  }]
}, {
  indoor: [{
    img: 'diff-offer-pictures/indoor-1.png',
    name: 'Ranch-style La Designer Retreat',
    discover: 'home',
    place: 'Los Angeles',
    star: 1,
    price: 250
  }, {
    img: 'diff-offer-pictures/indoor-2.png',
    name: 'The Temple Hill One',
    discover: 'home',
    place: 'Los Angeles',
    star: 4,
    price: 1299
  }]
}, {
  backyards: [{
    img: 'diff-offer-pictures/backyard-1.png',
    name: 'Luxurious yard',
    discover: 'backyards',
    place: 'San Diego',
    star: 4,
    price: 12000
  }, {
    img: 'diff-offer-pictures/backyard-2.png',
    name: 'Diola Hill',
    discover: 'backyards',
    place: 'Los Angeles',
    star: 189,
    price: 30000
  }]
}];

document.querySelectorAll('.js-button')
  .forEach(button => {
    button.addEventListener('click', (event) => {
      const option = event.currentTarget.dataset.option;
      console.log(button)
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