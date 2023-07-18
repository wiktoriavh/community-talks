export const inLocaleTime = (date: Date) =>
  date.toLocaleTimeString('en-US', timeOptions);

const timeOptions: Intl.DateTimeFormatOptions = {
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
};
