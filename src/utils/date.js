export const format_date = (date) => {
  const split = date.split('-');
  return `${split[2]}-${split[1]}-${split[0]}`;
};
