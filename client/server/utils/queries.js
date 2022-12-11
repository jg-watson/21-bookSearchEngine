import { gql } from '@apollo/client';

export const Query_GET_ME = gql`
query me {
    me {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
}
`;