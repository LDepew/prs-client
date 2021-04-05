import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    let selectedUsers: User[] = [];
    if(searchCriteria.length == 0) {
      return users;
    }
    for(let user of users) {
      if(
        user.id.toString().includes(searchCriteria.toLocaleLowerCase())
        || user.username.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || user.firstName.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || user.lastName.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase())
        || (user.email != null && 
           user.email.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase()))
        || (user.password != null &&
           user.phoneNumber.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase()))
        ) {
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  }

}
