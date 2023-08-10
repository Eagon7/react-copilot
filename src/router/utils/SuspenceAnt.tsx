import { Suspense } from "react";
import { Spin } from "antd";
const SuspenceAnt = (com: React.ReactNode) => {
  return (
    <>
      <Suspense
        fallback={
          <Spin
            size="large"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        {com}
      </Suspense>
    </>
  );
};
