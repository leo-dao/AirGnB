interface UserProps {
    userId: string;
    avatar: string;
    name: string;
    location?: string;
    rating: number;
    numRatings?: number;
    clickAble?: boolean;
}

export default UserProps;