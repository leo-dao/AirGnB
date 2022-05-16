import UserProps from '../../Molecules/UserInfo/Interfaces';

interface AdCardProps {
    adId: string;
    adImages: string[];
    title: string;
    description: string;
    user: UserProps;
};

export default AdCardProps;