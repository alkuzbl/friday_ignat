import { getCardsPack, updateCardsPack } from 'bll/middlewares';
import {
  packReducer,
  setCardsPackDataForRequest,
  setPage,
  setPageCount,
} from 'bll/reducers/packReducer/pack-slice';
import {
  CardsPackDataForRequestType,
  DataPackType,
  PackInitialStateType,
} from 'bll/reducers/packReducer/types';

let packInitialState: PackInitialStateType;

beforeEach(() => {
  packInitialState = {
    data: {
      cardPacks: [
        {
          _id: '1',
          user_id: '12345',
          user_name: 'Dimond@list.ru',
          private: false,
          name: 'asdasd',
          path: '/def',
          grade: 0,
          shots: 0,
          cardsCount: 2,
          type: 'pack',
          rating: 0,
          created: '2022-01-08T21:14:44.425Z',
          updated: '2022-01-08T21:15:10.168Z',
          more_id: '61b91c1ca732663958ceb125',
        },
        {
          _id: '2',
          user_id: '54321',
          user_name: 'nastyh1233@gmail.com',
          private: false,
          name: 'sdsds',
          path: '/def',
          grade: 0,
          shots: 0,
          cardsCount: 3,
          type: 'pack',
          rating: 0,
          created: '2022-01-08T20:30:35.073Z',
          updated: '2022-01-08T20:44:59.033Z',
          more_id: '61b65543655534000420210f',
        },
      ],
      page: 1,
      pageCount: 4,
      cardPacksTotalCount: 0,
      minCardsCount: 0,
      maxCardsCount: 103,
      token: 'f3a7c6b0-711a-11ec-92e8-0bc545103dad',
      tokenDeathTime: 1642316911259,
    },
    cardsPackDataForRequest: {} as CardsPackDataForRequestType,
  };
  return packInitialState;
});

test('CardsPackages should be installed when getCardsPack is fulfilled', () => {
  const data: DataPackType = {
    cardPacks: [
      {
        _id: '111',
        user_id: '12345',
        user_name: 'Dimond@list.ru',
        private: false,
        name: 'Test name',
        path: '/def',
        grade: 0,
        shots: 0,
        cardsCount: 2,
        type: 'pack',
        rating: 0,
        created: '2022-01-08T21:14:44.425Z',
        updated: '2022-01-08T21:15:10.168Z',
        more_id: '61b91c1ca732663958ceb125',
      },
      {
        _id: '222',
        user_id: '54321',
        user_name: 'nastyh1233@gmail.com',
        private: false,
        name: 'sdsds',
        path: '/def',
        grade: 0,
        shots: 0,
        cardsCount: 3,
        type: 'pack',
        rating: 0,
        created: '2022-01-08T20:30:35.073Z',
        updated: '2022-01-08T20:44:59.033Z',
        more_id: '61b65543655534000420210f',
      },
      {
        _id: '333',
        user_id: '12345',
        user_name: 'Sasha',
        private: false,
        name: 'Test name',
        path: '/def',
        grade: 0,
        shots: 0,
        cardsCount: 2,
        type: 'pack',
        rating: 0,
        created: '2022-01-08T21:14:44.425Z',
        updated: '2022-01-08T21:15:10.168Z',
        more_id: '61b91c1ca732663958ceb125',
      },
    ],
    page: 1,
    pageCount: 4,
    cardPacksTotalCount: 3750,
    minCardsCount: 0,
    maxCardsCount: 103,
    token: 'ff504140-71e2-11ec-844a-1f968609bc33',
    tokenDeathTime: 1642402830164,
  };
  const action = { type: getCardsPack.fulfilled.type, payload: data };

  const testState = packReducer(packInitialState, action);

  expect(testState.data.cardPacks[0].name).toBe('Test name');
  expect(testState.data.cardPacks[0]._id).toBe('111');
  expect(testState.data.cardPacks[1]._id).toBe('222');
  expect(testState.data.cardPacks[2]._id).toBe('333');
  expect(testState.data.cardPacks[2].user_name).toBe('Sasha');
  expect(testState.data.cardPacks.length).toBe(3);
});

test('CardsPack should be updated when updateCardsPack is fulfilled', () => {
  const data = {
    _id: '1',
    user_id: '12345',
    user_name: 'Dimond@list.ru',
    private: false,
    name: 'Test name',
    path: '/def',
    grade: 0,
    shots: 0,
    cardsCount: 2,
    type: 'pack',
    rating: 0,
    created: '2022-01-08T21:14:44.425Z',
    updated: '2022-01-08T21:15:10.168Z',
    more_id: '61b91c1ca732663958ceb125',
    __v: 0,
  };

  const action = { type: updateCardsPack.fulfilled.type, payload: data };
  const testState = packReducer(packInitialState, action);

  expect(testState.data.cardPacks[0].name).toBe('Test name');
  expect(testState.data.cardPacks.length).toBe(2);
  expect(packInitialState.data.cardPacks[0].name).toBe('asdasd');
});

test('PageCount should be updated', () => {
  const testState = packReducer(packInitialState, setPageCount({ pageCount: 8 }));

  expect(testState.data.pageCount).toBe(8);
  expect(packInitialState.data.pageCount).toBe(4);
});

test('The page should be updated', () => {
  const testState = packReducer(packInitialState, setPage({ page: 123 }));

  expect(testState.data.page).toBe(123);
  expect(packInitialState.data.page).toBe(1);
});

test('The data for the request to the server should be updated', () => {
  const testState = packReducer(
    packInitialState,
    setCardsPackDataForRequest({
      min: 3,
      max: 25,
      sortPacks: '1updated',
      packName: 'TestTest Name',
    }),
  );

  expect(testState.cardsPackDataForRequest.max).toBe(25);
  expect(testState.cardsPackDataForRequest.min).toBe(3);
  expect(testState.cardsPackDataForRequest.packName).toBe('TestTest Name');
  expect(testState.cardsPackDataForRequest.sortPacks).toBe('1updated');
  expect(packInitialState.cardsPackDataForRequest.max).toBe(undefined);
});
