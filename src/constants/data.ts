// import icons from './icons';
// import images from './images';
// import {FeaturesTypes, ProductTypes, restaurantCategoryParams, SplashTypes, TabBarTypes} from './types';
// // random number between 1 to 1000 :)
// const randomNumber = (min = 1, max = 1000) => Math.floor(Math.random() * (max - min + 1)) + min;

// const dishesImgs = [
//   'https://drive.google.com/uc?id=12yhW2a4fK_DVJA77oZ4GvIR-iIYAz3VH',
//   'https://drive.google.com/uc?id=1MLBs82EYoynMTX15-6gR0vRx0z3UygKx',
//   'https://drive.google.com/uc?id=1v6t4mCHj-I2q3Y7p4SvrIuEcfZFiM6-G',
//   'https://drive.google.com/uc?id=1mzPIZ0LiOPtyB_8sdxE7DP5SmkcFcS8h',
//   'https://drive.google.com/uc?id=1YLh1AQaQ45XhIJAgjdKtmfC2yVKSo7zw',
//   'https://drive.google.com/uc?id=1WRwYWI68W9PgK_3WJgx9LpuOo7vp3zmT',
//   'https://drive.google.com/uc?id=1vkFqhXKGcUzrD80KlDhy3g7GdZvmf-Rm',
// ];

// const randomDishesImgs = () : string => dishesImgs[randomNumber(0, dishesImgs.length -1)];

// const randomImage = (): string =>
//   `https://picsum.photos/${Math.floor(Math.random() * 1000) + 1}/${Math.floor(Math.random() * 1000) + 1}`;

// const SplashData: SplashTypes[] = [
//   {
//     image: images.splash1,
//     title: 'Hãy chọn món cho bạn',
//     description:
//       'Chúng tôi cung cấp vô vàn sự lựa chọn để đảm bảo bữa ăn của bạn luôn đa dạng và đầy đủ dinh dưỡng.',
//   },
//   {
//     image: images.splash2,
//     title: 'Thanh toán nhanh chóng',
//     description:
//       'Vô vàn phương thức thanh toán - Tích hợp với nhiều ngân hàng và ví điện tửtử.',
//   },
//   {
//     image: images.splash3,
//     title: 'Giao hàng tức khắc',
//     description:
//       'Chỉ với một nút bấm, sau 5 phút bữa ăn ngon lành nóng hổi sẽ ngay lập tức được giao đến bạn.',
//   },
// ];

// export const restuarantCategories:restaurantCategoryParams[] = [
//     {
//         "_id": "6537ece708ff5b7de97d0695",
//         "name": "Gà rán",
//         "imageUrl": require("../../assets/images/food/chicken-leg_821023.png"),
//     },
//     {
//         "_id": "65310f3381e4d98d60b093c5",
//         "name": "Cơm Jollof",
//         "imageUrl": require("../../assets/images/food/spice_3800322.png"),
//     },
//     {
//         "_id": "6531206cbbe4998e90af3feb",
//         "name": "Mì ống",
//         "imageUrl": require("../../assets/images/food/spaguetti.png"),
//     },
//     {
//         "_id": "6531209dbbe4998e90af3fef",
//         "name": "Burger",
//         "imageUrl": require("../../assets/images/food/burger.png"),

//     },
//     {
//         "_id": "653120babbe4998e90af3ff1",
//         "name": "Shawarma",
//         "imageUrl": require("../../assets/images/food/shawarma.png"),

//     },
//     {
//         "_id": "65312084bbe4998e90af3fed",
//         "name": "Món nướng",
//         "imageUrl": require("../../assets/images/food/barbecue.png"),
//     },
//     {
//         "_id": "65310efb81e4d98d60b093c3",
//         "name": "Pizza",
//         "imageUrl": require("../../assets/images/food/pizza.png"),
//     },
//     {
//         "_id": "653120e1bbe4998e90af3ff3",
//         "name": "Bữa sáng",
//         "imageUrl": require("../../assets/images/food/breakfast.png"),
//     }
// ]

// // Random Title
// const titles = [
//   'Chả giò',
//   'Bò kho',
//   'Mì Quảng',
//   'Bún bò',
//   'Phở bò',
//   'Chạo tôm',
//   'Bánh mì',
// ];

// const randomPrice = (): number => {
//   const min = 20000;
//   const max = 120000;
//   const step = 1000;
//   return Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
// };

// const randomPriceBeforeDeal = (): number =>
//   parseFloat(
//     (randomPrice() + (Math.floor(Math.random() * 1000) + 100)).toFixed(2),
//   );

// const randomPriceOff = (price: number, priceBeforeDeal: number): string =>
//   ((1 - price / priceBeforeDeal) * 100).toFixed(2);

// const ProductData: ProductTypes[] = Array.from({ length: dishesImgs.length }, (_, index) => ({
//   image: dishesImgs[index],
//   title: titles[index],
//   price: randomPrice(),
//   priceBeforeDeal: randomPriceBeforeDeal(),
//   priceOff: randomPriceOff(randomPrice(), randomPriceBeforeDeal()),
// }));
// /**

//  */
// // TabBar data
// const tabName = ['Home', 'Wishlist', 'Cart', 'Search', 'Setting'];
// const TabBarData: TabBarTypes[] = [
//   {
//     title: tabName[0],
//     image: icons.home,
//     link: tabName[0],
//     inActiveColor: '#000000',
//     activeColor: '#EB3030',
//   },
//   {
//     title: tabName[1],
//     image: icons.home,
//     link: tabName[1],
//     inActiveColor: '#000000',
//     activeColor: '#EB3030',
//   },
//   {
//     title: tabName[2],
//     image: icons.home,
//     link: tabName[2],
//     inActiveColor: '#000000',
//     activeColor: '#EB3030',
//     inActiveBGColor: '#FFFFFF',
//     activeBGColor: '#EB3030',
//   },
//   {
//     title: tabName[3],
//     image: icons.home,
//     link: tabName[3],
//     inActiveColor: '#000000',
//     activeColor: '#EB3030',
//   },
//   {
//     title: tabName[4],
//     image: icons.home,
//     link: tabName[4],
//     inActiveColor: '#000000',
//     activeColor: '#EB3030',
//   },
// ];

// export {
//   TabBarData,
//   ProductData,
//   SplashData
// }

import icons from './icons';
import images from './images';
import {
  FeaturesTypes,
  ProductTypes,
  restaurantCategoryParams,
  SplashTypes,
  TabBarTypes,
} from './types';
// random number between 1 to 1000 :)
const randomNumber = (min = 1, max = 1000) => Math.floor(Math.random() * (max - min + 1)) + min;

const dishesImgs = [
  'https://drive.google.com/uc?id=12yhW2a4fK_DVJA77oZ4GvIR-iIYAz3VH',
  'https://drive.google.com/uc?id=1MLBs82EYoynMTX15-6gR0vRx0z3UygKx',
  'https://drive.google.com/uc?id=1v6t4mCHj-I2q3Y7p4SvrIuEcfZFiM6-G',
  'https://drive.google.com/uc?id=1mzPIZ0LiOPtyB_8sdxE7DP5SmkcFcS8h',
  'https://drive.google.com/uc?id=1YLh1AQaQ45XhIJAgjdKtmfC2yVKSo7zw',
  'https://drive.google.com/uc?id=1WRwYWI68W9PgK_3WJgx9LpuOo7vp3zmT',
  'https://drive.google.com/uc?id=1vkFqhXKGcUzrD80KlDhy3g7GdZvmf-Rm',
];

const randomDishesImgs = (): string => dishesImgs[randomNumber(0, dishesImgs.length - 1)];

const randomImage = (): string =>
  `https://picsum.photos/${Math.floor(Math.random() * 1000) + 1}/${Math.floor(Math.random() * 1000) + 1}`;

const SplashData: SplashTypes[] = [
  {
    image: images.splash1,
    title: 'Hãy chọn món cho bạn',
    description:
      'Chúng tôi cung cấp vô vàn sự lựa chọn để đảm bảo bữa ăn của bạn luôn đa dạng và đầy đủ dinh dưỡng.',
  },
  {
    image: images.splash2,
    title: 'Thanh toán nhanh chóng',
    description: 'Vô vàn phương thức thanh toán - Tích hợp với nhiều ngân hàng và ví điện tửtử.',
  },
  {
    image: images.splash3,
    title: 'Giao hàng tức khắc',
    description:
      'Chỉ với một nút bấm, sau 5 phút bữa ăn ngon lành nóng hổi sẽ ngay lập tức được giao đến bạn.',
  },
];

export const restuarantCategories: restaurantCategoryParams[] = [
  {
    _id: '6537ece708ff5b7de97d0695',
    name: 'Gà rán',
    imageUrl: require('../../assets/images/food/chicken-leg_821023.png'),
  },
  {
    _id: '65310f3381e4d98d60b093c5',
    name: 'Cơm Jollof',
    imageUrl: require('../../assets/images/food/spice_3800322.png'),
  },
  {
    _id: '6531206cbbe4998e90af3feb',
    name: 'Mì ống',
    imageUrl: require('../../assets/images/food/spaguetti.png'),
  },
  {
    _id: '6531209dbbe4998e90af3fef',
    name: 'Burger',
    imageUrl: require('../../assets/images/food/burger.png'),
  },
  {
    _id: '653120babbe4998e90af3ff1',
    name: 'Shawarma',
    imageUrl: require('../../assets/images/food/shawarma.png'),
  },
  {
    _id: '65312084bbe4998e90af3fed',
    name: 'Món nướng',
    imageUrl: require('../../assets/images/food/barbecue.png'),
  },
  {
    _id: '65310efb81e4d98d60b093c3',
    name: 'Pizza',
    imageUrl: require('../../assets/images/food/pizza.png'),
  },
  {
    _id: '653120e1bbe4998e90af3ff3',
    name: 'Bữa sáng',
    imageUrl: require('../../assets/images/food/breakfast.png'),
  },
];

const titles = ['Chả giò', 'Bò kho', 'Mì Quảng', 'Bún bò', 'Phở bò', 'Chạo tôm', 'Bánh mì'];

const randomPrice = (): number => {
  const min = 20000;
  const max = 120000;
  const step = 1000;
  return Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
};

const randomPriceBeforeDeal = (): number =>
  parseFloat((randomPrice() + (Math.floor(Math.random() * 1000) + 100)).toFixed(2));

const randomPriceOff = (price: number, priceBeforeDeal: number): string =>
  ((1 - price / priceBeforeDeal) * 100).toFixed(2);

const ProductData: ProductTypes[] = Array.from({ length: dishesImgs.length }, (_, index) => ({
  image: dishesImgs[index],
  title: titles[index],
  price: randomPrice(),
  priceBeforeDeal: randomPriceBeforeDeal(),
  priceOff: randomPriceOff(randomPrice(), randomPriceBeforeDeal()),
}));
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

export { TabBarData, ProductData, SplashData };
