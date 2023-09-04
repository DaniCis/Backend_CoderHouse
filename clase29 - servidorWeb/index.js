fetch('http://localhost:8080/api/orders')
  .then(result => result.json())
  .then(response => {
    const orders = response.payload; // Acceder al arreglo de órdenes

    const fragment = document.createDocumentFragment();

    orders.forEach(order => {
      const div = document.createElement('div');
      const priceParagraph = document.createElement('p');
      const statusParagraph = document.createElement('p');
      const numberParagraph = document.createElement('p');
      
      priceParagraph.textContent = `Total: ${order.total_price}`;
      statusParagraph.textContent = `Status: ${order.status}`;
      numberParagraph.textContent = `Número de orden: ${order.order_number}`; // Corregir la propiedad

      div.appendChild(numberParagraph);
      div.appendChild(priceParagraph);
      div.appendChild(statusParagraph);

      fragment.appendChild(div);
    });

    const ordersContainer = document.getElementById('orders');
    ordersContainer.appendChild(fragment);
  })
  .catch(error => console.error('Error en la data', error));
1