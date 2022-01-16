import {
  DataPackType,
  PackInitialStateType,
  packReducer,
  setErrorCardsPack,
  setPacks,
  setPageCount,
  setStatusCardsPack,
  updatePack,
} from './pack-slice';

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
      error: '',
    },
    status: 'idle',
  };
  return packInitialState;
});

test('CardsPack should be updated', () => {
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

  const testState = packReducer(packInitialState, updatePack(data));

  expect(testState.data.cardPacks[0].name).toBe('Test name');
  expect(testState.data.cardPacks.length).toBe(2);
  expect(packInitialState.data.cardPacks[0].name).toBe('asdasd');
});

test('CardsPackages should be installed', () => {
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
    error: '',
  };

  const testState = packReducer(packInitialState, setPacks(data));

  expect(testState.data.cardPacks[0].name).toBe('Test name');
  expect(testState.data.cardPacks[0]._id).toBe('111');
  expect(testState.data.cardPacks[1]._id).toBe('222');
  expect(testState.data.cardPacks[2]._id).toBe('333');
  expect(testState.data.cardPacks[2].user_name).toBe('Sasha');
  expect(testState.data.cardPacks.length).toBe(3);
});

test('PageCount should be updated', () => {
  const testState = packReducer(packInitialState, setPageCount({ pageCount: 8 }));

  expect(testState.data.pageCount).toBe(8);
  expect(packInitialState.data.pageCount).toBe(4);
});

test('The status should be updated', () => {
  const testState = packReducer(packInitialState, setStatusCardsPack('succeed'));

  expect(testState.status).toBe('succeed');
  expect(packInitialState.status).toBe('idle');
  expect(testState.data.pageCount).toBe(4); // проверяю, что не перезатер data
});

test('An error should be added to the cardsPack', () => {
  const testState = packReducer(packInitialState, setErrorCardsPack('Test error'));

  expect(testState.data.error).toBe('Test error');
  expect(testState.data.pageCount).toBe(4); // проверяю, что не перезатер data
});
