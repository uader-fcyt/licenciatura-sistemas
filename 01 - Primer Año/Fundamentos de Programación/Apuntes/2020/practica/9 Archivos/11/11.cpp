#include <fstream>
#include <iostream>
#include <iterator>
#include <string>
using namespace std;

int main(){
    float dolar;
    string descripcion[1000];
    int cod[1000];
    float precio[1000];
    int i = 0;

    ifstream in;
    in.open("PRODUCTOS_EN_DOLARES.TXT");
    if (in.fail()) {
        cout << "Error al abrir el archivo\n";
    }else {
        cout << "Ingrese cotizacion del dolar\n";
        cin >> dolar;
        in >> cod[i];
        while (!in.eof()) {
			in.get();
            getline(in, descripcion[i]);
			in >> precio[i];
            i++;
            in >> cod[i];
        }
        in.close();
    }

    ofstream out;
    out.open("PRODUCTOS_EN_PESOS.txt");
    if (out.fail()) {
        cout << "Error al abrir el archivo\n";
    }else {
        for(int x = 0; x < i; x++){
            out << cod[x] << endl;
            out << descripcion[x] << endl;
            out << precio[x] * dolar << endl;
        }
        out.close();
    }
    return 0;
}
