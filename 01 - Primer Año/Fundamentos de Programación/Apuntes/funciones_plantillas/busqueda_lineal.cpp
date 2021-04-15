#include <iostream>
using namespace std;

bool busqueda_lineal(<tipoDato> buscarEn[][], int cantidadElementos, <tipoDato> elementoBuscado, int &pos){

int main(){

    return 0;
}

	
bool busqueda_lineal(<tipoDato> buscarEn[][3], int cantidadElementos, <tipoDato> elementoBuscado, int &pos){
	int index = 0;
	bool encontrado = false;
	while(index < cantidadElementos){
		if(buscarEn[index][] == elementoBuscado){
			encontrado = true;
			pos = index;
			index = cantidadElementos;
		}
		index++;
	}
	return encontrado;
}
