export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expiresIn: Date
  ) { }

  get token() {
    if (!this._token && new Date() > this._expiresIn) {
      console.log('reached');

      return null;
    }
    return this._token;
  }
}
