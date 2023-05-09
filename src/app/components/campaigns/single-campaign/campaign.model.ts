export class Campaign {
  constructor(
    public id: any,
    public client: string,
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public alreadyTested: boolean,
    public newCampaign: boolean,
    public running: boolean,
    public history: boolean
  ) {
    this.id = id;
    this.client = client;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.alreadyTested = alreadyTested;
    this.newCampaign = newCampaign;
    this.running = running;
    this.history = history;
  }

  getStartDate() {
    return (
      this.startDate.getFullYear() +
      '.' +
      ('0' + (this.startDate.getMonth() + 1)).slice(-2) +
      '.' +
      ('0' + (this.startDate.getDate() + 1)).slice(-2)
    );
  }

  getEndDate() {
    return (
      this.startDate.getFullYear() +
      '.' +
      ('0' + (this.startDate.getMonth() + 1)).slice(-2) +
      '.' +
      ('0' + (this.startDate.getDate() + 1)).slice(-2)
    );
  }
}
