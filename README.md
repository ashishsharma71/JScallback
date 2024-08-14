# JScallback
Experiments with JavaScript callback functions - including Timeout, Promise and Async/Await

The demo can be seen running live at: https://ashishsharma71.github.io/JScallback/

1. The goal here is to have a simple set of examples for demonstrating JavaScript's key features - asynchronous execution of code. 

2. The example chosen here is of loading a csv file and displaying it as text. Of course, it could be any text file or any file loaded like text (be careful). 

3. The code implements seven functions - ranging from a (failed) naive attempt to, IMHO, the "best practice" approach. 

4. All the functions make use of the 'XMLHttpRequest' JavaScript object for loading the file. 

5. I run the code by starting a server using the usual "python -m http.server" command from the root folder, in a terminal, and then, visiting the resulting page in a browser. 

6. The code, by default, loads a local file 'test.csv' available in the app's root folder. 

7. By giving appropriate URL in the text input box 'The URL of the file to be loaded', any local or remote file can be loaded. 

8. The seven functions chosen from the drop-down 'select' menu and the resulting responses are: 

   a. "No callback 1":loadXMLDoc_noCalback1. 
      The naivest example which attempts to display the file's content before it's loaded and fails.  

   b. "No callback 2":loadXMLDoc_noCalback2.  
      Same as above except for the "Not ready!" message it displays. 

   c. "With timeout":loadXMLDoc_withTimeOut.  
      It uses JavaScript's builtin 'setTimeout' function which itself excutes a 'callback function/code' when the set time is elasped.  In the code , the time is set to 500 milliseconds. Obviously, the time required depens depends on the file's size and the loading speed. 

   d. "With callback 1":loadXMLDoc_withCalback1.  
      It uses the 'onreadystatechange' callback function of 'XMLHttpRequest' to sense the file's loading and respond accordingly.  

   e. "With callback 2":loadXMLDoc_withCalback2.  
      It uses the 'onload' callback function of 'XMLHttpRequest' to sense the file's loading and respond accordingly.  

   f. "With Promise":loadXMLDoc_withPromise.  
      The JavaScript's 'Promise' object is used here. 

   g. "With Async-Await":loadXMLDoc_withAsyncAwait.  
      It explores 'async' and 'await' qualifiers along with 'Promise'.

9. In general, I would use the 'loadXMLDoc_withCalback2' approach that uses the 'onload' callback function.  But, of course, it depends on other requirements that may make one use any one of the other four approaches.  
