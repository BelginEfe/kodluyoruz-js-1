
let name = prompt(`Lütfen adınızı giriniz: `,`Adınız..`)
document.querySelector(`#myName`).innerHTML = `${name}`


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function showTime() {
    const today = new Date();
    let h = today.getHours(); 
    let m = today.getMinutes();
    let s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      showTime()
    }, 500);
  }
  showTime();


  const date = new Date();
  let d = date.getDay();
  switch(d){
    case 0:
      document.querySelector(`#myDay`).innerHTML = `Pazar`;
      break;
    case 1:
      document.querySelector(`#myDay`).innerHTML = `Pazartesi`;
      break;
    case 2:
      document.querySelector(`#myDay`).innerHTML = `Salı`;
      break;
    case 3:
      document.querySelector(`#myDay`).innerHTML = `Çarşamba`;
      break;
    case 4:
      document.querySelector(`#myDay`).innerHTML = `Perşembe`;
      break;
    case 5:
      document.querySelector(`#myDay`).innerHTML = `Cuma`;
      break;
    case 6:
      document.querySelector(`#myDay`).innerHTML = `Cumartesi`;
      break;
  }
