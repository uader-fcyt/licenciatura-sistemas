#include <fstream>
#include <iostream>
#include <string>
using namespace std;
bool is_seccion(string lec[], string sec, int &ypos, int i);
bool is_clave(string lec[], string clave, int &ypos, int i);
void desplazar(string lec[], int seccionInicio, int &i);

int main(){
    int index = 0, posClave, posSeccion;
    string seccion, clave, valor;
    string lectura[1000];
    cout << "Ingrese seccion, clave y valor respectivamente\n";
    cin >> seccion >> clave >> valor;
    seccion = "[" + seccion + "]";

    ifstream in;
    ofstream out;
    in.open("20.ini");
    if(in.fail()){
        cout << "Error al leer el archivo\n";
    }else{
        getline(in, lectura[index]);
        while(!in.eof()){
            index += 1;
            getline(in, lectura[index]);
        }
        in.close();
    }

    if(is_seccion(lectura, seccion, posSeccion, index)){
        if(is_clave(lectura, clave, posClave, index)){
            int inicio = lectura[posClave].find("=") + 1;
            int fin = lectura[posClave].size() - 1;
            lectura[posClave] = lectura[posClave].replace(inicio, fin, valor);
        }else{
            for(int x = posSeccion+1; x < index; x++){
                string aux = lectura[x];
                if(aux[0] == '['){
                    desplazar(lectura, x, index);          
                    lectura[x] = clave + "=" + valor;
                    x = index;
                }
            }
        }
        out.open("20.ini");
        if(out.fail()){
            cout << "Error al escribir el archivo\n";
        }else{
            for(int i = 0; i < index; i++){
                out << lectura[i] << endl;
            }
            out.close();
        }
    }else{
        out.open("20.ini", ios::app);
        if(out.fail()){
            cout << "Error al escribir el archivo\n";
        }else{
            out << seccion << endl << clave << "=" << valor << endl;
            out.close();
        }
    }
    return 0;
}

bool is_seccion(string lec[], string sec, int &ypos, int i){
    bool encontrado = false;
    for(int x = 0; x < i; x++){
        if(lec[x] == sec){
            encontrado = true;
            ypos = x;
            x = i;
        }
    }
    return encontrado;
}

bool is_clave(string lec[], string clave, int &ypos, int i){
    bool encontrado = false;
    for(int x = 0; x < i; x++){
        int xpos = lec[x].find(clave); 
        if(xpos != -1){
            encontrado = true;
            ypos = x;
            x = i;
        }
    }
    return encontrado;
}

void desplazar(string lec[], int seccionInicio, int &i){
    i += 1;
    for(int x = i; x >= seccionInicio ; x--){
        lec[x] = lec[x-1];
    }
}
