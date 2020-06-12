import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CovidHeader from './CovidHeader';
import CovidTabs from './CovidTabs';

import styles from 'styled-components';

export default function Covid19() {
  return (
    <>
      <CovidHeader />
      <CovidTabs />
    </>
  );
}
