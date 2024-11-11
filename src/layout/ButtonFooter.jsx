import PropTypes from "prop-types";

const ButtonFooter = ({ property1, text }) => {
  const isHover = property1 === "hover";

  const containerClass = `items-start gap-[6px] relative cursor-pointer ${isHover ? "inline-flex" : "flex"} w-[100px]`;
  const textClass = `mt-[-1px] text-[13px] relative ${isHover ? "[font-family:'Inter-Bold',Helvetica] text-white font-bold" : "[font-family:'Inter-Regular',Helvetica] text-[#ffffff] font-normal"} w-fit whitespace-nowrap`;

  return (
    <div className={containerClass}>
      <div className={textClass}>{text}</div>
    </div>
  );
};

ButtonFooter.propTypes = {
  property1: PropTypes.oneOf(["hover", "normal"]),
  text: PropTypes.string.isRequired,
};

export default ButtonFooter;
