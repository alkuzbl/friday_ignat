import React, { FC } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

type BackDropPropsType = {
  active: boolean;
};
export const BackDrop: FC<BackDropPropsType> = ({ active }) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
    open={active}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);
