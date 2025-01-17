import { Product } from './models/products';
export const mockProducts = [
  {
    id: 3,
    title: 'Powder Canister',
    description:
      'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
    category: 'beauty',
    price: 14.99,
    discountPercentage: 18.14,
    rating: 3.82,
    stock: 59,
    tags: ['beauty', 'face powder'],
    brand: 'Velvet Touch',
    sku: '9EN8WLT2',
    weight: 8,
    dimensions: {
      width: 24.16,
      height: 10.7,
      depth: 11.07,
    },
    warrantyInformation: '2 year warranty',
    shippingInformation: 'Ships in 1-2 business days',
    availabilityStatus: 'In Stock',
    reviews: [
      {
        rating: 5,
        comment: 'Very happy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Ethan Thompson',
        reviewerEmail: 'ethan.thompson@x.dummyjson.com',
      },
      {
        rating: 4,
        comment: 'Great value for money!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Levi Hicks',
        reviewerEmail: 'levi.hicks@x.dummyjson.com',
      },
      {
        rating: 5,
        comment: 'Highly impressed!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Hazel Gardner',
        reviewerEmail: 'hazel.gardner@x.dummyjson.com',
      },
    ],
    returnPolicy: '60 days return policy',
    minimumOrderQuantity: 25,
    meta: {
      createdAt: '2024-05-23T08:56:21.618Z',
      updatedAt: '2024-05-23T08:56:21.618Z',
      barcode: '0516267971277',
      qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
    },
    images: [
      'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
    ],
    thumbnail:
      'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
  } as Product,

  {
    id: 5,
    title: 'Red Nail Polish',
    description:
      'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
    category: 'beauty',
    price: 8.99,
    discountPercentage: 2.46,
    rating: 3.91,
    stock: 71,
    tags: ['beauty', 'nail polish'],
    brand: 'Nail Couture',
    sku: 'YUIIIP4W',
    weight: 9,
    dimensions: {
      width: 8.11,
      height: 10.89,
      depth: 29.06,
    },
    warrantyInformation: '1 year warranty',
    shippingInformation: 'Ships in 1 week',
    availabilityStatus: 'In Stock',
    reviews: [
      {
        rating: 5,
        comment: 'Very pleased!',
        date: '2024-05-23T08:56:21.619Z',
        reviewerName: 'Leo Rivera',
        reviewerEmail: 'leo.rivera@x.dummyjson.com',
      },
      {
        rating: 5,
        comment: 'Great product!',
        date: '2024-05-23T08:56:21.619Z',
        reviewerName: 'Evan Reed',
        reviewerEmail: 'evan.reed@x.dummyjson.com',
      },
      {
        rating: 4,
        comment: 'Highly recommended!',
        date: '2024-05-23T08:56:21.619Z',
        reviewerName: 'Evelyn Sanchez',
        reviewerEmail: 'evelyn.sanchez@x.dummyjson.com',
      },
    ],
    returnPolicy: 'No return policy',
    minimumOrderQuantity: 46,
    meta: {
      createdAt: '2024-05-23T08:56:21.619Z',
      updatedAt: '2024-05-23T08:56:21.619Z',
      barcode: '3212847902461',
      qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
    },
    images: [
      'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
    ],
    thumbnail:
      'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png',
  } as Product,
];
