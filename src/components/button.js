function CustomButton({ bname, onClick }) {
  return <button className="button-style" onClick={onClick}>{bname}</button>;
}
export default CustomButton;
