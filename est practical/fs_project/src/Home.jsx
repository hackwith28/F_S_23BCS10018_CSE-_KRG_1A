import "./Home.css";

function Home({ name }) {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome {name ? name : "Guest"}!</h2>
    </div>
  );
}

export default Home;
