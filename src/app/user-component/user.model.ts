export class User {
  public name: string;
  public age: number;
  public gender: string;
  public userId: number;
  public registrationDate: Date;

  constructor(namee: string, agee: number, genderr: string, userIdd: number) {
    this.name = namee;
    this.age = agee;
    this.gender = genderr;
    this.userId = userIdd;
    this.registrationDate = (new Date());
  }

}
