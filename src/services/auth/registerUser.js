const registerUser = async (obj) => {
    const { email, name_user, surname, password } = obj;
  
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        name_user: name_user,
        surname: surname,
        password: password
      })
    };
  
    try {
      const response = await fetch("http://localhost:3445/api/v1/auth/register", params);
  
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        const errorData = await response.json();
        // Extrae y concatena los mensajes de error
        const errorMessages = errorData.errors.map(error => error.msg);
        const concatenatedMessages = errorMessages.join(', ');
        throw new Error(concatenatedMessages);
      }
  
      // Procesa la respuesta en caso de éxito
      const data = await response.json();
      return data;
    } catch (error) {
      // Manejo de errores
      console.error('Error durante el registro:', error.message);
      throw error; // Puedes volver a lanzar el error para que sea manejado por el código que llama a esta función
    }
  };
  
  module.exports={
    registerUser
  }