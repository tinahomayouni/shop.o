import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import Image from "../uiKit/image/image";
import imageShop from "../assets/shopImages/dress.jpg";
import imageShop2 from "../assets/shopImages/dress2.jpg";

function Home() {
  const style = {
    background: "red",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 32,
  };
  return (
    <>
      <Header />
      <Slider button={true} dot={true}>
        {/* <div
          style={style}
        >
          1
        </div>
        <div
          style={{
            background: "yellow",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 32,
          }}
        >
          2
        </div>
        <div
          style={{
            background: "green",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 32,
          }}
        >
          3
        </div>
        <div
          style={{
            background: "blue",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 32,
          }}
        >
          4
        </div>
        <div
          style={{
            background: "gray",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 32,
          }}
        >
          5
        </div>
        <div
          style={{
            background: "orange",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 32,
          }}
        >
          6
        </div> */}

        <Image
          style={style}
          width="100vw"
          height="inherit"
          round={false}
          src={imageShop}
        />
        <Image
          style={style}
          width="100vw"
          height="inherit"
          round={false}
          src={imageShop2}
        />
        <Image
          style={style}
          width="100vw"
          height="inherit"
          round={false}
          src={imageShop}
        />
        <Image
          style={style}
          width="100vw"
          height="inherit"
          round={false}
          src={imageShop2}
        />
        <Image
          style={style}
          width="100vw"
          height="inherit"
          round={false}
          src={imageShop}
        />
        <Image
          style={style}
          width="100vw"
          height="inherit"
          round={false}
          src={imageShop2}
        />
      </Slider>
    </>
  );
}

export default Home;
