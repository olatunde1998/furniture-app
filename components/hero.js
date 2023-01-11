import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <p> Beauty, Smooth & Elegant</p>
        <h2>Modern Furnitures</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div>
      <div className="chair-container">
        <div className="chair-one"> 
        <Image
          width={50}
          height={180}
          id="chair1"
          className="hero-chair"
          src="/static/hero_fur1.png"
          alt="chair picture one"
          object-fit= "contain"
        />
        </div>
        <div className="chair-two"> 
        <Image
          width={50}
          height={180}
          id="chair2"
          className="hero-chair"
          src="/static/hero_fur2.png"
          alt="chair picture one"
          object-fit= "cover"
        />
        </div>
        <div className="chair-three"> 
        <Image
           width={50}
           height={180}
           id="chair3"
          className="hero-chair"
          src="/static/hero_fur3.png"
          alt="chair picture one"
          object-fit= "cover"
        />
        </div>

      </div>
    </div>
  );
};
export default Hero;
