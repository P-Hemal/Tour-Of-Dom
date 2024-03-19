console.log('first file')
const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title"');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
secondSection.style.color = 'White'
secondSection.style.backgroundColor = 'tomato'
console.log(secondSection)

// document.querySelectorAll
// document.querySelector

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'My Dynamic li';
secondList.appendChild(li)


const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<ol>
<li>first item</li>
<li>first item</li>
<li>first item</li>
<li>first item</li>
</ol>


`

main.appendChild(section)