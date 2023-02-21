import CategoryItem from "./components/CategoryItem";
import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="container">
          <div className="section">
            <h2 className="text-secondary">Your Result</h2>
            <div className="score-container">
              <h1>76</h1>
              <h4>of 100</h4>
            </div>
            <div className="result-section__wrapper">
              <h1>Great</h1>
              <p>
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
          <div className="section">
            <h1>Summary</h1>
            <div className="category-list__wrapper">
              {data?.map((item) => (
                <CategoryItem
                  key={item.category}
                  bgClass={item.bgClass}
                  textClass={item.textClass}
                  category={item.category}
                  score={item.score}
                  icon={item.icon}
                />
              ))}
            </div>
            <button type="button" className="continue-button">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
