import React from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { formSelector, SendFormStatus } from '../Redux/slices/contactFormSlice';
import { Outlet } from 'react-router-dom';

import {
  hideNotification,
  noticeSelector,
  setShowNotification,
} from '../Redux/slices/notificationCardSlice';

import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import NotificationCard from '../components/NotificationCard';

const MainLayout = () => {
      const { showForm, status } = useAppSelector(formSelector);
      const { showNotification, notificationTypes } = useAppSelector(noticeSelector);
      const dispatch = useAppDispatch();
    React.useEffect(() => {
      if (status === SendFormStatus.SUCCESS) {
        dispatch(setShowNotification(notificationTypes.sendSuccess));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 7000);
      }
      if (status === SendFormStatus.ERROR) {
        dispatch(setShowNotification(notificationTypes.sendError));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 7000);
      }
    }, [status]);

    React.useEffect(() => {
      if (!window.localStorage.getItem('haveSeenSuggestion')) {
        setTimeout(() => {
          dispatch(setShowNotification(notificationTypes.suggestion));
        }, 30000);
        setTimeout(() => {
          dispatch(hideNotification());
          window.localStorage.setItem('haveSeenSuggestion', 'true');
        }, 7000);
      }
    }, []);

  return (
    <>
      <Header />
      {showForm && <ContactForm />}
      {showNotification && <NotificationCard />}
      <Outlet/>
    </>
  );
}

export default MainLayout