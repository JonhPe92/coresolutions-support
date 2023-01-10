import { gql } from '@apollo/client';

export const GET_ALL_COMPANIES = gql`
  query GetComapnies {
    companies {
      data {
        id
        attributes {
          name
          ruc
          logoPath,
          logo {
            data {
              attributes {
                url
              }
            }
          }
          contracts {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;


export const GET_COMPANY = gql `
query company($id: ID!){
  company (id:$id){
    data{
      attributes{
        name,
        ruc
      }
    }
  }
}`