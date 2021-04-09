import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request/request.class';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string): Request[] {
    let selectedRequests: Request[] = [];
    if(searchCriteria.length == 0) {
      return requests;
    }
    for(let request of requests) {
      if(
        request.id.toString().includes(searchCriteria.toLocaleLowerCase())
        || request.description.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || request.status.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        // || request.user.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        ) {
        selectedRequests.push(request);
      }
    }
    return selectedRequests;
  }

}
