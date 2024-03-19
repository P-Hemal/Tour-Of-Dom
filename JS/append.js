// No 1. Where to add
const placesList = document.getElementById('places-list');
// No 2. what To be added
const li = document.createElement('li');
li.innerText = 'Sajek';
// No 3. add teh child
placesList.appendChild(li)

// No 1. Where to add
const mainContainer = document.getElementById('main-container');

// No 2. what To be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Kacchi';
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText = 'Lacchi';
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText = 'Biriyani';
ul.appendChild(li3)
section.appendChild(ul);
mainContainer.appendChild(section);

// Set inner HTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Collection</h1>
<ul>
<li>Pant</li>
<li>Shirt</li>
<li>Cap</li>
<li>Shoe</li>
</ul>
`
mainContainer.appendChild(sectionDress);

