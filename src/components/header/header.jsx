import './header.css';

export default function Header(){
    return <>
        <section id="seccionprincipal">
            <div class="logo-titulo">
                <img class= "logo" src="../../multimedia/logojm.jpg" alt="logo de pagina" />
                <h1 class="titulo">Botines-JM</h1>
            </div>

            <div class="barraprincipal">
                <div class="carrito">
                    <img class="logocarrito" src alt="" />
                    <li class="carro">MI CARRITO</li>
                </div>

                <div class="iniciosesion">
                    <img class="logosesion" src alt="logo inicio de sesion" />
                    <li class="sesion">INICIAR SESIÓN</li>
                </div>
            </div>
        </section>

        <section class="seccionsecundaria">
            <div>
                <ul class="barrasecundaria">
                    <li class="nav">HOME</li>
                    <li class="nav">QUIENES SOMOS?</li>
                    <li class="nav">GIA DE TALLES</li>
                </ul>
            </div>

        </section>
    </>
}