// Select first article_header and change textContent to "Welcome to the Sarah Fleming blog"
document.querySelector(".article__header").textContent = "Welcome to the Sarah Fleming blog";

//Create variable allHeaders that selects all elements with class "article__header"
const allHeaders = document.querySelectorAll(".article__header");

//Loop through the values stored in the allHeaders array and add the class "important"
for ( i = 0; i < allHeaders.length; i++ ) {
    allHeaders[i].classList.add("important");
}

//Select element with class "dashed" and remove the class
document.querySelector(".dashed").classList.remove("dashed");

//Select element with class "article__footer" and add class "goldenrod"
document.querySelector(".article__footer").classList.add("goldenrod");