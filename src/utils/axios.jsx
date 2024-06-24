import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmRjOWQyN2RmZTI3YjVlYmY3NTI3MDczYjczYzExZiIsIm5iZiI6MTcxOTE2MTY4Mi4wNzQ2ODIsInN1YiI6IjY2Nzg0ZjU0N2RmNTJlYjY5YWZjMmRmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d18qfY_afA-rR_YzMczYPwtaqHcXMJgmydFifI71Gts'
      }

})
export default instance