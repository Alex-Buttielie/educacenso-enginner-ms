export const mapEntity = (data: any, entityData: any, mapping: any): any => {
  for (const index in mapping) {
    try {
      const value = data[parseFloat(index) - 1];

      let valueNumber =
        value != null && value !== "" && !isNaN(Number(value))
          ? parseFloat(data[parseFloat(index) - 1])
          : 0;

      if (
        typeof valueNumber === "number" &&
        valueNumber != 0 &&
        valueNumber > 0
      ) {
        entityData[mapping[index]] = valueNumber;
        continue;
      }

      let valueDate =
        value != null && value !== "" && value != 0
          ? parseDate(data[parseFloat(index) - 1])
          : null;

      if (valueDate instanceof Date && !isNaN(valueDate.getTime())) {
        entityData[mapping[index]] = valueDate;
        continue;
      }

      if (value != null) {
        entityData[mapping[index]] = value;
      }
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  return entityData;
};

function parseDate(dateString) {
  const parts = dateString.split("/");

  if (parts.length !== 3) {
    return null;
  }

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
}
