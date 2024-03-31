import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> 
{/* menyimpan link page lain yang sedang tidak diakses, sehingga user tidak perlu load ulang semua halaman untuk navigasi ke link page lain */}
    </>
  );
}
export default Layout;
