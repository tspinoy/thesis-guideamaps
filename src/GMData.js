import {GMNodeTypes} from './Constants';

export const GMData2 = [
  {
    id: 0,
    name: 'Eve',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: '',
  },
  {
    id: 1,
    name: 'Cain',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 0,
  },
  {
    id: 2,
    name: 'Enos',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 1,
  },
  {
    id: 3,
    name: 'Noam',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 1,
  },
  {
    id: 4,
    name: 'Seth',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 0,
  },
  {
    id: 5,
    name: 'Enos',
    type: GMNodeTypes.CHOICE,
    optional: false,
    parent: 4,
  },
  {
    id: 6,
    name: 'Noam',
    type: GMNodeTypes.CHOICE,
    optional: false,
    parent: 4,
  },
  {
    id: 7,
    name: 'Abel',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 0,
  },
  {
    id: 8,
    name: 'Enos',
    type: GMNodeTypes.CHOICE,
    optional: false,
    parent: 7,
  },
  {
    id: 9,
    name: 'Noam',
    type: GMNodeTypes.CHOICE,
    optional: false,
    parent: 7,
  },
  {
    id: 10,
    name: 'Awan',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 0,
  },
  {
    id: 11,
    name: 'Enos',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 10,
  },
  {
    id: 12,
    name: 'Noam',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 10,
  },
  {
    id: 13,
    name: 'Azura',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 0,
  },
  {
    id: 14,
    name: 'Enos',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 13,
  },
  {
    id: 15,
    name: 'Noam',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 13,
  },
  {
    id: 16,
    name: 'Thijs',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 0,
  },
  {
    id: 17,
    name: 'Enos',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 16,
  },
  {
    id: 18,
    name: 'Noam',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 16,
  },
  {
    id: 19,
    name: 'Node',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 0,
  },
  {
    id: 20,
    name: 'Enos',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 19,
  },
  {
    id: 21,
    name: 'Noam',
    type: GMNodeTypes.DEFAULT,
    optional: false,
    parent: 19,
  },
  {
    id: 22,
    name: 'Enos',
    type: GMNodeTypes.CHOICE,
    optional: false,
    parent: 21,
  },
  {
    id: 23,
    name: 'Noam',
    type: GMNodeTypes.CHOICE,
    optional: false,
    parent: 21,
  },
  {
    id: 24,
    name: 'optional',
    type: GMNodeTypes.DEFAULT,
    optional: true,
    parent: 6,
  },
];

export const GMData = {
  name: 0,
  type: GMNodeTypes.DEFAULT,
  children: [
    {
      name: 'Cain',
      type: GMNodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: GMNodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: GMNodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Seth',
      type: GMNodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: GMNodeTypes.CHOICE,
        },
        {
          name: 'Noam',
          type: GMNodeTypes.CHOICE,
        },
      ],
    },
    {
      name: 'Abel',
      type: GMNodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: GMNodeTypes.CHOICE,
        },
        {
          name: 'Noam',
          type: GMNodeTypes.CHOICE,
        },
      ],
    },
    {
      name: 'Awan',
      type: GMNodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: GMNodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: GMNodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Azura',
      type: GMNodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: GMNodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: GMNodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Thijs',
      type: GMNodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: GMNodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: GMNodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Node',
      type: GMNodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: GMNodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: GMNodeTypes.DEFAULT,
          children: [
            {
              name: 'Enos',
              type: GMNodeTypes.CHOICE,
            },
            {
              name: 'Noam',
              type: GMNodeTypes.CHOICE,
            },
          ],
        },
      ],
    },
  ],
};
