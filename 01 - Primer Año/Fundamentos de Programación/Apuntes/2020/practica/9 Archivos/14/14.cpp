#include <fstream>
#include <iostream>
#include <iterator>
#include <ostream>
#include <string>
using namespace std;

int main(){
    string nombre, apellido;
    int dni;

    ofstream file;
    file.open("FUPRO_2.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        cout << "Por favor ingrese su DNI\n";
        cin >> dni;
        while (dni != 0) {
            float nota1 = 0, nota2 = 0;
            cout << "Por favor ingrese su apellido\n";
            cin >> apellido;
            cout << "Por favor ingrese su nombre\n";
            cin >> nombre;
            cout << "Por favor ingrese nota del primer parcial\n";
            cin >> nota1;
            cout << "Por favor ingrese nota del segundo parcial\n";
            cin >> nota2;
            file << dni << " " << apellido << " " << nombre << endl;
            file << nota1 << " " << nota2 << " " << endl;
            cout << "Por favor ingrese su DNI\n";
            cin >> dni;
        }
        file.close();
    }

    return 0;
}
