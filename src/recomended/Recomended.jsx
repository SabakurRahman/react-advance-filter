import "./Recomended.css";
const Recomoneded = ({ handleClick }) => {
  return (
    <>
      <div className="recomended">
        <h2 className="recomended-title">Recomended</h2>
        <div className="recomended-flex">
          <button onClick={handleClick} className="btns">
            All Product
          </button>
          <button onClick={handleClick} className="btns" value="Nike">
            Nike
          </button>
          <button onClick={handleClick} className="btns" value="Adidas">
            Adidas
          </button>
          <button onClick={handleClick} className="btns" value="Puma">
            Puma
          </button>
          <button onClick={handleClick} className="btns" value="Vans">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};
export default Recomoneded;
