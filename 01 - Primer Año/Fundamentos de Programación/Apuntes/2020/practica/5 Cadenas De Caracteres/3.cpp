#include <iostream>
#include <string>
using namespace std;

int main(){
    string str1, str2, str3;
    cout << "Ingrese cadena 1\n";
    getline(cin, str1);
    cout << "Ingrese cadena 2\n";
    getline(cin, str2);
    cout << "Ingrese cadena 3\n";
    getline(cin, str3);
    cout << endl << endl;
	if(str1.find(str2) != -1)
	   cout << "Cadena 2 en 1" << endl;
	if(str2.find(str1) != -1)
	   cout << "Cadena 1 en 2" << endl;
	
	if(str3.find(str2) != -1)
	   cout << "Cadena 2 en 3" << endl;
	if(str2.find(str3) != -1)
	   cout << "Cadena 3 en 2" << endl;
	
	if(str1.find(str3) != -1)
	   cout << "Cadena 3 en 1" << endl;
	if(str3.find(str1) != -1)
	   cout << "Cadena 1 en 3" << endl;
    
    return 0;
}
