import Image from 'next/image';
import Slider from 'react-slick';
import { brandPartners } from '@/data/aboutData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 1, initialSlide: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 380, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {brandPartners.map((brand) => (
          <div key={brand.id} className="overflow-hidden brand-img">
            <Image src={brand.img} width={150} height={50} alt="brand partner" />
          </div>
        ))}
      </Slider>
    </div>
  );
}