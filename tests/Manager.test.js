const Manager = require("../lib/Manager");

describe("Manger", () => {
  const man = new Manager("Kyle", 45, "email@gmail.com", 303);
  test("return name", () => {
    expect(man.name).toBe("Kyle");
  });

  test("return id", () => {
    expect(man.id).toBe(45);
  });

  test("return email", () => {
    expect(man.email).toBe("email@gmail.com");
  });

  test("return office number", () => {
    expect(man.officeNumber).toBe(303);
    expect(man.getOfficeNumber()).toBe(303);
  })

  test("return role", () => {
    expect(man.getRole()).toBe("Manager");
  });
});