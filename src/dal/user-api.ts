import { instance } from './instance-axios';

import { UserProfileDataType } from 'bll/reducers/types';

export const userAPI = {
  getUser: (data: { id: string }) =>
    instance.get<UserProfileDataType>('social/user', { params: data }),
};
