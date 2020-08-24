const petsData = [
    {
      name: "လဲ့လဲ့စတိုး",
      phones: ["09693157137", "0956548514"],
      address:" ဉာန်ကွဲရပ်ကွက်၊ ပြင်ဦးလွင်မြို့။",
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "တာရာမင်းစတိုး",
      address:" ဉာန်ကွဲရပ်ကွက်၊ ပြင်ဦးလွင်မြို့။",
      phones: ["09693157137"],
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "ခိုင်ဇာအလှကုန်စတိုး",
      address:" ဉာန်ကွဲရပ်ကွက်၊ ပြင်ဦးလွင်မြို့။",
      phones: ["09693157137", "0956548514"],
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];

  function phone(phones) {
    return `
    <h4>ဖုန်း</h4>
    <ul class="foods-list">
      ${phones.map(phone=>`<li>${phone}</li>`).join('')}
    </ul>
    `
  }

  function petTemplate(pet){
    return `
    <div class="animal">
      <img class="pet-photo" src="${pet.photo}">
      <h2 class="pet-name">${pet.name}  </h2>
      <p> ${pet.address}</p>
      ${pet.phones? phone(pet.phones):''}
    </div>
    `
  }

  document.getElementById("app").innerHTML = `
  <h1 class="app-title">ရွှေနဒီအလှကုန်များ ရရှိနိုင်သော ဆိုင်များ- ${petsData.length} ဆိုင် </h1>
  ${petsData.map(petTemplate).join('')}
  <p class="footer"> These ${petsData.length} shops were added recently.</p>
 
  `;