export {removeperson} from "../reducers/personSlice"  //sedha ate hi export kar diya taki user reducer tak nhi pahuche path ke zariye sedha action mil jaye
import axios from "../../utils/axios"
import { loadperson } from "../reducers/personSlice"

export const asyncloadperson = (id) => async(dispatch, getState) => {    //dispatch se hum actions store pr bhejte hai ki kya action perform krna hai aur getState se hum current state ko access krte hai and make decision on that state
    try {
        const detail = await axios.get(`/person/${id}`)
        const externalid = await axios.get(`/person/${id}/external_ids`)
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`)
        const tvCredits = await axios.get(`/person/${id}/tv_credits`)
        const movieCredits = await axios.get(`/person/${id}/movie_credits`)
        let theultimatedetails ={
            detail : detail.data,
            externalid : externalid.data,
            combinedCredits : combinedCredits.data,
            tvCredits : tvCredits.data,
            movieCredits : movieCredits.data
        }
        dispatch(loadperson(theultimatedetails))
    } catch (error) {
        console.log(error)
    }
}