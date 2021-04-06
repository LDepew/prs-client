import { Vendor } from "../vendor/vendor.class";

export class Request {
    id: number = 0;
    description: string = '';
    rejectionReason: string = '';
    status: string = '';
    total: string = '';
    username: string = '';
    vendorid: number = 0;
    vendor: Vendor = null;
    vendorName: string = '';
  }