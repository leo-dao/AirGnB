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
    price: number;
};

export default AdCardProps;