import {Meta, StoryObj} from "@storybook/react";

import Form from './form'
import {userEvent, within} from "@storybook/test";
import {expect} from "@storybook/test";

const meta: Meta<typeof Form > = {
  component: Form,
  title: 'Practise/Form',
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button',{name: /post/i});
    const email = canvas.getByLabelText(/email/i);
    const question = canvas.getByLabelText(/question/i);

    await expect(submitBtn).toBeInTheDocument();
    await expect(email).toBeInTheDocument();
    await expect(question).toBeInTheDocument();
  }
};
export const EmptySubmit: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button',{name: /post/i});

    await userEvent.click(submitBtn);
    await expect(canvas.getByText(/enter your email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  }
};
export const InvalidEmail: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button',{name: /post/i});
    const email = canvas.getByLabelText(/email/i);

    await userEvent.type(email,'i-am-not-an-email')
    await userEvent.click(submitBtn);
    await expect(canvas.getByText(/valid email/i)).toBeInTheDocument();
    await expect(canvas.getByText(/enter a question/i)).toBeInTheDocument();
  }
};
export const ValidInputs: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button',{name: /post/i});
    const email = canvas.getByLabelText(/email/i);
    const question = canvas.getByLabelText(/question/i);

    await userEvent.type(email,'test@email.com');
    await userEvent.type(question,'all about description')
    await userEvent.click(submitBtn);
    await expect(canvas.queryByText(/valid email/i)).not.toBeInTheDocument();
    await expect(canvas.queryByText(/enter a question/i)).not.toBeInTheDocument();
    await expect(canvas.getByText('Thamks for your submission!Now subscribe!!!')).toBeInTheDocument();
  }
};