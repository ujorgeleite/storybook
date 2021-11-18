import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';


export default {
  title: 'Base/Components/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
    
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const ListComplete = Template.bind({});

ListComplete.args= {
  items: [
    {src:'tst',title:'Item 1', onClick: () => console.log('click 1')},
    {src:'tst',title:'Item 2', onClick: () => console.log('click 2')},
    {src:'tst',title:'Item 3', onClick: () => console.log('click 3')},
    {src:'tst',title:'Item 4', onClick: () => console.log('click 4')},
  ]
}


