class FeatureApi {
  constructor(query, databaseQuery) {
    this.query = query;
    this.databaseQuery = databaseQuery;
    this.option = {};
  }
  // filter() {
  //   let queryC = JSON.stringify(this.query);
  //   queryC = queryC.replace(/\bgt|gte|lte|lt\b/g, (val) => `$${val}`);
  //   let queryData = JSON.parse(queryC);
  //   console.log("*******************", queryData);
  //   this.databaseQuery = this.databaseQuery.findAll(queryData);
  //   return this;
  // }
  sorting() {
    this.option.order = [];

    if (this.query.sort) {
      let sortArr = this.query.sort.split(",");
      sortArr.forEach((element) => {
        if (element.startWith("-")) {
          this.option.order.push([element.slice(1), "DESC"]);
        } else {
          this.option.order.push([element, "ASC"]);
        }
      });
    } else {
      this.option.order.push[("id", "ASC")];
    }
    return this;
  }

  field() {
    if (this.query.field) {
      let fieldQuery = this.query.field.split(",");
      this.option.attributes = fieldQuery;
    }
    return this;
  }
  pagination() {
    let page = +this.query.page || 0;
    let limit = +this.query.limit || 100;
    this.option.offset = page * limit;
    this.option.limit = limit;
    console.log(this.option);
    this.databaseQuery = this.databaseQuery.findAll(this.option);
    return this;
  }
}

module.exports = FeatureApi;
