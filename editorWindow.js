import "/cms/src-noconflict/ace.js";

var editor;

const createEditor = (editorNum) => {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/python");
    
    return (
        <div id="editor">print("hello world")</div>
    )
}

const deleteEditor = () => {
    editor.destroy();
    var el = editor.container;
    el.parentNode.removeChild(el);
    editor = null;
}