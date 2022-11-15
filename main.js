
var mylabel = [];
var mydata = [];
var mydata1 = [];
function UploadProcess() {
	//Reference the FileUpload element.
	var fileUpload = document.getElementById("fileUpload");

	//Validate whether File is valid Excel file.
	var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx|.csv)$/;
	if (regex.test(fileUpload.value.toLowerCase())) {
		if (typeof (FileReader) != "undefined") {
			var reader = new FileReader();

			//For Browsers other than IE.
			if (reader.readAsBinaryString) {
				reader.onload = function (e) {
					GetTableFromExcel(e.target.result);
					//console.log(e.target.result);
				};
				reader.readAsBinaryString(fileUpload.files[0]);
			} else {
				//For IE Browser.
				reader.onload = function (e) {
					var data = "";
					var bytes = new Uint8Array(e.target.result);
					for (var i = 0; i < bytes.byteLength; i++) {
						data += String.fromCharCode(bytes[i]);
					}
					GetTableFromExcel(data);

				};
				reader.readAsArrayBuffer(fileUpload.files[0]);
			}
		} else {
			alert("This browser does not support HTML5.");
		}
	} else {
		alert("Please upload a valid Excel file.");
	}
};
function GetTableFromExcel(data) {
	//Read the Excel File data in binary
	var workbook = XLSX.read(data, {
		type: 'binary'
	});

	//get the name of First Sheet.
	var Sheet = workbook.SheetNames[0];
	console.log(Sheet);
	var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Sheet]);
	console.log(excelRows)
    for (let x of excelRows) {
        mylabel.push(x.Date)
        mydata.push(x.Open)
        mydata1.push(x.Close)

      }
      const ctx = document.getElementById('myChart');
        
      const newdata = {
          labels: mylabel,
          datasets: [{
            borderWidth: 1,
              label: 'Open Price',
              data: mydata,
              fill: false,
              borderColor: 'rgb(0, 255, 0)',
              tension: 0.1
          },
          {
            label: 'Close Price',
            data: mydata1,
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1
        }
        
        ]
      };
      new Chart(ctx, {
          type: 'line',
          data: newdata,
          options: {
            responsive: true,
            plugins: {
              tooltip: {
                mode: 'index',
                intersect: false
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart'
              }
            },
            hover: {
              mode: 'index',
              intersec: false
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Month'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Value'
                },
                min: 0,
               
                ticks: {
                  // forces step size to be 50 units
                  stepSize: 20
                }
              }
            }
          },
      }); 
	

};
console.log(mylabel);

