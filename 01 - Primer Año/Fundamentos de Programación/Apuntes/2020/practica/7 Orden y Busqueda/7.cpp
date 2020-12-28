
#include <iostream>
#include <iomanip>
using namespace std;

int main(int argc, char *argv[]) {
	int cant_empleados, precio_jornada, arr[50][5]; // col--> 0(id), 1(cod) 2(normal), 3(extra), 4(sueldo)
	cout << "Ingrese cantidad de empleados:\n";
	cin >> cant_empleados;
	cout << "Ingrese sueldo por jornada:\n";
	cin >> precio_jornada;
	for(int i = 0; i < cant_empleados; i++){
		arr[i][0] = i;
		cout << "Ingrese codigo de empleado:\n";
		cin >> arr[i][1];
		cout << "Ingrese horas normales de trabajo:\n";
		cin >> arr[i][2];
		cout << "Ingrese horas extra de trabajo:\n";
		cin >> arr[i][3];
		arr[i][4] = arr[i][2]*precio_jornada + arr[i][3]*precio_jornada*2; //saldo
	}
	
	for(int i = 0; i < (cant_empleados-1); i++){
		for(int j = i+1; j < cant_empleados; j++){
			if(arr[i][4] < arr[j][4]){
				for(int k = 0; k < 5; k++){
					int aux = arr[i][k];
					arr[i][k] = arr[j][k];
					arr[j][k] = aux;
				}
			}
		}
	}
	
	cout << "COD" << setw(5) << "NOR" << setw(5) << "EXT" << setw(5) << "SAL" << endl;
	for(int i = 0; i < cant_empleados; i++){
		cout << arr[i][1] << setw(5) << arr[i][2] << setw(5) << arr[i][3] << setw(5) << arr[i][4] << endl;
	}
	return 0;
}
