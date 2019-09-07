import * as React from "react";
import useInterval from "./useInterval";

export interface MutableNumberProps {
  /**
   * 目标显示值
   */
  readonly value: number;

  /**
   * 持续时间
   */
  readonly duration?: number;

  /**
   * 格式化数字
   */
  readonly fractionDigits?: number;

  /**
   * 刷新速率
   */
  readonly refreshDuration?: number;
}

export default function MutableNumber({
  value,
  duration = 1000,
  fractionDigits = 0,
  refreshDuration = 10
}: MutableNumberProps) {
  const [current, setCurrent] = React.useState(() =>
    fixNumber(value, fractionDigits)
  );
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    /**
     * 开始计时器
     */
    setStep((value - current) / (duration / refreshDuration));
  }, [value, duration, refreshDuration]);

  useInterval(() => {
    if (Math.abs(value - current) <= step) {
      /**
       * 结束计时器
       */
      setCurrent(value);
      setStep(0);
    } else {
      /**
       * 改变显示值
       */
      setCurrent(current + step);
    }
  }, step && refreshDuration);

  return <>{fixNumber(current, fractionDigits)}</>;
}

function fixNumber(num: number, fractionDigits: number) {
  return Number.parseFloat(num.toFixed(fractionDigits));
}
