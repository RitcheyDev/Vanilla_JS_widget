var xhr = new XMLHttpRequest(); // new XML object
  xhr.onreadystatechange = function(){ // check what state the objext is at 4 means it has gotten all the info it will get back
    if(xhr.readyState === 4){
      const employees = JSON.parse(xhr.responseText)  //string on json data parse json text!
    }
  };
  xhr.open("GET", "data/data.json"); // what kind of request and the url or location for local file
  xhr.send();
