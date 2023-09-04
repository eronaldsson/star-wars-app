import home_icon from "../assets/images/home-icon.png";
import characters_icon from "../assets/images/characters-icon.png";
import settings_icon from "../assets/images/settings-icon.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <img className="home-icon" src={home_icon} alt="home-icon" />
          <div>Home</div>
        </div>
        <div className="footer-box">
          <img
            className="characters-icon"
            src={characters_icon}
            alt="characters-icon"
          />
          <div>Characters</div>
        </div>
        <div className="footer-box">
          <img
            className="settings-icon"
            src={settings_icon}
            alt="settings-icon"
          />
          <div>Settings</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
