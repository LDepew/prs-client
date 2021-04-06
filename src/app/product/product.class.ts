import { Vendor } from "../vendor/vendor.class";

export class Product {
    id: number = 0;
    partNumber: string = '';
    name: string = '';
    price: string = '';
    unit: string = '';
    photoPath: string = '';
    vendorid: number = 0;
    vendor: Vendor = null;
    vendorName: string = '';
  }