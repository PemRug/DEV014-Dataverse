// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const filterData = (data, filterBy, value) => {
  const newData = data.filter(tour=> tour[filterBy] === value.value);
  return newData;
};
