let db;
var flightList=0;
var addListVar;
let dbReq = indexedDB.open('flights', 1);
dbReq.onupgradeneeded = function(event) {
  // Set the db variable to our database so we can use it!
  db = event.target.result;

  // Create an object store named notes. Object stores
  // in databases are where data are stored.
  let notes = db.createObjectStore('notes', {autoIncrement: true});
}
dbReq.onsuccess = function(event) {
  db = event.target.result;
}
dbReq.onerror = function(event) {
  alert('error opening database ' + event.target.errorCode);
}

function submitNote() {

  getAndDisplayNotes(db);

}

window.onload=function() {


  // Start a database transaction and get the notes object store
  let tx = db.transaction(['notes'], 'readwrite');
  let store = tx.objectStore('notes');
  store.clear();
  // Put the sticky note into the object store
  let note = {fname: 'Ethihad101',source: 'Toronto',destination: 'Vancouver',timestamp: '12/03/2020'};
  let note1 = {fname: 'Ethihad102',source: 'Toronto',destination: 'Delhi',timestamp: '12/03/2020'};
    let note2 = {fname: 'Ethihad103',source: 'Toronto',destination: 'Delhi',timestamp: '12/03/2020'};
    let note3 = {fname: 'Ethihad104',source: 'Delhi',destination: 'Vancouver',timestamp: '12/03/2020'};
    let note4 = {fname: 'Ethihad105',source: 'Toronto',destination: 'Alberta',timestamp: '12/03/2020'};
    let note5 = {fname: 'Ethihad106',source: 'Toronto',destination: 'Winipeg',timestamp: '12/03/2020'};
    let note6 = {fname: 'Ethihad107',source: 'Alberta',destination: 'Mumbai',timestamp: '12/03/2020'};
    let note7 = {fname: 'Ethihad108',source: 'Vancouver',destination: 'Winipeg',timestamp: '12/03/2020'};
    let note8 = {fname: 'Ethihad109',source: 'vancouver',destination: 'Pakistan',timestamp: '12/03/2020'};
    let note9 = {fname: 'Ethihad110',source: 'Toronto',destination: 'london',timestamp: '12/03/2020'};

  store.add(note);
  store.add(note1);
  store.add(note2);
  store.add(note3);
  store.add(note4);
  store.add(note5);
  store.add(note6);
  store.add(note7);
store.add(note8);
  store.add(note9);
  // Wait for the database transaction to complete
  tx.oncomplete = function() {  }
  tx.onerror = function(event) {
    alert('error storing note ' + event.target.errorCode);
  }

  if(localStorage.getItem("uname")!=null)
  {
  var mylist = document.getElementById("myListBtn");
mylist.style.display = "inline";
var login = document.getElementById("loginBtn");
login.innerText="Logout";
loggedin = true;

  }
};

function sour(not){
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  for (let i = 0; i < not.length; i++) {
    let note = not[i];
    if(source.toLowerCase() == note.source.toLowerCase() && destination.toLowerCase() == note.destination.toLowerCase())
    {
      // let listHTML = '<ul>';
      // listHTML += '<li>' + note.source +' ' + note.destination +
      //   '</li>';
      //   document.getElementById('sour').innerHTML = listHTML;



        var div = document.createElement('div');
      	div.setAttribute('id','div'+flightList);
        div.setAttribute('class','centering');
      	div.innerHTML='<li  class="w3-bar"><span class="w3-bar-item w3-button w3-green w3-xlarge w3-right ">+</span><img src="airport.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px"><div class="w3-bar-item"><span class="w3-large"></span></div></li>';
        var getLi = document.getElementsByTagName("li");
        getLi.id = note.fname;

        console.log(getLi);


      	var card = document.getElementsByClassName("w3-ul w3-card-4");

      	card[0].appendChild(div)
      	var cName = document.getElementById('div'+flightList).querySelectorAll(".w3-large");
        var node = document.createTextNode(note.fname);
      	cName[0].appendChild(node);
      	var deletelist = document.getElementById('div'+flightList).querySelectorAll(".w3-button");
         addListVar = flightList;
      	deletelist[0].setAttribute('onclick','addToList(this)');
        flightList += 1;
    }

  }

}



function addToList(input)
{

  var uname = localStorage.getItem("uname");
  if(uname!=null)
  {
  alert("Code to add" +" "+input.parentElement.getElementsByClassName("w3-large")[0].innerText+" "+" to user list Not done" );

}
else {
  {
    alert("please Log in");
  }
}
}


function removeList()
{
  document.getElementById("fList").innerHTML="";
  flightList=0;
}


function getAndDisplayNotes(db) {
  removeList();
  let tx = db.transaction(['notes'], 'readonly');
  let store = tx.objectStore('notes');
  // Create a cursor request to get all items in the store, which
  // we collect in the allNotes array
  let req = store.openCursor();
  let allNotes = [];

  req.onsuccess = function(event) {
    // The result of req.onsuccess is an IDBCursor
    let cursor = event.target.result;
    if (cursor != null) {
      // If the cursor isn't null, we got an IndexedDB item.
      // Add it to the note array and have the cursor continue!
      allNotes.push(cursor.value);
      cursor.continue();

    } else {
      // If we have a null cursor, it means we've gotten
      // all the items in the store, so display the notes we got
sour(allNotes);

    }
  }
  req.onerror = function(event) {
    alert('error in cursor request ' + event.target.errorCode);
  }
}
