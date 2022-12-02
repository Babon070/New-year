let dayBox = document.getElementById("day-box");
    hrBox = document.getElementById("hr-box");
    minBox = document.getElementById("min-box");
    secBox = document.getElementById("sec-box");
    endDate = new Date(2023, 0, 1, 00, 00);
    endTime = endDate.getTime();
    console.log(secBox);



    function countDown() {
      let todayDate = new Date();
      let todayTime = todayDate.getTime();
      let remainingTime = endTime - todayDate;
      let oneMin = 60 * 1000;
      let oneHr = 60 * oneMin;
      let oneDay = 24 * oneHr;

      let addZeroes = (num) => (num < 10 ? `0${num}` : num)

      if(endTime < todayTime) {
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>Countdown Has Expires</h1>`
      } else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
      }
    }

    let i = setInterval(countDown, 1000);
    countDown()
