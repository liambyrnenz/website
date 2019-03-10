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
    return ["Junior software engineer with a focus on pushing the boundaries of mobile innovation.", 
    "", "", "", "", "", "", ""]
  }

}

export default TileService;