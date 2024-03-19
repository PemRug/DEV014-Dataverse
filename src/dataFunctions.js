// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const filterData = (data, filterBy, value) => {
  return data.filter(tour=> tour[filterBy] === value);
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy==='name') {
    if (sortOrder==='asc') {
      return data.sort((a,b) => a.name.localeCompare(b.name));
    } else {
      return data.sort((a,b) => b.name.localeCompare(a.name));
    }
  }
  else{
    if (sortOrder==='asc') {
      return data.sort((a,b) => a[sortBy] - b[sortBy]);
    } else {
      return data.sort((a,b) => b[sortBy] - a[sortBy]);
    }
  }
};


//sortData(data, sortBy, sortOrder)