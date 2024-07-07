export {removeMovie} from "../reducers/movieSlice"  //sedha ate hi export kar diya taki user reducer tak nhi pahuche path ke zariye sedha action mil jaye
import axios from "../../utils/axios"
import { loadmovie } from "../reducers/movieSlice"

export const asyncloadmovie = async(id) => (dispatch, getState) => {    //dispatch se hum actions store pr bhejte hai ki kya action perform krna hai aur getState se hum current state ko access krte hai and make decision on that state
    try {
        const detail = axios.get(`/movie/${id}`)
        const externalid = axios.get(`/movie/${id}/external_ids`)
        const recommendations = axios.get(`/movie/${id}/recommendations`)
        const similar = axios.get(`/movie/${id}/similar`)
        const videos = axios.get(`/movie/${id}/videos`)
        const watchproviders = axios.get(`/movie/${id}/watchproviders`)
    } catch (error) {
        
    }
}