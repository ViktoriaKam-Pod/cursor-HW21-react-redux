export const CREATE_PUBLICATION_TYPE = "CREATE_PUBLICATION_TYPE";


export const createPublicationAction = (publications) => {
  return {
    type: CREATE_PUBLICATION_TYPE,
    payload: publications,
  };
};