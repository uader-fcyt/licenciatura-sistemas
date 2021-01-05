#include <iostream>
#include <fstream>
#include <cstdlib>
#include <string>
using namespace std;

int main(){
    ofstream file;
    string apodo, detenciones;
    cout << "Ingrese apodo y cantidad de detenciones respectivamente\n";
    file.open("./BARRAS.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        cin >> apodo;
        while(apodo != "ZZZ"){
            cin >> detenciones;
            file << apodo << "|" << detenciones << endl;
            cin >> apodo;
        }
        file.close();
    }
    return 0;
}
