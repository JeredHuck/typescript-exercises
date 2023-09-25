class Student {
  studentName: string;
  studentAge: number;
  studentGrade: number;

  constructor(studentName, studentAge, studentGrade) {
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
  }

  displayInfo() {
    console.log(`${this.studentName} is ${this.studentAge} years old and currently has a ${this.studentGrade} in class.`)
  }

  isPassing(gradeThreshold: number) {
    if (gradeThreshold <= 60) {
      return false;
    } else {
      return true;
    }
  }
}

const me = new Student('Jered', 22, 100);
me.displayInfo();
me.isPassing(100);