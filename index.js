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


app.get('/india-latest', async (req, res) => {
  var latestData = await xlsxFile('./src/assets/spreedsheets/India_Latest.xlsx').then((rows) => {
    return rows
  });

  res.json(await ConvertLatestData(latestData));
})

app.get('/india-predict-data', async (req, res) => {
  var predictionData = await xlsxFile('./src/assets/spreedsheets/India_Prediction.xlsx').then((rows) => {
    return rows;
  });

  res.json(await ConvertPredectionData(predictionData));
})

app.get('/hospitalList', async (req, res) => {
  var hospitalTestData = await xlsxFile('./src/assets/spreedsheets/India _hospital_testing_data.xlsx').then((rows) => {
    return rows;
  });
  res.json(await ConvertHospitalTestData(hospitalTestData));
})

app.get('/india-actual-daywise', async (req, res) => {
  var actualDateWiseData = await xlsxFile('./src/assets/spreedsheets/Inida_Actuals_Daywise.xlsx').then((rows) => {
    return rows;
  });

  res.json(await ConvertActualDateWiseData(actualDateWiseData));
})

app.get('/india-statewise-data', async (req, res) => {
  var stateWiseData = await xlsxFile('./src/assets/spreedsheets/State_Wise_Actuals.xlsx').then((rows) => {
    return rows;
  });

  res.json(await ConvertStateWiseData(stateWiseData));
})


async function ConvertLatestData(data) {
  var latestData = [];
  await data.forEach(element => {
    latestData.push({ name: element[0], totalCount: element[1] })
  });
  return latestData;
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
  var dailyConfirmedCases = [];
  var dailyRecoveredCases = [];
  var dailyDeceasedCases = [];
  var cumlativeConfirmedCases = [];
  var cumlativeRecoveredCases = [];
  var cumlativeDeceasedCases = [];


  var cummlativeData = []
  await data.forEach(element => {
    if (element[0] != "Date") {
      dailyConfirmedCases.push({
        "name": element[0],
        "value": element[1]
      })
      dailyRecoveredCases.push({
        "name": element[0],
        "value": element[2]
      })
      dailyDeceasedCases.push({
        "name": element[0],
        "value": element[3]
      })
      cumlativeConfirmedCases.push({
        "name": element[0],
        "value": element[4]
      })
      cumlativeRecoveredCases.push({
        "name": element[0],
        "value": element[5]
      })
      cumlativeDeceasedCases.push({
        "name": element[0],
        "value": element[6]
      })

    }
  });
  return {
    dailyConfirmedCases: dailyConfirmedCases,
    dailyRecoveredCases: dailyRecoveredCases,
    dailyDeceasedCases: dailyDeceasedCases,
    cumlativeConfirmedCases: cumlativeConfirmedCases,
    cumlativeRecoveredCases: cumlativeRecoveredCases,
    cumlativeDeceasedCases: cumlativeDeceasedCases
  }
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


