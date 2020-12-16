//recordar que para realizar busqueda binaria, el arreglo debe estar ordenado
#include <iostream>
using namespace std;

bool busqueda_binaria(<tipoDato> buscarEn[], int cantidadElementos, <tipoDato> elementoBuscado, int &pos);

int main(int argc, char *argv[]) {

	return 0;
}

bool busqueda_binaria(<tipoDato> buscarEn[], int cantidadElementos, <tipoDato> elementoBuscado, int &pos){
	int inf = 0, sup = cantidadElementos-1;
	int mid = (inf + sup) / 2;
    bool encontrado = true;
	
	while((inf <= sup) and (elementoBuscado != buscarEn[mid])){
		if(elementoBuscado < buscarEn[mid])
			sup = mid -= 1;
		else
			inf = mid += 1;
		mid = (inf + mid) / 2;
	}

	if(inf > sup)
        encontrado = false;
	else
        pos = mid;
    return encontrado;
}
