import React from 'react';
import { useAppSelector } from '../../Redux/hooks';
import { noticeSelector } from '../../Redux/slices/notificationCardSlice';

import './notificationCard.scss';

const NotificationCard: React.FC = () => {
  const { header, message, showNotification } = useAppSelector(noticeSelector);

  return (
    <article className={`notification__wrapper${showNotification ? ' activeNotice' : ''}`}>
      <header className="notification__header">{header}</header>
      <p className="notification__message">{message}</p>
    </article>
  );
};

export default NotificationCard;
