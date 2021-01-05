#include <fstream>
#include <iostream>
using namespace std;

int main(){
    ofstream file;
    file.open("empleados.csv");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        int dni;
        char sexo;
        float sueldo;
        string cuil;

        cout << "Ingrese DNI\n";
        cin >> dni;
        while(dni != 0){
            cout << "Ingrese el sexo [M/F]\n";
            cin >> sexo;
            cout << "Ingrese sueldo\n";
            cin >> sueldo;
            cin.get();
            cout << "Ingrese CUIL de la forma PP-DDDDDDDD-V\n";
            cin >> cuil;
            file << dni << ";" << sexo << ";" << sueldo << ";" << cuil << endl;
            cout << "Ingrese DNI\n";
            cin >> dni;
        }
        file.close(); 
    }
    return 0;
}
