import { Logo } from "components/ui";

function BrandLogo({ isEdit }) {
  return (
    <Logo
      sx={{ width: 120, height: 120 }}
      disabledLink={true}
      src={
        "https://res.cloudinary.com/codershool/image/upload/v1669084028/ucars/logo/UCARS_Logo_hxhvzo.svg"
      }
    />
  );
}

export default BrandLogo;
