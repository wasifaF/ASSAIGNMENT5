document.addEventListener("DOMContentLoaded", function () {

  const cards = document.getElementById("cards");
  const history = document.getElementById("history");

  let coins = 100;
  let fav = 0;

  // LOGIN FUNCTION
  window.login = function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin123") {
      document.getElementById("loginPage").classList.add("hidden");
      document.getElementById("mainPage").classList.remove("hidden");

      loadCards(); // load cards AFTER login
    } else {
      alert("Wrong credentials");
    }
  };

  // SERVICES DATA
  const services = [
   { name: "National Emergency Number", number: "999",   img: "B12-A5-Emergency-Hotline/assets/emergency.png" },
    { name: "Police Helpline Number", number: "999",      img: "B12-A5-Emergency-Hotline/assets/police.png" },
    { name: "Fire Service Number", number: "999",         img: "B12-A5-Emergency-Hotline/assets/fire-service.png" },
    { name: "Ambulance Service", number: "1994-999999",   img: "B12-A5-Emergency-Hotline/assets/ambulance.png" },
    { name: "Women & Child Helpline", number: "109",      img: "B12-A5-Emergency-Hotline/assets/emergency.png" },
    { name: "Anti-Corruption Helpline", number: "106",    img: "B12-A5-Emergency-Hotline/assets/emergency.png" },
    { name: "Electricity Helpline", number: "16216",      img: "B12-A5-Emergency-Hotline/assets/emergency.png" },
    { name: "Brac", number: "16445",                      img: "B12-A5-Emergency-Hotline/assets/brac.png" },
    { name: "Bangladesh Railway Helpline", number: "163", img: "B12-A5-Emergency-Hotline/assets/Bangladesh-railway.png" }
  ];

  // LOAD CARDS FUNCTION
  function loadCards() {
    cards.innerHTML = ""; // prevent duplicate cards

    services.forEach(service => {
      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded shadow";

      div.innerHTML = `
        <div class="flex justify-between items-center mb-2">
          <img src="${service.img}" class="w-10 h-10 object-contain">
          <img src="assets/heart.png" class="w-5 cursor-pointer fav-btn">
        </div>

        <h3 class="font-bold text-sm">${service.name}</h3>
        <p class="text-lg my-2">${service.number}</p>

        <div class="flex gap-2">
          <button class="border px-2 py-1 rounded text-sm copy-btn">Copy</button>
          <button class="bg-green-600 text-white px-3 py-1 rounded text-sm call-btn">Call</button>
        </div>
      `;

      // BUTTONS
      const copyBtn = div.querySelector(".copy-btn");
      const callBtn = div.querySelector(".call-btn");
      const favBtn = div.querySelector(".fav-btn");

      // COPY
      copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(service.number);
        alert("Copied: " + service.number);
      });

      // CALL
      callBtn.addEventListener("click", function () {
        const li = document.createElement("li");
        li.textContent = `${service.name} - ${service.number}`;
        history.appendChild(li);

        coins--;
        document.getElementById("coinCount").textContent = coins;
      });

      // FAVORITE
      favBtn.addEventListener("click", function () {
        fav++;
        document.getElementById("favCount").textContent = fav;
      });

      cards.appendChild(div);
    });
  }

  // CLEAR HISTORY
  window.clearHistory = function () {
    history.innerHTML = "";
  };

});
 