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
        <div class="tab">
            <button class="codeTab" onclick="changeTab(event, 'editor3')">HTML</button>
            <button class="codeTab" onclick="changeTab(event, 'editor1')">JS</button>
            <button class="codeTab" onclick="changeTab(event, 'editor2')">CSS</button>
        </div>
        <div id="editor1" class="editor"><?= readfile("firstHTMLpage/javascript.js")?></div>
        <div id="editor2" class="editor"><?= readfile("firstHTMLpage/styles.css")?></div>
        <div id="editor3" class="editor"><?= htmlspecialchars(readfile("firstHTMLpage/index.html"))?><div>
    </section>

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
    </script>
</body>
</html>

