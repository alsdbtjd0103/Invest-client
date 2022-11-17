
import Boundary from "../components/Boundary.js";
import Header from "../components/Header/Header.js";
import AboutBox from "../components/Main/AboutBox.js";

function MainPage() {
  return (
    <>
      <div style={{width:'100%',height:'100%'}}>
        <Header />
        <main>
          <Boundary></Boundary>
          
          <AboutBox />
        
        </main>
        
      </div>
      
    </>
  );
}

export default MainPage;
