import axios from 'axios'

const api = 'https://api.unsplash.com/photos/random?client_id=EsQvkbBOFE-PZi8y8qDrtYEAM7UeFJqY02zG3Wifcoc&query=landscape,desert,nature,cloud,wallpaper,mountain,lake,sunshine,backgrounds'

const instance = axios.create({
  withCredentials: false,
})

export function getWallpaper() {
    return instance.get(api)
        .then(response => {
            return response.data
        })
}