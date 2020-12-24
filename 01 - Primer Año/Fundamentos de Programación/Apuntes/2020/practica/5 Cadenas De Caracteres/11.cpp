#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    cout << "Ingrese cadena\n";
    getline(cin, str);
    int largo = str.size();
    for(int i = 0; i < largo; i++){
        if(str[i] == ' ')
            str[i] = '-';
        if(str[i] == 'a' or str[i] == 'e' or str[i] == 'i' or str[i] == 'o' or str[i] == 'u')
            str.insert(i+1, "-");
        largo = str.size();
    }
    cout << str;
    return 0;
}
