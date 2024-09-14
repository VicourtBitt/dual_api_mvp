const url = 'http://localhost:300';

const postUserAxios = async (data) => {
    try {
        const response = await axios.post(`${url}1/infos/post`, data);
        console.log(response);

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    postUserAxios
}