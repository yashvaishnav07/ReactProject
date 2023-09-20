import React from 'react';
import ReactDOM from'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import ContactUs from './components/Contact';
import RestrauntMenu from './components/ResturentMenu';
import Profile from './components/Profile';

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/about',
                element: <About/>,
                children: [{
                    path: 'profile',
                    element: <Profile/>
                }]
            },
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            },
            {
                path: '/resturents/:id',
                element: <RestrauntMenu/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
