const Intern = require("../lib/Intern");

describe("Intern", () => {
  const int = new Intern("Karl", 666, "email666@gmail.com", "BHS");
  test("return name", () => {
    expect(int.name).toBe("Karl");
  });

  test("return id", () => {
    expect(int.id).toBe(666);
  });

  test("return email", () => {
    expect(int.email).toBe("email666@gmail.com");
  });

  test("return school", () => {
    expect(int.school).toBe("BHS");
    expect(int.getSchool()).toBe("BHS");
  })

  test("return role", () => {
    expect(int.getRole()).toBe("Intern");
  });
});