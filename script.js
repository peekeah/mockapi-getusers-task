fetch("https://61ea3e337bc0550017bc664c.mockapi.io/users")
    .then(data => data.json())
    // .then((users) => users.map((user) => user.name))
    .then((users) => users.forEach((user) => displayUser(user)))


    function displayUser({name, email, id}) {
        document.querySelector(".user-list").innerHTML += `<div>${name}</div>`;

    }