const showUsers = (array, elem) => {
    array.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        const divLayout =`
            <h3>${user.name}</h3>
            <p>${user.phone}</p>
            <p>${user.age}</p>
            <p>${user.preferences}</p>
        `
        userDiv.innerHTML += divLayout;
        elem.appendChild(userDiv);
    })
}

export { showUsers }