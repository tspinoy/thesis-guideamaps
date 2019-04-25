import {GMNodeTypes} from './Constants';

export const TemplateData = {
  eCommerce: {
    name: 'e-commerce',
    nodes: [
      {
        description: 'Start here',
        id: 0,
        name: 'e-commerce',
        optional: false,
        parent: '',
        type: GMNodeTypes.DEFAULT,
      },
      // Company info
      {
        description:
          'Different info about the company can be provided. Some is essential; other is optional. Select what you want to include.',
        id: 1,
        name: 'Company info',
        optional: false,
        parent: 0, // root
        type: GMNodeTypes.DEFAULT,
      },
      {
        description:
          'Logo and colors can provide an easy identification of the website.',
        id: 2,
        name: 'Branding',
        optional: true,
        parent: 1, // company info
        type: GMNodeTypes.DEFAULT,
      },
      {
        description: '',
        id: 3,
        name: 'About Us',
        optional: true,
        parent: 1, // company info
        type: GMNodeTypes.DEFAULT,
      },
      {
        description: '',
        id: 4,
        name: 'Contact Us',
        optional: true,
        parent: 1, // company info
        type: GMNodeTypes.DEFAULT,
      },
      // Customer
      {
        description:
          'It is important to keep track of your customers; different features are available for this.',
        id: 5,
        name: 'Customer',
        optional: false,
        parent: 0, // root
        type: GMNodeTypes.DEFAULT,
      },
      {
        description:
          'With a profile you keep track of all preferences and billing information for a customer.',
        id: 6,
        name: 'Profile',
        optional: true,
        parent: 5, // Customer
        type: GMNodeTypes.DEFAULT,
      },
      {
        choices: {
          FullRegistration: {
            description:
              'This allows a registration from which a detailed profile can be created.',
            name: 'Full Registration',
            type: GMNodeTypes.DEFAULT,
          },
          QuickRegistration: {
            description:
              'This allows a registration with a minimal of information to be entered by the user.',
            name: 'Quick Registration',
            type: GMNodeTypes.DEFAULT,
          },
        },
        description:
          'To be able to login a customer first has to register; different possibilities are available for this.',
        id: 7,
        name: 'Registration',
        optional: false,
        parent: 5, // Customer
        type: GMNodeTypes.CHOICE,
      },
      {
        choices: {
          ShipmentTracking: {
            description: 'This allows a customer to track his order.',
            name: 'Shipment Tracking',
            type: GMNodeTypes.DEFAULT,
          },
          ReturnService: {
            description: 'This allows a customer to return goods.',
            name: 'Return Service',
            type: GMNodeTypes.DEFAULT,
          },
          InvoiceDetails: {
            description:
              'This allows a customer to change details about his invoice.',
            name: 'Invoice Details',
            type: GMNodeTypes.DEFAULT,
          },
        },
        description: 'You can provide different services to your customers.',
        id: 8,
        name: 'Customer Services',
        optional: true,
        parent: 5, // Customer
        type: GMNodeTypes.CHOICE,
      },
      // Buying Goods (child of Customer)
      {
        description: '',
        id: 9,
        name: 'Buying Goods',
        optional: false,
        parent: 5, // Customer
        type: GMNodeTypes.DEFAULT,
      },
      {
        description:
          'A shopping cart feature is mandatory; it allows customer to buy products.',
        id: 10,
        name: 'Shopping Cart',
        optional: false,
        parent: 9, // Buying goods
        type: GMNodeTypes.DEFAULT,
      },
      {
        description:
          'This functionality allows the customer to actually place his order.',
        id: 11,
        name: 'Checkout',
        optional: false,
        parent: 9, // Buying goods
        type: GMNodeTypes.DEFAULT,
      },
      {
        choices: {
          BankTransfer: {
            description: '',
            name: 'Bank Transfer',
            type: GMNodeTypes.DEFAULT,
          },
          CreditDebitCard: {
            description: '',
            name: 'Credit/Debit Card',
            type: GMNodeTypes.DEFAULT,
          },
          PayPal: {
            description: '',
            name: 'PayPal',
            type: GMNodeTypes.DEFAULT,
          },
        },
        description: '',
        id: 12,
        name: 'Payment Method',
        optional: false,
        parent: 9, // Buying goods
        type: GMNodeTypes.CHOICE,
      },
      // Product
      {
        description:
          'A lot of information can be provided about product. Select what you want to include.',
        id: 13,
        name: 'Product',
        optional: false,
        parent: 0, // Root
        type: GMNodeTypes.DEFAULT,
      },
      {
        description:
          'You can group products into categories, which will make searching for products easier, especially if there are many products.',
        id: 14,
        name: 'Product Category',
        optional: true,
        parent: 13, // Product
        type: GMNodeTypes.DEFAULT,
      },
      {
        description:
          'It may be useful to let customers compare different products.',
        id: 15,
        name: 'Product Comparison',
        optional: true,
        parent: 13, // Product
        type: GMNodeTypes.DEFAULT,
      },
      {
        description:
          'Customers like to see an image or a 3D model of a product.',
        id: 16,
        name: 'Product Visualization',
        optional: true,
        parent: 13, // Product
        type: GMNodeTypes.DEFAULT,
      },
      // Shopping Experience
      {
        description:
          'Products should be as visible as possible. There are different ways to achieve this: hot list, frequently bought, ...',
        id: 17,
        name: 'Shopping Experience',
        optional: false,
        parent: 0, // Root
        type: GMNodeTypes.DEFAULT,
      },
      // Searching
      {
        choices: {
          Search: {
            description:
              'This allows a customer to search for products based on keywords.',
            name: 'Search',
            type: GMNodeTypes.DEFAULT,
          },
          Browse: {
            description:
              'This allows a customer to search for products based on categories.',
            name: 'Browse',
            type: GMNodeTypes.DEFAULT,
          },
        },
        description:
          'A customer should be able to easily find products. Select at least on possibility.',
        id: 18,
        name: 'Searching',
        optional: false,
        parent: 0, // Root
        type: GMNodeTypes.CHOICE,
      },
      // Region Selection
      {
        description:
          'Product availability and prices may be dependent on the country or region.',
        id: 19,
        name: 'Region Selection',
        optional: true,
        parent: 0, // Root
        type: GMNodeTypes.DEFAULT,
      },
      // Language Selection
      {
        description: 'This allows customers to select their own language.',
        id: 20,
        name: 'Language Selection',
        optional: true,
        parent: 0, // Root
        type: GMNodeTypes.DEFAULT,
      },
      // Share
      {
        description:
          'This allows a customer to share information over a social network.',
        id: 21,
        name: 'Share',
        optional: true,
        parent: 0, // Root
        type: GMNodeTypes.DEFAULT,
      },
      // Like
      {
        description:
          'A "like" button provides the customer a way of expressing his feelings about a product.',
        id: 22,
        name: 'Like',
        optional: true,
        parent: 0, // Root
        type: GMNodeTypes.DEFAULT,
      },
    ],
  },
};
