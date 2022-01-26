import React from 'react';

import 'rc-slider/assets/index.css';

import styles from './style/DoubleRange.module.scss';
import { DoubleRangePropsType } from './types';

const Slider = require('rc-slider');

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const DoubleRange = (props: DoubleRangePropsType) => {
  const { min, max, ...restProps } = props;

  if (!min && !max) {
    return <div>Карточки отсутствуют</div>;
  }

  return (
    <div className={styles.range}>
      <div className={styles.range__box}>
        <span className={styles.range__spanMin}>{min}</span>
        <span className={styles.range__spanMax}>{max}</span>
      </div>

      <Range
        handleStyle={[{ backgroundColor: '#21268F' }]}
        trackStyle={[{ backgroundColor: '#21268F' }]}
        className={styles.range__input}
        min={min}
        max={max}
        defaultValue={[min, max]}
        {...restProps}
      />
    </div>
  );
};
