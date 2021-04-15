//7 minutos 
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
	int n, arr[100], buscado, indice;
	bool encontrado = false;
	
	cout << "Por favor ingrese la cantidad de elementos:\n";
	cin >> n;
	
	for(int x = 0; x < n; x++){
		cout << "Por favor ingrese un elemento:\n";
		cin >> arr[x];
	}
	
	cout << "Por favor ingrese el elemento a buscar:\n";
	cin >> buscado;
	
	for(int x = 0; x < n; x++){
		if(buscado == arr[x]){
			indice = x;
			encontrado = true;
		}
	}
	
	if(encontrado){
		cout << "Elemento encontrado en posicion: " << ++indice << endl; //elementos contados desde 1
	}else{
		cout << "Elemento no encontrado" << endl;
	}
	return 0;
}

