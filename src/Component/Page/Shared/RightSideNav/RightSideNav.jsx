
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone1 from '../../../../assets/qZone1.png'
import Qzone2 from '../../../../assets/qZone2.png'
import Qzone3 from '../../../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Button
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          github
        </button>
      </div>
      <div className="p-4 mb-4">
        <h2 className="text-3xl">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>FaceBook</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border "
          href=""
        >
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4 space-y-3">
        <h2 className="text-3xl">Q Zone</h2>
      <img src={Qzone1} alt="" />
      <img src={Qzone2} alt="" />
      <img src={Qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
