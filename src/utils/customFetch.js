export const customFetch = async (
  url,
  method = "GET",
  bearerToken = "",
  body = null
) => {
  const params = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(bearerToken && { Authorization: `Bearer ${bearerToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(url, params);
    const data = await response.json();
    if (!response.ok) {
      const result = Object.entries(data.error)
        .map(([key, value]) => `${value}`)
        .join(", ");
      throw new Error(result);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
