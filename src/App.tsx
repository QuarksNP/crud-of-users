import { Suspense, lazy } from "react";

import { Route } from "wouter";
import { main } from "./App.css";
import { Toaster } from "sonner";

import { ButtonChangePage } from "./features/ui";

const UsersPage = lazy(() => import("./pages/users/users"));
const UserByIdPage = lazy(() => import("./pages/user-by-id/user-by-id"))
const TodosPage = lazy(() => import("./pages/todos/todos"));


export default function App() {
  return (
    <main className={main}>
      <Toaster richColors />
      <Suspense fallback="loading...">
        <Route path="/" component={UsersPage} />
        <Route path="/user/:id" component={() => <UserByIdPage /> } />
        <Route path="/todos" component={TodosPage} />
      </Suspense>

      <ButtonChangePage />
    </main>
  );
}
