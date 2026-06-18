const px = (base: string, w: number, h: number) =>
  `${base}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMAGES = {

  heroCards: [
    px("https://images.pexels.com/photos/36707708/pexels-photo-36707708.jpeg", 500, 800),
    px("https://images.pexels.com/photos/28160385/pexels-photo-28160385.jpeg", 500, 800),
    px("https://images.pexels.com/photos/35490114/pexels-photo-35490114.jpeg", 500, 800),
    px("https://images.pexels.com/photos/37297540/pexels-photo-37297540.jpeg", 500, 800),
    px("https://images.pexels.com/photos/37081059/pexels-photo-37081059.jpeg", 500, 800),
    px("https://images.pexels.com/photos/17952748/pexels-photo-17952748.jpeg", 500, 800),
    px("https://images.pexels.com/photos/36707697/pexels-photo-36707697.jpeg", 500, 800),
  ],

  bentoFood: px("https://images.pexels.com/photos/18805640/pexels-photo-18805640.jpeg", 900, 700),

  bentoGroceries: px("https://images.pexels.com/photos/8805170/pexels-photo-8805170.jpeg", 600, 500),
  bentoStores: px("https://images.pexels.com/photos/5498233/pexels-photo-5498233.jpeg", 600, 500),

  picks: [
    px("https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg", 240, 240),
    px("https://images.pexels.com/photos/20419328/pexels-photo-20419328.jpeg", 240, 240),
    px("https://images.pexels.com/photos/29306505/pexels-photo-29306505.jpeg", 240, 240),
    px("https://images.pexels.com/photos/35490114/pexels-photo-35490114.jpeg", 240, 240),
    px("https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg", 240, 240),
    px("https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg", 240, 240),
    px("https://images.pexels.com/photos/28402363/pexels-photo-28402363.jpeg", 240, 240),
  ],

  partnerRestaurant: px("https://images.pexels.com/photos/18756779/pexels-photo-18756779.jpeg", 800, 900),
  partnerRider: px("https://images.pexels.com/photos/31332062/pexels-photo-31332062.jpeg", 800, 900),
  partnerAmbassador: px("https://images.pexels.com/photos/34822059/pexels-photo-34822059.jpeg", 800, 900),

  businessHero: px("https://images.pexels.com/photos/18756779/pexels-photo-18756779.jpeg", 1100, 1300),

  ambassadorFaces: [
    px("https://images.pexels.com/photos/34822059/pexels-photo-34822059.jpeg", 240, 240),
    px("https://images.pexels.com/photos/31118299/pexels-photo-31118299.jpeg", 240, 240),
    px("https://images.pexels.com/photos/34822063/pexels-photo-34822063.jpeg", 240, 240),
    px("https://images.pexels.com/photos/35758948/pexels-photo-35758948.jpeg", 240, 240),
  ],
};
