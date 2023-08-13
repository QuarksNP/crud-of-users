import { Suspense, lazy } from "react";

import { Route } from "wouter";

const UsersPage = lazy(() => import("./pages/index"));
const TodosPage = lazy(() => import("./pages/todos"));

export default function App() {
  return (
    <main>
      <Suspense fallback="loading...">
        <Route path="/" component={UsersPage} />
        <Route path="/todos" component={TodosPage} />
      </Suspense>
    </main>
  );
}
