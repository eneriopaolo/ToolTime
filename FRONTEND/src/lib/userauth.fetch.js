async function loginUser(email, password){
    const myHeaders = {
        "Content-Type": "application/json"
    };

    let reqHeaders = new Headers(myHeaders);
    let reqBody = JSON.stringify({
        "email": email,
        "password": password
    });

    let reqOptions = {
        method: 'POST',
        headers: reqHeaders,
        body: reqBody
    };

    const URI = 'http://localhost:4000/api/auth/login';
    const response = await fetch(URI, reqOptions);
    return response
};

async function registerUser(email, name, municipality, barangay, houseNo, password){
    const myHeaders = {
        "Content-Type": "application/json"
    };

    let reqHeaders = new Headers(myHeaders);
    let reqBody = JSON.stringify({
        "email": email,
        "name": name,
        "password": password,
        "address": {
            "municipality": municipality,
            "barangay": barangay,
            "houseNumber": houseNo
        }
    });

    let reqOptions = {
        method: 'POST',
        headers: reqHeaders,
        body: reqBody
    };

    const URI = 'http://localhost:4000/api/auth/register';
    const response = await fetch(URI, reqOptions);
    return response
};

export {
    loginUser,
    registerUser
};