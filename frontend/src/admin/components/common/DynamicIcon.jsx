import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as LuIcons from "react-icons/lu";

export default function DynamicIcon({
  name,
  size = 20,
  style,
  className = "",
}) {
  const Icon =
    FaIcons[name] ||
    SiIcons[name] ||
    TbIcons[name] ||
    MdIcons[name] ||
    LuIcons[name];

  if (!Icon) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={style}
      >
        ?
      </div>
    );
  }

  return <Icon size={size} style={style} className={className} />;
}
