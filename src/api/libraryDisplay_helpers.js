import axios from "axios";
export async function getAllBooks() {
  try {
    const response = await axios.post(
      "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
      {
        query: `
        query {
          allBooks {
            id
            name
            author {
              name
            }
            cover
            category
            description
            isFavorite
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

    return response.data.data.allBooks;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
