
var language_id = 62;
var start;
var end;

var editor;

const createEditor = (editorNum) => {

    var root = document.getElementById(editorNum);
    root.parentNode.insertBefore(root.cloneNode(true), root);
    root.setAttribute("style", "");

    editor = ace.edit(root);
    editor.setTheme("ace/theme/dawn");
    editor.session.setMode("ace/mode/c_cpp");

    document.getElementById("compileButton").removeAttribute('disabled');
                
}
            
const deleteEditor = () => {
    editor.destroy();
    var el = editor.container;
    el.parentNode.removeChild(el);
    editor = null;

    document.getElementById("output").innerText = "";
    let button = document.getElementById("compileButton");
    button.setAttribute("disabled", "true");
}

const openFile = () => {
    let obj, file;

    /*obj = new ActiveXObject("Scripting.FileSystemObject");
    file = obj.GetFile("javaFiles/Stack.java");

    let str = file.toString();*/

    editor.setValue("test");
}

const changeTab = (button, editorNum) => {
    // Declare all variables
    let codeTab = document.getElementsByClassName("codeTab");

    // Get all elements with class="codeTab" & remove the class "active"
    for (let i = 0; i < codeTab.length; i++) {
        codeTab[i].removeAttribute("active");
    }

    //Set clicked tab's class to "active"
    button.setAttribute("active", "true");

    //Check if editor is populated already. If yes, delete it & set object to null
    if(editor != null){
        deleteEditor();
    }

    //Create editor for tab with proper code file
    createEditor(editorNum);
}

const changeProject = (proj) => {
    let codeContent;

    codeContent = document.getElementsByClassName("codeContent");
    for(let i = 0; i < codeContent.length; i++){
        codeContent[i].style.display = "none";
    }

    proj.childeNode.childeNode.style.display = "block";
    
    document.getElementById("defaultOpen").click();
}

function closeElement(evt){
    if(editor != null){
        deleteEditor();
    }

    evt.currentTarget.parentElement.parentElement.style.display = "none";
}

const changeLang = (dropDown) => {
    language_id = dropDown.value;
    console.log("id",language_id);

    let name;

    switch(language_id){
        case "54": name = 'c_cpp';
                break;
        case "51": name = 'csharp';
                break;
        case "62": name = 'java';
                break;
        case "63": name = 'javascript';
                break;
        case "68": name = 'php';
                break;
        case "71": name = 'python';
    }
    editor.session.setMode('ace/mode/' + name);
    console.log(name);

    preSet(language_id);
}
    
const handleCompile = (button) => {

    start = Date.now();

    button.innerHTML = "<div class='dot-flashing'></div>";
    button.setAttribute('disabled', 'true');

    const editorCode = editor.getValue();

    console.log("Code: ", editorCode);

    const test = btoa(editorCode);

    const API_URL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*';
    
    const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '0f362b5a43msh406f5870c7e287ep11dc52jsnc6ef63ed4990',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    body: '{"language_id":' + language_id + ',"source_code":"' + test + '"}',
    };

    fetch(API_URL, options).then(response => response.json())
    .then(function (response) {
        console.log("Response token", response);
        const token = response.token;
        console.log(token);
        checkStatus(token);
    })
    .catch(function (err) {
        console.error(err);

        let error = err.response ? err.response.data : err;
    });

    const checkStatus = (token) => {
        let url =  'https://judge0-ce.p.rapidapi.com/submissions/'+ token + '?base64_encoded=true&fields=*';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f362b5a43msh406f5870c7e287ep11dc52jsnc6ef63ed4990',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        }
        };
    
        try{
            fetch(url, options).then(reply => reply.json()).then(function (reply) {
                console.log("response to token:", reply);
                let status = reply.status;

            console.log("status:", status);
    
            if(status.id === 1 || status.id === 2){
                setTimeout(() => {
                    checkStatus(token);
                }, 2000);
                return;
            }else{
                end = Date.now();
                console.log("Response Data: ", reply.stdout);
                outputData(reply);
                return;
            }
            });

                
        }catch(error){
            console.log("Error", error);
        }
    }

    const outputData = (reply) => {
       let time = (end - start)/1000;
    
        let msg = reply.status.description + " - " + time + 'sec<br><br>';
    
            switch(reply.status.id){
                case 3:
                    atob(reply.stdout) !== null ? msg += atob(reply.stdout) : msg += null;
                    break;
                case 6:
                    msg += atob(reply.compile_output);
        }

        button.innerHTML = "Compile";
        button.removeAttribute('disabled');
        document.getElementById('output').innerHTML = changeChar(msg);
    }
}

const changeChar = (str) => {
    let found = true;

    while(found){
        if(str.includes('â')){
            str = str.replace('â', '');
        }else{
            found = false;
        }
    }

    return str;
}

const preSet = (id) => {
    let str;

    if(id == 54){
        str = `#include <iostream>
using namespace std;
        
int main() {
    cout << "Hello World in C++!";
    return 0;
}`;
    }else if(id == 51){
        str =
`using System;

class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World in C#!");
  }
}`;
    }else if(id == 62){
        str = 
`public class Main {
	public static void main(String[] args) {
		System.out.println("Hello World in Java!");
	}
}`
    }else if(id == 63){
        str = `console.log("Hello World in Javascript!")`;
    }else if(id == 68){
        str = `echo "Hello World in PHP!"`;
    }else if(id == 71){
        str = `print("Hello World in Python!")`;
    }

    editor.setValue(str, 1);
}

