const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
//In dev tools we select the line inspect on it double click ..break on->Atrribute modifiction.
//...now when the item is clickdand changes occur..inspect will show us bec. of what change is occuring.nd then we need to  deselect it.


// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string','💩');
//or we can simply use Backticks 

// Styled
console.log('%c I am some great text','font-size:50px; background:red; text-shadow:10px 10px 0 blue;');
//We put %c infront of nything we want to style and then write the style after , in '';

// warning!
console.warn('OH NOO!');
//it will display an warning in the console

// Error :|
console.error('Code is now 💩!');
//it will display an error in the console


// Info
console.info('Crocs eat 3-4 people per year.');



// Testing
//it only fires if something is wrong not if it is truem
console.assert(1 == 2,'This is Wrong!');

const p=document.querySelector('p');
console.assert(p.classList.contains('ouch'),'This is Wrong!');

// clearing

console.clear();

// Viewing DOM Elements
// const p=document.querySelector('p');
console.log(p);//to see the paragraph element itslf
              //But to see all the availale properties and methods..
              console.dir(p);      

// Grouping together
dogs.forEach(dog=>{
    console.groupCollapsed(`${dog.name}`);

    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.age} is ${dog.age * 7} in dog years.`);

    console.groupEnd(`${dog.name}`);


})
//We group the three lnes based on the dog name in console.group......and the groupEnd should also be same value as console.group
// This will the group the data for one dog in one group

//Intially we have console.group But we can also have console.groupCollapsed....which allows for the groups to appear collapsed intially and not opened

// counting
//We can count however thing we want to measure  we can count word,object number,dom node, 

console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');



// timing

//To see how long something takes...
console.time('fethching data');
fetch('https://api.github.com/users/wesbos')
    .then(data=>data.json())
    .then(data =>{
        console.timeEnd('fethching data');
        console.log(data);
    })

    
//consoletimeEnd should have same data....
//.fetching data as that in console.time
//Here we console how much time it takes to fetch the data from this api and show it and also diplay the data


//table
console.table(dogs);