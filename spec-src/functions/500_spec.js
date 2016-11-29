import sut from '../../bot/lib/functions/500';

describe('500', () => {
  it('is a function', () => typeof sut === 'function');

  it('returns statusCode of 500', () => {
    sut(null, null, (err, response) => {
      expect(err).toBeNull();

      expect(response).not.toBeUndefined();
      expect(response).not.toBeNull();
      expect(response.statusCode).not.toBeUndefined();
      expect(response.statusCode).not.toBeNull();
      expect(response.statusCode).toEqual(500);
    });
  });
});
