import {questionsAPI} from "../api/api"
const SET_QUESTIONS = "SET_QUESTIONS"
const initialState = {
    
    questionsList: []
}
const questionsReducer = (state = initialState, action) =>{

    switch (action.type){
        case SET_QUESTIONS:
            return {...state,questionsList: action.payload}
        default:
            return state
    }
}
export const setQuestions = (payload) => ({type: SET_QUESTIONS, payload})
export const getQuestions = () => async (dispatch) =>{
    const response = await questionsAPI.getQuestions()
    console.log(response)
    if(response.response_code === 0) {
        setQuestions(response.result)
    }
}
export default questionsReducer