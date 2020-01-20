import React from "react";

interface UserContextProps {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    validated: boolean,
    company: {
        id: string,
        name: string,
        description: string,
        email: string,
        phone: string,
        logo: string,
        cover: string
    }
}

const UserContext = React.createContext<Partial<UserContextProps>>({});

export default UserContext;
