import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { formSelector, SendFormStatus } from './Redux/slices/contactFormSlice';
import {
  hideNotification,
  noticeSelector,
  setShowNotification,
} from './Redux/slices/notificationCardSlice';

import Header from './components/Header';
import ContactForm from './components/ContactForm';
import NotificationCard from './components/NotificationCard';
import Home from './pages/Home';
import Offer from './pages/Offer';
import About from './pages/About';
import Contacts from './pages/Contacts';

const App: React.FC = () => {
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
    <main className="App">
      <Header />
      {showForm && <ContactForm />}
      {showNotification && <NotificationCard />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about-us" element={<About />}></Route>
        <Route path="our-offer" element={<Offer />}></Route>
        <Route path="stock" element={''}></Route>
        <Route path="contacts" element={<Contacts/>}></Route>
      </Routes>
    </main>
  );
};

export default App;
