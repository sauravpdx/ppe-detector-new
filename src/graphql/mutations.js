/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const ppedetector = /* GraphQL */ `
  mutation Ppedetector($key: String) {
    ppedetector(key: $key)
  }
`;
export const createTests = /* GraphQL */ `
  mutation CreateTests(
    $input: CreateTestsInput!
    $condition: ModelTestsConditionInput
  ) {
    createTests(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTests = /* GraphQL */ `
  mutation UpdateTests(
    $input: UpdateTestsInput!
    $condition: ModelTestsConditionInput
  ) {
    updateTests(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTests = /* GraphQL */ `
  mutation DeleteTests(
    $input: DeleteTestsInput!
    $condition: ModelTestsConditionInput
  ) {
    deleteTests(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
