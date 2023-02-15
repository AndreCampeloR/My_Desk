export default async function isAuth(api, jwt)
{
    try
      {
        let response = await api.get('/validateJwt', {
          headers: {
            'Authorization': "Bearer "+jwt
          }
        })

        return response.status === 200 ? true : false
      }
      catch(erro)
      {
        console.log(erro)
        return false
      }
}