const relativeFormatter = new Intl.RelativeTimeFormat('en', { style: 'short' });
export const inRelativeTime = (dateTime: Date) => {
  const diff = dateTime.getTime() - Date.now();
  for (const [unit, size] of timeSizes) {
    const diffInUnit = absFloor(diff / size);
    if (diffInUnit)
      return relativeFormatter.format(diffInUnit * Math.sign(diff), unit);
  }
  return 'Now';
};

const absFloor = (n: number) => Math.floor(Math.abs(n));

const timeSizes: [Intl.RelativeTimeFormatUnit, number][] = [
  ['day', 1000 * 60 * 60 * 24],
  ['hour', 1000 * 60 * 60],
  ['minute', 1000 * 60],
];

if (import.meta.vitest) {
  describe('inRelativeTime', () => {
    it('Returns the number of days until', () => {
      expect(
        inRelativeTime(new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000))
      ).toBe('in 2 days');
    });
    it('Returns hours when less than a day', () => {
      expect(
        inRelativeTime(new Date(Date.now() + 1000 * 60 * 60 * 2 + 1000))
      ).toBe('in 2 hr.');
    });
    it('Returns minutes when less than an hour', () => {
      expect(inRelativeTime(new Date(Date.now() + 1000 * 60 * 2 + 1000))).toBe(
        'in 2 min.'
      );
    });
    it('Returns Now for the current time', () => {
      expect(inRelativeTime(new Date())).toBe('Now');
    });
  });
}
