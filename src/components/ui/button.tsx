import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type ButtonProps = {
  children: string;
  asLink?: boolean | undefined;
  to?: Url;
  onClick?: () => void;
  iconClassName?: string | undefined;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Button({
  children,
  asLink,
  to,
  onClick,
  Icon,
  iconClassName,
}: ButtonProps) {
  return asLink ? (
    <Link
      href={to as Url}
      className="flex text-white flex-row font-[600] text-[16px] shadow-buttonShadowDefault items-center bg-button px-[24px] py-[12px] rounded-[4px] gap-[10px] hover:shadow-buttonShadowHoverd focus:shadow-buttonShadowPressed transition-shadow ease-out duration-300 focus:ring-4 focus:ring-button/40"
    >
      <p>{children}</p>
      {Icon && <Icon className={iconClassName} />}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="flex text-white flex-row font-[600] text-[16px] shadow-buttonShadowDefault items-center bg-button px-[24px] py-[12px] rounded-[4px] gap-[10px] hover:shadow-buttonShadowHoverd focus:shadow-buttonShadowPressed transition-shadow ease-out duration-300 focus:ring-4 focus:ring-button/40"
    >
      <p>{children}</p>
      {Icon && <Icon className={iconClassName} />}
    </button>
  );
}
