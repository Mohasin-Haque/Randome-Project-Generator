let btn = document.getElementById("btn1");
let output = document.getElementById("output");
let projects = [
  ' Smart tutor ',
  'Make Learning Fun',
  'App to rate Handwriting',
  'Solve Unemployment',
  'Course and university finder',
  'Apps That Aid College Students',
  'Healthcare Record/Report Wallet',
  'Make way for ambulances',
  'Rural Health care',
  'Communication between doctors and patients App',
  'Awareness System',
  'Better Emergency System',
  'Ambulance management',
  'All in one Medical Care App',
  'App to measure noise level',
  'Plant care App',
  'Dedicated App/ website with Product’s environmental impacts',
  'Better Waste Recycling App',
  'Iron Man’s AI based Face Recognising System',
  'Digital Sharable Visiting card',
  'Automation in Hazardous Jobs',
  'Inventions to help physically challenged people',
  'Parking Spot Finder',
  'Crowd Funding System For Start-Up Owners',
];
btn.addEventListener('click', function(){
    var randomProject = projects[Math.floor(Math.random()* projects.length)]
    output.innerHTML = randomProject;
})
