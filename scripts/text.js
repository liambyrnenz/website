/**
 * Liam Byrne (byrneliam2)
 * GithubIO
 */

var TAB_TEXT = " | Liam Byrne";
var SUBTITLE = "PROSPECTIVE BE(HONS) | IT SUPPORT ASSISTANT";
var FOOTER_TEXT = "Footer text!";

function pageTitle() {
    document.getElementById("tab").innerHTML += TAB_TEXT;
}

function subtitle() {
    document.getElementById("sub").innerHTML = SUBTITLE;
}

function pageFooter() {
    document.getElementById("footer").innerHTML = FOOTER_TEXT;
}