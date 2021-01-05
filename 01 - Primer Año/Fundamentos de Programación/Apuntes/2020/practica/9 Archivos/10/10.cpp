#include <fstream>
#include <iostream>
using namespace std;

void ordenar(float arr[][2], int cant);

int main(){
    float cod[3][2]; //col: 0 cod, 1 sueldos 
    ifstream file;
    file.open("SUELDOS.txt");
    if (file.fail()) {
        cout << "Error al abrir el archivo\n";
    }else {
        int i = 0;
    	file >> cod[i][0] >> cod[i][1];
        while (!file.eof()) {
			i++;
    		file >> cod[i][0] >> cod[i][1];
        }
        ordenar(cod, i);
        for(int x = 0; x < 3; x++){
		    cout << cod[x][0] << " " << cod[x][1] << endl;
		}
    }
    return 0;
}

void ordenar(float arr[][2], int cant){
    for(int i = 0; i < cant-1; i++ ){
        for(int j = i+1; j < cant; j++)
            if(arr[i][1] < arr[j][1]){
                for(int k = 0; k < 2; k++){
                    int aux = arr[i][k];
                    arr[i][k] = arr[j][k];
                    arr[j][k] = aux;
                }
            }
    }
}

