import { loadHeaderFooter } from "./utils.mjs";
//load header and footer?
loadHeaderFooter();
//template for text game?

document.addEventListener("DOMContentLoaded", function() { 
    //update the last modified text
    document.getElementById("last-modified").innerHTML = document.lastModified;
  });