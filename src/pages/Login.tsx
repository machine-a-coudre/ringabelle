import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import LoginForm from './Login/LoginForm';
import RetrievePwdForm from './Login/RetrievePwdForm';

export default function Login({ onLogin }: { onLogin: Function }) {
  const [askRetrievePwd, setAskRetrievePwd] = useState(false);
  const { t } = useTranslation();
  const onSubmitHandler = () => onLogin();
  const onToggleRetrieveHandler = () => { setAskRetrievePwd(!askRetrievePwd); };

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
            <h1 className="text-3xl text-gray-700 first-letter:border-8 text-center my-7">
              {t('Login.title')}
            </h1>
            <p
              className="text-center text-sm text-gray-500  my-4"
            >
              The bell is strange. Please ringabell and make it ring again and again and again.
            </p>
            {!askRetrievePwd
              && (
              <LoginForm
                onSubmit={onSubmitHandler}
                onToggleRetrieveHandler={onToggleRetrieveHandler}
              />
              )}
            {askRetrievePwd && <RetrievePwdForm onSubmit={onSubmitHandler} />}
          </main>
        </div>
      </div>
    </div>
  );
}
