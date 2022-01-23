import React, { useEffect, useState } from 'react';

import 'rc-slider/assets/index.css';

import styles from './style/DoubleRange.module.scss';
import { DoubleRangePropsType } from './types';

const Slider = require('rc-slider');

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const DoubleRange = (props: DoubleRangePropsType) => {
  const { min, max, ...restProps } = props;

  const [value, setValue] = useState([0, 0]);

  useEffect(() => {
    if (min !== undefined && max !== undefined && min !== null && max !== null) {
      setValue([min, max]);
    }
  }, [min, max]);

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
        defaultValue={value}
        {...restProps}
      />
    </div>
  );
};
