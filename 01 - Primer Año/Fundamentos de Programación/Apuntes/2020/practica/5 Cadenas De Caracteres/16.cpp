#include <iostream>
#include <string>
using namespace std;
string str;
unsigned int desde, hasta, large;

int main(int argc, char *argv[]) {
	cout << "Ingrese su cadena: " << endl;
	getline(cin, str);
    cout << "Increse las posiciones desde, hasta respectivamente\n";
    cin >> desde >> hasta;
    for(int i = desde; i < hasta; i++){
        str[i] = 'x';
    }
	cout << str;
}
