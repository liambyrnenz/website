/**
 * Liam Byrne (byrneliam2)
 * GithubIO
 */

var TAB_TEXT = " | Liam Byrne";
var FOOTER_TEXT = "Created by Liam Byrne on GitHub Pages";

function pageTitle() {
    document.getElementById("tab").innerHTML += TAB_TEXT;
}

function pageFooter() {
    document.getElementById("footer").innerHTML = FOOTER_TEXT;
}