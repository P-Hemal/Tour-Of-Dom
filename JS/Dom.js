const sections = document.getElementsByTagName('section');
for(const section of sections){
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px';
    section.style.backgroundColor = 'goldenrod';
    
    section.style.borderRadius= '5px';

}
const someLi = document.getElementsByTagName('li');
for(const li of someLi){
    li.style.listStyle = 'none';
}

const h1s = document.getElementsByTagName('h1');
for(const h1 of h1s){
    h1.style.color = 'royalBlue'
}