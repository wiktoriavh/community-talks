import { formatDateTime } from '../formatDateTime';

describe('formatDateTime', () => {
  it('format the date in en-US', () => {
    const date = new Date(2020, 0, 1, 16, 30);
    expect(formatDateTime(date)).toStrictEqual({
      date: 'January 1, 2020',
      time: '4:30 PM',
    });
  });
  it('throw TypeError on wrong input', () => {
    const date = 'foo';
    // @ts-expect-error testing wrong input
    expect(() => formatDateTime(date, 'en-US')).toThrowError();
  });
});
