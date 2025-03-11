import { ReactNode } from 'react';
import Footer from '../ComposantsCommun/Footer';
import Header from "./Header.tsx";
import { isMobile } from 'react-device-detect';
import clsx from "clsx";
import ChatBox from "components/chatBox.tsx";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className={clsx(isMobile ? "pt-16" : "p-4", "flex-grow bg-gray-100 min-h-[1000px] box-border")} id="main">
                <ChatBox />
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout
