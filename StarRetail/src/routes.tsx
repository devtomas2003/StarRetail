import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from './style';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/NotFound";
import Account from "./Pages/Account";

export default function Router(){
    return (
        <>
            <BrowserRouter>
                <Default />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}