import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
        <Footer />
      </header>
    </div>
  );
}
export default App;
