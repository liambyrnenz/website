import React from 'react';

import { ContentCenteredHeading, ContentPhotoText, ContentRow, ContentTile } from '../components';

class ContentComponentFactory {

  /**
   * Take some text from a content file object and return the correct component for it.
   * @param {object} object to parse component from 
   */
  static make(object) {
    if (object.type === "cent-heading") {
      return <ContentCenteredHeading icon={object.icon} backgroundColour={object.backgroundColour}
        heading={object.heading} subheading={object.subheading} />
    }
    if (object.type === "phototext") {
      return <ContentPhotoText image={object.photo} croppingOff={object.croppingOff}
        title={object.title} subtitle={object.subtitle} description={object.description} />
    }
    if (object.type === "row") {
      // recursively make and append components to row elements
      var elements = []
      for (var i = 0; i < object.elements.length; i++) {
        elements.push(ContentComponentFactory.make(object.elements[i]));
      }
      return <ContentRow elements={elements}/>
    }
    if (object.type === "tile") {
      return <ContentTile primaryLabel={object.primaryLabel} secondaryLabel={object.secondaryLabel}/>
    }
    if (object.type === "text") {
      return <p>{object.text}</p>
    }
  }

}

export default ContentComponentFactory;