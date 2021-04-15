#include <iostream>
#include <string>
using namespace std;

int main(int argc, char *argv[]) {
	string str, mainstr;
	unsigned int counter = 0;
	bool flag = true;
	
	getline(cin, mainstr);
	getline(cin, str);
	
	while(flag){
		int found = mainstr.find(str); 
		if(found == -1){
			flag = false;
		}else{
			counter += 1;
			mainstr = mainstr.replace(0, ++found, "");
		}
		
	}
	
	cout << counter;
	return 0;
}

