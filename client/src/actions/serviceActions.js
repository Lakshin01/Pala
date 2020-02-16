import axios from 'axios';

import {
    ADD_CATEGORY,
    GET_ERRORS,
    GET_CATEGORYLIST,
    ADD_PLACE,
    GET_PLACELIST,
    GET_SERVICELISTS

} from './types';


//Add Category

export const addCategory =  postCategory => dispatch =>{

 axios
 .post('/api/service/addcategory',postCategory)
 .then(res =>
    dispatch({
        type:ADD_CATEGORY,
        payload:res.data
    })
  )
  .catch(err => 
    dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    })
  );
};


// Get all profiles
export const serviceListBar = () => dispatch => {

  axios
    .get('/api/service/categorylist')
    .then(res =>{
      // console.log(res);
      dispatch({
        type: GET_CATEGORYLIST,
        payload: res.data
      })
    }
    )
    .catch(err =>
      dispatch({
        type: GET_CATEGORYLIST,
        payload: null
      })
    );
};

//get placelist

export const listPlace = () =>dispatch =>{
  axios 
   .get('/api/service/placelist')
   .then(res =>{
    //  console.log(res)
     dispatch({
       type:GET_PLACELIST,
       payload:res.data
     
     })
   })
   .catch(err =>
    dispatch({
      type:GET_PLACELIST,
      payload:null
    })
    );
};



//Add Place

export const addPlace =  postPlace => dispatch =>{

  axios
  .post('/api/service/addplace',postPlace)
  .then(res =>
     dispatch({
         type:ADD_PLACE,
         payload:res.data
     })
   )
   .catch(err => 
     dispatch({
         type:GET_ERRORS,
         payload:err.response.data
     })
   );
 };
 


 export const addServiceProvider = (serviceProviderData, history) => dispatch => {
  axios
    .post('/api/service/addservice', serviceProviderData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const serviceData = (id) => dispatch => {

  axios
   .post('/api/service/servicelist',{"_id":id})
    .then(res =>{
    //  console.log(res)
     dispatch({
       type:GET_SERVICELISTS,
       payload:res.data
     
     })
    })
  //  console.log(GET_SERVICELIST);
   .catch(err=>
    dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))

}
