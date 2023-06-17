import Image from "../../uiKit/image/image";
import imageShop from "../../assets/shopImages/dress.jpg";
function Slider() {
  return (
    <div>
      <Image width="100%" height="300px" round={false} src={imageShop} />
    </div>
  );
}
export default Slider;
