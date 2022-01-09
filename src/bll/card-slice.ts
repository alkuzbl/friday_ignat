import { createSlice } from '@reduxjs/toolkit';

const cardsInitialState = {
  cards: {
    '61d9e33e9024d40020e8917a': [
      {
        _id: '61d9e5e79024d40020e8918a',
        cardsPack_id: '61d9e33e9024d40020e8917a',
        user_id: '61ce52376ffc5b27ac5e96b0',
        answer: 'Логику нужно написать, вот пробую обновить',
        question: 'Еще много делать?',
        grade: 5,
        shots: 0,
        comments: 'Первый комментарий...',
        type: 'card',
        rating: 0,
        more_id: '61ce52376ffc5b27ac5e96b0',
        created: '2022-01-08T19:28:39.742Z',
        updated: '2022-01-08T19:49:48.617Z',
        __v: 0,
        answerImg: '',
        answerVideo: '',
        questionImg: '',
        questionVideo: '',
      },
      {
        _id: '61d9e4e19024d40020e89181',
        cardsPack_id: '61d9e33e9024d40020e8917a',
        user_id: '61ce52376ffc5b27ac5e96b0',
        answer: 'Все отлично',
        question: 'Все ли получается по учебе?',
        grade: 5,
        shots: 0,
        comments: '',
        type: 'card',
        rating: 0,
        more_id: '61ce52376ffc5b27ac5e96b0',
        created: '2022-01-08T19:24:17.033Z',
        updated: '2022-01-08T19:24:17.033Z',
        __v: 0,
      },
    ],
  },
  packUserId: '61ce52376ffc5b27ac5e96b0',
  page: 1,
  pageCount: 4,
  cardsTotalCount: 2,
  minGrade: 0,
  maxGrade: 6,
  token: 'cef82e70-7126-11ec-92e8-0bc545103dad',
  tokenDeathTime: 1642322003671,
  error: null,
  status: 'idle',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  reducers: {
    setCards: () => {},
    createCard: () => {},
    deleteCard: () => {},
    updateCard: () => {},
    setPageCount: () => {},
    setErrorCard: () => {},
    setStatusCard: () => {},
  },
});

// reducer
export const cardsReducer = cardsSlice.reducer;

// actions
export const { deleteCard, setCards, updateCard, createCard } = cardsSlice.actions;
