import Image from "next/image";
import { FaBeer } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-details">
        <h2>We create the world best furniture</h2>
        <p>Beauty, Smooth & Elegant lorem ipsum te cretorek bui</p>
        <button>Contact Us</button>
      </div>
      <div className="talent-wrapper">
        <div className="talent-creator">
          <div>
            <Image src="/favicon.ico" width={30} height={30} alt="" />
          </div>
          <div className="talent-details">
            <h2 className="talented-heading">Talented Creator</h2>
            <p>Beauty, Smooth & Elegant lorem ipsum te cretorek bui</p>
          </div>
        </div>
        <div className="talent-creator">
          <div>
            <Image src="/favicon.ico" width={30} height={30} alt=""/>
          </div>
          <div className="talent-details">
            <h2 className="talented-heading">Talented Creator</h2>
            <p>Beauty, Smooth & Elegant lorem ipsum te cretorek bui</p>
          </div>
        </div>
      </div>

      <div className="talent-wrapper">
        <div className="talent-creator">
          <div>
            <Image src="/favicon.ico" width={30} height={30} />
          </div>
          <div className="talent-details">
            <h2 className="talented-heading">Talented Creator</h2>
            <p>Beauty, Smooth & Elegant lorem ipsum te cretorek bui</p>
          </div>
        </div>
        <div className="talent-creator">
          <div>
            <Image src="/favicon.ico" width={30} height={30} />
          </div>
          <div className="talent-details">
            <h2 className="talented-heading">Talented Creator</h2>
            <p>Beauty, Smooth & Elegant lorem ipsum te cretorek bui</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
