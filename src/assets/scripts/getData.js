export const getExcelData = (sheetName, callback) => {
  const xhr = new XMLHttpRequest();
  const sheetId = "11EYVT5etV3ezoNS_gE8EL-rhHKrnlfUYm9WHDLL0NT8";
  const apiKey = "AIzaSyAoTej9n7Owubby3AiquV5QaXFyips1S3c";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      const result = convertToKeyValue(JSON.parse(response));
      callback(result);
    }
  };

  xhr.onerror = function () {
    console.error("요청 실패");
  };

  xhr.send();
};

const convertToKeyValue = (data) => {
  const keys = data.values[0];
  const result = [];

  for (let i = 1; i < data.values.length; i++) {
    let obj = {};
    let row = data.values[i];
    for (let j = 0; j < keys.length; j++) {
      obj[keys[j]] = row[j];
    }
    result.push(obj);
  }
  return result;
};
