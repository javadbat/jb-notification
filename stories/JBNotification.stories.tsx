import { JBNotificationTest } from "./samples/jb-notification-test";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<unknown> = {
  title: "Components/JBNotification",
  component: JBNotificationTest,
};
export default meta;
type Story = StoryObj<typeof JBNotificationTest>;

export const Normal: Story = {
  args: {}
};
