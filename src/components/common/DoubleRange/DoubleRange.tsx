import React from 'react';

import 'rc-slider/assets/index.css';

import { RangeProps } from 'rc-slider';

import styles from './DoubleRange.module.scss';

const Slider = require('rc-slider');

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

type DoubleRangePropsType = {
  onChangeRange: (value: number[]) => void;
  value: number[];
} & RangeProps;

export const DoubleRange = (props: DoubleRangePropsType) => {
  const { value, onChangeRange, ...restProps } = props;

  return (
    <div className={styles.range}>
      <div className={styles.range__box}>
        <span className={styles.range__spanMin}>{value[0]}</span>
        <span className={styles.range__spanMax}>{value[1]}</span>
      </div>

      <Range
        handleStyle={[{ backgroundColor: '#21268F' }]}
        trackStyle={[{ backgroundColor: '#21268F' }]}
        className={styles.range__input}
        value={value}
        onChange={onChangeRange}
        {...restProps}
      />
    </div>
  );
};
