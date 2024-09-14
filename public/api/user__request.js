import { showUsers } from '../ui/showUsers.js'

document.addEventListener('DOMContentLoaded', () => {
    // const reqInputs = document.querySelectorAll('#req-inputs input');
    // const reqSelection = document.querySelector('#req-inputs select');
    // const postUserBtn = document.querySelector('#postUser');
    const allUsers = document.querySelector('#allUsers');
    const responses = document.getElementById('responses');
    
    allUsers.addEventListener('click', async () => {
        const response = await axios.get('http://localhost:3001/infos/get');
        const users = response.data;
        const fullUsers = []
        users.forEach( async (user) => {
            const { ...userInfo } = user
            const noSQLresponse = await axios.get(`http://localhost:3002/preferences/get/${userInfo.id}`);
            userInfo.preferences = noSQLresponse.data;
            fullUsers.push(userInfo);
        })
        console.log(fullUsers);
        showUsers(fullUsers, responses);
    })
})  

