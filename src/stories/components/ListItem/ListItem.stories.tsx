import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from './ListItem';


export default {
  title: 'Base/Components/ListItem',
  component: ListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  src: 'src',
  title: 'filled with image',
  onClick: () => console.log('here')
};

export const JustTitle = Template.bind({});
JustTitle.args = {
  title: 'just title',
};


export const JustImage = Template.bind({});
JustImage.args = {
  src: 'just image',
};


