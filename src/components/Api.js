export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
    this._response = (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      }
    };
  }

  getInitialCards() {
    return fetch(this._url + `/cards`, {
      headers: this._headers,
    }).then(this._response);
  }

  getProfileInfo() {
    return fetch(this._url + '/users/me', {
      headers: this._headers,
    }).then(this._response);
  }

  putProfileInfo(name, job) {
    return fetch(this._url + '/users/me', {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then(this._response);
  }

  addNewCard(inputValues) {
    return fetch(this._url + '/cards', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: inputValues.nameCard,
        link: inputValues.linkCard,
      }),
    }).then(this._response);
  }

  putLike(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    }).then(this._response);
  }

  removeCard(cardId) {
    return fetch(this._url + `/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    }).then(this._response);
  }

  deleteLike(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    }).then(this._response);
  }

  setNewAvatar() {
    return fetch(this._url + `/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._response);
  }
  // getFullStartInfo() {
  // Promise.all([getInitialCards, getProfileInfo])
  // }
}
