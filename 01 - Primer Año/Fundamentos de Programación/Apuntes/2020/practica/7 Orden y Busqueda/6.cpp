#include <iostream>
#include <iomanip>
using namespace std;

int main(int argc, char *argv[]) {
	int arr[50][6], cant_alumnos; // columna 0 id, 1 dni, 2 nota1, 3 n2, 4 n3, 5 avg
	cout << "Ingrese cantidad de alumnos\n";
	cin >> cant_alumnos;
	
	for(int i = 0; i < cant_alumnos; i++){
		arr[i][0] = i;
		cout << "Ingrese DNI\n";
		cin >> arr[i][1];
		cout << "Ingrese nota 1\n";
		cin >> arr[i][2];
		cout << "Ingrese nota 2\n";
		cin >> arr[i][3];
		cout << "Ingrese nota 3\n";
		cin >> arr[i][4];
		arr[i][5] = (arr[i][2] + arr[i][3] + arr[i][4]) / 3; //promedio
	}
	
	for(int i = 0; i < (cant_alumnos-1); i++){
		for(int j = i +1; j < cant_alumnos; j++){
			if(arr[i][5] < arr [j][5]){
				for(int k = 0; k < 6; k++){
					int aux = arr[i][k];
					arr[i][k] = arr[j][k];
					arr[j][k] = aux;
				}
			}
		}
	}
	cout << "DOCUMENTO\tNOTA 1\tNOTA 2\tNOTA 3\tPROMEDIO";
	for(int i = 0; i <  cant_alumnos; i++){
        cout << "\n\t";
        for(int j = 1; j <= 5; j++){
		    cout << arr[i][j] << "\t";
        }
	}
	return 0;
}
