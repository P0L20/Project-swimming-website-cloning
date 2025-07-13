//different offers array

export const offerWantArray = [{
  pools: {
    find: 'pool',
    backgroundColor: 'rgb(0, 178, 255)',
    iWant: 'Pools',
    videoBackground: `<video autoplay loop muted playsinline class="video">
          <source src="mobile-pool.webm" type="video/webm" >
          <source src="mobile-pool.webm" type="video/mp4" media="(max-width: 768px)">
          <source src="mobile-pool.webm" type="video/mp4">
          Your browser doesn't support HTML5 video.
        </video>`
  }
}, {
  tennis: {
    find: 'court',
    backgroundColor: 'rgb(0, 175, 84)',
    iWant: 'Tennis Court',
    background: 'pictures/tennis-pic.jpg'
  }
}, {
  pickleball: {
    find: 'court',
    backgroundColor: 'rgb(0, 83, 142)',
    iWant: 'Pickleball Court',
    background: 'pictures/pickleball-pic.jpg'
  }
}, {
  hoops: {
    find: 'court',
    backgroundColor: 'rgb(248, 104, 72)',
    iWant: 'Hoops',
    background: 'pictures/hoops-pic.jpg'
  }
}, {
  homes: {
    find: 'House',
    backgroundColor: 'rgb(230, 50, 126)',
    iWant: 'Entire Homes',
    background: 'pictures/homes-pic.jpg'
  }
}, {
  pet: {
    find: 'Pet Parks',
    backgroundColor: 'rgb(0, 175, 84)',
    iWant: 'Pet parks',
    background: 'pictures/pets-pic.jpg'
  }
}];

export const reviews = [{
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

export const personOffers = [{
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

export const diffOfferArray = [{
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
