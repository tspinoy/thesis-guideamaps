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
  Custom: {
    Custom: {
      description: 'Custom choice node',
      name: 'Custom',
      type: GMNodeTypes.CHOICE,
      choices: {},
    },
  },
};
