import Shipment from './Shipment';

export default class Truck {
  private _email: string;
  private _firstName: string;
  private _lastName: string;
  private _licencePlate: string;
  private _phone: string;
  private _shipments?: Shipment[];

  constructor(email: string, firstName: string, lastName: string, licencePlate: string, phone: string, shipments: Shipment[]) {
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this._licencePlate = licencePlate;
    this._phone = phone;
    this._shipments = shipments;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get licencePlate(): string {
    return this._licencePlate;
  }

  set licencePlate(value: string) {
    this._licencePlate = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get shipments(): Shipment[] {
    return this._shipments;
  }

  set shipments(value: Shipment[]) {
    this._shipments = value;
  }
}
