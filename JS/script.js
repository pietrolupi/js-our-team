
const teamList = [

  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },

  {
    name: 'Angela Caroll',
    role:'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },

  {
    name: 'Walter Gordon',
    role:'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },

  {
    name: 'Angela Lopez',
    role:'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },

  {
    name: 'Scott Estrada',
    role:'Developer',
    image: 'scott-estrada-developer.jpg'
  },

  {
    name: 'Barbara Ramos',
    role:'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  }

]

/* for(let teamMember of teamList){

  console.log(teamMember.name)
  console.log(teamMember.role)
  console.log(teamMember.image)
  console.log('--------------------------------------')
}
 */

const cardsContainer = document.querySelector('.cards-container');



for(let teamMember of teamList){

  const teamImg = 'img/'+teamMember.image;

  console.log(teamImg)
  cardsContainer.innerHTML += ` <div class="card mb-5" style="width: 18rem;">
  <img class="card-img-top" src="${teamImg}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${teamMember.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${teamMember.role}</h6>
  </div>
</div> `


}