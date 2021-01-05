#include <fstream>
#include <iostream>
#include <ostream>
#include <string>
using namespace std;
bool validar_cuil(string s, string d, string c); //sexo, documento, cuil;

int main(){
    int index = 0;
    string dni, sexo, salario, cuil;
    float salario_mujer = 0, salario_hombre = 0;
    int muestra_hombre = 0, muestra_mujer = 0;
    ifstream file;
    file.open("EMPLEADOS.CSV");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        getline(file, dni, ';');
        while (!file.eof()) {
            getline(file, sexo, ';');
            getline(file, salario, ';');
            getline(file, cuil);
            if(sexo == "M"){
                muestra_mujer += 1;
                salario_mujer += stof(salario); 
            }else{
                muestra_hombre +=1;
                salario_hombre += stof(salario);
            }
            if(!validar_cuil(sexo, dni, cuil))
                cout << "CUIL INCORRECTO: " << cuil << endl;
            index++;
            getline(file, dni, ';');
        }
        file.close();
        cout << "AVG sueldos hombres/mujeres: " << float(salario_hombre/muestra_hombre) << "/" << float(salario_mujer/muestra_mujer) << endl;
    }
    return 0;
}

bool validar_cuil(string s, string d, string c){ //sexo, documento, cuil;
    bool ok_sexo = false;
    bool ok_dni = false;
    string aux;
    int search;

    search = c.find("-");
    aux = c.substr(0, search);
    c = c.replace(0, search+1, "");
    if(aux == "20" and s == "M")
        ok_sexo = true;
    else if(aux == "27" and s == "F")
        ok_sexo = true;
    else
        ok_sexo = false;

    search = c.find("-");
    aux = c.substr(0, search);
    c = c.replace(0, search+1, "");
    if(aux == d)
        ok_dni = true;
    else
        ok_dni = false;
    return ok_dni and ok_sexo;
}
