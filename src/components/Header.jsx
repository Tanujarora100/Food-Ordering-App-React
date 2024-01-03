

export function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
