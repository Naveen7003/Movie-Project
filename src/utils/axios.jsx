import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        accept:"application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjYyMjJkMTIzOTg3MWZjNGI2ZWVlMTg2MDAsMTFkOTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPjuX67gktlPrfCrY6ZuR7XmSbZESAcyaqvSu8swMOLI"
    }

})
export default instance