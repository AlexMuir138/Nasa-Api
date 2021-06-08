const { default: axios } = require('axios')
const { AppState } = require('../AppState')

class ImagesService {
  async findImages() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=cKefCmB8hK7tzMYaPr4nZC0XcaqmCuraVNA4p6g9&date=' + AppState.currentQuery)
    AppState.images = res.data
  }
}
export const imagesService = new ImagesService()
