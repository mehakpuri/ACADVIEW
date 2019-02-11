//var btns = document.querySelectorAll('#movie-list .delete');
//btns.forEach(function (btn) {
//    btn.addEventListener('click', function (e) {
//        var li = e.target.parentElement;
//        li.parentNode.removeChild(li);
//    });
//}); 

// deleting a movie from the list
var list = document.querySelector('#movie-list ul');
list.addEventListener('click',function(e) {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        list.removeChild(li);
    }
})


//hiding the movie-list
var hide = document.querySelectorAll('#add-movie #hide');
hide.forEach(function (h) {
    h.addEventListener('click',function(hdn) {
        var m = document.querySelector('#movie-list');
        if(m.style.display!="none")
            m.style.display = "none";
        else
            m.style.display = "block";
    } );
});


//adding a new movie to the list
var add1 = document.querySelector('#add-movie button');
add1.addEventListener('click',function(e){
            e.preventDefault();
            var a =document.getElementById('movie-name');
    if(a.value!="")
        {
            var m = document.querySelector('#movie-list ul');
            var node = document.createElement("li");
            var s = document.createElement("span");
            s.setAttribute("class","name");
            var text = document.createTextNode(a.value);
            s.appendChild(text);
            var s1 = document.createElement("span");
            s1.setAttribute("class","delete");
            var text1 = document.createTextNode("delete");
            s1.appendChild(text1);
            
            node.appendChild(s);
            node.appendChild(s1);
            
            m.appendChild(node);  
        }
});


//searching a movie
function searchmovie(){
    var s1 = document.getElementById('search');
    var val = s1.value.toUpperCase();
    var check = document.querySelectorAll('li');
    for(var i=0;i<check.length;i++)
    {
        var txt = check[i].getElementsByClassName("name")[0].textContent;
        if(txt.toUpperCase().indexOf(val) > -1)
            check[i].style.display = "block";
        else
            check[i].style.display = "none";
    }
}