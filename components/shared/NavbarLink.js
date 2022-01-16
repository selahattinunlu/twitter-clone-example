import Link from "next/link";

const NavbarLink = ({ Icon, href, label, active }) => {
  return (
    <Link href={href}>
      <a
        className={`flex items-center space-x-4 ${
          active ? "text-gray-800" : "text-gray-600"
        }`}
      >
        <Icon className={`w-6 h-6`} />
        <div>{label}</div>
      </a>
    </Link>
  );
};

export default NavbarLink;
