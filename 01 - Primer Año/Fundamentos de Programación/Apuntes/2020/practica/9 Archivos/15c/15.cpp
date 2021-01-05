#include <fstream>
#include <iostream>
#include <iterator>
#include <ostream>
#include <string>
using namespace std;
void ordenar(string o_nombre[], string o_apellido[], int o_dni[], float o_notas[][3], int o_read);
void busqueda_binaria(int f_dni[], int f_read, int f_aux, float f_nota3, float f_notas[][3], int &id);
int main(){
    string nombre[100], apellido[100];
    int dni[100], id, read = 0;
    float nota[100][3]; //parciales respectivamente

    for(int i = 0; i < 100; i++){ //inicializacion
        dni[i]= 0;
        nota[i][0] = 0;
        nota[i][1] = 0;
        nota[i][2] = 0;
    }

    ifstream in;
    in.open("FUPRO_2.txt");
    if(in.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        in >> dni[read] >> apellido[read] >> nombre[read];
        while (!in.eof()) {
            in >> nota[read][0] >> nota[read][1];
            read++;
            in >> dni[read] >> apellido[read] >> nombre[read];
        }
        in.close();
        ordenar(nombre, apellido, dni, nota, read);
    }

    cout << "Por favor ingrese DNI a buscar\n";
    int aux, nota3;
    cin >> aux;
    while (aux != 0) {
        cout << "Por favor ingrese nota del tercer parcial\n";
        cin >> nota3;
        busqueda_binaria(dni, read, aux, nota3, nota, id);
        cout << "Por favor ingrese su DNI\n";
        cin >> aux;
    }

    ofstream out;
    out.open("FUPRO_3.txt");
    if(out.fail()){
         cout << "Error al abrir el archivo\n";
    }else{
        for(int i = 0; i < read; i++){
            out << dni[i] << " " << apellido[i] << " " << nombre[i] << endl;
            out << nota[i][0] << " " << nota[i][1] << " " << nota[i][2] << endl;
        }
        out.close();
    }


    return 0;
}

void busqueda_binaria(int f_dni[], int f_read, int f_aux, float f_nota3, float f_notas[][3], int &id){
    int inf = 0;
    int sup = f_read-1;
    int medio = (inf+sup) / 2;
    while(inf <= sup and f_aux != f_dni[medio]){
        if(f_aux < f_dni[medio])
            sup = medio - 1;
        else
            inf = medio + 1;
        medio = (inf + sup) / 2;
    }
    if(inf < sup)
        cout << "Elemento no encontrado\n";
    else {
        f_notas[medio+1][2] = f_nota3;
        id = medio+1;
    }
}

void ordenar(string o_nombre[], string o_apellido[], int o_dni[], float o_notas[][3], int o_read){
    for(int i = 0; i < o_read-1; i++){
        for(int j = i+1; j < o_read; j++){
            if(o_dni[i] > o_dni[j]){

                int aux = o_dni[i];
                o_dni[i] = o_dni[j];
                o_dni[j] = aux;

                string str = o_nombre[i];
                o_nombre[i] = o_nombre[j];
                o_nombre[j] = str;

                str = o_apellido[i];
                o_apellido[i] = o_apellido[j];
                o_apellido[j] = str;

                for(int k = 0; k < 3; k++){
                    float f_aux = o_notas[i][k];
                    o_notas[i][k] = o_notas[j][k];
                    o_notas[j][k] = f_aux;
                }
            }
        }
    }
}
