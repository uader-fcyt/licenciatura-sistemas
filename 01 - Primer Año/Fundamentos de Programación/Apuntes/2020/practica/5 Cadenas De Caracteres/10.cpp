#include <iostream>
using namespace std;

int main(){
    string email;
    bool is_com = false, is_arroba = false, is_space = false;
    cout << "Ingrese email\n";
    cin >> email;
    int largo = email.size();
    string aux = email.substr(largo-4, 4);
    if(aux == ".com")
        is_com = true;
    if(email.find(" ") == -1)
        is_space = true;
    int arroba = email.find("@");
    if(arroba != -1 and arroba >= 1 and arroba < largo-4)
        is_arroba = true;
    if(is_com and is_space and is_arroba)
        cout << "OK\n";
    else
        cout << "Error\n";
    return 0;
}
