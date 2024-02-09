import axios from "axios";
export async function getFavoriteArtist() {
  try {
    const response = await axios.post(
      "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
      {
        query: `
        query {
          favoriteAuthors {
            id
            name
            picture
            booksCount
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

    return response.data.data.favoriteAuthors;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
