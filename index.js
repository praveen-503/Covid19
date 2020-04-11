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
  var series1 = [];
  var series2 = [];
  var series3 = [];
  var series4 = [];
  var hospitalSeries = [];
  await data.forEach(element => {
    if (element[0] != "Country") {

      series1.push({
        "name": element[2],
        "series": [
          {
            "name": "P1",
            "value": element[3]
          },
          {
            "name": "S1",
            "value": element[7]
          }
        ]
      });
      series2.push({
        "name": element[2],
        "series": [
          {
            "name": "P2",
            "value": element[4]
          },
          {
            "name": "S2",
            "value": element[8]
          }
        ]
      });
      series3.push({
        "name": element[2],
        "series": [
          {
            "name": "P2",
            "value": element[5]
          },
          {
            "name": "S2",
            "value": element[9]
          }
        ]
      });
      series4.push({
        "name": element[2],
        "series": [
          {
            "name": "P2",
            "value": element[6]
          },
          {
            "name": "S2",
            "value": element[10]
          }
        ]
      });
      hospitalSeries.push({
        "name": element[2],
        "series": [
          {
            "name": "H1",
            "value": element[11]
          },
          {
            "name": "H2",
            "value": element[12]
          },
          {
            "name": "H3",
            "value": element[13]
          },
          {
            "name": "H4",
            "value": element[14]
          }
        ]
      });

    }
  });
  return {
    series1: series1,
    series2: series2,
    series3: series3,
    series4: series4,
    hospitalSeries: hospitalSeries
  }

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


