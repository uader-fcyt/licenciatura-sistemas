#include <iostream>
#include <string>
using namespace std;

int main(){
    string str1, str2;
    cout << "Ingrese cadena 1\n";
    getline(cin, str1);
    cout << "Ingrese cadena 2\n";
    getline(cin, str2);
    int pos;
    cout << "Ingrese posicion para insertar cadena 2 en 1\n";
    cin >> pos;
    bool stop = false;
    while(!stop){
        if(pos > str1.size()){
            cout << "Ingrese posicion para insertar cadena 2 en 1\n";
            cin >> pos;
        }else{
            stop = true;
            str1.insert(pos, str2);
            cout << str1 << endl;
        }
    }
    return 0;
}
