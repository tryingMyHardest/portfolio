<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alex Doran | Projects</title>
    <link rel="stylesheet" href="/cms/styles.css">
    <script src="/cms/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
</head>

<body>
    <section class="project">
    <h3>Project 1</h3>
    <button class="expandProject" onclick="changeProject(event, 'project1')">See More &#8600</button>
    <div id="project1" class="codeContent">
        <div class="tab">
            <button id="defaultOpen" class="codeTab" onclick="changeTab(event, 'editor3')">HTML</button>
            <button class="codeTab" onclick="changeTab(event, 'editor1')">JS</button>
            <button class="codeTab" onclick="changeTab(event, 'editor2')">CSS</button>
            <span class="closeProject" onclick="this.parentElement.parentElement.style.display='none'">&#8598</span>
        </div>
        <div id="editor1" class="editor"><?= readfile("firstHTMLpage/javascript.js")?></div>
        <div id="editor2" class="editor"><?= readfile("firstHTMLpage/styles.css")?></div>
        <div id="editor3" class="editor"><?= readfile("firstHTMLpage/index.html")?></div>
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
            <button id="defaultOpen" class="codeTab" onclick="changeTab(event, 'editor4')">HTML</button>
            <button class="codeTab" onclick="changeTab(event, 'editor1')">JS</button>
            <button class="codeTab" onclick="changeTab(event, 'editor2')">CSS</button>
            <span class="closeProject" onclick="this.parentElement.parentElement.style.display='none'">&#8598</span>
        </div>
        <div id="editor4" class="editor"><?= readfile("firstHTMLpage/styles.css")?></div>
    </div>
</section>

Test
<input type="button" value="click me" onclick="createEditor()">
<div id="editor5" class="editor">Test</div>

    <script>
        var editor1 = ace.edit("editor1");
        editor1.setTheme("ace/theme/monokai");
        editor1.session.setMode("ace/mode/java");
        var editor2 = ace.edit("editor2");
        editor2.session.setMode("ace/mode/css");
        editor2.setTheme("ace/theme/monokai");
        var editor3 = ace.edit("editor3");
        editor3.session.setMode("ace/mode/HTML");
        editor3.setTheme("ace/theme/monokai");
        var editor4 = ace.edit("editor4");
            editor4.session.setMode("ace/mode/css");
            editor4.setTheme("ace/theme/monokai");
            editor4.resize();

        document.getElementById("defaultOpen").click();

        function changeTab(evt, editorNum){
            // Declare all variables
            var i, editorContent, codeTab;

            // Get all elements with class="tabcontent" and hide them
            editorContent = document.getElementsByClassName("editor");
            for (i = 0; i < editorContent.length; i++) {
                editorContent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            codeTab = document.getElementsByClassName("codeTab");
            for (i = 0; i < codeTab.length; i++) {
                codeTab[i].className = codeTab[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(editorNum).style.display = "block";
            evt.currentTarget.className += " active";
        }

        function changeProject(evt, projNum){
            var i, codeContent;

            codeContent = document.getElementsByClassName("codeContent");
            for(i = 0; i < codeContent.length; i++){
                codeContent[i].style.display = "none";
            }

            document.getElementById(projNum).style.display = "block";
        }

        function createEditor(){
            let editor = ace.edit("editor5");
            editor.session.setMode("ace/mode/java");
            editor.setTheme("ace/theme/monokai");
        }
    </script>
</body>
</html>

