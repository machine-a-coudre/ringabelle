import React from 'react';
import { useTranslation } from 'react-i18next';

export default function RetrievePwdForm({ onSubmit }: { onSubmit?: Function }) {
  const { t } = useTranslation();
  const onSubmitHandler = () => onSubmit();
  const onClickHandler = () => onSubmitHandler();

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="email" className="mt-4 block">
        <span className="text-sm">Your email</span>
        <input
          id="email"
          type="text"
          placeholder="name@ringabell.com"
        />
      </label>

      <button
        type="submit"
        onClick={onClickHandler}
      >
        Send email
      </button>

      <p className="text-xs">
        <a
          href="https://www.ringabell.org"
          title={t('Login.form.noAccount.a.title')}
        >
          Back
        </a>
      </p>
    </form>
  );
}
