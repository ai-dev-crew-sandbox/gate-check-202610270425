import { expect, test } from "vitest";
import { shout } from "./index.js";

test("shouts", () => {
  expect(shout("crew")).toBe("CREW");
});
