#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int main(){
    int cant_criaderos, mes, nro_criadero, lana[100][4]; //f: nro_criadero c: tipo_oveja

    for(int i = 0; i < 100; i++){ //inicializacion
        for(int j = 0; j < 4; j++){
            lana[i][j] = 0;
        }
    }
    cout <<"Ingrese cantidad de criaderos\n";
    cin >> cant_criaderos;
    cout <<"Ingrese numero de mes [01-12]\n";
    cin >> mes;
    string str = to_string(mes);
    if(str.size() == 1)
        str = "proveedores_0" + str + ".txt";
    else
        str = "proveedores_" + str + ".txt";

    ofstream file;
    file.open(str);
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        cout <<"Ingrese numero de criadero\n";
        cin >> nro_criadero;
        while(nro_criadero != 999){
            if(nro_criadero != 0 and nro_criadero <= cant_criaderos){
                int tipo_oveja = 0, kg_lana = 0;
                cout << "Ingrese tipo de oveja [1: Merino, 2: Texel, 3: Dorset]\n";
                cin >> tipo_oveja;
                cout << "Ingrese cantidad de lana\n";
                cin >> kg_lana;
                lana[nro_criadero][0] = nro_criadero;
                lana[nro_criadero][tipo_oveja] += kg_lana;
                cout << "Ingrese numero de criadero\n";
                cin >> nro_criadero;
            }
            else{
                cout << "Numero incorrecto\n";
                exit(1);
            }
        }
        for(int i = 1; i <= cant_criaderos; i++){
            if(lana[i][0] != 0){
                file << i << "|" << lana[i][1] << "|" << lana[i][2] << "|" << lana[i][3] << endl;
            }
        }
        file.close();
    }

    return 0;
}
