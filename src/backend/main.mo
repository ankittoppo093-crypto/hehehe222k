import Text "mo:core/Text";
import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type ChannelInfo = {
    name : Text;
    bio : Text;
    subscribeUrl : Text;
  };

  type Video = {
    title : Text;
    description : Text;
    thumbnailUrl : Text;
    viewCount : Nat;
    uploadDate : Time.Time;
  };

  var channelInfo : ChannelInfo = {
    name = "hehehe222k";
    bio = "Gaming channel focused on playing viral and online games.";
    subscribeUrl = "https://www.youtube.com/channel/hehehe222k";
  };

  var contactEmail : Text = "contact@hehehe222k.com";

  let videos = List.empty<Video>();

  public query ({ caller }) func getChannelInfo() : async ChannelInfo {
    channelInfo;
  };

  public query ({ caller }) func getContactEmail() : async Text {
    contactEmail;
  };

  public query ({ caller }) func getVideos() : async [Video] {
    videos.toArray();
  };

  public shared ({ caller }) func addVideo(title : Text, description : Text, thumbnailUrl : Text, uploadDate : Time.Time) : async () {
    let newVideo : Video = {
      title;
      description;
      thumbnailUrl;
      viewCount = 0;
      uploadDate;
    };
    videos.add(newVideo);
  };
};
