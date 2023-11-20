
document.addEventListener('DOMContentLoaded',function (){
  document.querySelector('#pic').onclick = function(){  
    const sectionToScroll = document.querySelector('#pic-head'); // Change this selector to match the element you want to scroll to
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    }}

  document.querySelector('#cont').onclick = function(){  
    const sectionToScroll = document.querySelector('#contact-div'); // Change this selector to match the element you want to scroll to
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    }}

  document.querySelector('#sb').onclick = function (){           // listen for the submit button getting clicked
    const searchValue= document.getElementById('searchinput').value;   // get the value of the search box 
    if ( searchValue === ''){
      alert('Enter Name of Image')
    }
    else{
     // select all the paragraphs from the pictures div 
      const para = document.getElementById('pictures').querySelectorAll('p');  // store all the paragraphs of the pictures div in para

      let isTextFound = false;
      let found = '';
      for (const paragraph of para) {                                         // loop for checking whether the pargraphs contains the the searched text 
          if (paragraph.textContent === searchValue) {
              isTextFound = true;
              divpara = paragraph.closest('div');                               // find the div of the paragraph that contains the searched text
              divid= divpara.id;                                                // find the id of the that div
              break; // Exit the loop once the text is found                   // if it contains then break the loop 
          }
      }
                                                                               
      if (isTextFound) {                                                        // Then disappear all the sections and divs to display the serached images. 
          document.querySelector('#main-sec').style.display = 'none';
          document.querySelector('#img-section').style.display = 'none';
          document.querySelector('#contact-sect').style.display = 'none';
          document.querySelector('footer').style.display = 'none';

         piccontent = document.getElementById(divid).innerHTML;               // Get the html code for the img that was matched based on its division        
         
         mainsec = document.getElementById('main-sec');

         mainsec.innerHTML = piccontent;          // Modify the html code of the main section with the html code of image.
         document.querySelector('#main-sec').style.backgroundImage = 'none';       // remove the background image
         mainsec.style.height =  '100px';
         mainsec.style.display = 'inline';
         mainsec.style.marginTop = '30px';

      } 
      else {
          alert('The searched image is not present');
      }
    }
  }

});

