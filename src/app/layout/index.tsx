import { FC, ReactNode } from "react";
import { Footer } from "widgets/footer";
import { Header } from 'widgets/header';


const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};


export default Wrapper;