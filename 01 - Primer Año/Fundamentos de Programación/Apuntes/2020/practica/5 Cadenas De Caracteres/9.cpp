#include <iostream>
#include <string>
using namespace std;
 int main(){
     string nombre, apellido, nacimiento, facultad, email;
     cout << "Ingrese nombre\n";
     cin >> nombre;
     cout << "Ingrese apellido\n";
     cin >> apellido;
     cout << "Ingrese fecha de nacimiento de la forma DD/MM/AAAA\n";
     cin >> nacimiento;
     cout << "Ingrese facultad\n";
     cin >> facultad;
     string dia = nacimiento.substr(0,2);
     string mes = nacimiento.substr(3,2);
     cout << mes << endl << endl; 
     email = nombre[0] + apellido + dia + mes + "@" + facultad + ".edu.ar";
     cout << email << endl;
     return 0;
 }
