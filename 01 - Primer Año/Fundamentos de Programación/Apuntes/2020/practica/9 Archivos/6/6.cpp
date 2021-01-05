#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>
using namespace std;

int main(){
    string str;
    int fin = 0, cod, cant_multas[24], total = 0;
    for(int i = 0; i < 24; i++){
        cant_multas[i] = 0;
    }
    ifstream file;
    file.open("./PROVINCIAS.txt");
    if(file.fail())
        cout << "Error al abrir el archivo\n";
    else{
        cout << "Ingrese codigo de provincia\n";
        cin >> cod;
        while(cod != 99) {
            int cant;
            cout << "Ingrese cantidad de multas\n";
            cin >> cant;
            total += cant;
            cant_multas[cod] += cant;
            cout << "Ingrese codigo de provincia\n";
            cin >> cod;
        }
        cout << "Nombre de la provincia\tCantidad de multas\n";
        getline(file, str);
        while(!file.eof()){
            int largo = str.size();
            string aux_prov = str.substr(0, largo-2);
            string aux_cod = str.substr(largo-2, largo);
            int aux_int_cod = stoi(aux_cod);
            cout << aux_prov << "\t\t\t" << cant_multas[aux_int_cod] << endl;
            getline(file, str);
            fin++;
            }
        cout << "TOTAL: " << total << endl;
        file.close();
    } 
    return 0;
}
