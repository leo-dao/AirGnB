import UserProps from "../UserInfo/interfaces";

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
    price: string;
};

export default AdCardProps;