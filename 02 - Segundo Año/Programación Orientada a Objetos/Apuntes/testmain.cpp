#include <unittest++/UnitTest++.h>
#include "main.cpp"

TEST(sumar) {
    fraccion a, b, resultado;
    a.numerador = 5;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 3;
    resultado = simplificar(suma(a,b));
    CHECK(resultado.numerador == 13);
    CHECK(resultado.denominador == 3);
}

TEST(sumar2) {
    fraccion a, b, resultado;
    a.numerador = 13;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 5;
    resultado = simplificar(suma(a,b));
    CHECK(resultado.numerador == 89);
    CHECK(resultado.denominador == 15);
}

TEST(resta) {
    fraccion a, b, resultado;
    a.numerador = 5;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 3;
    resultado = simplificar(resta(a,b));
    CHECK(resultado.numerador == -1);
    CHECK(resultado.denominador == 1);
}

TEST(resta2) {
    fraccion a, b, resultado;
    a.numerador = 13;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 5;
    resultado = simplificar(resta(a,b));
    CHECK(resultado.numerador == 41);
    CHECK(resultado.denominador == 15);
}

TEST(multiplicacion) {
    fraccion a, b, resultado;
    a.numerador = 5;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 3;
    resultado = simplificar(multiplicacion(a,b));
    CHECK(resultado.numerador == 40);
    CHECK(resultado.denominador == 9);
}

TEST(multiplicacion2) {
    fraccion a, b, resultado;
    a.numerador = 13;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 5;
    resultado = simplificar(multiplicacion(a,b));
    CHECK(resultado.numerador == 104);
    CHECK(resultado.denominador == 15);
}


TEST(dividir) {
    fraccion a, b, resultado;
    a.numerador = 5;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 3;
    resultado = simplificar(dividir(a,b));
    CHECK(resultado.numerador == 5);
    CHECK(resultado.denominador == 8);
}

TEST(dividir2) {
    fraccion a, b, resultado;
    a.numerador = 13;
    a.denominador = 3;
    b.numerador = 8;
    b.denominador = 5;
    resultado = simplificar(dividir(a,b));
    CHECK(resultado.numerador == 65);
    CHECK(resultado.denominador == 24);
}

TEST(simplificar) {
    fraccion a, resultado;
    a.numerador = 13;
    a.denominador = 13;
    resultado = simplificar(a);
    CHECK(resultado.numerador == 1);
    CHECK(resultado.denominador == 1);
}


TEST(simplificar2) {
    fraccion a, resultado;
    a.numerador = 13 * 5;
    a.denominador = 13 * 8;
    resultado = simplificar(a);
    CHECK(resultado.numerador == 5);
    CHECK(resultado.denominador == 8);
}

TEST(equivalentes) {
    fraccion a, resultado;
    a.numerador = 13;
    a.denominador = 13;
    resultado = simplificar(a);
    CHECK(equivalentes(a ,resultado));
}


TEST(equivalentes2) {
    fraccion a, resultado;
    a.numerador = 13 * 5;
    a.denominador = 13 * 8;
    resultado = simplificar(a);
    CHECK(equivalentes(a ,resultado));
}

TEST(equivalentes3) {
    fraccion a, b;
    a.numerador =  5;
    a.denominador =  8;
    b.numerador = 13;
    a.denominador = 13 * 8;
    CHECK(!equivalentes(a ,b));
}

TEST(propia) {
    fraccion a;
    a.numerador = 3;
    a.denominador = 13;
    CHECK(propia(a));
}

TEST(impropia) {
    fraccion a;
    a.numerador = 13;
    a.denominador = 3;
    CHECK(!propia(a));
}

TEST(impropia2) {
    fraccion a;
    a.numerador = 13;
    a.denominador = 13;
    CHECK(!propia(a));
}

TEST(inversa) {
    fraccion a;
    a.numerador = 5;
    a.denominador = 3;
    fraccion resultado = inversa(a);
    CHECK(resultado.numerador == 3);
    CHECK(resultado.denominador == 5);
}

TEST(inversa2) {
    fraccion a;
    a.numerador = 5;
    a.denominador = 3;
    fraccion b = inversa(a);
    fraccion resultado = simplificar(multiplicacion(a,b));
    CHECK(resultado.numerador == 1);
    CHECK(resultado.denominador == 1);
}

TEST(decimal) {
    fraccion a;
    a.numerador = 13;
    a.denominador = 10;
    CHECK(decimal(a));
}


TEST(decimal2) {
    fraccion a;
    a.numerador = 13;
    a.denominador = 14;
    CHECK(!decimal(a));
}

TEST(mayor) {
    fraccion a,b;
    a.numerador = 13;
    a.denominador = 2;
    b.numerador = 13;
    b.denominador = 3;
    CHECK(mayor(a,b));
}


TEST(menor) {
    fraccion a,b;
    a.numerador = 1;
    a.denominador = 2;
    b.numerador = 13;
    b.denominador = 3;
    CHECK(!mayor(a,b));
}

TEST(igual) {
    fraccion a,b;
    a.numerador = 1;
    a.denominador = 2;
    b.numerador = 6;
    b.denominador = 12;
    CHECK(!mayor(a,b));
}

int main()
{
    return UnitTest::RunAllTests();
}
