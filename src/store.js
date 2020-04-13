import  {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage:0,
    rent: 0
}

export const HOME_INFO = 'HOME_INFO'
export const ADD_IMAGE = 'ADD_IMAGE'

const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case HOME_INFO:
            return {...state, ...payload}
        default:
            break
    }
    switch(type){
        case ADD_IMAGE:
            return {...state, ...payload}
            default:
                break
    }
 }

export default createStore(reducer)