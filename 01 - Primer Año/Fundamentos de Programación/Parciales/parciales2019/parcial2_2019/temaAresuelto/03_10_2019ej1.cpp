#include <iostream>
#include <iomanip>
using namespace std;

int main(int argc, char *argv[]) {
	int vec[8][4], codigo, cabina_dia[4][32]; // col 0(precio) 1(dia) 2(cabina) 3(cant)
	
	for(int i = 0; i < 8; i++){ //inicializacion
		for(int j = 0; j < 4; j++){
			vec[i][j] = 0;
		}
	}
	for(int i = 0; i < 4; i++){ //inicializacion
		for(int j = 0; j < 32; j++){
			cabina_dia[i][j] = 0;
		}
	}
	
	for(int i = 1; i < 8; i++){
		cout << "Ingrese precio para codigo " << i << endl;
		cin >> vec[i][0];
	}
	
	cout << "Ingrese codigo de vehiculo" << endl;
	cin >> codigo;
	while(codigo != 0){
		vec[codigo][3]++;
		cout << "Ingrese dia" << endl;
		int dia;
		cin >> dia;
		cout << "Ingrese cabina" << endl;
		int cabina;
		cin >> cabina;
		cabina_dia[cabina][dia] += 1;
		cout << "Ingrese codigo de vehiculo" << endl;
		cin >> codigo;
	}
	//punto 1
	cout << "DIA" << setw(10) << "CAB1" << setw(10) << "CAB2" << setw(10) << "CAB3" << endl;
	for(int j = 1; j < 32; j++){
	cout << j << setw(10) << cabina_dia[1][j] << cabina_dia[2][j] << setw(10) << cabina_dia[3][j] << endl;
	}
	//punto 2
	cout << "Recaudado en AGOSTO 2019 por tipo 1: " << vec[1][3] * vec[1][0] << endl;
	//punto 3
	float cant_total = 0;
	for(int i = 1; i < 8; i++){
		cant_total += vec[i][3];
	}
	cout << "Vehiculos tipo 7: " << float(vec[7][3] / cant_total * 100) << "%" << endl;
	//punto 4
	int min = 99, dia;
	for(int j = 1; j < 32; j++){
		if(cabina_dia[1][j] < min){
			min = cabina_dia[1][j];
			dia = j;
		}
	}
	cout << "Cabina 1, Dia " << dia << " con " << min << " registros minimos" << endl;
	
	return 0;
}

