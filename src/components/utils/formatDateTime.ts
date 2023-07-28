type FormatDateTime = {
  date: string;
  time: string;
};

export function formatDateTime(date: Date | number): FormatDateTime {
  if (typeof date === 'number') {
    date = new Date(date);
  }

  return {
    date: date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    time: date.toLocaleTimeString('en-us', { timeStyle: 'short' }),
  };
}
