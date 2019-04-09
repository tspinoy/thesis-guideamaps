import {GMNodeTypes} from './Constants';

export const ECommerceData = [
  {
    description: 'Start here',
    id: 0,
    name: 'e-commerce',
    parent: '',
    type: GMNodeTypes.DEFAULT,
  },
  // Company info
  {
    description:
      'Different info about the company can be provided. Some is essential; other is optional. Select what you want to include.',
    id: 1,
    name: 'Company info',
    parent: 0, // root
    type: GMNodeTypes.DEFAULT,
  },
  {
    description:
      'Logo and colors can provide an easy identification of the website.',
    id: 2,
    name: 'Branding',
    parent: 1, // company info
    type: GMNodeTypes.OPTIONAL,
  },
  {
    description: '',
    id: 3,
    name: 'About Us',
    parent: 1, // company info
    type: GMNodeTypes.OPTIONAL,
  },
  {
    description: '',
    id: 4,
    name: 'Contact Us',
    parent: 1, // company info
    type: GMNodeTypes.OPTIONAL,
  },
  // Customer
  {
    description:
      'It is important to keep track of your customers; different features are available for this.',
    id: 5,
    name: 'Customer',
    parent: 0, // root
    type: GMNodeTypes.DEFAULT,
  },
  {
    description:
      'With a profile you keep track of all preferences and billing information for a customer.',
    id: 6,
    name: 'Profile',
    parent: 5, // Customer
    type: GMNodeTypes.OPTIONAL,
  },
  {
    description:
      'To be able to login a customer first has to register; different possibilities are available for this.',
    id: 7,
    name: 'Registration',
    parent: 5, // Customer
    type: GMNodeTypes.CHOICE,
  },
  {
    description: 'You can provide different services to your customers.',
    id: 8,
    name: 'OPTIONAL! Customer Services',
    parent: 5, // Customer
    type: GMNodeTypes.CHOICE,
  },
  // Buying Goods (child of Customer)
  {
    description: '',
    id: 9,
    name: 'Buying Goods',
    parent: 5, // Customer
    type: GMNodeTypes.DEFAULT,
  },
  {
    description:
      'A shopping cart feature is mandatory; it allows customer to buy products.',
    id: 10,
    name: 'Shopping Cart',
    parent: 9, // Buying goods
    type: GMNodeTypes.DEFAULT,
  },
  {
    description:
      'This functionality allows the customer to actually place his order.',
    id: 11,
    name: 'Checkout',
    parent: 9, // Buying goods
    type: GMNodeTypes.DEFAULT,
  },
  {
    description: '',
    id: 12,
    name: 'Payment Method',
    parent: 9, // Buying goods
    type: GMNodeTypes.CHOICE,
  },
  // Product
  {
    description:
      'A lot of information can be provided about product. Select what you want to include.',
    id: 13,
    name: 'Product',
    parent: 0, // Root
    type: GMNodeTypes.DEFAULT,
  },
  {
    description:
      'You can group products into categories, which will make searching for products easier, especially if there are many products.',
    id: 14,
    name: 'Product Category',
    parent: 13, // Product
    type: GMNodeTypes.OPTIONAL,
  },
  {
    description:
      'It may be useful to let customers compare different products.',
    id: 15,
    name: 'Product Comparison',
    parent: 13, // Product
    type: GMNodeTypes.OPTIONAL,
  },
  {
    description: 'Customers like to see an image or a 3D model of a product.',
    id: 16,
    name: 'Product Visualization',
    parent: 13, // Product
    type: GMNodeTypes.OPTIONAL,
  },
  // Shopping Experience
  {
    description:
      'Products should be as visible as possible. There are different ways to achieve this: hot list, frequently bought, ...',
    id: 17,
    name: 'Shopping Experience',
    parent: 0, // Root
    type: GMNodeTypes.DEFAULT,
  },
  // Searching
  {
    description:
      'A customer should be able to easily find products. Select at least on possibility.',
    id: 18,
    name: 'Searching',
    parent: 0, // Root
    type: GMNodeTypes.CHOICE,
  },
  // Region Selection
  {
    description:
      'Product availability and prices may be dependent on the country or region.',
    id: 19,
    name: 'Region Selection',
    parent: 0, // Root
    type: GMNodeTypes.OPTIONAL,
  },
  // Language Selection
  {
    description: 'This allows customers to select their own language.',
    id: 20,
    name: 'Language Selection',
    parent: 0, // Root
    type: GMNodeTypes.OPTIONAL,
  },
  // Share
  {
    description:
      'This allows a customer to share information over a social network.',
    id: 21,
    name: 'Share',
    parent: 0, // Root
    type: GMNodeTypes.OPTIONAL,
  },
  // Like
  {
    description:
      'A "like" button provides the customer a way of expressing his feelings about a product.',
    id: 22,
    name: 'Like',
    parent: 0, // Root
    type: GMNodeTypes.OPTIONAL,
  },
];
