export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this.name = document.querySelector(profileName);
    this.about = document.querySelector(profileJob);
    this.avatar = document.querySelector(profileAvatar);
  }

  getUserInfo(data) {
    const userInfo = Object.assign({}, data);
    return userInfo;
  }

  setUserInfo(name, job) {
    this.name.textContent = name;
    this.about.textContent = job;
  }

  setAvatar(avatar) {
    this.avatar.src = avatar;
  }
}