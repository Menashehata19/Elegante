document.documentElement.setAttribute('class', 'notranslate');


let svg = document.getElementById('btnme');

let menu = document.getElementById('menushow');

let  darkmode = document.getElementById('darkmode');
let body = document.getElementById('body7');

svg.addEventListener('click',function(){
  
  if (menu.style.display == "none") {
     menu.style.display="block"
     
  }
  else {
    menu.style.display="none"
  }
  
})






var darkMode = false;

// انشاء دالة لتغيير الوضع المظلم
function toggleDarkMode() {
  // تبديل قيمة المتغير
  darkMode = !darkMode;
  // التحقق من قيمة المتغير
  if (darkMode) {
    // إذا كان الوضع المظلم مفعل، تغيير الأنماط
    document.body.style.backgroundColor = "#00224D";
    document.body.style.color = "white";
    document.getElementById("button80").innerText = "الوضع المضيء";
  } else {
    // إذا كان الوضع المظلم معطل، تغيير الأنماط
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("button80").innerText = "الوضع المظلم";
  }
}

let about = document.getElementById('aboutdivphone');

function aboutbtnshow() {
  // Tab to edit
  
  if (about.style.display == "none") {
  about.style.display="block"
  }
  
  else {
    about.style.display="none"
  }
  
  
}

svg.addEventListener('click',function(){
  if (about.style.display == "block") {
   about.style.display="none"  
  }
})








function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  
  
  abouttext2.innerHTML="ip phone : " + (ip) ;
});






const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};




function multiply(num1, num2) {
  return num1 * num2;
}




abouttext1.innerHTML = "your use : " + (getDeviceType());



let online = navigator.onLine;








if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
    abouttext3.innerHTML= "Battery level is: " + battery.level * 100 + "%";
  });
} else {
  console.log("Battery API not supported.");
}


let online1 = navigator.onLine;


abouttext4.innerHTML= "concted internet : "+ online1;
