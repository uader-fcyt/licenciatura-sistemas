#include <fstream>
#include <iostream>
#include <string>
using namespace std;
bool busqueda_lineal(int bucarEn[][4], int cantidadElementos, int elementoBuscado);

int main(){
    int lana[100][4]; //f: nro_criadero, c: tipo_oveja
    //columna 0 almacena nro_criadero

    for(int i = 0; i < 100; i++){ //inicializacion
        for(int j = 0; j < 4; j++){
            lana[i][j] = 0;
        }
    }

   ifstream file;
   for(int i = 1; i <= 12; i++){
       int nro_criadero, lana1, lana2, lana3;
       string num = to_string(i);
       if(num.size() == 1)
           num = "0" + num;
        string mes = "proveedores_" + num + ".txt";
        file.open(mes);
        if(file.fail()){
            cout << "Error al abrir el archivo " << mes << endl;
        }else{
            string aux;

            getline(file, aux, '|');
            while (!file.eof()) {
                nro_criadero = stoi(aux);

                getline(file, aux, '|');
                lana1 = stoi(aux);

                getline(file, aux, '|');
                lana2 = stoi(aux);

                getline(file, aux, '\n');
                lana3 = stoi(aux);

                lana[nro_criadero][1] += lana1;
                lana[nro_criadero][2] += lana2;
                lana[nro_criadero][3] += lana3;
                lana[nro_criadero][0] = nro_criadero;

                getline(file, aux, '|');
            }
            file.close();
        }
    }

   cout << "Produccion Anual:\n";
    for(int i = 0; i < 100; i++){
        if(lana[i][0] != 0){
            cout << "\tNumero de criadero: " << lana[i][0] << "\n";
            cout << "\tMerino:\t" << lana[i][1] << "\n";
            cout << "\tTexel:\t" << lana[i][2] << "\n";
            cout << "\tDorset:\t" << lana[i][3] << "\n";
        }
    }
    return 0;
}
