const getListSurvey = async (objToken) => {
  const bearerToken = objToken;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "BEARER " + bearerToken,
    },
  };

  try {
    const response = await fetch("http://localhost:3445/api/v1/survey", params);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const removeItemSurvey = (objToken, id_encuesta) => {
  const bearerToken = objToken;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "BEARER " + bearerToken,
    },
  };

  fetch(`http://localhost:3445/api/v1/delete/${id_encuesta}`, params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `La solicitud no fue exitosa. Código de estado: ${response.status}`
        );
      }

      return id_encuesta;
    })
    .then((data) => console.log("data"))
    .catch((error) => {
      console.log(error);
    });
};


module.exports = {
  getListSurvey,
  removeItemSurvey,
};
