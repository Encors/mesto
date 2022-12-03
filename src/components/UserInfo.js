export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._name = document.querySelector(profileName);
    this._about = document.querySelector(profileJob);
    this._avatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo['profileName'] = this._name.textContent;
    userInfo['profileAbout'] = this._about.textContent;
    userInfo['avatar'] = this._avatar.src;
    return userInfo;
  }

  setUserInfo(name, job) {
    this._name.textContent = name;
    this._about.textContent = job;
  }

  setAvatar(avatar) {
    this._avatar.src = avatar;
  }
}
