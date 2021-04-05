import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor/vendor.class';

@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string): Vendor[] {
    let selectedVendors: Vendor[] = [];
    if(searchCriteria.length == 0) {
      return vendors;
    }
    for(let vendor of vendors) {
      if(
        vendor.id.toString().includes(searchCriteria.toLocaleLowerCase())
        || vendor.name.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || (vendor.email != null && 
           vendor.email.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase()))
        || vendor.phone.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase()))
         {
        selectedVendors.push(vendor);
      }
    }
    return selectedVendors;
  }

}
