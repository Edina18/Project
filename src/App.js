import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/LayoutComp";
import ScrollToTop from "./components/scrollTo";
import { AppRouter } from "./AppRouter";

import "./App.css";

function App() {
    return (
        <Layout>
            <div className="App">
                <div className="AppRouter">
                    <AppRouter />
                    <ScrollToTop />
                </div>
            </div>
        </Layout>
    );
}

export default App;
