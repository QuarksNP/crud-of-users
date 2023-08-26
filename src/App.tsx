import { Suspense, lazy } from "react";

import { Route } from "wouter";
import { main } from "./App.css";
import { Toaster } from "sonner";

const UsersPage = lazy(() => import("./pages/users/users"));
const TodosPage = lazy(() => import("./pages/todos/todos"));

export default function App() {
  return (
    <main className={main}>
      <Toaster richColors />
      <Suspense fallback="loading...">
        <Route path="/" component={UsersPage} />
        <Route path="/todos" component={TodosPage} />
      </Suspense>
    </main>
  );
}
