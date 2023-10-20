import React, { Suspense, lazy } from "react";
import Loading from "./components/loading/Loading";

const LazyLoad = (importFunc) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1500);
    });
  });

  return (props) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyLoad;
