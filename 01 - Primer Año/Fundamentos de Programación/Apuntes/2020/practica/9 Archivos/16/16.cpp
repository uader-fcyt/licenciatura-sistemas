#include <fstream>
#include <iostream>
using namespace std;

int main(){
    int productores, cod_productor[100], hectareasSembradas[100], toneladasCosechadas[100];

    for(int i = 0; i < 100; i++){ //inicializacion
        toneladasCosechadas[i] = 0;
        cod_productor[i] = 0;
        hectareasSembradas[i] = 0;
    }

    cout << "Ingrese cantidad de productores\n";
    cin >> productores;
    for(int i = 0; i < productores; i++){
        cout << "Ingrese codigo de productor\n";
        cin >> cod_productor[i];
        cout << "Ingrese cantidad de hectareas sembradas\n";
        cin >> hectareasSembradas[i];
        cout << "Ingrese cantidad de toneladas cosechadas\n";
        cin >> toneladasCosechadas[i];
    }
    
    ofstream file;
    file.open("censo.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        for (int i = 0; i < productores; i++) {
            file << cod_productor[i] << " " << hectareasSembradas[i] << " " << toneladasCosechadas[i] << endl;
        }
        file.close();
    }

    return 0;
}
