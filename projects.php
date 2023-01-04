<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alex Doran | Projects</title>
    <link rel="stylesheet" href="/cms/styles.css">
    
    <script src="/cms/src-noconflict/ace.js" type="text/javascript" charset="utf-8">

        function createEditor(){
            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/java");
        }
        var editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/java");
    </script>
</head>

<body>

    
    <section id="project">
        <h3>Project 1</h3>
        <input id="CE_tab" type="button" value="Js" onclick="editor.setSession(js)">
        <input id="CE_tab" type="button" value="CSS" onclick="editor.setSession(css)">
        <div id="editor">
        </div>
    </section>

    <section id="project">
        <h3>Project 2</h3>
        <div id="editor">
            <?= readfile("Stack.java") ?>
        </div>
    </section>

    <script>
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/java");
        editor.session.setUseSoftTabs(true);   

        var js = ace.createEditSession("test for js");
        var css = ace.createEditSession(["test for css", "ahh", "peepee"]);
        editor.setSession(css);
        
    </script>

</body>
</html>

