var myNodelist = document.getElementsByTagName("LI");  //close button
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");    
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    alert.innerHTML=ALERTERASE
  }
}

let list = document.querySelector("#list")

//********ALERTS
const ALERTNEGATIVE =`                                                    
<div class="alert alert-danger alert-dismissible fade show" role="alert">
 <strong> Listeye boş ekleme yapılamaz! <strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`
const ALERTPOSITIVE =`
<div class="alert alert-success alert-dismissible fade show" role="alert">
 <strong> Listeye ekleme yapılmıştır! <strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`
const ALERTERASE =`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
 <strong> Listeden silinmiştir <strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
`
const ALERTDONE =`
<div class="alert alert-success alert-dismissible fade show" role="alert">
 <strong> Görev tamamlandı! <strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
`

let alert = document.querySelector("#alert")

function newElement() {
    var li = document.createElement ("li")  
    var inputValue = document.querySelector("#task").value;
    li.innerHTML = inputValue
    if (inputValue ==="") {
        alert.innerHTML= ALERTNEGATIVE
    } else {
    list.append(li)
    document.querySelector("#task").value =""
    alert.innerHTML= ALERTPOSITIVE
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";   //close button for new listing elements
    span.appendChild(txt);
    li.appendChild(span);
    var close = document.getElementsByClassName("close");    
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    alert.innerHTML=ALERTERASE
  }
}
}

}
//********Makes a subject completed after clicking
list.addEventListener('click', function(finish) {
  if (finish.target.tagName === 'LI') {
    finish.target.classList.toggle('checked');
    alert.innerHTML=ALERTDONE
  }
}, false);
