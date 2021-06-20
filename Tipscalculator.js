let min_tip, max_tip, min_people, max_people, bill_field;
min_tip = document.getElementById('minus_tip');
max_tip = document.getElementById('plus_tip');
min_people = document.getElementById('minus_people');
max_people = document.getElementById('plus_people');
bill_field = document.getElementById("totalbill");
people_field = document.getElementById("people");
tip_field = document.getElementById("tip");
// min_tip.onclick = () => caltip();
// max_tip.onclick=()=>caltip();
// min_people.onclick=()=>caltip();
// max_people.onclick = () => caltip();
bill_field.addEventListener('blur', function () {
  if(bill_field.value=='')
  {
    bill_field.value='0';
  }
  caltip();
})
min_tip.addEventListener("click", function () {
  console.log(tip_field.value);
  if(tip_field.value=='-1%')
  {
   tip_field.value='0%';
  }
  else
    caltip(); 

});
max_tip.addEventListener("click", function () {
  caltip();
});

min_people.addEventListener("click", function () {
  if(people_field.value == 0){
  
    people_field.value="1";
    console.log(people_field.value);
  }
  else
    caltip();
});
max_people.addEventListener("click", function () {
  caltip();
});
(function () {
  caltip();
})();
function btnController(eleId, status) {
  console.log(eleId.id);
  elementId = eleId.id;
  var value = parseInt(eleId.value, 10);
  value = isNaN(value) ? 0 : value;
  if (status == "increase")
    value++;
  else
    value--;
  if (elementId == "tip")
    document.getElementById(elementId).value = value + "%";
  else
    document.getElementById(elementId).value = value;
}

function caltip() {
  console.log("call tip function running");
  let pertip, bill, tip, people, perpeople, resultpertip;
  //*get dom objects start
  bill = document.getElementById('totalbill');
  tip = document.getElementById('tip');
  people = document.getElementById('people');
  pertip = document.getElementById('Tipresult');
  peopleResult = document.getElementById('Peopleresult');
  //*dom objects end

  //*get dom objects value start
  billValue = parseInt(bill.value);
  tipValue = parseInt(tip.value);
  peopleValue = parseInt(people.value);
  pertipValue = parseInt(pertip.value);
  //*get dom objects value end
  console.log(billValue, tipValue, peopleValue);

  // !people value can't be zero: error handling 'NaN'
  if (peopleValue > 0) {
    resultpertip = (billValue * tipValue) / (100 * peopleValue);
    pertip.innerHTML = "$"+ resultpertip;
    console.log((resultpertip));
    gtotal = (billValue/peopleValue) + resultpertip;
    peopleResult.innerHTML = "$"+ gtotal;
  } else {
    console.warn("atlest one people should available");
  }

}

