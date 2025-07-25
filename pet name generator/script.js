const petNames = {
  dog: ['Buddy', 'Max', 'Charlie', 'Cooper', 'Rocky', 'Bella', 'Luna', 'Daisy'],
  cat: ['Simba', 'Milo', 'Oliver', 'Leo', 'Loki', 'Lily', 'Chloe', 'Nala'],
  bird: ['Kiwi', 'Sky', 'Sunny', 'Coco', 'Angel', 'Tweety', 'Zazu', 'Rio'],
  any: []
};

// Combine all into 'any'
petNames.any = [...petNames.dog, ...petNames.cat, ...petNames.bird];

function generateName() {
  const petType = document.getElementById('petType').value;
  const names = petNames[petType];
  const randomName = names[Math.floor(Math.random() * names.length)];
  
  document.getElementById('result').textContent = `🦄 Name: ${randomName}`;
}
