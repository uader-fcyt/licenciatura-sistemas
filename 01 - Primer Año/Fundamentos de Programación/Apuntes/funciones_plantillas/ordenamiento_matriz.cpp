#include <iostream>
using namespace std;

void ordenamiento_matriz(<tipoDato> matriz[][cantidadColumnas], int cantidadFilas);

int main(){

    return 0;
}

//col es la columna desdeada
void ordenamiento_matriz(<tipoDato> matriz[][cantidadColumnas], int cantidadFilas){
    for(int i = 0; i < cantidadFilas-1; i++){ //i es el indice del elemento anterior
        for(int j = i+1; j < cantidadFilas; j++){ //j es el indice del elemento siguiente
            if(matriz[i][col] > matriz[j][col]){ //orden ASCENDENTE; para orden descendente usar "<"
                for(int k = 0; k < cantidadColumnas; k++){ //k es el indice de las columnas
                    <tipoDato> aux = matriz[i][k];
                    matriz[i][k] = matriz[j][k];
                    matriz[j][k] = aux;
                }
            }
        }
    }
}
