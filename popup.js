const usStates = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DC: "District of Columbia",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
};

document.getElementById('submit').addEventListener('click', function() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const age = document.getElementById('age').value;


  full_state = "";
  if(state!=''){
    full_state = usStates[state.toUpperCase()].replace(' ', '-').toLowerCase();
  }
  const sites = [
    `https://www.truepeoplesearch.com/results?name=${firstName}%20${lastName}&citystatezip=${city}%2C%20${state}&agerange=${age}-${age}`,
    `https://www.smartbackgroundchecks.com/people/${firstName}-${lastName}/${state}/${city}`,
    `https://thatsthem.com/name/${firstName}-${lastName}/${city}-${state}`,
    `https://www.fastpeoplesearch.com/name/${firstName}-${lastName}_${city}-${state}`,
    `https://www.anywho.com/people/${firstName}+${lastName}/${city}+${state}/`,
    `https://www.searchpeoplefree.com/find/${firstName}-${lastName}/${state}/${city}`,
    `https://www.usphonebook.com/${firstName}-${lastName}/${full_state}/${city}`,
    `https://www.familytreenow.com/search/genealogy/results?first=${firstName}&last=${lastName}&citystatezip=${city},%20${state}`,
    `https://people.yellowpages.com/whitepages/?first_name=${firstName}&last_name=${lastName}&city=${city}&state=${state.toUpperCase()}`
  ];

  sites.forEach(url => {
    chrome.tabs.create({ url: url });
  });
});