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

  static textInOrder() {
    return [
      (<span>Junior software engineer with a focus on pushing the boundaries of mobile innovation.</span>), 
      (<span><u>Alphero</u>, a digital services company which makes beautiful mobile apps and websites.</span>), 
      (<span>An iOS developer, making apps for multiple devices across many sectors in New Zealand.</span>), 
      (<span>Check out my projects on <u>GitHub</u>.</span>), 
      (<span>Connect with me on <u>LinkedIn</u>.</span>), 
      (<span>I like making music. Why not have a listen on my <u>SoundCloud</u>?</span>), 
      (<span>Follow me on <u>Twitter</u>.</span>), 
      (<span>See my profile on <u>Meetup</u>.</span>)
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

  static linksInOrder() {
    return [
      null,
      "https://alphero.com",
      null,
      "https://github.com/liambyrnenz",
      "https://linkedin.com/in/liambyrnenz",
      "https://soundcloud.com/brnebeats",
      "https://twitter.com/liambyrnenz",
      "https://www.meetup.com/en-AU/members/235913087/"
    ]
  }

}

export default TileService;