function generateTable() {
    const number = parseInt(document.getElementById("number").value);
    const limit = parseInt(document.getElementById("limit").value);
    const tableContainer = document.getElementById("tableContainer");

    let tableHTML = "<table class='table-info table table-bordered table-striped-columns'>";
    tableHTML += "<thead><tr><th class='col'>Number</th><th class='col'>Result</th></tr></thead>"
    
        for (let i = 1; i <= 15; i++) {
            tableHTML += `<tbody><tr><td>${number} x ${i} =</td> <td>${i*number}</td></tr></tbody>`;
        }
   
    tableHTML += "</table>";

    tableContainer.innerHTML = tableHTML;
}