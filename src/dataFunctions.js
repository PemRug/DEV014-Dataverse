// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const filterData = (data,filterProvincia) => {
  const newData = new Map([...data.entries()].filter(([key,value]) => {
     return value.location === filterProvincia.value;
}));
  return newData;
};
