export function renderHTML(): string {
  return /* html */ `
  <div class="jb-notification-web-component --info">
    <div class="notification-content">
        <div class="icon-wrapper">
            <svg class="notification-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                </defs>
                
                <g class="bg">
                    <path class="icon-bg bg-star" d="M10.2,1.93a2.41,2.41,0,0,1,3.6,0l.85.94a2.37,2.37,0,0,0,1.93.8l1.27-.07A2.43,2.43,0,0,1,20.4,6.15l-.07,1.27a2.37,2.37,0,0,0,.8,1.93l.94.85a2.41,2.41,0,0,1,0,3.6l-.94.85a2.37,2.37,0,0,0-.8,1.93l.07,1.27a2.43,2.43,0,0,1-2.55,2.55l-1.27-.07a2.37,2.37,0,0,0-1.93.8l-.85.94a2.41,2.41,0,0,1-3.6,0l-.85-.94a2.37,2.37,0,0,0-1.93-.8l-1.27.07A2.43,2.43,0,0,1,3.6,17.85l.07-1.27a2.37,2.37,0,0,0-.8-1.93l-.94-.85a2.41,2.41,0,0,1,0-3.6l.94-.85a2.37,2.37,0,0,0,.8-1.93L3.6,6.15A2.43,2.43,0,0,1,6.15,3.6l1.27.07a2.37,2.37,0,0,0,1.93-.8Z"/>
                    <circle class="icon-bg" cx="12" cy="12" r="11"></circle>
                </g>
                <g class="info-symbol symbol">
                    <path class="i-dot" d="M12 6 L12 6"></path>
                    <path class="i-line" d="M12 11 L12 16"></path>
                </g>
                <g class="error-symbol symbol --hidden">
                    <path class="line1" d="M8 8 L16 16"></path>
                    <path class="line2" d="M16 8 L8 16"></path>
                </g>
                <g class="success-symbol symbol --hidden">
                    <path class="tik" d="M7 12 L9 16 L17 8"></path>
                </g>
                <g class="warning-symbol symbol --hidden">
                    <path class="ri-dot" d="M12 17 L12 17"></path>
                    <path class="ri-line" d="M12 13 L12 6"></path>
                </g>
            </svg>
        </div>
        <div class="message-texts-wrapper">
            <div class="title-wrapper">پیغام شما با موفقیت ثبت شد</div>
            <div class="desc-wrapper"></div>
        </div>
    </div>
  </div>
  `;
}