class Some {
  add(val1, val2) {
    return val1 + val2;
  }

  sup() {
    console.log("sup?");
  }
  anotherFunction(arg1, arg2) {
    this.sup();
    const result = this.add(arg1, arg2);
    this.add(arg1, arg2);
    return result;
  }

  isLogged() {}

  checkLogIn() {
    if (this.isLogged()) return "Logged";
    else return "Not Logged";
  }

  if200(dbCall) {
    if (dbCall() === 200) return "all data!";
    else return "error";
  }
}

module.exports = { Some };
