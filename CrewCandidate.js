//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name,mass,scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(newScore) {
    return this.scores.push(newScore);
  }

  average() {
    let total = 0;
    for (let i=0;i<this.scores.length;i++) {
      total += this.scores[i];
    }
    return Math.round((total/this.scores.length)*10)/10;
  }

  status() {
    let candidateStatus;
    let callAverage = this.average();
    if (callAverage >= 90) {
      candidateStatus = "Accepted";
    } else if (callAverage <= 89 && callAverage >= 80) {
      candidateStatus = "Reserve";
    } else if (callAverage <= 79 && callAverage >= 70) {
      candidateStatus = "Probationary";
    } else {
      candidateStatus = "Rejected";
    }

    return console.log(`${this.name} earned an average test score of ${callAverage}% and has a status of ${candidateStatus}.`);
  }

}

let bubbaBear = new CrewCandidate("Bubba Bear",35,[88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese",1.5,[93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator",225,[75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83);
console.log("bubbaBear", bubbaBear.scores);

console.log("average", merryMaltese.average());

bubbaBear.status();
merryMaltese.status();
gladGator.status();


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//see above code for step 2&3



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
function part4(candidateStatusInput) {
  let maxTestScore = 100;
  let newAverage = gladGator.average();
  let minScore;
  let howManyTests = 0;

  if (candidateStatusInput === "Accepted") {
    minScore = 90;
  } else if (candidateStatusInput === "Reserve") {
    minScore = 80;
  } else if (candidateStatusInput === "Probationary") {
    minScore = 70;
  } else {
    minScore = 0;
  }
  
  while (newAverage < minScore) {
    howManyTests++;
    gladGator.addScore(maxTestScore);
    newAverage = gladGator.average();
    console.log("newAverage",newAverage);
    //console.log("howManyTests",howManyTests);
  }

  console.log(`It took ${gladGator.name} taking ${howManyTests} more test(s) and getting maximum score of ${maxTestScore}% to reach "${candidateStatusInput}" status.`)
}

part4("Reserve");