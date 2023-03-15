export class Campaign {
  constructor(
    public id: any,
    public client: string,
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public newCampaign: boolean
  ) {
    this.id = id;
    this.client = client;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.newCampaign = newCampaign;
  }

  getStartDate() {
    return (
      this.startDate.getFullYear() +
      '.' +
      (this.startDate.getMonth() + 1) +
      '.' +
      this.startDate.getDate()
    );
  }

  getEndDate() {
    return (
      this.endDate.getFullYear() +
      '.' +
      (this.endDate.getMonth() + 1) +
      '.' +
      this.endDate.getDate()
    );
  }
}
