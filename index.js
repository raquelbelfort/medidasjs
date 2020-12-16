const calcular = (evento) => {
    evento.preventDefault();
    let metros= document.getElementById('metros').value;
    let r2, r3, r4;
    let resultado1= metros * 100;
    let resultado2= metros / 1000;

    r2= `${resultado1} cm`;
    r3= `${metros} m`;
    r4= `${resultado2} km`;

    const Resultado1= document.getElementById('resultado1');
    Resultado1.innerHTML= r2;
    const Resultado2= document.getElementById('resultado2');
    Resultado2.innerHTML= r3;
    const Resultado3= document.getElementById('resultado3');
    Resultado3.innerHTML= r4;
}
const iniciar = () => {
    document.getElementById('calcular').addEventListener('click', calcular);
}
document.addEventListener('DOMContentLoaded', iniciar);