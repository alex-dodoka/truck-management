export default class Shipment {
  private _id: string;
  private _isAssign: boolean;
  private _title: string;
  private _address: string;

  constructor(id: string, isAssign: boolean, title: string, address: string) {
    this._id = id;
    this._isAssign = isAssign;
    this._title = title;
    this._address = address;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get isAssign(): boolean {
    return this._isAssign;
  }

  set isAssign(value: boolean) {
    this._isAssign = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
