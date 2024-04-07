export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  isAvailable: boolean;
  color: string;
  weight: number;
  size: string;
  discount: number;
  isOnSale: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 11 Pro Max',
    price: 1099,
    quantity: 1,
    description: 'Apple iPhone 11 Pro Max 256GB Midnight Green',
    imageUrl: 'https://www.91-img.com/pictures/133019-v10-apple-iphone-11-pro-max-mobile-phone-large-1.jpg',
    category: 'Smartphone',
    rating: 4.5,
    isAvailable: true,
    color: 'Midnight Green',
    weight: 226,
    size: '158 x 77.8 x 8.1 mm',
    discount: 0,
    isOnSale: false
  },
  {
    id: 2,
    name: 'Samsung Galaxy S20 Ultra',
    price: 1399,
    quantity: 1,
    description: 'Samsung Galaxy S20 Ultra 5G 128GB Cosmic Black',
    imageUrl:
      'https://www.91-img.com/pictures/133019-v10-samsung-galaxy-s20-ultra-5g-mobile-phone-large-1.jpg',
    category: 'Smartphone',
    rating: 4.5,
    isAvailable: true,
    color: 'Cosmic Black',
    weight: 220,
    size: '166.9 x 76 x 8.8 mm',
    discount: 0,
    isOnSale: false
  },
  {
    id: 3,
    name: 'Xiaomi Mi 10 Pro',
    price: 999,
    quantity: 1,
    description: 'Xiaomi Mi 10 Pro 256GB Alpine White',
    imageUrl: 'https://www.91-img.com/pictures/133019-v10-xiaomi-mi-10-pro-mobile-phone-large-1.jpg',
    category: 'Smartphone',
    rating: 4.5,
    isAvailable: true,
    color: 'Alpine White',
    weight: 208,
    size: '162.6 x 74.8 x 8.96 mm',
    discount: 0,
    isOnSale: false
  },
  {
    id: 4,
    name: 'Huawei P40 Pro',
    price: 999,
    quantity: 1,
    description: 'Huawei P40 Pro 256GB Silver Frost',
    imageUrl: 'https://www.91-img.com/pictures/133019-v10-huawei-p40-pro-mobile-phone-large-1.jpg',
    category: 'Smartphone',
    rating: 4.5,
    isAvailable: true,
    color: 'Silver Frost',
    weight: 209,
    size: '158.2 x 72.6 x 9 mm',
    discount: 0,
    isOnSale: false
  },
  {
    id: 5,
    name: 'OnePlus 8 Pro',
    price: 899,
    quantity: 1,
    description: 'OnePlus 8 Pro 256GB Ultramarine Blue',
    imageUrl: 'https://www.91-img.com/pictures/133019-v10-oneplus-8-pro-mobile-phone-large-1.jpg',
    category: 'Smartphone',
    rating: 4.5,
    isAvailable: true,
    color: 'Ultramarine Blue',
    weight: 199,
    size: '165.3 x 74.4 x 8.5 mm',
    discount: 0,
    isOnSale: false
  },
  {
    id: 6,
    name: 'Apple iPad Pro 12.9',
    price: 999,
    quantity: 1,
    description: 'Apple iPad Pro 12.9 2020 256GB Space Gray',
    imageUrl: 'https://www.91-img.com/pictures/133019-v10-apple-ipad-pro-12-9-2020-tablet-large-1.jpg',
    category: 'Tablet',
    rating: 4.5,
    isAvailable: true,
    color: 'Space Gray',
    weight: 641,
    size: '280.6 x 214.9 x 5.9 mm',
    discount: 0,
    isOnSale: false
  },
  {
    id: 7,
    name: 'Samsung Galaxy Tab S6',
    price: 649,
    quantity: 1,
    description: 'Samsung Galaxy Tab S6 128GB Mountain Gray',
    imageUrl: 'https://www.91-img.com/pictures/133019-v10-samsung-galaxy-tab-s6-tablet-large-1.jpg',
    category: 'Tablet',
    rating: 4.5,
    isAvailable: true,
    color: 'Mountain Gray',
    weight: 420,
    size: '244.5 x 159.5 x 5.7 mm',
    discount: 0,
    isOnSale: false
  },
  {
    id: 8,
    name: 'Huawei MatePad Pro',
    price: 549,
    quantity: 1,
    description: 'Huawei MatePad Pro 128GB Forest Green',
    imageUrl: 'https://www.91-img.com/pictures/133019-v10-huawei-matepad-pro-tablet-large-1.jpg',
    category: 'Tablet',
    rating: 4.5,
    isAvailable: true,
    color: 'Forest Green',
    weight: 460,
    size: '246 x 159 x 7.2 mm',
    discount: 0,
    isOnSale: false
  }
];
