import React from 'react';

class TileHelper {

  /**
   * Take some text with link markers (%link) and replace them with JSX links.
   * @param {text} text string of text with (%link) markers
   * @param {links} links array of strings and JSX links replacing markers
   */
  static linkify(text, links) {
    if (!links) return text;

    let components = text.split("(%link)");
    if (links.length + 1 !== components.length) {
      console.log("Text does not have the same number of link markers as links provided")
      return text;
    }

    for (var i = 0; i < links.length; i++) {
      let link = links[i];
      components.splice(i + 1, 0, 
        <a href={link.link} target="_blank" rel="noopener noreferrer" style={{color: link.colour}}>
          {link.name}
        </a>
      );
    }
    return <span>{components}</span>;
  }

}

export default TileHelper;