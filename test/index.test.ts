import app from "../src/index";

describe("GET index", () => {
  it("should return empty object", () => {
    expect(app).toEqual({});
  });
});
