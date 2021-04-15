#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    char vocal;
    cout << "Ingrese una cadena\n";
    getline(cin, str);
    cout << "Ingrese vocal  que reemplazara a las demas\n";
    cin >> vocal;
    int largo = str.size();
    for(int i = 0; i < largo; i++){
        if(str[i] == 'a' or str[i] == 'e' or str[i] == 'i' or str[i] == 'o' or str[i] == 'u')
            str[i] = vocal;
    }
    cout << str << endl;
    return 0;
}
