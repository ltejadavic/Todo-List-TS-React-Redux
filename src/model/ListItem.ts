export interface Task {
    id: string;
    title: string;
    completed: boolean;
  }
  
  export class ListItem implements Task {
    constructor(
      public id: string,
      public title: string,
      public completed: boolean = false
    ) {}
  }