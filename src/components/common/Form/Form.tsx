import React, { FormEvent, useState } from 'react';

import { Button } from '../Button';
import { Input, InputChangeEventType } from '../Input/Input';

import style from './Form.module.scss';

type FormStateType = {
  [key: string]: string;
};

export const Form = () => {
  const [value, setValue] = useState<FormStateType>({});

  const onChangeInputFormHandler = (e: InputChangeEventType) => {
    const targetName = e.currentTarget.name;

    const fillFormData = () =>
      setValue({ ...value, [targetName]: e.currentTarget.value });

    switch (targetName) {
      case 'name':
        fillFormData();
        break;
      case 'email':
        fillFormData();
        break;
      case 'subject':
        fillFormData();
        break;
      case 'message':
        fillFormData();
        break;
      default:
        setValue({ ...value });
    }
  };
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    setValue({});
  };

  return (
    <form className={style.form} onSubmit={onSubmitHandler}>
      <div className={style.form__inner}>
        <div className={style.form__top}>
          <Input
            type="text"
            title="Name *"
            name="name"
            placeholder="Name"
            onChange={onChangeInputFormHandler}
            value={value.name}
          />
        </div>
        <div className={style.form__top}>
          <Input
            type="email"
            title="Email *"
            name="email"
            placeholder="Email"
            onChange={onChangeInputFormHandler}
            value={value.email}
          />
        </div>
      </div>

      <Input
        type="text"
        title="Subject *"
        name="subject"
        placeholder="Subject"
        onChange={onChangeInputFormHandler}
        value={value.subject}
      />

      <Input
        type="textarea"
        title="Message *"
        name="message"
        placeholder="Message"
        onChange={onChangeInputFormHandler}
        value={value.message}
      />

      <div className={style.form__innerBtn}>
        <Button
          title="SEND A MESSAGE"
          stylesElement={style.form__submitBtn}
          type="submit"
        />
      </div>
    </form>
  );
};
