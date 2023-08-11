import { Suspense } from "react";
import { Spin } from "antd";
const SuspenceAnt = (Com: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <>
      <Suspense fallback={<FnSpin />}>
        <Com />
      </Suspense>
    </>
  );
};
function FnSpin() {
  return (
    <>
      <Spin
        size="large"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}

export default SuspenceAnt;
