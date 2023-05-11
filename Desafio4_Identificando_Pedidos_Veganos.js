const numPedidos = parseInt(gets(2));

for (let i = 1; i <= numPedidos; i++) {
  const prato = gets('Hamburger de lentilha');
  const calorias = parseInt(gets(300));  
  const ehVegano = gets('s').toLowerCase('Salada de frutas') === 's';
  const vegano = ehVegano ? 'Vegano' : 'Nao-vegano';
  
  print(`Pedido ${i}: ${prato} (${vegano}) - ${calorias} calorias`);
}