import React, { SyntheticEvent } from 'react';

import { Alert, Snackbar, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { clearErrorApp } from 'app/app-slice';
import { AppInitialStateType } from 'app/types';
import { AppStoreType } from 'bll/store';

export const ErrorMessage = () => {
  const dispatch = useDispatch();

  const { error, status } = useSelector<AppStoreType, AppInitialStateType>(
    state => state.app,
  );

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearErrorApp());
  };
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={status === 'failed'} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
