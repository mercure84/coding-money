import { getMoney } from "./getMoney";

describe("getMoney", () => {
  it("should give the correct money for 21", () => {
    const result = getMoney(21);
    const verif = result.nb10 * 10 + result.nb5 * 5 + result.nb2 * 2;
    expect(verif).toEqual(21);
    expect(result).toEqual({ nb2: 3, nb5: 1, nb10: 1 });
  });
  it("should give the correct money for a lot of amounts >= 4", () => {
    for (let i = 4; i < 1000; i++) {
      const result = getMoney(i);
      const verif = result.nb10 * 10 + result.nb5 * 5 + result.nb2 * 2;
      expect(verif).toEqual(i);
    }
  });
});
