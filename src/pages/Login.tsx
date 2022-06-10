import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Login({ onLogin }: { onLogin: Function }) {
  const { t } = useTranslation();
  const onClickHandler = () => onLogin();

  return (
    <div className="flex h-full min-h-screen w-full">
      <div className="bg-gray-500 grow text-white">
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
              <button
                className="bg-gray-700 text-white my-9 px-4 py-2 w-full rounded-md"
                type="button"
                onClick={onClickHandler}
              >
                Login
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
