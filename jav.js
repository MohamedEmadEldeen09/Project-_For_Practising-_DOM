document.body.style.backgroundColor = "#eee";
let header = document.createElement(`header`);
let Logo = document.createElement(`h1`);
Logo.appendChild(document.createTextNode("Logo"))
let ul = document.createElement(`ul`);
let li1 = document.createElement(`li`);
let Home = document.createElement(`a`);
Home.appendChild(document.createTextNode("Home"))
li1.appendChild(Home);
let li2 = document.createElement(`li`);
let About = document.createElement(`a`);
About.appendChild(document.createTextNode("About"))
li2.appendChild(About);
let li3 = document.createElement(`li`);
let Contact = document.createElement(`a`);
Contact.appendChild(document.createTextNode("Contact"))
li3.appendChild(Contact);
ul.appendChild(li1);ul.appendChild(li2);ul.appendChild(li3);
header.appendChild(Logo);header.appendChild( ul);
document.body.append(header);

//header
header.style.backgroundColor = 'white'
header.style.display = 'grid'
header.style.gridTemplateColumns = 'repeat(auto-fit , minmax(300px , 1fr))'
header.style.alignItems='center'
header.style.justifyContent='space-between'
header.style.padding = '7px 20px'
header.style.position='sticky'
header.style.top=0
//logo
Logo.style.color='green'
//li
for (let index = 0; index < ul.childElementCount; index++) {
  ul.children[index].style.listStyle = 'none' 
}
//ul
ul.style.display="flex"
ul.style.flexDirection="row"
ul.style.flexWrap="wrap"
ul.style.alignItems='center'
ul.style.justifyContent='space-evenly'
// ul.style.backgroundColor='yellow'
ul.style.padding = '0 15px'
//a
for (let index = 0; index < ul.childElementCount; index++) {
  for (let i = 0; i < ul.children[index].childElementCount; i++) {
    if(ul.children[index].children[i].tagName=`a`){
      ul.children[index].children[i].href='#'
      ul.children[index].children[i].style.textDecoration='none'
      ul.children[index].children[i].style.fontSize='18px'
      ul.children[index].children[i].style.color='black'
      ul.children[index].children[i].style.transition='fontSize 1s'
      ul.children[index].children[i].addEventListener('mouseover',()=>{
        ul.children[index].children[i].style.fontSize='25px'
        ul.children[index].children[i].style.fontWeight='bold'
      });
      ul.children[index].children[i].addEventListener('mouseleave',()=>{
        ul.children[index].children[i].style.fontSize='18px'
        ul.children[index].children[i].style.fontWeight='normal'
      });
    }    
  }  
}
//main
let content = document.createElement('main');
content.className = 'content'
document.body.appendChild(content);
content.style.margin = '20px 20px'
content.style.display = 'grid'
content.style.gap = '10px'
content.style.gridTemplateColumns = `repeat(auto-fit , minmax(200px ,1fr))`
content.style.gridTemplateRows = `repeat(auto-fit , minmax(150px ,200px))`
content.style.minHeight  = '500px'
for (let index = 0; index < 15; index++) {
  let div = document.createElement('div')
  div.classList=`Product product${index+1}`
  let ProductPrice = document.createElement(`h3`);
  ProductPrice.appendChild(document.createTextNode(index+1));
  div.appendChild(ProductPrice); 
  let Description = document.createElement(`p`);
  Description.style.margin='5px 10px'
  div.style.backgroundColor='white'
  div.style.padding='10px 20px' 
  div.style.display = 'grid'
  div.style.gridTemplateRows =`repeat(auto-fit , minmax(40px , 1fr))`
  div.style.alignItems = 'center'
  div.style.justifyContent = 'center'
  div.style.justifyItems = 'center'
  Description.appendChild(document.createTextNode('product'));
  div.appendChild(Description);
  content.appendChild(div); 
}


//footer
let footer = document.createElement(`footer`);
footer.className = 'footer'
document.body.appendChild(footer);
let footerParagraph = document.createElement(`p`);
let footerParagraphText=document.createTextNode('Copy Right 2023 Moahmed Eamd');
footerParagraph.append(footerParagraphText);
footer.append(footerParagraph)
footer.style.textAlign = 'center'
footer.style.padding = '30px 0'
footer.style.backgroundColor = 'green'
footerParagraph.style.color = 'white'
footerParagraph.style.fontWeight = 'bold'
footerParagraph.style.fontSize = '20px'
