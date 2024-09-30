import { getLocalStorage } from "../../utils/storage/saveLocalStorage";

export const getListSurvey = async (objToken) => {
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


export const getSurveyUnique = async (objToken,id_encuesta) => {
  const bearerToken = objToken;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "BEARER " + bearerToken,
    },
  };

  try {
    const response = await fetch(`http://localhost:3445/api/v1/survey/${id_encuesta}`, params);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removeItemSurvey = async (obj) => {
  const { id_encuesta, token } = obj;
  const bearerToken = token;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "BEARER " + bearerToken,
    },
  };

  try {
    const response = await fetch(
      `http://localhost:3445/api/v1/survey/delete/${id_encuesta}`,
      params
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addSurvey = async (obj) => {
  const { dni, producto, mantenimiento, tipo_mantenimiento, estado } = obj;
  const token = getLocalStorage("token");

  const bearerToken = token;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "BEARER " + bearerToken,
    },

    body: JSON.stringify({
      dni: dni,
      mantenimiento: mantenimiento,
      tipo_mantenimiento: tipo_mantenimiento,
      producto: producto,
      estado: estado,
      id_subproducto: "",
    }),
  };

  try {
    const response = await fetch("http://localhost:3445/api/v1/survey/create",params);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
