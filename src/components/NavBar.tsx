const NavBar = () => {
  return (
    <nav className="bg-slate-200 p-6">
      <div className="flex gap-4 justify-between container mx-auto">
        <div>Logo</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          <div>Sign In</div>
          <div>Sign Up</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
