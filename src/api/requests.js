import { request } from "../utils/request";

export const getListOfCountries = () =>
  request.get(`/countries`).then(response => response.data);

export const getCountryInformation = countryCode =>
  request.get(`/country?code=` + countryCode).then(response => response.data);
