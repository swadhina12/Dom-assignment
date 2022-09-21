// Topics
// Remove Elements

// Tasks
//  Remove alternate languages from the home page languages listed

const elements = document.querySelectorAll("#SIvCob a");
for (i = 0; i < elements.length; i++) {
  if(i % 2 == 0) {
    elements[i].remove();
  }
}
console.log(elements);
