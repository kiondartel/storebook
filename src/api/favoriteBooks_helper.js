import axios from "axios";

export async function getFavoriteBooks() {
  try {
    const response = await axios.post(
      "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
      {
        query: `
        query {
          favoriteBooks {
            id
            name
            author {
              name
            }
            cover
            description
          }
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

    return response.data.data.favoriteBooks;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
