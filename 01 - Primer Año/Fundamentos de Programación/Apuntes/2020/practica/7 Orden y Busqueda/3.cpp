//16 minutos
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
	int n, cod_cliente[100], buscado, indice;
	float saldo[100];
	bool encontrado = false;
	
	cout << "Ingrese cantidad de clientes a procesar: \n";
	cin >> n;
	
	for(int i = 0; i < n; i++){
		cout << "Ingrese codigo de cliente: \n";
		cin >> cod_cliente[i];
		cout << "Ingrese saldo: \n";
		cin >> saldo[i];
	}
	
	cout << "Ingrese codigo de cliente a buscar: \n";
	cin >> buscado;
	for(int x = 0; x < n; x++){
		if(cod_cliente[x] == buscado){
			encontrado = true;
			indice = x;
		}
	}
	
	if(encontrado){
		cout << "Su saldo es: " << saldo[indice] << endl;
	}else{
		cout << "CLIENTE INEXISTENTE" << endl;
	}
	
	return 0;
}
