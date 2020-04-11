const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var data = [];


// Server any static files
app.use(express.static(path.join(__dirname, 'build')));

const xlsxFile = require('read-excel-file/node');


app.get('/india-latest',async (req,res)=>{
  var latestData = await xlsxFile('./src/assets/spreedsheets/India_Latest.xlsx').then((rows) => {
    return rows
  });

  res.json(await ConvertLatestData(latestData));
})

async function ConvertLatestData(data) {
  var latestData = [];
  await data.forEach(element => {
    latestData.push({ name: element[0], totalCount: element[1] })
  });
  return latestData;
}

app.get('/hospitalList',async (req,res)=>{

})

app.get('/india-data', async (req, res) => {
  var indiaCovidData = await readIndiaExcelsData();
  var latestData = await ConvertLatestData(indiaCovidData.latestData);
  var predictionData = await ConvertPredectionData(indiaCovidData.predictionData);
  var actualDateWiseData = await ConvertActualDateWiseData(indiaCovidData.actualDateWiseData);
  var hospitalTestData = await ConvertHospitalTestData(indiaCovidData.hospitalTestData);
  var stateWiseData = await ConvertStateWiseData(indiaCovidData.stateWiseData);
  res.json(
    {
      latestData: latestData,
      predictionData: predictionData,
      actualDateWiseData: actualDateWiseData,
      hospitalTestData: hospitalTestData,
      stateWiseData: stateWiseData
    });
});

async function readIndiaExcelsData() {
  const indiaCovidData = {};
  indiaCovidData.predictionData = await xlsxFile('./src/assets/spreedsheets/India_Prediction.xlsx').then((rows) => {
    return rows;
  });
  indiaCovidData.latestData = await xlsxFile('./src/assets/spreedsheets/India_Latest.xlsx').then((rows) => {
    return rows;
  });
  indiaCovidData.actualDateWiseData = await xlsxFile('./src/assets/spreedsheets/Inida_Actuals_Daywise.xlsx').then((rows) => {
    return rows;
  });
  indiaCovidData.hospitalTestData = await xlsxFile('./src/assets/spreedsheets/India _hospital_testing_data.xlsx').then((rows) => {
    return rows;
  });
  indiaCovidData.stateWiseData = await xlsxFile('./src/assets/spreedsheets/State_Wise_Actuals.xlsx').then((rows) => {
    return rows;
  });
  return indiaCovidData;
}



async function ConvertPredectionData(data) {
  var predictionData = [];
  await data.forEach(element => {
    if (element[0] != "Country") {
      predictionData.push(
        {
          countryName: element[0],
          countryCode: element[1],
          date: element[2],
          p1: element[3],
          p2: element[4],
          p3: element[5],
          p4: element[6],
          s1: element[7],
          s2: element[8],
          s3: element[9],
          s4: element[10],
          h1: element[11],
          h2: element[12],
          h3: element[13],
          h4: element[14],
        });
    }
  });
  return predictionData

}

async function ConvertActualDateWiseData(data) {
  var actualDateWiseData = [];
  await data.forEach(element => {
    if (element[0] != "Date") {
      actualDateWiseData.push(
        {
          date: element[0],
          confirmedCases: element[1],
          recovered: element[2],
          deceased: element[3],
          cumConfirmedCases: element[4],
          cumRecovered: element[5],
          cumDeceased: element[6],
        });
    }
  });
  return actualDateWiseData;
}

async function ConvertHospitalTestData(data) {
  var hospitalTestData = [];
  await data.forEach(element => {
    hospitalTestData.push({ name: element[0], totalCount: element[1] })
  });
  return hospitalTestData;
}

async function ConvertStateWiseData(data) {
  var stateWiseData = [];
  await data.forEach(element => {
    if (element[0] != "State") {
      stateWiseData.push(
        {
          state: element[0],
          confirmed: element[1],
          active: element[2],
          recovered: element[3],
          deceased: element[4]
        });
    }
  });
  return stateWiseData;
}

app.get('/data', (req, res) => {
  res.send(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build',
    'index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));


