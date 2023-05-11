class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }

        agregarProducto(nombre, precio, unidades) {
            const productoExistente = this.productos.find(p => p.nombre === nombre);
            
            if (productoExistente) {
              productoExistente.unidades += unidades;
              console.log(`Ya existe ${nombre} con ${productoExistente.unidades} unidades.`);
            } else {
              const nuevoProducto = new Producto(nombre, precio, unidades);
              this.productos.push(nuevoProducto);
            }
            
            this.montoTotal += precio * unidades;
          }
        
    }

  
  class Producto {
    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
  }
  