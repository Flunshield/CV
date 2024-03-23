import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./page/Home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundPage from "./page/NotFoundPage.tsx";
import Formation from "./page/Formation.tsx";
import {ACCEUIL_URL, COMPETENCES_URL, CONTACT_URL, EXPERIENCES_URL, FORMATION_URL, PROJECTS_URL} from "./constante.ts";
import Experience from "./page/Experience.tsx";
import Competence from "./page/Competence.tsx";
import Projects from "./page/Projects.tsx";
import Contact from "./page/Contact.tsx";

const router = createBrowserRouter([
    {
        path: ACCEUIL_URL,
        element: <Home/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: FORMATION_URL,
        element: <Formation/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: EXPERIENCES_URL,
        element: <Experience/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: COMPETENCES_URL,
        element: <Competence/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: PROJECTS_URL,
        element: <Projects/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: CONTACT_URL,
        element: <Contact/>,
        errorElement: <NotFoundPage/>
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
