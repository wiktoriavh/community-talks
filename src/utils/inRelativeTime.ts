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
