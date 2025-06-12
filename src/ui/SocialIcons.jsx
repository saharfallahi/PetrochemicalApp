import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function SocialIcons() {
  return (
    <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-secondary-500">اشتراک گذاری :</span>
          <a href="#" className="icon-container">
            <FaTwitter className="icon" />
          </a>
          <a href="#" className="icon-container">
            <RiInstagramFill className="icon" />
          </a>
          <a href="#" className="icon-container">
            <FaTelegramPlane className="icon" />
          </a>
        </div>
  )
}

export default SocialIcons