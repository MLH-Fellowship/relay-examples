async function fetchGraphQL(text, variables) {
  const URI = "";
  // Fetch data from GraphQL API:
  const response = await fetch(URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
