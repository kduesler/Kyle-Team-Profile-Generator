const Employee = require("../lib/Employee");

describe("Employee", () => {
  const emp = new Employee("Kyle", 45, "email@gmail.com");
  test("return name", () => {
    expect(emp.name).toBe("Kyle");
    expect(emp.getName()).toBe("Kyle");
  });

  test("return id", () => {
    expect(emp.id).toBe(45);
    expect(emp.getId()).toBe(45);
  });

  test("return email", () => {
    expect(emp.email).toBe("email@gmail.com");
    expect(emp.getEmail()).toBe("email@gmail.com");
  });

  test("return role", () => {
    expect(emp.getRole()).toBe("Employee");
  });
});
