var lA = [1, 1, 2, 2, 2];
var lB = [8];


function diff(a, b){
  simpA = simp(a);
  simpB = simp(b);

  console.log(simpA);
  console.log(simpB);

  diffL = simpA;
  for (var i in simpB){
    if (diffL.indexOf(simpB[i]) !== -1){
      diffL.splice(diffL.indexOf(simpB[i]));
    }
  }

  console.log(diffL);
  return diffL;
}
function simp(a){
  newA = [];
  for (var i in a){
    if (newA.indexOf(a[i]) == -1){
      newA.push(a[i]);
    }
  }
  return newA;
}


diff(lA, lB);
