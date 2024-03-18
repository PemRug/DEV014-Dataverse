import { filterData} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


describe('testDataFunctions', () => {
  const expected = [{// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },];
  it('devuelve `filterData` con array de objetos key:value', () => {
    expect(filterData(fakeData, 'location', 'Alajuela')).toEqual(expected);
  });
});