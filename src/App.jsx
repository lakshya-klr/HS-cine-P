export default function App() {
  return (
    <div
    id="menu"
    className={`menu h-full bg-cyan-400 w-full absolute ${isMenuVisible ? "up" : ""}`}
  >
    Menu Content
  </div>
  )
}