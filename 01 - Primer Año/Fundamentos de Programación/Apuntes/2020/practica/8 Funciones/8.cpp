#include <iostream>
#include <string>
using namespace std;

void largo(string cadena, int tam, int &palabras);

int main(int argc, char *argv[]) {
	string str; 
	int n, p;
	getline(cin, str);
	n = str.size();
	largo(str, n, p);
	cout << p;
	return 0;
}
						
void largo(string cadena, int tam, int &palabras){
	palabras = 1;
	for(int i = 0; i < tam; i++){
		if(cadena[i] == ' ')
			palabras += 1;
	}
}
