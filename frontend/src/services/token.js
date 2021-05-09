export const saveToken = (obj)=>{
    localStorage.setItem('jwt_auth',JSON.stringify(obj));
}

export const checkAuth = async ()=>{
    return await localStorage.getItem('jwt_auth') ? JSON.parse(localStorage.getItem('jwt_auth')) : {auth:false,token:null};
}

export const getToken = async ()=>{
    const obj = await localStorage.getItem('jwt_auth') ? JSON.parse(localStorage.getItem('jwt_auth')) : {auth:false,token:null};
    return obj.token;
}

export const clearToken = ()=>{
    localStorage.removeItem('jwt_auth');
}