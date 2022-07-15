import { csvTransform } from "./csvTransform.js";
import { jest } from "@jest/globals";

describe("test for csvTransform", () => {
  test("beforeRead should be called once", async () => {
    let beforeRead = jest.fn();
    await csvTransform({
      path: "./demo.csv",
      onRead: () => {},
      beforeRead,
    });

    expect(beforeRead).toHaveBeenCalledTimes(1);
  });

  test("afterRead should be called once", async () => {
    let afterRead = jest.fn();
    await csvTransform({
      path: "./demo.csv",
      onRead: () => {},
      afterRead,
    });

    expect(afterRead).toHaveBeenCalledTimes(1);
  });

  test("onRead should be called the same number of cells without considering headers.", async () => {
    let onRead = jest.fn();
    await csvTransform({
      path: "./demo.csv",
      onRead,
    });

    expect(onRead).toHaveBeenCalledTimes(3);
    expect(onRead).toHaveBeenNthCalledWith(1, "1");
    expect(onRead).toHaveBeenNthCalledWith(2, "2");
    expect(onRead).toHaveBeenNthCalledWith(3, "3");
  });

  test("Should return same results without conversion", async () => {
    let result = await csvTransform({
      path: "./demo.csv",
      onRead: (item) => item + 1,
    });

    expect(result).toEqual([["numbers"], ["1"], ["2"], ["3"]]);
  });

  test("Should throw an error when path is not valid", async () => {
    let throwFn = async () => {
      await csvTransform({
        path: "",
        onRead: () => {},
        afterRead,
      });
    };

    await expect(throwFn).rejects.toThrow();
  });
});
