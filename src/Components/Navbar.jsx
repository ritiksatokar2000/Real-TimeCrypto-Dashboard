const Navbar = () => {
  return (
    
      <header class="d-flex flex-wrap justify-content-center px-3 py-3 mb-4 bg-black ">
        {" "}
        <a
          href="/"
          class="d-flex align-items-center me-md-auto text-decoration-none "
        >
       
          
          <span class="fs-4 text-light">Cryto Dashboard</span>{" "}
        </a>{" "}
        <ul class="nav nav-pills">
          {" "}
          <li class="nav-item">
            <a href="#" class="nav-link text-light" aria-current="page">
              Dashboard
            </a>
          </li>{" "}
          <li class="nav-item">
            <a href="#" class="nav-link text-light">
              Wishlist
            </a>
          </li>
        </ul>{" "}
      </header>

  );
};
export default Navbar;
