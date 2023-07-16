import mainLogo from "../img/vapera-logo.png";
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="content-container">
          <div className="introduction-text">
            <div className="title-logo-box">
              <img width={100} className="img-logo" src={mainLogo} alt="" />
              <h1 className="title">VAPERA</h1>
            </div>
            <p className="text-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              recusandae aperiam officia voluptatibus facere vitae deserunt
              doloremque, reiciendis accusamus aspernatur deleniti rem porro,
              laudantium voluptates harum quaerat mollitia voluptatem a tempore
              fugit animi exercitationem quis error quos! In deserunt magnam nam
              reprehenderit aliquam laudantium labore quo, eveniet ut tenetur
              natus?
            </p>
            <button>ini tombol</button>
          </div>
          <img
            className="img-landing"
            src="Https://source.unsplash.com/random/540x720/?vape"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
