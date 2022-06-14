import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Login({ onLogin }: { onLogin: Function }) {
  const { t } = useTranslation();
  const onClickHandler = () => onLogin();

  return (
    <div className="flex h-full min-h-screen w-full">
      <div className="bg-gray-400 grow text-gray-500">
        <div className="p-11 h-full flex flex-col items-center justify-end justify-items-stretch">
          Ringabell bell bell...
        </div>
      </div>

      <div className="grow h-full">
        <div className="p-11 h-full flex flex-col items-center justify-center justify-items-stretch">
          <main className="w-80">
            <h1 className="text-3xl text-gray-700 first-letter:border-8 text-center my-7">{t('Login.title')}</h1>
            <p
              className="text-center text-sm text-gray-500  my-4"
            >
              The bell is strange. Please ringabell and make it ring again and again and again.
            </p>
            <form>
              <label htmlFor="login" className="mt-4 block">
                {t('Login.form.login.label')}
                <input id="login" type="text" className="my-2 border-2 border-gray-300 rounded-md w-full p-2" placeholder="name@ringabell.com" />
              </label>

              <label htmlFor="password" className="mt-2 block">
                {t('Login.form.password.label')}
                <input id="password" type="password" className="my-2 border-2 border-gray-300 rounded-md w-full p-2" placeholder="••••••••••" />
              </label>

              <p className="text-right">
                <a
                  href="https://www.ringabell.org"
                  title={t('Login.form.forgotPassword.a.title')}
                  className="text-xs underline text-blue-400"
                >
                  {t('Login.form.forgotPassword')}

                </a>
              </p>

              <button
                className="bg-gray-700 text-white my-8 px-4 py-2 w-full rounded-md"
                type="button"
                onClick={onClickHandler}
              >
                Login
              </button>

              <p className="text-xs">
                {t('Login.form.noAccount')}
                <a
                  href="https://www.ringabell.org"
                  title={t('Login.form.noAccount.a.title')}
                  className="ml-1 text-xs underline text-blue-400"
                >
                  {t('Login.form.signIn')}

                </a>
              </p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
