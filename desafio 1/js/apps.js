function producto(id, nombre, precio, stock) {
  return {
    id: id,
    nombre: nombre,
    precio: precio,
    stock: stock,
  };
}

var Carrito = function () {
  var items = [];

  function incrementar(producto) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].producto.id == producto.id) {
        items[i].cantidad++;
        break;
      }
    }
  }

  function agregar(producto) {
    items.push({
      producto: producto,
      cantidad: 1,
    });
  }

  function quitar(producto) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].producto.id == producto.id) {
        items.splice(i, 1);
        break;
      }
    }
  }

  function reporte() {
    let precioTotal = 0;
    let detalle = [];
    for (let i = 0; i < items.length; i++) {
      const subtotal = items[i].cantidad * items[i].producto.precio;
      precioTotal += subtotal;
      detalle.push({
        nombre: items[i].producto.nombre,
        precio: items[i].producto.precio,
        cantidad: items[i].cantidad,
        total: subtotal,
      });
    }

    return {
      total: precioTotal,
      detalle: detalle,
    };
  }

  return {
    incrementar: incrementar,
    agregar: agregar,
    quitar: quitar,
    reporte: reporte,
  };
};
