#include <iostream>
#include <fstream>
#include <cstdlib>
using namespace std;
void ordenar(double arr[][2]);
int main(){
    int i = 0;
    double vec[1000][2];
    ifstream file;
    file.open("./text.txt");
    if(file.fail())
        cout << "Error al abrir el archivo\n";
    else {
        while (!file.eof()) {
            file >> vec[i][0] >> vec[i][1];
        }
        ordenar(vec);
        for(int i = 0; i < 1000; i++){
                cout << vec[i][0] << " " << vec[i][1] << endl;
        }
        file.close();
    }
    return 0;
}

 void ordenar(double arr[][2]){
    for (int i = 0; i < 1000-1; i++) {
        for(int j = i+1; j < 1000; j++){
            if(arr[i][1] < arr[j][1]){
                for(int k = 0; k < 2; k++){
                    double aux = arr[i][k];
                    arr[i][k] = arr[j][k];
                    arr[j][k] = aux;
                }
            }
        }
    }
}
