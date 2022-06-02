import UserProps from "../../Molecules/UserInfo/interfaces";

export interface ImageProps {
    img: string,
    imgId: string,
}

export default interface AdCardProps {
    adId: string;
    adImages: ImageProps[];
    title: string;
    description: string;
    user: UserProps;
    price: number;
    disabled?: boolean;
};