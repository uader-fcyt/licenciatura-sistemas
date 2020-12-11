#include <iostream>
using namespace std;

void ordenamiento_lineal(<tipoDato> vector[], int cantidadElementos);

int main(){

    return 0;
}

void ordenamiento_lineal(<tipoDato> vector[], int cantidadElementos){
    for(int i = 0; i < cantidadElementos-1; i++){ //i es el indice del elemento anterior
        for(int j = i+1; j < cantidadElementos; j++){ //j es el indice del elemento siguiente
            if(vector[i] > vector[j]){ //orden ASCENDENTE; para orden descendente usar "<"
                <tipoDato> aux = vector[i];
                vector[i] = vector[j];
                vector[j] = aux;
            }
        }
    }
}
