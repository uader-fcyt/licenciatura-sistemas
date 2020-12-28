#include <iostream>
#include <iomanip>
using namespace std;
int main(int argc, char *argv[]) {
	float cant_productores, best = 0, arr[50][5]; // 0(id) 1(cod) 2(sembrado) 3(cosechado) 4(avg)
    for(int i = 0; i < 50; i++){
        for(int j = 0; j < 5; j++){
            arr[i][j] = 0;
        }
    }
	cout << "Ingrese cantidad de productores a censar:\n";
	cin >> cant_productores;
	for(int i = 0; i < cant_productores; i++){
		arr[i][0] = i;
		cout << "Ingrese codigo de productor:\n";
		cin >> arr[i][1];
		cout << "Ingrese cantidad sembrada por hectarea:\n";
		cin >> arr[i][2];
		cout << "Ingrese cantidad cosechada por hectarea:\n";
		cin >> arr[i][3];
        if(arr[i][2] != 0)
		    arr[i][4] = float(arr[i][3] / arr[i][2]); // rendimiento promedio
	}
	
	for(int i = 0; (i < cant_productores -1); i++){
		for(int j = i +1; j < cant_productores; j++){
			if(arr[i][4] < arr[j][4] ){
				for(int k = 0; k < 5; k++){
					float aux = arr[i][k];
					arr[i][k] = arr[j][k];
					arr[j][k] = aux;
				}
			}
		}
	}
	
	for(int i = 0; i < cant_productores; i++){
		if(arr[i][4] > best){
			best = arr[i][1];
		}
	}
	
	cout << "COD:" << setw(15) << "COSECHA:" << setw(15) << "AVG:" << endl;
	for(int i = 0; i < cant_productores; i++){
		cout << arr[i][1] << setw(15) << arr[i][3] << setw(15) << arr[i][4] << endl;
	}
	
	cout << "Mejor productor: " << best << endl;
	return 0;
}
