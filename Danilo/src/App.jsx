import React from 'react'
import './style.scss'
import iconHtml from './assets/icons/html.svg'
import iconCss from './assets/icons/css.svg'
import iconReact from './assets/icons/react.svg'
import iconSass from './assets/icons/sass.svg'
import iconJs from './assets/icons/js.svg'
function App() {

  return (
    <div className="box">

      <div className="container">
        <div className="content">
          <h1>
            Danilo Silva 👨‍💻 | <span>Portfolio</span>
          </h1>
          <h4>
            Danilo silva - Developement  <span>Full-Stack</span> and <span>Student Software Engineer </span>
          </h4>
          <img src="https://avatars.githubusercontent.com/u/184179500?v=4" id='foto' alt="Foto de perfil" />
          <ul>
            <img src={iconHtml} alt="" />
            <img src={iconCss} alt="" />
            <img src={iconReact} alt="" />
            <img src={iconSass} alt="" />
            <img src={iconJs} alt="" />
          </ul>
          <p>
            Oi! Sou estudante de Engenharia de Software e desenvolvedor full-stack. Com experiência em HTML, CSS, React e MySQL, adoro transformar ideias em soluções criativas. Estou sempre aprendendo e buscando novas habilidades. Para mim, o melhor do desenvolvimento é criar experiências que ajudem as pessoas. Vamos construir algo incrível?
          </p>
          <button>Explorar</button>
        </div>
      </div>
    </div>
  )
}

export default App
