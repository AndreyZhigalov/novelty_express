import { Formik } from 'formik';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import {
  formData,
  formSelector,
  sendForm,
  SendFormStatus,
  setShowForm,
} from '../../Redux/slices/contactFormSlice';
import * as yup from 'yup';

import close from '../../assets/img/icons/close.svg';
import './contactForm.scss';

export const phoneRegExp =
  /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/;

export const schema = yup.object({
  name: yup.string().required('Обязательное поле'),
  phone: yup.string().matches(phoneRegExp, 'Введите номер телефона').required('Обязательное поле'),
});

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(formSelector);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsDisabled(status === SendFormStatus.UPLOADING ? true : false);
  }, [status]);

  return (
    <div className="overlay">
      <article className="contact-form">
        <img src={close} alt="close" onClick={() => dispatch(setShowForm())} />
        <header>Рассчитать стоимость</header>
        <Formik
          initialValues={{ name: '', phone: '' }}
          validationSchema={schema}
          onSubmit={(values) => {
            dispatch(sendForm(values as formData));
          }}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                className="contact-form__input"
                value={values.name}
                placeholder={errors.name && touched.name ? errors.name : 'Ваше имя'}
              />

              <input
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className="contact-form__input"
                placeholder={touched.phone && errors.phone ? errors.phone : 'Ваш телефон'}
              />

              <button className="contact-form__send-form" type="submit" disabled={isDisabled}>
                {status === SendFormStatus.UPLOADING ? 'Идёт отправка' : 'Отправить запрос'}
              </button>
            </form>
          )}
        </Formik>
      </article>
    </div>
  );
};

export default ContactForm;
