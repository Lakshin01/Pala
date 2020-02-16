import {
    ADD_CATEGORY,
    GET_CATEGORYLIST,
    ADD_PLACE,
    GET_PLACELIST,
    GET_SERVICELISTS
    
}from '../actions/types';

const initialState ={
    category:[],
    place:[],
    servicedatas:null

    
    
};

export default function (state = initialState, action){
  switch (action.type){
      case ADD_CATEGORY:
          return{
              ...state,
         //category:[action.payload, ...state.category]
          };
      case GET_CATEGORYLIST:
        return {
          ...state,
          category: action.payload

        };

        case ADD_PLACE:
          return{
              ...state,
         //category:[action.payload, ...state.category]
          };
          case GET_PLACELIST:
            return{
              ...state,
              place:action.payload

            };
            case GET_SERVICELISTS:
              return{
                ...state,
                servicedatas: action.payload
              };
         default:
           return state;
  }

}