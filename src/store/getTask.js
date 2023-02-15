export default async function getTask(api, jwt){
    api.get('/task', {
        headers: {
            'Authorization': "Bearer "+jwt
        }
      })
}