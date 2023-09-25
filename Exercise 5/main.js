var Student = /** @class */ (function () {
    function Student(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    Student.prototype.displayInfo = function () {
        console.log("".concat(this.studentName, " is ").concat(this.studentAge, " years old and currently has a ").concat(this.studentGrade, " in class."));
    };
    Student.prototype.isPassing = function (gradeThreshold) {
        if (gradeThreshold <= 60) {
            return false;
        }
        else {
            return true;
        }
    };
    return Student;
}());
var me = new Student('Jered', 22, 100);
me.displayInfo();
me.isPassing(100);
