import React from 'react';
import {JBButton} from 'jb-button/react';
import './jb-notification-styles.css';
import {NotificationManager} from 'jb-notification/manager';
const notificationManager = new NotificationManager();
export function JBNotificationTest() {
  function showSuccessMessage() {
    const message:string | null = 'completed successfully';
    notificationManager.new({title:message,type:"SUCCESS"});
  }
  function showErrorMessage() {
    notificationManager.new({title:"error happen",type:"ERROR"});

  }
  function showWarningMessage() {
       
    notificationManager.new({title:'operation is not safe',type:"WARNING"});
  }
  function showInformationMessage() {
        
    notificationManager.new({title:'operation is good',type:"INFO"});
  }
  return (
    <div className="jb-notification-test-page">
      <JBButton onClick={showSuccessMessage}>success message</JBButton>
      <JBButton onClick={showErrorMessage}>error message</JBButton>
      <JBButton onClick={showWarningMessage}>warning message</JBButton>
      <JBButton onClick={showInformationMessage}>information message</JBButton>
    </div>
  );
}

