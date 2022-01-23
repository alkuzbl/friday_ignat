import React from 'react';
import 'components/common/Spinner/style/Spinner.scss';

export const Spinner = () => (
  <div className="spinner-wrapper">
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);
