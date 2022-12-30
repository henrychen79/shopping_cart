
const fetchData = async (url, obj = {}) => {

    const init = {
        method: 'GET',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    }

    let response = await fetch(url, init);
    let json = await response.json();


    return json
}


export { fetchData }