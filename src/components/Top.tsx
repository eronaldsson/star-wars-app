import left_arrow_icon from "../assets/images/left-arrow-icon.png";
import { Link } from "react-router-dom";

interface Props {
  showBackArrow: boolean;
}

const Top = ({ showBackArrow }: Props) => {
  return (
    <>
      <div className="top">
        {showBackArrow ? (
          <Link to="/" className="left-arrow-icon">
            <img src={left_arrow_icon} alt="left-arrow-icon" />
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Top;
