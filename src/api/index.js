const api = 'https://restcountries.eu/rest/v2';
export const fetchCountries = async () => {
    try {
        const fetchReq = await fetch(`${api}/all`)
        return await fetchReq.json();
    } catch (error) {
        console.error(error);
    }
}
export const searchByName = async (value) => {
    try {
        const fetchReq = await fetch(`${api}/name/${value}`);
        return await fetchReq.json();
    } catch (error) {
        console.log(error);
    }
}
export const dropdownFilter = async (list) => {
    try {
        const fetchReq = await fetch(`${api}/region/${list}`);
        return await fetchReq.json();
    } catch (error) {
        console.error(error);
    }
}