import { ADD_PLACE,SET_PLACES } from '../action/places-action'
import Place from '../../../utils/models/places'

const initialState = {
    places:[]
}
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_PLACES:
            return{
                places:action.places.map(pl=>new Place(
                    pl.id.toString(), 
                    pl.title ,pl.imageUrl,
                    pl.address,
                    pl.lat,
                    pl.long
                    ))
            }
        case ADD_PLACE:
            const newPlace = new Place(
            action.placeData.id.toString(),
            action.placeData.title,
            action.placeData.image,
            action.placeData.address,
            action.placeData.coords.lat,
            action.placeData.coords.long
            )
            return {
                places:state.places.concat(newPlace)
            }
            default:
                return state
    }
}