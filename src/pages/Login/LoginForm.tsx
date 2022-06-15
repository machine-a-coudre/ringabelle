import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LoginForm({ onSubmit, onToggleRetrieveHandler }:
  { onSubmit?: Function, onToggleRetrieveHandler?: Function }) {
  const { t } = useTranslation();
  const onSubmitHandler = () => onSubmit();
  const onClickHandler = () => onSubmitHandler();
  const onClickForgotPwdHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); onToggleRetrieveHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="login" className="mt-4 block">
        <span className="text-sm">{t('Login.form.login.label')}</span>
        <input
          id="login"
          type="text"
          placeholder="name@ringabell.com"
        />
      </label>

      <label htmlFor="password" className="mt-2 block">
        <span className="text-sm">{t('Login.form.password.label')}</span>
        <input
          id="password"
          type="password"
          placeholder="••••••••••"
        />
      </label>

      <p className="text-right">
        <a
          href="https://www.ringabell.org"
          title={t('Login.form.forgotPassword.a.title')}
          onClick={onClickForgotPwdHandler}
        >
          {t('Login.form.forgotPassword')}
        </a>
      </p>

      <button
        type="submit"
        onClick={onClickHandler}
      >
        {t('Login.form.submit.button')}
      </button>

      <p className="text-xs">
        {t('Login.form.noAccount')}
                &nbsp;
        <a
          href="https://www.ringabell.org"
          title={t('Login.form.noAccount.a.title')}
        >
          {t('Login.form.signIn')}
        </a>
      </p>
    </form>
  );
}
