import {GMNodeTypes} from './Constants';

export const ChoiceNodeData = {
  General: {
    Gender: {
      description: 'Select Gender',
      name: 'Gender',
      type: GMNodeTypes.CHOICE,
      choices: {
        Male: {
          description: 'Male description',
          name: 'Male',
          type: GMNodeTypes.DEFAULT,
        },
        Female: {
          description: 'Female description',
          name: 'Female',
          type: GMNodeTypes.DEFAULT,
        },
      },
    },
  },
  eCommerce: {
    CustomerServices: {
      description: '',
      name: 'Customer Services',
      type: GMNodeTypes.CHOICE,
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
    },
    PaymentMethod: {
      description: '',
      name: 'Payment Method',
      type: GMNodeTypes.CHOICE,
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
    },
    Registration: {
      description: '',
      name: 'Registration',
      type: GMNodeTypes.CHOICE,
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
    },
    Searching: {
      description: '',
      name: 'Searching',
      type: GMNodeTypes.CHOICE,
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
    },
  },
  Custom: {
    Custom: {
      description: 'Custom choice node',
      name: 'Custom',
      type: GMNodeTypes.CHOICE,
      choices: {},
    },
  },
};
