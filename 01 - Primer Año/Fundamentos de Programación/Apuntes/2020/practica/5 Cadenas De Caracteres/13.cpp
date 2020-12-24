#include <iostream>
#include <string>
using namespace std;

int main(){
    string mainstr;
    char word;
    int pos;

    cout << "Ingrese cadena de caracteres\n";
    getline(cin, mainstr);
    do{
        int cont = 0;
        for(int x = 1; x <= mainstr.size(); x++){
            if(x%10 == 0)
                cont += 1;
            cout << cont;
        }
        cout << endl;
        cont = 1;
        for(int x = 1; x <= mainstr.size(); x++){
            if(cont == 10)
                cont = 0;
            cout << cont;
            cont += 1;
        }
        cout << "\nIngrese posicion (1-N) a reemplazar\n";
        cin >> pos;
        if(pos != 0){
            cout << "Ingrese caracter\n";
            cin >> word;
            mainstr[pos-1] = word;
            cout << mainstr << endl;
        }
    }while(pos != 0);
    return 0;
}
