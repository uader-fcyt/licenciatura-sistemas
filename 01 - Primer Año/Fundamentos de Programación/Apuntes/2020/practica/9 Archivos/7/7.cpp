#include <cstdlib>
#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>
using namespace std;

int main(){
    int mat[100][100],  total = 0, N, M;
    cout << "Ingrese cantidad de filas y columnas respectivamente\n";
    cin >> N >> M;
    srand(time(NULL));
    for(int i = 0; i < N; i++){
        for(int j = 0; j < M; j++){
            mat[i][j] = rand()%1000;
            total += mat[i][j];
        }
    }  

    ofstream file;
    file.open("MATRIZ.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        file << N << " " << M << endl;
        for(int i = 0; i < N; i++){
            for(int j = 0; j < M; j++){
                file << mat[i][j] << " ";
            }
            if(i != N-1)
                file << "\n";
        }
        file << total;
        file.close();
    }
    return 0;
}
