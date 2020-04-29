print("\nFacturacion de Delivery de Milanesas\n")
Usu_Encargado=str(input('\nIngrese su Usuario: '))

Fecha_Fact = str(input('\nFecha de facturacion: '))
Producto = int(input('\nIngrese opcion del Producto Vendido:\n 1-Milanesa\n 2-Pizza Muzzarella\n'))
Cantidad = int(input('Ingrese cantidad de unidades vendidas:  \n'))
Precio = int(input('Ingrese el precio con IVA: $ '))
Objetivo_venta = int(input('Ingrese el objetivo diario de facturacion:  $'))

Acu_fact=Precio*Cantidad
Dif_unid_vendidas=Objetivo_venta-Acu_fact
Dif_unid_vendidas2=int(Dif_unid_vendidas/Precio)
kg_carne=.250
kg_muzza=.500
def inv_venta():
    if Producto==1:
        print('Se utilizo carne kg',kg_carne*Cantidad,'en las porciones de .250 grs.')
    else:
        print('Se utilizo muzzarella kg',kg_muzza*Cantidad,'en las porciones de 0.500 grs.')
def Reporte_Cantidad():
    if Producto==1:
        print('Acumulado a la fecha',Fecha_Fact,'Venta diaria de Milanesas: ',Cantidad)
    else:
        print('Acumulado a la fecha',Fecha_Fact,'Cantidad de Pizzas Muzzarella',Cantidad)

def Reporte_Facturacion():
    print('La facturacion de la fecha',Fecha_Fact,'es: $',Acu_fact)

def Obj_Dfact():
    if Acu_fact>Objetivo_venta:
        print('La venta esta positivo en: $' ,Acu_fact-Objetivo_venta,'en relacion al objetivo.')
    else:
        print('La venta esta negativo en: $  ',Objetivo_venta-Acu_fact,'en relacion al objetivo, falto vender:',Dif_unid_vendidas2,'unidades.')

print('\nReporte de Facturacion: \n')

Reporte_Cantidad()
print('')
Reporte_Facturacion()
print('')
Obj_Dfact()
print('')
inv_venta()

print('\nSucursal Buenos Aires','\nResponsable de datos ingresados: ',Usu_Encargado)






