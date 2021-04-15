#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;

int main(int argc, char *argv[]) {
    int documento[100];
    float monto_mensual[100];
    int dia_contratacion[100];
    int index = 0;

	ifstream file;
	file.open("abono_futbol.txt");
	if(file.fail()){
		cout << "Error al abrir el archivo\n";
		exit(1);
	}
	cout << "Ingrese cantidad de dias del mes actual\n";
	int dias;
	cin >> dias;

    file >> documento[index];
    file >> monto_mensual[index];
    file >> dia_contratacion[index];
    while (!file.eof()) {
       index++;
        file >> documento[index];
        file >> monto_mensual[index];
        file >> dia_contratacion[index];
    }
    cout << "ABONOS PROPORCIONALES\n";
    cout << "DOCUMENTO DEL ABONADO\tMONTO A COBRAR\n";
    for(int i = 0; i < index; i++){
        cout << documento[i] << "\t\t" << float((dias - dia_contratacion[i])*monto_mensual[i]) << endl;
    }
	return 0;
}
