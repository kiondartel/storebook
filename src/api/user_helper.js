import axios from "axios";
export async function getUser() {
  try {
    const response = await axios.post(
      "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
      {
        query: `
        query {
          userPicture         
        }
        `,
        variables: null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return response.data.data.userPicture;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
