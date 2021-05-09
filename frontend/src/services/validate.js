const validateResponse = (status,message) => {
    return { status, message }
}

export const validateLogin = (email,password) =>{

    if(!email){
        return validateResponse(false,'Please fill out email');
    }

    const reg = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!reg.test(email)){
        return validateResponse(false,'Invalid email format');
    }

    if(!password){
        return validateResponse(false,'Please fill out password');
    }

    return validateResponse(true,'Validation passed!');
}

export const validateRegister = (username,email,password) =>{

    if(!username){
        return validateResponse(false,'Please fill out username');
    }

    if(!password){
        return validateResponse(false,'Please fill out password');
    }

    if(!email){
        return validateResponse(false,'Please fill out email');
    }

    const reg = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!reg.test(email)){
        return validateResponse(false,'Invalid email format');
    }

    return validateResponse(true,'Validation passed!');
}