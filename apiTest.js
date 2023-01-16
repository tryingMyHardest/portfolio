import axios from "axios";

const handleCompile = () => {

    const formData = {
        language_id: 71,
        source_code: btoa(editorCode),
        //stdin: btoa(customInput),
    }

    const options = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {base64_encoded: 'true', fields: '*'},
    headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '0f362b5a43msh406f5870c7e287ep11dc52jsnc6ef63ed4990',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    data: formData,
    };

    axios.request(options).then(function (response) {
        console.log("resonse data: ", response.data);
        const token = response.data.token;
        checkStatus(token);
    }).catch(function (error) {
        let error = err.response ? err.response.data : err;

        let errorStatus = err.response.status;
        console.log("Error Status: ", errorStatus);

        if(errorStatus === 429){
            console.log("Too many requests", errorStatus);
        }
    });

}

const checkStatus = async (token) => {
    const options = {
        method: 'GET',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/' + token,
        params: {base64_encoded: 'true', fields: '*'},
        headers: {
            'X-RapidAPI-Key': '0f362b5a43msh406f5870c7e287ep11dc52jsnc6ef63ed4990',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        }
    };

    try{
        let response = axios.request(options);
        let statusId = response.data.status?.id;

        if(statusId === 1 || statusId === 2){
            setTimeout(() => {
                checkStatus(token);
            }, 2000);
            return;
        }else{
            outputData(response.data);
            console.log("Response Data: ", response.data);
            return;
        }
    }catch(error){
        console.log("Error", error);
    }
}

const outputData = (output) => {
    
    let statusId = output?.status?.id;

    const msg = '';

    switch(statusId){
        case 6:
            msg = btoa(output?.compile_output);
            break;
        case 3:
            btoa(output?.stdout) !== null ? msg = btoa(output?.stdout) : msg = null;
            break;
        case 5:
            msg = 'Time Limited Exceeded';
            break;
        default:
            msg = btoa(output?.stderr);
    }
}

var editor = null;

export const createEditor = (editorNum) => {
    var root = document.getElementById(editorNum);
    root.parentNode.insertBefore(root.cloneNode(true), root);
    root.setAttribute("style", "");
    editor = ace.edit(root);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/python");                
}

const deleteEditor = () => {
    editor.destroy();
    var el = editor.container;
    el.parentNode.removeChild(el);
    editor = null;
}

if(editor === null){
    createEditor();  
}
