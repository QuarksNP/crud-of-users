import { Suspense, lazy } from "react";

import { Route } from "wouter";

const UsersPage = lazy(() => import("./pages/index"));

export default function App() {
  return (
    <main>
      <Suspense fallback="loading...">
        <Route path="/" component={UsersPage} />
      </Suspense>
    </main>
  );
}
