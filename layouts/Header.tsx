import Link from "next/link";

export function Header() {
  return (
    <nav className='topBar'>
      <div className='wrap'>
        <h1>
          <Link href='/' className='logo'>
            WOWOROOM
          </Link>
        </h1>
        <span className='material-icons menuToggle'>menu</span>
        <ul className='topBar-menu'>
          <li>
            <a href='#bedAdvantage'>床墊優勢</a>
          </li>
          <li>
            <a href='#recommendation'>好評推薦</a>
          </li>
          <li>
            <a href='#transport'>運送方式</a>
          </li>
          <li>
            <a href='#orderInfo'>立即預訂</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
