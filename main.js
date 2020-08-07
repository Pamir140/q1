/* 

If ‘start’ is chosen in the dropdown message  :

the background colour of the page should change to #C47C47
 new div is added to the page. The div contains an H1 with the class of ‘welcome_heading” and text content that says ‘Welcome To Your Final Exam. Good Luck’
If ‘complete’ is chosen from the dropdown message: 

The background color of the page should change to #C0FFEEA new div is added to the page.
 The div contains an H1 with the class of ‘finished heading’ and text content that says “Great Job! Thanks for a Great Semester”! 
Remember to ensure your code is properly formatted and valid! Create a folder called Q1 and include all your code files inside. Publish your page using Github Pages. Include a link to your GitHub repo and published page as your answer.

*/

var select = document.getElementById("selectionList");
// select.onchange = myFunction();

function myFunction() {
  var x = select.value;
  console.log(x);
  if (x == "start") {
    document.body.style.background = "#C47C47";
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.setAttribute("class", "welcome_heading");
    h1.textContent = "Welcome To Your Final Exam. Good Luck";
    div.appendChild(h1);
    document.body.appendChild(div);
  } else if (x == "complete") {
    document.body.style.background = "#C0FFEE";
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.setAttribute("class", "finished heading");
    h1.textContent = "Great Job! Thanks for a Great Semester";
    div.appendChild(h1);
    document.body.appendChild(div);
  }
}
