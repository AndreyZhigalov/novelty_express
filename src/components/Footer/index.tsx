import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { formSelector, sendForm, SendFormStatus } from '../../Redux/slices/contactFormSlice';
import { Formik } from 'formik';
import { schema } from '../ContactForm';

import chatIcon from '../../assets/img/icons/chat.svg';

import './footer.scss';
import '../ContactForm/contactForm.scss';

const Footer: React.FC = () => {
    const dispatch = useAppDispatch()
    const {status} = useAppSelector(formSelector)
  return (
    <footer className="footer">
      <header>
        <h2>
          Рассчитать
          <br />
          стоимость
        </h2>
        <p>
          Заполните форму и наш менеджер свяжется <br />с Вами в ближайшее время.
        </p>
      </header>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(sendForm(values));
        }}>
        {({ handleBlur, handleSubmit, values, handleChange, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="contact-form__input"
                placeholder="Ваше имя"
              />
              <span>{touched.name && errors.name}</span>
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                className="contact-form__input"
                placeholder="+7 ("
              />
              <span>{touched.phone && errors.phone}</span>
            </div>
            <button className="contact-form__send-form" type="submit">
              {status === SendFormStatus.UPLOADING ? 'Идёт отправка' : 'Отправить запрос'}
            </button>
          </form>
        )}
      </Formik>
      <article>
        <p>2022 © “Новелти диагностика и терапия”</p>
        <div>
          <p>
            Москва, Филевский бульвар, д. 39, офис 4
          </p>
          <div>
            <p>+7 495 118 40 48</p>
            <p>info@novelty.express</p>
          </div>
        </div>
        <img src={chatIcon} alt="" className="footer__chat-button" />
      </article>
    </footer>
  );
};

export default Footer;
