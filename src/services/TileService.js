import React from 'react';

import AlpheroImage from "../assets/alphero.png";
import AppleImage from "../assets/apple.png";
import GithubImage from "../assets/github.png";
import LinkedinImage from "../assets/linkedin.png";
import MeImage from "../assets/me.png";
import MeetupImage from "../assets/meetup.png";
import SoundcloudImage from "../assets/soundcloud.png";
import TwitterImage from "../assets/twitter.png";

class TileService {

  static imagesInOrder() {
    return [MeImage, AlpheroImage, AppleImage, GithubImage, LinkedinImage, SoundcloudImage, TwitterImage, MeetupImage];
  }

  // TODO link colours
  static textInOrder() {
    return [

      // MeImage
      (<span>Junior software engineer with a focus on pushing the boundaries of mobile innovation.</span>), 

      // AlpheroImage
      (<span><a href="https://alphero.com" target="_blank" rel="noopener noreferrer">Alphero</a>, a digital services company which makes beautiful mobile apps and websites.</span>), 

      // AppleImage
      (<span>An iOS developer, making apps for multiple clients across many sectors in New Zealand.</span>), 

      // GithubImage
      (<span>Check out my projects on <a href="https://github.com/liambyrnenz" target="_blank" rel="noopener noreferrer">GitHub</a>.</span>), 

      // LinkedinImage
      (<span>Connect with me on <a href="https://linkedin.com/in/liambyrnenz" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</span>),
      
      // SoundcloudImage
      (<span>I like making music. Why not have a listen on my <a href="https://soundcloud.com/brnebeats" target="_blank" rel="noopener noreferrer">SoundCloud</a>?</span>), 

      // TwitterImage
      (<span>Follow me on <a href="https://twitter.com/liambyrnenz" target="_blank" rel="noopener noreferrer">Twitter</a>.</span>), 

      // MeetupImage
      (<span>See my profile on <a href="https://www.meetup.com/en-AU/members/235913087/" target="_blank" rel="noopener noreferrer">Meetup</a>.</span>)
    ]
  }

  static titlesInOrder() {
    return [
      "I AM A...", 
      "I WORK AT...", 
      "I WORK AS...", 
      "GITHUB", 
      "LINKEDIN", 
      "SOUNDCLOUD", 
      "TWITTER", 
      "MEETUP"
    ]
  }

}

export default TileService;