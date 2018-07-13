var xhr = new XMLHttpRequest(); // new XML object
  xhr.onreadystatechange = function(){ // check what state the objext is at 4 means it has gotten all the info it will get back
    if(xhr.readyState === 4){
      const employees = JSON.parse(xhr.responseText)  //string on json data parse json text!
      const statusHTML = '<ul class="bulleted">';
        for (var i=0 i < employees.length, i+=1){
          if(employees[i].inoffice === true){
            statusHTML += '<li class="in">';
          } else {
            statusHTML += '<li class="out">';
          }
          statusHTML += employees[i].name;
          statusHTML += '</li>';
        }
        statusHTML += '</ul>'
        document.getElementById('employeeList').innerHTML = statusHTML
    }
  };
  xhr.open("GET", "data/data.json"); // what kind of request and the url or location for local file
  xhr.send();
