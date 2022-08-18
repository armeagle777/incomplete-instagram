

const API_URL = 'https://api.unsplash.com/photos/?per_page=30&client_id=QqAYARB-GuKrtcT07RWoDjszTTjLYfkZZPl2FFqgXXs&page='



export function getDataFromApi(page=1){
    // return fetch(API_URL + endpoint).then(resp => resp.headers.get('X-Total')).then(data => console.log(data))
    return fetch(API_URL + page).then(res => res.json())
}

export function getSearchDataFromApi(queryParam='usa',page=1){
    return fetch(`https://api.unsplash.com/search/photos?per_page=30&client_id=QqAYARB-GuKrtcT07RWoDjszTTjLYfkZZPl2FFqgXXs&page=${page}&query=${queryParam}`).then(res => res.json())
}