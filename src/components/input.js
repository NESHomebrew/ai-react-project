export default function Input({ handleChange, inputValue, handleClick }) {
  return (
    <form>
      <input
        id="input-box"
        type="text"
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button onClick={handleClick}>Send</button>
    </form>
  );
}
