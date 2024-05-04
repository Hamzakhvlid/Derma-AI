export const appointmentReq = [
  {
    id: 1,
    firstname: generateRandomName(), // Function to generate random first name
    lastname: generateRandomName(), // Function to generate random last name
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`, // Generate email with random first/last name and domain
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Get today's date in US format
    time: "getRandomTime()", // Function to generate random time
    reason: getRandomReason(), // Function to generate random reason
    status: getRandomStatus(), // Function to generate random status
  },
  {
    id: 2,
    firstname: generateRandomName(),
    lastname: generateRandomName(),
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time:" getRandomTime()",
    reason: getRandomReason(),
    status: getRandomStatus(),
  },
  // ... You can add more objects here following the same structure
  {
    id: 6, // Adjust the ID according to the number of objects you add
    firstname: generateRandomName(),
    lastname: generateRandomName(),
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time: "getRandomTime()",
    reason: getRandomReason(),
    status: getRandomStatus(),
  },
  {
    id: 1,
    firstname: generateRandomName(), // Function to generate random first name
    lastname: generateRandomName(), // Function to generate random last name
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`, // Generate email with random first/last name and domain
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Get today's date in US format
    time: "getRandomTime()", // Function to generate random time
    reason: getRandomReason(), // Function to generate random reason
    status: getRandomStatus(), // Function to generate random status
  },
  {
    id: 2,
    firstname: generateRandomName(),
    lastname: generateRandomName(),
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time: "getRandomTime()",
    reason: getRandomReason(),
    status: getRandomStatus(),
  },
  // ... You can add more objects here following the same structure
  {
    id: 6, // Adjust the ID according to the number of objects you add
    firstname: generateRandomName(),
    lastname: generateRandomName(),
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time: "getRandomTime()",
    reason: getRandomReason(),
    status: getRandomStatus(),
  },
  {
    id: 1,
    firstname: generateRandomName(), // Function to generate random first name
    lastname: generateRandomName(), // Function to generate random last name
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`, // Generate email with random first/last name and domain
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Get today's date in US format
    time: "getRandomTime()", // Function to generate random time
    reason: getRandomReason(), // Function to generate random reason
    status: getRandomStatus(), // Function to generate random status
  },
  {
    id: 2,
    firstname: generateRandomName(),
    lastname: generateRandomName(),
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time: "getRandomTime()",
    reason: getRandomReason(),
    status: getRandomStatus(),
  },
  // ... You can add more objects here following the same structure
  {
    id: 6, // Adjust the ID according to the number of objects you add
    firstname: generateRandomName(),
    lastname: generateRandomName(),
    email: `${generateRandomName()}.${generateRandomName()}@${getRandomEmailDomain()}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    time: "getRandomTime()",
    reason: getRandomReason(),
    status: getRandomStatus(),
  },
];

// Helper functions to generate random data
function generateRandomName() {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Emily", "Frank", "Grace", "Henry", "Isabel", "Jack"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomEmailDomain() {
  const emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  return emailDomains[Math.floor(Math.random() * emailDomains.length)];
}


function getRandomReason() {
  const reasons = [
    "Routine Check-up",
    "Cleaning",
    "Consultation",
    "Filling",
    "Root Canal",
    "Extraction",
    "Braces Consultation",
    "Crown Placement",
    "Implant Consultation",
    "Denture Consultation",
    "Wisdom Teeth Removal",
    "Other (Please Specify)",
  ];

  return reasons[Math.floor(Math.random() * reasons.length)];
}

function getRandomStatus() {
  const statuses = ["pending", "rejected", "approved"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}