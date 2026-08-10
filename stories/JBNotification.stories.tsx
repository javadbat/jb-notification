import { createElement, useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { JBButton } from 'jb-button/react';
import type { JBNotificationWebComponent } from 'jb-notification';
import './styles/jb-notification-styles.css';
import { NotificationManager } from 'jb-notification/manager';
import { expect, waitFor } from 'storybook/test';

const notificationManager = new NotificationManager();
const meta = {
  title: "Components/JBNotification",
  // component: JBNotificationWebComponent,
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const DirectNotification: Story = {
  render: () => {
    const notificationRef = useRef<JBNotificationWebComponent>(null);
    const [closeState, setCloseState] = useState('waiting');

    useEffect(() => {
      const notification = notificationRef.current;
      if (!notification) return;

      const onClose = () => setCloseState('closed');
      notification.addEventListener('close', onClose);
      notification.show();
      setCloseState('open');

      return () => notification.removeEventListener('close', onClose);
    }, []);

    return (
      <div className="jb-notification-test-page">
        {createElement('jb-notification', {
          ref: notificationRef,
          title: 'Saved',
          description: 'Your changes were saved successfully.',
          type: 'SUCCESS',
        })}
        <button type="button" onClick={() => notificationRef.current?.onClose()}>
          Dismiss notification
        </button>
        <output data-testid="notification-state">{closeState}</output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const notification = canvasElement.querySelector('jb-notification') as JBNotificationWebComponent;
    const dismissButton = canvasElement.querySelector<HTMLButtonElement>('button')!;

    await waitFor(() => {
      expect(notification.state).toBe('OPEN');
      expect(notification.title).toBe('Saved');
      expect(notification.description).toBe('Your changes were saved successfully.');
      expect(notification.type).toBe('SUCCESS');
    });

    dismissButton.click();

    await waitFor(() => {
      expect(notification.state).toBe('CLOSE');
      expect(canvasElement).toHaveTextContent('closed');
    });
  },
};

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
