import { Suspense, lazy } from "react";

import { Route } from "wouter";
import { main } from "./App.css";
import { Toaster } from "sonner";

const UsersPage = lazy(() => import("./pages/users/users"));
const UserByIdPage = lazy(() => import("./pages/user-by-id/user-by-id"))

export default function App() {
  return (
    <main className={main}>
      <Toaster richColors />
      <Suspense fallback="loading...">
        <Route path="/" component={UsersPage} />
        <Route path="/user/:id" component={() => <UserByIdPage /> } />
      </Suspense>

    </main>
  );
}
