<!DOCTYPE html>
<html lang="en">
<head>
<title>Alex Doran | Projects</title>
<style type="text/css" media="screen">
    #editor { 
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
</head>
<body>

<h3>This is other stuff</h3>

<div id="editor">
<?php echo readfile("LinkedList.java"); ?>
</div>
    
<script src="/cms/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");
</script>
</body>
</html>

