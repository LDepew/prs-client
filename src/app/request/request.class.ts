import { User } from "../user/user.class"

export class Request {
    id: number = 0;
    user: User = new User();
    description: string = '';
    justification: string = '';
    dateNeeded: string = (new Date()).toISOString().substring(0,10);
    deliveryMode: string = '';
    status: string = '';
    total: string = '';
    submittedDate: string = (new Date()).toISOString();
    reasonForRejection: string = '';
    
  }
