import { gql } from '@apollo/client';

export const CREATE_COMPANY = gql`
  mutation createCompany($name: String!, $ruc: String!) {
    createCompany(data: { name: $name, ruc: $ruc}) {
      data {
        id
        attributes {
          name
          ruc
          logoPath 
        }
      }
    }
  }
`;


export const DELETE_COMPANY = gql`
  mutation deleteCompany($id: ID!) {
    deleteCompany(id:$id) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

