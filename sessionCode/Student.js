class Student {
  constructor(inputName, inputAge) {
    this.name = inputName;
    this.age = inputAge;
    this.major = inputMajor;
  }
}

class HighScoolStudent extends Student {
  constructor(inputName, inputAge, inputMajor) {
    super(inputName, inputAge, inputMajor);
  }
}

class UnivStudent extends Student {
  constructor(inputName, inputAge, inputMajor, inputAlchol) {
    super(inputName, inputAge, inputMajor);
    this.alchol = inputAlchol;
  }
}
