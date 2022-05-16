// import user props
import UserProps from "../../Molecules/UserInfo/interfaces";

interface AdCardProps {
    adId: string;
    adImages: string[];
    title: string;
    description: string;
    user: UserProps;
};

export default AdCardProps;