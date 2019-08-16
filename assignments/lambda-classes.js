// CODE here for your Lambda Classes
class Person {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.location = person.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(teach) {
    super(teach);
    this.speciality = teach.specialty;
    this.favLanguage = teach.favLanguage;
    this.catchPhrase = teach.catchPhrase;
    this.subject = teach.subject;
  }

  dem() {
    console.log(`Today, we are learning about ${subject}.`);
  }

  grade() {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(student) {
    super(student);
    this.name = student.name;
    this.previousBackground = student.previousBackground;
    this.className = student.className;
    this.subject = student.subject;
    this.favSubjects = ["HTML", "CSS", "Python"];
  }

  listSubjects() {
    console.log(
      favSubjects.map(function(subjects) {
        return Student.favSubjects;
      })
    );
  }

  PRAssignment() {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge() {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pm) {
    super(pm);
    this.subject = pm.subject;
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
  }

  standUp() {
    console.log(`${pm.name} announces to ${channel}, @channel: standy times!`);
  }

  debugsCode() {
    console.log(`${pm.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const Victoria = new Person({
  name: "Victoria",
  age: 30,
  location: "Wales"
});

const Richard = new Instructor({
  name: "Richard",
  location: "San Diego",
  age: 40,
  subject: "JavaScript",
  favLanguage: "React",
  specialty: "Front-End",
  catchPhrase: "Watch the curly brackets!"
});

const Pamela = new Student({
  name: "Pamela",
  previousBackground: "Chemist",
  subject: "JavaScript",
  className: "JavaScript IV",
  favSubjects: ["HTML", "CSS", "Python"]
});

const Jack = new ProjectManager({
  name: "Jack",
  subject: "JavaScript",
  gradClassName: "Project Development",
  favInstructor: "Richard"
});
