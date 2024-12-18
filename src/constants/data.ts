import icons from './icons';
import images from './images';
import { FeaturesTypes, ProductTypes, SplashTypes, TabBarTypes } from './types';
// random number between 1 to 1000 :)
const randomNumber = () => Math.floor(Math.random() * 1000) + 1;
// set the random number to the URL
const randomImage = (): string =>
  `https://picsum.photos/${Math.floor(Math.random() * 1000) + 1}/${Math.floor(Math.random() * 1000) + 1}`;

const breadImages = [
  'https://file.hstatic.net/200000876585/file/banh-mi_a72c6378d380481e8bca31de79499778.png',
  'https://file.hstatic.net/200000876585/file/banh-mi_a72c6378d380481e8bca31de79499778.png',
  'https://file.hstatic.net/200000876585/file/banh-mi_a72c6378d380481e8bca31de79499778.png',
  'https://file.hstatic.net/200000876585/file/banh-mi_a72c6378d380481e8bca31de79499778.png',
  'https://file.hstatic.net/200000876585/file/banh-mi-pho-mai_59a318798bdd4b2493ff4435adf51498.png',
  'https://file.hstatic.net/200000876585/file/banh-mi-pho-mai_59a318798bdd4b2493ff4435adf51498.png',
  'https://file.hstatic.net/200000876585/file/banh-mi-pho-mai_59a318798bdd4b2493ff4435adf51498.png',
  'https://file.hstatic.net/200000876585/file/banh-mi-pho-mai_59a318798bdd4b2493ff4435adf51498.png',
  'https://file.hstatic.net/200000876585/file/tiramiru_be4d9de5bf194f12ba63f2ff476012e2.png',
  'https://file.hstatic.net/200000876585/file/tiramiru_be4d9de5bf194f12ba63f2ff476012e2.png',
  'https://file.hstatic.net/200000876585/file/tiramiru_be4d9de5bf194f12ba63f2ff476012e2.png',
  'https://file.hstatic.net/200000876585/file/tiramiru_be4d9de5bf194f12ba63f2ff476012e2.png',
];
const randomNumberBread = (min = 1, max = 1000) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randombreadImages = (): string => breadImages[randomNumberBread(0, breadImages.length - 1)];

const SplashData: SplashTypes[] = [
  {
    image: images.splash1,
    title: 'Choose your meal',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    image: images.splash2,
    title: 'Make Payment',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    image: images.splash3,
    title: 'Get Your Order',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];
const CategoriesData: FeaturesTypes[] = [
  {
    image: randomImage(),
    title: 'Fried chicken',
  },
  {
    image: randomImage(),
    title: 'Chips',
  },
  {
    image: randomImage(),
    title: 'Rice',
  },
  {
    image: randomImage(),
    title: 'Kids',
  },
  {
    image: randomImage(),
    title: 'Pizza',
  },
];

// Random Title
const titles = [
  'Women Printed Kurta',
  'HRX by Hrithik Roshan',
  "IWC Schaffhausen 2021 Pilot's Watch",
  'Labbin White Sneakers',
  'Black Winter Jacket',
  'Mens Starry Printed Shirt',
  'Black Dress',
  'Pink Embroidered Dress',
  'Realme 7',
  'Black Jacket',
  'D7200 Digital Camera',
  "Men's & Boys Formal Shoes",
];

const randomTitle = (): string => titles[Math.floor(Math.random() * titles.length)];

const randomPrice = (): number => parseFloat((Math.floor(Math.random() * 5000) + 500).toFixed(2));

const randomPriceBeforeDeal = (): number =>
  parseFloat((randomPrice() + (Math.floor(Math.random() * 1000) + 100)).toFixed(2));

const randomPriceOff = (price: number, priceBeforeDeal: number): string =>
  ((1 - price / priceBeforeDeal) * 100).toFixed(2);

const randomStars = (): number => Math.random() * 5;

const randomNumberOfReview = (): number => Math.floor(Math.random() * 10000);

const ProductData: ProductTypes[] = Array.from({ length: 15 }, (): ProductTypes => {
  const price = randomPrice();
  const priceBeforeDeal = randomPriceBeforeDeal();
  return {
    image: randombreadImages(),
    title: randomTitle(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: price,
    priceBeforeDeal: priceBeforeDeal,
    priceOff: randomPriceOff(price, priceBeforeDeal),
    stars: randomStars(),
    numberOfReview: randomNumberOfReview(),
  };
});
/**

 */
// TabBar data
const tabName = ['Home', 'Wishlist', 'Cart', 'Search', 'Setting'];
const TabBarData: TabBarTypes[] = [
  {
    title: tabName[0],
    image: icons.home,
    link: tabName[0],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[1],
    image: icons.home,
    link: tabName[1],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[2],
    image: icons.home,
    link: tabName[2],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
    inActiveBGColor: '#FFFFFF',
    activeBGColor: '#EB3030',
  },
  {
    title: tabName[3],
    image: icons.home,
    link: tabName[3],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
  {
    title: tabName[4],
    image: icons.home,
    link: tabName[4],
    inActiveColor: '#000000',
    activeColor: '#EB3030',
  },
];

export { TabBarData, ProductData, CategoriesData, SplashData };
