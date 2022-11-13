export default class UserInfo {
  constructor(userInfo) {
    this._name = userInfo.profileName;
    this._job = userInfo.profileJob;
  }

  getUserInfo() {
    const userInfo = {};
    userInfo['profileName'] = this._name.textContent;
    userInfo['profileJob'] = this._job.textContent;
    return userInfo;
  }

  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
