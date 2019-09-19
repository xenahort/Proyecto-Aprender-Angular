export class InsuranceService {
  public name: string;
  public serviceId: number;
  public description: string;
  public price: number;
  public image: string;

  constructor(namee: string, serviceIdd: number, descripcionn: string, pricee: number, imagee: string) {
    this.name = namee;
    this.serviceId = serviceIdd;
    this.description = descripcionn;
    this.price = pricee;
    this.image = imagee;
  }

}
