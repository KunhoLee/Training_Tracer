(function () {
    'use strict';
    var rowNum, tBody, createdRow, createdCol1, createdCol2, createdCol3, createdCol4, i;
    rowNum = location.search.substring(1).split('=')[1];
    tBody = document.getElementById('tBody');
    for (i = 0; i < Number(rowNum); i += 1) {
        createdRow = document.createElement('tr');
        createdCol1 = document.createElement('td');
        createdCol2 = document.createElement('td');
        createdCol3 = document.createElement('td');
        createdCol4 = document.createElement('td');
        createdCol1.innerHTML = '<input type="text" name="trainingName' + String(i + 1) + '">';
        createdCol2.innerHTML = '<select name="trainingType' + String(i + 1) + '"><option disabled selected>--- select an option ---</option><option value="pyramid">pyramid</option><option value="static">static</option></select>';
        createdCol3.innerHTML = '<input type="number" name="pullNum' + String(i + 1) + '">';
        createdCol4.innerHTML = '<input type="number" name="setNum' + String(i + 1) + '">';
        createdRow.appendChild(createdCol1);
        createdRow.appendChild(createdCol2);
        createdRow.appendChild(createdCol3);
        createdRow.appendChild(createdCol4);
        tBody.appendChild(createdRow);
    }
}());