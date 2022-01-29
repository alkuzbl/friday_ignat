import React, { FC, memo, useEffect, useState } from 'react';

import Slider from '@mui/material/Slider';

import styles from 'components/common/DoubleRange/style/DoubleRange.module.scss';
import { DoubleRangeMUIPropsType } from 'components/common/DoubleRangeMUI/types';

export const DoubleRangeMUI: FC<DoubleRangeMUIPropsType> = memo(props => {
  const { min, max, submitValueAfterChange } = props;

  const [value, setValue] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (min !== undefined && max !== undefined) setValue([min, max]);
  }, [min, max]);

  const handleSubmitValue = () => submitValueAfterChange(value);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
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
      <Slider
        sx={{
          color: '#21268F',
        }}
        size="small"
        value={value}
        min={min}
        max={max}
        disableSwap
        onMouseUp={handleSubmitValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
});
