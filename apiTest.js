import axios from "axios";

const code = 'print("hello word")'

    const formData = {
        language_id: 71,
        source_code: btoa(code),
    };

    const options = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {base64_encoded: 'true', fields: '*'},
    headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '0f362b5a43msh406f5870c7e287ep11dc52jsnc6ef63ed4990',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    },
    data: formData,
    };

    axios
        .request(options)
        .then(function (response) {
	        console.log("res.data", response.data);
            const token = response.data.token;
            checkStatus(token);
        }).catch(function (error) {
	        console.error(error);
        });