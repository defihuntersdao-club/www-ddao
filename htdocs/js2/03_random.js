
function update_upper_line()
{
    var t = Math.random()*1000000000;
    var x = document.getElementById('upper_informer');
    x.innerHTML = t;

}
setInterval(update_upper_line,2000);
// ==================
