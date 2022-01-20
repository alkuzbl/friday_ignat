import React from 'react';

import 'rc-slider/assets/index.css';

import { RangeProps } from 'rc-slider';

import styles from './DoubleRange.module.scss';

const Slider = require('rc-slider');

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

type DoubleRangePropsType = RangeProps;

export const DoubleRange = (props: DoubleRangePropsType) => {
  const { min, max, ...restProps } = props;

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
        {...restProps}
      />
    </div>
  );
};
