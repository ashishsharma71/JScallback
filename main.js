let csvURL = "test.csv";
//let csvURL = "https://raw.githubusercontent.com/vega/vega/main/docs/data/weather.csv";
const inputURL = document.createElement("input");
inputURL.type = "text";
inputURL.style.width = "50em";
inputURL.value = csvURL;
inputURL.onchange = () => {csvURL = inputURL.value; updatePage();};
document.getElementById("myFileURLdiv").appendChild(inputURL);
const myParent = document.getElementById("mySelect");
//Create array of options to be added
const funcsDict = {
   "None Selected": function(){myDisplayer("*Select a function from above*")},
   "No callback 1":loadXMLDoc_noCalback1,
   "No callback 2":loadXMLDoc_noCalback2,
   "With timeout":loadXMLDoc_withTimeOut,
   "With callback 1":loadXMLDoc_withCalback1,
   "With callback 2":loadXMLDoc_withCalback2,
   "With Promise":loadXMLDoc_withPromise,
   "With Async-Await":loadXMLDoc_withAsyncAwait,
};
//Create and append select list
const selectList = document.createElement("select");
selectList.id = "mySelect";
selectList.onchange = updatePage;
myParent.appendChild(selectList);
function updatePage(){
   funcsDict[selectList.value]();
}
//Create and append the options
for (func_choice in funcsDict) {
    const option = document.createElement("option");
    //option.value = funcsDict[func_choice];
    //option.value = func_choice;
    option.text = func_choice;
    selectList.appendChild(option);
}
function loadXMLDoc_noCalback1() {
   const xhttp = new XMLHttpRequest();
   xhttp.open("GET", csvURL, true);
   xhttp.send();

   myDisplayer(xhttp.responseText);
}
function loadXMLDoc_noCalback2() {
   const xhttp = new XMLHttpRequest();
   xhttp.open("GET", csvURL, true);
   xhttp.send();

   let responseText = "";
   if (xhttp.readyState == 4 && xhttp.status == 200)
      responseTXT = xhttp.responseText;
   else
      responseTXT = "Not ready!";
   myDisplayer(responseTXT);
}
function loadXMLDoc_withTimeOut() {
   const xhttp = new XMLHttpRequest();
   xhttp.open("GET", csvURL, true);
   xhttp.send();

   const myTimeout = setTimeout(
      () => 
      {
         let responseTXT = "";
         if (xhttp.readyState == 4 && xhttp.status == 200) {
            responseTXT = xhttp.responseText;
         }
         else
            responseTXT = "Nort ready!";
         myDisplayer(responseTXT);
      }
      , 500);
}
function loadXMLDoc_withCalback1() {
   const xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      let responseTXT = "";
      if (xhttp.readyState == 4 && xhttp.status == 200) {
         responseTXT = xhttp.responseText;
      }
      else
         responseTXT = "Not ready!";
      myDisplayer(responseTXT);
   };
   xhttp.open("GET", csvURL, true);
   xhttp.send();
}
function loadXMLDoc_withCalback2() {
   let xhttp = new XMLHttpRequest();
   xhttp.onload = function() {
      let responseTXT = "";
      if (xhttp.status == 200) {
         responseTXT = xhttp.responseText;
      } else {
         responseTXT = "Error: " + xhttp.status;
      }
      myDisplayer(responseTXT);
   }
   xhttp.open("GET", csvURL, true);
   xhttp.send();
}
//Ref.: https://www.w3schools.com/js/js_promise.asp
function loadXMLDoc_withPromise() {
   let myPromise = new Promise(function(myResolve, myReject) {
      let xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
         let responseTXT = "";
         if (xhttp.status == 200) {
            responseTXT = xhttp.responseText;
            myResolve(responseTXT);
         } else {
            responseTXT = "Error: " + xhttp.status;
            myReject(responseTXT);
         }
      };
      xhttp.open("GET", csvURL, true);
      xhttp.send();
   });



   myPromise.then(
      function(value) {myDisplayer(value);},
      function(error) {myDisplayer(error);}
   );
}
//Ref.: https://www.w3schools.com/js/js_async.asp
async function loadXMLDoc_withAsyncAwait() {
   let myPromise = new Promise(function(myResolve) {
      let xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
         let responseTXT = "";
         if (xhttp.status == 200) {
            responseTXT = xhttp.responseText;
            myResolve(responseTXT);
         } else {
            responseTXT = "Error: " + xhttp.status;
            myResolve(responseTXT);
         }
      };
      xhttp.open("GET", csvURL, true);
      xhttp.send();
   });
   myDisplayer(await myPromise);
}
function myDisplayer(resp){
   resp = "<br>The text response: <br> <pre>"
      + resp
      + "</pre>";
   document.getElementById("demo").innerHTML = resp;
}
updatePage();
