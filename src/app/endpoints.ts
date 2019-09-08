const apiKey = `4y1LOBRNzXZ8NAjQ2DgadzXK0cQG9q5J`;
// const apiKey = `33fTfLndF5EtGK9wXcMLAz1A38OhudSJ`;

const searchLanguage = `en-us`;
export const rootUrl = `http://dataservice.accuweather.com/`;

export const geoposition = `${rootUrl}locations/v1/cities/geoposition/search`;

export const AutocompleteUrl = `${rootUrl}locations/v1/cities/autocomplete`;
export const CurrentlocationeUrl = `${rootUrl}/currentconditions/v1/`;
export const FiveDayseUrl = `${rootUrl}/forecasts/v1/daily/5day/`;


export const QueryURL = `?apikey=${apiKey}&language=${searchLanguage}`;




// module.exports = { searchUrl, bar }
