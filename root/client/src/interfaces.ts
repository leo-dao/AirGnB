export interface User {
    id: string;
    name: string;
    email?: string;
    password?: string;
    avatar: string;
    rating: number;
    numRatings?: number;
    location?: string;
}

export interface AdImage {
    id: string;
    image: string;
}

export interface Ad {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    user?: User;        // Optional for now until able to fetch user info 
    images: AdImage[];
}

