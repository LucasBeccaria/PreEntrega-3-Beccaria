function mostrarLista(notas) {
    const listaNotas = document.getElementById('lista-notas');
    listaNotas.innerHTML = '';
  
    notas.forEach((nota, index) => {
      const li = document.createElement('li');
      li.textContent = `Nota ${index + 1}: ${nota}`;
      listaNotas.appendChild(li);
    });
  }
  
  function calcularPromedio(notas) {
    const promedioElement = document.getElementById('promedio');
    if (notas.length === 0) {
      promedioElement.textContent = 'N/A';
    } else {
      const suma = notas.reduce((total, nota) => total + nota, 0);
      const promedio = suma / notas.length;
      promedioElement.textContent = promedio.toFixed(2);
    }
  }
  
  const btnAgregar = document.getElementById('agregar');
  btnAgregar.addEventListener('click', function() {
    const notaInput = document.getElementById('nota');
    const nota = parseInt(notaInput.value);
  
    if (!isNaN(nota) && nota >= 0 && nota <= 100) {

      const notas = JSON.parse(localStorage.getItem('notas')) || [];
  
      notas.push(nota);
  
      localStorage.setItem('notas', JSON.stringify(notas));
  
      mostrarLista(notas);
  
      calcularPromedio(notas);
  
      notaInput.value = '';
    } else {
      alert('Por favor, ingrese una nota válida entre 0 y 100.');
    }
  });
  
  const notasGuardadas = JSON.parse(localStorage.getItem('notas')) || [];
  mostrarLista(notasGuardadas);
  calcularPromedio(notasGuardadas);
  
