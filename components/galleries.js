import Image from "next/image";

const Galleries = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-heading">
        <h2>Our Galleries</h2>
        <p>Beauty, Smooth & Elegant lorem ipsum </p>
      </div>
      <div className="gallery-images">
        <div className="section-one">
          <div className="gallery-one">
            <Image
              width={370}
              height={350}
              className="gallery-one"
              src="/static/gallery_one.png"
              alt="chair picture one"
              object-fit="cover"
            />
          </div>
          <div className="gallerytwo-gallerythree">
            <div className="gallery-two">
              <Image
                width={70}
                height={150}
                className="gallery-two"
                src="/static/gallery_two.png"
                alt="chair picture one"
                object-fit="cover"
              />
            </div>
            <div className="gallery-three">
              <Image
                width={70}
                height={150}
                className="gallery-three"
                src="/static/gallery_three.png"
                alt="chair picture one"
                object-fit="cover"
              />
            </div>
          </div>
        </div>
        <div className="section-two">
          <div className="galleryfour-galleryfive">
            <div className="gallery-four">
              <Image
                width={70}
                height={150}
                className="gallery-four"
                src="/static/gallery_four.png"
                alt="chair picture one"
                object-fit="cover"
              />
            </div>
            <div className="gallery-five">
              <Image
                width={70}
                height={150}
                className="gallery-five"
                src="/static/gallery_five.png"
                alt="chair picture one"
                object-fit="cover"
              />
            </div>
          </div>
          <div className="gallery-six">
            <Image
              width={370}
              height={350}
              className="gallery-six"
              src="/static/gallery_six.png"
              alt="chair picture one"
              object-fit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
