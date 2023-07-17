type FormatDateTime = {
  date: string;
  time: string;
};

export function formatDateTime(
  date: Date,
  locale?: Intl.LocalesArgument
): FormatDateTime {
  return {
    date: date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    time: date.toLocaleTimeString(locale, { timeStyle: 'short' }),
  };
}
