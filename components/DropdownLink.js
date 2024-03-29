import Link from "next/link";

const DropdownLink = (props) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} legacyBehavior>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default DropdownLink;
