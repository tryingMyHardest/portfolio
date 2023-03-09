<!DOCTYPE html>
<html>

<head>
    <title>Alex Doran | Web Projects</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="cms/styles.css">
</head>
<body>

<section class="project">
    <h3>First Webpage</h3>
    <details>
    <summary onclick="changeProject(this, 'BRindex.html')">See More</summary>
        <div class="codeContent">
            <div class="tab">
                <button class="codeTab active" onclick="changeTab(this, 'BRindex.html')">HTML</button>
                <button class="codeTab" onclick="changeTab(this, 'BRstyle.css')">CSS</button>
                <button class="codeTab" onclick="changeTab(this, 'BRscript.js')">JS</button>
                <span onclick="deleteEditor()">Minimize Code</span>
            </div>
        <div id="BRindex.html" class="editor" style="display: none;"><?= file_get_contents("firstHTMLpage/BRindex.html") ?></div>
        <div id="BRstyle.css" class="editor" style="display: none;"><?= file_get_contents("firstHTMLpage/BRstyle.css") ?></div>
        <div id="BRscript.js" class="editor" style="display: none;"><?= file_get_contents("firstHTMLpage/BRscript.js") ?></div>
            </div>

            <iframe src="firstHTMLpage/firstHTML.html"></iframe>
        </details>
        </section>
        
        <section class="project">
            <h3>Java File</h3>
            <details>
                <summary onclick="changeProject(this, 'java')">See More</summary>
                <div class="codeContent">
                    <div class="tab">
                        <button class="codeTab active" onclick="changeTab(this, 'java')">Java</button>
                        <button class="codeTab" onclick="changeTab(this, 'hello')">Hello World</button>
                    </div>
                <div id="java" class="editor" style="display: none;"><?= file_get_contents("javaFiles/linkedlist.java")?></div>
                <div id="hello" class="editor" style="display: none;"><?= file_get_contents("javaFiles/hello.java")?></div>
                <button id="compileButton" onclick="handleCompile(this)">Compile</button>
                <div id="output"></div>
                </div class="codeContent">
            </details>
        </section>
        
    </body>
    <script src="cms/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
    <script src ="editorAndCompile.js"></script>
</html>