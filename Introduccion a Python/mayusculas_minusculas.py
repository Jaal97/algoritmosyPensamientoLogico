string = "Hola"

result = " "

for caracter in string:
    if len(result) % 2 == 0:
        result = result + caracter.lower()
    else:
        result = result + caracter.upper()

print(result)