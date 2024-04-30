// Classes

class Department {
  //   public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Dept ID & Name : ${this.id},   ${this.name}`);
  }
  addEmployee(employees: string) {
    this.employees.push(employees);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

// More Inheritance
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Account");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new Department("d1", "accounting");
const ITDept = new ITDepartment("d1", ["Nick"]);

ITDept.addEmployee("Sagar");
ITDept.addEmployee("Jack");
// ITDept.employees[2]='ok';

ITDept.describe();
ITDept.printEmployeeInformation();
console.log(ITDept);

const accreport = new AccountingDepartment("d2", []);
accreport.addReport("Smth went wrong.");
accreport.printReports();

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
