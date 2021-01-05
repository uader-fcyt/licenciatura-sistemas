#include <iostream>
#include <fstream>
#include <cstdlib>
#include <iterator>
#include <string>
using namespace std;

int main(){
    ofstream file;
    file.open("./PROVINCIAS.txt");
    if(file.fail())
        cout << "Error al abrir el archivo\n";
    else{
        for(int i = 0; i < 24; i++){
            string provincia, cod, aux = "";
            cout << "Ingrese nombre de provincia " << i+1 << endl;
            getline(cin, provincia);
            aux = provincia + " ";
            file << aux << i << endl;
        }
        file.close();
    }
    return 0;
}



