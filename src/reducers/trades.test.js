import tradesReducer from './tradesReducer';

describe('tradesReducer reducer', () => {
    it('should handle initial state', () => {
        expect(tradesReducer(undefined, { type: '@@INIT' })).toEqual([]);
    });
});
