import { Link } from "react-router-dom";
import ButtonFooter from "./ButtonFooter";
import { FaXTwitter, FaSquareFacebook, FaDiscord, FaInstagram } from "react-icons/fa6";
import { footerInfo, pages, socialIcons } from "../data/footerData";

const Footer = () => {
  const icons = { FaXTwitter, FaSquareFacebook, FaDiscord, FaInstagram };

  return (
    <div className="flex flex-col w-full items-center justify-end px-0 py-2 -z-10 bg-[#11bb60] rounded-[30px_30px_0px_0px] pb-5">
      <div className="flex flex-col w-full items-start gap-[20px] px-[32px] py-0 flex-[0_0_auto]">
        <div className="grid grid-cols-3 max-[980px]:grid-cols-2 m-auto justify-between gap-5 py-5 max-w-4xl self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3">
            <div className="bg-[#ffffff] rounded-[8px]">
              <div className="flex-col items-center gap-[10px] top-[-5px] cursor-pointer">
                <img alt="Greenworldaware" src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/GreenWorldAware-2%201.png?updatedAt=1696991576040" width={150} />
              </div>
            </div>
            <p className="font-normal text-[#ffffff] text-xs leading-[18px]">{footerInfo.description}</p>
          </div>

          <div className="flex-col gap-[10px] flex">
            <h1 className="font-bold text-[#ffffff] text-[16px]">Kontak Kami</h1>
            <p className="text-white text-xs">{footerInfo.contact.phone}</p>
            <p className="text-white text-xs">{footerInfo.contact.email}</p>
          </div>

          <div className="flex flex-col gap-1">
            <header className="inline-flex h-[29px] items-center gap-[6px] bg-transparent">
              <div className="w-fit font-bold text-[#ffffff] text-[16px] text-center">Halaman</div>
            </header>
            <div className="flex-wrap gap-[17px_5px] self-stretch w-full flex-[0_0_auto] flex items-start">
              {pages.map((page, index) => (
                <Link to={page.path} key={index}>
                  <ButtonFooter property1="normal" text={page.label} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-[24px] pb-0 px-0 self-stretch w-full flex-[0_0_auto] border-t border-[#ffffff]">
          <div className="flex flex-col items-start gap-[8px]">
            <div className="relative self-stretch w-fit h-[12px]">
              <p className="font-medium text-[#ffffff] text-[11px]">© 2023 - Copyright - FS13</p>
            </div>
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 -z-10">
            {socialIcons.map((icon, index) => {
              const IconComponent = icons[icon.component];
              return <IconComponent key={index} className="w-[24px] h-[24px] text-[#ffffff] hover:text-[#8a928e] cursor-pointer" aria-label={icon.label} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
