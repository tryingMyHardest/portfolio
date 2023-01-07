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
    <a href="firstHTMLpage\firstHTML.html">Click here to test webpage</a><br>
    <button class="expandProject" onclick="changeProject(event, 'project1')">See More &#8600</button>
    <div id="project1" class="codeContent">
        <div class="tab">
            <button class="codeTab" id="defaultOpen" onclick="changeTab(event, 'editor1.html')">HTML</button>
            <button class="codeTab" onclick="changeTab(event, 'editor2.css')">CSS</button>
            <button class="codeTab" onclick="changeTab(event, 'editor3.js')">JS</button>
            <span class="closeProject" onclick="closeElement(event)">&#8598</span>
        </div>
        <div id="editor1.html" class="editor" style="display: none;"><?= readfile("firstHTMLpage/index.html")?></div>
        <div id="editor2.css" class="editor" style="display: none;"><?= readfile("firstHTMLpage/styles.css")?></div>
        <div id="editor3.js" class="editor" style="display: none;"><?= readfile("firstHTMLpage/javascript.js")?></div>
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
        
        function changeTab(evt, editorNum){
            // Declare all variables
            var i, codeTab;

            // Get all elements with class="codeTab" & remove the class "active"
            codeTab = document.getElementsByClassName("codeTab");
            for (i = 0; i < codeTab.length; i++) {
                codeTab[i].className = codeTab[i].className.replace(" active", "");
            }

            //Set clicked tab's class to "active"
            evt.currentTarget.className += " active";

            //Check if editor is populated already. If yes, delete it & set object to null
            if(editor != null){
                deleteEditor();
            }

            //Create editor for tab with proper code file
            createEditor(editorNum);
        }

        function changeProject(evt, projNum){
            var i, codeContent;

            codeContent = document.getElementsByClassName("codeContent");
            for(i = 0; i < codeContent.length; i++){
                codeContent[i].style.display = "none";
            }

            document.getElementById(projNum).style.display = "block";
            
            document.getElementById("defaultOpen").click();
        }

        var editor;
            
        function createEditor(editorNum) {

            var root = document.getElementById(editorNum);
            root.parentNode.insertBefore(root.cloneNode(true), root);
            root.setAttribute("style", "");

            let textArray = editorNum.split(".");

            editor = ace.edit(root);
            editor.setTheme("ace/theme/monokai");
            
            switch(textArray[1]){
                case "html": editor.session.setMode("ace/mode/html");
                    break;
                case "css": editor.session.setMode("ace/mode/css");
                    break;
                case "js": editor.session.setMode("ace/mode/javascript");
                    break;
                case "java": editor.session.setMode("ace/mode/java");
            }
            
        }

        function deleteEditor(){
            editor.destroy();
            var el = editor.container;
            el.parentNode.removeChild(el);
            editor = null;
        }

        function closeElement(evt){
            if(editor != null){
                deleteEditor();
            }

            evt.currentTarget.parentElement.parentElement.style.display = "none";
        }
    </script>
</body>
</html>

