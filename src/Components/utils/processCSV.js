

const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((prev, header, i) => {
        prev[header] = values[i];
        return prev;
      }, {});
      return eachObject;
    });

     return(newArray);
  };