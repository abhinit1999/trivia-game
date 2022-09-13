import { Routes, Route } from "react-router-dom";
// import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
// import DemosPage from "./demos/demos-page";
// import AboutPage from "./about/about-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";
// import VizPage from "./viz/viz-page";


function App() {
  return (
    <>
      <PageHeader />

      <Routes>
        <Route path="/" exact element={ <QuizPage />}>
         
        </Route>
        {/* <Route path="/quiz" element={<QuizPage />}>
          
        </Route>
        <Route path="/about" element={ <AboutPage />}>
         
        </Route>
        <Route path="/demos" element={<DemosPage />}>
          
        </Route>
        <Route path="/viz" element={<VizPage />}>
          
        </Route> */}
      </Routes>

      <PageFooter />
    </>
  );
}

export default App;
