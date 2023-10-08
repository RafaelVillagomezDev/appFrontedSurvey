const getAuthUser = async (obj) => {
    
    const {email,password}=obj

    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    };
  
    try {
      const response = await fetch("http://localhost:3445/api/v1/auth/login", params);
      const data = await response.json();
      console.log(data)
      return data
    } catch (error) {
      console.error(error);
    }
};

/*
PRUEBA
 body: JSON.stringify({
        email: "yandry75@gmail.com",
        password: "Loranca?08102105"
      })
*/

module.exports={
    getAuthUser
}
