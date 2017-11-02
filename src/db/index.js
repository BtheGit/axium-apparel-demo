import imgPrimary from '../images/tough-mojo-jacket-img1.png';
import imgDetail from '../images/tough-mojo-jacket-img2.png';
import imgAvatar1 from '../images/reviewer1.png';
import imgAvatar2 from '../images/reviewer2.png';

const products = {
  1: {
    name: "Tough Mojo Jacket\xAE",
    category: "Clothing",
    subCategory: "Outerwear",
    features: [
      '300 Grams of Primaloft\xAE One insulation',
      'Schoeller\xAE microfiber shell',
      'Diagonal quilting',
      'Microfiber ripstop liner',
      'Zipper garage at collar',
      'Achored bottom-hem adjusters',
      '3-in-1 front pockets',
      'Zippered chest pocket',
      'Two interior zippered pockets',
      'Made in the Philippines'
    ],
    primaryImage: imgPrimary,
    detailImage: imgDetail,
    description: `Our most insulated jacket to date, the city-styled Highline is designed to keep you warm during the deep freeze of winter.\nWith 300 grams of PrimaLoft\xAE ONE insulation, the Highline offers incredible heat retention while remaining form fitting and low volume -- essentially all the warmth of a puffer jacket without all the puff. Its outer shell is made from a water-resistant Schoeller\xAE microfiber fabric that has been diagnoally quilted, while its inside liner is made from a silky-sift microfiber ripstop nylon.\nThe Highline features a zipper garage to prevent a cold metal zipper from pressing against your neck, non-quilted side panels and underarms for a sleeker fit, and anchored bottom-hem adjusters for a snug fit. It has two uniquely designed 3-in-1 front pockets, which include a top-zippered entrance, a drop pocket with donut snap, and a side hand-warmer. Additional storage can be found in its exterior chest pocket and two interior zippered pockets.`,
    reviews: [
      {
        name: 'Shaun White',
        avatar: imgAvatar1,
        rating: 4,
        title: 'This Thing is a monster!',
        date: '8/20/2013',
        body: `I picked up this jacket for use in San Francisco and the surrounding Bay Area (lake Tahoe included). I use this jacket for everything. It is often cloudy/drizzly/cold in SF and this jacket deals with it all. I have not tried it in heavy rain, but in drizzly conditions, the DWR treatment definitely makes small drops bead right off. It also has a nice fleece0life liner inside and keeps me really warm down to 40 defrees or so. In Tahoe, I have used this with a shirt or base layer, mid layer fleece, and then this jacket. I don't get cold too easily but in temps 20's - 30's I felt great (with som gloves and a beanie of course). I have not tried it skiing yet because I snowboard and to be honest it wouldn't be quite large enough (I like baggier snowboard clothing). But I have seen people who wear softshells skiing all the time. I also use this when I go to work and want a jacket that dresses up nice. With slacks, nice shoes, and a button up it looks great. I am 6' and about 190 lbs (34 in arms) and the large fits perfect. The pockets are well designed as well. The soft shell is the new 'do-everything' jacket: wind/water resistant but also maleable and comfy for wearing anywhere. I highly recommend this jacket.`
      },
      {
        name: 'Jennie Loren',
        avatar: imgAvatar2,
        rating: 3,
        title: 'Luv it so much I bought 2!',
        date: '01/12/2013',
        body: `Loved this jacket so much from previous years I decided to buy a second in a different color. I'm tall and fairly slender and its tailored silhouette fits me nicely. For perspective I'm around 6'3" -150 lbs. and a large does the trick. I'll wear this for all of fall and into the winter. Despite not being bulky or baggy I find it goof and warm for anything down to 40 degrees and oerhaos lower if you're keeping up on your layering. For weather at freezing or below you should consider something heavier.`
      }
    ]
  }
}

export default products;