#include <fstream>
#include <iostream>
using namespace std;
void ordenamiento_matriz(float matriz[][13], int cantidadFilas);

int main(){
    float sueldo[25][13]; // cod/mes
    int muestra[25][13];
    float promedio[25][13];
    for(int i = 0; i < 25; i++){
        for(int j = 0; j < 13; j++){
            sueldo[i][j] = 0;
            muestra[i][j] = 0;
            promedio[i][j] = 0;
        }
    }
    int index = 0;
    ifstream file;
    file.open("SUELDOS2019.TXT");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
        exit(1);
    }

    int cod, mes;
    float s;
    file >> cod >> mes >> s;
    while(!file.eof()){
        index++;
        sueldo[cod][mes] += s;
        muestra[cod][mes]++;
        file >> cod >> mes >> s;
    }
    for(int i = 1; i <= 24; i++){
        for(int j = 1; j <=12; j++){
            promedio[i][j] = float(sueldo[i][j]/muestra[i][j]);
        }
    }
    ordenamiento_matriz(promedio, 24);
    for(int j = 1; j <=12; j++){
        cout << "MES " << j << endl;
        cout << "COD PORVINCIA\tSUELDO PROMEDIO\n";
        for(int i = 1; i <= 24; i++){
            cout << i << "\t\t" << promedio[i][j] << endl; 
        }
    }
    file.close();
    return 0;
}

void ordenamiento_matriz(float matriz[][13], int cantidadFilas){
    for(int i = 0; i < cantidadFilas-1; i++){ //i es el indice del elemento anterior
        for(int j = i+1; j < cantidadFilas; j++){ //j es el indice del elemento siguiente
            if(matriz[i][12] > matriz[j][12]){ //orden ASCENDENTE; para orden descendente usar "<"
                for(int k = 1; k <= 12; k++){ //k es el indice de las columnas
                    float aux = matriz[i][k];
                    matriz[i][k] = matriz[j][k];
                    matriz[j][k] = aux;
                }
            }
        }
    }
}
