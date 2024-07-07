export {removemovie} from "../reducers/movieSlice"  //sedha ate hi export kar diya taki user reducer tak nhi pahuche path ke zariye sedha action mil jaye
import axios from "../../utils/axios"
import { loadmovie } from "../reducers/movieSlice"

export const asyncloadmovie = (id) => async(dispatch, getState) => {    //dispatch se hum actions store pr bhejte hai ki kya action perform krna hai aur getState se hum current state ko access krte hai and make decision on that state
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const videos = await axios.get(`/movie/${id}/videos`)
        const watchproviders = await axios.get(`/movie/${id}/watchproviders`)
        let theultimatedetails ={
            detail : detail.data,
            externalid : externalid.data,
            recommendations : recommendations.data,
            similar : similar.data,
            videos : videos.data,
            watchproviders : watchproviders.data
        }
        console.log(theultimatedetails)
    } catch (error) {
        console.log(error)
    }
}