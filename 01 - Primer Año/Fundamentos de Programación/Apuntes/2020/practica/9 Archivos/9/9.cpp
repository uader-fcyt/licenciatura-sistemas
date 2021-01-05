#include <fstream>
#include <iostream>
using namespace std;

int main(){
    ofstream file;
    int cant_empleados, cant_horas, cant_extra, cod;
    float $_hora;
    file.open("SUELDOS.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else {
        cout << "Ingrese cantidad de empledos y el valor de la hora respectivamente\n";
        cin >> cant_empleados >> $_hora;
        for(int i = 0; i < cant_empleados; i++){
            cout << "Ingrese codigo de empledo, y cantidad de horas normales y extra trabajadas respectivamente\n";
            cin >> cod >> cant_horas >> cant_extra;
            file << cod << " " << cant_horas * $_hora + cant_extra * $_hora * 2 << endl; 
        }
    }
    return 0;
}
