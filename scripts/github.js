/**
 * Liam Byrne (byrneliam2)
 * GithubIO
 */

const githubRepoUrl = 'https://api.github.com/users/byrneliam2/repos';

function getProjects() {
  var request = new XMLHttpRequest()
  request.open("GET", githubRepoUrl, false);
  request.send();

  var host = document.getElementById('projects');
  JSON.parse(request.responseText).forEach(e => {
    var elem = document.createElement('p');
    
    var name = document.createElement('b');
    name.textContent = e.name;
    elem.appendChild(name);

    elem.appendChild(document.createTextNode(" - " + e.language + " "));

    var link = document.createElement('a');
    link.href = e.html_url;
    link.style = "color: black";
    link.textContent = "(See on GitHub)";
    elem.appendChild(link);

    host.appendChild(elem);
  });
}
