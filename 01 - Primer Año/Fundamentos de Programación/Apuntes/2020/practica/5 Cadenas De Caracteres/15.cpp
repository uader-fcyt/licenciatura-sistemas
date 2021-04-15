#include <iostream>
using namespace std;

int main(){
    string mainstr, str2, str3;
    cout << "Ingrese cadena 1\n";
    getline(cin, mainstr);
    cout << "Ingrese cadena 2\n";
    getline(cin, str2);
    cout << "Ingrese cadena 3\n";
    getline(cin, str3);
    mainstr = "";
    while(str2 != ""){
        string aux;
        int space = str2.find(" ");
        int large = str2.size();
        if(space != -1){
            aux = str2.substr(0, space);
            str2 = str2.replace(0, ++space, "");
        }else{
            aux = str2;
            str2 = str2.replace(0, large, "");
        }
        bool flag = true;
        while(flag){
            int found = str3.find(aux);
	        if(found == -1){
			    flag = false;
		    }else{
		        mainstr += (aux + " ");
                str3 = str3.replace(0, ++found, "");
		    }
        }
    }
    cout << mainstr << endl;
    return 0;
}
