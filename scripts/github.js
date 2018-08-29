/**
 * Liam Byrne (byrneliam2)
 * GithubIO
 */

const githubRepoUrl = 'https://api.github.com/users/byrneliam2/repos';

const favourites = ["flat-five", "team-treehouse", "congo-hadr", "fdc", "pyvuw"]
const delay = 0.2;
var multiplier = 0;

function getProjects() {
  var request = new XMLHttpRequest()
  request.open("GET", githubRepoUrl, false);
  request.send();

  var host = document.getElementById('projects');
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

function addFavourites() {
  var host = document.getElementById('navbar-row');
  favourites.forEach((e) => {
    var elem = document.createElement('td');
    var link = document.createElement('a');

    link.className = "top projects";
    link.style = "animation: fadein 1s;animation-delay: " + 
      (0.5 + (multiplier * delay)) + 
      "s;animation-fill-mode: both;";
    link.href = "https://github.com/byrneliam2/" + e;
    link.target = "_blank";
    link.textContent = e;

    elem.appendChild(link);
    host.appendChild(elem);

    multiplier++;
  });
}
