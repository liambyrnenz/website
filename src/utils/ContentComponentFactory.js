import React from 'react';

import { ContentPhotoText } from '../components';

class ContentComponentFactory {

  /**
   * Take some text from a content file object and return the correct component for it.
   * @param {object} object to parse component from 
   */
  static make(object) {
    if (object.type === "phototext") {
      return <ContentPhotoText image={object.photo} title={object.title} description={object.description} />
    }
    if (object.type === "text") {
      return <p>{object.text}</p>
    }
  }

}

export default ContentComponentFactory;