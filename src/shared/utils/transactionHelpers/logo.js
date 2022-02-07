import threeDS from "../../../assets/3DS.svg";

const logos = {
  "3DS": threeDS,
};
export const getLogo = (logo) => {
  if (logos[logo?.toUpperCase()])
    return <img alt={logo} width="20px" src={logos[logo.toUpperCase()]} />;
};
