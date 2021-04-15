#include <cstdlib>
#include <iomanip>
#include <fstream>
#include <iostream>
using namespace std;

void ordenar(int cod_productor[], int hectareasSembradas[], int toneladasCosechadas[], int productores);

int main(){
    int cod_productor[100], hectareasSembradas[100], toneladasCosechadas[100];
    float avg_rendimiento = 0, rendimiento[100];

    for(int x = 0; x < 100; x++){ //inicializaion
        cod_productor[x] = 0;
        hectareasSembradas[x] = 0;
        toneladasCosechadas[x] = 0;
        rendimiento[x] = 0;
    }

    ifstream in;
    in.open("censo.txt");
    int i = 0;
    if(in.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        in >> cod_productor[i] >> hectareasSembradas[i]  >> toneladasCosechadas[i];
        while(!in.eof()){
            i++;
            in >> cod_productor[i] >> hectareasSembradas[i]  >> toneladasCosechadas[i];
        }
        in.close();
    }

    ordenar(cod_productor, hectareasSembradas, toneladasCosechadas, i);
    for(int x = 0; x < i; x++){
        cout << "COD" << "\t" << "[ha]" << "\t" << "[tn]" << "\t" << "[tn/ha]" << endl;
        rendimiento[x] = toneladasCosechadas[x] / hectareasSembradas[x];
        avg_rendimiento += rendimiento[x];
        cout << cod_productor[x] << "\t" << hectareasSembradas[x] << "\t" << toneladasCosechadas[x] << "\t" << rendimiento[x] << endl;
    }
    avg_rendimiento = avg_rendimiento / i;

    cout << endl;
    ofstream out;
    out.open("rendimientos.txt");
    if(out.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        for(int x = 0; x < i; x++){
            if(rendimiento[x] > avg_rendimiento){
                cout << cod_productor[x] << " " << rendimiento[x] << endl;
            }
        }
        out.close();
    }
    return 0;
}

void ordenar(int cod_productor[], int hectareasSembradas[], int toneladasCosechadas[], int productores){
    for(int i = 0; i < productores-1; i++){
        for(int j = i+1; j < productores; j++ ){
            if(toneladasCosechadas[i] < toneladasCosechadas[j]){

                int aux = toneladasCosechadas[i];
                toneladasCosechadas[i] = toneladasCosechadas[j];
                toneladasCosechadas[j] = aux;

                aux = hectareasSembradas[i];
                hectareasSembradas[i] = hectareasSembradas[j];
                hectareasSembradas[j] = aux;

                aux = cod_productor[i];
                cod_productor[i] = cod_productor[j];
                cod_productor[j] = aux;
            }
        }
    }
}
