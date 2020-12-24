#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    cout << "Ingrese cadena de caracteres\n";
    getline(cin, str);
    int inicio = str.find(" ");
    int fin = str.find(" ");
    cout << str.substr(inicio+1, fin);


    return 0;
}
