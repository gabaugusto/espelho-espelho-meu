import { FiHeart, FiHome, FiPlusSquare, FiSearch } from 'react-icons/fi'

function Header() {
  return (
    <header className="header">
      <span className="header__logo">Instagram</span>
      <nav className="header__actions" aria-label="Navegação principal">
        <button className="icon-button" type="button" aria-label="Início">
          <FiHome />
        </button>
        <button className="icon-button" type="button" aria-label="Pesquisar">
          <FiSearch />
        </button>
        <button className="icon-button" type="button" aria-label="Criar publicação">
          <FiPlusSquare />
        </button>
        <button className="icon-button" type="button" aria-label="Atividades">
          <FiHeart />
        </button>
      </nav>
    </header>
  )
}

export default Header
