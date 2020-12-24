#include <iostream>
#include <string>
using namespace std;

int main(){
    int largo0, largo1, largo2;
    string str0, str1, str2;
    cout << "Ingrese cadena 1, 2 y 3 respectivamente\n";
    getline(cin, str0);
    getline(cin, str1);
    getline(cin, str2);
    largo0 = str0.size();
    largo1 = str1.size();
    largo2 = str2.size();
    if(largo0 < largo1 and largo0 < largo2){
        cout << str0 << endl;
        if(largo1 < largo2)
            cout << str1 << endl << str2 << endl;
        else
            cout << str2 << endl << str1 << endl;
    }else if(largo1 < largo0 and largo1 < largo2){
        cout << str1 << endl;
        if(largo0 < largo2)
            cout << str0 << endl << str2 << endl;
        else
            cout << str2 << endl << str0 << endl;
    }else{
        cout << str2 << endl;
        if(largo0 < largo1)
            cout << str0 << endl << str1 << endl;
        else
            cout << str1 << endl << str0 << endl;
    }
    return 0;
}
