export function getMonthsData(data) {
  var monthLabels = [];
  var makeDate = data;
  makeDate.setMonth(makeDate.getMonth());
  monthLabels.push(
    new Date(makeDate).toLocaleString("default", {
      month: "long",
    })
  );
  for (var i = 0; i < 5; i++) {
    makeDate.setMonth(makeDate.getMonth() - 5);
    monthLabels.push(
      new Date(makeDate).toLocaleString("default", {
        month: "long",
      })
    );
  }
  return monthLabels.reverse();
}
