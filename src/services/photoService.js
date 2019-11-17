import config from '../assets/config';

function getRequestOptions() {
    return {
        method: 'GET',
        headers: {'Authorization': config.API_key}
    }
}

function handleResponse(resp) {
    return resp.text().then(text => {
        if (!resp.ok)
            return Promise.reject(resp.statusText);
        else
            return Promise.resolve(JSON.parse(text));
    })
}

function loadRandomPhoto() {
    const page = Math.round(Math.random() * 1000);

    return fetch(`${config.src}/search?query=dark+wallpaper&per_page=1&page=${page}`,
        getRequestOptions())
        .then(handleResponse)
}

function loadCuratedPhotos(page) {
    return fetch(`${config.src}/curated?per_page=${config.per_page}&page=${page}`,
        getRequestOptions())
        .then(handleResponse)
}

function loadSearchPhotos(query, page) {
    return fetch(`${config.src}/search?query=${query}&per_page=${config.per_page}&page=${page}`,
        getRequestOptions())
        .then(handleResponse)
}

export const photoService = {
    loadRandomPhoto,
    loadCuratedPhotos,
    loadSearchPhotos
}