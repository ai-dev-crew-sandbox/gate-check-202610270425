import { expect, test } from "vitest";
import { whisper } from "./index.js";

test("whispers", () => {
  expect(whisper("CREW")).toBe("crew");
});
