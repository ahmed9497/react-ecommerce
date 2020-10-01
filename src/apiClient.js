import axios from 'axios';

// import store from '../src/index'; // for error handling for api response
// import { ToastContainer, toast, Slide } from 'react-toastify';
const baseUrl = 'http://54.186.118.166:3940/api/v1/en';  //Staging
// const baseUrl = 'http://54.71.30.131:3000/api/v1';  //Staging
// const baseUrl = 'http://192.168.1.40:3000/api/v1';   //local connection


// GEt Method for get request 
axios.defaults.withCredentials = true;
const GET = async (url) => {

    const response = await axios.get(`${baseUrl}/${url}`);
    const { data } = response;
    // if (data.response === 304) logOut();
    // else
    return response;


}

// POST Method for post request 
const POST = async (url, params) => {


    const response = await axios.post(`${baseUrl}/${url}`, params, { withCredentials: true });
    // const { data } = response;
    // console.log(response);
    return response;
}
// PUT Method for put request 
const PUT = async (url, params) => {

    const response = await axios.put(`${baseUrl}/${url}`, params, { withCredentials: true });
    const { data } = response;
    // console.log(response);
    return response;
}
// Delete Method for delete request 
const DELETE = async (url, param) => {
    // console.log(param);

    const response = await axios.delete(`${baseUrl}/${url}`, {
        withCredentials: true,
        data: { cardId: param.cardId }
    });
    // const { data } = response;
    // console.log(response);
    return response;
}
// POST Method for post request 
const PICTURE = async (url, imageFile) => {
   
    let bodyFormData = new FormData();
    bodyFormData.append('image', imageFile.image);

    const response = await axios({
        method: 'post',
        url: `${baseUrl}/${url}`,
        withCredentials: true,
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
    });

    return response;

}

// const logOut = () => {
//     // toast.success('Logout Successfully')
//     store.dispatch({ type: 'logout' });
// }


export { baseUrl, GET, POST, PUT, DELETE, PICTURE  }