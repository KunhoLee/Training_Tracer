(function () {
    'use strict';
//    makeTable2_2.html 에서 form 태그로 넘겨준 입력값을 파싱한다.
    var options, i, trainingName, trainingType, pullPerSet, setNum, tBody, firstRow, firstCol, secondCol, thirdCol, fourthCol, j, rpRow, rpFirstCol, rpSecondCol, inText, k, backbt;
    options = location.search.substring(1).split('&');
    for (i = 0; i < (options.length / 4); i += 1) {
        trainingName = options[(i * 4)].split('=')[1];
        trainingType = options[(1 + (i * 4))].split('=')[1];
        pullPerSet = options[(2 + (i * 4))].split('=')[1];
        setNum = options[(3 + (i * 4))].split('=')[1];
        
//        표의 트레이닝 부분 작성
        if (trainingType === 'static') {
            tBody = document.getElementById('training');
            firstRow = document.createElement('tr'); //1행 생성
            firstCol = document.createElement('td'); //1행 1열 생성
            firstCol.innerHTML = trainingName;
            firstCol.setAttribute('rowspan', setNum);
            firstRow.appendChild(firstCol);
            secondCol = document.createElement('td'); //1행 2열 생성
            secondCol.innerHTML = trainingType;
            secondCol.setAttribute('rowspan', setNum);
            firstRow.appendChild(secondCol);
            thirdCol = document.createElement('td'); //1행 3열 생성
            thirdCol.innerHTML = pullPerSet;
            firstRow.appendChild(thirdCol);
            fourthCol = document.createElement('td'); //1행 4열 생성
            fourthCol.innerHTML = '1<input type="checkbox">';
            firstRow.appendChild(fourthCol);
            tBody.appendChild(firstRow);
            for (j = 1; j < Number(setNum); j += 1) {
                rpRow = document.createElement('tr');
                rpFirstCol = document.createElement('td');
                rpFirstCol.innerHTML = pullPerSet;
                rpRow.appendChild(rpFirstCol);
                rpSecondCol = document.createElement('td');
                rpSecondCol.innerHTML = String(j + 1) + '<input type="checkbox">';
                rpRow.appendChild(rpSecondCol);
                tBody.appendChild(rpRow);
            }
        } else if (trainingType === 'pyramid') {
            tBody = document.getElementById('training');
            firstRow = document.createElement('tr'); //1행 생성
            firstCol = document.createElement('td'); //1행 1열 생성
            firstCol.innerHTML = trainingName;
            firstCol.setAttribute('rowspan', setNum);
            firstRow.appendChild(firstCol);
            secondCol = document.createElement('td'); //1행 2열 생성
            secondCol.innerHTML = trainingType;
            secondCol.setAttribute('rowspan', setNum);
            firstRow.appendChild(secondCol);
            thirdCol = document.createElement('td'); //1행 3열 생성
            inText = '';
            for (k = 0; k < Number(pullPerSet); k += 1) {
                inText = inText + String(k + 1) + '<input type="checkbox"> ';
            }
            thirdCol.innerHTML = inText;
            firstRow.appendChild(thirdCol);
            fourthCol = document.createElement('td'); //1행 4열 생성
            fourthCol.innerHTML = '1<input type="checkbox">';
            firstRow.appendChild(fourthCol);
            tBody.appendChild(firstRow);
            for (j = 1; j < Number(setNum); j += 1) {
                rpRow = document.createElement('tr');
                rpFirstCol = document.createElement('td');
                rpFirstCol.innerHTML = inText;
                rpRow.appendChild(rpFirstCol);
                rpSecondCol = document.createElement('td');
                rpSecondCol.innerHTML = String(j + 1) + '<input type="checkbox">';
                rpRow.appendChild(rpSecondCol);
                tBody.appendChild(rpRow);
            }
        }
    }
    
//    goBack 버튼 누르면 index.html 페이지로 돌아감
    backbt = document.getElementById('goBack');
    backbt.addEventListener('click', function () {
        location.href = './index.html';
    });
}());
