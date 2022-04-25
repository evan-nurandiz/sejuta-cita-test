import axios from 'axios'


//API MIDDLEWARE

const API = axios.create({
    baseURL: 'https://asia-southeast2-sejutacita-app.cloudfunctions.net',
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json'
    }
})

export default API