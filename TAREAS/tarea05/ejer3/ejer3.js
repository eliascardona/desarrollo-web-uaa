function calcularTotal() {
  const checkInDate = new Date(document.getElementById('checkInDate').value);
  const checkOutDate = new Date(document.getElementById('checkOutDate').value);
  const roomType = document.getElementById('roomType').value;
  const includeBreakfast = document.getElementById('includeBreakfast').checked;

  const numDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  let roomRate = 0;

  switch (roomType) {
    case 'estandar':
      roomRate = 100; // Tarifa para la habitación estándar
      break;
    case 'superior':
      roomRate = 150; // Tarifa para la habitación superior
      break;
    case 'juniorSuite':
      roomRate = 200; // Tarifa para la Junior Suite
      break;
    case 'suite':
      roomRate = 250; // Tarifa para la Suite
      break;
    default:
      roomRate = 0;
  }

  let breakfastCost = 0;
  if (includeBreakfast) {
    breakfastCost = 10; // Costo adicional por desayuno
  }

  const subtotal = numDays * roomRate;
  const tax = (subtotal * 0.16) + (subtotal * 0.02);
  const total = subtotal + breakfastCost + tax;

  const result = document.getElementById('result');
  result.innerHTML = `
    <p>Tipo de Habitación: ${roomType}</p>
    <p>Días de Estadía: ${numDays}</p>
    <p>Subtotal: $${subtotal}</p>
    <p>Desayuno: $${breakfastCost}</p>
    <p>Impuestos: $${tax.toFixed(2)}</p>
    <p>Total a Pagar: $${total.toFixed(2)}</p>
  `;
}


