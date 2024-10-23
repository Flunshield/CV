import { ReactNode } from 'react';
import Footer from '../ComposantsCommun/Footer';
import Header from "./Header.tsx";
import { isMobile } from 'react-device-detect';
import clsx from "clsx";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col w-full h-auto">
            <Header />
            <main className={clsx(isMobile ? "pt-16" : "", "flex-grow")} id="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout
