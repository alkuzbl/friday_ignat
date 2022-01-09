import {
  createPack,
  packReducer,
  removePack,
  setPacks,
  setPageCount,
  updatePack,
} from './pack-slice';

let packInitialState: any;

beforeEach(() => {
  packInitialState = {
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
        __v: 0,
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
        __v: 0,
      },
    ],
    page: 1,
    pageCount: 4,
    cardPacksTotalCount: 3771,
    minCardsCount: 0,
    maxCardsCount: 103,
    token: 'f3a7c6b0-711a-11ec-92e8-0bc545103dad',
    tokenDeathTime: 1642316911259,
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
  expect(testState.cardPacks[0].name).toBe('Test name');
  expect(testState.cardPacks.length).toBe(2);
  expect(packInitialState.cardPacks[0].name).toBe('asdasd');
});

test('CardsPack should be removed', () => {
  const testState = packReducer(packInitialState, removePack({ _id: '1' }));
  expect(testState.cardPacks.length).toBe(1);
  expect(packInitialState.cardPacks.length).toBe(2);
  expect(packInitialState.cardPacks[0].name).toBe('asdasd');
  expect(packInitialState.cardPacks[1].name).toBe('sdsds');
});

test('CardsPack should be added', () => {
  const data = {
    _id: '3',
    user_id: '12345',
    user_name: 'Test@list.ru',
    private: true,
    name: 'Test name',
    path: '/def',
    grade: 0,
    shots: 0,
    cardsCount: 0,
    type: 'pack',
    rating: 0,
    created: '2022-01-08T21:14:44.425Z',
    updated: '2022-01-08T21:15:10.168Z',
    more_id: '61b91c1ca732663958ceb125',
    __v: 0,
  };

  const testState = packReducer(packInitialState, createPack(data));
  expect(testState.cardPacks[0].user_name).toBe('Test@list.ru');
  expect(testState.cardPacks[2].name).toBe('sdsds');
  expect(testState.cardPacks.length).toBe(3);
  expect(packInitialState.cardPacks.length).toBe(2);
});

test('CardsPacks should be updated', () => {
  const data = [
    {
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
      __v: 0,
    },
  ];

  const testState = packReducer(packInitialState, setPacks(data));
  expect(testState.cardPacks[0].name).toBe('Test name');
  expect(testState.cardPacks.length).toBe(2);
});

test('CardsPack should be added and replace the old array', () => {
  const data = [
    {
      _id: '3',
      user_id: '111',
      user_name: 'Test',
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
    },
    {
      _id: '4',
      user_id: '54321',
      user_name: 'Test2',
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
      __v: 0,
    },
  ];

  const testState = packReducer(packInitialState, setPacks(data));
  expect(testState.cardPacks[0].user_name).toBe('Test');
  expect(testState.cardPacks[1].user_name).toBe('Test2');
  expect(testState.cardPacks[1]._id).toBe('4');
  expect(testState.cardPacks[1].user_id).toBe('54321');
  expect(testState.cardPacks.length).toBe(2);
  expect(packInitialState.cardPacks.length).toBe(2);
  expect(packInitialState.cardPacks[1].name).toBe('sdsds');
});

test('PageCount should be updated', () => {
  const testState = packReducer(packInitialState, setPageCount({ pageCount: 8 }));
  expect(testState.pageCount).toBe(8);
  expect(packInitialState.pageCount).toBe(4);
});
