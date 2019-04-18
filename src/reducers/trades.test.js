import trades from './trades';

describe('trades reducer', () => {
    it('should handle initial state', () => {
        expect(trades(undefined, { type: '@@INIT' })).toEqual([]);
    });
});
