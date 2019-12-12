import {gql} from "apollo-boost";

const GET_USER = gql`
    {
        getUser {
            id
            firstName
            lastName
            email
            phone
            password
            validated
        }
    }
`;

export default GET_USER;

