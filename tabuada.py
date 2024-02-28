#tabuada
numero= int(input('digite um número para exibir a tabuada '))
multiplicador=1

while(multiplicador<=10):
    resultado = numero * multiplicador 
    print(f'{numero} x {multiplicador} = {resultado}')
    multiplicador = multiplicador +1 