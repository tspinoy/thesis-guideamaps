import {NodeTypes} from './Constants';

export const data = {
  name: 'Eve',
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
