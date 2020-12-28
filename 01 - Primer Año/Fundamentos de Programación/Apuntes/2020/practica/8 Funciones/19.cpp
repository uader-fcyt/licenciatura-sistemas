#include <iostream>
#include <string>
using namespace std;

void facturaPorDistribuidora(float h_precio[], int vendido[][26]);
void infoDistribuidora25(string h_descripcion[], int codMax25);

int main(int argc, char *argv[]) {

	int herramientaCod, max25 = 0, codMax25;
	float herramientaPrecio[11];
	string herramientaDescripcion[11];
	int pedidos[11][26]; //herramienta[1-10] x distribuidora[1-25]

	for(int i = 0; i < 11; i++){ //inicializacion
		for(int j = 0; j < 26; j++){
			pedidos[i][j] = 0;
		}
	}

	for(int i = 1; i < 11; i++){
		cout << "Ingrese codigo de herramienta\n";
		cin >> herramientaCod;
		cout << "Ingrese precio de herramienta\n";
		cin >> herramientaPrecio[herramientaCod];
		cout << "Ingrese descripcion de herramienta\n";
		cin.get();
		getline(cin, herramientaDescripcion[herramientaCod]);
	}

	int distribudora;
	cout << "Ingrese distribuidora [1-25]\n";
	cin >> distribudora;
	while(distribudora != 99){
		cout << "Ingrese codigo de herramienta [1-10]\n";
		int cod;
		cin >> cod;
		cout << "Ingrese cantidad enviada\n";
		int cant;
		cin >> cant;
		pedidos[cod][distribudora] += cant;
		if(distribudora == 25 and cant > max25){
			max25 = cod;
			codMax25 = cod;
		}
		cout << "Ingrese distribuidora [1-25]\n";
		cin >> distribudora;
	}
	facturaPorDistribuidora(herramientaPrecio, pedidos);
	infoDistribuidora25(herramientaDescripcion, codMax25);
	
	return 0;
}

void infoDistribuidora25(string h_descripcion[], int codMax25){
	cout << "Codigo de herramienta: " << codMax25 << endl;
	cout << "Descripcion: " << h_descripcion[codMax25] << endl;
}
	
void facturaPorDistribuidora(float h_precio[], int vendido[][26]){
	for(int i = 1; i < 11; i++){
		cout << "Distribuidora " << i << endl;
		for(int j = 1; j < 26; j++){
			cout << "Herramienta " << j << endl;
			cout << "Monto " << h_precio[j] * vendido[i][j] << endl << endl;
		}
		cout << endl << endl << endl; 
	}
}
