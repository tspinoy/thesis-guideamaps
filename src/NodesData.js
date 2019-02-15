import {NodeTypes} from './Constants';

export const data2 = [
  {
    id: 0,
    name: 'Eve',
    type: NodeTypes.DEFAULT,
    parent: '',
  },
  {
    id: 1,
    name: 'Cain',
    type: NodeTypes.DEFAULT,
    parent: 0,
  },
  {
    id: 2,
    name: 'Enos',
    type: NodeTypes.DEFAULT,
    parent: 1,
  },
  {
    id: 3,
    name: 'Noam',
    type: NodeTypes.DEFAULT,
    parent: 1,
  },
  {
    id: 4,
    name: 'Seth',
    type: NodeTypes.DEFAULT,
    parent: 0,
  },
  {
    id: 5,
    name: 'Enos',
    type: NodeTypes.CHOICE,
    parent: 4,
  },
  {
    id: 6,
    name: 'Noam',
    type: NodeTypes.CHOICE,
    parent: 4,
  },
  {
    id: 7,
    name: 'Abel',
    type: NodeTypes.DEFAULT,
    parent: 0,
  },
  {
    id: 8,
    name: 'Enos',
    type: NodeTypes.CHOICE,
    parent: 7,
  },
  {
    id: 9,
    name: 'Noam',
    type: NodeTypes.CHOICE,
    parent: 7,
  },
  {
    id: 10,
    name: 'Awan',
    type: NodeTypes.DEFAULT,
    parent: 0,
  },
  {
    id: 11,
    name: 'Enos',
    type: NodeTypes.DEFAULT,
    parent: 10,
  },
  {
    id: 12,
    name: 'Noam',
    type: NodeTypes.DEFAULT,
    parent: 10,
  },
  {
    id: 13,
    name: 'Azura',
    type: NodeTypes.DEFAULT,
    parent: 0,
  },
  {
    id: 14,
    name: 'Enos',
    type: NodeTypes.DEFAULT,
    parent: 13,
  },
  {
    id: 15,
    name: 'Noam',
    type: NodeTypes.DEFAULT,
    parent: 13,
  },
  {
    id: 16,
    name: 'Thijs',
    type: NodeTypes.DEFAULT,
    parent: 0,
  },
  {
    id: 17,
    name: 'Enos',
    type: NodeTypes.DEFAULT,
    parent: 16,
  },
  {
    id: 18,
    name: 'Noam',
    type: NodeTypes.DEFAULT,
    parent: 16,
  },
  {
    id: 19,
    name: 'Node',
    type: NodeTypes.DEFAULT,
    parent: 0,
  },
  {
    id: 20,
    name: 'Enos',
    type: NodeTypes.DEFAULT,
    parent: 19,
  },
  {
    id: 21,
    name: 'Noam',
    type: NodeTypes.DEFAULT,
    parent: 19,
  },
  {
    id: 22,
    name: 'Enos',
    type: NodeTypes.CHOICE,
    parent: 21,
  },
  {
    id: 23,
    name: 'Noam',
    type: NodeTypes.CHOICE,
    parent: 21,
  },
];

export const data = {
  name: 0,
  type: NodeTypes.DEFAULT,
  children: [
    {
      name: 'Cain',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Seth',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.CHOICE,
        },
        {
          name: 'Noam',
          type: NodeTypes.CHOICE,
        },
      ],
    },
    {
      name: 'Abel',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.CHOICE,
        },
        {
          name: 'Noam',
          type: NodeTypes.CHOICE,
        },
      ],
    },
    {
      name: 'Awan',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Azura',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Thijs',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Node',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
          children: [
            {
              name: 'Enos',
              type: NodeTypes.CHOICE,
            },
            {
              name: 'Noam',
              type: NodeTypes.CHOICE,
            },
          ],
        },
      ],
    },
  ],
};
