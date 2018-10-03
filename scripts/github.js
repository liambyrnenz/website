/**
 * Liam Byrne (liambyrnenz)
 * GithubIO
 * 
 * Uses the DOM to dynamically add elements to pages.
 */

const githubRepoUrl = 'https://api.github.com/users/liambyrnenz/repos';

const favourites = ["grouper", "flat-five", "team-treehouse", "congo-hadr", "fdc", "pyvuw"]

const INITIAL = 0.5;
const DELAY = 1/favourites.length;
var multiplier = 0;

function getFavouriteProjects() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://api.github.com/repos/liambyrnenz/congo-hadr/readme", false);
  request.setRequestHeader("Accept", "application/vnd.github.v3.html");
  request.send();

  console.log(request.responseText);
  var host = document.getElementById('fav-projects');
  var div = document.createElement('div');
  div.innerHTML = request.responseText.trim();
  host.appendChild(div);
}

/**
 * Get all projects from my GitHub and display them.
 */
function getAllProjects() {
  var request = new XMLHttpRequest();
  request.open("GET", githubRepoUrl, false);
  request.send();

  var host = document.getElementById('all-projects');
  JSON.parse(request.responseText).forEach(e => {
    var elem = document.createElement('p');
    
    var name = document.createElement('h2');
    name.textContent = e.name;
    elem.appendChild(name);

    elem.appendChild(document.createTextNode(" - " + e.language + " "));

    var link = document.createElement('a');
    link.href = e.html_url;
    link.target = "_blank";
    link.textContent = "(See on GitHub)";
    elem.appendChild(link);

    var desc = document.createElement('p');
    desc.textContent = e.description;
    elem.appendChild(desc);

    host.appendChild(elem);
  });
}

/**
 * Add favourite projects into the navigation bar (only on the home page.)
 */
function addFavourites() {
  var host = document.getElementById('navbar-row');
  favourites.forEach((e) => {
    var elem = document.createElement('td');
    var link = document.createElement('a');

    link.className = "top projects";
    link.style = "animation: fadein 1s;animation-delay: " + 
      (INITIAL + (multiplier * DELAY)) + 
      "s;animation-fill-mode: both;";
    link.href = "https://github.com/liambyrnenz/" + e;
    link.target = "_blank";
    link.textContent = e;

    elem.appendChild(link);
    host.appendChild(elem);

    multiplier++;
  });
}
