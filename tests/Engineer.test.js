const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const eng = new Engineer("Miguel", 69, "email69@gmail.com", "migi69");
  test("return name", () => {
    expect(eng.name).toBe("Miguel");
  });

  test("return id", () => {
    expect(eng.id).toBe(69);
  });

  test("return email", () => {
    expect(eng.email).toBe("email69@gmail.com");
  });

  test("return office number", () => {
    expect(eng.gitHub).toBe("migi69");
    expect(eng.getGitHub()).toBe("migi69")
  })

  test("return role", () => {
    expect(eng.getRole()).toBe("Engineer");
  });
});