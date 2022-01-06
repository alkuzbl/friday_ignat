import React, { useState } from 'react';

import styles from './ButtonsBoxPacksList.module.scss';

export const ButtonsBoxPacksList = () => {
  const [active, setActive] = useState<boolean>(true);
  const getMyCards = () => {
    setActive(!active);
  };
  const getAllCards = () => {
    setActive(!active);
  };
  const activeStyle = `${styles.buttonBox__btn} ${styles.active}`;
  return (
    <div className={styles.buttonBox}>
      <h3 className={styles.buttonBox__title}>Show packs cards</h3>
      <div className={styles.buttonBox__inner}>
        <button
          className={!active ? activeStyle : styles.buttonBox__btn}
          type="button"
          onClick={getMyCards}
        >
          My
        </button>
        <button
          className={active ? activeStyle : styles.buttonBox__btn}
          type="button"
          onClick={getAllCards}
        >
          All
        </button>
      </div>
    </div>
  );
};
