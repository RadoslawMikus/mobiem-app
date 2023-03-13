export class Campaign {
  constructor(
    public client: string,
    public name: string,
    public startDate: Date,
    public endDate: Date
  ) {
    this.client = client;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
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
