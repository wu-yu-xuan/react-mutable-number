import { act, create, ReactTestRenderer } from "react-test-renderer";
import * as React from "react";
import MutableNumber from ".";

it("should render MutableNumber well", () => {
  jest.useFakeTimers();
  let testRender!: ReactTestRenderer;
  act(() => {
    testRender = create(<MutableNumber value={900} />);
  });
  act(() => {
    testRender.update(<MutableNumber value={1000} duration={6000} />);
    expect(Number(testRender.toJSON())).toBe(900);
    for (let i = 100; i < 6000; i += 100) {
      jest.advanceTimersByTime(100);
      expect(testRender.toJSON()).toBe(
        (900 + (1000 - 900) * (i / 6000)).toFixed(0)
      );
    }
    jest.runAllTimers();
    expect(Number(testRender.toJSON())).toBe(1000);
  });
});
