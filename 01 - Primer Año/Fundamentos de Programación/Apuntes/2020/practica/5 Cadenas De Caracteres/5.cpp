#include <iostream>
#include <string>
using namespace std;

int main(){
    cout << "Ingrese cadena\n";
    string str;
    getline(cin, str);
    int pos;
    pos = str.find("pero");
    while(pos != -1){
        str.replace(pos, 4, "sin embargo");
        pos = str.find("pero");
    }
    cout << str << endl;
    
    return 0;
}
