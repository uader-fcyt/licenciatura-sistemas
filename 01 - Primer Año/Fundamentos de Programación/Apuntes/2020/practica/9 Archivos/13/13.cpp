#include <fstream>
#include <ios>
#include <iostream>
using namespace std;

int main(){
    ifstream file;
    int tiempoCompetidor[100];
    int record = 9999, id_record;
	string deporte;

        for(int x = 0; x < 100; x++){
            tiempoCompetidor[x] = 0;
        }

        for(int j = 1; j <= 3; j++){
            if(j == 1){
                deporte = "./NATACION.TXT";
            }else if (j == 2) {
                deporte = "./CARRERA.TXT";
            }else if (j == 3) {
                deporte = "./BICICLETA.TXT";
            }

            ifstream file;
			file.open(deporte);
            if(file.fail()){
                cout << "Error al abrir el archivo\n";
            }else{
                int cod, time, index = 0;
                file >> cod >> time;
                while (!file.eof()){
                    tiempoCompetidor[cod] += time;
                    index += 1;
                    file >> cod >> time;
                }
                file.close();
                for(int x = 0; x < index; x++){
                    if(tiempoCompetidor[x] != 0 and tiempoCompetidor[x] < record){
                        record = tiempoCompetidor[x];
                        id_record = x;
                    }
                }
            }
        }
        cout << "Ganador, codigo " << id_record << " con un tiempo total de " << record << endl;
        return 0;
}
