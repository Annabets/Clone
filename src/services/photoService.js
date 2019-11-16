import config from '../assets/config';

function getRandomPhoto() {
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': config.API_key},
    };
    const page = Math.round(Math.random() * 1000);

    return fetch(`https://api.pexels.com/v1/search?query=dark+wallpaper&per_page=1&page=${page}`, requestOptions)
        .then(resp=>{
            return resp.text().then(text =>{
                if(!resp.ok)
                    return Promise.reject(resp.statusText);
                else
                    return Promise.resolve(JSON.parse(text));
            })
    })
}

export const photoService = {
    getRandomPhoto
}