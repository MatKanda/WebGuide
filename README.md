### Dependencies
GuideTS has just one dependency and it's jQuery. It's used to animate 
showing and hiding of elements as well as pop-up windows. 


### Installation
You can acquire local copy to your project from:
1. The github repository from this [link](https://github.com/MatKanda/WebGuide)
2. Using npm ```npm install WebGuide```

### Setup & Start
After the download of the source, you need to link the library 
file to your page. The library has three main parts

* Firstly, you need to select chosen HTML element you want to include 
 by adding custom-data-attribute so the library knows exactly which 
 elements it should consider. It may look like this:
     ```
      <button id="example" data-guide="true">Example button</button>
    ```
* Secondly, you should select the order of elements, so the program knows
 which element is first, which is second etc. This is made by 
 custom-data as well. Let's use our button again and set the element second 
 in the sequence to be shown. It's gonna look like this:

     ```
      <button id="example" data-guide="true" data-guide-step="2">Example button</button>
    ```
* The last part is to initialize guide in TypeScript file with an input array of chosen messages, 
  it may look like this: 

     ```
      let messages=[ “this is my first message“ , “second one“ , ... , “this will be end of the guide“ ];
      webGuide(messages);
    ```
  
  ### Optional
  You can add position of pop-up windows as well if you want to, or the layout of your page 
  requires that. The position of pop-up window is set to be under the HTML element by default,
  but you can easily change that simply by adding position attribute to your element.
  The “position“ can be “L“ , “R“ and “U“ (left,right and up, down is set by default).
  It my look like this:

     ```
      <button id="example" data-guide="true" data-guide-step="2" data-guide-position="R">Example button</button>
    ```
   Now you should be completely ready to go and use this library.
   
   ### Contributors
   * Matúš Kanda
      

