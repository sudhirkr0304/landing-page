

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// creating a navigation bar using function and then we will call this function
function createmeu (text,link , id)
{
    var topnode = document.createElement("a");
    var node = document.createElement("LI");
    var txtnode = document.createTextNode(text);
    node.appendChild(txtnode);
    node.id = id;
    topnode.appendChild(node);
    topnode.href = link;
    document.getElementById("navbar__list").appendChild(topnode);
}

createmeu("section1" , "#section1" , "section1menu");
createmeu("section2" , "#section2" , "section2menu");
createmeu("section3" , "#section3" , "section3menu");
createmeu("section4" , "#section4" , "section4menu");
createmeu("section5" , "#section5" , "section5menu");




const clr = document.getElementById("section1menu").style.color;

window.addEventListener('scroll', event => {
    //console.log(window.scrollY);
    
    if(window.scrollY > 3505)
    {
        document.getElementById("section5menu").style.color = "#FF0000";
        document.getElementById("section1menu").style.color = clr;
        document.getElementById("section2menu").style.color = clr;
        document.getElementById("section3menu").style.color = clr;
        document.getElementById("section4menu").style.color = clr;
    }
    else if(window.scrollY > 2747)
    {
        document.getElementById("section4menu").style.color = "#FF0000";
        document.getElementById("section1menu").style.color = clr;
        document.getElementById("section2menu").style.color = clr;
        document.getElementById("section3menu").style.color = clr;
        document.getElementById("section5menu").style.color = clr;   
       
    }
    else if(window.scrollY > 1988)
    {
        document.getElementById("section3menu").style.color = "#FF0000";
        document.getElementById("section1menu").style.color = clr;
        document.getElementById("section2menu").style.color = clr;
        document.getElementById("section4menu").style.color = clr;
        document.getElementById("section5menu").style.color = clr;
    }
    else if(window.scrollY > 1230)
    {
        document.getElementById("section2menu").style.color = "#FF0000";
        document.getElementById("section1menu").style.color = clr;
        document.getElementById("section3menu").style.color = clr;
        document.getElementById("section4menu").style.color = clr;
        document.getElementById("section5menu").style.color = clr;
    }
    else
    {
        document.getElementById("section1menu").style.color = "#FF0000";
        document.getElementById("section2menu").style.color = clr;
        document.getElementById("section3menu").style.color = clr;
        document.getElementById("section4menu").style.color = clr;
        document.getElementById("section5menu").style.color = clr;
    }
  })
