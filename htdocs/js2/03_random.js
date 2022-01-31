
function update_upper_line()
{
    var t = Math.random()*10000;
    var x = document.getElementById('upper_line');
    x.innerHTML = t;
}
setInterval(2000,update_upper_line);
