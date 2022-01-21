import { UserProfileDataType } from '../bll/userProfile-slice';

import { instance } from './instance-axios';

export const userAPI = {
  getUser: (data: { id: string }) =>
    instance.get<UserProfileDataType>('social/user', { params: data }),
};
