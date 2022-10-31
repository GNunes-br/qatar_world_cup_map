import server from '../mocks/server.json';
import { Country } from '../models/country';

export function getCountries(): Array<Country> {
  const countries: Array<Country> = [];

  server.data.forEach((coutry, index) => {
    countries.push({
      id: index,
      name: coutry.Country_Name,
      group: coutry.Group,
      image: coutry.Flag_Image,
      coordinate: {
        latitude: +coutry.Latitude,
        longitude: +coutry.Longitude,
      },
    });
  });

  return countries;
}
