import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoader } from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));
// dynamic import jabh jarurat hogi tabhi import hoga

let user = true;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
       <Routes>
         <Route element={<ProtectRoute user={user}/>} >
         <Route path="/groups" element={<Groups />} />
         <Route path="/" element={<Home />} />
         <Route path="/chat/:chatId" element={<Chat />} />
        </Route>

        <Route path="/login" element={
          <ProtectRoute user={!user} redirect="/">
            <Login/>
          </ProtectRoute>
         } />

         <Route path="*" element={<NotFound/>}/>
       </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
