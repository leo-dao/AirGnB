export interface User {
    _id: string;
    username: string;
    email?: string;
    password?: string;
    avatar: string;
    rating: number;
    numRatings?: number;
    location?: string;
}

export interface AdImage {
    _id: string;
    img: string;
}

export interface Rating {
    user: User;
    text: string;
    score: number;
}


export interface Ad {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    user: User;
    images: AdImage[];
    // rating: Rating[];
}

