 // ## Array Cardio Day 2

 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
//   const isAdult= people.some(function(person){
//     const currentYear=new Date().getFullYear();
//     if(currentYear-person.year>=18){
//         return true;

//     }
//   })

  const isAdult= people.some(person=>{
    const currentYear=new Date().getFullYear();
    return currentYear-person.year>=18
  })

  console.log({isAdult})
  // Array.prototype.every() // is everyone 19 or older?
  const allAdult= people.every(person=>{
    const currentYear=new Date().getFullYear();
    return currentYear-person.year>=18
  })
  console.log({allAdult})

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
// const comment=comments.find(function(commen){
//   if(commen.id === 823423){
//     return true;
//   }
// })

const comment=comments.find(commen=>commen.id === 823423)
console.log({comment})

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const index=comments.findIndex(comment => comment.id===823423)
  console.log(index)
//Now delete this element in two ways...1 splice
// comments.splice(index,1);     //Now if we console log we only the rest 4 elements
// console.table(comments);

const newComments=[  
  ...comments.slice(0,index),
  ...comments.slice(index+1)
]
console.table(newComments);
//OR using Spread operator we have every other ele of that array in the new array