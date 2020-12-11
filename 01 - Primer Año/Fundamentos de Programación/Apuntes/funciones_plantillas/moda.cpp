#include <iostream>
using namespace std;
int moda(<tipoDato> vec[], int muestra); 

int main(int argc, char *argv[]) {

	return 0;
}

int moda(<tipoDato> vec[], int muestra){
	const int cant = 999999;
	int vecModa[cant]; //cambiar constante del arreglo acorde al mayor valor en vec[]
	for (int i=0; i<cant;i++){ //inicializacion
		vecModa[i]=0;
	}
	for (int i=0; i<muestra; i++){
		vecModa[vec[i]]++;
	}
	int max=vecModa[0];
	int maxPos=0;
	for (int i=1; i<cant; i++){
		if (max<vecModa[i]){
			max=vecModa[i];
			maxPos=i;
		}
	}
	return maxPos;
}
