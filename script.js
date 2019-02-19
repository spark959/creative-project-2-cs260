const proxyurl1 = "https://cors-anywhere.herokuapp.com/";
let urlTemp1 = "https://age-of-empires-2-api.herokuapp.com/api/v1/units";
const url1 = proxyurl1 + urlTemp1;
fetch(url1)
  .then(function(response){
    return response.json();
  }).then(function(json){
    console.log(json);
    let result1 = "";
    for(let i = 0; i < json.units.length; i++){
        result1 += "<h4>" + json.units[i].name + "</h4>"
    }
    document.getElementById("unitList").innerHTML = result1;
});

document.getElementById("unitSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("unitInput").value;
  if (value === "")
    return;
  console.log(value);
  const proxyurl2 = "https://cors-anywhere.herokuapp.com/";
  let urlTemp2 = "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" + value;
  const url2 = proxyurl2 + urlTemp2;
  fetch(url2)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let result = "";
      result += '<h2>' + json.name + '</h2>';
      result += '<h3>Cost:</h3>';
      if(json.cost.Wood > 0){
        result += '<p>Wood: ' + json.cost.Wood + '</p>';
      }
      if(json.cost.Food > 0){
        result += '<p>Food: ' + json.cost.Food + '</p>';
      }
      if(json.cost.Stone > 0){
        result += '<p>Stone: ' + json.cost.Stone + '</p>';
      }
      if(json.cost.Gold > 0){
        result += '<p>Gold: ' + json.cost.Gold + '</p>';
      }
      result += '<h3>HP: ' + json.hit_points + '</h3>';
      result += '<div>';
      result += '<p>Attack: ' + json.attack + '</p>';
      result += '<p>Attack Bonus: ' + json.attack_bonus + '</p>';
      result += '</div>';
      result += '<div>';
      result += '<p>Armor melee/pierce: ' + json.armor + '</p>';
      result += '<p>Armor Bonus: ' + json.armor_bonus + '</p>';
      result += '</div>';

      document.getElementById("unitResults").innerHTML = result;
    });
});
