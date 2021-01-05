#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>
using namespace std;

int main(){
    int total_matriz, mat[16][16], total_verificacion = 0, N, M;
    for(int i = 0; i < 16; i++){
        for(int j = 0; j < 16; j++){
            mat[i][j] = 0;
        }
    }

    ifstream file;
    file.open("MATRIZ.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else {
        int num, i = 0, j = 0;
        file >> N >> M;
        cout << N << " filas por " << M << " columnas:\n";
        while (!file.eof()) {
            file >> num;
            if(j == M){
                i += 1;
                j = 0;
            }
            mat[i][j] = num;
            if(j != M and i != N)
                total_verificacion += mat[i][j];
            j += 1;
            if(i == N){
                file >> num;
                total_matriz = num;
            }
        }
        file.close();
    }
    for(int i = 0; i < N; i++){
        for(int j = 0; j < M; j++){
            cout << mat[i][j] << " ";
        }
        cout << "\n";
    }
    cout << endl << endl;
    if(total_matriz == total_verificacion)
        cout << "Matriz verifica\n";
    else
        cout << "Matriz NO verifica\n";
    cout << total_verificacion << "=" << total_matriz;
    return 0;
}
