import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Parameters() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '20rem' }}>
      <h1>{t('Parameters.title')}</h1>
      <p>{t('Parameters.describe')}</p>
    </main>
  );
}
