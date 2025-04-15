const form= document.getElementById('form');
const table= document.getElementById('table-data').getElementsByTagName('tbody')[0];

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  let name= document.getElementById('name');
  let number= document.getElementById('num');
  let email= document.getElementById('mail');
  let location= document.getElementById('map');
  let course= document.getElementById('select-course');
  let batchTime= document.querySelector('input[name="batch-time"]:checked');
  let profession= document.querySelector('input[name="profession"]:checked');

  if((name.value ==="") || (number.value === "") || (email.value === "") || (location.value === "") || (course.value === "") || (batchTime.value === "") || (profession.value === "")) {
    alert('Must fill all the requirements to make further actions!!!');
  }
  else{
  let newRow= table.insertRow();
  newRow.insertCell().innerHTML= name.value;
  newRow.insertCell().innerHTML= number.value;
  newRow.insertCell().innerHTML= email.value;
  newRow.insertCell().innerHTML= location.value;
  newRow.insertCell().innerHTML= course.value;
  newRow.insertCell().innerHTML= batchTime.value;
  newRow.insertCell().innerHTML= profession.value;
  newRow.insertCell().innerHTML= `<button id="edtBtn">Edit</button>`;
  newRow.insertCell().innerHTML= `<button id="delBtn">Delete</button>`;
  }                        
});

// adding Event listeners for table....
table.addEventListener('click', (e) => { 
  e.preventDefault();

// looking for the event in table.....i.e. in Edit btn!

if(e.target.id === 'edtBtn') {                // if the event happens to edit btn means----
  let currentRow = e.target.closest('tr');    // geting its closest parent...in this case: tr!
  let cells = currentRow.cells;               // get stored the current row (<tr>) and alls its cells(<td>) in an Variable...!

  if(e.target.textContent === "Edit"){
    e.target.textContent = 'Save';
    e.target.style.backgroundColor = 'rgba(3, 170, 3, 0.918)';          // in Normally ==> lightGreen color

    e.target.addEventListener('mouseover',() => {
      e.target.style.backgroundColor = 'rgba(0, 139, 0, 0.913)';       // whlie on mouse Hover--
    });

    e.target.addEventListener('mouseout',() => {
     e.target.style.backgroundColor = 'rgba(3, 170, 3, 0.918)';        // mouse out (!hover)
    });

    cells[0].innerHTML = `<input type="text" id="nameInp" value= "${cells[0].textContent.trim()}">`;
    cells[1].innerHTML = `<input type="number" id="numInp" value= "${cells[1].textContent.trim()}">`;
    cells[2].innerHTML = `<input type="email" id="mailInp" value= "${cells[2].textContent.trim()}">`;
    cells[3].innerHTML = `<input type="text" id="locInp" value= "${cells[3].textContent.trim()}">`;
    cells[4].innerHTML = ` <select name="Courses" id="course-sel">
                             <option value="Front-End" ${cells[4].textContent.trim() === "Front-End" ? "selected" : ""}>Front-End</option>
                             <option value="Back-End" ${cells[4].textContent.trim() === "Back=End" ? "selected" : ""}>Back-End</option>
                             <option value="Full Stack Java" ${cells[4].textContent.trim() === "Full Stack Java" ? "selected" : ""}>Full Stack Java</option>
                             <option value="Full Stack Python" ${cells[4].textContent.trim() === "Full Stack Python" ? "selected" : ""}>Full Stack Python</option>
                             <option value="Data Analytics" ${cells[4].textContent.trim() === "Data Analytics" ? "selected" : ""}>Data Analytics</option>
                             <option value="Dot Net" ${cells[4].textContent.trim() === "Dot net" ? "selected" : ""}>Dot Net</option>
                             <option value="Cloud Computing" ${cells[4].textContent.trim() === "Cloud Computing" ? "selected" : ""}>Cloud Computing</option>
                             <option value="Software Testing" ${cells[4].textContent.trim() === "Software Testing" ? "selected" : ""}>Software Testing</option>
                           </select>`;
      // The above cells[4]. what the select with options are doing---
      // for eg: if user selects the option (Full Stack Java) in the form..and submits the form...while if the Organization wants to edit the form through edit btn an inout fields will ad to the table..on that time...dropdown options get replaced with default value...and it's not fine..so, as a developer while using Ternary operator(?) and "selcted" attri ==> user select panna option will display while we edit the table!!!
      // How it works? ==> using ternary operator..cond checking that cells[]'s TextContent === 1st option or respective options...If both are same means ("Selected" - an Attribute) will be added to that option Tag!...if not means...that leaves an Empty Str ("");
      // Added selected attribute of that option will be display on the <Select> while triggring Edit Btn!!!
      
    cells[5].innerHTML = `<select name="timing" id="timeInp">
                           <option value ="Weekdays" ${cells[5].textContent.trim() === "Weekdays" ? "selected" : ""}>Weekdays</option>
                           <option value ="Weekends" ${cells[5].textContent.trim() === "Weekends" ? "selected" : ""}>Weekends</option>
                          </select>`;  

    cells[6].innerHTML = ` <select name="Professions" id="prof-sel">
                             <option value="Student" ${cells[6].textContent.trim() === "Student" ? "selected" : ""}>Student</option>
                             <option value="Fresher" ${cells[6].textContent.trim() === "Fresher" ? "selected" : ""}>Fresher</option>
                             <option value="Exp in IT" ${cells[6].textContent.trim() === "Exp in IT" ? "selected" : ""}>Exp in IT</option>
                             <option value="Exp in Non IT" ${cells[6].textContent.trim() === "Exp in Non IT" ? "selected" : ""}>Exp in Non IT</option>
                             <option value="Career Break" ${cells[6].textContent.trim() === "Career Break" ? "selected" : ""}>Career Break</option>
                           </select>`;                        
  }

  else{
    // now the btn text is save means, do this.....
     e.target.textContent = 'Edit'; 
     e.target.backgroundColor = 'rgb(93, 142, 247)';

    if(e.target.textContent === 'Edit') {

        e.target.addEventListener('mouseover',() => {
        e.target.style.backgroundColor = 'rgb(57, 116, 244)';       // whlie on mouse Hover--
      });
  
        e.target.addEventListener('mouseout',() => {
        e.target.style.backgroundColor = 'rgb(93, 142, 247)';        // mouse out (!hover)
      });

     // Updating the input values!!!
     // This time...there is no need to getting values through "ID"...rather than we call directly the input fileld! like below this!
     cells[0].textContent = cells[0].querySelector('input').value;
     cells[1].textContent = cells[1].querySelector('input').value;
     cells[2].textContent = cells[2].querySelector('input').value;
     cells[3].textContent = cells[3].querySelector('input').value;
     cells[4].textContent = cells[4].querySelector('select').value;
     cells[5].textContent = cells[5].querySelector('select').value;
     cells[6].textContent = cells[6].querySelector('select').value;
    }
  }
};
  // This function is for Delete Button!!
  if(e.target.id === 'delBtn') {
    e.preventDefault();
    let currentRow = e.target.closest('tr');
    currentRow.remove();
  }
});










