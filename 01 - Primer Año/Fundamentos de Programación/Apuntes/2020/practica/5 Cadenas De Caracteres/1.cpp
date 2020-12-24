#include <iostream>
#include <string>
using namespace std;

int main(){
    string str, str2, str3;
    cout << "Ingrese cadena 1\n";
    getline(cin, str);
    cout << "Ingrese cadena 2\n";
    getline(cin, str2);
    cout << "Ingrese cadena 3\n";
    getline(cin, str3);
    cout << endl << endl;
    if(str < str2 and str < str3){
        cout << str << endl;
        if(str2 < str3)
            cout << str2 << endl << str3 << endl;
        else
            cout << str3 << endl << str2 << endl;
    }else if(str2 < str and str2 < str3){
        cout << str2 << endl;
        if(str < str3)
            cout << str << endl << str3 << endl;
        else
            cout << str3 << endl << str2 << endl;
    }else{
        cout << str3 << endl;
        if(str < str2)
            cout << str << endl << str2 << endl;
        else
            cout << str2 << endl << str << endl;
    }
    return 0;
}
