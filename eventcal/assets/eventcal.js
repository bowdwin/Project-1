$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();
});

<script>
var frame = document.getElementById('myFrame');
    frame.onload = function () {
        var body = frame.contentWindow.document.querySelector('body');
        body.style.color = 'red';
        body.style.fontSize = '20px';
        body.style.lineHeight = '20px';
    };
</script>