#include <fstream>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <ostream>
using namespace std;

int transparencia(int t_cont[][13], int col, int &t_cod, int &t_mes);

int main(){
    int cont[25][13];
    float sueldos[25][13];
    float avg[25][13];

    for(int i = 0; i < 25; i++){ //iniciaizacion
        for(int j = 0; j < 13; j++){
            cont[i][j] = 0;
            sueldos[i][j] = 0;
            avg[i][j] = 0;
        }
    }

    ifstream file;
    file.open("SUELDOS2019.TXT");
    int cod, mes, index = 0;
    float sueldo;
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
        exit(1);
    }
    file >> cod >> mes >> sueldo;
    while(!file.eof()){
        cont[cod][mes] += 1;
        sueldos[cod][mes] += sueldo;
        index++;
        file >> cod >> mes >> sueldo;
    }
    file.close();
   
//punto 1
    cout << "COD";
    for(int i = 1; i <= 12; i++){
        cout << setw(15) << i;
    }
    cout << endl;
    for(int i = 1; i <= 24; i++){
        for(int j = 1; j <= 12; j++){
            cout << i << setw(15) << fixed << setprecision(2) << sueldos[i][j] / cont[i][j];
        }
        cout << endl;
    }
    cout << endl;

//punto 2
    for(int i = 1; i <= 24; i++){
        int aumento = 0;
        aumento = sueldos[i][12] * 100 / sueldos[i][1];
        if(sueldos[i][1] > sueldos[i][12])
            aumento *= -1;
        cout << "COD " << i << ": " << aumento << "%" << endl;
    }

//punto 3
    int t_cod = 0, t_mes = 0, d;
    d = transparencia(cont, 13, t_cod, t_mes);
    cout << endl << "Provincia: " << t_cod << " Mes: " << t_mes << " con " << d << " datos\n";
    return 0;
}

int transparencia(int t_cont[][13], int col, int &t_cod, int &t_mes){
    int dato = 9999;
    for(int i = 1; i <= 24; i++){
        for(int j =1; j <= 12; j++){
            if(t_cont[i][j] < dato){
                dato = t_cont[i][j];
                t_cod = i;
                t_mes = j;
            }
        }
    }
    return dato;
}
