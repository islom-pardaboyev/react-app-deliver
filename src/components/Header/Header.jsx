import LogoImg from "../../assets/images/logo.png";
import NavbarItems from "../NavbarItems/NavbarItems";
import Discount from "../Discount/Discount";
import HeaderImg from "../../assets/images/header-bg.png";
import Button from "../Button/Button";
import HeroImg from "../../assets/images/heroImg.png";
import Title from "../Title/Title";
import Text from "../Text/Text";

const Header = () => {
  const navItems = ["Home", "About", "Promotions", "Blogs", "Contact Us"];
  return (
    <>
      <header className="relative">
          <img
            src={HeaderImg}
            alt="hero-bg"
            className="absolute top-0 -z-10 opacity-5 w-screen"
          />
        <div className="container flex flex-col gap-[7px] mx-auto max-w-[1239px]">
          <div data-aos="fade-down" data-aos-duration="1300" className=" flex items-center pt-[19px] pb-[27px] justify-between">
            <a href="/">
              <img src={LogoImg} width={207} height={50} alt="" />
            </a>

            <nav className="flex items-center gap-[32px] relative">
              <Discount show={true}/>
              {navItems.map((item, index) => (
                <NavbarItems key={index} title={item} />
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <NavbarItems extraStyle={"!text-black"} title={"Masuk"} />
              <Button title={"Daftar Sekarang"} />
            </div>
            
          </div>
          <div className="flex items-center justify-between">
            <div data-aos="fade-right" data-aos-duration="1300" className="w-[482px] flex flex-col gap-[32px]">
              <Title title={"Good Food Us Good Mood"} />
              <Text
                title={
                  "I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy."
                }
              />
              <div className="flex items-center gap-[16px]">
                <Button title={"Daftar Sekarang"} />
                <Button
                  extraStyle={"!text-black !bg-gray-100"}
                  title={"About Us"}
                />
              </div>
            </div>
            <img data-aos="fade-left" data-aos-duration="1300" src={HeroImg} alt="hero-imh" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
