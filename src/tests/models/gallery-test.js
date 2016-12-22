import expect from 'expect';
import gallery from '../../models/gallery';

describe('gallery', () => {

  describe('reducer', () => {
    it('data load success', () => {
      expect(example.reducers['gallery/query']({}, { payload: { a: 1 }})).toEqual({ a: 1 });
    });
  })
});
