export const ADD_EXAMPLE = 'ADD_EXAMPLE'

export function addExample ({ example }) {
  return {
    type: ADD_EXAMPLE,
    example,
  }
}