<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alex Doran | Projects</title>
    <link rel="stylesheet" href="/cms/styles.css">
</head>

<body>
    <section class="project">
    <h3>Project 1</h3>
    <button class="expandProject" onclick="changeProject(event, 'project1')">See More &#8600</button>
    <div id="project1" class="codeContent">
        <div class="tab">
            <button class="codeTab" onclick="changeTab(event, 'editor3')">HTML</button>
            <button class="codeTab" onclick="changeTab(event, 'editor1')">JS</button>
            <button class="codeTab" onclick="changeTab(event, 'editor2')">CSS</button>
            <span class="closeProject" onclick="this.parentElement.parentElement.style.display='none'">&#8598</span>
        </div>
        <div id="editor1" class="editor" style="display: none;"><?= readfile("firstHTMLpage/javascript.js")?></div>
        <div id="editor2" class="editor" style="display: none;"><?= readfile("firstHTMLpage/styles.css")?></div>
        <div id="editor3" class="editor" style="display: none;"><?= readfile("firstHTMLpage/index.html")?></div>
</div>
</section>

<section class="project">
    <h3>Project 2</h3>
    <button class="expandProject" onclick="changeProject(event, 'project2')">See More</button>
    <div id="project2" class="codeContent">
        <div data-pym-src='https://www.jdoodle.com/embed/v0/5HlA?arg=0' data-language="java"
        data-version-index="4" data-libs="mavenlib1, mavenlib2"><?= readfile("javeFiles/LinkedList.java") ?></div>
        <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>
    </div>
</section>

<section class="project">
    <h3>Project 3</h3>
    <button class="expandProject" onclick="changeProject(event, 'project3')">See More</button>
    <div id="project3" class="codeContent">
    <div class="tab">
            <button class="codeTab" onclick="changeTab(event, 'editor4')">HTML</button>
            <button class="codeTab" onclick="changeTab(event, 'editor1')">JS</button>
            <button class="codeTab" onclick="changeTab(event, 'editor2')">CSS</button>
            <span class="closeProject" onclick="this.parentElement.parentElement.style.display='none'">&#8598</span>
        </div>
        <div id="editor4" class="editor"><?= readfile("firstHTMLpage/styles.css")?></div>
    </div>
</section>
    <script src="/cms/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
    <script>
        document.getElementById("defaultOpen").click();

        function changeTab(evt, editorNum){
            // Declare all variables
            var i, codeTab;

            // Get all elements with class="tablinks" and remove the class "active"
            codeTab = document.getElementsByClassName("codeTab");
            for (i = 0; i < codeTab.length; i++) {
                codeTab[i].className = codeTab[i].className.replace(" active", "");
            }

            evt.currentTarget.className += " active";

            if(editor != null){
                deleteEditor();
            }

            createEditor(editorNum);
        }

        function changeProject(evt, projNum){
            var i, codeContent;

            codeContent = document.getElementsByClassName("codeContent");
            for(i = 0; i < codeContent.length; i++){
                codeContent[i].style.display = "none";
            }

            document.getElementById(projNum).style.display = "block";
        }

        var editor;
            
        function createEditor(editorNum) {
            var root = document.getElementById(editorNum);
            root.parentNode.insertBefore(root.cloneNode(true), root);
            root.setAttribute("style", "");
            editor = ace.edit(root);
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/javascript");
        }
        function deleteEditor(){
            if(editor != null){

            }
            editor.destroy();
            var el = editor.container;
            el.parentNode.removeChild(el);
            editor = null;
        }
        /*if(editor == null){
            createEditor();  
        }*/
    </script>
</body>
</html>

