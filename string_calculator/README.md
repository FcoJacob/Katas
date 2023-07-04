# Kata: String Calculator

Realizo esta kata completando los test para el comportamiento que se espera aplicando TDD, solo me he centrado en completar las funcionalidades *(No he realizado parte visual)*.

## Objetivo

Crea una calculadora de string simple. Un método Add() que recibe hasta dos números separados por comas, y debe devolver su suma. ("" o "1" o "1,2")

## 📝 Requerimientos

- [x] Para cadena vacía devolverá 0
- [x] Para cadena con un valor devolverá su valor.
- [ ] Para dos valores separados por comas devolverá la suma de los valores.
- [ ] Añade la posibilidad de que el método, reciba una cantidad indeterminada de números.
- [ ] Añadir la posibilidad de que el método, soporte retornos de carro como separador (además de comas).
- [ ] Soportar diferentes separadores, para hacer el cambio la cadena deberá empezar con el siguiente formato: "//[delimeter]\n[numbers...]" -> Ejemplo: "//;\n1;2" devolverá 3.
- [ ] No permitir números negativos. Esto deve lanzar una excepción "Negatives not alloweed - [número negativo pasado como argumento]".
- [ ] Mostrar todos los valores negativos, pasados como argumento.
- [ ] Valores mayores a 1000 deben ignorarse 2 + 1001 = 2.
- [ ] Separadores personalizados pueden ser de cualquier longitud.
- [ ] Soportar multiples separadores, con este formato: "//[delimeter1][delimeter2]\n[numbers...]" -> Ejemplo: "//[*][%]\n1*2%3" devolverá 6
- [ ] Multiples separadores sin longitud maxima.
