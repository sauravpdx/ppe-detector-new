/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTests = /* GraphQL */ `
  query GetTests($id: ID!) {
    getTests(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
