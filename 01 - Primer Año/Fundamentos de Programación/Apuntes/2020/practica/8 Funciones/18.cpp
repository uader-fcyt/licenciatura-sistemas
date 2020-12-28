#include <iostream>
#include <iomanip>
using namespace std;

void topModelosPorDistribuidor(int f_pedidos[][3], int filas);
void informe(int f_pedidos[][3], int filas, float A, float B, float C);

int main(int argc, char *argv[]) {
	
float model_A, model_B, model_C;
int pedidos[11][3]; //distribuidores x modelos

for(int i = 0; i < 11; i++){ //inicializacion
	for(int j  = 0; j < 3; j++){
		pedidos[i][j] = 0;
	}
}

cout << "Ingrese precio unitario de modelos A, B, C respectivamente\n";
cin >> model_A >> model_B >> model_C;

cout << "Ingrese codigo de distribuidor [1-10]\n";
int cod_distrib, cantidad;
char modelo;
cin >> cod_distrib;
while(cod_distrib != 999){
	cout << "Ingrese modelo del calzado {A, B, C}\n";
	cin >> modelo;
	cout << "Ingrese la cantidad necesaria\n";
	cin >> cantidad;
	switch(modelo){
		case 'A':
			pedidos[cod_distrib][0] += cantidad;
		break;
		case 'B':
			pedidos[cod_distrib][1] += cantidad;
		break;
		case 'C':
			pedidos[cod_distrib][2] += cantidad;
		break;
	}
	cout << "Ingrese codigo de distribuidor [1-10]\n";
	cin >> cod_distrib;
}
informe(pedidos, 11, model_A, model_B, model_C);
topModelosPorDistribuidor(pedidos, 11);

	return 0;
}

void topModelosPorDistribuidor(int f_pedidos[][3], int filas){
	int ventas = 0, id;
	for(int i  = 1; i < 11; i++){
		ventas = 0;
		for(int j = 0; j < 3; j++){
			if(f_pedidos[i][j] > ventas){
				ventas = f_pedidos[i][j];
				id = j;
			}
		}
		cout << "Nro de Distribuidor: " << i << endl;
		char model;
		if(id == 1)
			model = 'A';
		else if(id == 2)
			model = 'B';
		else if(id == 3)
			model = 'C';
		cout << "Modelo:" << setw(10) << model << endl << endl;
	}
}
void informe(int f_pedidos[][3], int filas, float A, float B, float C){
	for(int i  = 1; i < 11; i++){
			cout << "Nro de Distribuidor: " << i << endl;
			cout << "Modelo" << setw(10) << "Cantidad" << setw(10) << "Monto" << endl;
			cout << "A" << setw(10) << f_pedidos[i][0] << setw(10) << f_pedidos[i][0] * A << endl;
			cout << "B" << setw(10) << f_pedidos[i][1] << setw(10) << f_pedidos[i][1] * B  << endl;
			cout << "C" << setw(10) << f_pedidos[i][2] << setw(10) << f_pedidos[i][2] * C  << endl;
	}
}
