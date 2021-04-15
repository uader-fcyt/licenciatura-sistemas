#include <cstdio>
#include <iomanip>
#include <iostream>
#include <fstream>
#include <cstdlib>
#include <string>
using namespace std;

int main(){
    string mas_detenido;
    int total = 0, cont[4]; // col: 0 -> 1, 1 -> 2-4, 2 -> 5-10, 3 -> +10
    for(int i = 0; i < 4; i++){
        cont[i] = 0;
    }
    ifstream file;
    file.open("./BARRAS.txt");
    if(file.fail())
        cout << "Error al abrir el archivo\n";
    else {
        int detenido_int, max_detenciones = 0;
        string apodo;
        getline(file, apodo, '|');
        while (!file.eof()) {
            file >> detenido_int; 
            if(detenido_int == 1)
                cont[0]++;
            if(detenido_int > 1 and detenido_int < 5)
                cont[1]++;
            if(detenido_int > 4 and detenido_int < 11)
                cont[2]++;
            if(detenido_int > 10)
                cont[3]++;
            total++;
            if(detenido_int > max_detenciones){
                max_detenciones = detenido_int;
                mas_detenido = apodo;
            }
            getline(file, apodo, '|');
        }
        file.close();
    }
    cout << "Detenido:\tIntegrantes:" << endl;
    cout << "1\t\t" << cont[0] << endl;
    cout << "2 - 4\t\t" << cont[1] << endl;
    cout << "5 - 10\t\t" << cont[2] << endl;
    cout << "+10\t\t" << cont[3] << endl;
    cout << "Total de integrantes de la barra: " << total << endl; 
    cout << "Criminal con mas detenciones: " << mas_detenido << endl; 
    return 0;
}
