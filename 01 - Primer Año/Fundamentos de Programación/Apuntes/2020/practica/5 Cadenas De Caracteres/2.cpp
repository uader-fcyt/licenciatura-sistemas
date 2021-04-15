#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    int inicio, fin;
    cout << "Ingrese cadena\n";
    getline(cin, str);
    cout << "Ingrese posicion inicial y final respectivamente para recortar\n";
    cin >> inicio >> fin;
    str = str.substr(inicio, fin);
    cout << str;
    return 0;
}
