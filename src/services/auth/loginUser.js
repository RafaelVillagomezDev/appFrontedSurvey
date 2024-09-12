const getAuthUser = async (obj) => {
  const { email, password } = obj;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  try {
    const response = await fetch(
      "http://localhost:3445/api/v1/auth/login",
      params
    );
    if (!response.ok) {
      const errorData = await response.json();
      if (Array.isArray(errorData)) {
        const errorMessages = errorData.errors.map((error) => error.msg);
        const concatenatedMessages = errorMessages.join(", ");
        throw new Error(concatenatedMessages);
      }
      throw new Error(errorData);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAuthUser,
};
