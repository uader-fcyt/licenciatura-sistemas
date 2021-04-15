#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    cout << "Ingrese una cadena\n";
    getline(cin, str);
    int pos = str.find(" ");
    int cont_espacios = 0;
    int largo = str.size();
    if(str[largo-1] == ' ')
        cont_espacios -= 1;        
    while(pos != -1){
        cont_espacios += 1;
        pos = str.find(" ");
        if(pos != -1)
            str[pos] = '.';
    }
    cout << "Cantidad de palabras: " << cont_espacios << endl;
    cout << "Letra inicial: " << str[0] << endl;
    cout << "Letra final: " << str[largo-1] << endl;
    return 0;
}
