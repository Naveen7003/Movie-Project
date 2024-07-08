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
        const translations = await axios.get(`/movie/${id}/translations`)
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`)
        let theultimatedetails ={
            detail : detail.data,
            externalid : externalid.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data.results.find((m) => m.type === "Trailer"),
            translations : translations.data.translations.map((t) => t.english_name),
            watchproviders : watchproviders.data.results.IN,
        }
        dispatch(loadmovie(theultimatedetails))
    } catch (error) {
        console.log(error)
    }
}