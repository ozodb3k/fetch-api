window.addEventListener('load', function (e) {
    const url = 'http://localhost:3000/people'

    let sendRequest = () => {
        return fetch(url)
    }

    document.querySelector('.btn').addEventListener('click', function () {
        sendRequest()
            .then(res => {
                return res.json() // massivga aylantirdik 
            }).then(res => {
                res.forEach((user) => {
                    let div = document.createElement('div')
                    div.classList.add('user')
                    let icon = ''
                    if (user.gender === 'female') {
                        icon = '<i class="fas fa-venus"></i>'
                    } else {
                        icon = '<i class="fas fa-mars"></i>'
                    }

                    div.innerHTML = `
                    <div class="card">
                        <img src="${user.photo}" alt="png
                        " class="account_img">
                        <img src="${user.photo}" alt="png" class="card_img">
                        <div class="name">${user.name} ${user.surname}</div>
                        <div class="gender">${icon}</div>
                        <div class="like"><i class="far fa-heart"></i></div>
                        <div class="number" data-number="${user.number}">Telefon raqam</div>
                        <div class="count">${user.like}</div>
                        <div class="save"><i class="fas fa-bookmark"></i></div>
                    </div>
                `
                    let app = document.querySelector('.app');

                    app.append(div)
                })
                document.querySelectorAll('.number').forEach(elem => {
                    elem.addEventListener('click', function (e) {
                        elem.innerHTML = elem.getAttribute('data-number')
                    })
                });
            })
        document.querySelector('.btn').remove()
    })
}); 