import './Nav.scss'
export default function Nav(){
    return(
        <header>
            <nav className='nav px-5 py-4 d-flex align-items-center justify-content-between'>
                <h1>Where in the world?</h1>
                <button><i class="fa-solid fa-moon me-2"></i>Dark Mode</button>
            </nav>
        </header>
    )
}