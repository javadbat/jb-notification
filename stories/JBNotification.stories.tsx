import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { JBButton } from 'jb-button/react';
import './styles/jb-notification-styles.css';
import { NotificationManager } from 'jb-notification/manager';

const notificationManager = new NotificationManager();
const meta: Meta<unknown> = {
  title: "Components/JBNotification",
  // component: JBNotificationWebComponent,
};
export default meta;
type Story = StoryObj<any>;

export const ActionTest: Story = {
  render: () => {
    function showSuccessMessage() {
      const message: string | null = 'completed successfully';
      notificationManager.new({ title: message, type: "SUCCESS" });
    }
    function showErrorMessage() {
      notificationManager.new({ title: "error happen", type: "ERROR" });

    }
    function showWarningMessage() {

      notificationManager.new({ title: 'operation is not safe', type: "WARNING" });
    }
    function showInformationMessage() {

      notificationManager.new({ title: 'operation is good', type: "INFO" });
    }
    return (
      <div className="jb-notification-test-page">
        <p>please click on each buttons and see related notification</p>
        <JBButton color='positive' onClick={showSuccessMessage}>success message</JBButton>
        <JBButton color='danger' onClick={showErrorMessage}>error message</JBButton>
        <JBButton color='warning' onClick={showWarningMessage}>warning message</JBButton>
        <JBButton color='primary' onClick={showInformationMessage}>information message</JBButton>
      </div>
    );
  }
};
