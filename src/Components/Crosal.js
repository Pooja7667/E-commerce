import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const data = [
  {
    image:
      "https://as1.ftcdn.net/v2/jpg/00/35/13/44/1000_F_35134433_wILVhWrjfW1jy7Wkki0WeA7sOCNrNkp9.jpg  ",
  },
  {
    image:
      "https://previews.123rf.com/images/teksomolika/teksomolika1510/teksomolika151000495/46505431-five-beautiful-young-girls-make-selfie-on-the-street-near-house.jpg",
  },
  {
    image:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/VN7TP33PBFDRHKOXC74KYLJAXM.jpg",
  },
  {
    image:
      "https://www.thefashionisto.com/wp-content/uploads/2018/01/Fashionisto-Exclusive-2018-RM_GROUP_C5A2219Crop_Web.jpg",
  },
  {
    image:
      "https://www.mariasniderphotography.com/wp-content/uploads/2020/09/Family_02-copy-1024x751.jpg",
  },
];

const Crosal = () => {
  const items = data.map((item) => (
    <img
      src={item.image}
      alt="img"
      role="presentation"
      className="cursor-pointer"
      style= {{width:"100%"}}
    />
  ));
  return (
    <>
      <div className="crosal-imag">
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
        
        />
      </div>
    </>
  );
};

export default Crosal;
