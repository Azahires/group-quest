import React from 'react';
import Students from './components/Students';



export default function App() {
  const [promo, setPromo] = React.useState([
    {
      name:'Romain',
      age: 31,
      loisirs: ['Alpinisme', 'Triathlon', 'React'],
      softskills: ['Calme', 'Posé', 'réflechi'],
  },
  {
    name:'Romain',
    age: 31,
    loisirs: ['Bières', 'Treks', 'Jeux'],
    softskills: ['Cool', 'Chiant', 'Tempéré'],
},
{

    name:"Charly",
    age: 22,
    loisirs: ['Batterie', 'Voyages', 'Livres'],
    softskills:['Teamwork', 'Calme', 'Curieux'],
  },
  {
    name: "Priscillia",
    age: 35,
    loisirs: ['Dessins', 'Bande dessinée', 'Balades'],
    softskills:['Souriante', 'Communication', 'De bonne humeur'],
  },
  {
    name: 'Asma',
    age: 26,
    loisirs: ['vélo', 'DIY', 'balade'],
    softskills: ['esprit d équipe', 'gestion du stress', 'gentillesse'],
  },
  {
    name:'Nédim',
    age: 26,
    loisirs:['CounterStrike','Football','SNCF'],
    softskills: ['comique','grincheux','gentil'],
  },
  {
    name: 'Florian',
    age: 29,
    loisirs:['Football', 'Voyages', 'Jeux'],
    softskills:['autonomie', 'curiosité', 'rigeur'],
  },
  {
    name: 'Alexis',
    age: 32,
    loisirs:['Moto', 'Jeux vidéos', 'Dormir'],
    softskills:['Dormir', 'Indépendant', 'Calme'],
  },
]); 

return (
  <div>
    {promo.map((student)=>{
      return<Students name={student.name} age={student.age} loisirs={student.loisirs} softskills={student.softskills} />
    })}
  </div>
)
  }
