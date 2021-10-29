function groupBy(objectArray: any, property: any): any {
  return objectArray.reduce(function (acc: any, obj: any) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

export default groupBy;
