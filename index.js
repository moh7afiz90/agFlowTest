// RulseSet
var RuleSet = {
  NewRuleSet: function() {

  },
  AddDep: function( a,b ){
    if (a == b && b == a) {
      return 'B is selected beacuse A is selected'
    } else {
      return 'B is not selected beacuse A is not selected'
    }
  },
  AddConflict: function(a,b){
    if ( (a !== b) && ( a !== b ) ) {
      return 'A is selected beacuse B is not selected'
    } else {
      return 'A is not selected beacuse B is selected'
    }
  }
}

// AddDep Outputs Tests
console.log(RuleSet.AddDep(true, true));
// AddConflict Outputs Tests
console.log(RuleSet.AddConflict(false, false));


// isCoherent
function isCoherent(a, b) {
  var Relation = "Dependecy"
  if ( (Relation == "Dependecy") && (a == b) ) {
    return "The Relation is Coherent"
  } else {
    return "The Relation is not Coherent"
  }
}
// Coherence Relation Test, Outputs: (false && false = True), (True && False = False) , (true && true = True)
console.log(isCoherent(true, false));
