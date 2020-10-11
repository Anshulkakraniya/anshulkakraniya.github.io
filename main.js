$(document).ready(function(){
	$('.header').height($(window).height());
})

function updateClock() {
    var now = new Date(),
        months = ['January', 'February', '...']; 
        time = now.getHours() + ':' + now.getMinutes(), 

        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    document.getElementById('demo').innerHTML = [date, time].join(' / ');
    setTimeout(updateClock, 1000);
}
updateClock(); 


$("button").click(function(){
  alert("We'll notify you when we are done!");
});
