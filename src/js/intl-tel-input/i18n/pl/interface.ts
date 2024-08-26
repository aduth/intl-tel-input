//* Polish. Translated by: Mateusz Bronis (bronisMateusz) https://github.com/bronisMateusz.
import { I18n } from "../types";

const interfaceTranslations: I18n = {
  selectedCountryAriaLabel: "Wybrany kraj",
  noCountrySelected: "Nie wybrano kraju",
  countryListAriaLabel: "Lista krajów",
  searchPlaceholder: "Szukaj",
  zeroSearchResults: "Nie znaleziono wyników",
  oneSearchResult: "Znaleziono 1 wynik",
  multipleSearchResults: "Znaleziono ${count} ${count > 1 && count < 5 ? 'wyniki' : 'wyników'}",
  
  // additional countries (not supported by country-list library)
  ac: "Wyspa Wniebowstąpienia",
  xk: "Kosowo",
};

export default interfaceTranslations;