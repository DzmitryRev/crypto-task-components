import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  MemoryRouter, Route, Routes, Link,
} from 'react-router-dom';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    children: 'Hello world!',
    closeModalExtraCallback() {},
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Button as={Link} to="/modal" color="green">
          open modal
        </Button>
        <Routes>
          <Route path="/modal" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  type: 'regular',
};

export const Minified = Template.bind({});
Minified.args = {
  type: 'minified',
};
