import { GradeLevel } from 'app/app-slice';

export type AppInitialStateType = {
  isInitialized: boolean;
  error: string | null;
  status: StatusType;
  modalWindow: ModalWindowType;
};
export type ModalWindowNameType =
  | null
  | 'delete-pack'
  | 'create-pack'
  | 'edit-pack-name'
  | 'create-card'
  | 'edit-card'
  | 'delete-card'
  | 'password-recovery-message'
  | 'learn';

export type ModalWindowPackType = {
  _id?: string;
  name?: string;
  rating?: number;
  private?: boolean;
};

export type ModalWindowCardType = {
  _id?: string;
  cardsPackId?: string;
  cardId?: string;
  question?: string;
  answer?: string;
  grade?: GradeLevel;
  shots?: number;
  rating?: number;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
  type?: string;
  email?: string;
};
export type ModalWindowDataType = ModalWindowPackType | ModalWindowCardType;

type ModalWindowType = {
  modalWindowStatus: boolean;
  modalWindowName: ModalWindowNameType;
  modalWindowData: ModalWindowDataType;
};
export type StatusType = 'idle' | 'loading' | 'succeed' | 'failed';
