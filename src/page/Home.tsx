import Layout from "components/ComposantsCommun/Layout.tsx";
import HomeOrdinateur from "components/Home/HomeOrdinateur.tsx";
import {isMobile} from "react-device-detect";
import HomeSmartphone from "components/Home/HomeSmartphone.tsx";

function Home() {
    return (
        <Layout>
            <div>
                {isMobile ? <HomeSmartphone/> : <HomeOrdinateur/>}
            </div>
        </Layout>
    );
}

export default Home;
