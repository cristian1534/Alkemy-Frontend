from tkinter import *
from tkinter import messagebox
from tkinter.ttk import *


class Gestion:
    def __init__(self):
        self.venta=0
        self.compra=0
        self.bebidas = 0
        self.almacen = 0
        self.carnicos = 0
        self.verduleria = 0
        self.servicios = 0
        self.objetivo=0
    def Venta(self):
        v = Vta.get()
        Vta.set('')
        messagebox.showinfo('Venta','Se ha guardado su Importe.')
        self.venta = self.venta + v

    def Venta_Acumulada(self):
        messagebox.showinfo('Venta Acumulada',self.venta)
    def Food_Cost(self):
        Estado = self.venta - self.compra
        messagebox.showinfo('Estado Venta vs Compra', Estado)

    def Gasto_Diario(self):
       try:
            Gastado = Importe.get()
            Importe.set('')
            if Opcion.get()== 1:
                self.bebidas = self.bebidas = + Gastado
                messagebox.showinfo('Gasto en Bebidas','Se ha guardado el Importe')
            elif Opcion.get() == 2:
                self.almacen = self.almacen = + Gastado
                messagebox.showinfo('Gasto en Almacen', 'Se ha guardado el Importe')
            elif Opcion.get() == 3:
                self.carnicos = self.carnicos = + Gastado
                messagebox.showinfo('Gasto en Carnicos', 'Se ha guardado el Importe')
            elif Opcion.get() == 4:
                self.verduleria = self.verduleria = + Gastado
                messagebox.showinfo('Gasto en Verduleria', 'Se ha guardado el Importe')
            elif Opcion.get() == 5:
                self.servicios = self.servicios = + Gastado
                messagebox.showinfo('Gasto en Servicios', 'Se ha guardado el Importe')
            else:
                messagebox.showerror('Error','Ingresar importe y seleccionar Proveedor.')

            self.compra = self.compra + Gastado
       except:
                messagebox.showwarning('Gasto Diario','Debe Ingresar un Importe y seleccionar un Proveedor')



    def Gastos_Proveedores(self):
        messagebox.showinfo('Gastos por Proveedores',{'Bebidas':self.bebidas,'Almacen':self.almacen,
                                                      'Carnicos':self.carnicos,'Verduleria':self.verduleria,
                                                      'Servicios':self.servicios})
    def Gastos_Acumulados(self):
        messagebox.showinfo('Gastos Acumulados',('El Gasto Acumulado es: $',self.compra))

    def Estado_Obejivo(self):
        try:
            Objetivo = Obj.get()
            Obj.set(0)
            if Objetivo < self.venta:
                self.objetivo=self.venta-Objetivo
                messagebox.showinfo('Objetivo de Venta',('La venta esta positiva: $',self.objetivo))
            elif Objetivo == self.venta:
                messagebox.showinfo('Objetivo de Venta','El Objetivo es igual a la Venta Actual.')

            elif Objetivo > self.venta:
                self.objetivo=Objetivo-self.venta
                messagebox.showinfo('Objetivo de Venta',('La venta esta negativa: $',self.objetivo))

            else:
                messagebox.showerror('Error','Debe ingresar su Objetivo para comparar contra la Venta Actual')
        except:
                messagebox.showwarning('Estado Objetivo','Ventas y Objetivo deben tener Importe para Calcular.')



#Comienzo:

Info=Gestion()
ventana = Tk()
ventana.geometry('550x500')
ventana.configure()
ventana.title('GESTION PARA FAST FOOD. Designed by Cristian Machuca 2020')


menubar = Menu(ventana)
file = Menu(menubar, tearoff = 0)
menubar.add_cascade(label= 'Opciones',menu = file)
file.add_command(label = 'Salir', command =ventana.quit)
ventana.configure(menu = menubar)




#Declaracion de variables:

Vta=IntVar()
Importe=IntVar()
Opcion = IntVar()
Obj = IntVar()

Titulo=Label(ventana,text='Bienvenidos a la App de Gestion para Fast Food.\nDebe elegir entre las Opciones del Menu: ').place(x=30,y=10)

Venta=Button(ventana,text='Guardar Venta Diaria',command=Info.Venta).place(x=120,y=70)
CajaVen=Entry(ventana,textvariable=Vta).place(x=250,y=75)

VenAcu=Button(ventana,text=' Ver Venta Acumulada',command=Info.Venta_Acumulada).place(x=120,y=100)

EstadoVtasvsCompras=Button(ventana,text='Estado Ventas vs Compras',command=Info.Food_Cost).place(x=120,y=130)

GastoDiario=Label(ventana,text='Ingrese Gasto Diario',).place(x=120,y=160)
CajaGastoDiario=Entry(ventana,textvariable=Importe).place(x=250,y=160)
Bebidas = Radiobutton(ventana, text='Bebidas',value=1,variable=Opcion).place(x=400,y=160)
Bebidas = Radiobutton(ventana, text='Almacen',value=2,variable=Opcion).place(x=400,y=200)
Bebidas = Radiobutton(ventana, text='Carnicos',value=3,variable=Opcion).place(x=400,y=240)
Bebidas = Radiobutton(ventana, text='Verduleria',value=4,variable=Opcion).place(x=400,y=280)
Bebidas = Radiobutton(ventana, text='Servicios',value=5,variable=Opcion).place(x=400,y=320)

ConfGasto = Button(ventana,text='Confirmar Gasto',command=Info.Gasto_Diario).place(x=275,y=200)

GastosProv=Button(ventana,text='Gasto por Proveedor',command=Info.Gastos_Proveedores).place(x=120,y=300)
GastosAcum=Button(ventana,text='Ver Gastos Acumulados',command=Info.Gastos_Acumulados).place(x=120,y=350)


Objetivo=Label(ventana,text='Objetivo de Ventas',).place(x=120,y=400)
CajaObj=Entry(ventana,textvariable=Obj).place(x=250,y=400)
CalcularObjetivo=Button(ventana,text='Calcular',command=Info.Estado_Obejivo).place(x=250,y=430)




ventana.mainloop()
