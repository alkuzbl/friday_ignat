import React, { memo, useEffect, useState } from 'react';

import 'rc-slider/assets/index.css';

import styles from './style/DoubleRange.module.scss';
import { DoubleRangePropsType } from './types';

const Slider = require('rc-slider');

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const DoubleRange = memo((props: DoubleRangePropsType) => {
  const { min, max, ...restProps } = props;

  const [value, setValue] = useState<number | number[]>([0, 0]);

  useEffect(() => {
    if (min !== undefined && max !== undefined) setValue([min, max]);
  }, [min, max]);

  const handleOnChange = (newValue: number | number[]) => {
    setValue(newValue);
  };

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
        onChange={handleOnChange}
        value={value}
        {...restProps}
      />
    </div>
  );
});
