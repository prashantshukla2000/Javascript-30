const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handlecheck(e){
    //check if they had the shift key down
    //And check that they are checking it and not uncchecking it
    let inBetween=false; //once we hit the first one it becomes true and then becomes false when we hit the second one till then all the between ones are checked
    if(e.shiftKey && this.checked){
//we can now go ahead and do whatwe want
checkboxes.forEach(checkbox=>{
    console.log(checkbox);
    if(checkbox === this ||checkbox=== lastChecked){
     inBetween = !inBetween;
    }
    if(inBetween){
        checkbox.checked=true;
    }
});
    }
lastChecked=this; //marks the first item that has been checked
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handlecheck);
});
