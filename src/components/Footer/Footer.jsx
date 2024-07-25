import LogoImg from "../../assets/images/logo.svg";
import Input from "../Input/Input";
import Text from "../Text/Text";
import Title from "../Title/Title";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const categories = ["Cupcake", "Pizza", "Kebab", "Salmon", "Dougnut"];
  const about = ["About Us", "FAQ", "Report Problem"];

  Aos.init();
  return (
    <>
      <footer data-aos='zoom-in-up'
      data-aos-duration="1000" className="container bg-[#F9FFF6] pb-[40px] pt-[79px] px-[62px] flex justify-between mx-auto max-w-[1239px]">
        <div className="max-w-[335px]">
          <img
            src={LogoImg}
            className="mb-[21px]"
            width={207}
            height={50}
            alt=""
          />
          <Text
            extraStyle={"mb-[33px]"}
            title={
              "Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950"
            }
          />
          <div className="mt-[33px] flex items-center gap-2">
            <a href="/" target="_blank">
              <i class="fa-regular text-[20px] text-green bg-white rounded-full w-[40px] hover:text-white hover:bg-green transition-all duration-300 h-[40px] flex items-center justify-center fa-envelope"></i>
            </a>
            <a href="/" target="_blank">
              <i class="fa-brands text-[20px] text-green bg-white rounded-full w-[40px] hover:text-white hover:bg-green transition-all duration-300 h-[40px] flex items-center justify-center fa-telegram"></i>
            </a>
            <a href="/" target="_blank">
              <i class="fa-brands text-[20px] text-green bg-white rounded-full w-[40px] hover:text-white hover:bg-green transition-all duration-300 h-[40px] flex items-center justify-center fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col max-w-[95]">
          <Title
            extraStyle={"!text-black !text-[18px] !mb-[33px]"}
            title={"Categories"}
          />
          <nav className="flex flex-col gap-[19px]">
            {categories.map((item, index) => (
              <Text key={index} title={item} />
            ))}
          </nav>
        </div>
        <div className="flex flex-col max-w-[102px]">
          <Title
            extraStyle={"!text-black !text-[18px] !mb-[33px]"}
            title={"About Us"}
          />
          <nav className="flex flex-col gap-[19px]">
            {about.map((item, index) => (
              <Text key={index} title={item} />
            ))}
          </nav>
        </div>
        <div className="flex flex-col max-w-[245px]">
          <Title
            extraStyle={"!text-black !text-[18px] !mb-[33px]"}
            title={"Newsletter"}
          />
          <Text
            title={
              "Get now free 50% discount for alll products on your first order"
            }
            extraStyle={"!mb-[18px]"}
          />
          <Input />
          <div className="flex flex-col gap-[10px] mt-[19px]">
            <div className="flex items-center gap-3">
              <i class="fa-regular text-green fa-envelope"></i>
              <a href="mailto:elemesid@gmail.com"> elemesid@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <i class="fa-solid text-green fa-phone"></i>
              <a href="tel:088811112222"> 0888 1111 2222 </a>
            </div>
          </div>
        </div>
      </footer>
      <Text
        extraStyle={
          "!text-center mt-[48px] mb-[32px] !text-[12px] tracking-[5%] uppercase"
        }
        title={"© 2021 Elemes id. All rights reserved"}
      />
    </>
  );
};

export default Footer;
