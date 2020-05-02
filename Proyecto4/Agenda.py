print('\nAGENDA PERSONAL -C.MACH-\n')
''' Esta agenda basica es una prueba de codigo sin Class, hecha por Cristian Machuca.'''
def agregar_contacto():
    cont=str(input('\nIngrese el nombre del contacto: '))
    contactos.append(cont)
    tel=str(input('Ingrese el Telefono del contacto: '))
    telefono.append(tel)
    Email= str(input('Ingrese el Email del contacto: '))
    email.append(Email)
def mostrar_datos():
    print('Contactos agendados: ',contactos[:len(contactos)])
    print('Telfonos agendados: ',telefono[:len(telefono)])
    print('Emails agendados: ',email[:len(email)])
#Listas de datos a guardar.
contactos=[]
telefono=[]
email=[]
print('OPCIONES:\n')
print("-----*------*------*-----*-----")
print('\na-Agregar contactos:')
print('\nb-Mostrar Contactos:')

operacion=str(input('\nBienvenido, que desear realizar?, elija una opcion:  '))
while operacion=="a":
    agregar_contacto()
    nueva_operacion=str(input('\n Elija una nueva opcion para continuar:  '))
    if nueva_operacion=="b":
         mostrar_datos()
         print("-----*------*-----*------*------*-----*------*-----")
         print('\nGracias por haber usado AGENDA PERSONAL -C.MACH-')
         break
