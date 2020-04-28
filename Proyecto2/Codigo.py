class Ascensor():
    detenido=False
    def Subir(self):
        if self.detenido:
            print('Seleccione Num de Piso a Subir')
        else:
            print('Ud esta subiendo')
    def estado(self):
       return self.detenido

Boton=Ascensor()

Boton.Subir()