// import user props
import UserProps from "../../Molecules/UserInfo/interfaces";

interface imageProps {
    img: string,
    imgId: string,
}

interface AdCardProps {
    adId: string;
    adImages: imageProps[];
    title: string;
    description: string;
    user: UserProps;
};

export default AdCardProps;