import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export const ContactUs = () => {
  const form = useRef();
  const {t} = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4n34er', 'template_8wbpnrq', form.current, 'j0D-xKh_GN6qAR8DY') //email saatmine
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>{t('Name')}</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>{t('Phone')}</label>
      <input type="text" name="from_phone" />
      <label>{t('Message')}</label>
      <textarea name="message" />
      <input type="submit" value={t("Send")} />
    </form>
  );
};

