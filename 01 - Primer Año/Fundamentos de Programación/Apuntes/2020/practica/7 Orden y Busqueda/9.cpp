#include <iostream>
#include <iomanip>
using namespace std;

int main(int argc, char *argv[]) {
	float arr[50][6]; // 0(id) 1(dni) 2(1s) 3(2s) 4(avg) 5(if (aprobado))
    int cant_alumnos;
    int no_aprob = 0;
	cout << "Ingrese cantidad de alumnos: ";
	cin >> cant_alumnos;

    for(int i = 0; i < 50; i++){
        for(int j = 0; j < 6; j++){
            arr[i][j] = 0;
        }
    }
	
	for(int i = 0; i < cant_alumnos; i++){
		arr[i][0] = i;
		cout << "Ingrese DNI\n";
		cin >> arr[i][1];
		cout << "Ingrese nota del 1er semestre\n";
		cin >> arr[i][2];
	} 
	
    int dni;
    for(int i = 0; i < cant_alumnos; i++){
        cout << "Ingrese DNI\n";
    	cin >> dni;
        for(int j = 0; j < cant_alumnos; j++){
		    if(arr[j][1] == dni){
			    j = cant_alumnos;
			    cout << "Ingrese nota del 2do semestre\n";
			    cin >> arr[j][3];
			    arr[j][4] = (arr[j][2] + arr[j][3]) / 2;
                if(arr[j][4] < 6)
                    no_aprob += 1;
                else
                    arr[j][5] = 1;
            }
	    }
    }
    
    cout << "ALUMNOS:\n";
	cout << "DNI\tAVG\n";
	for(int i = 0; i < cant_alumnos; i++){
		cout << arr[i][1] << "\t" << arr[i][4] << endl;
	}

	cout << "Cantidad de alumnos no aprobados: " << no_aprob << endl << endl;
	
	for(int i = 0; i < (cant_alumnos-1); i++){
		for(int j = i+1; j < cant_alumnos; j++){
			if(arr[i][4] < arr[j][4]){
				for(int k = 0; k < 6; k++){
					float aux = arr[i][k];
					arr[i][k] = arr[j][k];
					arr[j][k] = aux;
				}
				
			}
		}
	}
	
    cout << "APROBADOS:\n";
	cout << "DNI\tAVG\n";
	for(int i = 0; i < cant_alumnos; i++){
		if(arr[i][5] == 1)
			cout << arr[i][1] << "\t" << arr[i][4] << endl;
	}
	
	return 0;
}
