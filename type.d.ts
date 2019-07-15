export interface Address {
    city: String;
    provice: String;
    zipcode: String;
  }


export interface Profile {
  name: String;
  address: Address;
  role: Array
}