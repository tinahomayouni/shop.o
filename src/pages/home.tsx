import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import Image from "../uiKit/image/image";
import imageShop from "../assets/shopImages/dress.jpg";

function Home() {
  return (
    <>
      <Header />
      <Slider button={true} dot={true}>
        <Image width="100%" height="100%" round={false} src={imageShop} />
        <Image width="100%" height="100%" round={false} src={imageShop} />
        <Image width="100%" height="100%" round={false} src={imageShop} />
        <Image width="100%" height="100%" round={false} src={imageShop} />
        <Image width="100%" height="100%" round={false} src={imageShop} />
        <Image width="100%" height="100%" round={false} src={imageShop} />
      </Slider>
    </>
  );
}

export default Home;
