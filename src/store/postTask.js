export default async function postTask(api, jwt, content)
{
    api.post('/task', 
      content, 
      {
        headers: {
          'Authorization': "Bearer "+jwt
        }
      })
}