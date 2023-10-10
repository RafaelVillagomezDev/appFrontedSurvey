const getListSurvey = async (objToken) => {
    
    const bearerToken=objToken

    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'BEARER ' +bearerToken
      },
    };
  
    try {
      const response = await fetch("http://localhost:3445/api/v1/survey", params);
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
};

const removeItemSurvey = async (objToken,id_encuesta) => {
    
  const bearerToken=objToken
  
  const params = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'BEARER ' +bearerToken
    },
  };

  try {
    const response = await fetch("http://localhost:3445/api/v1/delete/"+{id_encuesta}, params);
    const data = await response.json();
    console.log("eliminado")
    return data
  } catch (error) {
    console.error(error);
  }
};


module.exports={
    getListSurvey , removeItemSurvey
}
