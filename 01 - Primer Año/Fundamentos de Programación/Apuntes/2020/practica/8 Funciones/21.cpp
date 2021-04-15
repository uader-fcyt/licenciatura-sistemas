#include <iostream>
#include <string>
using namespace std;

void calc_billetes(int id, int codSucursal_empleado[], int billete_sucursal[][4], float sueldo_empleado[][100]);

int main(){
    int billete_sucursal[6][4]; //b100, b50, b20, b10
    int cod_sucursal[6];
    int codSucursal_empleado[100];
    string nombre_sucursal[6];
    string nombre_empleado[100];
    float sueldo_empleado[6][100], total_sucursal[6];

    for(int i = 0; i < 6; i++){
        total_sucursal[i] = 0;
        for(int j = 0; j < 4; j++){
            billete_sucursal[i][j] = 0;
        }
    }

    for(int i = 1; i < 6; i++){
    cout << "Ingrese codigo de sucursal y nombre respectivamente\n";
    cin >> cod_sucursal[i];
    cin.get();
    getline(cin, nombre_sucursal[i]);
    }

    int id = 0;
    cout << "Ingrese nombre de empleado\n";
    string nombre;
    getline(cin, nombre);
    while (nombre != "zzz") {
        nombre_empleado[id] = nombre;
        cout << "Ingrese codigo de sucursal\n";
        int codigo;
        cin >> codigo;
        codSucursal_empleado[id] = codigo;
        cout << "Ingrese sueldo\n";
        cin >> sueldo_empleado[codigo][id];
        total_sucursal[codigo] += sueldo_empleado[codigo][id];
        id++;
        cout << "Ingrese nombre de empleado\n";
        cin.get();
        getline(cin, nombre);
    }
    calc_billetes(id, codSucursal_empleado, billete_sucursal, sueldo_empleado);
    for(int i = 1; i <= 5; i++){
        cout << nombre_sucursal[i] << ":\n";
        cout << "\t" << billete_sucursal[i][0] << " de 100\n";
        cout << "\t" << billete_sucursal[i][1] << " de 50\n";
        cout << "\t" << billete_sucursal[i][2] << " de 20\n";
        cout << "\t" << billete_sucursal[i][3] << " de 10\n";
        cout << "TOTAL:\t" << total_sucursal[i] << "\n";
    }
    return 0;
}

void calc_billetes(int id, int codSucursal_empleado[], int billete_sucursal[][4], float sueldo_empleado[][100]){
    int cociente, b100, b50, b20, b10;
    for(int i = 0; i < id; i++){
         int codigo = codSucursal_empleado[i];
         cociente = sueldo_empleado[codigo][i];
         b100 = cociente / 100;
         cociente = cociente % 100;
         b50 = cociente / 50; 
         cociente = cociente % 50;
         b20 = cociente / 20; 
         cociente = cociente % 20;
         b10 = cociente / 10;
		 billete_sucursal[codigo][0] += b100;
		 billete_sucursal[codigo][1] += b50;
		 billete_sucursal[codigo][2] += b20;
		 billete_sucursal[codigo][3] += b10;
    }
}
