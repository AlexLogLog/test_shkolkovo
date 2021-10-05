class MainApi {
    constructor(options) {
        this._url = options.url;
    }
    _error(res) {
        if (res.ok) {
            return res.json();
        } else return Promise.reject(`Ошибка: ${res.status}`);

    }

    getUser(user) {
        return fetch(`${this._url}?username=${user.username}&password=${user.password}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            }
        }).then(this._error)
    }

    newUser(user) {
        return fetch(`${this._url}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
             body: JSON.stringify(user)
        }).then(this._error)
    }
}


export const mainApi = new MainApi({
    url: 'http://localhost:3000/users'
});


