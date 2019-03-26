import traders from './traders';

describe('traders reducer', () => {
    it('should handle initial state', () => {
        expect(traders(undefined, { type: '@@INIT' })).toEqual([]);
    });
});
